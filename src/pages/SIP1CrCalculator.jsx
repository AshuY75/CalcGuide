import MetaManager from '../components/MetaManager'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import SIP1CrCalculatorUI from '../components/calculators/SIP1CrCalculatorUI'

export default function SIP1CrCalculator() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Calculator",
        "name": "SIP Goal Calculator",
        "description": "Calculate monthly investment required to reach a target amount like 1 Crore.",
        "url": "https://calcguide.in/calculators/investment/sip-1-crore-calculator",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Any"
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <MetaManager
                title="SIP to 1 Crore Calculator - How to become a Crorepati"
                description="Calculate monthly SIP needed to reach ₹1 Crore, ₹5 Crore, or any financial goal. Plan your journey to become a Crorepati with our Target SIP Calculator."
                keywords="sip calculator 1 crore, sip goal calculator, how much sip to get 1 crore"
            />
            <script type="application/ld+json">{JSON.stringify(schema)}</script>

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Target SIP Calculator</h1>
                    <p className="text-slate-600">Calculate how much to invest monthly to reach your goal</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <SIP1CrCalculatorUI />
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
