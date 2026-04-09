import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function EducationLoanMastery() {
    const faqData = [
        {
            question: "What is a moratorium period in an education loan?",
            answer: "It is the period during your studies (plus 6-12 months) when you are not required to pay any EMIs. However, simple interest is still calculated during this time and added to your principal if not paid."
        },
        {
            question: "How long can I claim Section 80E tax benefits?",
            answer: "You can claim a deduction on the ENTIRE interest paid for up to 8 years or until the interest is fully repaid, whichever is earlier. There is no upper limit on the deduction amount."
        },
        {
            question: "Is collateral (security) always required for education loans?",
            answer: "No. For top-tier institutes (IITs, IIMs, Ivy League), banks offer collateral-free loans up to ₹40-50 Lakhs. For other institutes, collateral (house, FD, or land) is usually required for loans above ₹7.5 Lakhs."
        },
        {
            question: "Should I pay interest during the moratorium period?",
            answer: "YES. If you can afford to pay the simple interest monthly during your studies, do it. This prevents the interest from compounding, saving you 20-30% in total loan cost."
        },
        {
            question: "What is the margin money in education loans?",
            answer: "Margin money is the part of the fee you pay from your own pocket. For loans within India, it's usually 0-5%. for abroad, it can be 15%. Top-tier institute loans often have 0% margin money."
        }
    ];

    const toc = [
        { id: "moratorium", title: "The Moratorium Period: A Double-Edged Sword" },
        { id: "tax", title: "Section 80E: Your 30% Discount" },
        { id: "abroad", title: "Studying Abroad: The NRI Math" },
        { id: "hacks", title: "3 Hacks to Finish the Loan in 4 Years" },
        { id: "rights", title: "Co-borrower Rights & Duties" },
        { id: "faq", title: "Education Loan FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Study Finance</h4>
                                <nav className="space-y-3">
                                    {toc.map(item => (
                                        <a 
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="block text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            
                            <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 italic text-sm text-indigo-800 leading-relaxed shadow-sm italic-selection">
                                "An education loan is an investment in your brain. But if you don't manage the moratorium math, your first 5 years of salary will belong to the bank, not you."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-indigo-50 rounded">Wealth Creation 2025</span>
                                <span>•</span>
                                <span>22 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Education Loan Mastery: Moratoriums, <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-8">80E Math</span>, & Prep
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Taking a ₹50 Lakh loan for an MS in USA or an MBA in India? Understanding the "Interest Holiday" and Tax Deductions can save you ₹15 Lakhs in the long run.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-indigo-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
                                The Master Cheat-Sheet
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Moratorium</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">Course + 1 Yr</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">You don't pay EMIs while studying. But interest still accumulates!</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic text-indigo-400">80E Tax Rule</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">Infinite Benefit</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">100% of interest is tax-deductible for 8 years. A massive gift for high earners.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Secured vs Unsecured</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">Top 50 Lists</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Top global colleges get ₹40L+ collateral-free. Others need security.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            Education loans are unique. Unlike a car loan where you pay from day one, an education loan assumes you have zero income while studying. This leads to the most misunderstood concept in Indian finance: **The Moratorium Period.**
                        </p>
                        
                        <p>
                            If you take ₹40 Lakhs at 10.5% interest, and your course is 2 years long, you don't just owe ₹40 Lakhs when you finish. You owe nearly **₹48.4 Lakhs** because of the interest that built up while you were attending classes.
                        </p>

                        <h2 id="moratorium" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. The Moratorium Trap: Interest Never Sleeps</h2>
                        <p>
                            Banks call it an "Interest Holiday," but it's more like a bill that keeps running while you're on vacation. 
                            <br />- **Simple Interest**: Most Indian banks charge simple interest during the study period.
                            <br />- **Compounding**: If you miss the interest payment, it gets capitalized (added to principal) once the moratorium ends.
                        </p>
                        <p className="font-bold underline decoration-indigo-600 underline-offset-4 italic-selection">Pro Strategy: Ask your parents to pay JUST the interest Every Month (approx. ₹8k-₹10k for a ₹10L loan). This prevents the debt from ballooning by 25% by the time you start your job.</p>

                        <h2 id="tax" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Section 80E: Your 30% Discount</h2>
                        <p>
                            This is the only section of the Income Tax Act where the **ENTIRE interest amount** is deductible from your taxable income.
                        </p>
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-10 italic-selection font-medium italic italic-selection">
                            "If you earn ₹15 Lakhs and your interest is ₹2 Lakhs per year, you only pay tax on ₹13 Lakhs. For someone in the 30% tax bracket, the government is effectively paying 30% of your interest. This makes an 11% loan feel like a 7.7% loan."
                        </div>

                        <h2 id="abroad" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-indigo-600">3. Abroad vs. India: The Dollar/Rupee Math</h2>
                        <p>
                            Studying abroad isn't just about fees; it's about currency risk. 
                            - **Interest Rates**: India loans (9-12% in INR). International lenders (Prodigy/MPOWER) (11-14% in USD).
                            - **Currency Depreciation**: If the Rupee falls 3-4% every year, your USD loan gets 3-4% "cheaper" to pay back from USD salaries, but the interest rates are higher.
                        </p>

                        <h2 id="hacks" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. 3 Hacks to Finish the Loan in 4 Years</h2>
                        <ul className="space-y-6 my-10 list-none p-0">
                            {[
                                { t: "The Sign-on Bonus Hack", d: "When you get your first job, 50% of your sign-on bonus should go into the principal. This reduces interest more than any EMI increase." },
                                { t: "LISP (Lowest Interest Selection)", d: "Apply to the Nationalized banks (SBI/BOB) first. Their rates for premier institutes (IIM/IIT) are often 2-3% lower than NBFCs." },
                                { t: "Refinance Early", d: "After 2 years of steady high income, your CIBIL will be 800+. Refinance the remainder of your loan at a 1.5% lower rate." }
                            ].map((hack, idx) => (
                                <li key={idx} className="flex gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                                    <span className="text-indigo-600 font-black">ST-0{idx+1}.</span>
                                    <div>
                                        <strong className="block text-slate-900 mb-1">{hack.t}</strong>
                                        <span className="text-slate-500 text-sm font-medium">{hack.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="my-24 p-14 bg-indigo-600 rounded-[4rem] text-white text-center shadow-3xl shadow-indigo-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Focus on Grades. We'll handle the Math.</h3>
                                <p className="text-indigo-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Calculate your future EMIs and see how much the Moratorium interest will cost you in total.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.LOAN.EDUCATION} className="px-12 py-6 bg-white text-indigo-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Calculate Study Loan →
                                    </Link>
                                    <Link to={ROUTES.HUBS.STUDENT} className="px-12 py-6 bg-indigo-950 text-white font-black rounded-3xl hover:bg-black transition-all border border-indigo-400/30">
                                        Student Hub
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic text-indigo-900 italic-selection">Study Loan FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
