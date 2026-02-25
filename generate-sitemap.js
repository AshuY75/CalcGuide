import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ROUTES } from './src/routes/paths.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://calcguide.in';

/**
 * Deeply extract all string values (routes) from the ROUTES object.
 */
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

console.log(`\n🚀 Generating sitemap for ${allRoutes.length} routes...`);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map((route) => {
      // Priority Logic
      let priority = '0.8';
      if (route === '/') priority = '1.0';
      if (route.startsWith('/learn/')) priority = '0.7';

      return `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, sitemap);

console.log(`✅ Sitemap successfully localized to: ${outputPath}`);
console.log(`📊 Total URLs: ${allRoutes.length}`);

