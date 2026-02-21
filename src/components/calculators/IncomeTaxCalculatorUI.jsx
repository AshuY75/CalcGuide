import { useState, useRef } from 'react'
import SEOSection from '../SEOSection'

export default function IncomeTaxCalculatorUI() {
    const [income, setIncome] = useState('1200000')
    const [investments80C, setInvestments80C] = useState('150000')
    const [hraExemption, setHraExemption] = useState('0')
    const [homeLoanInterest, setHomeLoanInterest] = useState('0')
    const [otherDeductions, setOtherDeductions] = useState('0')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateTax = () => {
        const grossIncome = parseFloat(income) || 0

        // --- NEW REGIME Calculation (FY 2024-25 / 2025-26) ---
        const stdDedNew = 75000
        const taxableNew = Math.max(0, grossIncome - stdDedNew)
        let taxNew = 0

        // Slabs for New Regime
        if (taxableNew <= 300000) taxNew = 0
        else if (taxableNew <= 700000) taxNew = (taxableNew - 300000) * 0.05
        else if (taxableNew <= 1000000) taxNew = 20000 + (taxableNew - 700000) * 0.10
        else if (taxableNew <= 1200000) taxNew = 50000 + (taxableNew - 1000000) * 0.15
        else if (taxableNew <= 1500000) taxNew = 80000 + (taxableNew - 1200000) * 0.20
        else taxNew = 140000 + (taxableNew - 1500000) * 0.30

        // Rebate u/s 87A for New Regime: No tax for income up to 7L (effectively after std ded)
        // Note: Marginal relief applies for income slightly above 7L, but for simplicity we use basic rebate
        if (taxableNew <= 700000) taxNew = 0

        const cessNew = taxNew * 0.04
        const totalTaxNew = taxNew + cessNew

        // --- OLD REGIME Calculation ---
        const stdDedOld = 50000
        const ded80C = Math.min(150000, parseFloat(investments80C) || 0)
        const dedInterest = Math.min(200000, parseFloat(homeLoanInterest) || 0)
        const totalDedOld = stdDedOld + ded80C + dedInterest + (parseFloat(hraExemption) || 0) + (parseFloat(otherDeductions) || 0)

        const taxableOld = Math.max(0, grossIncome - totalDedOld)
        let taxOld = 0

        // Slabs for Old Regime
        if (taxableOld <= 250000) taxOld = 0
        else if (taxableOld <= 500000) taxOld = (taxableOld - 250000) * 0.05
        else if (taxableOld <= 1000000) taxOld = 12500 + (taxableOld - 500000) * 0.20
        else taxOld = 112500 + (taxableOld - 1000000) * 0.30

        // Rebate u/s 87A for Old Regime: No tax for income up to 5L
        if (taxableOld <= 500000) taxOld = 0

        const cessOld = taxOld * 0.04
        const totalTaxOld = taxOld + cessOld

        setResult({
            taxNew: Math.round(totalTaxNew),
            taxOld: Math.round(totalTaxOld),
            savings: Math.round(Math.abs(totalTaxNew - totalTaxOld)),
            betterRegime: totalTaxNew < totalTaxOld ? 'NEW' : 'OLD',
            taxableNew: Math.round(taxableNew),
            taxableOld: Math.round(taxableOld)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "Which tax regime is better for me?", answer: "Generally, if you have high deductions (HRA, 80C, Home Loan Interest) exceeding 3.75 - 4 Lakhs, the Old Regime might be better. Otherwise, the New Regime with its lower slabs and higher standard deduction of 75k is usually superior." },
        { question: "What is the new standard deduction?", answer: "As per Budget 2024, the standard deduction for the New Regime has been increased from 50,000 to 75,000. For the Old Regime, it remains 50,000." },
        { question: "Is income up to 7 Lakhs tax-free?", answer: "Under the New Tax Regime, if your taxable income (after standard deduction) is up to 7 Lakhs, you get a full rebate under Section 87A, making your tax zero." }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Gross Annual Salary (₹)</label>
                        <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 text-lg" />
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
                        <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Old Regime Deductions</h4>
                        <div>
                            <label className="block text-xs font-semibold text-slate-500 mb-1">Section 80C (LIC, PPF, ELSS)</label>
                            <input type="number" value={investments80C} onChange={(e) => setInvestments80C(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-500 mb-1">HRA Exemption</label>
                            <input type="number" value={hraExemption} onChange={(e) => setHraExemption(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-500 mb-1">Home Loan Interest (24b)</label>
                            <input type="number" value={homeLoanInterest} onChange={(e) => setHomeLoanInterest(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm" />
                        </div>
                    </div>

                    <button onClick={calculateTax} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">
                        Compare Regimes
                    </button>
                </div>

                <div role="region" aria-live="polite" className="bg-slate-50 rounded-2xl p-6 border-2 border-dashed border-slate-200 flex flex-col justify-center">
                    {result ? (
                        <div ref={resultRef} className="space-y-6 animate-in fade-in duration-500">
                            <div className="grid grid-cols-2 gap-4">
                                <div className={`p-4 rounded-xl border-2 ${result.betterRegime === 'NEW' ? 'border-green-500 bg-white shadow-md' : 'border-slate-200 bg-slate-100'}`}>
                                    <p className="text-xs font-bold text-slate-500 uppercase">New Regime</p>
                                    <p className="text-2xl font-black text-slate-900">₹{result.taxNew.toLocaleString('en-IN')}</p>
                                    {result.betterRegime === 'NEW' && <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full mt-1 inline-block">MOST SAVINGS ✨</span>}
                                </div>
                                <div className={`p-4 rounded-xl border-2 ${result.betterRegime === 'OLD' ? 'border-green-500 bg-white shadow-md' : 'border-slate-200 bg-slate-100'}`}>
                                    <p className="text-xs font-bold text-slate-500 uppercase">Old Regime</p>
                                    <p className="text-2xl font-black text-slate-900">₹{result.taxOld.toLocaleString('en-IN')}</p>
                                    {result.betterRegime === 'OLD' && <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full mt-1 inline-block">MOST SAVINGS ✨</span>}
                                </div>
                            </div>

                            <div className="bg-orange-600 text-white p-6 rounded-2xl text-center shadow-xl">
                                <p className="text-orange-100 text-sm font-medium mb-1">You save under {result.betterRegime} Regime</p>
                                <p className="text-4xl font-black">₹{result.savings.toLocaleString('en-IN')}</p>
                            </div>

                            <div className="space-y-2">
                                <p className="text-xs text-slate-500 text-center italic">Tax included 4% health & education cess. Calculation based on FY 2025-26 rules.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center space-y-4 py-12">
                            <span className="text-5xl">📄</span>
                            <p className="text-slate-500 font-medium">Enter your salary and deductions to see the comparison</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-12">
                <SEOSection title="How to choose between Old and New Regime?" faq={faqData}>
                    <h3>The Breakeven Point</h3>
                    <p>
                        The "Breakeven" is the total amount of deductions you need for the Old Regime to be exactly equal to the New Regime. For a salary of ₹15 Lakhs, if your total deductions (80C + HRA + Interest) are less than ₹4.25 Lakhs, <strong>the New Regime is better</strong>. If they are more, <strong>the Old Regime wins</strong>.
                    </p>
                    <h3>Standard Deduction Change</h3>
                    <p>
                        One major reason to choose the New Regime now is the increased standard deduction of <strong>₹75,000</strong>. This directly reduces your taxable income, and combined with lower tax rates, makes it simpler for most taxpayers who don't want to track receipts.
                    </p>
                </SEOSection>
            </div>
        </div>
    )
}
