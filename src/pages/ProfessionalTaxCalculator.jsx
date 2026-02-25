import CalculatorContent from '../components/CalculatorContent'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import ProfessionalTaxCalculatorUI from '../components/calculators/ProfessionalTaxCalculatorUI'
import RelatedContent from '../components/RelatedContent'

export default function ProfessionalTaxCalculator() {
    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="Professional Tax Calculator 2025-26"
                description="Calculate state-wise Professional Tax (PT) for salaried employees in India with latest slab rates."
                url="https://calcguide.in/calculators/tax/professional-tax-calculator/"
            />
            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.TAX} className="hover:text-blue-600">Tax Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Professional Tax Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Professional Tax Calculator 2025-26</h1>
                    <p className="text-slate-600">Calculate state-wise Professional Tax (PT) for salaried employees in India</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <ProfessionalTaxCalculatorUI />
                        <CalculatorContent
                            title="What is Professional Tax in India?"
                            whatIs="Professional Tax (PT) is a direct tax levied by state governments on individuals who earn an income through salary, professions (like doctors, lawyers, CAs), or business. It is governed by Article 276 of the Indian Constitution, which limits the maximum PT per person to ₹2,500 per year."
                            whoShouldUse="Any salaried individual or self-employed person working in states where Professional Tax is applicable (like Maharashtra, Karnataka, West Bengal, etc.). Your employer usually deducts this from your monthly gross salary and remits it to the state government."
                            example="In Maharashtra, if your monthly salary is above ₹10,000, you pay ₹200 per month, with ₹300 deducted in February to reach the annual limit of ₹2,500. In Karnataka, any salary above ₹25,000 attracts a flat ₹200/month PT."
                            commonMistake="Many people think PT is a national tax like Income Tax. In reality, it varies by state, and some states like Delhi, Haryana, and Rajasthan don't levy Professional Tax at all. Also, PT is a deductible expense under Section 16(iii) of the Income Tax Act, reducing your taxable income."
                        />
                        <RelatedContent category="TAX" currentPath={ROUTES.CALCULATORS.TAX.PROFESSIONAL_TAX} />
                    </div>
                    <div className="md:col-span-1 space-y-6">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Tax Essentials</h3>
                            <div className="space-y-4">
                                <Link to={ROUTES.CALCULATORS.TAX.INCOME_TAX} className="block group">
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-600">Income Tax Calculator</p>
                                    <p className="text-xs text-slate-500 mt-1">Check your total tax liability...</p>
                                </Link>
                                <hr className="border-slate-100" />
                                <Link to={ROUTES.LEARN.SIDE_HUSTLE_TAX} className="block group">
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-600">Side Hustle Tax Guide</p>
                                    <p className="text-xs text-slate-500 mt-1">Paying tax on freelance income...</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
