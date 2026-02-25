import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function PPFCalculator() {
    const [annualDeposit, setAnnualDeposit] = useState('50000')
    const [interestRate, setInterestRate] = useState('7.1')
    const [duration, setDuration] = useState('15')
    const [result, setResult] = useState(null)
    const resultRef = useRef(null)

    const calculatePPF = () => {
        const P = parseFloat(annualDeposit)
        const i = parseFloat(interestRate) / 100
        const n = parseInt(duration)

        if (isNaN(P) || isNaN(i) || isNaN(n)) return

        let maturityValue = 0
        let totalInvested = 0
        const yearlyData = []

        // Formula for PPF (Annual Compounding)
        // Note: Interest is calculated on the minimum balance between 5th and end of month.
        // Simplification for annual projection:
        for (let year = 1; year <= n; year++) {
            totalInvested += P
            maturityValue = (maturityValue + P) * (1 + i)
            yearlyData.push({
                year,
                invested: totalInvested,
                maturity: Math.round(maturityValue)
            })
        }

        setResult({
            maturityAmount: Math.round(maturityValue),
            totalInvested: Math.round(totalInvested),
            totalInterest: Math.round(maturityValue - totalInvested),
            yearlyData
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "What is the lock-in period for PPF?", answer: "The Public Provident Fund (PPF) has a lock-in period of 15 years. After this, you can either withdraw the full amount or extend the account in blocks of 5 years indefinitely." },
        { question: "Is PPF interest taxable?", answer: "No. PPF falls under the EEE (Exempt-Exempt-Exempt) category. The amount invested, interest earned, and maturity amount are all fully tax-free under current Indian laws." },
        { question: "Can I take a loan against my PPF account?", answer: "Yes, you can take a loan against your PPF balance between the 3rd and 6th financial year of opening the account." }
    ]

    const features = [
        { title: "Tax-Free Maturity", desc: "Calculate your corpus with the benefit of the EEE tax status in India.", icon: "🛡️" },
        { title: "Flexible Duration", desc: "Simulate extension of your PPF beyond the initial 15-year period.", icon: "📅" },
        { title: "Compound Interest", icon: "🚀", desc: "See the power of annual compounding over long horizons." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="PPF Calculator (Public Provident Fund)"
                description="Maximize your tax-free savings with our PPF Maturity Amount Calculator for 2025."
                url="https://calcguide.in/calculators/investment/ppf-calculator/"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.INVESTMENT} className="hover:text-blue-600">Investment Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">PPF Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">PPF Calculator (2025)</h1>
                    <p className="text-slate-600">Most accurate maturity estimator for Public Provident Fund</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Yearly Investment (₹)</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span>
                                        <input
                                            type="number"
                                            max="150000"
                                            value={annualDeposit}
                                            onChange={(e) => setAnnualDeposit(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                            placeholder="150000"
                                        />
                                    </div>
                                    <p className="mt-1 text-xs text-slate-400">Section 80C Limit: ₹1.5 Lakh per year</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate (%)</label>
                                        <input
                                            type="number"
                                            value={interestRate}
                                            onChange={(e) => setInterestRate(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                        />
                                        <p className="mt-1 text-xs text-blue-600">Current: 7.1%</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Duration (Years)</label>
                                        <select
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg bg-white"
                                        >
                                            <option value="15">15 Years (Base)</option>
                                            <option value="20">20 Years</option>
                                            <option value="25">25 Years</option>
                                            <option value="30">30 Years</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    onClick={calculatePPF}
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-95 transition-transform"
                                >
                                    Calculate Maturity
                                </button>

                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-emerald-50 rounded-xl p-6 mb-6 text-center border border-emerald-100 shadow-inner">
                                            <p className="text-emerald-600 text-sm font-bold uppercase tracking-wide mb-1">Maturity Amount</p>
                                            <p className="text-5xl font-extrabold text-emerald-900">₹{result.maturityAmount.toLocaleString('en-IN')}</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                                <p className="text-xs text-slate-500 font-semibold uppercase">Total Invested</p>
                                                <p className="text-lg font-bold text-slate-800">₹{result.totalInvested.toLocaleString('en-IN')}</p>
                                            </div>
                                            <div className="bg-green-100 p-4 rounded-lg text-center border border-green-200">
                                                <p className="text-xs text-green-700 font-semibold uppercase">Wealth Gained</p>
                                                <p className="text-lg font-bold text-green-700">+ ₹{result.totalInterest.toLocaleString('en-IN')}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="Why use a PPF Calculator?"
                            whatIs="A PPF Calculator helps you estimate the wealth accumulated through the Public Provident Fund scheme. Since PPF offers annual compounding, the growth in the later years is significant due to the 'interest on interest' effect. This tool helps you visualize how even small yearly deposits can grow into a massive tax-free corpus."
                            whoShouldUse="Salaried professionals, self-employed individuals, and anyone looking for a safe, government-guaranteed investment option that provides tax deductions under Section 80C and tax-free returns."
                            example="If you invest ₹1.5 Lakh every year for 15 years at 7.1% interest, you will invest a total of ₹22.5 Lakh. However, your maturity amount will be approximately ₹40.68 Lakh, giving you more than ₹18 Lakh in pure tax-free interest."
                            commonMistake="Depositing after the 5th of a month. In PPF, interest is calculated on the minimum balance between the 5th and the last day of the month. To maximize your returns, always deposit before the 5th."
                        />

                        <SEOSection title="PPF Investment Strategy" faq={faqData} features={features} />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Compare Savings</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SSY} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-pink-50 transition-colors group">
                                    <span className="text-xl mr-3">👧</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-pink-700">SSY (For Daughter)</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.FD} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🏛️</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Bank FD</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
