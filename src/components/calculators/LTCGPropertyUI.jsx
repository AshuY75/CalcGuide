import React, { useState, useEffect } from 'react';
import { ciiData } from '../../data/ciiData';

const LTCGPropertyUI = () => {
    const [purchasePrice, setPurchasePrice] = useState('5000000');
    const [salePrice, setSalePrice] = useState('8500000');
    const [purchaseYear, setPurchaseYear] = useState('2014-15');
    const [saleYear, setSaleYear] = useState('2024-25');
    
    const [results, setResults] = useState(null);

    const calculateTax = () => {
        const pPrice = parseFloat(purchasePrice);
        const sPrice = parseFloat(salePrice);
        
        if (isNaN(pPrice) || isNaN(sPrice)) return;

        const pIndex = ciiData.find(d => d.year === purchaseYear)?.index || 100;
        const sIndex = ciiData.find(d => d.year === saleYear)?.index || 363;

        // 1. Indexed Calculation (20% with Indexation)
        const indexedCost = pPrice * (sIndex / pIndex);
        const indexedGain = Math.max(0, sPrice - indexedCost);
        const taxIndexed = indexedGain * 0.20;

        // 2. Flat Calculation (12.5% without Indexation - Budget 2024)
        const flatGain = Math.max(0, sPrice - pPrice);
        const taxFlat = flatGain * 0.125;

        // 3. Choice Logic
        const bestOption = taxFlat < taxIndexed ? 'FLAT_12.5' : 'INDEXED_20';
        const savings = Math.abs(taxFlat - taxIndexed);

        setResults({
            indexedCost,
            indexedGain,
            taxIndexed,
            flatGain,
            taxFlat,
            bestOption,
            savings,
            pIndex,
            sIndex
        });
    };

    useEffect(() => {
        calculateTax();
    }, [purchasePrice, salePrice, purchaseYear, saleYear]);

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Inputs */}
                    <div className="space-y-6">
                        <div className="flex justify-between items-center mb-2">
                             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Property Details</label>
                             <span className="bg-emerald-100 text-emerald-700 text-[8px] font-black px-2 py-0.5 rounded uppercase border border-emerald-200">Budget 2024 Amendment</span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Purchase Year</label>
                                <select 
                                    value={purchaseYear} 
                                    onChange={(e) => setPurchaseYear(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm focus:border-indigo-500 outline-none"
                                >
                                    {ciiData.map(d => <option key={d.year} value={d.year}>{d.year}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Sale Year</label>
                                <select 
                                    value={saleYear} 
                                    onChange={(e) => setSaleYear(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm focus:border-indigo-500 outline-none"
                                >
                                    {ciiData.filter(d => parseInt(d.year.split('-')[0]) >= parseInt(purchaseYear.split('-')[0])).map(d => <option key={d.year} value={d.year}>{d.year}</option>)}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Original Purchase Price (₹)</label>
                            <input
                                type="number"
                                value={purchasePrice}
                                onChange={(e) => setPurchasePrice(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Sale Price (₹)</label>
                            <input
                                type="number"
                                value={salePrice}
                                onChange={(e) => setSalePrice(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Highly Visual Choice Display */}
                    {results && (
                        <div className="flex flex-col justify-center gap-6 animate-in fade-in zoom-in duration-500">
                            <div className={`p-8 rounded-[2.5rem] relative overflow-hidden transition-all duration-500 border-2 ${results.bestOption === 'FLAT_12.5' ? 'bg-indigo-600 border-indigo-700 text-white' : 'bg-slate-900 border-slate-900 text-white'}`}>
                                <div className="absolute top-0 right-0 p-6 opacity-20">
                                     <span className="text-6xl font-black">WINNER</span>
                                </div>
                                <div className="space-y-4 relative z-10">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 italic">Recommended Regime</p>
                                    <div>
                                        <p className="text-4xl font-black tracking-tighter">
                                            {results.bestOption === 'FLAT_12.5' ? '12.5% Flat Rate' : '20% with Indexation'}
                                        </p>
                                        <p className="text-[10px] font-bold opacity-60 uppercase mt-1">Lower tax path selected automatically</p>
                                    </div>
                                    <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                        <p className="text-[10px] font-black uppercase opacity-60 mb-1">Estimated Tax Payable</p>
                                        <p className="text-5xl font-black tracking-tighter">
                                            ₹{(results.bestOption === 'FLAT_12.5' ? results.taxFlat : results.taxIndexed).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl">
                                <p className="text-emerald-800 font-black text-sm mb-1 uppercase tracking-wider">Financial Insight</p>
                                <p className="text-emerald-700 text-xs leading-relaxed font-bold italic">
                                    Choose the {results.bestOption === 'FLAT_12.5' ? 'Flat 12.5%' : 'Indexed 20%'} path to save <span className="underline">₹{results.savings.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span> compared to the other regime.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Comparison Breakdown Table */}
                {results && (
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className={`p-8 rounded-3xl border-2 transition-all ${results.bestOption === 'INDEXED_20' ? 'bg-indigo-50/50 border-indigo-200' : 'bg-slate-50 opacity-60 border-slate-200'}`}>
                            <h4 className="text-sm font-black text-slate-800 uppercase mb-6 tracking-widest flex justify-between items-center">
                                Indexed Path (20%)
                                {results.bestOption === 'INDEXED_20' && <span className="bg-indigo-600 text-white text-[8px] px-2 py-1 rounded">BETTER</span>}
                            </h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                                    <span className="text-xs text-slate-500 font-bold">Indexed Cost</span>
                                    <span className="text-sm font-black">₹{results.indexedCost.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                                    <span className="text-xs text-slate-500 font-bold">Inflation Multiplier</span>
                                    <span className="text-sm font-black text-indigo-600">{(results.sIndex / results.pIndex).toFixed(2)}x</span>
                                </div>
                                <div className="flex justify-between items-center text-indigo-700 pt-2">
                                    <span className="text-xs font-black uppercase">Final Tax (20%)</span>
                                    <span className="text-xl font-black text-indigo-800">₹{results.taxIndexed.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                                </div>
                            </div>
                        </div>

                        <div className={`p-8 rounded-3xl border-2 transition-all ${results.bestOption === 'FLAT_12.5' ? 'bg-indigo-50/50 border-indigo-200' : 'bg-slate-50 opacity-60 border-slate-200'}`}>
                            <h4 className="text-sm font-black text-slate-800 uppercase mb-6 tracking-widest flex justify-between items-center">
                                Flat Path (12.5%)
                                {results.bestOption === 'FLAT_12.5' && <span className="bg-indigo-600 text-white text-[8px] px-2 py-1 rounded">BETTER</span>}
                            </h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                                    <span className="text-xs text-slate-500 font-bold">Original Cost</span>
                                    <span className="text-sm font-black">₹{parseFloat(purchasePrice).toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                                    <span className="text-xs text-slate-500 font-bold">Total Gain</span>
                                    <span className="text-sm font-black text-indigo-600">₹{results.flatGain.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                                </div>
                                <div className="flex justify-between items-center text-indigo-700 pt-2">
                                    <span className="text-xs font-black uppercase">Final Tax (12.5%)</span>
                                    <span className="text-xl font-black text-indigo-800">₹{results.taxFlat.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="bg-slate-900 p-6 flex items-start gap-4 text-white/40">
                <span className="text-xl">⚖️</span>
                <p className="text-[9px] font-bold leading-relaxed italic">
                    Grandfathering Rule (Budget 2024 Amendment): For properties acquired before July 23, 2024, resident individuals and HUFs have the option to calculate tax under either the old scheme (20% with indexation) or the new scheme (12.5% without indexation) and pick the one that results in lower tax liability.
                </p>
            </div>
        </div>
    );
};

export default LTCGPropertyUI;
