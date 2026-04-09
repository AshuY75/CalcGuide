import React, { useState, useEffect } from 'react';

const HeartRateUI = () => {
    const [age, setAge] = useState('25');
    const [restingHR, setRestingHR] = useState('70');
    const [results, setResults] = useState(null);

    const calculateZones = () => {
        const a = parseFloat(age);
        const rhr = parseFloat(restingHR) || 0;
        
        if (isNaN(a)) return;

        // Max HR (Standard Formula)
        const maxHR = 220 - a;
        // Heart Rate Reserve (HRR)
        const hrr = maxHR - rhr;

        const zones = [
            { name: 'Zone 1: Warm Up', range: [50, 60], color: 'bg-slate-500', text: 'slate', desc: 'Light activity to increase blood flow.' },
            { name: 'Zone 2: Fat Burn', range: [60, 70], color: 'bg-blue-500', text: 'blue', desc: 'Boost metabolism and develop aerobic base.' },
            { name: 'Zone 3: Aerobic', range: [70, 80], color: 'bg-emerald-500', text: 'emerald', desc: 'Improve cardiovascular fitness and endurance.' },
            { name: 'Zone 4: Anaerobic', range: [80, 90], color: 'bg-orange-500', text: 'orange', desc: 'Increase speed and performance capability.' },
            { name: 'Zone 5: Max Effort', range: [90, 100], color: 'bg-rose-500', text: 'rose', desc: 'Extreme intensity for short bursts.' }
        ].map(zone => {
            if (rhr > 0) {
                // Karvonen Formula: ((MaxHR - RHR) * %Intensity) + RHR
                return {
                    ...zone,
                    low: Math.round((hrr * (zone.range[0] / 100)) + rhr),
                    high: Math.round((hrr * (zone.range[1] / 100)) + rhr)
                };
            } else {
                // Simple Formula: MaxHR * %Intensity
                return {
                    ...zone,
                    low: Math.round(maxHR * (zone.range[0] / 100)),
                    high: Math.round(maxHR * (zone.range[1] / 100))
                };
            }
        });

        setResults({
            maxHR,
            hrr,
            zones
        });
    };

    useEffect(() => {
        calculateZones();
    }, [age, restingHR]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Age Input */}
                        <div className="space-y-4">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Age (Years)</label>
                            <input
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-rose-500 focus:bg-white outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                placeholder="25"
                            />
                        </div>

                        {/* Resting HR Input */}
                        <div className="space-y-4">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Resting Heart Rate (BPM)</label>
                            <input
                                type="number"
                                value={restingHR}
                                onChange={(e) => setRestingHR(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-rose-500 focus:bg-white outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                placeholder="70"
                            />
                            <p className="text-[10px] text-slate-400 font-bold px-2">Leave 0 if unknown (will use simple math)</p>
                        </div>
                    </div>

                    {results && (
                        <div className="pt-10 border-t border-slate-100 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {/* Max Heart Rate Display */}
                            <div className="bg-gradient-to-br from-rose-600 to-red-700 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-rose-200 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                    <span className="text-8xl font-black">MAX</span>
                                </div>
                                <h3 className="text-xs font-black uppercase tracking-widest mb-4 opacity-80">Estimated Max Heart Rate</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-7xl font-black tracking-tighter">
                                        {results.maxHR}
                                    </span>
                                    <span className="text-xl font-black opacity-60">BPM</span>
                                </div>
                                <p className="mt-6 text-sm font-bold opacity-80 leading-relaxed max-w-sm">
                                    Based on the standard 220-age formula. This is the theoretical limit of your cardiovascular system.
                                </p>
                            </div>

                            {/* Training Zones */}
                            <div className="grid grid-cols-1 gap-4">
                                {results.zones.map((zone, idx) => (
                                    <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex flex-col sm:flex-row items-center gap-6 group hover:bg-white hover:shadow-xl transition-all duration-300">
                                        <div className={`w-20 h-20 rounded-2xl ${zone.color} shadow-lg flex items-center justify-center text-white shrink-0`}>
                                            <span className="text-2xl font-black">{idx + 1}</span>
                                        </div>
                                        <div className="flex-1 text-center sm:text-left space-y-1">
                                            <h4 className="text-lg font-black text-slate-800">{zone.name}</h4>
                                            <p className="text-xs text-slate-400 font-bold leading-relaxed">{zone.desc}</p>
                                        </div>
                                        <div className="flex flex-col items-center sm:items-end shrink-0 min-w-[120px]">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">{zone.range[0]}% - {zone.range[1]}%</p>
                                            <p className="text-3xl font-black text-slate-800">
                                                {zone.low} - {zone.high} <span className="text-xs opacity-40">BPM</span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Insight Card */}
                            <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-start gap-4">
                                <div className="bg-blue-600 p-2 rounded-xl text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-xs font-bold text-blue-800 leading-relaxed">
                                    The **Karvonen Method** (used here with Resting HR) is generally more accurate for athletes than simple formulas because it accounts for your baseline fitness levels.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeartRateUI;
