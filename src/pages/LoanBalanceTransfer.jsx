import React from 'react';
import BalanceTransferUI from '../components/calculators/BalanceTransferUI';
import CalculatorContent from '../components/CalculatorContent';
import { ROUTES } from '../routes/paths';
import RelatedContent from '../components/RelatedContent';

const LoanBalanceTransfer = () => {
    const calculatorProps = {
        title: "Loan Balance Transfer Calculator India",
        description: "Calculate how much you can save by switching your existing home loan or personal loan to another bank with a lower interest rate. Include processing fees to see your TRUE net savings and break-even period.",
        formula: "Net Savings = (Old Total Interest - New Total Interest) - Switching Costs",
        example: "If you have ₹50 Lakh outstanding at 9.5% for 15 years, and you switch to 8.5% with a ₹10,000 fee, you save approx ₹5.4 Lakhs over the remaining tenure. Your monthly EMI drops by ₹2,900.",
        mistakes: [
            "Switching at the very end of your loan tenure (interest savings are minimal as most interest is already paid).",
            "Ignoring the hidden costs like processing fees, legal charges, and valuation fees of the new bank.",
            "Not checking if your current bank can match the new rate (often called 'Rate Conversion').",
            "Assuming zero foreclosure charges (Home loans have zero, but LAP and Personal loans may have 2-4% charges)."
        ],
        faqs: [
            {
                question: "When is the best time for a loan balance transfer?",
                answer: "The best time is during the initial 2-5 years of a long-term loan like a home loan, as interest components are highest during this period. The interest saving must be significantly higher than the switching costs."
            },
            {
                question: "Are there any charges for home loan balance transfer?",
                answer: "Most banks charge a processing fee (fixed or 0.1% to 0.5% of loan amount). There are also MOD (Memorandum of Deposit) and legal fees required for the new bank."
            },
            {
                question: "How long does the transfer process take?",
                answer: "A balance transfer usually takes 15 to 20 days as it involves the new bank verifying property papers and the old bank issuing a foreclosure letter and NOC."
            },
            {
                question: "Can I get a Top-Up loan during a balance transfer?",
                answer: "Yes. Many banks offer an additional 'Top-Up' loan at similar interest rates during the balance transfer process, which can be used for any personal requirement."
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <BalanceTransferUI />
                <div className="mt-12">
                    <CalculatorContent {...calculatorProps} />
                </div>
                <RelatedContent category="LOAN" currentPath={ROUTES.CALCULATORS.LOAN.BALANCE_TRANSFER} />
            </div>
        </div>
    );
};

export default LoanBalanceTransfer;
