import { useState, useRef } from 'react'
import SEOSection from '../SEOSection'

export default function EPFCalculatorUI() {
    const [monthlySalary, setMonthlySalary] = useState('50000')
    const [empContribution, setEmpContribution] = useState('12')
    const [employerContribution] = useState('12') // Fixed usually
    const [vpfContribution, setVpfContribution] = useState('0')
    const [currentBalance, setCurrentBalance] = useState('0')
    const [annualIncrement, setAnnualIncrement] = useState('5')
    const [interestRate, setInterestRate] = useState('8.25')
    const [yearsToRetire, setYearsToRetire] = useState('25')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateEPF = () => {
        let salary = parseFloat(monthlySalary) || 0
        const empPerc = parseFloat(empContribution) / 100
        const vpfPerc = parseFloat(vpfContribution) / 100
        const annualIncPerc = parseFloat(annualIncrement) / 100
        const rate = parseFloat(interestRate) / 100
        const years = parseInt(yearsToRetire) || 0
        let balance = parseFloat(currentBalance) || 0

        // In India, Employer's 12% is split: 3.67% to EPF, 8.33% to EPS
        // We focus on the EPF corpus
        const employerEPFPerc = 0.0367

        let totalEmployeeCont = 0
        let totalEmployerCont = 0

        for (let year = 1; year <= years; year++) {
            const yearlyEmpPart = salary * (empPerc + vpfPerc) * 12
            const yearlyEmployerPart = salary * employerEPFPerc * 12

            // Add contributions to balance
            balance += yearlyEmpPart + yearlyEmployerPart

            // Apply annual interest (simplified as end-of-year on closing balance)
            // Real calculation is monthly, but this is a standard projection accuracy
            const interest = balance * rate
            balance += interest

            totalEmployeeCont += yearlyEmpPart
            totalEmployerCont += yearlyEmployerPart

            // Annual Salary increment
            salary *= (1 + annualIncPerc)
        }

        setResult({
            finalCorpus: Math.round(balance),
            totalEmployeeCont: Math.round(totalEmployeeCont),
            totalEmployerCont: Math.round(totalEmployerCont),
            interestEarned: Math.round(balance - totalEmployeeCont - totalEmployerCont - (parseFloat(currentBalance) || 0))
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "What is the difference between EPF and VPF?", answer: "EPF is mandatory (12% of salary). VPF (Voluntary Provident Fund) is an optional contribution you can make on top of EPF to save more tax and build a larger corpus at the same high interest rate." },
        { question: "Is EPF contribution tax-free?", answer: "Employee contributions to EPF qualify for deduction under Section 80C up to ₹1.5 Lakhs. Interest earned is tax-free as long as you don't withdraw before 5 years." },
        { question: "Can I withdraw my EPF before retirement?", answer: "Partial withdrawals are allowed for specific purposes like house construction, marriage, or medical emergencies after a certain period of service." }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Basic + DA (₹)</label>
                        <input type="number" value={monthlySalary} onChange={(e) => setMonthlySalary(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Years to Retirement</label>
                        <input type="number" value={yearsToRetire} onChange={(e) => setYearsToRetire(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">VPF (%) (Optional)</label>
                        <input type="number" value={vpfContribution} onChange={(e) => setVpfContribution(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm" placeholder="e.g. 10" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Current Balance (₹)</label>
                        <input type="number" value={currentBalance} onChange={(e) => setCurrentBalance(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Salary Growth (%)</label>
                        <input type="number" value={annualIncrement} onChange={(e) => setAnnualIncrement(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm" />
                    </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 flex justify-between items-center">
                    <span className="text-sm font-semibold text-blue-800">Current EPF Interest Rate</span>
                    <span className="text-lg font-black text-blue-900">{interestRate}%</span>
                </div>

                <button onClick={calculateEPF} className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">
                    Project My Retirement Corpus
                </button>

                {result && (
                    <div ref={resultRef} className="mt-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white shadow-2xl">
                            <p className="text-blue-300 text-sm font-bold uppercase tracking-widest mb-2">Retirement Corpus</p>
                            <p className="text-4xl sm:text-6xl font-black text-yellow-400">₹{result.finalCorpus.toLocaleString('en-IN')}</p>
                            <p className="text-blue-300 text-xs mt-4">Total corpus including interest and both-side contributions.</p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                <p className="text-[10px] font-bold text-slate-500 uppercase">Your Cont.</p>
                                <p className="text-sm font-bold text-slate-800">₹{result.totalEmployeeCont.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                <p className="text-[10px] font-bold text-slate-500 uppercase">Employer Cont.</p>
                                <p className="text-sm font-bold text-slate-800">₹{result.totalEmployerCont.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl border border-green-200 col-span-2 sm:col-span-1">
                                <p className="text-[10px] font-bold text-green-600 uppercase">Interest</p>
                                <p className="text-lg font-black text-green-700">₹{result.interestEarned.toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-12">
                <SEOSection title="EPF & VPF Calculator Guide" faq={faqData} />
            </div>
        </div>
    )
}
