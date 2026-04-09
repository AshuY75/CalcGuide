import React, { useState, useEffect } from 'react';

const CarInsuranceUI = () => {
    const [price, setPrice] = useState('1000000');
    const [carAge, setCarAge] = useState('1');
    const [engineCC, setEngineCC] = useState('1200');
    const [ncb, setNcb] = useState('0');

    const [results, setResults] = useState(null);

    const calculatePremium = () => {
        const p = parseFloat(price);
        const age = parseInt(carAge);
        const cc = parseInt(engineCC);
        const ncbPct = parseInt(ncb) / 100;

        // 1. Calculate IDV (Insured Declared Value)
        let depRate = 0.05; // New car
        if (age === 1) depRate = 0.15;
        if (age === 2) depRate = 0.20;
        if (age === 3) depRate = 0.30;
        if (age === 4) depRate = 0.40;
        if (age >= 5) depRate = 0.50;

        const idv = p * (1 - depRate);

        // 2. Own Damage (OD) Premium (~2.5% of IDV)
        let odBase = idv * 0.025;
        let odPremium = odBase * (1 - ncbPct);

        // 3. Third Party (TP) Premium (IRDAI 2024-25 approx slabs)
        let tpPremium = 2094; // < 1000cc
        if (cc >= 1000 && cc <= 1500) tpPremium = 3416;
        if (cc > 1500) tpPremium = 7897;

        // 4. GST 18%
        const finalPremium = (odPremium + tpPremium) * 1.18;

        setResults({
            idv: Math.round(idv),
            od: Math.round(odPremium),
            tp: Math.round(tpPremium),
            total: Math.round(finalPremium)
        });
    };

    useEffect(() => {
        calculatePremium();
    }, [price, carAge, engineCC, ncb]);

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-6 sm:p-8">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Ex-Showroom Price (₹)</label>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Car Age (Years)</label>
                            <select
                                value={carAge}
                                onChange={(e) => setCarAge(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                            >
                                <option value="0">New / Under 6 Months</option>
                                <option value="1">1 Year</option>
                                <option value="2">2 Years</option>
                                <option value="3">3 Years</option>
                                <option value="4">4 Years</option>
                                <option value="5">5+ Years</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Engine CC</label>
                            <select
                                value={engineCC}
                                onChange={(e) => setEngineCC(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                            >
                                <option value="999">Below 1000 cc</option>
                                <option value="1200">1000cc - 1500cc</option>
                                <option value="1800">Above 1500 cc</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">No Claim Bonus (NCB) %</label>
                            <select
                                value={ncb}
                                onChange={(e) => setNcb(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                            >
                                <option value="0">0% (New/Claim made)</option>
                                <option value="20">20% (1 clean year)</option>
                                <option value="25">25% (2 clean years)</option>
                                <option value="35">35% (3 clean years)</option>
                                <option value="45">45% (4 clean years)</option>
                                <option value="50">50% (Max NCB)</option>
                            </select>
                        </div>
                    </div>

                    {results && (
                        <div className="mt-8 space-y-4">
                            <div className="p-4 bg-slate-900 rounded-2xl text-center text-white">
                                <p className="text-xs uppercase font-black tracking-widest text-slate-500 mb-1">Insured Declared Value (IDV)</p>
                                <p className="text-2xl font-black">₹{results.idv.toLocaleString('en-IN')}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
                                    <p className="text-[10px] uppercase font-bold text-slate-500">Own Damage</p>
                                    <p className="text-lg font-bold text-slate-700">₹{results.od.toLocaleString('en-IN')}</p>
                                </div>
                                <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
                                    <p className="text-[10px] uppercase font-bold text-slate-500">Third Party</p>
                                    <p className="text-lg font-bold text-slate-700">₹{results.tp.toLocaleString('en-IN')}</p>
                                </div>
                            </div>

                            <div className="p-6 bg-blue-600 rounded-2xl text-white text-center shadow-lg shadow-blue-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8"></div>
                                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80 mb-1">Estimated Total Premium</p>
                                <p className="text-3xl font-black">₹{results.total.toLocaleString('en-IN')}</p>
                                <p className="text-[10px] mt-2 opacity-60">*Incl. 18% GST</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CarInsuranceUI;
