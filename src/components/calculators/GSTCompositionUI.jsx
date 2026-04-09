import React, { useState, useEffect } from 'react';

const GSTCompositionUI = () => {
    const [businessType, setBusinessType] = useState('trader');
    const [turnover, setTurnover] = useState('5000000');
    const [results, setResults] = useState(null);

    const calculateGST = () => {
        const t = parseFloat(turnover);
        if (isNaN(t)) return;

        let rate = 0.01; // Default for traders/manufacturers
        if (businessType === 'restaurant') rate = 0.05;
        if (businessType === 'service') rate = 0.06;

        const totalGST = t * rate;
        const cgst = totalGST / 2;
        const sgst = totalGST / 2;

        setResults({
            totalGST,
            cgst,
            sgst,
            rate: rate * 100,
            netRevenue: t - totalGST
        });
    };

    useEffect(() => {
        calculateGST();
    }, [businessType, turnover]);

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                        <div className="flex justify-between items-center mb-2">
                             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Business Type</label>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { id: 'trader', label: 'Trader / Manufacturer', rate: '1%' },
                                { id: 'restaurant', label: 'Restaurant', rate: '5%' },
                                { id: 'service', label: 'Service Provider', rate: '6%' }
                            ].map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => setBusinessType(type.id)}
                                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                                        businessType === type.id 
                                        ? 'border-indigo-600 bg-indigo-50/50 shadow-sm' 
                                        : 'border-slate-100 bg-slate-50 hover:border-slate-300'
                                    }`}
                                >
                                    <div className="text-[10px] font-black text-indigo-600 mb-1">{type.rate} GST</div>
                                    <div className="text-xs font-bold text-slate-800 uppercase tracking-tighter">{type.label}</div>
                                </button>
                            ))}
                        </div>

                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Annual Turnover (₹)</label>
                            <input
                                type="number"
                                value={turnover}
                                onChange={(e) => setTurnover(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                            />
                            <p className="text-[10px] text-slate-400 mt-2 font-bold italic">Max limit: ₹1.5 Cr (₹50L for Services)</p>
                        </div>
                    </div>

                    {results && (
                        <div className="flex flex-col justify-center gap-6 animate-in fade-in zoom-in duration-500">
                            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
                                <div className="absolute top-0 right-0 p-6 opacity-10">
                                     <span className="text-6xl font-black">GST</span>
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Estimated GST Payable</p>
                                    <div>
                                        <p className="text-5xl font-black tracking-tighter text-indigo-400">
                                            ₹{results.totalGST.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                        </p>
                                        <p className="text-xs font-bold opacity-60 mt-1 uppercase">Flat {results.rate}% Composition Rate</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                                        <div>
                                            <p className="text-[9px] font-black text-indigo-300/60 uppercase mb-1">CGST ({(results.rate/2).toFixed(1)}%)</p>
                                            <p className="text-lg font-black tracking-tight">₹{results.cgst.toLocaleString('en-IN')}</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-indigo-300/60 uppercase mb-1">SGST ({(results.rate/2).toFixed(1)}%)</p>
                                            <p className="text-lg font-black tracking-tight">₹{results.sgst.toLocaleString('en-IN')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xl shadow-inner">✓</div>
                                <div>
                                    <p className="text-emerald-800 font-black text-xs uppercase tracking-wider">Turnover after GST</p>
                                    <p className="text-emerald-700 text-lg font-black">₹{results.netRevenue.toLocaleString('en-IN')}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest mb-3">Key Compliance Rules</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Cannot claim Input Tax Credit (ITC)",
                            "Cannot issue Tax Invoices (supply bill only)",
                            "Quarterly payment via CMP-08",
                            "Annual return via GSTR-4",
                            "Logo 'Composition taxable person' must be on bill",
                            "Cannot sell outside your state (mostly)"
                        ].map((rule, idx) => (
                            <li key={idx} className="flex gap-2 text-xs text-slate-500 font-medium">
                                <span className="text-indigo-600 font-black">•</span>
                                {rule}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default GSTCompositionUI;
