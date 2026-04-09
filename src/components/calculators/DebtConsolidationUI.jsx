import React, { useState, useEffect } from 'react';

const DebtConsolidationUI = () => {
    const [loans, setLoans] = useState([
        { id: 1, name: 'Credit Card', balance: 50000, roi: 36, emi: 4500 },
        { id: 2, name: 'Personal Loan', balance: 200000, roi: 16, emi: 6000 }
    ]);
    const [newROI, setNewROI] = useState('11');
    const [newTenure, setNewTenure] = useState('5');
    
    const [results, setResults] = useState(null);

    const addLoan = () => {
        setLoans([...loans, { id: Date.now(), name: 'New Loan', balance: 0, roi: 12, emi: 0 }]);
    };

    const removeLoan = (id) => {
        setLoans(loans.filter(l => l.id !== id));
    };

    const updateLoan = (id, field, value) => {
        setLoans(loans.map(l => l.id === id ? { ...l, [field]: parseFloat(value) || 0 } : l));
    };

    const calculateConsolidation = () => {
        const totalBalance = loans.reduce((acc, l) => acc + l.balance, 0);
        const currentEMISum = loans.reduce((acc, l) => acc + l.emi, 0);
        
        const r = parseFloat(newROI) / 12 / 100;
        const n = parseFloat(newTenure) * 12;

        if (isNaN(totalBalance) || isNaN(r) || isNaN(n) || n === 0 || totalBalance === 0) return;

        const newEMI = totalBalance * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
        const monthlySaving = currentEMISum - newEMI;

        setResults({
            totalBalance,
            currentEMISum,
            newEMI: Math.floor(newEMI),
            monthlySaving: Math.floor(monthlySaving)
        });
    };

    useEffect(() => {
        calculateConsolidation();
    }, [loans, newROI, newTenure]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left: Current Debts */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest italic">Current High-Interest Debts</h3>
                            <button 
                                onClick={addLoan}
                                className="bg-slate-900 text-white text-[10px] font-black px-4 py-2 rounded-xl hover:bg-slate-800 transition-all uppercase tracking-widest"
                            >
                                + Add Debt
                            </button>
                        </div>
                        
                        <div className="space-y-4">
                            {loans.map((loan) => (
                                <div key={loan.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 relative group animate-in slide-in-from-left-4 duration-500">
                                    <button 
                                        onClick={() => removeLoan(loan.id)}
                                        className="absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full shadow-md text-red-500 flex items-center justify-center border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        ×
                                    </button>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <input 
                                                type="text" 
                                                value={loan.name} 
                                                onChange={(e) => updateLoan(loan.id, 'name', e.target.value)}
                                                className="bg-transparent font-black text-slate-800 outline-none w-full"
                                            />
                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Loan Name / Source</p>
                                        </div>
                                        <div className="text-right">
                                            <input 
                                                type="number" 
                                                value={loan.balance} 
                                                onChange={(e) => updateLoan(loan.id, 'balance', e.target.value)}
                                                className="bg-transparent font-black text-slate-800 outline-none w-full text-right"
                                            />
                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Outstanding Balance (₹)</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-2 gap-4">
                                        <div>
                                            <input 
                                                type="number" 
                                                value={loan.emi} 
                                                onChange={(e) => updateLoan(loan.id, 'emi', e.target.value)}
                                                className="bg-transparent font-black text-indigo-600 outline-none w-full"
                                            />
                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Current EMI (₹)</p>
                                        </div>
                                        <div className="text-right">
                                            <input 
                                                type="number" 
                                                value={loan.roi} 
                                                onChange={(e) => updateLoan(loan.id, 'roi', e.target.value)}
                                                className="bg-transparent font-black text-red-600 outline-none w-full text-right"
                                            />
                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Original Interest (%)</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Consolidation Result */}
                    <div className="space-y-8">
                        <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 italic">Consolidated Loan Configuration</h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">New ROI (%)</label>
                                    <input
                                        type="number"
                                        step="0.5"
                                        value={newROI}
                                        onChange={(e) => setNewROI(e.target.value)}
                                        className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">New Tenure (Yrs)</label>
                                    <input
                                        type="number"
                                        value={newTenure}
                                        onChange={(e) => setNewTenure(e.target.value)}
                                        className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        {results && (
                            <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div className="relative z-10">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-2 italic">Cashflow Impact</p>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className={`text-6xl font-black tracking-tighter ${results.monthlySaving > 0 ? 'text-green-400' : 'text-slate-400'}`}>
                                            ₹{Math.abs(results.monthlySaving).toLocaleString('en-IN')}
                                        </span>
                                    </div>
                                    <p className="text-[10px] font-black uppercase opacity-60 tracking-widest mb-8">
                                        {results.monthlySaving > 0 ? 'Monthly Liquidity Gain' : 'Monthly Cash Increase'}
                                    </p>

                                    <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-8">
                                        <div>
                                            <p className="text-[8px] font-black opacity-40 uppercase mb-1 tracking-widest">New Single EMI</p>
                                            <p className="text-xl font-black text-indigo-400">₹{results.newEMI.toLocaleString('en-IN')}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[8px] font-black opacity-40 uppercase mb-1 tracking-widest">Total Pooled Debt</p>
                                            <p className="text-xl font-black">₹{results.totalBalance.toLocaleString('en-IN')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DebtConsolidationUI;
