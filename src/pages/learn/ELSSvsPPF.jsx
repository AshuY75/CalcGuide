import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function ELSSvsPPF() {
    const faqData = [
        {
            question: "Which has a shorter lock-in, ELSS or PPF?",
            answer: "ELSS has a lock-in of only 3 years, which is the shortest among all Section 80C tax-saving options. PPF has a lock-in of 15 years, with partial withdrawals allowed only after the 7th year."
        },
        {
            question: "Is ELSS riskier than PPF?",
            answer: "Yes. ELSS is an equity mutual fund, meaning it invests in the stock market. Your capital is not guaranteed. PPF is backed by the Government of India and offers a guaranteed (though variable) interest rate with zero risk to your principal."
        },
        {
            question: "What is the tax on ELSS profits?",
            answer: "After 2025 budget changes, ELSS returns are taxed as Long Term Capital Gains (LTCG). Gains above ₹1.25 Lakh per year from all equity investments are taxed at 12.5%. PPF returns remain 100% tax-free."
        },
        {
            question: "Can I do a monthly SIP in ELSS?",
            answer: "Yes. In fact, an SIP is the best way to invest in ELSS as it averages out the market volatility. Note that every monthly SIP installment has its own 3-year lock-in period."
        },
        {
            question: "Which one should I choose if I am under 30?",
            answer: "If you have a high risk appetite and a long-term goal, ELSS is generally better because of its potential for higher inflation-beating returns. Many young professionals use ELSS for wealth creation and PPF for emergency safety."
        }
    ];

    const toc = [
        { id: "duel", title: "ELSS vs PPF: The 80C Duel" },
        { id: "elss-basics", title: "ELSS: The Liquidity King" },
        { id: "ppf-basics", title: "PPF: The Bulletproof Safety" },
        { id: "taxation", title: "Taxation: EEE vs. LTCG" },
        { id: "performance", title: "Returns Comparison (10-Year Study)" },
        { id: "verdict", title: "Conclusion: Which one for you?" },
        { id: "faq", title: "Tax-Saving FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Tax Optimization</h4>
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
                                "Saving tax is good. Growing your money while saving tax is great. ELSS and PPF are the two pillars of every Indian's tax-saving journey."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-indigo-50 rounded">Tax Planning</span>
                                <span>•</span>
                                <span>20 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                ELSS vs PPF: The <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-8">Ultimate Duel</span> for Tax Saving in India
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                It's the end of March. Your HR is asking for investment proofs. You have ₹1.5 Lakh left in your 80C quota. Where should it go? 
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-indigo-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
                                The 80C Cheat Sheet
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                                <div className="p-8 bg-slate-800 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-colors">
                                    <p className="text-indigo-400 text-xs font-black uppercase mb-4 tracking-widest">ELSS (Modern Choice)</p>
                                    <ul className="space-y-3 text-sm text-slate-300 font-medium">
                                        <li className="flex gap-2"><span>✓</span> 3 Years Lock-in (Lowest)</li>
                                        <li className="flex gap-2"><span>✓</span> 14% Average Return (Hist.)</li>
                                        <li className="flex gap-2"><span>✓</span> Market Risk Involved</li>
                                    </ul>
                                </div>
                                <div className="p-8 bg-slate-800 rounded-3xl border border-slate-700 hover:border-emerald-500 transition-colors">
                                    <p className="text-emerald-400 text-xs font-black uppercase mb-4 tracking-widest">PPF (Legacy Choice)</p>
                                    <ul className="space-y-3 text-sm text-slate-300 font-medium">
                                        <li className="flex gap-2"><span>✓</span> 15 Years Lock-in (Highest)</li>
                                        <li className="flex gap-2"><span>✓</span> 7.1% Guaranteed Return</li>
                                        <li className="flex gap-2"><span>✓</span> 100% Tax-Free Returns</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-sm">"One creates wealth through growth, the other protects wealth through safety. Most Indians choose both."</p>
                                <Link to={ROUTES.CALCULATORS.TAX.TAX_ESTIMATOR} className="px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition-all shadow-lg hover:-translate-y-1">
                                    Calculate My Tax Savings →
                                </Link>
                            </div>
                        </div>

                        <p>
                            Section 80C is the most crowded corner of the Indian Income Tax Act. From your children’s tuition fees to your life insurance premium, everything competes for that ₹1.5 Lakh limit. 
                        </p>
                        
                        <p>
                            However, the two heavyweights that actually build long-term wealth are **ELSS (Equity Linked Savings Scheme)** and **PPF (Public Provident Fund)**. Let's strip away the technical jargon and find out which one deserves your money this year.
                        </p>

                        <h2 id="elss-basics" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. ELSS: The Wealth Builder’s Shortcut</h2>
                        <p>
                            ELSS is basically a multi-cap mutual fund that comes with a tax benefit. It is the most "aggressive" tax-saving instrument available.
                        </p>
                        <ul>
                            <li><strong>The Lock-in</strong>: Only 3 years. After 3 years, you can withdraw your money, keep it invested, or move it to another fund. This is the fastest "cycle" for tax-saving money.</li>
                            <li><strong>The Returns</strong>: Over the last decade, top-performing ELSS funds in India (like Quant, Mirae Asset, or Canara Robeco) have delivered **15-18% CAGR**. </li>
                            <li><strong>The Risk</strong>: Because it is 100% equity-linked, your money can fluctuate. In a bad year, your ₹1.5L can become ₹1.2L. You need a stomach for volatility.</li>
                        </ul>

                        <h2 id="ppf-basics" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. PPF: The Fortress of Safety</h2>
                        <p>
                            If ELSS is a sports car, PPF is a battle tank. It isn't fast, but it is indestructible.
                        </p>
                        <ul>
                            <li><strong>The Guarantee</strong>: Backed by the Government of India. The interest rate is reviewed every quarter (currently 7.1%). Your principal never goes down.</li>
                            <li><strong>Capital Protection</strong>: PPF accounts cannot be attached by a court order or creditors (even in case of bankruptcy). It is the ultimate safety net for your family.</li>
                            <li><strong>Lock-in</strong>: 15 years. This encourages disciplined, long-term saving, but it’s a nightmare if you need cash in year 4.</li>
                        </ul>

                        <h2 id="taxation" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. Taxation: The EEE vs. LTCG Duel</h2>
                        <p>
                            This is where PPF used to win hands down, but the gap is narrowing.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
                            <div className="p-10 bg-emerald-50 border-2 border-emerald-100 rounded-[2.5rem] shadow-sm">
                                <h4 className="text-2xl font-black text-emerald-900 mb-4">PPF (Exempt-Exempt-Exempt)</h4>
                                <p className="text-emerald-800 leading-relaxed font-medium">
                                    The interest earned in PPF is 100% Tax-Free. If your corpus grows to ₹1 Crore in 25 years, you take home exactly ₹1 Crore.
                                </p>
                            </div>
                            <div className="p-10 bg-indigo-50 border-2 border-indigo-100 rounded-[2.5rem] shadow-sm">
                                <h4 className="text-2xl font-black text-indigo-900 mb-4">ELSS (LTCG Tax)</h4>
                                <p className="text-indigo-800 leading-relaxed font-medium">
                                    Since it's an equity fund, profits above ₹1.25 Lakh per year (combined from all stocks/funds) are taxed at **12.5%**. 
                                </p>
                            </div>
                        </div>
                        <p className="font-bold text-slate-900 italic">Smart Tip: Even after paying 12.5% tax, a 15% return from ELSS is much better than a 7.1% tax-free return from PPF. Math doesn't lie!</p>

                        <h2 id="performance" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. Returns Reality: ₹1.5 Lakh for 10 Years</h2>
                        <p>
                            Let's assume you exhaust your full 80C limit (₹12,500/month) for 10 years.
                        </p>

                        <div className="my-12 overflow-hidden border border-slate-200 rounded-[2.5rem] shadow-xl not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Scenario</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest text-emerald-600">PPF (7.1%)</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest text-indigo-600">ELSS (14%)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="p-8 text-slate-600 font-bold">Total Invested</td>
                                        <td className="p-8 text-slate-900 font-extrabold">₹15,00,000</td>
                                        <td className="p-8 text-slate-900 font-extrabold">₹15,00,000</td>
                                    </tr>
                                    <tr>
                                        <td className="p-8 text-slate-600 font-bold">Corpus after 10 years</td>
                                        <td className="p-8 text-emerald-900 font-black">₹21,80,000</td>
                                        <td className="p-8 text-indigo-900 font-black text-xl">₹32,30,000</td>
                                    </tr>
                                    <tr className="bg-slate-50">
                                        <td className="p-8 text-slate-600 font-bold italic">The Extra Wealth</td>
                                        <td className="p-8 text-slate-400 font-medium">--</td>
                                        <td className="p-8 text-indigo-600 font-black text-2xl">+ ₹10.5 Lakhs!</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="my-24 p-14 bg-indigo-600 rounded-[4rem] text-white text-center shadow-3xl shadow-indigo-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Don't just save tax. Create wealth.</h3>
                                <p className="text-indigo-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Our Tax Estimator helps you find the best mix of ELSS, PPF, and Insurance for your salary slab.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.TAX.TAX_ESTIMATOR} className="px-12 py-6 bg-white text-indigo-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Open Tax Estimator →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-12 py-6 bg-indigo-950 text-white font-black rounded-3xl hover:bg-black transition-all border border-indigo-400/30">
                                        Calculate SIP Growth
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <h2 id="verdict" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5. Conclusion: Which one for you?</h2>
                        <p>
                            Choosing between ELSS and PPF is about your **Life Stage**.
                        </p>
                        <ul className="space-y-6 list-none p-0 my-10 not-prose">
                            <li className="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-sm">
                                <p className="text-xl font-black text-slate-900 mb-2">Category A: The Young Pro (22 - 35)</p>
                                <p className="text-slate-600 font-medium">Go **100% ELSS**. You have the time to weather market cycles, and the 3-year lock-in gives you flexibility if your life goals change.</p>
                            </li>
                            <li className="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-sm">
                                <p className="text-xl font-black text-slate-900 mb-2">Category B: The Family Planner (35 - 50)</p>
                                <p className="text-slate-600 font-medium">Go **50/50**. Use ELSS to grow the wealth and PPF to ensure that at least a portion of your tax-saving money is bulletproof for your child’s higher education.</p>
                            </li>
                            <li className="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-sm">
                                <p className="text-xl font-black text-slate-900 mb-2">Category C: The Near-Retiree (50+)</p>
                                <p className="text-slate-600 font-medium">Go **70% PPF**. At this stage, capital preservation is more important than massive growth. You don't want a market crash to hit your retirement corpus right before you quit.</p>
                            </li>
                        </ul>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic italic-selection">Tax Duel Doubts</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
