import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ProfessionalRateUI from '../components/calculators/ProfessionalRateUI';

const ProfessionalRateCalculator = () => {
    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-full text-white text-xs font-black uppercase tracking-widest mb-6 border border-slate-700 shadow-sm">
                         Freelance & Consulting
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-none">
                        Freelance <span className="text-indigo-600 italic">Rate</span> Calculator
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                        Calculate your perfect hourly and daily rates. Factor in <span className="text-indigo-600 font-bold">desired profit, expenses, and Indian taxes (TDS/GST)</span>.
                    </p>
                </div>

                <ProfessionalRateUI />

                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <section className="p-10 rounded-[2.5rem] bg-indigo-600 text-white shadow-2xl">
                        <h2 className="text-3xl font-black mb-6 tracking-tight">The 194J TDS Factor</h2>
                        <p className="text-indigo-100 font-medium leading-relaxed mb-6">
                            As a professional (consultant, designer, developer) in India, most of your clients will deduct <strong>10% TDS</strong> under Section 194J before paying you. 
                            <br /><br />
                            Our calculator helps you understand that while your "Gross Rate" might be high, your "In-Hand" will be lower due to TDS. You can claim this back during ITR filing if your total tax is lower.
                        </p>
                        <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                             <p className="text-xs font-black uppercase tracking-widest mb-2">Pro Tip</p>
                             <p className="text-sm font-bold italic">"Always quote your rate exclusive of GST and inclusive of TDS."</p>
                        </div>
                    </section>

                    <section className="p-10 rounded-[2.5rem] bg-slate-900 text-white shadow-2xl">
                        <h2 className="text-3xl font-black mb-6 tracking-tight">Billable vs Actual Hours</h2>
                        <p className="text-slate-400 font-medium leading-relaxed mb-6">
                            You might work 40 hours a week, but you rarely "bill" all 40. 
                        </p>
                        <ul className="space-y-4">
                            {[
                                { title: "Direct Work", detail: "Coding, Designing, Consulting" },
                                { title: "Admin Work", detail: "Invoicing, Sales, Meetings" },
                                { title: "Marketing", detail: "Social media, Portfolio building" }
                            ].map((item, idx) => (
                                <li key={idx} className="flex justify-between items-center text-sm font-bold">
                                    <span className="text-indigo-400">{item.title}</span>
                                    <span className="text-slate-500 opacity-60 text-xs">{item.detail}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </MainLayout>
    );
};

export default ProfessionalRateCalculator;
