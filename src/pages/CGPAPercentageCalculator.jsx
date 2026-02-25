import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function CGPAPercentageCalculator() {
    const [cgpa, setCgpa] = useState('8.5')
    const [template, setTemplate] = useState('CBSE')
    const [result, setResult] = useState(null)
    const resultRef = useRef(null)

    const calculatePercentage = () => {
        const val = parseFloat(cgpa)
        if (isNaN(val)) return

        let percentage = 0
        let formula = ""

        switch (template) {
            case 'CBSE':
                percentage = val * 9.5
                formula = "CGPA × 9.5"
                break
            case 'VTU':
                percentage = (val - 0.75) * 10
                formula = "(CGPA - 0.75) × 10"
                break
            case 'MU':
                percentage = val * 10 // Simplistic for MU
                formula = "CGPA × 10"
                break
            default:
                percentage = val * 10
                formula = "CGPA × 10"
        }

        setResult({ percentage: percentage.toFixed(2), formula })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "Why does CBSE use 9.5 multiplier?", answer: "The 9.5 multiplier was derived by CBSE by taking the average of the last 5 years' board results. It estimates the equivalent percentage of marks a student would have scored in a traditional marking system." },
        { question: "Is the CGPA to % formula the same for all universities?", answer: "No. VTU uses (CGPA - 0.75) * 10. Some universities use a simple * 10, while others suggest * 9.5. Always check your university's official conversion certificate." },
        { question: "What is 10 CGPA in percentage?", answer: "In the CBSE system, a 10 CGPA is equivalent to 95% (10 * 9.5)." }
    ]

    const features = [
        { title: "University Selection", desc: "Choose from CBSE, VTU, MU, and more for accuracy.", icon: "🏛️" },
        { title: "Formula Transparency", desc: "See exactly which formula is being applied to your score.", icon: "🔍" },
        { title: "Mobile Friendly", icon: "📱", desc: "Convert your results standing in the college line." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="CGPA to Percentage Calculator India"
                description="Convert CGPA to Percentage for CBSE, VTU, Mumbai University, and more."
                url="https://calcguide.in/calculators/student/cgpa-to-percentage-calculator/"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">CGPA to Percentage</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">CGPA to Percentage Calculator</h1>
                    <p className="text-slate-600">Universal converter for Indian schools and universities</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Select Board / University</label>
                                    <select
                                        value={template}
                                        onChange={(e) => setTemplate(e.target.value)}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg bg-white"
                                    >
                                        <option value="CBSE">CBSE (9.5 Ratio)</option>
                                        <option value="VTU">VTU (7.14 Rule)</option>
                                        <option value="MU">Mumbai University (Rev-2016)</option>
                                        <option value="GEN">Generic (x10)</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Enter CGPA</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        max="10"
                                        value={cgpa}
                                        onChange={(e) => setCgpa(e.target.value)}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                        placeholder="8.50"
                                    />
                                </div>

                                <button
                                    onClick={calculatePercentage}
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-95 transition-transform"
                                >
                                    Convert to Percentage
                                </button>

                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-indigo-50 rounded-xl p-6 text-center border border-indigo-100 shadow-inner">
                                            <p className="text-indigo-600 text-sm font-bold uppercase tracking-wide mb-1">Percentage Result</p>
                                            <p className="text-6xl font-extrabold text-indigo-900">{result.percentage}%</p>
                                            <p className="mt-2 text-indigo-400 text-xs font-semibold">Applied Formula: {result.formula}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="CGPA to Percentage Conversion Guide"
                            whatIs="A CGPA to Percentage Calculator converts your Cumulative Grade Point Average into a percentage score. While CGPA tells you your relative performance in a class, Percentage is often required for HR portals, higher education applications (like CAT/GMAT), and Government job forms."
                            whoShouldUse="School students (CBSE/ICSE) and Engineering/College students who have their final transcripts in CGPA but need to fill out forms that only accept percentage marks."
                            example="In the standard CBSE system, a CGPA of 8.0 would be 8.0 * 9.5 = 76%. In the VTU system (prevailing in Karnataka), the same 8.0 would be (8.0 - 0.75) * 10 = 72.5%."
                            commonMistake="The biggest mistake is using the wrong multiplier. Many students multiply by 10 by default, which can lead to incorrect data in official documents. Our tool helps you verify the specific university rule."
                        />

                        <SEOSection title="Conversion Accuracy" faq={faqData} features={features} />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Formula Table</h4>
                            <div className="space-y-3 text-xs text-slate-600">
                                <div className="flex justify-between border-b pb-2">
                                    <span>CBSE</span>
                                    <span className="font-mono">x 9.5</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span>Engineering (VTU)</span>
                                    <span className="font-mono">(CGPA - 0.75) x 10</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span>MU / SPPU</span>
                                    <span className="font-mono">x 9.5 or x 10</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
