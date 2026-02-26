import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "Freelance Pricing Masterclass: How to Charge What You're Worth",
    description: "Stop undercharging. Learn the math behind Hourly vs Project-based pricing, and how to calculate a rate that covers your taxes, insurance, and equipment.",
    category: "UTILITY",
    slug: ROUTES.LEARN.FREELANCE_PRICING,
    date: "2025-02-22",
    icon: "💰",
    colorClass: "bg-green-100",
    isNew: true
};

export default function FreelancePricingGuide() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="Freelance Pricing Masterclass: How to Charge What You're Worth"
                description="Stop undercharging. Learn the math behind Hourly vs Project-based pricing, and how to calculate a rate that covers your taxes, insurance, and equipment."
                type="Article"
                url="https://calcguide.in/learn/freelance-pricing-strategies-how-to-charge-guide/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Freelance Pricing</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Charge What You're Worth:<br /> The Pricing Math
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Many freelancers earn less than a minimum wage job because they forget the 'hidden' costs of being their own boss.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The "Salary to Rate" Fallacy</h2>
                    <p>
                        The biggest mistake new freelancers make is taking their old salary and dividing it by 160 hours.
                        <strong>If your monthly salary was ₹1,00,000, charging ₹625 per hour will make you bankrupt.</strong>
                    </p>
                    <p>Why? Because as a freelancer, you have no <strong>Paid Time Off (PTO)</strong>, no <strong>Health Insurance</strong> paid by the company, no <strong>EPF match</strong>, and you have to pay for your own laptop, software, and marketing.</p>

                    <h3>The '2x Rule' for Solopreneurs</h3>
                    <p>To maintain the same standard of living as a ₹12 Lakh CTC job, your freelance "Take Home" revenue must be roughly <strong>₹20 Lakhs to ₹24 Lakhs</strong>. This covers:</p>
                    <ul>
                        <li><strong>Billable vs Non-Billable Time:</strong> You only get paid for doing the work. You don't get paid for sales, invoicing, or learning new skills. Typically, only 60% of your time is billable.</li>
                        <li><strong>Tax Burden:</strong> You pay self-employment tax (Income Tax + potentially GST).</li>
                        <li><strong>The 'Bench' Period:</strong> Every freelancer has weeks where there is no work. Your active projects must pay for your idle time.</li>
                    </ul>

                    <div className="bg-green-50 p-8 rounded-2xl my-8 border-l-4 border-green-600 shadow-inner">
                        <h4 className="text-green-900 mt-0 font-bold">The Freelance Rate Formula:</h4>
                        <div className="text-center py-4 bg-white rounded-xl border border-green-100 my-4 shadow-sm">
                            <p className="text-xl font-mono m-0">Rate = (Desired Net Income + Expenses) / (Total Hours × 0.6)</p>
                        </div>
                    </div>

                    <h2>Hourly vs Value-Based Pricing</h2>
                    <ol>
                        <li><strong>Hourly:</strong> Good for beginners. It ensures you get paid for every hour you sit at the desk. But it punishes efficiency. The faster you get, the less you earn.</li>
                        <li><strong>Project-Based (Fixed):</strong> Better for experienced pros. If a logo takes you 2 hours but creates ₹10 Lakhs in value for the client, why should you earn only 2 hours of pay? <strong>Charge for the outcome, not the time.</strong></li>
                        <li><strong>Retainers:</strong> The Holy Grail. A client pays you a fixed monthly fee for continued availability. This provides the stable "salary-like" income that allows you to sleep peacefully.</li>
                    </ol>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-green-400 font-bold mb-2 italic">Strategic Negotiation</h4>
                        <p className="mb-0 text-slate-300">"Never justify your rate with costs." When a client asks why you are expensive, don't talk about your rent or your laptop. Talk about the **Return on Investment (ROI)**. "My code will handle 10k users without crashing, saving you ₹5 Lakhs in server maintenance next year." That is how you win premium clients.</p>
                    </div>

                    <h3>Calculate Your True Value</h3>
                    <p>Are you undercharging? Use our tool to calculate what your hourly rate *should* be based on your lifestyle goals and business expenses.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.UTILITY.TIPPING} className="inline-block p-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition shadow-lg">
                            💰 Freelance Rate Planner →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
