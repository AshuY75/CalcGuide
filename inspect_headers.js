// Check headers script


const BASE_URL = process.argv[2] || 'https://calcguide.in';

const paths = [
    "/",
    "/loan-calculators",
    "/investment-calculators",
    "/sip-calculators",
    "/calculators/loan/emi-calculator",
    "/calculators/loan/loan-eligibility",
    "/calculators/loan/village-interest-calculator",
    "/calculators/investment/sip-calculator",
    "/calculators/investment/sip-1-crore-calculator",
    "/calculators/investment/fd-calculator",
    "/calculators/investment/rd-calculator",
    "/calculators/investment/simple-interest-calculator",
    "/calculators/investment/compound-interest-calculator",
    "/calculators/gold/jewellery-price-calculator",
    "/calculators/gold/old-gold-exchange-calculator",
    "/calculators/construction/construction-cost-calculator",
    "/calculators/construction/brick-calculator",
    "/calculators/construction/land-area-converter",
    "/calculators/utility/percentage-calculator",
    "/calculators/utility/date-difference-calculator",
    "/calculators/utility/age-calculator",
    "/calculators/utility/exam-eligibility-calculator",
    "/sip-calculator-5000-per-month",
    "/sip-1-crore-calculator",
    "/fd-vs-sip-india",
    "/emi-calculator-home-loan-india",
    "/bigha-to-acre-uttar-pradesh",
    "/learn",
    "/learn/how-sip-returns-are-calculated",
    "/learn/why-sip-beats-fd-long-term",
    "/learn/how-village-interest-sood-vaddi-works",
    "/privacy-policy",
    "/terms-of-service",
    "/feedback",
    "/about"
];

const COLORS = {
    reset: "\x1b[0m",
    cyan: "\x1b[36m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    magenta: "\x1b[35m",
    gray: "\x1b[90m",
    bold: "\x1b[1m"
};

import fs from 'fs';

async function checkHeaders() {
    console.log(`${COLORS.bold}Starting Header Inspection...${COLORS.reset}`);
    const stream = fs.createWriteStream('headers_audit.txt');

    function log(message) {
        console.log(message);
        // Strip ANSI codes for file output
        stream.write(message.replace(/\x1b\[[0-9;]*m/g, '') + '\n');
    }

    log(`Starting Header Inspection...`);
    log(`Target Base URL: ${BASE_URL}\n`);

    const stats = {
        HIT: 0,
        MISS: 0,
        BYPASS: 0,
        DYNAMIC: 0,
        OTHER: 0
    };

    for (const path of paths) {
        // Ensure we test both standard and trailing slash if needed, but for now strict list
        const url = `${BASE_URL}${path}`;
        try {
            const response = await fetch(url);
            const status = response.status;
            const cacheStatus = response.headers.get('cf-cache-status') || 'N/A';

            // Update stats
            if (cacheStatus === 'HIT') stats.HIT++;
            else if (cacheStatus === 'MISS') stats.MISS++;
            else if (cacheStatus === 'BYPASS') stats.BYPASS++;
            else if (cacheStatus === 'DYNAMIC') stats.DYNAMIC++;
            else stats.OTHER++;

            const statusColor = status >= 200 && status < 300 ? COLORS.green :
                status >= 300 && status < 400 ? COLORS.yellow : COLORS.red;

            const cacheColor = cacheStatus === 'HIT' ? COLORS.green :
                cacheStatus === 'BYPASS' ? COLORS.magenta :
                    cacheStatus === 'MISS' ? COLORS.yellow : COLORS.red;

            log(`---------------------------------------------------------------`);
            log(`URL: ${COLORS.cyan}${path}${COLORS.reset}`);
            log(`Status: ${statusColor}${status} ${response.statusText}${COLORS.reset}`);

            // Highlight CF-Cache-Status
            log(`${COLORS.bold}CF-Cache-Status: ${cacheColor}${cacheStatus}${COLORS.reset}`);

            log(`${COLORS.gray}All Headers:${COLORS.reset}`);
            response.headers.forEach((value, key) => {
                log(`  ${key}: ${value}`);
            });
            log("\n");

        } catch (error) {
            log(`---------------------------------------------------------------`);
            log(`URL: ${COLORS.cyan}${path}${COLORS.reset}`);
            log(`${COLORS.red}Error fetching URL: ${error.message}${COLORS.reset}\n`);
        }
    }

    log(`---------------------------------------------------------------`);
    log(`${COLORS.bold}Cache Status Summary:${COLORS.reset}`);
    log(`HIT: ${COLORS.green}${stats.HIT}${COLORS.reset}`);
    log(`MISS: ${COLORS.yellow}${stats.MISS}${COLORS.reset}`);
    log(`BYPASS: ${COLORS.magenta}${stats.BYPASS}${COLORS.reset}`);
    log(`DYNAMIC: ${stats.DYNAMIC}`);
    log(`OTHER/N/A: ${stats.OTHER}`);

    log(`---------------------------------------------------------------`);
    log("Inspection Complete.");
    stream.end();
    console.log(`${COLORS.bold}Report saved to headers_audit.txt${COLORS.reset}`);
}

checkHeaders();
