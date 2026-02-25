import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function RentalYieldCalculator() {
    const [propertyValue, setPropertyValue] = useState('5000000') // 50 Lakhs
    const [monthlyRent, setMonthlyRent] = useState('20000')
    const [annualExpenses, setAnnualExpenses] = useState('15000') // Maintenance, Property Tax, etc
    const [result, setResult] = useState(null)
    const resultRef = useRef(null)

    const calculateYield = () => {
        const value = parseFloat(propertyValue)
        const rent = parseFloat(monthlyRent)
        const expenses = parseFloat(annualExpenses)

        if (isNaN(value) || isNaN(rent) || isNaN(expenses) || value <= 0) return

        const annualRent = rent * 12
        const grossYield = (annualRent / value) * 100
        const netYield = ((annualRent - expenses) / value) * 100

        setResult({
            annualRent,
            grossYield: grossYield.toFixed(2),
            netYield: netYield.toFixed(2),
            netAnnualIncome: annualRent - expenses
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "What is a good rental yield in India?", answer: "In India, residential rental yields are typically low, ranging from 2% to 4%. Commercial properties offer higher yields of 7% to 9%. A yield above 4% for a residential home is considered excellent." },
        { question: "Gross Yield vs Net Yield - What's the difference?", answer: "Gross Yield is calculated before any expenses. Net Yield subtracts costs like property tax, maintenance, and insurance, giving a more realistic picture of your actual profit." },
        { question: "Does rental yield include property appreciation?", answer: "No. Rental yield only measures the cash flow from rent. Real estate returns are a combination of rental yield and capital appreciation (increase in property value)." }
    ]

    const features = [
        { title: "Dual Yield Analysis", desc: "Compare gross and net returns to understand the hidden costs of ownership.", icon: "🏠" },
        { title: "Expense Tracking", desc: "Account for maintenance and taxes to see your true take-home rent.", icon: "📉" },
        { title: "Investment Grading", icon: "💎", desc: "Instantly see if your property is a high-yield asset or a low-performing one." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="Rental Yield Calculator"
                description="Determine the gross and net rental yield of your property investments in India."
                url="https://calcguide.in/calculators/real-estate/rental-yield-calculator/"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.REAL_ESTATE} className="hover:text-blue-600">Real Estate</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Rental Yield</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Rental Yield Calculator</h1>
                    <p className="text-slate-600">Calculate annual returns on your property investment</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Property Value (Current Market Price)</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">₹</span>
                                        <input
                                            type="number"
                                            value={propertyValue}
                                            onChange={(e) => setPropertyValue(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Rent (₹)</label>
                                        <input
                                            type="number"
                                            value={monthlyRent}
                                            onChange={(e) => setMonthlyRent(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Annual Expenses (₹)</label>
                                        <input
                                            type="number"
                                            value={annualExpenses}
                                            onChange={(e) => setAnnualExpenses(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={calculateYield}
                                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-95 transition-transform"
                                >
                                    Calculate Property Yield
                                </button>

                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="bg-slate-950 rounded-xl p-6 text-center text-white">
                                                <p className="text-slate-400 text-[10px] font-bold uppercase mb-1">Gross Yield</p>
                                                <p className="text-4xl font-black">{result.grossYield}%</p>
                                            </div>
                                            <div className="bg-emerald-600 rounded-xl p-6 text-center text-white">
                                                <p className="text-emerald-100 text-[10px] font-bold uppercase mb-1">Net Yield</p>
                                                <p className="text-4xl font-black">{result.netYield}%</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Annual Rental Income</p>
                                                <p className="text-lg font-bold text-slate-800">₹{result.annualRent.toLocaleString('en-IN')}</p>
                                            </div>
                                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Net Annual Profit</p>
                                                <p className="text-lg font-bold text-slate-800">₹{result.netAnnualIncome.toLocaleString('en-IN')}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="Mastering Real Estate Yields"
                            whatIs="Rental yield is the measure of the return on investment (ROI) you get from a property through the rent it earns. For Indian investors, this is the most critical metric alongside appreciation to determine if a city or locality is worth the high property prices found in metros like Mumbai, Bangalore, or Delhi."
                            whoShouldUse="Real estate investors, NRIs looking to buy property in India, and homeowners considering putting their second home on rent. It helps you compare real estate returns against other assets like FDs or Mutual Funds."
                            example="If you buy a flat in Pune for ₹80 Lakhs and it earns ₹25,000 monthly rent, your gross yield is 3.75%. After paying property tax and society maintenance of ₹30,000 yearly, your net yield drops to 3.37%."
                            commonMistake="Ignoring the 'Vacancy' factor. A property is rarely rented 12 months a year for 10 years straight. When calculating yield for serious investment, always assume a 1-month vacancy per year to be safe."
                        />

                        <SEOSection title="Rental Trends in India" faq={faqData} features={features} />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Property Links</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.REAL_ESTATE.CONSTRUCTION_COST} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🏗️</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Construction Estimator</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.LOAN.EMI} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🏠</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Home Loan EMI</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
