import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function GiftTaxRules() {
    const faqData = [
        {
            question: "Is money received from parents taxable as a gift?",
            answer: "No. Money received from 'specified relatives' including parents, spouse, siblings, and children is 100% tax-free in India, regardless of the amount. However, any income earned from that gift (like interest on an FD) will be taxable."
        },
        {
            question: "What is the gift tax limit for friends?",
            answer: "If you receive more than ₹50,000 from non-relatives (friends, colleagues, etc.) in a single financial year, the entire amount becomes taxable as 'Income from Other Sources' at your tax slab rate."
        },
        {
            question: "Are wedding gifts taxable in India?",
            answer: "No. Gifts received on the occasion of your marriage are 100% tax-free, even if they come from non-relatives, provided they are received 'on' the wedding date or very close to it."
        },
        {
            question: "Is a gift deed mandatory for cash transfers?",
            answer: "While not strictly mandatory for small amounts, a 'Gift Deed' or a simple declaration on plain paper is highly recommended for large transfers (like ₹5 Lakhs from a brother). This helps explain the source of funds to the Income Tax Department if you get a notice."
        },
        {
            question: "Can I gift money to my minor child to save tax?",
            answer: "You can gift money, but under 'Clubbing of Income' rules, any interest or profit earned by the minor child on that money will be added back to your (the parent's) income and taxed accordingly."
        }
    ];

    const toc = [
        { id: "concept", title: "The 'Relative' Shield: Who is exempt?" },
        { id: "limit", title: "The ₹50,000 Threshold for Friends" },
        { id: "wedding", title: "The Wedding Exception" },
        { id: "clubbing", title: "Clubbing Rules: The Trap for Parents" },
        { id: "deed", title: "Why you need a Gift Deed" },
        { id: "faq", title: "Gift Tax FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Capital Management</h4>
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
                            
                            <div className="p-6 bg-rose-50/50 rounded-2xl border border-rose-100 italic text-sm text-rose-700 leading-relaxed shadow-sm">
                                "In India, money given with love (by relatives) is generally free from tax. But money given by strangers (or friends) over ₹50,000 is treated like income."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-rose-600 hover:prose-a:text-rose-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-rose-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-rose-50 rounded">Tax Planning</span>
                                <span>•</span>
                                <span>18 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Gift Tax Rules in India: How to Transfer <span className="text-rose-600 underline decoration-rose-200 decoration-8 underline-offset-8">Money Tax-Free</span> 
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Received a large sum from a sibling? Or planning to help a friend? Before you hit 'Send' on that IMPS, you need to understand the ₹50,000 trap.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-rose-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></span>
                                The "Gifting" Cheat-Sheet
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 font-inter">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Relatives</p>
                                    <p className="text-3xl font-black text-white italic">Zero Tax</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Spouse, Parents, Sibling, Children. No limit on amount.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Friends/Others</p>
                                    <p className="text-3xl font-black text-white italic">₹50,000</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Exempt up to 50k/year. Entire sum taxable above this.</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Weddings</p>
                                    <p className="text-3xl font-black text-emerald-400 italic">Unlimited</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">All gifts received on marriage are 100% tax-free.</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-sm">"In the eyes of the Income Tax Dept, every transfer is income unless you can prove it's a gift from a relative."</p>
                                <Link to={ROUTES.CALCULATORS.TAX.INCOME} className="px-8 py-4 bg-rose-600 text-white font-black rounded-2xl hover:bg-rose-700 transition-all shadow-lg hover:-translate-y-1">
                                    Estimate My Total Tax →
                                </Link>
                            </div>
                        </div>

                        <p>
                            India abolished the "Gift Tax Act" in 1998, but that didn't mean gifts became tax-free. The government simply moved gift taxation into the **Income Tax Act** under the head "Income from Other Sources".
                        </p>
                        
                        <p>
                            Today, there is a lot of confusion. Can I gift money to my parents to save tax? Can my NRI brother send me ₹10 Lakhs? What happens if a friend helps me with ₹1 Lakh during a medical emergency? Let's decode the formal rules.
                        </p>

                        <h2 id="concept" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. The "Relative" Shield: Who is Exempt?</h2>
                        <p>
                            In India, gifts from "specified relatives" are 100% tax-free, no matter how large the sum is. But the definition of 'Relative' is specifically defined by the IT Department.
                        </p>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 italic-selection font-medium text-slate-700 leading-loose">
                            <strong>Official Relatives List:</strong>
                            <br />- Spouse (Husband/Wife)
                            <br />- Brother or Sister (and their spouses)
                            <br />- Brother or Sister of your Spouse (and their spouses)
                            <br />- Brother or Sister of either of your Parents (Mausa, Bua, Chacha, Mama)
                            <br />- Any Lineal Ascendant or Descendant (Parents, Grandparents, Children, Grandchildren)
                            <br />- Spouse of any person mentioned above.
                        </div>
                        <p className="font-bold text-rose-600 mt-6">⚠️ CRITICAL: Cousins are NOT considered relatives under Income Tax law. If your cousin gifts you ₹1 Lakh, it is fully taxable!</p>

                        <h2 id="limit" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic">2. The ₹50,000 Threshold for Friends</h2>
                        <p>
                            If you receive gifts (cash, cheque, property, or jewelry) from non-relatives, you have an annual exemption limit of **₹50,000**.
                        </p>
                        <p>
                            **The Trap**: This is a aggregate limit, not per person.
                            - Friend A gives you ₹30,000. (Tax Free)
                            - Friend B gives you ₹21,000. (Total now ₹51,000)
                            - **Result**: You pay tax on the entire **₹51,000**, not just the extra ₹1,000.
                        </p>

                        <h2 id="wedding" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. The Wedding Exception: The Golden Day</h2>
                        <p>
                            The most common way large sums move is during weddings. The Income Tax Department is generous here. Any gift received on the occasion of your marriage is **exempt from tax**, even if it comes from your neighbors or colleagues.
                        </p>
                        <p className="font-medium">Pro Tip: Always maintain a list of gifts and ensure major cash gifts are deposited into your bank account around the wedding date. Documentation is key if you ever face an inquiry.</p>

                        <h2 id="clubbing" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic decoration-rose-600">4. Clubbing Rules: The Strategy to Save Tax</h2>
                        <p>
                            Many smart investors gift money to their **parents** or **major children (above 18)** to shift their tax burden.
                        </p>
                        <ul>
                            <li><strong>Parental Gift</strong>: If your father is in the 0% tax bracket and you are in the 30% bracket, you can gift him money. He invests it in an FD. The interest income is taxed in HIS hands (0%), saving you a lot.</li>
                            <li><strong>Minor Child Trap</strong>: If you gift money to a child under 18, any interest earned will be **clubbed** with your income. This is a dead end for tax saving.</li>
                        </ul>

                        <h2 id="deed" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5. Why you need a Gift Deed</h2>
                        <p>
                            A Gift Deed is a simple document where the "Donor" (Giver) states they are giving the money out of love and affection, and the "Donee" (Receiver) accepts it. 
                        </p>
                        <p>
                            **Is it mandatory?** Not for cash/cheques to relatives, but highly recommended for amounts above ₹1 Lakh. If the IT department asks "Where did this ₹5 Lakhs in your account come from?", you just show the Gift Deed and your brother's PAN card. End of story.
                        </p>

                        <div className="my-24 p-14 bg-rose-600 rounded-[4rem] text-white text-center shadow-3xl shadow-rose-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-rose-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Know your tax liability before you file.</h3>
                                <p className="text-rose-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Our tax calculator includes all heads of income, including 'Income from Other Sources' for gifts and interest.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.TAX.INCOME} className="px-12 py-6 bg-white text-rose-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Check My Tax Slab →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic">Gift & Relative Doubts</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
