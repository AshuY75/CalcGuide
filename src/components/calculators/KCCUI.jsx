import React, { useState, useEffect } from 'react';

const KCCUI = () => {
    const [loanAmount, setLoanAmount] = useState('100000');
    const [months, setMonths] = useState('12');
    const [promptRepayment, setPromptRepayment] = useState(true);
    
    const [results, setResults] = useState(null);

    const calculateKCC = () => {
        const principal = parseFloat(loanAmount);
        const t = parseFloat(months) / 12;
        
        let rate = 7; // Standard 7%
        if (promptRepayment) {
            rate = 4; // 3% subvention applies
        }

        if (isNaN(principal) || isNaN(t) || t === 0) return;

        const interest = (principal * rate * t) / 100;
        const total = principal + interest;

        setResults({
            interest: Math.floor(interest),
            totalRepayment: Math.floor(total),
            effectiveRate: rate,
            savings: promptRepayment ? Math.floor((principal * 7 * t / 100) - interest) : 0
        });
    };

    useEffect(() => {
        calculateKCC();
    }, [loanAmount, months, promptRepayment]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Inputs */}
                    <div className="space-y-6">
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Credit Limit / Loan Amount (₹)</label>
                            <input
                                type="number"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-green-600 outline-none font-black text-xl text-slate-800 transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Period (Months)</label>
                            <input
                                type="number"
                                value={months}
                                onChange={(e) => setMonths(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-green-600 outline-none font-black text-xl text-slate-800 transition-all"
                            />
                        </div>
                        
                        <div 
                            onClick={() => setPromptRepayment(!promptRepayment)}
                            className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${promptRepayment ? 'bg-green-50 border-green-600' : 'bg-slate-50 border-slate-100 grayscale hover:grayscale-0'}`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${promptRepayment ? 'bg-green-600 border-green-600' : 'bg-white border-slate-300'}`}>
                                    {promptRepayment && <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-800 text-sm">Prompt Repayment</h4>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">3% Interest Subvention</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Result Card */}
                    {results && (
                        <div className="bg-green-600 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-green-100 relative overflow-hidden flex flex-col justify-center animate-in slide-in-from-right-4 duration-500">
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Effective Interest Rate</p>
                            <div className="text-6xl font-black tracking-tighter mb-4">
                                {results.effectiveRate}% <span className="text-2xl opacity-60">APR</span>
                            </div>
                            
                            <div className="space-y-4 pt-6 border-t border-white/10">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-black opacity-60 uppercase tracking-widest">Total Interest</span>
                                    <span className="text-2xl font-black">₹{results.interest.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-black opacity-60 uppercase tracking-widest">Total Repayment</span>
                                    <span className="text-xl font-black opacity-80">₹{results.totalRepayment.toLocaleString('en-IN')}</span>
                                </div>
                                {results.savings > 0 && (
                                    <div className="mt-4 p-3 bg-white/20 rounded-xl text-center font-black text-xs">
                                        You saved ₹{results.savings.toLocaleString('en-IN')} with prompt payment!
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-[8px] font-black text-slate-400 uppercase mb-1">Standard Rate</p>
                        <p className="text-sm font-black text-slate-800">7% APR for limits up to ₹3 Lakhs.</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
                        <p className="text-[8px] font-black text-green-600 uppercase mb-1">Incentive</p>
                        <p className="text-sm font-black text-green-900 leading-tight italic">Pay within due date to enjoy effective 4% rate.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-[8px] font-black text-slate-400 uppercase mb-1">PAIS Portal</p>
                        <p className="text-sm font-black text-slate-800 leading-tight">Interest subvention is handled via DBT (Direct Benefit Transfer).</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KCCUI;
