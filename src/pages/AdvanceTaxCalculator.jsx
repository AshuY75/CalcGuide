import React from 'react';
import AdvanceTaxUI from '../components/calculators/AdvanceTaxUI';
import CalculatorContent from '../components/CalculatorContent';

const AdvanceTaxCalculator = () => {
    const calculatorProps = {
        title: "Advance Tax Calculator India (FY 2025-26)",
        description: "Calculate your quarterly advance tax installments and ensure compliance with Income Tax Department rules. Estimate your net tax liability and avoid Section 234B & 234C interest penalties.",
        formula: "Advance Tax Installments = [15%, 45%, 75%, 100%] of (Total Estimated Tax - TDS)",
        example: "If your total estimated tax for the year is ₹1,00,000 and ₹40,000 has been paid as TDS, your net Advance Tax is ₹60,000. You must pay ₹9,000 by June 15, ₹18,000 by Sept 15, etc.",
        mistakes: [
            "Wait for the end of the financial year to pay all taxes (leads to mandatory interest penalties).",
            "Not accounting for income from other sources like bank interest or dividends.",
            "Failing to pay advance tax when net liability exceeds ₹10,000 even if salaried.",
            "Not adjusting installments if your income increases significantly during the year (e.g., a stock market gain in December)."
        ],
        faqs: [
            {
                question: "Who is required to pay Advance Tax in India?",
                answer: "Any individual whose estimated tax liability for the financial year (after deducting TDS) is ₹10,000 or more is required to pay advance tax."
            },
            {
                question: "What are the due dates for Advance Tax?",
                answer: "The due dates are June 15th (15%), September 15th (45% total), December 15th (75% total), and March 15th (100% total)."
            },
            {
                question: "Are senior citizens exempt from Advance Tax?",
                answer: "Yes, senior citizens (aged 60 and above) who do not have any income from business or profession are exempt from paying advance tax."
            },
            {
                question: "What happens if I miss an Advance Tax installment?",
                answer: "If you miss or delay an installment, you will be liable to pay interest at 1% per month under Section 234C for the period of delay in paying the installments."
            }
        ]
    };

    return (
        <CalculatorContent {...calculatorProps}>
            <AdvanceTaxUI />
        </CalculatorContent>
    );
};

export default AdvanceTaxCalculator;
