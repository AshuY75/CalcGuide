import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';
import ArticleHeader from '../../components/ArticleHeader';
import RelatedContent from '../../components/RelatedContent';

export default function NewVsOldTax() {
    const faqData = [
        {
            question: "Is ₹7.75 Lakh salary tax-free in the New Regime?",
            answer: "Yes. In the New Tax Regime, you get a Standard Deduction of ₹75,000 and a tax rebate for income up to ₹7 Lakhs. Combined, this makes any salary up to ₹7.75 Lakhs effectively tax-free."
        },
        {
            question: "What is the 'Break-even' point between Old and New Regime?",
            answer: "For a salary of ₹15 Lakhs, if your total deductions (80C + 80D + HRA + Home Loan) are less than ₹4.25 Lakhs, the New Regime is better. If they are more than ₹4.25 Lakhs, the Old Regime is better."
        },
        {
            question: "Can business owners switch regimes every year?",
            answer: "No. Salaried employees can switch every year. However, individuals with business or professional income (like freelancers under 44ADA) can only switch back to the Old Regime once in their lifetime."
        },
        {
            question: "Should I buy Life Insurance just to save tax in the Old Regime?",
            answer: "Usually, no. Buying a poor-quality insurance policy just to save 20-30% tax is a bad investment. It is often better to switch to the New Tax Regime and invest that 'saved premium' into a high-quality Mutual Fund."
        },
        {
            question: "Does the New Tax Regime allow HRA or Home Loan interest?",
            answer: "No. The New Tax Regime does not allow deductions for HRA, Section 80C, 80D, or Section 24(b) (Home Loan interest). It only allows the Standard Deduction and NPS employer contribution (80CCD 2)."
        }
    ];

    const toc = [
        { id: "battle", title: "The 2025 Tax Battle: Simplicity vs. Deductions" },
        { id: "new", title: "New Regime: The 'Default' Choice" },
        { id: "old", title: "Old Regime: The 'Homeowner' Shield" },
        { id: "math", title: "Math: Who wins at ₹10L, ₹15L, and ₹25L?" },
        { id: "breakeven", title: "The Magic Break-even Number" },
        { id: "verdict", title: "Decision Tree: How to Choose" },
        { id: "faq", title: "Taxation FAQ" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <ArticleHeader 
                title="New vs Old Tax Regime 2025: The Final Verdict on Which is Better"
                category="Tax Engineering"
                readTime="25 min read"
                date="April 2025"
            />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-4 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Tax Engineering</h4>
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
                            
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-sm text-slate-600 leading-relaxed shadow-sm italic-selection">
                                "The New Regime is for the current generation—those who want high take-home pay to invest freely. The Old Regime is for the previous generation's mindset—forced savings through insurance and home loans."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium mb-12">
                            With the 2024-25 Budget changes, the math has changed. Is your HRA enough to keep you in the Old Regime, or is the New Regime's Zero Tax limit too good to ignore?
                        </p>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-indigo-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
                                The Quick Verdict
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                                <div>
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">Choose the New Regime IF:</p>
                                    <ul className="text-sm text-slate-300 space-y-3 list-none p-0">
                                        <li className="flex gap-2"><span>✅</span> Income is below ₹7.75 Lakhs.</li>
                                        <li className="flex gap-2"><span>✅</span> You don't have a Home Loan.</li>
                                        <li className="flex gap-2"><span>✅</span> You find Tax Savings paperwork annoying.</li>
                                        <li className="flex gap-2 text-indigo-400 font-bold">🎯 Result: More Take-home Salary.</li>
                                    </ul>
                                </div>
                                <div className="border-l border-slate-800 md:pl-16">
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">Stick to the Old Regime IF:</p>
                                    <ul className="text-sm text-slate-300 space-y-3 list-none p-0">
                                        <li className="flex gap-2"><span>🏠</span> You pay high rent (HRA) in a Metro.</li>
                                        <li className="flex gap-2"><span>🏦</span> You have a Home Loan Interest of ₹2L+.</li>
                                        <li className="flex gap-2"><span>📈</span> Total Deductions exceed ₹4.25 Lakhs.</li>
                                        <li className="flex gap-2 text-emerald-400 font-bold">🎯 Result: Maximum Tax Savings.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <p>
                            In India, tax season is like a national puzzle. For decades, we were forced to buy LIC policies and lock money in PPF just to save a few thousand rupees. But in 2020, the government introduced a "New Regime" with No Deductions but Lower Taxes.
                        </p>
                        
                        <p>
                            Now in 2025, the New Regime has been made very aggressive. With a **Standard Deduction of ₹75,000** and zero tax up to ₹7 Lakhs, the calculation has become a literal battle between high take-home pay and tax-free investments.
                        </p>

                        <h2 id="new" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. The New Regime: Simplicity or Trap?</h2>
                        <p>
                            The New Tax Regime (NTR) is the "Default". If you don't tell your HR otherwise, this is where your salary goes.
                        </p>
                        <p>
                            **Why it wins**:
                            - **Rebate**: Under Section 87A, if your Net Taxable Income is below ₹7 Lakhs, you pay ZERO tax. 
                            - **The Buffer**: Add the ₹75,000 Standard Deduction, and effectively, you pay no tax on a salary up to **₹7,75,000**.
                            - **Lower Slabs**: Even at higher incomes, the slots (5%, 10%, 15%) are much wider than the Old Regime, which jumps to 20% very quickly.
                        </p>

                        <h2 id="old" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. The Old Regime: Still the Homeowner's Choice</h2>
                        <p>
                            The Old Regime (OTR) is complex but powerful. It allows you to create a "Shield" around your income using investments and expenses.
                        </p>
                        <p>
                            **The Shield Checklist**:
                            1. **Section 80C**: ₹1.5 Lakhs (PPF, ELSS, Insurance).
                            2. **Section 80D**: ₹25,000 (Health Insurance).
                            3. **Section 24(b)**: ₹2,00,000 (Home Loan Interest).
                            4. **HRA Exemption**: Can be ₹1.5L - ₹3L depending on your city and rent.
                        </p>
                        <p className="bg-amber-50 p-8 rounded-3xl border border-amber-100 font-bold italic-selection">
                            Conclusion: If you can shield more than ₹4.25 Lakhs of your income, the Old Regime starts beating the New Regime at a ₹15 Lakh salary.
                        </p>

                        <h2 id="math" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter underline decoration-indigo-600">3. Math: Who wins at different Salary levels?</h2>
                        
                        <div className="my-12 overflow-hidden border border-slate-200 rounded-[2.5rem] shadow-xl not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest text-selection-amber">Annual Salary</th>
                                        <th className="p-8 font-black text-slate-600 text-sm uppercase tracking-widest">Old Regime Tax (Max Ded.)</th>
                                        <th className="p-8 font-black text-indigo-600 text-sm uppercase tracking-widest">New Regime Tax</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 italic">
                                    <tr>
                                        <td className="p-8 text-slate-700 font-bold text-lg">₹10 Lakhs</td>
                                        <td className="p-8 text-slate-900 font-medium">₹33,800</td>
                                        <td className="p-8 text-indigo-600 font-black">₹23,400</td>
                                    </tr>
                                    <tr className="bg-indigo-50/20">
                                        <td className="p-8 text-slate-700 font-bold text-lg">₹15 Lakhs</td>
                                        <td className="p-8 text-slate-900 font-medium italic">₹1,14,400</td>
                                        <td className="p-8 text-indigo-600 font-black">₹1,11,800</td>
                                    </tr>
                                    <tr>
                                        <td className="p-8 text-slate-700 font-bold text-lg">₹25 Lakhs</td>
                                        <td className="p-8 text-slate-900 font-medium">₹3,56,200</td>
                                        <td className="p-8 text-indigo-600 font-black italic">₹3,45,800</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="breakeven" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. The Magic Break-even Number</h2>
                        <p>
                            Most people get confused by percentages. I'll give you a single number to remember.
                        </p>
                        <p>
                            For a salary of **₹12 Lakhs and above**, your "Total Deduction Threshold" is roughly **₹4.25 Lakhs**.
                        </p>
                        <ul>
                            <li><strong>Deductions {`>`} ₹4.25 Lakhs</strong>? Use **Old Regime**.</li>
                            <li><strong>Deductions {`<`} ₹4.25 Lakhs</strong>? Use **New Regime**.</li>
                        </ul>

                        <h2 id="verdict" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">5. Decision Tree: How to Choose</h2>
                        <div className="space-y-12 my-16">
                            {[
                                { q: "Do you have a Home Loan?", a: "If YES, and interest is ₹2L+, you almost definitely belong in the Old Regime." },
                                { q: "Do you live in a Metro and pay Rent?", a: "If YES, your HRA exemption is your biggest weapon. Combine HRA + 80C to beat the New Regime." },
                                { q: "Do you hate paperwork?", a: "If YES, choose the New Regime. You don't have to upload bills, receipts, or insurance documents to your HR portal." },
                                { q: "Are you an aggressive investor?", a: "If YES, choose the New Regime. It gives you more 'Take-home' cash which you can invest in Equity SIPs instead of low-return LIC/FD policies." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-8 group">
                                    <div className="flex-shrink-0 w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-3xl font-black group-hover:bg-indigo-600 transition-colors shadow-lg">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 mb-2 italic">{item.q}</h4>
                                        <p className="text-slate-600 text-lg leading-relaxed font-medium italic-selection">{item.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="my-24 p-14 bg-indigo-600 rounded-[4rem] text-white text-center shadow-3xl shadow-indigo-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">One Click. Zero Doubts.</h3>
                                <p className="text-indigo-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Our tax calculator computes both regimes side-by-side in real-time. No sign-up required.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.TAX.INCOME_TAX} className="px-12 py-6 bg-white text-indigo-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Compare My Tax Now →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic">Indian Taxation Doubts</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                        <RelatedContent category="TAX" currentPath={window.location.pathname} />

                    </div>
                </div>
            </main>
        </div>
    );
}
