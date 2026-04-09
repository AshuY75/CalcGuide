import React, { useState, useEffect } from 'react';

const BalanceTransferUI = () => {
    const [outstanding, setOutstanding] = useState('5000000');
    const [currentROI, setCurrentROI] = useState('9.5');
    const [remainingMonths, setRemainingMonths] = useState('180');
    const [newROI, setNewROI] = useState('8.5');
    const [processingFee, setProcessingFee] = useState('5000');
    
    const [results, setResults] = useState(null);

    const calculateSavings = () => {
        const principal = parseFloat(outstanding);
        const r1 = parseFloat(currentROI) / 12 / 100;
        const n = parseFloat(remainingMonths);
        const r2 = parseFloat(newROI) / 12 / 100;
        const fee = parseFloat(processingFee) || 0;

        if (isNaN(principal) || isNaN(r1) || isNaN(r2) || isNaN(n) || n === 0) return;

        // Current EMI & Interest
        const emi1 = principal * r1 * Math.pow(1 + r1, n) / (Math.pow(1 + r1, n) - 1);
        const totalInt1 = (emi1 * n) - principal;

        // New EMI & Interest
        const emi2 = principal * r2 * Math.pow(1 + r2, n) / (Math.pow(1 + r2, n) - 1);
        const totalInt2 = (emi2 * n) - principal;

        const grossSavings = totalInt1 - totalInt2;
        const netSavings = grossSavings - fee;
        const monthlySaving = emi1 - emi2;

        setResults({
            oldEMI: Math.floor(emi1),
            newEMI: Math.floor(emi2),
            monthlySaving: Math.floor(monthlySaving),
            netSavings: Math.floor(netSavings),
            grossSavings: Math.floor(grossSavings),
            fee: fee
        });
    };

    useEffect(() => {
        calculateSavings();
    }, [outstanding, currentROI, remainingMonths, newROI, processingFee]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Inputs */}
                    <div className="space-y-6">
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Loan Outstanding (₹)</label>
                            <input
                                type="number"
                                value={outstanding}
                                onChange={(e) => setOutstanding(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-cyan-600 outline-none font-black text-xl text-slate-800 transition-all"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Current ROI (%)</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={currentROI}
                                    onChange={(e) => setCurrentROI(e.target.value)}
                                    className="w-full px-4 py-3 bg-red-50 border-2 border-red-100 rounded-2xl focus:border-red-600 outline-none font-black text-lg text-red-800 transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">New ROI (%)</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={newROI}
                                    onChange={(e) => setNewROI(e.target.value)}
                                    className="w-full px-4 py-3 bg-cyan-50 border-2 border-cyan-100 rounded-2xl focus:border-cyan-600 outline-none font-black text-lg text-cyan-800 transition-all"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Left Tenure (Months)</label>
                                <input
                                    type="number"
                                    value={remainingMonths}
                                    onChange={(e) => setRemainingMonths(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-cyan-600 outline-none font-black text-lg text-slate-800 transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Switching Costs (₹)</label>
                                <input
                                    type="number"
                                    value={processingFee}
                                    onChange={(e) => setProcessingFee(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-cyan-600 outline-none font-black text-lg text-slate-800 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Result Card */}
                    {results && (
                        <div className="relative">
                            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-center border-l-4 border-cyan-500">
                                <p className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-2">Net Total Savings</p>
                                <div className="text-5xl font-black tracking-tighter mb-1 font-sans">
                                    ₹{results.netSavings.toLocaleString('en-IN')}
                                </div>
                                <div className="flex items-center gap-2 mb-8">
                                    <span className="text-[10px] font-black px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded-md uppercase">Monthly Saving: ₹{results.monthlySaving.toLocaleString('en-IN')}</span>
                                </div>

                                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                                    <div>
                                        <p className="text-[8px] font-black opacity-40 uppercase mb-1 tracking-widest">New EMI</p>
                                        <p className="text-xl font-black text-cyan-400">₹{results.newEMI.toLocaleString('en-IN')}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[8px] font-black opacity-40 uppercase mb-1 tracking-widest">Old EMI</p>
                                        <p className="text-xl font-black text-red-400">₹{results.oldEMI.toLocaleString('en-IN')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Savings Verdict */}
                {results && results.netSavings > 0 && (
                    <div className="mt-8 bg-cyan-600 p-4 rounded-2xl flex items-center justify-between text-white animate-in zoom-in duration-500">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 p-2 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-none mb-1">Switching Verdict</p>
                                <p className="text-lg font-black leading-none">High Savings! Switching is highly recommended.</p>
                            </div>
                        </div>
                        <div className="text-right hidden sm:block">
                            <p className="text-[10px] font-black opacity-60 uppercase tracking-widest">Break-Even</p>
                            <p className="text-lg font-black italic">~{Math.ceil(results.fee / results.monthlySaving)} Months</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BalanceTransferUI;
