import CalculatorContent from '../components/CalculatorContent'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import IncomeTaxCalculatorUI from '../components/calculators/IncomeTaxCalculatorUI'

export default function IncomeTaxCalculator() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.TAX} className="hover:text-blue-600">Tax Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Income Tax Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Income Tax Calculator (Old vs New)</h1>
                    <p className="text-slate-600">Compare tax liability for FY 2025-26 (AY 2026-27) with latest Budget changes</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <IncomeTaxCalculatorUI />
                        <CalculatorContent
                            title="New Tax Regime vs Old Tax Regime: Which is better?"
                            whatIs="The New Tax Regime offers lower tax rates but ignores most deductions like 80C, HRA, and Home Loan interest. The Old Regime has higher rates but allows you to reduce your taxable income through various investments and expenses."
                            whoShouldUse="Salaried professionals with high rent (HRA) and home loans often find the Old Regime more beneficial. However, for those with annual income up to ₹7.75 Lakhs (post-standard deduction), the New Regime results in zero tax, making it the default choice for middle-income earners."
                            example="If your salary is ₹12 Lakhs and you have ₹2 Lakhs in deductions, you'll pay ~₹85,000 in the New Regime vs ~₹1.1 Lakhs in the Old Regime. The New Regime is the clear winner here."
                            commonMistake="Forgetting that the New Regime now has a standard deduction of ₹75,000. Many online calculators still use the old ₹50,000 limit, leading to incorrect comparisons. Always use updated tools like CalcGuide."
                        />
                    </div>
                    <div className="md:col-span-1 space-y-6">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Guides</h3>
                            <div className="space-y-4">
                                <Link to={ROUTES.LEARN.OLD_VS_NEW_TAX} className="block group">
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-orange-600">Old vs New Tax 2025: Why switching is mandatory?</p>
                                    <p className="text-xs text-slate-500 mt-1">Deep dive into slab changes...</p>
                                </Link>
                                <hr className="border-slate-100" />
                                <Link to={ROUTES.LEARN.HRA_EXEMPTION} className="block group">
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-orange-600">HRA Exemption Math</p>
                                    <p className="text-xs text-slate-500 mt-1">How to optimize your rent...</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
