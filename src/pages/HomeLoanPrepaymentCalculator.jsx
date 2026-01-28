import React from 'react';
import { Link } from 'react-router-dom';
import CalculatorContent from '../components/CalculatorContent';
import HomeLoanPrepaymentCalculatorUI from '../components/calculators/HomeLoanPrepaymentCalculatorUI';
import { ROUTES } from '../routes/paths';

export default function HomeLoanPrepaymentCalculator() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header Section */}
            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.LOAN} className="hover:text-blue-600">Loan Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Prepayment Calculator</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Home Loan EMI & Prepayment Calculator</h1>
                    <p className="text-slate-600">Check annual bonus prepayment, tax impact, and ROI vs SIP</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Calculator and Content Column */}
                    <div className="md:col-span-2 space-y-8">
                        <HomeLoanPrepaymentCalculatorUI />

                        {/* SEO Content: High Value, Non-Templated */}
                        <article className="prose prose-blue max-w-none bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">

                            <h2 className="text-2xl font-bold text-slate-800">Should You Prepay or Invest? (The 12% Rule)</h2>
                            <p>
                                The biggest dilemma for Indian borrowers is: <em>"I have ₹1 Lakh extra. Should I pay off my home loan or start a SIP?"</em>
                            </p>
                            <p>
                                The answer lies in the <strong>Interest Rate Gap</strong>. Home Loans typically cost 8.5% - 9%, while Nifty 50 Index Funds have historically returned 11-12% over 15+ years.
                            </p>

                            <div className="not-prose my-6 overflow-hidden rounded-lg border border-slate-200">
                                <table className="min-w-full bg-white text-sm">
                                    <thead className="bg-slate-50 text-slate-700">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-bold">Scenario</th>
                                            <th className="px-4 py-3 text-left font-bold">Action</th>
                                            <th className="px-4 py-3 text-left font-bold">Why?</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr>
                                            <td className="px-4 py-3 font-medium">Early Tenure (Year 1-7)</td>
                                            <td className="px-4 py-3 text-green-700 font-bold">PREPAY</td>
                                            <td className="px-4 py-3">Interest component is highest. Prepayment has maximum impact.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium">Late Tenure (Year 15+)</td>
                                            <td className="px-4 py-3 text-blue-700 font-bold">INVEST</td>
                                            <td className="px-4 py-3">You are mostly paying principal. Prepayment saves very little interest.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium">Loan Rate &lt; 8%</td>
                                            <td className="px-4 py-3 text-blue-700 font-bold">INVEST</td>
                                            <td className="px-4 py-3">Cheap debt is good. You can earn more in Mutual Funds.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 mt-8">Prepayment Charges & RBI Rules (2025)</h3>
                            <p>
                                Before prepaying, check your loan type. The RBI has strictly banned prepayment penalties for certain categories, but not all.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-slate-700">
                                <li><strong>Floating Rate Loans:</strong> ZERO Penalty. Banks cannot charge you for prepaying any amount.</li>
                                <li><strong>Fixed Rate Loans:</strong> Banks <em>can</em> charge 2% - 4% penalty. Calculate if interest savings > penalty cost.</li>
                            </ul>

                            <h3 className="text-xl font-bold text-slate-800 mt-8">The "Tax Trap" of Prepayment</h3>
                            <p>
                                If you are in the <strong>Old Tax Regime</strong> and claim Section 24(b) deductions (up to ₹2 Lakhs interest), prepaying your loan reduces your interest outgo.
                                This means your <strong>taxable income might increase</strong>.
                            </p>
                            <p>
                                <strong>Pro Tip:</strong> Use the "Advanced Options" in our calculator above to see your <em>Net Interest Saved</em> after accounting for lost tax benefits.
                            </p>

                        </article>
                    </div>

                    {/* Sidebar with Strategic Internal Links */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Plan Your Finances</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">📈</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">SIP Calculator</p>
                                        <p className="text-xs text-slate-500">Compare returns vs Loan</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.LOAN.EMI} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🔢</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">EMI Calculator</p>
                                        <p className="text-xs text-slate-500">Recalculate monthly burden</p>
                                    </div>
                                </Link>
                                <div className="p-3 rounded-lg bg-orange-50 border border-orange-100">
                                    <div className="flex items-start gap-2">
                                        <span className="text-lg">💡</span>
                                        <div>
                                            <p className="text-xs font-bold text-orange-800 uppercase mb-1">Did you know?</p>
                                            <p className="text-xs text-slate-600 leading-snug">
                                                Paying just <strong>1 extra EMI</strong> per year can reduce your 20-year loan tenure by almost <strong>4 years</strong>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
