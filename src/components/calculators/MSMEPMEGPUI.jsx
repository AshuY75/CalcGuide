import React, { useState, useEffect } from 'react';

const MSMEPMEGPUI = () => {
    const [projectCost, setProjectCost] = useState('1000000');
    const [category, setCategory] = useState('general');
    const [location, setLocation] = useState('urban');
    const [sector, setSector] = useState('manufacturing');
    
    const [results, setResults] = useState(null);

    const calculatePMEGP = () => {
        const cost = parseFloat(projectCost);
        if (isNaN(cost)) return;

        // Validations
        const maxCost = sector === 'manufacturing' ? 5000000 : 2000000;
        const validCost = Math.min(cost, maxCost);

        // Own Contribution
        const contributionRate = category === 'general' ? 0.10 : 0.05;
        const ownContribution = validCost * contributionRate;

        // Subsidy Rate
        let subsidyRate = 0;
        if (category === 'general') {
            subsidyRate = location === 'urban' ? 0.15 : 0.25;
        } else {
            subsidyRate = location === 'urban' ? 0.25 : 0.35;
        }

        const subsidyAmount = validCost * subsidyRate;
        const loanAmount = validCost - ownContribution;
        const netDebt = loanAmount - subsidyAmount;

        setResults({
            validCost,
            ownContribution,
            subsidyAmount,
            subsidyRate: subsidyRate * 100,
            loanAmount,
            netDebt,
            isLimited: cost > maxCost,
            maxLimit: maxCost
        });
    };

    useEffect(() => {
        calculatePMEGP();
    }, [projectCost, category, location, sector]);

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Inputs */}
                    <div className="space-y-8">
                        <div>
                             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">Project Parameters</label>
                             <div className="grid grid-cols-2 gap-3">
                                 {['manufacturing', 'service'].map((s) => (
                                     <button
                                         key={s}
                                         onClick={() => setSector(s)}
                                         className={`py-3 rounded-xl border-2 font-bold text-xs uppercase tracking-tight transition-all ${
                                             sector === s ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200'
                                         }`}
                                     >
                                         {s}
                                     </button>
                                 ))}
                             </div>
                        </div>

                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Total Project Cost (₹)</label>
                            <input
                                type="number"
                                value={projectCost}
                                onChange={(e) => setProjectCost(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                            />
                            {results?.isLimited && (
                                <p className="text-[10px] text-red-500 mt-2 font-bold animate-pulse italic">
                                    ⚠️ Exceeds max limit for {sector} (₹{results.maxLimit.toLocaleString()})
                                </p>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Category</label>
                                <select 
                                    value={category} 
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-indigo-500"
                                >
                                    <option value="general">General</option>
                                    <option value="special">Special (Women/SC/ST/OBC)</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Location</label>
                                <select 
                                    value={location} 
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-indigo-500"
                                >
                                    <option value="urban">Urban</option>
                                    <option value="rural">Rural</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Highly Visual Results */}
                    {results && (
                        <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-8 duration-500">
                            <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white relative shadow-2xl shadow-indigo-200 overflow-hidden">
                                <div className="absolute -bottom-4 -right-4 opacity-10">
                                    <span className="text-8xl font-black italic">MSME</span>
                                </div>
                                <div className="relative z-10 space-y-8">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-2">Govt. Subsidy (Margin Money)</p>
                                        <p className="text-5xl font-black tracking-tighter">₹{results.subsidyAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                                        <span className="inline-block mt-2 bg-white/20 px-3 py-1 rounded-full text-[10px] font-black uppercase">
                                            {results.subsidyRate}% Policy Benefit
                                        </span>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                                        <div>
                                            <p className="text-[9px] font-black opacity-60 uppercase mb-1">Your Contribution</p>
                                            <p className="text-xl font-black tracking-tight">₹{results.ownContribution.toLocaleString()}</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black opacity-60 uppercase mb-1">Bank Loan</p>
                                            <p className="text-xl font-black tracking-tight">₹{results.loanAmount.toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-3xl">
                                <p className="text-indigo-900 font-black text-xs uppercase tracking-wider mb-2">Benefit Summary</p>
                                <p className="text-indigo-700 text-xs leading-relaxed font-bold italic">
                                    Under PMEGP, you only need to cover ₹{results.ownContribution.toLocaleString()} upfront. The government covers ₹{results.subsidyAmount.toLocaleString()} as a back-ended subsidy, reducing your total liability.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-12 bg-slate-900 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center justify-between border border-slate-800">
                    <div className="space-y-2">
                         <h4 className="text-indigo-400 font-black text-lg">PMEGP Subsidy Logic (2025)</h4>
                         <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Official KVIC Guidelines Applied</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                        <div>
                            <p className="text-white font-black text-sm">35%</p>
                            <p className="text-[8px] text-slate-500 font-black uppercase tracking-widest mt-1">Special Rural</p>
                        </div>
                        <div>
                            <p className="text-white font-black text-sm">25%</p>
                            <p className="text-[8px] text-slate-500 font-black uppercase tracking-widest mt-1">General Rural</p>
                        </div>
                        <div>
                            <p className="text-white font-black text-sm">25%</p>
                            <p className="text-[8px] text-slate-500 font-black uppercase tracking-widest mt-1">Special Urban</p>
                        </div>
                        <div>
                            <p className="text-white font-black text-sm">15%</p>
                            <p className="text-[8px] text-slate-500 font-black uppercase tracking-widest mt-1">General Urban</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MSMEPMEGPUI;
