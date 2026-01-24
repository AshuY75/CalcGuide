import MetaManager from '../components/MetaManager'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import EMICalculatorUI from '../components/calculators/EMICalculatorUI'

export default function EMICalculator() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Calculator",
        "name": "EMI Calculator",
        "description": "Calculate your Home Loan, Car Loan or Personal Loan EMI with our free calculator. Get instant salary-based affordability analysis.",
        "url": "https://calcguide.in/calculators/loan/emi-calculator",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Any"
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <MetaManager
                title="EMI Calculator - Calculate Home, Car & Personal Loan EMI | CalcGuide"
                description="Use this free EMI Calculator to check your Home Loan, Car Loan, or Personal Loan EMI. Features salary-based affordability check to help you decide safely."
                keywords="emi calculator, home loan calculator, car loan emi, personal loan emi"
            />
            <script type="application/ld+json">{JSON.stringify(schema)}</script>

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">EMI Calculator</h1>
                    <p className="text-slate-600">Calculate loan EMI and check affordability against your salary</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <EMICalculatorUI />
                    </div>

                    {/* Sidebar with Related Tools */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Tools</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.LOAN.ELIGIBILITY} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">✅</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Check Eligibility</p>
                                        <p className="text-xs text-slate-500">Max loan you can get</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.LOAN.VILLAGE_INTEREST} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🌾</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Village Interest</p>
                                        <p className="text-xs text-slate-500">Daily/Monthly rates</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">📈</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">SIP Calculator</p>
                                        <p className="text-xs text-slate-500">Plan investments</p>
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
