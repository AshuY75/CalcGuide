import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function CompoundInterestCalculator() {
    const [principal, setPrincipal] = useState('10000')
    const [rate, setRate] = useState('8')
    const [time, setTime] = useState('5')
    const [frequency, setFrequency] = useState('1') // 1 = yearly, 2 = half-yearly, 4 = quarterly, 12 = monthly
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculate = () => {
        const P = parseFloat(principal)
        const R = parseFloat(rate)
        const T = parseFloat(time)
        const n = parseInt(frequency)

        if (isNaN(P) || isNaN(R) || isNaN(T)) return

        // A = P(1 + r/n)^(nt)
        const A = P * Math.pow((1 + (R / 100) / n), n * T)
        const CI = A - P

        setResult({
            interest: Math.round(CI),
            amount: Math.round(A)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const features = [
        { title: "Power of Compounding", desc: "See how money multiplies faster over time (Interest on Interest).", icon: "🚀" },
        { title: "Flexible Frequency", desc: "Supports Yearly, Half-Yearly, Quarterly, and Monthly compounding.", icon: "🔄" },
        { title: "Compare Returns", desc: "Check why FDs (High Compounding) are better than Simple Interest.", icon: "📈" },
    ]

    const faqData = [
        { question: "What is Compound Interest?", answer: "Compound Interest is when you earn interest on both the money you've saved and the interest you earn. It is often called 'Interest on Interest'." },
        { question: "How often do banks compound interest?", answer: "In India, most banks compound interest Quarterly (every 3 months) for Fixed Deposits. Savings accounts usually calculate interest Daily but credit it Quarterly." },
        { question: "What is the formula for Compound Interest?", answer: "A = P(1 + r/n)^(nt). Here A is Amount, P is Principal, r is rate, n is compounding frequency per year, and t is time in years." },
        { question: "Why is CI better than SI for investors?", answer: "Because your money grows exponentially. In SI, your ₹100 interest sits idle. In CI, that ₹100 starts earning its own interest next year." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <Helmet>
                <title>Compound Interest Calculator - Calculate CI Returns Online</title>
                <meta name="description" content="Calculate Compound Interest (CI) with Yearly, Half-Yearly, Quarterly, or Monthly compounding. See the power of compounding for your investments." />
                <link rel="canonical" href="https://calcguide.com/calculators/investment/compound-interest-calculator" />
            </Helmet>
            <SchemaGenerator
                name="Compound Interest Calculator"
                description="Calculate compound interest with flexible compounding frequencies."
                url="https://calcguide.com/calculators/investment/compound-interest-calculator"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Compound Interest Calculator</h1>
                    <p className="text-slate-600">Calculate how your investments grow with the power of compounding</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Principal Amount (₹)</label><input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="10000" /></div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div><label className="block text-sm font-semibold text-slate-700 mb-2">Rate (% p.a)</label><input type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="8" /></div>
                                    <div><label className="block text-sm font-semibold text-slate-700 mb-2">Time (Years)</label><input type="number" value={time} onChange={(e) => setTime(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="5" /></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Compounding Frequency</label>
                                    <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg bg-white">
                                        <option value="1">Yearly (1x)</option>
                                        <option value="2">Half-Yearly (2x)</option>
                                        <option value="4">Quarterly (4x - Standard FD)</option>
                                        <option value="12">Monthly (12x)</option>
                                    </select>
                                </div>
                                <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">Calculate Returns</button>

                                {/* Inline Result */}
                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-blue-50 rounded-xl p-6 mb-6 text-center border border-blue-100">
                                            <p className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-1">Maturity Amount</p>
                                            <p className="text-4xl sm:text-5xl font-extrabold text-blue-900">₹{result.amount.toLocaleString('en-IN')}</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                                <p className="text-xs text-slate-500 font-semibold uppercase">Principal</p>
                                                <p className="text-lg font-bold text-slate-800">₹{parseFloat(principal).toLocaleString('en-IN')}</p>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                                                <p className="text-xs text-green-700 font-semibold uppercase">Compound Interest</p>
                                                <p className="text-lg font-bold text-green-700">+ ₹{result.interest.toLocaleString('en-IN')}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <SEOSection title="About Compound Interest" faq={faqData} features={features}>
                            <h3>The Magic of Compounding Example</h3>
                            <p>
                                Imagine investing <strong>₹1 Lakh</strong> at <strong>10%</strong> for <strong>20 years</strong>.
                                <br />
                                Using <strong>Simple Interest</strong>, you earn ₹2 Lakh interest. Total: <strong>₹3 Lakh.</strong>
                                <br />
                                Using <strong>Compound Interest</strong>, you earn ₹5.7 Lakh interest. Total: <strong>₹6.7 Lakh!</strong>
                                <br />
                                That extra ₹3.7 Lakh is pure magic of time and compounding.
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
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIMPLE_INTEREST} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">📉</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Simple Interest</p>
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
