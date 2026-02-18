import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetFile = path.resolve(__dirname, '../src/routes/routesConfig.jsx');

try {
    const content = fs.readFileSync(targetFile, 'utf8');
    const lines = content.split('\n');
    const importLines = lines.filter(line => line.trim().startsWith('import') && !line.includes('react-router-dom'));

    // Normalize spaces for comparison
    const normalizedImports = importLines.map(line => line.replace(/\s+/g, ' ').trim());

    const seen = new Set();
    const duplicates = [];

    normalizedImports.forEach((line, index) => {
        if (seen.has(line)) {
            duplicates.push({ line, index });
        }
        seen.add(line);
    });

    if (duplicates.length > 0) {
        console.error('❌ FATAL: Duplicate imports detected in routesConfig.jsx');
        duplicates.forEach(d => {
            console.error(`   Duplicate: "${d.line}"`);
        });
        process.exit(1);
    }

    console.log('✅ Route config validation passed: No duplicate imports.');
    process.exit(0);

} catch (err) {
    console.error('❌ Error reading routesConfig.jsx:', err.message);
    process.exit(1);
}
