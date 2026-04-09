import React, { useState, useEffect } from 'react';

const LoanEligibilityUI = () => {
    const [monthlyIncome, setMonthlyIncome] = useState('100000');
    const [existingEMI, setExistingEMI] = useState('0');
    const [interestRate, setInterestRate] = useState('8.5');
    const [tenure, setTenure] = useState('20');
    
    const [results, setResults] = useState(null);

    const calculateEligibility = () => {
        const income = parseFloat(monthlyIncome);
        const emi = parseFloat(existingEMI) || 0;
        const rate = parseFloat(interestRate) / 12 / 100;
        const n = parseFloat(tenure) * 12;

        if (isNaN(income) || isNaN(rate) || isNaN(n) || n === 0) return;

        // FOIR logic (Fixed Obligation to Income Ratio)
        let foir = 0.50; // 50%
        if (income >= 50000 && income < 100000) foir = 0.55;
        if (income >= 100000) foir = 0.60;

        const maxEMIPossible = (income * foir) - emi;
        
        let maxLoan = 0;
        if (maxEMIPossible > 0) {
            // PV = Pmt / r * [1 - (1+r)^-n]
            maxLoan = maxEMIPossible * (1 - Math.pow(1 + rate, -n)) / rate;
        }

        setResults({
            maxLoan: Math.max(0, Math.floor(maxLoan)),
            maxEMI: Math.max(0, Math.floor(maxEMIPossible)),
            foir: (foir * 100).toFixed(0),
            disposableIncome: income - emi - maxEMIPossible
        });
    };

    useEffect(() => {
        calculateEligibility();
    }, [monthlyIncome, existingEMI, interestRate, tenure]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Inputs */}
                        <div className="space-y-6">
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Gross Monthly Income (₹)</label>
                                <input
                                    type="number"
                                    value={monthlyIncome}
                                    onChange={(e) => setMonthlyIncome(e.target.value)}
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none font-black text-xl text-slate-800 transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Existing Monthly EMIs (₹)</label>
                                <input
                                    type="number"
                                    value={existingEMI}
                                    onChange={(e) => setExistingEMI(e.target.value)}
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none font-black text-xl text-slate-800 transition-all"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Interest Rate (%)</label>
                                    <input
                                        type="number"
                                        step="0.1"
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(e.target.value)}
                                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none font-black text-xl text-slate-800 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Tenure (Years)</label>
                                    <input
                                        type="number"
                                        value={tenure}
                                        onChange={(e) => setTenure(e.target.value)}
                                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none font-black text-xl text-slate-800 transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Result Big Display */}
                        <div className="flex flex-col justify-center">
                            {results && (
                                <div className="bg-indigo-600 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-indigo-100 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                    </div>
                                    <div className="relative z-10">
                                        <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">Estimated Max Loan Eligibility</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-6xl font-black tracking-tighter">
                                                ₹{(results.maxLoan / 100000).toFixed(2)} Lakh
                                            </span>
                                        </div>
                                        <p className="mt-2 text-xl font-bold opacity-80">
                                            (Absolute: ₹{results.maxLoan.toLocaleString('en-IN')})
                                        </p>
                                        <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-end">
                                            <div>
                                                <p className="text-[8px] font-black opacity-60 uppercase">Max EMI Limit</p>
                                                <p className="text-xl font-black">₹{results.maxEMI.toLocaleString('en-IN')}/mo</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[8px] font-black opacity-60 uppercase">FOIR APPLIED</p>
                                                <p className="text-xl font-black">{results.foir}%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {results && (
                        <div className="pt-10 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {/* Insight 1: Bank Norms */}
                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                                <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center shadow-sm mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-2">Banking Norms</h4>
                                <p className="text-xs text-slate-500 font-bold leading-relaxed italic">
                                    Most Indian banks like SBI and ICICI use a **FOIR** (Fixed Obligation to Income Ratio) of 50-60%. This ensures you have 40% salary left for lifestyle expenses.
                                </p>
                            </div>

                            {/* Insight 2: Disposable Income */}
                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                                <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-2">Left for Lifestyle</h4>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-3xl font-black text-indigo-600">₹{results.disposableIncome.toLocaleString('en-IN')}</span>
                                    <span className="text-[10px] font-black text-slate-400">/mo</span>
                                </div>
                                <p className="text-xs text-slate-500 font-bold leading-relaxed">
                                    This is your estimated monthly surplus after paying the max possible EMI and existing debts.
                                </p>
                            </div>

                            {/* Eligibility Tip */}
                            <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100 flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-amber-500 p-1 rounded-md text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M11.3 1.047a1 1 0 01.897.487l1.535 2.66 3.007.438a1 1 0 01.554 1.707l-2.176 2.121.513 2.997a1 1 0 01-1.452 1.054L11 11.147l-2.684 1.41a1 1 0 01-1.452-1.054l.513-2.997-2.176-2.121a1 1 0 01.554-1.707l3.007-.438 1.535-2.66a1 1 0 01.897-.487z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <h4 className="text-[10px] font-black text-amber-800 uppercase tracking-widest">Eligibility Tip</h4>
                                </div>
                                <p className="text-xs font-bold text-amber-800/80 leading-relaxed italic">
                                    Adding a co-applicant (spouse/parent) with a stable income can significantly boost your loan eligibility amount.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoanEligibilityUI;
