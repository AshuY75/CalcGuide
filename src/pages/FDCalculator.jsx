import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { ROUTES } from '../routes/paths'
import RelatedContent from '../components/RelatedContent'
import { setUrlParams, parseInitialState } from '../utils/urlState'

export default function FDCalculator() {
    // Initialize from URL or defaults
    const initialState = parseInitialState({
        p: '100000', // principal
        r: '6.5',    // interestRate
        t: '5',      // timePeriod
        n: '4'       // compoundingFreq
    });

    const [principal, setPrincipal] = useState(initialState.p)
    const [interestRate, setInterestRate] = useState(initialState.r)
    const [timePeriod, setTimePeriod] = useState(initialState.t)
    const [compoundingFreq, setCompoundingFreq] = useState(initialState.n)
    const [result, setResult] = useState(null)
    const [isSharing, setIsSharing] = useState(false)

    const resultRef = useRef(null)

    // Sync state with URL params
    useEffect(() => {
        setUrlParams({
            p: principal,
            r: interestRate,
            t: timePeriod,
            n: compoundingFreq
        });
    }, [principal, interestRate, timePeriod, compoundingFreq]);

    // Auto-calculate on initial load if params exist
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('p') || params.get('r')) {
            calculateFD(false);
        }
    }, []);

    const calculateFD = (shouldScroll = true) => {
        const P = parseFloat(principal)
        const r = parseFloat(interestRate)
        const t = parseFloat(timePeriod)
        const n = parseFloat(compoundingFreq)

        if (isNaN(P) || isNaN(r) || isNaN(t) || t === 0) return;

        const A = P * Math.pow((1 + (r / 100) / n), n * t)
        const totalInterest = A - P

        setResult({
            principalAmount: Math.round(P),
            totalInterest: Math.round(totalInterest),
            maturityAmount: Math.round(A)
        })

        if (shouldScroll) {
            setTimeout(() => {
                resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }, 100)
        }
    }

    const handleShare = (platform) => {
        const url = window.location.href;
        
        let shareText = `🏛️ *Fixed Deposit (FD) Result*\n`;
        shareText += `-------------------------\n`;
        shareText += `💰 *Deposit Amount:* ₹${parseFloat(principal).toLocaleString('en-IN')}\n`;
        shareText += `🎯 *Maturity Value:* ₹${result.maturityAmount.toLocaleString('en-IN')}\n`;
        shareText += `📅 *Tenure:* ${timePeriod} Years\n`;
        shareText += `📉 *Interest Rate:* ${interestRate}%\n`;
        shareText += `-------------------------\n`;
        shareText += `Check FD breakdown here:\n`;

        if (platform === 'whatsapp') {
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + url)}`, '_blank');
        } else {
            navigator.clipboard.writeText(url);
            setIsSharing(true);
            setTimeout(() => setIsSharing(false), 2000);
        }
    }

    const features = [
        { title: "Quarterly Compounding", desc: "Calculates interest every 3 months (Standard for SBI, HDFC).", icon: "🗓️" },
        { title: "Safe Returns", desc: "Estimates guaranteed returns unlike market-linked tools.", icon: "✅" },
        { title: "Inflation Check", desc: "Helps you see if your money is growing fast enough.", icon: "📈" },
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="bg-white border-b border-slate-200 py-6 mb-4 rounded-xl shadow-sm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.INVESTMENT} className="hover:text-blue-600">Investment Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">FD Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">FD Calculator</h1>
                    <p className="text-slate-600">Calculate Fixed Deposit returns with quarterly compounding</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div><label className="block text-sm font-semibold text-slate-700 mb-2">Total Investment (Principal)</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span><input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="100000" /></div></div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div><label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate (%)</label><input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="6.5" /></div>
                                    <div><label className="block text-sm font-semibold text-slate-700 mb-2">Time Period (Years)</label><input type="number" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="5" /></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Compounding Frequency</label>
                                    <select value={compoundingFreq} onChange={(e) => setCompoundingFreq(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg bg-white">
                                        <option value="4">Quarterly (Standard)</option>
                                        <option value="1">Yearly</option>
                                        <option value="2">Half-Yearly</option>
                                        <option value="12">Monthly</option>
                                    </select>
                                </div>

                                <button onClick={() => calculateFD(true)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">Calculate Maturity</button>

                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-blue-50 rounded-xl p-6 mb-6 text-center border border-blue-100">
                                            <p className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-1">Maturity Amount</p>
                                            <p className="text-4xl sm:text-5xl font-extrabold text-blue-900">₹{result.maturityAmount.toLocaleString('en-IN')}</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                                <p className="text-xs text-slate-500 font-semibold uppercase">Invested</p>
                                                <p className="text-lg font-bold text-slate-800">₹{result.principalAmount.toLocaleString('en-IN')}</p>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                                                <p className="text-xs text-green-700 font-semibold uppercase">Interest</p>
                                                <p className="text-lg font-bold text-green-700">+ ₹{result.totalInterest.toLocaleString('en-IN')}</p>
                                            </div>
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
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="FD Calculator"
                            whatIs="A Fixed Deposit (FD) Calculator estimates the maturity amount and interest earned on your deposit. In India, most bank FDs compound interest quarterly (every 3 months), meaning your interest starts earning interest. This calculator handles that formula accurately, unlike simple interest calculators."
                            whoShouldUse="This tool is perfect for risk-averse investors, senior citizens seeking guaranteed income, or anyone saving for a short-term goal (1-3 years) who cannot risk stock market volatility. If you want safety and predictable returns, FD is the right choice."
                            example="If you invest ₹1 Lakh for 5 years at 7% interest (compounded quarterly), you won't just get flat interest. Due to compounding, your maturity amount will be approximately ₹1,41,478, earning you ₹41,478 in interest."
                            commonMistake="Ignoring the tax liability (TDS). FD interest is fully taxable as per your income tax slab. Another mistake is breaking an FD before maturity, which attracts a penalty (usually 1%) and lowers your effective interest rate."
                        />

                        <SEOSection title="About Fixed Deposits" features={features}>
                            <h3>Key Benefits of FD</h3>
                            <p>
                                <strong>Guaranteed Returns:</strong> Unlike the stock market, your returns are fixed when you book the FD.
                                <br />
                                <strong>Safety:</strong> Bank FDs are insured by DICGC up to ₹5 Lakhs.
                                <br />
                                <strong>Loan Facility:</strong> You can take a loan against your FD (usually up to 90% of value) at a low interest rate.
                            </p>
                        </SEOSection>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Tools</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">📈</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">SIP Calculator</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.RD} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🐖</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">RD Calculator</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.LOAN.EMI} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">💰</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">EMI Calculator</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedContent category="FD_PAGE" currentPath={ROUTES.CALCULATORS.INVESTMENT.FD} />
            </div>
        </div>
    )
}
