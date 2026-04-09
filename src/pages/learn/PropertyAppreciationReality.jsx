import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function PropertyAppreciationReality() {
    const faqData = [
        {
            question: "What is the average property appreciation in India?",
            answer: "In the last 10 years (2014-2024), most Indian residencial property has appreciated by 4% to 6% CAGR in Tier-1 cities. While some micro-markets (like parts of Gurugram or Hyderabad) saw 15%+, they are outliers, not the norm."
        },
        {
            question: "How does maintenance affect real estate ROI?",
            answer: "Maintenance, property taxes, and insurance typically cost 1% to 1.5% of the property value every year. If you aren't renting the house, this cost must be subtracted from your appreciation, often bringing the real ROI down to 3-4%."
        },
        {
            question: "Is real estate a good hedge against inflation?",
            answer: "Historically, yes. However, since 2017, property prices in many Indian cities have barely kept pace with inflation, especially after considering the high entry and exit costs (Stamp duty + brokerage)."
        },
        {
            question: "What is the 'Holding Cost' of property?",
            answer: "It is the sum of interest on your home loan, maintenance fees, and taxes. For an investment property, the rent must cover at least the interest part of the EMI to be a 'neutral' asset."
        },
        {
            question: "Should I buy a plot or a flat for better appreciation?",
            answer: "Generally, plots appreciate faster because buildings depreciate over time. A 20-year-old flat is worth less than a new one in the same area (due to building age), but the land value always increases."
        }
    ];

    const toc = [
        { id: "trap", title: "The 4% Reality: Breaking the Myth" },
        { id: "costs", title: "Hidden Leakage: Maintenance & Taxes" },
        { id: "liquidity", title: "The Liquidity Problem: Sold in 3 Days?" },
        { id: "comparison", title: "Asset Battle: Property vs. Equity" },
        { id: "winners", title: "When is Property actually a Winner?" },
        { id: "faq", title: "Appreciation FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Investment Truths</h4>
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
                            
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-sm text-slate-600 leading-relaxed shadow-sm italic-selection">
                                "Property is a lifestyle asset. If you treat it as a pure investment, remember: you can't sell a bathroom to pay for a medical emergency."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-emerald-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-emerald-50 rounded">Real Estate Reality</span>
                                <span>•</span>
                                <span>24 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Property Appreciation Reality: Why your house <span className="text-emerald-600 underline decoration-emerald-200 decoration-8 underline-offset-8">isn't a 15% ROI</span> asset
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                "Mere flat ki keemat double ho gayi!" – We hear this a lot. But once you subtract interest, maintenance, and inflation, what is the actual ROI? Let's look at the brutal data.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-emerald-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                                The Appreciation Dashboard
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Standard ROI</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">5% - 7% CAGR</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">The historical average for most Indian apartments after 2014.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Operating Cost</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">~2% Yearly</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Maintenance, Taxes, and Depreciation of the building structure.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Liquidity</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">Very Low</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Takes 6-12 months to get the cash in your bank at fair market value.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            In India, property is the ultimate social status. But in the boardrooms of family wealth offices, real estate is often seen as a "Wealth Preservation" asset, not a "Wealth Creation" asset. 
                        </p>
                        
                        <p>
                            **The Psychology**: We remember what we paid (e.g., ₹40 Lakhs in 2012) and what it's worth now (₹1 Crore in 2024). We think, *"Wow, ₹60 Lakhs profit!"* 
                            <br />**The Reality**: If you put that same ₹40 Lakhs into a simple Nifty 50 Index fund in 2012, it would be worth over **₹1.8 Crores** today. 
                        </p>

                        <h2 id="trap" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. The 5% Reality: Breaking the Myth</h2>
                        <p>
                            According to the **RBI House Price Index**, property in India has appreciated at a CAGR of roughly **5.5% to 6%** over the last decade. 
                        </p>
                        <p>
                            When inflation is 5.5%, a property appreciation of 6% means your **Real Return is 0.5%.** You are just keeping your head above water.
                        </p>

                        <h2 id="costs" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Hidden Leakage: The 2% Annual cost</h2>
                        <p>
                            Owning a house isn't free. 
                        </p>
                        <ul className="space-y-6 my-10 list-none p-0">
                            {[
                                { t: "Society Maintenance", d: "₹4,000 - ₹12,000 per month. This adds up to several lakhs over a decade." },
                                { t: "Property Taxes", d: "Paid every year to the municipal corporation. A silent drain on your ROI." },
                                { t: "Property Depreciation", d: "Land value goes up, but the building gets old. A 20-year-old building often has structure issues, reducing its resale potential." }
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

                        <h2 id="liquidity" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-emerald-600">3. The Liquidity Problem: Sold in 3 Days?</h2>
                        <p>
                            If you need ₹50 Lakhs for a medical emergency today:
                            - **Stocks/Mutual Funds**: Cash in bank in **48 hours.**
                            - **Gold**: Cash in bank in **3 hours.**
                            - **Real Estate**: Cash in bank in **6-12 months.**
                        </p>
                        <p>
                            Because real estate is illiquid, you often have to sell at a "Distress Discount" of 15-20% if you need money fast. That one discount wipes out 4 years of appreciation.
                        </p>

                        <h2 id="comparison" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. Asset Battle: 10-Year View</h2>
                        <p>
                            Let's look at ₹10 Lakhs invested in 2014:
                        </p>
                        <div className="my-10 overflow-hidden border border-slate-200 rounded-[3rem] shadow-xl not-prose font-inter italic">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 font-black text-slate-900 text-xs uppercase tracking-widest">Asset Class</th>
                                        <th className="p-8 font-black text-slate-900 text-xs uppercase tracking-widest">Growth ROI</th>
                                        <th className="p-8 font-black text-emerald-600 text-xs uppercase tracking-widest">2024 Value</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="p-8">Savings Account</td>
                                        <td className="p-8">3.5%</td>
                                        <td className="p-8">₹14.1 Lakhs</td>
                                    </tr>
                                    <tr>
                                        <td className="p-8">Real Estate (Avg)</td>
                                        <td className="p-8 font-bold">6.0%</td>
                                        <td className="p-8 font-black">₹17.9 Lakhs</td>
                                    </tr>
                                    <tr className="bg-emerald-50/20">
                                        <td className="p-8 font-black">Nifty 50 Index</td>
                                        <td className="p-8">13.5%</td>
                                        <td className="p-8 text-emerald-600 font-black">₹35.4 Lakhs</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="winners" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-emerald-600">5. When is Property actually a Winner?</h2>
                        <p>
                            Property is a great investment in only 3 cases:
                        </p>
                        <ol>
                            <li>**Leverage**: When the bank gives you 80% money at 9%, and the property grows at 10%. You are making profit on the bank's money.</li>
                            <li>**Plotted Development**: Buying land in the path of upcoming infrastructure (New Airport/Expressway). Here, 15-20% CAGR is possible.</li>
                            <li>**The "Home" factor**: If it stops you from paying rent and gives you emotional stability, the "ROI" is personal, not just financial.</li>
                        </ol>

                        <div className="my-24 p-14 bg-emerald-600 rounded-[4rem] text-white text-center shadow-3xl shadow-emerald-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Stop guessing your ROI.</h3>
                                <p className="text-emerald-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Our Property appreciation calculator accounts for maintenance, inflation, and taxes to give you the honest truth.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.REAL_ESTATE.APPRECIATION} className="px-12 py-6 bg-white text-emerald-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Check Real ROI →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic">Appreciation FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
