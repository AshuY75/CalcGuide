import React, { useState, useEffect } from 'react';

const LAPCalculatorUI = () => {
    const [propertyValue, setPropertyValue] = useState('10000000');
    const [loanAmount, setLoanAmount] = useState('6000000');
    const [interest, setInterest] = useState('9.5');
    const [tenure, setTenure] = useState('10');

    const [results, setResults] = useState(null);

    const calculateEMI = () => {
        const P = parseFloat(loanAmount);
        const r = parseFloat(interest) / (12 * 100);
        const n = parseInt(tenure) * 12;

        if (!P || !n) return;

        const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPayment = emi * n;
        const totalInterest = totalPayment - P;

        setResults({
            emi: Math.round(emi),
            interest: Math.round(totalInterest),
            ltv: ((P / parseFloat(propertyValue)) * 100).toFixed(1)
        });
    };

    useEffect(() => {
        calculateEMI();
    }, [propertyValue, loanAmount, interest, tenure]);

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-6 sm:p-8">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Market Property Value (₹)</label>
                            <input
                                type="number"
                                value={propertyValue}
                                onChange={(e) => setPropertyValue(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Required Loan Amount (₹)</label>
                            <input
                                type="number"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-blue-600"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Interest Rate %</label>
                            <input
                                type="number"
                                value={interest}
                                onChange={(e) => setInterest(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Tenure (Years)</label>
                            <select
                                value={tenure}
                                onChange={(e) => setTenure(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                            >
                                <option value="5">5 Years</option>
                                <option value="10">10 Years</option>
                                <option value="15">15 Years</option>
                            </select>
                        </div>
                    </div>

                    {results && (
                        <div className="mt-8 space-y-4">
                            <div className="p-8 bg-slate-900 rounded-3xl text-white text-center shadow-lg relative overflow-hidden">
                                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Monthly LAP EMI</p>
                                <p className="text-4xl font-black text-blue-400">₹{results.emi.toLocaleString('en-IN')}</p>
                                
                                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase font-bold text-slate-500">Loan-To-Value (LTV)</p>
                                        <p className="text-sm font-bold text-white">{results.ltv}%</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] uppercase font-bold text-slate-500">Total Interest</p>
                                        <p className="text-sm font-bold text-orange-400">₹{results.interest.toLocaleString('en-IN')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 flex items-center">
                        <span className="text-xl mr-3">🏢</span>
                        <p className="text-xs text-blue-800 leading-relaxed font-medium">
                            LAP interest rates are lower than Personal Loans because you provide property as security. However, processing takes longer (7-15 days).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LAPCalculatorUI;
