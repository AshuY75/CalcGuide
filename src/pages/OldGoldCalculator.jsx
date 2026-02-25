import { useState } from 'react'
import { Link } from 'react-router-dom'

import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { ROUTES } from '../routes/paths'

const faqData = [
    {
        question: "What is Melting Loss?",
        answer: "When old jewellery is melted to verify purity, impurities like dust, wax, or other metals burn away. Jewellers deduct 3-5% weight to account for this loss."
    },
    {
        question: "Should I exchange or sell for cash?",
        answer: "Exchange (buying new jewellery from the same shop) usually gets you a better rate as some jewellers waive off the deduction or give a loyalty bonus. Selling for cash often incurs higher deductions."
    },
    {
        question: "Do I get paid for stones?",
        answer: "No. Jewellers will deduct the weight of gemstones (like rubies, emeralds) and pay only for the net gold weight. If you have diamond jewellery, the diamond value is calculated separately."
    }
]

export default function OldGoldCalculator() {
    const [weight, setWeight] = useState('')
    const [rate, setRate] = useState('')
    const [deduction, setDeduction] = useState('3')
    const [purity, setPurity] = useState('22')
    const [result, setResult] = useState(null)

    const calculateValue = () => {
        const w = parseFloat(weight)
        const r = parseFloat(rate)
        const d = parseFloat(deduction)
        if (!w || !r) return
        const ratePerGram = r / 10
        const netWeight = w * (1 - d / 100)
        const totalValue = netWeight * ratePerGram
        setResult({ grossValue: w * ratePerGram, deductionAmount: (w * ratePerGram) - totalValue, netValue: totalValue, netWeight: netWeight.toFixed(3) })
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="Old Gold Exchange Calculator"
                description="Estimate the cash value or exchange value of your old jewellery after melting loss deductions."
                url="https://calcguide.in/calculators/utility/old-gold-calculator/"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.GOLD} className="hover:text-blue-600">Gold Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Old Gold Exchange</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Old Gold Exchange Calculator</h1>
                    <p className="text-slate-600">Estimate the cash value or exchange value of your old jewellery</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
                        <div><label className="block text-sm font-semibold text-slate-700 mb-2">Weight (grams)</label><input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="e.g. 20.5" /></div>
                        <div><label className="block text-sm font-semibold text-slate-700 mb-2">Current Market Rate (per 10g)</label><input type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="e.g. 65000" /></div>
                        <div><label className="block text-sm font-semibold text-slate-700 mb-2">Melting Loss / Deduction (%)</label><input type="number" value={deduction} onChange={(e) => setDeduction(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="e.g. 3" /></div>
                        <button onClick={calculateValue} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md">Calculate Value</button>
                    </div>

                    {result && (
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                                <div className="bg-green-700 px-6 py-4 text-white text-center"><p className="text-green-100 text-sm font-medium uppercase">Estimated Payout</p><p className="text-4xl font-extrabold mt-1">₹{Math.round(result.netValue).toLocaleString('en-IN')}</p></div>
                                <div className="p-6"><div className="space-y-3"><div className="flex justify-between text-slate-600"><span>Gross Value</span><span>₹{Math.round(result.grossValue).toLocaleString('en-IN')}</span></div><div className="flex justify-between text-red-600"><span>Deduction ({deduction}%)</span><span>- ₹{Math.round(result.deductionAmount).toLocaleString('en-IN')}</span></div><div className="flex justify-between text-slate-900 font-medium border-t border-slate-100 pt-3"><span>Valid Weight</span><span>{result.netWeight} g</span></div></div></div>
                            </div>
                        </div>
                    )}
                </div>

                <CalculatorContent
                    title="Old Gold Exchange Calculator"
                    whatIs="The Old Gold Exchange Calculator is designed for people who want to sell or exchange their used jewellery. It calculates the 'Net Value' of your gold after deducting 'Melting Loss' or 'Wastage percentage'. This gives you the real cash-in-hand value."
                    whoShouldUse="Anyone planning to visit a jeweller to exchange old ornaments for new ones. It prevents you from being duped by excessive deductions."
                    example="If you have 20g of old 22K gold, and the market rate is ₹60,000/10g: The Gross Value is ₹1,20,000. If the jeweller deducts 5% for melting loss, your Net Value comes down to ₹1,14,000. Always negotiate this percentage."
                    commonMistake="Assuming you will get the full market rate. You won't. Jewellers always deduct for impurities (stones, copper, zinc) and melting loss. This calculator helps you check if the deduction is fair (standard is 3-6%)."
                />

                <SEOSection title="Selling Old Gold? Read This" faq={faqData}>
                    <h3>How do Jewellers value old gold?</h3>
                    <p>
                        Jewellers do not pay the full market rate for old jewellery. They deduct a percentage for "Melting Loss" and impurity removal. Additionally, if you don't have the original bill, they might deduct more for verification.
                    </p>
                    <h3>Hallmark vs Non-Hallmark</h3>
                    <p>
                        <strong>Hallmarked Gold (BIS 916):</strong> You get the best resale value. Deductions are minimal (1-2% or sometimes 0% in exchange).
                        <br />
                        <strong>Non-Hallmarked (Kaccha Gold):</strong> You might face heavy deductions (10-20%) as the purity is questionable.
                    </p>
                </SEOSection>
            </div>
        </div>
    )
}
