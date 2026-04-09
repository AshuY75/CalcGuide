import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function VillageInterestMath() {
    const faqData = [
        {
            question: "What is '₹2 interest per month' in annual percentage?",
            answer: "₹2 per ₹100 per month is 2% monthly interest. This translates to 24% per year (Simple Interest). If it's compounded monthly, it becomes nearly 26.8% per year (APY)."
        },
        {
            question: "Why do village lenders use monthly rates instead of annual?",
            answer: "Monthly rates sound smaller. Telling someone the rate is '2 Rupees' sounds cheaper than saying '24% Yearly'. It's a psychological tactic to make expensive debt look affordable."
        },
        {
            question: "What is the Kisan Credit Card (KCC) interest rate?",
            answer: "The base rate for KCC is around 9%. However, the Govt offers a 2% subvention (discount) and another 3% for prompt repayment. This brings your effective rate down to just 4% per year—much lower than any local lender."
        },
        {
            question: "Is compound interest common in village lending?",
            answer: "Yes, it is often called 'Byaaj ka Byaaj' or 'Chakravati Sood'. Lenders often add the unpaid monthly interest to the principal, causing the debt to spiral out of control within 2-3 years."
        },
        {
            question: "Are agreement papers with money lenders legally valid?",
            answer: "In most Indian states, money lenders MUST have a license under the State Moneylending Act. If a lender is unlicensed and charging exorbitant rates (above legal limits), the court can strike down the interest part of the contract."
        }
    ];

    const toc = [
        { id: "intro", title: "The '₹2 Saikda' Language" },
        { id: "conversion", title: "Converting Monthly to Yearly" },
        { id: "trap", title: "The 'Byaaj ka Byaaj' (Compound) Trap" },
        { id: "comparison", title: "Bank (KCC) vs. Sahukar" },
        { id: "legal", title: "Your Legal Rights in 2025" },
        { id: "faq", title: "Village Loan FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Rural Finance</h4>
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
                                "Interest in the city is a percentage. Interest in the village is a burden that passes through generations. Don't sign anything until you've done the annual math."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-orange-600 hover:prose-a:text-orange-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-orange-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-orange-50 rounded">Local Economics</span>
                                <span>•</span>
                                <span>18 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Village Interest Math: Understanding <span className="text-orange-600 underline decoration-orange-200 decoration-8 underline-offset-8">'Sood' and 'Vaddi'</span> in 2025
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                In rural India, loans aren't talked about in percentages. They talk about "Rupees per month". Here is why that's a dangerous trap and how to calculate the real burden.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-orange-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></span>
                                The "Rupee" Rate Matrix
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic text-orange-400">₹1 per ₹100</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">12% Yearly</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Standard rate for trusted relatives or low-risk hand loans.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic text-orange-400">₹2 per ₹100</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">24% Yearly</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">The most common 'Sahukari' rate in Haryana and Punjab.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">₹5 per ₹100</p>
                                    <p className="text-3xl font-black text-rose-400 italic">60% Yearly</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Purely predatory. Borrowed only in extreme emergencies.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            If you go to a bank, they tell you the ROI is **9% Per Annum**. But if you go to a local money-lender in the Mandi, they will say the rate is **₹2 per month**. 
                        </p>
                        
                        <p>
                            **The Hook**: ₹2 sounds much smaller than 24%. It's a linguistic trick that has kept millions of Indian farmers in a debt trap for generations. 
                        </p>

                        <h2 id="conversion" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. Converting Monthly to Yearly: The Real Shock</h2>
                        <p>
                            The formula is simple: **(Rupee Rate) x 12 = Annual Rate**.
                        </p>
                        <ul className="space-y-6 my-10 list-none p-0">
                            {[
                                { t: "₹1.5 Interest", d: "18% Per Year. Close to private bank personal loan rates." },
                                { t: "₹2.0 Interest", d: "24% Per Year. Double the cost of a standard bank loan." },
                                { t: "₹3.0 Interest", d: "36% Per Year. Higher than most high-interest credit cards." }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                                    <span className="text-orange-600 font-black">M-0{idx+1}.</span>
                                    <div>
                                        <strong className="block text-slate-900 mb-1">{item.t}</strong>
                                        <span className="text-slate-500 text-sm font-medium">{item.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <h2 id="trap" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. The 'Byaaj ka Byaaj' (Compound) Trap</h2>
                        <p>
                            In cities, if you miss an EMI, you pay a 'Late Fee'. In villages, if you miss a month's interest, the lender adds that interest back into your principal.
                        </p>
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-10 italic-selection font-medium italic italic-selection">
                            "If you take ₹1,00,000 at ₹3 interest and don't pay anything for a year, your principal doesn't stay at ₹1,00,000. It becomes nearly ₹1,42,000 because of the monthly compounding. This is how land is lost—not in one day, but through the silent math of compounding."
                        </div>

                        <h2 id="comparison" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-orange-600">3. Bank (KCC) vs. Sahukar</h2>
                        <p>
                            If you have agricultural land, your first priority should be the **Kisan Credit Card (KCC)**.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 my-10 not-prose font-inter">
                            <div className="p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 border-l-8 border-l-emerald-600">
                                <h4 className="text-xl font-black text-emerald-900 mb-4 italic text-emerald-700 underline underline-offset-4">KCC Bank Loan</h4>
                                <ul className="list-none p-0 space-y-2 text-sm text-emerald-800 font-bold">
                                    <li>- Effective Rate: **4% - 7% PA**</li>
                                    <li>- Legal Protection: High</li>
                                    <li>- Reputation: Safe</li>
                                </ul>
                            </div>
                            <div className="p-10 bg-rose-50 rounded-[2.5rem] border border-rose-100 border-l-8 border-l-rose-600">
                                <h4 className="text-xl font-black text-rose-900 mb-4 italic text-rose-700 underline underline-offset-4">Private Sahukar</h4>
                                <ul className="list-none p-0 space-y-2 text-sm text-rose-800 font-bold">
                                    <li>- Effective Rate: **24% - 40% PA**</li>
                                    <li>- Legal Protection: Uncertain</li>
                                    <li>- Reputation: High Risk</li>
                                </ul>
                            </div>
                        </div>

                        <h2 id="legal" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. Your Legal Rights in 2025</h2>
                        <p>
                            Did you know that unlicensed money lending is a crime in many states?
                            - **Moneylending Acts**: Every state has a limit on the maximum interest a private individual can charge. If you are being charged ₹10 interest, that's likely illegal.
                            - **Interest Capping**: Courts in India have the power to reduce the interest to "Reasonable Limits" (around 12-15%) if the lender is found to be predatory.
                        </p>

                        <div className="my-24 p-14 bg-orange-600 rounded-[4rem] text-white text-center shadow-3xl shadow-orange-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-orange-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Know your real interest.</h3>
                                <p className="text-orange-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Use our Village Interest Tool to calculate simple and compound 'Sood' for any amount and duration.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.LOAN.VILLAGE_INTEREST} className="px-12 py-6 bg-white text-orange-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Open Interest Tool 🚜
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic text-orange-900 italic-selection">Rural Lending FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
