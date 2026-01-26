
import CalculatorContent from '../components/CalculatorContent'
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
            
            <script type="application/ld+json">{JSON.stringify(schema)}</script>

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.LOAN} className="hover:text-blue-600">Loan Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">EMI Calculator</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">EMI Calculator</h1>
                    <p className="text-slate-600">Calculate loan EMI and check affordability against your salary</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <EMICalculatorUI />

                        <CalculatorContent
                            title="EMI Calculator"
                            whatIs="An EMI (Equated Monthly Installment) Calculator helps you estimate your monthly loan repayment amount. Whether you are taking a home loan, car loan, or personal loan, knowing your EMI in advance helps you budget better and choose a tenure that fits your pocket. This tool accounts for principal, interest rate, and loan duration."
                            whoShouldUse="Anyone planning to apply for a loan should use this tool. It is essential for home buyers to check affordability, car buyers to decide budget, and anyone taking a personal loan to ensure they don't over-leverage their monthly income."
                            example="If you take a Home Loan of ₹50 Lakhs for 20 years at 8.5% interest, your monthly EMI will be approximately ₹43,391. Over the 20 years, you will pay a total interest of roughly ₹54 Lakhs, meaning you pay back a total of ₹1.04 Crores."
                            commonMistake="Choosing the longest tenure (e.g., 30 years) just to get a lower EMI. While this reduces monthly pressure, it drastically increases the total interest you pay. It's often better to pay a slightly higher EMI for a shorter tenure to save lakhs in interest."
                        />
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
