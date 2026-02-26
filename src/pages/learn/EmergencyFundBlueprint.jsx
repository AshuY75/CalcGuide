import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "The Emergency Fund Blueprint: How to Build Your 'Peace of Mind'",
    description: "Don't let a job loss or medical bill ruin your investments. Learn the 6-month rule, where to park your emergency cash, and exactly how much you need.",
    category: "INVESTMENT",
    slug: ROUTES.LEARN.EMERGENCY_FUND,
    date: "2025-02-21",
    icon: "🛡️",
    colorClass: "bg-slate-100",
    isNew: true
};

export default function EmergencyFundBlueprint() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="The Emergency Fund Blueprint: How to Build Your 'Peace of Mind'"
                description="Don't let a job loss or medical bill ruin your investments. Learn the 6-month rule, where to park your emergency cash, and exactly how much you need."
                type="Article"
                url="https://calcguide.in/learn/emergency-fund-blueprint-india-guide/"
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
                        Emergency Fund:<br /> The Foundation of Wealth
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Before you buy your first stock or start your first SIP, you need an 'Anti-Fragile' shield. Here is how to build it.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>What is an Emergency Fund?</h2>
                    <p>
                        An emergency fund is a stash of liquid money set aside to cover <strong>life's unexpected curveballs</strong>. It is not for a new iPhone, a vacation, or a car repair you've been planning for months. It is specifically for:
                    </p>
                    <ul>
                        <li>Sudden Job Loss or Income Drop</li>
                        <li>Unplanned Medical Emergencies (even after insurance)</li>
                        <li>Critical Home Repairs (like a leaking roof)</li>
                    </ul>

                    <h3>The 6x Monthly Expense Rule</h3>
                    <p>
                        The standard advice in India is to keep at least <strong>6 months of your mandatory expenses</strong> in this fund. Mandatory expenses = Rent + Food + Utilities + Insurance Premiums + EMIs.
                    </p>
                    <div className="bg-slate-50 p-8 rounded-2xl my-8 border-l-4 border-slate-900 shadow-inner">
                        <h4 className="text-slate-900 mt-0 font-bold">The Dynamic Multiplier:</h4>
                        <ul className="text-sm text-slate-700 leading-relaxed space-y-2 mt-4 p-0 list-none">
                            <li>💼 <strong>Salaried (Govt/Stable MNC):</strong> 3 to 6 months is enough.</li>
                            <li>💻 <strong>Freelancer / Startup:</strong> 9 to 12 months is recommended due to income volatility.</li>
                            <li>🏠 <strong>Single Earner with Dependents:</strong> Aim for 12 months for absolute security.</li>
                        </ul>
                    </div>

                    <h2>Where should I park this money?</h2>
                    <p>
                        This money is NOT for growth. It is for <strong>Liquidity and Safety</strong>. Don't chase an extra 1% return.
                    </p>
                    <ol>
                        <li><strong>High-Interest Savings Account (50%):</strong> Instant access via ATM/UPI.</li>
                        <li><strong>Sweep-in Fixed Deposits (30%):</strong> They earn better interest but can be broken instantly when your bank account balance hits zero.</li>
                        <li><strong>Liquid Mutual Funds (20%):</strong> Offering slightly better returns than a savings account, with 'instant redemption' features (up to ₹50,000 per day).</li>
                    </ol>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-blue-400 font-bold mb-2 italic">The 'Insurance First' Rule</h4>
                        <p className="mb-0 text-slate-300">"Shield before the stash." An emergency fund is NOT a replacement for Health Insurance. A single 7-day hospital stay can wipe out a 6-month emergency fund. Get a ₹10 Lakh+ Health Insurance policy first; then build the cash fund.</p>
                    </div>

                    <h3>Calculating Your Magic Number</h3>
                    <p>Don't guess how much you need. Use our calculator to list your true monthly costs and find your personal "Sleep-Well-At-Night" number.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.UTILITY.TIPPING} className="inline-block p-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition shadow-lg">
                            🛡️ Emergency Fund Tracker →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
