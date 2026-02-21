import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

export const metadata = {
    title: "Gratuity Rules Explained – Why You Don't Need 5 Years",
    description: "Understand the recent changes in gratuity rules, the 4-year 240-day criteria, and how tax-free limits work in 2024-25.",
    category: "TAX",
    slug: ROUTES.LEARN.GRATUITY_EXPLAINER,
    date: "2025-02-21",
    icon: "📜",
    colorClass: "bg-orange-100",
    isNew: true
};

export default function GratuityExplainer() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Gratuity Rules</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Gratuity Rules Explained:<br /> The 5-Year Myth?
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Everyone says you need 5 years to get gratuity. But the court rulings say something different. Let's look at the math.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The 4 Years and 240 Days Rule</h2>
                    <p>
                        While the Gratuity Act mentions "5 years of continuous service", several Madras and Calcutta High Court judgments have clarified that completing 4 years and 240 days (for organizations with 6-day weeks) or 4 years and 190 days (for 5-day weeks) is sufficient to claim gratuity.
                    </p>

                    <div className="bg-orange-50 p-6 rounded-xl my-8 border-l-4 border-orange-500">
                        <h4 className="text-orange-900 mt-0">Calculation Formula:</h4>
                        <p className="text-sm italic">Gratuity = (15/26) × Last Drawn Basic & DA × Years of Service</p>
                        <p className="mb-0 text-sm font-bold">The '26' represents the number of working days in a month (excluding Sundays).</p>
                    </div>

                    <h3>New Tax Limits 2024-25</h3>
                    <p>
                        Previously, the tax-free limit for gratuity was ₹20 Lakhs. This has now been increased to <strong>₹25 Lakhs</strong> for private-sector employees. For government employees, gratuity remains fully tax-free regardless of the amount.
                    </p>

                    <h3>Nomination is Mandatory</h3>
                    <p>
                        Many employees forget to fill the Gratuity Nomination form (Form F) when joining. Without this, the payment can be delayed or stuck in legal hurdles for your family in case of an unfortunate event. Ensure yours is updated on your company portal.
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-green-400 font-bold mb-2">Did You Know?</h4>
                        <p className="text-sm mb-0">Contractual employees and interns are also eligible for gratuity if they are on the company's payroll and meet the service criteria. Even if they are not permanent, the law protects their right to gratuity.</p>
                    </div>

                    <h3>Calculate Your Dues</h3>
                    <div className="mt-6">
                        <Link to={ROUTES.CALCULATORS.TAX.GRATUITY} className="inline-flex items-center gap-2 p-4 border-2 border-slate-200 rounded-xl hover:border-orange-500 transition-colors bg-slate-50 font-bold text-orange-700">
                            📜 Open Gratuity Calculator
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
