import React, { useState, useEffect } from 'react';

const PersonalLoanUI = () => {
    const [loanAmount, setLoanAmount] = useState('500000');
    const [tenure, setTenure] = useState('5');
    const [currentROI, setCurrentROI] = useState('10.75');
    
    const [banks, setBanks] = useState([
        { name: 'SBI', rate: 10.75, type: 'Govt' },
        { name: 'HDFC', rate: 11.25, type: 'Private' },
        { name: 'ICICI', rate: 10.85, type: 'Private' },
        { name: 'Axis', rate: 11.50, type: 'Private' },
        { name: 'Kotak', rate: 10.99, type: 'Private' }
    ]);

    const calculateEMI = (principal, annualRate, years) => {
        const p = parseFloat(principal);
        const r = parseFloat(annualRate) / 12 / 100;
        const n = parseFloat(years) * 12;
        if (isNaN(p) || isNaN(r) || isNaN(n) || n === 0) return 0;
        return Math.floor(p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Inputs */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4 italic">Configure Loan Parameters</label>
                            
                            <div className="space-y-6">
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Loan Amount (₹)</label>
                                    <input
                                        type="number"
                                        value={loanAmount}
                                        onChange={(e) => setLoanAmount(e.target.value)}
                                        className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-violet-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Tenure (Yrs)</label>
                                        <input
                                            type="number"
                                            value={tenure}
                                            onChange={(e) => setTenure(e.target.value)}
                                            className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-violet-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Select Interest</label>
                                        <div className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl font-black text-xl text-violet-600 shadow-sm flex items-center justify-between">
                                            {currentROI}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Summary Card */}
                        <div className="bg-violet-600 p-8 rounded-2xl text-white shadow-xl flex flex-col justify-center relative overflow-hidden group">
                           <div className="relative z-10">
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Selected EMI</p>
                                <div className="text-4xl font-black">₹{calculateEMI(loanAmount, currentROI, tenure).toLocaleString('en-IN')}</div>
                                <p className="text-[10px] font-black mt-1 opacity-80 italic">At {currentROI}% APR</p>
                           </div>
                           <div className="absolute top-0 right-0 p-4 rotate-12 opacity-10 group-hover:rotate-0 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                           </div>
                        </div>
                    </div>

                    {/* Comparison Table */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                             Bank Comparison 
                            <span className="h-px bg-slate-100 flex-1"></span>
                        </h3>
                        <div className="space-y-4">
                            {banks.map((bank, index) => {
                                const emi = calculateEMI(loanAmount, bank.rate, tenure);
                                return (
                                    <div 
                                        key={bank.name} 
                                        onClick={() => setCurrentROI(bank.rate)}
                                        className={`group cursor-pointer p-6 rounded-3xl border-2 transition-all flex items-center justify-between ${currentROI === bank.rate ? 'border-violet-600 bg-violet-50/50 shadow-lg' : 'border-slate-50 bg-slate-50/30 hover:bg-white hover:shadow-md'}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-slate-600 shadow-sm group-hover:bg-violet-600 group-hover:text-white transition-colors">
                                                {bank.name[0]}
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-800 text-lg">{bank.name}</h4>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{bank.type} Sector</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xl font-black text-slate-800">₹{emi.toLocaleString('en-IN')}</div>
                                            <div className={`text-[10px] font-black uppercase tracking-widest ${currentROI === bank.rate ? 'text-violet-600' : 'text-slate-400'}`}>
                                                Rate: {bank.rate}%
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalLoanUI;
