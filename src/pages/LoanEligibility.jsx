import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import CalculatorContent from '../components/CalculatorContent'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function LoanEligibility() {
    const [salary, setSalary] = useState('50000')
    const [interestRate, setInterestRate] = useState('8.5')
    const [tenure, setTenure] = useState('20')
    const [otherEmi, setOtherEmi] = useState('0')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateEligibility = () => {
        const netIncome = parseFloat(salary)
        const r = parseFloat(interestRate) / 12 / 100
        const n = parseFloat(tenure) * 12
        const existingEmi = parseFloat(otherEmi)

        const maxAllowableEmi = netIncome * 0.50
        const availableEmi = maxAllowableEmi - existingEmi

        if (availableEmi <= 0) {
            setResult({
                maxLoan: 0,
                maxEmi: 0,
                eligible: false,
                message: "Your current EMI obligations exceed the standard bank limit (50% of salary)."
            })
        } else {
            const maxLoan = availableEmi * ((Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n)))
            setResult({
                maxLoan: Math.round(maxLoan),
                maxEmi: Math.round(availableEmi),
                eligible: true,
                message: "You are eligible for this loan amount."
            })
        }

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    return (
        <div className="min-h-screen bg-slate-50">
            
            <SchemaGenerator
                name="Loan Eligibility Calculator"
                description="Calculate maximum home loan limit based on salary."
                url="https://calcguide.in/calculators/loan/eligibility"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.LOAN} className="hover:text-blue-600">Loan Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Eligibility Check</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Loan Eligibility Calculator</h1>
                    <p className="text-slate-600">Check maximum home loan amount based on your salary</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        {/* Calculator Card */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Net Monthly Salary</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span><input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="e.g. 50000" /></div></div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div><label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate (%)</label><input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="8.5" /></div>
                                    <div><label className="block text-sm font-semibold text-slate-700 mb-2">Tenure (Years)</label><input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="20" /></div>
                                </div>
                                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Existing EMIs (if any)</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span><input type="number" value={otherEmi} onChange={(e) => setOtherEmi(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="0" /></div></div>
                                <button onClick={calculateEligibility} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">Check Eligibility</button>

                                {/* Inline Results */}
                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        {result.eligible ? (
                                            <div className="text-center">
                                                <div className="bg-green-600 rounded-xl p-6 text-white mb-6 shadow-lg">
                                                    <p className="text-green-100 text-sm font-medium uppercase tracking-wide mb-1">Maximum Loan Amount</p>
                                                    <p className="text-4xl sm:text-5xl font-extrabold">₹{result.maxLoan.toLocaleString('en-IN')}</p>
                                                    <div className="mt-4 pt-4 border-t border-green-500/30">
                                                        <p className="text-sm opacity-90">Max Affordable EMI: <span className="font-bold text-white">₹{result.maxEmi.toLocaleString('en-IN')}</span></p>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-slate-500">Based on 50% Salary Rule. Actual approval depends on CIBIL.</p>
                                            </div>
                                        ) : (
                                            <div className="bg-red-50 rounded-xl p-6 text-center border border-red-100">
                                                <div className="text-4xl mb-3">⚠️</div>
                                                <h3 className="text-xl font-bold text-red-800 mb-2">Not Eligible</h3>
                                                <p className="text-red-700">{result.message}</p>
                                                <div className="mt-4 text-sm text-red-600 font-medium">Try increasing tenure or reducing existing EMIs.</div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="Loan Eligibility Calculator"
                            whatIs="A Loan Eligibility Calculator helps specificy the maximum loan amount a bank is likely to lend you. Banks typically do not want your total monthly EMI outgo (including the new loan) to exceed 50% of your net monthly income. This is called the Fixed Obligation to Income Ratio (FOIR)."
                            whoShouldUse="Anyone planning to apply for a home loan or personal loan should use this. It helps you understand your borrowing power so you can search for properties within your budget, rather than facing rejection later."
                            example="If you earn ₹50,000 per month, banks assume 50% (₹25,000) is for living expenses. If you have no other loans, you can pay an EMI of ₹25,000. For a 20-year loan at 8.5%, this EMI amount qualifies you for a loan of approximately ₹26 Lakhs."
                            commonMistake="Ignoring existing EMIs. If you already have a car loan EMI of ₹10,000, your available capacity drops to ₹15,000, significantly reducing your home loan eligibility. Always clear smaller debts before applying for a big loan."
                        />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Tools</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.LOAN.EMI} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">💰</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">EMI Calculator</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.CONSTRUCTION.COST} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🏗️</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Construction Cost</p>
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
