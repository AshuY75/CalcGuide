import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function HomeLoanEligibilityMath() {
    const faqData = [
        {
            question: "How many times my annual salary can I get as a home loan?",
            answer: "Most Indian banks (SBI, HDFC, ICICI) offer 5 to 6.5 times your gross annual salary as the principal loan amount. For example, if your CTC is ₹20 Lakhs, you can expect a loan of ₹1 Cr to ₹1.3 Cr, provided you have no other existing debts."
        },
        {
            question: "What is FOIR in home loan eligibility?",
            answer: "FOIR stands for Fixed Obligation to Income Ratio. It is the percentage of your monthly income that the bank allows for all EMIs combined. Most banks cap FOIR at 50%. If you earn ₹1 Lakh and have a ₹10k car EMI, your home loan EMI capacity is only ₹40k (50% of 1L - 10k)."
        },
        {
            question: "Does a 30-year tenure increase my loan eligibility?",
            answer: "Yes. Since a longer tenure reduces your monthly EMI, your FOIR allows for a higher principal amount. However, the total interest paid over 30 years is much higher than a 20-year loan."
        },
        {
            question: "Can I add my spouse to increase eligibility?",
            answer: "Absolutely. Adding a co-applicant (spouse, or working parent) combines both incomes, which can often double your loan eligibility while keeping the legal ownership shared."
        },
        {
            question: "How does my CIBIL score affect my eligibility?",
            answer: "A score above 750 is required for the best interest rates. A lower score (650-700) might not lead to rejection, but the bank will charge a 'risk premium' (higher ROI), which increases your EMI and reduces your principal eligibility."
        }
    ];

    const toc = [
        { id: "multiplier", title: "The 5.5x Salary Multiplier" },
        { id: "foir", title: "FOIR: The Silent Eligibility Killer" },
        { id: "ltv", title: "LTV: The 20% Cash Requirement" },
        { id: "matrix", title: "Salary vs. Max Loan Matrix (2025)" },
        { id: "hacks", title: "7 Hacks to Double Your Loan" },
        { id: "faq", title: "Eligibility FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Loan Masterclass</h4>
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
                                "The bank only cares about how much you CAN afford, not how much you WANT to afford. Eligibility is the gatekeeper of your home-owning dream."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-blue-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-blue-50 rounded">Credit Assessment 2025</span>
                                <span>•</span>
                                <span>25 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Home Loan Eligibility: The <span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-8">Banker's Secret</span> Math Revealed
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Planning a 3BHK in Gurgaon or a sea-facing flat in Mumbai? The first question isn't "What's the price?", it's "What's my Eligibility?". Here is how the bank decides your limit.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-blue-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                                The "Magic Number" for 2025
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic text-blue-400">Benchmark</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">5.5x Salary</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">If your CTC is ₹12 Lakhs, you should get approx ₹66 Lakhs principal.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">FOIR Cap</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">50% of Income</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Your total EMIs (Car + Home + PL) cannot cross 50% of your take-home pay.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">LTV Constraint</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">20% Down</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Banks only fund 80% of property value. You need 20% in cash.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            Buying a home is emotional, but the funding is purely mathematical. In India, banks don’t just look at how much you earn; they look at how much you **save** after your lifestyle expenses and existing debts.
                        </p>
                        
                        <p>
                            Most home loan rejections don’t happen because of a low salary. They happen because of a **High FOIR**. Let’s dive deep into the banker's brain to understand how to get that "Approved" stamp.
                        </p>

                        <h2 id="multiplier" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. The 5.5x Multiplier Benchmark</h2>
                        <p>
                            Before looking at your bank statements, every loan officer uses a "Rough Multiplier". This helps them decide if your application is even worth processing.
                            <br />- **Private Sector Employees**: 5x to 5.5x of Gross Annual Salary.
                            <br />- **Govt Employees / PSU**: 6x to 6.5x (Due to higher job security).
                            <br />- **Self-Employed Professionals**: 4.5x to 5x (Due to higher income volatility).
                        </p>

                        <h2 id="foir" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. FOIR: The Silent Eligibility Killer</h2>
                        <p>
                            FOIR stands for **Fixed Obligation to Income Ratio**. It's the maximum percentage of your income the bank allows you to spend on EMIs.
                        </p>
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-10 italic-selection font-medium italic italic-selection">
                            "If you earn ₹1,00,000 take-home, and the bank’s FOIR is 50%, your Max EMI capacity is ₹50,000. If you already have a car EMI of ₹12,000, your home loan EMI is capped at ₹38,000. This single car loan just reduced your home loan principal eligibility by ₹15 Lakhs."
                        </div>

                        <h2 id="ltv" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-blue-600">3. LTV: The 20% Cash Requirement</h2>
                        <p>
                            RBI mandates that banks cannot lend 100% of property value.
                            - **Properties {`<`} ₹30L**: 90% LTV (10% Downpayment).
                            - **Properties ₹30L - ₹75L**: 80% LTV (20% Downpayment).
                            - **Properties {`>`} ₹75L**: 75% LTV (25% Downpayment).
                        </p>

                        <h2 id="matrix" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. Salary vs. Max Loan Matrix (2025)</h2>
                        <div className="my-10 overflow-hidden border border-slate-200 rounded-[3rem] shadow-xl not-prose font-inter">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 font-black text-slate-900 text-xs uppercase tracking-widest">Net Take-Home</th>
                                        <th className="p-8 font-black text-slate-900 text-xs uppercase tracking-widest">Max EMI (50% FOIR)</th>
                                        <th className="p-8 font-black text-blue-600 text-xs uppercase tracking-widest">Max Loan (8.75% ROI)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 italic">
                                    <tr>
                                        <td className="p-8">₹50,000</td>
                                        <td className="p-8">₹25,000</td>
                                        <td className="p-8 text-blue-600 font-bold">₹29 Lakhs</td>
                                    </tr>
                                    <tr>
                                        <td className="p-8">₹1,00,000</td>
                                        <td className="p-8">₹50,000</td>
                                        <td className="p-8 text-blue-600 font-bold">₹58 Lakhs</td>
                                    </tr>
                                    <tr className="bg-blue-50/20">
                                        <td className="p-8 font-black italic">₹2,00,000</td>
                                        <td className="p-8 text-slate-900 font-black">₹1,00,000</td>
                                        <td className="p-8 text-blue-600 font-black">₹1.17 Crores</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="hacks" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">5. 7 Hacks to Double Your Loan Amount</h2>
                        <ul className="space-y-6 my-10 list-none p-0">
                            {[
                                { t: "Add a Co-applicant", d: "Add a working spouse or parent to combine incomes and double the eligibility." },
                                { t: "Clear Short-term Loans", d: "Close car or personal loans 3 months before applying for a home loan." },
                                { t: "Opt for 30-Year Tenure", d: "It reduces EMI, which allows the bank to give you a higher principal amount." },
                                { t: "Show Variable Pay", d: "Ensure your average bonus of the last 2 years is documented to increase income base." },
                                { t: "Improve CIBIL (>800)", d: "High scores get discount rates (e.g., 0.25% off), which increases principal for the same EMI." },
                                { t: "Step-up EMI programs", d: "Choose banks that offer lower initial EMIs (assuming salary growth)." },
                                { t: "Include Rental Income", d: "Show rent from existing properties to beef up your monthly cash flow proof." }
                            ].map((hack, idx) => (
                                <li key={idx} className="flex gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                                    <span className="text-blue-600 font-black">ST-0{idx+1}.</span>
                                    <div>
                                        <strong className="block text-slate-900 mb-1">{hack.t}</strong>
                                        <span className="text-slate-500 text-sm font-medium">{hack.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="my-24 p-14 bg-blue-600 rounded-[4rem] text-white text-center shadow-3xl shadow-blue-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Stop guessing. Get sanctioned.</h3>
                                <p className="text-blue-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Our Eligibility Calculator simulates the banker's brain using real-time FOIR and LTV metrics for 2025.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.LOAN.ELIGIBILITY} className="px-12 py-6 bg-white text-blue-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Check Your Limit →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic text-blue-900">Eligibility FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
