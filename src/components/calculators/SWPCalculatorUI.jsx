import { useState, useRef } from 'react'
import SEOSection from '../SEOSection'

export default function SWPCalculatorUI() {
    const [totalInvestment, setTotalInvestment] = useState('1000000')
    const [withdrawalAmount, setWithdrawalAmount] = useState('10000')
    const [expectedReturn, setExpectedReturn] = useState('10')
    const [timePeriod, setTimePeriod] = useState('10')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateSWP = () => {
        let balance = parseFloat(totalInvestment)
        const monthlyWithdrawal = parseFloat(withdrawalAmount)
        const monthlyRate = parseFloat(expectedReturn) / 12 / 100
        const totalMonths = parseFloat(timePeriod) * 12

        let totalWithdrawn = 0

        for (let month = 1; month <= totalMonths; month++) {
            const interest = balance * monthlyRate
            balance = balance + interest - monthlyWithdrawal
            totalWithdrawn += monthlyWithdrawal
            if (balance < 0) {
                balance = 0
                break
            }
        }

        setResult({
            finalBalance: Math.round(balance),
            totalWithdrawn: Math.round(totalWithdrawn),
            totalProfit: Math.round(balance + totalWithdrawn - parseFloat(totalInvestment))
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const features = [
        { title: "Regular Income Plan", desc: "Perfect for retirees wanting a fixed monthly income from their corpus.", icon: "👵" },
        { title: "Capital Protection", desc: "See if your withdrawals are sustainable without depleting the principal.", icon: "🛡️" },
        { title: "Tax Efficient", desc: "Understand how SWP is more tax-efficient than FDs for monthly income.", icon: "📈" }
    ]

    const faqData = [
        { question: "What is SWP?", answer: "SWP (Systematic Withdrawal Plan) allows you to withdraw a fixed amount from your mutual fund scheme regularly. It is the opposite of an SIP." },
        { question: "Is SWP better than FD for monthly income?", answer: "Usually, yes. In SWP, you only pay tax on the profit component of your withdrawal, whereas in FD, the entire interest is taxed at your slab rate." },
        { question: "Can my balance go to zero?", answer: "Yes, if your withdrawal rate is significantly higher than the fund's return rate, your principal will eventually deplete." }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Total Investment (₹)</label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span>
                        <input type="number" value={totalInvestment} onChange={(e) => setTotalInvestment(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Withdrawal (₹)</label>
                        <input type="number" value={withdrawalAmount} onChange={(e) => setWithdrawalAmount(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Expected Return (%)</label>
                        <input type="number" value={expectedReturn} onChange={(e) => setExpectedReturn(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" step="0.1" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Time Period (Years)</label>
                    <input type="number" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" />
                </div>

                <button onClick={calculateSWP} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md text-lg transition-transform active:scale-[0.98]">
                    Calculate SWP
                </button>

                {result && (
                    <div ref={resultRef} className="mt-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100">
                            <p className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-1">Final Balance</p>
                            <p className="text-4xl sm:text-5xl font-extrabold text-blue-900">₹{result.finalBalance.toLocaleString('en-IN')}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <p className="text-xs text-slate-500 font-semibold uppercase">Total Withdrawn</p>
                                <p className="text-lg font-bold text-slate-800">₹{result.totalWithdrawn.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                                <p className="text-xs text-green-700 font-semibold uppercase">Total Gain</p>
                                <p className="text-lg font-bold text-green-700">₹{result.totalProfit.toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-12">
                <SEOSection title="Planning Your Retirement Income" faq={faqData} features={features} />
            </div>
        </div>
    )
}
