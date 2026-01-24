import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
const Helmet = () => null;
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function RDCalculator() {
    const [monthlyDeposit, setMonthlyDeposit] = useState('5000')
    const [interestRate, setInterestRate] = useState('6.5')
    const [timePeriod, setTimePeriod] = useState('5')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateRD = () => {
        const P = parseFloat(monthlyDeposit)
        const R = parseFloat(interestRate)
        const N = parseFloat(timePeriod) * 12 // Months

        // Standard RD Formula (General Bank estimate logic)
        // I = P * (N(N+1)) / 24 * R/100
        const I = P * (N * (N + 1)) / 24 * (R / 100)
        const totalInvested = P * N
        const maturityAmount = totalInvested + I

        setResult({
            investedAmount: Math.round(totalInvested),
            interestEarned: Math.round(I),
            maturityAmount: Math.round(maturityAmount)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const features = [
        { title: "Monthly Savings", desc: "Plan small monthly deposits to build a big corpus.", icon: "🐖" },
        { title: "Standard Formula", desc: "Uses the N(N+1)/24 formula used by most calculators.", icon: "🧮" },
        { title: "Guaranteed Returns", desc: "RDs are safe and immune to stock market volatility.", icon: "🛡️" },
    ]

    const faqData = [
        { question: "What is a Recurring Deposit (RD)?", answer: "An RD is a term deposit where you deposit a fixed amount every month for a pre-decided tenure and earn interest similar to FDs." },
        { question: "How is RD interest calculated?", answer: "Most banks calculate RD interest using the formula: I = P * [n(n+1)/24] * R/100, where P is monthly deposit, n is months, and R is rate." },
        { question: "Is RD interest taxable?", answer: "Yes, just like FDs, interest earned from RDs is fully taxable based on your income tax slab. TDS is also applicable." },
        { question: "Can I miss an RD installment?", answer: "If you miss an installment, banks may charge a penalty fee (usually ₹1.50 per ₹100) or close the RD if payments are missed repeatedly." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <Helmet>
                <title>RD Calculator - Recurring Deposit Maturity Calculator</title>
                <meta name="description" content="Calculate the maturity value of your monthly Recurring Deposit (RD). Plan your savings with our free RD Calculator for SBI, HDFC, and Post Office RDs." />
                <link rel="canonical" href="https://calcguide.com/rd" />
            </Helmet>
            <SchemaGenerator
                name="RD Calculator"
                description="Calculate Recurring Deposit (RD) interest and maturity amount."
                url="https://calcguide.com/rd"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">RD Calculator</h1>
                    <p className="text-slate-600">Calculate Recurring Deposit maturity amount</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Deposit</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span><input type="number" value={monthlyDeposit} onChange={(e) => setMonthlyDeposit(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="5000" /></div></div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div><label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate (%)</label><input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="6.5" /></div>
                                    <div><label className="block text-sm font-semibold text-slate-700 mb-2">Time Period (Years)</label><input type="number" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="5" /></div>
                                </div>
                                <button onClick={calculateRD} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">Calculate Maturity</button>

                                {/* Inline Result */}
                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-blue-50 rounded-xl p-6 mb-6 text-center border border-blue-100">
                                            <p className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-1">Maturity Amount</p>
                                            <p className="text-4xl sm:text-5xl font-extrabold text-blue-900">₹{result.maturityAmount.toLocaleString('en-IN')}</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                                <p className="text-xs text-slate-500 font-semibold uppercase">Total Invested</p>
                                                <p className="text-lg font-bold text-slate-800">₹{result.investedAmount.toLocaleString('en-IN')}</p>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                                                <p className="text-xs text-green-700 font-semibold uppercase">Interest Earned</p>
                                                <p className="text-lg font-bold text-green-700">+ ₹{result.interestEarned.toLocaleString('en-IN')}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <SEOSection title="About Recurring Deposits (RD)" faq={faqData} features={features}>
                            <h3>What is an RD Calculator?</h3>
                            <p>
                                An <strong>RD Calculator</strong> helps you estimate how much your small monthly savings will grow into over time. It is perfect for disciplined savers who want to build a corpus without the risk of the stock market.
                            </p>
                            <h3>Why choose RD over SIP?</h3>
                            <ul>
                                <li><strong>Safety:</strong> RD returns are guaranteed by the bank. SIP returns depend on the market.</li>
                                <li><strong>Liquidity:</strong> RDs can be broken instantly (with penalty), while some SIPs (ELSS) have lock-in periods.</li>
                            </ul>
                        </SEOSection>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Tools</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.FD} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🏛️</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">FD Calculator</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">📈</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">SIP Calculator</p>
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
