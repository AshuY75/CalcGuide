import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

export const metadata = {
    title: "Indexation Changes: How Property Tax is Calculated in 2025",
    description: "Confused by the new real estate tax rules? Learn how the removal of indexation benefits impacts your property sale and how to calculate LTCG tax under the new laws.",
    category: "TAX",
    slug: ROUTES.LEARN.INDEXATION_IMPACT,
    date: "2025-02-22",
    icon: "🏠",
    colorClass: "bg-slate-100",
    isNew: true
};

export default function IndexationImpact() {
    return (
        <div className="bg-slate-50 min-h-screen">
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
                        Selling a house in 2025? The tax math has changed completely. Here is what it means for your profit.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>What was Indexation?</h2>
                    <p>
                        For decades, Indian real estate investors enjoyed the <strong>CII (Cost Inflation Index)</strong> benefit. It allowed you to inflate your purchase price based on inflation, reducing your taxable profit. You then paid 20% tax on this "reduced" profit.
                    </p>

                    <h2>The New Law: 12.5% Without Indexation</h2>
                    <p>
                        In the 2024 Budget, the government removed indexation for properties bought after 2001 and changed the tax rate to a flat <strong>12.5%</strong>.
                    </p>
                    <div className="bg-slate-100 p-6 rounded-xl my-8 border-l-4 border-slate-600">
                        <h4 className="text-slate-900 mt-0">The Choice (Special Relief):</h4>
                        <p className="text-sm text-slate-700">
                            Because of public feedback, for properties bought <strong>before July 23, 2024</strong>, taxpayers can choose between:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-xs">
                            <li><strong>12.5%</strong> Tax on profit (No Indexation)</li>
                            <li><strong>20%</strong> Tax on profit (With Indexation)</li>
                        </ul>
                    </div>

                    <h3>Who Wins?</h3>
                    <p>
                        The math depends on how fast your property appreciated compared to inflation:
                    </p>
                    <ul>
                        <li><strong>Fast Appreciation</strong> (e.g., Gurgaon, Bangalore): The new 12.5% rate is usually <strong>better</strong>.</li>
                        <li><strong>Slow Appreciation</strong> (e.g., Old apartments, rural land): The old 20% with indexation is usually <strong>better</strong>.</li>
                    </ul>

                    <h3>The 2001 Grandfathering Rule</h3>
                    <p>
                        If you are selling an ancestral property bought before 2001, you can still use the <strong>Fair Market Value (FMV) as of April 1, 2001</strong> as your cost price. This allows you to skip decades of tax on appreciation.
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-blue-400 font-bold mb-2">The Takeaway</h4>
                        <p className="mb-0 text-slate-300">"Never assume. Always calculate both ways." The government has given a rare choice to taxpayers. Use a calculator to see which option saves you more lakhs before filing your capital gains.</p>
                    </div>

                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.TAX.LTCG} className="inline-block p-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition shadow-lg">
                            Compare Indexation Options Now
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
