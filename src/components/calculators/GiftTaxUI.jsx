import React, { useState, useEffect } from 'react';

const GiftTaxUI = () => {
    const [giftValue, setGiftValue] = useState('60000');
    const [fromRelation, setFromRelation] = useState('non_relative');
    const [occasion, setOccasion] = useState('other');
    
    const [results, setResults] = useState(null);

    const calculateGiftTax = () => {
        const value = parseFloat(giftValue);
        
        if (isNaN(value)) return;

        let taxableAmount = 0;
        let isExempt = false;
        let reason = "";

        if (occasion === 'wedding') {
            isExempt = true;
            reason = "Gifts received on the occasion of marriage are fully exempt from tax under Section 56(2).";
        } else if (fromRelation === 'relative') {
            isExempt = true;
            reason = "Gifts received from 'Relatives' (as defined by IT Act) are fully exempt regardless of the amount.";
        } else if (occasion === 'inheritance' || occasion === 'will') {
            isExempt = true;
            reason = "Gifts received under a will or by way of inheritance are fully exempt.";
        } else {
            // Non-relative, normal occasion
            if (value <= 50000) {
                isExempt = true;
                reason = "Total gifts from non-relatives up to ₹50,000 per year are exempt.";
            } else {
                taxableAmount = value;
                reason = "Gifts from non-relatives exceeding ₹50,000 are taxable on the ENTIRE amount as 'Income from Other Sources'.";
            }
        }

        setResults({
            taxableAmount,
            isExempt,
            reason
        });
    };

    useEffect(() => {
        calculateGiftTax();
    }, [giftValue, fromRelation, occasion]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Inputs */}
                        <div className="space-y-8">
                            <div>
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Value of Gift (₹)</label>
                                <input
                                    type="number"
                                    value={giftValue}
                                    onChange={(e) => setGiftValue(e.target.value)}
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-rose-500 outline-none font-black text-2xl text-slate-800 transition-all shadow-inner"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Received From</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={() => setFromRelation('relative')}
                                        className={`py-4 rounded-xl font-black text-sm transition-all border-2 ${fromRelation === 'relative' ? 'bg-rose-600 border-rose-600 text-white shadow-lg shadow-rose-100' : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-rose-200'}`}
                                    >
                                        Relative
                                    </button>
                                    <button
                                        onClick={() => setFromRelation('non_relative')}
                                        className={`py-4 rounded-xl font-black text-sm transition-all border-2 ${fromRelation === 'non_relative' ? 'bg-rose-600 border-rose-600 text-white shadow-lg shadow-rose-100' : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-rose-200'}`}
                                    >
                                        Non-Relative
                                    </button>
                                </div>
                                <p className="text-[10px] text-slate-400 mt-3 font-bold italic">*Relatives include Spouse, Siblings, Parents, and Lineal Ascendants/Descendants.</p>
                            </div>
                        </div>

                        {/* Occasions */}
                        <div className="space-y-8">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Occasion / Type</label>
                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    { id: 'other', label: 'Birthday / General', icon: '🎁' },
                                    { id: 'wedding', label: 'Wedding / Marriage', icon: '💍' },
                                    { id: 'inheritance', label: 'Inheritance / Will', icon: '📜' }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setOccasion(item.id)}
                                        className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-sm transition-all border-2 ${occasion === item.id ? 'bg-slate-800 border-slate-800 text-white' : 'bg-slate-50 border-slate-100 text-slate-600 hover:border-slate-200'}`}
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {results && (
                        <div className={`p-10 rounded-[2.5rem] border-2 animate-in fade-in slide-in-from-bottom-2 duration-500 overflow-hidden relative ${results.isExempt ? 'bg-emerald-50 border-emerald-100' : 'bg-rose-50 border-rose-100'}`}>
                            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                                <div className="text-center md:text-left">
                                    <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${results.isExempt ? 'text-emerald-600' : 'text-rose-600'}`}>Tax Status</p>
                                    <h3 className={`text-4xl font-black ${results.isExempt ? 'text-emerald-700' : 'text-rose-700'}`}>
                                        {results.isExempt ? 'FULLY EXEMPT' : 'TAXABLE'}
                                    </h3>
                                    <p className={`mt-4 text-xs font-bold leading-relaxed max-w-md ${results.isExempt ? 'text-emerald-800/70' : 'text-rose-800/70'}`}>
                                        {results.reason}
                                    </p>
                                </div>
                                {!results.isExempt && (
                                    <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl border border-rose-200 text-center min-w-[200px]">
                                        <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-2">Taxable Sub-total</p>
                                        <p className="text-3xl font-black text-rose-700">₹{results.taxableAmount.toLocaleString('en-IN')}</p>
                                    </div>
                                )}
                            </div>
                            <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
                                <span className="text-9xl font-black">{results.isExempt ? 'SAFE' : 'TAX'}</span>
                            </div>
                        </div>
                    )}

                    {/* Important Logic Note */}
                    <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-start gap-4">
                        <div className="bg-blue-600 p-2 rounded-xl text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p className="text-xs font-bold text-blue-800 leading-relaxed italic">
                            Remember: The ₹50,000 limit is for the **aggregate value** of all gifts received in a year. If you receive ₹40k from one friend and ₹15k from another, the entire ₹55k becomes taxable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftTaxUI;
