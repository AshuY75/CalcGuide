import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function MutualFundNAVGuide() {
    const faqData = [
        {
            question: "Is a ₹10 NAV better than a ₹100 NAV?",
            answer: "No. In mutual funds, a lower NAV does not mean the fund is 'cheap' or 'undervalued'. It simply means the fund has more units or is newer. If two funds invest in the same stocks and those stocks grow by 10%, both funds will give you a 10% return, regardless of whether their NAV is ₹10 or ₹1000."
        },
        {
            question: "Does NAV change during the day like stock prices?",
            answer: "No. Unlike stocks which trade every second, Mutual Fund NAV is calculated once a day after the market closes (usually by 9 PM). The price you get depends on when you placed your order (before or after the 3 PM cutoff)."
        },
        {
            question: "What is the formula for NAV?",
            answer: "NAV = (Total Assets - Total Liabilities) / Number of Outstanding Units. Assets include the stocks, bonds, and cash held by the fund. Liabilities include management fees and expenses."
        },
        {
            question: "Why do some people prefer NFOs because of ₹10 NAV?",
            answer: "This is a psychological trap. Investors feel they are getting 'more units' for the same money. While that is true, the *value* of those units is what matters. 1000 units at ₹10 is the same as 10 units at ₹1000. If the market grows 10%, you have ₹11,000 in both cases."
        },
        {
            question: "Does a high NAV mean the fund is very old?",
            answer: "Usually, yes. A high NAV (like ₹1,500) indicates that the fund has compounded over many years. It shows a track record of performance. A newer fund starts at ₹10."
        }
    ];

    const toc = [
        { id: "trap", title: "The 'Cheap NAV' Trap" },
        { id: "meaning", title: "What exactly is NAV?" },
        { id: "pizza", title: "The Pizza Analogy (Units vs. Value)" },
        { id: "calculation", title: "How NAV is Calculated daily" },
        { id: "nfo", title: "NFOs and the ₹10 Psychology" },
        { id: "factors", title: "What actually determines your profit?" },
        { id: "faq", title: "NAV FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Investor Education</h4>
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
                            
                            <div className="p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 italic text-sm text-indigo-700 leading-relaxed shadow-sm">
                                "In the stock market, price is what you pay, value is what you get. In Mutual Funds, NAV is just a reporting number—returns are what you should watch."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-indigo-50 rounded">Mutual Fund Basics</span>
                                <span>•</span>
                                <span>15 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                What is <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-8">NAV</span> in Mutual Funds? (The ₹10 Myth Debunked)
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Many Indians think buying an NFO at ₹10 NAV is like buying a stock at a discount. **Biggest mistake ever.** Let's fix your mental model of Mutual Fund pricing once and for all.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-indigo-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
                                NAV Reality Check
                            </h3>
                            <div className="relative z-10 grid md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <p className="text-4xl font-black italic">NAV ≠ Value</p>
                                    <p className="text-slate-400 font-medium leading-relaxed">
                                        NAV is simply a technical number to help account for your holding. It has **Zero influence** on whether a fund is "Expensive" or "Cheap".
                                    </p>
                                </div>
                                <div className="p-8 bg-slate-800 rounded-3xl border border-slate-700">
                                    <p className="text-indigo-400 text-xs font-black uppercase mb-4 tracking-widest">The "Cheap" Paradox</p>
                                    <p className="text-white text-sm leading-relaxed italic">
                                        "I'll buy the ₹10 NFO because I get 1,000 units for ₹10k. The ₹100 NAV fund only gives me 100 units." <br/>
                                        <span className="text-rose-400 block mt-4 font-bold">WRONG. If both grow 15%, both investors make ₹1,500 profit. The number of units is irrelevant.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-sm">"Don't count the units. Count the CAGR."</p>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition-all shadow-lg hover:-translate-y-1">
                                    Calculate Real Returns →
                                </Link>
                            </div>
                        </div>

                        <p>
                            If you've ever scrolled through an investment app like Groww, Zerodha, or INDmoney, you see a number next to every mutual fund—Net Asset Value (NAV). 
                        </p>
                        
                        <p>
                            Understandably, most people apply "Shopping Mall Logic" here. If a T-shirt is ₹500 and another is ₹5000, the ₹500 one is cheap. But a Mutual Fund isn't a T-shirt. It's a **Basket of Goods**.
                        </p>

                        <h2 id="meaning" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. What exactly is NAV?</h2>
                        <p>
                            NAV stands for **Net Asset Value**. It is the market value of one unit of the mutual fund scheme. 
                        </p>
                        <p>
                            Think of it as the **unit price**. 
                        </p>
                        <p>
                            But unlike a stock (where the price might be ₹4,000 because investors think the company is great), a mutual fund's NAV is purely a mathematical summation of what's inside the basket.
                        </p>

                        <h2 id="pizza" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic underline decoration-indigo-600">2. The Pizza Analogy (The best way to understand)</h2>
                        <p>
                            Imagine two identical 12-inch Pizzas. 
                        </p>
                        <ul>
                            <li><strong>Pizza A</strong> is cut into **10 slices**. Price: **₹100 per slice**.</li>
                            <li><strong>Pizza B</strong> is cut into **100 slices**. Price: **₹10 per slice**.</li>
                        </ul>
                        <p>
                            Which slice is "cheaper"? 
                        </p>
                        <p>
                            Obviously, neither. Pizza B’s slice is just smaller. If the price of cheese goes up and the value of both pizzas increases by 10%, you have more money regardless of which pizza you bought a slice of.
                        </p>
                        <p className="bg-slate-50 p-8 rounded-3xl border border-slate-200 font-bold text-slate-800">
                            In Mutual Funds: <br/>
                            - The **Pizza** is the Fund's Portfolio (Stocks like Reliance, Infosys). <br/>
                            - The **Slices** are your Units. <br/>
                            - The **Slice Price** is the NAV.
                        </p>

                        <h2 id="calculation" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. How NAV is Calculated Daily</h2>
                        <p>
                            Every day when the Indian stock market closes at 3:30 PM, the Mutual Fund House (AMC) does some math:
                        </p>
                        <ol className="list-decimal pl-6 space-y-4">
                            <li><strong>Sum of Assets</strong>: They look at the closing price of all stocks/bonds they own.</li>
                            <li><strong>Subtract Liabilities</strong>: They subtract their management fees, electricity bills, and employee salaries (Expense Ratio).</li>
                            <li><strong>Divide</strong>: They divide the remainder by the total units owned by investors.</li>
                        </ol>
                        <p>
                            **Result**: The NAV. This is why NAV only updates once a day (usually by 9 PM or 11 PM).
                        </p>

                        <h2 id="nfo" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. NFOs and the "₹10 Psychology"</h2>
                        <p>
                            AMCs (Asset Management Companies) know about your psychological bias. This is why nearly every **New Fund Offer (NFO)** starts at an NAV of ₹10. 
                        </p>
                        <p>
                            They want you to feel you are getting a "Huge Quantity". 
                        </p>
                        <p>
                            But a fund with a NAV of ₹1,200 (like HDFC Top 100) has a high NAV because it has been growing for **20+ years**. A high NAV is actually a sign of a strong, surviving fund. A low NAV is just a sign of a "new slice".
                        </p>

                        <h2 id="factors" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5. What actually determines your profit?</h2>
                        <p>
                            If you want to make money in Mutual Funds, ignore the NAV. Look at these three things instead:
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 my-10 not-prose">
                            <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-2xl text-center">
                                <h4 className="font-black text-indigo-900 mb-2">Portfolio Quality</h4>
                                <p className="text-xs text-indigo-700 font-medium">Which stocks does the manager own? Are those companies profitable?</p>
                            </div>
                            <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-2xl text-center">
                                <h4 className="font-black text-emerald-900 mb-2">Expense Ratio</h4>
                                <p className="text-xs text-emerald-700 font-medium">How much is the AMC 'eating' from your profit every year?</p>
                            </div>
                            <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl text-center">
                                <h4 className="font-black text-slate-900 mb-2">Tracking Error</h4>
                                <p className="text-xs text-slate-700 font-medium">(For Index funds) How closely does the fund follow the benchmark?</p>
                            </div>
                        </div>

                        <div className="my-24 p-14 bg-indigo-600 rounded-[4rem] text-white text-center shadow-3xl shadow-indigo-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Focus on the Goal, Not the Units.</h3>
                                <p className="text-indigo-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Use our SIP calculator to see how a consistent 12-15% return builds wealth, regardless of starting NAV.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-12 py-6 bg-white text-indigo-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Calculate Future Wealth →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.LUMPSUM} className="px-12 py-6 bg-indigo-950 text-white font-black rounded-3xl hover:bg-black transition-all border border-indigo-400/30">
                                        Check Lumpsum Returns
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic">Common NAV Doubts</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
