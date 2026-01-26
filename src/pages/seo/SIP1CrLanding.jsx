
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/paths'
import SIP1CrCalculatorUI from '../../components/calculators/SIP1CrCalculatorUI'
import SEOSection from '../../components/SEOSection'

export default function SIP1CrLanding() {
    const faqData = [
        {
            question: "Is it possible to reach 1 Crore with normal salary?",
            answer: "Yes. With a SIP of ₹10,000/month, you can reach 1 Crore in roughly 20 years. If you increase it to ₹25,000/month, it takes only 13 years."
        },
        {
            question: "How does the 15-15-15 rule work?",
            answer: "The rule states: Invest ₹15,000 per month for 15 years at 15% annual returns to get roughly ₹1 Crore. It is a simple benchmark for aggressive equity investors."
        },
        {
            question: "Which funds give 15% return?",
            answer: "While Nifty 50 gives ~12%, actively managed Mid-cap and Small-cap funds have historically delivered 15-18% over 10+ year periods, though with higher risk."
        }
    ]

    const schema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "SIP to 1 Crore Calculator",
        "url": "https://calcguide.in/sip-1-crore-calculator",
        "description": "Calculate standard monthly SIP required to reach 1 Crore corpus."
    }

    return (
        <div className="min-h-screen bg-slate-50">
            
            <script type="application/ld+json">{JSON.stringify(schema)}</script>

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">SIP 1 Crore Calculator</h1>
                    <p className="text-slate-600">How much do you need to invest to become a Crorepati?</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <SIP1CrCalculatorUI defaultTargetAmount="10000000" showSEOContent={false} />

                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <SEOSection title="Roadmap to ₹1 Crore" faq={faqData}>
                                <h3>Understanding the Goal</h3>
                                <p>
                                    Reaching <strong>₹1 Crore</strong> is a major financial milestone for middle-class Indians. It provides financial security for retirement or children's education.
                                    The key isn't just saving, but investing in assets that beat inflation.
                                </p>
                                <h3>Investment Scenarios (Assuming 12% Return)</h3>
                                <ul className="list-disc pl-5 space-y-2 text-slate-700 mt-4">
                                    <li><strong>10 Years:</strong> You need roughly <strong>₹43,000 / month</strong>.</li>
                                    <li><strong>15 Years:</strong> You need roughly <strong>₹20,000 / month</strong>.</li>
                                    <li><strong>20 Years:</strong> You need roughly <strong>₹10,000 / month</strong>.</li>
                                    <li><strong>25 Years:</strong> You need roughly <strong>₹5,300 / month</strong>.</li>
                                </ul>
                                <p className="mt-4 text-sm text-slate-500 italic">
                                    Notice how starting 5 years earlier cuts your required investment in half!
                                </p>
                            </SEOSection>
                        </div>
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
