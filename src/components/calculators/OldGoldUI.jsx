import React, { useState, useEffect } from 'react';

const OldGoldUI = () => {
    const [weight, setWeight] = useState('10');
    const [purity, setPurity] = useState('22');
    const [goldPrice24K, setGoldPrice24K] = useState('75000');
    const [meltingLoss, setMeltingLoss] = useState('1'); // Percentage
    
    const [results, setResults] = useState(null);

    const calculateExchange = () => {
        const p24 = parseFloat(goldPrice24K);
        const w = parseFloat(weight);
        const pur = parseFloat(purity);
        const loss = parseFloat(meltingLoss);

        if (isNaN(p24) || isNaN(w) || isNaN(pur) || isNaN(loss)) return;

        // Effective Price per gram based on purity
        const marketRatePerGram = (p24 / 24) * pur;
        const grossValue = marketRatePerGram * w;
        
        // Deduction due to melting loss and handling
        const deductionValue = grossValue * (loss / 100);
        const netValue = grossValue - deductionValue;

        setResults({
            grossValue: Math.floor(grossValue),
            deductionValue: Math.floor(deductionValue),
            netValue: Math.floor(netValue),
            ratePerGram: Math.floor(marketRatePerGram)
        });
    };

    useEffect(() => {
        calculateExchange();
    }, [weight, purity, goldPrice24K, meltingLoss]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Inputs */}
                    <div className="space-y-6">
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Old Gold Weight (Grams)</label>
                            <input
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-amber-700 outline-none font-black text-xl text-slate-800 transition-all"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Purity (Karat)</label>
                                <select 
                                    value={purity}
                                    onChange={(e) => setPurity(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-amber-700 outline-none font-black text-lg text-slate-800 transition-all appearance-none"
                                >
                                    <option value="22">22K (91.6%)</option>
                                    <option value="20">20K (83.3%)</option>
                                    <option value="18">18K (75.0%)</option>
                                    <option value="14">14K (58.5%)</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Market 24K Rate (10g)</label>
                                <input
                                    type="number"
                                    value={goldPrice24K}
                                    onChange={(e) => setGoldPrice24K(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-amber-700 outline-none font-black text-lg text-slate-800 transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Melting/Deduction Loss (%)</label>
                            <div className="flex items-center gap-4">
                                <input
                                    type="range"
                                    min="0"
                                    max="5"
                                    step="0.5"
                                    value={meltingLoss}
                                    onChange={(e) => setMeltingLoss(e.target.value)}
                                    className="flex-1 accent-amber-800"
                                />
                                <span className="font-black text-xl text-amber-800 w-12">{meltingLoss}%</span>
                            </div>
                        </div>
                    </div>

                    {/* Result Card */}
                    {results && (
                        <div className="relative">
                            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-center border-l-4 border-amber-600">
                                <p className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-2">Net Exchange Value</p>
                                <div className="text-5xl font-black tracking-tighter mb-1 font-sans text-amber-400">
                                    ₹{results.netValue.toLocaleString('en-IN')}
                                </div>
                                <p className="text-xs font-bold opacity-60 mb-8 italic">
                                    Estimation for selling/exchange
                                </p>

                                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                                    <div>
                                        <p className="text-[8px] font-black opacity-40 uppercase mb-1 tracking-widest">Gross Value</p>
                                        <p className="text-xl font-black">₹{results.grossValue.toLocaleString('en-IN')}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[8px] font-black opacity-40 uppercase mb-1 tracking-widest">Deductions</p>
                                        <p className="text-xl font-black text-red-400">-₹{results.deductionValue.toLocaleString('en-IN')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Advice Section */}
                <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
                    <div className="p-2 bg-amber-100 rounded-xl text-amber-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest mb-1">Exchange Logic</h4>
                        <p className="text-xs font-bold text-slate-500 leading-relaxed italic">
                            Most jewellers deduct 1-2% as melting loss when buying back old gold. GST paid during the original purchase is NOT refundable during exchange.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OldGoldUI;
