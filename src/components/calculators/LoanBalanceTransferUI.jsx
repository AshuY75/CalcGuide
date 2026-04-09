import React, { useState, useEffect } from 'react';

const LoanBalanceTransferUI = () => {
    const [outstanding, setOutstanding] = useState('5000000');
    const [currentRoi, setCurrentRoi] = useState('9.5');
    const [newRoi, setNewRoi] = useState('8.5');
    const [tenure, setTenure] = useState('180'); // 15 years remaining
    const [fee, setFee] = useState('5000');

    const [results, setResults] = useState(null);

    const calculateSavings = () => {
        const P = parseFloat(outstanding);
        const r_old = parseFloat(currentRoi) / (12 * 100);
        const r_new = parseFloat(newRoi) / (12 * 100);
        const n = parseInt(tenure);
        const processingFee = parseFloat(fee);

        if (!P || !n) return;

        // 1. Old Loan Remaining Interest
        const emi_old = (P * r_old * Math.pow(1 + r_old, n)) / (Math.pow(1 + r_old, n) - 1);
        const totalPayable_old = emi_old * n;
        const interest_old = totalPayable_old - P;

        // 2. New Loan Total Interest
        const emi_new = (P * r_new * Math.pow(1 + r_new, n)) / (Math.pow(1 + r_new, n) - 1);
        const totalPayable_new = emi_new * n;
        const interest_new = totalPayable_new - P;

        // 3. Savings
        const grossSavings = interest_old - interest_new;
        const netSavings = grossSavings - processingFee;
        const emiReduction = emi_old - emi_new;

        setResults({
            oldEmi: Math.round(emi_old),
            newEmi: Math.round(emi_new),
            emiReduction: Math.round(emiReduction),
            netSavings: Math.round(netSavings),
            breakeven: Math.ceil(processingFee / emiReduction)
        });
    };

    useEffect(() => {
        calculateSavings();
    }, [outstanding, currentRoi, newRoi, tenure, fee]);

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-6 sm:p-8">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Outstanding Principal (₹)</label>
                            <input
                                type="number"
                                value={outstanding}
                                onChange={(e) => setOutstanding(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-blue-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Remaining Tenure (Months)</label>
                            <input
                                type="number"
                                value={tenure}
                                onChange={(e) => setTenure(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Current Interest Rate %</label>
                            <input
                                type="number"
                                value={currentRoi}
                                onChange={(e) => setCurrentRoi(e.target.value)}
                                className="w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-bold text-orange-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">New Interest Rate %</label>
                            <input
                                type="number"
                                value={newRoi}
                                onChange={(e) => setNewRoi(e.target.value)}
                                className="w-full px-4 py-3 bg-green-50 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none font-bold text-green-600"
                            />
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                            <label className="text-sm font-bold text-slate-700">Transfer Fees (PF, Stamp etc.) (₹)</label>
                            <input
                                type="number"
                                value={fee}
                                onChange={(e) => setFee(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                            />
                        </div>
                    </div>

                    {results && (
                        <div className="mt-8 space-y-4">
                            <div className="p-8 bg-green-600 rounded-3xl text-white text-center shadow-lg shadow-green-100 relative overflow-hidden">
                                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80 mb-2">Total Net Savings</p>
                                <p className="text-4xl font-black">₹{results.netSavings.toLocaleString('en-IN')}</p>
                                <p className="text-xs mt-4 font-medium opacity-70">
                                    Breakeven in {results.breakeven} months
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">New EMI</p>
                                    <p className="text-lg font-bold text-slate-700">₹{results.newEmi.toLocaleString('en-IN')}</p>
                                    <p className="text-[10px] text-green-600 font-bold mt-1">Saves ₹{results.emiReduction}/mo</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Old EMI</p>
                                    <p className="text-lg font-bold text-slate-300 line-through">₹{results.oldEmi.toLocaleString('en-IN')}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoanBalanceTransferUI;
