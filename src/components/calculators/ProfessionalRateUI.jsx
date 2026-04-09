import React, { useState, useEffect } from 'react';

const ProfessionalRateUI = () => {
    const [desiredProfit, setDesiredProfit] = useState('1800000'); // Annual desired savings/takeaway
    const [monthlyExpenses, setMonthlyExpenses] = useState('50000'); // Office, software, etc
    const [workDaysPerWeek, setWorkDaysPerWeek] = useState('5');
    const [vacationWeeks, setVacationWeeks] = useState('4');
    const [billableEfficiency, setBillableEfficiency] = useState('60'); // % of time actually billable
    
    const [results, setResults] = useState(null);

    const calculateRate = () => {
        const profit = parseFloat(desiredProfit);
        const expenses = parseFloat(monthlyExpenses) * 12;
        if (isNaN(profit) || isNaN(expenses)) return;

        const totalRevenueNeeded = profit + expenses;
        
        // Time Calculation
        const totalWeeks = 52 - parseFloat(vacationWeeks);
        const totalDays = totalWeeks * parseFloat(workDaysPerWeek);
        const totalHours = totalDays * 8; // Assuming 8 hour work day
        const billableHours = totalHours * (parseFloat(billableEfficiency) / 100);

        const hourlyRate = totalRevenueNeeded / billableHours;
        const dailyRate = hourlyRate * 8;
        const monthlyRate = totalRevenueNeeded / 12;

        // Taxes
        const gstAmount = totalRevenueNeeded * 0.18;
        const tdsAmount = totalRevenueNeeded * 0.10; // 194J

        setResults({
            totalRevenueNeeded,
            hourlyRate,
            dailyRate,
            monthlyRate,
            billableHours,
            gstAmount,
            tdsAmount,
            netTakeHome: totalRevenueNeeded - expenses - (totalRevenueNeeded * 0.05) // Approx misc tax/cess
        });
    };

    useEffect(() => {
        calculateRate();
    }, [desiredProfit, monthlyExpenses, workDaysPerWeek, vacationWeeks, billableEfficiency]);

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-8">
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">Financial Goals (Annual)</label>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Target Annual Profit (₹)</label>
                                    <input
                                        type="number"
                                        value={desiredProfit}
                                        onChange={(e) => setDesiredProfit(e.target.value)}
                                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Monthly Business Expenses (₹)</label>
                                    <input
                                        type="number"
                                        value={monthlyExpenses}
                                        onChange={(e) => setMonthlyExpenses(e.target.value)}
                                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">Time Parameters</label>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Work Days/Week</label>
                                    <input type="number" value={workDaysPerWeek} onChange={(e) => setWorkDaysPerWeek(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold" />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Billable Efficiency (%)</label>
                                    <input type="number" value={billableEfficiency} onChange={(e) => setBillableEfficiency(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {results && (
                        <div className="flex flex-col gap-6 animate-in fade-in zoom-in duration-500">
                            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-indigo-200 relative overflow-hidden text-center">
                                <div className="space-y-2 relative z-10">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Minimum Hourly Rate</p>
                                    <p className="text-6xl font-black tracking-tighter text-indigo-400">
                                        ₹{results.hourlyRate.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                    </p>
                                    <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/10 mt-8">
                                        <div>
                                            <p className="text-[10px] font-black opacity-40 uppercase mb-1">Daily Rate</p>
                                            <p className="text-xl font-black">₹{results.dailyRate.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black opacity-40 uppercase mb-1">Monthly Billing</p>
                                            <p className="text-xl font-black">₹{results.monthlyRate.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <p className="text-[9px] font-black text-slate-400 uppercase mb-1 tracking-widest">GST (18%)</p>
                                    <p className="text-md font-black text-slate-800">₹{results.gstAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                                    <p className="text-[8px] font-bold text-slate-500 mt-1 italic">To be added to bill</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <p className="text-[9px] font-black text-slate-400 uppercase mb-1 tracking-widest">TDS (10%)</p>
                                    <p className="text-md font-black text-slate-800">₹{results.tdsAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                                    <p className="text-[8px] font-bold text-slate-500 mt-1 italic">Deducted by client (194J)</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-12 bg-indigo-50/50 rounded-2xl p-6 border border-indigo-100 flex items-start gap-4">
                    <span className="text-xl">💡</span>
                    <p className="text-xs font-bold text-indigo-800 leading-relaxed italic">
                        Pro-tip: Billable efficiency accounts for the time you spend on meetings, marketing, and admin. For most Indian freelancers, 60-70% is a realistic target. If you work less than this, your hourly rate must increase to cover your target profit.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalRateUI;
