import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function InvestWith500() {
    const faqData = [
        {
            question: "Can I really start an SIP with just ₹500?",
            answer: "Yes! Many Indian mutual fund houses like ICICI Prudential, Nippon India, and Quant allow you to start an SIP with as little as ₹500. Some apps even allow 'Micro-SIPs' of ₹100 in Index Funds."
        },
        {
            question: "Will ₹500 actually make me rich?",
            answer: "By itself, no. But the habit it builds will. If you start with ₹500 in college and steadily increase it by 10% every year as your salary grows, you could end up with a corpus of ₹50-80 Lakhs by the time you retire."
        },
        {
            question: "Are there any charges for small investments?",
            answer: "If you use a 'Direct' plan through an app like Groww, Zerodha, or Kuvera, there are no commissions. Only the expense ratio of the fund (which is usually less than 1% per year) applies. For ₹500, that’s just pennies."
        },
        {
            question: "Should I buy stocks or mutual funds with ₹500?",
            answer: "With ₹500, you can only buy 1 or 2 small stocks, which is risky. A Mutual Fund is better because your ₹500 is spread across 50-60 top companies, giving you instant diversification."
        },
        {
            question: "Can I stop my ₹500 SIP anytime?",
            answer: "Yes, there are no penalties for stopping an SIP. It is completely flexible. You can pause it for a month if you have a cash crunch and resume it later."
        }
    ];

    const toc = [
        { id: "mindset", title: "Mindset: The ₹20-a-day Power" },
        { id: "options", title: "Where can you put ₹500?" },
        { id: "index-funds", title: "Index Funds: The Safest Entry" },
        { id: "compounding", title: "Compounding with ₹500 (The Math)" },
        { id: "start", title: "3 Steps to start today" },
        { id: "step-up", title: "The 'Step-Up' Secret" },
        { id: "faq", title: "Micro-Investing FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Financial Inclusion</h4>
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
                            
                            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 italic text-sm text-emerald-900 leading-relaxed shadow-sm">
                                "The best time to plant a tree was 20 years ago. The second best time is today. Don't wait for a 'Big Amount' to start."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-emerald-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-emerald-50 rounded">Micro-Investing</span>
                                <span>•</span>
                                <span>12 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                How to Start Investing with <span className="text-emerald-600 font-black italic underline decoration-emerald-200 decoration-4 underline-offset-8">₹500</span>: The Beginner’s Guide
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                "I'll start investing when I earn 1 Lakh a month." <br/>
                                This is the lie that keeps most Indians poor. The truth? If you have ₹500, you have enough to start your journey to 1 Crore.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-emerald-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                                The Power of Small Numbers
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                                <div>
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">The "Chaye" Math</p>
                                    <p className="text-3xl font-black text-white italic">₹20 per day</p>
                                    <p className="text-xs text-slate-400 mt-3 font-medium">Skip one snack, save ₹600/month. That's your first SIP.</p>
                                </div>
                                <div className="border-l border-slate-800 md:pl-16">
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">The "Time" Lever</p>
                                    <p className="text-3xl font-black text-white italic">10% Step-Up</p>
                                    <p className="text-xs text-slate-400 mt-3 font-medium">Start with ₹500. Increase by ₹50 next year. Compounding ignores size.</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-sm">"The hardest part of investing isn't the research, it's the first click. Just start."</p>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-8 py-4 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-700 transition-all shadow-lg hover:-translate-y-1">
                                    See what ₹500 can become →
                                </Link>
                            </div>
                        </div>

                        <p>
                            We Indians are often paralyzed by the "All or Nothing" mindset. We think unless we have ₹10,000 or ₹20,000 surplus, there’s no point in investing.
                        </p>
                        
                        <p>
                            But thanks to India's **Digital Revolution** and the **UPI framework**, financial products have become "democratized". You can now buy a piece of the Nifty 50 for the price of a Domino’s Pizza.
                        </p>

                        <h2 id="mindset" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. Mindset: The ₹20-a-day Rule</h2>
                        <p>
                            Ask yourself: "Can I save ₹20 today?" 
                        </p>
                        <p>
                            Almost every Indian (student, clerk, CEO) can. ₹20 is the cost of a tea and a biscuit. 
                        </p>
                        <p>
                            - **₹20 a day = ₹600 a month.** 
                            - **₹20 a day = ₹7,200 a year.**
                        </p>
                        <p>
                            Investing isn't about how much money you have; it's about **Efficiency**. It’s about not letting your money sit idle in a savings account where it loses value to inflation.
                        </p>

                        <h2 id="options" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Where can you put ₹500?</h2>
                        <div className="space-y-10 my-16">
                            {[
                                { t: "Index Funds", d: "These funds simply follow the Nifty 50 or Sensex. They own India's top companies. Most allow SIPs of ₹100 - ₹500." },
                                { t: "Debt Funds / Liquid Funds", d: "If you are very scared of risk, these are better than savings accounts. They are safe and allow for ₹500 entry." },
                                { t: "Digital Gold", d: "Applications like PhonePe or Tanishq allow you to buy gold for as low as ₹10. You can accumulate gold gram by gram." },
                                { t: "Stock Fractional Investing", d: "While India doesn't have true 'fractional' stocks, you can buy 1 share of a great company like Wipro or Tata Motors for around ₹500." }
                            ].map((option, idx) => (
                                <div key={idx} className="flex gap-8 group">
                                    <div className="flex-shrink-0 w-16 h-16 bg-slate-100 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl font-black group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 mb-2">{option.t}</h4>
                                        <p className="text-slate-600 text-lg leading-relaxed font-medium">{option.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 id="index-funds" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. Index Funds: The Safest Entry Point</h2>
                        <p>
                            As a beginner, don't try to find the "next multi-bagger stock". You will likely lose your ₹500 and get discouraged.
                        </p>
                        <p>
                            Instead, buy the **Whole Market**. An Index Fund (like Navi Nifty 50 or UTI Nifty 50) allows you to own 1/50th of Reliance, HDFC, TCS, and ITC. If India grows, your ₹500 grows. It is the most "tension-free" way to start.
                        </p>

                        <h2 id="compounding" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic-selection">4. The Math of ₹500 (Compounding Power)</h2>
                        <p>
                            Let's look at the "Wealth of a Student". If you start a ₹500 SIP at age 20 and leave it till age 45 (25 years) at 13% interest:
                        </p>
                        <div className="p-10 bg-emerald-600 rounded-[3rem] text-white my-12 not-prose shadow-xl shadow-emerald-100">
                            <div className="grid md:grid-cols-2 gap-10 items-center">
                                <div>
                                    <p className="text-emerald-100 uppercase tracking-widest font-black text-xs mb-4">The Result</p>
                                    <h4 className="text-5xl font-black mb-6 italic underline decoration-emerald-300">₹1.13 Lakhs</h4>
                                    <p className="font-medium opacity-90 leading-relaxed italic-selection">From a total investment of just ₹15,000. Your money multiplied by **7.5 Times**.</p>
                                </div>
                                <div className="p-8 bg-emerald-950/30 rounded-3xl border border-emerald-400/30">
                                    <p className="text-sm italic leading-relaxed">
                                        Imagine if you increased that to ₹5,000 as soon as you got a job. Compounding doesn't care about the starting position—it only cares about **Time**.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 id="step-up" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5. The "Step-Up" Secret</h2>
                        <p>
                            This is the most powerful hack for middle-class Indians. 
                        </p>
                        <p>
                            **Don't keep your SIP flat.** Every year, when you get a hike (or pocket money increases), increase your SIP by just 10%.
                        </p>
                        <p>
                            - Year 1: ₹500 <br/>
                            - Year 2: ₹550 <br/>
                            - Year 3: ₹605
                        </p>
                        <p>
                            Adding just ₹50 a year can **Double your final corpus**. This is because you are 'topping up' the compounding engine while it's already running.
                        </p>

                        <div className="my-24 p-14 bg-emerald-600 rounded-[4rem] text-white text-center shadow-3xl shadow-emerald-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Stop Thinking. Start Clicking.</h3>
                                <p className="text-emerald-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Use our Step-Up SIP calculator to see how a tiny increase every year changes your bank balance.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.STEP_UP_SIP} className="px-12 py-6 bg-white text-emerald-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Run Step-Up Math →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-12 py-6 bg-emerald-950 text-white font-black rounded-3xl hover:bg-black transition-all border border-emerald-400/30">
                                        Simulate ₹500 SIP
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic italic-selection">Micro-Investing Doubts</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
