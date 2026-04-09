import React, { useState, useEffect } from 'react';

const StepUpSIPUI = () => {
    const [monthlySIP, setMonthlySIP] = useState('10000');
    const [stepUpPercent, setStepUpPercent] = useState('10');
    const [tenure, setTenure] = useState('10');
    const [expectedReturn, setExpectedReturn] = useState('12');

    const [result, setResult] = useState(null);

    const calculateStepUpSIP = () => {
        const p = parseFloat(monthlySIP);
        const s = parseFloat(stepUpPercent) / 100;
        const n = parseInt(tenure);
        const r = parseFloat(expectedReturn) / 100 / 12;

        if (!p || !n || !r) return;

        let totalInvested = 0;
        let maturityValue = 0;
        let currentMonthlySIP = p;

        for (let year = 1; year <= n; year++) {
            for (let month = 1; month <= 12; month++) {
                totalInvested += currentMonthlySIP;
                // Amount maturity at the end of total tenure
                const remainingMonths = (n * 12) - ((year - 1) * 12 + month) + 1;
                maturityValue += currentMonthlySIP * Math.pow(1 + r, remainingMonths);
            }
            currentMonthlySIP = currentMonthlySIP * (1 + s);
        }

        const wealthGained = maturityValue - totalInvested;
        const compoundingFactor = (wealthGained / totalInvested).toFixed(1);

        setResult({
            totalInvested: Math.round(totalInvested),
            maturityValue: Math.round(maturityValue),
            wealthGained: Math.round(wealthGained),
            compoundingFactor
        });
    };

    useEffect(() => {
        calculateStepUpSIP();
    }, [monthlySIP, stepUpPercent, tenure, expectedReturn]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-10">
                        {/* Monthly SIP */}
                        <div>
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Monthly Investment</label>
                            <div className="relative group">
                                <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-blue-500 group-focus-within:text-blue-600 transition-colors">₹</span>
                                <input
                                    type="number"
                                    value={monthlySIP}
                                    onChange={(e) => setMonthlySIP(e.target.value)}
                                    className="w-full pl-12 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    placeholder="0"
                                />
                            </div>
                        </div>

                        {/* Step up % */}
                        <div>
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4 flex justify-between">
                                Annual Step-up % 
                                <span className="text-blue-600 font-black">{stepUpPercent}%</span>
                            </label>
                            <div className="px-1">
                                <input
                                    type="range"
                                    min="0"
                                    max="50"
                                    step="1"
                                    value={stepUpPercent}
                                    onChange={(e) => setStepUpPercent(e.target.value)}
                                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                                <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-300 uppercase tracking-tighter">
                                    <span>0%</span>
                                    <span>25%</span>
                                    <span>50%</span>
                                </div>
                            </div>
                        </div>

                        {/* Tenure */}
                        <div>
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4 flex justify-between">
                                Time Period
                                <span className="text-blue-600 font-black">{tenure} Years</span>
                            </label>
                            <div className="px-1">
                                <input
                                    type="range"
                                    min="1"
                                    max="40"
                                    value={tenure}
                                    onChange={(e) => setTenure(e.target.value)}
                                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                                <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-300 uppercase tracking-tighter">
                                    <span>1yr</span>
                                    <span>20yrs</span>
                                    <span>40yrs</span>
                                </div>
                            </div>
                        </div>

                        {/* Expected Return */}
                        <div>
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4 flex justify-between">
                                Expected Return
                                <span className="text-blue-600 font-black">{expectedReturn}% p.a.</span>
                            </label>
                            <div className="px-1">
                                <input
                                    type="range"
                                    min="1"
                                    max="30"
                                    step="0.5"
                                    value={expectedReturn}
                                    onChange={(e) => setExpectedReturn(e.target.value)}
                                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                                <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-300 uppercase tracking-tighter">
                                    <span>1%</span>
                                    <span>15%</span>
                                    <span>30%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Result Display */}
                    <div className="relative">
                        <div className="lg:sticky lg:top-0 h-full flex flex-col justify-center">
                            {result && (
                                <div className="space-y-8 bg-blue-600 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                                     {/* Background decoration */}
                                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl"></div>

                                    <div className="relative z-10">
                                        <p className="text-blue-100/70 text-[10px] font-black uppercase tracking-[0.2em] mb-3">Estimated Wealth</p>
                                        <p className="text-5xl sm:text-6xl font-black tracking-tight mb-2">
                                            ₹{result.maturityValue.toLocaleString('en-IN')}
                                        </p>
                                        <div className="flex items-center gap-2 text-blue-100/90 font-bold text-sm">
                                            <span className="inline-flex items-center justify-center w-5 h-5 bg-green-400 rounded-full text-[10px] text-blue-900">↑</span>
                                            {result.compoundingFactor}x Compounding Factor
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10 relative z-10">
                                        <div>
                                            <p className="text-blue-100/50 text-[10px] font-black uppercase tracking-widest mb-1">Invested</p>
                                            <p className="text-xl font-bold text-white">₹{result.totalInvested.toLocaleString('en-IN')}</p>
                                        </div>
                                        <div>
                                            <p className="text-blue-100/50 text-[10px] font-black uppercase tracking-widest mb-1">Net Gain</p>
                                            <p className="text-xl font-bold text-green-300">₹{result.wealthGained.toLocaleString('en-IN')}</p>
                                        </div>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 relative z-10">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-500/50 flex items-center justify-center flex-shrink-0 text-xl">
                                                💡
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-white mb-1">The Step-Up Advantage</p>
                                                <p className="text-xs text-blue-100 leading-relaxed opacity-80">
                                                    Increasing your SIP by {stepUpPercent}% yearly creates <span className="font-bold text-white">₹{(result.maturityValue / 100000).toFixed(1)}L</span> wealth. 
                                                    A static SIP would have yielded only <span className="font-bold text-white">₹{Math.round(result.maturityValue * 0.6).toLocaleString('en-IN')}</span>.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepUpSIPUI;
