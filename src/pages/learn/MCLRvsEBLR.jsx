import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

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
            <SchemaGenerator
                name="MCLR vs EBLR Switch – Payback Maths"
                description="Comparison between MCLR and EBLR linked home loans. Calculate your savings and payback period when switching."
                type="Article"
                url="https://calcguide.in/learn/mclr-vs-eblr-switch-payback-maths/"
            />

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
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        If your home loan is older than 2019, you might be paying significantly higher interest on MCLR. Here is how to calculate the switch benefit.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The Evolution of Lending Rates</h2>
                    <p>
                        The RBI has been trying to make banks pass on rate cuts to customers for a decade. This journey went from <strong>BPLR</strong> to <strong>Base Rate</strong> to <strong>MCLR</strong>, and finally to <strong>EBLR</strong> in October 2019.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                        <div className="p-6 border border-slate-200 rounded-2xl bg-slate-50 shadow-sm">
                            <h4 className="mt-0 font-bold text-slate-900">MCLR (2016 - 2019)</h4>
                            <p className="text-sm text-slate-600 leading-relaxed italic">"The Black Box Rate"</p>
                            <p className="text-xs text-slate-500 mt-2">Linked to a bank's internal cost of funds. Often opaque. Banks are notoriously slow to reduce MCLR when market rates drop, but quick to increase them.</p>
                        </div>
                        <div className="p-6 border border-blue-200 rounded-2xl bg-blue-50 shadow-sm">
                            <h4 className="mt-0 font-bold text-blue-900">EBLR (2019 - Present)</h4>
                            <p className="text-sm text-slate-600 leading-relaxed italic">"The Transparent Rate"</p>
                            <p className="text-xs text-slate-500 mt-2">Linked to an External Benchmark (usually the Repo Rate). Every time RBI changes the repo rate, your EBLR loan MUST change by law within 3 months.</p>
                        </div>
                    </div>

                    <h3>The "Sticky" MCLR Trap</h3>
                    <p>
                        Many borrowers stay on MCLR because they don't want to pay a 0.25% conversion fee. However, MCLR rates in India are often <strong>0.5% to 1.5% higher</strong> than EBLR for the same bank. On a ₹50 Lakh loan, a 1% difference is ₹50,000 in interest every single year.
                    </p>

                    <h3>Calculating the Payback Period</h3>
                    <p>
                        The switch usually involves a <strong>conversion fee</strong> (usually around ₹5,000 + GST or 0.25% of balance).
                    </p>

                    <div className="bg-yellow-50 p-8 rounded-2xl my-8 border-l-4 border-yellow-600 shadow-inner">
                        <h4 className="text-yellow-900 mt-0 font-bold">The Switch Math:</h4>
                        <p className="font-mono text-sm mb-4">Conversion Fee / Monthly EMI Interest Saving = Payback Period (Months)</p>
                        <p className="mb-0 text-sm italic">Example: You pay ₹5,900 to switch. Your EMI drops by ₹1,100, but only ₹800 of that is interest saving. Your payback is 7.3 months. Since you have 144 months left on your loan, this is a massive win.</p>
                    </div>

                    <h3>Pros and Cons of EBLR</h3>
                    <ul>
                        <li><strong>Pros:</strong> Full transparency, faster rate resets, lower benchmark than MCLR during low-interest cycles.</li>
                        <li><strong>Cons:</strong> High volatility. When RBI hikes rates, your EMI goes up immediately (quarterly), whereas MCLR loans only reset once a year.</li>
                    </ul>

                    <h3>How to request the switch?</h3>
                    <p>You don't need a new loan. Simply visit your bank's home loan branch and ask for the "MCLR to EBLR conversion form". It is a standard procedure. If they refuse, threaten a Balance Transfer to another bank—this usually gets things moving.</p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-green-400 font-bold mb-2 italic">Pro Strategy Tip</h4>
                        <p className="mb-0 text-sm opacity-90">"Watch the Cycle." Switch to EBLR when the RBI interest rate cycle has peaked and is expected to fall. If you are in a high-inflation environment where rates are expected to shoot up, MCLR might actually save you money for a few months due to its delayed 1-year reset cycle.</p>
                    </div>

                    <h3>Analyze Your Potential Savings</h3>
                    <p>Use our amortisation schedule to see exactly how much interest balance you have. If your balance is over ₹20 Lakhs, switching is almost always worth it.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.LOAN.AMORTISATION_SCHEDULE} className="inline-flex items-center gap-2 p-4 bg-slate-100 border border-slate-300 rounded-xl hover:border-blue-500 transition-all font-bold text-blue-700">
                            📊 Check Interest Balance →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
