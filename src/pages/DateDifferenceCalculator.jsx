import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import SeoHead from '../components/SeoHead'
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

const features = [
    { title: "Include End Date", desc: "Choose whether to count the last day (useful for leave applications).", icon: "➕" },
    { title: "Exact Duration", desc: "Shows Years, Months, Days AND Total Days count.", icon: "📅" },
    { title: "Week Breakdown", desc: "Also shows duration in Weeks + Days format.", icon: "🗓️" },
]

const faqData = [
    { question: "How to calculate days between two dates?", answer: "The simplest formula is End Date - Start Date. Our calculator handles leap years and variable month lengths automatically." },
    { question: "Does this include the start and end dates?", answer: "By default, calculators usually exclude the last day (span). However, we provide a checkbox 'Include End Date' to count it, which is standard for Leave/Notice Period calculations." },
    { question: "How many working days in a year?", answer: "Typically, there are about 250-260 working days in a year (excluding weekends). This calculator shows total calendar days." },
    { question: "Can I use this for Age calculation?", answer: "Yes, but for Age, it is better to use our dedicated 'Age Calculator' which formats the result specifically for birthdays." }
]

export default function DateDifferenceCalculator() {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [includeEnd, setIncludeEnd] = useState(false)
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateDifference = () => {
        if (!startDate || !endDate) return

        let start = new Date(startDate)
        let end = new Date(endDate)

        // Swap if Start > End
        if (start > end) {
            const temp = start
            start = end
            end = temp
        }

        // Add 1 day if include end date is checked for logic
        if (includeEnd) {
            end.setDate(end.getDate() + 1)
        }

        // Reset for clean YMD
        start = new Date(startDate)
        end = new Date(endDate)
        if (start > end) { const t = start; start = end; end = t; }

        let years = end.getFullYear() - start.getFullYear()
        let months = end.getMonth() - start.getMonth()
        let days = end.getDate() - start.getDate()

        if (includeEnd) {
            days += 1
        }

        if (days < 0) {
            months--
            const prevMonthDate = new Date(end.getFullYear(), end.getMonth(), 0)
            days += prevMonthDate.getDate()
        }
        if (months < 0) {
            years--
            months += 12
        }

        // Total Days (Simple)
        const startMs = new Date(startDate).getTime()
        const endMs = new Date(endDate).getTime()
        const absDiff = Math.abs(endMs - startMs)
        const totalDays = Math.ceil(absDiff / (1000 * 60 * 60 * 24)) + (includeEnd ? 1 : 0)

        const splitWeeks = Math.floor(totalDays / 7)
        const splitDays = totalDays % 7

        setResult({
            totalDays,
            years,
            months,
            days,
            splitWeeks,
            splitDays
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <SeoHead
                title="Date Difference Calculator - Days Between Two Dates"
                description="Calculate the number of days, weeks, months, and years between two dates. Perfect for planning travel, work notice periods, or age differences."
                keywords="date difference calculator, days between dates, calculate duration, weeks between dates"
                canonicalPath={ROUTES.CALCULATORS.UTILITY.DATE_DIFF}
            />
            <SchemaGenerator
                name="Date Difference Calculator"
                description="Calculate duration between two dates in Days, Weeks, Months, Years."
                url="https://calcguide.in/calculators/utility/date-difference-calculator"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.UTILITY} className="hover:text-blue-600">Utility Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Date Difference</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Date Difference Calculator</h1>
                    <p className="text-slate-600">Calculate days, months and years between two dates</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Start Date</label><input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" /></div>
                                <div><label className="block text-sm font-semibold text-slate-700 mb-2">End Date</label><input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" /></div>
                            </div>
                            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => setIncludeEnd(!includeEnd)}>
                                <div className={`w-5 h-5 rounded border flex items-center justify-center ${includeEnd ? 'bg-blue-600 border-blue-600' : 'border-slate-300'}`}>
                                    {includeEnd && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                </div>
                                <span className="text-slate-700 select-none">Include End Date (add 1 day)</span>
                            </div>
                            <button onClick={calculateDifference} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">Calculate Difference</button>

                            {/* Inline Result */}
                            {result && (
                                <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center mb-6">
                                        <p className="text-sm uppercase tracking-wide text-blue-600 font-bold mb-1">Total Duration</p>
                                        <p className="text-4xl sm:text-5xl font-extrabold text-blue-900">{result.totalDays} Days</p>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center">
                                            <p className="text-xs text-slate-500 uppercase font-semibold">In Detail</p>
                                            <p className="text-lg font-bold text-slate-800">{result.years}y {result.months}m {result.days}d</p>
                                        </div>
                                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center">
                                            <p className="text-xs text-slate-500 uppercase font-semibold">Weeks</p>
                                            <p className="text-lg font-bold text-slate-800">{result.splitWeeks} weeks, {result.splitDays} days</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <SEOSection title="About Date Difference Tool" faq={faqData} features={features}>
                            <h3>Where is this used in India?</h3>
                            <ul>
                                <li><strong>HR & Payroll:</strong> Calculating "Full and Final" settlement days, Notice Periods (e.g., 90 days), or Earned Leave.</li>
                                <li><strong>Finance:</strong> Calculating Interest Days for loans or late payment penalties.</li>
                                <li><strong>Travel:</strong> Planning exact duration of Visa validity (e.g., Schengen Visa 90/180 rule).</li>
                            </ul>
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
                                <Link to={ROUTES.CALCULATORS.UTILITY.EXAM_ELIGIBILITY} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">📋</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Exam Eligibility</p>
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
