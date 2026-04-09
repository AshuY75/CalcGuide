import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function Section80DGuide() {
    const faqData = [
        {
            question: "What is the maximum deduction under Section 80D?",
            answer: "The total limit can reach up to ₹1,00,000. This happens if you (under 60) pay for yourself (₹25,000) and your senior citizen parents (₹50,000). If you are also a senior citizen, your own limit increases to ₹50,000, bringing the total to ₹1 Lakh."
        },
        {
            question: "Can I claim 80D if I pay the premium in cash?",
            answer: "No. Section 80D clearly states that only preventive health checkup costs (up to ₹5,000) can be paid in cash. The actual insurance premium must be paid via digital modes (Bank, UPI, Card) to qualify for tax deduction."
        },
        {
            question: "Is the ₹5,000 preventive checkup extra?",
            answer: "No. The ₹5,000 for preventive health checkups is *included* within the overall limits of ₹25,000 or ₹50,000. It is not an additional benefit above those limits."
        },
        {
            question: "Can I claim deduction for parents-in-law?",
            answer: "No. Section 80D only allows deductions for premiums paid for yourself, your spouse, dependent children, and your parents. In-laws are not covered under this section."
        },
        {
            question: "What if my company pays my premium?",
            answer: "If the premium is fully paid by the employer, you cannot claim a deduction. However, if your employer deducts a portion of the premium from your salary (Group Medical Insurance), you can claim that portion under Section 80D."
        }
    ];

    const toc = [
        { id: "intro", title: "Why 80D is better than 80C" },
        { id: "limits", title: "Limits Breakdown: Self vs. Parents" },
        { id: "preventive", title: "The ₹5,000 'Checkup' Benefit" },
        { id: "cash", title: "The 'No Cash' Rule for Premiums" },
        { id: "senior", title: "Senior Citizen Special Provisions" },
        { id: "faq", title: "80D Tax FAQs" }
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
                                            className="block text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            
                            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 italic text-sm text-emerald-700 leading-relaxed shadow-sm">
                                "80D is the only section that lets you save tax while taking care of your parents. It's not just a deduction; it's an act of responsibility."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-emerald-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-emerald-50 rounded">Health & Tax</span>
                                <span>•</span>
                                <span>15 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Section 80D Breakdown: How to Claim <span className="text-emerald-600 underline decoration-emerald-200 decoration-8 underline-offset-8">₹1,00,000</span> for Health
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Think Section 80C is the only way to save tax? Meet its healthier sibling. Section 80D is huge, flexible, and completely separate from the ₹1.5L limit of 80C.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-emerald-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                                The 80D Limit Grid
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">Self + Family</p>
                                    <p className="text-3xl font-black text-white italic">₹25,000</p>
                                    <p className="text-[10px] text-slate-400 mt-3 font-medium">Includes spouse and dependent children. Increases to ₹50k if you are 60+.</p>
                                </div>
                                <div className="border-l border-slate-800 md:pl-16">
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">Parents (Bonus)</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">Up to ₹50,000</p>
                                    <p className="text-[10px] text-slate-400 mt-3 font-medium">₹25k for parents below 60, and ₹50k if they are seniors.</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 text-center">
                                <p className="text-slate-400 font-black tracking-widest uppercase text-[10px]">Max Total Deduction: ₹1,00,000</p>
                            </div>
                        </div>

                        <p>
                            We Indians are obsessed with Section 80C. We buy LIC, we lock money in PPF, and we track our EPF. But 80C is crowded and limited to ₹1.5 Lakhs. 
                        </p>
                        
                        <p>
                            **Section 80D** is a separate powerhouse. It exclusively deals with medical insurance and preventive care. If you are in the 30% tax bracket, a full 80D claim for yourself and your parents could save you **₹31,200 in hard cash** every year.
                        </p>

                        <h2 id="limits" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. Limits Breakdown: The Math of Care</h2>
                        <p>
                            The beauty of 80D is that it's additive. You get a limit for your nuclear family, and an *additional* limit for your parents.
                        </p>
                        <div className="my-10 overflow-hidden border border-slate-200 rounded-[2.5rem] shadow-xl not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Scenario</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Self + Family</th>
                                        <th className="p-8 font-black text-emerald-600 text-sm uppercase tracking-widest">Parents</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 italic">
                                    <tr>
                                        <td className="p-8 text-slate-700 font-bold">Both below 60</td>
                                        <td className="p-8">₹25,000</td>
                                        <td className="p-8">₹25,000</td>
                                    </tr>
                                    <tr className="bg-emerald-50/20">
                                        <td className="p-8 text-slate-700 font-bold italic">You under 60, Parents over 60</td>
                                        <td className="p-8 font-black">₹25,000</td>
                                        <td className="p-8 font-black text-emerald-600">₹50,000</td>
                                    </tr>
                                    <tr>
                                        <td className="p-8 text-slate-700 font-bold">Both over 60</td>
                                        <td className="p-8 font-black">₹50,000</td>
                                        <td className="p-8 font-black text-emerald-600">₹50,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="preventive" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. The ₹5,000 'Checkup' Benefit</h2>
                        <p>
                            Most people realize this too late. Within the limits mentioned above, you can claim up to **₹5,000** for preventive health checkups (blood tests, body scans, etc.).
                        </p>
                        <p>
                            **The Catch**: This ₹5,000 is *not additional*. If your insurance premium is ₹22,000, you can only claim ₹3,000 for checkups to hit the ₹25,000 ceiling. But if your premium is ₹30,000, you already hit the ceiling, and the checkup benefit provides no extra value.
                        </p>

                        <h2 id="cash" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-emerald-600">3. The 'No Cash' Rule for Premiums</h2>
                        <p>
                            This is the most common reason the Income Tax department rejects claims.
                        </p>
                        <p>
                            - **Insurance Premiums**: Must be paid via Bank Transfer, Debit/Credit Card, or UPI. **Cash payments for premiums are 100% disqualified.**
                            - **Checkups**: The ₹5,000 preventive checkup can be paid in cash.
                        </p>

                        <h2 id="senior" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. Senior Citizen Special Cases</h2>
                        <p>
                            If your parents are over 60 and do **not** have health insurance (perhaps due to pre-existing conditions), you can still claim their **Actual Medical Expenses** (doctor visits, medicines, tests) up to ₹50,000 under Section 80D.
                        </p>
                        <p className="font-bold">This is a massive relief for families caring for elderly parents with high recurring medical bills.</p>

                        <div className="my-24 p-14 bg-emerald-600 rounded-[4rem] text-white text-center shadow-3xl shadow-emerald-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Protect your health and your wealth.</h3>
                                <p className="text-emerald-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Input your medical premiums and checkup costs into our estimator to find your total 80D shield.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.TAX.INCOME} className="px-12 py-6 bg-white text-emerald-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Check 80D Eligibility →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic">80D Health Insurance FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
