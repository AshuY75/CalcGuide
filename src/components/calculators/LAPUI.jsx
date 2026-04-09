import React, { useState, useEffect } from 'react';

const LAPUI = () => {
    const [propertyValue, setPropertyValue] = useState('5000000');
    const [ltv, setLtv] = useState('65');
    const [interestRate, setInterestRate] = useState('9.5');
    const [tenure, setTenure] = useState('15');
    
    const [results, setResults] = useState(null);

    const calculateLAP = () => {
        const value = parseFloat(propertyValue);
        const ltvPct = parseFloat(ltv) / 100;
        const rate = parseFloat(interestRate) / 12 / 100;
        const n = parseFloat(tenure) * 12;

        if (isNaN(value) || isNaN(rate) || isNaN(n) || n === 0) return;

        const loanAmount = value * ltvPct;
        const emi = loanAmount * rate * Math.pow(1 + rate, n) / (Math.pow(1 + rate, n) - 1);
        const totalPayment = emi * n;
        const totalInterest = totalPayment - loanAmount;

        setResults({
            loanAmount: Math.floor(loanAmount),
            emi: Math.floor(emi),
            totalInterest: Math.floor(totalInterest),
            totalPayment: Math.floor(totalPayment)
        });
    };

    useEffect(() => {
        calculateLAP();
    }, [propertyValue, ltv, interestRate, tenure]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Inputs */}
                    <div className="space-y-6">
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Property Market Value (₹)</label>
                            <input
                                type="number"
                                value={propertyValue}
                                onChange={(e) => setPropertyValue(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-rose-600 outline-none font-black text-xl text-slate-800 transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Max LTV (% of Value)</label>
                            <div className="flex items-center gap-4">
                                <input
                                    type="range"
                                    min="30"
                                    max="80"
                                    value={ltv}
                                    onChange={(e) => setLtv(e.target.value)}
                                    className="flex-1 accent-rose-600"
                                />
                                <span className="font-black text-xl text-rose-600 w-12">{ltv}%</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">ROI (%)</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-rose-600 outline-none font-black text-lg text-slate-800 transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Tenure (Yrs)</label>
                                <input
                                    type="number"
                                    value={tenure}
                                    onChange={(e) => setTenure(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-rose-600 outline-none font-black text-lg text-slate-800 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Result Card */}
                    {results && (
                        <div className="relative">
                            <div className="bg-rose-600 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-rose-100 relative overflow-hidden h-full flex flex-col justify-center">
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Maximum Eligible Loan</p>
                                <div className="text-5xl font-black tracking-tighter mb-1">
                                    ₹{(results.loanAmount / 100000).toFixed(2)} Lakh
                                </div>
                                <p className="text-xs font-bold opacity-80 mb-8">
                                    Full Amount: ₹{results.loanAmount.toLocaleString('en-IN')}
                                </p>

                                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                                    <div>
                                        <p className="text-[8px] font-black opacity-60 uppercase mb-1 text-slate-100 tracking-widest">Monthly EMI</p>
                                        <p className="text-2xl font-black">₹{results.emi.toLocaleString('en-IN')}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[8px] font-black opacity-60 uppercase mb-1 text-slate-100 tracking-widest">Total Interest</p>
                                        <p className="text-2xl font-black">₹{(results.totalInterest / 100000).toFixed(2)}L</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Info Bar */}
                <div className="mt-10 pt-10 border-t border-slate-100 flex flex-wrap gap-4">
                    <div className="px-5 py-3 bg-rose-50 rounded-2xl border border-rose-100">
                        <p className="text-[8px] font-black text-rose-500 uppercase tracking-tighter mb-0.5">LTV Tip</p>
                        <p className="text-[10px] font-black text-rose-900 leading-tight">Residential properties get ~65% LTV, while commercial gets ~50%.</p>
                    </div>
                    <div className="px-5 py-3 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter mb-0.5">End-Use</p>
                        <p className="text-[10px] font-black text-slate-800 leading-tight">Funds can be used for business, education or weddings. No speculation allowed.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LAPUI;
