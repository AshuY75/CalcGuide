import { useState, useRef } from 'react'
import SEOSection from '../SEOSection'

export default function ImportDutyCalculatorUI() {
    const [price, setPrice] = useState('50000') // INR
    const [category, setCategory] = useState('Electronics')
    const [shipping, setShipping] = useState('2000')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const categories = {
        'Electronics': { bcd: 10, sws: 10, gst: 18 },
        'Luxury Items': { bcd: 35, sws: 10, gst: 28 },
        'Cosmetics': { bcd: 20, sws: 10, gst: 18 },
        'Toys': { bcd: 70, sws: 10, gst: 12 },
        'Books': { bcd: 0, sws: 0, gst: 0 },
        'Educational': { bcd: 10, sws: 10, gst: 5 }
    }

    const calculateDuty = () => {
        const itemPrice = parseFloat(price) || 0
        const shippingCost = parseFloat(shipping) || 0
        const cifValue = itemPrice + shippingCost // Cost, Insurance, Freight

        const cat = categories[category]
        const bcdAmount = (cifValue * cat.bcd) / 100
        const swsAmount = (bcdAmount * cat.sws) / 100

        const valueForGst = cifValue + bcdAmount + swsAmount
        const gstAmount = (valueForGst * cat.gst) / 100

        const totalDuty = bcdAmount + swsAmount + gstAmount
        const totalLandingCost = cifValue + totalDuty

        setResult({
            bcd: Math.round(bcdAmount),
            sws: Math.round(swsAmount),
            gst: Math.round(gstAmount),
            totalDuty: Math.round(totalDuty),
            totalCost: Math.round(totalLandingCost),
            effectiveRate: ((totalDuty / cifValue) * 100).toFixed(1)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "What is BCD and SWS?", answer: "BCD (Basic Customs Duty) is the primary duty on imports. SWS (Social Welfare Surcharge) is a 10% tax on the BCD amount itself, used for welfare programs." },
        { question: "How is GST calculated on imports?", answer: "GST is calculated on the 'Cumulative Value', which is Item Price + Shipping + BCD + SWS. This is why the final GST amount might seem higher than the label rate." },
        { question: "Is there a limit for duty-free imports?", answer: "Gifts up to ₹5,000 are theoretically duty-free, but in practice, customs often charge duty on almost all commercial shipments. Essential items like Life-saving drugs or some books are exempt." }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Item Price (₹)</label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Item Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                            {Object.keys(categories).map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Shipping & Insurance (₹)</label>
                        <input type="number" value={shipping} onChange={(e) => setShipping(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <button onClick={calculateDuty} className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">
                        Calculate Total Duty
                    </button>
                </div>

                <div role="region" aria-live="polite" className="bg-slate-50 rounded-2xl p-6 border-2 border-dashed border-slate-200 flex flex-col justify-center">
                    {result ? (
                        <div ref={resultRef} className="space-y-6 animate-in fade-in duration-500">
                            <div className="text-center">
                                <p className="text-[10px] font-bold text-slate-500 uppercase">Total Duty Payable</p>
                                <p className="text-5xl font-black text-red-600">₹{result.totalDuty.toLocaleString('en-IN')}</p>
                                <p className="text-sm font-bold text-slate-600 mt-1">+{result.effectiveRate}% on item value</p>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
                                <div className="flex justify-between text-xs text-slate-500">
                                    <span>Basic Customs Duty (BCD)</span>
                                    <span className="font-bold text-slate-900">₹{result.bcd}</span>
                                </div>
                                <div className="flex justify-between text-xs text-slate-500">
                                    <span>Social Welfare Surcharge (SWS)</span>
                                    <span className="font-bold text-slate-900">₹{result.sws}</span>
                                </div>
                                <div className="flex justify-between text-xs text-slate-500">
                                    <span>IGST</span>
                                    <span className="font-bold text-slate-900">₹{result.gst}</span>
                                </div>
                                <hr className="border-slate-100" />
                                <div className="flex justify-between font-black text-slate-900 uppercase tracking-tighter">
                                    <span>Total Landing Cost</span>
                                    <span>₹{result.totalCost.toLocaleString('en-IN')}</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center space-y-4 py-12">
                            <span className="text-5xl">📦</span>
                            <p className="text-slate-500 font-medium">Estimate your customs bill before ordering from abroad</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-12">
                <SEOSection title="Indian Customs Duty Calculation Guide" faq={faqData} />
            </div>
        </div>
    )
}
