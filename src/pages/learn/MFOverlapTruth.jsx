import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

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
                        Buying 10 funds feels safe. But if they all own HDFC Bank and Reliance, you aren't diversified—you're just over-diversified and paying unnecessary fees.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>What is Mutual Fund Overlap?</h2>
                    <p>
                        <strong>Portfolio Overlap</strong> happens when two or more mutual funds in your portfolio hold common stocks. In the tightly regulated Indian market, Large Cap and Flexi Cap managers often fall into the same "safety" basket of stocks.
                    </p>
                    <p>For example, if you own both the <em>HDFC Top 100</em> and <em>ICICI Bluechip Fund</em>, your overlap could be as high as <strong>85%</strong>. This means out of every ₹100 you invest, ₹85 goes into exactly the same stocks at the same valuations. You aren't getting two different strategies; you're getting two different wrappers for the same gift.</p>

                    <h2>The Illusion of Diversification</h2>
                    <p>
                        Many investors think that owning multiple funds protects them from a market crash. This is only true if the funds are <strong>Uncorrelated</strong>. If all your funds own the same top 10 stocks of the Nifty 50, they will all crash together.
                    </p>
                    <div className="bg-purple-50 p-6 rounded-xl my-8 border-l-4 border-purple-600">
                        <h4 className="text-purple-900 mt-0 font-bold">The Three Hidden Dangers of Overlap:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                            <li><strong>Concentration Risk</strong>: If a major stock (like a leading Reliance or HDFC) faces a scandal, your entire portfolio suffers multiple times.</li>
                            <li><strong>The Fee Drain</strong>: Each fund has an Expense Ratio (often 0.70% to 2%). Paying this to 8 different managers for the same stocks is a guaranteed way to lower your CAGR.</li>
                            <li><strong>Index Performance without Index Cost</strong>: Over-diversification often turns your portfolio into a "Closet Index Fund"—you perform exactly like the Nifty 50, but pay much higher fees than a 0.2% Index Fund.</li>
                        </ul>
                    </div>

                    <h3>How to build a 'Zero Overlap' Portfolio?</h3>
                    <p>
                        The goal is to pick funds that complement each other across <strong>Capitalization</strong> and <strong>Style</strong>:
                    </p>
                    <ul className="space-y-4">
                        <li>
                            <strong>Core: 1 Nifty 50 Index Fund</strong><br />
                            <span className="text-sm text-slate-500 italic">Captures the top 50 companies at the lowest cost.</span>
                        </li>
                        <li>
                            <strong>Growth: 1 Mid Cap Fund</strong><br />
                            <span className="text-sm text-slate-500 italic">Captures high-growth stocks that aren't in the Nifty 50 yet. Zero overlap with Large cap.</span>
                        </li>
                        <li>
                            <strong>Diversifier: 1 International Fund (Nasdaq or S&P 500)</strong><br />
                            <span className="text-sm text-slate-500 italic">Zero overlap with the Indian market. Provides currency hedge (USD-INR).</span>
                        </li>
                    </ul>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-purple-400 font-bold mb-2 italic">How to check Overlap?</h4>
                        <p className="mb-0 text-slate-300">"Check the top 10." For most equity funds, the top 10 stocks make up 40-60% of the portfolio. If the top 10 stocks of Fund A and Fund B have more than 5 identical names, you have an overlap problem. Aim for a total portfolio overlap of <strong>under 20%</strong> across all holdings.</p>
                    </div>

                    <h3>The Psychology of 'Collection'</h3>
                    <p>Financial apps make it too easy to buy funds. Many investors collect mutual funds like stickers. Resist the urge. A perfectly balanced portfolio rarely needs more than <strong>3 or 4 funds</strong> total.</p>

                    <h3>Analyze Your Portfolio</h3>
                    <p>Don't let overlap eat your returns. Use our tool to compare two funds before you start your next SIP.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.INVESTMENT.MF_OVERLAP} className="inline-block p-4 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition shadow-lg">
                            🤝 Analyze My Fund Overlap Now →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
