import React from 'react';
import MainLayout from '../layouts/MainLayout';
import MSMEPMEGPUI from '../components/calculators/MSMEPMEGPUI';

const MSMEPMEGPCalculator = () => {
    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-xs font-black uppercase tracking-widest mb-6 border border-emerald-100 shadow-sm">
                         Startup & MSME Benefits
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-none">
                        PMEGP Subsidy <span className="text-emerald-600 italic">Calculator</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                        Calculate government subsidy (margin money) for your new business. Includes latest <span className="text-emerald-600 font-bold">15% to 35%</span> benefit logic.
                    </p>
                </div>

                <MSMEPMEGPUI />

                <div className="mt-24 bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100">
                    <h2 className="text-3xl font-black text-slate-900 mb-8">Understanding PMEGP Subsidy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-600 font-medium">
                        <div className="space-y-4">
                            <p className="bg-white p-6 rounded-2xl border border-slate-200">
                                <strong className="text-indigo-600 block mb-1">What is PMEGP?</strong>
                                The Prime Minister's Employment Generation Programme (PMEGP) is a credit-linked subsidy scheme for setting up new micro-enterprises.
                            </p>
                            <p className="bg-white p-6 rounded-2xl border border-slate-200">
                                <strong className="text-indigo-600 block mb-1">Who is eligible?</strong>
                                Any individual above 18 years of age. For projects above ₹10L in manufacturing and ₹5L in business, at least VIII standard pass is required.
                            </p>
                        </div>
                        <div className="space-y-4">
                             <p className="bg-white p-6 rounded-2xl border border-slate-200">
                                <strong className="text-indigo-600 block mb-1">Rural vs Urban</strong>
                                The subsidy increases if you setup your unit in a Rural area (up to 35% for special categories).
                            </p>
                            <p className="bg-white p-6 rounded-2xl border border-slate-200">
                                <strong className="text-indigo-600 block mb-1">Bank Loan</strong>
                                Banks will sanction a composite loan (Term Loan + Working Capital) equal to 90-95% of the project cost.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default MSMEPMEGPCalculator;
