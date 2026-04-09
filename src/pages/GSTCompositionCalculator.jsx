import React from 'react';
import MainLayout from '../layouts/MainLayout';
import GSTCompositionUI from '../components/calculators/GSTCompositionUI';

const GSTCompositionCalculator = () => {
    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-700 text-xs font-black uppercase tracking-widest mb-6 border border-indigo-100 shadow-sm">
                         Small Business Optimized
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-none">
                        GST Composition <span className="text-indigo-600 italic">Calculator</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                        Calculate flat-rate GST for your small business. Simple, accurate math for <span className="text-indigo-600 font-bold">1%, 5%, and 6%</span> composition schemes.
                    </p>
                </div>

                <GSTCompositionUI />

                <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <section className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                            <h2 className="text-3xl font-black text-slate-900 mb-6">What is the GST Composition Scheme?</h2>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                The Composition Scheme is a simple and easy scheme under GST for small taxpayers. It can be opted for by any taxpayer whose turnover is below ₹1.5 Crore (₹75 Lakhs for Special Category States). 
                                <br /><br />
                                Unlike regular GST taxpayers, composition dealers are not required to maintain detailed records or file monthly returns. Instead, they pay a fixed percentage of their turnover as GST.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default GSTCompositionCalculator;
