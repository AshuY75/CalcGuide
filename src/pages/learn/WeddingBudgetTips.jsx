import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

export const metadata = {
    title: "10 Tips to Budget for an Indian Wedding in 2025",
    description: "Planning a wedding? Don't let the 'Big Fat Indian Wedding' drain your life savings. Learn how to allocate your budget, save on catering, and prioritize your spending.",
    category: "UTILITY",
    slug: ROUTES.LEARN.WEDDING_BUDGET_TIPS,
    date: "2025-02-22",
    icon: "💍",
    colorClass: "bg-rose-100",
    isNew: true
};

export default function WeddingBudgetTips() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Wedding Tips</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Wedding Planning:<br /> Celebrate Without the Debt
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        An Indian wedding is a beautiful milestone, but it shouldn't be a financial catastrophe.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The Reality of Wedding Costs</h2>
                    <p>
                        In 2025, a mid-range Indian wedding costs anywhere between <strong>₹15 Lakhs to ₹40 Lakhs</strong>. With rising inflation in catering and venue rentals, many families end up taking high-interest personal loans that take years to pay back.
                    </p>

                    <h2>1. The Guest List is Everything</h2>
                    <p>
                        Every guest you add is a direct multiplier on your catering and venue cost. The most effective way to save ₹5 Lakhs is to reduce your guest list from 500 to 200. Focus on people who truly matter to you.
                    </p>

                    <h2>2. The "Venue-Catering" Combo</h2>
                    <p>
                        Booking a venue that allows outside catering is usually cheaper, but venue-owned catering is less stressful.
                    </p>
                    <div className="bg-rose-50 p-6 rounded-xl my-8 border-l-4 border-rose-600">
                        <h4 className="text-rose-900 mt-0">Budget Allocation (The 40-20-40 Rule):</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-700">
                            <li><strong>40%</strong>: Venue, Food, and Hospitality.</li>
                            <li><strong>20%</strong>: Jewelry and Wedding Outfits.</li>
                            <li><strong>40%</strong>: Decor, Photography, Gifts, and Buffer.</li>
                        </ul>
                    </div>

                    <h3>3. Digital Invitations</h3>
                    <p>
                        A physical wedding card with a box of sweets can cost ₹500 to ₹1000 per family. Switching to a high-quality <strong>Video Invite or a Wedding Website</strong> can save you ₹50,000+ instantly.
                    </p>

                    <h3>4. Off-Season & Weekdays</h3>
                    <p>
                        "Saya" dates (auspicious days) see venue prices triple. If your family is flexible, choosing a weekday or a date just outside the peak wedding season (May/June or Nov/Dec) can give you massive bargaining power.
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-rose-400 font-bold mb-2">The Golden Rule</h4>
                        <p className="mb-0 text-slate-300">"Don't spend for the 'Log Kya Kahenge' (What will people say) factor." Most guests won't remember the 50th item on the menu, but you will definitely feel the ₹20 Lakh loan for the next 5 years.</p>
                    </div>

                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.UTILITY.WEDDING_PLANNER} className="inline-block p-4 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 transition shadow-lg">
                            Use the Wedding Budget Tracker
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
