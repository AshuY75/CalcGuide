import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function HRAExemptionGuide() {
    const faqData = [
        {
            question: "Can I claim HRA if I live in Bengaluru or Hyderabad?",
            answer: "Yes, but only @40% of Basic salary. Income Tax rules only consider Mumbai, Delhi, Kolkata, and Chennai as 'Metro' cities (50% rule). Even if your rent in Bengaluru is higher than Mumbai, you still get the lower 40% exemption limit."
        },
        {
            question: "Can I pay rent to my spouse and claim HRA?",
            answer: "Technically, you can, but it is highly risky. The Relationship of husband and wife is not considered a commercial one by the IT Department. Most tax experts and courts advise against it as it is likely to be rejected during an audit."
        },
        {
            question: "Is Landlord's PAN mandatory if I pay ₹8,000 rent per month?",
            answer: "No. The PAN of the landlord is only mandatory if your total rent paid in a financial year exceeds ₹1,00,000 (roughly ₹8,333 per month)."
        },
        {
            question: "Can I claim both HRA and Home Loan interest?",
            answer: "Yes, provided there is a genuine reason. For example, if you own a house in your hometown (paying EMI) but live in a rented house in the city where you work (paying rent), you can claim both Section 24(b) and HRA."
        },
        {
            question: "What if I forgot to submit rent receipts to my HR?",
            answer: "Don't worry. You can still claim the HRA exemption while filing your Income Tax Return (ITR). You will get the tax refund back into your bank account after the return is processed."
        }
    ];

    const toc = [
        { id: "formula", title: "The 'Rule of 3': How HRA is Calculated" },
        { id: "metro", title: "The Metro vs. Non-Metro Trap" },
        { id: "parent", title: "Tax Hack: Paying Rent to Parents" },
        { id: "documents", title: "Documents for a 'Bulletproof' Claim" },
        { id: "homeloan", title: "HRA + Home Loan: The Double Benefit" },
        { id: "faq", title: "HRA Doubts Cleared" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Rental Optimization</h4>
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
                                "The Income Tax department assumes your landlord is making money from you. HRA is simply you making sure the government doesn't tax YOU for that same money."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-indigo-50 rounded">Assessment Year 2025-26</span>
                                <span>•</span>
                                <span>20 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                HRA Exemption Guide 2025: How to Claim <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-8">Max Tax Savings</span>
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Rent is usually the biggest chunk of a salaried person's expense. If you aren't optimizing your HRA, you are literally giving away ₹2,000 - ₹8,000 every month in extra taxes.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-indigo-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
                                The HRA Golden Formula
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Item 1</p>
                                    <p className="text-3xl font-black text-white italic">100% HRA</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Actual HRA amount given by your employer.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Item 2</p>
                                    <p className="text-3xl font-black text-white italic">50% Basic</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">For Metro (40% for Non-Metro) of Basic Salary.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Item 3</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">Excess Rent</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Actual Rent Paid minus 10% of Basic Salary.</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800">
                                <p className="text-slate-400 italic font-black text-center italic-selection">"YOU GET EXEMPTION ON THE LOWEST OF THE ABOVE THREE."</p>
                            </div>
                        </div>

                        <p>
                            We love House Rent Allowance (HRA). It's that magical part of our salary that theoretically should be tax-free. But for most corporate employees, the actual tax exemption they get is much lower than the HRA mentioned in their appointment letter.
                        </p>
                        
                        <p>
                            Why? Because of the **"10% Basic Salary"** floor. The Income Tax Department believes that everyone should spend at least 10% of their basic salary on rent themselves. They only give you a tax break on anything you spend *above* that.
                        </p>

                        <h2 id="formula" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. The 'Rule of 3': The HRA Math Example</h2>
                        <p>
                            Let's look at **Rahul**, who works in Mumbai:
                            - Basic Salary: ₹50,000 / month
                            - HRA Component: ₹25,000 / month
                            - Actual Rent Paid: ₹20,000 / month
                        </p>
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-12 italic-selection font-medium">
                            <strong>The Calculation:</strong>
                            <br />1. Actual HRA = **₹25,000**
                            <br />2. 50% of Basic (Mumbai) = **₹25,000**
                            <br />3. Rent (₹20k) - 10% Basic (₹5k) = **₹15,000**
                            <br /><br />
                            <strong>Rahul's Exemption is ₹15,000.</strong> He will pay tax on the remaining ₹10,000 of his HRA.
                        </div>

                        <h2 id="metro" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-indigo-600">2. The Metro vs. Non-Metro Trap</h2>
                        <p>
                            This is where it gets unfair. The Income Tax rules still live in 1990. They only recognize four "Metros": **Mumbai, Delhi, Kolkata, and Chennai.**
                        </p>
                        <p>
                            If you live in **Bengaluru, Pune, Hyderabad, or Gurugram**, even if your rent is higher than Mumbai, you are classified as **Non-Metro**. Your limit is capped at **40% of Basic Salary**. This single rule costs thousands of tech employees nearly ₹15,000-₹30,000 in extra annual taxes.
                        </p>

                        <h2 id="parent" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. Tax Hack: Paying Rent to Parents</h2>
                        <p>
                            If you are living at home with your parents, you can legally pay them rent and claim HRA. 
                        </p>
                        <p>
                            **The Strategy**:
                            - Transfer rent via Bank / UPI every month. 
                            - Your parents must declare this as "Rental Income" in their ITR.
                            - If your parents are senior citizens or have no other income, they pay almost zero tax on this, while you save 20-30% tax on the same amount. It's a massive family-level win.
                        </p>
                        <p className="font-bold text-rose-600">Note: You cannot pay rent to your spouse. This is a red flag for the IT Department.</p>

                        <h2 id="documents" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">4. Documents for a 'Bulletproof' Claim</h2>
                        <ul className="space-y-6 my-10 list-none p-0">
                            {[
                                { t: "Rent Agreement", d: "Needs to be on stamp paper. Registered agreement is best, but notarized works." },
                                { t: "Rent Receipts", d: "Signed by the landlord. If cash, add a revenue stamp for any amount over ₹5000." },
                                { t: "Landlord PAN", d: "Mandatory if annual rent is more than ₹1,00,000." },
                                { t: "Bank Statement", d: "Always pay via digital modes. It is the ultimate proof of a genuine transaction." }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                                    <span className="text-indigo-600 font-black">0{idx+1}.</span>
                                    <div>
                                        <strong className="block text-slate-900 mb-1">{item.t}</strong>
                                        <span className="text-slate-500 text-sm font-medium">{item.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <h2 id="homeloan" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5. HRA + Home Loan: The Double Benefit</h2>
                        <p>
                            Can you claim both? **Yes.**
                        </p>
                        <p>
                            If you own a house in a city where you don't stay (say, your hometown) and you pay EMI for it, and you live in a rented house in the city of your job—you can claim **both HRA and Section 24(b) interest deduction.** 
                        </p>
                        <p className="italic font-bold">This is one of the most powerful 'Double Shields' in the Indian tax system.</p>

                        <div className="my-24 p-14 bg-indigo-600 rounded-[4rem] text-white text-center shadow-3xl shadow-indigo-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Stop overpaying on rent.</h3>
                                <p className="text-indigo-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Use our HRA optimizer to find the exact rent amount you need to pay for zero tax on your allowance.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.TAX.HRA} className="px-12 py-6 bg-white text-indigo-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Open HRA Calculator →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic">HRA Exemption Doubts</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
