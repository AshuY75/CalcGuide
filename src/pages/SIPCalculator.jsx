import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import SIPCalculatorUI from '../components/calculators/SIPCalculatorUI'
import { SchemaGenerator } from '../components/SchemaGenerator'
import SeoHead from '../components/SeoHead'
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'

const features = [
    { title: "Inflation Adjust", desc: "See the real value of your maturity amount.", icon: "📉" },
    { title: "Growth Chart", desc: "Visual graph to see how wealth compounds over time.", icon: "📊" },
    { title: "Instant Report", desc: "Get total invested vs total wealth gain breakdown.", icon: "⚡" },
]

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
            <SeoHead
                title="SIP Calculator - Calculate Mutual Fund Returns Online"
                description="Calculate how much your monthly SIP investments can grow. Check wealth gain and maturity amount with our free Mutual Fund SIP Calculator."
                keywords="sip calculator, mutual fund calculator, sip returns, investment calculator india, systematic investment plan"
                canonicalPath={ROUTES.CALCULATORS.INVESTMENT.SIP}
            />

            <SchemaGenerator
                type="FinancialProduct"
                name="SIP Calculator"
                description="Calculate Mutual Fund SIP returns instantly. See how small monthly investments grow into crores with the power of compounding."
                url="https://calcguide.in/calculators/investment/sip-calculator"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.SIP} className="hover:text-blue-600">SIP Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">SIP Calculator</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">SIP Calculator</h1>
                    <p className="text-slate-600">Calculate how much your monthly investments can grow</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <SIPCalculatorUI />

                        <CalculatorContent
                            title="SIP Calculator"
                            whatIs="A Systematic Investment Plan (SIP) is a disciplined way of investing in mutual funds. Instead of a lump sum, you invest a fixed amount (e.g., ₹5,000) every month on a specific date. This habit of regular investing averages out the cost of buying units (Rupee Cost Averaging) and helps you build wealth over time through the power of compounding."
                            whoShouldUse="Anyone looking to build long-term wealth should use this calculator. It is ideal for salaried individuals planning for retirement, parents saving for their child's education, or anyone with a financial goal like buying a house or car. Even if you can only save ₹500 a month, starting early is key."
                            example="If you invest ₹10,000 monthly for 20 years at an expected return of 12%, your total investment will be ₹24 Lakhs. However, your estimated maturity amount could be over ₹99 Lakhs! The wealth gained (approx ₹75 Lakhs) is purely from the power of compound interest."
                            commonMistake="Reviewing returns too frequently and stopping SIPs when the market is down. In reality, market dips are the best time to continue your SIP because you buy more units at a lower price. Another mistake is not increasing your SIP amount as your income grows (Top-up SIP)."
                        />

                        <SEOSection title="Smart Investing with SIP" faq={faqData} features={features}>
                            <h3>Why SIP creates wealth?</h3>
                            <p>
                                The two biggest friends of an investor are <strong>Time</strong> and <strong>Discipline</strong>. SIP ensures both. By investing small amounts regularly, you don't need to time the market. You buy more when the market is low and less when it is high, automatically averaging your purchase price.
                            </p>
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
