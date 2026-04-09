import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function FlexiVsMultiCap() {
    const faqData = [
        {
            question: "What is the main difference between Flexi-Cap and Multi-Cap?",
            answer: "Multi-Cap funds MUST invest at least 25% each in Large-cap, Mid-cap, and Small-cap stocks at all times. Flexi-Cap funds have no such restriction; the fund manager can move 100% into Large-caps if they feel the market is risky, or go heavy on Small-caps during a bull run."
        },
        {
            question: "Is Multi-Cap riskier than Flexi-Cap?",
            answer: "Generally, yes. Because Multi-Cap funds are forced to keep 25% in Small-caps even when the market is crashing, they can be more volatile. Flexi-Caps are usually 'safer' because the manager has the freedom to exit risky segments."
        },
        {
            question: "Which one gives better returns?",
            answer: "In a raging bull market, Multi-Cap funds often outperform because of their mandatory 25% Small-cap exposure. However, over a 5-10 year cycle, Flexi-Cap funds are often preferred for their ability to manage 'downside risk'."
        },
        {
            question: "Should a first-time investor choose Flexi-Cap?",
            answer: "Yes. For a beginner, a Flexi-Cap fund is usually the best 'all-in-one' solution. It gives you exposure to all segments of the Indian economy while leaving the technical allocation decisions to an expert fund manager."
        },
        {
            question: "Can I switch from Multi-Cap to Flexi-Cap?",
            answer: "Yes, you can switch, but remember that selling units in one fund to buy another counts as a 'Redemption' and might trigger Capital Gains Tax (LTCG)."
        }
    ];

    const toc = [
        { id: "duel", title: "Flexibility vs. Mandate: The Big Duel" },
        { id: "multi-cap-rule", title: "Multi-Cap: The 25-25-25 Rule" },
        { id: "flexi-cap-freedom", title: "Flexi-Cap: The Manager's Playground" },
        { id: "performance", title: "Bull vs. Bear Market Performance" },
        { id: "selection", title: "Investor Persona: Which one are you?" },
        { id: "hacks", title: "5 Selection Hacks for 2025" },
        { id: "faq", title: "Common Fund Queries" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Mutual Fund School</h4>
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
                            
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-sm text-slate-600 leading-relaxed shadow-sm">
                                "Investing is like driving. A Flexi-cap is an automatic car that shifts gears for you. A Multi-cap is a manual where you're forced to stay in high gear even on a bumpy road."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-rose-600 hover:prose-a:text-rose-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-rose-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-rose-50 rounded">Investment Strategy</span>
                                <span>•</span>
                                <span>20 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Flexi Cap vs Multi Cap: Which is the <span className="text-rose-600">Ultimate Wealth Builder</span>?
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Choosing between Flexi and Multi-cap is the difference between hiring a chef who chooses the best ingredients (Flexi) and a chef who MUST use 25% Karela in every dish (Multi).
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-rose-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></span>
                                The "Rules of the Game"
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                                <div>
                                    <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-3">Multi-Cap Funds</p>
                                    <p className="text-xl font-bold text-white leading-tight underline decoration-rose-500 underline-offset-8">Mandatory 25-25-25</p>
                                    <p className="text-xs text-slate-500 mt-6 font-medium leading-relaxed">Must hold 25% Large, 25% Mid, and 25% Small-caps at ALL times. High volatility, high upside potential.</p>
                                </div>
                                <div className="border-l border-slate-800 md:pl-16">
                                    <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-3">Flexi-Cap Funds</p>
                                    <p className="text-xl font-bold text-white leading-tight underline decoration-emerald-500 underline-offset-8">Total Manager Freedom</p>
                                    <p className="text-xs text-slate-500 mt-6 font-medium leading-relaxed">Can invest 0% to 100% in any segment. Better downside protection, slower (calm) growth.</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-sm">"If you hate seeing red in your portfolio during market corrections, Flexi-Cap is likely your best friend."</p>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-10 py-5 bg-rose-600 text-white font-black rounded-2xl hover:bg-rose-700 transition-all shadow-lg hover:-translate-y-1">
                                    Calculate My Potential Returns →
                                </Link>
                            </div>
                        </div>

                        <p>
                            Mutual fund categories in India can be confusing. For a long time, 'Multi-Cap' was the largest category, but in 2020, SEBI changed the rules. This led to the birth of the **Flexi-Cap** category, which has now become the go-to choice for millions of Indian investors.
                        </p>
                        
                        <p>
                            Why did this happen? Because investors realized that having a "forced" allocation can be dangerous in a crash. Let's look at the mechanics of both to see where you should put your hard-earned money.
                        </p>

                        <h2 id="multi-cap-rule" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. Multi-Cap: The "Discipline" Fund</h2>
                        <p>
                            A Multi-Cap fund is for the investor who wants everything in one basket and doesn't want to miss out on any segment of the market.
                        </p>
                        <p>
                            According to SEBI rules, a Multi-Cap fund must maintain:
                        </p>
                        <ul>
                            <li><strong>25% in Large-Caps</strong>: Top 100 companies (The Stability).</li>
                            <li><strong>25% in Mid-Caps</strong>: 101st to 250th companies (The Growth).</li>
                            <li><strong>25% in Small-Caps</strong>: 251st onwards (The Aggressive Upside).</li>
                            <li><strong>25% Anywhere</strong>: Fund manager's choice.</li>
                        </ul>
                        <p>
                            **The Risk**: In 2020, people realized that during a severe mid-cap or small-cap crash, the fund manager **cannot exit**. They are forced by law to keep at least 25% in those risky segments, which can lead to deep losses in your portfolio for years.
                        </p>

                        <h2 id="flexi-cap-freedom" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Flexi-Cap: The Fund with a "Brain"</h2>
                        <p>
                            Flexi-Cap funds are the most popular category in India today (Think Parag Parikh Flexi Cap or HDFC Flexi Cap). 
                        </p>
                        <p>
                            Here, the fund manager has **100% discretion**. They are only required to invest at least 65% in equities. 
                        </p>
                        <p>
                            - **If the market is expensive**: The manager can move 80% to Large-caps (Safe blue chips) and 0% to Small-caps.
                            - **If Small-caps are cheap**: They can go 60% into Small-caps to capture massive gains.
                            - **Geographic freedom**: Many Flexi-cap funds also invest in International stocks (like Apple, Google, or Microsoft).
                        </p>

                        <h2 id="performance" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. Performance Comparison: Bull vs. Bear</h2>
                        <p>
                            When do you win with which fund?
                        </p>

                        <div className="my-12 overflow-hidden border border-slate-200 rounded-[2.5rem] shadow-xl not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Market Condition</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest text-emerald-600">Flexi-Cap</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest text-rose-600">Multi-Cap</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-8 text-slate-700 font-bold">Raging Bull Market</td>
                                        <td className="p-8 text-slate-500 font-medium">Good Returns</td>
                                        <td className="p-8 text-emerald-600 font-black text-xl">Outperforms (due to Small-caps)</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-8 text-slate-700 font-bold">Bear Market (Crash)</td>
                                        <td className="p-8 text-emerald-600 font-black text-xl">Better Protection</td>
                                        <td className="p-8 text-rose-600 font-black">Major Falls (Forced holding)</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-8 text-slate-700 font-bold">Sideways Market</td>
                                        <td className="p-8 text-indigo-600 font-black">Consistent</td>
                                        <td className="p-8 text-slate-400 font-medium">Volatile</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="selection" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. Investor Persona: Which one fits your head?</h2>
                        
                        <div className="grid md:grid-cols-2 gap-10 my-16 not-prose">
                            <div className="p-10 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm hover:shadow-xl transition-all">
                                <h4 className="text-2xl font-black text-slate-900 mb-6">You are a 'Flexi-Cap' Person if...</h4>
                                <ul className="space-y-4 text-slate-500 font-medium list-none p-0">
                                    <li className="flex gap-3 items-center"><span className="text-emerald-500 font-black text-xl">✓</span> You want one 'Master Fund' for all goals.</li>
                                    <li className="flex gap-3 items-center"><span className="text-emerald-500 font-black text-xl">✓</span> You can't tolerate seeing -30% on your app.</li>
                                    <li className="flex gap-3 items-center"><span className="text-emerald-500 font-black text-xl">✓</span> You trust a specific fund manager deeply.</li>
                                </ul>
                            </div>
                            <div className="p-10 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm hover:shadow-xl transition-all">
                                <h4 className="text-2xl font-black text-slate-900 mb-6">You are a 'Multi-Cap' Person if...</h4>
                                <ul className="space-y-4 text-slate-500 font-medium list-none p-0">
                                    <li className="flex gap-3 items-center"><span className="text-rose-500 font-black text-xl">✓</span> You have a long horizon (&gt;10 years).</li>
                                    <li className="flex gap-3 items-center"><span className="text-rose-500 font-black text-xl">✓</span> you want permanent exposure to mid/small caps.</li>
                                    <li className="flex gap-3 items-center"><span className="text-rose-500 font-black text-xl">✓</span> You are okay with huge swings in value.</li>
                                </ul>
                            </div>
                        </div>

                        <h2 id="hacks" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5. Selection Hacks for 2025</h2>
                        <ol className="space-y-8 my-16">
                            {[
                                { t: "Check the Expense Ratio", d: "Try to find the 'Direct' version of these funds. A 1% difference in expense ratio over 20 years can cost you ₹10 Lakhs in final wealth." },
                                { t: "Analyze the Overlap", d: "If you already have a Large-cap and a Mid-cap fund, adding a Multi-cap fund will create a massive 'Overlap'. Your money will be in the same companies twice." },
                                { t: "Look at Global Exposure", d: "Some Flexi-caps allow you to invest in US tech stocks. This is a great way to diversify your Indian portfolio." },
                                { t: "The 3-Year Minimum Rule", d: "Never invest in either of these for less than 3 years. They are equity products and can deliver negative returns in the short term." },
                                { t: "Direct over Regular", d: "Always buy through apps like Groww/Zerodha/Kuvera to save on distributor commissions. That extra 1% goes into your pocket, not the agent's." }
                            ].map((hack, idx) => (
                                <li key={idx} className="flex gap-8 group">
                                    <div className="flex-shrink-0 w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-2xl font-black group-hover:bg-rose-600 transition-colors shadow-lg">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 mb-2">{hack.t}</h4>
                                        <p className="text-slate-600 text-lg leading-relaxed font-medium">{hack.d}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className="my-24 p-14 bg-rose-600 rounded-[4rem] text-white text-center shadow-3xl shadow-rose-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-rose-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">One Fund. Infinite Possibilities.</h3>
                                <p className="text-rose-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Planning a goal like retirement or child education? See how a Flexi-cap allocation can accelerate your progress.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-12 py-6 bg-white text-rose-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Start My Goal Plan →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.LUMPSUM} className="px-12 py-6 bg-rose-950 text-white font-black rounded-3xl hover:bg-black transition-all border border-rose-400/30">
                                        Check Lumpsum Returns
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic italic-selection">Flexi vs Multi-Cap Doubts</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
