import CalculatorContent from '../components/CalculatorContent'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import GratuityCalculatorUI from '../components/calculators/GratuityCalculatorUI'

export default function GratuityCalculator() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.TAX} className="hover:text-blue-600">Tax Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Gratuity Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Gratuity Calculator (2025)</h1>
                    <p className="text-slate-600">Calculate the gratuity amount you are entitled to after years of service</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <GratuityCalculatorUI />
                        <CalculatorContent
                            title="Understanding Gratuity: Your Reward for Loyalty"
                            whatIs="Gratuity is a monetary benefit given by an employer to an employee in recognition of their long and meritorious service. It is governed by the Payment of Gratuity Act, 1972 in India."
                            whoShouldUse="Any employee who has completed (or is about to complete) 5 years of continuous service with the same employer. It is a critical component of your final settlement when you leave a job or retire."
                            example="If you have worked for 10 years and your last basic + DA was ₹1,00,000, your gratuity would be (15/26) * 1,00,000 * 10 = ₹5,76,923."
                            commonMistake="Ignoring the rounding rules. Service for 4 years and 7 months is rounded to 5 years. Service for 4 years and 5 months is rounded to 4 years. This small difference can significantly impact your final amount."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
