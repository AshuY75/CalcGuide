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

// 1. Get unique, sorted routes
const rawRoutes = extractRoutes(ROUTES);
const allRoutes = [...new Set(rawRoutes)]
  .filter(r => r && typeof r === 'string' && r.startsWith('/'))
  .sort();

console.log(`\n🚀 Generating clean sitemap for ${allRoutes.length} routes...`);

// 2. Build XML string carefully
const today = new Date().toISOString().split('T')[0];

const urlEntries = allRoutes.map((route) => {
  let priority = '0.7';
  let freq = 'weekly';

  if (route === '/') {
    priority = '1.0';
    freq = 'daily';
  } else if (route.includes('-calculators/') || route.includes('/calculators/')) {
    priority = '0.8';
  } else if (route.startsWith('/learn/')) {
    priority = '0.7';
  }

  // Ensure absolute URL with no double slashes (except protocol)
  const loc = `${BASE_URL}${route}`;

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
});

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urlEntries,
  '</urlset>'
].join('\n');

const outputPath = path.join(__dirname, 'public', 'sitemap.xml');

try {
  fs.writeFileSync(outputPath, sitemap, 'utf8');
  console.log(`✅ Sitemap successfully regenerated at: ${outputPath}`);
  console.log(`📊 Total URLs: ${allRoutes.length}`);
} catch (err) {
  console.error(`❌ Error writing sitemap: ${err.message}`);
}
