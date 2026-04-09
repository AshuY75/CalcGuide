import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function HomeLoanRule122025() {
    const faqData = [
        {
            question: "What exactly is the 12-20-25 rule for home loans?",
            answer: "It is a 3-part framework: 1. Pay 12% extra EMI every year (or 1 extra EMI). 2. Pay at least 20% of the property value as a down payment. 3. Keep your total EMI within 25% of your monthly take-home salary."
        },
        {
            question: "How much time can I save by paying one extra EMI every year?",
            answer: "If you pay just one extra EMI every year from the start of a 20-year loan, you can close the entire loan in roughly 12-13 years. If you increase the extra payment to 12% of the EMI every month, it closes even faster (approx 7-9 years)."
        },
        {
            question: "Why is the 25% salary cap important?",
            answer: "Most banks allow EMIs up to 50% of your salary. However, this leaves no room for SIPs, emergency funds, or inflation. Keeping it at 25% ensures you are never 'house poor' and have the surplus needed to prepay the loan."
        },
        {
            question: "Is 20% down payment mandatory?",
            answer: "While banks only require 10-20%, paying more upfront reduces your principal and total interest burden exponentially. It also helps you get better interest rates from banks since your 'Loan-to-Value' (LTV) ratio is lower."
        },
        {
            question: "Can I start the extra EMI payments 5 years into the loan?",
            answer: "Yes, but the impact is slightly less compared to starting in Year 1. However, it's never too late. Even in the middle of the tenure, extra payments directly reduce the principal and save significant future interest."
        }
    ];

    const toc = [
        { id: "intro", title: "Freedom from the 20-Year Trap" },
        { id: "part1", title: "The 12: The 'One Extra EMI' Hack" },
        { id: "part2", title: "The 20: Why Down Payment matters" },
        { id: "part3", title: "The 25: The Golden Income Cap" },
        { id: "math", title: "Mathematical Proof: 20 Years to 7 Years" },
        { id: "faq", title: "12-20-25 FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Debt Mastery</h4>
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
                            
                            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 italic text-sm text-emerald-800 leading-relaxed shadow-sm italic-selection">
                                "A 20-year home loan is a life sentence. The 12-20-25 rule is your early parole board. It's the difference between retiring in your dream home or paying for it until you die."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-emerald-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-emerald-50 rounded">Financial Freedom</span>
                                <span>•</span>
                                <span>18 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Home Loan 12-20-25 Rule: The Strategy to <span className="text-emerald-600 underline decoration-emerald-200 decoration-8 underline-offset-8">Close Your Loan in 7 Years</span>
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Most Indians sign up for a 20-year home loan and spend the next two decades as 'EMI Zombies'. Here is our proprietary framework to get your title deeds back in record time.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-emerald-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                                The 12-20-25 Dashboard
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">The 12</p>
                                    <p className="text-3xl font-black text-white italic">12% Extra</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Pay 12% additional EMI every month (or 1 extra EMI/year).</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">The 20</p>
                                    <p className="text-3xl font-black text-white italic">20% Down</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Minimum down payment. Lower LTV = Better interest rates.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">The 25</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">25% Salary</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Your total EMI should never cross 25% of your take-home pay.</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800">
                                <p className="text-slate-400 italic font-black text-center italic-selection">"FOLLOW THESE THREE, AND YOU LOSE THE 'DEBTOR' LABEL BEFORE YOUR KID FINISHES SCHOOL."</p>
                            </div>
                        </div>

                        <p>
                            In the world of personal finance, there are rules that keep you safe, and then there are rules that set you free. The **12-20-25 Rule** is the latter. 
                        </p>
                        
                        <p>
                            Banks want you to take a 20 or 25-year loan. Why? Because on a ₹50 Lakh loan at 9.5%, you end up paying back **₹1.11 Crore**. That's ₹61 Lakhs of pure profit for the bank. You are essentially buying one house for yourself and half a house for the bank's shareholders.
                        </p>

                        <h2 id="part1" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. The 12: The 'One Extra EMI' Hack</h2>
                        <p>
                            This is the engine of the rule. You have two ways to implement "The 12":
                            - **Option A**: Increase your monthly EMI by **12%** (e.g., if EMI is ₹40k, pay ₹44.8k).
                            - **Option B**: Pay **one full extra EMI** every year as a principal prepayment.
                        </p>
                        <p>
                            **The Magic Math**: Just paying one extra EMI every year (Option B) for the entire tenure reduces a 20-year loan to **approx 13 years**. If you do Option A (12% extra monthly), you can kill a 20-year loan in just under **9 years**. 
                        </p>

                        <h2 id="part2" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-emerald-600">2. The 20: Why 20% Down Payment is Non-Negotiable</h2>
                        <p>
                            Banks today offer "90% financing" or "No Down Payment" schemes for some professionals. **Run away from these.**
                        </p>
                        <p>
                            A 20% down payment is your safety net. 
                            - **Interest Savings**: Every rupee you pay upfront is a rupee that doesn't compound at 9% for 20 years. 
                            - **LTV Benefit**: When the bank sees you putting up 20%, they view you as a "High Quality" borrower and are more likely to offer you the lowest possible ROI (Return on Interest).
                        </p>

                        <h2 id="part3" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. The 25: The Golden Income Cap</h2>
                        <p>
                            Financial institutions often say "You are eligible for a ₹1 Crore loan!" because your salary is ₹2 Lakhs. Your EMI comes to ₹1 Lakh.
                        </p>
                        <ul className="space-y-6 my-10 list-none p-0">
                            {[
                                { t: "The Bank's View (50%)", d: "They want as much of your salary as possible because interest is their revenue." },
                                { t: "The CalcGuide View (25%)", d: "Your EMI should be max 25% of take-home. This leaves you with 75% for living, SIPs, and the 'Extra EMI' hack." }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                                    <span className={`font-black ${idx === 0 ? 'text-slate-400' : 'text-emerald-600'}`}>0{idx+1}.</span>
                                    <div>
                                        <strong className="block text-slate-900 mb-1">{item.t}</strong>
                                        <span className="text-slate-500 text-sm font-medium">{item.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <h2 id="math" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">4. Mathematical Proof: 20 Years to 7 Years</h2>
                        <p>
                            Let's look at **Aniket**, who followed the 12-20-25 rule:
                            - **Loan**: ₹40 Lakhs (Property worth ₹50L, so 20% Down Payment done).
                            - **Tenure**: 20 Years (on paper).
                            - **Interest**: 9%.
                            - **Standard EMI**: ₹35,989.
                        </p>
                        <p>
                            Aniket decides to pay **12% extra** monthly (Total: ₹40,300). He also puts his annual bonus (approx 1 EMI) as a top-up.
                        </p>
                        <div className="bg-emerald-900 text-white p-10 rounded-[2.5rem] my-12 italic-selection font-bold shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 bg-yellow-500 text-black text-[10px] uppercase font-black tracking-widest -rotate-12 translate-x-4 -translate-y-2">Freedom Hack</div>
                            <p className="text-2xl mb-4 italic">The Result for Aniket:</p>
                            <p className="text-emerald-400 text-5xl font-black mb-4">7.4 Years</p>
                            <p className="text-emerald-100 opacity-80 italic">His loan is closed in less than 8 years. He saves over **₹28 Lakhs** in interest payments alone.</p>
                        </div>

                        <div className="my-24 p-14 bg-emerald-600 rounded-[4rem] text-white text-center shadow-3xl shadow-emerald-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Ready to see your freedom date?</h3>
                                <p className="text-emerald-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Our Advanced Prepayment tool allows you to simulate the 12-20-25 rule with just one click.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.LOAN.HOME_LOAN_PREPAYMENT} className="px-12 py-6 bg-white text-emerald-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Test the 12-20-25 Rule →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic text-emerald-900">12-20-25 Strategy FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
