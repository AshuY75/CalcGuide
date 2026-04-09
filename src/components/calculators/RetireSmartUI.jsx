import React, { useState, useEffect } from 'react';

const RetireSmartUI = () => {
    const [currentAge, setCurrentAge] = useState('30');
    const [retireAge, setRetireAge] = useState('60');
    const [monthlyExpense, setMonthlyExpense] = useState('50000');
    const [inflation, setInflation] = useState('6');
    const [expectedReturns, setExpectedReturns] = useState('12');
    const [postRetireReturns, setPostRetireReturns] = useState('8');
    const [lifeExpectancy, setLifeExpectancy] = useState('85');
    
    const [results, setResults] = useState(null);

    const calculateRetirement = () => {
        const age = parseFloat(currentAge);
        const rAge = parseFloat(retireAge);
        const exp = parseFloat(monthlyExpense);
        const inf = parseFloat(inflation) / 100;
        const preR = parseFloat(expectedReturns) / 100;
        const postR = parseFloat(postRetireReturns) / 100;
        const lExp = parseFloat(lifeExpectancy);

        if (isNaN(age) || isNaN(rAge) || isNaN(exp)) return;

        const yearsToRetire = rAge - age;
        const yearsInRetirement = lExp - rAge;

        // 1. Inflated Expense at Retirement
        const monthlyExpAtRetire = exp * Math.pow(1 + inf, yearsToRetire);
        const annualExpAtRetire = monthlyExpAtRetire * 12;

        // 2. Real Rate of Return (Post Retirement)
        // Adjust for inflation (Fisher equation simplified)
        const realRate = (1 + postR) / (1 + inf) - 1;

        // 3. Required Corpus (Present Value of Annuity)
        // PVAL = Annual Expense * [(1 - (1+realRate)^-n) / realRate]
        let corpus = annualExpAtRetire * ((1 - Math.pow(1 + realRate, -yearsInRetirement)) / realRate);
        
        // 4. Required SIP (Future Value of Annuity)
        // SIP = Corpus * [ r / ((1+r)^n - 1) ]
        const monthlyPreR = preR / 12;
        const nMonths = yearsToRetire * 12;
        const sipRequired = corpus * (monthlyPreR / (Math.pow(1 + monthlyPreR, nMonths) - 1));

        setResults({
            corpusRequired: Math.floor(corpus),
            monthlyExpAtRetire: Math.floor(monthlyExpAtRetire),
            sipRequired: Math.floor(sipRequired),
            yearsToRetire,
            yearsInRetirement
        });
    };

    useEffect(() => {
        calculateRetirement();
    }, [currentAge, retireAge, monthlyExpense, inflation, expectedReturns, postRetireReturns, lifeExpectancy]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Inputs */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 italic">
                            <label className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block mb-4">Life Parameters</label>
                            
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1">Current Age</label>
                                    <input
                                        type="number"
                                        value={currentAge}
                                        onChange={(e) => setCurrentAge(e.target.value)}
                                        className="w-full px-4 py-3 bg-white border-2 border-slate-100 rounded-xl focus:border-indigo-600 outline-none font-black text-lg text-slate-800 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1">Retirement Age</label>
                                    <input
                                        type="number"
                                        value={retireAge}
                                        onChange={(e) => setRetireAge(e.target.value)}
                                        className="w-full px-4 py-3 bg-white border-2 border-slate-100 rounded-xl focus:border-indigo-600 outline-none font-black text-lg text-slate-800 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1">Current Monthly Expenses (₹)</label>
                                <input
                                    type="number"
                                    value={monthlyExpense}
                                    onChange={(e) => setMonthlyExpense(e.target.value)}
                                    className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-xl focus:border-indigo-600 outline-none font-black text-xl text-slate-800 transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1">Returns (Pre-Retire)</label>
                                    <div className="flex bg-white px-3 py-2 rounded-xl border-2 border-slate-100 items-center justify-between">
                                        <input type="number" value={expectedReturns} onChange={(e) => setExpectedReturns(e.target.value)} className="w-12 outline-none font-black text-sm"/>
                                        <span className="text-[10px] font-black text-indigo-600">%</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1">Expected Inflation</label>
                                    <div className="flex bg-white px-3 py-2 rounded-xl border-2 border-slate-100 items-center justify-between">
                                        <input type="number" value={inflation} onChange={(e) => setInflation(e.target.value)} className="w-12 outline-none font-black text-sm text-rose-500"/>
                                        <span className="text-[10px] font-black text-rose-500">%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Corpus Requirement Card */}
                    {results && (
                        <div className="lg:col-span-3 space-y-6">
                            <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden flex flex-col justify-center border-l-8 border-indigo-500 min-h-[300px]">
                                <div className="relative z-10">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-2 italic">Target Retirement Corpus</p>
                                    <div className="text-6xl font-black tracking-tighter text-white mb-2 font-sans">
                                        ₹{(results.corpusRequired / 10000000).toFixed(2)} Cr
                                    </div>
                                    <p className="text-sm font-bold opacity-40 mb-10">Equvivalent to ₹{results.corpusRequired.toLocaleString('en-IN')} in {results.yearsToRetire} years</p>

                                    <div className="grid grid-cols-2 gap-10 pt-8 border-t border-white/5">
                                        <div>
                                            <p className="text-[9px] font-black opacity-40 uppercase mb-2 tracking-widest">Monthly SIP Needed</p>
                                            <p className="text-3xl font-black text-indigo-400">₹{results.sipRequired.toLocaleString('en-IN')}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[9px] font-black opacity-40 uppercase mb-2 tracking-widest">Post-Retire Expense</p>
                                            <p className="text-3xl font-black">₹{results.monthlyExpAtRetire.toLocaleString('en-IN')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-20 -right-20 opacity-5 scale-[2] pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RetireSmartUI;
