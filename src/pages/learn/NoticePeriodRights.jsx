import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

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
                        Leaving a job in the Indian IT sector is rarely simple. Here is the legal and tax reality of your exit.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>Is 90 Days Legal?</h2>
                    <p>
                        In India, the notice period is governed by your <strong>Appointment Letter</strong>, which is a civil contract. While labor laws in some states suggest 1 month, the courts usually uphold the 90-day contract if you signed it. However, no employer can legally 'force' you to work; they can only claim damages (buyout amount).
                    </p>

                    <h2>The Buyout Math</h2>
                    <p>
                        If you want to leave in 30 days instead of 90, you have to "buy out" 60 days of your notice period.
                    </p>
                    <div className="bg-orange-50 p-6 rounded-xl my-8 border-l-4 border-orange-600">
                        <h4 className="text-orange-900 mt-0">The Tax Trap</h4>
                        <p className="text-sm text-slate-700">
                            When your company recovers money from you for the notice period, you don't get a tax deduction for it. You pay tax on the <strong>total salary earned</strong>, even if you paid half of it back to the company as a buyout.
                        </p>
                    </div>

                    <h3>What is Exit Tax?</h3>
                    <p>
                        When you leave a company, your Full and Final (F&F) settlement includes:
                    </p>
                    <ul>
                        <li><strong>Leave Encashment</strong>: Taxed as salary (exempt up to ₹25 Lakhs for non-govt employees).</li>
                        <li><strong>Gratuity</strong>: Tax-free if you served 5+ years (up to ₹20 Lakhs).</li>
                        <li><strong>Notice Pay</strong>: Taxable as salary.</li>
                    </ul>

                    <h3>Can an employer refuse to release you?</h3>
                    <p>
                        Legally, an employer cannot hold your original certificates (it's a criminal offense). They also cannot refuse to accept a resignation via email. However, they can refuse to provide a <strong>Relieving Letter</strong> and <strong>Experience Certificate</strong> until the dues are cleared or the notice is served.
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-orange-400 font-bold mb-2">Negotiation Strategy</h4>
                        <p className="mb-0 text-slate-300">"Never just quit and hope for the best. Negotiate for <strong>'Early Release against Leave Balance'</strong>. Most companies allow you to adjust your accumulated PL (Privilege Leave) against the notice period, shortening your stay without a financial hit."</p>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Link to={ROUTES.CALCULATORS.LOAN.NOTICE_BUYOUT} className="flex-1 text-center p-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition shadow-lg">
                            Calculate My Buyout Amount
                        </Link>
                        <Link to={ROUTES.CALCULATORS.TAX.GRATUITY} className="flex-1 text-center p-4 border-2 border-orange-600 text-orange-600 rounded-xl font-bold hover:bg-orange-50 transition">
                            Check My Gratuity Dues
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
