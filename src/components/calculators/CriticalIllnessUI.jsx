import React, { useState, useEffect } from 'react';

const CriticalIllnessUI = () => {
    const [monthlyIncome, setMonthlyIncome] = useState('100000');
    const [baseHealthCover, setBaseHealthCover] = useState('500000');
    const [cityType, setCityType] = useState('Metro'); // Metro vs Non-Metro costs
    
    const [results, setResults] = useState(null);

    const calculateCriticalCover = () => {
        const income = parseFloat(monthlyIncome);
        const health = parseFloat(baseHealthCover);

        if (isNaN(income) || isNaN(health)) return;

        const annualIncome = income * 12;

        // Recommendation Logic:
        // 1. Minimum should cover at least 3 years of income (for recovery period)
        // 2. Plus a cushion based on city tier
        const incomeBackup = annualIncome * 2.5;
        const inflationBuffer = cityType === 'Metro' ? 1000000 : 500000;

        const recommendedSumInsured = incomeBackup + inflationBuffer;

        setResults({
            recommendedSumInsured: Math.ceil(recommendedSumInsured / 500000) * 500000,
            recommendedSumInsuredLakhs: (recommendedSumInsured / 100000).toFixed(0),
            incomeGapCover: incomeBackup,
            buffer: inflationBuffer
        });
    };

    useEffect(() => {
        calculateCriticalCover();
    }, [monthlyIncome, baseHealthCover, cityType]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-slate-800 font-sans">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Inputs */}
                    <div className="space-y-6">
                        <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-100 italic">
                            <label className="text-[10px] font-black text-rose-400 uppercase tracking-widest block mb-4">Risk Profile</label>
                            
                            <div className="space-y-6">
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Monthly In-Hand Income (₹)</label>
                                    <input
                                        type="number"
                                        value={monthlyIncome}
                                        onChange={(e) => setMonthlyIncome(e.target.value)}
                                        className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-rose-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    />
                                    <p className="text-[8px] font-black text-slate-400 mt-2 italic px-1">Used to calculate loss-of-income during treatment.</p>
                                </div>
                                
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">Current City Tier</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        {['Metro', 'Non-Metro'].map((type) => (
                                            <button
                                                key={type}
                                                onClick={() => setCityType(type)}
                                                className={`py-3 px-4 rounded-xl font-black text-xs transition-all border-2 ${cityType === type ? 'bg-rose-600 border-rose-600 text-white shadow-lg' : 'bg-white border-slate-100 text-slate-400 hover:border-rose-100'}`}
                                            >
                                                {type === 'Metro' ? '🏙️ METRO' : '🏘️ NON-METRO'}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Result Card */}
                    {results && (
                        <div className="relative">
                            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-center border-t-8 border-rose-500">
                                <div className="relative z-10">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-rose-400 mb-2 italic">Recommended CI Cover</p>
                                    <div className="text-6xl font-black tracking-tighter text-white mb-2 font-sans">
                                        ₹{results.recommendedSumInsuredLakhs}L
                                    </div>
                                    <p className="text-[11px] font-black uppercase tracking-widest opacity-30 mb-10 leading-none">Lump-Sum Protection</p>

                                    <div className="space-y-4 pt-6 border-t border-white/5">
                                        <div className="flex justify-between items-center">
                                            <p className="text-[10px] font-black opacity-60 uppercase tracking-widest">Income Backup (3Y)</p>
                                            <p className="font-sm font-black text-white">₹{(results.incomeGapCover / 100000).toFixed(1)}L</p>
                                        </div>
                                        <div className="flex justify-between items-center pt-2">
                                            <p className="text-[10px] font-black opacity-60 uppercase tracking-widest">Medical Inflation Buffer</p>
                                            <p className="font-sm font-black text-rose-400">₹{(results.buffer / 100000).toFixed(1)}L</p>
                                        </div>
                                    </div>

                                    <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10 italic">
                                        <p className="text-[9px] font-black text-rose-200 text-center leading-relaxed">
                                            ⚠️ This is NOT health insurance. This lump sum is paid on diagnosis of Cancer, Stroke, etc.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
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

export default CriticalIllnessUI;
