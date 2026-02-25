import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function TimeWorkCalculator() {
    const [personA, setPersonA] = useState('10')
    const [personB, setPersonB] = useState('15')
    const [personC, setPersonC] = useState('')
    const [result, setResult] = useState(null)
    const resultRef = useRef(null)

    const calculateTime = () => {
        const a = parseFloat(personA)
        const b = parseFloat(personB)
        const c = parseFloat(personC)

        if (isNaN(a) || isNaN(b)) return

        let combinedTime = 0
        let formula = ""

        if (isNaN(c) || personC === '') {
            // Formula: (A * B) / (A + B)
            combinedTime = (a * b) / (a + b)
            formula = `(Person A × Person B) / (Person A + Person B) = (${a} × ${b}) / (${a} + ${b})`
        } else {
            // Formula for three: 1/T = 1/A + 1/B + 1/C
            combinedTime = 1 / ((1 / a) + (1 / b) + (1 / c))
            formula = "1 / (1/A + 1/B + 1/C)"
        }

        setResult({
            combinedTime: combinedTime.toFixed(2),
            formula,
            has3: !isNaN(c) && personC !== ''
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "How to calculate time when two people work together?", answer: "If Person A takes X days and Person B takes Y days, the time taken together is (X * Y) / (X + Y). For example, if A takes 10 days and B takes 20 days, together they take (10 * 20) / (10 + 20) = 200/30 = 6.67 days." },
        { question: "What is Efficiency in Time & Work?", answer: "Efficiency is inversely proportional to the time taken. If Person A is twice as efficient as B, A will take half the time B takes to complete the same work." },
        { question: "Does this calculator support 'Man-Days' concept?", answer: "Yes, this logic follows the same principle. You can use it to calculate the rate of work per day for any individual or group." }
    ]

    const features = [
        { title: "2 or 3 People Mode", desc: "Instantly solve problems involving two or three individuals working together.", icon: "👥" },
        { title: "Step-by-Step Formula", desc: "Understand the logic behind the solution with the visible formula breakdown.", icon: "🔍" },
        { title: "Competitive Exam Ready", icon: "📝", desc: "Designed for SSC, Bank PO, and Campus Placement aptitude tests." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="Time and Work Calculator"
                description="Solve aptitude problems for the time taken when people work together."
                url="https://calcguide.in/calculators/student/time-and-work-calculator/"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Time and Work Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Time and Work Solver</h1>
                    <p className="text-slate-600">Solve aptitude math problems for competitive exams</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Person A Days</label>
                                        <input
                                            type="number"
                                            value={personA}
                                            onChange={(e) => setPersonA(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                            placeholder="10"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Person B Days</label>
                                        <input
                                            type="number"
                                            value={personB}
                                            onChange={(e) => setPersonB(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                            placeholder="15"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Person C (Optional)</label>
                                        <input
                                            type="number"
                                            value={personC}
                                            onChange={(e) => setPersonC(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                            placeholder="Days"
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={calculateTime}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-95 transition-transform"
                                >
                                    Solve Problem
                                </button>

                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-blue-50 rounded-xl p-8 text-center border border-blue-100 shadow-inner">
                                            <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">Combined Time Taken</p>
                                            <p className="text-6xl font-black text-blue-900">{result.combinedTime} <span className="text-xl">Days</span></p>
                                            <div className="mt-4 p-3 bg-white rounded-lg border border-blue-50 inline-block text-[10px] font-mono text-slate-500">
                                                Formula: {result.formula}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="Time and Work Aptitude Guide"
                            whatIs="Time and Work is a classic math concept used to determine the rate at which work is finished. It is based on the principle that the amount of work done is the product of the rate of work and the time taken (Work = Rate × Time). Our solver helps you bypass complex fraction calculations and gives you the final answer instantly."
                            whoShouldUse="Students preparing for competitive exams like CAT, GATE, SSC CGL, Banking (IBPS/SBI), or Campus Recruitment Tests (CRT) across India."
                            example="If Ram can finish a task in 12 days and Shyam can do it in 24 days, you might think the average is 18. But together they work faster! Their combined effort finishes the job in (12*24)/(12+24) = 288/36 = 8 days."
                            commonMistake="Averaging the number of days. If A takes 10 days and B takes 20, they will NOT take 15 days together. They will always take LESS time than the fastest person working alone."
                        />

                        <SEOSection title="Aptitude Mastery" faq={faqData} features={features} />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Exam Shortcuts</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.STUDENT.SGPA} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🎓</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">SGPA Calculator</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.UTILITY.PERCENTAGE} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">➗</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Percentage Solver</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
