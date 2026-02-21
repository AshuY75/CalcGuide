import { useState, useRef } from 'react'
import SEOSection from '../SEOSection'

export default function SolarROICalculatorUI() {
    const [systemSize, setSystemSize] = useState('3') // kW
    const [costPerKW, setCostPerKW] = useState('60000') // Approx market rate
    const [monthlyUnits, setMonthlyUnits] = useState('400')
    const [avgUnitRate, setAvgUnitRate] = useState('8')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateSolar = () => {
        const size = parseFloat(systemSize) || 0
        const totalCost = size * (parseFloat(costPerKW) || 0)

        // PM Surya Ghar Subsidy (Approx rules)
        // 1kW: 30,000 | 2kW: 60,000 | 3kW+: 78,000
        let subsidy = 0
        if (size >= 3) subsidy = 78000
        else if (size >= 2) subsidy = 60000
        else if (size >= 1) subsidy = 30000

        const netCost = Math.max(0, totalCost - subsidy)

        // Estimated generation: 1kW produces ~120 units/month (Avg India)
        const monthlyGen = size * 120
        const unitsSaved = Math.min(monthlyGen, parseFloat(monthlyUnits) || 0)
        const monthlySavings = unitsSaved * (parseFloat(avgUnitRate) || 0)
        const annualSavings = monthlySavings * 12

        const paybackYears = netCost / annualSavings

        setResult({
            netCost: Math.round(netCost),
            subsidy: Math.round(subsidy),
            totalCost: Math.round(totalCost),
            monthlyGen: Math.round(monthlyGen),
            monthlySavings: Math.round(monthlySavings),
            annualSavings: Math.round(annualSavings),
            paybackYears: paybackYears.toFixed(1)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "How much subsidy can I get for solar?", answer: "Under the PM Surya Ghar: Muft Bijli Yojana, residential households get ₹30,000 per kW for the first 2 kW and ₹18,000 for the 3rd kW. The maximum subsidy is capped at ₹78,000 for systems 3kW and above." },
        { question: "What is the life of a solar panel?", answer: "Most modern solar panels come with a 25-year performance warranty. While efficiency drops slightly over time, they typically last 25-30 years." },
        { question: "Do I need a battery with my solar system?", answer: "For grid-connected (On-grid) systems common in cities, you don't need batteries. The excess power is sent back to the grid via net metering, which lowers your bill." }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">System Size (kW)</label>
                        <input type="number" value={systemSize} onChange={(e) => setSystemSize(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 text-lg" />
                        <p className="text-[10px] text-slate-500 mt-1">Average 3BHK needs 3-5kW</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Cost per kW (₹)</label>
                            <input type="number" value={costPerKW} onChange={(e) => setCostPerKW(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Current Unit Rate (₹)</label>
                            <input type="number" value={avgUnitRate} onChange={(e) => setAvgUnitRate(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Current Monthly Consumption (Units)</label>
                        <input type="number" value={monthlyUnits} onChange={(e) => setMonthlyUnits(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500" />
                    </div>

                    <button onClick={calculateSolar} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">
                        Calculate ROI & Subsidy
                    </button>
                </div>

                <div role="region" aria-live="polite" className="bg-slate-50 rounded-2xl p-6 border-2 border-dashed border-slate-200 flex flex-col justify-center">
                    {result ? (
                        <div ref={resultRef} className="space-y-6 animate-in fade-in duration-500">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase">Govt Subsidy</p>
                                    <p className="text-xl font-black text-green-600">₹{result.subsidy.toLocaleString('en-IN')}</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase">Your Net Cost</p>
                                    <p className="text-xl font-black text-slate-900">₹{result.netCost.toLocaleString('en-IN')}</p>
                                </div>
                            </div>

                            <div className="bg-green-600 text-white p-6 rounded-2xl text-center shadow-lg">
                                <p className="text-green-100 text-sm font-medium mb-1">Estimated Payback Period</p>
                                <p className="text-4xl font-black">{result.paybackYears} Years</p>
                                <p className="text-green-100 text-[10px] mt-2 italic">After payback, your electricity is practically free!</p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between text-sm py-2 border-b border-slate-200">
                                    <span className="text-slate-500">Monthly Generation</span>
                                    <span className="font-bold text-slate-800">~{result.monthlyGen} Units</span>
                                </div>
                                <div className="flex justify-between text-sm py-2 border-b border-slate-200">
                                    <span className="text-slate-500">Monthly Savings</span>
                                    <span className="font-bold text-slate-800">₹{result.monthlySavings.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between text-sm py-2">
                                    <span className="text-slate-500">Total Lifetime Savings (25y)</span>
                                    <span className="font-bold text-green-600">₹{(result.annualSavings * 25).toLocaleString('en-IN')}</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center space-y-4 py-12">
                            <span className="text-5xl">☀️</span>
                            <p className="text-slate-500 font-medium">See how much you can save with PM Surya Ghar Subsidy</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-12">
                <SEOSection title="Is Rooftop Solar worth it in 2025?" faq={faqData} />
            </div>
        </div>
    )
}
