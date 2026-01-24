import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BASE_URL = 'https://calcguide.in';

// Source of truth for paths
// We can't import the JS object directly in Node environment easily without babel-node if it uses ES modules like 'export const'.
// So we replicate the structure or read it. For reliability in this script, we list the final paths explicitly matching routes/paths.js.

const pages = [
  '/',
  // Loan
  '/calculators/loan/emi-calculator',
  '/calculators/loan/loan-eligibility',
  '/calculators/loan/village-interest-calculator',
  // Investment
  '/calculators/investment/sip-calculator',
  '/calculators/investment/sip-1-crore-calculator',
  '/calculators/investment/fd-calculator',
  '/calculators/investment/rd-calculator',
  '/calculators/investment/simple-interest-calculator',
  '/calculators/investment/compound-interest-calculator',
  // Gold
  '/calculators/gold/jewellery-price-calculator',
  '/calculators/gold/old-gold-exchange-calculator',
  // Construction
  '/calculators/construction/construction-cost-calculator',
  '/calculators/construction/brick-calculator',
  '/calculators/construction/land-area-converter',
  // Utility
  '/calculators/utility/percentage-calculator',
  '/calculators/utility/date-difference-calculator',
  '/calculators/utility/age-calculator',
  '/calculators/utility/exam-eligibility-calculator',
  // Legal
  '/privacy-policy',
  '/terms-of-service',
  '/feedback',
  // SEO Landing Pages
  '/sip-calculator-5000-per-month',
  '/sip-1-crore-calculator',
  '/fd-vs-sip-india',
  '/emi-calculator-home-loan-india',
  '/bigha-to-acre-uttar-pradesh',
  // Learn
  '/learn/why-sip-beats-fd-long-term',
  '/learn/how-village-interest-sood-vaddi-works'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      // Logic for priority
      let priority = '0.8';
      if (page === '/') priority = '1.0';

      return `
  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated successfully with 22 optimized URLs!');
