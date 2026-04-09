import React, { useState, useEffect } from 'react';

const HLVCalculatorUI = () => {
    const [age, setAge] = useState('30');
    const [retireAge, setRetireAge] = useState('60');
    const [annualIncome, setAnnualIncome] = useState('1200000');
    const [monthlyExpense, setMonthlyExpense] = useState('40000');
    const [growthRate, setGrowthRate] = useState('8');
    const [discountRate, setDiscountRate] = useState('7');

    const [hlv, setHLV] = useState(0);

    const calculateHLV = () => {
        const currentAge = parseInt(age);
        const retirementAge = parseInt(retireAge);
        const income = parseFloat(annualIncome);
        const exp = parseFloat(monthlyExpense) * 12;
        const growth = parseFloat(growthRate) / 100;
        const discount = parseFloat(discountRate) / 100;

        if (retirementAge <= currentAge) {
            setHLV(0);
            return;
        }

        const years = retirementAge - currentAge;
        let totalPV = 0;
        let annualSurplus = income - exp;

        for (let i = 1; i <= years; i++) {
            // Surplus grows annually
            const currentYearSurplus = annualSurplus * Math.pow(1 + growth, i - 1);
            // Discount to Present Value
            const pv = currentYearSurplus / Math.pow(1 + discount, i);
            totalPV += pv;
        }

        setHLV(Math.round(totalPV));
    };

    useEffect(() => {
        calculateHLV();
    }, [age, retireAge, annualIncome, monthlyExpense, growthRate, discountRate]);

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Inputs */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-black text-slate-700 uppercase tracking-wider">Current Age</label>
                                <input
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-black text-slate-700 uppercase tracking-wider">Retirement Age</label>
                                <input
                                    type="number"
                                    value={retireAge}
                                    onChange={(e) => setRetireAge(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-black text-slate-700 uppercase tracking-wider">Annual Income (₹)</label>
                            <input
                                type="number"
                                value={annualIncome}
                                onChange={(e) => setAnnualIncome(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-lg text-blue-600"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-black text-slate-700 uppercase tracking-wider">Monthly Personal Expense (₹)</label>
                            <input
                                type="number"
                                value={monthlyExpense}
                                onChange={(e) => setMonthlyExpense(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                            />
                            <p className="text-[10px] text-slate-400 font-medium">Excluding family expenses & investments</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase">Sal. Growth %</label>
                                <input
                                    type="number"
                                    value={growthRate}
                                    onChange={(e) => setGrowthRate(e.target.value)}
                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none font-bold"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase">Discount %</label>
                                <input
                                    type="number"
                                    value={discountRate}
                                    onChange={(e) => setDiscountRate(e.target.value)}
                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none font-bold"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Results Card */}
                    <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>
                        
                        <h3 className="text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-4">Your Human Life Value</h3>
                        <div className="text-4xl sm:text-5xl font-black mb-2 tracking-tight">
                            ₹{hlv.toLocaleString('en-IN')}
                        </div>
                        <p className="text-slate-400 text-sm font-medium max-w-[200px]">
                            Recommended Term Insurance Cover
                        </p>

                        <div className="mt-8 pt-8 border-t border-white/10 w-full space-y-4">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-500 uppercase font-black">Multiplier</span>
                                <span className="font-bold text-blue-400">{(hlv / annualIncome).toFixed(1)}x Income</span>
                            </div>
                            <p className="text-[10px] text-slate-500 italic leading-relaxed">
                                *This is the present value of your future earnings available for your family.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HLVCalculatorUI;
