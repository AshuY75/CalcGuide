import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function NPSCalculator() {
    const [monthlyInvestment, setMonthlyInvestment] = useState('10000')
    const [interestRate, setInterestRate] = useState('10')
    const [currentAge, setCurrentAge] = useState('25')
    const [annuityPercent, setAnnuityPercent] = useState('40')
    const [result, setResult] = useState(null)
    const resultRef = useRef(null)

    const calculateNPS = () => {
        const monthly = parseFloat(monthlyInvestment)
        const rate = parseFloat(interestRate) / 100 / 12
        const age = parseInt(currentAge)
        const yearsToInvest = 60 - age
        const months = yearsToInvest * 12
        const annuityP = parseFloat(annuityPercent) / 100

        if (isNaN(monthly) || isNaN(rate) || isNaN(age) || yearsToInvest <= 0) return

        // Future Value of Annuity Formula: FV = P * [((1 + r)^n - 1) / r]
        const totalCorpus = monthly * (Math.pow(1 + rate, months) - 1) / rate * (1 + rate)
        const totalInvested = monthly * months
        const gain = totalCorpus - totalInvested

        const annuityAmount = totalCorpus * annuityP
        const lumpSumAmount = totalCorpus * (1 - annuityP)

        // Estimated monthly pension assuming 6% annuity rate
        const estimatedPension = (annuityAmount * 0.06) / 12

        setResult({
            totalCorpus: Math.round(totalCorpus),
            totalInvested: Math.round(totalInvested),
            totalGain: Math.round(gain),
            annuityAmount: Math.round(annuityAmount),
            lumpSumAmount: Math.round(lumpSumAmount),
            estimatedPension: Math.round(estimatedPension),
            yearsToInvest
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "Is NPS better than PPF for retirement?", answer: "NPS is market-linked and usually offers higher returns (10-12%) than PPF (7.1%). However, NPS has a lock-in until age 60 and 40% of the corpus must be used to buy an annuity, whereas PPF is fully tax-free and matures in 15 years." },
        { question: "What are the tax benefits of NPS?", answer: "NPS offers an additional tax deduction of up to ₹50,000 under Section 80CCD(1B), which is over and above the ₹1.5 Lakh limit of Section 80C." },
        { question: "Can I withdraw the full NPS amount at 60?", answer: "No. Under current rules, you can withdraw up to 60% of the corpus as a tax-free lump sum. The remaining 40% must be mandatorily invested in an annuity plan to provide a monthly pension." }
    ]

    const features = [
        { title: "Retirement Projection", desc: "Calculate your corpus based on your current age and monthly savings target.", icon: "👵" },
        { title: "Pension Estimator", desc: "See your estimated monthly pension based on the mandatory annuity purchase.", icon: "💰" },
        { title: "Tax Optimization", icon: "🛡️", desc: "Helps you plan for the additional ₹50,000 tax deduction unique to NPS." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="NPS Calculator (National Pension System)"
                description="Project your pension and retirement corpus with our detailed NPS Calculator for India."
                url="https://calcguide.in/calculators/investment/nps-calculator"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.INVESTMENT} className="hover:text-blue-600">Investment Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">NPS Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">NPS Calculator</h1>
                    <p className="text-slate-600">Plan your retirement and estimate your monthly pension</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Investment (₹)</label>
                                        <input
                                            type="number"
                                            value={monthlyInvestment}
                                            onChange={(e) => setMonthlyInvestment(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Expected Return (%)</label>
                                        <input
                                            type="number"
                                            value={interestRate}
                                            onChange={(e) => setInterestRate(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Current Age (Years)</label>
                                        <input
                                            type="number"
                                            value={currentAge}
                                            onChange={(e) => setCurrentAge(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Annuity Percent (%)</label>
                                        <select
                                            value={annuityPercent}
                                            onChange={(e) => setAnnuityPercent(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg bg-white"
                                        >
                                            <option value="40">40% (Minimum)</option>
                                            <option value="60">60%</option>
                                            <option value="80">80%</option>
                                            <option value="100">100%</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    onClick={calculateNPS}
                                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-95 transition-transform"
                                >
                                    Calculate Retirement Plan
                                </button>

                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-slate-950 rounded-xl p-6 mb-6 text-center text-white shadow-2xl relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-2 opacity-10 text-6xl">👴</div>
                                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Total Maturity Corpus</p>
                                            <p className="text-5xl font-extrabold">₹{result.totalCorpus.toLocaleString('en-IN')}</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                                                <p className="text-[10px] text-emerald-600 font-bold uppercase">Tax-Free Lump Sum</p>
                                                <p className="text-xl font-bold text-emerald-900">₹{result.lumpSumAmount.toLocaleString('en-IN')}</p>
                                            </div>
                                            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                                                <p className="text-[10px] text-amber-600 font-bold uppercase">Estimated Pension/mo</p>
                                                <p className="text-xl font-bold text-amber-900">₹{result.estimatedPension.toLocaleString('en-IN')}</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-2">
                                            <div className="bg-slate-50 p-3 rounded-lg text-center">
                                                <p className="text-[9px] text-slate-500 font-bold uppercase">Years Left</p>
                                                <p className="text-sm font-bold text-slate-800">{result.yearsToInvest}</p>
                                            </div>
                                            <div className="bg-slate-50 p-3 rounded-lg text-center">
                                                <p className="text-[9px] text-slate-500 font-bold uppercase">Invested</p>
                                                <p className="text-sm font-bold text-slate-800">₹{result.totalInvested.toLocaleString('en-IN')}</p>
                                            </div>
                                            <div className="bg-green-50 p-3 rounded-lg text-center">
                                                <p className="text-[9px] text-green-600 font-bold uppercase">Growth</p>
                                                <p className="text-sm font-bold text-green-700">₹{result.totalGain.toLocaleString('en-IN')}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="Understanding the NPS Ecosystem"
                            whatIs="The National Pension System (NPS) is a government-promoted retirement savings scheme. It allows you to invest in a mix of equity and debt (Corporate/Govt bonds) to build a retirement corpus. At age 60, you can withdraw a portion and must use the rest for a lifelong pension."
                            whoShouldUse="Anyone looking for a structured retirement plan with lower fund management costs and higher tax benefits than PF/PPF. It is especially useful for young professionals who can benefit from compounding over 30+ years."
                            example="If you start at age 25 and invest ₹10,000 monthly for 35 years at 10% returns, you will build a massive corpus of approximately ₹3.8 Crores. At age 60, you can take ₹2.2 Crores tax-free and receive a monthly pension of around ₹76,000 for life."
                            commonMistake="Ignoring the 'Annuity' part. People think they will get the full amount at 60. You actually get 60% as cash; the rest stays within an insurance company to pay you a monthly salary for the rest of your life."
                        />

                        <SEOSection title="NPS Tier 1 Benefits" faq={faqData} features={features} />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Retirement Links</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.TAX.EPF} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🏢</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">EPF Calculator</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SWP} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🔄</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">SWP Returns</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
