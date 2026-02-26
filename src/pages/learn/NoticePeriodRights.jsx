import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "Notice Period & Exit Tax: Your Rights as an Indian Employee",
    description: "Servicing a 90-day notice? Learn about the legality of notice periods in India, buyout options, and how the taxman views your final settlement.",
    category: "TAX",
    slug: ROUTES.LEARN.NOTICE_PERIOD_RIGHTS,
    date: "2025-02-22",
    icon: "🚪",
    colorClass: "bg-orange-100",
    isNew: true
};

export default function NoticePeriodRights() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="Notice Period & Exit Tax: Your Rights as an Indian Employee"
                description="Servicing a 90-day notice? Learn about the legality of notice periods in India, buyout options, and how the taxman views your final settlement."
                type="Article"
                url="https://calcguide.in/learn/notice-period-rights-buyout-tax-india/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Notice Rights</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        The 90-Day Trap:<br /> Notice Period Rights & Buyouts
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Leaving a job in the Indian IT sector is rarely simple. Between 90-day contracts and Final Settlements (F&F), here is the legal and tax reality of your exit.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>Is 90 Days Legal?</h2>
                    <p>
                        In India, the notice period is governed by your <strong>Appointment Letter</strong>, which is a civil contract. While labor laws in some states suggest 1 month for factory workers, the courts usually uphold the 90-day contract for white-collar professionals if you signed it. However, the <em>Enforceability</em> of "Specific Performance" (forcing you to work) is almost impossible. They can, however, sue for damages or withhold your Relieving Letter.
                    </p>

                    <h2>The Notice Buyout Math</h2>
                    <p>
                        Most companies offer a "Buyout" option where you pay the company for the days you don't serve.
                        <strong>The Trap:</strong> Usually, the company calculates buyout on <strong>Gross Salary</strong>, whereas your replacement has to be paid from your net worth.
                    </p>
                    <div className="bg-orange-50 p-8 rounded-2xl my-8 border-l-4 border-orange-600 shadow-inner">
                        <h4 className="text-orange-900 mt-0 font-bold">The Tax Double-Whammy!</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            This is the most painful part of Indian employment tax. If you pay a buyout to Company A, the <strong>Income Tax department does NOT consider it a deduction</strong>. You pay tax on the full salary shown on your Form 16, even if you paid ₹2 Lakhs back to the company. Make sure to negotiate for a "Notice Period Buyout Reimbursement" from your new employer to cover this tax loss.
                        </p>
                    </div>

                    <h3>Full & Final (F&F) Settlement Checklist</h3>
                    <p>
                        Your settlement shouldn't just be about your last month's salary. Ensure these items are included:
                    </p>
                    <ul>
                        <li><strong>Leave Encashment:</strong> Payment for your unused Privilege Leaves (PL). This is tax-exempt up to ₹25 Lakhs (recently increased from ₹3L) for non-government employees at the time of retirement/resignation.</li>
                        <li><strong>Gratuity:</strong> If you have completed 4 years and 190 days (effectively 5 years), you are entitled to gratuity. It is tax-free up to ₹20 Lakhs.</li>
                        <li><strong>Bonus/LTI:</strong> Check if you are eligible for pro-rata performance bonuses.</li>
                        <li><strong>Deductions:</strong> Ensure they haven't over-deducted for "Asset Damages" or "Training Bonds" which are often legally questionable.</li>
                    </ul>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-orange-400 font-bold mb-2 italic">Strategy: Leverage Your Leaves</h4>
                        <p className="mb-0 text-slate-300">"The best way to shorten a notice period is not a buyout, but <strong>Leave Adjustment</strong>." Most HR policies allow you to subtract your PL balance from your 90 days. If you have 30 leaves, you only serve 60 days. This saves you from the Tax Trap of a cash buyout!</p>
                    </div>

                    <h3>Can they hold your EPF?</h3>
                    <p>No. Your Employee Provident Fund (EPF) is your property. An employer cannot legally stop you from withdrawing or transferring your PF balance, regardless of any dispute over the notice period. They also cannot hold your original educational certificates (this is a criminal offense).</p>

                    <h3>Check Your Dues</h3>
                    <p>Don't let the HR math confuse you. Use our dedicated tools to estimate your final payout and tax impact.</p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Link to={ROUTES.CALCULATORS.LOAN.NOTICE_BUYOUT} className="flex-1 text-center p-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition shadow-lg">
                            🚪 Buyout Calculator →
                        </Link>
                        <Link to={ROUTES.CALCULATORS.TAX.GRATUITY} className="flex-1 text-center p-4 border-2 border-orange-600 text-orange-600 rounded-xl font-bold hover:bg-orange-50 transition">
                            Check My Gratuity →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
