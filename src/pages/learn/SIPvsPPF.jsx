import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function SIPvsPPF() {
    const faqData = [
        {
            question: "Which is safer, SIP or PPF?",
            answer: "PPF (Public Provident Fund) is 100% safe as it is backed by the Government of India. SIPs (Systematic Investment Plans) in Mutual Funds are subject to market risks, meaning their value can go up or down. For capital protection, PPF is the winner; for wealth creation, SIP is the winner."
        },
        {
            question: "Can I withdraw money from PPF early?",
            answer: "PPF has a 15-year lock-in period. Partial withdrawals are allowed only after the 7th year, and even then, only under specific conditions. SIPs in open-ended mutual funds are highly liquid and can be withdrawn in 2-3 working days."
        },
        {
            question: "Is PPF interest still tax-free in 2025?",
            answer: "Yes, PPF maintains its EEE (Exempt-Exempt-Exempt) status. The investment, the interest earned, and the maturity amount are all tax-free. SIP profits (LTCG) above ₹1.25 Lakh per year are taxed at 12.5%."
        },
        {
            question: "Which gives better returns over 15 years?",
            answer: "Historically, Equity SIPs have delivered 12-15% CAGR over long periods. PPF interest rates are currently around 7.1%. Over 15 years, an SIP will almost always result in a significantly larger corpus than a PPF."
        },
        {
            question: "Can I have both an SIP and a PPF?",
            answer: "Absolutely. In fact, most smart investors use a 'Core and Satellite' approach: Use PPF for safety (debt component) and SIP for growth (equity component)."
        }
    ];

    const toc = [
        { id: "duel", title: "SIP vs PPF: The Great Duel" },
        { id: "ppf-basics", title: "PPF: The Safe Haven (EEE Status)" },
        { id: "sip-basics", title: "SIP: The Compounding Engine" },
        { id: "liquidity", title: "Liquidity vs. Lock-in: The Reality" },
        { id: "returns", title: "Returns Comparison (15-Year Table)" },
        { id: "hybrid", title: "The 'Golden Ratio' for Beginners" },
        { id: "faq", title: "SIP/PPF FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Investment Duel</h4>
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
                                "PPF helps you sleep at night. SIP helps you live your dreams during the day. You need both for a balanced life."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-indigo-50 rounded">Financial Strategy</span>
                                <span>•</span>
                                <span>22 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                SIP vs PPF: Where should you put your <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">first ₹5,000</span>?
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                It's the classic Indian dilemma: "Sarkari Safety" or "Stock Market Growth"? One promises a tension-free life, the other promises a wealthy life. Which one should you choose today?
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-indigo-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
                                The "Speed vs. Safety" Comparison
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                                <div>
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">PPF (The Bulletproof Tank)</p>
                                    <p className="text-3xl font-black text-white italic">7.1% Fixed</p>
                                    <p className="text-xs text-slate-400 mt-3 font-medium">100% Tax Free. 15 years Lock-in. Government Backed.</p>
                                </div>
                                <div className="border-l border-slate-800 md:pl-16">
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">SIP (The Turbo Jet)</p>
                                    <p className="text-3xl font-black text-white italic text-selection-amber">12% — 15% (Hist.)</p>
                                    <p className="text-xs text-slate-400 mt-3 font-medium">High Liquidity. Market Linked. Wealth Builder.</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-sm">"If you have a 15-year goal, an SIP could give you 3x the money of a PPF. But PPF is the ultimate safety net."</p>
                                <div className="flex gap-4">
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-6 py-3 bg-indigo-600 text-white font-black rounded-xl hover:bg-indigo-700 transition-all text-sm">
                                        SIP Calc →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.PPF} className="px-6 py-3 bg-white text-slate-900 font-black rounded-xl hover:bg-slate-100 transition-all text-sm">
                                        PPF Calc
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <p>
                            India is a land of savers. For our parents, the Public Provident Fund (PPF) was the only way to build a retirement corpus. It was safe, simple, and the post office was just around the corner. 
                        </p>
                        
                        <p>
                            But for today's generation, 7.1% doesn't feel like enough when inflation (the price of rent, education, and healthcare) is growing at 8-10%. Today, keeping all your money in a PPF might mean you are "Safely becoming Poor".
                        </p>

                        <h2 id="ppf-basics" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. PPF: The Government's Promise of Sleep</h2>
                        <p>
                            The Public Provident Fund is the gold standard for "EEE" (Exempt-Exempt-Exempt) investing. 
                        </p>
                        <ul>
                            <li><strong>Exempt at Invest</strong>: You save tax on 1.5L every year under 80C.</li>
                            <li><strong>Exempt at Growth</strong>: The interest you earn every year is not taxed.</li>
                            <li><strong>Exempt at Withdraw</strong>: The final maturity amount after 15 years is 100% Tax-free.</li>
                        </ul>
                        <p>
                            It is literally the only product where the Government says, "Whatever you earn, we won't touch a single rupee of it."
                        </p>
                        <p>
                            **The Catch**: You can't touch the money for 15 years. It is designed for retirement or a child's wedding. If you need money for a sudden vacation or a new iPhone, PPF won't help you.
                        </p>

                        <h2 id="sip-basics" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. SIP: The Compounding Engine for Wealth</h2>
                        <p>
                            A Systematic Investment Plan (SIP) is a method of investing in Mutual Funds. You are buying a piece of India's top companies (like Reliance, HDFC, or TCS). 
                        </p>
                        <p>
                            When these companies grow, your money grows. Over the last 15 years, the Nifty 50 has returned roughly 12-14% CAGR. 
                        </p>
                        <p>
                            **The Power of Growth**: While PPF interest is fixed, SIP returns compound. A 12% return is not just "a bit better" than 7%. Over 20 years, a 12% return creates **double the wealth** of a 7% return.
                        </p>

                        <h2 id="liquidity" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. Liquidity: The "Emergency" Factor</h2>
                        <p>
                            Liquidity is the ability to turn your investment into cash. 
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
                            <div className="p-10 bg-rose-50 border-2 border-rose-100 rounded-[2.5rem] shadow-sm">
                                <h4 className="text-2xl font-black text-rose-900 mb-4">PPF (Rigid)</h4>
                                <p className="text-rose-800 leading-relaxed font-medium">
                                    Locked for 15 years. Partial withdrawal only after 7 years for specific reasons (illness, education). It’s perfect for 'ignoring' and growing, but terrible for emergencies.
                                </p>
                            </div>
                            <div className="p-10 bg-emerald-50 border-2 border-emerald-100 rounded-[2.5rem] shadow-sm">
                                <h4 className="text-2xl font-black text-emerald-900 mb-4">SIP (Fluid)</h4>
                                <p className="text-emerald-800 leading-relaxed font-medium">
                                    Open-ended mutual funds have zero lock-in. You can click 'Redeem' on Monday and have cash in your bank by Wednesday. This flexibility is vital for the modern workforce.
                                </p>
                            </div>
                        </div>

                        <h2 id="returns" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. The Math: ₹5,000 for 15 Years</h2>
                        <p>
                            Let's look at the numbers. If you invest ₹5,000 every month for the full 15-year tenure of a PPF:
                        </p>

                        <div className="my-12 overflow-hidden border border-slate-200 rounded-[2.5rem] shadow-xl not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Metric</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest text-rose-600">PPF (7.1%)</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest text-emerald-600">SIP (13%)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="p-8 text-slate-600 font-bold">Total Invested</td>
                                        <td className="p-8 text-slate-900 font-extrabold">₹9,00,000</td>
                                        <td className="p-8 text-slate-900 font-extrabold">₹9,00,000</td>
                                    </tr>
                                    <tr>
                                        <td className="p-8 text-slate-600 font-bold">Total Interest/Gain</td>
                                        <td className="p-8 text-rose-700 font-black">₹7,27,284</td>
                                        <td className="p-8 text-emerald-700 font-black">₹18,51,000</td>
                                    </tr>
                                    <tr className="bg-indigo-50/30">
                                        <td className="p-8 text-indigo-900 font-black text-xl italic underline decoration-indigo-200">Maturity Value</td>
                                        <td className="p-8 text-rose-900 font-black text-2xl">₹16,27,284</td>
                                        <td className="p-8 text-emerald-900 font-black text-4xl">₹27,51,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-center font-bold text-slate-400 text-sm italic italic-selection">The SIP investor ends up with **₹11 Lakhs more** for the exact same monthly investment. </p>

                        <h2 id="hybrid" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5. The 'Golden Ratio' for Beginners</h2>
                        <p>
                            Don't choose one over the other. Most wealth managers recommend a **60/40 or 70/30 Split**.
                        </p>
                        <p>
                            If you have ₹5,000:
                            - **₹3,500 in an SIP** (Index or Flexi-cap) for long-term wealth.
                            - **₹1,500 in PPF** for a guaranteed, tax-free safety net.
                        </p>
                        <p>
                            This way, if the market crashes by 20% tomorrow, your PPF portion stays green, keeping you mentally calm so you don't panic-sell your SIP!
                        </p>

                        <div className="my-24 p-14 bg-indigo-600 rounded-[4rem] text-white text-center shadow-3xl shadow-indigo-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Your Money, Your Rules.</h3>
                                <p className="text-indigo-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Use our comparison calculators to see how ₹5,000 grows over your specific time horizon.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-12 py-6 bg-white text-indigo-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Compare SIP Growth →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.PPF} className="px-12 py-6 bg-indigo-950 text-white font-black rounded-3xl hover:bg-black transition-all border border-indigo-400/30">
                                        Check PPF Benefits
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic italic-selection">SIP vs PPF Doubts</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
