import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "Step-Up SIP: The Secret to Reaching Your Financial Goals 2x Faster",
    description: "Don't keep your SIP static. Learn how a small annual increase in your SIP can dramatically reduce the time needed to build your dream corpus.",
    category: "INVESTMENT",
    slug: ROUTES.LEARN.STEP_UP_SIP,
    date: "2025-02-22",
    icon: "📈",
    colorClass: "bg-green-100",
    isNew: true
};

export default function StepUpSIP() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="Step-Up SIP: The Secret to Reaching Your Financial Goals 2x Faster"
                description="Don't keep your SIP static. Learn how a small annual increase in your SIP can dramatically reduce the time needed to build your dream corpus."
                type="Article"
                url="https://calcguide.in/learn/step-up-sip-wealth-accelerator-guide/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Step-Up SIP</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        The Wealth Accelerator:<br /> Mastering the Step-Up SIP
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Your salary increases by 10% every year. Does your SIP do the same? If not, you're leaving crores on the table.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>What is a Step-Up SIP?</h2>
                    <p>
                        A <strong>Step-Up SIP</strong> (also known as a Top-up SIP) is an investment strategy where you automatically increase your monthly investment amount by a fixed percentage or amount every year.
                    </p>
                    <p>Most investors start a ₹10,000 SIP and keep it at that level for 20 years. This ignores the fact that their income grows, but their expenses also grow due to inflation. A static SIP loses its "purchasing power improvement" over time.</p>

                    <h2>The Math of 10%</h2>
                    <p>
                        Let's compare two investors over 20 years (assuming 12% returns):
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-slate-900 mt-0">Investor A: Regular SIP</h4>
                            <p className="text-xs text-slate-500">Fixed ₹10,000 / month</p>
                            <div className="mt-4">
                                <p className="text-sm text-slate-600 m-0">Final Corpus:</p>
                                <p className="text-2xl font-black text-slate-900">₹99 Lakhs</p>
                            </div>
                        </div>
                        <div className="p-6 bg-green-50 rounded-xl border-2 border-green-200 shadow-sm">
                            <h4 className="font-bold text-green-900 mt-0">Investor B: Step-Up SIP</h4>
                            <p className="text-xs text-green-700">₹10,000 + 10% annual increase</p>
                            <div className="mt-4">
                                <p className="text-sm text-slate-600 m-0">Final Corpus:</p>
                                <p className="text-2xl font-black text-green-700">₹1.87 Crores!</p>
                            </div>
                        </div>
                    </div>
                    <p>By simply increasing the SIP by 10% (the same as a typical annual salary hike), Investor B nearly <strong>doubles</strong> their final wealth without feeling any extra financial pinch.</p>

                    <h3>Beating Lifestyle Creep</h3>
                    <p>When people get a salary hike, they usually buy a better phone, a bigger car, or eat out more. This is called "Lifestyle Creep". A Step-Up SIP ensures that your <strong>savings rate</strong> keeps pace with your earnings, forcing you to prioritize your future self before the local mall.</p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl relative overflow-hidden">
                        <h4 className="text-green-400 font-bold mb-2 italic">The "Auto-Instruction" Hack</h4>
                        <p className="mb-0 text-slate-300">"Don't rely on memory." Every AMC and major investment app in India (like Groww, Coin, or KUVERA) allows you to set an automated **Top-up %** when you start the SIP. Setting it to 10% once means you never have to think about it again—the wealth building happens in the background while you sleep.</p>
                    </div>

                    <h3>Does it work in a falling market?</h3>
                    <p>Actually, a Step-Up SIP is <strong>even more effective</strong> during bear markets. By increasing your investment amount when the market is low, you end up buying more units at a cheaper price (Rupee Cost Averaging). This significantly boosts your CAGR when the market eventually recovers.</p>

                    <h3>Simulate Your Wealth Journey</h3>
                    <p>Don't settle for lakhs when you could have crores. Use our Step-Up calculator to see how a small increment today changes your life tomorrow.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.INVESTMENT.STEP_UP_SIP} className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition shadow-lg font-bold">
                            📈 Open Step-Up SIP Calculator →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
