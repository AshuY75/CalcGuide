import React, { useState, useEffect } from 'react';

const LTCGHarvestingUI = () => {
    const [unrealizedGains, setUnrealizedGains] = useState('250000');
    const [currentSaleValue, setCurrentSaleValue] = useState('1000000');
    const [taxExemptionLimit, setTaxExemptionLimit] = useState('125000'); // New Budget 2024 Rule
    
    const [results, setResults] = useState(null);

    const calculateHarvest = () => {
        const gains = parseFloat(unrealizedGains);
        const sale = parseFloat(currentSaleValue);
        const limit = parseFloat(taxExemptionLimit);

        if (isNaN(gains) || isNaN(sale) || isNaN(limit)) return;

        // LTCG Harvesting Logic
        // Strategy: Sell just enough to realize the maximum tax-free gain (limit)
        // Ratio of gain to sale = gains / sale
        const gainRatio = gains / sale;
        
        // Target sale to realize exactly the limit (or all gains if less than limit)
        const realizationTarget = Math.min(gains, limit);
        const recommendedSaleAmount = realizationTarget / gainRatio;
        
        // Tax Savings calculation (assuming 12.5% LTCG tax rate above limit)
        const taxSaved = realizationTarget * 0.125;

        setResults({
            realizationTarget: Math.floor(realizationTarget),
            recommendedSaleAmount: Math.floor(recommendedSaleAmount),
            taxSaved: Math.floor(taxSaved),
            taxRateUsed: '12.5%',
            limitRemaining: Math.max(0, limit - gains)
        });
    };

    useEffect(() => {
        calculateHarvest();
    }, [unrealizedGains, currentSaleValue, taxExemptionLimit]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Inputs */}
                    <div className="space-y-6">
                        <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                            <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest block mb-4 italic">Portfolio Status (Equity)</label>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Total Unrealized Gains (₹)</label>
                                    <input
                                        type="number"
                                        value={unrealizedGains}
                                        onChange={(e) => setUnrealizedGains(e.target.value)}
                                        className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-emerald-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    />
                                    <p className="text-[9px] font-black text-slate-400 mt-2 italic px-1">Gains accumulated over 1+ years (Long Term)</p>
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Total Investment Value (₹)</label>
                                    <input
                                        type="number"
                                        value={currentSaleValue}
                                        onChange={(e) => setCurrentSaleValue(e.target.value)}
                                        className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-emerald-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
                            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                                <span className="font-black text-xs">FY25</span>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Budget 2024 Rule</h4>
                                <p className="text-[9px] font-bold text-slate-400 italic">Exemption limit increased to ₹1.25 Lakhs per year.</p>
                            </div>
                        </div>
                    </div>

                    {/* Result Strategy Card */}
                    {results && (
                        <div className="relative">
                            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-center border-b-8 border-emerald-500">
                                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-2">Strategy Recommendation</p>
                                <div className="text-[11px] font-black mb-6 uppercase tracking-widest opacity-40">Tax-Free Gains to Realize</div>
                                
                                <div className="text-5xl font-black tracking-tighter text-emerald-400 mb-8 font-sans">
                                    ₹{results.realizationTarget.toLocaleString('en-IN')}
                                </div>

                                <div className="space-y-4 pt-6 border-t border-white/5">
                                    <div className="flex justify-between items-center">
                                        <p className="text-[10px] font-black opacity-60 uppercase tracking-widest">Sell Amount</p>
                                        <p className="font-black text-xl text-white">₹{results.recommendedSaleAmount.toLocaleString('en-IN')}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-[10px] font-black opacity-60 uppercase tracking-widest text-emerald-200">Total Tax Saved</p>
                                        <p className="font-black text-xl text-emerald-400">₹{results.taxSaved.toLocaleString('en-IN')}</p>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <p className="text-[9px] font-black text-slate-400 text-center leading-relaxed">
                                        💡 PRO TIP: Buy back the same shares immediately after selling to 'reset' your purchase price for future tax benefits.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LTCGHarvestingUI;
