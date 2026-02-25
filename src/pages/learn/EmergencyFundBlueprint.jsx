import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';


export const metadata = {
    title: "The Emergency Fund Blueprint: 2025 India Edition",
    description: "How much emergency fund do you really need? Learn the 6-month rule, where to park your cash, and why an emergency fund is your real insurance.",
    category: "INVESTMENT",
    slug: ROUTES.LEARN.EMERGENCY_FUND,
    date: "2025-02-22",
    icon: "🛡️",
    colorClass: "bg-emerald-100",
    isNew: true
};

export default function EmergencyFundBlueprint() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="The Emergency Fund Blueprint: 2025 India Edition"
                description="How much emergency fund do you really need? Learn the 6-month rule."
                type="Article"
                url="https://calcguide.in/learn/emergency-fund-blueprint-12-months-salary/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Emergency Fund</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        The Emergency Fund Blueprint:<br /> Shield Your Family
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Before you invest in the next multi-bagger stock, make sure you won't go broke if you lose your job tomorrow.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>What is an Emergency Fund?</h2>
                    <p>
                        An <strong>Emergency Fund</strong> is a stash of money set aside to cover the financial surprises life throws at you. These aren't planned expenses like a vacation or a new iPhone; they are for medical emergencies, job losses, or urgent house repairs.
                    </p>

                    <h2>The 6-Month Rule</h2>
                    <p>
                        In India, where job markets can be volatile and social security is minimal, the standard recommendation is to have <strong>6 months of your non-discretionary expenses</strong> (Rent + EMIs + Groceries + Utilities + Insurance) saved up.
                    </p>
                    <div className="bg-emerald-50 p-6 rounded-xl my-8 border-l-4 border-emerald-600">
                        <h4 className="text-emerald-900 mt-0">Calculation Example:</h4>
                        <p className="text-sm text-slate-700">If your monthly "must-pay" bills are ₹50,000, your target emergency fund is ₹3,00,000.</p>
                        <p className="text-xs text-slate-500 mt-2"><em>Note: If you are a freelancer or a single-earner family, aim for 12 months.</em></p>
                    </div>

                    <h3>Where to park your Emergency Fund?</h3>
                    <p>
                        The goal isn't 'Returns', it's <strong>'Liquidity'</strong>. You should be able to access this money at 2 AM on a Sunday.
                    </p>
                    <ul>
                        <li><strong>Savings Account</strong>: Keep 1 month's expense here for instant withdrawal.</li>
                        <li><strong>Sweep-in FD</strong>: The best option for Indian banks. It gives FD interest but allows you to withdraw via ATM whenever needed.</li>
                        <li><strong>Liquid Mutual Funds</strong>: Good for the 3rd to 6th month's stash. They offer slightly better returns than savings accounts.</li>
                    </ul>

                    <h3>3 Times you should NOT touch it</h3>
                    <ol>
                        <li>To buy a car on "Zero Down Payment".</li>
                        <li>To invest in a crypto dip.</li>
                        <li>To fund a wedding gift.</li>
                    </ol>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-emerald-400 font-bold mb-2">The Psychological Win</h4>
                        <p className="mb-0 text-slate-300">An emergency fund doesn't just protect your wallet; it protects your mind. It gives you the "F-word" money to leave a toxic job or stay calm during a global recession because you know your family is safe for half a year.</p>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <Link to={ROUTES.CALCULATORS.TAX.INCOME_TAX} className="flex-1 text-center p-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition">
                            Plan Your Tax Savings
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
