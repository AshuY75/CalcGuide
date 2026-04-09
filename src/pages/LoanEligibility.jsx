import React from 'react';
import LoanEligibilityUI from '../components/calculators/LoanEligibilityUI';
import CalculatorContent from '../components/CalculatorContent';
import { ROUTES } from '../routes/paths';
import RelatedContent from '../components/RelatedContent';

const LoanEligibility = () => {
    const calculatorProps = {
        title: "Home Loan Eligibility Calculator India",
        description: "Check exactly how much home loan you can get based on your monthly income and existing EMIs. Our calculation uses the same FOIR norms used by top Indian banks like SBI, HDFC, and Axis.",
        formula: "Loan Eligibility = Max EMI / [ r * (1+r)^n / ((1+r)^n - 1) ] where Max EMI = (Gross Income * FOIR) - Existing EMIs",
        example: "If your monthly income is ₹1,00,000 and you have no existing EMIs, a bank typically allows a 60% FOIR. Your max EMI can be ₹60,000. At 8.5% for 20 years, your loan eligibility is approx ₹67 Lakh.",
        mistakes: [
            "Applying for a loan amount higher than your eligibility (leads to rejection and a drop in CIBIL score).",
            "Not accounting for processing fees and stamp duty in your down payment planning.",
            "Failing to disclose all existing loans/EMIs (banks will find them via your credit report).",
            "Assuming you will get the lowest advertised interest rate (actual rate depends on your credit score)."
        ],
        faqs: [
            {
                question: "What is FOIR in loan eligibility?",
                answer: "FOIR stands for Fixed Obligation to Income Ratio. It is the percentage of your monthly income that a bank considers available for paying EMIs after meeting your living expenses. It typically ranges from 40% to 65%."
            },
            {
                question: "How can I increase my loan eligibility?",
                answer: "You can increase eligibility by adding a co-applicant (like a spouse), clearing existing high-interest debts, showing more income sources, or choosing a longer tenure (up to 30 years)."
            },
            {
                question: "Does a high CIBIL score improve eligibility?",
                answer: "Yes. While income determines the amount, your credit score determines the interest rate and the bank's willingness to lend. A score above 750 often gets you the best rates."
            },
            {
                question: "What is the maximum tenure for a home loan in India?",
                answer: "Most Indian banks offer home loans for a maximum period of 30 years or until the retirement age of the applicant, whichever is earlier."
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <LoanEligibilityUI />
                <div className="mt-12">
                    <CalculatorContent {...calculatorProps} />
                </div>
                <RelatedContent category="LOAN" currentPath={ROUTES.CALCULATORS.LOAN.ELIGIBILITY} />
            </div>
        </div>
    );
};

export default LoanEligibility;
