
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import SIP1CrCalculatorUI from '../components/calculators/SIP1CrCalculatorUI'

export default function SIP1CrCalculator() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Calculator",
        "name": "SIP Goal Calculator",
        "description": "Calculate monthly investment required to reach a target amount like 1 Crore.",
        "url": "https://calcguide.in/calculators/investment/sip-1-crore-calculator/",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Any"
    }

    const features = [
        { title: "Goal Reverse Calc", desc: "Tells you the SIP amount needed for a specific target.", icon: "🎯" },
        { title: "Inflation Ready", desc: "Helps you realize that ₹1 Cr today != ₹1 Cr in 20 years.", icon: "💸" },
        { title: "Retirement Plan", desc: "Perfect for planning retirement corpus requirements.", icon: "👴" },
    ]

    const faqData = [
        { question: "How much SIP for 1 Crore in 10 years?", answer: "At 12% expected return, you need to invest approx ₹43,041 per month to reach ₹1 Crore in 10 years." },
        { question: "How much SIP for 1 Crore in 15 years?", answer: "At 12% expected return, you need to invest approx ₹20,017 per month. Time is money—starting 5 years earlier halves your burden." },
        { question: "Can I reach 1 Crore with 5000 SIP?", answer: "Yes, but it will take time. At 12% return, a ₹5,000 monthly SIP will take about 26 years to reach ₹1 Crore." },
        { question: "Is 12% return guaranteed?", answer: "No. Mutual funds are subject to market risks. However, Nifty 50 has historically delivered 12-14% CAGR over 15+ year periods." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">

            <script type="application/ld+json">{JSON.stringify(schema)}</script>

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.SIP} className="hover:text-blue-600">SIP Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Target SIP Calculator</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Target SIP Calculator</h1>
                    <p className="text-slate-600">Calculate how much to invest monthly to reach your goal</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <SIP1CrCalculatorUI />

                        <CalculatorContent
                            title="Target SIP Calculator (₹1 Crore Goal)"
                            whatIs="This is a Goal-Based SIP Calculator. Instead of asking 'How much will I get?', it asks 'How much do I need to invest?'. You set a target amount (e.g., ₹1 Crore) and a time period, and it calculates the monthly SIP required to achieve that goal at a given interest rate."
                            whoShouldUse="Ideal for goal planners. Whether you want ₹50 Lakhs for a child's education in 15 years or ₹5 Crores for retirement in 30 years, this tool tells you exactly how much to save starting today."
                            example="To save ₹1 Crore in 15 years (assuming 12% returns), you don't need to save ₹1 Crore/15 years. You only need to start a monthly SIP of roughly ₹20,017. The power of compounding covers the rest."
                            commonMistake="Not accounting for inflation. ₹1 Crore today will not have the same value 20 years from now. Always aim for a higher corpus than you think you need."
                        />

                        <SEOSection title="Planning Your First Crore" faq={faqData} features={features}>
                            <h3>The 15-15-15 Rule</h3>
                            <p>
                                In the world of mutual funds, the <strong>15-15-15 rule</strong> says that if you invest <strong>₹15,000 per month</strong> for <strong>15 years</strong> at <strong>15% return</strong>, you will become a Crorepati (approx ₹1 Crore).
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
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Regular SIP</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.FD} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🏛️</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">FD Calculator</p>
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
