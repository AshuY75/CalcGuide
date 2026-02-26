import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "Hidden Fees in Investing: The 'Net Yield' Killer",
    description: "From Expense Ratios to STT and Stamp Duty – learn how hidden platform fees eat into your long-term wealth and how to pick the cheapest tools.",
    category: "UTILITY",
    slug: ROUTES.LEARN.HIDDEN_PLATFORM_FEES,
    date: "2025-02-21",
    icon: "🕵️",
    colorClass: "bg-red-100",
    isNew: true
};

export default function HiddenPlatformFees() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="Hidden Fees in Investing: The 'Net Yield' Killer"
                description="From Expense Ratios to STT and Stamp Duty – learn how hidden platform fees eat into your long-term wealth and how to pick the cheapest tools."
                type="Article"
                url="https://calcguide.in/learn/hidden-fees-investing-mutual-funds-stocks/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Hidden Fees</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        The Silent Leak:<br /> Decoding Hidden Investment Fees
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        A 1% fee sounds small until you realize it can eat up 30% of your final wealth over 20 years. Here is where the money is "leaking".
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>1. The Expense Ratio (Mutual Funds)</h2>
                    <p>
                        Every Mutual Fund charges an annual fee for management. This is the **Expense Ratio**.
                    </p>
                    <ul>
                        <li><strong>Regular Funds:</strong> 1.5% to 2.5% (includes commission for the broker/agent).</li>
                        <li><strong>Direct Funds:</strong> 0.1% to 1.0% (you buy directly from the AMC).</li>
                    </ul>
                    <p>By switching from Regular to Direct funds, you can save roughly 1% per year. On a ₹1 Crore portfolio, that's <strong>₹1 Lakh extra every year</strong> in your pocket instead of the agent's.</p>

                    <h2>2. Transaction Taxes (STT and Stamp Duty)</h2>
                    <p>When you buy or sell stocks in India, you pay taxes that aren't mentioned in the stock price:</p>
                    <ul>
                        <li><strong>STT (Securities Transaction Tax):</strong> 0.1% on delivery-based equity.</li>
                        <li><strong>Stamp Duty:</strong> 0.015% on buy transactions.</li>
                        <li><strong>Exchange Transaction Charges:</strong> Small fees paid to NSE/BSE.</li>
                    </ul>

                    <div className="bg-red-50 p-8 rounded-2xl my-8 border-l-4 border-red-600 shadow-inner">
                        <h4 className="text-red-900 mt-0 font-bold">The 'Churn' Problem:</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            If you constantly buy and sell (swing trading), these small 0.1% bites happen every time. If you churn your portfolio 20 times a year, you are losing 2-3% of your capital just to taxes and fees, regardless of whether you made a profit!
                        </p>
                    </div>

                    <h2>3. DP Charges and AMC Fees</h2>
                    <p>Most stockbrokers like Zerodha, Groww, or Angel One have <strong>DP (Depository Participant) Charges</strong>. This is typically a flat ₹13-16 charged every time you sell a share from your demat account. This makes selling small quantities of stocks (say 1 share worth ₹500) very expensive proportionally.</p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-red-400 font-bold mb-2 italic">Pro Tip: Index Funds and ETFs</h4>
                        <p className="mb-0 text-slate-300">"Lowest cost wins." If you want to invest in the top 50 companies (Nifty 50), look for the fund with the **lowest tracking error** and the **lowest expense ratio**. Often, an ETF (Exchange Traded Fund) has an expense ratio as low as 0.05%—nearly 20x cheaper than an active mutual fund!</p>
                    </div>

                    <h3>Calculate Your Real Returns</h3>
                    <p>What is your portfolio's "Net CAGR" after all these costs? Use our fee-aware calculator to find the truth.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.INVESTMENT.CAGR} className="inline-block p-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition shadow-lg">
                            🕵️ Real ROI Calculator →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
