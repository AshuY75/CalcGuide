import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';


export const metadata = {
    title: "Side Hustle Tax Guide: Managing Freelance Income for Salaried Pros",
    description: "Are you a salaried employee earning extra from a side hustle? Learn about Section 44ADA, business expenses, and how to avoid double taxation on your freelance income.",
    category: "TAX",
    slug: ROUTES.LEARN.SIDE_HUSTLE_TAX,
    date: "2025-02-22",
    icon: "💼",
    colorClass: "bg-amber-100",
    isNew: true
};

export default function SideHustleTax() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="Side Hustle Tax Guide: Managing Freelance Income for Salaried Pros"
                description="Are you a salaried employee earning extra from a side hustle? Learn about Section 44ADA, business expenses, and how to avoid double taxation on your freelance income."
                type="Article"
                url="https://calcguide.in/learn/side-hustle-freelance-tax-guide-india/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Side Hustle Tax</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Side Hustle Tax:<br /> The Salaried Freelancer's Guide
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Earning extra money is great. Getting a tax notice for it is not. Here's how to stay safe.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The Two Income Streams</h2>
                    <p>
                        When you have a job and a side hustle, you have two types of income: **Income from Salary** and **Income from Business or Profession**. These are added together when calculating your final tax liability.
                    </p>

                    <h2>The Magic of Section 44ADA</h2>
                    <p>
                        If you are a professional (Developer, Designer, Consultant) with a side hustle turnover under ₹75 Lakhs, you can use the **Presumptive Taxation Scheme**.
                    </p>
                    <div className="bg-amber-50 p-6 rounded-xl my-8 border-l-4 border-amber-600">
                        <h4 className="text-amber-900 mt-0">How it works:</h4>
                        <p className="text-sm text-slate-700">
                            The government assumes your profit is exactly <strong>50%</strong> of your total freelance income. You don't need to keep bills for every keyboard or coffee you bought. You only pay tax on half of what you earned!
                        </p>
                    </div>

                    <h3>Can I deduct expenses?</h3>
                    <ul>
                        <li><strong>Under 44ADA</strong>: No extra deductions. The 50% rule covers all your laptop, internet, and office costs.</li>
                        <li><strong>Under Regular Tax</strong>: You can deduct actual expenses (Rent, Internet, Books, Software) but must maintain strict books of accounts and bills.</li>
                    </ul>

                    <h3>TDS and Advance Tax</h3>
                    <p>
                        If your total tax liability for the year (Salary Tax + Side Hustle Tax) exceeds ₹10,000, you must pay **Advance Tax** in four installments (June, Sep, Dec, Mar). Failing to do so results in interest penalties under Section 234B and 234C.
                    </p>

                    <h3>GST for Side Hustlers</h3>
                    <p>
                        If your cumulative turnover (including salary is not counted here) crosses ₹20 Lakhs, you must get a GST registration. For most side-hustlers, this isn't an issue, but stay vigilant if you take on large international projects.
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-amber-400 font-bold mb-2">Pro Tip</h4>
                        <p className="mb-0 text-slate-300">"Declare it early." Inform your employer's HR about your freelance income if you want them to deduct TDS correctly. Otherwise, be prepared to pay a large lump sum tax and penalty during ITR filing in July.</p>
                    </div>

                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.TAX.GST} className="inline-block p-4 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700 transition shadow-lg">
                            Check Your GST Liability
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
