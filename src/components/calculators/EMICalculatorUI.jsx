import { useState, useRef } from 'react'
import SEOSection from '../SEOSection'

export default function EMICalculatorUI({
    defaultLoanAmount = '2500000',
    defaultInterestRate = '8.5',
    defaultTenure = '20',
    showSEOContent = true
}) {
    const [loanAmount, setLoanAmount] = useState(defaultLoanAmount)
    const [interestRate, setInterestRate] = useState(defaultInterestRate)
    const [tenure, setTenure] = useState(defaultTenure)
    const [salary, setSalary] = useState('')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const calculateEMI = () => {
        const P = parseFloat(loanAmount)
        const r = parseFloat(interestRate) / 12 / 100
        const n = parseFloat(tenure) * 12
        const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
        const totalAmount = emi * n
        const totalInterest = totalAmount - P

        let riskLevel = 'safe'
        let riskMessage = ''
        let emiToSalary = 0

        if (salary) {
            const salaryNum = parseFloat(salary)
            emiToSalary = (emi / salaryNum) * 100
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

        setResult({
            emi: Math.round(emi),
            totalInterest: Math.round(totalInterest),
            totalAmount: Math.round(totalAmount),
            riskLevel,
            riskMessage,
            emiToSalary: emiToSalary.toFixed(1)
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
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
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Salary (Optional)</label>
                    <div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">₹</span><input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg" placeholder="For risk analysis" /></div>
                </div>

                <button onClick={calculateEMI} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md text-lg transition-transform active:scale-[0.98]">
                    Calculate EMI
                </button>

                {/* Inline Result Section */}
                {result && (
                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100 mb-6">
                            <p className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-1">Your Monthly EMI</p>
                            <p className="text-4xl sm:text-5xl font-extrabold text-blue-900">₹{result.emi.toLocaleString('en-IN')}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="p-4 bg-slate-50 rounded-lg text-center border border-slate-200">
                                <p className="text-xs text-slate-500 uppercase font-semibold">Total Interest</p>
                                <p className="text-lg font-bold text-slate-900">₹{result.totalInterest.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-lg text-center border border-slate-200">
                                <p className="text-xs text-slate-500 uppercase font-semibold">Total Payment</p>
                                <p className="text-lg font-bold text-slate-900">₹{result.totalAmount.toLocaleString('en-IN')}</p>
                            </div>
                        </div>

                        {salary && (
                            <div className={`p-4 rounded-lg border ${result.riskLevel === 'safe' ? 'bg-green-50 border-green-200 text-green-800' : result.riskLevel === 'caution' ? 'bg-yellow-50 border-yellow-200 text-yellow-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
                                <div className="font-bold mb-1 flex items-center gap-2">
                                    {result.riskLevel === 'safe' ? '✅ Safe Range' : result.riskLevel === 'caution' ? '⚠️ Caution' : '🚨 High Risk'}
                                </div>
                                <p className="text-sm leading-snug">{result.riskMessage}</p>
                            </div>
                        )}
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
