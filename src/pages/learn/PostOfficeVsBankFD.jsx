import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function PostOfficeVsBankFD() {
    const faqData = [
        {
            question: "Is Post Office FD safer than a Bank FD?",
            answer: "Technically, yes. Post Office schemes are backed by the Sovereign Guarantee of the Government of India (unlimited safety). Bank FDs are insured by DICGC up to ₹5 Lakh per bank per person. For amounts below 5L, both are equally safe; for larger amounts, the Post Office has a slight edge in absolute safety."
        },
        {
            question: "Do Post Office FDs have TDS?",
            answer: "No, the Post Office does not deduct TDS (Tax Deducted at Source) on the interest earned in Time Deposits (FDs). However, the interest is still taxable as per your income tax slab. You must report it yourself while filing your ITR."
        },
        {
            question: "Can I open a Post Office FD online?",
            answer: "If you have an IPPB (India Post Payments Bank) account and DOP internet banking, you can open it online. However, it is not as seamless as private bank apps (like HDFC or ICICI) where you can open an FD in 30 seconds."
        },
        {
            question: "Which offers higher interest for Senior Citizens?",
            answer: "Currently, small finance banks and some private banks offer up to 8.5% - 9% for senior citizens, which is often higher than the Post Office Senior Citizen Savings Scheme (SCSS) or regular Time Deposits."
        },
        {
            question: "Can I withdraw my Post Office FD before maturity?",
            answer: "Yes, but with penalties. You cannot withdraw before 6 months. If you withdraw after 6 months but before 1 year, you only get savings account interest rates. In Bank FDs, the penalty is usually a 1% reduction in the applicable interest rate."
        }
    ];

    const toc = [
        { id: "safety", title: "Safety: Sovereign vs. DICGC" },
        { id: "returns", title: "Interest Rate Showdown (2025)" },
        { id: "tax", title: "The TDS Advantage of Post Office" },
        { id: "ease", title: "Convenience vs. Hard-Copy Bureaucracy" },
        { id: "senior", title: "Special focus on Senior Citizens" },
        { id: "verdict", title: "The Final Verdict" },
        { id: "faq", title: "FD Comparison FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Debt Category Analysis</h4>
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
                            
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-sm text-slate-600 leading-relaxed shadow-sm">
                                "Bank FDs are for convenience. Post Office FDs are for absolute peace of mind. Both are tools to stay above the water, but not necessarily to swim across the ocean."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-amber-600 hover:prose-a:text-amber-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-amber-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-amber-50 rounded">Safe Investing</span>
                                <span>•</span>
                                <span>15 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Post Office vs Bank FD: Which is the <span className="text-amber-600 underline decoration-amber-200 decoration-8 underline-offset-8">Safest Vault</span> for 2025?
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                If you have ₹10 Lakhs to park for 3 years, do you trust your friendly neighborhood Bank Manager or the local Postmaster? The answer isn't as simple as it used to be.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-amber-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></span>
                                The "Stability" Scorecard
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Maximum Safety</p>
                                    <p className="text-3xl font-black text-white italic">Post Office</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Sovereign Guarantee (Unlimited)</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Digital Convenience</p>
                                    <p className="text-3xl font-black text-white italic">Bank FD</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Open/Close in 1 Click</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Tax Headache</p>
                                    <p className="text-3xl font-black text-amber-400 italic">No TDS*</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Post Office won't deduct tax</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-sm">"Bank FDs are great for liquid 'Emergency Funds'. Post Office is better for Senior Citizens' life savings."</p>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.FD} className="px-8 py-4 bg-amber-600 text-white font-black rounded-2xl hover:bg-amber-700 transition-all shadow-lg hover:-translate-y-1">
                                    Compare FD Returns →
                                </Link>
                            </div>
                        </div>

                        <p>
                            In India, Fixed Deposits (FDs) are more than just an investment; they are a cultural emotion. Whether it's the maturity money for a wedding or the monthly interest for the kitchen budget, we rely on them.
                        </p>
                        
                        <p>
                            But with digital-first banks offering 8-9% interest and the government recently boosting Post Office schemes, investors are confused. Let's break down the "Trust vs Interest" duel.
                        </p>

                        <h2 id="safety" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. Safety: Sovereign vs. DICGC Insurance</h2>
                        <p>
                            **Post Office**: When you put money in the Post Office, you are lending money directly to the Government of India. As long as the Indian Government exists, your money is 100% safe. This is called **Sovereign Guarantee**.
                        </p>
                        <p>
                            **Banks**: When you put money in a Bank (SBI, HDFC, or even your local co-operative bank), your safety is capped at **₹5 Lakh**. If the bank fails, the DICGC (RBI subsidiary) will only pay you up to 5L (Principal + Interest).
                        </p>
                        <p className="font-bold text-slate-900 italic italic-selection">The "Advisor" Logic: If you have ₹50 Lakhs, putting it all in one Bank is technically 'risky'. Spreading it across 5 banks or putting it in a Post Office Time Deposit is the smarter move.</p>

                        <h2 id="returns" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Interest Rate Showdown (2025)</h2>
                        <p>
                            Interest rates for FDs have peaked in early 2025.
                        </p>
                        <ul>
                            <li><strong>Post Office (Time Deposit)</strong>: Ranges from 6.9% to 7.5% depending on the tenure (1-5 years).</li>
                            <li><strong>SBI/HDFC</strong>: Usually ranges from 7.00% to 7.30%.</li>
                            <li><strong>Small Finance Banks (Unity, Equitas, AU)</strong>: Can go as high as 8.5% to 9.0%.</li>
                        </ul>
                        <p>
                            Post Office rates are fixed by the Government every quarter. Bank rates are dynamic and can change based on RBI's Repo Rate decisions.
                        </p>

                        <h2 id="tax" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. The TDS Advantage: Why retirees love Post Office</h2>
                        <p>
                            This is the biggest operational difference. 
                        </p>
                        <p>
                            If your Bank FD interest exceeds ₹40,000 in a year (₹50k for seniors), the bank **must deduct 10% TDS**. You then have to file 15G/15H forms to avoid this if your income is below the tax slab.
                        </p>
                        <p>
                            The **Post Office DOES NOT deduct TDS** on Time Deposits. You receive the full interest. You still have to pay tax on it during your ITR filing, but your "Current Cash Flow" is higher. 
                        </p>

                        <div className="my-12 p-10 bg-amber-50 border-4 border-amber-100 rounded-[3rem] shadow-sm not-prose">
                            <h4 className="text-amber-900 font-black text-2xl mb-4 italic">The Bureaucracy Warning</h4>
                            <p className="text-amber-800 leading-relaxed font-medium">
                                Post Office schemes are notorious for paperwork. While things are improving, a withdrawal or a nominee change still often requires a physical visit and multiple signatures. Private banks let you do everything from your couch.
                            </p>
                        </div>

                        <h2 id="ease" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. Convenience vs. Discipline</h2>
                        <p>
                            **Bank FDs**: Best for "Park & Use". You can break a Bank FD instantly on your mobile app and have the money in your savings account in 2 seconds. This makes it perfect for **Emergency Funds**.
                        </p>
                        <p>
                            **Post Office**: Best for "Park & Forget". Because it is harder to withdraw, it acts as a 'Natural Lock-in'. It prevents you from breaking your long-term savings for a weekend trip to Goa.
                        </p>

                        <h2 id="senior" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5. Special focus on Senior Citizens</h2>
                        <p>
                            For Seniors, the **Post Office Senior Citizen Savings Scheme (SCSS)** is almost always better than a regular Bank FD. It offers:
                            - Higher interest (currently 8.2%).
                            - Quarterly interest payouts.
                            - Tax benefit under Section 80C.
                        </p>

                        <div className="my-12 overflow-hidden border border-slate-200 rounded-[2.5rem] shadow-xl not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Feature</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest text-emerald-600">Post Office FD</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest text-blue-600">Bank FD</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="p-8 text-slate-700 font-bold">Safety Level</td>
                                        <td className="p-8 text-slate-900 font-black">100% (Sovereign)</td>
                                        <td className="p-8 text-slate-400 font-medium">Up to ₹5L (DICGC)</td>
                                    </tr>
                                    <tr className="bg-amber-50/20 transition-colors hover:bg-amber-100/30">
                                        <td className="p-8 text-slate-700 font-bold">TDS Deduction</td>
                                        <td className="p-8 text-emerald-600 font-black">NO</td>
                                        <td className="p-8 text-rose-600 font-bold">YES (10%)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-8 text-slate-700 font-bold">Online Access</td>
                                        <td className="p-8 text-slate-400 font-medium italic">Basic / Limited</td>
                                        <td className="p-8 text-blue-600 font-black">Full / Instant</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="my-24 p-14 bg-amber-600 rounded-[4rem] text-white text-center shadow-3xl shadow-amber-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-amber-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Know your exact maturity amount.</h3>
                                <p className="text-amber-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Our FD calculator accounts for quarterly compounding—which is how both banks and PO calculate interest.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.FD} className="px-12 py-6 bg-white text-amber-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Calculate FD Maturity →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-12 py-6 bg-amber-950 text-white font-black rounded-3xl hover:bg-black transition-all border border-amber-400/30">
                                        Check SIP Alternative
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic italic-selection">FD Duel Doubts</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
