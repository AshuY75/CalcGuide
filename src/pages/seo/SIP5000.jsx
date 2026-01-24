import MetaManager from '../../components/MetaManager'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/paths'
import SIPCalculatorUI from '../../components/calculators/SIPCalculatorUI'
import SEOSection from '../../components/SEOSection'

export default function SIP5000() {
    const faqData = [
        {
            question: "Is ₹5000 per month enough for SIP?",
            answer: "Yes! ₹5000 is an excellent amount to start with. If invested for 20 years at 12% return, it can grow to nearly ₹50 Lakhs."
        },
        {
            question: "Can I increase my SIP amount later?",
            answer: "Absolutely. You can use 'Step-up SIP' to increase your investment annually as your income grows, which will drastically increase your final corpus."
        },
        {
            question: "Where should I invest ₹5000 per month?",
            answer: "For long-term goals (5+ years), Equity Mutual Funds (Flexi-cap or Index Funds) are recommended. For short-term (1-3 years), stick to Debt Funds or RDs."
        }
    ]

    const schema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "SIP Calculator for ₹5000 Monthly",
        "url": "https://calcguide.in/sip-calculator-5000-per-month",
        "description": "Calculate returns for ₹5000 monthly SIP investment. See how small investments grow into big wealth."
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <MetaManager
                title="SIP Calculator for ₹5000 Per Month Invested"
                description="See how much ₹5000 per month grows in 5, 10, or 20 years. Calculate SIP returns instantly with our specialized 5k SIP calculator."
                keywords="sip calculator 5000 per month, 5000 sip return, mutual fund sip 5000"
            />
            <script type="application/ld+json">{JSON.stringify(schema)}</script>

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">SIP Calculator: ₹5000/Month</h1>
                    <p className="text-slate-600">Visualize the power of investing ₹5,000 regularly</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        {/* Default 5000 logic */}
                        <SIPCalculatorUI defaultMonthlyInvestment="5000" showSEOContent={false} />

                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <SEOSection title="Why Invest ₹5000 Per Month?" faq={faqData}>
                                <h3>The Magic of Small Consistent Investments</h3>
                                <p>
                                    Many people think they need a large lump sum to start investing. The truth is, investing <strong>₹5,000 per month</strong> is a powerful verified strategy to build wealth.
                                    Over 15 years, a simple ₹5,000 monthly SIP can grow to <strong>₹25 Lakhs</strong> (at 12% returns), while your total investment would only be ₹9 Lakhs.
                                </p>
                                <h3>Who should use this calculator?</h3>
                                <ul>
                                    <li><strong>Young Professionals:</strong> Just started earning? Allocating ₹5k from your salary is easy and effective.</li>
                                    <li><strong>Parents:</strong> Saving for a child's future education fees? A dedicated ₹5k SIP can cover college fees in 15 years.</li>
                                    <li><strong>Retirement Planners:</strong> Top up your EPF with an additional ₹5k equity SIP for inflation-beating returns.</li>
                                </ul>
                                <h3>Example Growth Table (₹5000/mo @ 12%)</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm text-left text-slate-600 mt-4 border rounded-lg">
                                        <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                                            <tr>
                                                <th className="px-6 py-3">Years</th>
                                                <th className="px-6 py-3">Invested</th>
                                                <th className="px-6 py-3">Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white border-b hover:bg-slate-50"><td className="px-6 py-4">5 Years</td><td className="px-6 py-4">₹3 Lakhs</td><td className="px-6 py-4 font-bold text-green-600">₹4.1 Lakhs</td></tr>
                                            <tr className="bg-white border-b hover:bg-slate-50"><td className="px-6 py-4">10 Years</td><td className="px-6 py-4">₹6 Lakhs</td><td className="px-6 py-4 font-bold text-green-600">₹11.6 Lakhs</td></tr>
                                            <tr className="bg-white border-b hover:bg-slate-50"><td className="px-6 py-4">20 Years</td><td className="px-6 py-4">₹12 Lakhs</td><td className="px-6 py-4 font-bold text-green-600">₹49.9 Lakhs</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </SEOSection>
                        </div>
                    </div>

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
