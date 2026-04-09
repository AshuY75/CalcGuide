import React, { useState, useEffect } from 'react';

const PregnancyCalculatorUI = () => {
    const [lmpDate, setLmpDate] = useState(new Date().toISOString().split('T')[0]);
    const [cycleLength, setCycleLength] = useState(28);
    const [results, setResults] = useState(null);

    const calculateDueDate = () => {
        const lmp = new Date(lmpDate);
        if (isNaN(lmp.getTime())) return;

        // Standard 40 weeks = 280 days
        // Adjustment for cycle length: (cycleLength - 28)
        const adjustmentDays = cycleLength - 28;
        const totalDays = 280 + adjustmentDays;

        const dueDay = new Date(lmp);
        dueDay.setDate(dueDay.getDate() + totalDays);

        const today = new Date();
        const diffMs = today - lmp;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const currentWeeks = Math.floor(diffDays / 7);
        const currentDays = diffDays % 7;

        let trimester = '1st';
        if (currentWeeks >= 27) trimester = '3rd';
        else if (currentWeeks >= 13) trimester = '2nd';

        const daysRemaining = Math.floor((dueDay - today) / (1000 * 60 * 60 * 24));
        const progressPercent = Math.min(100, Math.max(0, (diffDays / totalDays) * 100));

        setResults({
            dueDate: dueDay.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
            weeks: currentWeeks,
            days: currentDays,
            trimester,
            daysRemaining: Math.max(0, daysRemaining),
            progress: progressPercent.toFixed(1),
            conceptionDate: new Date(lmp.getTime() + (14 + adjustmentDays) * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
        });
    };

    useEffect(() => {
        calculateDueDate();
    }, [lmpDate, cycleLength]);

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
                <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* LMP Date */}
                        <div className="space-y-4">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4 text-center md:text-left">First Day of Last Period (LMP)</label>
                            <input
                                type="date"
                                value={lmpDate}
                                onChange={(e) => setLmpDate(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-rose-500 focus:bg-white outline-none font-black text-xl text-slate-800 transition-all text-center md:text-left"
                            />
                        </div>

                        {/* Average Cycle Length */}
                        <div className="space-y-4">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4 text-center md:text-left">Avg Cycle Length (Days)</label>
                            <div className="flex items-center gap-4 px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl">
                                <button 
                                    onClick={() => setCycleLength(prev => Math.max(21, prev - 1))}
                                    className="p-2 hover:bg-slate-200 rounded-lg transition-colors text-rose-600"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                                    </svg>
                                </button>
                                <span className="flex-1 text-center font-black text-2xl text-slate-800">{cycleLength}</span>
                                <button 
                                    onClick={() => setCycleLength(prev => Math.min(45, prev + 1))}
                                    className="p-2 hover:bg-slate-200 rounded-lg transition-colors text-rose-600"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {results && (
                        <div className="pt-10 border-t border-slate-100 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {/* Primary Result: Due Date */}
                            <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-rose-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                    <span className="text-8xl font-black">BABY</span>
                                </div>
                                <h3 className="text-xs font-black uppercase tracking-widest mb-4 opacity-80">Estimated Due Date</h3>
                                <div className="flex flex-col sm:flex-row items-baseline gap-2">
                                    <span className="text-5xl sm:text-7xl font-black tracking-tighter">
                                        {results.dueDate}
                                    </span>
                                </div>
                                <div className="mt-8 flex flex-wrap gap-4">
                                    <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-black flex items-center gap-2">
                                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                        {results.daysRemaining} Days to Go
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-black">
                                        {results.trimester} Trimester
                                    </div>
                                </div>
                                
                                {/* Progress Bar */}
                                <div className="mt-10 space-y-3">
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest opacity-60">
                                        <span>Journey Progress</span>
                                        <span>{results.progress}%</span>
                                    </div>
                                    <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-white transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                                            style={{ width: `${results.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Current Status */}
                                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col justify-center text-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">You Are Currently</p>
                                    <div className="flex justify-center items-baseline gap-2">
                                        <span className="text-6xl font-black text-slate-800 tracking-tighter">{results.weeks}</span>
                                        <span className="text-xl font-black text-slate-400">Weeks</span>
                                        <span className="text-4xl font-black text-slate-800 tracking-tighter ml-2">{results.days}</span>
                                        <span className="text-xl font-black text-slate-400">Days</span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-6 font-bold leading-relaxed px-4">
                                        Pregnancy is clinically measured from the first day of your LMP, making you about 40 weeks pregnant at birth.
                                    </p>
                                </div>

                                {/* Milestones */}
                                <div className="bg-rose-50 p-8 rounded-[2.5rem] border border-rose-100">
                                    <h4 className="text-[10px] font-black text-rose-600 uppercase tracking-widest mb-6 text-center">Key Milestones</h4>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-3 border-b border-rose-200/50">
                                            <span className="text-sm font-bold text-slate-600 text-left">Estimated Conception</span>
                                            <span className="font-black text-rose-700">{results.conceptionDate}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-rose-200/50">
                                            <span className="text-sm font-bold text-slate-600 text-left">First Heartbeat (approx)</span>
                                            <span className="font-black text-rose-700">Week 6</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3">
                                            <span className="text-sm font-bold text-slate-600 text-left">Organ Formation</span>
                                            <span className="font-black text-rose-700">Weeks 3 - 10</span>
                                        </div>
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

export default PregnancyCalculatorUI;
