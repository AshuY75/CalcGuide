import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function LumpsumCalculator() {
    const [principal, setPrincipal] = useState('100000')
    const [interestRate, setInterestRate] = useState('12')
    const [timePeriod, setTimePeriod] = useState('10')
    const [result, setResult] = useState(null)
    const resultRef = useRef(null)

    const calculateLumpsum = () => {
        const P = parseFloat(principal)
        const r = parseFloat(interestRate)
        const t = parseFloat(timePeriod)

        if (isNaN(P) || isNaN(r) || isNaN(t)) return

        // Formula: A = P * (1 + r/100)^t
        const maturityAmount = P * Math.pow((1 + r / 100), t)
        const totalInterest = maturityAmount - P

        setResult({
            investedAmount: Math.round(P),
            totalInterest: Math.round(totalInterest),
            maturityAmount: Math.round(maturityAmount)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "What is a Lumpsum investment?", answer: "A Lumpsum investment is a one-time deposit where you invest a large amount of money at once, rather than in small monthly installments (like SIP)." },
        { question: "Lumpsum vs SIP - which is better?", answer: "Lumpsum is better when the market is at a low or when you have a large windfall (like a bonus). SIP is better for consistent long-term wealth building and averaging out market volatility." },
        { question: "How are lumpsum returns calculated?", answer: "Lumpsum returns are calculated using the compound interest formula: A = P(1 + r/n)^nt. In the context of mutual funds, wealth is typically estimated using CAGR (Compound Annual Growth Rate)." }
    ]

    const features = [
        { title: "One-Time Projection", desc: "See how your one-time investment grows over 1 to 30 years.", icon: "💰" },
        { title: "Wealth Gain Breakdown", desc: "Separate view of your initial capital and the total interest earned.", icon: "📈" },
        { title: "Power of Compounding", desc: "Visualize how staying invested longer exponentially increases returns.", icon: "🚀" }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="Lumpsum Calculator India"
                description="Estimate the future value of your one-time mutual fund or fixed deposits."
                url="https://calcguide.in/calculators/investment/lumpsum-calculator"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.INVESTMENT} className="hover:text-blue-600">Investment Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Lumpsum Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Lumpsum Calculator</h1>
                    <p className="text-slate-600">Plan your one-time investments for massive future returns</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Total Investment (Principal)</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span>
                                        <input
                                            type="number"
                                            value={principal}
                                            onChange={(e) => setPrincipal(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                            placeholder="100000"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Exp. Return Rate (p.a %)</label>
                                        <input
                                            type="number"
                                            value={interestRate}
                                            onChange={(e) => setInterestRate(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                            placeholder="12"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Time Period (Years)</label>
                                        <input
                                            type="number"
                                            value={timePeriod}
                                            onChange={(e) => setTimePeriod(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                            placeholder="10"
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={calculateLumpsum}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-95 transition-transform"
                                >
                                    Calculate Returns
                                </button>

                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-blue-50 rounded-xl p-6 mb-6 text-center border border-blue-100 shadow-inner">
                                            <p className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-1">Maturity Value</p>
                                            <p className="text-5xl font-extrabold text-blue-900">₹{result.maturityAmount.toLocaleString('en-IN')}</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                                <p className="text-xs text-slate-500 font-semibold uppercase">Capital Invested</p>
                                                <p className="text-lg font-bold text-slate-800">₹{result.investedAmount.toLocaleString('en-IN')}</p>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                                                <p className="text-xs text-green-700 font-semibold uppercase">Total Profit</p>
                                                <p className="text-lg font-bold text-green-700">+ ₹{result.totalInterest.toLocaleString('en-IN')}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="How to use Lumpsum Calculator?"
                            whatIs="A Lumpsum Calculator is a tool that allows you to calculate the future value of a one-time investment. In India, people often use this to estimate the growth of Mutual Funds, Fixed Deposits (FD), or even Real Estate investments over a long duration."
                            whoShouldUse="Investors who have a surplus amount of cash (bonus, gift, or savings) and want to know how much it will grow if kept for 5, 10, or 20 years in the market."
                            example="If you invest ₹5 Lakhs for 15 years in a mutual fund giving 12% returns, you don't just get your money back. Your investment grows to roughly ₹27.36 Lakhs, earning you a net profit of over ₹22 Lakhs."
                            commonMistake="Being too optimistic about returns. While equity mutual funds can give 15%, it's safer to estimate with 10-12% for long-term lumpsum projections to account for market cycles."
                        />

                        <SEOSection title="Lumpsum vs SIP Comparison" faq={faqData} features={features} />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Tools</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">📈</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">SIP Calculator</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP_CRORE} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🎯</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">SIP ₹1 Crore</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
