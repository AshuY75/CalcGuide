import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import MetaManager from '../components/MetaManager'
import SEOSection from '../components/SEOSection'
import { ROUTES } from '../routes/paths'

export default function SIPCalculator() {
    const [monthlyInvestment, setMonthlyInvestment] = useState('5000')
    const [interestRate, setInterestRate] = useState('12')
    const [timePeriod, setTimePeriod] = useState('10')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateSIP = () => {
        const P = parseFloat(monthlyInvestment)
        const i = parseFloat(interestRate) / 12 / 100
        const n = parseFloat(timePeriod) * 12
        const M = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i)
        const investedAmount = P * n
        const totalReturns = M - investedAmount
        setResult({ investedAmount: Math.round(investedAmount), totalReturns: Math.round(totalReturns), maturityAmount: Math.round(M) })

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

    const schema = {
        "@context": "https://schema.org",
        "@type": "Calculator",
        "name": "SIP Calculator",
        "description": "Calculate Mutual Fund SIP returns instantly. See how small monthly investments grow into crores with the power of compounding.",
        "url": "https://calcguide.in/calculators/investment/sip-calculator",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Any"
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <MetaManager
                title="SIP Calculator - Mutual Fund Returns Calculator India"
                description="Calculate how much your monthly SIP investments can grow. Check wealth gain and maturity amount with our free Mutual Fund SIP Calculator."
                keywords="sip calculator, mutual fund calculator, sip returns, investment calculator india"
            />
            <script type="application/ld+json">{JSON.stringify(schema)}</script>

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">SIP Calculator</h1>
                    <p className="text-slate-600">Calculate how much your monthly investments can grow</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Investment</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span><input type="number" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="e.g. 5000" /></div></div>
                                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Expected Return Rate (% p.a)</label><input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="e.g. 12" /></div>
                                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Time Period (Years)</label><input type="number" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="e.g. 10" /></div>
                                <button onClick={calculateSIP} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">Calculate SIP</button>

                                {/* Inline Result */}
                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="text-center mb-8">
                                            <p className="text-sm uppercase tracking-wide text-slate-500 font-medium mb-1">Maturity Amount</p>
                                            <p className="text-4xl sm:text-5xl font-extrabold text-blue-900">₹{result.maturityAmount.toLocaleString('en-IN')}</p>
                                        </div>
                                        <div className="grid gap-4">
                                            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex justify-between items-center"><p className="text-sm text-slate-500 font-semibold">Invested Amount</p><p className="text-xl font-bold text-slate-700">₹{result.investedAmount.toLocaleString('en-IN')}</p></div>
                                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex justify-between items-center"><p className="text-sm text-green-700 font-semibold">Wealth Gain</p><p className="text-xl font-bold text-green-700">+ ₹{result.totalReturns.toLocaleString('en-IN')}</p></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

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
                    {/* Related Tools Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Tools</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP_CRORE} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🎯</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Target 1 Crore</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.LOAN.EMI} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">💰</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">EMI Calculator</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.FD} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🏛️</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">FD Calculator</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
