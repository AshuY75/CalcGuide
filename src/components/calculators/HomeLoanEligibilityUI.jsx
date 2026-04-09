import React, { useState, useEffect } from 'react';

const HomeLoanEligibilityUI = () => {
    const [income, setIncome] = useState('100000');
    const [existingEmis, setExistingEmis] = useState('10000');
    const [interest, setInterest] = useState('8.5');
    const [tenure, setTenure] = useState('20');

    const [results, setResults] = useState(null);

    const calculateEligibility = () => {
        const monIncome = parseFloat(income);
        const emis = parseFloat(existingEmis);
        const rate = parseFloat(interest) / (12 * 100);
        const months = parseInt(tenure) * 12;

        // 1. Calculate FOIR (Usually 50% for < 50k, 60% for > 1L)
        let foir = 0.50;
        if (monIncome > 100000) foir = 0.60;
        else if (monIncome > 50000) foir = 0.55;

        // 2. Max EMI allowed
        const maxEmiAllowed = monIncome * foir;
        const availableEmi = Math.max(0, maxEmiAllowed - emis);

        // 3. Max Loan Amount (PV of EMI)
        // Formula: P = EMI * [ (1+r)^n - 1 ] / [ r * (1+r)^n ]
        const maxLoan = availableEmi * (Math.pow(1 + rate, months) - 1) / (rate * Math.pow(1 + rate, months));

        setResults({
            foir: foir * 100,
            maxEmi: Math.round(availableEmi),
            maxLoan: Math.round(maxLoan)
        });
    };

    useEffect(() => {
        calculateEligibility();
    }, [income, existingEmis, interest, tenure]);

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-6 sm:p-8">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Monthly Gross Income (₹)</label>
                            <input
                                type="number"
                                value={income}
                                onChange={(e) => setIncome(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-blue-600"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Existing EMIs (Total) (₹)</label>
                            <input
                                type="number"
                                value={existingEmis}
                                onChange={(e) => setExistingEmis(e.target.value)}
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
                            <input
                                type="number"
                                value={tenure}
                                onChange={(e) => setTenure(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                            />
                        </div>
                    </div>

                    {results && (
                        <div className="mt-8 space-y-4">
                            <div className="p-8 bg-blue-600 rounded-3xl text-white text-center shadow-lg shadow-blue-100 relative overflow-hidden">
                                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80 mb-2">Max Loan Capability</p>
                                <p className="text-4xl font-black">₹{results.maxLoan.toLocaleString('en-IN')}</p>
                                <p className="text-xs mt-4 font-medium opacity-70">
                                    Eligible for ₹{Math.round(results.maxLoan / 100000)} Lakhs @ {interest}% for {tenure} years
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Max EMI Allowed</p>
                                    <p className="text-lg font-bold text-slate-700">₹{results.maxEmi.toLocaleString('en-IN')}</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">FOIR Used</p>
                                    <p className="text-lg font-bold text-slate-700">{results.foir}%</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomeLoanEligibilityUI;
