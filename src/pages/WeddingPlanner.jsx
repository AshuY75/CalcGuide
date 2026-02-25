import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function WeddingPlanner() {
    const [totalBudget, setTotalBudget] = useState('1000000') // 10 Lakhs Default
    const [result, setResult] = useState(null)
    const resultRef = useRef(null)

    const calculateSplit = () => {
        const total = parseFloat(totalBudget)
        if (isNaN(total)) return

        // Standard Indian Wedding Budget Breakdown percentages
        const split = {
            venueCatering: total * 0.40, // 40%
            jewelryClothing: total * 0.20, // 20%
            photography: total * 0.10, // 10%
            decoration: total * 0.10, // 10%
            invitationsGifts: total * 0.05, // 5%
            travelStay: total * 0.05, // 5%
            makeupEntertainment: total * 0.05, // 5%
            miscellaneous: total * 0.05 // 5%
        }

        setResult(split)

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "How much does an average Indian wedding cost?", answer: "In India, a mid-range wedding can cost between ₹10 Lakhs to ₹30 Lakhs. Grand 'Big Fat Indian Weddings' can easily exceed ₹1 Crore depending on the venue and guest count." },
        { question: "What is the biggest expense in a wedding?", answer: "Venue and Catering usually take up the largest slice of the budget, often accounting for 40% to 50% of the total expenditure." },
        { question: "How to save money on a wedding?", answer: "Opt for an off-season date, limit the guest list (the 100-person wedding trend), choose a government-owned venue, and skip physical invitations by using digital 'Save the Dates'." }
    ]

    const features = [
        { title: "Smart Budget Allocation", desc: "Get an instant breakdown based on proven Indian wedding spending patterns.", icon: "📊" },
        { title: "Category Breakdown", desc: "Know exactly how much to spend on Gold, Catering, and Photography.", icon: "👗" },
        { title: "Savings Tips", icon: "💡", desc: "Optimized for 2025 trends like sustainable weddings and intimate gatherings." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="Indian Wedding Budget Planner"
                description="Plan your wedding expenses with our detailed budget breakdown for 2025."
                url="https://calcguide.in/calculators/utility/wedding-expense-planner/"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.UTILITY} className="hover:text-blue-600">Utility Tools</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Wedding Planner</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Wedding Budget Planner</h1>
                    <p className="text-slate-600">Plan your dream wedding without breaking the bank</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Total Wedding Budget (₹)</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">₹</span>
                                        <input
                                            type="number"
                                            value={totalBudget}
                                            onChange={(e) => setTotalBudget(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg font-bold"
                                        />
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        <button onClick={() => setTotalBudget('1000000')} className="px-3 py-1 bg-slate-100 rounded text-xs hover:bg-slate-200">10 Lakh</button>
                                        <button onClick={() => setTotalBudget('2500000')} className="px-3 py-1 bg-slate-100 rounded text-xs hover:bg-slate-200">25 Lakh</button>
                                        <button onClick={() => setTotalBudget('5000000')} className="px-3 py-1 bg-slate-100 rounded text-xs hover:bg-slate-200">50 Lakh</button>
                                    </div>
                                </div>

                                <button
                                    onClick={calculateSplit}
                                    className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-95 transition-transform"
                                >
                                    Plan My Budget
                                </button>

                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <h3 className="text-lg font-bold text-slate-900 mb-4">Budget Breakdown</h3>
                                        <div className="space-y-4">
                                            {[
                                                { label: 'Venue & Catering (40%)', val: result.venueCatering, color: 'bg-rose-500' },
                                                { label: 'Jewelry & Clothes (20%)', val: result.jewelryClothing, color: 'bg-amber-500' },
                                                { label: 'Photo & Video (10%)', val: result.photography, color: 'bg-blue-500' },
                                                { label: 'Decor & Flowers (10%)', val: result.decoration, color: 'bg-emerald-500' },
                                                { label: 'Invitations & Gifts (5%)', val: result.invitationsGifts, color: 'bg-slate-500' },
                                                { label: 'Others (15%)', val: result.travelStay + result.makeupEntertainment + result.miscellaneous, color: 'bg-slate-300' }
                                            ].map((item, idx) => (
                                                <div key={idx} className="group">
                                                    <div className="flex justify-between text-sm mb-1">
                                                        <span className="font-semibold text-slate-600">{item.label}</span>
                                                        <span className="font-bold text-slate-900">₹{item.val.toLocaleString('en-IN')}</span>
                                                    </div>
                                                    <div className="w-full bg-slate-100 h-2 rounded-full">
                                                        <div className={`h-full rounded-full ${item.color}`} style={{ width: `${(item.val / totalBudget) * 100}%` }}></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-8 p-6 bg-rose-50 rounded-xl border border-rose-100 text-center">
                                            <p className="text-rose-600 text-xs font-bold uppercase mb-1">Total Estimated Spend</p>
                                            <p className="text-4xl font-black text-rose-900">₹{parseFloat(totalBudget).toLocaleString('en-IN')}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="Planning the Big Fat Indian Wedding"
                            whatIs="An Indian wedding budget requires meticulous planning because of the sheer number of ceremonies (Mehendi, Sangeet, Wedding, Reception). Our budget planner uses industry-standard percentages practiced by professional wedding planners in India to give you a realistic roadmap of where your money should go."
                            whoShouldUse="Engaged couples and their parents who are in the early stages of planning. It helps prevent 'budget creep' where small costs like extra snacks or designer invitations blow up the entire financial plan."
                            example="If your budget is ₹20 Lakhs, you should aim to fix a venue with food for less than ₹8 Lakhs. Spending more than ₹4 Lakhs on jewelry and clothes might starve your budget for other essentials like photography or decor."
                            commonMistake="Allocating too much to jewelry and clothing early on. In many Indian families, gold is purchased first, leaving very little for the actual event and hospitality, leading to high-interest loans for the wedding day."
                        />

                        <SEOSection title="2025 Wedding Trends" faq={faqData} features={features} />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Lifestyle Links</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.UTILITY.AGE} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🎂</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Age Calculator</p>
                                </Link>
                                <Link to={ROUTES.HUBS.STUDENT} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🎓</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Student Tools</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
