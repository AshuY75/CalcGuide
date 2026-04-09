import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function AssetTaxComparison() {
    const faqData = [
        {
            question: "Which asset is the most tax-efficient in India?",
            answer: "Equity (Stocks/Mutual Funds) is generally the most tax-efficient. It has a high tax-free limit (₹1.25 Lakh per year) and a low LTCG rate of 12.5%. Even the holding period for LTCG is the shortest (12 months)."
        },
        {
            question: "Is gold taxed differently than property?",
            answer: "Since the 2024 Budget, both Gold and Property have been unified for Long Term Capital Gains. Both have a 24-month holding period for LTCG and a tax rate of 12.5% (without indexation). However, property offers reinvestment exemptions (Section 54) which gold does not."
        },
        {
            question: "Are Debt Mutual Funds still taxed at slab rates?",
            answer: "Since April 2023, most Debt Mutual Funds (with less than 35% equity) are taxed at your income tax slab rate, regardless of the holding period. This makes them similar to Fixed Deposits in terms of tax, though they still offer better liquidity."
        },
        {
            question: "What is the tax on Sovereign Gold Bonds (SGB)?",
            answer: "SGBs are a tax 'Masterstroke'. If you hold them until maturity (8 years), the capital gains are **100% tax-free**. No other asset in India (except PPF) offers this level of tax-free growth."
        },
        {
            question: "Can I offset stock losses against property profits?",
            answer: "No. You can only offset Short Term Capital Losses (on stocks) against any Capital Gains. However, Long Term Capital Losses (on stocks) can ONLY be offset against Long Term Capital Gains."
        }
    ];

    const toc = [
        { id: "reality", title: "Returns are NOT what you get" },
        { id: "equity", title: "Equity: The 12.5% Tax Leader" },
        { id: "realestate", title: "Real Estate: The 'Pure' 12.5%" },
        { id: "debt", title: "Debt & FD: The Slab Rate Battle" },
        { id: "gold", title: "Gold & SGB: The Hidden Tax Hero" },
        { id: "summary", title: "Master Table: Asset Tax 2025" },
        { id: "faq", title: "Asset Tax FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Investment Tax</h4>
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
                            
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-sm text-slate-600 leading-relaxed shadow-sm italic-selection">
                                "Smart investors look at the CAGR. Wealthy investors look at the Post-Tax CAGR. That 20% gap is the difference between retiring at 50 or 65."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-indigo-50 rounded">Unified Tax Theory</span>
                                <span>•</span>
                                <span>25 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Tax Comparison 2025: <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-8">Stocks vs. Real Estate vs. Gold</span>
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Markets are messy, but the tax code is even messier. If you are blindly investing across assets without knowing the exit tax, you are essentially flying the plane without landing gear.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-indigo-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
                                The 2025 Tax Efficiency Score
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter text-center">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Winner: Equity</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">Score: 9/10</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Shortest hold (1 yr) & Largest exemption (₹1.25L).</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Real Estate & Gold</p>
                                    <p className="text-3xl font-black text-white italic">Score: 7/10</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Moderate hold (2 yrs) & Standardized 12.5% rate.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Worst: FDs</p>
                                    <p className="text-3xl font-black text-rose-500 italic">Score: 2/10</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Taxed at slab rates (up to 30%+). No shielding.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            In the 2024 Budget, the Indian government made a massive attempt to "Simplify" taxes. They wanted every asset to have roughly the same long-term tax rate. 
                        </p>
                        
                        <p>
                            **The result?** Almost all Long Term Capital Gains (LTCG) are now taxed at **12.5%**. But that doesn't mean all assets are equal. The "Exemptions" and "Holding Periods" still create massive winners and losers.
                        </p>

                        <h2 id="equity" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. Equity: The 12.5% King</h2>
                        <p>
                            Stocks and Mutual Funds remain the favorite child of the Income Tax department.
                        </p>
                        <ul>
                            <li><strong>LTCG Threshold</strong>: 1 Year (The shortest in India).</li>
                            <li><strong>The Exemption</strong>: You pay ZERO tax on the first **₹1.25 Lakh** of profit every year.</li>
                            <li><strong>Tax Rate</strong>: 12.5% on anything above ₹1.25L.</li>
                        </ul>
                        <p className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 font-bold italic-selection">
                            Strategic Insight: If you harvest your profits every year, you can theoretically grow a multi-crore portfolio with almost zero tax liability by utilizing the ₹1.25L quota.
                        </p>

                        <h2 id="realestate" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Real Estate: The 'Pure' 12.5%</h2>
                        <p>
                            As we discussed in the property guide, the rate is also **12.5%**, but it comes with a catch: **ZERO exemption**.
                        </p>
                        <p>
                            Unlike stocks, where the first ₹1.25L is free, in property, you pay 12.5% from the first rupee of profit. However, property has two "Special Powers" that stocks don't have:
                        </p>
                        <ol>
                            <li><strong>Section 54</strong>: Buy a new house, pay zero tax.</li>
                            <li><strong>54EC Bonds</strong>: Invest in NHAI bonds, pay zero tax.</li>
                        </ol>

                        <h2 id="debt" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">3. Debt & FD: The Slab Rate Struggle</h2>
                        <p>
                            This is the most "Tax-Punished" asset class in India today.
                        </p>
                        <p>
                            If you are in the 30% tax bracket, your Fixed Deposit interest is taxed at **30% + 4% Cess = 31.2%**. Compare this to the 12.5% you'd pay on stocks or property. 
                        </p>
                        <p className="font-medium">For wealthy investors, FDs are no longer an investment; they are a tax liability disguised as a safe asset.</p>

                        <h2 id="gold" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. Gold & SGB: The Hidden Tax Hero</h2>
                        <p>
                            Physical gold follows the same 12.5% rule as property (24-month holding period). 
                        </p>
                        <p>
                            But the real hero is **Sovereign Gold Bonds (SGB)**. 
                        </p>
                        <ul>
                            <li><strong>Interest</strong>: 2.5% (Taxed at slab rates).</li>
                            <li><strong>Capital Gains</strong>: If you hold until the 8-year maturity, the entire gain is **100% Tax Free**. No limits. No caps. This makes SGB one of the most powerful tax-saving instruments in the history of Indian finance.</li>
                        </ul>

                        <h2 id="summary" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic underline decoration-indigo-600">5. Master Table: Asset Tax 2025</h2>
                        
                        <div className="my-12 overflow-hidden border border-slate-200 rounded-[3rem] shadow-xl not-prose font-inter">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-6 font-black text-slate-900 text-xs uppercase tracking-widest">Asset Class</th>
                                        <th className="p-6 font-black text-slate-900 text-xs uppercase tracking-widest">LTCG Period</th>
                                        <th className="p-6 font-black text-indigo-600 text-xs uppercase tracking-widest">Tax Rate (LTCG)</th>
                                        <th className="p-6 font-black text-emerald-600 text-xs uppercase tracking-widest">Exemption</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 italic">
                                    <tr>
                                        <td className="p-6 font-black">Stocks/Equity MF</td>
                                        <td className="p-6">12 Months</td>
                                        <td className="p-6 text-indigo-600 font-bold">12.5%</td>
                                        <td className="p-6 text-emerald-600 font-bold">₹1.25L / Year</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-black">Real Estate</td>
                                        <td className="p-6">24 Months</td>
                                        <td className="p-6 text-indigo-600 font-bold">12.5%</td>
                                        <td className="p-6 text-slate-400">Section 54 Rules</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-black">Gold (Physical/ETF)</td>
                                        <td className="p-6">24 Months</td>
                                        <td className="p-6 text-indigo-600 font-bold">12.5%</td>
                                        <td className="p-6 text-slate-400 font-black">NONE</td>
                                    </tr>
                                    <tr className="bg-indigo-50/20">
                                        <td className="p-6 font-black underline">Gold (SGB)</td>
                                        <td className="p-6 italic">Maturity</td>
                                        <td className="p-6 text-emerald-600 font-black">ZERO</td>
                                        <td className="p-6 text-emerald-600 font-black italic">UNLIMITED</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="my-24 p-14 bg-indigo-600 rounded-[4rem] text-white text-center shadow-3xl shadow-indigo-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Invest for the future, not for the IRS.</h3>
                                <p className="text-indigo-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Compare your multi-asset portfolio's annual tax liability with our 2025 unified tax estimator.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.TAX.INCOME} className="px-12 py-6 bg-white text-indigo-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Estimate My Tax Now →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic">Unified Asset Tax FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
