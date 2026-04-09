import React, { useState, useEffect } from 'react';

const PropertyAppreciationUI = () => {
    const [purchasePrice, setPurchasePrice] = useState('5000000');
    const [currentPrice, setCurrentPrice] = useState('8500000');
    const [years, setYears] = useState('8');
    
    const [results, setResults] = useState(null);

    const calculateAppreciation = () => {
        const p1 = parseFloat(purchasePrice);
        const p2 = parseFloat(currentPrice);
        const t = parseFloat(years);

        if (isNaN(p1) || isNaN(p2) || isNaN(t) || t === 0 || p1 === 0) return;

        const absoluteReturn = p2 - p1;
        const totalPct = (absoluteReturn / p1) * 100;
        
        // CAGR Formula: [(Current/Purchase)^(1/t) - 1] * 100
        const cagr = (Math.pow(p2 / p1, 1 / t) - 1) * 100;
        
        // Multiple Calculation
        const multiple = p2 / p1;

        setResults({
            absoluteReturn: Math.floor(absoluteReturn),
            totalPct: totalPct.toFixed(2),
            cagr: cagr.toFixed(2),
            multiple: multiple.toFixed(2)
        });
    };

    useEffect(() => {
        calculateAppreciation();
    }, [purchasePrice, currentPrice, years]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Inputs */}
                    <div className="space-y-6">
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Purchase Price (₹)</label>
                            <input
                                type="number"
                                value={purchasePrice}
                                onChange={(e) => setPurchasePrice(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Current/Estimated Price (₹)</label>
                            <input
                                type="number"
                                value={currentPrice}
                                onChange={(e) => setCurrentPrice(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Holding Period (Years)</label>
                            <div className="flex items-center gap-4">
                                <input
                                    type="range"
                                    min="1"
                                    max="30"
                                    value={years}
                                    onChange={(e) => setYears(e.target.value)}
                                    className="flex-1 accent-indigo-600"
                                />
                                <span className="font-black text-xl text-indigo-600 w-12">{years}Y</span>
                            </div>
                        </div>
                    </div>

                    {/* Result Card */}
                    {results && (
                        <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden flex flex-col justify-center group animate-in zoom-in duration-500">
                             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div className="relative z-10">
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2 italic">Annual Appreciation (CAGR)</p>
                                <div className="text-6xl font-black tracking-tighter text-indigo-400 mb-1">
                                    {results.cagr}%
                                </div>
                                <p className="text-[11px] font-black uppercase tracking-widest opacity-30 mb-8 leading-none">Compounded Growth</p>
                                
                                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                                    <div>
                                        <p className="text-[8px] font-black opacity-40 uppercase mb-1 tracking-widest">Profit Amount</p>
                                        <p className="text-xl font-black">₹{(results.absoluteReturn / 100000).toFixed(2)}L</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[8px] font-black opacity-40 uppercase mb-1 tracking-widest">Asset Multiple</p>
                                        <p className="text-xl font-black text-indigo-400">{results.multiple}x</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Return Matrix */}
                {results && (
                    <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 flex items-center justify-between">
                        <div className="flex gap-10">
                            <div>
                                <p className="text-[8px] font-black text-indigo-400 uppercase mb-1 tracking-widest">Total Growth</p>
                                <p className="text-xl font-black text-indigo-900">{results.totalPct}%</p>
                            </div>
                            <div>
                                <p className="text-[8px] font-black text-indigo-400 uppercase mb-1 tracking-widest">Holding Term</p>
                                <p className="text-xl font-black text-indigo-900">{years} Years</p>
                            </div>
                        </div>
                        <div className="text-right">
                             <div className="px-3 py-1 bg-indigo-600 rounded-lg text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-indigo-100">
                                {results.cagr > 12 ? 'Excellent Returns' : results.cagr > 8 ? 'Strong Growth' : 'Steady Growth'}
                             </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PropertyAppreciationUI;
