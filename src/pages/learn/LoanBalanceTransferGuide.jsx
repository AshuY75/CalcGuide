import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

export const metadata = {
    title: "Loan Balance Transfer: When to Switch Banks to Save Lakhs",
    description: "Are you paying too much interest on your home loan? Learn how a Home Loan Balance Transfer can reduce your EMI and save you lakhs in interest costs.",
    category: "LOAN",
    slug: ROUTES.LEARN.LOAN_TRANSFER_GUIDE,
    date: "2025-02-22",
    icon: "🔃",
    colorClass: "bg-blue-100",
    isNew: true
};

export default function LoanBalanceTransferGuide() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Loan Transfer</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Loan Balance Transfer:<br /> The Ultimate Savings Hack
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        A 0.5% drop in interest rate might sound small, but over 20 years, it's the cost of a luxury car.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>What is a Loan Balance Transfer?</h2>
                    <p>
                        A <strong>Balance Transfer (BT)</strong> is a process where you switch your existing loan from Bank A to Bank B because Bank B is offering a lower interest rate or better service terms. Your new bank pays off your old bank, and you start paying EMIs to the new bank.
                    </p>

                    <h2>The "Golden Rule" of Switching</h2>
                    <p>
                        Transferring a loan isn't free. You have to pay processing fees, stamp duty, and legal charges.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-xl my-8 border-l-4 border-blue-600">
                        <h4 className="text-blue-900 mt-0">When to Switch:</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-700">
                            <li><strong>Interest Rate Gap</strong>: The new rate should be at least 0.40% to 0.50% lower.</li>
                            <li><strong>Remaining Tenure</strong>: You should have at least 10-15 years left on your loan. Switching in the last 5 years is rarely profitable.</li>
                            <li><strong>Loan Amount</strong>: Higher loan amounts (₹50 Lakhs+) lead to much bigger savings from even small rate drops.</li>
                        </ul>
                    </div>

                    <h3>Hidden Costs to Watch Out For</h3>
                    <ul>
                        <li><strong>Processing Fee</strong>: Usually 0.25% to 0.50% of the loan amount.</li>
                        <li><strong>Modality Charges</strong>: Charges for document collection and verification.</li>
                        <li><strong>Insurance</strong>: The new bank might force you to buy a new property insurance policy.</li>
                    </ul>

                    <h3>The Process in 4 Steps</h3>
                    <ol>
                        <li>Get a <strong>Foreclosure Letter</strong> and list of documents from your current bank.</li>
                        <li>Apply to the new bank and get a <strong>Sanction Letter</strong>.</li>
                        <li>The new bank issues a cheque to your old bank.</li>
                        <li>Your old bank hand-overs the original property documents to the new bank (takes 15-30 days).</li>
                    </ol>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-blue-400 font-bold mb-2">Pro Tip</h4>
                        <p className="mb-0 text-slate-300">"Before switching, talk to your current bank." Often, banks have a **'Retention Desk'** that can lower your rate for a small processing fee (₹5000-₹10000) without the hassle of a full balance transfer. Always try this first!</p>
                    </div>

                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.LOAN.EMI} className="inline-block p-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">
                            Recalculate Your EMI Savings
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
