import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';
import ArticleHeader from '../../components/ArticleHeader';
import RelatedContent from '../../components/RelatedContent';

export default function HowMuchSIPReturns() {
    const faqData = [
        {
            question: "Is ₹5,000 per month enough to reach ₹1 Crore?",
            answer: "Yes, but you need either Time or a Step-Up. A static ₹5,000 SIP at 12% takes ~26 years to hit ₹1 Cr. However, if you increase your SIP by 10% every year ('Step-Up'), you can reach ₹1 Crore in just 19 years."
        },
        {
            question: "What is the best type of Mutual Fund for a 20-year SIP?",
            answer: "For a 2-decade horizon, many experts suggest a mix: 50% in an Index Fund (Nifty 50) for stability, and 50% in a Flexi-cap or Mid-cap fund for alpha (extra returns). Historically, this balanced approach has delivered 13-15% CAGR in India."
        },
        {
            question: "Should I stop my SIP if the market crashes by 20%?",
            answer: "No! Market crashes are 'Discount Sales'. Your ₹5,000 buys MORE units when prices are low. This is called Rupee Cost Averaging. Investors who continued their SIPs during the 2008 or 2020 crashes made the most wealth in the subsequent recovery."
        },
        {
            question: "How is SIP profit taxed in India after 2025?",
            answer: "Equity profits are taxed as Long Term Capital Gains (LTCG) if held for >1 year. As per current rules, the first ₹1.25 Lakh of profit every year is tax-free. Gains above that are taxed at 12.5%."
        },
        {
            question: "Can I withdraw my SIP money anytime?",
            answer: "Most Mutual Funds (except ELSS) have no lock-in. You can withdraw in 2-3 working days. However, withdrawing early kills the power of compounding. Think of your SIP as a 10-year+ commitment."
        }
    ];

    const toc = [
        { id: "hockey-stick", title: "The 'Hockey Stick' Curve: Year 1 to 20" },
        { id: "inflation", title: "The Vada Pav Index: Inflation Reality" },
        { id: "stepup", title: "The 10% Step-Up hack (Wealth Multiplier)" },
        { id: "comparison", title: "Asset Battle: Small-Cap vs Index" },
        { id: "tax", title: "Taxation: LTCG 12.5% Simplified" },
        { id: "paisa-double", title: "The Rule of 72: When will it double?" },
        { id: "faq", title: "Common SIP Questions" }
    ];

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Plan your ₹5,000 Monthly SIP",
        "step": [
            {
                "@type": "HowToStep",
                "text": "Choose a Diversified Flexi-cap or Index Fund with a low expense ratio (<1%)."
            },
            {
                "@type": "HowToStep",
                "text": "Automate the SIP for the 1st or 5th of every month (right after salary)."
            },
            {
                "@type": "HowToStep",
                "text": "Enable 'Auto-step up' of 10% yearly to beat inflation."
            },
            {
                "@type": "HowToStep",
                "text": "Forget the 'Sell' button. High wealth is created in the 3rd decade of investing, not the 1st."
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white">
            <ArticleHeader 
                title="₹5,000/Month SIP: How Crorepati Dreams are Built in India"
                category="Wealth Creation"
                readTime="22 min read"
                date="April 2025"
            />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-4 font-inter">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Wealth Mastery</h4>
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
                            
                            <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 italic text-sm text-indigo-700 leading-relaxed shadow-sm">
                                "Waiting to invest is like waiting for a train that has already left the station. The best time to start was yesterday. The second best time is now."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium mb-12">
                            Think ₹5,000 is too small? That's the price of a fancy dinner or a new pair of sneakers. But in the parallel world of Compounding, ₹5,000 is a seed that grows into a massive Banyan Tree.
                        </p>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-emerald-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                                The 20-Year Wealth Matrix
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-2">Total Invested</p>
                                        <p className="text-4xl font-black text-white italic">₹12,00,000</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-2">Wait Time</p>
                                        <p className="text-4xl font-black text-white italic text-selection-amber">240 Months</p>
                                    </div>
                                </div>
                                <div className="p-8 bg-emerald-600 rounded-3xl flex flex-col justify-center shadow-xl transform hover:scale-105 transition-transform duration-500">
                                    <p className="text-emerald-100 text-xs font-black uppercase tracking-widest mb-2">Final Corpus (at 12%)</p>
                                    <p className="text-5xl font-black text-white">₹50,00,000</p>
                                    <p className="text-xs text-emerald-200 mt-4 font-bold opacity-80">Profit: ~₹38 Lakhs (315% Return)</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-md">"The stock market is a device for transferring money from the impatient to the patient."</p>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-10 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-slate-100 transition-all shadow-lg hover:-translate-y-1">
                                    Plan My SIP →
                                </Link>
                            </div>
                        </div>

                        <p>
                            We live in a world of instant gratification. Instamart delivers in 10 minutes, and we get bored if a YouTube short is longer than 60 seconds. But **Wealth Creation is slow-cooked**. 
                        </p>
                        
                        <p>
                            India is currently in a "Golden Decade". With more people moving from savings accounts to mutual funds, the question is no longer *if* you should invest, but *where* and *for how long*. 
                        </p>

                        <h2 id="hockey-stick" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. The "Hockey Stick" Curve: Why Year 18 is Magic</h2>
                        <p>
                            Most people quit their SIPs in the 3rd or 4th year because "paisa badh nahi raha" (money isn't growing). They don't understand that compounding is back-heavy.
                        </p>
                        <p>
                            Let's look at the growth of a ₹5,000 monthly SIP at 12%:
                        </p>
                        <ul>
                            <li><strong>Year 5</strong>: Value is ₹4.1 Lakhs. Profit is just ~₹1.1 Lakh. (Meh!)</li>
                            <li><strong>Year 10</strong>: Value is ₹11.6 Lakhs. Profit is ~₹5.6 Lakhs. (Getting interesting...)</li>
                            <li><strong>Year 15</strong>: Value is ₹25.2 Lakhs. Profit is ~₹16.2 Lakhs. (Now we're talking!)</li>
                            <li><strong>Year 20</strong>: Value is **₹50.0 Lakhs**. Profit is **₹38 Lakhs**.</li>
                        </ul>
                        <p className="bg-slate-100 p-8 rounded-3xl border border-slate-200 font-bold text-slate-800 italic">
                            Notice the jump? Between year 15 and 20 (just 5 years), your wealth jumped by **₹25 Lakhs**. That's more growth in the last 5 years than in the first 15 years combined!
                        </p>

                        <h2 id="inflation" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. The Vada Pav Index: Beating the Silent Killer</h2>
                        <p>
                            Inflation in India is officialy 5-6%, but for middle-class lifestyle components (Education, Medical, Eating out), it's closer to **8-10%**.
                        </p>
                        <p>
                            If you reach ₹50 Lakhs in 2045, what will it buy?
                        </p>
                        <p>
                            In the 1990s, a Vada pav was ₹2. Today it is ₹15-20. That is a **10x jump in 30 years**. If you don't grow your money at 12-15%, you are actually becoming poorer every day while thinking you are 'saving'.
                        </p>

                        <h2 id="stepup" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. The 10% Step-Up: The most powerful Math in Finance</h2>
                        <p>
                            If you want to reach ₹1 Crore faster, you don't need a massive salary. You just need a "Step-Up".
                        </p>
                        <p>
                            What is Step-Up? It means every year, you increase your ₹5,000 SIP by just **10%** (i.e., ₹500 extra next year).
                        </p>
                        
                        <div className="my-12 overflow-hidden border border-slate-200 rounded-[2.5rem] shadow-2xl relative not-prose">
                            <div className="absolute top-0 left-0 w-2 h-full bg-emerald-600"></div>
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest leading-none">Strategy (20 Years)</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest leading-none">Total Invested</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest leading-none">Wealth Created</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-8 text-slate-600 font-bold italic">Static ₹5,000 SIP</td>
                                        <td className="p-8 text-slate-500 font-medium">₹12,00,000</td>
                                        <td className="p-8 text-slate-900 font-black text-xl">₹50.0 Lakhs</td>
                                    </tr>
                                    <tr className="hover:bg-emerald-50/30 transition-colors bg-emerald-50/20">
                                        <td className="p-8 text-emerald-900 font-black text-xl">10% Yearly Step-Up</td>
                                        <td className="p-8 text-emerald-700 font-bold">₹34,30,000</td>
                                        <td className="p-8 text-emerald-600 font-black text-4xl">₹1.18 Crores</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-center font-bold text-slate-500 italic">By just adding ₹500/year to your investment, you **more than doubled** your final wealth. That is the magic of the Step-Up.</p>

                        <h2 id="comparison" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. Asset Battle: Where should your ₹5000 go?</h2>
                        <p>
                            Returns vary by the 'risk' you take. Let's compare 10-year average returns of Indian assets:
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 my-10 not-prose">
                            <div className="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-sm text-center">
                                <span className="block text-slate-400 font-black text-xs uppercase mb-3 tracking-widest">Nifty 50 Index</span>
                                <span className="text-indigo-600 text-3xl font-black">12-13%</span>
                                <p className="text-xs text-slate-500 mt-4 font-bold">Low Risk | High Stability</p>
                            </div>
                            <div className="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-sm text-center">
                                <span className="block text-slate-400 font-black text-xs uppercase mb-3 tracking-widest">Flexi-Cap / Bluechip</span>
                                <span className="text-emerald-600 text-3xl font-black">14-15%</span>
                                <p className="text-xs text-slate-500 mt-4 font-bold">Balanced Risk | Medium Stability</p>
                            </div>
                            <div className="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-sm text-center">
                                <span className="block text-slate-400 font-black text-xs uppercase mb-3 tracking-widest">Small-Cap Funds</span>
                                <span className="text-rose-600 text-3xl font-black">18-22%*</span>
                                <p className="text-xs text-slate-500 mt-4 font-bold">Extreme Risk | High Volatility</p>
                            </div>
                        </div>
                        <p className="text-sm italic text-slate-400">*Small-cap returns are spectacular in bull runs but can be zero for 3-4 years in bear markets. Only invest if your tenure is &gt;7 years.</p>

                        <h2 id="tax" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5. Taxation: The 12.5% Bite</h2>
                        <p>
                            From 2025, India simplified LTCG (Long-term Capital Gains). If you sell after 1 year:
                        </p>
                        <ul>
                            <li><strong>Exemption</strong>: First ₹1.25 Lakh profit every year is **FREE**.</li>
                            <li><strong>Tax</strong>: Anything above ₹1.25L is taxed at **12.5%**.</li>
                        </ul>
                        <p>
                            Compared to FD taxes (which can be up to 30% for someone in the high tax bracket), SIPs remain the most tax-efficient way to build a legacy in India.
                        </p>

                        <div className="my-24 p-14 bg-emerald-600 rounded-[4rem] text-white text-center shadow-3xl shadow-emerald-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Your Roadmap to 1 Crore Starts Here</h3>
                                <p className="text-emerald-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90">Calculate exactly when you will hit your first Crore based on your current savings and step-up ability.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-12 py-6 bg-white text-emerald-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Open SIP Calculator →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.STEP_UP_SIP} className="px-12 py-6 bg-emerald-950 text-white font-black rounded-3xl hover:bg-black transition-all border border-emerald-400/30">
                                        Check Step-Up Advantage
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <h2 id="paisa-double" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">6. The Rule of 72: When will my money double?</h2>
                        <p>
                            Want to know how fast your wealth doubles? Use the **Rule of 72**. Divide 72 by your expected interest rate. 
                        </p>
                        <ul className="list-none p-0 flex flex-wrap gap-4 not-prose">
                            <li className="px-6 py-3 bg-slate-100 rounded-full font-bold text-slate-700">72 / 12% = <span className="text-emerald-600">6 Years</span></li>
                            <li className="px-6 py-3 bg-slate-100 rounded-full font-bold text-slate-700">72 / 15% = <span className="text-emerald-600">4.8 Years</span></li>
                            <li className="px-6 py-3 bg-slate-100 rounded-full font-bold text-slate-700">72 / 18% = <span className="text-emerald-600">4 Years</span></li>
                        </ul>
                        <p className="mt-8 font-medium">As you reach the later stages of your 20-year SIP, your corpus will double in value every 5-6 years! This is why you should never withdraw for minor luxuries like a new car.</p>

                        <section id="how-to" className="bg-slate-50 p-14 rounded-[3rem] my-24 border border-slate-200">
                            <h3 className="mt-0 font-black text-3xl mb-10 tracking-tighter">Mastering the ₹5,000 SIP Strategy</h3>
                            <script type="application/ld+json">
                                {JSON.stringify(howToSchema)}
                            </script>
                            <div className="space-y-10">
                                {[
                                    { t: "Automate or Regret", d: "Set an Autopay for the 1st of every month. If you wait till the 30th to 'save what is left', you will never save anything." },
                                    { t: "The 10% Protocol", d: "Commit to increasing your SIP by 10% every time you get an appraisal. It keeps your lifestyle inflation from stealing your future." },
                                    { t: "Review, Don't React", d: "Check your portfolio once a year, not every day. One bad quarter doesn't mean your fund has failed." },
                                    { t: "Rebalance at 15 Years", d: "When you are 3-5 years away from your goal, move your profits into a liquid or debt fund to protect them from a sudden market crash." }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-8">
                                        <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-lg">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <p className="text-2xl font-black text-slate-900 mb-2">{step.t}</p>
                                            <p className="text-slate-500 font-medium leading-relaxed italic-selection">{step.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <AuthorBio />

                        <div className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic italic-selection">Your SIP Doubts, Answered</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                        <RelatedContent category="INVESTMENT" currentPath={window.location.pathname} />

                    </div>
                </div>
            </main>
        </div>
    );
}
