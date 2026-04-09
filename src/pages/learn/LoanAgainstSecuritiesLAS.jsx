import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function LoanAgainstSecuritiesLAS() {
    const faqData = [
        {
            question: "What is Loan Against Securities (LAS)?",
            answer: "It is a loan where you pledge your mutual funds, stocks, or insurance policies as collateral. Instead of selling your investments, you get a credit limit (Overdraft) based on their value, which you can use for any purpose."
        },
        {
            question: "How much loan can I get against my Mutual Funds?",
            answer: "For Equity Mutual Funds, RBI allows an LTV of 50%. If your portfolio is worth ₹10 Lakhs, you can get a loan of ₹5 Lakhs. For Debt Mutual Funds, the LTV is much higher, around 80%."
        },
        {
            question: "What are the interest rates for LAS?",
            answer: "LAS interest rates are typically 9% to 11% per year. The best part is that you only pay interest on the amount you USE, not the entire limit. This makes it much cheaper than a Personal Loan (13-18%)."
        },
        {
            question: "What is a Margin Call?",
            answer: "If the stock market crashes and your portfolio value falls significantly, the bank might ask you to either pledge more securities or repay a part of the loan to maintain the 50% LTV ratio. This is called a Margin Call."
        },
        {
            question: "Do I still get dividends and growth if I pledge my funds?",
            answer: "Yes! You still own the units. Any dividends or capital appreciation (growth) in the market belong to you. The bank only has a 'lien' (block) on the units so you can't sell them without clearing the loan."
        }
    ];

    const toc = [
        { id: "compounding", title: "Compounding: Why Selling is a Mistake" },
        { id: "od", title: "The Overdraft (OD) Advantage" },
        { id: "ltv", title: "Equity vs Debt: LTV Limits" },
        { id: "math", title: "Math: LAS vs. Personal Loans" },
        { id: "margin", title: "The Margin Call Risk" },
        { id: "faq", title: "LAS FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Liquidity Strategy</h4>
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
                                "The biggest mistake in finance is selling a 15% CAGR asset to fund a 10% emergency. Use a loan, keep the growth, and win the game of compounding."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-emerald-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-emerald-50 rounded">Advance Liquidity 2025</span>
                                <span>•</span>
                                <span>19 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Loan Against Securities: Use your <span className="text-emerald-600 underline decoration-emerald-200 decoration-8 underline-offset-8">MFs without Selling</span> Them
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Have an emergency medical bill or a short-term cash crunch? Don't redeem your Mutual Funds. Use this "Rich Man's Hack" to get liquidity at 10% interest while keeping your units growing.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-emerald-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                                The LAS Blueprint
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Equity LTV</p>
                                    <p className="text-3xl font-black text-white italic italic-selection italic-selection">50% Value</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium italic-selection">Banks give you 50% of your equity portfolio as an instant credit limit.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic text-emerald-400">Debt LTV</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">80% Value</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Safe funds like Liquid/Gilt funds get higher credit limits due to lower risk.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Overdraft</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">Pay on Usage</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Zero cost if balance is zero. You only pay for the exact days you use the cash.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            Most people treat their Mutual Funds like a piggy bank. When they need ₹2 Lakhs, they sell ₹2 Lakhs worth of units. This is a **million-rupee mistake.** 
                        </p>
                        
                        <p>
                            Why? Because when you sell, you pay **exit loads**, you pay **LTCG tax**, and most importantly, you lose the **compounding power** of that ₹2 Lakhs for the next 10 years. 
                        </p>

                        <h2 id="compounding" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. Compounding: Why Selling is a Last Resort</h2>
                        <p>
                            If you sell ₹2 Lakhs of a fund growing at 15% CAGR, you aren't just losing ₹2 Lakhs. In 10 years, you've lost **₹8.1 Lakhs** of potential wealth. 
                            <br />But if you take an LAS at 10% and pay it off in a year, you keep that growth intact.
                        </p>

                        <h2 id="od" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. The Overdraft (OD) Advantage: Smart Credit</h2>
                        <p>
                            Unlike a Personal Loan where the bank dumps money in your account and starts charging interest on the full amount, LAS is an OD facility.
                        </p>
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-10 italic-selection font-medium italic italic-selection">
                            "You have a limit of ₹5 Lakhs. You only need ₹1 Lakh for 10 days. You withdraw ₹1 Lakh, pay interest for just those 10 days (approx. ₹270), and put the money back. The remaining ₹4 Lakhs limit sits there for free. It’s the ultimate emergency fund."
                        </div>

                        <h2 id="ltv" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-emerald-600">3. Equity vs. Debt: LTV Limits</h2>
                        <ul className="space-y-6 my-10 list-none p-0">
                            {[
                                { t: "Equity MFs / Stocks", d: "50% LTV. Due to market volatility, banks keep a high safety margin." },
                                { t: "Debt / Hybrid Funds", d: "75-80% LTV. These are seen as safer assets with lower price swings." },
                                { t: "Insurance (LIC) Policies", d: "Up to 90% of the 'Surrender Value'. Often the cheapest way to borrow cash." }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                                    <span className="text-emerald-600 font-black">!</span>
                                    <div>
                                        <strong className="block text-slate-900 mb-1">{item.t}</strong>
                                        <span className="text-slate-500 text-sm font-medium">{item.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <h2 id="math" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. Math: LAS vs. Personal Loan</h2>
                        <p>
                            Borrowing **₹5 Lakhs for 1 year** (Scenario: Paying it back fully):
                        </p>
                        <div className="my-10 overflow-hidden border border-slate-200 rounded-[3rem] shadow-xl not-prose font-inter font-bold italic">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 text-xs uppercase tracking-widest text-slate-900">Feature</th>
                                        <th className="p-8 text-xs uppercase tracking-widest text-slate-900">Personal Loan (14%)</th>
                                        <th className="p-8 text-xs uppercase tracking-widest text-emerald-600">LAS OD (10%)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="p-8">Processing Fee</td>
                                        <td className="p-8">₹5,000 - ₹10,000</td>
                                        <td className="p-8 text-emerald-600">₹500 - ₹1000</td>
                                    </tr>
                                    <tr>
                                        <td className="p-8">Monthly EMI</td>
                                        <td className="p-8">Fixed (~₹45k)</td>
                                        <td className="p-8 text-emerald-600">Interest Only (Flexible Principal)</td>
                                    </tr>
                                    <tr className="bg-emerald-50/20">
                                        <td className="p-8">Total Interest</td>
                                        <td className="p-8 text-rose-600">₹38,500</td>
                                        <td className="p-8 text-emerald-600 font-black">₹27,500*</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-slate-500">*Assuming average balance used. LAS interest is always calculated daily.</p>

                        <h2 id="margin" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-emerald-600">5. The "Margin Call" Risk</h2>
                        <p>
                            This is the only danger. If the market crashes by 30%, your ₹10 Lakh portfolio becomes ₹7 Lakh. 
                            <br />If your loan was ₹5 Lakh (50% of 10L), it is now **71% of 7L**. The bank will ask you to:
                            <br />1. Pay cash to bring the loan down to ₹3.5 Lakh (50% of 7L).
                            <br />2. Or pledge more shares. 
                            <br />Failure to do this will result in the bank selling your shares at the worst possible time (bottom of the market).
                        </p>

                        <div className="my-24 p-14 bg-emerald-600 rounded-[4rem] text-white text-center shadow-3xl shadow-emerald-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Compounding is precious.</h3>
                                <p className="text-emerald-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">See how much wealth you lose by selling your funds early. Use our CAGR calculator to check your portfolio value in 10 years.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.CAGR} className="px-12 py-6 bg-white text-emerald-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Check Your Growth →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.LOAN.PERSONAL} className="px-12 py-6 bg-emerald-950 text-white font-black rounded-3xl hover:bg-black transition-all border border-emerald-400/30">
                                        Personal Loan Compare
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic text-emerald-900 italic-selection">LAS Strategy FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
