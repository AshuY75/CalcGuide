import React from 'react';
import TwoWheelerLoanUI from '../components/calculators/TwoWheelerLoanUI';
import CalculatorContent from '../components/CalculatorContent';
import { ROUTES } from '../routes/paths';
import RelatedContent from '../components/RelatedContent';

const TwoWheelerLoan = () => {
    const calculatorProps = {
        title: "Two Wheeler Loan EMI Calculator 2025",
        description: "Calculate the exact monthly EMI for your new bike or scooter. Compare on-road prices, down payments, and interest rates from top lenders like HDFC, Hero FinCorp, and TVS Credit.",
        formula: "Loan Amount = On-road Price - Down Payment | EMI = Standard Amortization Formula",
        example: "For a bike worth ₹1.5 Lakh with ₹30,000 down payment, at 12% for 3 years: Your EMI will be approx ₹3,986 per month.",
        mistakes: [
            "Opting for zero down payment schemes (while attractive, they often carry much higher interest rates).",
            "Not checking the 'on-road price' which includes insurance and registration (don't calculate on ex-showroom price).",
            "Ignoring Dealer Processing Fees (sometimes dealers add extra markups on the loan).",
            "Assuming your personal insurance is included in the loan amount (always verify)."
        ],
        faqs: [
            {
                question: "What is the minimum down payment for a bike loan?",
                answer: "Most banks require a minimum of 15% to 20% of the on-road price as a down payment. However, some NBFCs provide up to 95% or even 100% funding for existing customers with high credit scores."
            },
            {
                question: "What documents are needed for a two-wheeler loan?",
                answer: "Standard documents include Aadhaar Card, PAN Card, Salary Slips (for salaried) or ITR (for self-employed), and a few months of bank statements."
            },
            {
                question: "Can I prepay my bike loan?",
                answer: "Yes, but most lenders charge a foreclosure fee ranging from 3% to 6% if you pay before the tenure ends. Always check the loan agreement for the 'lock-in' period."
            },
            {
                question: "Does CIBIL score affect bike loan interest?",
                answer: "Absolutely. A higher CIBIL score (above 750) can help you secure rates around 10-12%, whereas a lower score could push rates as high as 18-20%."
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <TwoWheelerLoanUI />
                <div className="mt-12">
                    <CalculatorContent {...calculatorProps} />
                </div>
                <RelatedContent category="LOAN" currentPath={ROUTES.CALCULATORS.LOAN.TWO_WHEELER} />
            </div>
        </div>
    );
};

export default TwoWheelerLoan;
