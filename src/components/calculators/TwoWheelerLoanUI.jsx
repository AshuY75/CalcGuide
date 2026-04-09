import React, { useState, useEffect } from 'react';

const TwoWheelerLoanUI = () => {
    const [price, setPrice] = useState('150000');
    const [downPayment, setDownPayment] = useState('30000');
    const [interestRate, setInterestRate] = useState('12');
    const [tenure, setTenure] = useState('3');
    
    const [results, setResults] = useState(null);

    const calculateEMI = () => {
        const principal = parseFloat(price) - parseFloat(downPayment);
        const rate = parseFloat(interestRate) / 12 / 100;
        const n = parseFloat(tenure) * 12;

        if (isNaN(principal) || isNaN(rate) || isNaN(n) || n === 0 || principal <= 0) {
            setResults(null);
            return;
        }

        const emi = principal * rate * Math.pow(1 + rate, n) / (Math.pow(1 + rate, n) - 1);
        const totalPayment = emi * n;
        const totalInterest = totalPayment - principal;

        setResults({
            loanAmount: Math.floor(principal),
            emi: Math.floor(emi),
            totalInterest: Math.floor(totalInterest),
            totalPayment: Math.floor(totalPayment)
        });
    };

    useEffect(() => {
        calculateEMI();
    }, [price, downPayment, interestRate, tenure]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Inputs */}
                    <div className="space-y-6">
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">On-Road Bike Price (₹)</label>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-orange-600 outline-none font-black text-xl text-slate-800 transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Down Payment (₹)</label>
                            <input
                                type="number"
                                value={downPayment}
                                onChange={(e) => setDownPayment(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-orange-600 outline-none font-black text-xl text-slate-800 transition-all"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Interest (%)</label>
                                <input
                                    type="number"
                                    step="0.5"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(e.target.value)}
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-orange-600 outline-none font-black text-xl text-slate-800 transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Years</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="5"
                                    value={tenure}
                                    onChange={(e) => setTenure(e.target.value)}
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-orange-600 outline-none font-black text-xl text-slate-800 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Result Card */}
                    {results ? (
                        <div className="bg-orange-600 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-orange-100 relative overflow-hidden flex flex-col justify-center animate-in fade-in duration-500">
                            <div className="absolute -top-10 -right-10 opacity-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </div>
                            <div className="relative z-10">
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Monthly Bike EMI</p>
                                <div className="text-6xl font-black tracking-tighter mb-4">
                                    ₹{results.emi.toLocaleString('en-IN')}
                                </div>
                                <div className="space-y-3 pt-6 border-t border-white/10">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="font-black opacity-60 uppercase tracking-widest">Loan Amount</span>
                                        <span className="font-black">₹{results.loanAmount.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="font-black opacity-60 uppercase tracking-widest">Total Interest</span>
                                        <span className="font-black text-orange-200">₹{results.totalInterest.toLocaleString('en-IN')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200 flex items-center justify-center p-12 text-slate-400 italic font-black text-center text-sm">
                            Enter valid price and down payment to see your EMI.
                        </div>
                    )}
                </div>

                <div className="mt-10 p-6 bg-orange-50 rounded-2xl border border-orange-100">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-orange-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <h4 className="text-[10px] font-black text-orange-800 uppercase tracking-widest">Interest Rate Note</h4>
                    </div>
                    <p className="text-xs font-bold text-orange-800/80 leading-relaxed italic">
                        Two-wheeler loan rates in India typically vary from 11% to 18%. Some dealers offer 0% or low-rate schemes, but check for hidden 'Processing' or 'File' charges.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TwoWheelerLoanUI;
