import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PAGES_DIR = path.join(__dirname, 'src/pages');

function findJsxFiles(dir, files = []) {
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            findJsxFiles(fullPath, files);
        } else if (file.endsWith('.jsx')) {
            files.push(fullPath);
        }
    }
    return files;
}

const jsxFiles = findJsxFiles(PAGES_DIR);

const SEO_PATTERNS = [
    /<SeoHead[\s\S]*?\/>/g,
    /<MetaManager[\s\S]*?\/>/g,
    /<Helmet[\s\S]*?>[\s\S]*?<\/Helmet>/g
];

const IMPORT_PATTERNS = [
    /import SeoHead from ['"].*?SeoHead['"];?\s?/g,
    /import MetaManager from ['"].*?MetaManager['"];?\s?/g,
    /import {?\s?Helmet\s?}? from ['"]react-helmet-async['"];?\s?/g
];

jsxFiles.forEach(file => {
    // Avoid cleaning up components that are NOT pages if they're in the pages dir (though they shouldn't be)
    // Actually, I'll just clean everything in src/pages as they are all components being wrapped by RouteWrapper anyway

    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    SEO_PATTERNS.forEach(pattern => {
        content = content.replace(pattern, '');
    });

    IMPORT_PATTERNS.forEach(pattern => {
        content = content.replace(pattern, '');
    });

    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log(`Cleaned SEO tags from ${path.basename(file)}`);
    }
});
