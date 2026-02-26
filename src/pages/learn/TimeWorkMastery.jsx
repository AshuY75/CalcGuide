import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "Time Is Money: How to Calculate Your True Hourly Rate",
    description: "Are you actually earning as much as you think? Learn to calculate your work value after accounting for commute, taxes, and preparation time.",
    category: "UTILITY",
    slug: ROUTES.LEARN.TIME_WORK_MASTERY,
    date: "2025-02-22",
    icon: "⌛",
    colorClass: "bg-indigo-100",
    isNew: true
};

export default function TimeWorkMastery() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="Time Is Money: How to Calculate Your True Hourly Rate"
                description="Are you actually earning as much as you think? Learn to calculate your work value after accounting for commute, taxes, and preparation time."
                type="Article"
                url="https://calcguide.in/learn/calculate-true-hourly-rate-work-value/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Time Value</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        The True Cost of a Job:<br /> Calculating Your Hourly Value
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        A ₹20 Lakh package sounds great. But if you work 12 hours a day and commute for 2, are you actually making less than a successful freelancer?
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The "Nominal" vs "Real" Salary</h2>
                    <p>
                        Most people calculate their earnings as: <em>Annual Salary / 12</em>. This is a mistake. To understand your true standard of living, you must calculate your <strong>Real Hourly Rate</strong>.
                    </p>
                    <p>Your real work time isn't just the 9-to-5. It includes: </p>
                    <ul>
                        <li><strong>The Commute:</strong> 2 hours a day = 500 hours a year of "unpaid labor".</li>
                        <li><strong>Unwinding:</strong> Time spent recovery from high-stress meetings.</li>
                        <li><strong>Taxes & Deductions:</strong> That ₹20 Lakh CTC is actually only ₹14 Lakh in hand.</li>
                    </ul>

                    <h3>The Formula for Freedom</h3>
                    <div className="bg-indigo-50 p-8 rounded-2xl my-8 border-l-4 border-indigo-600 shadow-inner">
                        <h4 className="text-indigo-900 mt-0 font-bold text-center">Your Real Hourly Rate =</h4>
                        <p className="text-xl font-mono text-center my-4 font-black">
                            (Take Home Pay - Job Related Expenses) / (Work Hours + Commute Hours)
                        </p>
                    </div>

                    <h3>Why does this number matter?</h3>
                    <p>Understanding your hourly rate changes how you spend money. If your hourly rate is ₹500, and you spend 3 hours cleaning your house to save ₹1,000, you aren't saving money—you are <strong>losing ₹500</strong> of your own value. </p>
                    <p>High-performers "buy back" their time by outsourcing low-value tasks. This allows them to focus on high-value skills or simply enjoy life with family.</p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-indigo-400 font-bold mb-2 italic">The Freelancer's Advantage</h4>
                        <p className="mb-0 text-slate-300">"0 Commute = Instant Raise." A remote worker earning ₹15 Lakhs often has a higher real hourly rate than an office worker earning ₹22 Lakhs in a metro city like Bangalore or Mumbai, once travel costs and time are deducted!</p>
                    </div>

                    <h3>Calculate Your Value</h3>
                    <p>Are you underpaid? Or are you over-working? Use our work-value tool to find your exact numbers.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.UTILITY.TIPPING} className="inline-block p-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg">
                            ⌛ Time Value Calculator →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
