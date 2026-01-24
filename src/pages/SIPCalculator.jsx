import MetaManager from '../components/MetaManager'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import SIPCalculatorUI from '../components/calculators/SIPCalculatorUI'

export default function SIPCalculator() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Calculator",
        "name": "SIP Calculator",
        "description": "Calculate Mutual Fund SIP returns instantly. See how small monthly investments grow into crores with the power of compounding.",
        "url": "https://calcguide.in/calculators/investment/sip-calculator",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Any"
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <MetaManager
                title="SIP Calculator - Mutual Fund Returns Calculator India"
                description="Calculate how much your monthly SIP investments can grow. Check wealth gain and maturity amount with our free Mutual Fund SIP Calculator."
                keywords="sip calculator, mutual fund calculator, sip returns, investment calculator india"
            />
            <script type="application/ld+json">{JSON.stringify(schema)}</script>

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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
