import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

export const metadata = {
    title: "Section 80C is Dying: Navigating the New Tax Regime (115BAC)",
    description: "Is Section 80C still relevant in 2025? Learn why the New Tax Regime is the default choice for millions and how to decide if ELSS, PPF, and Insurance are still worth it.",
    category: "TAX",
    slug: ROUTES.LEARN.SECTION_80C_DYING,
    date: "2025-02-22",
    icon: "📉",
    colorClass: "bg-red-100",
    isNew: true
};

export default function Section80CDying() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Section 80C</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Section 80C is Dying:<br /> The End of Mandatory Investing?
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        For decades, 80C was the 'holy grail' of tax saving. In 2025, it's becoming a choice, not a necessity.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The Shift to the New Tax Regime</h2>
                    <p>
                        With the Union Budgets of 2023 and 2024, the Government of India has made the <strong>New Tax Regime (Section 115BAC)</strong> the default option. In this regime, you get lower tax rates but you lose all deductions—including the beloved ₹1.5 Lakh Section 80C.
                    </p>

                    <h2>Is 80C Still Worth It?</h2>
                    <p>
                        If you have recently switched to the New Tax Regime, your investments in LIC, PPF, and ELSS will <strong>not</strong> save you a single rupee in income tax.
                    </p>
                    <div className="bg-red-50 p-6 rounded-xl my-8 border-l-4 border-red-600">
                        <h4 className="text-red-900 mt-0">The Mathematics of Choice</h4>
                        <p className="text-sm text-slate-700">
                            Unless your total deductions (80C + HRA + 80D + Home Loan Interest) exceed <strong>₹3.75 Lakhs to ₹4.25 Lakhs</strong>, the New Tax Regime will almost always result in a lower tax bill than the Old Regime.
                        </p>
                    </div>

                    <h3>What happens to my PPF and LIC?</h3>
                    <p>
                        Many Indian parents have been "guilt-tripped" into buying insurance as tax-saving. In 2025, you should view these purely as financial instruments:
                    </p>
                    <ul>
                        <li><strong>PPF</strong>: Still great for tax-free maturity, but don't invest 'only' for 80C.</li>
                        <li><strong>ELSS</strong>: It's a mutual fund. If it's performing well, keep it. If you only bought it for tax, reconsider.</li>
                        <li><strong>Life Insurance</strong>: Buy a <strong>Term Plan</strong> for protection. Skip the 'investment-cum-insurance' plans if you are in the New Regime.</li>
                    </ul>

                    <h3>The Silver Lining</h3>
                    <p>
                        The "Death of 80C" actually gives you <strong>Financial Freedom</strong>. You no longer have to lock your money away in 5-year FDs or 15-year PPFs just to save tax in March. You can now invest that cash in Liquid Funds, Bluechip Stocks, or even keep it for your emergency fund without a tax penalty.
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-red-400 font-bold mb-2">The Golden Rule for 2025</h4>
                        <p className="mb-0 text-slate-300">"Invest for your goals, not for your tax collector." If an investment is good, buy it. If it's bad, don't buy it just for a 20% tax break.</p>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <Link to={ROUTES.CALCULATORS.TAX.INCOME_TAX} className="flex-1 text-center p-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition">
                            Compare Old vs New Tax Regime
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
