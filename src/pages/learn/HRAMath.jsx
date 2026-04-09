import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function HRAMath() {
    const faqData = [
        {
            question: "Can I claim HRA if I live in my own house?",
            answer: "No. To claim HRA exemption, you must be living in a rented house and paying rent to a landlord. You cannot pay rent to yourself."
        },
        {
            question: "Can I pay rent to my parents and claim HRA?",
            answer: "Yes, you can pay rent to your parents and claim HRA exemption, provided they own the property and they include the rent as income in their own tax returns. It is advisable to have a formal rent agreement and pay via bank transfer."
        },
        {
            question: "Is PAN card of the landlord mandatory for HRA?",
            answer: "If your annual rent exceeds **₹1,00,000**, you must provide the PAN card of your landlord to your employer to claim the exemption."
        },
        {
            question: "Can I claim BOTH HRA and Home Loan interest?",
            answer: "Yes. If you own a house in one city (and pay EMI) but live in a rented house in another city (and pay rent) due to work, you can claim both Section 24 interest and HRA exemption."
        }
    ];

    const toc = [
        { id: "formula", title: "The 3-Step HRA Formula" },
        { id: "metro", title: "Metro vs Non-Metro: The 50% Rule" },
        { id: "basic", title: "Why 'Basic' Salary is the Key" },
        { id: "proof", title: "Documents needed for 2025" },
        { id: "strategy", title: "Tax Hack: Rent to Parents" },
        { id: "faq", title: "HRA Doubts Cleared" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">On This Page</h4>
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
                            <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 italic text-sm text-indigo-800 leading-relaxed">
                                "HRA is not a benefit, it's an optimization. Most people lose ₹20,000 a year simply because they don't know the math."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-indigo-50 rounded">Income Tax Guide</span>
                                <span>•</span>
                                <span>10 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                HRA Exemption Math: <span className="text-indigo-600">Save ₹30,000 extra</span> this year.
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl">
                                Rent is the biggest expense for corporate employees in India. Here is exactly how to ensure the Income Tax department helps you pay for it.
                            </p>
                        </header>

                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 mb-16 not-prose">
                            <h3 className="text-indigo-400 font-black uppercase tracking-widest text-xs mb-6">The Golden Formula</h3>
                            <p className="text-slate-400 mb-8 italic">Your exemption is the **MINIMUM** of these three:</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-6 bg-slate-800 rounded-2xl">
                                    <p className="text-2xl font-black mb-1">100%</p>
                                    <p className="text-xs text-slate-500">Actual HRA received from your employer.</p>
                                </div>
                                <div className="p-6 bg-slate-800 rounded-2xl">
                                    <p className="text-2xl font-black mb-1">50% / 40%</p>
                                    <p className="text-xs text-slate-500">Of your **Basic Salary** (50% for Metro, 40% for others).</p>
                                </div>
                                <div className="p-6 bg-indigo-900 rounded-2xl border border-indigo-500">
                                    <p className="text-2xl font-black mb-1">Actual Rent</p>
                                    <p className="text-xs text-slate-300">Minus 10% of your **Basic Salary**.</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            House Rent Allowance (HRA) is a crucial part of your salary structure. However, many people simply submit their rent receipts without checking if their HRA component is actually optimized for their rent.
                        </p>

                        <h2 id="formula">1. The 3-Step HRA Formula</h2>
                        <p>Let's use a real-world example:</p>
                        <p>
                            <strong>Aditya's Profile</strong>:<br />
                            - Basic Salary: ₹50,000 / month<br />
                            - HRA Component: ₹25,000 / month<br />
                            - Actual Rent Paid: ₹20,000 / month (In Mumbai)<br />
                        </p>
                        <div className="p-8 bg-slate-50 border-l-4 border-slate-900 rounded-r-2xl my-10 not-prose text-slate-700 italic">
                            1. Actual HRA = ₹25,000<br />
                            2. 50% of Basic (Metro) = ₹25,000<br />
                            3. Rent - 10% Basic = ₹20,000 - ₹5,000 = **₹15,000**<br /><br />
                            <strong>Aditya's Exemption = ₹15,000</strong>. (He will pay tax on the remaining ₹10k HRA).
                        </div>

                        <h2 id="metro">2. Metro vs Non-Metro: The 50% Rule</h2>
                        <p>
                            The Income Tax department recognizes only 4 cities as "Metros" for HRA calculation:
                        </p>
                        <ul>
                            <li><strong>Mumbai</strong></li>
                            <li><strong>Delhi</strong></li>
                            <li><strong>Kolkata</strong></li>
                            <li><strong>Chennai</strong></li>
                        </ul>
                        <p>
                            Wait—what about Bengaluru, Pune, or Hyderabad? Mathematically, these are classified as <strong>Non-Metro</strong>. For these cities, the limit is **40% of Basic Salary**. This is a major pain point for tech-professionals in Bengaluru who pay high rent but get lower exemptions.
                        </p>

                        <h2 id="proof">3. Documents needed for 2025</h2>
                        <p>To claim this tax benefit, you don't just need a receipt. You need a data trail:</p>
                        <ol>
                            <li><strong>Rent Agreement</strong>: Registered agreement is preferred, but a simple notary agreement works for most employers.</li>
                            <li><strong>Monthly Rent Receipts</strong>: Must have a revenue stamp if payments are in cash (though bank transfers are strongly recommended).</li>
                            <li><strong>Landlord's PAN</strong>: Mandatory if annual rent {`>`} ₹1 Lakh.</li>
                            <li><strong>Form 12BB</strong>: Submit this to your HR every year in January.</li>
                        </ol>

                        <h2 id="strategy">4. Tax Hack: Paying Rent to Parents</h2>
                        <p>
                            If you live in your parents' house, you can pay them rent to save tax! 
                        </p>
                        <p>
                            <strong>The Benefit</strong>: You get an HRA exemption (potentially saving ₹2,000-₹5,000 in monthly tax). <br />
                            <strong>The Catch</strong>: Your parents must declare this as "Rental Income" in their ITR. If your parents are in a lower tax bracket (or retired), this is a massive family tax-saving win.
                        </p>

                        <div className="my-16 flex flex-col items-center text-center p-12 bg-indigo-50 rounded-[3rem] border border-indigo-100 shadow-sm not-prose">
                            <h3 className="text-3xl font-black text-slate-900 mb-6">Unsure of your HRA?</h3>
                            <p className="text-slate-500 mb-10 text-lg max-w-2xl">Use our HRA Optimizer to see if increasing your rent (on paper) or changing your basic salary could save you more tax.</p>
                            <Link to={ROUTES.CALCULATORS.TAX.HRA} className="px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition-all shadow-xl">
                                Open HRA Calculator →
                            </Link>
                        </div>

                        <AuthorBio />

                        <div className="mt-20 pt-10 border-t border-slate-200">
                            <SEOSection title="HRA Exemption FAQ" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
