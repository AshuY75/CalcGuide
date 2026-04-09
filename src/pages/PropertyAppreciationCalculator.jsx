import React from 'react';
import CalculatorContent from '../components/CalculatorContent';
import PropertyAppreciationUI from '../components/calculators/PropertyAppreciationUI';
import { ROUTES } from '../routes/paths';

const PropertyAppreciationCalculator = () => {
    return (
        <CalculatorContent
            title="Property Appreciation Calculator (CAGR)"
            description="Calculate the compounded annual growth rate (CAGR) and absolute returns on your real estate investment. Track how much your property value has grown over time."
            calculator={<PropertyAppreciationUI />}
            category="Real Estate"
            breadcrumbs={[
                { label: 'Calculators', path: ROUTES.HUBS.REAL_ESTATE },
                { label: 'Property Appreciation' }
            ]}
        >
            <div className="mt-12 space-y-12">
                <section>
                    <h2 className="text-3xl font-black text-slate-900 mb-6 italic text-center">Is Your Property Beating Inflation?</h2>
                    <p className="text-slate-600 leading-relaxed font-bold italic text-center max-w-2xl mx-auto">
                        Real estate appreciation isn't just about the selling price. To understand the true performance of your investment, you must calculate the <span className="text-indigo-600">CAGR (Compounded Annual Growth Rate)</span>.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-indigo-100">
                        <h3 className="text-xl font-black text-slate-800 mb-4 tracking-tight">Understanding CAGR</h3>
                        <p className="text-slate-500 font-bold text-sm leading-relaxed">
                            CAGR provides a smoother annual rate of return, ignoring year-to-year volatility. In Indian real estate, a CAGR of 8-12% is generally considered strong, while anything above 15% is exceptional (often seen in emerging hubs or through early land acquisition).
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-indigo-100">
                        <h3 className="text-xl font-black text-slate-800 mb-4 tracking-tight">The 2x and 3x Rule</h3>
                        <p className="text-slate-500 font-bold text-sm leading-relaxed">
                            Historically, property values in prime Indian cities (Mumbai, Bangalore, Gurgaon) tend to double every 7-9 years. Doubling in 7 years implies a CAGR of approximately <span className="text-indigo-600">10.4%</span>.
                        </p>
                    </div>
                </div>

                <section className="bg-indigo-600 p-10 rounded-[3rem] text-white overflow-hidden relative group">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <div className="lg:col-span-2">
                             <h2 className="text-2xl font-black mb-6 italic">Factors Affecting Appreciation</h2>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/10">
                                    <span className="text-lg">🏗️</span>
                                    <span className="text-xs font-bold">New Infrastructure (Metro/Expressways)</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/10">
                                    <span className="text-lg">💼</span>
                                    <span className="text-xs font-bold">Proximity to IT Hubs/Commercial Parks</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/10">
                                    <span className="text-lg">🏪</span>
                                    <span className="text-xs font-bold">Social Infrastructure (Malls/Hospitals)</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/10">
                                    <span className="text-lg">⚖️</span>
                                    <span className="text-xs font-bold">Regulatory Changes (RERA compliance)</span>
                                </div>
                             </div>
                        </div>
                        <div className="hidden lg:flex items-center justify-center">
                            <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border border-white/20 animate-pulse">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-8 italic">The Math Behind Appreciation</h2>
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
                        <p className="text-slate-500 font-bold leading-relaxed italic">
                            CAGR = [(Current Price / Purchase Price) ^ (1 / Number of Years)] - 1. This formula gives you the geometric mean return that provides the same yield as a series of compounded returns over the time period.
                        </p>
                    </div>
                </section>
            </div>
        </CalculatorContent>
    );
};

export default PropertyAppreciationCalculator;
