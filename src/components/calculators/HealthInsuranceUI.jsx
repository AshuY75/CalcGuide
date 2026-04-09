import React, { useState, useEffect } from 'react';

const HealthInsuranceUI = () => {
    const [age, setAge] = useState('30');
    const [adults, setAdults] = useState('2');
    const [kids, setKids] = useState('0');
    const [cover, setCover] = useState('1000000'); // 10 Lakhs default
    const [city, setCity] = useState('tier1');

    const [estimatedPremium, setEstimatedPremium] = useState(0);

    const calculatePremium = () => {
        const oldestAge = parseInt(age);
        const sumInsured = parseFloat(cover);
        const numAdults = parseInt(adults);
        const numKids = parseInt(kids);

        // Base rate logic (approximate market average for 5L cover at age 30)
        // 5L Individual age 30 roughly 6-8k. 10L roughly 10-12k.
        let baseRate = (sumInsured / 100000) * 1200; // ~₹12,000 for 10L individual

        // Age Loading
        let ageMultiplier = 1;
        if (oldestAge > 45) ageMultiplier = 1.6;
        if (oldestAge > 60) ageMultiplier = 2.5;
        if (oldestAge > 70) ageMultiplier = 4.0;

        // Floater logic (2nd adult is ~50% of first, kids are ~30% of first)
        let memberMultiplier = 1;
        if (numAdults > 1) memberMultiplier += 0.5 * (numAdults - 1);
        if (numKids > 0) memberMultiplier += 0.3 * numKids;

        // City loading (Tier 1 is ~20% more expensive)
        let cityLoading = city === 'tier1' ? 1.2 : 1.0;

        const total = baseRate * ageMultiplier * memberMultiplier * cityLoading;
        setEstimatedPremium(Math.round(total));
    };

    useEffect(() => {
        calculatePremium();
    }, [age, adults, kids, cover, city]);

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-6 sm:p-8">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Age */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Age of Oldest Member</label>
                            <input
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                            />
                        </div>

                        {/* City Tier */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">City Category</label>
                            <select
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold appearance-none"
                            >
                                <option value="tier1">Tier 1 (Metro/Large Cities)</option>
                                <option value="tier2">Tier 2/3 (Other Cities)</option>
                            </select>
                        </div>

                        {/* Adults/Kids */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Adults</label>
                                <input
                                    type="number"
                                    value={adults}
                                    min="1"
                                    onChange={(e) => setAdults(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Children</label>
                                <input
                                    type="number"
                                    value={kids}
                                    min="0"
                                    onChange={(e) => setKids(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                                />
                            </div>
                        </div>

                        {/* Sum Insured */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Sum Insured (₹)</label>
                            <select
                                value={cover}
                                onChange={(e) => setCover(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                            >
                                <option value="500000">5 Lakhs</option>
                                <option value="1000000">10 Lakhs</option>
                                <option value="1500000">15 Lakhs</option>
                                <option value="2500000">25 Lakhs</option>
                                <option value="5000000">50 Lakhs (Recommended)</option>
                                <option value="10000000">1 Crore</option>
                            </select>
                        </div>
                    </div>

                    {/* Result Card */}
                    <div className="mt-8 p-6 bg-emerald-600 rounded-2xl text-white shadow-lg shadow-emerald-100 text-center">
                        <p className="text-xs font-black uppercase tracking-widest opacity-80 mb-1">Estimated Annual Premium</p>
                        <p className="text-4xl font-black">₹{estimatedPremium.toLocaleString('en-IN')}</p>
                        <p className="text-xs mt-3 font-medium opacity-70">~ ₹{Math.round(estimatedPremium / 12).toLocaleString('en-IN')} per month</p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-dotted border-slate-300">
                        <p className="text-[10px] text-slate-500 leading-relaxed italic">
                            *Estimated premium is an market average. Actual premium will vary based on pre-existing diseases, co-payment options, and specific insurer tariffs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthInsuranceUI;
