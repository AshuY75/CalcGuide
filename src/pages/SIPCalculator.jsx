import MetaManager from '../components/MetaManager'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import SIPCalculatorUI from '../components/calculators/SIPCalculatorUI'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'

const faqData = [
    {
        question: "What is the full form of SIP?",
        answer: "SIP stands for Systematic Investment Plan. It is a method of investing a fixed sum regularly in a mutual fund scheme."
    },
    {
        question: "Is SIP better than Fixed Deposit (FD)?",
        answer: "SIPs in equity mutual funds usually offer higher returns (12-15%) compared to FDs (6-7%) over the long term (5+ years). However, FDs are safer and offer guaranteed returns, whereas SIP returns are market-linked."
    },
    {
        question: "Can I lose money in SIP?",
        answer: "Yes, since SIPs invest in the stock market, the value can fluctuate in the short term. However, over long periods (7-10 years), the risk reduces significantly due to Rupee Cost Averaging."
    },
    {
        question: "What is the minimum amount to start a SIP?",
        answer: "You can start a SIP with as little as ₹500 per month in most Indian mutual funds."
    },
    {
        question: "How is SIP return calculated?",
        answer: "SIP returns are calculated using the XIRR (Extended Internal Rate of Return) method, which accounts for multiple cash inflows at different times."
    }
]

export default function SIPCalculator() {
    return (
        <div className="min-h-screen bg-slate-50">
            <MetaManager
                title="SIP Calculator - Calculate Mutual Fund Returns Online"
                description="Calculate how much your monthly SIP investments can grow. Check wealth gain and maturity amount with our free Mutual Fund SIP Calculator."
                keywords="sip calculator, mutual fund calculator, sip returns, investment calculator india, systematic investment plan"
                canonical="https://calcguide.in/calculators/investment/sip-calculator"
            />

            <SchemaGenerator
                type="FinancialProduct"
                name="SIP Calculator"
                description="Calculate Mutual Fund SIP returns instantly. See how small monthly investments grow into crores with the power of compounding."
                url="https://calcguide.in/calculators/investment/sip-calculator"
            />

            <SchemaGenerator
                type="FAQPage"
                name="SIP Calculator FAQ"
                description="Common questions about Systematic Investment Plans (SIP)"
                data={{
                    mainEntity: faqData.map(item => ({
                        "@type": "Question",
                        name: item.question,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: item.answer
                        }
                    }))
                }}
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">SIP Calculator</h1>
                    <p className="text-slate-600">Calculate how much your monthly investments can grow</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <SIPCalculatorUI />

                        <SEOSection title="SIP Guide" faq={faqData}>
                            <div className="space-y-6 text-slate-700">
                                <section>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">What is a SIP?</h3>
                                    <p className="leading-relaxed">
                                        A <strong>Systematic Investment Plan (SIP)</strong> is a simple method of investing in mutual funds. You invest a fixed amount periodically (usually monthly) instead of a large lump sum.
                                        Unlike a one-time investment in a <Link to={ROUTES.CALCULATORS.INVESTMENT.FD} className="text-blue-600 hover:underline">Fixed Deposit (FD)</Link>, SIPs help you build wealth by investing small amounts regularly in the stock market, averaging out your buying cost (Rupee Cost Averaging).
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">How SIP Returns Are Calculated</h3>
                                    <p className="mb-3">
                                        SIP returns are complex to calculate because each installment is invested for a different duration.
                                    </p>
                                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg mb-4">
                                        <p className="text-sm text-blue-800 mb-2 font-medium">Want to understand the math?</p>
                                        <Link to={ROUTES.LEARN.SIP_RETURNS_CALCULATION} className="text-blue-600 font-bold hover:underline flex items-center text-sm">
                                            Read Guide: How SIP Returns Are Calculated in India <span className="ml-1">→</span>
                                        </Link>
                                    </div>
                                    <p className="mb-3">
                                        The formula used is:
                                    </p>
                                    <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm border border-slate-200 overflow-x-auto">
                                        FV = P × ({'[ (1 + i)^n - 1 ]'} / i) × (1 + i)
                                    </div>
                                    <p className="mt-3 text-sm text-slate-600">
                                        Where <strong>FV</strong> is Future Value, <strong>P</strong> is the SIP amount, <strong>n</strong> is the number of payments, and <strong>i</strong> is the periodic interest rate.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">SIP Return Examples</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                            <h4 className="font-bold text-blue-900 mb-2">₹5,000/month for 10 Years</h4>
                                            <ul className="text-sm space-y-1 text-slate-700">
                                                <li>Invested: ₹6 Lakhs</li>
                                                <li>Rate: 12% (Expected)</li>
                                                <li>Wealth Gain: ₹5.6 Lakhs</li>
                                                <li className="font-bold text-blue-700 mt-1">Total: ₹11.6 Lakhs</li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                            <h4 className="font-bold text-green-900 mb-2">₹10,000/month for 20 Years</h4>
                                            <ul className="text-sm space-y-1 text-slate-700">
                                                <li>Invested: ₹24 Lakhs</li>
                                                <li>Rate: 12% (Expected)</li>
                                                <li>Wealth Gain: ₹75.9 Lakhs</li>
                                                <li className="font-bold text-green-700 mt-1">Total: ₹99.9 Lakhs</li>
                                            </ul>
                                            <p className="text-xs text-green-600 mt-2">
                                                *Close to <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP_CRORE} className="underline hover:text-green-800">Target 1 Crore</Link>
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Common SIP Mistakes</h3>
                                    <ul className="list-disc list-inside space-y-2 pl-2">
                                        <li><strong>Stopping during market lows:</strong> This is when you get more units for the same price. Never stop your SIP when the market is down.</li>
                                        <li><strong>Fixed amount forever:</strong> You should increase your SIP amount as your income grows (Top-up SIP).</li>
                                        <li><strong>Withdrawing too early:</strong> The real power of compounding (interest on interest) kicks in after 7-10 years.</li>
                                    </ul>
                                </section>

                                <section>
                                    <p className="text-sm text-slate-500 italic mt-6">
                                        Note: Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully.
                                    </p>
                                </section>
                            </div>
                        </SEOSection>
                    </div>

                    {/* Related Tools Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Tools</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP_CRORE} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🎯</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Target 1 Crore</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.LOAN.EMI} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">💰</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">EMI Calculator</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.FD} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🏛️</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">FD Calculator</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.RD} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">📅</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">RD Calculator</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
