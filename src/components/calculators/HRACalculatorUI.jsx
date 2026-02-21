import { useState, useRef } from 'react'
import SEOSection from '../SEOSection'

export default function HRACalculatorUI() {
    const [basicSalary, setBasicSalary] = useState('50000')
    const [hraReceived, setHraReceived] = useState('20000')
    const [rentPaid, setRentPaid] = useState('15000')
    const [isMetro, setIsMetro] = useState(true)
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateHRA = () => {
        const basic = parseFloat(basicSalary) || 0
        const hra = parseFloat(hraReceived) || 0
        const rent = parseFloat(rentPaid) || 0

        // Condition 1: Actual HRA
        const cond1 = hra

        // Condition 2: 50% Basic if Metro, 40% if Non-metro
        const cond2 = isMetro ? (basic * 0.5) : (basic * 0.4)

        // Condition 3: Rent Paid - 10% Basic
        const cond3 = Math.max(0, rent - (basic * 0.1))

        const exemptAmount = Math.min(cond1, cond2, cond3)
        const taxableAmount = Math.max(0, hra - exemptAmount)

        setResult({
            exempt: Math.round(exemptAmount),
            taxable: Math.round(taxableAmount),
            conditions: [
                { label: "Actual HRA Received", value: Math.round(cond1) },
                { label: `${isMetro ? '50%' : '40%'} of Basic Salary`, value: Math.round(cond2) },
                { label: "Excess of Rent Paid over 10% of Basic", value: Math.round(cond3) }
            ]
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const features = [
        { title: "Metro vs Non-Metro", desc: "Correctly handles the 50% vs 40% rule for Indian cities.", icon: "🏙️" },
        { title: "Tax Optimization", desc: "Helps you decide if you should increase your rent to save more tax.", icon: "💰" },
        { title: "Accurate Math", desc: "Follows Section 10(13A) rules exactly as per income tax laws.", icon: "⚖️" }
    ]

    const faqData = [
        { question: "Can I claim HRA if I live in my own house?", answer: "No, HRA exemption is only available if you stay in a rented accommodation and pay rent for it. You cannot claim HRA if you live in your own house." },
        { question: "What documents are needed for HRA?", answer: "You need rent receipts and a rent agreement. If your annual rent exceeds ₹1 Lakh, you must also provide the PAN of your landlord to your employer." },
        { question: "Can I claim HRA and Home Loan both?", answer: "Yes, you can claim both HRA and Home Loan interest (Section 24b) if you are living in a rented house in the same or another city while owning a home." }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Basic Salary (₹)</label>
                        <input type="number" value={basicSalary} onChange={(e) => setBasicSalary(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly HRA Received (₹)</label>
                        <input type="number" value={hraReceived} onChange={(e) => setHraReceived(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Rent Paid (₹)</label>
                    <input type="number" value={rentPaid} onChange={(e) => setRentPaid(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" />
                </div>

                <div className="flex items-center gap-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-sm font-bold text-slate-700">City Type:</span>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" checked={isMetro} onChange={() => setIsMetro(true)} className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-slate-600">Metro (Mumbai, Delhi, Kolkata, Chennai)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" checked={!isMetro} onChange={() => setIsMetro(false)} className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-slate-600">Non-Metro</span>
                    </label>
                </div>

                <button onClick={calculateHRA} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">
                    Calculate HRA Exemption
                </button>

                {result && (
                    <div ref={resultRef} className="mt-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-green-50 p-6 rounded-xl border border-green-200 text-center">
                                <p className="text-xs font-bold text-green-600 uppercase mb-1">Tax-Exempt HRA</p>
                                <p className="text-3xl font-black text-green-900">₹{result.exempt.toLocaleString('en-IN')}</p>
                                <p className="text-[10px] text-green-600 mt-1">(Monthly Savings)</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
                                <p className="text-xs font-bold text-slate-500 uppercase mb-1">Taxable HRA</p>
                                <p className="text-3xl font-black text-slate-800">₹{result.taxable.toLocaleString('en-IN')}</p>
                                <p className="text-[10px] text-slate-500 mt-1">(Added to Salary)</p>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-xl p-6 text-white">
                            <h4 className="text-sm font-bold text-slate-400 uppercase mb-4 tracking-wider">Calculation Details (Minimum of):</h4>
                            <div className="space-y-3">
                                {result.conditions.map((c, i) => (
                                    <div key={i} className={`flex justify-between items-center text-sm p-3 rounded-lg ${c.value === result.exempt ? 'bg-blue-900/50 border border-blue-500' : 'bg-slate-800'}`}>
                                        <span className="opacity-80">{c.label}</span>
                                        <span className="font-bold">₹{c.value.toLocaleString('en-IN')}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-12">
                <SEOSection title="HRA Calculation Guide" faq={faqData} features={features} />
            </div>
        </div>
    )
}
