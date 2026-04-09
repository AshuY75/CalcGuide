import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function CIBILScoreBlueprint() {
    const faqData = [
        {
            question: "How long does it take for a CIBIL score to increase?",
            answer: "It typically takes 3 to 6 months of consistent behavior to see a significant jump (30-50 points). CIBIL updates its records once every 30-45 days based on data sent by your bank."
        },
        {
            question: "What is the 30% Credit Utilization rule?",
            answer: "If your credit card limit is ₹1 Lakh, you should not spend more than ₹30,000 in a month. Using 90% of your limit, even if you pay it back on time, indicates 'Credit Hunger' and can lower your score."
        },
        {
            question: "Does checking my own score reduce it?",
            answer: "No. Checking your own score is a 'Soft Enquiry' and has zero impact. When a bank checks it for a loan application, it is a 'Hard Enquiry', which can drop your score by 2-5 points."
        },
        {
            question: "How do I fix errors in my CIBIL report?",
            answer: "You must raise a dispute on the official CIBIL website. Errors like 'Active' status for a closed loan are common and can be resolved within 30 days if you have the NOC (No Objection Certificate) from your bank."
        },
        {
            question: "Is 'Settled' better than 'Closed'?",
            answer: "No. 'Settled' means you paid less than what you owed. It is a massive red flag for future lenders. Always aim for a 'Closed' status by paying the full amount including interest."
        }
    ];

    const toc = [
        { id: "ranges", title: "CIBIL Ranges: The Danger Zone" },
        { id: "pillars", title: "The 4 Pillars of Your Score" },
        { id: "hacks", title: "The 30% Utilization Hack" },
        { id: "math", title: "Math: The Cost of a Bad Score" },
        { id: "roadmap", title: "6-Month Roadmap to 800" },
        { id: "faq", title: "CIBIL FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Credit Mastery</h4>
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
                            
                            <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 italic text-sm text-indigo-800 leading-relaxed shadow-sm italic-selection">
                                "Your CIBIL score is your financial character. In the world of banks, you are just a number between 300 and 900. Make that number talk for you."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-indigo-50 rounded">Financial Reputation</span>
                                <span>•</span>
                                <span>18 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                The CIBIL Score Blueprint: From <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-8">600 to 800</span> in 6 Months
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Your credit score determines whether the bank gives you a 8.5% loan or a 10.5% rejection. Here is the exact mathematical blueprint to repair and maximize your score.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-indigo-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
                                The Scorecard Reality
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Excellent</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">750 - 900</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">VIP treatment. Pre-approved loans and the lowest interest rates.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Standard</p>
                                    <p className="text-3xl font-black text-white italic italic-selection">700 - 749</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Safe zone. You'll get the loan but might not get the 'Base' rate.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Danger</p>
                                    <p className="text-3xl font-black text-rose-400 italic">Below 650</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Rejection territory. Or high-interest rates from private lenders.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            If you’ve ever applied for a credit card or a home loan, you know the word **"CIBIL"**. It's the standard gatekeeper of the Indian financial system. 
                        </p>
                        
                        <p>
                            **The Problem**: Most people only check their score when they *need* a loan. By then, it's too late. CIBIL is a lagging indicator; it tells the bank how you've behaved over the last 3 years, not just the last month.
                        </p>

                        <h2 id="pillars" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">1. The 4 Pillars of Your Score</h2>
                        <ul className="space-y-6 my-10 list-none p-0">
                            {[
                                { t: "Payment History (35%)", d: "One single delay (30+ days) can drop your score by 100 points instantly. Always pay 1 day early." },
                                { t: "Credit Utilization (30%)", d: "How much of your limit you use. High usage signals 'Credit Hunger' to the bank." },
                                { t: "Credit Mix (25%)", d: "A healthy mix of secured (Home/Car) and unsecured (Personal/CC) debt is seen as stable." },
                                { t: "New Credit (10%)", d: "Hard enquiries from multiple banks in a short time make you look desperate for funds." }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                                    <span className="text-indigo-600 font-black">P-0{idx+1}.</span>
                                    <div>
                                        <strong className="block text-slate-900 mb-1">{item.t}</strong>
                                        <span className="text-slate-500 text-sm font-medium">{item.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <h2 id="hacks" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. The 30% Utilization Hack</h2>
                        <p>
                            This is the fastest way to jump 50 points. If your card has a ₹1 Lakh limit, never cross ₹30k spend. 
                        </p>
                        <p className="font-bold underline decoration-indigo-600 underline-offset-4 italic-selection">Pro Trick: If you regularly spend ₹50,000, don't just pay it off. Call your bank and ask for a limit increase to ₹3 Lakhs. Now your ₹50k spend is only 16% utilization, and your score will soar within 45 days.</p>

                        <h2 id="math" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">3. Math: The Cost of a Bad Score</h2>
                        <p>
                            Let's look at a ₹50 Lakh Home Loan for 20 Years:
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 my-10 not-prose font-inter">
                            <div className="p-10 bg-indigo-50 rounded-[2.5rem] border border-indigo-100 border-l-8 border-l-indigo-600">
                                <h4 className="text-xl font-black text-indigo-900 mb-4 italic">CIBIL 800 (9.0%)</h4>
                                <ul className="list-none p-0 space-y-2 text-sm text-indigo-800 font-bold">
                                    <li>- EMI: ₹44,986</li>
                                    <li>- Total Interest: **₹57.9 Lakhs**</li>
                                </ul>
                            </div>
                            <div className="p-10 bg-rose-50 rounded-[2.5rem] border border-rose-100 border-l-8 border-l-rose-600">
                                <h4 className="text-xl font-black text-rose-900 mb-4 italic">CIBIL 650 (10.5%)</h4>
                                <ul className="list-none p-0 space-y-2 text-sm text-rose-800 font-bold">
                                    <li>- EMI: ₹49,919</li>
                                    <li>- Total Interest: **₹69.8 Lakhs**</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-center font-black text-2xl text-slate-900">Total Difference: <span className="text-rose-600 underline decoration-rose-200 underline-offset-8 italic">₹11.9 Lakhs</span></p>

                        <h2 id="roadmap" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. 6-Month Roadmap to 800</h2>
                        <ol>
                            <li>**Month 1**: Check your report for errors. Dispute any 'Active' loans that are already closed.</li>
                            <li>**Month 2**: Set all credit cards to 'Total Amount Due' autopay. Never pay just the minimum.</li>
                            <li>**Month 3**: Pay down total credit card utilization to below 30%.</li>
                            <li>**Month 4**: Don't close old credit cards. The "Age of Credit" accounts for 15% of your score.</li>
                            <li>**Month 5**: If you have zero history, get a 'Secured Credit Card' against an FD.</li>
                            <li>**Month 6**: Your score should have moved by 40-70 points if you haven't taken any new 'Hard Enquiries'.</li>
                        </ol>

                        <div className="my-24 p-14 bg-indigo-600 rounded-[4rem] text-white text-center shadow-3xl shadow-indigo-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Ready for that Home Loan?</h3>
                                <p className="text-indigo-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">See how your current score affects your loan eligibility in real-time.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.LOAN.ELIGIBILITY} className="px-12 py-6 bg-white text-indigo-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Check Loan Limit →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic text-indigo-900">Credit Score FAQ</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
