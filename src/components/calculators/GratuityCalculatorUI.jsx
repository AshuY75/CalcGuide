import { useState, useRef } from 'react'
import SEOSection from '../SEOSection'

export default function GratuityCalculatorUI() {
    const [salary, setSalary] = useState('100000')
    const [tenure, setTenure] = useState('5')
    const [isGovt, setIsGovt] = useState(false)
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateGratuity = () => {
        const lastSalary = parseFloat(salary) || 0
        const years = parseFloat(tenure) || 0

        // Formula: (15/26) * Last Drawn Salary * Years of Service
        // Rounding years: If service is more than 6 months, it's rounded to next year
        const roundedYears = Math.round(years)

        const gratuityAmount = (15 / 26) * lastSalary * roundedYears

        // Tax treatment
        let taxFreeLimit = 2500000 // Rs 25 Lakhs for non-govt
        if (isGovt) taxFreeLimit = gratuityAmount // Govt employees gratuity is fully tax free

        setResult({
            amount: Math.round(gratuityAmount),
            taxFreeLimit: taxFreeLimit,
            yearsUsed: roundedYears,
            isTaxable: !isGovt && gratuityAmount > 2500000
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "Is 5 years mandatory for gratuity?", answer: "Usually, yes. An employee is eligible for gratuity only after completing 5 years of continuous service. However, in case of death or disablement, this 5-year condition is waived." },
        { question: "How is 'Last Drawn Salary' defined?", answer: "For gratuity, salary includes 'Basic Salary' and 'Dearness Allowance (DA)'. Other allowances like HRA, Bonus, or incentives are generally excluded." },
        { question: "What is the tax limit for gratuity?", answer: "For private sector employees, gratuity up to ₹25 Lakhs is exempt from income tax. For government employees, the entire gratuity amount is tax-free." }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Last Drawn Salary (Basic + DA) (₹)</label>
                    <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 text-lg" />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Years of Service</label>
                    <input type="number" step="0.5" value={tenure} onChange={(e) => setTenure(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 text-lg" />
                    <p className="text-[10px] text-slate-500 mt-1">Note: 5.6 years will be rounded to 6 years for calculation.</p>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <input type="checkbox" checked={isGovt} onChange={(e) => setIsGovt(e.target.checked)} className="w-5 h-5 text-green-600 rounded" />
                    <label className="text-sm font-semibold text-slate-700">Are you a Government Employee?</label>
                </div>

                <button onClick={calculateGratuity} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">
                    Calculate Gratuity
                </button>

                {result && (
                    <div ref={resultRef} className="mt-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="bg-slate-900 rounded-2xl p-8 text-center text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">🏢</div>
                            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Estimated Gratuity Amount</p>
                            <p className="text-4xl sm:text-6xl font-black text-green-400">₹{result.amount.toLocaleString('en-IN')}</p>
                            <div className="mt-4 flex flex-wrap justify-center gap-2">
                                <span className="bg-slate-800 px-3 py-1 rounded-full text-xs font-bold">Years: {result.yearsUsed}</span>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${result.isTaxable ? 'bg-red-900 text-red-100' : 'bg-green-900 text-green-100'}`}>
                                    {result.isTaxable ? 'Taxable Portion Exists' : 'Fully Tax-Free'}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-12">
                <SEOSection title="Gratuity Calculation Rules" faq={faqData} />
            </div>
        </div>
    )
}
