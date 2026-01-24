import { useState } from 'react'
const Helmet = () => null;
import SEOSection from '../components/SEOSection'

export default function GoldJewelleryCalculator() {
    // ... [Original Logic] ...
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

    const faqData = [
        {
            question: "What is Making Charge?",
            answer: "Making charges are the fees paid to the goldsmith for designing and creating the jewellery. It can be a percentage of the gold value (usually 8% to 25%) or a flat rate per gram."
        },
        {
            question: "What is Wastage or VA?",
            answer: "VA stands for Value Addition or Wastage. When making jewellery, some gold is lost or wasted during cutting and melting. Jewellers charge this as a percentage, usually adding it to the weight or value."
        },
        {
            question: "Is GST applicable on old gold exchange?",
            answer: "No, GST is applicable only on the value addition (Making Charges) and the new gold you buy. It is not applicable on the value of the old gold you are exchanging."
        }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <Helmet>
                <title>Gold Jewellery Price Calculator - GST, Making Charges & Wastage | CalcGuide</title>
                <meta name="description" content="Calculate the final price of gold jewellery including Wastage (VA), Making Charges, and 3% GST. Verify your jeweller's bill breakup instantly." />
                <link rel="canonical" href="https://calcguide.com/gold-jewellery" />
            </Helmet>

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

                <SEOSection title="Understanding Gold Pricing" faq={faqData}>
                    <h3>How is Gold Jewellery Price Calculated?</h3>
                    <p>
                        The final price of any gold ornament is not just the Gold Rate × Weight. Jewellers add several other components:
                    </p>
                    <ul>
                        <li><strong>Base Gold Rate:</strong> The rate of 22K or 18K gold per gram.</li>
                        <li><strong>Wastage (VA):</strong> Charges for gold lost during manufacturing. Typically 10% to 20%.</li>
                        <li><strong>Making Charges:</strong> Labor cost for the artisan.</li>
                        <li><strong>GST:</strong> A mandatory 3% tax is applied on the final total (including making charges and wastage).</li>
                    </ul>
                    <h3>Why should you calculate this yourself?</h3>
                    <p>
                        Jewellers often club these charges together or give "discounts" on Making Charges while increasing the Wastage percentage. Using a transparent calculator helps you see exactly what you are paying for and negotiate better.
                    </p>
                </SEOSection>
            </div>
        </div>
    )
}
