import React, { useState, useEffect, useRef } from 'react';
import { setUrlParams, parseInitialState } from '../../utils/urlState'

const GoldJewelleryUI = () => {
    // Initialize from URL or defaults
    const initialState = parseInitialState({
        p: '75000', // goldPrice24K
        w: '10',    // weight
        k: '22',    // purity
        m: '12'     // makingCharges
    });

    const [goldPrice24K, setGoldPrice24K] = useState(initialState.p);
    const [weight, setWeight] = useState(initialState.w);
    const [purity, setPurity] = useState(initialState.k);
    const [makingCharges, setMakingCharges] = useState(initialState.m); // Percentage
    const [isSharing, setIsSharing] = useState(false)
    
    const [results, setResults] = useState(null);
    const resultRef = useRef(null);

    // Sync state with URL params
    useEffect(() => {
        setUrlParams({
            p: goldPrice24K,
            w: weight,
            k: purity,
            m: makingCharges
        });
    }, [goldPrice24K, weight, purity, makingCharges]);

    const calculateGold = () => {
        const p24 = parseFloat(goldPrice24K);
        const w = parseFloat(weight);
        const pur = parseFloat(purity);
        const mc = parseFloat(makingCharges);

        if (isNaN(p24) || isNaN(w) || isNaN(pur) || isNaN(mc)) return;

        const effectivePricePerGram = (p24 / 24) * pur;
        const goldValue = effectivePricePerGram * w;
        
        const makingValue = goldValue * (mc / 100);
        const subtotal = goldValue + makingValue;
        
        const gst = subtotal * 0.03; // GST on Jewellery is 3%
        const total = subtotal + gst;

        setResults({
            goldValue: Math.floor(goldValue),
            makingValue: Math.floor(makingValue),
            gst: Math.floor(gst),
            total: Math.floor(total),
            effectiveRate: Math.floor(effectivePricePerGram)
        });
    };

    useEffect(() => {
        calculateGold();
    }, [goldPrice24K, weight, purity, makingCharges]);

    const handleShare = (platform) => {
        const url = window.location.href;
        
        let shareText = `✨ *Gold Jewellery Estimate*\n`;
        shareText += `-------------------------\n`;
        shareText += `💰 *Total Price:* ₹${results.total.toLocaleString('en-IN')}\n`;
        shareText += `⚖️ *Weight:* ${weight} Grams\n`;
        shareText += `🌟 *Purity:* ${purity} Karat\n`;
        shareText += `🛠️ *Making Charges:* ${makingCharges}%\n`;
        shareText += `-------------------------\n`;
        shareText += `*Breakdown:*\n`;
        shareText += `🔸 Gold Value: ₹${results.goldValue.toLocaleString('en-IN')}\n`;
        shareText += `🔸 GST (3%): ₹${results.gst.toLocaleString('en-IN')}\n`;
        shareText += `-------------------------\n`;
        shareText += `Check the full quote here:\n`;

        if (platform === 'whatsapp') {
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + url)}`, '_blank');
        } else {
            navigator.clipboard.writeText(url);
            setIsSharing(true);
            setTimeout(() => setIsSharing(false), 2000);
        }
    }

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Inputs */}
                    <div className="space-y-6">
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">24K Gold Price (per 10g) (₹)</label>
                            <input
                                type="number"
                                value={goldPrice24K}
                                onChange={(e) => setGoldPrice24K(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-amber-600 outline-none font-black text-xl text-slate-800 transition-all"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Weight (Grams)</label>
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-amber-600 outline-none font-black text-lg text-slate-800 transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Purity (Karat)</label>
                                <select 
                                    value={purity}
                                    onChange={(e) => setPurity(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-amber-600 outline-none font-black text-lg text-slate-800 transition-all appearance-none"
                                >
                                    <option value="24">24K (99.9%)</option>
                                    <option value="22">22K (91.6%)</option>
                                    <option value="20">20K (83.3%)</option>
                                    <option value="18">18K (75.0%)</option>
                                    <option value="14">14K (58.5%)</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Making Charges (%)</label>
                            <div className="flex items-center gap-4">
                                <input
                                    type="range"
                                    min="3"
                                    max="25"
                                    value={makingCharges}
                                    onChange={(e) => setMakingCharges(e.target.value)}
                                    className="flex-1 accent-amber-600"
                                />
                                <span className="font-black text-xl text-amber-600 w-12">{makingCharges}%</span>
                            </div>
                        </div>
                    </div>

                    {/* Result Card */}
                    {results && (
                        <div className="relative" ref={resultRef}>
                            <div className="bg-amber-600 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-amber-100 relative overflow-hidden h-full flex flex-col justify-center">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Final Estimated Price</p>
                                <div className="text-5xl font-black tracking-tighter mb-1 font-sans">
                                    ₹{results.total.toLocaleString('en-IN')}
                                </div>
                                <p className="text-xs font-bold opacity-80 mb-8 italic">
                                    Incl. 3% GST & Making Charges
                                </p>

                                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10 mb-6">
                                    <div>
                                        <p className="text-[8px] font-black opacity-60 uppercase mb-1 text-slate-100 tracking-widest">Making Value</p>
                                        <p className="text-xl font-black">₹{results.makingValue.toLocaleString('en-IN')}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[8px] font-black opacity-60 uppercase mb-1 text-slate-100 tracking-widest">GST (3%)</p>
                                        <p className="text-xl font-black">₹{results.gst.toLocaleString('en-IN')}</p>
                                    </div>
                                </div>

                                {/* Share Actions */}
                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => handleShare('whatsapp')}
                                        className="flex-1 bg-white/20 hover:bg-white/30 text-white py-2 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-colors border border-white/10"
                                    >
                                        WhatsApp
                                    </button>
                                    <button 
                                        onClick={() => handleShare('copy')}
                                        className="flex-1 bg-white text-amber-600 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-colors shadow-lg"
                                    >
                                        {isSharing ? 'Copied!' : 'Copy Link'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Bill Breakdown */}
                {results && (
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-between">
                            <div>
                                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Raw Gold Value</p>
                                <p className="text-lg font-black text-slate-800">₹{results.goldValue.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Rate ({purity}K)</p>
                                <p className="text-sm font-black text-amber-600">₹{results.effectiveRate}/g</p>
                            </div>
                        </div>
                        <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-between">
                            <div>
                                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Weight</p>
                                <p className="text-lg font-black text-slate-800">{weight} Grams</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Tax Amount</p>
                                <p className="text-sm font-black text-green-600">+₹{results.gst.toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GoldJewelleryUI;
