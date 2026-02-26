import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "LTCG Tax Harvesting 2025 – Save ₹15,000 every year",
    description: "Learn how to use the annual ₹1.25 Lakh exemption to legally avoid paying LTCG tax on your mutual fund profits.",
    category: "INVESTMENT",
    slug: ROUTES.LEARN.LTCG_HARVESTING,
    date: "2025-02-21",
    icon: "✂️",
    colorClass: "bg-green-100",
    isNew: true
};

export default function LTCGTaxHarvesting() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="LTCG Tax Harvesting 2025 – Save ₹15,000 every year"
                description="Learn how to use the annual ₹1.25 Lakh exemption to legally avoid paying LTCG tax on your mutual fund profits."
                type="Article"
                url="https://calcguide.in/learn/ltcg-tax-harvesting-guide-2025/"
            />

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
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Budget 2024 increased LTCG tax to 12.5%. But you can still pay ₹0 tax on up to ₹1.25 Lakh of profit every single year. Here is how to harvest it.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>What is Capital Gains Tax Harvesting?</h2>
                    <p>
                        Tax harvesting is the strategic process of selling your mutual fund units (or stocks) to "realize" capital gains and then immediately buying them back.
                    </p>
                    <p>
                        This isn't "selling out" of your investment. It is a technical maneuver to reset your "cost of acquisition" to a higher level, which drastically reduces your future tax liability when you actually need the money for retirement.
                    </p>

                    <div className="bg-green-50 p-8 rounded-2xl my-8 border-l-4 border-green-600 shadow-inner">
                        <h4 className="text-green-900 mt-0 font-bold">The Golden Rule: The ₹1,25,000 Exemption</h4>
                        <p className="mb-0 italic text-slate-700">The government allows the first <strong>₹1.25 Lakh</strong> of Long Term Capital Gains (on equity assets) in a financial year to be completely tax-exempt. If you don't book this profit by March 31st, you lose the exemption for that year. It does NOT carry forward.</p>
                    </div>

                    <h2>Step-by-Step Harvesting Strategy</h2>
                    <ol className="space-y-6">
                        <li>
                            <strong>Identify Profitable Holdings:</strong> Look for mutual funds held for more than 12 months (making them 'Long Term'). Identify how much "unrealized gain" you have.
                        </li>
                        <li>
                            <strong>Calculate the "Tax-Free" Units:</strong> Calculate how many units you need to sell to realize exactly ₹1,25,000 in gains.
                        </li>
                        <li>
                            <strong>Execute the Sell:</strong> Sell those units on your brokerage platform (Zerodha, Groww, etc.).
                        </li>
                        <li>
                            <strong>The Buyback:</strong> Re-invest the entire proceeds back into the same fund or an equivalent Index fund. Since settlement in India is now T+1, you can usually buy back within 24 hours.
                        </li>
                    </ol>

                    <div className="bg-slate-900 text-white p-8 rounded-2xl my-10 shadow-xl">
                        <h4 className="text-yellow-400 font-bold mb-4 italic">The Power of 10 Years</h4>
                        <p className="mb-0 text-sm opacity-90 leading-relaxed">By doing this every year for 10 years, you effectively wash <strong>₹12.5 Lakhs</strong> of your wealth of any future tax. At a 12.5% tax rate, you have legally saved yourself from a <strong>₹1,56,250</strong> tax bill in the future.</p>
                    </div>

                    <h2>Important Precautions (Avoid the Trap)</h2>
                    <ul>
                        <li><strong>Exit Load Awareness:</strong> Many mutual funds charge 1% if you sell within 365 days. Always ensure your units have crossed the 1-year mark to avoid this cost.</li>
                        <li><strong>Re-investment Discipline:</strong> The biggest risk is not buying back. If you sell to harvest tax but keep the cash in your bank account, you lose out on the market growth, which costs far more than the tax saved.</li>
                        <li><strong>Round-Trip Costs:</strong> You will pay a tiny amount in STT and Stamp Duty. However, for a ₹1.25 Lakh gain, the costs are usually under ₹500, while the tax saving is ₹15,625.</li>
                    </ul>

                    <h2>Difference between Harvesting and Booking</h2>
                    <p>Regular "Profit Booking" means taking money out of the market. "Tax Harvesting" means keeping the money in the market but paying the government a visit to show them your "booked" profits within the exempt limit.</p>

                    <h3>Calculate Your Harvestable Gain</h3>
                    <p>Use our precise LTCG tool to see exactly how many units you should sell today to stay under the ₹1.25 Lakh limit.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.INVESTMENT.LTCG_TAX} className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-bold shadow-lg shadow-green-100">
                            👉 Plan My Tax Harvest →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
