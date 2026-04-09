import React, { useState, useEffect } from 'react';

const PersonalLoanEMIUI = () => {
    const [loanAmount, setLoanAmount] = useState('500000');
    const [interest, setInterest] = useState('12');
    const [tenure, setTenure] = useState('3');

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
            total: Math.round(totalPayment)
        });
    };

    useEffect(() => {
        calculateEMI();
    }, [loanAmount, interest, tenure]);

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-6 sm:p-8">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Loan Amount (₹)</label>
                            <input
                                type="number"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-lg"
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
                                <option value="2">2 Years</option>
                                <option value="3">3 Years</option>
                                <option value="4">4 Years</option>
                                <option value="5">5 Years</option>
                            </select>
                        </div>
                        
                        <div className="flex items-center p-4 bg-orange-50 rounded-xl border border-orange-100 italic text-[10px] text-orange-800">
                           Personal loans usually carry high interest. Check if you can get a Top-up on your Home Loan instead for lower rates.
                        </div>
                    </div>

                    {results && (
                        <div className="mt-8 space-y-4">
                            <div className="p-8 bg-indigo-600 rounded-3xl text-white text-center shadow-lg relative overflow-hidden">
                                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80 mb-2">Personal Loan EMI</p>
                                <p className="text-4xl font-black">₹{results.emi.toLocaleString('en-IN')}</p>
                                
                                <div className="mt-6 flex justify-around text-xs border-t border-white/10 pt-6">
                                    <div>
                                        <p className="opacity-60 font-bold uppercase mb-1">Total Interest</p>
                                        <p className="font-black text-white text-lg">₹{results.interest.toLocaleString('en-IN')}</p>
                                    </div>
                                    <div>
                                        <p className="opacity-60 font-bold uppercase mb-1">Total Payment</p>
                                        <p className="font-black text-white text-lg">₹{results.total.toLocaleString('en-IN')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PersonalLoanEMIUI;
