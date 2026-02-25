import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';


export const metadata = {
    title: "How to Build ₹1 Crore – The Realistic Roadmap",
    description: "A step-by-step guide to reaching your first ₹1 Crore through disciplined investing, patience, and the 15-15-15 rule.",
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
                        Reaching ₹1 Crore is a psychological milestone. Here is the math and the discipline needed to get there in 10, 15, or 20 years.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The 15-15-15 Rule</h2>
                    <p>
                        In the Indian financial context, there's a legendary rule for becoming a 'Crorepati':
                    </p>
                    <div className="bg-blue-600 text-white p-6 rounded-xl my-8 text-center shadow-lg">
                        <p className="text-3xl font-black mb-2">₹15,000 × 15 Years × 15%</p>
                        <p className="text-lg opacity-90">Invest <strong>₹15k monthly</strong> for <strong>15 years</strong> at <strong>15% return</strong> to reach <strong>₹1 Crore</strong>.</p>
                    </div>

                    <h3>Realistic Timelines based on Returns</h3>
                    <p>
                        Since 15% is aggressive, let's look at more conservative 12% returns (standard large-cap index):
                    </p>
                    <table className="w-full text-left bg-slate-50 rounded-lg overflow-hidden not-prose">
                        <thead className="bg-slate-200 text-slate-700 uppercase text-xs font-bold">
                            <tr>
                                <th className="p-4">Monthly SIP</th>
                                <th className="p-4">Time to reach ₹1 Cr (at 12%)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 italic">
                            <tr><td className="p-4 font-bold text-slate-900">₹10,000</td><td className="p-4">~20 Years</td></tr>
                            <tr><td className="p-4 font-bold text-slate-900">₹25,000</td><td className="p-4">~13 Years</td></tr>
                            <tr><td className="p-4 font-bold text-slate-900">₹50,000</td><td className="p-4">~9 Years</td></tr>
                            <tr><td className="p-4 font-bold text-slate-900">₹1,00,000</td><td className="p-4">~5.5 Years</td></tr>
                        </tbody>
                    </table>

                    <h3 className="mt-12">The Three Stages of Wealth</h3>
                    <ol>
                        <li><strong>The Accumulation Phase (0 - 25 Lakhs):</strong> This feels the slowest. Compounding hasn't kicked in yet. Your contributions matter more than market returns.</li>
                        <li><strong>The Momentum Phase (25 - 75 Lakhs):</strong> Your portfolio begins to grow by amounts larger than your annual investment.</li>
                        <li><strong>The Explosion Phase (75 Lakhs - 1 Crore):</strong> The last 25 Lakhs usually happens in much less time than the first 25 Lakhs.</li>
                    </ol>

                    <div className="bg-yellow-50 p-6 rounded-xl my-8 border-l-4 border-yellow-600">
                        <h4 className="text-yellow-900 mt-0">Don't Wait for the 'Right' Time</h4>
                        <p className="mb-0">Waiting just 2 years to start an SIP can delay your 1-Crore goal by nearly 5 years at the end. The cost of delay is the highest tax on wealth.</p>
                    </div>

                    <h3>Start Your Journey</h3>
                    <p>
                        Use our dedicated target calculator to see exactly how much you need to start today.
                    </p>
                    <div className="mt-6">
                        <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP_1CR} className="inline-flex items-center gap-2 p-4 border-2 border-slate-200 rounded-xl hover:border-blue-600 transition-colors bg-slate-50 font-bold text-blue-700">
                            🎯 Open ₹1 Crore Goal Calculator
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
