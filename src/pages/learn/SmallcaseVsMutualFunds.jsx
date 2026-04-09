import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function SmallcaseVsMutualFunds() {
    const faqData = [
        {
            question: "Do I actually own the stocks in a Smallcase?",
            answer: "Yes. Unlike a mutual fund where you own 'units', in a Smallcase, the individual stocks are directly held in your Demat account (Zerodha, Groww, etc.). You get the dividends directly in your bank account."
        },
        {
            question: "Is Smallcase cheaper than a Mutual Fund?",
            answer: "Not necessarily. Mutual funds charge a percentage (Expense Ratio, e.g., 0.5% to 2%). Smallcases often have a flat subscription fee (e.g., ₹2,000/year) plus brokerage on every trade. For small investments (below ₹1 Lakh), Mutual Funds are usually much cheaper."
        },
        {
            question: "How does 'Rebalancing' work in Smallcase?",
            answer: "When a Smallcase manager suggests a change, you get a notification. YOU have to manually click 'confirm' to buy/sell the stocks to match the new portfolio. In a Mutual Fund, the manager does this automatically behind the scenes."
        },
        {
            question: "Is Smallcase riskier than a Mutual Fund?",
            answer: "Smallcases are often more 'concentrated'. A Mutual Fund might own 50-80 stocks, while a Smallcase might own only 10-15. This makes Smallcase more volatile—it can give huge profits but also huge losses."
        },
        {
            question: "Can I do an SIP in Smallcase?",
            answer: "Yes, most platforms allow 'SIP' in Smallcase. However, it’s not as flexible as a MF SIP because you have to buy whole shares. If a stock in the basket is ₹2,000, your minimum SIP must be at least that amount."
        }
    ];

    const toc = [
        { id: "duel", title: "Smallcase vs. Mutual Funds: The Core Duel" },
        { id: "ownership", title: "Ownership: Units vs. Shares" },
        { id: "cost", title: "The Cost Trap: Fees vs. Expense Ratio" },
        { id: "rebalance", title: "The Hassle of Rebalancing" },
        { id: "tax", title: "Taxation: The Hidden Difference" },
        { id: "selection", title: "Which one is right for you?" },
        { id: "faq", title: "Investment Comparison FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Modern Investing</h4>
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
                                "Mutual Funds are like taking a public bus: someone else drives, it's cheap, and you get to your destination. Smallcase is like renting a car: you have control, but you have to pay for the fuel and the maintenance yourself."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-indigo-50 rounded">Thematic Investing</span>
                                <span>•</span>
                                <span>18 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Smallcase vs Mutual Funds: Which is better for the <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-8">Indian Retail</span> Investor?
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Do you want to "Own the Market" or "Own the Brands"? One offers expert diversification, the other offers raw transparency. Let's settle the debate.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-indigo-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
                                The "Who Wins?" Matrix
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                                <div>
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">Mutual Fund (The Mass Market)</p>
                                    <p className="text-3xl font-black text-white italic">Best for &lt; ₹5L</p>
                                    <p className="text-xs text-slate-400 mt-3 font-medium">Automation, SIP flexibility, Instant diversification, Low complexity.</p>
                                </div>
                                <div className="border-l border-slate-800 md:pl-16">
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">Smallcase (The Elite Choice)</p>
                                    <p className="text-3xl font-black text-white italic text-selection-amber">Best for &gt; ₹5L</p>
                                    <p className="text-xs text-slate-400 mt-3 font-medium">Transparency, Direct dividends, Thematic control, No 'Unit' overhead.</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-sm">"If you're investing ₹5,000, stick to Mutual Funds. If you're investing ₹50,000, a Smallcase might be worth the hassle."</p>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-8 py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition-all shadow-lg hover:-translate-y-1">
                                    Simulate Future Wealth →
                                </Link>
                            </div>
                        </div>

                        <p>
                            In the last 5 years, the Indian stock market has seen a massive flood of new investors. Most start with Mutual Funds, but soon, they hear about "Smallcases" from their favorite Fin-Influencers.
                        </p>
                        
                        <p>
                            Smallcase is often sold as the "Future of Investing". But while it is more modern, it isn't always better. Let's look at the mechanics of why you might choose one over the other.
                        </p>

                        <h2 id="ownership" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. Ownership: Units vs. Direct Shares</h2>
                        <p>
                            **Mutual Fund**: You own "Units". The actual shares (Reliance, Infosys, etc.) are owned by the AMC (Asset Management Company) on your behalf. You are just a beneficiary.
                        </p>
                        <p>
                            **Smallcase**: You own the "Shares". If the Smallcase has 10 stocks, you will see 10 different stocks in your Demat account.
                        </p>
                        <p className="font-bold text-slate-900 italic">Why this matters: In a Smallcase, any dividends paid by the companies go DIRECTLY to your bank account. In a Mutual Fund (Growth), the dividends are reinvested automatically.</p>

                        <h2 id="cost" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. The Cost Trap: Why Smallcase can be Expensive</h2>
                        <p>
                            Most people look at the "Expense Ratio" of a Mutual Fund (usually 0.5% to 1% for Direct plans) and think it's high. 
                        </p>
                        <p>
                            But Smallcase has "Invisible" costs:
                        </p>
                        <ul>
                            <li><strong>Subscription Fee</strong>: Professional managers like Windmill Capital or Weekend Investing charge a flat fee (e.g., ₹2,000 per quarter).</li>
                            <li><strong>Brokerage</strong>: Every time you buy or rebalance, your broker (Zerodha/Groww) takes a cut.</li>
                            <li><strong>STT & Charges</strong>: Security Transaction Tax is paid on every buy/sell in Smallcase. In a Mutual Fund, the AMC handles this efficiently at scale.</li>
                        </ul>
                        <p className="bg-rose-50 p-8 rounded-3xl border border-rose-100 font-bold text-rose-900 italic-selection">The Break-even Rule: Until your investment amount is large enough that the flat fee is less than 0.5% of your portfolio, Mutual Funds are mathematically superior.</p>

                        <h2 id="rebalance" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. The Rebalancing Hassle</h2>
                        <p>
                            **Mutual Fund**: Set the SIP and forget. The manager sells a bad stock and buys a good one and you don't even have to lift a finger.
                        </p>
                        <p>
                            **Smallcase**: You are the executor. When the manager says "Sell TCS and Buy Infosys", you have to open the app and click 'Apply'. If you miss a notification because you were on vacation, your portfolio becomes 'Out of Sync'.
                        </p>

                        <h2 id="tax" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. Taxation: The Secret Winner</h2>
                        <p>
                            **Mutual Fund**: The manager can sell 100 stocks inside the fund and you pay **Zero Tax**. You only pay tax when YOU sell the Mutual Fund units.
                        </p>
                        <p>
                            **Smallcase**: Every rebalance is a Tax event. If the manager sells a stock to rebalance your Smallcase, that is a 'Sell' order in your account. You might trigger Short Term Capital Gains (STCG) at 20% or LTCG at 12.5% every time the manager changes their mind!
                        </p>

                        <div className="my-12 overflow-hidden border border-slate-200 rounded-[2.5rem] shadow-xl not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Feature</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest text-emerald-600">Mutual Fund</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest text-indigo-600">Smallcase</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="p-8 text-slate-700 font-bold">Automation</td>
                                        <td className="p-8 text-emerald-600 font-black">100% (Passive)</td>
                                        <td className="p-8 text-slate-400 font-medium">Active Participation</td>
                                    </tr>
                                    <tr className="bg-indigo-50/20 transition-colors">
                                        <td className="p-8 text-slate-700 font-bold">Transparency</td>
                                        <td className="p-8 text-slate-400 font-medium">Monthly disclosure</td>
                                        <td className="p-8 text-indigo-600 font-black">Real-time</td>
                                    </tr>
                                    <tr>
                                        <td className="p-8 text-slate-700 font-bold">Tax Efficiency</td>
                                        <td className="p-8 text-emerald-600 font-black">High</td>
                                        <td className="p-8 text-rose-600 font-bold">Moderate / Low</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="my-24 p-14 bg-indigo-600 rounded-[4rem] text-white text-center shadow-3xl shadow-indigo-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">One Goal. Multiple Paths.</h3>
                                <p className="text-indigo-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Compare how much a 1% difference in fees can make to your 20-year wealth using our SIP calculator.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-12 py-6 bg-white text-indigo-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Calculate Future Wealth →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.LUMPSUM} className="px-12 py-6 bg-indigo-950 text-white font-black rounded-3xl hover:bg-black transition-all border border-indigo-400/30">
                                        Simulate Lumpsum
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic">Common Trading Doubts</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
