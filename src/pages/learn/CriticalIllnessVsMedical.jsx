import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function CriticalIllnessVsMedical() {
    const faqData = [
        {
            question: "What is the difference between Medical Insurance and Critical Illness insurance?",
            answer: "Medical Insurance (Mediclaim) pays for your actual hospital bills (Indemnity). Critical Illness insurance pays you a fixed lump sum amount (Benefit) the moment you are diagnosed with a serious illness like Cancer or Heart Attack, regardless of your actual hospital bill."
        },
        {
            question: "Do I need Critical Illness cover if I already have Health Insurance?",
            answer: "YES. Health insurance only pays for hospital stay. But serious illnesses often lead to job loss, expensive home-care, and lifestyle changes. The lump sum from Critical Illness insurance covers these non-hospital costs and replaces your income."
        },
        {
            question: "What diseases are covered under Critical Illness?",
            answer: "Most policies cover 30 to 40 major illnesses, including Cancer, First Heart Attack, Stroke, Kidney Failure, Major Organ Transplant, and Multiple Sclerosis. Always check the specific list in your policy."
        },
        {
            question: "What is the 'Survival Period' in Critical Illness policies?",
            answer: "Unlike medical insurance, most Critical Illness policies require the patient to survive for a certain period (usually 30 days) after diagnosis to be eligible for the lump sum payout."
        },
        {
            question: "Is the payout taxable?",
            answer: "No. The lump sum received from a Critical Illness insurance policy is generally tax-free in the hands of the policyholder."
        }
    ];

    const toc = [
        { id: "difference", title: "Indemnity vs. Benefit: The Core Concept" },
        { id: "income", title: "Income Replacement: The Hidden Cost" },
        { id: "stacking", title: "Stacking: Can You Have Both?" },
        { id: "list", title: "The 36-Disease List: What Matters?" },
        { id: "survival", title: "The Survival Period Trap" },
        { id: "faq", title: "Illness Policy FAQ" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Advanced Risk</h4>
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
                                "Mediclaim helps you survive the hospital. Critical Illness insurance helps you survive the years of recovery that follow. Don't leave your finances to chance."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-rose-600 hover:prose-a:text-rose-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-rose-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-rose-50 rounded">Advanced Health 2025</span>
                                <span>•</span>
                                <span>15 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Critical Illness vs. <span className="text-rose-600 underline decoration-rose-200 decoration-8 underline-offset-8">Medical Insurance</span>: The Math
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Think your ₹10 Lakh health policy is enough for Cancer? Think again. Understanding the "Lump Sum Advantage" could save your family's future.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-rose-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></span>
                                The Payout Comparison
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Standard Health</p>
                                    <p className="text-3xl font-black text-white italic italic-selection italic-selection">Bill Payout</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium italic-selection">Pays the hospital directly based on your room and surgery costs.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic text-rose-400">Critical Illness</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">Fixed Cash</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Pays the FULL ₹20L or ₹50L instantly on diagnosis. Use it for anything.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">The Best Case</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">Have Both</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Use Health for hospital bills, and Critical Illness for EMI/Income backup.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            Most people make the mistake of thinking all health insurance is the same. But in the world of severe illnesses, there are two types of policies: **Indemnity** (Mediclaim) and **Benefit** (Critical Illness).
                        </p>
                        
                        <p>
                            If you have a heart attack, Mediclaim will cover the ₹4 Lakh hospital bill. But what about the 6 months of bed rest, the loss of salary, and the home nursing costs? That is where Critical Illness cover saves you.
                        </p>

                        <h2 id="difference" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. Indemnity vs. Benefit: The Core Concept</h2>
                        <p>
                            - **Indemnity**: "I will pay what you spent." (Mediclaim).
                            - **Benefit**: "I will pay you ₹X because this happened." (Critical Illness).
                        </p>
                        <p>
                            Critical Illness insurance is basically an **Income Replacement** tool. It ensures that while you focus on recovery, your home loan EMIs and children's school fees don't stop.
                        </p>

                        <h2 id="income" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Income Replacement: The Hidden Cost of Cancer</h2>
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-10 italic-selection font-medium italic italic-selection">
                            "Statistics show that 40% of people diagnosed with a critical illness in India lose their jobs within 12 months. Your health insurance stops being useful the moment you leave the hospital. Your Critical Illness payout (e.g., ₹25 Lakhs) becomes your salary for those difficult months."
                        </div>

                        <h2 id="stacking" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-rose-600">3. Stacking: Can You Have Both?</h2>
                        <p>
                            **Yes.** In fact, you should. 
                            <br />- **Health Insurance**: High-value cover (₹10L+) with a high 'No Claim Bonus'.
                            <br />- **Critical Illness**: A separate rider or policy of ₹20L+ for specific high-risk scenarios. 
                            <br />You can claim from BOTH for the same condition. One for the bill, one for the cash.
                        </p>

                        <h2 id="survival" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. The Survival Period Trap</h2>
                        <p>
                            Unlike life insurance or mediclaim, Critical Illness policies have a **Survival Period.** 
                            <br />Usually, you must survive for 30 days after the diagnosis to be eligible for the payment. This is to ensure the benefit is for 'Recovery and Care' rather than a 'Death Benefit' (which Term Insurance handles).
                        </p>

                        <div className="my-24 p-14 bg-rose-600 rounded-[4rem] text-white text-center shadow-3xl shadow-rose-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-rose-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Protect your lifestyle.</h3>
                                <p className="text-rose-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Compare how much a medical emergency could drain your savings. Use our Lumpsum calculator to see your target emergency fund.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.LUMPSUM} className="px-12 py-6 bg-white text-rose-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Check Emergency Buffer →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic text-rose-900 italic-selection">Illness Strategy FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
