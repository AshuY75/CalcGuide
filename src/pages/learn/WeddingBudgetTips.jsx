import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "The Big Fat Indian Wedding Budget – Reality vs FOMO",
    description: "Don't start your married life in debt. Learn how to plan a beautiful Indian wedding without breaking the bank, and where to invest the savings.",
    category: "INVESTMENT",
    slug: ROUTES.LEARN.WEDDING_BUDGET_TIPS,
    date: "2025-02-21",
    icon: "💍",
    colorClass: "bg-pink-100",
    isNew: true
};

export default function WeddingBudgetTips() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="The Big Fat Indian Wedding Budget – Reality vs FOMO"
                description="Don't start your married life in debt. Learn how to plan a beautiful Indian wedding without breaking the bank, and where to invest the savings."
                type="Article"
                url="https://calcguide.in/learn/indian-wedding-budget-tips-fomo-reality-check/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Wedding Budget</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Wedding Budgeting:<br /> The FOMO Survival Guide
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        In India, a wedding is a community event. But the bill is personal. Here is the math of a manageable celebration.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The Opportunity Cost of One Day</h2>
                    <p>
                        The average middle-class Indian wedding now costs between <strong>₹15 Lakhs and ₹40 Lakhs</strong>. While social pressure is real, it's important to look at the "Opportunity Cost".
                    </p>
                    <p>If you spend ₹10 Lakhs extra on a single night of celebration, you're giving up a potential <strong>₹1 Crore corpus</strong> (at 12% returns) in 20 years. That's the price of a few hours of social validation.</p>

                    <h3>The 50/30/20 Wedding Split</h3>
                    <p>Try to allocate your budget based on value, not tradition:</p>
                    <ul>
                        <li><strong>50% Experience:</strong> Venue and Food. This is what guests actually remember.</li>
                        <li><strong>30% Heritage:</strong> Jewelry and Outfits. These are long-term assets, not just expenses.</li>
                        <li><strong>20% Documentation & Decor:</strong> Photos, Video, and Flowers. These are the memories, but they don't need to be extravagant.</li>
                    </ul>

                    <div className="bg-pink-50 p-8 rounded-2xl my-8 border-l-4 border-pink-600 shadow-inner">
                        <h4 className="text-pink-900 mt-0 font-bold">The 'Loan' Danger Zone:</h4>
                        <ul className="text-sm text-slate-700 leading-relaxed space-y-2 mt-4 list-none p-0">
                            <li>❌ <strong>Never</strong> take a personal loan for a wedding. These are high-interest (14-20%) debts.</li>
                            <li>❌ <strong>Never</strong> exhaust your entire emergency fund for a function.</li>
                            <li>✅ <strong>Always</strong> involve both families in a clear, upfront budget meeting to avoid last-minute "honor" expenses.</li>
                        </ul>
                    </div>

                    <h3>Smart Saving Tips</h3>
                    <ol>
                        <li><strong>Off-Season Weddings:</strong> Booking in May/June or early September can save you 20-30% on venue costs compared to the busy November-Feb season.</li>
                        <li><strong>The Guest List Cull:</strong> Every guest costs approximately ₹1,500 - ₹3,000 in catering. Reducing the list by just 50 people can save you ₹1 Lakh instantly.</li>
                        <li><strong>Digital Invites:</strong> Save on printing and postage. It's eco-friendly and more efficient for RSVP tracking.</li>
                    </ol>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-pink-400 font-bold mb-2 italic">Pro Tip: Invest the Difference</h4>
                        <p className="mb-0 text-slate-300">"The Marriage Fund." Decide on a maximum budget, and whatever you save from that via negotiation or better planning, put it into a Joint Index Fund for your first home or your child's education. Starting a marriage with an 'Investment' instead of a 'Debt' is the ultimate romantic gesture!</p>
                    </div>

                    <h3>Plan Your Celebration</h3>
                    <p>Don't let the expenses spiral. Use our planner to track your costs and see the long-term impact on your wealth.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.UTILITY.TIPPING} className="inline-block p-4 bg-pink-600 text-white rounded-xl font-bold hover:bg-pink-700 transition shadow-lg">
                            💍 Wedding Budget Tracker →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
