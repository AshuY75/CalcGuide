import React, { useState, useEffect } from 'react';
import { calculateNewRegimeTax } from '../../utils/taxMath';

const AdvanceTaxUI = () => {
    const [estimatedIncome, setEstimatedIncome] = useState('1500000');
    const [estimatedDeductions, setEstimatedDeductions] = useState('150000');
    const [tdsPaid, setTdsPaid] = useState('50000');
    
    const [results, setResults] = useState(null);

    const calculateAdvanceTax = () => {
        const income = parseFloat(estimatedIncome);
        const deductions = parseFloat(estimatedDeductions);
        const tds = parseFloat(tdsPaid);

        if (isNaN(income)) return;

        // Use central utility for estimation
        const resultTax = calculateNewRegimeTax(income - deductions);
        const totalTaxLiability = resultTax.totalTax;
        const netTaxPayable = Math.max(0, totalTaxLiability - tds);

        const installments = [
            { date: 'June 15', percentage: 15, amount: Math.ceil(netTaxPayable * 0.15), cumulative: 15 },
            { date: 'Sept 15', percentage: 30, amount: Math.ceil(netTaxPayable * 0.30), cumulative: 45 },
            { date: 'Dec 15', percentage: 30, amount: Math.ceil(netTaxPayable * 0.30), cumulative: 75 },
            { date: 'March 15', percentage: 25, amount: Math.ceil(netTaxPayable * 0.25), cumulative: 100 },
        ];

        setResults({
            totalTaxLiability,
            netTaxPayable,
            installments,
            isExempt: netTaxPayable < 10000
        });
    };

    useEffect(() => {
        calculateAdvanceTax();
    }, [estimatedIncome, estimatedDeductions, tdsPaid]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Inputs */}
                        <div className="space-y-6">
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Annual Estimated Income</label>
                                <input
                                    type="number"
                                    value={estimatedIncome}
                                    onChange={(e) => setEstimatedIncome(e.target.value)}
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-amber-500 outline-none font-black text-xl text-slate-800 transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Total Deductions (80C, etc)</label>
                                <input
                                    type="number"
                                    value={estimatedDeductions}
                                    onChange={(e) => setEstimatedDeductions(e.target.value)}
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-amber-500 outline-none font-black text-xl text-slate-800 transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">TDS already Deducted (Paid)</label>
                                <input
                                    type="number"
                                    value={tdsPaid}
                                    onChange={(e) => setTdsPaid(e.target.value)}
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-amber-500 outline-none font-black text-xl text-slate-800 transition-all"
                                />
                            </div>
                        </div>

                        {/* Summary Display */}
                        <div className="md:col-span-2 flex flex-col justify-center">
                            {results && (
                                <div className={`p-10 rounded-[2.5rem] relative overflow-hidden group transition-all duration-500 ${
                                    results.isExempt 
                                    ? 'bg-emerald-50 border-2 border-emerald-100' 
                                    : 'bg-amber-50 border-2 border-amber-100'
                                }`}>
                                    <div className="relative z-10">
                                        <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">Total Advance Tax Payable</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className={`text-6xl font-black tracking-tighter ${results.isExempt ? 'text-emerald-600' : 'text-amber-600'}`}>
                                                ₹{results.netTaxPayable.toLocaleString('en-IN')}
                                            </span>
                                        </div>
                                        {results.isExempt ? (
                                            <p className="mt-4 text-sm font-bold text-emerald-700 italic">
                                                ✅ Since your net tax liability is below ₹10,000, you are not required to pay advance tax.
                                            </p>
                                        ) : (
                                            <p className="mt-4 text-sm font-bold text-amber-700">
                                                ⚠️ You must pay this in 4 installments to avoid Section 234C interest penalties.
                                            </p>
                                        )}
                                    </div>
                                    <div className="absolute right-0 bottom-0 p-8 opacity-5">
                                        <span className="text-9xl font-black">{results.isExempt ? 'OK' : 'TAX'}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {!results?.isExempt && results?.installments && (
                        <div className="pt-10 border-t border-slate-100 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] text-center">Payment Schedule (FY 2025-26)</h3>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {results.installments.map((inst, idx) => (
                                    <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="text-[10px] font-black text-slate-400 uppercase">Inst. 0{idx+1}</span>
                                            <span className="bg-amber-100 text-amber-700 text-[10px] font-black px-2 py-1 rounded-md">{inst.percentage}%</span>
                                        </div>
                                        <p className="text-lg font-black text-slate-800 mb-1">{inst.date}</p>
                                        <p className="text-2xl font-black text-amber-600">₹{inst.amount.toLocaleString('en-IN')}</p>
                                        <div className="mt-4 pt-4 border-t border-slate-200">
                                            <p className="text-[8px] font-bold text-slate-400 uppercase">Cumulative Paid</p>
                                            <p className="text-xs font-black text-slate-500">{inst.cumulative}% of Total</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-start gap-4">
                                <div className="bg-blue-600 p-2 rounded-xl text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-xs font-bold text-blue-800 leading-relaxed italic">
                                    Note: Senior citizens (60+) not having income from business or profession are exempt from paying advance tax.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdvanceTaxUI;
