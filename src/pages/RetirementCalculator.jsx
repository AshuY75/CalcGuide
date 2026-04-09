import React from 'react';
import CalculatorContent from '../components/CalculatorContent';
import RetireSmartUI from '../components/calculators/RetireSmartUI';
import { ROUTES } from '../routes/paths';

const RetirementCalculator = () => {
    return (
        <CalculatorContent
            title="Advanced Retirement Planner (Inflation-Adjusted)"
            description="Calculate the exact retirement corpus you need based on your current lifestyle, inflation, and future expenses. Find out your monthly SIP requirement to retire wealthy."
            calculator={<RetireSmartUI />}
            category="Investment"
            breadcrumbs={[
                { label: 'Calculators', path: ROUTES.HUBS.INVESTMENT },
                { label: 'Investment', path: ROUTES.HUBS.INVESTMENT },
                { label: 'Retirement Planner' }
            ]}
        >
            <div className="mt-12 space-y-12">
                <section>
                    <h2 className="text-3xl font-black text-slate-900 mb-6 italic text-center">The Scariest Number: Inflation</h2>
                    <p className="text-slate-600 leading-relaxed font-bold italic text-center max-w-2xl mx-auto">
                        If you spend ₹50,000 today, in 25 years you will need nearly <span className="text-indigo-600 font-black">₹2.1 Lakhs</span> for the exact same lifestyle (at 6% inflation). Retirement planning is not about saving; it's about beating time.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="grid-item">
                        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                             <h4 className="font-black text-slate-800 text-sm mb-2">Rule of 25x</h4>
                             <p className="text-[10px] font-bold text-slate-500">A classic rule suggesting your corpus should be 25 times your annual expenses.</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                             <h4 className="font-black text-slate-800 text-sm mb-2">The 4% Rule</h4>
                             <p className="text-[10px] font-bold text-slate-500">Withdrawing 4% of your corpus annually ensures it lasts 30+ years.</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                             <h4 className="font-black text-slate-800 text-sm mb-2">Real Rate Risk</h4>
                             <p className="text-[10px] font-bold text-slate-500">Your returns must stay 2-3% above inflation even after retirement.</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                             <h4 className="font-black text-slate-800 text-sm mb-2">Medical Buffer</h4>
                             <p className="text-[10px] font-bold text-slate-500">Allocate 15% of your corpus specifically for healthcare emergencies.</p>
                        </div>
                    </div>
                </div>

                <section className="bg-indigo-600 p-10 rounded-[3rem] text-white">
                    <h2 className="text-2xl font-black mb-8 italic">Phases of Retirement Planning</h2>
                    <div className="relative border-l-2 border-white/20 ml-4 space-y-12">
                        <div className="relative pl-10">
                            <div className="absolute left-[-11px] top-0 w-5 h-5 bg-white rounded-full border-4 border-indigo-600 group-hover:scale-125 transition-transform"></div>
                            <h4 className="font-black text-lg mb-2 italic">Accumulation Phase (Age 25-50)</h4>
                            <p className="text-sm font-bold opacity-80 leading-relaxed">Aggressive equity allocation (70-80%) to build the core corpus through SIPs.</p>
                        </div>
                        <div className="relative pl-10">
                            <div className="absolute left-[-11px] top-0 w-5 h-5 bg-white rounded-full border-4 border-indigo-600"></div>
                            <h4 className="font-black text-lg mb-2 italic">Consolidation Phase (Age 50-60)</h4>
                            <p className="text-sm font-bold opacity-80 leading-relaxed">Gradual shift towards debt (40-50%) to protect the corpus from market volatility.</p>
                        </div>
                        <div className="relative pl-10">
                            <div className="absolute left-[-11px] top-0 w-5 h-5 bg-white rounded-full border-4 border-indigo-600"></div>
                            <h4 className="font-black text-lg mb-2 italic">Distribution Phase (Age 60+)</h4>
                            <p className="text-sm font-bold opacity-80 leading-relaxed">Systematic Withdrawal Plan (SWP) for monthly income and tax efficiency.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-8 italic">Don't Underestimate Longevity</h2>
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
                        <p className="text-slate-500 font-bold leading-relaxed italic">
                            With advancing healthcare, living until 85 or 90 is common. Your money must last longer than you. Always plan for at least 30 years of post-retirement life to avoid the risk of outliving your savings.
                        </p>
                    </div>
                </section>
            </div>
        </CalculatorContent>
    );
};

export default RetirementCalculator;
