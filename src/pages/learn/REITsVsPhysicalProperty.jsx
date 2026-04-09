import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function REITsVsPhysicalProperty() {
    const faqData = [
        {
            question: "What is a REIT?",
            answer: "A Real Estate Investment Trust (REIT) is a company that owns and operates income-producing real estate (like offices or malls). You can buy shares of a REIT on the stock market (like Embassy, Mindspace, or Brookfield) and receive a portion of the rental income as dividends."
        },
        {
            question: "Is physical property safer than REITs?",
            answer: "Physical property feels safer because you can touch it and control it. However, it has high 'Concentration Risk'—if that one property has a legal issue or a bad tenant, 100% of your investment is at risk. REITs own dozens of properties, diversifying your risk."
        },
        {
            question: "How do the returns compare?",
            answer: "Physical property yields are 2-3% (Residential) or 7-9% (Commercial). REITs typically offer 5-7% dividend yields plus capital appreciation of the stock price. Overall, REITs often provide better total returns after accounting for maintenance and taxes."
        },
        {
            question: "What are the tax benefits of physical property?",
            answer: "Under Section 54, you can save capital gains tax if you reinvest the sale proceeds into another house. REITs don't have this benefit; their gains are taxed as LTCG (12.5% after ₹1.25L) or STCG."
        },
        {
            question: "Can I invest in REITs with ₹5,000?",
            answer: "Yes! Since REITs are traded on the stock market, you can buy even 1 share (usually costing ₹300 - ₹400). Physical property requires a minimum of ₹30 Lakhs to ₹3 Crores."
        }
    ];

    const toc = [
        { id: "liquidity", title: "6 Seconds vs 6 Months: The Liquidity Gap" },
        { id: "maintenance", title: "Maintenance: Who handles the plumber?" },
        { id: "dividends", title: "Dividend Math: The Cash Flow Machine" },
        { id: "tax", title: "Taxation: Physical vs Digital" },
        { id: "winner", title: "The Portfolio Winner" },
        { id: "faq", title: "REIT FAQs" }
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
                                            className="block text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            
                            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 italic text-sm text-blue-800 leading-relaxed shadow-sm italic-selection">
                                "In the 90s, you needed a broker to buy property. In 2025, you need a Demat account. The asset is the same (office walls), but the freedom is entirely different."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-blue-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-blue-50 rounded">Digital Real Estate 2025</span>
                                <span>•</span>
                                <span>17 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                REITs vs. Physical Property: The <span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-8">2025 Comparison</span>
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Rent or Dividends? Handing over keys or clicking a button? Let's compare the old way of buying flats with the new way of owning premium Indian offices.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-blue-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                                The Real Estate Matrix
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Physical House</p>
                                    <p className="text-3xl font-black text-white italic italic-selection italic-selection">Feel it. Touch it.</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium italic-selection">High capital required, low liquidity, high management headache.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic text-blue-400">REITs (Digital)</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">Trade it. Earn it.</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Own pieces of many offices. Instant liquidity on the stock market.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">The Yield</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">5% - 7%</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">REITs pay out at least 90% of their cash flow to you as dividends.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            In India, "zamin" (land) has always been the ultimate measure of a man's wealth. But physical land comes with three silent enemies: **Legal disputes, maintenance costs, and zero liquidity.**
                        </p>
                        
                        <p>
                            **REITs** (Real Estate Investment Trusts) solve this by turning real estate into a stock. You can buy ₹5,000 worth of a REIT and instantly own a fraction of Google’s office in Hyderabad or Amazon’s office in Bengaluru.
                        </p>

                        <h2 id="liquidity" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. 6 Seconds vs. 6 Months: The Liquidity Gap</h2>
                        <p>
                            This is the biggest winner for REITs. 
                            <br />- **Physical Property**: To sell, you need to find a buyer, negotiate, check documents, pay brokerage, and go to the registrar's office. Process time: **3-9 months.**
                            <br />- **REITs**: Open your Zerodha/Groww app, click 'Sell'. Cash in bank in **48 hours.** 
                        </p>

                        <h2 id="maintenance" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Maintenance: Who handles the plumber?</h2>
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-10 italic-selection font-medium italic italic-selection">
                            "Owning a house means dealing with leaking taps, painting, property taxes, and tenant complaints. With a REIT, a professional management team handles all of this. Your ONLY job is to check your bank account for the dividend credit every quarter."
                        </div>

                        <h2 id="dividends" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-blue-600">3. Dividend Math: The Cash Flow Machine</h2>
                        <p>
                            By law, Indian REITs must distribute 90% of their net cash flow to shareholders. This creates a predictable income stream. 
                            <br />If a REIT trades at ₹400 and pays ₹28 dividend per year, your yield is **7%**. This is much higher than the 3% you'd get from renting out a residential apartment.
                        </p>

                        <h2 id="tax" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. Taxation: Physical vs. Digital</h2>
                        <ul className="space-y-6 my-10 list-none p-0">
                            {[
                                { t: "Physical Property", d: "Capital gains can be zero if you buy another house (Sec 54). Rental income is taxed at your slab after a standard 30% deduction." },
                                { t: "REITs", d: "Dividends are mostly taxable at your slab. Capital gains are taxed as LTCG (12.5% if held >1 year) or STCG (20%)." }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                                    <span className="text-blue-600 font-black">!</span>
                                    <div>
                                        <strong className="block text-slate-900 mb-1">{item.t}</strong>
                                        <span className="text-slate-500 text-sm font-medium">{item.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="my-24 p-14 bg-blue-600 rounded-[4rem] text-white text-center shadow-3xl shadow-blue-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Check your potential yield.</h3>
                                <p className="text-blue-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Should you buy the flat or the REIT? Compare the rental yields in seconds.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.REAL_ESTATE.RENTAL_YIELD} className="px-12 py-6 bg-white text-blue-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Calculate Rental Yield →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic text-blue-900 italic-selection">REIT vs Property FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
