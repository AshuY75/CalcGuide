import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import CalculatorContent from '../components/CalculatorContent'
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
            
            <SchemaGenerator
                name="RD Calculator"
                description="Calculate Recurring Deposit (RD) interest and maturity amount."
                url="https://calcguide.in/calculators/investment/rd-calculator"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.INVESTMENT} className="hover:text-blue-600">Investment Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">RD Calculator</span>
                    </nav>

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

                        <CalculatorContent
                            title="RD Calculator"
                            whatIs="A Recurring Deposit (RD) Calculator estimates how much your monthly savings will grow over time. RD is a popular investment option in India where you deposit a fixed amount every month for a fixed tenure (e.g., 6 months to 10 years) and earn interest rates similar to Fixed Deposits."
                            whoShouldUse="RDs are perfect for people who do not have a lump sum to invest in an FD but can save a small amount (like ₹2000 or ₹5000) every month from their salary. It is a disciplined way to save for goals like a vacation, wedding, or paying insurance premiums."
                            example="If you start an RD of ₹5000 per month for 3 years at 7% interest: You will invest a total of ₹1,80,000. The bank will pay you interest roughly around ₹21,000. So, your maturity amount will be approx ₹2,01,000."
                            commonMistake="Thinking RD interest is tax-free. Interest earned on Recurring Deposits is fully taxable. Also, missing a monthly installment often attracts a penalty."
                        />

                        <SEOSection title="About Recurring Deposits (RD)" faq={faqData} features={features}>
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
