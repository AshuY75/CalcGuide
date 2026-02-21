import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import SEOSection from '../SEOSection'
import { ROUTES } from '../../routes/paths'

export default function SIPCalculatorUI({
    defaultMonthlyInvestment = '5000',
    defaultInterestRate = '12',
    defaultTimePeriod = '10',
    showSEOContent = true
}) {
    const [monthlyInvestment, setMonthlyInvestment] = useState(defaultMonthlyInvestment)
    const [interestRate, setInterestRate] = useState(defaultInterestRate)
    const [timePeriod, setTimePeriod] = useState(defaultTimePeriod)
    const [stepUp, setStepUp] = useState('0')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateSIP = () => {
        const initialP = parseFloat(monthlyInvestment)
        const annualRate = parseFloat(interestRate)
        const r = annualRate / 12 / 100
        const years = parseFloat(timePeriod)
        const totalMonths = years * 12
        const s = parseFloat(stepUp) / 100

        let maturityAmount = 0
        let investedAmount = 0
        let currentP = initialP

        for (let month = 1; month <= totalMonths; month++) {
            // Apply annual step-up
            if (month > 1 && (month - 1) % 12 === 0) {
                currentP = currentP * (1 + s)
            }
            investedAmount += currentP
            maturityAmount = (maturityAmount + currentP) * (1 + r)
        }

        const totalReturns = maturityAmount - investedAmount
        setResult({
            investedAmount: Math.round(investedAmount),
            totalReturns: Math.round(totalReturns),
            maturityAmount: Math.round(maturityAmount)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        {
            question: "What is SIP?",
            answer: "SIP (Systematic Investment Plan) is an investment mode where you invest a fixed amount regularly (monthly/quarterly) in Mutual Funds, gold, or other assets."
        },
        {
            question: "How much return can I expect from SIP?",
            answer: "For Equity Mutual Funds, historic long-term returns range from 12% to 15%. For Debt funds, it is usually 6-8%. This calculator defaults to 12% as a standard equity benchmark."
        },
        {
            question: "Is SIP better than Lumpsum?",
            answer: "SIP is generally safer for new investors as it averages out the market volatility (Rupee Cost Averaging). Lumpsum is better when the market is significantly down (undervalued)."
        },
        {
            question: "Does this calculator account for inflation?",
            answer: "No, this calculator shows nominal returns. To understand real purchasing power, you should assume a lower effective return rate (e.g., Return minus 6% Inflation)."
        }
    ]

    return (
        <div className="bg-white border-b border-slate-200 rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="space-y-6">
                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Investment</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span><input type="number" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="e.g. 5000" /></div></div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1"><label className="block text-sm font-semibold text-slate-700 mb-2">Step-Up (%)</label><input type="number" value={stepUp} onChange={(e) => setStepUp(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="0" /></div>
                    <div className="col-span-1"><label className="block text-sm font-semibold text-slate-700 mb-2">Return Rate (%)</label><input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="12" /></div>
                    <div className="col-span-1"><label className="block text-sm font-semibold text-slate-700 mb-2">Time (Years)</label><input type="number" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="10" /></div>
                </div>
                <button onClick={calculateSIP} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">Calculate SIP</button>

                {/* Inline Result */}
                {/* Inline Result - Reserved Space to prevent CLS */}
                <div role="region" aria-live="polite" className="mt-8 border-t border-slate-100 min-h-[260px]">
                    {result ? (
                        <div ref={resultRef} className="pt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                            <div className="text-center mb-8">
                                <p className="text-sm uppercase tracking-wide text-slate-500 font-medium mb-1">Maturity Amount</p>
                                <p className="text-4xl sm:text-5xl font-extrabold text-blue-900">₹{result.maturityAmount.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="grid gap-4">
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex justify-between items-center"><p className="text-sm text-slate-500 font-semibold">Invested Amount</p><p className="text-xl font-bold text-slate-700">₹{result.investedAmount.toLocaleString('en-IN')}</p></div>
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex justify-between items-center"><p className="text-sm text-green-700 font-semibold">Wealth Gain</p><p className="text-xl font-bold text-green-700">+ ₹{result.totalReturns.toLocaleString('en-IN')}</p></div>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-slate-400 pt-16 pb-8">
                            <span className="text-4xl mb-2 opacity-50">📊</span>
                            <p className="text-sm font-medium">Enter details & click "Calculate SIP" to view results</p>
                        </div>
                    )}
                </div>
            </div>

            {showSEOContent && (
                <div className="mt-12">
                    <SEOSection title="About SIP Calculator" faq={faqData}>
                        <h3>The Power of Compounding</h3>
                        <p>
                            Albert Einstein called compounding the "Eighth Wonder of the World". In SIP, your returns are reinvested, and you earn returns on your returns.
                            For example, investing just ₹5,000/month for 20 years at 12% can generate a corpus of nearly <strong>₹50 Lakhs</strong>, while your actual investment is only ₹12 Lakhs.
                        </p>
                        <h3>Rupee Cost Averaging Explained</h3>
                        <p>
                            When the market is high, your SIP amount buys fewer units. When the market crashes, the same amount buys more units. Over time, this averages out the cost of buying, protecting you from market volatility. This is why you should never stop SIPs during a market crash.
                        </p>
                        <h3>Decision Guidance</h3>
                        <p>
                            If you are saving for a long-term goal defined 10+ years away (like Child's Education or Retirement), equity SIPs are the best inflation-beating instrument. For short-term goals (&lt; 3 years), consider RD or Debt Funds instead.
                        </p>
                    </SEOSection>
                </div>
            )}
        </div>
    )
}
