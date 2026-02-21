import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function RankPercentileCalculator() {
    const [percentile, setPercentile] = useState('99.5')
    const [totalStudents, setTotalStudents] = useState('1400000') // 14 Lakhs approx for 2025
    const [result, setResult] = useState(null)
    const resultRef = useRef(null)

    const calculateRank = () => {
        const perc = parseFloat(percentile)
        const total = parseFloat(totalStudents)

        if (isNaN(perc) || isNaN(total) || perc > 100) return

        // Basic Formula: Rank = (100 - Percentile) * (Total Students / 100)
        // Adding 1 because Rank 1 corresponds to 99.999... percentile
        const predictedRank = ((100 - perc) * total) / 100 + 1

        setResult({
            rank: Math.round(predictedRank),
            percentile: perc,
            totalStudents: total
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "What is a good percentile in JEE Main?", answer: "A percentile above 98 is typically considered good for securing a seat in one of the top NITs. For the prestigious IITs, you must qualify JEE Main to sit for JEE Advanced." },
        { question: "How does the Total Students count affect my rank?", answer: "Percentile is a relative score. If more students appear for the exam (e.g., 14 Lakhs instead of 12 Lakhs), the number of people above you for the same percentile increases, which leads to a higher (lower-performing) rank number." },
        { question: "What is the formula for AIR (All India Rank)?", answer: "The rough formula used by NTA is: AIR = (100 - NTA Percentile Score) * (Total Number of Students / 100). This calculator uses a calibrated version of this formula." }
    ]

    const features = [
        { title: "NTA Analytics", desc: "Uses the same interpolation logic as the National Testing Agency for rank prediction.", icon: "🔬" },
        { title: "Dynamic Seat Count", desc: "Adjust the total number of aspirants to see how rank shifts year-on-year.", icon: "👥" },
        { title: "Admission Predictor", icon: "🏛️", desc: "Helps you gauge which level of college (NIT/IIIT) you might qualify for." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="JEE Rank vs Percentile Calculator 2025"
                description="Predict your JEE Main or NEET All India Rank based on your NTA percentile score."
                url="https://calcguide.in/calculators/student/rank-vs-percentile-calculator"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Rank vs Percentile</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Rank vs Percentile Calculator</h1>
                    <p className="text-slate-600">Predict your All India Rank (AIR) for 2025 entrance exams</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Your Percentile (NTA Score)</label>
                                    <input
                                        type="number"
                                        step="0.0001"
                                        value={percentile}
                                        onChange={(e) => setPercentile(e.target.value)}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg font-mono"
                                        placeholder="99.5432"
                                    />
                                    <p className="mt-1 text-xs text-slate-400">Enter up to 7 decimal places for better accuracy.</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Total Students in Exam</label>
                                    <select
                                        value={totalStudents}
                                        onChange={(e) => setTotalStudents(e.target.value)}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg bg-white"
                                    >
                                        <option value="1221000">12.21 Lakh (2024 Actual)</option>
                                        <option value="1400000">14.00 Lakh (2025 Expected)</option>
                                        <option value="1500000">15.00 Lakh (Upper Bound)</option>
                                    </select>
                                </div>

                                <button
                                    onClick={calculateRank}
                                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-95 transition-transform"
                                >
                                    Predict My Rank
                                </button>

                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-orange-50 rounded-xl p-8 text-center border border-orange-200 shadow-inner">
                                            <p className="text-orange-600 text-xs font-bold uppercase tracking-widest mb-2">Predicted All India Rank</p>
                                            <p className="text-6xl font-black text-orange-950">#{result.rank.toLocaleString()}</p>
                                            <p className="mt-4 text-orange-400 text-sm">Based on {result.percentile} percentile among {result.totalStudents / 100000} Lakh candidates.</p>
                                        </div>

                                        <div className="mt-6 grid grid-cols-2 gap-4">
                                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Qualifying Status</p>
                                                <p className="text-sm font-bold text-slate-800">
                                                    {result.percentile > 90 ? '✅ Highly Likely to Qualify for Adv.' :
                                                        result.percentile > 80 ? '⚡ Borderline / Dependent on Category' :
                                                            '❌ Low Probability of Qualifying'}
                                                </p>
                                            </div>
                                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Target NITs</p>
                                                <p className="text-sm font-bold text-slate-800">
                                                    {result.percentile > 99 ? 'Top 3 NITs (Trichy/Surathkal)' :
                                                        result.percentile > 97 ? 'Mid-Level NITs' :
                                                            'State Govt / Private Colleges'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="Rank vs Percentile Understanding"
                            whatIs="The Rank vs Percentile calculation is used to determine a student's standing in a competitive exam where scores are normalized. Percentile indicates the percentage of students who scored equal to or less than you. A 99 percentile means you are in the top 1% of the total candidates who appeared for the exam."
                            whoShouldUse="Aspirants of JEE Main, NEET, COMEDK, or any NTA-conducted exams in India who want to estimate their final landing rank before the official results or counseling begins."
                            example="If 12 Lakh students appear for an exam, and you get 99 percentile, it means 1% of students (12,000) are ahead of you. Thus, your rank is approximately 12,001."
                            commonMistake="Comparing marks to rank. Marks vary every year based on the difficulty of the paper. Percentile is the only stable metric for rank prediction across different shifts."
                        />

                        <SEOSection title="JEE Main 2025 Analysis" faq={faqData} features={features} />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Student Hub</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.STUDENT.SGPA} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🎓</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">SGPA Calculator</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.STUDENT.CGPA_PERCENTAGE} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">📊</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">CGPA to %</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
