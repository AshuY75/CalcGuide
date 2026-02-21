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
  // Hubs
  '/loan-calculators',
  '/investment-calculators',
  '/sip-calculators',
  // Loan
  '/calculators/loan/emi-calculator',
  '/calculators/loan/loan-eligibility',
  '/calculators/loan/village-interest-calculator',
  '/calculators/loan/amortisation-schedule-calculator',
  // Investment
  '/calculators/investment/sip-calculator',
  '/calculators/investment/sip-1-crore-calculator',
  '/calculators/investment/xirr-calculator',
  '/calculators/investment/ltcg-tax-calculator',
  '/calculators/investment/swp-calculator',
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
  '/calculators/utility/credit-card-rewards-value-calculator/',
  '/calculators/creator/youtube-earnings-calculator',
  '/calculators/creator/freelancer-hourly-rate-calculator',
  '/calculators/creator/platform-fee-calculator',
  '/calculators/creator/import-duty-calculator',
  '/calculators/utility/exam-eligibility-calculator',
  '/calculators/utility/electricity-bill-calculator',
  '/calculators/utility/solar-roi-calculator',
  '/calculators/utility/ev-vs-petrol-calculator',
  '/calculators/utility/credit-card-rewards-value-calculator',
  // Tax
  '/calculators/tax/income-tax-calculator',
  '/calculators/tax/hra-calculator',
  '/calculators/tax/gratuity-calculator',
  '/calculators/tax/epf-calculator',
  '/tax-calculators',
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
  '/learn/how-village-interest-sood-vaddi-works',
  '/learn/home-loan-prepayment-vs-sip-11-percent-rule',
  '/learn/why-early-prepayment-saves-interest',
  '/learn/mclr-vs-eblr-home-loan-switch',
  '/learn/step-up-sip-vs-inflation',
  '/learn/how-to-build-1-crore-mutual-funds',
  '/learn/why-cagr-lies-the-real-deal',
  '/learn/ltcg-tax-harvesting-guide-2025',
  '/learn/swp-vs-fd-for-monthly-income',
  '/learn/old-vs-new-tax-regime-2025',
  '/learn/how-to-calculate-hra-exemption',
  '/learn/gratuity-rules-explained',
  '/learn/epf-calculator-guide-math',
  '/learn/how-to-beat-summer-electricity-bill-spike',
  '/learn/pm-surya-ghar-muft-bijli-yojana-roi',
  '/learn/ev-vs-petrol-true-cost-comparison',
  '/learn/credit-card-points-devaluation-survival',
  '/learn/youtube-rpm-india-vs-us-math',
  '/learn/why-freelancers-undercharge-guide',
  '/learn/hidden-platform-fees-paypal-upwork',
  '/learn/how-import-duty-is-calculated-india',
  '/learn',
  '/learn/how-sip-returns-are-calculated'
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
console.log(`✅ Sitemap generated successfully with ${pages.length} optimized URLs!`);
