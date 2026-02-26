import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "Indexation Changes: How Property Tax is Calculated in 2025",
    description: "Confused by the new real estate tax rules? Learn how the removal of indexation benefits impacts your property sale and how to calculate LTCG tax under the new laws.",
    category: "TAX",
    slug: ROUTES.LEARN.INDEXATION_REMOVAL,
    date: "2025-02-22",
    icon: "🏠",
    colorClass: "bg-slate-100",
    isNew: true
};

export default function IndexationImpact() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="Indexation Changes: How Property Tax is Calculated in 2025"
                description="Confused by the new real estate tax rules? Learn how the removal of indexation benefits impacts your property sale and how to calculate LTCG tax under the new laws."
                type="Article"
                url="https://calcguide.in/learn/indexation-benefit-removal-property-tax-impact/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Indexation Impact</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Indexation Changes:<br /> The New Real Estate Tax Reality
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Selling a house in 2025? The tax math has changed completely after Budget 2024. Here is how it impacts your bottom line.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>What was Indexation?</h2>
                    <p>
                        For decades, Indian real estate investors enjoyed the <strong>CII (Cost Inflation Index)</strong> benefit. It allowed you to "inflate" your purchase price based on a government-issued index, thereby reducing your taxable profit. You then paid 20% tax on this lower amount. It was a massive shield against the nominal gains caused by inflation.
                    </p>

                    <h2>The New Law: 12.5% Without Indexation</h2>
                    <p>
                        In the July 2024 Budget, the government removed indexation for all properties bought after 2001 and unified the Long Term Capital Gains (LTCG) tax rate at a flat <strong>12.5%</strong>.
                    </p>

                    <div className="bg-slate-100 p-8 rounded-2xl my-8 border-l-4 border-slate-600 shadow-inner">
                        <h4 className="text-slate-900 mt-0 font-bold">The Choice (The "Safety Valve"):</h4>
                        <p className="text-sm text-slate-700">
                            Because of significant public concern, the government introduced a retrospective amendment. For properties bought <strong>before July 23, 2024</strong>, individual taxpayers have a choice:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            <div className="bg-white p-4 rounded-xl border border-slate-200">
                                <span className="block text-xs font-bold text-slate-400 uppercase">Option 1</span>
                                <span className="block font-bold mt-1">12.5% Tax</span>
                                <span className="text-xs text-slate-500">No Indexation Benefit</span>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-slate-200">
                                <span className="block text-xs font-bold text-slate-400 uppercase">Option 2</span>
                                <span className="block font-bold mt-1">20% Tax</span>
                                <span className="text-xs text-slate-500">With Indexation Benefit</span>
                            </div>
                        </div>
                    </div>

                    <h3>Who Wins? (The 9% Logic)</h3>
                    <p>
                        The math depends on how fast your property appreciated. Generally, if your property grew at more than <strong>9-10% CAGR</strong>, the new 12.5% rate is actually <strong>better</strong> for you. If your property grew slower than inflation (like older apartments in Tier-2 cities), you are better off with the old 20% + Indexation rule.
                    </p>

                    <h3>The 2001 Grandfathering Explained</h3>
                    <p>
                        If you are selling an ancestral property bought by your parents in the 1980s or 90s, you don't use their actual purchase price. You use the <strong>Fair Market Value (FMV) as of April 1, 2001</strong> as your cost of acquisition. This FMV is determined by a government-approved valuer and based on the stamp duty rates of that time.
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-blue-400 font-bold mb-2">Strategy Tip</h4>
                        <p className="mb-0 text-slate-300">"Always calculate both ways." The government has theoretically given you a choice. However, the calculation involves adjusting for the year of sale and holding period. Do not pay the tax based on the first number you see; running both scenarios could save you lakhs in taxes.</p>
                    </div>

                    <h2>Capital Gains Exemption (Section 54)</h2>
                    <p>Regardless of which rate you choose, you can still save the entire tax if you reinvest the profit into another residential property within 2 years (or 3 years for construction) or buy 54EC bonds (up to ₹50 Lakhs).</p>

                    <h3>Compare Your Tax Options</h3>
                    <p>Don't leave the decision to guesswork. Use our dedicated property tax calculator to compare the 12.5% vs 20% scenarios side-by-side.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.INVESTMENT.LTCG_TAX} className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all font-bold shadow-lg">
                            🏦 Property LTCG Tax Compare Tool →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
