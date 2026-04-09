import React, { useState, useEffect } from 'react';

const FDvsSIPUI = () => {
    const [investment, setInvestment] = useState('100000');
    const [years, setYears] = useState('5');
    const [fdRate, setFdRate] = useState('7.1');
    const [sipRate, setSipRate] = useState('12');

    const [result, setResult] = useState(null);

    const calculateComparison = () => {
        const P = parseFloat(investment);
        const t = parseFloat(years);
        const r_fd = parseFloat(fdRate) / 100;
        const r_sip = parseFloat(sipRate) / 100;

        if (!P || !t) return;

        // 1. FD Calculation (Quarterly Compounding as per Indian Banks)
        const n_fd = 4; // quarterly
        const fdMaturity = P * Math.pow(1 + r_fd / n_fd, n_fd * t);

        // 2. Mutual Fund Lumpsum (Annual Compounding standard for comparison)
        const mfMaturity = P * Math.pow(1 + r_sip, t);

        setResult({
            fdMaturity: Math.round(fdMaturity),
            mfMaturity: Math.round(mfMaturity),
            difference: Math.round(mfMaturity - fdMaturity),
            fdGain: Math.round(fdMaturity - P),
            mfGain: Math.round(mfMaturity - P),
            wealthRatio: (mfMaturity / fdMaturity).toFixed(1)
        });
    };

    useEffect(() => {
        calculateComparison();
    }, [investment, years, fdRate, sipRate]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Investment Amount */}
                        <div>
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Lumpsum Investment</label>
                            <div className="relative group">
                                <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-blue-500 group-focus-within:text-blue-600 transition-colors">₹</span>
                                <input
                                    type="number"
                                    value={investment}
                                    onChange={(e) => setInvestment(e.target.value)}
                                    className="w-full pl-12 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    placeholder="0"
                                />
                            </div>
                        </div>

                        {/* Tenure */}
                        <div>
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4 flex justify-between">
                                Investment Period
                                <span className="text-blue-600 font-black">{years} Years</span>
                            </label>
                            <div className="px-1">
                                <input
                                    type="range"
                                    min="1"
                                    max="30"
                                    value={years}
                                    onChange={(e) => setYears(e.target.value)}
                                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                                <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-300 uppercase tracking-tighter">
                                    <span>1yr</span>
                                    <span>15yrs</span>
                                    <span>30yrs</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* FD Rate */}
                        <div className="space-y-4 p-8 bg-orange-50/50 rounded-3xl border-2 border-orange-100/50 group hover:border-orange-200 transition-all">
                            <label className="text-xs font-black text-orange-900/40 uppercase tracking-widest flex justify-between">
                                FD Rate
                                <span className="text-orange-600 font-black">{fdRate}%</span>
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="15"
                                step="0.1"
                                value={fdRate}
                                onChange={(e) => setFdRate(e.target.value)}
                                className="w-full h-1.5 bg-orange-100 rounded-lg appearance-none cursor-pointer accent-orange-500"
                            />
                            <div className="flex items-center gap-2 text-[10px] font-black text-orange-400 uppercase tracking-tighter">
                                <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                                Risk-Free Returns
                            </div>
                        </div>

                        {/* SIP Rate */}
                        <div className="space-y-4 p-8 bg-indigo-50/50 rounded-3xl border-2 border-indigo-100/50 group hover:border-indigo-200 transition-all">
                            <label className="text-xs font-black text-indigo-900/40 uppercase tracking-widest flex justify-between">
                                MF Return
                                <span className="text-indigo-600 font-black">{sipRate}%</span>
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="30"
                                step="1"
                                value={sipRate}
                                onChange={(e) => setSipRate(e.target.value)}
                                className="w-full h-1.5 bg-indigo-100 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                            />
                            <div className="flex items-center gap-2 text-[10px] font-black text-indigo-400 uppercase tracking-tighter">
                                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                                Market Linked Growth
                            </div>
                        </div>
                    </div>

                    {/* Result Comparison */}
                    {result && (
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="relative overflow-hidden bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                                    <div className="absolute top-0 right-0 p-4 opacity-5">
                                        <span className="text-6xl font-black">FD</span>
                                    </div>
                                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">FD Maturity</p>
                                    <p className="text-4xl font-black text-slate-800 tracking-tight">₹{result.fdMaturity.toLocaleString('en-IN')}</p>
                                    <div className="mt-4 flex items-center justify-between text-xs font-bold">
                                        <span className="text-slate-400">Net Gain</span>
                                        <span className="text-orange-600">₹{result.fdGain.toLocaleString('en-IN')}</span>
                                    </div>
                                </div>

                                <div className="relative overflow-hidden bg-white p-8 rounded-3xl border-2 border-indigo-50 shadow-sm">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 text-indigo-600">
                                        <span className="text-6xl font-black">MF</span>
                                    </div>
                                    <p className="text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-2">MF Maturity</p>
                                    <p className="text-4xl font-black text-indigo-600 tracking-tight">₹{result.mfMaturity.toLocaleString('en-IN')}</p>
                                    <div className="mt-4 flex items-center justify-between text-xs font-bold">
                                        <span className="text-slate-400">Net Gain</span>
                                        <span className="text-indigo-600">₹{result.mfGain.toLocaleString('en-IN')}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-[2rem] blur opacity-20 group-hover:opacity-30 transition"></div>
                                <div className="relative bg-white border border-green-100 rounded-[2rem] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
                                     <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-green-50 rounded-full blur-2xl"></div>
                                    
                                    <div className="flex items-center gap-5 relative z-10">
                                        <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-green-100">
                                            📊
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-1">The Wealth Gap</p>
                                            <p className="text-2xl font-black text-slate-800">₹{result.difference.toLocaleString('en-IN')} Extra Wealth</p>
                                        </div>
                                    </div>

                                    <div className="px-6 py-3 bg-green-500 text-white rounded-2xl font-black text-sm relative z-10 shadow-lg shadow-green-100">
                                        {result.wealthRatio}x BETTER
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-2xl flex items-start gap-4 border border-slate-100">
                                <span className="text-xl">💡</span>
                                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                    While <span className="font-bold text-slate-700 font-black">Fixed Deposit</span> provides safety and guarantee, <span className="font-bold text-indigo-600 font-black">Equity Mutual Funds</span> usually beat inflation and generate higher wealth over 5+ years, though they come with market risks.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FDvsSIPUI;
