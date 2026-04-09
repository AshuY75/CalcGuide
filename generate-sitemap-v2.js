const fs = require('fs');

// We'll read the paths.js file content
const content = fs.readFileSync('c:/Users/sonyo/Desktop/AntiCalsc/calcguide-vite/src/routes/paths.js', 'utf8');

// Simple extraction logic for URLs from the ROUTES object
const urls = [];
const regex = /: "([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
    const url = match[1];
    if (url.startsWith('/') && !url.includes(':')) {
        urls.push(`https://calcguide.in${url}`);
    }
}

// deduplicate
const uniqueUrls = [...new Set(urls)].sort();

const sitemapHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

const sitemapFooter = `</urlset>`;

const urlEntries = uniqueUrls.map(url => {
    let priority = "0.7";
    let freq = "monthly";
    
    if (url === "https://calcguide.in/") { priority = "1.0"; freq = "daily"; }
    else if (url.includes("-calculators/")) { priority = "0.8"; freq = "weekly"; }
    else if (url.includes("/learn/")) { priority = "0.7"; freq = "weekly"; }
    
    return `  <url>
    <loc>${url}</loc>
    <lastmod>2026-04-09</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n');

const fullSitemap = `${sitemapHeader}\n${urlEntries}\n${sitemapFooter}`;

fs.writeFileSync('c:/Users/sonyo/Desktop/AntiCalsc/calcguide-vite/public/sitemap.xml', fullSitemap);
console.log(`Generated sitemap with ${uniqueUrls.length} URLs.`);
