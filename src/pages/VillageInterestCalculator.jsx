import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function VillageInterestCalculator() {
    const [principal, setPrincipal] = useState('')
    const [rate, setRate] = useState('2')
    const [rateType, setRateType] = useState('monthly_rupees')
    const [timeType, setTimeType] = useState('months')
    const [months, setMonths] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0])
    const [interestType, setInterestType] = useState('simple')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    useEffect(() => {
        setResult(null)
    }, [principal, rate, rateType, timeType, months, startDate, endDate, interestType])

    const calculate = () => {
        const P = parseFloat(principal)
        if (!P) return
        let r_monthly = parseFloat(rate)
        if (rateType === 'yearly_percent') {
            r_monthly = r_monthly / 12
        }
        let totalMonths = 0
        let displayDuration = ''
        if (timeType === 'months') {
            totalMonths = parseFloat(months)
            displayDuration = `${totalMonths} Months`
        } else {
            if (!startDate || !endDate) return
            const start = new Date(startDate)
            const end = new Date(endDate)
            const diffTime = Math.abs(end - start)
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
            totalMonths = Math.ceil(diffDays / 30)
            if (totalMonths === 0 && diffDays > 0) totalMonths = 1
            displayDuration = `${diffDays} Days (~${totalMonths} Months)`
        }
        let interest = 0
        let totalAmount = 0
        if (interestType === 'simple') {
            interest = P * (r_monthly / 100) * totalMonths
        } else {
            let years = Math.floor(totalMonths / 12)
            let remainingMonths = totalMonths % 12
            let yearlyRate = r_monthly * 12
            let amountAfterYears = P * Math.pow((1 + yearlyRate / 100), years)
            let interestForRemaining = amountAfterYears * (r_monthly / 100) * remainingMonths
            totalAmount = amountAfterYears + interestForRemaining
            interest = totalAmount - P
        }
        if (interestType === 'simple') {
            totalAmount = P + interest
        }
        setResult({
            interest: Math.round(interest),
            total: Math.round(totalAmount),
            duration: displayDuration,
            monthlyRate: r_monthly.toFixed(2)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const features = [
        { title: "Rupee System", desc: "Supports '2 Rupay Sekda' (2% Monthly) calculations.", icon: "₹" },
        { title: "Day Logic", desc: "Calculates approximate months from days (e.g., 40 days = 2 months).", icon: "📅" },
        { title: "Compound Mode", desc: "Also supports yearly compounding (Diwali-to-Diwali logic).", icon: "🌾" },
    ]

    const faqData = [
        { question: "What is '2 Rupay Sekda' interest?", answer: "It refers to an interest rate of ₹2 per ₹100 per month. This means 2% per month, or 24% per year, which is significantly higher than bank rates." },
        { question: "How is village interest calculated?", answer: "In villages, interest is usually calculated per month (not per year). Lenders also often round up days to the next month (e.g. 1 month 5 days = 2 months)." },
        { question: "Is this legal?", answer: "Informal money lending is regulated by varying state money lending acts. Extremely high interest rates (usury) are generally discouraged or illegal, but still common in unorganized sectors." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">

            <SchemaGenerator
                type="Calculator"
                name="Village Interest Calculator (Sood)"
                description="Calculate village loan interest (Sood/Vaddi) instantly. Supports 'Rupees per 100' rate."
                url="https://calcguide.in/calculators/loan/village-interest-calculator/"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.LOAN} className="hover:text-blue-600">Loan Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Village Interest</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Village Interest Calculator (Sood)</h1>
                    <p className="text-slate-600">Calculate loan interest exactly like village Sahukars</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        {/* Calculator Input & Result */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                            <div className="space-y-6">
                                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Principal Amount (₹)</label><input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="e.g. 50000" /></div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate</label>
                                    <div className="flex gap-4"><div className="relative flex-1"><input type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="e.g. 2" /></div><select value={rateType} onChange={(e) => setRateType(e.target.value)} className="px-4 py-3 border border-slate-300 rounded-lg bg-slate-50 text-slate-700"><option value="monthly_rupees">₹ / ₹100 / Month</option><option value="yearly_percent">% Yearly</option></select></div>
                                </div>
                                <div className="flex bg-slate-100 p-1 rounded-lg"><button onClick={() => setTimeType('months')} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${timeType === 'months' ? 'bg-white text-blue-900 shadow-sm' : 'text-slate-600'}`}>Duration (Months)</button><button onClick={() => setTimeType('dates')} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${timeType === 'dates' ? 'bg-white text-blue-900 shadow-sm' : 'text-slate-600'}`}>Date Range</button></div>
                                {timeType === 'months' ? (<div><label className="block text-sm font-semibold text-slate-700 mb-2">Number of Months</label><input type="number" value={months} onChange={(e) => setMonths(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="e.g. 6" /></div>) : (<div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-semibold text-slate-700 mb-2">Given Date</label><input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" /></div><div><label className="block text-sm font-semibold text-slate-700 mb-2">Return Date</label><input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" /></div></div>)}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Interest Type</label>
                                    <div className="grid grid-cols-2 gap-4"><label className={`border rounded-lg p-3 flex items-center gap-3 cursor-pointer ${interestType === 'simple' ? 'border-blue-500 bg-blue-50' : 'border-slate-300'}`}><input type="radio" checked={interestType === 'simple'} onChange={() => setInterestType('simple')} className="text-blue-600" /><span className="font-medium text-slate-700">Simple Interest</span></label><label className={`border rounded-lg p-3 flex items-center gap-3 cursor-pointer ${interestType === 'compound' ? 'border-blue-500 bg-blue-50' : 'border-slate-300'}`}><input type="radio" checked={interestType === 'compound'} onChange={() => setInterestType('compound')} className="text-blue-600" /><span className="font-medium text-slate-700">Compound (Yearly)</span></label></div>
                                </div>

                                <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md transition-colors text-lg active:scale-[0.98]">Calculate Interest</button>

                                {/* Inline Result */}
                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100 mb-6">
                                            <p className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-1">Total Payable Amount</p>
                                            <p className="text-4xl sm:text-5xl font-extrabold text-blue-900">₹{result.total.toLocaleString('en-IN')}</p>
                                            <p className="text-sm text-slate-600 mt-2">Duration: {result.duration}</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-center">
                                                <p className="text-xs text-slate-500 uppercase">Total Interest</p>
                                                <p className="text-xl font-bold text-red-600">+ ₹{result.interest.toLocaleString('en-IN')}</p>
                                            </div>
                                            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-center">
                                                <p className="text-xs text-slate-500 uppercase">Monthly Rate</p>
                                                <p className="text-xl font-bold text-slate-800">{result.monthlyRate}%</p>
                                            </div>
                                        </div>
                                        <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 text-xs text-yellow-800 text-center">
                                            ⚠️ Warning: Village interest (Sood) accumulates very fast. <br />Partial months are often counted as full months by lenders.
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="Village Interest Calculator (Sood / Vaddi)"
                            whatIs="This calculator computes interest based on the traditional Indian village system, often called 'Sood', 'Vaddi', or 'Biyaj'. Unlike banks which use yearly percentages (e.g., 10% p.a.), village loans calculate interest 'per month' (e.g., 2 Rupees per 100 per month). It also handles the unique 'Diwali-to-Diwali' yearly compounding often used by Sahukars."
                            whoShouldUse="Anyone dealing with informal loans from money lenders, relatives, or Sahukars. If you have borrowed money at '2 Rupye Sekda' or '1.5 Rupye', use this tool to check the exact interest payable before you plan your repayment."
                            example="If you borrow ₹1 Lakh at '2 Rupay Sekda' (2% monthly) for 1 year: The interest is ₹2,000 per month. For 12 months, total interest is ₹24,000. Total repayment: ₹1.24 Lakhs. Note that 2% monthly equals 24% annually—much higher than banks!"
                            commonMistake="Confusing Monthly Rate with Yearly Rate. '2% interest' in a village usually means 24% per year. Also, overlooking partial months—lenders often charge a full month's interest even for just 5 extra days."
                        />

                        <SEOSection title="Understanding Village Loans" faq={faqData} features={features}>
                            <h3>Why use this calculator?</h3>
                            <p>
                                Village loans work differently from bank loans. A slight difference in rate (e.g., 1.5 vs 2.0) can lead to lakhs in difference over time. Use this tool to stay informed.
                            </p>
                        </SEOSection>
                    </div>

                    {/* Related Tools Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Tools</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIMPLE_INTEREST} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">📉</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Simple Interest</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.CONSTRUCTION.LAND_AREA} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🏞️</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Land Area Converter</p>
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
