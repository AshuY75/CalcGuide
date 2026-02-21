import CalculatorContent from '../components/CalculatorContent'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import HRACalculatorUI from '../components/calculators/HRACalculatorUI'

export default function HRACalculator() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.TAX} className="hover:text-blue-600">Tax Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">HRA Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">HRA Exemption Calculator</h1>
                    <p className="text-slate-600">Calculate tax savings on your house rent under Section 10(13A)</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <HRACalculatorUI />
                        <CalculatorContent
                            title="Decoding HRA: How much can you actually save?"
                            whatIs="House Rent Allowance (HRA) is a component of your salary provided by your employer to meet the cost of a rented house. Income tax law allows you to exempt a portion of this HRA from tax if you actually pay rent."
                            whoShouldUse="Salaried employees living in rented accommodation. If you are opting for the Old Tax Regime, HRA is one of the most powerful ways to reduce your taxable income."
                            example="If your Basic is ₹50k, HRA is ₹20k, and Rent is ₹15k, your exemption would be ₹10,000 (Rent - 10% Basic). You only pay tax on the remaining ₹10,000 of your HRA."
                            commonMistake="Trying to claim HRA in the New Tax Regime. HRA exemption is ONLY available under the Old Tax Regime. In the New Regime, the entire HRA received is fully taxable."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
