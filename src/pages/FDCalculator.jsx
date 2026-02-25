import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function FDCalculator() {
    const [principal, setPrincipal] = useState('100000')
    const [interestRate, setInterestRate] = useState('6.5')
    const [timePeriod, setTimePeriod] = useState('5')
    // Standard Indian FD is Quarterly, but UI shows it for completeness as requested
    const [compoundingFreq, setCompoundingFreq] = useState('4')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateFD = () => {
        const P = parseFloat(principal)
        const r = parseFloat(interestRate)
        const t = parseFloat(timePeriod)
        const n = parseFloat(compoundingFreq) // 4 for Quarterly, 1 for Yearly, etc.

        // Formula: A = P * (1 + r/n)^(n*t) -> r is rate/100
        const A = P * Math.pow((1 + (r / 100) / n), n * t)
        const totalInterest = A - P

        setResult({
            principalAmount: Math.round(P),
            totalInterest: Math.round(totalInterest),
            maturityAmount: Math.round(A)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const features = [
        { title: "Quarterly Compounding", desc: "Calculates interest every 3 months (Standard for SBI, HDFC).", icon: "🗓️" },
        { title: "Safe Returns", desc: "Estimates guaranteed returns unlike market-linked tools.", icon: "✅" },
        { title: "Inflation Check", desc: "Helps you see if your money is growing fast enough.", icon: "📈" },
    ]

    const faqData = [
        { question: "Is FD risk-free?", answer: "Yes, Fixed Deposits in RBI-regulated banks are insured up to ₹5 Lakhs by DICGC. They are considered one of the safest investment options in India compared to mutual funds or stocks." },
        { question: "How is FD Interest calculated in India?", answer: "Most Indian banks comply with RBI guidelines and calculate FD interest using 'Quarterly Compounding'. This means your interest earns interest 4 times a year." },
        { question: "FD vs RD vs SIP - Which is better?", answer: "FD is best for lump sum investment with guaranteed returns. RD is for monthly savings with guaranteed returns. SIP is for monthly savings with market-linked (higher) returns but involves risk." },
        { question: "Can I withdraw FD before maturity?", answer: "Yes, but you will be charged a penalty (usually 0.5% to 1%) on the interest rate, and you will receive lower interest for the period the money was kept." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">

            <SchemaGenerator
                name="FD Calculator"
                description="Calculate Fixed Deposit Maturity Amount with Quarterly Compounding."
                url="https://calcguide.in/calculators/investment/fd-calculator/"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.INVESTMENT} className="hover:text-blue-600">Investment Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">FD Calculator</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">FD Calculator</h1>
                    <p className="text-slate-600">Calculate Fixed Deposit returns with quarterly compounding</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Total Investment (Principal)</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span><input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="100000" /></div></div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div><label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate (%)</label><input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="6.5" /></div>
                                    <div><label className="block text-sm font-semibold text-slate-700 mb-2">Time Period (Years)</label><input type="number" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="5" /></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Compounding Frequency</label>
                                    <select value={compoundingFreq} onChange={(e) => setCompoundingFreq(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg bg-white">
                                        <option value="4">Quarterly (Standard)</option>
                                        <option value="1">Yearly</option>
                                        <option value="2">Half-Yearly</option>
                                        <option value="12">Monthly</option>
                                    </select>
                                </div>

                                <button onClick={calculateFD} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">Calculate Maturity</button>

                                {/* Inline Result Section */}
                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-blue-50 rounded-xl p-6 mb-6 text-center border border-blue-100">
                                            <p className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-1">Maturity Amount</p>
                                            <p className="text-4xl sm:text-5xl font-extrabold text-blue-900">₹{result.maturityAmount.toLocaleString('en-IN')}</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                                <p className="text-xs text-slate-500 font-semibold uppercase">Invested</p>
                                                <p className="text-lg font-bold text-slate-800">₹{result.principalAmount.toLocaleString('en-IN')}</p>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                                                <p className="text-xs text-green-700 font-semibold uppercase">Interest</p>
                                                <p className="text-lg font-bold text-green-700">+ ₹{result.totalInterest.toLocaleString('en-IN')}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="FD Calculator"
                            whatIs="A Fixed Deposit (FD) Calculator estimates the maturity amount and interest earned on your deposit. In India, most bank FDs compound interest quarterly (every 3 months), meaning your interest starts earning interest. This calculator handles that formula accurately, unlike simple interest calculators."
                            whoShouldUse="This tool is perfect for risk-averse investors, senior citizens seeking guaranteed income, or anyone saving for a short-term goal (1-3 years) who cannot risk stock market volatility. If you want safety and predictable returns, FD is the right choice."
                            example="If you invest ₹1 Lakh for 5 years at 7% interest (compounded quarterly), you won't just get flat interest. Due to compounding, your maturity amount will be approximately ₹1,41,478, earning you ₹41,478 in interest."
                            commonMistake="Ignoring the tax liability (TDS). FD interest is fully taxable as per your income tax slab. Another mistake is breaking an FD before maturity, which attracts a penalty (usually 1%) and lowers your effective interest rate."
                        />

                        <SEOSection title="About Fixed Deposits" faq={faqData} features={features}>
                            <h3>Key Benefits of FD</h3>
                            <p>
                                <strong>Guaranteed Returns:</strong> Unlike the stock market, your returns are fixed when you book the FD.
                                <br />
                                <strong>Safety:</strong> Bank FDs are insured by DICGC up to ₹5 Lakhs.
                                <br />
                                <strong>Loan Facility:</strong> You can take a loan against your FD (usually up to 90% of value) at a low interest rate.
                            </p>
                        </SEOSection>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Tools</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">📈</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">SIP Calculator</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.RD} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🐖</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">RD Calculator</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.LOAN.EMI} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">💰</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">EMI Calculator</p>
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
