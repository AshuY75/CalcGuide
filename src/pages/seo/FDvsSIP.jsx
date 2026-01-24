import MetaManager from '../../components/MetaManager'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/paths'
import SEOSection from '../../components/SEOSection'

export default function FDvsSIP() {
    const faqData = [
        {
            question: "Is SIP safer than FD?",
            answer: "No. FD (Fixed Deposit) is safer because returns are guaranteed and insured up to ₹5 Lakhs by DICGC. SIP in equity mutual funds carries market risk but offers much higher inflation-beating potential over 5+ years."
        },
        {
            question: "Taxation: FD vs SIP?",
            answer: "FD interest is fully taxable at your slab rate. Equity SIP gains are tax-free up to ₹1.25 Lakh/year (LTCG). Above that, it is taxed at only 12.5%. Hence, SIP is more tax-efficient for high earners."
        },
        {
            question: "Can I lose money in SIP?",
            answer: "In the short term (< 1-3 years), yes. However, over long periods (10+ years), diversified equity funds have historically never given negative returns in India."
        }
    ]

    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "FD vs SIP: The Ultimate Comparison for Indian Investors",
        "image": "https://calcguide.in/og-image.jpg",
        "author": "CalcGuide Team",
        "publisher": {
            "@type": "Organization",
            "name": "CalcGuide",
            "logo": { "@type": "ImageObject", "url": "https://calcguide.in/logo.png" }
        }
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <MetaManager
                title="FD vs SIP India - Difference, Returns & Taxation Comparison (2025)"
                description="Fixed Deposit vs SIP: Which is better? Detailed comparison of returns, risk, and taxation. See why SIP beats FD for long-term wealth creation."
                keywords="fd vs sip, sip vs fixed deposit, mutual fund vs fd, investment comparison india"
            />
            <script type="application/ld+json">{JSON.stringify(schema)}</script>

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">FD vs SIP: Which is Better?</h1>
                    <p className="text-slate-600">A data-driven comparison for Indian Investors</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">At a Glance Comparison</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left text-slate-600 border rounded-lg">
                                    <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                                        <tr>
                                            <th className="px-4 py-3 border-b">Parameter</th>
                                            <th className="px-4 py-3 border-b">Fixed Deposit (FD)</th>
                                            <th className="px-4 py-3 border-b">SIP (Equity MF)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b"><td className="px-4 py-3 font-semibold">Risk</td><td className="px-4 py-3 text-green-700">Almost Zero (Safe)</td><td className="px-4 py-3 text-red-600">Moderate to High</td></tr>
                                        <tr className="border-b"><td className="px-4 py-3 font-semibold">Returns</td><td className="px-4 py-3">6% - 7.5% (Fixed)</td><td className="px-4 py-3">12% - 15% (Variable)</td></tr>
                                        <tr className="border-b"><td className="px-4 py-3 font-semibold">Inflation Beating?</td><td className="px-4 py-3 text-red-600">No (Barely matches it)</td><td className="px-4 py-3 text-green-700">Yes (Wealth Creation)</td></tr>
                                        <tr className="border-b"><td className="px-4 py-3 font-semibold">Taxation</td><td className="px-4 py-3">Taxed at Income Slab</td><td className="px-4 py-3">LTCG 12.5% (&gt;1.25L profit)</td></tr>
                                        <tr><td className="px-4 py-3 font-semibold">Ideal For</td><td className="px-4 py-3">1-3 Years / Emergency Fund</td><td className="px-4 py-3">5+ Years / Wealth Goal</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-8 flex gap-4 flex-col sm:flex-row">
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold shadow-md transition-colors">
                                    Calculate SIP Returns
                                </Link>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.FD} className="flex-1 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-center py-3 rounded-lg font-semibold shadow-sm transition-colors">
                                    Calculate FD Returns
                                </Link>
                            </div>
                        </div>

                        <SEOSection title="Detailed Analysis" faq={faqData}>
                            <h3>The Power of Real Return</h3>
                            <p>
                                The most important concept in investing is <strong>Real Return</strong> (Return minus Inflation).
                            </p>
                            <p>
                                If inflation is <strong>6%</strong> and your FD gives <strong>7%</strong>, your real growth is only 1%. You are preserving wealth, not growing it.
                                However, if SIP gives <strong>12%</strong>, your real growth is 6%. This compounding effect creates massive wealth over 15-20 years.
                            </p>
                            <h3>When to choose FD?</h3>
                            <p>Do not hate FDs! They are essential for:</p>
                            <ul className="list-disc pl-5 mt-2">
                                <li>Emergency Funds (3-6 months expenses)</li>
                                <li>Saving for a wedding or trip in 1 year</li>
                                <li>Retired people needing guaranteed income</li>
                            </ul>
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
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP_CRORE} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🎯</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Target 1 Crore</p>
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
