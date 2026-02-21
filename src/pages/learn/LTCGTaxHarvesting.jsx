import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

export const metadata = {
    title: "LTCG Tax Harvesting 2025 – Save ₹15,000 every year",
    description: "Learn how to use the annual ₹1.25 Lakh exemption to legally avoid paying LTCG tax on your mutual fund profits.",
    category: "INVESTMENT",
    slug: ROUTES.LEARN.LTCG_TAX_HARVESTING,
    date: "2025-02-21",
    icon: "✂️",
    colorClass: "bg-green-100",
    isNew: true
};

export default function LTCGTaxHarvesting() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Tax Harvesting</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        LTCG Tax Harvesting 2025:<br /> The Legal Way to Pay Zero Tax
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Budget 2024 increased LTCG tax to 12.5%. But you can still pay ₹0 tax on up to ₹1.25 Lakh of profit every single year.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>What is Tax Harvesting?</h2>
                    <p>
                        Tax harvesting is the process of selling your mutual fund units (or stocks) to "realize" capital gains and then immediately buying them back. This resets your "cost of acquisition" to a higher level, reducing your future tax liability.
                    </p>

                    <div className="bg-green-50 p-6 rounded-xl my-8 border-l-4 border-green-600">
                        <h4 className="text-green-900 mt-0">The Goal: Use the ₹1,25,000 Exemption</h4>
                        <p className="mb-0 italic text-slate-700">The first ₹1.25 Lakh of Long Term Capital Gains (equity) in a financial year is tax-exempt. If you don't use it, you lose it. You cannot carry it forward to next year.</p>
                    </div>

                    <h3>Step-by-Step Harvesting Guide</h3>
                    <ol className="space-y-4">
                        <li>
                            <strong>Identity Holdings:</strong> Find stocks or mutual funds you've held for more than 1 year where you have "unrealized" profits.
                        </li>
                        <li>
                            <strong>Calculate Gain:</strong> Use our LTCG calculator to see how much gain you are sitting on.
                        </li>
                        <li>
                            <strong>Sell up to the Limit:</strong> Sell enough units to realize exactly ₹1,25,000 in total profit across your portfolio.
                        </li>
                        <li>
                            <strong>Buy Back immediately:</strong> Re-invest the entire proceeds back into the same fund or a similar one (after accounting for the 1-day settlement in India).
                        </li>
                    </ol>

                    <div className="bg-slate-900 text-white p-6 rounded-xl my-8">
                        <h4 className="text-yellow-400 font-bold mb-2">The Result</h4>
                        <p className="mb-0 text-sm">By doing this every year for 10 years, you effectively "tax-free" ₹12.5 Lakhs of your wealth. At 12.5% tax, you've saved <strong>₹1.56 Lakhs</strong> in taxes for free.</p>
                    </div>

                    <h3>Important Precautions</h3>
                    <ul className="list-disc pl-5">
                        <li><strong>Exit Load:</strong> Ensure the mutual fund doesn't charge an exit load (usually applies if sold within 1 year).</li>
                        <li><strong>STT:</strong> You will pay Securities Transaction Tax (STT) on the sell and buy transctions, but this is negligible compared to the tax savings.</li>
                        <li><strong>Stamp Duty:</strong> A small amount (0.005%) is charged on new purchases.</li>
                    </ul>

                    <h3>Plan Your Harvest</h3>
                    <div className="mt-6">
                        <Link to={ROUTES.CALCULATORS.INVESTMENT.LTCG} className="inline-flex items-center gap-2 p-4 border-2 border-slate-200 rounded-xl hover:border-green-500 transition-colors bg-slate-50 font-bold text-green-700">
                            👉 Open LTCG Tax Calculator
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
