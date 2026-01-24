import { useState, useRef } from 'react'
import SEOSection from '../SEOSection'

export default function SIP1CrCalculatorUI({
    defaultTargetAmount = '10000000',
    defaultInterestRate = '12',
    defaultTimePeriod = '15',
    showSEOContent = true
}) {
    const [targetAmount, setTargetAmount] = useState(defaultTargetAmount)
    const [interestRate, setInterestRate] = useState(defaultInterestRate)
    const [timePeriod, setTimePeriod] = useState(defaultTimePeriod)
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateSIP = () => {
        const M = parseFloat(targetAmount)
        const r = parseFloat(interestRate) / 12 / 100
        const n = parseFloat(timePeriod) * 12

        const step1 = Math.pow(1 + r, n) - 1
        const step2 = step1 / r
        const step3 = step2 * (1 + r)

        const P = M / step3

        setResult({
            monthlyInvestment: Math.round(P),
            totalInvestment: Math.round(P * n),
            totalReturns: Math.round(M - (P * n))
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const features = [
        { title: "Reverse Calculation", desc: "Tells you how much to invest to reach a specific goal amount.", icon: "🎯" },
        { title: "Goal Planning", desc: "Perfect for planning Child Education, Marriage, or Retirement corpus.", icon: "👶" },
        { title: "Wealth Visualization", desc: "See the split between your money vs market returns.", icon: "📊" },
    ]

    const faqData = [
        { question: "How much SIP is needed for 1 Crore in 10 years?", answer: "Assuming a 12% annual return, you need to invest approximately ₹43,041 per month to reach ₹1 Crore in 10 years." },
        { question: "How much time to get 1 Crore with 10k SIP?", answer: "If you invest ₹10,000 monthly at 12% return, it will take about 20 years to reach a corpus of ₹1 Crore." },
        { question: "Is 1 Crore enough for retirement?", answer: "It depends on your lifestyle and inflation. If inflation is 6%, the value of 1 Crore after 20 years will be much less. Financial experts suggest aiming for 2-3 Crores for a comfortable retirement." },
        { question: "Which mutual funds give 15% return?", answer: "Small-cap and Mid-cap equity mutual funds have historically delivered 15-18% returns over long periods (10+ years), but they come with high volatility." }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="space-y-6">
                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Target Amount (₹)</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span><input type="number" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" /></div><div className="flex gap-2 mt-2"><button onClick={() => setTargetAmount('10000000')} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100">1 Crore</button><button onClick={() => setTargetAmount('5000000')} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100">50 Lakh</button><button onClick={() => setTargetAmount('2500000')} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100">25 Lakh</button></div></div>
                <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-sm font-semibold text-slate-700 mb-2">Expected Return (%)</label><input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="12" /></div>
                    <div><label className="block text-sm font-semibold text-slate-700 mb-2">Time Period (Years)</label><input type="number" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="15" /></div>
                </div>
                <button onClick={calculateSIP} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">Calculate Monthly SIP</button>

                {/* Inline Result */}
                {result && (
                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="bg-blue-50 rounded-xl p-6 mb-6 text-center border border-blue-100">
                            <p className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-1">Required Monthly SIP</p>
                            <p className="text-4xl sm:text-5xl font-extrabold text-blue-900">₹{result.monthlyInvestment.toLocaleString('en-IN')}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <p className="text-xs text-slate-500 font-semibold uppercase">Total Investment</p>
                                <p className="text-lg font-bold text-slate-800">₹{result.totalInvestment.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                                <p className="text-xs text-green-700 font-semibold uppercase">Wealth Gain</p>
                                <p className="text-lg font-bold text-green-700">+ ₹{result.totalReturns.toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {showSEOContent && (
                <div className="mt-8">
                    <SEOSection title="About Target SIP (Goal Calculator)" faq={faqData} features={features}>
                        <h3>How to become a Crorepati?</h3>
                        <p>
                            The secret to reaching <strong>₹1 Crore</strong> isn't earning a high salary, but starting early. This calculator works backwards: you tell us your dream amount, and we tell you the monthly savings needed to reach it.
                        </p>
                        <h3>The 15-15-15 Rule</h3>
                        <p>
                            A famous rule in personal finance says: If you invest <strong>₹15,000</strong> per month for <strong>15 years</strong> at <strong>15% return</strong>, you will get <strong>₹1 Crore</strong>. You can verify this using the calculator above!
                        </p>
                    </SEOSection>
                </div>
            )}
        </div>
    )
}
