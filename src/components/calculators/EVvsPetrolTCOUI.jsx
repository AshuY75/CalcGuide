import { useState, useRef } from 'react'
import SEOSection from '../SEOSection'

export default function EVvsPetrolTCOUI() {
    // Petrol Inputs
    const [petrolPrice, setPetrolPrice] = useState('1400000')
    const [petrolMileage, setPetrolMileage] = useState('15')
    const [fuelPrice, setFuelPrice] = useState('105')

    // EV Inputs
    const [evPrice, setEvPrice] = useState('1600000')
    const [evRange, setEvRange] = useState('300')
    const [evBatterySize, setEvBatterySize] = useState('40')
    const [electricityRate, setElectricityRate] = useState('8')

    // Common Inputs
    const [dailyKm, setDailyKm] = useState('40')
    const [years, setYears] = useState('10')

    const [result, setResult] = useState(null)
    const resultRef = useRef(null)

    const calculateTCO = () => {
        const totalKm = parseFloat(dailyKm) * 365 * parseFloat(years)

        // Petrol TCO
        const totalFuelLitres = totalKm / parseFloat(petrolMileage)
        const totalFuelCost = totalFuelLitres * parseFloat(fuelPrice)
        const petrolMaint = totalKm * 0.8 // 80 paise per km maintenance
        const totalPetrolTCO = parseFloat(petrolPrice) + totalFuelCost + petrolMaint

        // EV TCO
        const unitsPerCharge = parseFloat(evBatterySize)
        const fullChargeCost = unitsPerCharge * parseFloat(electricityRate)
        const costPerKmEV = fullChargeCost / parseFloat(evRange)
        const totalChargingCost = totalKm * costPerKmEV
        const evMaint = totalKm * 0.3 // 30 paise per km maintenance
        const totalEVTCO = parseFloat(evPrice) + totalChargingCost + evMaint

        const savings = totalPetrolTCO - totalEVTCO
        const breakevenKm = (parseFloat(evPrice) - parseFloat(petrolPrice)) / ((parseFloat(fuelPrice) / parseFloat(petrolMileage) + 0.8) - (costPerKmEV + 0.3))

        setResult({
            petrolTCO: Math.round(totalPetrolTCO),
            evTCO: Math.round(totalEVTCO),
            savings: Math.round(savings),
            petrolRunning: Math.round(totalFuelCost + petrolMaint),
            evRunning: Math.round(totalChargingCost + evMaint),
            breakevenKm: Math.round(breakevenKm),
            isEVBetter: totalEVTCO < totalPetrolTCO
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "When does an EV become cheaper than Petrol?", answer: "An EV usually becomes cheaper (Breakeven) once you have driven it for 30,000 to 50,000 km. The higher your daily running, the faster you recover the extra upfront cost of an EV." },
        { question: "What is the maintenance cost of an EV?", answer: "EVs have much fewer moving parts (no engine, no gearbox, no oil changes). Maintenance is typically 60-70% lower than a petrol car, mostly involving tire rotation and cabin filter changes." },
        { question: "How long does the battery last?", answer: "Modern EV batteries are designed to last 8-10 years or 1.5 Lakh km. Most manufacturers offer an 8-year warranty. Even after 8 years, the battery usually retains 70-80% of its capacity." }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <h4 className="font-black text-slate-800 text-xs uppercase mb-4 tracking-widest">Petrol Car</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-1">On-Road Price (₹)</label>
                                <input type="number" value={petrolPrice} onChange={(e) => setPetrolPrice(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 mb-1">Mileage (kmpl)</label>
                                <input type="number" value={petrolMileage} onChange={(e) => setPetrolMileage(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm" />
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <h4 className="font-black text-blue-800 text-xs uppercase mb-4 tracking-widest">Electric Vehicle (EV)</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-blue-500 mb-1">On-Road Price (₹)</label>
                                <input type="number" value={evPrice} onChange={(e) => setEvPrice(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-blue-500 mb-1">Real World Range (km)</label>
                                <input type="number" value={evRange} onChange={(e) => setEvRange(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Daily Running (km)</label>
                            <input type="number" value={dailyKm} onChange={(e) => setDailyKm(e.target.value)} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Ownership (Years)</label>
                            <input type="number" value={years} onChange={(e) => setYears(e.target.value)} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>

                    <button onClick={calculateTCO} className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">
                        Compare Total Cost
                    </button>
                </div>

                <div role="region" aria-live="polite" className="bg-slate-50 rounded-2xl p-6 border-2 border-dashed border-slate-200 flex flex-col justify-center">
                    {result ? (
                        <div ref={resultRef} className="space-y-6 animate-in fade-in duration-500">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                                {result.isEVBetter ? (
                                    <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-black px-3 py-1 rounded-bl-lg">EV SAVES MORE ✨</div>
                                ) : (
                                    <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-bl-lg">PETROL IS CHEAPER</div>
                                )}
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="text-center">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase">10-Year Petrol Cost</p>
                                        <p className="text-xl font-black text-slate-800">₹{(result.petrolTCO / 100000).toFixed(2)} Lakh</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[10px] font-bold text-blue-400 uppercase">10-Year EV Cost</p>
                                        <p className="text-xl font-black text-blue-900">₹{(result.evTCO / 100000).toFixed(2)} Lakh</p>
                                    </div>
                                </div>
                            </div>

                            <div className={`p-6 rounded-2xl text-center shadow-lg ${result.isEVBetter ? 'bg-green-600' : 'bg-red-600'} text-white`}>
                                <p className="text-sm font-medium mb-1">{result.isEVBetter ? 'You Save with EV' : 'Extra Cost for EV'}</p>
                                <p className="text-4xl font-black">₹{Math.abs(result.savings).toLocaleString('en-IN')}</p>
                            </div>

                            <div className="bg-slate-900 rounded-xl p-4 text-white text-center">
                                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Breakeven Distance</p>
                                <p className="text-lg font-bold">{result.breakevenKm.toLocaleString('en-IN')} Kilometers</p>
                                <p className="text-[10px] text-slate-500 mt-1">Distance after which EV savings cover the extra upfront price.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center space-y-4 py-12">
                            <span className="text-5xl">🚗</span>
                            <p className="text-slate-500 font-medium">Is the extra price of an EV worth it?</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-12">
                <SEOSection title="EV vs Petrol: The Math of Ownership" faq={faqData} />
            </div>
        </div>
    )
}
