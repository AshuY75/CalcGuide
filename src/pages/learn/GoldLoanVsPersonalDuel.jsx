import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function GoldLoanVsPersonalDuel() {
    const faqData = [
        {
            question: "Which is cheaper: Gold Loan or Personal Loan?",
            answer: "Generally, Gold Loans are cheaper because they are secured by your gold. Interest rates range from 8% to 12%. Personal Loans are unsecured and range from 11% to 24%, depending on your salary and CIBIL score."
        },
        {
            question: "Can I get a Gold Loan with a low CIBIL score?",
            answer: "Yes. Since the bank has your gold as collateral, they are less concerned about your credit history. Many lenders (like Muthoot or Manappuram) provide gold loans even to those with poor or zero credit history."
        },
        {
            question: "How much gold value can I get as a loan?",
            answer: "RBI allows an LTV (Loan-to-Value) of up to 75%. If your gold is worth ₹1 Lakh in the current market, you can get a loan of up to ₹75,000."
        },
        {
            question: "What happens if I default on a Gold Loan?",
            answer: "If you fail to repay, the lender has the right to auction your gold to recover the dues. You will lose your family assets, but your CIBIL will also be severely damaged."
        },
        {
            question: "Is there a processing fee for these loans?",
            answer: "Yes. Gold loans usually have a small valuation fee and processing fee (around ₹500 - ₹1000). Personal loans often charge 1% to 3% of the loan amount as a processing fee."
        }
    ];

    const toc = [
        { id: "duel", title: "The 30-Second Comparison" },
        { id: "speed", title: "Speed vs. Documentation" },
        { id: "roi", title: "ROI Math: Interest-only Hacks" },
        { id: "cibil", title: "The CIBIL Factor" },
        { id: "risk", title: "Risk of Emotional Loss" },
        { id: "faq", title: "Loan Duel FAQ" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Cash Strategy</h4>
                                <nav className="space-y-3">
                                    {toc.map(item => (
                                        <a 
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="block text-sm font-bold text-slate-500 hover:text-amber-600 transition-colors"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            
                            <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 italic text-sm text-amber-800 leading-relaxed shadow-sm italic-selection">
                                "A gold loan is using your past wealth to fund your present. A personal loan is using your future income. Choose based on which one is more certain."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-amber-600 hover:prose-a:text-amber-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-amber-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-amber-50 rounded">Urgent Funding 2025</span>
                                <span>•</span>
                                <span>15 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Gold Loan vs. Personal Loan: Which is <span className="text-amber-600 underline decoration-amber-200 decoration-8 underline-offset-8">Better for Cash?</span>
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Need money for a medical emergency or a wedding? In India, the choice usually boils down to the gold in your locker or the salary in your bank. Let's solve the math.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-amber-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></span>
                                The 30-Second Verdict
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Low CIBIL?</p>
                                    <p className="text-3xl font-black text-white italic italic-selection italic-selection">Gold Loan</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium italic-selection">No credit history required. Hand over the gold, get the cash.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic text-amber-400">High Salary?</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">Personal Loan</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Keep your gold safe. Use your income power to get a loan.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Interest Only?</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">Gold Loan</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Some gold loans allow you to pay only interest monthly and principal at the end.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            When you need money fast, the logic of ROI often goes out the window. But choosing the wrong loan can lead to a debt cycle that lasts years. 
                        </p>
                        
                        <p>
                            **Gold Loans** are secured debt. **Personal Loans** are unsecured debt. This fundamental difference affects everything from interest rates to how long it takes for the money to hit your bank account.
                        </p>

                        <h2 id="speed" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. Speed vs. Documentation: The 1-Hour Rule</h2>
                        <p>
                            If you walk into a gold loan branch with your jewelry:
                            <br />- **Valuation**: 15 minutes.
                            <br />- **Paperwork**: 20 minutes.
                            <br />- **Cash/Transfer**: 10 minutes. 
                            <br />**Total**: Under 1 Hour.
                        </p>
                        <p>
                            For a Personal Loan, even with "Instant" digital processing:
                            <br />- **KYC & Bank Statement**: 30 minutes.
                            <br />- **Verification Call**: 2-4 hours.
                            <br />- **Disbursal**: 24 to 48 hours.
                            <br />**Winner**: Gold Loan for sheer speed.
                        </p>

                        <h2 id="roi" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. ROI Math: Interest-only Hacks</h2>
                        <p>
                            Personal loans usually come with a fixed EMI (Principal + Interest). Gold loans offer a unique flexibility called **"Interest-Only Repayment"**.
                        </p>
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-10 italic-selection font-medium italic italic-selection">
                            "If you take ₹1 Lakh for 6 months, a gold loan might let you pay just ₹800 interest per month, and repay the ₹1 Lakh in one go at the end. This is a lifesaver for business owners waiting for a payment or families waiting for a bonus."
                        </div>

                        <h2 id="cibil" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-amber-600">3. The CIBIL Factor: High Score vs. Collateral</h2>
                        <p>
                            - **Personal Loan**: Every bank check for a PL is a **Hard Enquiry**. If you check 4 banks, your score drops. Rejection in PL deeply hurts your future borrowing power.
                            - **Gold Loan**: Since the loan is backed by 22k gold, banks don't look at CIBIL as a dealbreaker. 
                        </p>

                        <h2 id="risk" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. Risk: Financial vs. Emotional</h2>
                        <div className="grid md:grid-cols-2 gap-8 my-10 not-prose font-inter">
                            <div className="p-10 bg-amber-50 rounded-[2.5rem] border border-amber-100 border-l-8 border-l-amber-600">
                                <h4 className="text-xl font-black text-amber-900 mb-4 italic">Gold Loan Risk</h4>
                                <p className="text-sm text-amber-800 font-bold">If you fail, you lose your family jewelry. The auction is permanent. Emotional cost is high.</p>
                            </div>
                            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 border-l-8 border-l-slate-600 font-bold uppercase italic italic-selection">
                                <h4 className="text-xl font-black text-slate-900 mb-4 italic text-rose-700">Personal Loan Risk</h4>
                                <p className="text-sm text-slate-800">If you default, your CIBIL is destroyed for 7 years. You lose access to credit cards, home loans, and car loans. Financial cost is high.</p>
                            </div>
                        </div>

                        <div className="my-24 p-14 bg-amber-600 rounded-[4rem] text-white text-center shadow-3xl shadow-amber-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-amber-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Don't overpay for cash.</h3>
                                <p className="text-amber-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Compare EMIs and total interest between Gold and Personal loans before you sign the paper.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.LOAN.PERSONAL} className="px-12 py-6 bg-white text-amber-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Check Personal Loan EMIs →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.GOLD.OLD_GOLD} className="px-12 py-6 bg-amber-950 text-white font-black rounded-3xl hover:bg-black transition-all border border-amber-400/30">
                                        Jewelry Valuation
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic text-amber-900 italic-selection">Loan Selection FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
