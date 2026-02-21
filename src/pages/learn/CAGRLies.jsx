import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

export const metadata = {
    title: "Why CAGR Lies – The Truth About Volatility",
    description: "Understand why a 12% CAGR doesn't mean your money grows by 12% every year, and how to read your mutual fund statements correctly.",
    category: "INVESTMENT",
    slug: ROUTES.LEARN.CAGR_LIES,
    date: "2025-02-21",
    icon: "🧐",
    colorClass: "bg-red-100",
    isNew: true
};

export default function CAGRLies() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">CAGR Truth</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Why CAGR Lies:<br /> The Hidden Truth About Returns
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Your mutual fund app says "15% CAGR". You've invested for 3 years, but your profit isn't 45%. Why?
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The Multi-Year Fallacy</h2>
                    <p>
                        CAGR (Compound Annual Growth Rate) is a "smoothed" return. It assumes your money grew at a steady, consistent rate every single year. But markets don't work like that.
                    </p>

                    <div className="bg-red-50 p-6 rounded-xl my-8 border-l-4 border-red-600">
                        <h4 className="text-red-900 mt-0">Example of a 10% CAGR:</h4>
                        <ul className="list-none p-0 m-0 space-y-1 text-sm">
                            <li>Year 1: <strong>+40%</strong></li>
                            <li>Year 2: <strong>-20%</strong></li>
                            <li>Year 3: <strong>+10%</strong></li>
                        </ul>
                        <p className="mt-4 mb-0 font-bold">The average is 10%, but your experience as an investor was a roller coaster.</p>
                    </div>

                    <h3>XIRR is the Real Truth</h3>
                    <p>
                        For SIP investors, CAGR is almost useless. If you invest ₹10,000 every month, and the market crashes in Year 2, your Month 13-24 investments are buying units at a discount. CAGR doesn't capture this 'Rupee Cost Averaging'.
                    </p>
                    <p>
                        <strong>XIRR (Extended Internal Rate of Return)</strong> is the only number that tells you how <em>your</em> specific money behaved over time.
                    </p>

                    <h3>The Sequence of Returns Risk</h3>
                    <p>
                        If the market crashes when you start your SIP, it's actually <strong>good</strong> for you (you buy cheap). If the market crashes just before you reach your goal (Year 15), it's <strong>disastrous</strong>. Two investors with the same 12% CAGR can have vastly different end results depending on <em>when</em> the good and bad years happened.
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-green-400 font-bold mb-2">The Takeaway</h4>
                        <p className="mb-0 text-slate-300">Don't fall in love with a single 'Rate' number on a website. Focus on your <strong>Portfolio Value</strong> and your <strong>Target Goal</strong>. Use XIRR to monitor performance, but use Asset Allocation to manage risk.</p>
                    </div>

                    <h3>Check Your True Returns</h3>
                    <div className="mt-6">
                        <Link to={ROUTES.CALCULATORS.INVESTMENT.XIRR} className="inline-flex items-center gap-2 p-4 border-2 border-slate-200 rounded-xl hover:border-red-500 transition-colors bg-slate-50 font-bold text-red-700">
                            👉 Open XIRR Calculator
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
