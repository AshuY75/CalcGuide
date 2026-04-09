import React, { useState, useEffect } from 'react';

const StampDutyUI = () => {
    const [propertyValue, setPropertyValue] = useState('5000000');
    const [state, setState] = useState('Maharashtra');
    const [gender, setGender] = useState('Male');
    
    // Approximate Stamp Duty and Registration Rates in India (2024-25)
    const stateData = {
        'Maharashtra': { stamp: 6, reg: 30000, maxReg: 30000 }, // Fixed reg for high value
        'Delhi': { stamp: 6, reg: 1, isRegPct: true, femaleDiscount: 2 },
        'Karnataka': { stamp: 5, reg: 1, isRegPct: true },
        'Tamil Nadu': { stamp: 7, reg: 4, isRegPct: true },
        'Uttar Pradesh': { stamp: 7, reg: 1, isRegPct: true, femaleDiscount: 1 },
        'West Bengal': { stamp: 6, reg: 1, isRegPct: true },
        'Haryana': { stamp: 7, reg: 0.5, isRegPct: true, femaleDiscount: 2 },
        'Telangana': { stamp: 4, reg: 0.5, isRegPct: true }
    };

    const [results, setResults] = useState(null);

    const calculateFees = () => {
        const value = parseFloat(propertyValue);
        const data = stateData[state];
        
        if (isNaN(value) || !data) return;

        let stampRate = data.stamp;
        if (data.femaleDiscount && gender === 'Female') {
            stampRate -= data.femaleDiscount;
        }

        const stampAmount = value * (stampRate / 100);
        
        let regAmount = 0;
        if (data.isRegPct) {
            regAmount = value * (data.reg / 100);
        } else {
            regAmount = data.reg;
        }
        
        // Capping registration in some states (like MH)
        if (data.maxReg && regAmount > data.maxReg) regAmount = data.maxReg;

        const total = stampAmount + regAmount;

        setResults({
            stampAmount: Math.floor(stampAmount),
            regAmount: Math.floor(regAmount),
            total: Math.floor(total),
            effectiveRate: ((total / value) * 100).toFixed(2)
        });
    };

    useEffect(() => {
        calculateFees();
    }, [propertyValue, state, gender]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Inputs */}
                    <div className="space-y-6">
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Property Agreement Value (₹)</label>
                            <input
                                type="number"
                                value={propertyValue}
                                onChange={(e) => setPropertyValue(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-cyan-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Select State</label>
                                <select 
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-cyan-600 outline-none font-black text-sm text-slate-800 transition-all appearance-none"
                                >
                                    {Object.keys(stateData).map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Owner Type</label>
                                <div className="flex bg-slate-50 p-1 rounded-xl border-2 border-slate-100">
                                    <button 
                                        onClick={() => setGender('Male')}
                                        className={`flex-1 py-2 rounded-lg text-[10px] font-black transition-all ${gender === 'Male' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
                                    >
                                        MALE
                                    </button>
                                    <button 
                                        onClick={() => setGender('Female')}
                                        className={`flex-1 py-2 rounded-lg text-[10px] font-black transition-all ${gender === 'Female' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
                                    >
                                        FEMALE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Result Card */}
                    {results && (
                        <div className="relative">
                            <div className="bg-cyan-600 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-cyan-100 relative overflow-hidden h-full flex flex-col justify-center animate-in slide-in-from-right duration-500">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Total Registration Cost</p>
                                <div className="text-5xl font-black tracking-tighter mb-1 font-sans">
                                    ₹{results.total.toLocaleString('en-IN')}
                                </div>
                                <p className="text-xs font-bold opacity-80 mb-8 italic">
                                    {results.effectiveRate}% of agreement value
                                </p>

                                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                                    <div>
                                        <p className="text-[8px] font-black opacity-60 uppercase mb-1 text-slate-100 tracking-widest">Stamp Duty</p>
                                        <p className="text-xl font-black">₹{results.stampAmount.toLocaleString('en-IN')}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[8px] font-black opacity-60 uppercase mb-1 text-slate-100 tracking-widest">Registration</p>
                                        <p className="text-xl font-black">₹{results.regAmount.toLocaleString('en-IN')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* State Note */}
                <div className="mt-10 p-5 bg-cyan-50 border border-cyan-100 rounded-2xl text-center">
                    <p className="text-[10px] font-black text-cyan-800 uppercase tracking-[0.2em]">Regional Fee Disclaimer</p>
                    <p className="text-xs font-bold text-cyan-700/80 leading-relaxed italic mt-1">
                        Rates are approximate and vary by district and municipality (Urban/Rural). Female buyers enjoy a {stateData[state].femaleDiscount || 0}% rebate in {state}.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StampDutyUI;
