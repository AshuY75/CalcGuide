import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function PercentageCalculator() {
    const [calcType, setCalcType] = useState('percentOf') // percentOf, whatPercent, changedBy
    const [val1, setVal1] = useState('')
    const [val2, setVal2] = useState('')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculate = () => {
        const v1 = parseFloat(val1)
        const v2 = parseFloat(val2)

        if (isNaN(v1) || isNaN(v2)) return

        let res = 0
        let text = ''
        let explanation = ''

        switch (calcType) {
            case 'percentOf':
                // What is X% of Y?
                res = (v1 / 100) * v2
                text = `${res}`
                explanation = `${v1} / 100 × ${v2} = ${res}`
                break
            case 'whatPercent':
                // X is what % of Y?
                res = (v1 / v2) * 100
                text = `${res.toFixed(2)}%`
                explanation = `${v1} / ${v2} × 100 = ${res.toFixed(2)}%`
                break
            case 'percentChange':
                // % change from X to Y
                if (v1 === 0) {
                    text = 'Infinity'
                    res = 0
                    explanation = `Cannot divide by zero.`
                } else {
                    res = ((v2 - v1) / v1) * 100
                    const type = res > 0 ? 'Increase' : 'Decrease'
                    text = `${Math.abs(res).toFixed(2)}% (${type})`
                    explanation = `(${v2} - ${v1}) / ${v1} × 100 = ${res.toFixed(2)}%`
                }
                break
        }

        setResult({ value: res, text, explanation })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const features = [
        { title: "Universal", desc: "Solves all 3 types of percentage problems: Find %, Find Value, and % Change.", icon: "🧮" },
        { title: "Instant", desc: "No complex steps. Just enter values and get the answer immediately.", icon: "⚡" },
        { title: "Mobile Friendly", desc: "Big inputs and simple layout for easy use on phones.", icon: "📱" },
    ]

    const faqData = [
        { question: "How to calculate percentage of a number?", answer: "To find X% of Y, simply multiply Y by X and divide by 100. Example: 20% of 500 = (500 × 20) / 100 = 100." },
        { question: "How to find percentage increase?", answer: "Subtract original value from new value, divide by original value, then multiply by 100. Formula: ((New - Old) / Old) × 100." },
        { question: "How to calculate marks percentage?", answer: "Divide your Total Marks Obtained by Maximum Possible Marks and multiply by 100. Example: 450/500 × 100 = 90%." },
        { question: "Is there a simple trick for percentages?", answer: "Yes! X% of Y is the same as Y% of X. So, 8% of 25 is hard, but 25% of 8 is easily 2." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <Helmet>
                <title>Percentage Calculator - Calculate % Increase, Decrease & Difference</title>
                <meta name="description" content="Use our free Percentage Calculator to find Percentage of a number, Percentage Increase/Decrease, and Marks Percentage. Quick, accurate, and easy." />
                <link rel="canonical" href="https://calcguide.com/percentage" />
            </Helmet>
            <SchemaGenerator
                name="Percentage Calculator"
                description="Solve percentage problems: Find %, % Change, and what % is X of Y."
                url="https://calcguide.com/percentage"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Percentage Calculator</h1>
                    <p className="text-slate-600">Solve common percentage problems instantly</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="flex flex-wrap gap-2 mb-8 bg-slate-100 p-1 rounded-lg">
                                <button onClick={() => { setCalcType('percentOf'); setResult(null); setVal1(''); setVal2('') }} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${calcType === 'percentOf' ? 'bg-white text-blue-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}>% of Value</button>
                                <button onClick={() => { setCalcType('whatPercent'); setResult(null); setVal1(''); setVal2('') }} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${calcType === 'whatPercent' ? 'bg-white text-blue-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}>What % is?</button>
                                <button onClick={() => { setCalcType('percentChange'); setResult(null); setVal1(''); setVal2('') }} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${calcType === 'percentChange' ? 'bg-white text-blue-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}>% Change</button>
                            </div>

                            <div className="space-y-6">
                                {calcType === 'percentOf' && (
                                    <div className="flex flex-col sm:flex-row items-center gap-4 text-lg justify-center bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300">
                                        <span>What is</span>
                                        <input type="number" value={val1} onChange={(e) => setVal1(e.target.value)} className="w-24 p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-center font-bold" placeholder="%" />
                                        <span>% of</span>
                                        <input type="number" value={val2} onChange={(e) => setVal2(e.target.value)} className="w-32 p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-center font-bold" placeholder="Value" />
                                    </div>
                                )}

                                {calcType === 'whatPercent' && (
                                    <div className="flex flex-col sm:flex-row items-center gap-4 text-lg justify-center bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300">
                                        <input type="number" value={val1} onChange={(e) => setVal1(e.target.value)} className="w-32 p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-center font-bold" placeholder="Value" />
                                        <span>is what % of</span>
                                        <input type="number" value={val2} onChange={(e) => setVal2(e.target.value)} className="w-32 p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-center font-bold" placeholder="Total" />
                                    </div>
                                )}

                                {calcType === 'percentChange' && (
                                    <div className="flex flex-col sm:flex-row items-center gap-4 text-lg justify-center bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300">
                                        <span>From</span>
                                        <input type="number" value={val1} onChange={(e) => setVal1(e.target.value)} className="w-32 p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-center font-bold" placeholder="Old" />
                                        <span>to</span>
                                        <input type="number" value={val2} onChange={(e) => setVal2(e.target.value)} className="w-32 p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-center font-bold" placeholder="New" />
                                    </div>
                                )}

                                <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">Calculate Result</button>

                                {/* Inline Result */}
                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-blue-50 rounded-xl p-8 text-center border border-blue-100">
                                            <p className="text-sm uppercase tracking-wide text-blue-600 font-bold mb-2">Answer</p>
                                            <p className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4">{result.text}</p>
                                            <div className="inline-block bg-white px-4 py-2 rounded-lg border border-blue-200 text-slate-600 font-mono text-sm shadow-sm">
                                                {result.explanation}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <SEOSection title="About Percentage Calculator" faq={faqData} features={features}>
                            <h3>Real Industry Uses</h3>
                            <ul>
                                <li><strong>Shopping:</strong> Calculate discount prices during sales (e.g., "Flat 40% OFF").</li>
                                <li><strong>Finance:</strong> Calculate GST (18%), Interest Rates, or ROI.</li>
                                <li><strong>Education:</strong> Convert CGPA to Percentage or check marks %.</li>
                            </ul>
                        </SEOSection>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Tools</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIMPLE_INTEREST} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">📉</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Simple Interest</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.UTILITY.AGE} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🎂</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Age Calculator</p>
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
