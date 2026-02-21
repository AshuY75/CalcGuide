import { useState, useRef } from 'react'
import SEOSection from '../SEOSection'

export default function CreditCardRewardsUI() {
    const [rewardPoints, setRewardPoints] = useState('50000')
    const [pointValue, setPointValue] = useState('0.25') // Rs 0.25 per point
    const [monthlySpend, setMonthlySpend] = useState('40000')
    const [rewardRate, setRewardRate] = useState('2') // points per 100 spent
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateValue = () => {
        const points = parseFloat(rewardPoints) || 0
        const valPerPoint = parseFloat(pointValue) || 0
        const totalValue = points * valPerPoint

        const monthlyEarnings = (parseFloat(monthlySpend) / 100) * (parseFloat(rewardRate) || 0)
        const annualEarningsVal = monthlyEarnings * 12 * valPerPoint

        setResult({
            totalValue: Math.round(totalValue),
            monthlyPoints: Math.round(monthlyEarnings),
            annualValue: Math.round(annualEarningsVal),
            realRewardRate: ((annualEarningsVal / (parseFloat(monthlySpend) * 12)) * 100).toFixed(2)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "What is a 'Point Devaluation'?", answer: "Devaluation occurs when a bank increases the number of points required for the same reward (e.g., a flight that cost 10k miles now costs 15k). This reduces the 'Rupee Value' of each point you own." },
        { question: "Should I redeem points for cash or vouchers?", answer: "Usually, travel (flights/hotels) gives the highest value (Rs 0.50 - 1.00 per point). Vouchers typically give Rs 0.25 - 0.35, and cash back is often the lowest at Rs 0.20." },
        { question: "When should I redeem my reward points?", answer: "The best strategy is 'Earn and Burn'. Because points don't earn interest and are frequently devalued by banks, it is better to redeem them as soon as you have enough for a high-value reward." }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Total Points Balance</label>
                        <input type="number" value={rewardPoints} onChange={(e) => setRewardPoints(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Value per Point (₹)</label>
                        <input type="number" step="0.05" value={pointValue} onChange={(e) => setPointValue(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        <p className="text-[10px] text-slate-500 mt-1">Typical values: 0.25 (Vouchers), 0.50 (Hotels), 1.00 (Business Class)</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Monthly Spend (₹)</label>
                            <input type="number" value={monthlySpend} onChange={(e) => setMonthlySpend(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Reward Rate (Pts/100)</label>
                            <input type="number" value={rewardRate} onChange={(e) => setRewardRate(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm" />
                        </div>
                    </div>

                    <button onClick={calculateValue} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">
                        Calculate Points Value
                    </button>
                </div>

                <div role="region" aria-live="polite" className="bg-slate-50 rounded-2xl p-6 border-2 border-dashed border-slate-200 flex flex-col justify-center">
                    {result ? (
                        <div ref={resultRef} className="space-y-6 animate-in fade-in duration-500">
                            <div className="text-center">
                                <p className="text-[10px] font-bold text-slate-500 uppercase">Rupee Value of Balance</p>
                                <p className="text-5xl font-black text-slate-900">₹{result.totalValue.toLocaleString('en-IN')}</p>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex justify-between items-center">
                                <div>
                                    <p className="text-[10px] font-bold text-blue-500 uppercase">Real Savings Rate</p>
                                    <p className="text-2xl font-black text-slate-800">{result.realRewardRate}%</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase">Annual Savings</p>
                                    <p className="text-xl font-bold text-green-600">₹{result.annualValue.toLocaleString('en-IN')}</p>
                                </div>
                            </div>

                            <div className="bg-blue-600 rounded-xl p-4 text-white text-center">
                                <p className="text-xs">You earn <span className="font-bold">{result.monthlyPoints} points</span> every month based on your current spending.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center space-y-4 py-12">
                            <span className="text-5xl">💳</span>
                            <p className="text-slate-500 font-medium">Find out how much your reward points are actually worth</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-12">
                <SEOSection title="Credit Card Rewards Strategy" faq={faqData} />
            </div>
        </div>
    )
}
