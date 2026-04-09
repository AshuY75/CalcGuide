import React, { useState, useEffect } from 'react';

const CarLoanEMIUI = () => {
    const [price, setPrice] = useState('1000000');
    const [downPayment, setDownPayment] = useState('200000');
    const [interest, setInterest] = useState('8.75');
    const [tenure, setTenure] = useState('7');

    const [results, setResults] = useState(null);

    const calculateEMI = () => {
        const principal = parseFloat(price) - parseFloat(downPayment);
        const r = parseFloat(interest) / (12 * 100);
        const n = parseInt(tenure) * 12;

        if (principal <= 0 || !n) return;

        const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPayment = emi * n;
        const totalInterest = totalPayment - principal;

        setResults({
            emi: Math.round(emi),
            interest: Math.round(totalInterest),
            total: Math.round(totalPayment),
            loanAmount: principal
        });
    };

    useEffect(() => {
        calculateEMI();
    }, [price, downPayment, interest, tenure]);

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-6 sm:p-8">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">On-Road Price (₹)</label>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Down Payment (₹)</label>
                            <input
                                type="number"
                                value={downPayment}
                                onChange={(e) => setDownPayment(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
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
                                <option value="1">1 Year</option>
                                <option value="3">3 Years</option>
                                <option value="5">5 Years</option>
                                <option value="7">7 Years (Typical)</option>
                                <option value="8">8 Years</option>
                            </select>
                        </div>
                    </div>

                    {results && (
                        <div className="mt-8 space-y-4">
                            <div className="p-8 bg-slate-900 rounded-3xl text-white text-center shadow-lg relative overflow-hidden">
                                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Monthly EMI</p>
                                <p className="text-5xl font-black text-blue-400">₹{results.emi.toLocaleString('en-IN')}</p>
                                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase font-bold text-slate-500">Loan Amount</p>
                                        <p className="text-sm font-bold">₹{results.loanAmount.toLocaleString('en-IN')}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] uppercase font-bold text-slate-500">Total Interest</p>
                                        <p className="text-sm font-bold text-orange-400">₹{results.interest.toLocaleString('en-IN')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                <p className="text-[10px] text-blue-700 font-bold uppercase mb-1">Affordability Check</p>
                                <p className="text-xs text-blue-800 italic">
                                    This EMI is equivalent to ₹{(results.emi / 30).toFixed(0)} per day — roughly the cost of a cup of coffee at a premium café.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CarLoanEMIUI;
