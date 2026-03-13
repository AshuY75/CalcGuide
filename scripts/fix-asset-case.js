import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, '..', 'dist', 'static');
const ASSETS_DIR = path.join(DIST_DIR, 'assets');

if (!fs.existsSync(ASSETS_DIR)) {
    console.log('No assets directory found. Skipping case fix.');
    process.exit(0);
}

// 1. Get all files in assets and map them to lowercase versions
const assets = fs.readdirSync(ASSETS_DIR);
const assetMap = {};

assets.forEach(file => {
    const lower = file.toLowerCase();
    if (lower !== file) {
        const oldPath = path.join(ASSETS_DIR, file);
        const tempPath = path.join(ASSETS_DIR, file + '.tmp');
        const newPath = path.join(ASSETS_DIR, lower);
        
        console.log(`Renaming: ${file} -> ${lower}`);
        // First rename to temp to overcome Windows case-insensitivity
        fs.renameSync(oldPath, tempPath);
        fs.renameSync(tempPath, newPath);
    }
    assetMap[file] = lower;
});

// 2. Function to update references in a file
function updateReferences(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    Object.keys(assetMap).forEach(oldName => {
        const newName = assetMap[oldName];
        if (oldName !== newName) {
            // Use regex to find references to the asset. 
            // We look for the exact filename, possibly preceded by /assets/
            const regex = new RegExp(oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
            if (regex.test(content)) {
                content = content.replace(regex, newName);
                modified = true;
            }
        }
    });

    if (modified) {
        console.log(`Updated references in: ${path.relative(DIST_DIR, filePath)}`);
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

// 3. Find all files that might contain asset references
function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.html', '.js', '.css', '.json', '.xml'].includes(ext)) {
                updateReferences(fullPath);
            }
        }
    });
}

console.log('Enforcing lowercase asset filenames...');
processDirectory(DIST_DIR);
console.log('Done.');
