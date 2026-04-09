import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function TaxHarvestingGuide() {
    const faqData = [
        {
            question: "What is Tax Harvesting in Mutual Funds?",
            answer: "Tax harvesting is the practice of selling your mutual fund units to 'realize' your capital gains and immediately buying them back. This resets your purchase price to a higher level, effectively using your annual tax-free limit (₹1.25 Lakh) so you don't pay 12.5% tax on that amount in the future."
        },
        {
            question: "Is Tax Harvesting legal?",
            answer: "Yes, it is perfectly legal. There is no law in India that prevents you from selling your assets and buying them back. This is considered legitimate tax planning, not tax evasion."
        },
        {
            question: "Can I buy back the same fund immediately?",
            answer: "Yes. Unlike some countries that have 'Wash Sale' rules (like the US), India does not require any waiting period. You can sell at 11:00 AM and buy back at 11:05 AM."
        },
        {
            question: "What is the new LTCG limit in 2025?",
            answer: "As per the 2024-25 Union Budget, the tax-free limit for Long Term Capital Gains (LTCG) on equity has been increased from ₹1 Lakh to ₹1.25 Lakh per financial year. The tax rate for gains above this limit is now 12.5%."
        },
        {
            question: "Can I harvest losses as well?",
            answer: "Yes! If you have stocks or funds that are in a loss, you can sell them to 'realize' the loss. This loss can be used to set off (reduce) your taxable gains, thereby reducing your total tax liability."
        }
    ];

    const toc = [
        { id: "concept", title: "The Concept: Realizing vs. Notional" },
        { id: "limit", title: "The ₹1.25 Lakh Free Gift" },
        { id: "math", title: "The Math: Saving ₹15,625" },
        { id: "loss", title: "Harvesting Losses (Loss Set-off)" },
        { id: "steps", title: "Step-by-Step Harvesting Guide" },
        { id: "faq", title: "Tax Harvesting FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Tax Strategy</h4>
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
                            
                            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 italic text-sm text-emerald-700 leading-relaxed shadow-sm">
                                "The government gives you a ₹1.25 Lakh tax-free voucher every year. If you don't use it by March 31st, it expires forever. Tax harvesting is just you claiming that voucher."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-emerald-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-emerald-50 rounded">LTCG Strategy</span>
                                <span>•</span>
                                <span>20 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Tax Harvesting 101: How to Save <span className="text-emerald-600 underline decoration-emerald-200 decoration-8 underline-offset-8">₹15,625</span> Legitimately Every Year
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Markets went up? Great! But don't let the taxman take a larger bite than necessary. In 2025, Tax Harvesting is the single most important 'Zero-Cost' investment move you can make.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-emerald-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                                The "Free Money" Calculation
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                                <div>
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">The LTCG Rule (Post-2024 Budget)</p>
                                    <p className="text-3xl font-black text-white italic">₹1.25 Lakh Exempt</p>
                                    <p className="text-xs text-slate-400 mt-3 font-medium">Every FY, you can realize ₹1.25L profit on Equity without paying 1 paisa tax.</p>
                                </div>
                                <div className="border-l border-slate-800 md:pl-16">
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">Your Annual Savings</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">₹15,625 saved</p>
                                    <p className="text-xs text-slate-400 mt-3 font-medium">12.5% of ₹1.25L = the tax you save by resetting your buy-average every year.</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-sm">"If you hold for 10 years without harvesting, you pay tax on 10 years of gains. If you harvest, you pay almost zero."</p>
                                <a href="#steps" className="px-8 py-4 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-700 transition-all shadow-lg hover:-translate-y-1">
                                    Show Me the Steps →
                                </a>
                            </div>
                        </div>

                        <p>
                            We Indians are careful with money. We look for discounts on Amazon, we negotiate with the sabzi-wala, and we search for the highest FD rates. But when it comes to stock market taxes, we are incredibly lazy. 
                        </p>
                        
                        <p>
                            Most people just buy a mutual fund and let it sit for 10 years. They think they are being "Long-term investors". While that is good for the market, it is **terrible for taxes**. Why? Because of the way Long Term Capital Gains (LTCG) are calculated.
                        </p>

                        <h2 id="concept" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. Realized vs. Notional: The Tax Trigger</h2>
                        <p>
                            The Income Tax Department only cares about money that is "Realized". 
                        </p>
                        <ul>
                            <li><strong>Notional Gain</strong>: You bought for ₹100, price is now ₹150. You haven't sold yet. Gain is ₹50, but **Tax is Zero**.</li>
                            <li><strong>Realized Gain</strong>: You bought for ₹100, price is ₹150. You SELL. The ₹50 gain is now "Realized". **Tax is triggered.**</li>
                        </ul>
                        <p>
                            Tax Harvesting is the art of **intentionally triggering** that tax when you don't have to pay it (because you're under the limit), so you don't have a giant tax bill in the future.
                        </p>

                        <h2 id="limit" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. The ₹1.25 Lakh "Free Voucher"</h2>
                        <p>
                            In the 2024-25 Union Budget, the government increased the LTCG exemption limit from ₹1 Lakh to **₹1.25 Lakh**. 
                        </p>
                        <p>
                            This limit is **per financial year** and it follows the "Use it or Lose it" principle. If you don't realize ₹1.25L of profit by March 31st, 2025, that "tax-free" quota for the year vanishes. You cannot carry it forward to 2026.
                        </p>

                        <h2 id="math" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. The Math: How you save ₹15,625</h2>
                        <p>
                            Let's compare two investors: **Lazy Rahul** and **Smart Smita**. Both invest ₹10 Lakhs which grows to ₹20 Lakhs over 5 years.
                        </p>
                        
                        <div className="my-12 overflow-hidden border border-slate-200 rounded-[2.5rem] shadow-xl not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest text-selection-amber">Scenario</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest text-rose-600">Lazy Rahul (No Harvesting)</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest text-emerald-600">Smart Smita (Harvests every year)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 italic-selection">
                                    <tr>
                                        <td className="p-8 text-slate-700 font-bold">Buy Price</td>
                                        <td className="p-8 text-slate-900 font-medium">₹10 Lakhs</td>
                                        <td className="p-8 text-slate-900 font-medium">₹10 Lakhs</td>
                                    </tr>
                                    <tr>
                                        <td className="p-8 text-slate-700 font-bold">Annual Harvest</td>
                                        <td className="p-8 text-rose-500 font-black italic">NONE</td>
                                        <td className="p-8 text-emerald-600 font-black italic">Sells & Rebuys ₹1.25L profit annually</td>
                                    </tr>
                                    <tr className="bg-slate-50 font-black">
                                        <td className="p-8 text-slate-900 font-bold">New Cost Basis (after 5 yrs)</td>
                                        <td className="p-8 text-rose-600">₹10 Lakhs</td>
                                        <td className="p-8 text-emerald-600">₹16.25 Lakhs</td>
                                    </tr>
                                    <tr className="bg-emerald-50 text-emerald-900">
                                        <td className="p-8 font-black text-lg underline">Tax Paid on ₹20L Exit</td>
                                        <td className="p-8 font-black text-lg text-rose-700">₹1,09,375</td>
                                        <td className="p-8 font-black text-lg text-emerald-700 italic">₹31,250</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-center font-bold text-slate-500 italic mb-10">By doing 5 minutes of work every year, Smita saved **₹78,125** in taxes.</p>

                        <h2 id="loss" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">4. Tax Loss Harvesting: The Silver Lining in a Crash</h2>
                        <p>
                            What if the market is down? You can still harvest.
                        </p>
                        <p>
                            If you have a fund that is down by ₹50,000, you can sell it and "book" the loss. This loss can be used to **offset** profits from other funds.
                        </p>
                        <p className="bg-slate-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden shadow-2xl mt-12 mb-12 italic-selection">
                            <span className="block text-emerald-400 font-black uppercase text-xs mb-4">Golden Rule</span>
                            "Long Term Capital Loss can only offset Long Term Capital Gains. But Short Term Capital Loss can offset BOTH Short Term and Long Term Gains."
                        </p>

                        <h2 id="steps" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5. Step-by-Step Harvesting Guide</h2>
                        <ol className="space-y-8 my-16">
                            {[
                                { t: "Check your Portfolio Statement", d: "Go to your broker (Zerodha/Groww/CAMS) and check 'Unrealized LTCG'. Look for gains that have crossed 1 year of holding." },
                                { t: "Calculate the Sell Amount", d: "Identify units whose total profit is close to ₹1.25 Lakhs. You don't have to sell everything—just enough to hit the limit." },
                                { t: "Sell & Buy Back", d: "Sell the units. Wait for the confirmation. Re-invest the entire amount (Principal + Gain) back into the same or a similar fund immediately." },
                                { t: "Account for Exit Load & STT", d: "Ensure you have held the units for more than 1 year to avoid 'Exit Load' and to qualify for the 12.5% LTCG rate instead of the 20% STCG rate." }
                            ].map((step, idx) => (
                                <li key={idx} className="flex gap-8 group">
                                    <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 mb-2 italic">{step.t}</h4>
                                        <p className="text-slate-600 text-lg leading-relaxed font-medium italic-selection">{step.d}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className="my-24 p-14 bg-emerald-600 rounded-[4rem] text-white text-center shadow-3xl shadow-emerald-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Stop leaking money to Taxes.</h3>
                                <p className="text-emerald-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Use our capital gains calculator to see exactly how much you stand to save this March.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.TAX.INCOME} className="px-12 py-6 bg-white text-emerald-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Tax Calculator →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic italic-selection">Harvesting Doubts</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
