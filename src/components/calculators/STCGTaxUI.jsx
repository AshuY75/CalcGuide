import React, { useState, useEffect } from 'react';

const STCGTaxUI = () => {
    const [assetType, setAssetType] = useState('listed_equity');
    const [purchasePrice, setPurchasePrice] = useState('100000');
    const [sellPrice, setSellPrice] = useState('150000');
    const [otherExpenses, setOtherExpenses] = useState('500'); // Brokerage etc
    
    const [results, setResults] = useState(null);

    const calculateSTCG = () => {
        const p = parseFloat(purchasePrice);
        const s = parseFloat(sellPrice);
        const ex = parseFloat(otherExpenses) || 0;

        if (isNaN(p) || isNaN(s)) return;

        const grossGain = s - p;
        const netGain = grossGain - ex;
        
        let taxRate = 0;
        let taxAmount = 0;
        let note = "";

        if (assetType === 'listed_equity') {
            taxRate = 0.20; // 20% flat as per July 2024 Budget
            taxAmount = Math.max(0, netGain * taxRate);
            note = "Listed equity STCG increased from 15% to 20% in Budget 2024. Applies to hold periods < 12 months.";
        } else if (assetType === 'debt_fund' || assetType === 'gold_real_estate') {
            // Taxed at Slabs
            note = "For Debt funds (purchased after April 2023) and Real Estate, STCG is added to your total income and taxed at your applicable slab rate.";
            taxAmount = 0; // Cannot calculate precisely without total income
        }

        const cess = taxAmount * 0.04;
        const totalTax = taxAmount + cess;

        setResults({
            grossGain,
            netGain,
            taxAmount: taxAmount.toFixed(0),
            cess: cess.toFixed(0),
            totalTax: totalTax.toFixed(0),
            taxRate: (taxRate * 100),
            isSlab: assetType !== 'listed_equity'
        });
    };

    useEffect(() => {
        calculateSTCG();
    }, [assetType, purchasePrice, sellPrice, otherExpenses]);

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="flex justify-between items-center mb-10">
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Gain Calculator</h3>
                    <span className="bg-emerald-100 text-emerald-700 text-[8px] font-black px-2 py-0.5 rounded uppercase border border-emerald-200">Budget 2024 Ready ⚡</span>
                </div>
                <div className="space-y-10">
                    {/* Asset Type Selection */}
                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4 italic">Asset Category</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { id: 'listed_equity', label: 'Stocks / Equity MF', desc: 'Listed Equity (20% Flat)' },
                                { id: 'debt_fund', label: 'Debt Funds / Gold / RE', desc: 'Taxed at Slaps' }
                            ].map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => setAssetType(type.id)}
                                    className={`p-6 rounded-2xl flex flex-col items-center transition-all border-2 ${assetType === type.id ? 'bg-slate-900 border-slate-900 text-white shadow-xl' : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-slate-300'}`}
                                >
                                    <span className="font-black text-lg mb-1">{type.label}</span>
                                    <span className="text-[10px] opacity-60 font-bold uppercase">{type.desc}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Inputs */}
                        <div className="space-y-6">
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-2">Purchase Price (₹)</label>
                                <input
                                    type="number"
                                    value={purchasePrice}
                                    onChange={(e) => setPurchasePrice(e.target.value)}
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-indigo-600 outline-none font-black text-xl transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-2">Sale Price (₹)</label>
                                <input
                                    type="number"
                                    value={sellPrice}
                                    onChange={(e) => setSellPrice(e.target.value)}
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-indigo-600 outline-none font-black text-xl transition-all"
                                />
                            </div>
                        </div>

                        {/* Result Display */}
                        <div className="flex flex-col justify-center">
                            {results && (
                                <div className={`p-10 rounded-[2.5rem] relative overflow-hidden transition-all duration-500 border-2 ${results.netGain > 0 ? 'bg-indigo-50 border-indigo-100' : 'bg-rose-50 border-rose-100'}`}>
                                    <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${results.netGain > 0 ? 'text-indigo-600' : 'text-rose-600'}`}>
                                        {results.netGain > 0 ? 'Short Term Gain' : 'Short Term Loss'}
                                    </p>
                                    <div className="flex items-baseline gap-2">
                                        <span className={`text-6xl font-black tracking-tighter ${results.netGain > 0 ? 'text-indigo-700' : 'text-rose-700'}`}>
                                            ₹{Math.abs(results.netGain).toLocaleString('en-IN')}
                                        </span>
                                    </div>
                                    <div className="absolute top-0 right-0 p-8 opacity-5">
                                        <span className="text-8xl font-black">{results.netGain > 0 ? 'GAIN' : 'LOSS'}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {results && results.netGain > 0 && (
                        <div className="pt-10 border-t border-slate-100 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {results.isSlab ? (
                                <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100 flex items-start gap-4">
                                    <div className="bg-amber-600 p-2 rounded-xl text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-amber-800 uppercase tracking-widest mb-1">Taxed at Slabs</p>
                                        <p className="text-xs font-bold text-amber-800/80 leading-relaxed italic">
                                            For these assets, the gain of ₹{results.netGain.toLocaleString()} will be added to your total income and taxed according to your income tax slab (0% to 30%).
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white space-y-6 shadow-2xl shadow-indigo-100">
                                        <div>
                                            <p className="text-[10px] font-black opacity-40 uppercase tracking-widest mb-2">Flat STCG Tax (20%)</p>
                                            <p className="text-5xl font-black tracking-tighter">₹{parseInt(results.totalTax).toLocaleString('en-IN')}</p>
                                        </div>
                                        <div className="pt-6 border-t border-white/10 flex justify-between items-center text-[10px] font-black opacity-60">
                                            <span>INC. 4% HEALTH & CESS</span>
                                            <span className="bg-white/10 px-3 py-1 rounded">ESTIMATED</span>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-indigo-50 p-10 rounded-[2.5rem] border border-indigo-100 flex flex-col justify-center">
                                        <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-4">Post-Tax Gain (In-Hand)</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl font-black text-indigo-800 tracking-tighter">
                                                ₹{(results.netGain - results.totalTax).toLocaleString('en-IN')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Set-off Insight */}
                            <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-start gap-4">
                                <div className="bg-blue-600 p-2 rounded-xl text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                    </svg>
                                </div>
                                <p className="text-xs font-bold text-blue-800 leading-relaxed italic">
                                    **Tax Tip:** Short-term capital losses (STCL) can be set off against any capital gain (Long or Short) and can be carried forward for **8 years**.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default STCGTaxUI;
