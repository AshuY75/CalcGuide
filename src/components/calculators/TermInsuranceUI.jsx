import React, { useState, useEffect } from 'react';

const TermInsuranceUI = () => {
    const [monthlyIncome, setMonthlyIncome] = useState('100000');
    const [age, setAge] = useState('30');
    const [retireAge, setRetireAge] = useState('60');
    const [liabilities, setLiabilities] = useState('2000000');
    
    const [results, setResults] = useState(null);

    const calculateTermCover = () => {
        const income = parseFloat(monthlyIncome);
        const curAge = parseFloat(age);
        const rAge = parseFloat(retireAge);
        const debt = parseFloat(liabilities);

        if (isNaN(income) || isNaN(curAge) || isNaN(rAge)) return;

        // Rule of Thumb Cover: 15-20x annual income
        const baseAnnualIncome = income * 12;
        const incomeReplacementCover = baseAnnualIncome * 15;
        
        // Income needed until retirement
        const workingYearsLeft = rAge - curAge;
        const inflationAdjustedReplacement = baseAnnualIncome * workingYearsLeft * 0.7; // Assuming 70% for family

        // Final Recommended Cover
        const recommendedCover = Math.max(incomeReplacementCover, inflationAdjustedReplacement) + debt;

        // Approx Premium (Rough industry average for 30yo healthy male)
        // Approx ₹1000 per ₹1 Crore for healthy 30yo
        const approxPremium = (recommendedCover / 10000000) * 12000;

        setResults({
            recommendedCover: Math.ceil(recommendedCover / 100000) * 100000,
            recommendedCoverCr: (recommendedCover / 10000000).toFixed(2),
            monthlyPremium: Math.floor(approxPremium / 12),
            annualPremium: Math.floor(approxPremium),
            debtCoverage: debt
        });
    };

    useEffect(() => {
        calculateTermCover();
    }, [monthlyIncome, age, retireAge, liabilities]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Inputs */}
                    <div className="space-y-6">
                        <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                            <label className="text-[10px] font-black text-blue-400 uppercase tracking-widest block mb-4 italic">Income & Liabilities</label>
                            
                            <div className="space-y-6">
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Monthly In-Hand Income (₹)</label>
                                    <input
                                        type="number"
                                        value={monthlyIncome}
                                        onChange={(e) => setMonthlyIncome(e.target.value)}
                                        className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-blue-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Total Outstanding Debt (Home/Car Loan) (₹)</label>
                                    <input
                                        type="number"
                                        value={liabilities}
                                        onChange={(e) => setLiabilities(e.target.value)}
                                        className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-blue-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Current Age</label>
                                        <input
                                            type="number"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                            className="w-full px-4 py-3 bg-white border-2 border-slate-100 rounded-xl focus:border-blue-600 outline-none font-black text-lg text-slate-800 transition-all shadow-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Retire Age</label>
                                        <input
                                            type="number"
                                            value={retireAge}
                                            onChange={(e) => setRetireAge(e.target.value)}
                                            className="w-full px-4 py-3 bg-white border-2 border-slate-100 rounded-xl focus:border-blue-600 outline-none font-black text-lg text-slate-800 transition-all shadow-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Result Card */}
                    {results && (
                        <div className="relative">
                            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-center border-t-8 border-blue-500">
                                <div className="relative z-10">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">Recommended Term Cover</p>
                                    <div className="text-6xl font-black tracking-tighter text-white mb-2 font-sans">
                                        ₹{results.recommendedCoverCr} Cr
                                    </div>
                                    <p className="text-[11px] font-black uppercase tracking-widest opacity-30 mb-10 leading-none">Life Protection Gap</p>

                                    <div className="bg-white/5 p-6 rounded-3xl border border-white/5 space-y-4">
                                        <div className="flex justify-between items-center">
                                            <p className="text-[10px] font-black opacity-60 uppercase tracking-widest">Est. Annual Premium</p>
                                            <p className="text-xl font-black text-blue-300">₹{results.annualPremium.toLocaleString('en-IN')}</p>
                                        </div>
                                        <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                            <p className="text-[10px] font-black opacity-60 uppercase tracking-widest">Est. Monthly Cost</p>
                                            <p className="text-xl font-black text-white">₹{results.monthlyPremium.toLocaleString('en-IN')}</p>
                                        </div>
                                    </div>

                                    <div className="mt-8 text-center text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] italic">
                                        Premiums based on 30Y Healthy Non-Smoker
                                    </div>
                                </div>
                                
                                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Cover Breakdown */}
                {results && (
                    <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 italic">Why this amount?</h4>
                            <ul className="space-y-2">
                                <li className="text-xs font-bold text-slate-600 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> 
                                    Income Replacement until {retireAge}
                                </li>
                                <li className="text-xs font-bold text-slate-600 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> 
                                    ₹{results.debtCoverage.toLocaleString('en-IN')} Debt Protection
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-end">
                            <div className="px-6 py-3 bg-emerald-500 text-white rounded-2xl font-black text-xs shadow-lg shadow-emerald-100 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                HIGH PROTECTIVE SCORE
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TermInsuranceUI;
