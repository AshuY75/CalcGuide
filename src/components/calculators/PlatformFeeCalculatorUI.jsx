import { useState, useRef } from 'react'
import SEOSection from '../SEOSection'

export default function PlatformFeeCalculatorUI() {
    const [amount, setAmount] = useState('1000')
    const [platform, setPlatform] = useState('Upwork')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const platforms = {
        'Upwork': { feePercent: 10, fixedFee: 0, wireFee: 0.99 },
        'PayPal': { feePercent: 4.4, fixedFee: 0.30, conversionSpread: 2.5 }, // 2.5% spread is typical
        'Stripe': { feePercent: 4.3, fixedFee: 0, conversionSpread: 2.0 },
        'Fiverr': { feePercent: 20, fixedFee: 0, wireFee: 0 }
    }

    const calculateFees = () => {
        const val = parseFloat(amount) || 0
        const p = platforms[platform]

        const platformFee = (val * p.feePercent) / 100
        const fixed = p.fixedFee || 0
        const conversion = (val * (p.conversionSpread || 0)) / 100
        const totalFees = platformFee + fixed + (p.wireFee || 0) + conversion
        const netAmount = val - totalFees

        setResult({
            platformFee: Math.round(platformFee),
            fixed: fixed,
            conversion: Math.round(conversion),
            wire: p.wireFee || 0,
            total: Math.round(totalFees),
            net: Math.round(netAmount),
            percentLost: ((totalFees / val) * 100).toFixed(1)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "What is a 'Conversion Spread'?", answer: "When you receive dollars and convert them to Rupees, platforms like PayPal often give you a rate 2-3% lower than the 'Google' rate. This hidden fee is called the spread." },
        { question: "How can I reduce platform fees?", answer: "Using direct bank transfers (Wire) or specialized services like Payoneer or Wise can often reduce your conversion fees from 3% to less than 1%." },
        { question: "Is Fiverr more expensive than Upwork?", answer: "Yes, Fiverr takes a flat 20% cut from both the freelancer and the buyer, making it one of the most expensive platforms for high-value contracts." }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Invoice Amount ($)</label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 text-lg" />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Select Platform</label>
                        <select value={platform} onChange={(e) => setPlatform(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500">
                            {Object.keys(platforms).map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                    </div>

                    <button onClick={calculateFees} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">
                        Calculate Net Amount
                    </button>
                </div>

                <div role="region" aria-live="polite" className="bg-slate-50 rounded-2xl p-6 border-2 border-dashed border-slate-200 flex flex-col justify-center">
                    {result ? (
                        <div ref={resultRef} className="space-y-6 animate-in fade-in duration-500">
                            <div className="text-center">
                                <p className="text-[10px] font-bold text-slate-500 uppercase">You Receive (Net)</p>
                                <p className="text-5xl font-black text-slate-900">${result.net.toLocaleString()}</p>
                                <p className="text-sm font-bold text-orange-600 mt-1">Lost {result.percentLost}% to fees</p>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Platform Commission</span>
                                    <span className="font-bold">${result.platformFee}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Hidden Conversion Spread</span>
                                    <span className="font-bold">${result.conversion}</span>
                                </div>
                                {result.wire > 0 && (
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Withdrawal Fee</span>
                                        <span className="font-bold">${result.wire}</span>
                                    </div>
                                )}
                                <hr className="border-slate-100" />
                                <div className="flex justify-between font-black text-slate-900">
                                    <span>Total Fees</span>
                                    <span>${result.total}</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center space-y-4 py-12">
                            <span className="text-5xl">💸</span>
                            <p className="text-slate-500 font-medium">See how much middlemen are taking from your hard work</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-12">
                <SEOSection title="Freelance Platform Fee Comparison" faq={faqData} />
            </div>
        </div>
    )
}
