import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function PropertyTaxGuide() {
    const faqData = [
        {
            question: "What is the new LTCG tax rate for property in 2025?",
            answer: "The current flat rate for Long Term Capital Gains (LTCG) on property is 12.5% without indexation. However, for properties bought before July 23, 2024, taxpayers have the option to pay 20% tax with indexation benefit if it results in lower tax."
        },
        {
            question: "How long should I hold a property to qualify for LTCG?",
            answer: "For real estate (land or building), the holding period for Long Term Capital Gains is 24 months (2 years). If you sell within 2 years, it is considered Short Term Capital Gain (STCG) and taxed at your slab rate."
        },
        {
            question: "Can I save property tax by buying a new house?",
            answer: "Yes, under Section 54, if you sell a residential house and buy another one within 1 year before or 2 years after the sale (or construct one within 3 years), your capital gains are exempt from tax up to the amount reinvested (max ₹10 Crore)."
        },
        {
            question: "What are 54EC Bonds?",
            answer: "If you don't want to buy a new property, you can invest your capital gains (up to ₹50 Lakhs) into specified infrastructure bonds like REC or NHAI within 6 months of the sale. These bonds have a 5-year lock-in and save you from paying LTCG tax."
        },
        {
            question: "Is tax applicable if I sell property at a loss?",
            answer: "No. If you have a capital loss, you don't pay tax. More importantly, you can carry forward this 'Capital Loss' for up to 8 years to set it off against future capital gains."
        }
    ];

    const toc = [
        { id: "newsystem", title: "12.5% vs. 20%: The Budget 2024 Battle" },
        { id: "holding", title: "The 24-Month Clock: STCG vs. LTCG" },
        { id: "choice", title: "How to Choose: The Break-even Math" },
        { id: "exemptions", title: "Section 54: Reinvest and Pay Zero Tax" },
        { id: "grandfather", title: "The 2001 Rule for Ancestral Property" },
        { id: "faq", title: "Property Tax FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Real Estate Tax</h4>
                                <nav className="space-y-3">
                                    {toc.map(item => (
                                        <a 
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="block text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            
                            <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100 italic text-sm text-orange-800 leading-relaxed shadow-sm italic-selection">
                                "Property is the most emotional asset in India. But the tax on it is pure math. Don't let sentimentality lead to a 12.5% unnecessary leak."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-orange-600 hover:prose-a:text-orange-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-orange-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-orange-50 rounded">Real Estate India</span>
                                <span>•</span>
                                <span>24 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Capital Gains on Property: Decoding <span className="text-orange-600 underline decoration-orange-200 decoration-8 underline-offset-8">Indexation</span> and the New 2024 Rules
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Selling a house used to be simple—20% tax with indexation. But in 2024, the rules were flipped upside down. Here is how to navigate the new system without losing your mind (or your money).
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-orange-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></span>
                                The Property Tax Snapshot
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">The New Rate</p>
                                    <p className="text-3xl font-black text-white italic">12.5% Flat</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Standard rate for LTCG on property without indexation benefit.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">The Choice</p>
                                    <p className="text-3xl font-black text-white italic">20% Opt-in</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Available for property bought before July 2024 (With Indexation).</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Holding Period</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">24 Months</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Period required to categorize gain as 'Long Term'.</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-sm">"The government gave you a choice because homeowners were furious. Use that choice wisely."</p>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.LTCG_TAX} className="px-8 py-4 bg-orange-600 text-white font-black rounded-2xl hover:bg-orange-700 transition-all shadow-lg hover:-translate-y-1">
                                    Property Tax Tool →
                                </Link>
                            </div>
                        </div>

                        <p>
                            Real estate is the favorite investment of the Indian middle class. We buy a plot or a flat, hold it for 15 years, and then sell it for a "Huge Profit". But for decades, 20% of that profit went away in tax—minus the indexation benefit.
                        </p>
                        
                        <p>
                            In the 2024 Union Budget, the Finance Minister announced the **removal of indexation**. The market panicked. The logic was: "We are giving you a lower rate (12.5%), so you don't need indexation." But for properties that grow slowly (3-4% CAGR), the new rule was a disaster.
                        </p>

                        <h2 id="newsystem" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. 12.5% vs. 20%: The Budget 'Switch'</h2>
                        <p>
                            The government eventually listened to the outcry. They introduced a retrospective choice.
                        </p>
                        <p>
                            **If you bought your property BEFORE July 23, 2024:**
                            - You can calculate tax at **20% (with indexation)**.
                            - OR calculate tax at **12.5% (without indexation)**.
                            - You pay whichever is **LOWER**.
                        </p>
                        <p className="font-bold text-orange-600 italic">If you buy a house TODAY (post-July 2024), you no longer have this choice. You are locked into the 12.5% flat rate.</p>

                        <h2 id="holding" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">2. The 24-Month Clock: STCG vs. LTCG</h2>
                        <p>
                            Unlike stocks (12 months) or gold (24 months now!), property remains consistent. 
                        </p>
                        <ul>
                            <li><strong>Short Term (STCG)</strong>: Hold for less than 2 years. Gains are added to your salary and taxed at 10%, 20%, or 30%. **Avoid this if possible.**</li>
                            <li><strong>Long Term (LTCG)</strong>: Hold for more than 2 years. You get the 12.5% or 20% choice.</li>
                        </ul>

                        <h2 id="choice" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. How to Choose: The Break-even Math</h2>
                        <p>
                            Which one is better? It depends on your property's appreciation rate.
                        </p>
                        <p>
                            - **High Appreciation ({`>`}10% CAGR)**: The new 12.5% rule is usually better. Since the profit is huge, the low rate outweighs the indexation shield.
                            - **Low Appreciation ({`<`}8% CAGR)**: The old 20% + Indexation rule usually wins. This is typical for older flats in cities with oversupply.
                        </p>

                        <h2 id="exemptions" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-orange-600">4. Reinvest and Pay Zero Tax</h2>
                        <p>
                            Don't want to pay any tax? Use Section 54. 
                        </p>
                        <p>
                            If you sell a residential house and use the *entire amount of Capital Gains* to buy another house in India, your tax is Zero. 
                            - **Time Limit**: Buy within 1 year before or 2 years after the sale. Construct within 3 years.
                            - **The NHAI Bond (54EC) Hack**: If you don't want to buy another house, you can put up to ₹50 Lakhs into specified bonds (NHAI/REC). You keep the money for 5 years and pay zero tax. 
                        </p>

                        <h2 id="grandfather" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5. The 2001 Rule for Ancestral Property</h2>
                        <p>
                            If your parents bought a house in 1985 for ₹50,000 and you are selling it for ₹2 Crore today, you don't pay tax on the ₹1.99 Cr gain!
                        </p>
                        <p>
                            The law lets you reset the cost of acquisition to the **Fair Market Value (FMV) as of April 1, 2001**. You get a government-approved valuer to find the 2001 price. Then you apply indexation from 2001 to 2025. This usually brings your taxable gain down significantly.
                        </p>

                        <div className="my-24 p-14 bg-orange-600 rounded-[4rem] text-white text-center shadow-3xl shadow-orange-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-orange-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Know your profit, keep your cash.</h3>
                                <p className="text-orange-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Use our Property LTCG calculator to compare the 12.5% vs 20% options side-by-side in real-time.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.LTCG_TAX} className="px-12 py-6 bg-white text-orange-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Compare My Property Tax →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic">Property Taxation FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
