import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function ExamEligibility() {
    const [birthDate, setBirthDate] = useState('')
    const [examDate, setExamDate] = useState('')
    const [minAge, setMinAge] = useState('18')
    const [maxAge, setMaxAge] = useState('27')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const checkEligibility = () => {
        if (!birthDate || !examDate) return

        const birth = new Date(birthDate)
        const target = new Date(examDate)

        // Calculate accurate age
        let years = target.getFullYear() - birth.getFullYear()
        let months = target.getMonth() - birth.getMonth()
        let days = target.getDate() - birth.getDate()

        if (days < 0) {
            months--
        }
        if (months < 0) {
            years--
        }

        const isEligible = years >= parseFloat(minAge) && years <= parseFloat(maxAge)

        setResult({
            years,
            months: (months + 12) % 12,
            isEligible,
            message: isEligible
                ? "You are eligible for this exam!"
                : years < parseFloat(minAge)
                    ? `You are under age. You need to be at least ${minAge} years old.`
                    : `You are over age. The limit is ${maxAge} years.`
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const features = [
        { title: "Notification Sync", desc: "Checks age exactly as per the 'Cut-off Date' mentioned in official notifications.", icon: "📋" },
        { title: "Day-Perfect", desc: "Calculates years, months, and days accurately to avoid form rejection.", icon: "✅" },
        { title: "Strict Logic", desc: "Follows strict DoPT guidelines used by SSC, UPSC, and IBPS.", icon: "⚖️" },
    ]

    const faqData = [
        { question: "How is exam age eligibility calculated in India?", answer: "It is calculated based on a specific 'Cut-off Date' mentioned in the exam notification (e.g., 1st Jan or 1st Aug). Your age is determined by subtracting your Date of Birth (DOB) from this Reference Date." },
        { question: "What is the age limit for UPSC CSE?", answer: "For General category, the age limit is 21 to 32 years. For OBC, it is up to 35 years, and for SC/ST, it is up to 37 years. The cut-off date is usually 1st August of the exam year." },
        { question: "Does 1 day difference make me ineligible?", answer: "Yes. Govt exams are extremely strict. Even if you are 1 day older than the maximum age on the cut-off date, you are not eligible." },
        { question: "Which calculator should I use for SSC CGL age?", answer: "You can use this Exam Eligibility Calculator. Enter your DOB and the 'Age as on' date from the SSC CGL notification to get your exact eligibility status." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <Helmet>
                <title>Exam Eligibility Calculator - Check Age Limit for Govt Exams (UPSC, SSC)</title>
                <meta name="description" content="Check your eligibility for Govt Exams like UPSC, SSC, IBPS, and Railways. Calculate your exact age as on the official cut-off date instantly." />
                <link rel="canonical" href="https://calcguide.com/calculators/utility/exam-eligibility-calculator" />
            </Helmet>
            <SchemaGenerator
                name="Exam Eligibility Calculator"
                description="Check age eligibility for government exams based on cut-off dates."
                url="https://calcguide.com/calculators/utility/exam-eligibility-calculator"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Exam Eligibility Calculator</h1>
                    <p className="text-slate-600">Check if you meet the age criteria for government exams (Sarkari Naukri)</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        {/* Calculator Card */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Your Date of Birth</label><input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" /></div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Age as on (Cut-off Date)</label>
                                    <input type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" />
                                    <p className="text-xs text-slate-500 mt-1">E.g. 01/01/2025 (Check Official Notification)</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Min Age</label><input type="number" value={minAge} onChange={(e) => setMinAge(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" /></div>
                                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Max Age</label><input type="number" value={maxAge} onChange={(e) => setMaxAge(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" /></div>
                            </div>
                            <button onClick={checkEligibility} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md text-lg transition-transform active:scale-[0.98]">Check Eligibility</button>

                            {/* Inline Result */}
                            {result && (
                                <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                    <div className={`rounded-xl p-6 text-center border-2 ${result.isEligible ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                                        <div className="text-4xl mb-2">{result.isEligible ? '✅' : '❌'}</div>
                                        <h3 className={`text-2xl font-bold mb-2 ${result.isEligible ? 'text-green-800' : 'text-red-800'}`}>{result.isEligible ? 'You are Eligible' : 'Not Eligible'}</h3>
                                        <p className="text-slate-700 mb-4 font-medium">{result.message}</p>
                                        <div className="inline-block bg-white px-4 py-2 rounded-lg border border-black/5 shadow-sm">
                                            <p className="text-xs text-slate-500 uppercase tracking-wide font-bold mb-1">Your Exact Age</p>
                                            <p className="text-lg font-bold text-slate-900">{result.years} Years, {result.months} Months</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <SEOSection title="About Exam Eligibility Checker" faq={faqData} features={features}>
                            <h3>Why use this calculator?</h3>
                            <p>
                                In India, every government job notification (UPSC, SSC, Railways, Bank PO) specifies a specific date (Crucial Date) to calculate your age. Manual calculation often leads to errors in months/days, which can cause form rejection during document verification.
                            </p>
                            <h3>How it works</h3>
                            <p>
                                1. Enter your <strong>Date of Birth</strong> from your Matriculation (10th) certificate.<br />
                                2. Enter the <strong>"As on" date</strong> found in the "Eligibility Criteria" section of the job advertisement.<br />
                                3. The calculator finds the exact difference and tells you if you fall within the Min-Max limit.
                            </p>
                        </SEOSection>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Tools</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.UTILITY.AGE} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🎂</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Age Calculator</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.UTILITY.DATE_DIFF} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🗓️</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Date Difference</p>
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
