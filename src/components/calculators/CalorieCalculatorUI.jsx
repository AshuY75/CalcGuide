import React, { useState, useEffect } from 'react';

const CalorieCalculatorUI = () => {
    const [gender, setGender] = useState('male');
    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [age, setAge] = useState('25');
    const [activity, setActivity] = useState('1.55'); // Moderate default

    const [results, setResults] = useState(null);

    const calculateTDEE = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height);
        const a = parseFloat(age);
        const mult = parseFloat(activity);

        if (!w || !h || !a) return;

        // BMR (Mifflin-St Jeor)
        let bmr = 0;
        if (gender === 'male') {
            bmr = (10 * w) + (6.25 * h) - (5 * a) + 5;
        } else {
            bmr = (10 * w) + (6.25 * h) - (5 * a) - 161;
        }

        const tdee = bmr * mult;

        setResults({
            bmr: Math.round(bmr),
            tdee: Math.round(tdee),
            mildWeightLoss: Math.round(tdee - 250),
            weightLoss: Math.round(tdee - 500),
            extremeWeightLoss: Math.round(tdee - 1000),
            mildWeightGain: Math.round(tdee + 250),
            weightGain: Math.round(tdee + 500),
            macros: {
                protein: Math.round((tdee * 0.30) / 4), // 30% calories, 4 cal/g
                carbs: Math.round((tdee * 0.40) / 4),   // 40% calories, 4 cal/g
                fats: Math.round((tdee * 0.30) / 9)    // 30% calories, 9 cal/g
            }
        });
    };

    useEffect(() => {
        calculateTDEE();
    }, [gender, weight, height, age, activity]);

    const activityLevels = [
        { label: 'Sedentary', value: '1.2', desc: 'Little or no exercise' },
        { label: 'Light', value: '1.375', desc: '1-3 days/week' },
        { label: 'Moderate', value: '1.55', desc: '3-5 days/week' },
        { label: 'Heavy', value: '1.725', desc: '6-7 days/week' },
        { label: 'Extra Heavy', value: '1.9', desc: 'Physical job or 2x training' }
    ];

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Gender & Age */}
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
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Age (Years)</label>
                                <input
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    placeholder="25"
                                />
                            </div>
                        </div>

                        {/* Weight & Height */}
                        <div className="space-y-8">
                            <div>
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Weight (kg)</label>
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    placeholder="70"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Height (cm)</label>
                                <input
                                    type="number"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white outline-none font-black text-xl text-slate-800 transition-all shadow-sm"
                                    placeholder="170"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Activity Level */}
                    <div>
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-6">Activity Level</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                            {activityLevels.map((lvl) => (
                                <button
                                    key={lvl.value}
                                    onClick={() => setActivity(lvl.value)}
                                    className={`p-4 rounded-xl text-left transition-all border-2 group ${
                                        activity === lvl.value
                                        ? 'bg-blue-50 border-blue-500 ring-4 ring-blue-50'
                                        : 'bg-white border-slate-100 hover:border-blue-200'
                                    }`}
                                >
                                    <p className={`text-xs font-black uppercase tracking-tighter ${activity === lvl.value ? 'text-blue-600' : 'text-slate-400'}`}>
                                        {lvl.label}
                                    </p>
                                    <p className="text-[10px] text-slate-500 mt-1 font-bold leading-tight opacity-60">
                                        {lvl.desc}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Results Section */}
                    {results && (
                        <div className="pt-10 border-t border-slate-100 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-blue-200 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                        <span className="text-8xl font-black">CAL</span>
                                    </div>
                                    <h3 className="text-xs font-black uppercase tracking-widest mb-4 opacity-80">Daily Maintenance (TDEE)</h3>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-7xl font-black tracking-tighter">
                                            {results.tdee.toLocaleString()}
                                        </span>
                                        <span className="text-xl font-black opacity-60">kcal/day</span>
                                    </div>
                                    <p className="mt-6 text-sm font-bold opacity-80 leading-relaxed max-w-sm">
                                        This is the total number of calories you burn daily including exercise. Stay at this level to maintain your weight.
                                    </p>
                                </div>

                                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 text-center">Basal Metabolic Rate (BMR)</p>
                                    <p className="text-3xl font-black text-slate-800 text-center">{results.bmr.toLocaleString()} <span className="text-sm font-bold opacity-40">kcal</span></p>
                                    <p className="text-[10px] text-slate-400 text-center mt-3 font-bold px-4">Calories burned at complete rest</p>
                                </div>
                            </div>

                            {/* Macro Goals */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 group">
                                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Protein Goals</p>
                                    <p className="text-2xl font-black text-slate-800">{results.macros.protein}g <span className="text-xs opacity-40">/day</span></p>
                                    <div className="w-full h-1 bg-emerald-100 rounded-full mt-3">
                                        <div className="w-[30%] h-full bg-emerald-500 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100">
                                    <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-1">Carb Intake</p>
                                    <p className="text-2xl font-black text-slate-800">{results.macros.carbs}g <span className="text-xs opacity-40">/day</span></p>
                                    <div className="w-full h-1 bg-amber-100 rounded-full mt-3">
                                        <div className="w-[40%] h-full bg-amber-500 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="p-6 bg-rose-50 rounded-3xl border border-rose-100">
                                    <p className="text-[10px] font-black text-rose-600 uppercase tracking-widest mb-1">Healthy Fats</p>
                                    <p className="text-2xl font-black text-slate-800">{results.macros.fats}g <span className="text-xs opacity-40">/day</span></p>
                                    <div className="w-full h-1 bg-rose-100 rounded-full mt-3">
                                        <div className="w-[30%] h-full bg-rose-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Weight Goals Table */}
                            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Weight Management Plan</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-slate-200/50">
                                        <span className="text-sm font-bold text-slate-600">Weight Loss (0.5kg/week)</span>
                                        <span className="font-black text-blue-600">{results.weightLoss} kcal</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-slate-200/50">
                                        <span className="text-sm font-bold text-slate-600">Weight Gain (0.5kg/week)</span>
                                        <span className="font-black text-indigo-600">{results.weightGain} kcal</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-slate-200/50">
                                        <span className="text-sm font-bold text-slate-600">Mild Loss (0.25kg/week)</span>
                                        <span className="font-black text-emerald-600">{results.mildWeightLoss} kcal</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-slate-200/50">
                                        <span className="text-sm font-bold text-slate-600">Extreme Loss (1kg/week)</span>
                                        <span className="font-black text-rose-600">{results.extremeWeightLoss} kcal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CalorieCalculatorUI;
