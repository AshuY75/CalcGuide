
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

import diffChart from '../../assets/prepayment-vs-sip-chart.png';
import familyImg from '../../assets/indian-family-home.png';
import compoundGraph from '../../assets/compounding-graph.png';

export const metadata = {
    title: "Home Loan Prepayment vs SIP – The 11% Rule",
    description: "Should you prepay your home loan or invest in SIP? We explain the 11% Rule with mathematical proof.",
    category: "LOANS",
    slug: ROUTES.LEARN.PREPAYMENT_VS_SIP,
    date: "2025-01-20",
    icon: "🏠",
    colorClass: "bg-blue-100",
    isNew: true
};

export default function PrepaymentVsSIP() {
    return (
        <div className="bg-slate-50 min-h-screen font-sans text-slate-900">

            {/* --- HERO SECTION --- */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
                    <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Strategic Wealth Building</span>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-6 leading-tight">
                        Home Loan Prepayment vs SIP:<br className="hidden md:block" /> The 11% Rule Explained
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                        You have an extra ₹20,000 this month. Should you kill your 9% home loan or feed a 12% SIP? Most people guess. Here is the mathematical proof.
                    </p>
                    <div className="flex items-center gap-4 mt-8 text-sm text-slate-500 font-medium">
                        <span>By CalcGuide Editor</span>
                        <span>•</span>
                        <span>8 Minute Read</span>
                        <span>•</span>
                        <span>Updated for 2025</span>
                    </div>
                </div>
            </div>

            {/* --- CONTENT CONTAINER --- */}
            <div className="max-w-4xl mx-auto px-4 py-12">

                {/* 1. Introduction */}
                <article className="prose prose-slate prose-lg md:prose-xl max-w-none">
                    <p>
                        It’s the classic Indian middle-class dilemma. You’ve got your bonus, or maybe a salary hike, and suddenly you have a surplus. The EMIs are pinching, but the stock market is buzzing.
                    </p>
                    <p>
                        <strong>The Question:</strong> Do you pay off your home loan debt to sleep better, or do you invest for wealth creation?
                    </p>
                    <div className="my-8">
                        <img src={familyImg} alt="Indian family standing confidently in front of their home, representing financial stability" className="rounded-2xl shadow-lg w-full object-cover h-auto" />
                        <p className="text-center text-sm text-slate-500 mt-2 italic">Peace of mind vs. Mathematical optimization. Why not both?</p>
                    </div>
                    <p>
                        With current Indian home loan interest rates hovering between <strong>8.50% and 9.50%</strong> (repo rate linked), the answer isn't just about feelings. It's about math.
                    </p>
                    <p>
                        Enter the <strong>11% Rule</strong>.
                    </p>

                    {/* 2. What Is the 11% Rule? */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">What Is the 11% Rule?</h2>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-6">
                        <p className="font-bold text-blue-900 text-lg mb-2">The Rule Simplified:</p>
                        <ul className="list-none space-y-2 m-0 p-0 text-blue-800">
                            <li>✅ <strong>Prepay Aggressively</strong> if your effective loan interest rate is <strong>above 11%</strong> (rare for home loans, common for personal loans).</li>
                            <li>❌ <strong>Invest in SIP</strong> if your effective loan interest is <strong>below 8%</strong>.</li>
                            <li>⚖️ <strong>The Grey Zone (8% - 11%)</strong>: This is where most home loans sit. Here, the decision depends on <em>tenure</em> and <em>risk appetite</em>.</li>
                        </ul>
                    </div>
                    <p>
                        Why 11%? Because long-term Equity Mutual Funds (Nifty 50 / Sensex) have historically delivered <strong>12-14% CAGR</strong>. After accounting for risk, volatility, and Long Term Capital Gains (LTCG) tax, a safe "net return" expectation is around 11%.
                    </p>
                    <p>
                        If your loan costs you 9%, and your investment gives you 11%, <strong>investing wins mathematically</strong>. But only if you stay disciplined.
                    </p>

                    {/* 3. How Home Loan Interest Actually Works */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">How Home Loan Interest Actually Works</h2>
                    <p>
                        Banks use the "Reducing Balance Method". In the early years, a huge chunk of your EMI goes towards interest, not principal.
                    </p>
                    <p>
                        For a ₹50 Lakh loan at 9% for 20 years:
                    </p>
                    <ul className="list-disc pl-6 text-slate-700 space-y-2">
                        <li><strong>EMI:</strong> ₹44,986</li>
                        <li><strong>Month 1 Interest:</strong> ₹37,500 (83% of your EMI!)</li>
                        <li><strong>Month 1 Principal:</strong> Only ₹7,486</li>
                    </ul>
                    <p>
                        This is why <em>early</em> prepayment is magical. Paying just one extra EMI a year can shave off years from your tenure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 my-8 not-prose">
                        <Link to={ROUTES.CALCULATORS.LOAN.EMI} className="flex-1 bg-white border-2 border-slate-200 hover:border-blue-600 p-4 rounded-xl text-center transition-colors group">
                            <span className="block font-bold text-slate-900 group-hover:text-blue-600">👉 Check Your Interest Burden</span>
                            <span className="text-xs text-slate-500">Home Loan EMI Calculator</span>
                        </Link>
                        <Link to={ROUTES.CALCULATORS.LOAN.HOME_LOAN_PREPAYMENT} className="flex-1 bg-white border-2 border-slate-200 hover:border-green-600 p-4 rounded-xl text-center transition-colors group">
                            <span className="block font-bold text-slate-900 group-hover:text-green-600">👉 Calculate Prepayment Savings</span>
                            <span className="text-xs text-slate-500">Prepayment Calculator</span>
                        </Link>
                    </div>

                    {/* 4. How SIP Returns Really Behave */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">How SIP Returns Really Behave</h2>
                    <p>
                        Unlike the fixed negative compounding of a loan, SIPs (Systematic Investment Plans) offer <strong>positive exponential compounding</strong>. But they come with volatility.
                    </p>
                    <div className="my-8">
                        <img src={compoundGraph} alt="Graph comparing Loan Interest falling vs SIP Compounding rising exponentially, crossing at the Decision Point" className="rounded-xl border border-slate-200 w-full" />
                    </div>
                    <p>
                        Over 15-20 years (typical home loan tenure), equity markets have rarely lost money. In fact, they usually beat inflation and loan rates significantly.
                    </p>
                    <p>
                        <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="text-blue-600 font-bold hover:underline">Check potential returns with our SIP Calculator</Link> to see the power of compounding involved.
                    </p>

                    {/* 5. Numerical Comparison */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Verdict: Real Numbers (Prepay vs SIP)</h2>
                    <p>
                        Let’s run the numbers for a typical Indian borrower.
                    </p>
                    <div className="overflow-x-auto my-8 rounded-xl border border-slate-200 shadow-sm not-prose">
                        <table className="w-full text-left bg-white">
                            <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-xs">
                                <tr>
                                    <th className="p-4">Scenario</th>
                                    <th className="p-4">Loan Details</th>
                                    <th className="p-4">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-sm">
                                <tr>
                                    <td className="p-4 font-bold text-slate-900">The Context</td>
                                    <td className="p-4">
                                        Loan: <strong>₹50 Lakhs</strong><br />
                                        Tenure: <strong>20 Years</strong><br />
                                        Interest: <strong>9%</strong>
                                    </td>
                                    <td className="p-4">
                                        Surplus available: <strong>₹20,000 / month</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
                        {/* Option A */}
                        <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                            <h3 className="font-bold text-blue-900 text-lg mb-2">Option A: Prepay Loan</h3>
                            <p className="text-slate-600 text-sm mb-4">You put that ₹20k into the loan every month.</p>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Loan closes in:</span>
                                    <span className="font-bold">~9 Years</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Interest Saved:</span>
                                    <span className="font-bold text-blue-700">₹32 Lakhs</span>
                                </div>
                            </div>
                        </div>
                        {/* Option B */}
                        <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100">
                            <h3 className="font-bold text-green-900 text-lg mb-2">Option B: Start SIP</h3>
                            <p className="text-slate-600 text-sm mb-4">You invest ₹20k in Index Funds (12% Return).</p>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Investment Duration:</span>
                                    <span className="font-bold">20 Years</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Corpus Created:</span>
                                    <span className="font-bold text-green-700">₹1.99 Crores</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p>
                        Even if we adjust for the fact that Option A frees up cashflow after 9 years to invest later, <strong>Option B (SIP) usually wins comfortably</strong> by ₹40-50 Lakhs in final net worth because the money compounded for longer.
                    </p>

                    <div className="my-8">
                        <img src={diffChart} alt="Bar chart comparison showing SIP Wealth Creating (Green) significantly outperforming Home Loan Interest Savings (Blue)" className="rounded-xl border border-slate-200 w-full" />
                    </div>

                    {/* 6. When Prepayment Wins */}
                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="text-blue-600">🛡️</span> When to Prepay
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                                <li><strong>High Interest:</strong> If your rate crosses 9.5-10%.</li>
                                <li><strong>Peace of Mind:</strong> You hate debt and sleep better being debt-free.</li>
                                <li><strong>Early Tenure:</strong> You are in the first 5 years of the loan (when interest component is highest).</li>
                                <li><strong>Low Risk Appetite:</strong> You aren't comfortable with stock market ups and downs.</li>
                            </ul>
                        </div>

                        {/* 7. When SIP Wins */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="text-green-600">🚀</span> When to SIP
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                                <li><strong>Long Horizon:</strong> You have 10-15 years for the money to grow.</li>
                                <li><strong>Tax Benefits:</strong> You are claiming Section 24(b) deduction (up to ₹2L interest). Prepaying reduces this benefit.</li>
                                <li><strong>Discipline:</strong> You promise not to spend that extra cash if you don't prepay.</li>
                                <li><strong>Lower Rate:</strong> Your loan is cheap (around 8.5%).</li>
                            </ul>
                        </div>
                    </div>

                    {/* 8. Hybrid Strategy */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Hybrid Strategy (Recommended)</h2>
                    <p>
                        Why choose? Do both. This is what most smart Indian investors do.
                    </p>
                    <p>
                        <strong>The 60:40 Split:</strong>
                    </p>
                    <ul className="list-disc pl-6 text-slate-700">
                        <li>Use <strong>60% of your surplus</strong> for a Nifty 50 Index Fund SIP.</li>
                        <li>Use <strong>40% of your surplus</strong> to prepay the Home Loan principal once a year.</li>
                    </ul>
                    <p>
                        This approach reduces your loan tenure from 20 years to ~12 years <em>AND</em> builds a solid corpus on the side. It minimizes risk while maximizing math.
                    </p>

                    {/* 9. Common Myths */}
                    <div className="bg-slate-900 text-white p-8 rounded-2xl my-12">
                        <h3 className="text-2xl font-bold text-yellow-500 mb-6">🚫 Busting Common Myths</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-lg mb-1">Myth: "I will invest later after closing the loan."</h4>
                                <p className="text-slate-300 text-sm">Fact: You lose the golden years of compounding. Starting an SIP 10 years late requires 3x the investment to reach the same goal.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Myth: "Loan Interest is bad."</h4>
                                <p className="text-slate-300 text-sm">Fact: A typical home loan at 8.5% is actually "cheap money" compared to inflation (6%) and equity returns (12%). It's the cheapest leverage available to retail Indians.</p>
                            </div>
                        </div>
                    </div>

                    {/* 10. Final Decision Framework */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Final Checklist: Decide Now</h2>
                    <ul className="space-y-3 font-medium text-slate-800 border-l-2 border-slate-300 pl-6">
                        <li className="flex items-center gap-2">
                            Interest Rate &gt; 9.5%? <span className="text-blue-600 font-bold">→ Prepay.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            Are you in the first 3 years of loan? <span className="text-blue-600 font-bold">→ Prepay aggressively.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            Can you handle 15% market drop? <span className="text-green-600 font-bold">→ SIP.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            Using Old Tax Regime? <span className="text-green-600 font-bold">→ SIP (Keep the loan for tax saving).</span>
                        </li>
                    </ul>

                    {/* 11. Conclusion */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white mt-12">
                        <h3 className="text-2xl font-bold mb-4">Run Your Own Numbers</h3>
                        <p className="mb-8 max-w-lg mx-auto text-blue-100">
                            Your situation is unique. Use our calculators to get the exact answer for your loan amount.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to={ROUTES.CALCULATORS.LOAN.HOME_LOAN_PREPAYMENT} className="bg-white text-blue-700 font-bold py-3 px-6 rounded-full hover:bg-slate-100 transition-colors">
                                Open Prepayment Calculator
                            </Link>
                            <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-400 transition-colors">
                                Open SIP Calculator
                            </Link>
                        </div>
                    </div>

                </article>
            </div>
        </div>
    );
}
