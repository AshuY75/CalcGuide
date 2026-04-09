import { useState, useRef, useEffect } from 'react'
import SEOSection from '../SEOSection'
import AffiliateCTA from '../AffiliateCTA'
import { setUrlParams, parseInitialState } from '../../utils/urlState'

export default function EMICalculatorUI({
    defaultLoanAmount = '2500000',
    defaultInterestRate = '8.5',
    defaultTenure = '20',
    showSEOContent = true
}) {
    // Initialize from URL or defaults
    const initialState = parseInitialState({
        p: defaultLoanAmount,
        r: defaultInterestRate,
        t: defaultTenure,
        s: ''
    });

    const [loanAmount, setLoanAmount] = useState(initialState.p)
    const [interestRate, setInterestRate] = useState(initialState.r)
    const [tenure, setTenure] = useState(initialState.t)
    const [salary, setSalary] = useState(initialState.s)
    const [result, setResult] = useState(null)
    const [isSharing, setIsSharing] = useState(false)
    const [showCompare, setShowCompare] = useState(false)
    const [compareRate, setCompareRate] = useState('9.5')

    const resultRef = useRef(null)

    // Sync state with URL params
    useEffect(() => {
        setUrlParams({
            p: loanAmount,
            r: interestRate,
            t: tenure,
            s: salary
        });
    }, [loanAmount, interestRate, tenure, salary]);

    // Auto-calculate on initial load if params exist
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('p') || params.get('r')) {
            calculateEMI(false); // Don't scroll on initial load
        }
    }, []);

    const getEMIData = (p, r_annual, t_years) => {
        const P = parseFloat(p)
        const r = parseFloat(r_annual) / 12 / 100
        const n = parseFloat(t_years) * 12
        
        if (isNaN(P) || isNaN(r) || isNaN(n) || n === 0) return null;

        const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
        const totalAmount = emi * n
        const totalInterest = totalAmount - P

        return { emi, totalInterest, totalAmount };
    }

    const calculateEMI = (shouldScroll = true) => {
        const data = getEMIData(loanAmount, interestRate, tenure);
        if (!data) return;

        let riskLevel = 'safe'
        let riskMessage = ''
        let emiToSalary = 0

        if (salary) {
            const salaryNum = parseFloat(salary)
            emiToSalary = (data.emi / salaryNum) * 100
            if (emiToSalary <= 30) {
                riskLevel = 'safe'
                riskMessage = 'Great! Your EMI is well within safe limits (under 30%). You have enough buffer for savings and emergencies.'
            } else if (emiToSalary <= 40) {
                riskLevel = 'caution'
                riskMessage = 'Manageable (30-40%), but requires careful budgeting. Limited room for unexpected expenses.'
            } else {
                riskLevel = 'danger'
                riskMessage = 'High financial stress likely (> 40%). Consider reducing loan amount or increasing tenure to lower the EMI.'
            }
        }

        const compareData = showCompare ? getEMIData(loanAmount, compareRate, tenure) : null;

        setResult({
            emi: Math.round(data.emi),
            totalInterest: Math.round(data.totalInterest),
            totalAmount: Math.round(data.totalAmount),
            riskLevel,
            riskMessage,
            emiToSalary: emiToSalary.toFixed(1),
            compare: compareData ? {
                emi: Math.round(compareData.emi),
                totalInterest: Math.round(compareData.totalInterest),
                savings: Math.round(compareData.totalInterest - data.totalInterest)
            } : null
        })

        if (shouldScroll) {
            setTimeout(() => {
                resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }, 100)
        }
    }

    const handleShare = (platform) => {
        const url = window.location.href;
        
        let shareText = `📈 *Home Loan EMI Result*\n`;
        shareText += `-------------------------\n`;
        shareText += `💰 *Loan Amount:* ₹${parseFloat(loanAmount).toLocaleString('en-IN')}\n`;
        shareText += `💸 *Monthly EMI:* ₹${result.emi.toLocaleString('en-IN')}\n`;
        shareText += `📅 *Tenure:* ${tenure} Years\n`;
        shareText += `📉 *Interest Rate:* ${interestRate}%\n`;
        shareText += `-------------------------\n`;
        shareText += `Check the full breakdown here:\n`;

        if (platform === 'whatsapp') {
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + url)}`, '_blank');
        } else {
            navigator.clipboard.writeText(url);
            setIsSharing(true);
            setTimeout(() => setIsSharing(false), 2000);
        }
    }

    // SVG Bar Chart Component
    const ComparisonChart = ({ current, target }) => {
        const max = Math.max(current, target);
        const currentH = (current / max) * 100;
        const targetH = (target / max) * 100;

        return (
            <svg viewBox="0 0 200 120" className="w-full max-w-[240px] mx-auto overflow-visible">
                {/* Y Axis Guide */}
                <line x1="20" y1="10" x2="20" y2="110" stroke="#e2e8f0" strokeWidth="1" />
                <line x1="20" y1="110" x2="190" y2="110" stroke="#e2e8f0" strokeWidth="1" />
                
                {/* Bar 1 */}
                <rect x="50" y={110 - currentH} width="30" height={currentH} fill="#3b82f6" rx="4" />
                <text x="65" y={105 - currentH} textAnchor="middle" fontSize="6" fontWeight="bold" fill="#334155">₹{(current/1000).toFixed(0)}k</text>
                <text x="65" y="118" textAnchor="middle" fontSize="6" fill="#64748b">Current</text>

                {/* Bar 2 */}
                <rect x="120" y={110 - targetH} width="30" height={targetH} fill="#94a3b8" rx="4" />
                <text x="135" y={105 - targetH} textAnchor="middle" fontSize="6" fontWeight="bold" fill="#334155">₹{(target/1000).toFixed(0)}k</text>
                <text x="135" y="118" textAnchor="middle" fontSize="6" fill="#64748b">Scenario</text>
            </svg>
        );
    }

    const features = [
        { title: "Accurate Formula", desc: "Uses the banking standard Reducing Balance formula for exact EMI figures.", icon: "🧮" },
        { title: "Salary Risk Check", desc: "Checks if the EMI is affordable based on your monthly in-hand salary.", icon: "🛡️" },
        { title: "Total Interest Breakdown", desc: "Shows exactly how much extra you pay as interest over the loan tenure.", icon: "📊" }
    ]

    const faqData = [
        { question: "What is the formula for EMI calculation?", answer: "The formula is: EMI = [P x R x (1+R)^N]/[(1+R)^N-1], where P is Loan Amount, R is monthly interest rate, and N is tenure in months." },
        { question: "Does EMI change if interest rate changes?", answer: "Yes, for floating rate loans, if the Repo Rate changes, your bank might increase the tenure or the EMI amount. For fixed rate loans, it remains constant." },
        { question: "Can I pay more than my EMI?", answer: "Yes, this is called a prepayment. Even small prepayments can drastically reduce your total interest burden and reduce the loan tenure." },
        { question: "Is there a penalty for prepaying home loans?", answer: "For floating rate home loans given to individuals, RBI mandates zero prepayment penalty. However, check terms for fixed-rate or personal loans." }
    ]

    const Tooltip = ({ text }) => (
        <span className="group relative ml-1 inline-block cursor-help align-middle">
            <span className="flex h-3 w-3 items-center justify-center rounded-full bg-slate-200 text-[8px] font-bold text-slate-500">?</span>
            <span className="pointer-events-none absolute bottom-full left-1/2 mb-1 w-32 -translate-x-1/2 rounded bg-slate-800 p-2 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                {text}
                <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-slate-800"></span>
            </span>
        </span>
    );

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Loan Amount</label>
                    <div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span><input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="e.g. 2500000" /></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate (% p.a)</label>
                        <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="e.g. 8.5" step="0.1" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Tenure (Years)</label>
                        <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="e.g. 20" />
                    </div>
                </div>

                <div className="flex items-center gap-2 py-2">
                    <input 
                        type="checkbox" 
                        id="compare" 
                        checked={showCompare} 
                        onChange={(e) => setShowCompare(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="compare" className="text-sm font-bold text-slate-600 cursor-pointer">Compare with another interest rate</label>
                </div>

                {showCompare && (
                    <div className="p-4 bg-slate-50 border border-blue-100 rounded-xl animate-in fade-in zoom-in duration-300">
                        <label className="block text-xs font-black text-blue-600 uppercase tracking-widest mb-2">Compare Scenario Rate (%)</label>
                        <input 
                            type="number" 
                            value={compareRate} 
                            onChange={(e) => setCompareRate(e.target.value)} 
                            className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg bg-white" 
                            step="0.1"
                        />
                        <p className="text-[10px] text-slate-500 mt-2">Example: Check how a 1% rate hike effects your total interest.</p>
                    </div>
                )}

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Salary (Optional)</label>
                    <div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span><input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="For risk analysis" /></div>
                </div>

                <button onClick={() => calculateEMI(true)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md text-lg transition-transform active:scale-[0.98]">
                    Calculate {showCompare ? 'Comparison' : 'EMI'}
                </button>

                {/* Inline Result Section */}
                {result && (
                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100 mb-6">
                            <p className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-1">Your Monthly EMI <Tooltip text="The fixed amount you pay to the lender every month until the loan is paid off." /></p>
                            <p className="text-4xl sm:text-5xl font-extrabold text-blue-900">₹{result.emi.toLocaleString('en-IN')}</p>
                            {result.compare && (
                                <p className="text-xs font-bold text-slate-500 mt-2">vs ₹{result.compare.emi.toLocaleString('en-IN')} in Scenario</p>
                            )}
                        </div>

                        {result.compare && (
                            <div className="mb-8 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                                <h4 className="text-center text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Visual Comparison</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <ComparisonChart current={result.totalInterest} target={result.compare.totalInterest} />
                                    <div className="space-y-4">
                                        <div className="bg-slate-50 p-4 rounded-xl">
                                            <p className="text-xs font-bold text-slate-500 uppercase mb-1">Total Interest Difference</p>
                                            <p className={`text-2xl font-black ${result.compare.savings > 0 ? 'text-red-600' : 'text-green-600'}`}>
                                                {result.compare.savings > 0 ? '+' : ''} ₹{Math.abs(result.compare.savings).toLocaleString('en-IN')}
                                            </p>
                                            <p className="text-[10px] text-slate-500">{result.compare.savings > 0 ? 'Extra interest paid over the tenure' : 'Total savings on interest'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="p-4 bg-slate-50 rounded-lg text-center border border-slate-200">
                                <p className="text-xs text-slate-500 uppercase font-semibold">Total Interest <Tooltip text="The total extra cost of borrowing the money over the entire tenure." /></p>
                                <p className="text-lg font-bold text-slate-900">₹{result.totalInterest.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-lg text-center border border-slate-200">
                                <p className="text-xs text-slate-500 uppercase font-semibold">Total Payment <Tooltip text="Principal + Total Interest" /></p>
                                <p className="text-lg font-bold text-slate-900">₹{result.totalAmount.toLocaleString('en-IN')}</p>
                            </div>
                        </div>

                        {salary && (
                            <div className={`p-4 rounded-lg border ${result.riskLevel === 'safe' ? 'bg-green-50 border-green-200 text-green-800' : result.riskLevel === 'caution' ? 'bg-yellow-50 border-yellow-200 text-yellow-800' : 'bg-red-50 border-red-200 text-red-800'} mb-6`}>
                                <div className="font-bold mb-1 flex items-center gap-2">
                                    {result.riskLevel === 'safe' ? '✅ Safe Range' : result.riskLevel === 'caution' ? '⚠️ Caution' : '🚨 High Risk'}
                                </div>
                                <p className="text-sm leading-snug">{result.riskMessage}</p>
                            </div>
                        )}

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

                        <AffiliateCTA type="loan" />
                    </div>
                )}
            </div>

            {showSEOContent && (
                <div className="mt-8">
                    <SEOSection title="About EMI Calculator" faq={faqData} features={features} />
                </div>
            )}
        </div>
    )
}
