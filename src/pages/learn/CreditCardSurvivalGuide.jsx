import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function CreditCardSurvivalGuide() {
    const faqData = [
        {
            question: "Why is the interest rate on credit cards so high?",
            answer: "Credit card debt is 'Unsecured', meaning there is no collateral like a house or gold. To cover the high risk of defaults, banks charge 36% to 42% annual interest (3% to 3.5% per month)."
        },
        {
            question: "What happens if I only pay the Minimum Amount Due?",
            answer: "The Minimum Due (usually 5% of balance) only covers a small portion of interest and almost zero principal. If you have ₹50,000 debt and pay only the minimum, it could take you over 15 years to pay it off, with a total cost of over ₹2 Lakhs!"
        },
        {
            question: "Is it better to convert credit card debt to EMIs?",
            answer: "Yes. Card interest is 42%, while credit card EMIs are usually 14% to 18%. If you cannot pay the full bill, converting it to an EMI is much cheaper than letting the default interest run."
        },
        {
            question: "Should I use my credit card to withdraw cash?",
            answer: "NEVER. Unlike shopping, cash withdrawals have NO interest-free period. Interest starts from the second you take the cash out, plus a high 'Cash Advance Fee'."
        },
        {
            question: "What is the 'Debt Avalanche' method?",
            answer: "It is paying off the debt with the highest interest rate first (usually credit cards), while paying minimum on others. This saves the most money in interest in the long run."
        }
    ];

    const toc = [
        { id: "trap", title: "The 42% Interest Trap" },
        { id: "minimum", title: "Minimum Due: The Life Sentence" },
        { id: "cash", title: "Cash Advance: Instant Poison" },
        { id: "survival", title: "Survival: Avalanche vs Snowball" },
        { id: "emis", title: "Converting to EMI: The ROI" },
        { id: "faq", title: "Credit Card FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Debt Survival</h4>
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
                            
                            <div className="p-6 bg-rose-50 rounded-2xl border border-rose-100 italic text-sm text-rose-800 leading-relaxed shadow-sm italic-selection">
                                "A credit card is a flame. Use it to cook (points/cashback), and it's a tool. Keep it too long (rotational debt), and it will burn your financial house down."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-rose-600 hover:prose-a:text-rose-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-rose-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-rose-50 rounded">Credit Defense 2025</span>
                                <span>•</span>
                                <span>14 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Credit Card Survival: The <span className="text-rose-600 underline decoration-rose-200 decoration-8 underline-offset-8">'Minimum Due'</span> Death Spiral
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Stuck in rotational debt? Paying 3.5% interest per month? Here is how to break the cycle and escape the highest interest trap in modern finance.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-rose-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></span>
                                The Brutal Reality
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Interest Rate</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">42% Per Year</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium italic-selection">More expensive than almost every other legal loan in India.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic text-rose-400">Survival Hack</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">Avlanche Plan</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Pay off the highest interest card first while paying minimums on others.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">EMI Swap</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">Save ~25%</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Converting card balance to 14-18% EMI is better than paying 42% interest.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            A credit card is a miracle if you use it for the interest-free 45 days. But if you carry a balance even for one day past the due date, that miracle turns into a **compound interest monster.**
                        </p>
                        
                        <p>
                            **The Secret**: Credit card companies don't make money from people who pay in full. They make money from the "Minimum Due" crowd—people who are one step away from financial ruin but don't know it yet.
                        </p>

                        <h2 id="trap" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. The 42% Interest Trap: 3.5% pm Math</h2>
                        <p>
                            Most people see "3.5%" and think it's low. But that's **Monthly**. 
                            <br />Annual Rate = (1 + 0.035)^12 - 1 = **51% APY** with compounding. 
                        </p>
                        <p>
                            If you don't pay your bill, the interest isn't just on the pending amount. The moment you miss a payment, you lose the **Interest-Free Period** for ALL new purchases too.
                        </p>

                        <h2 id="minimum" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Minimum Due: The Mathematical Life Sentence</h2>
                        <p>
                            Minimum Amount Due (MAD) is usually 5% of your total balance. 
                        </p>
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-10 italic-selection font-medium italic italic-selection">
                            "If you have ₹50,000 in debt and you only pay the Minimum Due (~₹2,500), about ₹1,750 of that goes just into interest. You only reduced your debt by ₹750. In this cycle, it will take you 188 months (15.5 years) to clear that ₹50k, and you would have paid ₹2.4 Lakhs in total!"
                        </div>

                        <h2 id="cash" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-rose-600">3. Cash Advance: The Instant Poison</h2>
                        <p>
                            Using a credit card at an ATM is the worst financial move possible.
                            <br />- **Interest starts from Day 0**: There is NO interest-free period for cash.
                            <br />- **Transaction Fee**: Usually ₹500 or 3% of amount.
                            <br />- **High Interest**: Usually higher ROI than normal shopping spends.
                        </p>

                        <h2 id="survival" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. Survival: Avalanche vs. Snowball</h2>
                        <p>
                            If you have multiple cards/loans, choose one strategy:
                        </p>
                        <ul className="space-y-6 my-10 list-none p-0">
                            {[
                                { t: "Debt Avalanche (Math Choice)", d: "Rank all debts by Interest Rate. Pay the most expensive one first (42% card) while paying minimums on others. Saves the most money." },
                                { t: "Debt Snowball (Mind Choice)", d: "Rank all debts by Amount. Pay the smallest amount first (₹5,000 bill) to get a win and motivation." },
                                { t: "The EMI Swap", d: "Take a Personal Loan at 13% to pay off the 42% card. You instantly cut your interest burden by 70%." }
                            ].map((strat, idx) => (
                                <li key={idx} className="flex gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                                    <span className="text-rose-600 font-black">S-{idx+1}.</span>
                                    <div>
                                        <strong className="block text-slate-900 mb-1">{strat.t}</strong>
                                        <span className="text-slate-500 text-sm font-medium">{strat.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="my-24 p-14 bg-rose-600 rounded-[4rem] text-white text-center shadow-3xl shadow-rose-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-rose-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Stop the bleeding.</h3>
                                <p className="text-rose-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Use our Debt Consolidation Math to see how much you can save by switching from 42% cards to 13% loans.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.LOAN.PERSONAL} className="px-12 py-6 bg-white text-rose-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Check Swap Savings →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic text-rose-900 italic-selection">Card Survival FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
