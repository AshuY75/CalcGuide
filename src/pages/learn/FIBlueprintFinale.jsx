import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function FIBlueprintFinale() {
    const faqData = [
        {
            question: "What is Financial Independence (FI)?",
            answer: "Financial Independence is the point where your passive income (from investments, rent, etc.) is enough to cover all your living expenses for the rest of your life, without you having to work for a salary."
        },
        {
            question: "How much corpus do I need for retirement in India?",
            answer: "A common rule thumb is '30X'—thirty times your annual expenses. If you spend ₹10 Lakhs a year, you need a corpus of ₹3 Crores. However, considering 6% inflation, using a goal-based calculator is highly recommended."
        },
        {
            question: "What should be my first step towards FI?",
            answer: "First, buy a Pure Term Insurance and a Health Insurance policy. Without these, one medical emergency or unfortunate event can wipe out 10 years of your savings."
        },
        {
            question: "Is it possible to reach FI on a regular salary?",
            answer: "Yes. By following the '50-30-20' rule (50% Needs, 30% Wants, 20% Investments) and increasing your SIPs by 10% every year with your salary hike, most Indians can reach FI within 15 to 20 years."
        },
        {
            question: "Where should I start my investment journey?",
            answer: "Start with a Nifty 50 Index Fund for long-term growth and an emergency fund in a Liquid Fund or FD for safety. Keep it simple; complexity is the enemy of consistency."
        }
    ];

    const toc = [
        { id: "pillars", title: "The 3 Pillars of Wealth" },
        { id: "debt", title: "Debt: The Growth Anchor" },
        { id: "equity", title: "Equity: The Compounding Engine" },
        { id: "realestate", title: "Real Estate: The Stability Shield" },
        { id: "roadmap", title: "The 5-Step FI Roadmap" },
        { id: "faq", title: "Blueprint FAQ" }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Master Roadmap</h4>
                                <nav className="space-y-3">
                                    {toc.map(item => (
                                        <a 
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="block text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            
                            <div className="p-8 bg-emerald-900 rounded-[2rem] text-white shadow-2xl relative overflow-hidden italic-selection">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl"></div>
                                <p className="text-sm font-medium leading-relaxed italic z-10 relative">
                                    "The goal isn't more money. The goal is to live life on your terms. This blueprint is the summary of 50 articles designed to give you that freedom."
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-800">
                        
                        <header className="mb-20 not-prose">
                            <div className="flex items-center gap-4 text-emerald-600 font-black text-xs uppercase tracking-widest mb-8">
                                <span className="px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-100 italic-selection italic">Article 50 of 50</span>
                                <span>•</span>
                                <span className="text-slate-400">The Grand Finale</span>
                            </div>
                            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 leading-[1.05] mb-10 tracking-tight">
                                The CalcGuide FI Blueprint: <span className="text-emerald-600">Freedom</span> in 2025.
                            </h1>
                            <p className="text-2xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                We've covered Tax, Loans, Real Estate, and Insurance. Now, let's tie it all together into a single, executable strategy for your financial life.
                            </p>
                        </header>

                        {/* Summary Visual Box */}
                        <div className="bg-white rounded-[3rem] border-2 border-slate-100 p-10 sm:p-20 mb-24 shadow-sm not-prose">
                            <h3 className="text-slate-900 font-black text-3xl mb-12 tracking-tight">The Wealth Pyramid</h3>
                            <div className="space-y-6">
                                {[
                                    { t: "Level 3: Abundance", d: "Luxury, Legacy, and Early Retirement. Driven by Dividends & High-Yield Assets.", color: "bg-emerald-500" },
                                    { t: "Level 2: Accumulation", d: "Equity SIPs, Real Estate, Gold. The growth engine of your net worth.", color: "bg-emerald-400" },
                                    { t: "Level 1: Foundation", d: "Term Policy, Health Cover, Emergency Fund. Your survival layer.", color: "bg-emerald-300" }
                                ].map((row, idx) => (
                                    <div key={idx} className="group relative">
                                        <div className={`h-24 w-full ${row.color} rounded-2xl flex flex-col justify-center px-10 transform transition-all group-hover:scale-[1.02] shadow-sm`}>
                                            <span className="text-white font-black text-xl italic italic-selection">{row.t}</span>
                                            <span className="text-white/80 text-xs font-bold italic-selection italic">{row.d}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p>
                            You have reached the end of the **CalcGuide Library**. Over the last 50 articles, we have decoded the math behind Indian money. We've seen how a 1% interest difference in a home loan can cost you ₹10 Lakhs, and how a ₹5,000 SIP can build a ₹1 Crore corpus.
                        </p>
                        
                        <p>
                            But knowledge without action is just entertainment. This final roadmap is your checklist to ensure you are on the right side of compounding.
                        </p>

                        <h2 id="pillars" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. The 3 Pillars: Foundation, Growth, Protection</h2>
                        <p>
                            Most people start with **Growth** (buying stocks). They fail because they have no **Foundation** (Insurance). When a medical emergency hits, they sell their stocks at a loss.
                        </p>
                        <p className="font-bold underline decoration-emerald-500 underline-offset-8">Golden Rule: You cannot build a skyscraper on a swamp. Secure your life and health insurance BEFORE you buy your first stock.</p>

                        <h2 id="debt" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Debt: The Anchor and the Wind</h2>
                        <ul className="space-y-6 my-10 list-none p-0">
                            {[
                                { t: "The Good", d: "Home Loans at 8.5%. Use the leverage to own an asset. Prepay aggressively in the first 5 years." },
                                { t: "The Bad", d: "Car Loans for 7 years. Depreciating asset with high interest. Use the 20-4-10 rule." },
                                { t: "The Ugly", d: "Credit Card Debt at 42%. Kill it. Use a Personal Loan to swap it if needed, but get it out of your life." }
                            ].map((debt, idx) => (
                                <li key={idx} className="flex gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                                    <span className="text-slate-400 font-black">#0{idx+1}</span>
                                    <div>
                                        <strong className="block text-slate-900 mb-1">{debt.t} Debt</strong>
                                        <span className="text-slate-500 text-sm font-medium">{debt.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <h2 id="equity" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-emerald-500">3. Equity: The Only Multiplier</h2>
                        <div className="bg-slate-900 text-white p-12 rounded-[3rem] my-14 relative overflow-hidden not-prose shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
                            <h4 className="text-emerald-400 font-black uppercase text-xs tracking-widest mb-6">The Finale Math</h4>
                            <p className="text-2xl font-medium leading-relaxed mb-8 italic italic-selection">
                                "If you invest ₹20,000 every month at 15% CAGR for 20 years, your total investment is ₹48 Lakhs. Your wealth is ₹3.03 Crores."
                            </p>
                            <div className="flex gap-4">
                                <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
                                <div className="h-1 w-10 bg-slate-700 rounded-full"></div>
                            </div>
                        </div>

                        <h2 id="roadmap" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. The 5-Step FI Roadmap</h2>
                        <ol className="space-y-8 my-10 list-none p-0">
                            {[
                                { s: "Calculate Your Number", d: "Use our FI Calculator to find how much you need to retire. Usually 30X your annual expense." },
                                { s: "Setup the Safety Net", d: "6 months of expenses in a dedicated bank account. No touching it unless for emergencies." },
                                { s: "Automate Growth", d: "Schedule your SIPs on the 1st of every month. Treat investment as a non-negotiable expense." },
                                { s: "The Prepayment Sprint", d: "Redirect every bonus, hike, or gift towards your Home Loan principal to save decades of interest." },
                                { s: "Monitor and Rebalance", d: "Check your Asset Allocation (Equity vs Gold vs Debt) once a year. Stay balanced." }
                            ].map((step, idx) => (
                                <li key={idx} className="group flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center font-black text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <strong className="block text-xl text-slate-900 mb-2">{step.s}</strong>
                                        <p className="text-slate-500 font-medium">{step.d}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className="my-32 p-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[4rem] text-white text-center shadow-3xl overflow-hidden relative not-prose">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="relative z-10">
                                <h3 className="text-5xl sm:text-7xl font-black mb-12 tracking-tight">Your Journey Starts Now.</h3>
                                <p className="text-emerald-50 mb-16 text-2xl max-w-2xl mx-auto font-medium leading-relaxed italic-selection italic">You have the tools. You have the knowledge. The only thing missing is time. Start your first calculation today.</p>
                                <div className="flex flex-wrap justify-center gap-8">
                                    <Link to={ROUTES.HUBS.INVESTMENT} className="px-14 py-8 bg-white text-emerald-700 font-black rounded-[2rem] hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95 text-lg">
                                        Exploration All Calculators →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic text-emerald-900 italic-selection">Financial Freedom FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
