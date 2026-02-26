import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "SGB vs Physical Gold: Which is Better in 2025?",
    description: "Thinking of buying gold? Compare Sovereign Gold Bonds (SGB) with Physical Gold on safety, tax benefits, and yearly interest. Make the smarter investment choice.",
    category: "INVESTMENT",
    slug: ROUTES.LEARN.SGB_VS_GOLD,
    date: "2025-02-22",
    icon: "🪙",
    colorClass: "bg-amber-100",
    isNew: true
};

export default function SGBvsGold() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="SGB vs Physical Gold: Which is Better in 2025?"
                description="Thinking of buying gold? Compare Sovereign Gold Bonds (SGB) with Physical Gold on safety, tax benefits, and yearly interest. Make the smarter investment choice."
                type="Article"
                url="https://calcguide.in/learn/sgb-vs-physical-gold-better-investment-2025/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">SGB vs Gold</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        SGB vs Physical Gold:<br /> Smarter Wealth Preservation
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Gold is more than a metal; it's the ultimate insurance against inflation. But are you buying it the wrong way?
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The Traditional Way: Physical Gold</h2>
                    <p>
                        Physical gold (jewelry, coins, biscuits) is deeply ingrained in Indian culture. It offers utility (you can wear it) and immediate liquidity. However, from a <strong>financial perspective</strong>, it is the least efficient way to hold gold due to:
                    </p>
                    <ul>
                        <li><strong>Making Charges:</strong> 8% to 25% of the value is lost instantly.</li>
                        <li><strong>GST:</strong> 3% on the total value.</li>
                        <li><strong>Purity Risk:</strong> Unless it's Hallmarked 22K/24K, you might get a lower price when selling.</li>
                        <li><strong>Storage:</strong> Safety locker charges at banks can eat into your returns.</li>
                    </ul>

                    <h2>The Investor's Choice: Sovereign Gold Bonds (SGB)</h2>
                    <p>
                        SGBs are government securities issued by the RBI. You don't hold the physical metal, but you hold a certificate that tracks the price of 24K gold.
                    </p>

                    <div className="bg-amber-50 p-8 rounded-2xl my-8 border-l-4 border-amber-600 shadow-inner">
                        <h4 className="text-amber-900 mt-0 font-bold">Why SGB is the 'Math' Winner:</h4>
                        <ol className="list-decimal pl-5 space-y-3 text-slate-700">
                            <li><strong>2.5% Annual Interest:</strong> SGBs pay you 1.25% every 6 months on your <em>initial</em> investment amount. Physical gold pays you zero.</li>
                            <li><strong>Exempt from LTCG:</strong> If you hold the bond until its 8-year maturity, the entire profit (capital appreciation) is **completely Tax-Free**. No other gold investment offers this.</li>
                            <li><strong>No Friction Costs:</strong> No GST, no making charges, and usually a ₹50/gram discount if you buy online through your demat account.</li>
                        </ol>
                    </div>

                    <h3>The Comparison Table (2025 Edition)</h3>
                    <div className="overflow-x-auto not-prose my-8">
                        <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="p-4 text-left">Feature</th>
                                    <th className="p-4 text-left">Physical Gold</th>
                                    <th className="p-4 text-left">Gold SGB</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="p-4 font-bold">Safety</td>
                                    <td className="p-4 text-red-600">Risk of theft/burglary</td>
                                    <td className="p-4 text-green-600">RBI Guaranteed (Digital)</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">Taxation</td>
                                    <td className="p-4">Short/Long Term Capital Gains</td>
                                    <td className="p-4 font-bold text-green-600">Zero Tax (at Maturity)</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">Annual Income</td>
                                    <td className="p-4 italic">None</td>
                                    <td className="p-4 text-blue-600 font-bold">2.5% per annum</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">Storage Cost</td>
                                    <td className="p-4">Locker Fees (~₹2000/yr)</td>
                                    <td className="p-4">Zero</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="mt-8">When to buy Physical Gold instead?</h3>
                    <p>
                        Investment is not always about math; it's about use-cases. You should buy physical gold if:
                    </p>
                    <ul>
                        <li>You need the gold for a wedding or ceremony in the <strong>next 1-3 years</strong>. SGBs have an 8-year maturity (though you can sell them on the stock exchange earlier).</li>
                        <li>You want an asset that is completely "offline" and not dependent on a demat or bank account (emergency barter).</li>
                    </ul>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-amber-400 font-bold mb-2 italic">Pro Tip: Look for 'Old' SGBs in the Secondary Market</h4>
                        <p className="mb-0 text-slate-300">"Buy at a discount." You don't have to wait for the RBI to open a new tranche. You can buy existing SGBs on the stock market (NSE/BSE). Often, because of low liquidity, these trade at a <strong>2-3% discount</strong> to the current gold price. This gives you an immediate head start on your investment!</p>
                    </div>

                    <h3>Analyze Gold Jewelry Cost</h3>
                    <p>Using physical gold for investment? Calculate how much you are actually losing in making charges and GST before you buy.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.GOLD.JEWELLERY} className="inline-block p-4 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700 transition shadow-lg">
                            🪙 Jewellery Cost Calculator →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
