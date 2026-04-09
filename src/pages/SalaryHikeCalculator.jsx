import React from 'react';
import SalaryHikeUI from '../components/calculators/SalaryHikeUI';
import CalculatorContent from '../components/CalculatorContent';

const SalaryHikeCalculator = () => {
    const calculatorProps = {
        title: "Salary Hike & Increment Calculator",
        description: "Calculate your percentage hike and in-hand salary increase for FY 2025-26. Compare current CTC with new offers and see how much your net take-home salary will change under the new tax regime.",
        formula: "Percentage Hike = ((New CTC - Current CTC) / Current CTC) x 100",
        example: "If your current CTC is ₹10 LPA and you get an offer of ₹13 LPA, your hike is 30%. Your monthly gross increases by ₹25,000, and your in-hand increases by approximately ₹21,000.",
        mistakes: [
            "Negotiating on Gross CTC without checking the In-Hand / Take-Home component.",
            "Not accounting for the variable/performance bonus which is not guaranteed.",
            "Ignoring the impact of employer EPF contributions which are part of your CTC.",
            "Comparing Old Regime in-hand with New Regime in-hand without standardizing."
        ],
        faqs: [
            {
                question: "What is a good salary hike during a job switch in India?",
                answer: "In the Indian IT and corporate sector, a 20-40% hike is considered standard. However, niche skills or high-growth startups may offer 50-100% hikes."
            },
            {
                question: "How does the 2024 Budget impact my hike?",
                answer: "The 2024 (and 2025) budget has significantly improved the New Tax Regime slabs, making it the better choice for most people earning up to 15-20L. This means more of your hike ends up in your pocket."
            },
            {
                question: "Is CTC the same as In-Hand salary?",
                answer: "No. CTC (Cost to Company) includes your gross salary, employer EPF, gratuity, insurance, and other benefits. In-hand is what you receive in your bank after tax and employee EPF deductions."
            },
            {
                question: "How much tax will I pay on my 10% hike?",
                answer: "If your total income is below ₹12L in the New Regime (FY 2025-26), you pay zero tax. If above, your hike will be taxed at your highest slab rate (5%, 10%, 15%, etc.)."
            }
        ]
    };

    return (
        <CalculatorContent {...calculatorProps}>
            <SalaryHikeUI />
        </CalculatorContent>
    );
};

export default SalaryHikeCalculator;
