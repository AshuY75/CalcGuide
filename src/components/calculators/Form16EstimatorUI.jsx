import React, { useState, useEffect } from 'react';

const Form16EstimatorUI = () => {
    const [income, setIncome] = useState('1500000');
    const [hra, setHra] = useState('100000');
    const [sec80c, setSec80c] = useState('150000');
    const [sec80d, setSec80d] = useState('25000');
    const [tds, setTds] = useState('120000');
    const [regime, setRegime] = useState('new');
    
    const [results, setResults] = useState(null);

    const calculateForm16 = () => {
        const inc = parseFloat(income);
        const hr = parseFloat(hra) || 0;
        const c = Math.min(150000, parseFloat(sec80c) || 0);
        const d = Math.min(regime === 'old' ? 25000 : 0, parseFloat(sec80d) || 0);
        const t = parseFloat(tds) || 0;
        
        const standardDeduction = 75000;

        let totalDeductions = 0;
        if (regime === 'old') {
            totalDeductions = standardDeduction + hr + c + d;
        } else {
            totalDeductions = standardDeduction;
        }

        const taxable = Math.max(0, inc - totalDeductions);
        
        let tax = 0;
        if (regime === 'new') {
            // Rebate up to 12L for New Regime 2025
            if (taxable <= 1200000) {
                tax = 0;
            } else {
                if (taxable > 400000) tax += Math.min(400000, taxable - 400000) * 0.05;
                if (taxable > 800000) tax += Math.min(400000, taxable - 800000) * 0.10;
                if (taxable > 1200000) tax += Math.min(400000, taxable - 1200000) * 0.15;
                if (taxable > 1600000) tax += Math.min(400000, taxable - 1600000) * 0.20;
                if (taxable > 2400000) tax += (taxable - 2400000) * 0.30;
            }
        } else {
            // Old Regime (FY 2024-25 logic)
            if (taxable > 250000) tax += Math.min(250000, taxable - 250000) * 0.05;
            if (taxable > 500000) tax += Math.min(500000, taxable - 500000) * 0.20;
            if (taxable > 1000000) tax += (taxable - 1000000) * 0.30;
            if (taxable <= 500000) tax = 0; // 87A rebate
        }

        const cess = tax * 0.04;
        const totalPayable = tax + cess;
        const refundOrDue = t - totalPayable;

        setResults({
            gross: inc,
            taxable,
            totalDeductions,
            tax,
            cess,
            totalPayable,
            refundOrDue
        });
    };

    useEffect(() => {
        calculateForm16();
    }, [income, hra, sec80c, sec80d, tds, regime]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-slate-800">
            <div className="p-8 sm:p-12">
                <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Inputs */}
                        <div className="space-y-6">
                            <div className="flex gap-4 mb-6">
                                {['new', 'old'].map((r) => (
                                    <button
                                        key={r}
                                        onClick={() => setRegime(r)}
                                        className={`flex-1 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all border-2 ${regime === r ? 'bg-slate-900 border-slate-900 text-white shadow-lg' : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-slate-300'}`}
                                    >
                                        {r} Regime
                                    </button>
                                ))}
                            </div>
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Gross Salary (Per Annum)</label>
                                <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none font-black text-xl" />
                            </div>
                            {regime === 'old' && (
                                <>
                                    <div>
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">HRA Exemption (₹)</label>
                                        <input type="number" value={hra} onChange={(e) => setHra(e.target.value)} className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none font-black text-lg" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">80C (Max 1.5L)</label>
                                            <input type="number" value={sec80c} onChange={(e) => setSec80c(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-indigo-600 outline-none font-bold" />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">80D (Health)</label>
                                            <input type="number" value={sec80d} onChange={(e) => setSec80d(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-indigo-600 outline-none font-bold" />
                                        </div>
                                    </div>
                                </>
                            )}
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Total TDS already Deducted</label>
                                <input type="number" value={tds} onChange={(e) => setTds(e.target.value)} className="w-full px-6 py-4 bg-slate-100 border-2 border-slate-200 rounded-2xl focus:border-rose-500 outline-none font-black text-xl text-rose-600" />
                            </div>
                        </div>

                        {/* Summary View (Form 16 Part B Style) */}
                        <div className="flex flex-col">
                            {results && (
                                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 space-y-4 shadow-inner flex-1">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 text-center">Part B (Approximate Reconstruction)</p>
                                    
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center py-2 border-b border-white">
                                            <span className="text-xs font-bold text-slate-500">Gross Salary</span>
                                            <span className="font-black text-slate-800">₹{results.gross.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-white">
                                            <span className="text-xs font-bold text-slate-500">Total Deductions & Exemptions</span>
                                            <span className="font-black text-rose-500">- ₹{results.totalDeductions.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b-2 border-slate-200">
                                            <span className="text-sm font-black text-slate-800 uppercase tracking-tighter">Taxable Salary</span>
                                            <span className="text-xl font-black text-slate-800">₹{results.taxable.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-xs font-bold text-slate-500">Tax Payable (inc. Cess)</span>
                                            <span className="font-black text-slate-800">₹{results.totalPayable.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b-2 border-slate-200">
                                            <span className="text-xs font-bold text-slate-500">TDS Deducted (Form 26AS)</span>
                                            <span className="font-black text-indigo-600">₹{results.refundOrDue > 0 ? results.totalPayable + results.refundOrDue : results.totalPayable - Math.abs(results.refundOrDue)}.00</span>
                                        </div>
                                    </div>

                                    <div className={`mt-8 p-6 rounded-3xl text-center shadow-xl border-2 ${results.refundOrDue >= 0 ? 'bg-emerald-600 border-emerald-500 text-white' : 'bg-rose-600 border-rose-500 text-white transition-all scale-105'}`}>
                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">{results.refundOrDue >= 0 ? 'Estimated Refund' : 'Tax Due (Payable)'}</p>
                                        <p className="text-4xl font-black tracking-tighter animate-in fade-in zoom-in duration-500">
                                            ₹{Math.abs(results.refundOrDue).toLocaleString('en-IN')}
                                        </p>
                                    </div>
                                    <p className="text-[10px] text-slate-400 font-bold text-center mt-4 italic">
                                        *Final tax may vary based on specific components like LTA, Professional Tax, etc.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form16EstimatorUI;
