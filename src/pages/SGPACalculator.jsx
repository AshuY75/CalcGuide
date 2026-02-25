import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function SGPACalculator() {
    const [courses, setCourses] = useState([
        { id: 1, name: 'Course 1', credits: 4, grade: '10' },
        { id: 2, name: 'Course 2', credits: 4, grade: '9' },
        { id: 3, name: 'Course 3', credits: 3, grade: '8' },
    ])
    const [university, setUniversity] = useState('CBGS')
    const [result, setResult] = useState(null)
    const resultRef = useRef(null)

    const addCourse = () => {
        setCourses([...courses, { id: Date.now(), name: `Course ${courses.length + 1}`, credits: 3, grade: '8' }])
    }

    const removeCourse = (id) => {
        if (courses.length > 1) {
            setCourses(courses.filter(c => c.id !== id))
        }
    }

    const updateCourse = (id, field, value) => {
        setCourses(courses.map(c => c.id === id ? { ...c, [field]: value } : c))
    }

    const calculateSGPA = () => {
        let totalCredits = 0
        let weightedPoints = 0

        courses.forEach(course => {
            const c = parseFloat(course.credits)
            const g = parseFloat(course.grade)
            if (!isNaN(c) && !isNaN(g)) {
                totalCredits += c
                weightedPoints += (c * g)
            }
        })

        const sgpa = weightedPoints / totalCredits

        // Typical Indian University Percentage formula (SGPA - 0.75) * 10 or SGPA * 9.5
        const percentage = university === 'VTU' ? (sgpa - 0.75) * 10 : sgpa * 9.5

        setResult({
            sgpa: sgpa.toFixed(2),
            totalCredits,
            percentage: percentage.toFixed(2)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "What is the difference between SGPA and CGPA?", answer: "SGPA (Semester Grade Point Average) is the average for a single semester, while CGPA (Cumulative Grade Point Average) is the average of all semesters combined. Think of SGPA as your performance in one match, and CGPA as your career average." },
        { question: "How to convert SGPA to percentage?", answer: "Different universities have different formulas. For most, it's (SGPA - 0.75) * 10. For Mumbai University or others, it might be SGPA * 9.5 or SGPA * 10. Our calculator provides a toggle for popular university rules." },
        { question: "Is SGPA calculated based on all subjects?", answer: "Yes, SGPA is calculated using all subjects in a semester, including labs and electives, where each subject has a specific 'Credit' value." }
    ]

    const features = [
        { title: "Dynamic Course Rows", desc: "Add or remove as many subjects as you have this semester.", icon: "➕" },
        { title: "University Rules", desc: "Templates for VTU, Mumbai University, AKTU, and more.", icon: "🏛️" },
        { title: "Instant Percentage", desc: "See your equivalent percentage along with your SGPA result.", icon: "📈" }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="SGPA Calculator India"
                description="Calculate Semester Grade Point Average (SGPA) for Indian Universities like VTU, MU, and AKTU."
                url="https://calcguide.in/calculators/student/sgpa-calculator/"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">SGPA Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">SGPA Calculator</h1>
                    <p className="text-slate-600">Calculate your semester grade point average easily</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-slate-700 mb-2">University / Grading System</label>
                                <select
                                    value={university}
                                    onChange={(e) => setUniversity(e.target.value)}
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg bg-white"
                                >
                                    <option value="CBGS">Standard (SGPA * 10)</option>
                                    <option value="VTU">VTU Formula (SGPA - 0.75) * 10</option>
                                    <option value="MU">Mumbai University (SGPA * 9.5)</option>
                                </select>
                            </div>

                            <div className="space-y-4">
                                {courses.map((course, index) => (
                                    <div key={course.id} className="grid grid-cols-12 gap-3 items-end bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <div className="col-span-12 sm:col-span-5">
                                            <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Subject Name</label>
                                            <input
                                                type="text"
                                                value={course.name}
                                                onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                                                className="w-full px-3 py-2 border border-slate-200 rounded-md focus:ring-1 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div className="col-span-5 sm:col-span-3">
                                            <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Credits</label>
                                            <input
                                                type="number"
                                                value={course.credits}
                                                onChange={(e) => updateCourse(course.id, 'credits', e.target.value)}
                                                className="w-full px-3 py-2 border border-slate-200 rounded-md focus:ring-1 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div className="col-span-5 sm:col-span-3">
                                            <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Grade (0-10)</label>
                                            <input
                                                type="number"
                                                value={course.grade}
                                                onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                                                className="w-full px-3 py-2 border border-slate-200 rounded-md focus:ring-1 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1 flex justify-center pb-1">
                                            <button
                                                onClick={() => removeCourse(course.id)}
                                                className="text-slate-400 hover:text-red-500 p-1"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex gap-4">
                                <button
                                    onClick={addCourse}
                                    className="flex-1 py-3 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
                                >
                                    + Add Subject
                                </button>
                                <button
                                    onClick={calculateSGPA}
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md transition-transform active:scale-95"
                                >
                                    Calculate SGPA
                                </button>
                            </div>

                            {result && (
                                <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-blue-600 rounded-xl p-6 text-center text-white shadow-lg">
                                            <p className="text-blue-100 text-sm font-bold uppercase tracking-wide mb-1">Your SGPA</p>
                                            <p className="text-5xl font-extrabold">{result.sgpa}</p>
                                        </div>
                                        <div className="bg-emerald-600 rounded-xl p-6 text-center text-white shadow-lg">
                                            <p className="text-emerald-100 text-sm font-bold uppercase tracking-wide mb-1">Equivalent %</p>
                                            <p className="text-5xl font-extrabold">{result.percentage}%</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                        <p className="text-sm text-slate-600">Total Credits Earned: <strong>{result.totalCredits}</strong></p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <CalculatorContent
                            title="How to Calculate SGPA?"
                            whatIs="SGPA stands for Semester Grade Point Average. It is calculated by multiplying the grade point earned in each course by the credits of that course, then dividing the sum of all these products by the total credits for the semester."
                            whoShouldUse="Students in engineering, commerce, or science broads in India (like VTU, MU, KTU, etc) who need to track their performance or provide their percentage for job applications and higher studies."
                            example="If you have a 4-credit course with a Grade Point of 10 and a 3-credit course with a Grade Point of 8: (4*10 + 3*8) / (4+3) = 64/7 = 9.14 SGPA."
                            commonMistake="Students often forget that Credits play a massive role. A '10' grade in a 4-credit subject boosts your SGPA much more than a '10' in a 1-credit lab."
                        />

                        <SEOSection title="SGPA Calculation Guide" faq={faqData} features={features} />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Common Rules</h4>
                            <div className="space-y-4 text-sm text-slate-600">
                                <p><strong>VTU:</strong> (SGPA - 0.75) * 10</p>
                                <p><strong>Mumbai University:</strong> SGPA * 9.5</p>
                                <p><strong>Generic:</strong> SGPA * 10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
