import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function AgeCalculator() {
    const [birthDate, setBirthDate] = useState('')
    const [targetDate, setTargetDate] = useState(new Date().toISOString().split('T')[0])
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateAge = () => {
        if (!birthDate) return

        const birth = new Date(birthDate)
        const target = new Date(targetDate)

        let years = target.getFullYear() - birth.getFullYear()
        let months = target.getMonth() - birth.getMonth()
        let days = target.getDate() - birth.getDate()

        if (days < 0) {
            months--
            // Days in previous month
            const prevMonth = new Date(target.getFullYear(), target.getMonth(), 0)
            days += prevMonth.getDate()
        }

        if (months < 0) {
            years--
            months += 12
        }

        setResult({ years, months, days })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const features = [
        { title: "Exam Dates", desc: "Check age on a specific 'cut-off date' for Govt Exams.", icon: "📅" },
        { title: "Exact Calculation", desc: "No more approximations. Get Age in Years, Months, and Days.", icon: "✅" },
        { title: "Forms Ready", desc: "Use the output directly for Application Forms.", icon: "📝" },
    ]

    const faqData = [
        { question: "How to calculate age from DOB?", answer: "Simply subtract your Birth Date from the Current Date (or Target Date). Always start subtracting from Days, then Months, then Years, borrowing from previous units if needed." },
        { question: "Why do I need an Age Calculator?", answer: "It is critical for filling Government Job (Sarkari Naukri) forms where age is asked as of a specific cut-off date (e.g., 'Age as on 1st Jan 2025'). Manual errors here can lead to form rejection." },
        { question: "Does it count leap years?", answer: "Yes, our calculator logic accurately accounts for the number of days in every specific month and leap years." },
        { question: "Is this age calculator accurate?", answer: "Yes, it uses the standard Gregorian calendar logic used by all official bodies globally." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">

            <SchemaGenerator
                name="Age Calculator"
                description="Calculate age from Date of Birth (DOB) in Years, Months, Days."
                url="https://calcguide.in/calculators/utility/age-calculator/"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.UTILITY} className="hover:text-blue-600">Utility Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Age Calculator</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Age Calculator</h1>
                    <p className="text-slate-600">Calculate exact age in years, months, and days</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                            <div className="space-y-6">
                                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Date of Birth</label><input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" /></div>
                                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Calculate Age As Of</label><input type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" /></div>
                                <button onClick={calculateAge} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">Calculate Age</button>

                                {/* Inline Result */}
                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-blue-50 rounded-xl p-6 mb-6 text-center border border-blue-100">
                                            <p className="text-sm uppercase tracking-wide text-slate-500 font-bold mb-4">Your Age is</p>
                                            <div className="flex justify-center gap-2">
                                                <div className="bg-white text-blue-900 border border-blue-200 rounded-lg p-3 w-20 shadow-sm"><p className="text-2xl font-bold">{result.years}</p><p className="text-xs font-medium uppercase">Years</p></div>
                                                <div className="bg-white text-blue-900 border border-blue-200 rounded-lg p-3 w-20 shadow-sm"><p className="text-2xl font-bold">{result.months}</p><p className="text-xs font-medium uppercase">Months</p></div>
                                                <div className="bg-white text-blue-900 border border-blue-200 rounded-lg p-3 w-20 shadow-sm"><p className="text-2xl font-bold">{result.days}</p><p className="text-xs font-medium uppercase">Days</p></div>
                                            </div>
                                            <div className="mt-4 text-sm text-slate-600">
                                                In Total Months: <strong className="text-slate-900">{(result.years * 12) + result.months}</strong>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="Age Calculator"
                            whatIs="The Age Calculator determines an individual's exact age in years, months, and days based on their Date of Birth (DOB). Unlike simple subtraction of years which can be off by one, this tool accounts for leap years and months with 30/31 days."
                            whoShouldUse="Job aspirants filling government forms (SSC, UPSC, Banking), HR professionals calculating service duration, or parents checking school admission eligibility (often strict age criteria exist for KG/Class 1)."
                            example="If born on 15 Aug 1999 and checking age on 1 Jan 2025: Manual math is hard because of month differences. The calculator instantly tells you: 25 Years, 4 Months, 17 Days."
                            commonMistake="Only subtracting the year (e.g., 2025 - 2000 = 25). This is wrong if your birthday hasn't passed yet in the current year. Always calculate age down to the exact day."
                        />

                        <SEOSection title="About Age Calculator" faq={faqData} features={features}>
                            <h3>Why is it hard to calculate age manually?</h3>
                            <p>
                                Calculating age seems simple (Current Year - Birth Year), but it gets tricky when you need the <strong>exact months and days</strong>. For example, if today is 15th Jan and you were born on 20th Feb, simply subtracting years gives the wrong 'completed' age.
                            </p>
                            <h3>Who is this for?</h3>
                            <ul>
                                <li><strong>Job Aspirants:</strong> Banks, SSC, UPSC, and Railways often have strict age limits (e.g., "21 to 30 years as of 01/01/2025").</li>
                                <li><strong>Admission Forms:</strong> Schools often require a child's age in months for KG admission.</li>
                                <li><strong>Visa Applications:</strong> Detailed forms typically ask for exact age durations.</li>
                            </ul>
                        </SEOSection>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Tools</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.UTILITY.DATE_DIFF} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🗓️</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Date Difference</p>
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
