import { useState, useRef } from 'react'
import SEOSection from '../SEOSection'

export default function LTCGTaxCalculatorUI() {
    const [sellPrice, setSellPrice] = useState('200000')
    const [buyPrice, setBuyPrice] = useState('100000')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateTax = () => {
        const gain = parseFloat(sellPrice) - parseFloat(buyPrice)
        const exemption = 125000 // New rule 2024-25
        const taxableGain = Math.max(0, gain - exemption)
        const tax = taxableGain * 0.125 // 12.5% new rate

        setResult({
            totalGain: Math.round(gain),
            taxableGain: Math.round(taxableGain),
            taxAmount: Math.round(tax)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const features = [
        { title: "Budget 2024 Update", desc: "Includes the latest 12.5% tax rate and ₹1.25 Lakh exemption limit.", icon: "📅" },
        { title: "Equity & Mutual Funds", desc: "Applicable for listed stocks and equity-oriented mutual funds.", icon: "📈" },
        { title: "Tax Harvesting Plan", desc: "Helps you decide how much gain to book to stay within exemption limits.", icon: "💡" }
    ]

    const faqData = [
        { question: "What is the LTCG tax exemption limit now?", answer: "As per Budget 2024, the exemption limit for Long Term Capital Gains (LTCG) on equity is ₹1.25 Lakh per financial year." },
        { question: "What is the current LTCG tax rate?", answer: "The LTCG tax rate on listed equity and equity-oriented mutual funds has been increased from 10% to 12.5% starting July 2024." },
        { question: "What qualifies as 'Long Term' for stocks?", answer: "Holding period of more than 12 months for listed stocks and equity mutual funds qualifies as long-term." }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Total Selling Price (₹)</label>
                    <input type="number" value={sellPrice} onChange={(e) => setSellPrice(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Total Buying Price (₹)</label>
                    <input type="number" value={buyPrice} onChange={(e) => setBuyPrice(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" />
                </div>

                <button onClick={calculateTax} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md text-lg transition-transform active:scale-[0.98]">
                    Calculate Tax
                </button>

                {result && (
                    <div ref={resultRef} className="mt-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="bg-red-50 rounded-xl p-6 text-center border border-red-100">
                            <p className="text-red-600 text-sm font-bold uppercase tracking-wide mb-1">Estimated LTCG Tax</p>
                            <p className="text-4xl sm:text-5xl font-extrabold text-red-900">₹{result.taxAmount.toLocaleString('en-IN')}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                <p className="text-xs text-slate-500 font-semibold uppercase">Total Gains</p>
                                <p className="text-lg font-bold text-slate-800">₹{result.totalGain.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                                <p className="text-xs text-green-700 font-semibold uppercase">Exemption Used</p>
                                <p className="text-lg font-bold text-green-700">₹{Math.min(result.totalGain, 125000).toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 text-center italic">Note: Cess (4%) may be extra on the calculated tax amount.</p>
                    </div>
                )}
            </div>

            <div className="mt-12">
                <SEOSection title="LTCG Tax Rules 2024-25" faq={faqData} features={features} />
            </div>
        </div>
    )
}
