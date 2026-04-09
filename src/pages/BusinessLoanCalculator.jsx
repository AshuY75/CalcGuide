import React from 'react';
import BusinessLoanUI from '../components/calculators/BusinessLoanUI';
import CalculatorContent from '../components/CalculatorContent';
import { ROUTES } from '../routes/paths';
import RelatedContent from '../components/RelatedContent';

const BusinessLoanCalculator = () => {
    const calculatorProps = {
        title: "Unsecured & Secured Business Loan EMI Calculator 2025",
        description: "Calculate your business loan EMIs and total interest costs. Compare interest rates for secured (against property/gold) vs unsecured business credit to find the most cost-effective way to fund your operations or expansion.",
        formula: "EMI = [P x r x (1+r)^n] / [(1+r)^n - 1] | Compounded on Reducing Balance method.",
        example: "A ₹10 Lakh business loan at 16% for 3 years results in an EMI of ₹35,157. Total interest paid is ₹2,65,652. Switching to a secured loan at 9.5% reduces the EMI to ₹32,033, saving ₹1,12,464.",
        mistakes: [
            "Using unsecured high-interest credit for long-term bridge financing (burns cashflow).",
            "Not accounting for the processing fee (usually 2% to 3% for business loans).",
            "Ignoring the impact on Credit Utilization Ratio (high utilization can drop your score, making future credit expensive).",
            "Assuming you will get the lowest rate without showing high GST turnover."
        ],
        faqs: [
            {
                question: "What is the difference between Secured and Unsecured business loans?",
                answer: "Secured loans require collateral like property, gold, or inventory and offer lower rates (9-11%). Unsecured loans don't need collateral but carry higher rates (14-22%) and are based on your tax returns and bank statements."
            },
            {
                question: "What are the eligibility criteria for a business loan in India?",
                answer: "Most banks require at least 2-3 years of business vintage, a positive net worth, and a good CIBIL score. GST registration and regular ITR filings for the last 2 years are mandatory."
            },
            {
                question: "Can I get a business loan for a new startup?",
                answer: "Traditional banks rarely fund startups. You might need to look at govt schemes like MUDRA or CGTMSE, or private NBFCs that specifically cater to new enterprises with some revenue proof."
            },
            {
                question: "What is the processing time for business loans?",
                answer: "Unsecured digital business loans can be approved in 24-48 hours. Secured property loans take much longer, typically 15 to 25 days, due to legal and technical verification."
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <BusinessLoanUI />
                <div className="mt-12">
                    <CalculatorContent {...calculatorProps} />
                </div>
                <RelatedContent category="LOAN" currentPath={ROUTES.CALCULATORS.LOAN.BUSINESS} />
            </div>
        </div>
    );
};

export default BusinessLoanCalculator;
