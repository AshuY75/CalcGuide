import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function PersonalLoanDebtTrap() {
    const faqData = [
        {
            question: "Why are personal loans considered a debt trap?",
            answer: "High interest rates (12-25%) combined with 'pre-payment penalties' and heavy processing fees make them expensive. Since they are unsecured, banks charge a premium that can devour 20-30% of your monthly take-home salary if not managed."
        },
        {
            question: "What is the Snowball Method of debt repayment?",
            answer: "The Snowball method involves paying off your smallest debt first while maintaining minimum payments on others. The 'win' of closing a loan gives you the psychological boost to tackle the bigger ones. It's about behavior, not just math."
        },
        {
            question: "What is the Avalanche Method?",
            answer: "The Avalanche method focuses on paying off the loan with the HIGHEST interest rate first. This is mathematically the fastest way to save money on interest, though it might take longer to see the first loan close."
        },
        {
            question: "Should I take a Gold Loan to pay off my Personal Loan?",
            answer: "Yes, if the Gold Loan interest (typically 8-10%) is significantly lower than your PL rate (15-20%). This 'Debt Consolidation' can reduce your monthly interest outgo by nearly 50%."
        },
        {
            question: "Does closing a personal loan early hurt my CIBIL score?",
            answer: "Temporarily, yes, your score might dip slightly as an active credit line is closed. However, in the long run, a lower 'Debt-to-Income' ratio is much better for your financial health and future loan eligibility."
        }
    ];

    const toc = [
        { id: "intro", title: "Death by 1,000 Cuts" },
        { id: "hidden", title: "Hidden Fees: The 15% becomes 18%" },
        { id: "methods", title: "Snowball vs. Avalanche Strategies" },
        { id: "consolidation", title: "The Consolidation Hack (Gold/LAP)" },
        { id: "steps", title: "5 Steps to Debt Freedom" },
        { id: "faq", title: "Debt Trap FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Debt Recovery</h4>
                                <nav className="space-y-3">
                                    {toc.map(item => (
                                        <a 
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="block text-sm font-bold text-slate-500 hover:text-rose-600 transition-colors"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            
                            <div className="p-6 bg-rose-50 rounded-2xl border border-rose-100 italic text-sm text-rose-800 leading-relaxed shadow-sm">
                                "Interest is what you pay for the luxury of having something today that you can't afford until tomorrow. At 15%, that luxury is very expensive."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-rose-600 hover:prose-a:text-rose-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-rose-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-rose-50 rounded">Financial Health</span>
                                <span>•</span>
                                <span>16 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Personal Loan Debt Trap: How to <span className="text-rose-600 underline decoration-rose-200 decoration-8 underline-offset-8">Escape the 15%</span> Cycle
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                It starts with a "Pre-approved" SMS and ends with 40% of your salary vanishing into interest. Here is how to break the chains of high-interest unsecured debt.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-rose-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></span>
                                The Debt Survival Kit
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Priority 1</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">Stop Fresh Debt</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">No new EMIs until the current ones are under control.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Priority 2</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">Avalanche Math</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Kill the highest interest rate (usually CC or PL) first.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Priority 3</p>
                                    <p className="text-3xl font-black text-rose-400 italic">Consolidate</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Swap 15% debt for 9% secured debt if possible.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            We live in an "EMI Economy". Whether it's the latest iPhone or a vacation to Bali, there's always a bank ready to lend you money at the click of a button. 
                        </p>
                        
                        <p>
                            **The Hook**: "Personal loans are easy to get."
                            <br />**The Reality**: They are incredibly hard to get *rid* of. Unlike a home loan (which is an asset) or an education loan (which is an investment in yourself), personal loans are often spent on depreciating assets or lifestyle inflation.
                        </p>

                        <h2 id="hidden" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. Hidden Fees: The 15% becomes 18%</h2>
                        <p>
                            When a bank says "Interest rate is 14.5%", that is just the beginning. 
                        </p>
                        <ul className="space-y-6 my-10 list-none p-0">
                            {[
                                { t: "Processing Fee", d: "Usually 2-3% of the loan amount, deducted upfront. You pay interest on money you never received." },
                                { t: "Loan Insurance", d: "Often bundled 'mandatorily' by agents. Can take away another 2-4% of your loan principal." },
                                { t: "Pre-payment Penalties", d: "Many banks charge 3-5% if you try to close the loan early. They want you to keep paying that 15% interest." }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                                    <span className="text-rose-600 font-black">!</span>
                                    <div>
                                        <strong className="block text-slate-900 mb-1">{item.t}</strong>
                                        <span className="text-slate-500 text-sm font-medium">{item.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <h2 id="methods" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Snowball vs. Avalanche</h2>
                        <p>
                            If you have multiple loans, you need a battle plan. 
                        </p>
                        <p>
                            - **The Debt Snowball**: Pay off the smallest balance first. It feels great to see one loan disappear. This psychological win keeps you motivated for the next one.
                            - **The Debt Avalanche**: Pay off the highest interest rate first. This is mathematically the best way to save money, but it might take months or years before the first loan actually closes.
                        </p>
                        <p className="font-bold">Our Advice: Use the Avalanche if you are disciplined, and Snowball if you are feeling overwhelmed.</p>

                        <h2 id="consolidation" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-rose-600">3. The Consolidation Hack</h2>
                        <p>
                            Why pay 18% when you can pay 9%? 
                        </p>
                        <p>
                            If you have a home or gold, you can take a **Secured Loan** (LAP or Gold Loan) and use that money to close your high-interest Personal Loans. You aren't "out of debt," but you've just halved your interest outgo. This one move can save you ₹5,000 - ₹15,000 in monthly interest alone.
                        </p>

                        <h2 id="steps" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. 5 Steps to Debt Freedom</h2>
                        <ol>
                            <li>**List everything**: Every loan, every interest rate, every EMI.</li>
                            <li>**Cut the lifestyle**: No luxuries until your "Debt-to-Income" is below 20%.</li>
                            <li>**Kill the Credit Card first**: CC debt is 40% interest—it's a financial emergency.</li>
                            <li>**Automate Prepayments**: Any bonus or extra cash goes to the 'Avalanche' target.</li>
                            <li>**Build a small buffer**: Keep ₹50,000 aside so you don't take a *new* loan for an actual emergency.</li>
                        </ol>

                        <div className="my-24 p-14 bg-rose-600 rounded-[4rem] text-white text-center shadow-3xl shadow-rose-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-rose-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Stop drowning in EMIs.</h3>
                                <p className="text-rose-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Our debt consolidation tool calculates exactly how moving your PL to a Gold or Home loan can save you lakhs.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.LOAN.DEBT_CONSOLIDATION} className="px-12 py-6 bg-white text-rose-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Open Recovery Tool →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic text-rose-900">Personal Debt FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
