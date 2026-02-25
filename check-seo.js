import { ROUTES } from './src/routes/paths.js';
import { SEO_CONFIG } from './src/routes/seoConfig.js';

function extractRoutes(obj) {
    let routes = [];
    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            routes.push(obj[key]);
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            routes = routes.concat(extractRoutes(obj[key]));
        }
    }
    return routes;
}

const allRoutes = [...new Set(extractRoutes(ROUTES))];
const missing = allRoutes.filter(route => !SEO_CONFIG[route]);

console.log(`\n🔍 Checking SEO coverage for ${allRoutes.length} routes...`);

if (missing.length > 0) {
    console.log(`⚠️  Found ${missing.length} routes missing SEO_CONFIG:`);
    missing.forEach(m => console.log(` - ${m}`));
} else {
    console.log(`✅ All ${allRoutes.length} routes have valid SEO_CONFIG entries.`);
}
