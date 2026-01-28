
import React, { useState, useEffect, useRef } from 'react';

// --- ICONS (Inline SVGs for dependency-free premium look) ---
const Icons = {
    Calculator: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    Rupee: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    Calendar: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    TrendingUp: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    Award: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
    Info: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    CheckCircle: () => <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    XCircle: () => <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    ChevronDown: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
};

// --- LOGIC ENGINE (PAISA MATH) ---
const toPaisa = (amount) => Math.round(amount * 100);
const fromPaisa = (paisa) => paisa / 100;

export default function HomeLoanPrepaymentCalculatorUI() {
    // --- STATE ---
    const [loanAmount, setLoanAmount] = useState(5000000);
    const [interestRate, setInterestRate] = useState(8.5);
    const [tenureYears, setTenureYears] = useState(20);

    const [prepaymentAmount, setPrepaymentAmount] = useState(25000); // Default sensible amount
    const [prepaymentFrequency, setPrepaymentFrequency] = useState('yearly');
    const [startYear, setStartYear] = useState(1);
    const [startMonth, setStartMonth] = useState(1);

    const [taxData, setTaxData] = useState({ bracket: 30, regime: 'old' }); // 30% default
    const [investmentReturn, setInvestmentReturn] = useState(12); // 12% SIP default
    const [showAdvanced, setShowAdvanced] = useState(false);

    const [result, setResult] = useState(null);
    const resultsRef = useRef(null);

    // --- EFFECT: VALIDATION ---
    // Ensure start year/month doesn't exceed tenure
    useEffect(() => {
        if (Number(startYear) > Number(tenureYears)) {
            setStartYear(tenureYears);
        }
    }, [tenureYears, startYear]);

    // --- CALCULATION LOGIC ---
    const calculate = () => {
        const P = Number(loanAmount);
        const R = Number(interestRate);
        const N_Years = Number(tenureYears);
        const prepayAmt = Number(prepaymentAmount);
        const roi = Number(investmentReturn);
        const taxRate = Number(taxData.bracket);

        if (!P || !R || !N_Years) return;

        // Constants
        const r_monthly = R / 12 / 100;
        const totalMonths = Math.round(N_Years * 12);
        const startMonthIndex = ((Number(startYear) - 1) * 12) + Number(startMonth);

        // EMI Calculation
        const emiRaw = (P * r_monthly * Math.pow(1 + r_monthly, totalMonths)) / (Math.pow(1 + r_monthly, totalMonths) - 1);
        const emiPaisa = Math.round(emiRaw * 100);

        // Simulation Vars
        let balancePaisa = toPaisa(P);
        let baselineInterestPaisa = 0;
        let baselineTaxSavedPaisa = 0;

        // 1. Baseline Run (No Prepayment)
        let currentFinYearInterest = 0; // For Section 24b cap (2L)
        // Note: Simple fiscal year logic (assuming loan starts April to simplify 24b bucket)
        // Or cleaner: Reset every 12 months.

        for (let m = 1; m <= totalMonths; m++) {
            const interestPaisa = Math.round(balancePaisa * r_monthly);
            const principalPaisa = emiPaisa - interestPaisa;

            baselineInterestPaisa += interestPaisa;
            currentFinYearInterest += interestPaisa;

            balancePaisa -= principalPaisa;
            if (balancePaisa < 0) balancePaisa = 0;

            // Simple Tax Logic: End of every 12 months, calc tax saved
            if (m % 12 === 0 || m === totalMonths) {
                const deductible = Math.min(currentFinYearInterest, 200000 * 100); // 2 Lakh Limit
                const saved = Math.round(deductible * (taxRate / 100));
                baselineTaxSavedPaisa += saved;
                currentFinYearInterest = 0;
            }
        }

        // 2. Prepayment Run
        balancePaisa = toPaisa(P);
        let newInterestPaisa = 0;
        let newTaxSavedPaisa = 0;
        let monthsTaken = 0;
        let totalPrepaidPaisa = 0;
        let opportunityCostPaisa = 0; // FV of prepaid amounts

        currentFinYearInterest = 0;
        const invest_r_monthly = roi / 12 / 100;

        for (let m = 1; m <= totalMonths; m++) {
            if (balancePaisa <= 0) break; // Loan closed
            monthsTaken++;

            const interestPaisa = Math.round(balancePaisa * r_monthly);
            const principalPaisa = emiPaisa - interestPaisa;

            // Check Prepayment
            let prepayThisMonth = 0;
            if (m >= startMonthIndex) {
                if (prepaymentFrequency === 'onetime' && m === startMonthIndex) {
                    prepayThisMonth = toPaisa(prepayAmt);
                } else if (prepaymentFrequency === 'monthly') {
                    prepayThisMonth = toPaisa(prepayAmt);
                } else if (prepaymentFrequency === 'yearly' && (m - startMonthIndex) % 12 === 0) {
                    prepayThisMonth = toPaisa(prepayAmt);
                }
            }

            // Cap Prepayment to Balance
            if (prepayThisMonth > (balancePaisa - principalPaisa)) {
                prepayThisMonth = Math.max(0, balancePaisa - principalPaisa);
            }

            totalPrepaidPaisa += prepayThisMonth;

            // Opportunity Cost: FV of this prepayment at end of ORIGINAL tenure
            if (prepayThisMonth > 0) {
                const monthsLeftToGrow = totalMonths - m;
                const fv = prepayThisMonth * Math.pow(1 + invest_r_monthly, monthsLeftToGrow);
                opportunityCostPaisa += fv;
            }

            newInterestPaisa += interestPaisa;
            currentFinYearInterest += interestPaisa;

            balancePaisa = balancePaisa - principalPaisa - prepayThisMonth;
            if (balancePaisa < 0) balancePaisa = 0;

            if (m % 12 === 0 || balancePaisa === 0) {
                const deductible = Math.min(currentFinYearInterest, 200000 * 100);
                const saved = Math.round(deductible * (taxRate / 100));
                newTaxSavedPaisa += saved;
                currentFinYearInterest = 0;
            }
        }

        // --- RESULTS ---
        const grossInterestSaved = fromPaisa(baselineInterestPaisa - newInterestPaisa);
        const taxBenefitLost = fromPaisa(baselineTaxSavedPaisa - newTaxSavedPaisa);
        const netSavings = grossInterestSaved - taxBenefitLost;

        const investmentPotential = fromPaisa(opportunityCostPaisa) - fromPaisa(totalPrepaidPaisa); // Pure Profit

        // Verdict Logic
        const isPrepayingBetter = netSavings > investmentPotential;
        const profitDiff = Math.abs(netSavings - investmentPotential);

        setResult({
            emi: fromPaisa(emiPaisa),
            newTenureYears: (monthsTaken / 12).toFixed(1),
            monthsSaved: totalMonths - monthsTaken,
            grossInterestSaved,
            taxBenefitLost,
            netSavings,
            investmentPotential,
            isPrepayingBetter,
            profitDiff
        });

        // Scroll to results on mobile only
        if (window.innerWidth < 768) {
            setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
        }
    };

    return (
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
            {/* Header */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        Smart Prepayment Engine <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Beta</span>
                    </h2>
                    <p className="text-slate-400 mt-1">Advanced decision analysis: Tax impact, Opportunity Cost & Interest Savings.</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 min-h-[600px]">
                {/* --- LEFT PANEL: INPUTS (lg:col-span-5) --- */}
                <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 border-r border-slate-200">
                    <div className="space-y-8">

                        {/* Section 1: Loan Details */}
                        <section>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">1</span>
                                Loan Details
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Outstanding Loan Amount</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-slate-500 font-bold">₹</span>
                                        </div>
                                        <input
                                            type="number"
                                            value={loanAmount}
                                            onChange={(e) => setLoanAmount(e.target.value)}
                                            className="block w-full pl-8 pr-3 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow font-semibold text-slate-900"
                                            placeholder="50,00,000"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Interest Rate (%)</label>
                                        <input
                                            type="number"
                                            value={interestRate}
                                            onChange={(e) => setInterestRate(e.target.value)}
                                            className="block w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 font-semibold"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Tenure (Years)</label>
                                        <input
                                            type="number"
                                            value={tenureYears}
                                            onChange={(e) => setTenureYears(e.target.value)}
                                            className="block w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 font-semibold"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Prepayment Plan */}
                        <section className="bg-white p-5 rounded-2xl border border-blue-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-bl-lg">
                                Impact Zone
                            </div>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">2</span>
                                My Prepayment Plan
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">I will pay extra</label>
                                    <div className="flex gap-3 flex-wrap sm:flex-nowrap">
                                        <div className="relative group bg-slate-50 border border-slate-300 rounded-xl flex items-center focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 hover:border-slate-400 transition-colors" style={{ minWidth: '180px', width: '100%' }}>
                                            <span className="pl-4 text-slate-500 font-bold select-none">₹</span>
                                            <input
                                                type="number"
                                                value={prepaymentAmount}
                                                onChange={(e) => setPrepaymentAmount(e.target.value)}
                                                className="w-full bg-transparent border-none focus:ring-0 py-3 pl-2 pr-3 font-bold text-slate-900 placeholder:text-slate-300"
                                                placeholder="1,00,000"
                                            />
                                        </div>
                                        <select
                                            value={prepaymentFrequency}
                                            onChange={(e) => setPrepaymentFrequency(e.target.value)}
                                            className="bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-medium"
                                        >
                                            <option value="yearly">Every Year</option>
                                            <option value="monthly">Every Month</option>
                                            <option value="onetime">One Time Only</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Starting From</label>
                                    <div className="flex gap-3">
                                        <div className="relative flex-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 uppercase">Year</span>
                                            <input
                                                type="number"
                                                min="1" max={tenureYears}
                                                value={startYear}
                                                onChange={(e) => setStartYear(Math.min(Math.max(1, e.target.value), tenureYears))}
                                                className="block w-full pl-12 px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 font-semibold"
                                            />
                                        </div>
                                        <div className="relative w-28">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 uppercase">Month</span>
                                            <input
                                                type="number"
                                                min="1" max="12"
                                                value={startMonth}
                                                onChange={(e) => setStartMonth(Math.min(Math.max(1, e.target.value), 12))}
                                                className="block w-full pl-14 px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 font-semibold"
                                            />
                                        </div>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                                        <Icons.Calendar /> First payment in Year {startYear}, Month {startMonth}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Advanced Toggle */}
                        <div>
                            <button
                                onClick={() => setShowAdvanced(!showAdvanced)}
                                className="w-full flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors text-sm font-semibold"
                            >
                                <span className="flex items-center gap-2">⚙️ Tax & Investments (Optional)</span>
                                <Icons.ChevronDown className={`w-4 h-4 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} />
                            </button>

                            {showAdvanced && (
                                <div className="mt-3 p-4 bg-slate-100 rounded-xl border border-slate-200 space-y-4 animate-fadeIn">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Current Tax Slab</label>
                                        <select
                                            value={taxData.bracket}
                                            onChange={(e) => setTaxData({ ...taxData, bracket: e.target.value })}
                                            className="w-full rounded-lg border-slate-300 text-sm"
                                        >
                                            <option value="30">30% (High Income)</option>
                                            <option value="20">20% (Mid Income)</option>
                                            <option value="10">10% (Low Income)</option>
                                            <option value="0">0% (New Regime/No Tax)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Exp. Investment Return (ROI)</label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                value={investmentReturn}
                                                onChange={(e) => setInvestmentReturn(e.target.value)}
                                                className="w-full rounded-lg border-slate-300 pl-3 pr-8 text-sm"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-xs">%</span>
                                        </div>
                                        <p className="text-[10px] text-slate-500 mt-1">If you invested this money in MF/Stocks instead.</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={calculate}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-blue-600/30 transform transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            <Icons.Calculator /> Calculate Impact
                        </button>

                    </div>
                </div>

                {/* --- RIGHT PANEL: RESULTS (lg:col-span-7) --- */}
                <div className="lg:col-span-7 bg-white p-6 sm:p-10 flex flex-col justify-center" ref={resultsRef}>
                    {!result ? (
                        <div className="text-center text-slate-400 py-12">
                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-4xl opacity-50">👋</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-600 mb-2">Ready to save money?</h3>
                            <p className="max-w-xs mx-auto">Enter your loan details and prepayment plan to see your potential savings instantly.</p>
                        </div>
                    ) : (
                        <div className="space-y-8 animate-fadeIn">

                            {/* 1. The Verdict */}
                            <div className={`p-6 rounded-2xl border-2 ${result.isPrepayingBetter ? 'bg-green-50 border-green-100' : 'bg-amber-50 border-amber-100'}`}>
                                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-2">
                                    <Icons.Award /> Financial Verdict
                                </h4>
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-full ${result.isPrepayingBetter ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                                        {result.isPrepayingBetter ? <Icons.CheckCircle /> : <Icons.TrendingUp />}
                                    </div>
                                    <div>
                                        <h3 className={`text-2xl font-black ${result.isPrepayingBetter ? 'text-green-800' : 'text-amber-800'} mb-1`}>
                                            {result.isPrepayingBetter ? "Yes, Prepay this loan!" : "Consider Investing Instead"}
                                        </h3>
                                        <p className="text-slate-700 text-sm leading-relaxed">
                                            {result.isPrepayingBetter
                                                ? <span>You save more by prepaying. The interest burden you remove outweighs any potential investment gains by <strong className="text-green-700">₹{Math.round(result.profitDiff).toLocaleString()}</strong>.</span>
                                                : <span>Hold your cash. Investing this amount at {investmentReturn}% ROI could generate <strong className="text-amber-700">₹{Math.round(result.profitDiff).toLocaleString()}</strong> MORE wealth than paying off the loan.</span>
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Key Metrics Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">Total Net Savings</p>
                                    <p className={`text-2xl font-black ${result.netSavings > 0 ? 'text-blue-600' : 'text-slate-700'}`}>
                                        ₹{Math.round(result.netSavings).toLocaleString()}
                                    </p>
                                    <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                                        After Tax Loss Adjustment <Icons.Info />
                                    </div>
                                </div>
                                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">Time Saved</p>
                                    <p className="text-2xl font-black text-purple-600">
                                        {result.yearsSaved} <span className="text-sm text-slate-500 font-medium">Years</span>
                                    </p>
                                    <p className="text-[10px] text-slate-400 mt-1">
                                        Loan closes in {result.newTenureYears} Years
                                    </p>
                                </div>
                            </div>

                            {/* 3. Detailed Breakdown */}
                            <div className="border-t border-slate-100 pt-6">
                                <h4 className="font-bold text-slate-900 mb-4">Savings Analysis</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between items-center pb-2 border-b border-slate-50">
                                        <span className="text-slate-600">Gross Interest Saved</span>
                                        <span className="font-bold text-slate-900">₹{Math.round(result.grossInterestSaved).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b border-slate-50">
                                        <span className="text-red-500 flex items-center gap-1">Tax Benefit Lost <span className="text-[10px] bg-red-50 px-1 rounded">Sec 24b</span></span>
                                        <span className="font-bold text-red-500">- ₹{Math.round(result.taxBenefitLost).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-1">
                                        <span className="font-bold text-blue-900">Net Effective Savings</span>
                                        <span className="font-bold text-blue-600 text-lg">₹{Math.round(result.netSavings).toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>

                            {/* 4. Opportunity Cost (Comparison) */}
                            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100 mt-4">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs font-bold text-amber-600 uppercase">Opportunity Cost Analysis</span>
                                    <span className="text-xs font-bold text-slate-400">@ {investmentReturn}% Return</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-600 text-sm">If Invested, Profit would be:</span>
                                    <span className="font-bold text-slate-800">₹{Math.round(result.investmentPotential).toLocaleString()}</span>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
