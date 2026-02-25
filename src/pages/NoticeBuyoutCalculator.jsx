import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function NoticeBuyoutCalculator() {
    const [grossSalary, setGrossSalary] = useState('100000')
    const [totalNoticePeriod, setTotalNoticePeriod] = useState('90')
    const [servedNoticePeriod, setServedNoticePeriod] = useState('30')
    const [result, setResult] = useState(null)
    const resultRef = useRef(null)

    const calculateBuyout = () => {
        const gross = parseFloat(grossSalary)
        const total = parseFloat(totalNoticePeriod)
        const served = parseFloat(servedNoticePeriod)

        if (isNaN(gross) || isNaN(total) || isNaN(served) || served > total) return

        const daysToBuy = total - served
        // Daily rate based on 30 days month (standard HR practice or sometimes 22 working days)
        // Most Indian MNCs use 30 days divisor for buyout
        const dailyRate = gross / 30
        const buyoutCost = dailyRate * daysToBuy

        setResult({
            buyoutCost: Math.round(buyoutCost),
            daysToBuy,
            dailyRate: dailyRate.toFixed(2)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "Is notice period buyout taxable?", answer: "Yes. The amount paid for the notice period buyout is considered part of the employee's salary and is taxable as per the income tax slab. However, if the new employer reimburses this amount, it is often treated as a taxable perk unless structured as a joining bonus." },
        { question: "Can an employer refuse a notice period buyout?", answer: "Yes. The notice period is a contractual obligation. Unless your appointment letter explicitly mentions a buyout option at the employee's discretion, the employer has the right to insist you serve the full duration." },
        { question: "What is the standard notice period in India?", answer: "In the IT sector and corporate India, the standard notice period is typically 60 to 90 days. For junior roles or probation periods, it might be 15 to 30 days." }
    ]

    const features = [
        { title: "Precise Settlement", desc: "Calculate the exact amount you owe your current employer for an early release.", icon: "💸" },
        { title: "Remaining Days Tracker", desc: "Instantly see how many days are left to be 'bought out' based on your served time.", icon: "📆" },
        { title: "Gross Salary Logic", icon: "🏢", desc: "Uses standard Indian corporate formulas for monthly to daily rate conversion." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="Notice Period Buyout Calculator"
                description="Calculate the cost of early exit from your job by buying out your notice period days."
                url="https://calcguide.in/calculators/loan/notice-period-buyout-calculator/"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Notice Period Buyout</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Notice Period Buyout Calculator</h1>
                    <p className="text-slate-600">Estimate your exit settlement for an early release</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Gross Salary (₹)</label>
                                    <input
                                        type="number"
                                        value={grossSalary}
                                        onChange={(e) => setGrossSalary(e.target.value)}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                        placeholder="100000"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Total Notice Period (Days)</label>
                                        <input
                                            type="number"
                                            value={totalNoticePeriod}
                                            onChange={(e) => setTotalNoticePeriod(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                            placeholder="90"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Days Served (Days)</label>
                                        <input
                                            type="number"
                                            value={servedNoticePeriod}
                                            onChange={(e) => setServedNoticePeriod(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                            placeholder="30"
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={calculateBuyout}
                                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-95 transition-transform"
                                >
                                    Calculate Buyout Amount
                                </button>

                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-slate-50 rounded-xl p-8 text-center border border-slate-200 shadow-inner">
                                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Amount to be Paid</p>
                                            <p className="text-5xl font-black text-slate-900">₹{result.buyoutCost.toLocaleString('en-IN')}</p>
                                            <p className="mt-4 text-slate-500 text-sm">Equivalent to {result.daysToBuy} days of salary.</p>
                                        </div>

                                        <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100 flex items-start">
                                            <span className="text-xl mr-3">💡</span>
                                            <p className="text-xs text-amber-800 leading-relaxed">
                                                <strong>Tip:</strong> Many companies reimburse the notice period buyout as a "Joining Bonus" or "Relocation Bonus". Ensure you clarify with your next employer if they can cover this cost.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="Notice Period Buyout Strategy"
                            whatIs="A Notice Period Buyout is a financial settlement between an employee and an employer that allows the employee to leave before the official notice period ends. You pay the company for the days you don't serve, or more commonly, the amount is deducted from your final settlement."
                            whoShouldUse="Professionals who have received a new job offer and are required to join sooner than their current notice period allowing. It helps you prepare for the financial deduction in your full and final settlement (F&F)."
                            example="If your gross salary is ₹1.5 Lakh and your notice period is 90 days, but you want to leave in 30 days, you need to 'buy out' 60 days. The cost would be (1,50,000 / 30) * 60 = ₹3,00,000."
                            commonMistake="Ignoring GST. Some Indian companies levy 18% GST on the notice period recovery amount. Check your HR policy to see if the buyout amount is exclusive or inclusive of taxes."
                        />

                        <SEOSection title="Exit Formalities in India" faq={faqData} features={features} />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Professional Hub</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.TAX.GST} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🧾</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">GST Calculator</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.CREATOR.FREELANCE_RATE} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">👨‍💻</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Freelancer Rate</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
