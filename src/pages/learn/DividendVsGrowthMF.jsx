import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function DividendVsGrowthMF() {
    const faqData = [
        {
            question: "Is Dividend in a mutual fund similar to a company dividend?",
            answer: "No. When a company pays a dividend, it’s from its profits. When a mutual fund pays a dividend (IDCW), it simply takes some of YOUR own invested money and gives it back to you. Your NAV falls by the exact amount of the dividend paid."
        },
        {
            question: "How is Mutual Fund Dividend taxed in 2025?",
            answer: "Dividends are added to your total income and taxed at your income tax slab rate (up to 30%). In contrast, if you choose the Growth option and sell after 1 year, you only pay 12.5% LTCG tax. This makes Dividends highly tax-inefficient for high earners."
        },
        {
            question: "What is the 'Growth' option in Mutual Funds?",
            answer: "In the Growth option, any profits made by the fund are reinvested back into the scheme. This allows your money to compound faster because you aren't leaking money out of the portfolio periodically."
        },
        {
            question: "Can I switch from Dividend to Growth option?",
            answer: "Yes, you can switch, but it is considered as 'selling' your dividend units and 'buying' growth units. This may trigger capital gains tax depending on how long you held the units."
        },
        {
            question: "I want monthly income. Should I choose the Dividend option?",
            answer: "No. A better way to get monthly income is to choose the **Growth Option** and setup a **Systematic Withdrawal Plan (SWP)**. SWP is much more tax-efficient and gives you a predictable amount every month."
        }
    ];

    const toc = [
        { id: "trap", title: "The Dividend 'Regular Income' Trap" },
        { id: "idcw", title: "Deciphering IDCW: What it actually means" },
        { id: "taxation", title: "Taxation: Why Growth wins for HNI" },
        { id: "compounding", title: "The Compounding Leak" },
        { id: "swp", title: "SWP: The Smarter Alternative" },
        { id: "faq", title: "Mutual Fund Option FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Portfolio Strategy</h4>
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
                                "Dividends in mutual funds are just like taking money out of your left pocket and putting it into your right pocket—and paying tax to the government in the middle."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-indigo-50 rounded">Wealth Management</span>
                                <span>•</span>
                                <span>18 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Dividend vs Growth Mutual Fund: Stop Falling for the <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Income Myth</span>
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Do you love seeing "Dividend Credited" SMS in your phone? It might feel like a gift, but in 2025, it’s one of the most expensive mistakes you can make.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-indigo-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
                                The Verdict at a Glance
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                                <div>
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">Growth Option (The Alpha)</p>
                                    <p className="text-3xl font-black text-white italic">Best for Long-term</p>
                                    <p className="text-xs text-slate-400 mt-3 font-medium">No 'leakage'. 12.5% Tax (LTCG). Maximum Compounding.</p>
                                </div>
                                <div className="border-l border-slate-800 md:pl-16">
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">IDCW / Dividend (The Trap)</p>
                                    <p className="text-3xl font-black text-rose-500 italic">Worst for High-Tax Slabs</p>
                                    <p className="text-xs text-slate-400 mt-3 font-medium">Your slab tax (up to 30%). NAV reduction. No compounding.</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-sm">"In 2025, there is almost no scenario where a person in the 20-30% tax bracket should choose a Dividend MF."</p>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-8 py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition-all shadow-lg hover:-translate-y-1">
                                    Calculate My Potential Wealth →
                                </Link>
                            </div>
                        </div>

                        <p>
                            We Indians love "Regular Cash". We buy apartments for rent, we buy stocks for dividends, and we choose the "Dividend" option in Mutual Funds because it makes us feel like we are getting some profit while keeping the principal safe.
                        </p>
                        
                        <p>
                            That logic works for Rent. It works for Stock Dividends. But it is **100% false** for Mutual Funds. Since SEBI renamed the Dividend option to **IDCW (Income Distribution cum Capital Withdrawal)**, they literally told you it’s your own capital you’re withdrawing.
                        </p>

                        <h2 id="trap" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. The "Regular Income" Trap: NAV Destruction</h2>
                        <p>
                            When a mutual fund declares a dividend, they don't print new money. They look at the current value of your units (NAV) and cut a slice out of them.
                        </p>
                        <p>
                            **Example**:
                            - You own 1,000 units of a fund with NAV: **₹100**. (Total Value: ₹1 Lakh).
                            - The fund announces a **₹5 Dividend**. 
                            - You get **₹5,000** in your bank account.
                            - Immediately, your fund's NAV drops to **₹95**. (Total Value: ₹95,000).
                        </p>
                        <p>
                            You now have the same ₹1 Lakh, but you’ve just **forced a withdrawal** that you might not even have needed!
                        </p>

                        <h2 id="taxation" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Taxation: The Silent Killer of Returns</h2>
                        <p>
                            Before 2020, Dividends were taxed at the AMC level (DDT). Now, they are taxed directly in your hands.
                        </p>
                        <ul>
                            <li><strong>Scenario A (Dividend)</strong>: You earn ₹1 Lakh in dividends. You are in the 30% tax bracket. You pay **₹30,000** as tax. Net in hand: ₹70,000.</li>
                            <li><strong>Scenario B (Growth)</strong>: You let that ₹1 Lakh stay in the fund. You sell it after 1 year. Even after the 2025 hike, you only pay **12.5% LTCG** (and the first ₹1.25L profit is exempt!). You pay **₹12,500** max.</li>
                        </ul>
                        <p className="bg-rose-50 p-8 rounded-3xl border border-rose-100 font-bold text-rose-900">
                            Conclusion: You lose 17.5% of your wealth simply by choosing the wrong word ('Dividend' vs 'Growth') in your application form.
                        </p>

                        <h2 id="compounding" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. The Compounding Leak: Why your corpus stays small</h2>
                        <p>
                            Compounding is like a snowball. Every time it rolls, it gets larger because it picks up the snow it just gathered.
                        </p>
                        <p>
                            Choosing the Dividend option is like **scraping off the outer layer of the snowball** every month. The core stays small. After 20 years, a Growth fund will have a massive snowball, while your Dividend fund will still have a small one because you kept "cleaning it off".
                        </p>

                        <h2 id="swp" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. SWP: The Smarter "Pension" Alternative</h2>
                        <p>
                            If you actually NEED regular monthly income (for retirees or parents), the solution is not the Dividend option. It is the **Systematic Withdrawal Plan (SWP)**.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
                            <div className="p-10 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-sm">
                                <h4 className="text-2xl font-black text-slate-900 mb-4 italic">Dividend Option</h4>
                                <ul className="space-y-3 text-slate-500 font-medium list-none p-0">
                                    <li className="flex gap-2"><span>×</span> Unpredictable amount.</li>
                                    <li className="flex gap-2"><span>×</span> High Tax (Income slab).</li>
                                    <li className="flex gap-2"><span>×</span> Not guaranteed every month.</li>
                                </ul>
                            </div>
                            <div className="p-10 bg-emerald-50 border-2 border-emerald-100 rounded-[2.5rem] shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 bg-emerald-500 text-white text-[10px] font-black uppercase">Champion</div>
                                <h4 className="text-2xl font-black text-emerald-900 mb-4 italic">SWP Option</h4>
                                <ul className="space-y-3 text-emerald-800 font-medium list-none p-0">
                                    <li className="flex gap-2"><span>✓</span> Fixed amount (Ex: ₹20k/mo).</li>
                                    <li className="flex gap-2"><span>✓</span> Low Tax (Capital Gains only).</li>
                                    <li className="flex gap-2"><span>✓</span> Highly predictable cash flow.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="my-24 p-14 bg-indigo-600 rounded-[3.5rem] text-white text-center shadow-3xl shadow-indigo-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Income should be Smart, not Tax-Heavy.</h3>
                                <p className="text-indigo-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Our SWP calculator simulates exactly how much you can withdraw monthly while keeping your principal safe from taxes.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.SWP} className="px-12 py-6 bg-white text-indigo-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Run SWP Simulation →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="px-12 py-6 bg-indigo-950 text-white font-black rounded-3xl hover:bg-black transition-all border border-indigo-400/30">
                                        Check SIP Growth
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic italic-selection">MF Options Doubts</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
