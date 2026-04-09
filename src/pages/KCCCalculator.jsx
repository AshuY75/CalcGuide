import React from 'react';
import KCCUI from '../components/calculators/KCCUI';
import CalculatorContent from '../components/CalculatorContent';
import { ROUTES } from '../routes/paths';
import RelatedContent from '../components/RelatedContent';

const KCCCalculator = () => {
    const calculatorProps = {
        title: "KCC (Kisan Credit Card) Interest Calculator 2025",
        description: "Calculate your agricultural loan interest and repayment amount for the Kisan Credit Card (KCC) scheme. Understand the 3% interest subvention for prompt repayment and how it brings your effective rate down to 4%.",
        formula: "Interest = (Principal * Rate * Time) / 100 | Effective Rate = 4% for prompt repayment, 7% standard.",
        example: "If a farmer takes a KCC loan of ₹1,00,000 for 12 months and pays on time: The interest will be ₹4,000 (at 4%) instead of ₹7,000 (at 7%).",
        mistakes: [
            "Missing the repayment due date (loss of 3% subvention increases interest significantly).",
            "Not maintaining the 'Credit Renewal' every year (KCC limit needs to be renewed annually).",
            "Using the ATM/Credit Card feature for non-agricultural personal expenses.",
            "Assuming subvention applies to amounts above ₹3 Lakhs (govt subvention is capped at ₹3L limit)."
        ],
        faqs: [
            {
                question: "What is the interest rate for KCC loans in India?",
                answer: "The benchmark interest rate for KCC loans is 9%, but the Central Government provides a 2% interest subvention, making it 7%. For farmers who repay on or before the due date, an additional 3% incentive is provided, making the effective rate 4%."
            },
            {
                question: "Who is eligible for Kisan Credit Card?",
                answer: "All farmers (Individual/Joint borrowers), tenant farmers, oral lessees, sharecroppers, and Self Help Groups (SHGs) involved in agriculture and allied activities are eligible."
            },
            {
                question: "What is the maximum limit of a KCC loan?",
                answer: "The limit is based on the operational land holding, cropping pattern, and scale of finance. For loans up to ₹1.60 Lakh, no collateral is required. Total limits can go much higher with collateral."
            },
            {
                question: "Can KCC be used for animal husbandry or fisheries?",
                answer: "Yes. The KCC scheme has been extended to include farmers involved in animal husbandry, poultry, and fisheries with similar interest subvention benefits."
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <KCCUI />
                <div className="mt-12">
                    <CalculatorContent {...calculatorProps} />
                </div>
                <RelatedContent category="LOAN" currentPath={ROUTES.CALCULATORS.LOAN.KCC} />
            </div>
        </div>
    );
};

export default KCCCalculator;
