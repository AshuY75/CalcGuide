import { useState, useRef } from 'react'
import SEOSection from '../SEOSection'

export default function ElectricityBillCalculatorUI() {
    const [units, setUnits] = useState('250')
    const [state, setState] = useState('Delhi')
    const [phase, setPhase] = useState('Single') // Single or Three
    const [load, setLoad] = useState('2') // kW
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const stateSlabs = {
        'Delhi': [
            { limit: 200, rate: 3.00 },
            { limit: 400, rate: 4.50 },
            { limit: 800, rate: 6.50 },
            { limit: 1200, rate: 7.00 },
            { limit: Infinity, rate: 8.00 }
        ],
        'Maharashtra': [
            { limit: 100, rate: 4.41 },
            { limit: 300, rate: 9.64 },
            { limit: 500, rate: 13.61 },
            { limit: Infinity, rate: 15.57 }
        ],
        'Karnataka': [
            { limit: 100, rate: 4.75 },
            { limit: Infinity, rate: 7.00 }
        ],
        'Uttar Pradesh': [
            { limit: 150, rate: 5.50 },
            { limit: 300, rate: 6.00 },
            { limit: 500, rate: 6.50 },
            { limit: Infinity, rate: 7.00 }
        ]
    }

    const calculateBill = () => {
        let remainingUnits = parseFloat(units) || 0
        let totalEnergyCharge = 0
        let breakdown = []

        const slabs = stateSlabs[state]
        let previousLimit = 0

        for (const slab of slabs) {
            const slabSize = slab.limit - previousLimit
            const unitsInSlab = Math.min(remainingUnits, slabSize)

            if (unitsInSlab > 0) {
                const charge = unitsInSlab * slab.rate
                totalEnergyCharge += charge
                breakdown.push({
                    range: `${previousLimit + 1} - ${slab.limit === Infinity ? 'Above' : slab.limit}`,
                    units: Math.round(unitsInSlab),
                    rate: slab.rate.toFixed(2),
                    charge: Math.round(charge)
                })
                remainingUnits -= unitsInSlab
            }
            if (remainingUnits <= 0) break
            previousLimit = slab.limit
        }

        const fixedCharge = (parseFloat(load) || 1) * (state === 'Delhi' ? 20 : 50)
        const duty = totalEnergyCharge * 0.05 // Approx 5% tax/duty
        const total = totalEnergyCharge + fixedCharge + duty

        setResult({
            energyCharge: Math.round(totalEnergyCharge),
            fixedCharge: Math.round(fixedCharge),
            duty: Math.round(duty),
            total: Math.round(total),
            breakdown
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "How are electricity slabs calculated?", answer: "Electricity companies use a progressive slab system. For example, if you consume 250 units and the first slab is 100 units, those 100 units are charged at a lower rate, and the remaining 150 are charged at the next higher rate." },
        { question: "What are fixed charges in a bill?", answer: "Fixed charges are the base cost of maintaining the connection and infrastructure, usually calculated based on your sanctioned load (kW)." },
        { question: "How can I reduce my electricity bill?", answer: "Reducing consumption to stay within lower slabs is the most effective way. Switching to LED bulbs, using 5-star ACs, and taking advantage of solar energy can significantly lower your costs." }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Select Your State</label>
                        <select value={state} onChange={(e) => setState(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500">
                            {Object.keys(stateSlabs).map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Monthly Units Consumed (kWh)</label>
                        <input type="number" value={units} onChange={(e) => setUnits(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 text-lg" placeholder="e.g. 250" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Load (kW)</label>
                            <input type="number" value={load} onChange={(e) => setLoad(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Phase</label>
                            <select value={phase} onChange={(e) => setPhase(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm">
                                <option value="Single">Single Phase</option>
                                <option value="Three">Three Phase</option>
                            </select>
                        </div>
                    </div>

                    <button onClick={calculateBill} className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-4 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">
                        Calculate Bill Amount
                    </button>
                </div>

                <div role="region" aria-live="polite" className="bg-slate-50 rounded-2xl p-6 border-2 border-dashed border-slate-200 flex flex-col justify-center">
                    {result ? (
                        <div ref={resultRef} className="space-y-6 animate-in fade-in duration-500">
                            <div className="text-center">
                                <p className="text-sm font-bold text-slate-500 uppercase">Estimated Monthly Bill</p>
                                <p className="text-5xl font-black text-slate-900">₹{result.total.toLocaleString('en-IN')}</p>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-slate-200">
                                <h4 className="text-xs font-black text-slate-400 uppercase mb-3 tracking-widest">Slab Breakdown</h4>
                                <div className="space-y-2">
                                    {result.breakdown.map((b, i) => (
                                        <div key={i} className="flex justify-between text-sm">
                                            <span className="text-slate-600">{b.range} units</span>
                                            <span className="font-medium text-slate-900">₹{b.charge} (@₹{b.rate})</span>
                                        </div>
                                    ))}
                                </div>
                                <hr className="my-3 border-slate-100" />
                                <div className="space-y-2 text-xs font-medium text-slate-500">
                                    <div className="flex justify-between">
                                        <span>Fixed Charges</span>
                                        <span>₹{result.fixedCharge}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Taxes & Duties (Approx)</span>
                                        <span>₹{result.duty}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center space-y-4 py-12">
                            <span className="text-5xl">⚡</span>
                            <p className="text-slate-500 font-medium">Enter your units to see slab-wise breakdown</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-12">
                <SEOSection title="Understanding Your Electricity Bill" faq={faqData} />
            </div>
        </div>
    )
}
