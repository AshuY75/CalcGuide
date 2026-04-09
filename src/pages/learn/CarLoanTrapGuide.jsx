import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function CarLoanTrapGuide() {
    const faqData = [
        {
            question: "Why is a 7-year car loan considered a trap?",
            answer: "A car is a depreciating asset. By the 4th or 5th year, the market value of the car might be lower than the remaining loan balance (Negative Equity). If you want to sell the car or if it gets totaled, you will still owe money to the bank out of pocket."
        },
        {
            question: "What is the ideal tenure for a car loan?",
            answer: "Financial experts recommend a tenure of 3 to 4 years. This ensures that the loan principal reduces faster than the car's depreciation, and you aren't paying interest on a 6-year-old vehicle that requires high maintenance."
        },
        {
            question: "Is it better to take a used car loan?",
            answer: "Used car loans have much higher interest rates (12-18%) compared to new car loans (8-11%). Often, buying a slightly cheaper new car is better than a used car on a high-interest loan."
        },
        {
            question: "What is the 20-4-10 rule for car buying?",
            answer: "20% Downpayment, 4 Years max tenure, and total car expenses (EMI + Fuel + Insurance) should not exceed 10% of your monthly take-home salary."
        },
        {
            question: "Can I prepay my car loan?",
            answer: "Most banks charge a foreclosure fee of 2-5% on the remaining principal for car loans. However, some private banks offer zero foreclosure after 1-2 years. Always check the fine print before signing."
        }
    ];

    const toc = [
        { id: "depreciation", title: "Depreciation: The Silent Thief" },
        { id: "equity", title: "Negative Equity Explained" },
        { id: "tenure", title: "3 vs 5 vs 7 Years: The Math" },
        { id: "ins", title: "Insurance & Hidden Costs" },
        { id: "rules", title: "The 20-4-10 Rule of Buying" },
        { id: "faq", title: "Car Loan FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Auto Finance</h4>
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
                                "A car is not an asset; it is a lifestyle expense. If you use a 7-year loan to buy it, you are making the bank rich while your parking lot gets depreciating metal."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-rose-600 hover:prose-a:text-rose-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-rose-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-rose-50 rounded">Financial Health 2025</span>
                                <span>•</span>
                                <span>16 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Car Loan Trap: Why <span className="text-rose-600 underline decoration-rose-200 decoration-8 underline-offset-8">7 Years is too Long</span> for a Car
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Thinking of that ₹15 Lakh SUV on a long-term EMI? Before you drive out of the showroom, understand the brutal math of depreciation vs. debt.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-rose-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></span>
                                The Depreciation Clock
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Year 0</p>
                                    <p className="text-3xl font-black text-white italic italic-selection italic-selection">-20% Value</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium italic-selection">The moment your tires touch the public road, the resale value drops by 20%.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic text-rose-400">Interest Trap</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">7 Years</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Over 7 years, you pay nearly 45% of the car's price just in interest.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Golden Rule</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">20-4-10</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">20% Down / 4 Yr Tenure / 10% Salary cap for all car expenses.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            We've all seen the ads: **"Low EMIs, 7-year tenure, drive your dream car today!"** But what the bank doesn't tell you is that by the 7th year, your car is worth only 30% of its price, but you're still paying interest as if it was brand new.
                        </p>
                        
                        <p>
                            **The Trap**: Car loans are amortized. If you take a 7-year loan, most of your initial 3 years of EMIs are just paying off the **interest**, not the actual car. 
                        </p>

                        <h2 id="depreciation" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. Depreciation: The Asset that Melts</h2>
                        <p>
                            Unlike a house (which usually grows) or a stock (which can grow), a car starts losing value the second you take delivery.
                            <br />- **Day 1**: -20% (Showroom profit + taxes).
                            <br />- **Year 3**: -40% to -50% value.
                            <br />- **Year 5**: -60% value.
                        </p>

                        <h2 id="equity" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Negative Equity: When You Owe the Bank to Sell</h2>
                        <p>
                            Negative Equity happens when the loan amount is **higher** than the market value of the car. 
                        </p>
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-10 italic-selection font-medium italic italic-selection">
                            "Imagine it's Year 5 of your 7-year loan. You want to sell your car. The market says it's worth ₹4 Lakhs. But your bank statement says you still owe ₹5.5 Lakhs. You effectively have to pay ₹1.5 Lakhs from your savings just to be 'allowed' to sell your own car."
                        </div>

                        <h2 id="tenure" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-rose-600">3. 3 vs. 5 vs. 7 Years: The Math</h2>
                        <p>
                            On a **₹10 Lakh loan at 9.5% ROI**:
                        </p>
                        <div className="my-10 overflow-hidden border border-slate-200 rounded-[3rem] shadow-xl not-prose font-inter font-bold italic">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 text-xs uppercase tracking-widest text-slate-900">Tenure</th>
                                        <th className="p-8 text-xs uppercase tracking-widest text-slate-900">Monthly EMI</th>
                                        <th className="p-8 text-xs uppercase tracking-widest text-rose-600">Total Interest</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="p-8">3 Years</td>
                                        <td className="p-8">₹32,033</td>
                                        <td className="p-8 text-blue-600">₹1.53 Lakhs</td>
                                    </tr>
                                    <tr className="bg-amber-50/20">
                                        <td className="p-8">5 Years</td>
                                        <td className="p-8">₹21,002</td>
                                        <td className="p-8 text-amber-600">₹2.60 Lakhs</td>
                                    </tr>
                                    <tr className="bg-rose-50/20">
                                        <td className="p-8 text-rose-900">7 Years</td>
                                        <td className="p-8">₹16,351</td>
                                        <td className="p-8 text-rose-600">₹3.73 Lakhs</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-center font-bold text-slate-500">The 7-year loan costs you **₹2.2 Lakhs more** than the 3-year version. That's money you could have spent on fuel or maintenance!</p>

                        <h2 id="rules" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. The 20-4-10 Rule of Buying</h2>
                        <p>
                            To avoid the debt trap, follow the global "Smart Buyer" rule:
                        </p>
                        <ul className="space-y-6 my-10 list-none p-0">
                            {[
                                { t: "20% Downpayment", d: "Never take zero-downpayment loans. Paying 20% upfront ensures you are never in 'Negative Equity'." },
                                { t: "4 Years Max Tenure", d: "Finish the loan before the car starts needing expensive service (Tyres, Battery, Suspension)." },
                                { t: "10% Salary Cap", d: "Your total car cost (EMI + Fuel + Service + Insurance) should be under 10% of your net pay." }
                            ].map((rule, idx) => (
                                <li key={idx} className="flex gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                                    <span className="text-rose-600 font-black">R-{idx+1}.</span>
                                    <div>
                                        <strong className="block text-slate-900 mb-1">{rule.t}</strong>
                                        <span className="text-slate-500 text-sm font-medium">{rule.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="my-24 p-14 bg-rose-600 rounded-[4rem] text-white text-center shadow-3xl shadow-rose-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-rose-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Don't buy a liability.</h3>
                                <p className="text-rose-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Our Car Loan Tool helps you see the total cost of ownership including interest and depreciation.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.LOAN.CAR} className="px-12 py-6 bg-white text-rose-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Check EMI Math →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic text-rose-900 italic-selection">Car Debt FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
