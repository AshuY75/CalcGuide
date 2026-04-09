import React, { useState, useEffect } from 'react';

const BodyFatUI = () => {
    const [gender, setGender] = useState('male');
    const [weight, setWeight] = useState('75');
    const [height, setHeight] = useState('175');
    const [neck, setNeck] = useState('38');
    const [waist, setWaist] = useState('85');
    const [hip, setHip] = useState('95'); // Only for women

    const [results, setResults] = useState(null);

    const calculateBodyFat = () => {
        const h = parseFloat(height);
        const w = parseFloat(waist);
        const n = parseFloat(neck);
        const hi = parseFloat(hip);

        if (!h || !w || !n) return;

        let bodyFat = 0;
        if (gender === 'male') {
            // US Navy Formula Men (Metric)
            bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
        } else {
            if (!hi) return;
            // US Navy Formula Women (Metric)
            bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(w + hi - n) + 0.22100 * Math.log10(h)) - 450;
        }

        const leanMass = parseFloat(weight) * (1 - (bodyFat / 100));
        const fatMass = parseFloat(weight) - leanMass;

        let category = 'Unknown';
        if (gender === 'male') {
            if (bodyFat < 6) category = 'Essential Fat';
            else if (bodyFat < 14) category = 'Athletes';
            else if (bodyFat < 18) category = 'Fitness';
            else if (bodyFat < 25) category = 'Average';
            else category = 'Obese';
        } else {
            if (bodyFat < 14) category = 'Essential Fat';
            else if (bodyFat < 21) category = 'Athletes';
            else if (bodyFat < 25) category = 'Fitness';
            else if (bodyFat < 32) category = 'Average';
            else category = 'Obese';
        }

        setResults({
            bfp: Math.max(0, bodyFat).toFixed(1),
            leanMass: leanMass.toFixed(1),
            fatMass: fatMass.toFixed(1),
            category
        });
    };

    useEffect(() => {
        calculateBodyFat();
    }, [gender, weight, height, neck, waist, hip]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Core Info */}
                        <div className="space-y-8">
                            <div>
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Gender</label>
                                <div className="flex gap-4">
                                    {['male', 'female'].map((g) => (
                                        <button
                                            key={g}
                                            onClick={() => setGender(g)}
                                            className={`flex-1 py-4 rounded-2xl font-black capitalize transition-all border-2 ${
                                                gender === g 
                                                ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-100' 
                                                : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-blue-200'
                                            }`}
                                        >
                                            {g === 'male' ? '👨 Male' : '👩 Female'}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Height (cm)</label>
                                <input
                                    type="number"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none font-black text-xl text-slate-800 transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Weight (kg)</label>
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none font-black text-xl text-slate-800 transition-all"
                                />
                            </div>
                        </div>

                        {/* Measurements */}
                        <div className="space-y-8">
                            <div>
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Waist (cm) <span className="text-[10px] opacity-60 ml-2">@ Navel</span></label>
                                <input
                                    type="number"
                                    value={waist}
                                    onChange={(e) => setWaist(e.target.value)}
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none font-black text-xl text-slate-800 transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Neck (cm) <span className="text-[10px] opacity-60 ml-2">@ Narrowest</span></label>
                                <input
                                    type="number"
                                    value={neck}
                                    onChange={(e) => setNeck(e.target.value)}
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none font-black text-xl text-slate-800 transition-all"
                                />
                            </div>
                            {gender === 'female' && (
                                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Hip (cm) <span className="text-[10px] opacity-60 ml-2">@ Widest</span></label>
                                    <input
                                        type="number"
                                        value={hip}
                                        onChange={(e) => setHip(e.target.value)}
                                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none font-black text-xl text-slate-800 transition-all"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {results && (
                        <div className="pt-10 border-t border-slate-100 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Result Card */}
                                <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-blue-200 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                        <span className="text-8xl font-black">%</span>
                                    </div>
                                    <h3 className="text-xs font-black uppercase tracking-widest mb-4 opacity-80">Estimated Body Fat</h3>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-7xl font-black tracking-tighter">
                                            {results.bfp}
                                        </span>
                                        <span className="text-xl font-black opacity-60">%</span>
                                    </div>
                                    <div className="mt-8">
                                        <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-black inline-flex items-center gap-2">
                                            Category: {results.category}
                                        </div>
                                    </div>
                                    <p className="mt-6 text-xs font-bold opacity-60 leading-relaxed max-w-sm">
                                        Based on the US Navy Circumference Method. Standard margin of error is +/- 3%.
                                    </p>
                                </div>

                                {/* Breakdown */}
                                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 space-y-8 flex flex-col justify-center">
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 text-center">Lean Body Mass</p>
                                        <p className="text-3xl font-black text-slate-800 text-center">{results.leanMass} <span className="text-sm font-bold opacity-40">kg</span></p>
                                    </div>
                                    <div className="w-full h-1 bg-slate-200 rounded-full"></div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 text-center">Body Fat Mass</p>
                                        <p className="text-3xl font-black text-slate-800 text-center">{results.fatMass} <span className="text-sm font-bold opacity-40">kg</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* Essential Insight */}
                            <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-start gap-4">
                                <div className="bg-blue-600 p-2 rounded-xl text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-xs font-bold text-blue-800 leading-relaxed">
                                    The **US Navy Method** is the most widely validated mathematical approach for estimating body fat without calipers or DEXA scans. It relies on specific circumference measurements which correlate strongly with subcutaneous fat levels.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BodyFatUI;
