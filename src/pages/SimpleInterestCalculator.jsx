import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function SimpleInterestCalculator() {
    const [principal, setPrincipal] = useState('10000')
    const [rate, setRate] = useState('8')
    const [time, setTime] = useState('5')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculate = () => {
        const P = parseFloat(principal)
        const R = parseFloat(rate)
        const T = parseFloat(time)

        if (isNaN(P) || isNaN(R) || isNaN(T)) return

        // Formula: SI = (P * R * T) / 100
        const SI = (P * R * T) / 100
        const Amount = P + SI

        setResult({
            interest: Math.round(SI),
            amount: Math.round(Amount)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const features = [
        { title: "Standard Formula", desc: "Uses the universal SI = (P × R × T) / 100 logic.", icon: "📐" },
        { title: "Quick Estimates", desc: "Best for short-term personal loans or friendly lending.", icon: "⚡" },
        { title: "Total Payable", desc: "Shows both the interest component and final maturity amount.", icon: "💰" },
    ]

    const faqData = [
        { question: "What is Simple Interest?", answer: "Simple Interest (SI) is a quick method of calculating the interest charge on a loan. It is determined by multiplying the daily interest rate by the principal by the number of days that elapse between payments." },
        { question: "How is Simple Interest different from Compound Interest?", answer: "In Simple Interest, you earn interest ONLY on the principal amount. In Compound Interest, you earn interest on the Principal + Accumulated Interest. CI yields much higher returns over time." },
        { question: "What is the formula for Simple Interest?", answer: "SI = (P × R × T) / 100. Where P = Principal, R = Rate of Interest per year, and T = Time in years." },
        { question: "Is Simple Interest used by banks?", answer: "Rarely for savings. Banks mostly use Compound Interest for Savings/FDs. However, some short-term personal loans or informal sector loans still use Simple Interest logic." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">

            <SchemaGenerator
                name="Simple Interest Calculator"
                description="Calculate simple interest (SI) and total amount using principal, rate, and time."
                url="https://calcguide.in/calculators/investment/simple-interest-calculator/"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.INVESTMENT} className="hover:text-blue-600">Investment Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Simple Interest</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Simple Interest Calculator</h1>
                    <p className="text-slate-600">Calculate interest on loans instantly with the SI formula</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Principal Amount (₹)</label><input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="e.g. 10000" /></div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div><label className="block text-sm font-semibold text-slate-700 mb-2">Rate (% p.a)</label><input type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="8" /></div>
                                    <div><label className="block text-sm font-semibold text-slate-700 mb-2">Time (Years)</label><input type="number" value={time} onChange={(e) => setTime(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="5" /></div>
                                </div>
                                <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">Calculate SI</button>

                                {/* Inline Result */}
                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-blue-50 rounded-xl p-6 mb-6 text-center border border-blue-100">
                                            <p className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-1">Total Amount</p>
                                            <p className="text-4xl sm:text-5xl font-extrabold text-blue-900">₹{result.amount.toLocaleString('en-IN')}</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                                <p className="text-xs text-slate-500 font-semibold uppercase">Principal</p>
                                                <p className="text-lg font-bold text-slate-800">₹{parseFloat(principal).toLocaleString('en-IN')}</p>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                                                <p className="text-xs text-green-700 font-semibold uppercase">Total Interest</p>
                                                <p className="text-lg font-bold text-green-700">+ ₹{result.interest.toLocaleString('en-IN')}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="Simple Interest Calculator"
                            whatIs="Simple Interest (SI) is the easiest method of calculating interest on a loan or investment. Unlike Compound Interest, where interest earns interest, SI assumes interest is paid only on the original principal amount. This formula is standard for short-term personal loans."
                            whoShouldUse="Students learning finance, individuals lending money to friends/family, or borrowers checking interest on loans that don't compound (like some car loans or flat-rate personal loans)."
                            example="If you lend ₹10,000 to a friend at 10% annual interest for 3 years: Year 1 Interest = ₹1,000. Year 2 Interest = ₹1,000. Year 3 Interest = ₹1,000. Total Interest = ₹3,000. Total Repayment = ₹13,000."
                            commonMistake="Confusing SI with CI. Most banks use Compound Interest (CI) for savings and loans. Using this SI calculator for a Bank FD or Home Loan will give incorrect (lower) results because it ignores the 'interest on interest' effect."
                        />

                        <SEOSection title="About Simple Interest" faq={faqData} features={features}>
                            <h3>Real-world Example</h3>
                            <p>
                                If you borrow <strong>₹10,000</strong> from a friend at <strong>10%</strong> yearly interest for <strong>2 years</strong>:
                                <br />
                                Interest = (10,000 × 10 × 2) / 100 = <strong>₹2,000</strong>.
                                <br />
                                Total amount to repay = ₹10,000 + ₹2,000 = <strong>₹12,000</strong>.
                            </p>
                        </SEOSection>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Tools</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.COMPOUND_INTEREST} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🚀</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Compound Interest</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.LOAN.VILLAGE_INTEREST} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🌾</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Village Interest</p>
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
