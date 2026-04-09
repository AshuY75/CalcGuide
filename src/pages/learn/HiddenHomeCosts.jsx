import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function HiddenHomeCosts() {
    const faqData = [
        {
            question: "How much is the stamp duty and registration in India?",
            answer: "It varies by state. Typically, stamp duty is between 5% and 7% of the property value, and registration is 1%. Many states offer a 1-2% discount if the property is registered in a woman's name."
        },
        {
            question: "Is GST applicable on all property purchases?",
            answer: "No. GST is only applicable on 'Under-construction' properties. If you buy a 'Ready-to-Move' (RTM) house with a Completion Certificate (CC), the GST is 0%."
        },
        {
            question: "What is IFMS?",
            answer: "IFMS stands for Interest-Free Maintenance Security. It is a one-time deposit builders collect for future major repairs. It can range from ₹50,000 to several lakhs depending on the society."
        },
        {
            question: "What are the common hidden costs in luxury projects?",
            answer: "Common hidden costs include club membership fees, electrification charges, water connection charges, preferred location charges (PLC), and fire-fighting charges. These can add 5-10% to the base price."
        },
        {
            question: "How much should I budget for interiors?",
            answer: "For a standard 2-3 BHK, you should budget at least 10-15% of the property value for basic interiors (cupboards, modular kitchen, lighting, and fans)."
        }
    ];

    const toc = [
        { id: "statutory", title: "Statutory Shocks: Stamp & Registration" },
        { id: "gst", title: "The GST Maze: 1% vs. 5%" },
        { id: "society", title: "Society Charges: PLC, IFMS & Clubs" },
        { id: "interiors", title: "The 15% Interior Shadow Cost" },
        { id: "checklist", title: "Total Cost of Acquisition (TCA)" },
        { id: "faq", title: "Hidden Costs FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Home Buying Math</h4>
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
                                "The price on the builder's brochure is a lie. The real price is usually 20-30% higher once you add the government, the society, and the carpenter."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-emerald-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-emerald-50 rounded">First-Time Buyer Guide</span>
                                <span>•</span>
                                <span>18 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Hidden Costs of Buying a Home: Why your <span className="text-emerald-600 underline decoration-emerald-200 decoration-8 underline-offset-8">₹50L budget</span> isn't enough
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                You found your dream flat for ₹50 Lakhs. But do you actually have ₹65 Lakhs? If not, you might find yourself in a financial mess. Here's the math of the 'Invisible' expenses.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-emerald-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                                The "Real Price" Calculator
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Govt. Share</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">~7-9% Extra</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Stamp Duty, Registration, and GST (if applicable).</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Society Share</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">~₹3L - 8L</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">PLC, IFMS, Electrification, and Club Membership.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Interior Share</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">~15% Extra</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Modular kitchen, wardrobes, and electrical fittings.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            In India, property buying is emotional. We see the house, we fall in love, and we look at the "Base Price". However, the base price is just the entry ticket. 
                        </p>
                        
                        <p>
                            **The Shock**: Most first-time buyers realize halfway through the process that they are short by ₹10-15 Lakhs because they didn't account for statutory and ancillary costs.
                        </p>

                        <h2 id="statutory" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. Statutory Shocks: Stamp & Registration</h2>
                        <p>
                            This is the biggest Chunk. You pay this to the state government.
                        </p>
                        <p>
                            - **Stamp Duty**: Ranges from 4% to 7% of the property value (e.g., in Maharashtra, it's 6%; in Haryana, it's 7%).
                            - **Registration Fee**: Usually fixed at 1% of the agreement value (often capped in some states).
                        </p>
                        <p className="font-bold underline text-emerald-700 italic italic-selection">Pro Tip: Always check if registering in a woman's name saves you 1-2%. On a ₹1 Crore house, that's a saving of ₹2 Lakhs—enough for your modular kitchen!</p>

                        <h2 id="gst" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. The GST Maze: 1% vs. 5%</h2>
                        <p>
                            If you are buying an under-construction property, the Central Government wants its share.
                        </p>
                        <ul className="space-y-6 my-10 list-none p-0">
                            {[
                                { t: "Affordable Housing (1%)", d: "Applicable if the property value is below ₹45 Lakhs and the carpet area is below 60sqm (metropolitan) or 90sqm (non-metro)." },
                                { t: "Standard Housing (5%)", d: "Applicable for all other under-construction properties without Input Tax Credit (ITC)." },
                                { t: "Ready-to-Move (0%)", d: "If the builder has the Completion Certificate (CC), GST is ZERO. This is why RTM is often a better deal math-wise." }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                                    <span className="text-emerald-600 font-black">0{idx+1}.</span>
                                    <div>
                                        <strong className="block text-slate-900 mb-1">{item.t}</strong>
                                        <span className="text-slate-500 text-sm font-medium">{item.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <h2 id="society" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-emerald-600">3. Society Charges: The 'Small' Fees that Add Up</h2>
                        <p>Builders use these to recover their 'development' costs. Look for these terms in your allotment letter:</p>
                        <ul>
                            <li>**PLC (Preferred Location Charge)**: Paying extra for a park view, corner flat, or a higher floor. Can be ₹100-₹500 per sqft.</li>
                            <li>**IFMS (Interest-Free Maintenance Security)**: A security deposit for the society. Usually ₹50,000 - ₹2,00,000.</li>
                            <li>**Electrification & Water connection**: One-time charges for power backup and meter installation.</li>
                            <li>**Legal Charges**: The builder's lawyer fees—often ₹25,000 to ₹50,000—which YOU pay.</li>
                        </ul>

                        <h2 id="interiors" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. The 15% Interior Shadow Cost</h2>
                        <p>
                            A builder gives you a "Shell". To make it a "Home", you need:
                            - **Modular Kitchen**: ₹1.5L - 4L.
                            - **Wardrobes**: ₹2L - 5L.
                            - **Fittings & False Ceiling**: ₹1L - 3L.
                            - **White Goods (ACs, Chimney)**: ₹2L.
                        </p>
                        <p>
                            If your house is ₹80 Lakhs, expect to spend at least **₹12 Lakhs** before you can move in. Most people don't budget for this and end up taking a high-interest Personal Loan (15%) for interiors—the worst way to start your home-owning journey.
                        </p>

                        <div className="my-24 p-14 bg-emerald-600 rounded-[4rem] text-white text-center shadow-3xl shadow-emerald-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Know the Total Cost of Acquisition.</h3>
                                <p className="text-emerald-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Our Stamp Duty & Registration tool calculates every single rupee you'll pay beyond the base price.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.REAL_ESTATE.STAMP_DUTY} className="px-12 py-6 bg-white text-emerald-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Calculate Real Cost →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic">Home Buying Fees FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
