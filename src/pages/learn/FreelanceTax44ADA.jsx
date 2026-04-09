import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function FreelanceTax44ADA() {
    const faqData = [
        {
            question: "Who is eligible for Section 44ADA?",
            answer: "Individuals and partnership firms (excluding LLPs) resident in India can use 44ADA if they are in 'notified professions' such as IT/Technical Consultants, Doctors, Surgeons, Lawyers, Accountants, Interior Designers, and Artists."
        },
        {
            question: "What is the turnover limit for 44ADA in 204-25?",
            answer: "The limit is ₹50 Lakhs. However, it is increased to ₹75 Lakhs if at least 95% of your gross receipts are received through digital modes (Bank transfer, UPI, etc.)."
        },
        {
            question: "Can software developers and YouTubers use 44ADA?",
            answer: "Software developers (Technical Consultants) are explicitly covered. For YouTubers and Influencers, the law is slightly grey, but most tax experts categorize them under 'Artists' or 'Technical Consultants' to claim 44ADA, provided their work involves creativity or technical skill."
        },
        {
            question: "Can I claim 80C deductions if I use 44ADA?",
            answer: "Yes! While you cannot claim business expenses (like laptop/rent) separately under 44ADA, you can still deduct Section 80C (PPF/ELSS), 80D (Health Insurance), and other personal deductions from your remaining 50% income."
        },
        {
            question: "Is audit mandatory if my freelance income is above ₹20 Lakhs?",
            answer: "No. Audit is only mandatory if your turnover exceeds ₹75 Lakhs (digital) or if you claim your profit is LESS than 50% of your receipts."
        }
    ];

    const toc = [
        { id: "concept", title: "Presumptive Tax: The Math of 'Half'" },
        { id: "notified", title: "Notified Professions: Are you in?" },
        { id: "limit", title: "The ₹75 Lakh Digital Threshold" },
        { id: "deductions", title: "The Expense Trap: Laptop vs. 50%" },
        { id: "digital", title: "95% Digital Rule: Don't miss it" },
        { id: "gst", title: "GST for Freelancers: The Export Hook" },
        { id: "faq", title: "Freelance Tax FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Professional Tax</h4>
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
                            
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-sm text-slate-600 leading-relaxed shadow-sm">
                                "The government treats you like a business because you take risks. Section 44ADA is your reward for that risk—a simplified, lower tax path."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-indigo-50 rounded">Freelance & Tech</span>
                                <span>•</span>
                                <span>22 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Section 44ADA for Freelancers: The <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-8">50% Tax Hack</span> for 2025
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Earning in Dollars or Euros? Whether you're a remote dev or a UI designer, Section 44ADA is the most powerful tool to keep more of your hard-earned money.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-indigo-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
                                The 44ADA Cheat Sheet
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Taxable Profit</p>
                                    <p className="text-3xl font-black text-white italic">Flat 50%</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Income tax assumes 50% of your earnings are business expenses.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Revenue Limit</p>
                                    <p className="text-3xl font-black text-white italic">₹75 Lakhs</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Applicable if 95% of receipts are Digital/Bank.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Accounting</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">No Audit</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">No need to maintain P&L or balance sheets.</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-sm">"If you earn ₹20 Lakhs, the government assumes you spent ₹10 Lakhs on your work. You only pay tax on the rest."</p>
                                <Link to={ROUTES.CALCULATORS.TAX.INCOME} className="px-8 py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition-all shadow-lg hover:-translate-y-1">
                                    Calculate My Tax →
                                </Link>
                            </div>
                        </div>

                        <p>
                            Being a freelancer in India is awesome. You have flexibility, you can work for international clients, and you get paid higher than local salaries. But when ITR season comes, most freelancers panic. They see their giant turnover and think, "I am going to pay a fortune in tax."
                        </p>
                        
                        <p>
                            That's where **Section 44ADA** comes in. Under this section, the income tax department treats you as a **Professional**. They understand that to earn money, you need to spend money on laptops, software subscriptions, coworking seats, and internet. 
                        </p>

                        <h2 id="concept" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. Presumptive Taxation: The 50% Rule</h2>
                        <p>
                            Normally, a business has to subtract every single expense (with bills) to find the profit. If you buy a ₹1,000 keyboard, you need a bill to prove it. 
                        </p>
                        <p>
                            **Section 44ADA assumes your profit is 50% of your total receipts.**
                        </p>
                        <p>
                            **The Math**:
                            - You earned: **₹20 Lakhs** from freelancing.
                            - Presumed Profit (under 44ADA): **₹10 Lakhs**.
                            - Taxable Amount: **₹10 Lakhs**.
                        </p>
                        <p>
                            You effectively "hacked" your tax slab. Even if your actual expenses were only ₹2 Lakhs (for a laptop and fiber), the government officially lets you claim ₹10 Lakhs as expense.
                        </p>

                        <h2 id="notified" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">2. Notified Professions: Are you in?</h2>
                        <p>
                            Section 44ADA is not for everyone. You must be in a "notified profession". These include:
                        </p>
                        <ul>
                            <li><strong>Legal & Accounting</strong>: Lawyers, CAs, CS.</li>
                            <li><strong>Engineering & Architecture</strong>: Software engineers, Civil/Mech engineers, Architects.</li>
                            <li><strong>Medical</strong>: Doctors, Physiotherapists.</li>
                            <li><strong>Technical Consultants</strong>: Freelance developers, Cybersecurity consultants, Project managers.</li>
                            <li><strong>Interior Designers & Designers</strong>: Graphic designers, UI/UX designers, Interior decorators.</li>
                            <li><strong>Artists</strong>: Writers, Actors, Musicians, Directors.</li>
                        </ul>

                        <h2 id="limit" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. The ₹75 Lakh Digital Threshold</h2>
                        <p>
                            Previously, the limit to use this scheme was ₹50 Lakhs. But to promote a "Digital India", the budget 2024-25 introduced a new limit:
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
                            <div className="p-10 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-sm">
                                <h4 className="text-xl font-black text-slate-900 mb-4">Cash-Heavy Work</h4>
                                <p className="text-4xl font-black text-slate-400 italic mb-4">₹50 Lakhs</p>
                                <p className="text-xs text-slate-500 font-medium italic">If your cash receipts are more than 5% of total income.</p>
                            </div>
                            <div className="p-10 bg-indigo-50 border-2 border-indigo-100 rounded-[2.5rem] shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 bg-indigo-500 text-white text-[8px] font-black uppercase tracking-widest">New Limit</div>
                                <h4 className="text-xl font-black text-slate-900 mb-4">95% Digital Work</h4>
                                <p className="text-4xl font-black text-indigo-600 italic mb-4">₹75 Lakhs</p>
                                <p className="text-xs text-indigo-800 font-medium italic">If 95% of payments are Bank/UPI. Most tech freelancers fall here.</p>
                            </div>
                        </div>

                        <h2 id="deductions" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">4. The Expense Trap: Laptop vs. 50%</h2>
                        <p>
                            This is the most common mistake. Once you choose 44ADA, you **cannot** claim any other business expenses separately.
                        </p>
                        <p>
                            - **Can I claim 50% profit AND then subtract my ₹2L Macbook price?** NO. The 50% expense you claimed is inclusive of everything—rent, laptop, staff, books, and tea.
                        </p>
                        <p className="bg-amber-50 p-8 rounded-3xl border border-amber-100 border-l-8 italic-selection font-bold">
                            Wait! You CAN still claim personal deductions like Section 80C (PPF/ELSS), 80D (Mediclaim), and House Rent (Sec 80GG) from your remaining 50% income.
                        </p>

                        <h2 id="gst" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5. GST for Freelancers: The Export Hook</h2>
                        <p>
                            Income Tax and GST are separate. Buying a pro license for Adobe with GST doesn't save you Income Tax, but it might get you a **GST Credit**.
                        </p>
                        <ul>
                            <li><strong>Domestic Clients</strong>: If your turnover is {`>`} ₹20 Lakhs, you MUST register for GST and charge 18% to your clients.</li>
                            <li><strong>International Clients (Exports)</strong>: You still need to register IF turnover is {`>`} ₹20 Lakhs, but you don't charge GST to them. You file a "Letter of Undertaking (LUT)" and pay zero GST. This is a massive advantage for Indian service exporters.</li>
                        </ul>

                        <div className="my-24 p-14 bg-indigo-600 rounded-[4rem] text-white text-center shadow-3xl shadow-indigo-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Focus on your craft. We handle the math.</h3>
                                <p className="text-indigo-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Our specialized tax estimator for freelancers lets you compare the Old vs New regime under Section 44ADA.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.TAX.INCOME} className="px-12 py-6 bg-white text-indigo-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Estimate Freelance Tax →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-12 py-6 bg-indigo-950 text-white font-black rounded-3xl hover:bg-black transition-all border border-indigo-400/30">
                                        Invest for Retirement
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic">Common Freelance Doubts</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
