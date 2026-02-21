import { useState, useRef } from 'react'
import SEOSection from '../SEOSection'

export default function FreelancerRateCalculatorUI() {
    const [desiredSalary, setDesiredSalary] = useState('1200000') // Annual
    const [expenses, setExpenses] = useState('100000') // Software, hardware, internet
    const [workingDays, setWorkingDays] = useState('220') // 365 - weekends - holidays - sick leave
    const [billableHours, setBillableHours] = useState('5') // Hours spent actually working for clients
    const [profitMargin, setProfitMargin] = useState('20')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateRate = () => {
        const salary = parseFloat(desiredSalary) || 0
        const businessExpenses = parseFloat(expenses) || 0
        const days = parseFloat(workingDays) || 1
        const hoursPerDay = parseFloat(billableHours) || 1
        const margin = (parseFloat(profitMargin) || 0) / 100

        const totalRequiredRevenue = (salary + businessExpenses) * (1 + margin)
        const annualBillableHours = days * hoursPerDay
        const hourlyRate = totalRequiredRevenue / annualBillableHours

        setResult({
            hourlyRate: Math.round(hourlyRate),
            dayRate: Math.round(hourlyRate * 8),
            monthlyRevenue: Math.round(totalRequiredRevenue / 12),
            annualBillableHours: Math.round(annualBillableHours)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "Why is the hourly rate so high?", answer: "Freelancers must cover their own taxes, insurance, equipment, and non-billable time (marketing, admin). A salary of ₹100/hr as an employee is equivalent to ~₹250/hr as a freelancer." },
        { question: "How many billable hours per day is normal?", answer: "Most successful freelancers only average 4-5 billable hours per day. The rest of the time is spent on prospecting, managing clients, learning new skills, and admin work." },
        { question: "Should I charge hourly or per project?", answer: "Hourly is better for new freelancers or ill-defined tasks. Project-based pricing is better as you get faster, allowing you to earn more as your efficiency increases." }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Desired Annual Net Salary (₹)</label>
                        <input type="number" value={desiredSalary} onChange={(e) => setDesiredSalary(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-lg" />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Annual Business Expenses (₹)</label>
                        <input type="number" value={expenses} onChange={(e) => setExpenses(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                        <p className="text-[10px] text-slate-500 mt-1">Include software, workspace, gear, and training</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Billable Days/Year</label>
                            <input type="number" value={workingDays} onChange={(e) => setWorkingDays(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Billable Hours/Day</label>
                            <input type="number" value={billableHours} onChange={(e) => setBillableHours(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Profit Margin (%)</label>
                        <input type="number" value={profitMargin} onChange={(e) => setProfitMargin(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                    </div>

                    <button onClick={calculateRate} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">
                        Calculate Ideal Rate
                    </button>
                </div>

                <div role="region" aria-live="polite" className="bg-slate-50 rounded-2xl p-6 border-2 border-dashed border-slate-200 flex flex-col justify-center">
                    {result ? (
                        <div ref={resultRef} className="space-y-6 animate-in fade-in duration-500">
                            <div className="text-center">
                                <p className="text-[10px] font-bold text-slate-500 uppercase">Your Ideal Hourly Rate</p>
                                <p className="text-5xl font-black text-slate-900">₹{result.hourlyRate.toLocaleString('en-IN')}</p>
                            </div>

                            <div className="bg-indigo-600 text-white p-6 rounded-2xl text-center shadow-lg">
                                <p className="text-indigo-100 text-sm font-medium mb-1">Estimated Day Rate</p>
                                <p className="text-3xl font-black">₹{result.dayRate.toLocaleString('en-IN')}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase">Monthly Target</p>
                                    <p className="text-lg font-black text-slate-800">₹{result.monthlyRevenue.toLocaleString('en-IN')}</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase">Annual Hours</p>
                                    <p className="text-lg font-black text-slate-800">{result.annualBillableHours} hrs</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center space-y-4 py-12">
                            <span className="text-5xl">👨‍💻</span>
                            <p className="text-slate-500 font-medium">Don't undercharge. Calculate your true worth.</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-12">
                <SEOSection title="Freelance Pricing Strategy" faq={faqData} />
            </div>
        </div>
    )
}
