import { useState } from 'react'
import { Link } from 'react-router-dom'
import SeoHead from '../components/SeoHead'
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { ROUTES } from '../routes/paths'

export default function GoldJewelleryCalculator() {
    const [goldRate, setGoldRate] = useState('')
    const [weight, setWeight] = useState('')
    const [purity, setPurity] = useState('22K')
    const [makingCharges, setMakingCharges] = useState('')
    const [makingChargeType, setMakingChargeType] = useState('percent')
    const [wastage, setWastage] = useState('0')
    const [gst, setGst] = useState(3)
    const [result, setResult] = useState(null)

    const calculatePrice = () => {
        const ratePer10g = parseFloat(goldRate)
        const w = parseFloat(weight)
        const mc = parseFloat(makingCharges) || 0
        const wa = parseFloat(wastage) || 0
        if (!ratePer10g || !w) return

        const ratePerGram = ratePer10g / 10
        const wastageWeight = w * (wa / 100)
        const finalWeight = w + wastageWeight
        const goldValue = finalWeight * ratePerGram
        let makingCost = 0
        if (makingChargeType === 'percent') {
            makingCost = (w * ratePerGram) * (mc / 100)
        } else {
            makingCost = mc * w
        }
        const subTotal = goldValue + makingCost
        const gstAmount = subTotal * (gst / 100)
        const total = subTotal + gstAmount
        setResult({ baseGoldValue: w * ratePerGram, wastageValue: wastageWeight * ratePerGram, makingCost, gstAmount, total })
    }

    const features = [
        { title: "Wastage Check", desc: "Includes VA (Value Addition) calculations often hidden by jewellers.", icon: "⚖️" },
        { title: "Bill Breakdown", desc: "Detailed breakup of GST, Making Charges, and Gold Value.", icon: "🧾" },
        { title: "Live Math", desc: "Instant calculation as you type rate and weight.", icon: "⚡" },
    ]

    const faqData = [
        { question: "How to calculate gold jewellery price?", answer: "Final Price = (Price of Gold × Weight) + Making Charges + GST. Often, Wastage (VA) is also added to the weight before calculating the price." },
        { question: "What is Wastage or VA in Gold?", answer: "Wastage or Value Addition (VA) is a charge for gold wasted during the making of ornaments. It ranges from 3% to 25% depending on the design intricacy." },
        { question: "How much is GST on gold jewellery?", answer: "Currently, GST on gold jewellery in India is 3% of the total bill value (including making charges)." },
        { question: "Is making charge calculated on gold rate?", answer: "Making charges are calculated either as a percentage of the gold value or as a flat rate per gram. This calculator supports both methods." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <SeoHead
                title="Gold Jewellery Price Calculator - GST, Making Charges & Wastage"
                description="Calculate the final price of gold jewellery including Wastage (VA), Making Charges, and 3% GST. Verify your jeweller's bill breakup instantly."
                keywords="gold jewellery calculator, gold price calculator, wastage calculator, making charges gold, va calculator"
                canonicalPath={ROUTES.CALCULATORS.GOLD.JEWELLERY}
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Gold Jewellery Price</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Jewellery Price Calculator</h1>
                    <p className="text-slate-600">Check the real price breakup before buying gold</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Gold Rate (per 10g)</label><input type="number" value={goldRate} onChange={(e) => setGoldRate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="e.g. 68000" /></div>
                            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Weight (grams)</label><input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="e.g. 15.5" /></div>
                        </div>
                        <div><label className="block text-sm font-semibold text-slate-700 mb-2">Wastage / VA (%)</label><input type="number" value={wastage} onChange={(e) => setWastage(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" /></div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Making Charges</label>
                            <div className="flex gap-4"><input type="number" value={makingCharges} onChange={(e) => setMakingCharges(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" /><select value={makingChargeType} onChange={(e) => setMakingChargeType(e.target.value)} className="px-4 py-3 border border-slate-300 rounded-lg bg-slate-50"><option value="percent">%</option><option value="per_gram">₹/g</option></select></div>
                        </div>
                        <div><label className="block text-sm font-semibold text-slate-700 mb-2">GST (%)</label><input type="number" value={gst} onChange={(e) => setGst(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" /></div>
                        <button onClick={calculatePrice} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md">Calculate Price</button>
                    </div>
                    {result && (
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                                <div className="bg-slate-900 px-6 py-4 text-white flex justify-between items-center"><span className="text-slate-300 font-medium tracking-wide">Final Price</span><span className="text-3xl font-bold">₹{Math.round(result.total).toLocaleString('en-IN')}</span></div>
                                <div className="p-6">
                                    <div className="space-y-3 text-sm sm:text-base">
                                        <div className="flex justify-between"><span className="text-slate-600">Base Gold Value</span><span className="font-semibold text-slate-900">₹{Math.round(result.baseGoldValue).toLocaleString('en-IN')}</span></div>
                                        <div className="flex justify-between"><span className="text-slate-600">Wastage / VA</span><span className="font-semibold text-red-600">+ ₹{Math.round(result.wastageValue).toLocaleString('en-IN')}</span></div>
                                        <div className="flex justify-between"><span className="text-slate-600">Making Charges</span><span className="font-semibold text-red-600">+ ₹{Math.round(result.makingCost).toLocaleString('en-IN')}</span></div>
                                        <div className="flex justify-between pt-3 border-t border-slate-100"><span className="text-slate-600">Taxable Amount</span><span className="font-semibold text-slate-800">₹{Math.round(result.total - result.gstAmount).toLocaleString('en-IN')}</span></div>
                                        <div className="flex justify-between"><span className="text-slate-600">GST ({gst}%)</span><span className="font-semibold text-slate-900">+ ₹{Math.round(result.gstAmount).toLocaleString('en-IN')}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <CalculatorContent
                    title="Gold Jewellery Price Calculator"
                    whatIs="A Gold Jewellery Price Calculator helps you find the actual cost of a gold ornament before you buy it. Jewellers often confuse customers with multiple charges like Making Charges, Wastage (VA - Value Addition), and GST. This tool breaks down the cost so you know exactly what you are paying for."
                    whoShouldUse="Anyone planning to buy gold jewellery (chains, rings, bangles) should use this. It helps you verify the bill provided by the jeweller and ensures you are not being overcharged on wastage or making charges."
                    example="If you buy a 10g Gold Chain when the rate is ₹60,000/10g: The base gold price is ₹60,000. But if the jeweller charges 15% Wastage and 3% GST, the final price jumps to over ₹70,000. Use this tool to verify the math."
                    commonMistake="Ignoring Wastage (VA). Jewellers might offer a discount on 'Making Charges' but increase the 'Wastage' percentage to recover the cost. Always ask for the final price including all taxes and charges."
                />

                <SEOSection title="Guide to Buying Gold Jewellery" faq={faqData} features={features}>
                    <h3>Understanding the Bill Breakup</h3>
                    <p>
                        When you look at a refined gold bill, you will see the <strong>Gold Value</strong> (Weight × Rate), followed by <strong>VA/Wastage</strong>, then <strong>Making Charges</strong>, and finally <strong>GST</strong>. This calculator simulates exactly that structure.
                    </p>
                </SEOSection>
            </div>
        </div>
    )
}
