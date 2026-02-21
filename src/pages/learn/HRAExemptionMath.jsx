import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

export const metadata = {
    title: "HRA Exemption Math – Save Tax on ₹30,000 Rent",
    description: "Learn the three-condition formula for HRA exemption and how to optimize your rent for maximum tax savings.",
    category: "TAX",
    slug: ROUTES.LEARN.HRA_EXEMPTION,
    date: "2025-02-21",
    icon: "🏠",
    colorClass: "bg-green-100",
    isNew: true
};

export default function HRAExemptionMath() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">HRA Math</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        HRA Exemption Math:<br /> How to Save Tax on Your Rent
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Paying rent is painful, but the tax savings can ease the blow. Here is how Section 10(13A) actually calculates your exemption.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The Minimum of Three Rule</h2>
                    <p>
                        The Income Tax Department doesn't necessarily exempt the entire rent you pay. It takes the **minimum** of these three conditions:
                    </p>
                    <div className="bg-green-50 p-6 rounded-xl my-8 border-l-4 border-green-600">
                        <ol className="m-0 space-y-2 text-green-900 font-bold">
                            <li>Actual HRA received from your employer.</li>
                            <li>50% of Basic Salary + DA (for Metro cities) or 40% (for non-metro).</li>
                            <li>Actual Rent Paid minus 10% of Basic Salary + DA.</li>
                        </ol>
                    </div>

                    <h3>The Strategy: Optimizing Your Rent</h3>
                    <p>
                        Most people find that **Condition 3** is the bottleneck. If your rent is low compared to your basic salary, your exemption might be zero even if your company gives you HRA.
                    </p>
                    <p>
                        <strong>Example:</strong> Basic Salary ₹1,00,000. 10% of basic is ₹10,000. If you pay rent of ₹12,000, your exemption is only ₹2,000. To maximize savings, your rent should ideally be at least 10% of your basic + the HRA amount you receive.
                    </p>

                    <div className="bg-slate-900 text-white p-6 rounded-xl my-8">
                        <h4 className="text-yellow-400 font-bold mb-2">Important Tips</h4>
                        <ul className="text-sm list-disc pl-5">
                            <li>You must have a Rent Agreement and Rent Receipts.</li>
                            <li>If rent exceeds ₹1 Lakh p.a., the landlord's PAN is mandatory.</li>
                            <li>If the landlord doesn't have a PAN, a declaration is needed.</li>
                        </ul>
                    </div>

                    <h3>Calculate Your Savings</h3>
                    <div className="mt-6">
                        <Link to={ROUTES.CALCULATORS.TAX.HRA} className="inline-flex items-center gap-2 p-4 border-2 border-slate-200 rounded-xl hover:border-green-500 transition-colors bg-slate-50 font-bold text-green-700">
                            🏠 Open HRA Calculator
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
