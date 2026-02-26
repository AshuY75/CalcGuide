import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

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
            <SchemaGenerator
                name="Section 80C is Dying: Navigating the New Tax Regime (115BAC)"
                description="Is Section 80C still relevant in 2025? Learn why the New Tax Regime is the default choice for millions and how to decide if ELSS, PPF, and Insurance are still worth it."
                type="Article"
                url="https://calcguide.in/learn/section-80c-new-tax-regime-impact/"
            />

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
                        For decades, 80C was the 'holy grail' of tax saving for the Indian middle class. In 2025, it's becoming a relic of the past.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The Shift to the New Tax Regime (115BAC)</h2>
                    <p>
                        With the Union Budgets of 2023 and 2024, the Government of India has made the <strong>New Tax Regime</strong> the default option. In this regime, the tax rates are lower, the slabs are wider (up to ₹7 Lakh zero tax), but there's a catch: <strong>You lose almost all deductions.</strong> No HRA, no 80D (Health Insurance), and importantly, no ₹1.5 Lakh Section 80C.
                    </p>

                    <h2>The "Tax-Neutral" Point</h2>
                    <p>
                        Should you still care about 80C? The answer depends on your total deductions.
                    </p>
                    <div className="bg-red-50 p-8 rounded-xl my-8 border-l-4 border-red-600 shadow-inner">
                        <h4 className="text-red-900 mt-0 font-bold">The Break-Even Logic:</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            For a salaried professional earning ₹15 Lakhs, if your total deductions (80C + Home Loan + HRA) are **less than ₹3.75 Lakhs**, the New Tax Regime will result in a lower tax bill. If you are in the New Regime, your ELSS or LIC investments do NOT save you even 1 Rupee in tax.
                        </p>
                    </div>

                    <h3>What happens to my PPF and LIC?</h3>
                    <p>
                        Millions of Indians were sold Insurance and PPF as "Tax Saving Tools" first, and investment tools second. In 2025, you should flip the script:
                    </p>
                    <ul>
                        <li><strong>PPF:</strong> Still great for 100% tax-free maturity and safety, but only if you have a 15-year goal. Don't invest just to 'fill the 80C' if you aren't saving any tax.</li>
                        <li><strong>ELSS:</strong> This is an Equity Mutual Fund. If it's giving you good returns, keep it. But if you have better non-ELSS funds, there's no reason to lock your money for 3 years anymore.</li>
                        <li><strong>Life Insurance:</strong> Switch to a pure <strong>Term Plan</strong>. It's cheaper and offers higher coverage. Forget the 'Endowment' or 'Moneyback' plans that were bought solely for tax.</li>
                    </ul>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-red-400 font-bold mb-2 italic">The New Financial Freedom</h4>
                        <p className="mb-0 text-slate-300">"Liquidity is King." The end of mandatory 80C investing means you no longer have to lock your money in low-yield 5-year FDs or 15-year PPFs in March. You can now keep that cash for your emergency fund, or invest it in 'Liquid' assets that you can access whenever you actually need them!</p>
                    </div>

                    <h3>Compare Your Savings</h3>
                    <p>Don't guess which regime is better for you. Use our calculator to see exactly how much you save under the Old vs New system with and without 80C.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.TAX.INCOME_TAX} className="inline-block p-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition shadow-lg">
                            📉 Old vs New Tax Comparison →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
