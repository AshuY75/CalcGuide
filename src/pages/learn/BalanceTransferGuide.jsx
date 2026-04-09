import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function BalanceTransferGuide() {
    const faqData = [
        {
            question: "Is a 0.25% lower interest rate worth a balance transfer?",
            answer: "Usually, no. Unless your loan amount is very high (above ₹75 Lakhs) and your tenure is long (above 15 years), the saving from a 0.25% drop is often consumed by the processing fees and stamp duty of the new bank."
        },
        {
            question: "What are the hidden costs of transferring a home loan?",
            answer: "Costs include: 1. Processing fees to the new bank (0.25% - 0.50%). 2. Legal and evaluation charges (₹5k - ₹10k). 3. Stamp duty on the new agreement (state-dependent). 4. MODT (Memorandum of Title Deeds) charges."
        },
        {
            question: "What is a Foreclosure Letter?",
            answer: "It is a document from your current bank stating your exact outstanding principal and confirming they will release your property documents once the payment is made. It is the first document required to start a transfer."
        },
        {
            question: "Can I get a top-up loan while transferring?",
            answer: "Yes! This is one of the biggest reasons for balance transfers. New banks often offer a 'Top-up' loan at the same low home loan rate, which you can use for renovations or business needs."
        },
        {
            question: "How long does the balance transfer process take?",
            answer: "The entire process typically takes 15 to 21 working days. It involves property valuation and legal checks by the new bank, similar to when you first bought the house."
        }
    ];

    const toc = [
        { id: "trap", title: "The 0.25% Trap: Don't Switch Blindly" },
        { id: "math", title: "The Break-even Math: Costs vs. Savings" },
        { id: "checklist", title: "The 5-Point Switching Checklist" },
        { id: "negotiate", title: "Strategy: The Retention Desk Hack" },
        { id: "topup", title: "The Top-up Advantage" },
        { id: "faq", title: "Balance Transfer FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Loan Switching</h4>
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
                            
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-sm text-slate-600 leading-relaxed shadow-sm">
                                "The bank only cares about your loyalty until another bank offers you a lower rate. If you aren't checking your rate every 2 years, you are subsidizing the bank's profit."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-indigo-50 rounded">Interest Optimization</span>
                                <span>•</span>
                                <span>15 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Home Loan Balance Transfer: When is it <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-8">Worth Switching</span> Your Bank?
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                A 0.5% drop in interest rate might sound small, but over 20 years, it's the cost of a luxury car. Here is how to swap banks without getting buried in paperwork and hidden fees.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-indigo-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
                                The Transfer Decision Matrix
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">Green Signal: Switch ✅</p>
                                    <p className="text-3xl font-black text-white italic">0.50%+ ROI Gap</p>
                                    <p className="text-[10px] text-slate-400 mt-3 font-medium">If the new rate is at least 0.5% lower and you have 10+ years left.</p>
                                </div>
                                <div className="border-l border-slate-800 md:pl-16">
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">Red Signal: Stay ❌</p>
                                    <p className="text-3xl font-black text-indigo-400 italic">High Fees</p>
                                    <p className="text-[10px] text-slate-400 mt-3 font-medium">If processing fees + stamp duty take more than 18 months to recover.</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-sm">"Don't pay for the new bank's profit with your interest. Check your break-even month today."</p>
                                <Link to={ROUTES.CALCULATORS.LOAN.EMI} className="px-8 py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition-all shadow-lg hover:-translate-y-1">
                                    Calculate Transfer Savings →
                                </Link>
                            </div>
                        </div>

                        <p>
                            We've all seen the ads: "Transfer your loan to us and save ₹20 Lakhs!" It sounds tempting. Your current bank might be charging you 9.25%, and a competitor is offering 8.65%. 
                        </p>
                        
                        <p>
                            **But here's the catch**: A Home Loan Balance Transfer (BT) is not as simple as switching your mobile network. It involves new documentation, new property valuation, and most importantly—new costs.
                        </p>

                        <h2 id="trap" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. The 0.25% Trap: Don't Switch Blindly</h2>
                        <p>
                            The most common mistake Indian borrowers make is switching for a tiny interest rate reduction. 
                        </p>
                        <p>
                            If your loan is ₹30 Lakhs and the ROI drops by 0.25%, your monthly saving is roughly ₹500 - ₹700. If the processing fees and stamp duty for the new loan come to ₹25,000, **it will take you 3 years just to break even.** 
                        </p>
                        <p className="font-bold text-rose-600 underline">Rule of Thumb: Only consider a full balance transfer if the difference is at least 0.40% and your remaining tenure is more than 10 years.</p>

                        <h2 id="math" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. The Break-even Math: Costs vs. Savings</h2>
                        <p>
                            To know if a switch is worth it, you must calculate your "Break-even Period".
                        </p>
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-12 italic-selection font-medium">
                            **The Formula**: 
                            <br />Transfer Costs (Processing + Stamp Duty + Legal) / Monthly EMI Saving = **Number of Months to recover costs.**
                            <br /><br />
                            If the result is {`<`} 12 months, it's a **No-Brainer.**
                            <br />If the result is 12-24 months, it's **Reasonable.**
                            <br />If the result is {`>`} 36 months, **Stay where you are.**
                        </div>

                        <h2 id="checklist" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">3. The 5-Point Switching Checklist</h2>
                        <ul className="space-y-6 my-10 list-none p-0">
                            {[
                                { t: "CIBIL Score > 750", d: "Banks reserve their 'teaser' rates only for high-score individuals. If your score is low, wait and improve it first." },
                                { t: "Tenure Left > 10 Yrs", d: "In the first half of the loan, you pay most of the interest. That's when switching is most effective." },
                                { t: "Processing Fee Cap", d: "Try to find banks that offer flat-fee processing (e.g., ₹5,000 or ₹10,000) instead of a percentage." },
                                { t: "Top-up Option", d: "Ask the new bank for a 'Home Loan Top-up'. It's the cheapest way to get extra personal funds." },
                                { t: "Current Bank's ROI", d: "Check if your current bank has a 'Soft-Switch' policy." }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                                    <span className="text-indigo-600 font-black">ST-0{idx+1}.</span>
                                    <div>
                                        <strong className="block text-slate-900 mb-1">{item.t}</strong>
                                        <span className="text-slate-500 text-sm font-medium">{item.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <h2 id="negotiate" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-indigo-600">4. Strategy: The Retention Desk Hack</h2>
                        <p>
                            Before you sign papers with a new bank, call your current bank's customer care and ask for the **"Retention Desk"**. 
                        </p>
                        <p>
                            Tell them: *"I have an offer from SBI/HDFC at 8.70%. My current rate with you is 9.25%. I'm ready to move unless you can match the rate."*
                        </p>
                        <p>
                            **The Secret**: Most banks will offer you a "Conversion Fee" (typically ₹2,000 to ₹5,000) to lower your rate to their current market rate for new customers. This saves you the headache of new documentation and the cost of new stamp duty.
                        </p>

                        <h2 id="topup" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5. The Top-up Advantage</h2>
                        <p>
                            If you need ₹10 Lakhs for home renovation or a wedding, a personal loan will cost you 12-15%.
                        </p>
                        <p>
                            But if you do a **Balance Transfer**, the new bank will likely offer you that ₹10 Lakhs as a 'Top-up' at the same 8.5-9% home loan rate. This is essentially "Cheaper Liquidity" and is one of the smartest ways to use your house's increasing equity.
                        </p>

                        <div className="my-24 p-14 bg-indigo-600 rounded-[4rem] text-white text-center shadow-3xl shadow-indigo-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Are you overpaying for your home?</h3>
                                <p className="text-indigo-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Our balance transfer calculator tells you exactly how much you'll save after all fees. Most people save over ₹15 Lakhs.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.LOAN.EMI} className="px-12 py-6 bg-white text-indigo-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Check Switching Profit →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic">Loan Balance Transfer FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
