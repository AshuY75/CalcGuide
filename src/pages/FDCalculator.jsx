import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function FDCalculator() {
    const [principal, setPrincipal] = useState('100000')
    const [interestRate, setInterestRate] = useState('6.5')
    const [timePeriod, setTimePeriod] = useState('5')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateFD = () => {
        const P = parseFloat(principal)
        const r = parseFloat(interestRate)
        const t = parseFloat(timePeriod)

        // Quarterly Compounding (Standard Indian Bank FD logic)
        const A = P * Math.pow((1 + r / 400), 4 * t)
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
        { question: "How is FD Interest calculated in India?", answer: "Most Indian banks comply with RBI guidelines and calculate FD interest using 'Quarterly Compounding'. This means your interest earns interest 4 times a year." },
        { question: "Is FD interest taxable?", answer: "Yes, interest earned from Fixed Deposits is fully taxable as per your Income Tax Slab. Banks also deduct TDS (10%) if interest exceeds ₹40,000/year (₹50k for seniors)." },
        { question: "Which bank gives the highest FD rate?", answer: "Generally, Small Finance Banks (like AU, Equitas) offer higher rates (8-9%) compared to larger PSU banks (SBI, BoB) which offer around 6.5-7.5%." },
        { question: "Can I withdraw FD before maturity?", answer: "Yes, but you will be charged a penalty (usually 0.5% to 1%) on the interest rate, and you will receive lower interest for the period the money was kept." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <Helmet>
                <title>FD Calculator - Calculate Fixed Deposit Interest & Maturity Amount</title>
                <meta name="description" content="Calculate FD Returns instantly with quarterly compounding support. Check Maturity Amount and Total Interest for SBI, HDFC, ICICI, and Post Office FDs." />
                <link rel="canonical" href="https://calcguide.com/fd" />
            </Helmet>
            <SchemaGenerator
                name="FD Calculator"
                description="Calculate Fixed Deposit Maturity Amount with Quarterly Compounding."
                url="https://calcguide.com/fd"
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
                                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Total Investment</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span><input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="100000" /></div></div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div><label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate (%)</label><input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="6.5" /></div>
                                    <div><label className="block text-sm font-semibold text-slate-700 mb-2">Time Period (Years)</label><input type="number" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="5" /></div>
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
                            <h3>What is an FD Calculator?</h3>
                            <p>
                                An FD Calculator helps you determine exactly how much money you will get at the time of maturity. It considers the <strong>Quarterly Compounding</strong> logic used by Indian banks, which manual calculation often misses.
                            </p>
                        </SEOSection>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Invest Smartly</h4>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
