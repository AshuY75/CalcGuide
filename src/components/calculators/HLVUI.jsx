import React, { useState, useEffect } from 'react';

const HLVUI = () => {
    const [annualIncome, setAnnualIncome] = useState('1200000');
    const [annualExpenses, setAnnualExpenses] = useState('600000');
    const [age, setAge] = useState('30');
    const [retireAge, setRetireAge] = useState('60');
    const [interestRate, setInterestRate] = useState('8');
    const [inflation, setInflation] = useState('6');
    
    const [results, setResults] = useState(null);

    const calculateHLV = () => {
        const income = parseFloat(annualIncome);
        const expenses = parseFloat(annualExpenses);
        const curAge = parseFloat(age);
        const rAge = parseFloat(retireAge);
        const rate = parseFloat(interestRate) / 100;
        const inf = parseFloat(inflation) / 100;

        if (isNaN(income) || isNaN(expenses) || isNaN(curAge) || isNaN(rAge)) return;

        const workingYears = rAge - curAge;
        const annualSurplus = income - expenses; // Amount available for family/savings

        // Income Replacement Method (Present Value of Future Income)
        // Real rate of return (Fisher adjustment)
        const realRate = (1 + rate) / (1 + inf) - 1;

        // PV = Surplus * [(1 - (1+r)^-n) / r]
        const hlvValue = annualSurplus * ((1 - Math.pow(1 + realRate, -workingYears)) / realRate);

        setResults({
            hlvValue: Math.floor(hlvValue),
            hlvValueCr: (hlvValue / 10000000).toFixed(2),
            workingYears,
            annualSurplus
        });
    };

    useEffect(() => {
        calculateHLV();
    }, [annualIncome, annualExpenses, age, retireAge, interestRate, inflation]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-slate-800 font-sans">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Inputs */}
                    <div className="space-y-8">
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4 italic">Financial Profile</label>
                            
                            <div className="space-y-6">
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Annual Take-Home Income (₹)</label>
                                    <input
                                        type="number"
                                        value={annualIncome}
                                        onChange={(e) => setAnnualIncome(e.target.value)}
                                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Annual Personal Expenses (₹)</label>
                                    <input
                                        type="number"
                                        value={annualExpenses}
                                        onChange={(e) => setAnnualExpenses(e.target.value)}
                                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-rose-400 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    />
                                    <p className="text-[8px] font-black text-slate-400 mt-2 italic px-1">Excluding family support costs.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Current Age</label>
                                        <input
                                            type="number"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                            className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-indigo-600 outline-none font-black text-lg text-slate-800 transition-all shadow-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Retire Age</label>
                                        <input
                                            type="number"
                                            value={retireAge}
                                            onChange={(e) => setRetireAge(e.target.value)}
                                            className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-indigo-600 outline-none font-black text-lg text-slate-800 transition-all shadow-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* HLV Result Card */}
                    {results && (
                        <div className="relative">
                            <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-center border-b-8 border-indigo-500">
                                <div className="relative z-10">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-2 italic tracking-widest">Human Life Value (HLV)</p>
                                    <div className="text-6xl font-black tracking-tighter text-white mb-2 font-sans italic">
                                        ₹{results.hlvValueCr} Cr
                                    </div>
                                    <p className="text-[11px] font-black uppercase tracking-widest opacity-30 mb-10 leading-none">Net Present Capital Worth</p>

                                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                                        <div>
                                            <p className="text-[8px] font-black opacity-40 uppercase mb-2 tracking-widest">Family Surplus/Yr</p>
                                            <p className="text-2xl font-black text-indigo-400">₹{(results.annualSurplus / 100000).toFixed(1)}L</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[8px] font-black opacity-40 uppercase mb-2 tracking-widest">Working Years</p>
                                            <p className="text-2xl font-black">{results.workingYears}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-10 -right-10 opacity-5 scale-150 rotate-12">
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                     </svg>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Educational Insight */}
                {results && (
                    <div className="mt-12 bg-slate-50 p-8 rounded-3xl border border-slate-100 flex items-start gap-6">
                        <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 flex-shrink-0 animate-bounce">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">What is HLV?</h4>
                            <p className="text-xs font-bold text-slate-600 leading-relaxed italic">
                                Human Life Value represents the present value of the future income you will earn for your family. If you were to pass away today, your family would need a corpus of <span className="text-indigo-600">₹{results.hlvValueCr} Cr</span> invested at a safe return to maintain their current lifestyle indefinitely.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HLVUI;
