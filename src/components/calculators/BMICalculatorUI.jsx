import React, { useState } from 'react';

const BMICalculatorUI = () => {
    const [weight, setWeight] = useState('65');
    const [height, setHeight] = useState('170');
    const [unitType, setUnitType] = useState('metric'); // metric or imperial
    const [feet, setFeet] = useState('5');
    const [inches, setInches] = useState('7');

    const calculateBMI = () => {
        let h_meters = 0;
        let w_kg = parseFloat(weight);

        if (unitType === 'metric') {
            h_meters = parseFloat(height) / 100;
        } else {
            const totalInches = (parseInt(feet) * 12) + parseInt(inches);
            h_meters = totalInches * 0.0254;
        }

        if (!h_meters || !w_kg) return null;

        const bmi = w_kg / (h_meters * h_meters);
        return bmi.toFixed(1);
    };

    const bmiValue = calculateBMI();

    const getCategory = (bmi) => {
        if (!bmi) return null;
        const val = parseFloat(bmi);
        
        // Asian/Indian BMI Standards (Ministry of Health India)
        if (val < 18.5) return { 
            label: 'Underweight', 
            color: 'text-blue-600', 
            bg: 'bg-blue-50', 
            border: 'border-blue-200',
            insight: 'Increased risk of nutritional deficiency. Focus on a balanced diet with proper caloric intake.'
        };
        if (val < 23.0) return { 
            label: 'Normal Weight', 
            color: 'text-green-600', 
            bg: 'bg-green-50', 
            border: 'border-green-200', 
            insight: 'Great! You are in the healthy range for the Indian population. Maintain this with regular activity.' 
        };
        if (val < 25.0) return { 
            label: 'Overweight', 
            color: 'text-orange-600', 
            bg: 'bg-orange-50', 
            border: 'border-orange-200', 
            insight: 'Moderate Risk: Indians have higher body fat % at this BMI. Consider reducing sugar and increasing cardio.' 
        };
        return { 
            label: 'Obese', 
            color: 'text-red-600', 
            bg: 'bg-red-50', 
            border: 'border-red-200', 
            insight: 'High Risk: Significant risk of Diabetes and Hypertension. Consult a doctor for a structured weight loss plan.' 
        };
    };

    const category = getCategory(bmiValue);

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-6 sm:p-10">
                <div className="space-y-8">
                    {/* Unit Toggle */}
                    <div className="flex bg-slate-100 p-1.5 rounded-2xl w-fit mx-auto sm:mx-0">
                        <button
                            onClick={() => setUnitType('metric')}
                            className={`py-2 px-6 rounded-xl text-sm font-bold transition-all ${unitType === 'metric' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Metric
                        </button>
                        <button
                            onClick={() => setUnitType('imperial')}
                            className={`py-2 px-6 rounded-xl text-sm font-bold transition-all ${unitType === 'imperial' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Imperial
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Height Input */}
                        <div className="space-y-3">
                            <label className="text-sm font-black text-slate-700 flex items-center justify-between uppercase tracking-wider">
                                <span>📏 Height</span>
                                <span className="text-[10px] text-slate-400 font-normal normal-case">Indian Avg: 165-175cm</span>
                            </label>
                            {unitType === 'metric' ? (
                                <div className="relative group">
                                    <input
                                        type="number"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold text-lg"
                                        placeholder="170"
                                    />
                                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">cm</span>
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative">
                                        <input
                                            type="number"
                                            value={feet}
                                            onChange={(e) => setFeet(e.target.value)}
                                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold text-lg"
                                            placeholder="5"
                                        />
                                        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">ft</span>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            value={inches}
                                            onChange={(e) => setInches(e.target.value)}
                                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold text-lg"
                                            placeholder="7"
                                        />
                                        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">in</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Weight Input */}
                        <div className="space-y-3">
                            <label className="text-sm font-black text-slate-700 flex items-center uppercase tracking-wider">
                                ⚖️ Weight
                            </label>
                            <div className="relative group">
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold text-lg"
                                    placeholder="65"
                                />
                                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">{unitType === 'metric' ? 'kg' : 'lb'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Result Display */}
                    {bmiValue > 0 && (
                        <div className={`p-8 rounded-3xl border ${category.border} ${category.bg} transition-all animate-in zoom-in duration-500`}>
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 text-center md:text-left">
                                <div className="space-y-1">
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">Body Mass Index</p>
                                    <div className="flex items-baseline gap-2 justify-center md:justify-start">
                                        <span className={`text-7xl font-black ${category.color} tracking-tighter`}>{bmiValue}</span>
                                        <span className="text-xl text-slate-400 font-bold">kg/m²</span>
                                    </div>
                                </div>
                                <div className="space-y-3 md:text-right">
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-[0.1em]">Current Status</p>
                                    <div className={`inline-block px-6 py-2 rounded-full font-black text-lg ${category.color} bg-white border ${category.border} shadow-sm uppercase tracking-wider`}>
                                        {category.label}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-5 bg-white/60 rounded-2xl border border-white shadow-inner">
                                <p className="text-slate-800 text-lg font-medium leading-relaxed">
                                    <span className="text-2xl mr-2">💡</span>
                                    <span className="font-black text-slate-900">Insight:</span> {category.insight}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Scale Visualization */}
                    <div className="space-y-4 pt-6">
                        <div className="flex justify-between text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">
                            <span>Under</span>
                            <span>Normal (18.5-22.9)</span>
                            <span>Obese (25+)</span>
                        </div>
                        <div className="h-6 w-full bg-slate-100 rounded-full overflow-hidden flex p-1 shadow-inner">
                            <div className="h-full bg-blue-400 rounded-l-full" style={{ width: '25%' }}></div>
                            <div className="h-full bg-green-500" style={{ width: '25%' }}></div>
                            <div className="h-full bg-orange-400" style={{ width: '15%' }}></div>
                            <div className="h-full bg-red-500 rounded-r-full" style={{ width: '35%' }}></div>
                        </div>
                        <p className="text-[10px] text-slate-400 text-center italic font-bold">
                            * Based on Ministry of Health & Family Welfare (MoHFW) India standards for Asian populations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BMICalculatorUI;
