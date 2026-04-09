import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function PrepaymentVsSIPBattle() {
    const faqData = [
        {
            question: "Is it better to prepay home loan or start a SIP?",
            answer: "Mathematically, if your mutual fund returns (post-tax) are higher than your loan interest rate, SIP is better. However, if your loan rate is above 9.5% or you are in the first 5 years of your loan, prepayment is often superior because of the massive interest savings."
        },
        {
            question: "What is the 11% Rule in Home Loan math?",
            answer: "The 11% Rule suggests that if your loan interest is below 8%, you should invest in SIP. If it's above 11% (like personal loans), you must prepay. In the 8-11% zone (most home loans), a hybrid approach is recommended."
        },
        {
            question: "Can I claim tax benefits if I prepay my home loan?",
            answer: "Section 80C allows deduction for principal repayment up to ₹1.5 Lakhs. Many people already hit this limit with EPF/LIC. Prepaying won't give extra tax benefits if your 80C is already full, but it saves lakhs in future interest."
        },
        {
            question: "Does prepaying reduce my Section 24(b) benefit?",
            answer: "Yes. As you reduce your principal, your annual interest outgo decreases. If it falls below ₹2 Lakhs, your tax deduction under Section 24(b) will also reduce. However, saving 9% interest is almost always better than saving 30% tax on that 9%."
        },
        {
            question: "What is the '1-EMI extra' strategy?",
            answer: "It's a simple hack: pay just one extra EMI every year. This alone can reduce a 20-year loan to roughly 12-14 years, saving you nearly 15-20% of your total loan cost."
        }
    ];

    const toc = [
        { id: "intro", title: "The Million Rupee Dilemma" },
        { id: "rule", title: "The 11% Rule: The Math Proof" },
        { id: "early", title: "Why Early Prepayment is Magical" },
        { id: "comparison", title: "Side-by-Side: Prepay vs. SIP" },
        { id: "hybrid", title: "The 50/50 Strategy (Best of both worlds)" },
        { id: "faq", title: "Loan vs SIP FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Debt vs. Growth</h4>
                                <nav className="space-y-3">
                                    {toc.map(item => (
                                        <a 
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="block text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            
                            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 italic text-sm text-blue-800 leading-relaxed shadow-sm italic-selection">
                                "A loan is negative compounding. An SIP is positive compounding. The winner is determined by which one has the higher interest rate and a longer runway."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-blue-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-blue-50 rounded">Loan Strategy</span>
                                <span>•</span>
                                <span>22 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Home Loan Prepayment vs. SIP: The <span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-8">Million Rupee</span> Battle
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                You have an extra ₹20,000 this month. Should you kill your 9% home loan or feed a 12% SIP? Most people guess. Here is the mathematical proof of what creates more wealth.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-blue-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                                The Decision Framework
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Loan Interest &lt; 9%</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">Go for SIP</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium italic">Compounding in markets usually beats the low-cost loan interest.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Loan Interest &gt; 11%</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">Kill the Debt</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium italic">Prepaying is a guaranteed 11% return. Markets aren't guaranteed.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Psychology Factor</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">50/50 Split</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium italic">Max peace of mind while still building a side corpus.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            It's the classic Indian middle-class dilemma. You've got your bonus, or maybe a salary hike, and suddenly you have a surplus. The EMIs are pinching, but the stock market is buzzing.
                        </p>
                        
                        <p>
                            **The Reality Check**: A Home Loan is "Cheap Debt," but it's still debt. An SIP is "Wealth Creation," but it's volatile. Choosing one over the other can change your net worth by over ₹50 Lakhs over a 20-year horizon.
                        </p>

                        <h2 id="rule" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. The 11% Rule: The Math Proof</h2>
                        <p>
                            Why 11%? Because long-term Equity Mutual Funds (Nifty 50) have historically delivered **12-14% CAGR**. After accounting for risk and the 12.5% LTCG tax, a conservative "net return" is around 11%.
                        </p>
                        <p>
                            If your home loan costs you 9%, and your investment gives you 11%, **SIP wins mathematically**. You are making a 2% spread on the bank's money. However, if your interest rate is 10.5% (common for many private banks), that spread vanishes.
                        </p>

                        <h2 id="early" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Why Early Prepayment is Magical</h2>
                        <p>
                            Banks use the "Reducing Balance Method". In the early years, almost **80% of your EMI** goes towards interest, not principal.
                        </p>
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-10 italic-selection font-medium italic">
                            "In the first 60 months of a 20-year loan, you aren't really buying a house; you are just buying the bank a new office. Any rupee you prepay in these 5 years is worth 4x in interest savings."
                        </div>
                        <p>
                            If you are in Year 15 of your 20-year loan, prepaying is less effective because you've already paid the most expensive interest. At that stage, SIP almost always wins.
                        </p>

                        <h2 id="comparison" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">3. Side-by-Side: The Verdict</h2>
                        <p>
                            Let's take a ₹50 Lakh loan at 9% for 20 years. You have ₹20,000 extra per month.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 my-10 not-prose font-inter">
                            <div className="p-10 bg-blue-50 rounded-[2.5rem] border border-blue-100 border-l-8 border-l-blue-600">
                                <h4 className="text-xl font-black text-blue-900 mb-4 italic">Option A: Prepay Loan</h4>
                                <ul className="list-none p-0 space-y-2 text-sm text-blue-800 font-bold">
                                    <li>- Loan closes in: **8.5 Years**</li>
                                    <li>- Interest Saved: **₹31 Lakhs**</li>
                                    <li>- Final Status: Debt Free Early</li>
                                </ul>
                            </div>
                            <div className="p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 border-l-8 border-l-emerald-600">
                                <h4 className="text-xl font-black text-emerald-900 mb-4 italic">Option B: Start SIP</h4>
                                <ul className="list-none p-0 space-y-2 text-sm text-emerald-800 font-bold">
                                    <li>- Investment View: **20 Years**</li>
                                    <li>- Corpus Created: **₹1.85 Crores** (at 12%)</li>
                                    <li>- Final Status: Wealthy but with EMI</li>
                                </ul>
                            </div>
                        </div>

                        <h2 id="hybrid" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. The 50/50 Strategy: Best of Both Worlds</h2>
                        <p>
                            For most Indians, the stress of a loan is emotional, while the lure of markets is logical. The best strategy? **The 50/50 Split.**
                        </p>
                        <ul className="space-y-6 my-10 list-none p-0">
                            {[
                                { t: "The Math", d: "Put 50% of your surplus into an Index Fund SIP for long-term compounding." },
                                { t: "The Shield", d: "Put 50% into your loan as a bullet prepayment once every 12 months." },
                                { t: "The Result", d: "You close your 20-year loan in 13 years AND end up with a ₹60 Lakh corpus. No compromises." }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                                    <span className="text-blue-600 font-black">ST-0{idx+1}.</span>
                                    <div>
                                        <strong className="block text-slate-900 mb-1">{item.t}</strong>
                                        <span className="text-slate-500 text-sm font-medium">{item.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="my-24 p-14 bg-blue-600 rounded-[4rem] text-white text-center shadow-3xl shadow-blue-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Stop Guessing. Start Calculating.</h3>
                                <p className="text-blue-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Our prepayment vs SIP calculator runs 1,000 simulations to show you exactly which path saves you more money.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.LOAN.HOME_LOAN_PREPAYMENT} className="px-12 py-6 bg-white text-blue-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Open Battle Tool →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic">Prepayment vs. SIP FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
