import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function TermInsuranceVsULIP() {
    const faqData = [
        {
            question: "What is the main difference between Term Insurance and ULIP?",
            answer: "Term Insurance is pure insurance; you pay a low premium for high cover, and your family gets money only if you pass away. ULIP (Unit Linked Insurance Plan) is a mix of insurance and investment; a part of your premium goes to life cover and the rest is invested in the stock market."
        },
        {
            question: "Why do experts say 'Don't mix Insurance and Investment'?",
            answer: "Mixing them often leads to high 'Mortality Charges' and 'Fund Management Fees' which eat into your returns. Usually, buying a separate Term Plan for cover and an Index Fund for investment gives much higher returns and better cover."
        },
        {
            question: "Is ULIP tax-free?",
            answer: "Yes, under Section 10(10D), the maturity proceeds of a ULIP are tax-free, provided the annual premium is below ₹2.5 Lakhs. However, Term Insurance is for protection, not maturity, so there is no maturity amount to tax."
        },
        {
            question: "What happens if I stop paying ULIP premiums?",
            answer: "ULIPs have a mandatory 5-year lock-in. If you stop before 5 years, your money goes into a 'Discontinued Fund' earning low interest (~4%) and you can only withdraw it after the 5th year ends."
        },
        {
            question: "How much Term Insurance cover do I need?",
            answer: "A general rule is 10 to 15 times your annual income. If you earn ₹10 Lakhs a year, you should have at least ₹1 Crore to ₹1.5 Crore in Term Life Insurance."
        }
    ];

    const toc = [
        { id: "trap", title: "The Money-Back Trap" },
        { id: "cover", title: "Life Cover Math: ₹1 Cr Comparison" },
        { id: "charges", title: "Mortality Charges: The Hidden Killer" },
        { id: "lockin", title: "Lock-ins & Liquidity" },
        { id: "combo", title: "The Winning Combo: BTIR" },
        { id: "faq", title: "Insurance FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Risk Management</h4>
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
                                "Insurance is a cost to protect your family. Investment is an engine to grow your wealth. When you try to make one do both, you end up with a high-cost insurance and a slow-growth investment."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-indigo-50 rounded">Protection Strategy 2025</span>
                                <span>•</span>
                                <span>16 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Term vs. ULIP: Why You Should <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-8">Never Mix</span> Them
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Your bank manager is probably pushing a ULIP for the tax-free maturity and life cover. Before you sign, let's look at the brutal math of mortality charges and returns.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-indigo-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
                                The Insurance Verdict
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Term Plan</p>
                                    <p className="text-3xl font-black text-white italic italic-selection italic-selection">High Cover</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium italic-selection">Pay ₹15k, get ₹1 Crore cover. Pure protection, zero waste.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic text-indigo-400">ULIP (Invest)</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">Low Cover</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Pay ₹1 Lakh, get only ₹10 Lakhs cover. Mixing slows down growth.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Golden Rule</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">BTIR</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">"Buy Term, Invest the Rest". The mathematically superior path to wealth.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            In India, we love "Money Back." We feel that if we pay ₹1 Lakh to an insurance company and don't die, that money is "wasted." This psychological trap leads millions to buy **Endowment Plans** or **ULIPs.**
                        </p>
                        
                        <p>
                            But insurance is not an investment. Its a cost you pay to ensure your child’s education and your family’s lifestyle stays intact if you aren't around.
                        </p>

                        <h2 id="cover" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. Life Cover Math: The ₹1 Crore Comparison</h2>
                        <p>
                            Imagine a 30-year-old male wanting a ₹1 Crore Life Cover:
                            <br />- **Term Insurance**: Premium is approx. **₹12,000 to ₹15,000 per year.**
                            <br />- **ULIP/Endowment**: To get ₹1 Crore cover, the premium would be approx. **₹8 Lakhs to ₹10 Lakhs per year.**
                        </p>
                        <p className="font-bold underline decoration-indigo-600 underline-offset-4 italic-selection italic">Who has ₹10 Lakhs spare every year? Most people buy a ULIP with ₹1 Lakh premium and think they are "Safe"—but their cover is only ₹10 Lakhs. That won't even cover 2 years of house rent for their family.</p>

                        <h2 id="charges" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Mortality Charges: The Hidden Killer</h2>
                        <p>
                            In a ULIP, you think your full ₹1 Lakh is being invested. **False.**
                            <br />Every month, the bank deducts "Mortality Charges" to provide you that ₹10 Lakh life cover. As you get older, these charges increase. By the time you are 50, a huge chunk of your premium is just going into these charges, leaving very little for the actual investment to grow.
                        </p>

                        <h2 id="lockin" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-indigo-600">3. Lock-ins & Liquidity</h2>
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-10 italic-selection font-medium italic italic-selection">
                            "ULIPs have a 5-year mandatory lock-in. If you need money for an emergency in Year 3, you're stuck. With Term Insurance + Mutual Funds, you pay your ₹1k monthly premium and your MF can be sold and money hits your bank in 48 hours. Total control resides with you."
                        </div>

                        <h2 id="combo" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. The Winning Combo: BTIR</h2>
                        <p>
                            Instead of one expensive product, split your money:
                        </p>
                        <ul className="space-y-6 my-10 list-none p-0">
                            {[
                                { t: "The Protection Pillar", d: "Buy a ₹1 Crore Pure Term Plan. It costs less than a Weekend trip but safeguards your family for 40 years." },
                                { t: "The Growth Pillar", d: "Invest the remaining amount in a Nifty 50 Index Fund or Flexi-cap Fund. No mortality charges, lower fees, better growth." },
                                { t: "The Tax Pillar", d: "Both give tax benefits (Term under 80C, MF via LTCG limits). You don't lose anything on the tax front." }
                            ].map((pillar, idx) => (
                                <li key={idx} className="flex gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                                    <span className="text-indigo-600 font-black">P-{idx+1}.</span>
                                    <div>
                                        <strong className="block text-slate-900 mb-1">{pillar.t}</strong>
                                        <span className="text-slate-500 text-sm font-medium">{pillar.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="my-24 p-14 bg-indigo-600 rounded-[4rem] text-white text-center shadow-3xl shadow-indigo-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Invest with clarity.</h3>
                                <p className="text-indigo-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">See how much wealth you can build by investing the money you'd otherwise 'waste' on high-premium policies.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-12 py-6 bg-white text-indigo-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Check Potential Growth →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic text-indigo-900 italic-selection">Insurance Duel FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
