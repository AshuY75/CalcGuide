import React from 'react';
import STCGTaxUI from '../components/calculators/STCGTaxUI';
import CalculatorContent from '../components/CalculatorContent';

const STCGTaxCalculator = () => {
    const calculatorProps = {
        title: "Short Term Capital Gains (STCG) Tax Calculator",
        description: "Calculate STCG tax on stocks, mutual funds, and other assets. Updated for the July 2024 Budget with the new 20% flat tax rate on listed equity and slab rates for debt/unlisted assets.",
        formula: "STCG Tax (Equity) = 20% of (Net Sale Price - Purchase Price - Expenses)\nSTCG Tax (Debt/Unlisted) = Taxed at applicable slab rates",
        example: "If you buy shares for ₹1,00,000 and sell them for ₹1,50,000 within 12 months, your STCG is ₹50,000. Under the new rules, your tax is 20% of ₹50k = ₹10,000 (plus cess).",
        mistakes: [
            "Applying the old 15% rate instead of the new 20% rate for post-July 2024 trades.",
            "Thinking STCG has a ₹1.25L exemption (that exemption is ONLY for Long Term Capital Gains).",
            "Not deducting brokerage, STT (sometimes), and other transfer expenses from the gain.",
            "Forgetting that STCG on Debt Mutual Funds is now taxed as per your income tax slab (since April 2023)."
        ],
        faqs: [
            {
                question: "What is the new STCG rate for stocks in India?",
                answer: "As per the Union Budget 2024, the tax rate for Short Term Capital Gains on listed equity shares and equity-oriented mutual funds has been increased from 15% to 20%."
            },
            {
                question: "What is the holding period for STCG in stocks?",
                answer: "Any listed equity share or equity mutual fund unit held for less than or equal to 12 months (1 year) is considered a short-term capital asset."
            },
            {
                question: "Can I adjust STCG losses against my salary?",
                answer: "No. Short-term capital losses (STCL) can only be set off against short-term or long-term capital gains. They cannot be adjusted against 'Salary' or 'House Property' income."
            },
            {
                question: "Is there a basic exemption for STCG?",
                answer: "Unlike LTCG (which has a ₹1.25L annual exemption), STCG on equity is taxable on the very first rupee of gain. However, if your total income is below the tax slab (e.g., ₹7-12L depending on regime), you may not pay actual tax."
            }
        ]
    };

    return (
        <CalculatorContent {...calculatorProps}>
            <STCGTaxUI />
        </CalculatorContent>
    );
};

export default STCGTaxCalculator;
