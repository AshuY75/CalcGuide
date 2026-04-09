import React from 'react';
import MainLayout from '../layouts/MainLayout';
import LTCGPropertyUI from '../components/calculators/LTCGPropertyUI';

const PropertyTaxCalculator = () => {
    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-700 text-xs font-black uppercase tracking-widest mb-6 border border-indigo-100 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Budget 2024 Optimized
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-none">
                        Property Tax <span className="text-indigo-600 italic">Calculator</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                        Calculate LTCG on real estate with the new <span className="text-indigo-600 font-bold">12.5% vs 20% indexation choice</span>. Save lakhs by picking the right tax regime.
                    </p>
                </div>

                <LTCGPropertyUI />

                {/* Educational Content Section */}
                <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <section className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                            <h2 className="text-3xl font-black text-slate-900 mb-6">What is the "Dual Choice" for Property Tax?</h2>
                            <div className="prose prose-slate max-w-none space-y-4 text-slate-600 font-medium">
                                <p>
                                    In the <strong>Union Budget 2024</strong>, the government initially removed indexation benefits for real estate sales and replaced it with a flat 12.5% rate. However, after feedback, an amendment was introduced to provide a grandfathering benefit.
                                </p>
                                <p>
                                    If you bought your property <strong>before July 23, 2024</strong>, you can choose between:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-indigo-600">New Regime:</strong> 12.5% Tax on gains without any indexation.</li>
                                    <li><strong className="text-slate-900">Old Regime:</strong> 20% Tax on gains after adjusting the purchase price for inflation (indexation).</li>
                                </ul>
                                <p className="bg-white p-6 rounded-2xl border-2 border-dashed border-indigo-100">
                                    <strong>Our calculator</strong> automatically runs both math models side-by-side and recommends the one that results in the <strong>lowest tax liability</strong> for you.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h3 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h3>
                            <div className="space-y-4">
                                {[
                                    { q: "Is indexation completely gone for new property?", a: "Yes, for any property purchased after July 23, 2024, indexation benefits are removed. Only the flat 12.5% rate will apply." },
                                    { q: "What is CII (Cost Inflation Index)?", a: "CII is a number notified by the Income Tax department every year to represent the inflation in the economy. It is used to calculate the 'Indexed Cost of Acquisition'." },
                                    { q: "How do I claim this benefit in my ITR?", a: "While filing your Income Tax Return, you can enter details for both methods and the utility will naturally allow you to pay the lower of the two amounts." }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="font-bold text-slate-900 mb-2 flex gap-3">
                                            <span className="text-indigo-600">Q.</span> {item.q}
                                        </h4>
                                        <p className="text-slate-600 text-sm pl-7 leading-relaxed font-medium">{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-indigo-600 rounded-[2rem] p-8 text-white shadow-2xl shadow-indigo-200">
                            <h3 className="text-xl font-black mb-4">Quick Strategy</h3>
                            <p className="text-indigo-100 text-sm leading-relaxed mb-6 font-medium">
                                Typically, if your property appreciated significantly faster than inflation (e.g., in major cities like Mumbai or Bangalore), the <strong>12.5% Flat Rate</strong> works better. If growth was steady or low, <strong>Indexation (20%)</strong> might save you more.
                            </p>
                            <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Pro Tip</p>
                                <p className="text-xs font-bold italic">"Always check both before signing the sale agreement."</p>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-[2rem] p-8 text-white shadow-2xl">
                            <h3 className="text-xl font-black mb-4">New Rates at a Glance</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="opacity-60 font-bold uppercase tracking-widest text-[10px]">LTCG (Equity)</span>
                                    <span className="font-black text-orange-400">12.5%</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="opacity-60 font-bold uppercase tracking-widest text-[10px]">STCG (Equity)</span>
                                    <span className="font-black text-red-400">20%</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="opacity-60 font-bold uppercase tracking-widest text-[10px]">Unlisted Assets</span>
                                    <span className="font-black text-indigo-400">12.5%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default PropertyTaxCalculator;
