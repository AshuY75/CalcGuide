import React from 'react';
import LAPUI from '../components/calculators/LAPUI';
import CalculatorContent from '../components/CalculatorContent';
import { ROUTES } from '../routes/paths';
import RelatedContent from '../components/RelatedContent';

const LAPCalculator = () => {
    const calculatorProps = {
        title: "Loan Against Property (LAP) Calculator India",
        description: "Calculate your mortgage loan eligibility and EMI using your property's market value. Compare LTV ratios and see how much long-term credit you can unlock from your residential or commercial asset.",
        formula: "Loan Amount = Property Value * LTV% | EMI = [P x r x (1+r)^n] / [(1+r)^n - 1]",
        example: "If your residential property is worth ₹1 Crore and the bank offers 65% LTV, you are eligible for ₹65 Lakhs at 9.5% for 15 years. Your EMI will be approx ₹67,845.",
        mistakes: [
            "Overestimating the property's market value (banks use an independent valuer).",
            "Not accounting for legal and valuation fees which can range from ₹5,000 to ₹50,000.",
            "Using LAP funds for speculative trading/stocks (strictly against banking guidelines).",
            "Ignoring the impact on property papers (bank keeps original registry until full repayment)."
        ],
        faqs: [
            {
                question: "What is LTV in Loan Against Property?",
                answer: "LTV stands for Loan-to-Value ratio. It is the percentage of the property's market value that a bank is willing to lend. Typically, it is 60-70% for residential and 50% for commercial properties."
            },
            {
                question: "Is LAP interest rate higher than Home Loan?",
                answer: "Yes. LAP interest rates are usually 1% to 2% higher than standard Home Loan rates but much lower than Personal Loan rates."
            },
            {
                question: "Can I get a loan against land?",
                answer: "Some banks offer loans against vacant plots of land, but the LTV is usually lower (around 40-50%) and the property must be within municipal limits."
            },
            {
                question: "What happens if I cannot pay my LAP EMI?",
                answer: "Since the property is collateral, the bank has the legal right to possess and auction the property under the SARFAESI Act to recover their dues."
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <LAPUI />
                <div className="mt-12">
                    <CalculatorContent {...calculatorProps} />
                </div>
                <RelatedContent category="LOAN" currentPath={ROUTES.CALCULATORS.LOAN.LAP} />
            </div>
        </div>
    );
};

export default LAPCalculator;
