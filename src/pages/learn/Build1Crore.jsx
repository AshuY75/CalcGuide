import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "How to Build ₹1 Crore – The Realistic Roadmap",
    description: "A step-by-step guide to reaching your first ₹1 Crore through disciplined investing, patience, and the 15-15-15 rule. Understand inflation adjusted value and step-up strategies.",
    category: "INVESTMENT",
    slug: ROUTES.LEARN.BUILD_1_CRORE,
    date: "2025-02-21",
    icon: "💎",
    colorClass: "bg-blue-100",
    isNew: true
};

export default function Build1Crore() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="How to Build ₹1 Crore – The Realistic Roadmap"
                description="A step-by-step guide to reaching your first ₹1 Crore through disciplined investing, patience, and the 15-15-15 rule."
                type="Article"
                url="https://calcguide.in/learn/how-to-build-1-crore-mutual-funds/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Build 1 Crore</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        How to Build ₹1 Crore:<br /> The Realistic Roadmap
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Reaching ₹1 Crore is a psychological milestone that transforms your financial outlook. Here is the math, the science, and the discipline needed to get there.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">

                    <h2>Why ₹1 Crore? (The Anchor Milestone)</h2>
                    <p>
                        In India, the number "One Crore" carries more than just monetary value; it represents financial freedom and the transition from a 'saver' to an 'investor'. However, money is not static. Due to inflation (averaging 6-7% in India), ₹1 Crore today will buy significantly more than ₹1 Crore will in 20 years.
                    </p>
                    <p>
                        Despite this, reaching your first crore is critical because it represents the <strong>Critical Mass</strong> of your portfolio. Once you have ₹1 Crore invested, a 12% market return generates ₹12 Lakhs a year—often more than a senior professional's annual savings.
                    </p>

                    <h2>The 15-15-15 Rule: The Golden Standard</h2>
                    <p>
                        The most famous mathematical shortcut for Indian investors is the 15-15-15 rule. It simplifies the complexity of compounding into three easy-to-remember numbers:
                    </p>
                    <div className="bg-blue-600 text-white p-6 rounded-xl my-8 text-center shadow-lg">
                        <p className="text-3xl font-black mb-2">₹15,000 × 15 Years × 15%</p>
                        <p className="text-lg opacity-90">Invest <strong>₹15,000 monthly</strong> for <strong>15 years</strong> at an annual return of <strong>15%</strong> to reach <strong>₹1.01 Crore</strong>.</p>
                    </div>
                    <p>
                        <strong>Total Invested:</strong> ₹27 Lakhs<br />
                        <strong>Wealth Gained:</strong> ₹74 Lakhs
                    </p>

                    <h2>Realistic Timelines based on Returns</h2>
                    <p>
                        While 15% is achievable through aggressive Mid-cap or Small-cap funds, many prefer a more conservative Large-cap Index approach (12%). Here is the roadmap for different survival budgets:
                    </p>
                    <div className="overflow-x-auto my-8">
                        <table className="w-full text-left bg-slate-50 rounded-lg overflow-hidden not-prose border border-slate-200">
                            <thead className="bg-slate-200 text-slate-700 uppercase text-xs font-bold">
                                <tr>
                                    <th className="p-4">Monthly SIP</th>
                                    <th className="p-4">Total Invested</th>
                                    <th className="p-4">Target (12% CAGR)</th>
                                    <th className="p-4">Time Taken</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                <tr>
                                    <td className="p-4 font-bold text-slate-900">₹10,000</td>
                                    <td className="p-4">₹23 Lakhs</td>
                                    <td className="p-4 text-green-700 font-semibold">₹1.00 Cr</td>
                                    <td className="p-4">19 Years</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-900">₹25,000</td>
                                    <td className="p-4">₹39 Lakhs</td>
                                    <td className="p-4 text-green-700 font-semibold">₹1.00 Cr</td>
                                    <td className="p-4">13 Years</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-900">₹50,000</td>
                                    <td className="p-4">₹54 Lakhs</td>
                                    <td className="p-4 text-green-700 font-semibold">₹1.00 Cr</td>
                                    <td className="p-4">9 Years</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-900">₹1,00,000</td>
                                    <td className="p-4">₹65 Lakhs</td>
                                    <td className="p-4 text-green-700 font-semibold">₹1.00 Cr</td>
                                    <td className="p-4">5.5 Years</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2>The "Step-Up" Strategy (The Secret Accelerator)</h2>
                    <p>
                        Most people wait for their salary to increase before increasing their SIP. This is a mistake. By automating a <strong>10% Annual Step-Up</strong>, you can reach your goal much faster without feeling the pinch on your current lifestyle.
                    </p>
                    <p>
                        <strong>Example:</strong> A ₹10,000 SIP takes 19 years to hit ₹1 Crore at 12%. But if you increase your SIP amount by just 10% every year, you hit the target in <strong>14 years</strong>. You save 5 years of your life!
                    </p>

                    <h2>The Three Psychological Stages</h2>
                    <ol>
                        <li>
                            <strong>Stage 1: The Grind (0 - ₹25 Lakhs)</strong><br />
                            This is where 90% of investors quit. In the first 5 years, your portfolio might grow by ₹5 Lakhs but you've invested ₹6 Lakhs. It feels like "market isn't working." At this stage, your <strong>Savings Rate</strong> is the machine, not the market.
                        </li>
                        <li>
                            <strong>Stage 2: The Momentum (₹25 - ₹75 Lakhs)</strong><br />
                            This is the "Crossing the Chasm" phase. Suddenly, a 10% market jump adds ₹5 Lakhs to your net worth—more than your entire annual contribution. The excitement builds here.
                        </li>
                        <li>
                            <strong>Stage 3: The Explosion (₹75 Lakhs - ₹1 Crore)</strong><br />
                            The last 25 Lakhs usually happens in roughly 1/4th the time it took to reach the first 25 Lakhs. This is pure compounding at work.
                        </li>
                    </ol>

                    <div className="bg-yellow-50 p-6 rounded-xl my-8 border-l-4 border-yellow-600">
                        <h4 className="text-yellow-900 mt-0 italic font-bold">Pro Tip: Focus on the First 10 Lakhs</h4>
                        <p className="mb-0">Charlie Munger once famously said, "The first $100,000 is a b****, but you gotta do it." In India, the first ₹10 Lakhs is that barrier. Once you cross it, you are no longer just saving; you are wealthy in training.</p>
                    </div>

                    <h2>Common Pitfalls to Avoid</h2>
                    <ul>
                        <li><strong>Withdrawing for Lifestyle:</strong> Upgrading your car just when your portfolio hits ₹30 Lakhs resets your compounding clock back by 3-4 years.</li>
                        <li><strong>Chasing Last Year's Winner:</strong> Switching funds every year based on "Top Rated" tags destroys returns due to exit loads and missing the recovery days.</li>
                        <li><strong>Underestimating Tax:</strong> Always account for the 12.5% LTCG tax (Exemption up to ₹1.25L) on mutual fund profits.</li>
                    </ul>

                    <h3>Calculate Your Path Now</h3>
                    <p>
                        Every journey starts with a single calculation. Use our dynamic tracker to see exactly when you will reach your milestone based on your current savings.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                        <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP_1CR} className="inline-flex items-center gap-2 px-6 py-4 border-2 border-slate-900 rounded-xl hover:bg-slate-900 hover:text-white transition-all bg-white font-bold text-slate-900 shadow-sm">
                            🎯 ₹1 Crore Roadmap Calculator
                        </Link>
                        <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="inline-flex items-center gap-2 px-6 py-4 border-2 border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all bg-white font-bold text-blue-600 shadow-sm">
                            📈 General SIP Calculator
                        </Link>
                    </div>

                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
