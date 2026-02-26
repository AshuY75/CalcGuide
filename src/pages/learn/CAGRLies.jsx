import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "Why CAGR Lies – The Truth About Volatility",
    description: "Understand why a 12% CAGR doesn't mean your money grows by 12% every year. Learn about Sequence of Returns risk and XIRR for mutual funds.",
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
            <SchemaGenerator
                name="Why CAGR Lies – The Truth About Volatility"
                description="Understand why a 12% CAGR doesn't mean your money grows by 12% every year."
                type="Article"
                url="https://calcguide.in/learn/why-cagr-lies-the-real-deal/"
            />

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
                        Your mutual fund app says "15% CAGR". You've invested for 3 years, but your profit isn't 45%. Here is the math behind why CAGR can be misleading for retail investors.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">

                    <h2>The Multi-Year Fallacy</h2>
                    <p>
                        CAGR (Compound Annual Growth Rate) is a "smoothed" return. It takes the starting value and the ending value, and then calculates the constant rate at which your money would have grown if it grew by the same percentage every single year.
                    </p>
                    <p>
                        <strong>The Problem?</strong> Markets never grow at a constant rate. They move in "fits and starts"—huge gains followed by painful corrections. When the CAGR is reported as 12%, it hides the fact that in Year 2 you might have been down 20%, causing many investors to panic and sell.
                    </p>

                    <div className="bg-red-50 p-6 rounded-xl my-8 border-l-4 border-red-600 shadow-sm">
                        <h4 className="text-red-900 mt-0 font-bold">The Illusion of "Average" 10% CAGR</h4>
                        <p className="text-sm text-slate-600 mb-4">Consider an investment of ₹1,00,000 over 3 years:</p>
                        <ul className="list-none p-0 m-0 space-y-2 text-sm">
                            <li className="flex justify-between border-b border-red-100 pb-1"><span>Year 1: <strong>+40%</strong></span> <span className="text-slate-500">Value: ₹1,40,000</span></li>
                            <li className="flex justify-between border-b border-red-100 pb-1"><span>Year 2: <strong>-20%</strong></span> <span className="text-slate-500">Value: ₹1,12,000</span></li>
                            <li className="flex justify-between pb-1"><span>Year 3: <strong>+10%</strong></span><span className="text-slate-500">Value: ₹1,23,200</span></li>
                        </ul>
                        <p className="mt-4 mb-0 font-bold text-red-900 uppercase tracking-tighter text-xs">Reality Check:</p>
                        <p className="mt-1 mb-0 text-slate-700">The CAGR is 7.2%, but the arithmetic average is 10%. Furthermore, if Year 2 had a -40% drop, your CAGR would turn negative even with huge gains in other years!</p>
                    </div>

                    <h2>Why CAGR is Useless for SIPs</h2>
                    <p>
                        CAGR assumes a **Lumpsum** investment. It assumes all your money was in the market from Day 1. If you are a Systematic Investment Plan (SIP) investor, you are adding money every month.
                    </p>
                    <p>
                        <strong>XIRR (Extended Internal Rate of Return)</strong> is the only metric that matters for an SIP. XIRR calculates the return on each individual installment. If the market crashes in Month 12, your Month 13 investment buys units at a "discount," which actually boosts your XIRR, even though it might temporarily lower your CAGR.
                    </p>

                    <h2>The "Sequence of Returns" Risk</h2>
                    <p>
                        This is the most dangerous "lie" hidden in a CAGR number. Two investors can have the exact same 12% CAGR over 20 years, but end up with vastly different amounts of money depending on **when** the market performed well.
                    </p>
                    <ul>
                        <li><strong>Scenario A:</strong> Market grows 20% in the first 5 years and 5% in the last 5 years.</li>
                        <li><strong>Scenario B:</strong> Market grows 5% in the first 5 years and 20% in the last 5 years.</li>
                    </ul>
                    <p>
                        For an SIP investor, <strong>Scenario B is significantly better</strong>. Why? Because you accumulate more units when the market is slow/down in the early years, and those many units explode in value during the high-return final years. CAGR doesn't distinguish between these two scenarios.
                    </p>

                    <div className="bg-slate-900 text-white p-8 rounded-2xl my-10 shadow-xl">
                        <h3 className="text-green-400 mt-0">The Mathematics of Recovery</h3>
                        <p className="text-slate-300">
                            Many people think a 20% drop followed by a 20% gain brings you back to breakeven. **It does not.**
                        </p>
                        <p className="font-mono bg-slate-800 p-4 rounded text-sm text-yellow-200">
                            100 - 20% = 80<br />
                            80 + 20% = 96<br />
                            (You are still at a 4% loss)
                        </p>
                        <p className="mb-0 text-slate-400 italic">To recover from a 50% crash, you need a 100% gain just to get back to zero.</p>
                    </div>

                    <h2>How to Read Your Mutual Fund Statement</h2>
                    <ol>
                        <li><strong>Ignore Absolute Returns:</strong> They don't account for time. ₹1 Lakh profit in 1 year is great; ₹1 Lakh profit in 10 years is terrible (it didn't even beat inflation).</li>
                        <li><strong>Look for XIRR:</strong> This is your "Personal Inflation" beat rate. If your XIRR is 12% and inflation is 6%, your wealth is growing at 6% in real terms.</li>
                        <li><strong>Benchmark Comparison:</strong> Is your fund's 15% CAGR better than the Nifty 50 Index's 14%? If not, you are taking extra risk for no extra reward.</li>
                    </ol>

                    <h2>Conclusion: Managing the Volatility</h2>
                    <p>
                        The "Lie" of CAGR is that it makes wealth creation look like a straight line. In reality, it is a jagged, stressful curve. The key to winning is not finding the fund with the highest CAGR, but finding the asset allocation that keeps you from selling during the "Year 2 minus 20%" moments.
                    </p>

                    <h3>Check Your Real Returns</h3>
                    <p>
                        Stop guessing your portfolio performance. Use our XIRR tool to calculate the exact return on every rupee you've invested.
                    </p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.INVESTMENT.XIRR} className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all font-bold shadow-lg shadow-red-100">
                            📊 Calculate My Actual XIRR →
                        </Link>
                    </div>

                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
