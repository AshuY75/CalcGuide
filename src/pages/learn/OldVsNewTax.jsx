import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "Old vs New Tax Regime 2025 – Which is Better?",
    description: "Detailed comparison of Indian tax regimes for FY 2025-26. Understand standard deduction, slab rates, and the mathematical breakeven point for HRA and 80C.",
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
            <SchemaGenerator
                name="Old vs New Tax Regime 2025 – Which is Better?"
                description="Detailed comparison of Indian tax regimes for FY 2025-26. Understand standard deduction, slab rates, and the breakeven point."
                type="Article"
                url="https://calcguide.in/learn/old-vs-new-tax-regime-2025-comparison/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Tax Strategy</span>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-6 leading-tight">
                        Old vs New Tax Regime 2025:<br /> The Definite Guide
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        With Budget 2024 and 2025 updates, the New Tax Regime is now the 'Default' and significantly more attractive. But for many, the Old Regime is still a hidden goldmine.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">

                    <h2>The Paradigm Shift in Indian Taxation</h2>
                    <p>
                        For decades, Indian taxpayers were forced to "save to save tax"—stuffing money into insurance policies (LIC), PPF, and ELSS just to lower their taxes. The New Tax Regime (NTR) flipped this script. It offers lower slab rates in exchange for giving up almost all deductions.
                    </p>
                    <p>
                        As of the latest budget, the New Regime has been aggressively incentivized, with a higher **Standard Deduction** and a full **Section 87A rebate** for income up to ₹7 Lakhs.
                    </p>

                    <h2>The New Regime: Simplified & Zero-Tax (Up to ₹7.75L)</h2>
                    <p>
                        The New Regime is designed for the modern professional who wants liquidity (cash in hand) rather than locked-in investments.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-xl my-8 border-l-4 border-blue-600 shadow-sm">
                        <h3 className="text-blue-900 mt-0">The 2025-26 Slab Rates (New Regime)</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm font-semibold">
                            <div className="bg-white p-3 rounded border border-blue-100">₹0 - 3L: <span className="text-blue-600">0%</span></div>
                            <div className="bg-white p-3 rounded border border-blue-100">₹3 - 7L: <span className="text-blue-600">5%</span></div>
                            <div className="bg-white p-3 rounded border border-blue-100">₹7 - 10L: <span className="text-blue-600">10%</span></div>
                            <div className="bg-white p-3 rounded border border-blue-100">₹10 - 12L: <span className="text-blue-600">15%</span></div>
                            <div className="bg-white p-3 rounded border border-blue-100">₹12 - 15L: <span className="text-blue-600">20%</span></div>
                            <div className="bg-white p-3 rounded border border-blue-100">Above 15L: <span className="text-blue-600">30%</span></div>
                        </div>
                        <p className="mt-4 mb-0 text-sm italic text-slate-600 font-bold">Note: Standard Deduction of ₹75,000 applies to ALL salaried employees in the New Regime.</p>
                    </div>

                    <h2>The Old Regime: For the Homeowners & Renters</h2>
                    <p>
                        The Old Regime remains beneficial primarily for those with high fixed expenses that qualify for deductions. If you are paying a **Home Loan EMI** (Sec 24b) and living in a **Rented Apartment** (HRA), the Old Regime might save you more than ₹50,000 in annual taxes compared to the New Regime.
                    </p>
                    <h3>Common Deductions in Old Regime:</h3>
                    <ul>
                        <li><strong>Section 80C:</strong> Up to ₹1.5 Lakh (PPF, ELSS, Insurance, Kids' fees).</li>
                        <li><strong>Section 24(b):</strong> Up to ₹2 Lakhs on Home Loan Interest.</li>
                        <li><strong>HRA:</strong> Based on your city and rent (No upper limit other than actuals).</li>
                        <li><strong>Section 80D:</strong> Up to ₹75,000 (Medical insurance for self and parents).</li>
                    </ul>

                    <h2>The Mathematical Breakeven Point</h2>
                    <p>
                        The "Breakeven point" is the amount of total deductions you need to show in the Old Regime to make it exactly equal to the New Regime's tax liability.
                    </p>
                    <div className="overflow-x-auto my-8">
                        <table className="w-full text-left bg-slate-50 rounded-lg overflow-hidden not-prose border border-slate-200">
                            <thead className="bg-slate-200 text-slate-700 uppercase text-xs font-bold">
                                <tr>
                                    <th className="p-4">Annual Income</th>
                                    <th className="p-4">Breakeven Deduction Required</th>
                                    <th className="p-4">Decision Path</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                <tr>
                                    <td className="p-4 font-bold">₹10 Lakhs</td>
                                    <td className="p-4">₹2,62,500</td>
                                    <td className="p-4 text-xs">If your HRA+80C exceeds this, choose Old.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">₹15 Lakhs</td>
                                    <td className="p-4">₹3,58,000</td>
                                    <td className="p-4 text-xs">Homeowners usually win in Old Regime here.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">₹20 Lakhs</td>
                                    <td className="p-4">₹3,75,000</td>
                                    <td className="p-4 text-xs">Deductions must be very high to win in Old.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2>Critical Strategy: The Default Status</h2>
                    <p>
                        From FY 2023-24 onwards, the **New Tax Regime is the default**. This means if you don't tell your HR specifically to use the Old Regime, they will deduct TDS based on the New Regime.
                    </p>
                    <p>
                        However, you can still switch between them when filing your Income Tax Return (ITR) at the end of the year, **unless you have business income**. Business owners only get one chance in their lifetime to switch back to the Old Regime once they've opted for the New one.
                    </p>

                    <div className="bg-slate-900 text-white p-8 rounded-2xl my-10 shadow-xl">
                        <h3 className="text-yellow-400 mt-0">My Recommendation</h3>
                        <p className="text-slate-300">
                            If you are early in your career and earn less than ₹10 Lakhs, don't waste your energy on 80C products just to save tax. Choose the **New Regime**, keep the extra cash, and invest it in an Equity SIP for long-term growth. The returns from a good SIP will far outweigh the ₹5,000-₹10,000 tax you might save in the Old Regime.
                        </p>
                    </div>

                    <h3>Compare Now</h3>
                    <p>
                        Every salary is different. One person's Old Regime win is another's New Regime loss. Use our precise comparison tool to calculate your exact tax to the rupee.
                    </p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.TAX.INCOME_TAX} className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-bold shadow-lg shadow-blue-100">
                            📊 Split-Screen Tax Comparison →
                        </Link>
                    </div>

                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
