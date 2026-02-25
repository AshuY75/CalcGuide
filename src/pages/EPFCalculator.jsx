import CalculatorContent from '../components/CalculatorContent'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import EPFCalculatorUI from '../components/calculators/EPFCalculatorUI'

export default function EPFCalculator() {
    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="EPF & VPF Calculator"
                description="Project your Employee Provident Fund (EPF) balance and retirement corpus with VPF contributions."
                url="https://calcguide.in/calculators/retirement/epf-calculator/"
            />
            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.TAX} className="hover:text-blue-600">Tax Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">EPF & VPF Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">EPF & VPF Calculator</h1>
                    <p className="text-slate-600">Project your Employee Provident Fund (EPF) balance and retirement corpus</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <EPFCalculatorUI />
                        <CalculatorContent
                            title="EPF Calculation: The Secret to a Secure Retirement"
                            whatIs="EPF (Employee Provident Fund) is a mandatory savings scheme managed by the EPFO. Both the employee and the employer contribute 12% of the basic salary, which earns a stable, high interest rate every year."
                            whoShouldUse="Salaried professionals in India. It is essential for understanding how your monthly deductions translate into a multi-crore retirement fund."
                            example="If you start at 25 with a ₹50,000 basic salary and a 10% VPF, you could retire with a corpus exceeding ₹4 Crores by the age of 55, thanks to the power of compounding and the 8%+ interest rate."
                            commonMistake="Ignoring VPF. Voluntary Provident Fund allows you to contribute more than the mandatory 12%. Since the interest rate is higher than FDs and the returns are tax-free up to specific limits, it's one of the best debt investments in India."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
