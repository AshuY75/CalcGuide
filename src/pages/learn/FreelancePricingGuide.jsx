import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

export const metadata = {
    title: "Why Freelancers Undercharge – The Hidden Cost of Business",
    description: "Learn how to price your freelance services correctly. Why an employee salary doesn't translate directly to freelance rates.",
    category: "CREATOR",
    slug: ROUTES.LEARN.FREELANCE_PRICING,
    date: "2025-02-21",
    icon: "👨‍💻",
    colorClass: "bg-indigo-100",
    isNew: true
};

export default function FreelancePricingGuide() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Business Strategy</span>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-6 leading-tight">
                        Freelance Math: Why You<br /> Are Probably Undercharging
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Many freelancers quit their jobs thinking they'll make more money, only to find they are working harder for less. Let's fix your pricing.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The 'Annual Salary' Delusion</h2>
                    <p>
                        If you earned ₹10 Lakhs a year as an employee, you might think charging ₹5,000 a day for freelance work is enough (₹5k x 20 days = ₹1 Lakh/month). **This is a dangerous mistake.**
                    </p>
                    <p>
                        As an employee, your company paid for your laptop, your health insurance, your office space, and your employer's contribution to EPF. As a freelancer, **you are the company**.
                    </p>

                    <h3>The 3 Layers of Pricing</h3>
                    <ol>
                        <li><strong>Your Take-Home Pay:</strong> The actual money you want for your lifestyle.</li>
                        <li><strong>Business Overheads:</strong> Software subscriptions (Adobe, SaaS), Hardware (Laptop), Marketing, and Workspace.</li>
                        <li><strong>Non-Billable Buffer:</strong> You cannot bill for the time you spend finding clients, doing research, or sending invoices.</li>
                    </ol>

                    <div className="bg-indigo-50 p-6 rounded-xl my-8 border-l-4 border-indigo-500">
                        <h4 className="text-indigo-900 mt-0">The 2x Rule</h4>
                        <p className="text-sm mb-0">
                            A general rule of thumb for freelancers is that your hourly rate should be **at least 2x to 2.5x** what your hourly rate was as an employee. If you earned ₹500/hr in a job, you must charge at least ₹1,200/hr as a freelancer to maintain the same financial security.
                        </p>
                    </div>

                    <h2>Retirement and Insurance</h2>
                    <p>
                        In a job, your PF grows silently. As a freelancer, if you don't account for your own pension (NPS/PPF) in your project quotes, you are effectively stealing from your future self.
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-indigo-400 font-bold mb-2">Pro Tip</h4>
                        <p className="text-sm mb-0">Stop selling 'Hours' and start selling 'Value'. If you can do in 2 hours what takes others 10 hours, don't punish yourself with a lower bill. Charge based on the outcome, not the clock.</p>
                    </div>

                    <h3>Calculate Your Rate</h3>
                    <div className="mt-6">
                        <Link to={ROUTES.CALCULATORS.CREATOR.FREELANCE_RATE} className="inline-flex items-center gap-2 p-4 border-2 border-slate-200 rounded-xl hover:border-indigo-500 transition-colors bg-slate-50 font-bold text-indigo-700">
                            👨‍💻 Open Freelancer Rate Calculator
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
