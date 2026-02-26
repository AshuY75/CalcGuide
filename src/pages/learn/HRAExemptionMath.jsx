import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "HRA Exemption Math: Save Lakhs in Tax with These Rules",
    description: "Confused about House Rent Allowance (HRA) calculations? Learn the 3-step formula, metro vs non-metro rules, and how to claim rent paid to parents.",
    category: "TAX",
    slug: ROUTES.LEARN.HRA_EXEMPTION,
    date: "2025-02-21",
    icon: "🏠",
    colorClass: "bg-blue-100",
    isNew: true
};

export default function HRAExemptionMath() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="HRA Exemption Math: Save Lakhs in Tax with These Rules"
                description="Confused about House Rent Allowance (HRA) calculations? Learn the 3-step formula, metro vs non-metro rules, and how to claim rent paid to parents."
                type="Article"
                url="https://calcguide.in/learn/hra-exemption-calculation-rules-india/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">HRA Math</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        HRA Exemption:<br /> Mastering the 3-Step Formula
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        For salaried Indians, House Rent Allowance is the single biggest tax-saving tool—if you know how to use it.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The Rule of the 'Minimum'</h2>
                    <p>
                        The Income Tax Department calculates your HRA exemption as the <strong>minimum</strong> of the following three amounts:
                    </p>
                    <ol>
                        <li>Actual HRA received from your employer.</li>
                        <li>50% of (Basic + DA) if you live in a Metro city (Delhi, Mumbai, Kolkata, Chennai). Otherwise, 40%.</li>
                        <li>Actual Rent Paid minus 10% of (Basic + DA).</li>
                    </ol>

                    <div className="bg-blue-50 p-8 rounded-2xl my-8 border-l-4 border-blue-600 shadow-inner">
                        <h4 className="text-blue-900 mt-0 font-bold">Why 'Actual Rent Paid' is the Lever:</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            Since the first two points are fixed based on your CTC, the ONLY way to increase your tax saving is to increase the third point. If you pay very low rent, your exemption will be low, even if your CTC has a high HRA component.
                        </p>
                    </div>

                    <h3>Can I pay Rent to my Parents?</h3>
                    <p>Yes, but it must be a <strong>Real Transaction</strong>. </p>
                    <ul>
                        <li>They must own the property (legal title).</li>
                        <li>You must transfer the amount digitally (Bank/UPI)—don't pay in cash.</li>
                        <li>They must include this rent in their income tax return (ITR) as 'Income from House Property'.</li>
                        <li>There should be a formal Rent Agreement.</li>
                    </ul>

                    <h3>The PAN Card Requirement</h3>
                    <p>If your annual rent exceeds <strong>₹1,00,000</strong>, you must provide the PAN of your landlord to your employer. If the landlord does not have a PAN, you need a signed declaration (Form 60) from them. Without this, your HR will deduct full tax on your HRA.</p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-blue-400 font-bold mb-2 italic">Pro Tip: HRA + Home Loan</h4>
                        <p className="mb-0 text-slate-300">"Double Benefit." Yes, you can claim both HRA and Home Loan interest (Section 24) if you live in a rented house in one city (for work) and have a home loan for a property in another city (or even the same city, if the commute is non-viable). This is 100% legal as long as both are genuine!</p>
                    </div>

                    <h3>Optimize Your HRA Now</h3>
                    <p>Don't let the HR portal do all the work. Use our calculator to see how much extra rent you need to pay to reach your maximum possible HRA exemption.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.TAX.HRA} className="inline-block p-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">
                            🏠 HRA Exemption Calculator →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
