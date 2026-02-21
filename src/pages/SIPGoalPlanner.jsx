import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function SIPGoalPlanner() {
    const [targetAmount, setTargetAmount] = useState('10000000') // 1 Crore Default
    const [interestRate, setInterestRate] = useState('12')
    const [duration, setDuration] = useState('15')
    const [result, setResult] = useState(null)
    const resultRef = useRef(null)

    const calculateSIPNeeded = () => {
        const FV = parseFloat(targetAmount)
        const r = parseFloat(interestRate)
        const t = parseFloat(duration)

        if (isNaN(FV) || isNaN(r) || isNaN(t)) return

        const n = t * 12
        const i = r / 1200 // Monthly interest rate

        // Formula: P = FV / [ (( (1 + i)^n - 1 ) / i) * (1 + i) ]
        const denominator = ((Math.pow(1 + i, n) - 1) / i) * (1 + i)
        const monthlySIP = FV / denominator
        const totalInvested = monthlySIP * n
        const totalGain = FV - totalInvested

        setResult({
            monthlySIP: Math.round(monthlySIP),
            totalInvested: Math.round(totalInvested),
            totalGain: Math.round(totalGain),
            targetAmount: Math.round(FV)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "What is a SIP Goal Planner?", answer: "Unlike a standard SIP calculator which tells you how much you'll get, a Goal Planner works backward. You tell it your target (e.g., ₹1 Crore for retirement), and it tells you exactly how much you need to invest every month." },
        { question: "How much SIP is needed for 1 Crore in 15 years?", answer: "At a 12% annual return, you need a monthly SIP of approximately ₹20,000 for 15 years to build a ₹1 Crore corpus. If you increase the return to 15%, the requirement drops to ₹15,000." },
        { question: "Should I increase my SIP every year?", answer: "Yes! Using a 'Step-up SIP' approach where you increase your contribution by 5-10% annually can help you reach your goals much faster or achieve much higher targets." }
    ]

    const features = [
        { title: "Backward Planning", desc: "Start with your dream goal and find the investment required to reach it.", icon: "🎯" },
        { title: "Flexible Targets", desc: "Plan for anything from an iPhone to a 5-bedroom villa or early retirement.", icon: "🏝️" },
        { title: "Realistic Returns", icon: "📊", desc: "Calculates based on market-linked SIP growth typical of Indian mutual funds." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="SIP Goal Planner"
                description="Find out the exact monthly SIP required to reach your financial goals (1Cr, 5Cr, etc)."
                url="https://calcguide.in/calculators/investment/sip-goal-planner"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.INVESTMENT} className="hover:text-blue-600">Investment Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">SIP Goal Planner</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">SIP Goal Planner</h1>
                    <p className="text-slate-600">How much do you need to save to reach your target corpus?</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Target Amount (₹)</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span>
                                        <input
                                            type="number"
                                            value={targetAmount}
                                            onChange={(e) => setTargetAmount(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg font-bold"
                                            placeholder="10000000"
                                        />
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        <button onClick={() => setTargetAmount('10000000')} className="px-3 py-1 bg-slate-100 rounded text-xs hover:bg-slate-200">1 Crore</button>
                                        <button onClick={() => setTargetAmount('50000000')} className="px-3 py-1 bg-slate-100 rounded text-xs hover:bg-slate-200">5 Crore</button>
                                        <button onClick={() => setTargetAmount('1000000')} className="px-3 py-1 bg-slate-100 rounded text-xs hover:bg-slate-200">10 Lakh</button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Exp. Return Rate (%)</label>
                                        <input
                                            type="number"
                                            value={interestRate}
                                            onChange={(e) => setInterestRate(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Time Period (Years)</label>
                                        <input
                                            type="number"
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={calculateSIPNeeded}
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-95 transition-transform"
                                >
                                    Calculate Required SIP
                                </button>

                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-indigo-950 rounded-xl p-8 mb-6 text-center text-white shadow-2xl relative overflow-hidden">
                                            <div className="absolute -right-4 -top-4 opacity-10 text-9xl">✨</div>
                                            <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest mb-2">Monthly SIP Required</p>
                                            <p className="text-5xl font-extrabold">₹{result.monthlySIP.toLocaleString('en-IN')}</p>
                                            <p className="mt-4 text-indigo-400 text-sm">To reach ₹{result.targetAmount.toLocaleString('en-IN')} in {duration} years</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                                <p className="text-xs text-slate-500 font-semibold uppercase">Total Investment</p>
                                                <p className="text-lg font-bold text-slate-800">₹{result.totalInvested.toLocaleString('en-IN')}</p>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                                                <p className="text-xs text-green-700 font-semibold uppercase">Est. Wealth Gain</p>
                                                <p className="text-lg font-bold text-green-700">₹{result.totalGain.toLocaleString('en-IN')}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="Reverse SIP Planning Strategy"
                            whatIs="A Reverse SIP Calculator (Goal Planner) is designed for people who have a clear financial end-point in mind. Instead of guessing how much your savings will grow, you fix the destination and find the path. It's the most effective way to plan for big-ticket expenses like buying a home, planning a child's wedding, or retiring with a specific corpus."
                            whoShouldUse="Goal-oriented investors who want to stop 'saving what is left' and start 'investing for what is needed'. It is highly recommended for anyone targeting '1 Crore' milestones in their 30s or 40s."
                            example="If you want to have ₹50 Lakhs for your child's higher education in 12 years, and you expect 15% returns from small/mid-cap funds, you need to start a monthly SIP of ₹12,800 today."
                            commonMistake="Not adjusting for inflation. While ₹1 Crore sounds like a lot today, its purchasing power might be much lower in 20 years. Always aim for a target that is 2x or 3x higher than what you think you need today."
                        />

                        <SEOSection title="Reaching Your Goals Faster" faq={faqData} features={features} />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Goal Accelerators</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">📈</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Explore Standard SIP</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.LUMPSUM} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">💰</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Add Lumpsum Growth</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
