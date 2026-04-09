import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function RentVsBuyGuide() {
    const faqData = [
        {
            question: "Is renting 'money thrown away' in India?",
            answer: "No. Renting is often 'buying flexibility'. In many Indian Metros, rent is only 2-3% of property value, while home loan interest is 9%. By renting, you are effectively living in a house at 1/3rd the cost of interest, allowing you to invest the surplus for much higher returns."
        },
        {
            question: "What is the Price-to-Rent ratio?",
            answer: "It is the property price divided by the annual rent. If the ratio is below 15, buying is excellent. Between 15-20, it depends. Above 25 (common in Mumbai/Bengaluru), renting is mathematically superior."
        },
        {
            question: "When does buying a house make more sense?",
            answer: "Buying makes sense if you plan to stay in the same city for 10+ years, your EMI is less than 30% of your take-home pay, and you have at least 20% down payment ready. It also works as a 'forced saving' mechanism."
        },
        {
            question: "How does inflation affect the decision?",
            answer: "Rents typically grow 5-8% every year in India. A home loan EMI is fixed (though interest rates fluctuate). Over 15-20 years, the 'fixed' EMI often becomes cheaper than the 'inflated' future rent."
        },
        {
            question: "Can I claim tax benefits if I rent AND pay home loan?",
            answer: "Yes, provided the two houses are in different cities or the commute is non-viable. You can claim both HRA (House Rent Allowance) and Section 24(b) (Home Loan Interest) in your ITR."
        }
    ];

    const toc = [
        { id: "trap", title: "Rental Yield: The 3% ROI Trap" },
        { id: "ratio", title: "The Price-to-Rent benchmarks" },
        { id: "opportunity", title: "Nifty 50 vs. Real Estate Math" },
        { id: "flexibility", title: "Flexibility: The Mid-career Asset" },
        { id: "verdict", title: "The 20-Year Net Worth Verdict" },
        { id: "faq", title: "Rent vs Buy FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Real Estate Math</h4>
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
                                "Renting is renting a lifestyle. Buying is renting money from the bank to lock that lifestyle in. The math only works if you stay in one place long enough."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-indigo-50 rounded">Assessment Year 2025</span>
                                <span>•</span>
                                <span>22 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Rent vs. Buy India 2025: The <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-8">Brutal Truth</span> of Real Estate Math
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                For decades, Indian parents have said "Rent is money thrown away." But with flat prices in Tier-1 cities hitting all-time highs and rental yields stuck at 3%, is that advice still sound?
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-indigo-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
                                The 2025 Reality
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Buying Win</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">Fixed Costs</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Your housing cost (EMI) is locked. You are immune to rent hikes.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Renting Win</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">Flexibility</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">You can move for a better job in 15 days. No 20-year chain.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">The Spread</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">3% vs 9%</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Rent is 3% of value. EMI is 9%. The 6% gap is your weapon.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            We love real estate. Nothing feels better than owning the four walls you live in. But in modern India, the gap between "Price" and "Value" is wider than ever. 
                        </p>
                        
                        <p>
                            In cities like Mumbai, Bengaluru, or Gurugram, a flat that costs ₹1.5 Crores can be rented for ₹35,000. To buy it, you'd need a ₹1.2 Crore loan with an EMI of ₹1.1 Lakh. 
                            <br />**Why pay ₹1.1 Lakh for something you can get for ₹35,000?**
                        </p>

                        <h2 id="trap" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. Rental Yield: The 3% Trap</h2>
                        <p>
                            In India, **Rental Yield** (Annual Rent / Property Price) is surprisingly low. While global averages are 5-7%, Indian Tier-1 cities stay at **2.5% to 3.5%**.
                        </p>
                        <p>
                            If you are paying the bank 9% interest to live in a house that only generate 3% rent, you are losing 6% every year on the 'spread'. This is the price of "Apna Ghar". 
                        </p>

                        <h2 id="ratio" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. The Price-to-Rent Ratio</h2>
                        <p>
                            This is the global standard for the 'Rent vs Buy' decision. Take the property price and divide it by the total annual rent.
                        </p>
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-10 italic-selection font-medium italic">
                            - **Ratio {`<`} 15**: Very good to buy. It's cheap.
                            <br />- **Ratio 15-20**: Neutral. Look at other factors.
                            <br />- **Ratio {`>`} 25**: Run. Renting is significantly better.
                        </div>
                        <p>Most luxury flats in Mumbai have a ratio of 40+. Renting them is a massive financial win.</p>

                        <h2 id="opportunity" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-indigo-600">3. Opportunity Cost: Nifty 50 vs. Real Estate</h2>
                        <p>
                            When you buy a house, you tie up massive capital in the down payment (minimum 20% + 7% stamp duty). 
                        </p>
                        <p>
                            On a ₹1 Crore house, that's **₹27 Lakhs**. If you don't buy and instead invest that ₹27 Lakhs in an Index Fund (12% CAGR) for 20 years, it grows to **₹2.6 Crores**. 
                        </p>
                        <p className="font-bold">By buying the house, you aren't just paying an EMI; you are losing the compounding power of that upfront capital.</p>

                        <h2 id="verdict" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. The 20-Year Net Worth Verdict</h2>
                        
                        <div className="my-10 overflow-hidden border border-slate-200 rounded-[3rem] shadow-xl not-prose font-inter">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 font-black text-slate-900 text-xs uppercase tracking-widest">Scenario</th>
                                        <th className="p-8 font-black text-slate-900 text-xs uppercase tracking-widest">Buy Path</th>
                                        <th className="p-8 font-black text-indigo-600 text-xs uppercase tracking-widest">Rent + SIP Path</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 italic">
                                    <tr>
                                        <td className="p-8 font-bold">Monthly Outgo</td>
                                        <td className="p-8">₹90,000 (EMI)</td>
                                        <td className="p-8 text-indigo-600">₹30,000 (Rent)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-8 font-bold">Invested Surplus</td>
                                        <td className="p-8 text-slate-400">₹0</td>
                                        <td className="p-8 text-emerald-600 font-bold">₹60,000 / month</td>
                                    </tr>
                                    <tr className="bg-emerald-50/20">
                                        <td className="p-8 font-black italic">Net Worth (20Y)</td>
                                        <td className="p-8 text-slate-900">₹4.5 Cr (House)</td>
                                        <td className="p-8 text-emerald-600 font-black">₹7.2 Cr (Equity + Cash)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="my-24 p-14 bg-indigo-600 rounded-[4rem] text-white text-center shadow-3xl shadow-indigo-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Don't guess with your crores.</h3>
                                <p className="text-indigo-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Our rent vs buy calculator uses real-time property inflation data for your city to show you the winning path.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.REAL_ESTATE.RENT_VS_BUY} className="px-12 py-6 bg-white text-indigo-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Open Decision Tool →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic">Indian Rent vs. Buy FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
