import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

export const metadata = {
    title: "Old vs New Tax Regime 2025 – Which is Better?",
    description: "Detailed comparison of Indian tax regimes for FY 2025-26. Understand standard deduction, slab rates, and the breakeven point.",
    category: "TAX",
    slug: ROUTES.LEARN.OLD_VS_NEW_TAX,
    date: "2025-02-21",
    icon: "🏢",
    colorClass: "bg-blue-100",
    isNew: true
};

export default function OldVsNewTax() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Tax Strategy</span>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-6 leading-tight">
                        Old vs New Tax Regime 2025:<br /> The Definite Guide
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        With Budget 2024 updates, the New Tax Regime is now the 'Default'. But should you stay or should you switch?
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The New Regime: Simplified & Zero-Tax</h2>
                    <p>
                        The New Tax Regime was introduced to simplify the lives of taxpayers. No receipts to keep, no 80C to track. In Budget 2024, the government added two more sweeteners:
                    </p>
                    <ul>
                        <li><strong>Standard Deduction:</strong> Increased to ₹75,000 (from ₹50,000).</li>
                        <li><strong>Rebate:</strong> Full rebate for income up to ₹7 Lakhs (effectively ₹7.75 Lakhs after standard deduction).</li>
                    </ul>

                    <div className="bg-blue-50 p-6 rounded-xl my-8 border-l-4 border-blue-600">
                        <h3 className="text-blue-900 mt-0">The 2025 Slab Rates (New Regime)</h3>
                        <ul className="list-none p-0 text-sm">
                            <li>0 - 3L: 0%</li>
                            <li>3 - 7L: 5%</li>
                            <li>7 - 10L: 10%</li>
                            <li>10 - 12L: 15%</li>
                            <li>12 - 15L: 20%</li>
                            <li>Above 15L: 30%</li>
                        </ul>
                    </div>

                    <h3>The Old Regime: The Deduction Powerhouse</h3>
                    <p>
                        The Old Regime still exists and can be better if you pay heavy rent (HRA) or have a large home loan. However, you must explicitly opt for it; otherwise, your employer will deduct tax as per the New Regime.
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-yellow-400 font-bold mb-2">The Breakeven Rule of Thumb</h4>
                        <p className="text-sm mb-0 text-slate-300">
                            If your total deductions (80C + 80D + HRA + Interest) are <strong>less than ₹3,75,000</strong>, the <strong>New Regime</strong> will likely save you more money. If they are higher, the Old Regime wins.
                        </p>
                    </div>

                    <h3>Compare for Your Salary</h3>
                    <p>
                        Don't guess. Use our real-time comparison tool to see the exact difference for your salary.
                    </p>
                    <div className="mt-6">
                        <Link to={ROUTES.CALCULATORS.TAX.INCOME_TAX} className="inline-flex items-center gap-2 p-4 border-2 border-slate-200 rounded-xl hover:border-blue-500 transition-colors bg-slate-50 font-bold text-blue-700">
                            👉 Open Income Tax Calculator
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
