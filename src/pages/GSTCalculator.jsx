import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function GSTCalculator() {
    const [amount, setAmount] = useState('1000')
    const [rate, setRate] = useState('18')
    const [isInclusive, setIsInclusive] = useState(false) // false = Add GST, true = Remove GST
    const [result, setResult] = useState(null)
    const resultRef = useRef(null)

    const calculateGST = () => {
        const amt = parseFloat(amount)
        const r = parseFloat(rate)
        if (isNaN(amt) || isNaN(r)) return

        let gstAmount = 0
        let totalAmount = 0
        let netAmount = 0

        if (!isInclusive) {
            // Add GST
            gstAmount = (amt * r) / 100
            totalAmount = amt + gstAmount
            netAmount = amt
        } else {
            // Remove GST (Reverse calculation)
            netAmount = amt / (1 + r / 100)
            gstAmount = amt - netAmount
            totalAmount = amt
        }

        setResult({
            netAmount: netAmount.toFixed(2),
            gstAmount: gstAmount.toFixed(2),
            totalAmount: totalAmount.toFixed(2),
            cgst: (gstAmount / 2).toFixed(2),
            sgst: (gstAmount / 2).toFixed(2)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "What are the common GST slabs in India?", answer: "The most common GST slabs are 5%, 12%, 18%, and 28%. Basic necessities usually fall under 5%, whereas luxury items can go up to 28%." },
        { question: "How to calculate GST inclusive price (Reverse GST)?", answer: "To remove GST from a price, use the formula: Original Cost = Total Price / (1 + GST Rate / 100). For example, if total is ₹118 and rate is 18%, Original = 118 / 1.18 = ₹100." },
        { question: "Is CGST and SGST always 50-50?", answer: "For intra-state transactions (within the same state), GST is split equally between CGST (Central) and SGST (State). For inter-state transactions, the full amount is called IGST (Integrated GST)." }
    ]

    const features = [
        { title: "Inclusive & Exclusive", desc: "Toggle between adding GST to a price or extracting it from an all-inclusive price.", icon: "🔄" },
        { title: "Standard Slabs", desc: "Quick-select 5%, 12%, 18%, and 28% for faster data entry.", icon: "⚡" },
        { title: "CGST/SGST Breakdown", desc: "See exactly how much tax goes to the Central and State governments.", icon: "🏢" }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="Indian GST Calculator"
                description="Easily calculate GST (Inclusive/Exclusive) with CGST and SGST breakdown for 2025."
                url="https://calcguide.in/calculators/tax/gst-calculator"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.TAX} className="hover:text-blue-600">Tax Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">GST Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">GST Calculator (2025)</h1>
                    <p className="text-slate-600">Calculate CGST, SGST & IGST in seconds</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div className="flex bg-slate-100 p-1 rounded-lg">
                                    <button
                                        onClick={() => setIsInclusive(false)}
                                        className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${!isInclusive ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
                                    >
                                        Exclusive (Add GST)
                                    </button>
                                    <button
                                        onClick={() => setIsInclusive(true)}
                                        className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${isInclusive ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
                                    >
                                        Inclusive (Extract)
                                    </button>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Total Amount (₹)</label>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                        placeholder="1000"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">GST Rate (%)</label>
                                    <div className="grid grid-cols-4 gap-2 mb-3">
                                        {['5', '12', '18', '28'].map(val => (
                                            <button
                                                key={val}
                                                onClick={() => setRate(val)}
                                                className={`py-2 text-sm font-bold border rounded-lg transition-all ${rate === val ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white text-slate-600 hover:border-blue-400'}`}
                                            >
                                                {val}%
                                            </button>
                                        ))}
                                    </div>
                                    <input
                                        type="number"
                                        value={rate}
                                        onChange={(e) => setRate(e.target.value)}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                        placeholder="Custom Rate"
                                    />
                                </div>

                                <button
                                    onClick={calculateGST}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-95 transition-transform"
                                >
                                    Calculate GST
                                </button>

                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-slate-900 rounded-xl p-6 mb-6 text-center text-white shadow-xl">
                                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
                                                {isInclusive ? 'Price without GST' : 'Final Price with GST'}
                                            </p>
                                            <p className="text-5xl font-extrabold">
                                                ₹{parseFloat(isInclusive ? result.netAmount : result.totalAmount).toLocaleString('en-IN')}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
                                                <p className="text-[10px] text-blue-600 font-bold uppercase">Total GST</p>
                                                <p className="text-lg font-bold text-blue-900">₹{parseFloat(result.gstAmount).toLocaleString('en-IN')}</p>
                                            </div>
                                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                                <p className="text-[10px] text-slate-500 font-bold uppercase">CGST (50%)</p>
                                                <p className="text-lg font-bold text-slate-800">₹{parseFloat(result.cgst).toLocaleString('en-IN')}</p>
                                            </div>
                                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                                <p className="text-[10px] text-slate-500 font-bold uppercase">SGST (50%)</p>
                                                <p className="text-lg font-bold text-slate-800">₹{parseFloat(result.sgst).toLocaleString('en-IN')}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="GST Calculation Explained"
                            whatIs="Goods and Services Tax (GST) is an indirect tax used in India on the supply of goods and services. Our GST Calculator helps business owners, freelancers, and consumers calculate the specific tax amount based on the value of their goods and the applicable tax slab."
                            whoShouldUse="Perfect for shopkeepers billing customers, freelancers managing their invoices, or buyers checking if the quoted price already includes GST. It supports both Add GST (exclusive) and Remove GST (inclusive) modes."
                            example="If you buy a laptop for ₹50,000 + 18% GST, your total bill will be ₹59,000 (Add GST). If a hotel room is quoted at ₹5,000 including 12% GST, the base price is ₹4,464.29 and the tax is ₹535.71 (Extract GST)."
                            commonMistake="Manually calculating 18% of the inclusive price to 'remove' it. This is wrong. You must divide by 1.18, not multiply by 0.18, or you will over-calculate the tax part."
                        />

                        <SEOSection title="GST Compliance Tips" faq={faqData} features={features} />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Tax Tools</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.TAX.INCOME_TAX} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🏢</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Income Tax</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.TAX.HRA} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🏠</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">HRA Exemption</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
