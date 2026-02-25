import React, { useState, useMemo } from 'react';

const PT_SLABS = {
    "Maharashtra": [
        { upTo: 7500, male: 0, female: 0 },
        { upTo: 10000, male: 175, female: 0 },
        { upTo: Infinity, male: 200, female: 200, notes: "₹300 in Feb" }
    ],
    "Karnataka": [
        { upTo: 25000, rate: 0 },
        { upTo: Infinity, rate: 200 }
    ],
    "Tamil Nadu": [
        { upTo: 21000, rate: 0 },
        { upTo: 30000, rate: 315 },
        { upTo: 45000, rate: 690 },
        { upTo: 60000, rate: 1025 },
        { upTo: 75000, rate: 1325 },
        { upTo: Infinity, rate: 1550 },
        { isHalfYearly: true }
    ],
    "West Bengal": [
        { upTo: 10000, rate: 0 },
        { upTo: 15000, rate: 110 },
        { upTo: 25000, rate: 130 },
        { upTo: 40000, rate: 150 },
        { upTo: Infinity, rate: 200 }
    ],
    "Gujarat": [
        { upTo: 12000, rate: 0 },
        { upTo: Infinity, rate: 200 }
    ],
    "Andhra Pradesh": [
        { upTo: 15000, rate: 0 },
        { upTo: 20000, rate: 150 },
        { upTo: Infinity, rate: 200 }
    ],
    "Telangana": [
        { upTo: 15000, rate: 0 },
        { upTo: 20000, rate: 150 },
        { upTo: Infinity, rate: 200 }
    ],
    "Madhya Pradesh": [
        { upTo: 18750, rate: 0 },
        { upTo: 25000, rate: 125 },
        { upTo: 33333, rate: 167 },
        { upTo: Infinity, rate: 208 }
    ],
    "Kerala": [
        { upTo: 11999, rate: 0 },
        { upTo: 17999, rate: 120 },
        { upTo: 29999, rate: 180 },
        { upTo: 44999, rate: 300 },
        { upTo: 59999, rate: 450 },
        { upTo: 74999, rate: 600 },
        { upTo: 99999, rate: 750 },
        { upTo: 124999, rate: 1000 },
        { upTo: Infinity, rate: 1250 },
        { isHalfYearly: true }
    ]
};

export default function ProfessionalTaxCalculatorUI() {
    const [state, setState] = useState("Maharashtra");
    const [salary, setSalary] = useState(50000);
    const [gender, setGender] = useState("male");

    const result = useMemo(() => {
        const slabs = PT_SLABS[state];
        if (!slabs) return { monthly: 0, yearly: 0 };

        let monthly = 0;

        if (state === "Maharashtra") {
            const slab = slabs.find(s => salary <= s.upTo) || slabs[slabs.length - 1];
            monthly = gender === "female" ? slab.female : slab.male;
        } else {
            const slab = slabs.find(s => salary <= s.upTo) || slabs[slabs.length - 1];
            monthly = slab.rate || 0;
        }

        // Special handling for Half-Yearly states in result display
        const isHalfYearly = slabs.some(s => s.isHalfYearly);

        return {
            monthly: isHalfYearly ? (monthly / 6).toFixed(0) : monthly,
            yearly: isHalfYearly ? monthly * 2 : monthly * 12 + (state === "Maharashtra" && salary > 10000 ? 100 : 0),
            isHalfYearly
        };
    }, [state, salary, gender]);

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Inputs */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2 italic">Select State</label>
                            <select
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-blue-500 transition shadow-sm outline-none"
                            >
                                {Object.keys(PT_SLABS).map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2 italic">Monthly Gross Salary (₹)</label>
                            <input
                                type="number"
                                value={salary}
                                onChange={(e) => setSalary(Number(e.target.value))}
                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-xl font-bold focus:border-blue-500 transition shadow-sm outline-none"
                            />
                            <input
                                type="range"
                                min="0"
                                max="200000"
                                step="1000"
                                value={salary}
                                onChange={(e) => setSalary(Number(e.target.value))}
                                className="w-full mt-4 accent-blue-600"
                            />
                        </div>

                        {state === "Maharashtra" && (
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 italic">Gender</label>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setGender("male")}
                                        className={`flex-1 py-3 rounded-xl font-bold transition ${gender === 'male' ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-100 text-slate-600'}`}
                                    >
                                        Male
                                    </button>
                                    <button
                                        onClick={() => setGender("female")}
                                        className={`flex-1 py-3 rounded-xl font-bold transition ${gender === 'female' ? 'bg-pink-600 text-white shadow-lg' : 'bg-slate-100 text-slate-600'}`}
                                    >
                                        Female
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Result Card */}
                    <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="text-8xl font-black">₹</span>
                        </div>
                        <h3 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">Estimated Professional Tax</h3>

                        <div className="space-y-6">
                            <div>
                                <p className="text-4xl font-black text-white">₹{result.monthly}</p>
                                <p className="text-slate-400 text-sm mt-1">Per Month deduction</p>
                            </div>
                            <div className="pt-6 border-t border-slate-800">
                                <p className="text-2xl font-bold text-blue-400">₹{result.yearly}</p>
                                <p className="text-slate-400 text-sm mt-1">Total Yearly PT</p>
                            </div>
                        </div>

                        <div className="mt-8 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                            <p className="text-xs text-slate-300 leading-relaxed italic">
                                *PT is a deductible expense from your Gross Salary under Section 16(iii), effectively reducing your taxable income.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Slabs Display */}
                <div className="mt-12">
                    <h4 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                        <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
                        {state} PT Slabs
                    </h4>
                    <div className="overflow-x-auto border border-slate-100 rounded-xl">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 text-slate-600 font-bold">
                                <tr>
                                    <th className="px-4 py-3">Monthly Salary Range</th>
                                    <th className="px-4 py-3">PT Rate (Monthly)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {PT_SLABS[state].filter(s => s.upTo !== undefined).map((s, idx) => (
                                    <tr key={idx} className={salary <= s.upTo && (idx === 0 || salary > PT_SLABS[state][idx - 1].upTo) ? "bg-blue-50/50 font-bold text-blue-700" : ""}>
                                        <td className="px-4 py-3">
                                            {idx === 0 ? `Up to ₹${s.upTo}` : s.upTo === Infinity ? `Above ₹${PT_SLABS[state][idx - 1].upTo}` : `₹${PT_SLABS[state][idx - 1].upTo + 1} to ₹${s.upTo}`}
                                        </td>
                                        <td className="px-4 py-3">
                                            {state === "Maharashtra" ? `₹${s.male} (M) / ₹${s.female} (F)` : `₹${s.rate}`}
                                            {s.notes && <span className="text-[10px] ml-2 opacity-60">({s.notes})</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {PT_SLABS[state].some(s => s.isHalfYearly) && (
                        <p className="mt-2 text-xs text-slate-500 italic">Note: {state} collects Professional Tax on a half-yearly basis. Monthly values are estimated.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
