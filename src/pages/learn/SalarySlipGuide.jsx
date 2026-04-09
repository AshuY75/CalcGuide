import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function SalarySlipGuide() {
    const faqData = [
        {
            question: "Why is my In-hand salary lower than my CTC?",
            answer: "CTC (Cost to Company) includes all expenses a company incurs on you, including things you don't receive as cash, such as Employer PF contribution, Gratuity, and Insurance premiums. Deductions like Income Tax (TDS) and Employee PF further reduce the monthly cash you take home."
        },
        {
            question: "Is 'Special Allowance' taxable?",
            answer: "Yes, 100%. Companies often use 'Special Allowance' as a balancing figure to keep your Basic Salary low (which reduces their PF/Gratuity liability). Since it has no tax exemptions, it is fully taxable at your slab rate."
        },
        {
            question: "Can I save tax on my full HRA?",
            answer: "You can save tax on the least of: 1) Actual HRA received, 2) 50% of Basic (Metro) or 40% (Non-metro), 3) Rent paid minus 10% of Basic. If your rent is low, you might not get the full exemption."
        },
        {
            question: "What is Professional Tax (PT)?",
            answer: "It is a small tax levied by state governments in India (like Maharashtra, Karnataka, Tamil Nadu). It is usually capped at ₹2,500 per year and is deducted monthly (approx ₹200)."
        },
        {
            question: "Should I opt for Voluntary Provident Fund (VPF)?",
            answer: "If you have exhausted your 80C limit (₹1.5L) and want safe, tax-free returns (currently 8.25%+), VPF is excellent. It is deducted directly from your salary slip."
        }
    ];

    const toc = [
        { id: "difference", title: "CTC vs In-Hand: The Reality Gap" },
        { id: "earnings", title: "Earnings: Basic, HRA & The Special Allowance Trap" },
        { id: "deductions", title: "Deductions: PF, PT & TDS Explained" },
        { id: "case-study", title: "Case Study: The ₹1 Lakh Salary Mystery" },
        { id: "hacks", title: "5 Hacks to Increase Your Take-Home" },
        { id: "faq", title: "Salary Slip FAQs" }
    ];

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Verify Your Salary Slip Accuracy",
        "step": [
            {
                "@type": "HowToStep",
                "text": "Check your Basic Salary. It should usually be 40-50% of your Total Earnings."
            },
            {
                "@type": "HowToStep",
                "text": "Verify PF deduction. It must be exactly 12% of (Basic + DA) or the statutory cap of ₹1,800."
            },
            {
                "@type": "HowToStep",
                "text": "Calculate HRA exemption using our tool to see if the TDS deduction is correct."
            },
            {
                "@type": "HowToStep",
                "text": "Cross-check Total Earnings - Total Deductions = Net Pay credited to your bank."
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Meta tags would be handled by SEOSection or Helment in a real app, here we follow layout */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Master Your Money</h4>
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
                                "A salary is the drug your employer gives you to forget your dreams. Use it to fund them instead."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-indigo-50 rounded">Career Finance</span>
                                <span>•</span>
                                <span>18 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                How to Read Your <span className="text-indigo-600">Salary Slip</span> in India: The Ultimate 2025 Guide
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Received your first paycheck and felt a "Salary Shocker"? If your ₹1 Lakh salary turned into ₹72,000 in your bank, you need to read this. 
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-indigo-400 font-black uppercase tracking-widest text-sm mb-8 flex items-center gap-3">
                                <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
                                The "Salary Logic" at a Glance
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                                <div>
                                    <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-3">Earnings Pillar</p>
                                    <p className="text-xl font-bold text-white leading-tight">Basic + HRA + Allowances</p>
                                    <p className="text-xs text-slate-500 mt-3 font-medium">This is what your company 'gives' you.</p>
                                </div>
                                <div className="text-indigo-500 text-4xl font-black flex items-center justify-center opacity-40">—</div>
                                <div>
                                    <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-3">Deductions Pillar</p>
                                    <p className="text-xl font-bold text-white leading-tight">PF + PT + Income Tax (TDS)</p>
                                    <p className="text-xs text-slate-500 mt-3 font-medium">This is what the Govt & Future 'takes'.</p>
                                </div>
                            </div>
                            <div className="mt-12 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-md">"Understanding this math is the difference between a high-CTC employee and a high-wealth individual."</p>
                                <Link to={ROUTES.CALCULATORS.TAX.CTC_TO_INHAND} className="px-8 py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition-all shadow-lg hover:-translate-y-1">
                                    Calculate My In-hand →
                                </Link>
                            </div>
                        </div>

                        <p>
                            Most Indians treat their salary slip as a piece of paper that just 'confirms' the credit message they get on the 31st. This is a massive mistake. Your salary slip is a **Financial Diagnostic Report**. It tells you if you are overpaying taxes, if your retirement is being funded correctly, and if you are being underpaid compared to your CTC.
                        </p>
                        
                        <p>
                            In this deep-dive, we will strip away the jargon and look at what those numbers actually mean for your wallet.
                        </p>

                        <h2 id="difference" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. CTC vs In-Hand: The "Reality Gap" Explained</h2>
                        <p>
                            CTC (Cost to Company) is a marketing number. In-hand is your survival number. In India, the difference between these two can be as high as **25-30%**.
                        </p>
                        <p>
                            Why? Because CTC includes non-cash benefits like:
                        </p>
                        <ul>
                            <li><strong>Gratuity</strong>: A deferred payment you only get after 5 years.</li>
                            <li><strong>Employer’s PF Contribution</strong>: Forced savings that you can't touch now.</li>
                            <li><strong>Insurance Premiums</strong>: Companies pay for your health cover and include it in your 'cost'.</li>
                        </ul>
                        <p>
                            When a recruiter says "We are offering you 12 Lakhs," they are talking about the CTC. After PF (both employee and employer portions) and Income Tax, you might only see ₹75,000 per month.
                        </p>

                        <h2 id="earnings" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Earnings Components: The Smart vs The Tax-Traps</h2>
                        
                        <h3 className="text-2xl font-black text-slate-800 mb-6">A. Basic Salary (The Foundation)</h3>
                        <p>
                            This is usually 40% to 50% of your CTC. It is the most critical number because your **Provident Fund (PF), Gratuity, and Bonuses** are all calculated as a percentage of your Basic.
                        </p>
                        <div className="p-8 bg-indigo-50 border-l-4 border-indigo-600 rounded-r-3xl my-10 not-prose shadow-sm">
                            <p className="text-indigo-900 font-bold leading-relaxed italic">
                                💡 <strong>Pro Tip:</strong> If your Basic is too low (e.g., only 20% of CTC), your PF and Gratuity accumulation will be very slow. If it's too high (e.g., 60%+), your taxable income increases because Basic is 100% taxable. Aim for the 40-50% sweet spot.
                            </p>
                        </div>

                        <h3 className="text-2xl font-black text-slate-800 mb-6">B. House Rent Allowance (HRA)</h3>
                        <p>
                            HRA is your best friend for tax saving. It is usually 40-50% of your Basic. If you live in a rented house, you can claim a portion of this as tax-free.
                        </p>
                        <p className="font-medium text-slate-800">Check if your HR is using the correct exemption formula:</p>
                        <ul className="grid sm:grid-cols-3 gap-4 list-none p-0 mt-6 not-prose">
                            <li className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                                <span className="block font-black text-indigo-600 text-xl">50%</span>
                                <span className="text-xs text-slate-500 font-bold uppercase tracking-wide">of Basic (Metros)</span>
                            </li>
                            <li className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                                <span className="block font-black text-indigo-600 text-xl">Actual</span>
                                <span className="text-xs text-slate-500 font-bold uppercase tracking-wide">HRA Received</span>
                            </li>
                            <li className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                                <span className="block font-black text-indigo-600 text-xl">Rent - 10%</span>
                                <span className="text-xs text-slate-500 font-bold uppercase tracking-wide">of Basic</span>
                            </li>
                        </ul>

                        <h3 className="text-2xl font-black text-slate-800 mb-6 mt-12">C. Special Allowance (The "Tax Trap")</h3>
                        <p>
                            This is the most common component in modern Indian salary slips. It has NO tax exemptions. It is basically the company's way of paying you the balance of your CTC without increasing their PF liability or giving you a tax break.
                        </p>
                        <p>
                            If you see a massive 'Special Allowance' on your slip, expect a higher TDS (Income Tax) deduction.
                        </p>

                        <h2 id="deductions" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. Deductions: Where Does the Money Go?</h2>
                        
                        <div className="grid md:grid-cols-2 gap-8 my-16 not-prose">
                            <div className="p-10 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 mb-4">Provident Fund (PF)</h4>
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    12% of your Basic is deducted monthly. Your employer matches this 12%. It’s a forced saving at 8.25%+ interest. Historically, it’s the best EEE instrument for Indians.
                                </p>
                            </div>
                            <div className="p-10 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group overflow-hidden relative border-rose-50/50">
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform text-rose-600">
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 mb-4">TDS (Income Tax)</h4>
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    Tax Deducted at Source. Your employer estimates your annual tax and divides it by 12. If you don't submit investment proofs (80C, HRA, Insurance), this number will skyrocket in Jan-March.
                                </p>
                            </div>
                        </div>

                        <h2 id="case-study" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter italic italic-selection">Case Study: The ₹12 Lakh CTC Mystery</h2>
                        <p>
                            Meet Arjun. He joins a tech firm in Pune with a **₹12,00,000 CTC**. Here is how his monthly cash flow looks:
                        </p>
                        
                        <div className="my-12 overflow-hidden border border-slate-200 rounded-[2.5rem] shadow-2xl relative not-prose">
                            <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600"></div>
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Component</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Monthly Amount</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Notes</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="p-8 text-slate-700 font-bold">Gross Earnings</td>
                                        <td className="p-8 text-slate-900 font-black">₹92,500</td>
                                        <td className="p-8 text-slate-500 font-medium">CTC minus Gratuity & Benefits</td>
                                    </tr>
                                    <tr className="bg-rose-50/30">
                                        <td className="p-8 text-rose-800 font-bold">— EPF (Employee)</td>
                                        <td className="p-8 text-rose-600 font-black">₹4,800</td>
                                        <td className="p-8 text-slate-400 text-sm">12% of Basic</td>
                                    </tr>
                                    <tr className="bg-rose-50/30">
                                        <td className="p-8 text-rose-800 font-bold">— TDS (Income Tax)</td>
                                        <td className="p-8 text-rose-600 font-black">₹9,200</td>
                                        <td className="p-8 text-slate-400 text-sm">New Regime (Estimated)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-8 text-slate-700 font-extrabold text-xl">Net Take-Home</td>
                                        <td className="p-8 text-indigo-700 font-black text-3xl">₹78,300</td>
                                        <td className="p-8 text-indigo-900 font-black bg-indigo-50/50">Reality Check!</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-center font-bold text-slate-400 text-sm italic">Arjun thought he would get ₹1 Lakh. He gets ₹78k. That ₹22k difference is a "lifestyle adjuster".</p>

                        <h2 id="hacks" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5 Hacks to Increase Your In-Hand Salary Tomorrow</h2>
                        <ol className="space-y-8 my-16">
                            {[
                                { t: "Optimize HRA", d: "If you pay rent to parents, declare it! It can save you ₹2,000-₹5,000 in monthly tax depending on your slab." },
                                { t: "Switch to New Tax Regime?", d: "If you have low investments, the New Tax Regime (default in 2025) usually gives you a higher in-hand because the TDS is lower." },
                                { t: "Declare Investments Early", d: "Don't wait for December. If you declare your 80C and Insurance now, your employer will deduct less TDS from the start of the year, keeping your cash flow smooth." },
                                { t: "Review Car Lease/LTA", d: "If your company offers a Car Lease or Food Coupons (Sodexo), use them. These reduce your 'taxable earnings' and increase real-value in-hand." },
                                { t: "National Pension System (NPS)", d: "Adding ₹50,000/year to NPS (Tier 1) gives you an extra deduction under Section 80CCD(1B), often saving ₹15,000 in pure tax." }
                            ].map((hack, idx) => (
                                <li key={idx} className="flex gap-8 group">
                                    <div className="flex-shrink-0 w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-2xl font-black group-hover:bg-indigo-600 transition-colors shadow-lg">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 mb-2">{hack.t}</h4>
                                        <p className="text-slate-600 text-lg leading-relaxed font-medium">{hack.d}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className="my-20 p-12 bg-indigo-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-indigo-200 relative overflow-hidden not-prose">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-400/30 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl font-black mb-8">Stop Donating to the Tax Dept.</h3>
                                <p className="text-indigo-100 mb-10 text-xl font-medium max-w-2xl mx-auto italic-selection">Our CTC-to-InHand calculator accounts for the latest 2025 Union Budget rules.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.TAX.CTC_TO_INHAND} className="px-10 py-5 bg-white text-indigo-600 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1">
                                        Calculate Exact In-Hand →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.TAX.HRA} className="px-10 py-5 bg-indigo-900 text-white font-black rounded-2xl hover:bg-indigo-950 transition-all border border-indigo-500/30">
                                        Check HRA Savings
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <section id="how-to" className="bg-slate-50 p-14 rounded-[3rem] my-24 border border-slate-200">
                            <h3 className="mt-0 font-black text-3xl mb-10 tracking-tighter">Your Monthly Salary Slip Checklist</h3>
                            <script type="application/ld+json">
                                {JSON.stringify(howToSchema)}
                            </script>
                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <span className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-black shrink-0 mt-1">✓</span>
                                    <div>
                                        <p className="text-xl font-black text-slate-900 mb-1">Check Basic vs CTC</p>
                                        <p className="text-slate-500 font-medium leading-relaxed">Ensure it's not too low (PF loss) or too high (Tax hit).</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <span className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-black shrink-0 mt-1">✓</span>
                                    <div>
                                        <p className="text-xl font-black text-slate-900 mb-1">Verify PF Contribution</p>
                                        <p className="text-slate-500 font-medium leading-relaxed">It should match your 12% calculation exactly. High PF = High Tax-Free Corpus.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <span className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-black shrink-0 mt-1">✓</span>
                                    <div>
                                        <p className="text-xl font-black text-slate-900 mb-1">Audit the TDS Deduction</p>
                                        <p className="text-slate-500 font-medium leading-relaxed">Compare this month's TDS to last month. Any jump means some investment proof was rejected.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic">Common Doubts & Confusions</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
