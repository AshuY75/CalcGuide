import React, { useState, useEffect } from 'react';

const MFOverlapUI = () => {
    const [fundAStocks, setFundAStocks] = useState('45');
    const [fundBStocks, setFundBStocks] = useState('52');
    const [commonStocks, setCommonStocks] = useState('18');
    
    const [results, setResults] = useState(null);

    const calculateOverlap = () => {
        const a = parseFloat(fundAStocks);
        const b = parseFloat(fundBStocks);
        const c = parseFloat(commonStocks);

        if (isNaN(a) || isNaN(b) || isNaN(c) || c > a || c > b) return;

        // Overlap Formula (Standard): (Common / Avg. Stocks) * 100
        // Or simplified for user understanding: (Common / (A + B - Common)) * 100 for Jaccard
        // Typically MFs use: % of Fund A that is in Fund B
        const overlapA = (c / a) * 100;
        const overlapB = (c / b) * 100;
        const weightedOverlap = (c * 2 / (a + b)) * 100;

        setResults({
            overlapA: overlapA.toFixed(1),
            overlapB: overlapB.toFixed(1),
            weighted: weightedOverlap.toFixed(1),
            uniqueA: a - c,
            uniqueB: b - c
        });
    };

    useEffect(() => {
        calculateOverlap();
    }, [fundAStocks, fundBStocks, commonStocks]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Inputs */}
                    <div className="space-y-8">
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4 italic">Portfolio Composition</label>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="text-[10px] font-black text-blue-400 uppercase tracking-widest block mb-1">Fund A Stocks</label>
                                    <input
                                        type="number"
                                        value={fundAStocks}
                                        onChange={(e) => setFundAStocks(e.target.value)}
                                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block mb-1">Fund B Stocks</label>
                                    <input
                                        type="number"
                                        value={fundBStocks}
                                        onChange={(e) => setFundBStocks(e.target.value)}
                                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Common Stocks Found</label>
                            <div className="flex items-center gap-6 bg-blue-50/50 p-6 rounded-2xl border-2 border-dashed border-blue-100">
                                <input
                                    type="range"
                                    min="0"
                                    max={Math.min(fundAStocks, fundBStocks)}
                                    value={commonStocks}
                                    onChange={(e) => setCommonStocks(e.target.value)}
                                    className="flex-1 accent-blue-600"
                                />
                                <div className="text-center min-w-[60px]">
                                    <div className="text-2xl font-black text-blue-600">{commonStocks}</div>
                                    <div className="text-[8px] font-black text-slate-400 uppercase">Overlap</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Result Visualization */}
                    {results && (
                        <div className="relative flex flex-col justify-center">
                            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                    </svg>
                                </div>

                                <div className="relative z-10">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2 italic">Portfolio Overlap</p>
                                    <div className="text-6xl font-black tracking-tighter text-white mb-2">
                                        {results.weighted}%
                                    </div>
                                    <p className="text-[11px] font-black uppercase tracking-widest opacity-30 mb-8 leading-none">Mutual Consistency</p>

                                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                                        <div>
                                            <p className="text-[8px] font-black opacity-40 uppercase mb-1 tracking-widest">In Fund A</p>
                                            <p className="text-xl font-black text-blue-400">{results.overlapA}%</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[8px] font-black opacity-40 uppercase mb-1 tracking-widest">In Fund B</p>
                                            <p className="text-xl font-black text-indigo-400">{results.overlapB}%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Diversification Verdict */}
                {results && (
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-slate-50 pt-10">
                        <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black shadow-lg ${parseFloat(results.weighted) > 70 ? 'bg-rose-500 shadow-rose-100' : parseFloat(results.weighted) > 40 ? 'bg-amber-500 shadow-amber-100' : 'bg-emerald-500 shadow-emerald-100'}`}>
                                {results.weighted}%
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Diversification Verdict</h4>
                                <p className="text-sm font-black text-slate-800 leading-tight">
                                    {parseFloat(results.weighted) > 70 
                                        ? "Redundant: Over 70% overlap indicates these funds hold almost identical stocks." 
                                        : parseFloat(results.weighted) > 40 
                                            ? "Caution: Significant overlap. You might be paying double expense ratios for same exposure." 
                                            : "Good: Low overlap suggests these funds provide distinct diversification."}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 bg-slate-50 p-6 rounded-2xl">
                             <div className="flex-1">
                                <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2">Unique Exposure</div>
                                <div className="flex gap-2 h-2 rounded-full overflow-hidden">
                                    <div className="bg-blue-500 h-full" style={{ width: `${(results.uniqueA / (results.uniqueA + results.uniqueB)) * 100}%` }}></div>
                                    <div className="bg-indigo-500 h-full" style={{ width: `${(results.uniqueB / (results.uniqueA + results.uniqueB)) * 100}%` }}></div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className="text-[9px] font-black text-blue-600">{results.uniqueA} Unique in A</span>
                                    <span className="text-[9px] font-black text-indigo-600">{results.uniqueB} Unique in B</span>
                                </div>
                             </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MFOverlapUI;
