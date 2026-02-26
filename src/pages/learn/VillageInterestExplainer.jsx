import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "Understanding '₹2 Interest': The Math of Village Money Lending",
    description: "Decoding the informal interest rates in rural India. Why ₹2 or ₹3 interest per month is actually a 24-36% annual burden.",
    category: "LOAN",
    slug: ROUTES.LEARN.VILLAGE_INTEREST_EXPLAINER,
    date: "2025-02-21",
    icon: "🚜",
    colorClass: "bg-orange-100",
    isNew: true
};

export default function VillageInterestExplainer() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="Understanding '₹2 Interest': The Math of Village Money Lending"
                description="Decoding the informal interest rates in rural India. Why ₹2 or ₹3 interest per month is actually a 24-36% annual burden."
                type="Article"
                url="https://calcguide.in/learn/village-interest-rates-hindi-math-explained/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Village Finance</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        '₹2 Ka Byaaj':<br /> The Informal Interest Trap
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        In rural India, loans aren't talked about in APY. They talk about "Rupees per month". Here is why that's a dangerous trap.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The Language of Rural Loans</h2>
                    <p>
                        In villages across Haryana, Punjab, and Uttar Pradesh, money lenders (Sahukars) describe interest as <strong>"₹2 Saikda"</strong> (2 Rupees per hundred per month).
                    </p>
                    <p>To an unsuspecting borrower, ₹2 sounds small. But that's <strong>per month</strong>. </p>

                    <div className="bg-orange-50 p-8 rounded-2xl my-8 border-l-4 border-orange-600 shadow-inner">
                        <h4 className="text-orange-900 mt-0 font-bold">The Conversion Math:</h4>
                        <ul className="text-sm text-slate-700 leading-relaxed space-y-2 mt-4 list-none p-0">
                            <li>₹2 per month = 2% per month</li>
                            <li>2% × 12 months = <strong>24% per year (Simple)</strong></li>
                            <li>With compounding = <strong>26.8% per year (APY)</strong></li>
                        </ul>
                    </div>

                    <h3>Simple vs Compound ('Byaaj ka Byaaj')</h3>
                    <p>Most informal lenders use <strong>Monthly Compounding</strong>. If you don't pay the interest this month, it gets added to your principal next month. This is how a small loan of ₹1 Lakh can become ₹3 Lakhs in just a few years, leading to land loss or debt cycles.</p>

                    <h3>Comparison: Bank vs Sahukar</h3>
                    <div className="overflow-x-auto my-8">
                        <table className="w-full text-sm border border-slate-200 bg-white">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="p-4 text-left">Lender</th>
                                    <th className="p-4 text-left">Rural Term</th>
                                    <th className="p-4 text-left">Annual Rate (APR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-4">Public Bank (SBI/KCC)</td>
                                    <td className="p-4">~60 Paisa</td>
                                    <td className="p-4 font-bold text-green-600">7 - 9%</td>
                                </tr>
                                <tr>
                                    <td className="p-4">Private Provider</td>
                                    <td className="p-4">~1.2 Rupee</td>
                                    <td className="p-4 text-yellow-600">14 - 18%</td>
                                </tr>
                                <tr>
                                    <td className="p-4">Village Sahukar</td>
                                    <td className="p-4">₹2 - ₹5</td>
                                    <td className="p-4 font-black text-red-600">24% - 60%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-orange-400 font-bold mb-2 italic">Essential Survival Tip</h4>
                        <p className="mb-0 text-slate-300">"Prioritize the KCC." Before going to a private lender, check your eligibility for a **Kisan Credit Card (KCC)**. The government provides interest subvention where your effective rate can be as low as **4%** if you pay on time. That's nearly 10x cheaper than many village lenders.</p>
                    </div>

                    <h3>Calculate Your Real Interest</h3>
                    <p>Don't be fooled by small monthly numbers. Use our calculator to see the total interest you will pay over a year.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.LOAN.EMI} className="inline-block p-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition shadow-lg">
                            🚜 Open Interest Calculator →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
