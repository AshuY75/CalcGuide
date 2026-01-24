import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import MetaManager from '../components/MetaManager'
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
            <MetaManager
                title="FD Calculator - Fixed Deposit Interest Rate Calculator India"
                description="Calculate FD Returns instantly with quarterly compounding support. Check Maturity Amount and Total Interest for SBI, HDFC, ICICI, and Post Office FDs."
                keywords="fd calculator, fixed deposit calculator, fd interest calculator, bank fd rates"
            />
            <SchemaGenerator
                name="FD Calculator"
                description="Calculate Fixed Deposit Maturity Amount with Quarterly Compounding."
                url="https://calcguide.in/calculators/investment/fd-calculator"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

                        <SEOSection title="About Fixed Deposits (FD)" faq={faqData} features={features}>
                            <h3>What is a Fixed Deposit?</h3>
                            <p>
                                A Fixed Deposit (FD) is a financial instrument provided by banks and NBFCs which provides investors a higher rate of interest than a regular savings account, until the given maturity date. It is considered one of the safest investment options.
                            </p>
                            <h3>How FD interest works</h3>
                            <p>
                                In India, FD interest is typically compounded <strong>quarterly</strong>. This means if you invest ₹1 Lakh at 6% p.a., the interest is calculated every 3 months and added to the principal. The next interest is calculated on this increased principal. This "interest on interest" effect yields slightly higher returns than simple interest.
                            </p>
                            <h3>When is FD better than SIP?</h3>
                            <p>
                                FDs are ideal when you cannot afford to take any risk with your principal (e.g., saving for a wedding in 1 year, or parking emergency funds). SIPs in equity mutual funds are better for long-term wealth creation (5+ years) where you can tolerate market fluctuations for higher returns.
                            </p>
                            <h3>Taxation on FD</h3>
                            <p className="text-sm bg-yellow-50 p-3 rounded-lg border border-yellow-100 text-yellow-800">
                                <strong>Note:</strong> Interest from FDs is fully taxable. It is added to your annual income and taxed as per your slab. Banks deduct 10% TDS if interest exceeds ₹40,000 (₹50,000 for senior citizens) in a financial year.
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
