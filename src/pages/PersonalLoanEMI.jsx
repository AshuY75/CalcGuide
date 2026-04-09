import React from 'react';
import PersonalLoanUI from '../components/calculators/PersonalLoanUI';
import CalculatorContent from '../components/CalculatorContent';
import { ROUTES } from '../routes/paths';
import RelatedContent from '../components/RelatedContent';

const PersonalLoanEMI = () => {
    const calculatorProps = {
        title: "Personal Loan EMI Calculator & Comparison 2025",
        description: "Compare personal loan EMIs across top Indian banks like SBI, HDFC, and ICICI. Calculate your monthly outflow for various loan amounts and tenures without any signup or hidden charges.",
        formula: "EMI = [P x r x (1+r)^n] / [(1+r)^n - 1] where r is monthly interest and n is tenure in months.",
        example: "For a Personal Loan of ₹5 Lakh at 10.75% for 5 years: Your monthly EMI will be approx ₹10,808. The total interest paid over 5 years is ₹1,48,480.",
        mistakes: [
            "Opting for a very long tenure (while EMI is lower, total interest paid increases exponentially).",
            "Applying for multiple personal loans at once (leads to multiple hard enquiries and drops your CIBIL score).",
            "Ignoring the processing fee (usually 1% to 2.5% of the loan amount).",
            "Failing to check 'Zero Foreclosure' options (essential if you plan to pay off the loan early)."
        ],
        faqs: [
            {
                question: "What is the typical interest rate for personal loans in India?",
                answer: "Interest rates vary from 10.5% to 24% depending on your salary, employer's reputation, and credit score. Govt sector employees usually get better rates."
            },
            {
                question: "Is there a penalty for prepaying a personal loan?",
                answer: "Most private banks charge 2% to 4% of the outstanding principal as a foreclosure penalty if you pay before the tenure ends. However, some newer digital lenders offer zero-foreclosure options."
            },
            {
                question: "Can I get a personal loan with a low CIBIL score?",
                answer: "A score below 750 makes it difficult. You might still get a loan but at a much higher interest rate (18%+) or via fintech apps that use alternative data sources."
            },
            {
                question: "What is the maximum tenure for a personal loan?",
                answer: "Most banks offer a maximum tenure of 5 years (60 months), though a few NBFCs may extend it to 7 years."
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <PersonalLoanUI />
                <div className="mt-12">
                    <CalculatorContent {...calculatorProps} />
                </div>
                <RelatedContent category="LOAN" currentPath={ROUTES.CALCULATORS.LOAN.PERSONAL} />
            </div>
        </div>
    );
};

export default PersonalLoanEMI;
