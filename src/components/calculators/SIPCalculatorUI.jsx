import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEOSection from '../SEOSection'
import AffiliateCTA from '../AffiliateCTA'
import { ROUTES } from '../../routes/paths'
import { setUrlParams, parseInitialState } from '../../utils/urlState'

export default function SIPCalculatorUI({
    defaultMonthlyInvestment = '5000',
    defaultInterestRate = '12',
    defaultTimePeriod = '10',
    showSEOContent = true
}) {
    // Initialize from URL or defaults
    const initialState = parseInitialState({
        m: defaultMonthlyInvestment,
        r: defaultInterestRate,
        t: defaultTimePeriod,
        s: '0'
    });

    const [monthlyInvestment, setMonthlyInvestment] = useState(initialState.m)
    const [interestRate, setInterestRate] = useState(initialState.r)
    const [timePeriod, setTimePeriod] = useState(initialState.t)
    const [stepUp, setStepUp] = useState(initialState.s)
    const [result, setResult] = useState(null)
    const [isSharing, setIsSharing] = useState(false)

    const resultRef = useRef(null)

    // Sync state with URL params
    useEffect(() => {
        setUrlParams({
            m: monthlyInvestment,
            r: interestRate,
            t: timePeriod,
            s: stepUp
        });
    }, [monthlyInvestment, interestRate, timePeriod, stepUp]);

    // Auto-calculate on initial load if params exist
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('m') || params.get('r')) {
            calculateSIP(false); // Don't scroll on initial load
        }
    }, []);

    const calculateSIP = (shouldScroll = true) => {
        const initialP = parseFloat(monthlyInvestment)
        const annualRate = parseFloat(interestRate)
        const r = annualRate / 12 / 100
        const years = parseFloat(timePeriod)
        const totalMonths = years * 12
        const step = parseFloat(stepUp) / 100

        if (isNaN(initialP) || isNaN(annualRate) || isNaN(years) || years === 0) return;

        let maturityAmount = 0
        let investedAmount = 0
        let currentP = initialP

        for (let month = 1; month <= totalMonths; month++) {
            if (month > 1 && (month - 1) % 12 === 0) {
                currentP = currentP * (1 + step)
            }
            investedAmount += currentP
            maturityAmount = (maturityAmount + currentP) * (1 + r)
        }

        const totalReturns = maturityAmount - investedAmount
        setResult({
            investedAmount: Math.round(investedAmount),
            totalReturns: Math.round(totalReturns),
            maturityAmount: Math.round(maturityAmount)
        })

        if (shouldScroll) {
            setTimeout(() => {
                resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }, 100)
        }
    }

    const handleShare = (platform) => {
        const url = window.location.href;
        
        let shareText = `📈 *SIP Investment Result*\n`;
        shareText += `-------------------------\n`;
        shareText += `💰 *Monthly SIP:* ₹${parseFloat(monthlyInvestment).toLocaleString('en-IN')}\n`;
        shareText += `🎯 *Maturity Amount:* ₹${result.maturityAmount.toLocaleString('en-IN')}\n`;
        shareText += `📅 *Tenure:* ${timePeriod} Years\n`;
        shareText += `💹 *Expected Return:* ${interestRate}%\n`;
        shareText += `-------------------------\n`;
        shareText += `Check full projection here:\n`;

        if (platform === 'whatsapp') {
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + url)}`, '_blank');
        } else {
            navigator.clipboard.writeText(url);
            setIsSharing(true);
            setTimeout(() => setIsSharing(false), 2000);
        }
    }

    const faqData = [
        {
            question: "What is SIP?",
            answer: "SIP (Systematic Investment Plan) is an investment mode where you invest a fixed amount regularly (monthly/quarterly) in Mutual Funds, gold, or other assets."
        },
        {
            question: "How much return can I expect from SIP?",
            answer: "For Equity Mutual Funds, historic long-term returns range from 12% to 15%. For Debt funds, it is usually 6-8%. This calculator defaults to 12% as a standard equity benchmark."
        },
        {
            question: "Is SIP better than Lumpsum?",
            answer: "SIP is generally safer for new investors as it averages out the market volatility (Rupee Cost Averaging). Lumpsum is better when the market is significantly down (undervalued)."
        },
        {
            question: "Does this calculator account for inflation?",
            answer: "No, this calculator shows nominal returns. To understand real purchasing power, you should assume a lower effective return rate (e.g., Return minus 6% Inflation)."
        }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="space-y-6">
                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Investment</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span><input type="number" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="e.g. 5000" /></div></div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1"><label className="block text-sm font-semibold text-slate-700 mb-2">Step-Up (%)</label><input type="number" value={stepUp} onChange={(e) => setStepUp(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="0" /></div>
                    <div className="col-span-1"><label className="block text-sm font-semibold text-slate-700 mb-2">Return Rate (%)</label><input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="12" /></div>
                    <div className="col-span-1"><label className="block text-sm font-semibold text-slate-700 mb-2">Time (Years)</label><input type="number" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="10" /></div>
                </div>
                <button onClick={() => calculateSIP(true)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">Calculate SIP</button>

                {/* Inline Result */}
                <div role="region" aria-live="polite" className="mt-8 border-t border-slate-100 min-h-[260px]">
                    {result ? (
                        <div ref={resultRef} className="pt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                            <div className="text-center mb-8">
                                <p className="text-sm uppercase tracking-wide text-slate-500 font-medium mb-1">Maturity Amount</p>
                                <p className="text-4xl sm:text-5xl font-extrabold text-blue-900">₹{result.maturityAmount.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="grid gap-4 mb-8">
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex justify-between items-center"><p className="text-sm text-slate-500 font-semibold">Invested Amount</p><p className="text-xl font-bold text-slate-700">₹{result.investedAmount.toLocaleString('en-IN')}</p></div>
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex justify-between items-center"><p className="text-sm text-green-700 font-semibold">Wealth Gain</p><p className="text-xl font-bold text-green-700">+ ₹{result.totalReturns.toLocaleString('en-IN')}</p></div>
                            </div>

                            {/* Share Actions */}
                            <div className="bg-slate-50 rounded-xl p-4 border border-dashed border-slate-300">
                                <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Share this result</p>
                                <div className="flex gap-3">
                                    <button 
                                        onClick={() => handleShare('whatsapp')}
                                        className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                                    >
                                        <span>WhatsApp</span>
                                    </button>
                                    <button 
                                        onClick={() => handleShare('copy')}
                                        className="flex-1 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                                    >
                                        <span>{isSharing ? '🚀 Link Copied!' : '🔗 Copy Link'}</span>
                                    </button>
                                </div>
                            </div>

                            <AffiliateCTA type="investment" />
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-slate-400 pt-16 pb-8">
                            <span className="text-4xl mb-2 opacity-50">📊</span>
                            <p className="text-sm font-medium">Enter details & click "Calculate SIP" to view results</p>
                        </div>
                    )}
                </div>
            </div>

            {showSEOContent && (
                <div className="mt-12">
                    <SEOSection title="About SIP Calculator" faq={faqData}>
                        <h3>The Power of Compounding</h3>
                        <p>
                            Albert Einstein called compounding the "Eighth Wonder of the World". In SIP, your returns are reinvested, and you earn returns on your returns.
                            For example, investing just ₹5,000/month for 20 years at 12% can generate a corpus of nearly <strong>₹50 Lakhs</strong>, while your actual investment is only ₹12 Lakhs.
                        </p>
                        <h3>Rupee Cost Averaging Explained</h3>
                        <p>
                            When the market is high, your SIP amount buys fewer units. When the market crashes, the same amount buys more units. Over time, this averages out the cost of buying, protecting you from market volatility. This is why you should never stop SIPs during a market crash.
                        </p>
                        <h3>Decision Guidance</h3>
                        <p>
                            If you are saving for a long-term goal defined 10+ years away (like Child's Education or Retirement), equity SIPs are the best inflation-beating instrument. For short-term goals (&lt; 3 years), consider RD or Debt Funds instead.
                        </p>
                    </SEOSection>
                </div>
            )}
        </div>
    )
}
