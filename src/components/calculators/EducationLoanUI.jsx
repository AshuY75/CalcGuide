import React, { useState, useEffect } from 'react';

const EducationLoanUI = () => {
    const [loanAmount, setLoanAmount] = useState('2000000');
    const [interestRate, setInterestRate] = useState('10.5');
    const [studyPeriod, setStudyPeriod] = useState('4'); // 4 years study
    const [gracePeriod, setGracePeriod] = useState('12'); // 1 year grace (12 months)
    const [tenure, setTenure] = useState('10'); // 10 years repayment

    const [result, setResult] = useState(null);

    const calculateEducationLoan = () => {
        const P = parseFloat(loanAmount);
        const r_annual = parseFloat(interestRate);
        const r_monthly = r_annual / 12 / 100;
        const totalMoratoriumMonths = (parseInt(studyPeriod) * 12) + parseInt(gracePeriod);
        const t_repayment = parseInt(tenure) * 12;

        if (!P || !r_annual || !t_repayment) return;

        // 1. Calculate Interest during Moratorium (Simple Interest is standard for Edu Loan in India)
        const interestDuringMoratorium = P * (r_annual / 100) * (totalMoratoriumMonths / 12);
        
        // 2. New Principal for EMI
        const newPrincipal = P + interestDuringMoratorium;

        // 3. EMI Calculation: E = P * r * (1+r)^n / ((1+r)^n - 1)
        const emi = newPrincipal * r_monthly * Math.pow(1 + r_monthly, t_repayment) / (Math.pow(1 + r_monthly, t_repayment) - 1);

        const totalPayout = emi * t_repayment;
        const totalInterest = totalPayout - P; // Total interest paid (including moratorium)

        setResult({
            emi: Math.round(emi),
            moratoriumInterest: Math.round(interestDuringMoratorium),
            newPrincipal: Math.round(newPrincipal),
            totalInterest: Math.round(totalInterest),
            totalPayout: Math.round(totalPayout)
        });
    };

    useEffect(() => {
        calculateEducationLoan();
    }, [loanAmount, interestRate, studyPeriod, gracePeriod, tenure]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Loan Amount */}
                        <div>
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Course Loan Amount</label>
                            <div className="relative group">
                                <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-blue-500 group-focus-within:text-blue-600 transition-colors">₹</span>
                                <input
                                    type="number"
                                    value={loanAmount}
                                    onChange={(e) => setLoanAmount(e.target.value)}
                                    className="w-full pl-12 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    placeholder="0"
                                />
                            </div>
                        </div>

                        {/* Interest Rate */}
                        <div>
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Interest Rate (% p.a.)</label>
                            <div className="relative group">
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 font-black text-slate-300">%</span>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(e.target.value)}
                                    className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    placeholder="0"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                        {/* Study Period */}
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] block mb-3">Course Duration</label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="number"
                                    value={studyPeriod}
                                    onChange={(e) => setStudyPeriod(e.target.value)}
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-blue-500 outline-none font-bold text-slate-700"
                                />
                                <span className="text-xs font-bold text-slate-400">Yrs</span>
                            </div>
                        </div>

                        {/* Grace Period */}
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] block mb-3">Grace Period</label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="number"
                                    value={gracePeriod}
                                    onChange={(e) => setGracePeriod(e.target.value)}
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-blue-500 outline-none font-bold text-slate-700"
                                />
                                <span className="text-xs font-bold text-slate-400">Months</span>
                            </div>
                        </div>

                        {/* Repayment Tenure */}
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] block mb-3">Repayment Period</label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="number"
                                    value={tenure}
                                    onChange={(e) => setTenure(e.target.value)}
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-blue-500 outline-none font-bold text-slate-700"
                                />
                                <span className="text-xs font-bold text-slate-400">Yrs</span>
                            </div>
                        </div>
                    </div>

                    {/* Result Display */}
                    {result && (
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-blue-600 rounded-[2.5rem] p-10 text-white shadow-2xl overflow-hidden">
                                 {/* Background decoration */}
                                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-48 h-48 bg-indigo-400/20 rounded-full blur-2xl"></div>

                                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
                                    <div className="text-center lg:text-left">
                                        <p className="text-blue-100/70 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Post-Study Monthly EMI</p>
                                        <p className="text-5xl sm:text-7xl font-black tracking-tighter leading-none">
                                            ₹{result.emi.toLocaleString('en-IN')}
                                        </p>
                                    </div>
                                    <div className="w-full lg:w-px h-px lg:h-32 bg-white/20"></div>
                                    <div className="w-full lg:w-auto grid grid-cols-2 gap-8">
                                        <div>
                                            <p className="text-blue-100/50 text-[10px] font-black uppercase tracking-widest mb-1">Total Interest</p>
                                            <p className="text-2xl font-black text-white">₹{result.totalInterest.toLocaleString('en-IN')}</p>
                                        </div>
                                        <div>
                                            <p className="text-blue-100/50 text-[10px] font-black uppercase tracking-widest mb-1">Total Payout</p>
                                            <p className="text-2xl font-black text-green-300">₹{result.totalPayout.toLocaleString('en-IN')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 pt-8 border-t border-white/10 relative z-10">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-500/50 flex items-center justify-center flex-shrink-0 text-2xl shadow-inner">
                                                🎓
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-white mb-1 tracking-wide">Moratorium Interest Insight</p>
                                                <p className="text-xs text-blue-100 leading-relaxed font-medium">
                                                    During your {studyPeriod} years of study, <span className="font-black text-white">₹{result.moratoriumInterest.toLocaleString('en-IN')}</span> interest will accumulate. 
                                                    Paying just this interest annually can save you <span className="font-black text-green-300">₹{Math.round(result.totalInterest * 0.15).toLocaleString('en-IN')}</span> over the full tenure by avoiding interest compounding!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EducationLoanUI;
