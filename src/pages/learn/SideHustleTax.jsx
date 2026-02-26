import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

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
                        Earning extra money is great. Getting a tax notice for it is not. Here's how to stay safe while building your secondary empire.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The Two Income Streams</h2>
                    <p>
                        When you have a full-time job and a side project (YouTube, Freelancing, SaaS, or Tutoring), you are effectively a <strong>Multi-Source Taxpayer</strong>. Your income is split into "Income from Salary" and "Income from Business or Profession". These are totaled at the end of the year to determine your final tax slab.
                    </p>
                    <p>The mistake most people make is ignoring the side income until July. In India, the taxman expects you to pay as you earn.</p>

                    <h2>The Magic of Section 44ADA</h2>
                    <p>
                        If you are a professional (Developer, Designer, Consultant, Content Creator) with a side hustle turnover under ₹75 Lakhs, don't worry about keeping every receipt. The **Presumptive Taxation Scheme** is your best friend.
                    </p>
                    <div className="bg-amber-50 p-8 rounded-2xl my-8 border-l-4 border-amber-600 shadow-inner">
                        <h4 className="text-amber-900 mt-0 font-bold">The 50% Rule:</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            The Income Tax department "presumes" that your profit is strictly <strong>50%</strong> of your total freelance receipts. If you earned ₹5 Lakhs from freelancing, you only pay tax on ₹2.5 Lakhs. You don't need to justify your laptop purchase, electricity bills, or internet costs. This covers everything!
                        </p>
                    </div>

                    <h3>Should you use Regular Taxation instead?</h3>
                    <p>You can choose to file under normal business tax rules if your <em>actual</em> expenses are more than 50% of your earnings. For example, if you earned ₹10 Lakhs but spent ₹7 Lakhs on specialized equipment or ads, your profit is only 30%. However, this requires you to maintain formal digital records and potentially undergo a tax audit if your turnover is very high.</p>

                    <h3>Double TDS: The 'Form 26AS' Trap</h3>
                    <p>
                        Your employer will deduct TDS on your salary. Your freelance clients will often deduct a flat 10% TDS (under Section 194J) on your professional fees.
                        <strong>Important:</strong> Ensure you check your <strong>AIS (Annual Information Statement)</strong> on the Income Tax portal every quarter. If a client has deducted TDS but hasn't deposited it, you won't get the credit, and you'll end up paying tax twice on the same money!
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-amber-400 font-bold mb-2 italic">Strategic Advance Tax Planning</h4>
                        <p className="mb-0 text-slate-300">"Don't wait for July." If your projected tax (Salary Tax + Side Hustle Tax) minus TDS is more than ₹10,000, you must pay **Advance Tax** in installments (Mar, June, Sep, Dec). If you miss these, you'll be hit with 1% per month interest penalty under Sections 234B and 234C. It's often safer to pay slightly more during the year to avoid the penalty headache later.</p>
                    </div>

                    <h3>GST for the Solopreneur</h3>
                    <p>If your total annual receipts from freelancing (not salary) exceed <strong>₹20 Lakhs</strong> (₹10 Lakhs for North-eastern states), you must register for GST. Even if you don't cross the threshold, you might want to register if you have many international clients, as professional services exported from India are considered 'Zero Rated' (0% GST), and you can claim back the GST you paid on your laptop and software!</p>

                    <h3>Check Your GST and TDS</h3>
                    <p>Use our tools to see how much tax you owe on your side hustle and if you need to register for GST.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.TAX.GST} className="inline-block p-4 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700 transition shadow-lg">
                            💼 Professional Tax & GST Calculator →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
