import React, { useState, useEffect } from 'react';

const BusinessLoanUI = () => {
    const [loanAmount, setLoanAmount] = useState('1000000');
    const [roi, setRoi] = useState('14');
    const [tenure, setTenure] = useState('3');
    
    const [results, setResults] = useState(null);

    const calculateEMI = () => {
        const p = parseFloat(loanAmount);
        const r = parseFloat(roi) / 12 / 100;
        const n = parseFloat(tenure) * 12;

        if (isNaN(p) || isNaN(r) || isNaN(n) || n === 0) return;

        const emi = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
        const totalPayment = emi * n;
        const totalInterest = totalPayment - p;

        setResults({
            loanAmount: Math.floor(p),
            emi: Math.floor(emi),
            totalInterest: Math.floor(totalInterest),
            totalPayment: Math.floor(totalPayment)
        });
    };

    useEffect(() => {
        calculateEMI();
    }, [loanAmount, roi, tenure]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Inputs */}
                    <div className="space-y-6">
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Business Loan Amount (₹)</label>
                            <input
                                type="number"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-600 outline-none font-black text-xl text-slate-800 transition-all"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Interest (%)</label>
                                <input
                                    type="number"
                                    step="0.5"
                                    value={roi}
                                    onChange={(e) => setRoi(e.target.value)}
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-600 outline-none font-black text-xl text-slate-800 transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Tenure (Yrs)</label>
                                <input
                                    type="number"
                                    value={tenure}
                                    onChange={(e) => setTenure(e.target.value)}
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-600 outline-none font-black text-xl text-slate-800 transition-all"
                                />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                            <button onClick={() => setRoi('9.5')} className="px-4 py-2 border border-emerald-100 text-[10px] font-black uppercase text-emerald-600 rounded-xl hover:bg-emerald-50 transition-colors">Secured ROI (9-10%)</button>
                            <button onClick={() => setRoi('16')} className="px-4 py-2 border border-emerald-100 text-[10px] font-black uppercase text-emerald-600 rounded-xl hover:bg-emerald-50 transition-colors">Unsecured ROI (15-18%)</button>
                        </div>
                    </div>

                    {/* Result Card */}
                    {results && (
                        <div className="bg-emerald-600 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-emerald-100 relative overflow-hidden flex flex-col justify-center animate-in zoom-in-95 duration-500">
                             <div className="absolute top-0 right-0 p-8 opacity-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="relative z-10">
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2 italic">Monthly Business EMI</p>
                                <div className="text-6xl font-black tracking-tighter mb-4">
                                    ₹{results.emi.toLocaleString('en-IN')}
                                </div>
                                <div className="space-y-4 pt-6 border-t border-white/10">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="font-black opacity-60 uppercase tracking-widest">Total Interest Paid</span>
                                        <span className="font-black">₹{results.totalInterest.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="font-black opacity-60 uppercase tracking-widest">Total Repayment</span>
                                        <span className="font-black opacity-80">₹{results.totalPayment.toLocaleString('en-IN')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-10 p-6 bg-slate-900 rounded-3xl text-white relative overflow-hidden group">
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h4 className="text-sm font-black text-emerald-400 uppercase tracking-widest mb-2 italic">Business Tip</h4>
                            <p className="text-xs font-bold leading-relaxed opacity-80">
                                Unsecured business loans have high ROIs. If you have collateral (Property/Gold), always opt for a <strong>Secured Loan</strong> to save up to 40% on monthly interest costs.
                            </p>
                        </div>
                        <div className="flex justify-end">
                            <div className="text-right">
                                <p className="text-[8px] font-black opacity-40 uppercase tracking-widest">Calculated on</p>
                                <p className="text-lg font-black text-emerald-400 uppercase">Reducing Balance Basis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessLoanUI;
