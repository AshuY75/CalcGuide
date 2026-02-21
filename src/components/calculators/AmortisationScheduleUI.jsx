import { useState, useRef } from 'react'
import SEOSection from '../SEOSection'

export default function AmortisationScheduleUI() {
    const [loanAmount, setLoanAmount] = useState('2500000')
    const [interestRate, setInterestRate] = useState('8.5')
    const [tenure, setTenure] = useState('20')
    const [schedule, setSchedule] = useState([])
    const [summary, setSummary] = useState(null)

    const resultRef = useRef(null)

    const calculateSchedule = () => {
        const P = parseFloat(loanAmount)
        const annualRate = parseFloat(interestRate)
        const monthlyRate = annualRate / 12 / 100
        const totalMonths = parseFloat(tenure) * 12

        const emi = (P * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1)

        let balance = P
        const newSchedule = []
        let totalInterest = 0

        for (let month = 1; month <= totalMonths; month++) {
            const interest = balance * monthlyRate
            const principal = emi - interest
            balance -= principal
            totalInterest += interest

            newSchedule.push({
                month,
                emi: Math.round(emi),
                principal: Math.round(principal),
                interest: Math.round(interest),
                balance: Math.max(0, Math.round(balance))
            })
        }

        setSchedule(newSchedule)
        setSummary({
            emi: Math.round(emi),
            totalInterest: Math.round(totalInterest),
            totalPayment: Math.round(P + totalInterest)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
    }

    const features = [
        { title: "Monthly Breakdown", desc: "See exactly how much of each EMI goes towards principal vs interest.", icon: "📅" },
        { title: "Visual Balance Tracking", desc: "Track how your loan balance reduces over the entire tenure.", icon: "📉" },
        { title: "Plan Prepayments", desc: "Identify the best time to make prepayments to save the most interest.", icon: "💡" }
    ]

    const faqData = [
        { question: "What is an Amortisation Schedule?", answer: "An amortisation schedule is a table providing each periodic payment for a loan. It shows the amount of principal and interest that makes up each payment until the loan is paid off at the end of its term." },
        { question: "Why is interest higher in early years?", answer: "Because interest is calculated on the outstanding balance. In the beginning, the balance is high, so the interest component is large. As you pay off principal, the interest reduces." },
        { question: "Can I download this schedule?", answer: "You can copy the data into Excel or print the page for your records. A dedicated Excel download feature is coming soon." }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Loan Amount</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span>
                            <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate (%)</label>
                        <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" step="0.1" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Tenure (Years)</label>
                        <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" />
                    </div>
                </div>

                <button onClick={calculateSchedule} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md text-lg transition-transform active:scale-[0.98]">
                    Generate Schedule
                </button>

                {summary && (
                    <div ref={resultRef} className="mt-8 space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
                                <p className="text-blue-600 text-xs font-bold uppercase mb-1">Monthly EMI</p>
                                <p className="text-2xl font-bold text-blue-900">₹{summary.emi.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                                <p className="text-slate-500 text-xs font-bold uppercase mb-1">Total Interest</p>
                                <p className="text-2xl font-bold text-slate-900">₹{summary.totalInterest.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                                <p className="text-slate-500 text-xs font-bold uppercase mb-1">Total Payment</p>
                                <p className="text-2xl font-bold text-slate-900">₹{summary.totalPayment.toLocaleString('en-IN')}</p>
                            </div>
                        </div>

                        <div className="overflow-x-auto rounded-xl border border-slate-200">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase">Month</th>
                                        <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase">Principal</th>
                                        <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase">Interest</th>
                                        <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase">Balance</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {schedule.slice(0, 12).map((item) => (
                                        <tr key={item.month} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-4 py-3 text-sm font-medium text-slate-900">{item.month}</td>
                                            <td className="px-4 py-3 text-sm text-slate-600">₹{item.principal.toLocaleString('en-IN')}</td>
                                            <td className="px-4 py-3 text-sm text-slate-600">₹{item.interest.toLocaleString('en-IN')}</td>
                                            <td className="px-4 py-3 text-sm font-semibold text-slate-900">₹{item.balance.toLocaleString('en-IN')}</td>
                                        </tr>
                                    ))}
                                    {schedule.length > 12 && (
                                        <tr>
                                            <td colSpan="4" className="px-4 py-4 text-center bg-slate-50 text-slate-500 text-sm italic">
                                                ... Showing first 12 months. Total {schedule.length} months in schedule.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-12">
                <SEOSection title="Understanding Your Repayment Schedule" faq={faqData} features={features} />
            </div>
        </div>
    )
}
