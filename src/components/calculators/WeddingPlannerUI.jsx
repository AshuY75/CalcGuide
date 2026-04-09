import React, { useState, useEffect } from 'react';

const WeddingPlannerUI = () => {
    const [budget, setBudget] = useState('1000000');
    const [guests, setGuests] = useState('300');
    
    const [breakdown, setBreakdown] = useState(null);

    const calculateBreakdown = () => {
        const total = parseFloat(budget);
        if (isNaN(total)) return;

        // Indian Wedding standard distribution
        const distribution = [
            { category: 'Catering & Food', pct: 35, icon: '🍽️', color: 'bg-rose-500' },
            { category: 'Venue & Decor', pct: 25, icon: '🏛️', color: 'bg-indigo-500' },
            { category: 'Jewellery & Attire', pct: 20, icon: '💍', color: 'bg-amber-500' },
            { category: 'Photography & Media', pct: 10, icon: '📸', color: 'bg-cyan-500' },
            { category: 'Gifts & Logistics', pct: 5, icon: '🎁', color: 'bg-emerald-500' },
            { category: 'Miscellaneous', pct: 5, icon: '✨', color: 'bg-slate-500' }
        ];

        const calculated = distribution.map(item => ({
            ...item,
            amount: Math.floor(total * (item.pct / 100)),
            perGuest: Math.floor((total * (item.pct / 100)) / guests)
        }));

        setBreakdown(calculated);
    };

    useEffect(() => {
        calculateBreakdown();
    }, [budget, guests]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Inputs */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-pink-50 p-6 rounded-2xl border border-pink-100">
                            <label className="text-[10px] font-black text-pink-400 uppercase tracking-widest block mb-4 italic">Wedding Core Parameters</label>
                            
                            <div className="space-y-6">
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Total Budget (₹)</label>
                                    <input
                                        type="number"
                                        value={budget}
                                        onChange={(e) => setBudget(e.target.value)}
                                        className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-pink-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Guest Count</label>
                                    <input
                                        type="number"
                                        value={guests}
                                        onChange={(e) => setGuests(e.target.value)}
                                        className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-pink-600 outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
                           <div className="relative z-10">
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Cost Per Guest</p>
                                <div className="text-4xl font-black text-pink-400">₹{(budget / guests).toFixed(0)}</div>
                                <p className="text-[10px] font-black mt-2 opacity-50 tracking-tighter">Budget utilized across 6 major categories</p>
                           </div>
                           <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                           </div>
                        </div>
                    </div>

                    {/* Breakdown List */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2 italic">
                             Budget Distribution 
                            <span className="h-px bg-slate-100 flex-1"></span>
                        </h3>
                        <div className="space-y-4">
                            {breakdown && breakdown.map((item) => (
                                <div key={item.category} className="group p-4 bg-slate-50/50 rounded-2xl border-2 border-transparent hover:border-pink-100 hover:bg-white transition-all flex items-center justify-between shadow-sm hover:shadow-md">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-xl shadow-lg shadow-${item.color.split('-')[1]}-100`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-800 text-sm">{item.category}</h4>
                                            <div className="flex items-center gap-2 mt-0.5">
                                                <div className="h-1 w-24 bg-slate-100 rounded-full overflow-hidden">
                                                    <div className={`h-full ${item.color}`} style={{ width: `${item.pct}%` }}></div>
                                                </div>
                                                <span className="text-[9px] font-black text-slate-400 uppercase">{item.pct}% Allocation</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-black text-slate-900">₹{item.amount.toLocaleString('en-IN')}</p>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">₹{item.perGuest}/guest</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeddingPlannerUI;
