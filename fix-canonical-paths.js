// Quick fix script to add canonicalPath to all SeoHead components
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Map component names to their canonical paths
const pathMappings = {
    'EMILanding': '/emi-calculator-home-loan-india',
    'SIP5000': '/sip-calculator-5000-per-month',
    'SIP1CrLanding': '/sip-1-crore-calculator',
    'FDvsSIP': '/fd-vs-sip-india',
    'LandConverterLanding': '/bigha-to-acre-uttar-pradesh',
    'LearnHome': '/learn',
    'TermsOfService': '/terms-of-service',
    'Feedback': '/feedback',
};

// Files to fix (SEO landing pages and others without ROUTES)
const filesToFix = [
    'src/pages/seo/EMILanding.jsx',
    'src/pages/seo/SIP5000.jsx',
    'src/pages/seo/SIP1CrLanding.jsx',
    'src/pages/seo/FDvsSIP.jsx',
    'src/pages/seo/LandConverterLanding.jsx',
    'src/pages/learn/LearnHome.jsx',
    'src/pages/TermsOfService.jsx',
    'src/pages/Feedback.jsx',
];

filesToFix.forEach(filePath => {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
        console.log(`Skipping ${filePath} - not found`);
        return;
    }

    const componentName = path.basename(filePath, '.jsx');
    const canonicalPath = pathMappings[componentName];

    if (!canonicalPath) {
        console.log(`Skipping ${componentName} - no path mapping`);
        return;
    }

    let content = fs.readFileSync(fullPath, 'utf-8');

    // Add canonicalPath if SeoHead exists without it
    if (content.includes('<SeoHead') && !content.includes('canonicalPath=')) {
        // Find the SeoHead block and add canonicalPath
        content = content.replace(
            /(<SeoHead\s+[^>]*?)(\/>|>)/,
            `$1\n                canonicalPath="${canonicalPath}"\n            $2`
        );

        fs.writeFileSync(fullPath, content);
        console.log(`✓ Fixed ${componentName} with path: ${canonicalPath}`);
    } else {
        console.log(`- Skipped ${componentName} (already has canonicalPath or no SeoHead)`);
    }
});

console.log('\nDone! Run npm run build to verify.');
