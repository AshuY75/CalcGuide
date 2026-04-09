import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function HealthInsuranceParents() {
    const faqData = [
        {
            question: "Is there an age limit for buying health insurance for parents?",
            answer: "While many plans limit entry at 65 or 70, specialized Senior Citizen plans have no upper age limit for entry. However, the premium increases significantly as age increases."
        },
        {
            question: "What is Co-payment in senior citizen plans?",
            answer: "Co-payment is a clause where the policyholder agrees to pay a fixed percentage (usually 10% to 20%) of the total hospital bill, while the insurer pays the rest. This helps in reducing the annual premium."
        },
        {
            question: "How long is the waiting period for pre-existing diseases?",
            answer: "For parents, waiting periods can range from 2 to 4 years for diseases like Diabetes or Hypertension. Some plans offer a 'PED Waiver' for an extra premium, covering them from Day 1."
        },
        {
            question: "How much tax can I save by paying parents' insurance premium?",
            answer: "Under Section 80D, you can claim a deduction of up to ₹50,000 for parents' health insurance premium (if they are senior citizens). This is in addition to the ₹25,000 deduction for your own family."
        },
        {
            question: "Should I buy a separate policy for Mom and Dad?",
            answer: "Yes, it is often better to buy separate policies or a 'Multi-individual' policy rather than a 'Family Floater'. This ensures that a claim by one parent doesn't exhaust the cover for the other."
        }
    ];

    const toc = [
        { id: "waiting", title: "PED Waiting Periods: The 2-Year Rule" },
        { id: "copay", title: "Co-payment: The 20% Trap" },
        { id: "restoration", title: "Restoration Benefits & Limits" },
        { id: "opd", title: "OPD: Handling the Doctor's Fees" },
        { id: "80d", title: "Section 80D: Your ₹50k Gift" },
        { id: "faq", title: "Parental Health FAQ" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Medical Strategy</h4>
                                <nav className="space-y-3">
                                    {toc.map(item => (
                                        <a 
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="block text-sm font-bold text-slate-500 hover:text-rose-600 transition-colors"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            
                            <div className="p-6 bg-rose-50 rounded-2xl border border-rose-100 italic text-sm text-rose-800 leading-relaxed shadow-sm italic-selection">
                                "Our parents didn't have health insurance; they had us. In 2025, with medical inflation at 14%, being 'there' for them isn't enough—you need a solid financial shield to protect their dignity during illness."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-rose-600 hover:prose-a:text-rose-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-rose-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-rose-50 rounded">Family Protection 2025</span>
                                <span>•</span>
                                <span>18 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Health Insurance for Parents: Don't let <span className="text-rose-600 underline decoration-rose-200 decoration-8 underline-offset-8">Co-pay Win</span>
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Buying health insurance for parents is 10x harder than buying it for yourself. Between waiting periods and co-payments, here is how to pick a plan that actually pays when needed.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-rose-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></span>
                                The Parental Shield
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Waiting Period</p>
                                    <p className="text-3xl font-black text-white italic italic-selection italic-selection">2 - 4 Years</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium italic-selection">Old diseases aren't covered from Day 1. You must wait to claim for them.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic text-rose-400">Co-payment</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">10% - 20%</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Lower premium but you pay 20% of every hospital bill yourself.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Tax Saver</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">₹50,000</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Full deduction under 80D if you pay for their policy via bank transfer.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            When our parents say "Hum theek hain, zaroorat nahi hai," it's usually because they don't want us to spend money. But a single hospital stay for a heart procedure in 2025 can cost **₹8 Lakh to ₹12 Lakh.**
                        </p>
                        
                        <p>
                            **The Challenge**: Insurance companies don't like insuring older people. They use complicated clauses like "Co-payment" and "Sub-limits" to reduce their risk.
                        </p>

                        <h2 id="waiting" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. PED Waiting Periods: The Patience Game</h2>
                        <p>
                            If your father has had blood pressure meds for 10 years, that is a **Pre-Existing Disease (PED).**
                            <br />- **Standard Plan**: Might cover it after 48 months.
                            <br />- **Specialized Senior Plan**: Might cover it after 24 months.
                        </p>
                        <p className="font-bold underline decoration-rose-600 underline-offset-4 italic-selection">Never hide a disease while buying. If the bank finds out later, they will reject the 100% of the claim, and you will lose all the premium you paid.</p>

                        <h2 id="copay" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Co-payment: The 20% Bill Shock</h2>
                        <p>
                            A policy with 20% Co-pay looks cheap. But let's look at the math:
                            <br />- **Bill**: ₹10,00,000.
                            <br />- **Co-pay (20%)**: You pay **₹2,00,000.**
                            <br />- **Insurance**: They pay ₹8,00,000.
                        </p>
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-10 italic-selection font-medium italic italic-selection">
                            "Always aim for a **Zero Co-pay** plan if your parents are under 65. If they are older, a 10% co-pay is acceptable to keep the premium manageable, but anything above 20% makes the insurance almost useless during major surgeries."
                        </div>

                        <h2 id="restoration" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-rose-600">3. Restoration Benefits: The Safety Net</h2>
                        <p>
                            If you have a ₹5 Lakh cover and use ₹5 Lakh in January, what happens if there's another surgery in June?
                            - **With Restoration**: The ₹5 Lakh limit is refilled automatically.
                            - **Without Restoration**: You pay from your pocket for the rest of the year.
                        </p>

                        <h2 id="80d" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. Section 80D: Your ₹50k Gift</h2>
                        <p>
                            The government rewards you for taking care of your parents. 
                            <br />- **Regular Parents**: ₹25,000 deduction.
                            <br />- **Senior Citizen Parents**: ₹50,000 deduction.
                            <br />This is separate from your own Section 80C limit!
                        </p>

                        <div className="my-24 p-14 bg-rose-600 rounded-[4rem] text-white text-center shadow-3xl shadow-rose-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-rose-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Prepare for the unexpected.</h3>
                                <p className="text-rose-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Does your emergency fund cover a 20% co-payment? Use our lumpsum tool to see how much you should keep aside for medical buffer.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.LUMPSUM} className="px-12 py-6 bg-white text-rose-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Plan Emergency Buffer →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic text-rose-900 italic-selection">Parental Health FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
