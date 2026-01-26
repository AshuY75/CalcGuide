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

const extractedSeo = {};

const jsxFiles = findJsxFiles(PAGES_DIR);

jsxFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const titleMatch = content.match(/title=["'](.*?)["']/);
    const descMatch = content.match(/description=["'](.*?)["']/);
    const keywordsMatch = content.match(/keywords?=["'](.*?)["']/);
    const pathMatch = content.match(/canonicalPath=\{ROUTES\.(.*?)\}/);
    const directPathMatch = content.match(/canonicalPath=["'](.*?)["']/);
    const directCanonicalMatch = content.match(/canonical=["'](.*?)["']/);

    let title = titleMatch ? titleMatch[1] : '';
    let description = descMatch ? descMatch[1] : '';
    let keywords = keywordsMatch ? keywordsMatch[1] : '';

    // Fallback search for MetaManager props if SeoHead didn't match cleanly
    if (!title || !description) {
        // Simple regex for MetaManager or Helmet
        const mTitle = content.match(/<title>(.*?)<\/title>/);
        if (mTitle) title = mTitle[1];
    }

    if (title || description) {
        extractedSeo[path.basename(file)] = { title, description, keywords };
    }
});

console.log(JSON.stringify(extractedSeo, null, 2));
