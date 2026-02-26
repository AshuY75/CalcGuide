import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "Gratuity Math: How Much Will You Get After 5 Years?",
    description: "Understanding the Payment of Gratuity Act, 1972. Learn the formula, the 5-year eligibility rule, and how to calculate your final tax-free benefit.",
    category: "TAX",
    slug: ROUTES.LEARN.GRATUITY_EXPLAINER,
    date: "2025-02-21",
    icon: "📜",
    colorClass: "bg-blue-100",
    isNew: true
};

export default function GratuityExplainer() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="Gratuity Math: How Much Will You Get After 5 Years?"
                description="Understanding the Payment of Gratuity Act, 1972. Learn the formula, the 5-year eligibility rule, and how to calculate your final tax-free benefit."
                type="Article"
                url="https://calcguide.in/learn/gratuity-calculation-india-guide/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Gratuity</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Gratuity Explained:<br /> Your Loyalty Reward
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        A lump sum payment from your employer for years of service. But do you know exactly how it is calculated?
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>What is Gratuity?</h2>
                    <p>
                        Gratuity is a financial reward given by an employer to an employee in recognition of their long-term service. It is governed by the <strong>Payment of Gratuity Act, 1972</strong>. While many think it's a "bonus," it is actually a statutory benefit that companies with 10 or more employees <em>must</em> provide.
                    </p>

                    <h2>The 5-Year Continuity Rule</h2>
                    <p>
                        To be eligible for gratuity, you must have completed at least <strong>5 years of continuous service</strong> with the same employer.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-xl my-8 border-l-4 border-blue-600">
                        <h4 className="text-blue-900 mt-0 font-bold italic">The "4 Years 240 Days" Exception:</h4>
                        <p className="text-sm text-slate-700 m-0">
                            Court rulings have clarified that if you have completed 4 years and 190 days (in a 5-day week) or 240 days (in a 6-day week), you may still be eligible for gratuity. However, most HR departments strictly look for the 5-year mark on your Relieving Letter.
                        </p>
                    </div>

                    <h3>The Calculation Formula</h3>
                    <p>The math is based on your "Last Drawn Basic Salary + DA" and the "Years of Service":</p>
                    <div className="text-center py-6 bg-slate-50 border border-slate-200 rounded-2xl my-8">
                        <p className="text-xl font-mono font-black text-slate-800">Gratuity = (Last Basic + DA) × (15/26) × Years</p>
                        <p className="text-xs text-slate-500 mt-3 italic">Why 26? Because the act considers 4 days of rest in a month.</p>
                    </div>

                    <h3>Taxation: Is it really 'Free' money?</h3>
                    <p>Under Section 10(10) of the Income Tax Act:</p>
                    <ul>
                        <li><strong>Government Employees:</strong> Entire gratuity amount is 100% tax-free.</li>
                        <li><strong>Private Sector Employees:</strong> Tax-free up to a limit of <strong>₹20 Lakhs</strong> (as per latest notification). Any amount above this is added to your income and taxed at your slab.</li>
                    </ul>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-blue-400 font-bold mb-2 italic">Pro Tip: Month Rounding</h4>
                        <p className="mb-0 text-slate-300">"6 is more than 5." If you serve for 6 years and 7 months, for the purpose of gratuity, it is rounded up to **7 years**. If you serve for 6 years and 5 months, it is rounded down to **6 years**. If you're planning to resign, check your joining date—staying just one extra month could earn you an extra year's worth of gratuity!</p>
                    </div>

                    <h3>Calculate Your Payout</h3>
                    <p>Don't wait for your final settlement to know your numbers. Use our accurate calculator to see your exact gratuity entitlement.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.TAX.GRATUITY} className="inline-block p-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">
                            📜 Gratuity Calculator →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
