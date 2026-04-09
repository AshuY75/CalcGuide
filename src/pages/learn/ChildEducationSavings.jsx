import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function ChildEducationSavings() {
    const faqData = [
        {
            question: "How much education inflation should I assume for India?",
            answer: "While standard inflation (CPI) is around 6%, education inflation in India consistently averages 10-12%. This means a ₹10 Lakh engineering course today will likely cost over ₹40 Lakhs by the time your newborn is ready for college."
        },
        {
            question: "Is Sukanya Samriddhi Yojana (SSY) better than an SIP for a girl child?",
            answer: "SSY offers safety and tax-free returns (8.2%), which is excellent for the debt portion of your portfolio. However, for a 15-year goal, an Equity SIP (targeting 13-15%) is better for the growth portion. A 70-30 split between SIP and SSY is often the most balanced approach."
        },
        {
            question: "What happens if I stop my child's SIP in between?",
            answer: "If you stop, you lose the power of compounding. For education goals, consistency is vital. If you face a cash crunch, it is better to 'Pause' the SIP for a month rather than redeeming the accumulated corpus."
        },
        {
            question: "Should I buy a 'Child Insurance Plan' (ULIP)?",
            answer: "Usually, no. Most 'child plans' have high hidden commissions and low returns. It is often mathematically better to buy a 'Pure Term Insurance' for the parent and invest the remaining money in high-quality Equity Mutual Funds (Growth plans)."
        },
        {
            question: "When should I start moving money to safer options like FD/Debt?",
            answer: "Follow the '3-Year Rule'. If your child needs the money for college at age 18, start moving 20-25% of the accumulated corpus every year from age 15 to a safe Debt Fund or FD. This protects the money from a sudden market crash right before you need it."
        }
    ];

    const toc = [
        { id: "inflation", title: "The 10% Education Inflation Truth" },
        { id: "goal", title: "Math: Planning for ₹50 Lakhs" },
        { id: "ssy", title: "SSY: The Debt Fortress" },
        { id: "sip", title: "Mutual Funds: The Growth Engine" },
        { id: "protection", title: "Insurance: The Non-Negotiable Step" },
        { id: "strategy", title: "The '3-Phase' Timeline" },
        { id: "faq", title: "Education Planning FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Goal Architecture</h4>
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
                            
                            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 italic text-sm text-blue-700 leading-relaxed shadow-sm">
                                "Saving for your child is the most emotional investment you'll ever make. Don't let emotions drive the asset allocation; let math lead the way."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-blue-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-blue-50 rounded">Education Planning</span>
                                <span>•</span>
                                <span>25 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Breaking the <span className="text-blue-600 underline underline-offset-8">₹50 Lakh</span> Barrier: A Blueprint for Child Education (2025)
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                If you want your child to study in a Tier-1 college in 2040, "saving" is a losing battle. You need a **Strategic Wealth Blueprint**.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-blue-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                                The "Education Inflation" Reality
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                                <div>
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3 italic">Today (2025)</p>
                                    <p className="text-2xl font-black text-white italic">₹15 Lakhs</p>
                                    <p className="text-[10px] text-slate-400 mt-3 font-medium">Average 4-yr Private Engg.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-12">
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3 italic">In 15 Years (2040)</p>
                                    <p className="text-2xl font-black text-blue-400 italic">₹62.6 Lakhs</p>
                                    <p className="text-[10px] text-slate-400 mt-3 font-medium">At 10% annual inflation</p>
                                </div>
                                <div className="border-l border-slate-800 pl-12">
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3 italic">The SIP Needed</p>
                                    <p className="text-2xl font-black text-white italic">₹10,500 /mo</p>
                                    <p className="text-[10px] text-slate-400 mt-3 font-medium">To reach ₹62L at 13% CAGR</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-sm">"If you aren't factoring in 10% inflation, your child will have to take an education loan later."</p>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP_GOAL} className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-lg hover:-translate-y-1">
                                    Start Goal Planning →
                                </Link>
                            </div>
                        </div>

                        <p>
                            In India, the most respected form of "Middle Class Success" is the quality of your child's education. Parents routinely sacrifice their own comfort, vacations, and even retirement to fund a foreign degree or a premium Indian MBA.
                        </p>
                        
                        <p>
                            But the problem isn't the **intent**; it's the **math**. Most parents save money in an FD or a traditional 'Insurance Child Plan' (LIC type). These offer 5-6% returns. In a world where college fees grow at 10-12%, these parents are actually *losing* value every year.
                        </p>

                        <h2 id="inflation" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. The "10% Inflation" Truth: Why ₹10 Lakhs is the new Zero</h2>
                        <p>
                            We look at inflation as CPI (Consumer Price Index), which is around 6%. But education is a specialized service. Books, technology, faculty salaries, and campus infrastructure grow much faster.
                        </p>
                        <p>
                            If you have a 3-year-old child today, you have roughly **15 years** to build the corpus. 
                        </p>
                        <p>
                            - A Tier-1 private MBA today: **₹25 Lakhs**.
                            - In 15 years, at 10% inflation: **₹1.04 Crores**.
                        </p>
                        <p>
                            Unless your investment is growing at 12-15%, you will either fall short or be forced to touch your retirement fund.
                        </p>

                        <h2 id="goal" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Math: Planning for the ₹50 Lakh Goal</h2>
                        <p>
                            Let's take a realistic target of **₹50 Lakhs** for high-quality Indian undergraduate education (Engineering + Extras).
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
                            <div className="p-8 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-sm">
                                <h4 className="text-xl font-black text-slate-900 mb-4">The Savings Account Path</h4>
                                <p className="text-4xl font-black text-rose-500 italic mb-4">₹27,700</p>
                                <p className="text-slate-500 text-sm font-medium">Monthly amount needed if kept in a 3.5% Savings A/c for 15 years.</p>
                            </div>
                            <div className="p-8 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 bg-emerald-500 text-white text-[8px] font-black uppercase">The Winner</div>
                                <h4 className="text-xl font-black text-slate-900 mb-4">The Equity SIP Path</h4>
                                <p className="text-4xl font-black text-emerald-600 italic mb-4">₹8,500</p>
                                <p className="text-slate-500 text-sm font-medium">Monthly amount needed if invested in Equity (13% CAGR) for 15 years.</p>
                            </div>
                        </div>

                        <h2 id="ssy" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. SSY: The Debt Fortress (Only for Daughters)</h2>
                        <p>
                            If you have a girl child, the **Sukanya Samriddhi Yojana (SSY)** is non-negotiable. 
                        </p>
                        <ul>
                            <li><strong>Return</strong>: 8.2% (Currently the highest in safe debt).</li>
                            <li><strong>Tax</strong>: EEE Status (100% Tax-free maturity).</li>
                            <li><strong>Lock-in</strong>: Till the child turns 21 (Perfect alignment with higher education).</li>
                        </ul>
                        <p>
                            However, don't put 100% of the money here. SSY barely beats inflation. Use it for the **Saftey portion** (30-40%) of the goal.
                        </p>

                        <h2 id="sip" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">4. Equity SIP: The Growth Engine</h2>
                        <p>
                            For the remaining 60-70%, use a mix of **Index Funds (Nifty 50)** and **Flexi-Cap Funds**. 
                        </p>
                        <p>
                            - **Volatility is your friend**: Over 15 years, the dips in the market allow you to buy more units through your SIP. 
                            - **Transparency**: You can track the goal progress every month on your phone.
                        </p>

                        <div className="my-16 flex flex-col md:flex-row gap-10 items-center bg-slate-100 p-10 rounded-[3rem] not-prose">
                            <div className="flex-shrink-0 w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center text-5xl text-white">💰</div>
                            <div>
                                <h4 className="text-2xl font-black text-slate-900 mb-2">The "Step-Up" Hack</h4>
                                <p className="text-slate-600 font-medium italic-selection leading-relaxed">
                                    Increase your child's SIP by **10% every year** as your salary increases. Starting with ₹8,500 and stepping up 10% annually results in **₹88 Lakhs** instead of ₹50 Lakhs! That extra ₹38L is for their Masters degree.
                                </p>
                            </div>
                        </div>

                        <h2 id="protection" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5. Insurance: The "Zero-Risk" Layer</h2>
                        <p>
                            What if something happens to you? The best education plan fails if the breadwinner is gone. 
                        </p>
                        <p>
                            - **Term Insurance**: Every parent must have a Pure Term Cover (₹1 - 2 Crore). It ensures that the funds for education reach the child even if you aren't there to pay the SIP.
                            - **Avoid ULIPs**: Traditional "Child Insurance" products offered by banks usually have low life cover and poor returns (4-5%). Buy a term plan and do an SIP separately. **Always.**
                        </p>

                        <h2 id="strategy" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic underline decoration-blue-600">6. The "3-Phase" Timeline</h2>
                        <div className="space-y-12 my-16">
                            {[
                                { t: "Phase 1: Accumulation (Age 0 - 12)", d: "Go aggressive. 80% Equity, 20% Debt. Focus on maximum units. Don't check the portfolio every day." },
                                { t: "Phase 2: Consolidation (Age 13 - 15)", d: "Shift to 50% Equity, 50% Debt. Start locking in the gains you made over the last decade. Reduce volatility." },
                                { t: "Phase 3: Preservation (Age 16 - 18)", d: "Shift 100% to liquid funds or FD. You cannot afford a portfolio drop of 10% just 6 months before the college admission deadline." }
                            ].map((phase, idx) => (
                                <div key={idx} className="flex gap-8 group">
                                    <div className="flex-shrink-0 w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-3xl font-black group-hover:bg-blue-600 transition-colors shadow-lg">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 mb-2 italic">{phase.t}</h4>
                                        <p className="text-slate-600 text-lg leading-relaxed font-medium italic-selection">{phase.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="my-24 p-14 bg-blue-600 rounded-[4rem] text-white text-center shadow-3xl shadow-blue-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">One Decision. One Lifetime of Opportunity.</h3>
                                <p className="text-blue-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Find your magic number. See exactly how much SIP is needed for your child's specific age and goal.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP_GOAL} className="px-12 py-6 bg-white text-blue-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Open Goal Planner →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.STEP_UP_SIP} className="px-12 py-6 bg-blue-950 text-white font-black rounded-3xl hover:bg-black transition-all border border-blue-400/30">
                                        Try Step-Up Math
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic italic-selection">Parenting & Finance Doubts</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
