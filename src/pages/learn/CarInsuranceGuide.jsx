import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function CarInsuranceGuide() {
    const faqData = [
        {
            question: "What is IDV in car insurance?",
            answer: "IDV (Insured Declared Value) is the maximum amount the insurance company will pay if your car is stolen or totally destroyed. It is basically the current market value of your car. Setting it too high increases your premium unnecessarily, and setting it too low puts you at a loss."
        },
        {
            question: "Is Zero-Depreciation insurance worth it?",
            answer: "Highly recommended for cars up to 5 years old. In regular insurance, banks deduct 'depreciation' on parts (50% on plastic, 30% on fiber). In Zero-dep, the insurer pays the full cost of replacing parts, saving you thousands during a claim."
        },
        {
            question: "What is a No Claim Bonus (NCB)?",
            answer: "NCB is a reward for not making a claim in a policy year. It starts at 20% and can go up to 50% discount on your premium. If you make even a small claim (e.g. ₹2,000 for a scratch), you lose the entire NCB, which could be worth ₹10,000 in savings!"
        },
        {
            question: "What does 'Return to Invoice' cover mean?",
            answer: "In case of theft or total loss, a standard policy only pays the IDV (market value). RTI cover ensures you get the FULL amount mentioned in your original purchase invoice, including registration and taxes."
        },
        {
            question: "Does insurance cover engine damage in floods?",
            answer: "Standard insurance DOES NOT cover engine damage due to water ingression (Hydrostatic lock). You need an 'Engine Protect' add-on for this, which is highly recommended for people in flood-prone cities like Mumbai or Chennai."
        }
    ];

    const toc = [
        { id: "idv", title: "IDV: Setting the Right Value" },
        { id: "zerodep", title: "Zero-dep: Bumper to Bumper Math" },
        { id: "ncb", title: "NCB: The 50% Discount Hack" },
        { id: "add-ons", title: "Add-ons: RTI, Engine, & Consumables" },
        { id: "claims", title: "Small Claim vs NCB: Should you claim?" },
        { id: "faq", title: "Car Insurance FAQ" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Auto Protection</h4>
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
                                "Insurance is like a parachute. You don't need it every day, but when you do, it better be of the right size and type. Choosing the wrong IDV is like jumping with a handkerchief."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-blue-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-blue-50 rounded">Daily Mastery 2025</span>
                                <span>•</span>
                                <span>14 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Car Insurance: IDV, <span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-8">Zero-dep</span>, & NCB Hacks
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Renewing your car insurance? Don't just click 'Renew' on the same policy. Understanding IDV and add-ons can save you ₹5,000 in premium and ₹50,000 in claims.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-blue-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                                The Insurance Cheat-Sheet
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">IDV Strategy</p>
                                    <p className="text-3xl font-black text-white italic italic-selection italic-selection">Market Value</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium italic-selection">Always set IDV within 5% of actual market value. Don't over-insure a depreciating asset.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic text-blue-400">Zero-Dep</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">Bumper 2 Bumper</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Must-have for 0-5 yr old cars. Pays 100% of plastic/fiber parts replacement.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">NCB Hack</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">Up to 50% Off</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Don't claim for repairs under ₹5,000. Use your NCB discount to save more on premium.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            In India, car insurance is secondary to the fear of traffic police. But insurance isn't just a document for the challan—it is a financial product that protects your second-most expensive asset (after your house).
                        </p>
                        
                        <p>
                            **The Renewal Mistake**: Most people let the agent decide the IDV. If the IDV is too low, and your car is stolen, you'll lose lakhs. If it's too high, you're just paying the bank for a payout you'll never receive.
                        </p>

                        <h2 id="idv" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. IDV: Finding the 'Goldilocks' Value</h2>
                        <p>
                            IDV is the 'Sum Insured' for your car. 
                            <br />- **Market Reality**: If you can sell your car for ₹6 Lakhs, set the IDV at ₹6 Lakhs. 
                            <br />- **The Trap**: Insurance portals often show 'Lowest Premium' by dropping the IDV to ₹4.5 Lakhs. If you buy that, you are saving ₹500 in premium but risking a ₹1.5 Lakh loss during a total claim.
                        </p>

                        <h2 id="zerodep" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Zero-dep: Bumper-to-Bumper Explanation</h2>
                        <p>
                            In a standard policy, if you break a plastic bumper costing ₹10,000:
                            <br />- **Plastic Depreciation**: 50%.
                            <br />- **Insurer Pays**: ₹5,000.
                            <br />- **You Pay**: ₹5,000 + File Charges.
                            <br />**With Zero-Dep**: The insurer pays the full ₹10,000 (minus the standard ₹1,000-₹2,000 file charge).
                        </p>

                        <h2 id="ncb" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-blue-600">3. NCB: The 50% Discount Hack</h2>
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-10 italic-selection font-medium italic italic-selection">
                            "If you don't claim for 5 years, you get a 50% discount on the 'Own Damage' premium. This is massive. If your premium is ₹20k, NCB saves you ₹10k. If you have a small bumper scratch that costs ₹3k to fix, DO NOT claim. Pay it from your pocket and save the ₹10k NCB for your next renewal."
                        </div>

                        <h2 id="add-ons" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. Add-ons: The Three Essentials</h2>
                        <ul className="space-y-6 my-10 list-none p-0">
                            {[
                                { t: "Engine Protect", d: "Must-have if you live in Mumbai, Delhi, or Chennai. Covers 'engine seizure' due to water logging." },
                                { t: "Consumables Cover", d: "Covers the cost of Engine Oil, Coolant, Nuts, and Bolts during a repair. These can add up to ₹3,000-₹5,000." },
                                { t: "RTI (Return to Invoice)", d: "Ensures you get back Every Rupee you paid while buying (on-road price) if the car is stolen." }
                            ].map((addon, idx) => (
                                <li key={idx} className="flex gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                                    <span className="text-blue-600 font-black">+</span>
                                    <div>
                                        <strong className="block text-slate-900 mb-1">{addon.t}</strong>
                                        <span className="text-slate-500 text-sm font-medium">{addon.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="my-24 p-14 bg-blue-600 rounded-[4rem] text-white text-center shadow-3xl shadow-blue-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Drive with confidence.</h3>
                                <p className="text-blue-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Did you buy a car on loan? See how much you are paying in interest compared to your insurance premium.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.LOAN.CAR} className="px-12 py-6 bg-white text-blue-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Check Car Loan Math →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic text-blue-900 italic-selection">Car Insurance FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
