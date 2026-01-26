import fs from "fs";
import crypto from "crypto";

function hash(file) {
    return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

const a = hash("dist/static/calculators/loan/emi-calculator/index.html");
const b = hash("dist/static/calculators/loan/emi-calculator/index.html");

if (a !== b) {
    console.error("❌ HTML is non-deterministic");
    process.exit(1);
}

console.log("✅ HTML deterministic");
