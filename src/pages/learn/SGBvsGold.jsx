import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

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
                        SGB vs Physical Gold:<br /> The 2025 Investment Battle
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Gold is more than a metal; it's insurance. But are you buying it the wrong way?
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The Traditional Way: Physical Gold</h2>
                    <p>
                        Physical gold (jewelry, coins, biscuits) is the most popular form of wealth in India. It offers a sense of safety and utility (you can wear it). However, it comes with <strong>making charges</strong> (8-25%), <strong>GST</strong> (3%), and the risk of <strong>theft</strong>.
                    </p>

                    <h2>The Smarter Way: Sovereign Gold Bonds (SGB)</h2>
                    <p>
                        SGBs are government securities denominated in grams of gold. They are issued by the RBI on behalf of the Government of India. You don't get 'real' gold; you get the 'value' of gold plus extra benefits.
                    </p>

                    <div className="bg-amber-50 p-6 rounded-xl my-8 border-l-4 border-amber-600">
                        <h4 className="text-amber-900 mt-0">Why SGB usually wins:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                            <li><strong>2.5% Annual Interest</strong>: SGBs pay you interest twice a year on your initial investment. Physical gold pays ₹0.</li>
                            <li><strong>Capital Gains Tax</strong>: If you hold SGB until maturity (8 years), all your profit is <strong>Tax-Free</strong>. Physical gold is taxed at 20% with indexation.</li>
                            <li><strong>No Making Charges</strong>: You buy at the market rate (or ₹50/gram discount if buying online).</li>
                        </ul>
                    </div>

                    <h3>Comparison Table</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse border border-slate-200">
                            <thead>
                                <tr className="bg-slate-50">
                                    <th className="border p-3 text-left">Feature</th>
                                    <th className="border p-3 text-left">Physical Gold</th>
                                    <th className="border p-3 text-left">SGB</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-3 font-bold">Safety</td>
                                    <td className="border p-3 text-red-600">Risk of Theft</td>
                                    <td className="border p-3 text-green-600">Sovereign Guarantee</td>
                                </tr>
                                <tr>
                                    <td className="border p-3 font-bold">Taxation</td>
                                    <td className="border p-3 italic">Taxable</td>
                                    <td className="border p-3 font-bold text-green-600 text-xs">Exempt (at maturity)</td>
                                </tr>
                                <tr>
                                    <td className="border p-3 font-bold">Income</td>
                                    <td className="border p-3">Nil</td>
                                    <td className="border p-3 text-emerald-600">2.5% Yearly</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="mt-8">When to buy Physical Gold?</h3>
                    <p>
                        If you need gold for a wedding within the next 1-2 years, physical gold is your only choice. SGBs have a 5-year lock-in (early exit possible on stock markets but often at a discount).
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-amber-400 font-bold mb-2">Final Verdict</h4>
                        <p className="mb-0 text-slate-300">For long-term wealth building, SGB is the clear winner. You get the growth of gold price + 2.5% cash + zero tax. It's the most efficient way to capture the appreciation of gold in India.</p>
                    </div>

                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.GOLD.GOLD_JEWELLERY} className="inline-block p-4 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700 transition shadow-lg">
                            Check Gold Jewelry Cost vs Value
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
