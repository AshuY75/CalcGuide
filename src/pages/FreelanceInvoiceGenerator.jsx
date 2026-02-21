import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function FreelanceInvoiceGenerator() {
    const [projectRate, setProjectRate] = useState('50000')
    const [gstRate, setGstRate] = useState('18')
    const [tdsRate, setTdsRate] = useState('10')
    const [platformFee, setPlatformFee] = useState('0')
    const [result, setResult] = useState(null)
    const resultRef = useRef(null)

    const calculateInvoice = () => {
        const rate = parseFloat(projectRate)
        const gst = parseFloat(gstRate)
        const tds = parseFloat(tdsRate)
        const fee = parseFloat(platformFee)

        if (isNaN(rate)) return

        const gstAmount = (rate * gst) / 100
        const totalInvoiceValue = rate + gstAmount
        const tdsDeduction = (rate * tds) / 100
        const platformDeduction = (rate * fee) / 100
        const netTakeHome = rate + gstAmount - tdsDeduction - platformDeduction

        setResult({
            baseRate: rate,
            gstAmount: Math.round(gstAmount),
            totalInvoice: Math.round(totalInvoiceValue),
            tdsDeduction: Math.round(tdsDeduction),
            platformDeduction: Math.round(platformDeduction),
            netTakeHome: Math.round(netTakeHome)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "Do freelancers need to pay GST?", answer: "In India, freelancers need to register for GST only if their annual turnover exceeds ₹20 Lakhs (₹10 Lakhs for special category states). However, you can opt for voluntary registration to claim Input Tax Credit." },
        { question: "What is TDS for freelancers?", answer: "Clients usually deduct TDS (Tax Deducted at Source) at 10% under Section 194J for professional services or 1% under 194C for contracts. You can claim this back if your total tax liability is lower than the TDS deducted." },
        { question: "How to calculate invoice value with GST?", answer: "The formula is: Total = Base Amount + (Base Amount * GST Rate / 100). For an 18% GST on a ₹10,000 project, the invoice value is ₹11,800." }
    ]

    const features = [
        { title: "GST & TDS Breakdown", desc: "Clearly see your tax liabilities and deductions before sending the invoice.", icon: "📑" },
        { title: "Platform Fee Support", desc: "Account for Upwork, Fiverr, or payment gateway fees (2-20%) automatically.", icon: "💳" },
        { title: "Net Take-Home View", icon: "💰", desc: "Know exactly how much cash will hit your bank account after all deductions." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="Freelance Invoice Generator India"
                description="Create professional GST and TDS compliant invoice estimates for your freelance projects."
                url="https://calcguide.in/calculators/creator/freelance-invoice-generator"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.CREATOR} className="hover:text-blue-600">Creator Tools</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Invoice Generator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Freelance Invoice Generator</h1>
                    <p className="text-slate-600">Estimate your professional project billing and taxes</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Project Base Rate (₹)</label>
                                    <input
                                        type="number"
                                        value={projectRate}
                                        onChange={(e) => setProjectRate(e.target.value)}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg font-bold"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 mb-2 uppercase">GST (%)</label>
                                        <select
                                            value={gstRate}
                                            onChange={(e) => setGstRate(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                                        >
                                            <option value="0">0% (Exempt)</option>
                                            <option value="5">5%</option>
                                            <option value="12">12%</option>
                                            <option value="18">18% (Standard)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 mb-2 uppercase">TDS (%)</label>
                                        <select
                                            value={tdsRate}
                                            onChange={(e) => setTdsRate(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                                        >
                                            <option value="1">1% (Section 194C)</option>
                                            <option value="2">2%</option>
                                            <option value="10">10% (Section 194J)</option>
                                            <option value="0">0% (Nil)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 mb-2 uppercase">Fee (%)</label>
                                        <input
                                            type="number"
                                            value={platformFee}
                                            onChange={(e) => setPlatformFee(e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                            placeholder="Upwork/Gateway"
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={calculateInvoice}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-95 transition-transform"
                                >
                                    Generate Invoice Preview
                                </button>

                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-slate-50 rounded-xl p-6 mb-6 font-mono text-sm border border-slate-200">
                                            <div className="flex justify-between py-2 border-b border-dashed border-slate-300">
                                                <span>Professional Fees</span>
                                                <span>₹{result.baseRate.toLocaleString('en-IN')}</span>
                                            </div>
                                            <div className="flex justify-between py-2 border-b border-dashed border-slate-300 text-slate-600">
                                                <span>GST ({gstRate}%)</span>
                                                <span>+ ₹{result.gstAmount.toLocaleString('en-IN')}</span>
                                            </div>
                                            <div className="flex justify-between py-3 font-bold text-slate-900 border-b-2 border-slate-300">
                                                <span>Total Invoice Value</span>
                                                <span>₹{result.totalInvoice.toLocaleString('en-IN')}</span>
                                            </div>

                                            <div className="mt-4 space-y-1 text-red-600 text-xs">
                                                <div className="flex justify-between">
                                                    <span>Less: TDS ({tdsRate}%)</span>
                                                    <span>- ₹{result.tdsDeduction.toLocaleString('en-IN')}</span>
                                                </div>
                                                {result.platformDeduction > 0 && (
                                                    <div className="flex justify-between">
                                                        <span>Less: Platform Fees</span>
                                                        <span>- ₹{result.platformDeduction.toLocaleString('en-IN')}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="mt-6 p-4 bg-emerald-600 rounded-lg text-white text-center">
                                                <p className="text-[10px] font-bold uppercase opacity-80 mb-1">Final Bank Deposit (Estimated)</p>
                                                <p className="text-3xl font-black">₹{result.netTakeHome.toLocaleString('en-IN')}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="Freelance Billing & Tax Guide"
                            whatIs="Professional invoicing is more than just stating a price. In India, a proper invoice for a GST-registered freelancer must include CGST/SGST/IGST breakdown and account for TDS deductions. Our generator helps you stay compliant by showing exactly how much your client should pay and how much will actually reach your account."
                            whoShouldUse="Full-time freelancers, consultants, agency owners, and side-hustlers who want to quote projects professionally. It is especially useful for those using international platforms where high platform fees can significantly eat into profits."
                            example="If you bill ₹1,00,000 for a website. You add 18% GST (₹18,000), total value becomes ₹1,18,000. Your client deducts 10% TDS on the base (₹10,000). You receive ₹1,08,000. You later pay the ₹18,000 GST to the govt, making your true earnings ₹90,000."
                            commonMistake="Forgetting to state 'GST Exclusive' or 'GST Inclusive' in your quotes. If you don't mention it, clients usually assume GST is inclusive, meaning you'll have to pay the 18% tax from your own profit."
                        />

                        <SEOSection title="Freelance Tax Compliance" faq={faqData} features={features} />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Creator Hub</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.CREATOR.FREELANCER_RATE} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">💰</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">What's My Rate?</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.CREATOR.YOUTUBE_EARNINGS} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">📺</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">YouTube AdSense</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
