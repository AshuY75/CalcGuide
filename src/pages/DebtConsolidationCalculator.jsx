import React from 'react';
import DebtConsolidationUI from '../components/calculators/DebtConsolidationUI';
import CalculatorContent from '../components/CalculatorContent';
import { ROUTES } from '../routes/paths';
import RelatedContent from '../components/RelatedContent';

const DebtConsolidationCalculator = () => {
    const calculatorProps = {
        title: "Debt Consolidation Planner & EMI Calculator",
        description: "Combine multiple high-interest debts like Credit Card outstanding and Personal Loans into a single, manageable monthly EMI. Calculate your potential monthly savings and see how consolidation improves your monthly cashflow.",
        formula: "New EMI = [Sum(Outstanding Balances) * r * (1+r)^n] / [(1+r)^n - 1] | Monthly Saving = Current Total EMIs - New EMI",
        example: "If you have a Credit Card debt of ₹50,000 (36% APR) and a Personal Loan of ₹2.5 Lakh (16% APR), your total EMIs might be ₹15,000. By consolidating into one ₹3 Lakh loan at 12% for 5 years, your single EMI becomes ₹6,673, saving you ₹8,327 every month.",
        mistakes: [
            "Extending the tenure too much (it lowers EMI but can significantly increase the total interest paid over time).",
            "Continuing to use the Credit Cards that were just cleared (leads to a 'Debt Trap').",
            "Ignoring the processing fees of the new consolidation loan (can be 1-2%).",
            "Not checking if the new loan has prepayment penalties."
        ],
        faqs: [
            {
                question: "What is Debt Consolidation?",
                answer: "Debt consolidation is a financial strategy where you take out one new loan to pay off several smaller debts. Usually, this is done to secure a lower interest rate or to simplify monthly payments into a single EMI."
            },
            {
                question: "Will debt consolidation improve my CIBIL score?",
                answer: "In the long run, yes. It reduces your credit utilization ratio on credit cards and ensures timely payments via a single EMI. However, taking a new loan might cause a temporary minor dip in the score due to a 'Hard Enquiry'."
            },
            {
                question: "Which loans are best for consolidation?",
                answer: "Personal Loans or Loans Against Property (LAP) are the most common tools for consolidation because they offer lower interest rates compared to Credit Cards or unsecured short-term loans."
            },
            {
                question: "Should I close my credit card accounts after consolidating?",
                answer: "It is often better to keep the accounts open but with 'zero balance' to maintain a long credit history and a higher total credit limit, which helps your credit score. Just avoid spending on them again."
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <DebtConsolidationUI />
                <div className="mt-12">
                    <CalculatorContent {...calculatorProps} />
                </div>
                <RelatedContent category="LOAN" currentPath={ROUTES.CALCULATORS.LOAN.DEBT_CONSOLIDATION} />
            </div>
        </div>
    );
};

export default DebtConsolidationCalculator;
