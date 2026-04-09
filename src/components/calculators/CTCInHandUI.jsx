import React, { useState, useEffect } from 'react';
import { calculateNewRegimeTax, calculateOldRegimeTax } from '../../utils/taxMath';

const CTCInHandUI = () => {
    const [ctc, setCtc] = useState('1200000');
    const [basicPercent, setBasicPercent] = useState('50');
    const [bonusAnnual, setBonusAnnual] = useState('50000');
    const [professionalTax, setProfessionalTax] = useState('200'); // Monthly
    const [taxRegime, setTaxRegime] = useState('new');
    const [totalDeductions80C, setTotalDeductions80C] = useState('150000');
    const [hraExemption, setHraExemption] = useState('0');

    const [result, setResult] = useState(null);

    const calculateSalary = () => {
        const annualCTC = parseFloat(ctc) || 0;
        
        // Employer PF is usually 12% of Basic or capped at 1800/mo
        const annualBasic = annualCTC * (parseFloat(basicPercent) / 100);
        const monthlyBasic = annualBasic / 12;
        const monthlyEmployerPF = Math.min(monthlyBasic * 0.12, 1800);
        const annualEmployerPF = monthlyEmployerPF * 12;
        
        // Gross Salary = CTC - Employer PF
        const grossSalary = annualCTC - annualEmployerPF;
        
        const resultTax = taxRegime === 'new' 
            ? calculateNewRegimeTax(grossSalary)
            : calculateOldRegimeTax(grossSalary, parseFloat(totalDeductions80C) + parseFloat(hraExemption));

        const annualTax = resultTax.totalTax;
        const monthlyEmployeePF = monthlyEmployerPF;
        const annualPT = parseFloat(professionalTax) * 12;

        const netAnnualHand = grossSalary - annualTax - (monthlyEmployeePF * 12) - annualPT;
        const monthlyInHand = netAnnualHand / 12;

        setResult({
            monthlyInHand: Math.round(monthlyInHand),
            annualTax: Math.round(annualTax),
            monthlyEPF: Math.round(monthlyEmployeePF),
            monthlyPT: Math.round(professionalTax),
            grossMonthly: Math.round(grossSalary / 12),
            takeHomePercent: Math.round((monthlyInHand / (annualCTC / 12)) * 100)
        });
    };

    useEffect(() => {
        calculateSalary();
    }, [ctc, basicPercent, taxRegime, professionalTax, totalDeductions80C, hraExemption]);

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-6 sm:p-10">
                <div className="space-y-8">
                    {/* Input Group */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <label className="text-sm font-black text-slate-700 block mb-3 uppercase tracking-wider">Annual CTC Package</label>
                                <div className="relative group">
                                    <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-slate-400 text-xl">₹</span>
                                    <input
                                        type="number"
                                        value={ctc}
                                        onChange={(e) => setCtc(e.target.value)}
                                        className="w-full pl-12 pr-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-2xl font-black text-slate-900 shadow-inner"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Basic Salary %</label>
                                    <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <input
                                            type="range"
                                            min="30"
                                            max="70"
                                            value={basicPercent}
                                            onChange={(e) => setBasicPercent(e.target.value)}
                                            className="accent-blue-600 flex-grow"
                                        />
                                        <span className="font-bold text-slate-900 min-w-[3rem] text-right">{basicPercent}%</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Tax Regime</label>
                                    <div className="flex bg-slate-100 p-1 rounded-xl">
                                        <button
                                            onClick={() => setTaxRegime('new')}
                                            className={`flex-1 py-2 rounded-lg text-xs font-black transition-all ${taxRegime === 'new' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                        >
                                            NEW
                                        </button>
                                        <button
                                            onClick={() => setTaxRegime('old')}
                                            className={`flex-1 py-2 rounded-lg text-xs font-black transition-all ${taxRegime === 'old' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                        >
                                            OLD
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Extra Deductions (If Old regime) */}
                        <div className={`space-y-4 transition-all ${taxRegime === 'old' ? 'opacity-100 scale-100' : 'opacity-40 scale-95 pointer-events-none'}`}>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Section 80C & HRA (Old Regime only)</p>
                            <div className="grid grid-cols-1 gap-3">
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-bold">₹</span>
                                    <input
                                        type="number"
                                        placeholder="Section 80C (LIC, PPF...)"
                                        value={totalDeductions80C}
                                        onChange={(e) => setTotalDeductions80C(e.target.value)}
                                        className="w-full pl-8 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 outline-none text-sm font-bold"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold uppercase">80C</span>
                                </div>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-bold">₹</span>
                                    <input
                                        type="number"
                                        placeholder="HRA Exemption"
                                        value={hraExemption}
                                        onChange={(e) => setHraExemption(e.target.value)}
                                        className="w-full pl-8 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 outline-none text-sm font-bold"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold uppercase">HRA</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Highly Visual Result Card */}
                    {result && (
                        <div className="mt-8 space-y-6">
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-10 opacity-10 blur-2xl bg-white w-64 h-64 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
                                
                                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
                                    <div className="space-y-2 text-center md:text-left">
                                        <p className="text-blue-100 text-sm font-black uppercase tracking-[0.3em]">Monthly In-Hand</p>
                                        <div className="flex items-baseline gap-3 justify-center md:justify-start">
                                            <span className="text-6xl md:text-8xl font-black drop-shadow-lg tracking-tighter">₹{result.monthlyInHand.toLocaleString('en-IN')}</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full text-xs font-bold border border-white/20 backdrop-blur-sm">
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                            Take-home is {result.takeHomePercent}% of CTC
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                                        <div className="bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/10">
                                            <p className="text-[10px] font-black text-blue-200 uppercase tracking-widest mb-1">Annual Tax</p>
                                            <p className="text-xl font-black">₹{result.annualTax.toLocaleString('en-IN')}</p>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/10">
                                            <p className="text-[10px] font-black text-blue-200 uppercase tracking-widest mb-1">Monthly EPF</p>
                                            <p className="text-xl font-black">₹{result.monthlyEPF.toLocaleString('en-IN')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Secondary Insight Bar */}
                            <div className={`p-6 rounded-[2rem] border transition-all ${result.takeHomePercent < 75 ? 'bg-orange-50 border-orange-100/50' : 'bg-green-50 border-green-100/50'}`}>
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">💡</span>
                                    <div>
                                        <p className="text-slate-900 font-bold mb-1">Take-home Salary Analysis</p>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {result.takeHomePercent < 80 
                                                ? `Your take-home is ${result.takeHomePercent}% of your CTC. Significant portions are going towards ${result.annualTax > 0 ? 'Taxes and ' : ''}Retirement Savings (EPF).` 
                                                : `Excellent! You are taking home ${result.takeHomePercent}% of your salary. This is a very efficient structure for immediate cash flow.`
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Detailed Breakdown */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 text-center md:text-left">Gross (Monthly)</p>
                                    <p className="text-lg font-black text-slate-900 text-center md:text-left">₹{result.grossMonthly.toLocaleString('en-IN')}</p>
                                </div>
                                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 text-center md:text-left">Monthly Tax (Avg)</p>
                                    <p className="text-lg font-black text-red-600 text-center md:text-left">- ₹{Math.round(result.annualTax/12).toLocaleString('en-IN')}</p>
                                </div>
                                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 text-center md:text-left">EPF Deduction</p>
                                    <p className="text-lg font-black text-red-600 text-center md:text-left">- ₹{result.monthlyEPF.toLocaleString('en-IN')}</p>
                                </div>
                                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 text-center md:text-left">Prof. Tax (PT)</p>
                                    <p className="text-lg font-black text-red-600 text-center md:text-left">- ₹{result.monthlyPT.toLocaleString('en-IN')}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="bg-slate-50/50 p-6 border-t border-slate-100">
                <p className="text-[10px] text-slate-400 text-center italic font-bold">
                    * Calculation based on FY 2025-26 Budget Proposals. Individual results may vary based on specific company benefits and gratuity rules.
                </p>
            </div>
        </div>
    );
};

export default CTCInHandUI;
