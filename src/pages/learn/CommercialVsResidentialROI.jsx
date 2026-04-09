import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function CommercialVsResidentialROI() {
    const faqData = [
        {
            question: "What is the average rental yield in India?",
            answer: "Residential property typically offers a yield of 2.5% to 3.5%. Commercial property (Offices, Shops) offers much higher yields of 7% to 9%. This means commercial property pays back its cost much faster."
        },
        {
            question: "Is commercial real estate more risky than residential?",
            answer: "In terms of 'Vacancy Risk', yes. If a commercial tenant leaves, it can take 6-12 months to find a new one. Residential property is much easier to rent out quickly."
        },
        {
            question: "Who pays for maintenance in commercial property?",
            answer: "Usually, commercial leases (especially Triple Net Leases) require the tenant to pay for maintenance, property taxes, and insurance. In residential, the owner pays for major repairs."
        },
        {
            question: "Which has better capital appreciation?",
            answer: "Residential appreciation is driven by population growth and home-ownership dreams. Commercial appreciation is driven by business growth and rental income. Historically, well-located residential land has seen higher appreciation, but shops in prime markets can also explode in value."
        },
        {
            question: "Can I buy commercial property with a home loan?",
            answer: "No. You need a 'Commercial Property Loan', which typically has a higher interest rate (1-2% more than home loans) and a shorter tenure (max 10-15 years)."
        }
    ];

    const toc = [
        { id: "yield", title: "The 3% vs 8% Yield Gap" },
        { id: "tenants", title: "Tenant Management: Family vs Corporate" },
        { id: "loans", title: "Loan Math: The Interest Penalty" },
        { id: "appreciation", title: "Appreciation: Scarcity vs Utility" },
        { id: "verdict", title: "The 15-Year Verdict" },
        { id: "faq", title: "Real Estate FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Real Estate Strategy</h4>
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
                            
                            <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 italic text-sm text-indigo-800 leading-relaxed shadow-sm italic-selection">
                                "Residential is for the heart and social status. Commercial is for the pocket and cash flow. Don't confuse the two or you'll end up with a high-cost house that nobody wants to stay in."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-indigo-50 rounded">Wealth Preservation 2025</span>
                                <span>•</span>
                                <span>20 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Commercial vs. <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-8">Residential Real Estate</span>: The ROI Duel
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Shifting from buying flats to buying shops? In 2025, the game of property has changed. Here is how to decide based on rental yields and capital growth.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-indigo-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
                                The Yield Reality
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Residential</p>
                                    <p className="text-3xl font-black text-white italic italic-selection italic-selection">~3% Yield</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium italic-selection">Low rental income, high liquidity, easier to find small-ticket deals.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic text-indigo-400">Commercial</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">~8% Yield</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">High rental income, long lock-ins, tenant pays for maintenance.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Loan Rate</p>
                                    <p className="text-3xl font-black text-rose-400 italic">10.5% ROI</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Commercial loans are more expensive than home loans. Margin is 30% or more.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            Buying property in India is a national pastime. But most Indian investors only think of **Residential** property—apartments and plots. While these are great for stability, they are often terrible for cash flow.
                        </p>
                        
                        <p>
                            If you have ₹1 Crore to invest:
                            <br />- **Residential**: You might get ₹25,000 rent per month (3% Yield).
                            <br />- **Commercial**: You could get ₹65,000 rent per month (8% Yield).
                            <br />That’s a difference of **₹4.8 Lakhs per year** in your pocket.
                        </p>

                        <h2 id="yield" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. The Yield Gap: Why it Matters</h2>
                        <p>
                            Rental Yield is (Annual Rent / Property Cost). 
                        </p>
                        <p>
                            In cities like Bengaluru or Mumbai, residential yields have crashed to 2.5% because property prices grew faster than rents. In contrast, Grade-A office spaces and prime retail shops continue to command 8-10% yields.
                        </p>

                        <h2 id="tenants" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Tenant Management: Family vs. Corporate</h2>
                        <ul className="space-y-6 my-10 list-none p-0">
                            {[
                                { t: "Residential Tenants", d: "Highly emotional. You have to handle plumbing, painting, and 11-month lease renewals. High wear and tear." },
                                { t: "Commercial Tenants", d: "Purely professional. They sign 3-9 year leases. They often handle their own interiors and maintenance. Reliable payments." },
                                { t: "Vacancy Risk", d: "A house takes 1 month to re-rent. A shop can stay empty for a year if the location isn't perfect." }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                                    <span className="text-indigo-600 font-black">!</span>
                                    <div>
                                        <strong className="block text-slate-900 mb-1">{item.t}</strong>
                                        <span className="text-slate-500 text-sm font-medium">{item.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <h2 id="loans" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-indigo-600">3. Loan Math: The Hidden Penalty</h2>
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-10 italic-selection font-medium italic italic-selection">
                            "You can get a Home Loan at 8.75% for 30 years with just a 20% downpayment. But for a shop, you need **30-40% downpayment**, the interest rate is **10-11%**, and you must finish the loan in 15 years. The EMI for commercial property is much higher, even if the loan amount is the same."
                        </div>

                        <h2 id="appreciation" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. Appreciation: Scarcity vs. Utility</h2>
                        <p>
                            - **Residential**: Prices grow because human beings need a place to live. It is a 'Need' based market.
                            - **Commercial**: Prices grow because businesses are profitable. It is an 'Economic' based market. 
                        </p>
                        <p>
                            👉 **Hot Tip**: In the next decade, with the rise of E-commerce, large retail shops might see slower growth, but **Warehouse and Cloud Kitchen spaces** (Commercial) are expected to explode in value.
                        </p>

                        <div className="my-24 p-14 bg-indigo-600 rounded-[4rem] text-white text-center shadow-3xl shadow-indigo-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Check the current yields.</h3>
                                <p className="text-indigo-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Is your property earning its keep? Use our Rental Yield Calculator to compare different deals.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.REAL_ESTATE.RENTAL_YIELD} className="px-12 py-6 bg-white text-indigo-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Calculate Rental Yield →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic text-indigo-900 italic-selection">Property Duel FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
