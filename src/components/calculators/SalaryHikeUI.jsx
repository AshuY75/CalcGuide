import React, { useState, useEffect } from 'react';

const SalaryHikeUI = () => {
    const [currentCTC, setCurrentCTC] = useState('1000000');
    const [proposedCTC, setProposedCTC] = useState('1300000');
    const [results, setResults] = useState(null);

    const calculateHike = () => {
        const oldC = parseFloat(currentCTC);
        const newC = parseFloat(proposedCTC);

        if (isNaN(oldC) || isNaN(newC) || oldC === 0) return;

        const absoluteHike = newC - oldC;
        const percentageHike = (absoluteHike / oldC) * 100;
        
        const oldMonthlyGross = oldC / 12;
        const newMonthlyGross = newC / 12;
        const monthlyDelta = newMonthlyGross - oldMonthlyGross;

        // Simple In-Hand estimation (Rough approximation for New Tax Regime FY 2025-26)
        // This is a simplified version of the main CTC-to-InHand logic for quick insight
        const estimateInHand = (ctc) => {
            const standardDeduction = 75000;
            const taxable = Math.max(0, ctc - standardDeduction);
            let tax = 0;
            
            // New Regime 2025-26 Slabs:
            // 0-4L: 0%
            // 4-8L: 5%
            // 8-12L: 10%
            // 12-16L: 15%
            // 16-20L: 20%
            // Above 24L: 30%
            if (taxable > 400000) tax += Math.min(400000, taxable - 400000) * 0.05;
            if (taxable > 800000) tax += Math.min(400000, taxable - 800000) * 0.10;
            if (taxable > 1200000) tax += Math.min(400000, taxable - 1200000) * 0.15;
            if (taxable > 1600000) tax += Math.min(400000, taxable - 1600000) * 0.20;
            if (taxable > 2400000) tax += (taxable - 2400000) * 0.30;

            // Full rebate up to 12L (Section 87A for New Regime 2025)
            if (taxable <= 1200000) tax = 0;

            const cess = tax * 0.04;
            const epf = Math.min(ctc * 0.05, 1800 * 12); // Rough EPF estimate
            const annualInHand = ctc - (tax + cess) - epf;
            return annualInHand / 12;
        };

        const oldInHand = estimateInHand(oldC);
        const newInHand = estimateInHand(newC);
        const inHandDelta = newInHand - oldInHand;

        setResults({
            absoluteHike,
            percentageHike: percentageHike.toFixed(2),
            monthlyGrossDelta: monthlyDelta.toFixed(0),
            inHandDelta: inHandDelta.toFixed(0),
            newInHand: newInHand.toFixed(0)
        });
    };

    useEffect(() => {
        calculateHike();
    }, [currentCTC, proposedCTC]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Inputs */}
                        <div className="space-y-8">
                            <div>
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4 italic">Current CTC (Annual)</label>
                                <div className="relative group">
                                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-black text-slate-300 group-focus-within:text-emerald-500 transition-colors">₹</span>
                                    <input
                                        type="number"
                                        value={currentCTC}
                                        onChange={(e) => setCurrentCTC(e.target.value)}
                                        className="w-full pl-12 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none font-black text-2xl text-slate-800 transition-all shadow-inner"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4 italic">Proposed / New CTC</label>
                                <div className="relative group">
                                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-black text-slate-300 group-focus-within:text-emerald-500 transition-colors">₹</span>
                                    <input
                                        type="number"
                                        value={proposedCTC}
                                        onChange={(e) => setProposedCTC(e.target.value)}
                                        className="w-full pl-12 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none font-black text-2xl text-slate-800 transition-all shadow-inner"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats Overlay */}
                        <div className="flex flex-col justify-center">
                            {results && (
                                <div className="bg-emerald-50 rounded-[2.5rem] p-10 border-2 border-emerald-100/50 relative overflow-hidden group">
                                    <div className="absolute -right-4 -top-4 w-32 h-32 bg-emerald-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
                                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-2">Total Percentage Hike</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-7xl font-black text-emerald-600 tracking-tighter animate-in fade-in zoom-in duration-500">
                                            {results.percentageHike}%
                                        </span>
                                    </div>
                                    <p className="mt-6 text-sm font-bold text-emerald-800/60 leading-relaxed">
                                        That's an absolute increase of <span className="text-emerald-700 font-black">₹{results.absoluteHike.toLocaleString('en-IN')}</span> per year.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {results && (
                        <div className="pt-10 border-t border-slate-100 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Monthly Impact */}
                                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 space-y-6">
                                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Gross Monthly Impact</h4>
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 mb-1">ADDITIONAL GROSS / MONTH</p>
                                            <p className="text-4xl font-black text-slate-800 tracking-tighter">+ ₹{parseInt(results.monthlyGrossDelta).toLocaleString('en-IN')}</p>
                                        </div>
                                        <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200">
                                            <p className="text-[8px] font-black text-slate-400">DAILY GAIN</p>
                                            <p className="text-sm font-black text-emerald-600">₹{(results.monthlyGrossDelta / 30).toFixed(0)}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* In-Hand Estimation */}
                                <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-8 rounded-[2.5rem] text-white shadow-xl shadow-indigo-100 relative overflow-hidden">
                                    <div className="relative z-10 space-y-6">
                                        <h4 className="text-xs font-black uppercase tracking-widest opacity-60">Estimated In-Hand Impact</h4>
                                        <div>
                                            <p className="text-[10px] font-black opacity-60 mb-1 italic">ADDITIONAL TAKE-HOME / MONTH</p>
                                            <p className="text-4xl font-black tracking-tighter">+ ₹{parseInt(results.inHandDelta).toLocaleString('en-IN')}</p>
                                        </div>
                                        <div className="pt-4 border-t border-white/10">
                                            <p className="text-[10px] font-bold opacity-60">*Estimated under New Tax Regime (FY 2025-26) with standard deductions and EPF.</p>
                                        </div>
                                    </div>
                                    <div className="absolute right-0 bottom-0 p-6 opacity-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Negotiation Tip Card */}
                            <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 flex items-start gap-4">
                                <div className="bg-orange-500 p-2 rounded-xl text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M11.3 1.047a1 1 0 01.897.487l1.535 2.66 3.007.438a1 1 0 01.554 1.707l-2.176 2.121.513 2.997a1 1 0 01-1.452 1.054L11 11.147l-2.684 1.41a1 1 0 01-1.452-1.054l.513-2.997-2.176-2.121a1 1 0 01.554-1.707l3.007-.438 1.535-2.66a1 1 0 01.897-.487z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-black text-orange-800 uppercase tracking-widest mb-1">Negotiation Insight</p>
                                    <p className="text-xs font-bold text-orange-800/80 leading-relaxed italic">
                                        Aim for a hike that covers both inflation (~6%) and your personal growth/skills. Most Indian switch-hikes range from 20% to 40% depending on the industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SalaryHikeUI;
