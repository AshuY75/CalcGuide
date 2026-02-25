import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';


export const metadata = {
    title: "Mutual Fund Overlap: Why More Funds Doesn't Mean Better Returns",
    description: "Do you have 10 mutual funds? You might be owning the same stocks 10 times. Learn what Mutual Fund Overlap is and how to truly diversify your portfolio.",
    category: "INVESTMENT",
    slug: ROUTES.LEARN.MF_OVERLAP_TRUTH,
    date: "2025-02-22",
    icon: "🤝",
    colorClass: "bg-purple-100",
    isNew: true
};

export default function MFOverlapTruth() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="Mutual Fund Overlap: Why More Funds Doesn't Mean Better Returns"
                description="Do you have 10 mutual funds? You might be owning the same stocks 10 times. Learn what Mutual Fund Overlap is and how to truly diversify your portfolio."
                type="Article"
                url="https://calcguide.in/learn/mutual-fund-overlap-why-more-isnt-better/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">MF Overlap</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Mutual Fund Overlap:<br /> The Secret Portfolio Killer
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Buying more funds feels safe. But if they all own HDFC Bank and Reliance, you aren't diversified—you're just paying more fees.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>What is Mutual Fund Overlap?</h2>
                    <p>
                        <strong>Portfolio Overlap</strong> happens when two or more mutual funds in your portfolio hold common stocks. For example, if you own an Index Fund and a Large Cap Fund, there is a 70-90% chance they both own similar amounts of Bluechip stocks.
                    </p>

                    <h2>The Illusion of Diversification</h2>
                    <p>
                        Many investors believe that having 7-10 funds makes them 'safe'. However, in the Indian market, most 'Flexi Cap' and 'Large Cap' funds are forced to buy from a limited pool of 100 stocks.
                    </p>
                    <div className="bg-purple-50 p-6 rounded-xl my-8 border-l-4 border-purple-600">
                        <h4 className="text-purple-900 mt-0">Why overlap is bad:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                            <li><strong>Concentration Risk</strong>: If one stock (like a major bank) crashes, your entire portfolio takes a massive hit because every fund owned it.</li>
                            <li><strong>Management Fees</strong>: You are paying an Expense Ratio to multiple managers for essentially doing the same job.</li>
                            <li><strong>Over-complication</strong>: Tracking 10 funds is harder than tracking 3, with no extra return.</li>
                        </ul>
                    </div>

                    <h3>How to check Overlap?</h3>
                    <p>
                        You don't need to manually read factsheets. Use an overlap tool to compare the top holdings. If the overlap is <strong>above 30%</strong>, you should evaluate if you really need both funds.
                    </p>

                    <h3>How to build a 'Zero Overlap' Portfolio?</h3>
                    <p>
                        The goal is to pick funds that complement each other rather than copy each other:
                    </p>
                    <ul>
                        <li><strong>1 Nifty 50 Index Fund</strong> (for Large Caps)</li>
                        <li><strong>1 Mid Cap Fund</strong> (for Growth)</li>
                        <li><strong>1 International Fund</strong> (for US/Global exposure)</li>
                    </ul>
                    <p>By splitting your money across different <strong>caps</strong> and <strong>geographies</strong>, you ensure that the overlap stays near zero.</p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-purple-400 font-bold mb-2">The Golden Rule</h4>
                        <p className="mb-0 text-slate-300">"Less is More." A 3-fund portfolio that covers the whole market is often more profitable and less stressful than a 15-fund portfolio that overlaps by 80%.</p>
                    </div>

                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.INVESTMENT.MF_OVERLAP} className="inline-block p-4 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition shadow-lg">
                            Analyze My Fund Overlap Now
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
