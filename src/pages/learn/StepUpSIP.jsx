import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

export const metadata = {
    title: "Step-Up SIP vs Inflation – Why Fixed SIP Fails",
    description: "Learn how increasing your SIP by just 5-10% every year can exponentially grow your wealth and beat inflation.",
    category: "INVESTMENT",
    slug: ROUTES.LEARN.STEP_UP_SIP,
    date: "2025-02-21",
    icon: "📈",
    colorClass: "bg-orange-100",
    isNew: true
};

export default function StepUpSIP() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Wealth Optimization</span>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-6 leading-tight">
                        Step-Up SIP vs Inflation:<br /> Why a Fixed SIP is Not Enough
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        In a world where prices rise 6% every year, your ₹10,000 SIP today will feel like ₹5,000 in a decade. Here is how to fix it.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The Silent Wealth Killer: Inflation</h2>
                    <p>
                        Most investors set an SIP amount and forget it for years. While this is good for discipline, it ignores a critical fact: <strong>Your income increases, but so do your expenses.</strong>
                    </p>
                    <p>
                        If you start a ₹10,000 SIP today, that amount represents a certain percentage of your lifestyle. In 10 years, due to inflation, you will need nearly ₹18,000 to buy what ₹10,000 buys today. If your SIP remains fixed, your "real" investment is actually shrinking!
                    </p>

                    <div className="bg-orange-50 p-6 rounded-xl my-8 border-l-4 border-orange-500">
                        <h3 className="text-orange-900 mt-0">The Power of Step-Up</h3>
                        <p>
                            A ₹10,000 SIP for 20 years at 12% gives you <strong>₹50 Lakhs</strong>. <br />
                            A ₹10,000 SIP with a <strong>10% annual Step-Up</strong> for 20 years at 12% gives you <strong>₹1.1 Crores!</strong>
                        </p>
                        <p className="mb-0 font-bold">You more than doubled your wealth by simply increasing your investment as your salary grows.</p>
                    </div>

                    <h3>Why Step-Up Works</h3>
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong>Matches Income Growth:</strong> Most professionals get a 5-10% annual increment. Stepping up your SIP aligns your savings with your earning power.</li>
                        <li><strong>Exponential Compounding:</strong> The extra amounts added in the early and middle years of the tenure get massive time to compound.</li>
                        <li><strong>Beats Lifestyle Inflation:</strong> It prevents "lifestyle creep" where your increasing salary only goes towards bigger cars and better phones.</li>
                    </ul>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-yellow-400 font-bold mb-2">The 10% Strategy</h4>
                        <p className="mb-0">Commit to a 10% annual step-up. If you invest ₹10,000 this year, make it ₹11,000 next year, and ₹12,100 the year after. It's almost invisible in your monthly budget but massive in your final corpus.</p>
                    </div>

                    <h3>Calculate Your Growth</h3>
                    <p>
                        Try our updated SIP calculator with the Step-Up feature to see the difference for your own goals.
                    </p>
                    <div className="mt-6">
                        <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="inline-flex items-center gap-2 p-4 border-2 border-slate-200 rounded-xl hover:border-orange-500 transition-colors bg-slate-50 font-bold text-orange-700">
                            👉 Open SIP Calculator with Step-Up
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
