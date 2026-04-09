import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function FractionalRealEstateGuide() {
    const faqData = [
        {
            question: "What is Fractional Real Estate Ownership?",
            answer: "It is a way for multiple investors to pool their money and buy a high-value commercial property (like an office building or a warehouse). Instead of needing ₹50 Crore to buy the whole building, you can own a 'fraction' of it for ₹10 Lakhs or even ₹25,000 via certain platforms."
        },
        {
            question: "How is my ownership legally protected?",
            answer: "Usually, the property is owned by an SPV (Special Purpose Vehicle) which is a private limited company. You are a shareholder in that company. All documents are managed by an independent SEBI-registered trustee to ensure safety."
        },
        {
            question: "What is the typical return on Fractional Real Estate?",
            answer: "You get two types of returns: 1. Monthly Rental Yield (typically 8-10%) and 2. Capital Appreciation when the building is sold (targeting 12-15% total IRR)."
        },
        {
            question: "Can I sell my fraction anytime?",
            answer: "Fractional assets are less liquid than stocks. You can sell your shares on the platform's secondary market to other investors, but it can take 1-4 weeks to find a buyer at your desired price."
        },
        {
            question: "What is the difference between REITs and Fractional Ownership?",
            answer: "REITs are like mutual funds of many properties and are traded on the stock market. Fractional Ownership lets you choose a SPECIFIC property (e.g., a specific warehouse in Pune) and usually offers higher yields but lower liquidity."
        }
    ];

    const toc = [
        { id: "what", title: "Fractional Ownership: The Basics" },
        { id: "structure", title: "SPVs & Trustees: Legal Safety" },
        { id: "yield", title: "Yield vs FD: The Math" },
        { id: "reits", title: "Fractional vs REITs" },
        { id: "liquidity", title: "The Liquidity Reality" },
        { id: "faq", title: "Fractional FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Alt Investing</h4>
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
                            
                            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 italic text-sm text-emerald-800 leading-relaxed shadow-sm italic-selection">
                                "In the past, to earn 9% rent, you needed a 9-figure bank balance. Today, technology has democratized the skylines. You can own a piece of a Grade-A office while sitting in your living room."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-emerald-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-emerald-50 rounded">Modern Finance 2025</span>
                                <span>•</span>
                                <span>18 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Fractional Real Estate 101: Buying a <span className="text-emerald-600 underline decoration-emerald-200 decoration-8 underline-offset-8">Mall with ₹25k</span>
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Always wanted to own high-end commercial property but didn't have ₹10 Crores? Fractional ownership is changing the rules of the game in 2025.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-emerald-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                                The Fractional Revolution
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Entry Point</p>
                                    <p className="text-3xl font-black text-white italic italic-selection italic-selection">₹25k - ₹10L</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium italic-selection">The 'Minimum Ticket Size' depends on the platform and property type.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic text-emerald-400">Target IRR</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">12% - 14%</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Combination of monthly rent (~8-9%) and capital appreciation (~4-5%).</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Regulation</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">SEBI SM REIT</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">New regulations (SM REITs) are bringing more safety and transparency to the sector.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            Historically, real estate has been a "Rich Man's Game." If you had ₹50,000, you could buy stocks. If you had ₹5 Lakhs, you could buy a car. But to buy a high-performance office space in Gurgaon or BKC, you needed **serious wealth.**
                        </p>
                        
                        <p>
                            **Fractional Real Estate** changes this. By pooling money from hundreds of investors, platforms can now buy a ₹20 Crore warehouse and sell 2,000 "Fractions" of it.
                        </p>

                        <h2 id="structure" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. SPVs & Trustees: How Your Money is Safe</h2>
                        <p>
                            You don't just "transfer money to a website."
                            <br />- **SPV (Special Purpose Vehicle)**: A dedicated company is formed for each property. Your money buys shares in this company.
                            <br />- **Trustship**: Financial documents are held by a SEBI-registered trustee. Even if the platform shuts down, your ownership of the asset is legally protected.
                        </p>

                        <h2 id="yield" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Yield vs. FD: The Math</h2>
                        <div className="my-10 overflow-hidden border border-slate-200 rounded-[3rem] shadow-xl not-prose font-inter font-bold italic">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 text-xs uppercase tracking-widest text-slate-900">Feature</th>
                                        <th className="p-8 text-xs uppercase tracking-widest text-slate-900">Fixed Deposit</th>
                                        <th className="p-8 text-xs uppercase tracking-widest text-emerald-600">Fractional RE</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="p-8">Annual Income</td>
                                        <td className="p-8">7.0% (Interest)</td>
                                        <td className="p-8 text-emerald-600">~8.5% (Rent)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-8">Taxation</td>
                                        <td className="p-8">As per Slab</td>
                                        <td className="p-8">Rent is Taxed</td>
                                    </tr>
                                    <tr className="bg-emerald-50/20">
                                        <td className="p-8">Appreciation</td>
                                        <td className="p-8">Zero</td>
                                        <td className="p-8 text-emerald-600 font-black">4-6% Yearly</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="reits" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-emerald-600">3. Fractional vs. REITs: Choosing Your Path</h2>
                        <p>
                            - **REITs (Real Estate Investment Trusts)**: Traded on the stock market (Nifty REIT index). You buy a basket of properties. High liquidity, lower yields (~5-6% rent).
                            - **Fractional**: You choose the EXACT building. You see the tenant (e.g., Google or Amazon). Lower liquidity, much higher yields (~8-10% rent).
                        </p>

                        <h2 id="liquidity" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. The Liquidity Reality</h2>
                        <p>
                            This is **NOT** a place for your emergency fund.
                            <br />- **Lock-in**: Most projects have a target exit in 4-6 years.
                            <br />- **Secondary Market**: Some platforms have a dashboard where you can list your shares for sale to other users. But it’s not "instant cash." 
                        </p>

                        <div className="my-24 p-14 bg-emerald-600 rounded-[4rem] text-white text-center shadow-3xl shadow-emerald-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Visualize your rent.</h3>
                                <p className="text-emerald-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Curious about how much Rent you'd get on a ₹10 Lakh fractional investment? Use our Yield tool.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.REAL_ESTATE.RENTAL_YIELD} className="px-12 py-6 bg-white text-emerald-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Calculate Potential Rent →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic text-emerald-900 italic-selection">Fractional Finance FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
