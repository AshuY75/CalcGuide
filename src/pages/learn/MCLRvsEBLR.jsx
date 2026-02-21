import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

export const metadata = {
    title: "MCLR vs EBLR Switch – Payback Maths",
    description: "Comparison between MCLR and EBLR linked home loans. Calculate your savings and payback period when switching.",
    category: "LOANS",
    slug: ROUTES.LEARN.MCLR_VS_EBLR,
    date: "2025-02-21",
    icon: "🔄",
    colorClass: "bg-green-100",
    isNew: true
};

export default function MCLRvsEBLR() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">MCLR vs EBLR</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        MCLR vs EBLR Switch: Is it Worth the Hassle?
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        If your home loan is older than 2019, you might be paying significantly higher interest on MCLR. Here is how to calculate the switch benefit.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>MCLR vs. EBLR: The Fundamental Difference</h2>
                    <p>
                        Before October 2019, most home loans were linked to the <strong>Marginal Cost of Funds Based Lending Rate (MCLR)</strong>. Today, all new loans are linked to an <strong>External Benchmark Lending Rate (EBLR)</strong>, usually the Repo Rate set by the RBI.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                        <div className="p-5 border border-slate-200 rounded-xl bg-slate-50">
                            <h4 className="mt-0 font-bold text-slate-900">MCLR (Internal)</h4>
                            <p className="text-sm text-slate-600">Linked to the bank's internal cost of funds. Banks are slow to reduce rates when RBI cuts the repo rate.</p>
                        </div>
                        <div className="p-5 border border-blue-200 rounded-xl bg-blue-50">
                            <h4 className="mt-0 font-bold text-blue-900">EBLR (External)</h4>
                            <p className="text-sm text-slate-600">Directly linked to RBI's Repo Rate. Transmission is transparent and instantaneous (usually quarterly).</p>
                        </div>
                    </div>

                    <h3>Should You Switch? (The Math)</h3>
                    <p>
                        The switch usually involves a <strong>processing fee or conversion fee</strong> (ranging from 0.25% to 0.5% + GST). To decide, you need to calculate the "Payback Period".
                    </p>

                    <div className="bg-yellow-50 p-6 rounded-xl my-8 border-l-4 border-yellow-600">
                        <h4 className="text-yellow-900 mt-0">Payback Formula:</h4>
                        <p className="font-mono text-sm font-bold">Switching Cost / Monthly Interest Savings = Months to Recover</p>
                        <p className="mb-0 text-sm mt-2">Example: If switching costs ₹10,000 and you save ₹1,000 per month in EMI interest, your payback period is 10 months. If you plan to stay in the house for 10+ years, it's a no-brainer!</p>
                    </div>

                    <h3>Important Checklist Before Switching</h3>
                    <ul className="list-decimal pl-5 space-y-4">
                        <li>
                            <strong>Check your current Spread:</strong> Banks often add a "mark-up" or spread above the benchmark. Ensure the new EBLR spread is lower than your current MCLR spread.
                        </li>
                        <li>
                            <strong>Remaining Tenure:</strong> If you only have 2-3 years left on your loan, the processing fee might outweigh the interest savings.
                        </li>
                        <li>
                            <strong>Negotiate with Current Bank:</strong> Most banks will offer to switch you from MCLR to EBLR for a small fee without requiring you to move to another bank (refinance).
                        </li>
                    </ul>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white text-center">
                        <h4 className="text-green-400 font-bold mb-2">Pro Tip</h4>
                        <p className="mb-0">When interest rates are falling, EBLR is your best friend. In a rising rate environment, MCLR reacts slightly slower, giving you a tiny buffer.</p>
                    </div>

                    <h3>Tool of the Day</h3>
                    <p>
                        Before you call your bank, generate your amortisation schedule to see how much interest you have left to pay.
                    </p>
                    <div className="mt-6">
                        <Link to={ROUTES.CALCULATORS.LOAN.AMORTISATION_SCHEDULE} className="inline-flex items-center gap-2 p-4 border-2 border-slate-200 rounded-xl hover:border-blue-600 transition-colors bg-slate-50 font-bold text-blue-700">
                            👉 Open Amortisation Schedule Calculator
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
