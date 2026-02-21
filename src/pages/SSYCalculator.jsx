import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function SSYCalculator() {
    const [monthlyContribution, setMonthlyContribution] = useState('5000')
    const [interestRate, setInterestRate] = useState('8.2')
    const [result, setResult] = useState(null)
    const resultRef = useRef(null)

    const calculateSSY = () => {
        const monthly = parseFloat(monthlyContribution)
        const rate = parseFloat(interestRate) / 100
        if (isNaN(monthly) || isNaN(rate)) return

        const annualContribution = monthly * 12
        let balance = 0
        let totalInvested = 0
        const yearlyData = []

        // Sequence: 15 years of deposits, 6 years of interest only
        for (let year = 1; year <= 21; year++) {
            if (year <= 15) {
                // Deposit at beginning of year (simplification for yearly estimate)
                balance += annualContribution
                totalInvested += annualContribution
            }

            // Add interest at end of year
            const interestEarned = balance * rate
            balance += interestEarned

            yearlyData.push({
                year,
                balance: Math.round(balance),
                interest: Math.round(interestEarned)
            })
        }

        setResult({
            maturityAmount: Math.round(balance),
            totalInvested: Math.round(totalInvested),
            totalInterest: Math.round(balance - totalInvested),
            yearlyData
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "What is the maximum investment limit in SSY?", answer: "The minimum investment in a Sukanya Samriddhi account is ₹250 per year, and the maximum limit is ₹1.5 Lakh per financial year (under Section 80C)." },
        { question: "Can I withdraw SSY before 21 years?", answer: "Partial withdrawal (up to 50% of the balance) is allowed for the higher education of the girl child once she reaches 18 years or finishes 10th grade. Full closure happens after 21 years or at marriage after 18." },
        { question: "For how many years do I need to deposit in SSY?", answer: "You need to make deposits for 15 years from the date of account opening. The account continues to earn interest until it matures at 21 years." }
    ]

    const features = [
        { title: "21-Year Projection", desc: "See your total maturity value including the interest-only period from year 16 to 21.", icon: "📅" },
        { title: "80C Tax Savings", desc: "SSY is EEE (Exempt-Exempt-Exempt), meaning the investment, interest, and maturity are all tax-free.", icon: "🛡️" },
        { title: "Interest Rate History", icon: "📊", desc: "Allows you to adjust interest rates as per quarterly revisions by the Govt." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="SSY Calculator (Sukanya Samriddhi Yojana)"
                description="Determine the maturity amount for your girl child's future with our accurate SSY Calculator."
                url="https://calcguide.in/calculators/investment/ssy-calculator"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.INVESTMENT} className="hover:text-blue-600">Investment Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">SSY Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">SSY Calculator</h1>
                    <p className="text-slate-600">Plan your girl child's secure future with Govt-backed savings</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Investment (₹)</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span>
                                        <input
                                            type="number"
                                            value={monthlyContribution}
                                            onChange={(e) => setMonthlyContribution(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                            placeholder="5000"
                                        />
                                    </div>
                                    <p className="mt-1 text-xs text-slate-400">Total annual: ₹{(monthlyContribution * 12).toLocaleString('en-IN')} (Max ₹1.5L)</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate (% p.a.)</label>
                                    <input
                                        type="number"
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(e.target.value)}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                        placeholder="8.2"
                                    />
                                    <p className="mt-1 text-xs text-blue-600">Current Govt Rate: 8.2% (Q4 2024-25)</p>
                                </div>

                                <button
                                    onClick={calculateSSY}
                                    className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-95 transition-transform"
                                >
                                    Calculate Maturity
                                </button>

                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-pink-50 rounded-xl p-6 mb-6 text-center border border-pink-100 shadow-inner">
                                            <p className="text-pink-600 text-sm font-bold uppercase tracking-wide mb-1">Maturity Value (after 21 Years)</p>
                                            <p className="text-5xl font-extrabold text-pink-900">₹{result.maturityAmount.toLocaleString('en-IN')}</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                                <p className="text-xs text-slate-500 font-semibold uppercase">Total Invested</p>
                                                <p className="text-lg font-bold text-slate-800">₹{result.totalInvested.toLocaleString('en-IN')}</p>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                                                <p className="text-xs text-green-700 font-semibold uppercase">Total Interest</p>
                                                <p className="text-lg font-bold text-green-700">+ ₹{result.totalInterest.toLocaleString('en-IN')}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="How SSY Maturity is Calculated?"
                            whatIs="Sukanya Samriddhi Yojana (SSY) is a government-backed savings scheme for parents of girl children. It offers one of the highest interest rates among small savings schemes and provides full tax benefits under Section 80C."
                            whoShouldUse="Parents of a girl child aged below 10 years who want to build a corpus for her higher education or marriage with zero market risk."
                            example="If you invest ₹5,000 every month (₹60,000 yearly) for 15 years at 8.2% interest, will not just stop at 15 years. The money stays for another 6 years earning compound interest. Eventually, you could get a maturity amount of approximately ₹27.7 Lakhs."
                            commonMistake="Missing the 15-year deposit rule. Many think they have to pay for 21 years. You only pay for the first 15 years, and the account matures in 21 years."
                        />

                        <SEOSection title="SSY Scheme Benefits" faq={faqData} features={features} />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Plan Her Future</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">📈</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">SIP for College</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.PPF} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🛡️</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">PPF Calculator</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
