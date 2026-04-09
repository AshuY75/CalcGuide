import React, { useState, useEffect } from 'react';

const IdealWeightUI = () => {
    const [gender, setGender] = useState('male');
    const [heightFeet, setHeightFeet] = useState('5');
    const [heightInches, setHeightInches] = useState('7');

    const [results, setResults] = useState(null);

    const calculateIdealWeight = () => {
        const ft = parseFloat(heightFeet);
        const inc = parseFloat(heightInches);
        
        if (isNaN(ft) || isNaN(inc)) return;

        const totalInches = (ft * 12) + inc;
        const inchesOver5ft = Math.max(0, totalInches - 60);

        // Devine Formula (1974)
        let devine = 0;
        if (gender === 'male') {
            devine = 50 + (2.3 * inchesOver5ft);
        } else {
            devine = 45.5 + (2.3 * inchesOver5ft);
        }

        // Robinson Formula (1983)
        let robinson = 0;
        if (gender === 'male') {
            robinson = 52 + (1.9 * inchesOver5ft);
        } else {
            robinson = 49 + (1.7 * inchesOver5ft);
        }

        // Miller Formula (1983)
        let miller = 0;
        if (gender === 'male') {
            miller = 56.2 + (1.41 * inchesOver5ft);
        } else {
            miller = 53.1 + (1.36 * inchesOver5ft);
        }

        // Healthy BMI Range (Asian Standard: 18.5 - 22.9)
        const heightMeters = totalInches * 0.0254;
        const bmiLow = 18.5 * (heightMeters * heightMeters);
        const bmiHigh = 22.9 * (heightMeters * heightMeters);

        setResults({
            devine: devine.toFixed(1),
            robinson: robinson.toFixed(1),
            miller: miller.toFixed(1),
            bmiRange: {
                low: bmiLow.toFixed(1),
                high: bmiHigh.toFixed(1)
            }
        });
    };

    useEffect(() => {
        calculateIdealWeight();
    }, [gender, heightFeet, heightInches]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Gender Selection */}
                        <div className="space-y-4">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Gender</label>
                            <div className="flex gap-4">
                                {['male', 'female'].map((g) => (
                                    <button
                                        key={g}
                                        onClick={() => setGender(g)}
                                        className={`flex-1 py-4 rounded-2xl font-black capitalize transition-all border-2 ${
                                            gender === g 
                                            ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100' 
                                            : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-indigo-200'
                                        }`}
                                    >
                                        {g === 'male' ? '👨 Male' : '👩 Female'}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Height Selection */}
                        <div className="space-y-4">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Height (Feet & Inches)</label>
                            <div className="flex gap-4">
                                <div className="flex-1 relative">
                                    <input
                                        type="number"
                                        value={heightFeet}
                                        onChange={(e) => setHeightFeet(e.target.value)}
                                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-500 focus:bg-white outline-none font-black text-xl text-slate-800 transition-all"
                                        placeholder="5"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-400 uppercase">ft</span>
                                </div>
                                <div className="flex-1 relative">
                                    <input
                                        type="number"
                                        value={heightInches}
                                        onChange={(e) => setHeightInches(e.target.value)}
                                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-500 focus:bg-white outline-none font-black text-xl text-slate-800 transition-all"
                                        placeholder="7"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-400 uppercase">in</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {results && (
                        <div className="pt-10 border-t border-slate-100 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {/* Primary Result: Devine Formula */}
                            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-indigo-200 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                    <span className="text-8xl font-black">IBW</span>
                                </div>
                                <h3 className="text-xs font-black uppercase tracking-widest mb-4 opacity-80">Ideal Body Weight (Devine)</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-7xl font-black tracking-tighter">
                                        {results.devine}
                                    </span>
                                    <span className="text-xl font-black opacity-60">kg</span>
                                </div>
                                <p className="mt-6 text-sm font-bold opacity-80 leading-relaxed max-w-sm">
                                    Based on the Devine Formula (clinical standard), this is the optimal weight for your height and gender.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Other Formulas */}
                                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 space-y-6">
                                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Other Clinical Formulas</h4>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-3 border-b border-slate-200/50">
                                            <span className="text-sm font-bold text-slate-600">Robinson Formula</span>
                                            <span className="font-black text-slate-800">{results.robinson} kg</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-slate-200/50">
                                            <span className="text-sm font-bold text-slate-600">Miller Formula</span>
                                            <span className="font-black text-slate-800">{results.miller} kg</span>
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-slate-400 font-bold leading-relaxed italic">
                                        *Robinson and Miller formulas often provide slightly different estimates based on diverse study populations.
                                    </p>
                                </div>

                                {/* Healthy BMI Range */}
                                <div className="bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100 flex flex-col justify-center">
                                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-4 text-center">Healthy Weight Range (BMI 18.5 - 22.9)</p>
                                    <div className="text-center">
                                        <span className="text-4xl font-black text-emerald-700 tracking-tighter">
                                            {results.bmiRange.low} - {results.bmiRange.high}
                                        </span>
                                        <span className="text-lg font-black text-emerald-600/60 ml-2">kg</span>
                                    </div>
                                    <p className="text-[10px] text-emerald-600/60 text-center mt-6 font-bold px-4 leading-relaxed">
                                        This range corresponds to the Indian/Asian BMI standards for minimum health risk.
                                    </p>
                                </div>
                            </div>

                            {/* Insight Card */}
                            <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-start gap-4">
                                <div className="bg-blue-600 p-2 rounded-xl text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-xs font-bold text-blue-800 leading-relaxed">
                                    Ideal body weight is an estimate. Individual variation in muscle mass and bone density means you can be healthy even if you are slightly outside these mathematical ranges.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default IdealWeightUI;
