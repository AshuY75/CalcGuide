import { useState, useRef, useEffect } from 'react'
import SEOSection from '../SEOSection'
import { calculateNewRegimeTax, calculateOldRegimeTax } from '../../utils/taxMath'
import { setUrlParams, parseInitialState } from '../../utils/urlState'

export default function IncomeTaxCalculatorUI() {
    // Initialize from URL or defaults
    const initialState = parseInitialState({
        i: '1200000', // income
        c: '150000',  // 80C
        h: '0',       // HRA
        l: '0',       // homeLoan
        o: '0'        // other
    });

    const [income, setIncome] = useState(initialState.i)
    const [investments80C, setInvestments80C] = useState(initialState.c)
    const [hraExemption, setHraExemption] = useState(initialState.h)
    const [homeLoanInterest, setHomeLoanInterest] = useState(initialState.l)
    const [otherDeductions, setOtherDeductions] = useState(initialState.o)
    const [result, setResult] = useState(null)
    const [isSharing, setIsSharing] = useState(false)

    const resultRef = useRef(null)

    // Sync state with URL params
    useEffect(() => {
        setUrlParams({
            i: income,
            c: investments80C,
            h: hraExemption,
            l: homeLoanInterest,
            o: otherDeductions
        });
    }, [income, investments80C, hraExemption, homeLoanInterest, otherDeductions]);

    // Auto-calculate on initial load if params exist
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('i')) {
            calculateTax(false);
        }
    }, []);

    const calculateTax = (shouldScroll = true) => {
        const grossIncome = parseFloat(income) || 0
        const ded80C = Math.min(150000, parseFloat(investments80C) || 0)
        const dedInterest = Math.min(200000, parseFloat(homeLoanInterest) || 0)
        const otherDeds = (parseFloat(hraExemption) || 0) + (parseFloat(otherDeductions) || 0)
        
        const totalOtherDeds = ded80C + dedInterest + otherDeds;

        const resultNew = calculateNewRegimeTax(grossIncome);
        const resultOld = calculateOldRegimeTax(grossIncome, totalOtherDeds);

        setResult({
            taxNew: Math.round(resultNew.totalTax),
            taxOld: Math.round(resultOld.totalTax),
            savings: Math.round(Math.abs(resultNew.totalTax - resultOld.totalTax)),
            betterRegime: resultNew.totalTax < resultOld.totalTax ? 'NEW' : 'OLD',
            taxableNew: Math.round(resultNew.taxableIncome),
            taxableOld: Math.round(resultOld.taxableIncome)
        })

        if (shouldScroll) {
            setTimeout(() => {
                resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }, 100)
        }
    }

    const handleShare = (platform) => {
        const url = window.location.href;
        
        let shareText = `📑 *Income Tax Comparison Result*\n`;
        shareText += `-------------------------\n`;
        shareText += `💰 *Annual Income:* ₹${parseFloat(income).toLocaleString('en-IN')}\n`;
        shareText += `✨ *Better Regime:* ${result.betterRegime} Regime\n`;
        shareText += `💸 *Total Savings:* ₹${result.savings.toLocaleString('en-IN')}\n`;
        shareText += `-------------------------\n`;
        shareText += `*Tax Breakdown:*\n`;
        shareText += `🔹 New Regime: ₹${result.taxNew.toLocaleString('en-IN')}\n`;
        shareText += `🔸 Old Regime: ₹${result.taxOld.toLocaleString('en-IN')}\n`;
        shareText += `-------------------------\n`;
        shareText += `Compare your tax here:\n`;

        if (platform === 'whatsapp') {
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + url)}`, '_blank');
        } else {
            navigator.clipboard.writeText(url);
            setIsSharing(true);
            setTimeout(() => setIsSharing(false), 2000);
        }
    }

    const faqData = [
        { question: "Which tax regime is better for me?", answer: "Generally, if you have high deductions (HRA, 80C, Home Loan Interest) exceeding 3.75 - 4 Lakhs, the Old Regime might be better. Otherwise, the New Regime with its lower slabs and higher standard deduction of 75k is usually superior." },
        { question: "What is the new standard deduction?", answer: "As per Budget 2024, the standard deduction for the New Regime has been increased from 50,000 to 75,000. For the Old Regime, it remains 50,000." },
        { question: "Is income up to 7 Lakhs tax-free?", answer: "Under the New Tax Regime, if your taxable income (after standard deduction) is up to 7 Lakhs, you get a full rebate under Section 87A, making your tax zero." }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="mb-6 flex justify-end">
                <span className="bg-orange-100 text-orange-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-orange-200">
                    Budget 2024 Ready ⚡
                </span>
            </div>
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

                    <button onClick={() => calculateTax(true)} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">
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

                            {/* Share Actions */}
                            <div className="bg-white rounded-xl p-4 border border-slate-200">
                                <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Share Comparison</p>
                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => handleShare('whatsapp')}
                                        className="flex-1 bg-[#25D366] text-white py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-2"
                                    >
                                        <span>WhatsApp</span>
                                    </button>
                                    <button 
                                        onClick={() => handleShare('copy')}
                                        className="flex-1 bg-slate-100 text-slate-700 py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-2"
                                    >
                                        <span>{isSharing ? 'Copied!' : 'Copy Link'}</span>
                                    </button>
                                </div>
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
