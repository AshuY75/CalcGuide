import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function TaxOnInterestGuide() {
    const faqData = [
        {
            question: "Is ₹10,000 exemption available for FD interest?",
            answer: "No. For non-senior citizens (below 60), Section 80TTA only provides a deduction up to ₹10,000 for interest earned on 'Savings Accounts'. Interest from Fixed Deposits (FD) or Recurring Deposits (RD) is fully taxable at your slab rate."
        },
        {
            question: "What is Section 80TTB for Senior Citizens?",
            answer: "Section 80TTB allows senior citizens (60+) to claim a deduction of up to ₹50,000 on 'all types' of interest income, including Savings, FDs, and RDs. They cannot claim 80TTA separately."
        },
        {
            question: "How much TDS does the bank deduct on FD?",
            answer: "Banks deduct 10% TDS if your annual FD interest exceeds ₹40,000 (₹50,000 for senior citizens). If you haven't provided your PAN card, the TDS rate jumps to 20%."
        },
        {
            question: "What are Form 15G and Form 15H?",
            answer: "These are self-declaration forms you submit to the bank to prevent TDS. Use 15G if you are below 60 and your total income is below the tax limit. Use 15H if you are a senior citizen."
        },
        {
            question: "Is savings account interest from Post Office tax-free?",
            answer: "Interest from a Post Office Savings account is exempt up to ₹3,500 for an individual account (₹7,000 for a joint account) under Section 10(15). This is *over and above* the 80TTA deduction."
        }
    ];

    const toc = [
        { id: "savings", title: "Savings Account: The ₹10,000 Exemption" },
        { id: "fd", title: "FD & RD: The 100% Taxable Zone" },
        { id: "senior", title: "Senior Citizens: The 80TTB Advantage" },
        { id: "tds", title: "TDS Math: 10% vs 20% vs 15G/H" },
        { id: "accrual", title: "Accrual vs. Receipt: The Tax Timing" },
        { id: "faq", title: "Interest Tax FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Passive Income Tax</h4>
                                <nav className="space-y-3">
                                    {toc.map(item => (
                                        <a 
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="block text-sm font-bold text-slate-500 hover:text-amber-600 transition-colors"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            
                            <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 italic text-sm text-amber-900 leading-relaxed shadow-sm">
                                "The bank only deducts 10% TDS, but if you are in the 30% slab, you still owe the government another 20%. Don't wait for a notice to find out."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-amber-600 hover:prose-a:text-amber-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-amber-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-amber-50 rounded">Assessment Year 2025-26</span>
                                <span>•</span>
                                <span>16 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Tax on Interest Income: Decoding <span className="text-amber-600 underline decoration-amber-200 decoration-8 underline-offset-8">80TTA, 80TTB</span> & FD TDS
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Markets change, but interest is forever. Or at least until the taxman takes his cut. Here is how to keep your interest income (legally) out of the line of fire.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-amber-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></span>
                                The Interest Matrix
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">Below 60 Years (80TTA)</p>
                                    <p className="text-3xl font-black text-white italic">₹10,000</p>
                                    <p className="text-[10px] text-slate-400 mt-3 font-medium">Only for Savings Accounts. FDs are fully taxable.</p>
                                </div>
                                <div className="border-l border-slate-800 md:pl-16">
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">Senior Citizens (80TTB)</p>
                                    <p className="text-3xl font-black text-amber-400 italic">₹50,000</p>
                                    <p className="text-[10px] text-slate-400 mt-3 font-medium">Includes Savings + FD + RD interest. Huge shield.</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-sm">"Interest income often goes hidden until you see your Form 26AS. Be proactive."</p>
                                <Link to={ROUTES.CALCULATORS.TAX.INCOME} className="px-8 py-4 bg-amber-600 text-white font-black rounded-2xl hover:bg-amber-700 transition-all shadow-lg hover:-translate-y-1">
                                    Is my Interest Taxed? →
                                </Link>
                            </div>
                        </div>

                        <p>
                            Most Indians think: "If the bank hasn't deducted TDS, I don't need to pay tax." **This is the single most dangerous myth in personal finance.** TDS is just an advance payment; your actual tax liability is decided by your tax slab.
                        </p>
                        
                        <p>
                            Whether it's the 3% interest from your savings account or the 7.5% from that special FD, the government wants its share. Let's break down the two sections that provide you some relief.
                        </p>

                        <h2 id="savings" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. Section 80TTA: The Savings Shield</h2>
                        <p>
                            Section 80TTA is for individuals and HUFs below the age of 60. It allows a deduction of up to **₹10,000** on interest earned from savings accounts with:
                            - Banks (Private or Public)
                            - Co-operative Banks
                            - Post Office
                        </p>
                        <p className="font-bold text-rose-600 underline">WARNING: Section 80TTA does NOT apply to interest from Fixed Deposits (FDs) or Recurring Deposits (RDs).</p>
                        <p>
                            If you have ₹15,000 in savings interest, you subtract ₹10,000 (exemption) and pay tax on the remaining ₹5,000 at your slab rate.
                        </p>

                        <h2 id="fd" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. FD & RD: The 100% Taxable Zone</h2>
                        <p>
                            For a 30-year-old software engineer, interest from a ₹10 Lakh FD is treated exactly like their salary. It is added to your total income and taxed at your marginal rate (typically 20% or 30%).
                        </p>
                        <p>
                            There is no 80TTA for FDs. This is why many investors prefer **Debt Mutual Funds** or **Arbitrage Funds**, because they offer better tax efficiency than FDs for high-slab earners.
                        </p>

                        <h2 id="senior" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">3. Senior Citizens: The 80TTB Umbrella</h2>
                        <p>
                            Once you turn 60, the government becomes much kinder. Section 80TTB replaces 80TTA.
                        </p>
                        <ul>
                            <li>**Limit**: ₹50,000 per financial year.</li>
                            <li>**Scope**: Includes Savings interest, FD interest, and RD interest.</li>
                        </ul>
                        <p>
                            If a senior citizen has ₹40,000 in FD interest and ₹5,000 in savings interest, their total interest is ₹45,000. Since it's below ₹50,000, they pay **ZERO tax** on this interest.
                        </p>

                        <h2 id="tds" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. TDS Math: 10% vs 20% vs 15G/H</h2>
                        <p>
                            Banks are required to deduct TDS (Tax Deducted at Source) when your interest across all branches of that bank exceeds ₹40,000 (₹50,000 for seniors).
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
                            <div className="p-10 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-sm">
                                <h4 className="text-xl font-black text-slate-900 mb-4">With PAN</h4>
                                <p className="text-4xl font-black text-amber-500 italic mb-4">10% TDS</p>
                                <p className="text-xs text-slate-500 font-medium">Standard deduction by the bank.</p>
                            </div>
                            <div className="p-10 bg-rose-50 border-2 border-rose-100 rounded-[2.5rem] shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 bg-rose-500 text-white text-[8px] font-black uppercase tracking-widest italic">Penalty Rate</div>
                                <h4 className="text-xl font-black text-slate-900 mb-4">Without PAN</h4>
                                <p className="text-4xl font-black text-rose-600 italic mb-4">20% TDS</p>
                                <p className="text-xs text-rose-800 font-medium italic">If your bank doesn't have your PAN on file.</p>
                            </div>
                        </div>

                        <h2 id="accrual" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">5. Accrual vs. Receipt: The Tax Timing</h2>
                        <p>
                            This is the most technical part. If you have a 5-year FD, do you pay tax only when it matures in Year 5? 
                        </p>
                        <p>
                            **No.** You must pay tax on the interest **every year** as it "accrues" (grows). Even if you haven't received the cash in your hand, if the bank has credited interest to your FD account, it is taxable in that financial year.
                        </p>

                        <div className="my-24 p-14 bg-amber-600 rounded-[4rem] text-white text-center shadow-3xl shadow-amber-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-amber-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Your money shouldn't just sit there.</h3>
                                <p className="text-amber-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Our tax estimator automatically calculates your 80TTA and 80TTB coverage based on your age and interest income.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.TAX.INCOME} className="px-12 py-6 bg-white text-amber-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Check My Tax →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-12 py-6 bg-amber-950 text-white font-black rounded-3xl hover:bg-black transition-all border border-amber-400/30">
                                        Beat Inflation Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic">Interest Taxation FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
