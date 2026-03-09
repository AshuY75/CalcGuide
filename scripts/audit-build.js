import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, '..', 'dist', 'static');

const results = {
    pagesAudited: 0,
    errors: [],
    warnings: [],
};

function getAllFiles(dirPath, arrayOfFiles) {
    if (!fs.existsSync(dirPath)) return [];
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
        } else {
            if (file.endsWith('.html')) {
                arrayOfFiles.push(path.join(dirPath, file));
            }
        }
    });

    return arrayOfFiles;
}

const htmlFiles = getAllFiles(DIST_DIR);

htmlFiles.forEach(file => {
    results.pagesAudited++;
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(DIST_DIR, file).replace(/\\/g, '/');

    // 1. Check SEO Metadata (Regex for flexibility)
    const hasTitle = /<title[^>]*>/.test(content);
    const hasDescription = /<meta[^>]*name=["']description["']/.test(content);
    const hasCanonical = /<link[^>]*rel=["']canonical["']/.test(content);

    if (!hasTitle) {
        results.errors.push(`[${relativePath}] Missing <title>`);
    }
    if (!hasDescription) {
        results.errors.push(`[${relativePath}] Missing meta description`);
    }
    if (!hasCanonical) {
        results.warnings.push(`[${relativePath}] Missing canonical link`);
    }

    // 2. Check for "Thin Content" (less than 1500 chars)
    if (content.length < 1500) {
        results.warnings.push(`[${relativePath}] Thin content suspected (${content.length} bytes)`);
    }

    // 3. Check Internal Links (Exclude typical static assets)
    const linkRegex = /href=["'](\/[^"']*)["']/g;
    const assetExtensions = ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.woff', '.woff2', '.webp', '.json', '.xml', '.txt'];

    let match;
    while ((match = linkRegex.exec(content)) !== null) {
        const link = match[1];
        if (link.startsWith('/') && !link.startsWith('//')) {
            // Normalize link for local file check (strip trailing slash for path.join)
            const cleanLink = link.split('?')[0].split('#')[0].replace(/\/$/, '');

            // Skip asset check if it has a common asset extension
            const isAsset = assetExtensions.some(ext => cleanLink.toLowerCase().endsWith(ext));
            if (isAsset) continue;

            let targetPath = path.join(DIST_DIR, cleanLink);

            let exists = fs.existsSync(targetPath);
            if (!exists) {
                // Try index.html convention
                targetPath = path.join(DIST_DIR, cleanLink, 'index.html');
                exists = fs.existsSync(targetPath);
            }

            if (!exists) {
                const context = content.substring(Math.max(0, match.index - 50), Math.min(content.length, match.index + link.length + 50));
                results.errors.push(`[${relativePath}] Broken internal link: ${link} | Context: ...${context.replace(/\s+/g, ' ')}...`);
            }
        }
    }
});

console.log(`\n🕵️  Audit Report for ${results.pagesAudited} pages:`);
console.log(`----------------------------------------`);
if (results.errors.length === 0 && results.warnings.length === 0) {
    console.log(`✅ Perfect score! All pages passed integrity checks.`);
} else {
    if (results.errors.length > 0) {
        console.log(`❌ ${results.errors.length} Errors Found:`);
        results.errors.forEach(e => console.log(`   - ${e}`));
    }
    if (results.warnings.length > 0) {
        console.log(`⚠️  ${results.warnings.length} Warnings Found:`);
        results.warnings.forEach(w => console.log(`   - ${w}`));
    }
}

if (results.errors.length > 0) {
    process.exit(1);
} else {
    process.exit(0);
}
