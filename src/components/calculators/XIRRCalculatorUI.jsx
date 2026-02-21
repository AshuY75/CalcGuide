import { useState, useRef } from 'react'
import SEOSection from '../SEOSection'

export default function XIRRCalculatorUI() {
    // For simplicity in a web UI without a complex library, 
    // we'll provide a calculator that handles a common SIP XIRR scenario:
    // "If I invested X monthly for Y years and now have Z, what is my XIRR?"

    const [monthlyInvestment, setMonthlyInvestment] = useState('5000')
    const [timePeriod, setTimePeriod] = useState('5')
    const [currentValue, setCurrentValue] = useState('400000')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateXIRR = () => {
        const P = parseFloat(monthlyInvestment)
        const years = parseFloat(timePeriod)
        const months = years * 12
        const M = parseFloat(currentValue)

        // Numerical approximation for r (monthly rate)
        // M = P * ((1+r)^n - 1) / r * (1+r)

        let low = 0
        let high = 1.0 // 100% monthly is impossible
        let r = 0.01 // starting guess

        for (let iter = 0; iter < 100; iter++) {
            r = (low + high) / 2
            const estimate = P * ((Math.pow(1 + r, months) - 1) / r) * (1 + r)
            if (estimate > M) high = r
            else low = r
        }

        const annualXIRR = (Math.pow(1 + r, 12) - 1) * 100

        setResult({
            xirr: annualXIRR.toFixed(2),
            totalInvested: Math.round(P * months),
            absoluteGain: Math.round(M - (P * months))
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const features = [
        { title: "Real Returns", desc: "XIRR is the only accurate way to calculate returns for periodic investments like SIP.", icon: "🎯" },
        { title: "Point-to-Point", desc: "Calculate returns from the first installment date to the current valuation date.", icon: "📅" },
        { title: "Better than Absolute", desc: "Absolute returns don't account for time; XIRR tells you the true annualized performance.", icon: "📊" }
    ]

    const faqData = [
        { question: "What is XIRR?", answer: "XIRR (Extended Internal Rate of Return) is a method used to calculate the rate of return for a series of cash flows occurring at irregular intervals. In mutual funds, it is the actual annualized return on your SIP." },
        { question: "Why is XIRR different from absolute return?", answer: "Absolute return only looks at the total profit. XIRR looks at 'Profit' and 'Time'. If you make 10% in 1 year, XIRR is 10%. If you make 10% in 10 years, XIRR is roughly 1%." },
        { question: "When should I use XIRR?", answer: "Always use XIRR to evaluate the performance of your SIP or any investment where you put in money multiple times." }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly SIP Amount (₹)</label>
                    <input type="number" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Duration (Years)</label>
                        <input type="number" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Current Portfolio Value (₹)</label>
                        <input type="number" value={currentValue} onChange={(e) => setCurrentValue(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" />
                    </div>
                </div>

                <button onClick={calculateXIRR} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md text-lg transition-transform active:scale-[0.98]">
                    Calculate XIRR
                </button>

                {result && (
                    <div ref={resultRef} className="mt-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="bg-green-600 rounded-xl p-6 text-center text-white shadow-lg">
                            <p className="text-green-100 text-sm font-bold uppercase tracking-wide mb-1">Your Portfolio XIRR</p>
                            <p className="text-4xl sm:text-5xl font-extrabold">{result.xirr}%</p>
                            <p className="text-xs mt-2 opacity-80">(Annualized Returns)</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <p className="text-xs text-slate-500 font-semibold uppercase">Total Invested</p>
                                <p className="text-lg font-bold text-slate-800">₹{result.totalInvested.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <p className="text-xs text-slate-500 font-semibold uppercase">Absolute Gain</p>
                                <p className="text-lg font-bold text-slate-800">₹{result.absoluteGain.toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-12">
                <SEOSection title="How XIRR is Calculated?" faq={faqData} features={features} />
            </div>
        </div>
    )
}
