import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function IndexVsActive() {
    const faqData = [
        {
            question: "Is Index investing better than Active funds in India?",
            answer: "In the Large Cap category, yes. Over 80% of active large-cap funds failed to beat the Nifty 50 index over 5 and 10-year periods. However, in Small and Mid-cap categories, active managers still find 'alpha' (extra returns)."
        },
        {
            question: "What is the main advantage of an Index Fund?",
            answer: "The primary advantage is the **Low Expense Ratio**. Active funds charge 1.5% to 2.5%, whereas Index funds charge as little as 0.1% to 0.3%. Over 20 years, this 2% difference can result in lakhs of rupees in extra wealth."
        },
        {
            question: "Do Index Funds have risk?",
            answer: "Yes. Index funds have 'Market Risk'. If the Nifty falls by 20%, your index fund will also fall by ~20%. They do not have 'Manager Risk', but they don't have downside protection either."
        },
        {
            question: "Which Index Fund is best for beginners?",
            answer: "A simple 'Nifty 50 Index Fund' or 'Nifty Next 50' is usually the best starting point for most retail investors in India."
        }
    ];

    const toc = [
        { id: "alpha", title: "The Death of Alpha in Large Caps" },
        { id: "expense", title: "Expense Ratio: The Silent Wealth Killer" },
        { id: "tracking", title: "Tracking Error: The Index Fund Trap" },
        { id: "midcap", title: "Where Active Funds still Win" },
        { id: "strategy", title: "The 'Core & Satellite' Approach" },
        { id: "faq", title: "Investment FAQ" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">On This Page</h4>
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
                            <div className="p-6 bg-slate-900 rounded-2xl text-white">
                                <p className="text-xs font-bold text-indigo-400 uppercase mb-2 tracking-widest">Wealth Insight</p>
                                <p className="text-sm italic leading-relaxed">"In the long run, costs matter more than performance. You can't control the market, but you can control what you pay the fund manager."</p>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-indigo-50 rounded">Investing Strategy</span>
                                <span>•</span>
                                <span>12 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Index vs Active Funds: The <span className="text-indigo-600">2025 Showdown</span> for Indian Investors.
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl">
                                Should you pay a premium for a "Star" fund manager, or should you just bet on the entire Indian economy? The data suggests the answer is changing.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 not-prose">
                            <div className="p-10 bg-indigo-600 text-white rounded-[3rem] shadow-xl">
                                <h3 className="text-xl font-black mb-4">Index Funds</h3>
                                <p className="text-indigo-100 text-sm leading-relaxed mb-6 italic">"Buy the Haystack"</p>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex items-center gap-2">✅ Ultra-low fees (0.1%)</li>
                                    <li className="flex items-center gap-2">✅ No bias / Manager risk</li>
                                    <li className="flex items-center gap-2">✅ Best for Large Cap exposure</li>
                                </ul>
                            </div>
                            <div className="p-10 bg-slate-100 border border-slate-200 rounded-[3rem]">
                                <h3 className="text-xl font-black text-slate-900 mb-4">Active Funds</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 italic">"Find the Needle"</p>
                                <ul className="space-y-3 text-sm text-slate-600 font-medium">
                                    <li className="flex items-center gap-2">🚀 Potential to beat the market</li>
                                    <li className="flex items-center gap-2">🛡️ Downside protection (sometimes)</li>
                                    <li className="flex items-center gap-2">🔍 Best for Small/Mid Cap alpha</li>
                                </ul>
                            </div>
                        </div>

                        <p>
                            Historically, Indian mutual fund managers were heroes. They regularly beat the Nifty by 5-10% every year. But as the Indian market becomes more institutionalized and "efficient", beating the index is becoming an impossible task.
                        </p>

                        <h2 id="alpha">1. The Death of Alpha in Large Caps</h2>
                        <p>
                            <strong>Alpha</strong> is the extra return a fund manager generates above the index. In the last 5 years, SPIVA (S&P Indices Versus Active) reports have shown that nearly <strong>82% of Large-cap active funds</strong> in India underperformed the Nifty 50.
                        </p>
                        <p>
                            If you are invested in a "Bluechip" active fund, there is an 8/10 chance you are paying a high fee for returns that are lower than a simple Index fund.
                        </p>

                        <h2 id="expense">2. Expense Ratio: The Silent Wealth Killer</h2>
                        <p>
                            Imagine two investors, Rahul and Ankit. Both invest ₹10,000/month for 25 years.
                        </p>
                        <ul>
                            <li><strong>Rahul (Active Fund)</strong>: Paisa grows at 12% p.a., but pays **2.0%** Expense Ratio. (Net 10%)</li>
                            <li><strong>Ankit (Index Fund)</strong>: Paisa grows at 12% p.a., but pays **0.2%** Expense Ratio. (Net 11.8%)</li>
                        </ul>
                        <p>
                            After 25 years, Ankit will have approximately <strong>₹35 Lakhs MORE</strong> than Rahul. That's the price of "Management fees".
                        </p>

                        <h2 id="midcap">3. Where Active Funds still Win</h2>
                        <p>
                            It's not all doom for fund managers. In the **Small-cap** and **Mid-cap** space, India is still an "inefficient" market. Good managers can identify hidden gems before the index does. 
                        </p>
                        <p>
                            Data shows that active managers still generate significant alpha in smaller companies where information is not widely available. If you want aggressive growth, an active Small-cap fund still makes sense.
                        </p>

                        <h2 id="tracking">4. Tracking Error: The Index Fund Trap</h2>
                        <p>
                            Not all Index funds are equal. An index fund’s job is to replicate the index 100%. If the Nifty goes up 1.52%, the fund should go up 1.52%. 
                        </p>
                        <p>
                            The difference between the index and the fund is called <strong>Tracking Error</strong>. Before buying an index fund, always check if the tracking error is below 0.05%. A high tracking error means the fund is poorly managed.
                        </p>

                        <h2 id="strategy">5. The 'Core & Satellite' Approach for 2025</h2>
                        <p>Most smart Indian investors are now moving to a hybrid strategy:</p>
                        <ol>
                            <li><strong>CORE (60-70%)</strong>: Invest this in low-cost Nifty 50 and Nifty Next 50 Index funds. This is your safe, long-term growing base.</li>
                            <li><strong>SATELLITE (30-40%)</strong>: Invest this in active Small-cap or sectoral funds to try and get that "kicker" return.</li>
                        </ol>

                        <div className="my-16 bg-slate-900 rounded-[3rem] p-12 text-white text-center shadow-2xl relative overflow-hidden not-prose">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/30 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-black mb-6">See the power of compounding.</h3>
                                <p className="text-slate-400 mb-10 text-lg max-w-2xl mx-auto">Use our SIP Calculator to see how a small 1% difference in returns (fees) can change your retirement corpus.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-10 py-5 bg-white text-indigo-600 font-black rounded-2xl hover:bg-slate-100 transition-all shadow-xl">
                                        Open SIP Calculator →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        <div className="mt-20 pt-10 border-t border-slate-200">
                            <SEOSection title="Index Fund FAQs" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
