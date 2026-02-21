import CalculatorContent from '../components/CalculatorContent'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import PlatformFeeCalculatorUI from '../components/calculators/PlatformFeeCalculatorUI'

export default function PlatformFeeCalculator() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Platform Fee Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Platform Fee Calculator (PayPal, Upwork, Fiverr)</h1>
                    <p className="text-slate-600">Calculate the actual net amount you receive after commissions and currency conversion</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <PlatformFeeCalculatorUI />
                        <CalculatorContent
                            title="The Hidden Cost of Freelancing Platforms"
                            whatIs="Platforms like Upwork, Fiverr, and PayPal provide safety and lead generation, but they charge a significant fee for this service. These fees usually come in three layers: the platform cut (e.g., 10%), the withdrawal fee, and the hidden currency conversion spread."
                            whoShouldUse="Freelancers working with international clients. If you are quoting a price of $1,000, you need to know that only about $850 might actually reach your Indian bank account."
                            example="On Upwork, if you earn $100, the platform takes $10 (10%). When you withdraw that $90 to an Indian bank, PayPal or Upwork might apply a conversion rate that is ₹2 less than the market rate, costing you another ₹180-200."
                            commonMistake="Ignoring the 'Spread'. Many freelancers only look at the 10% or 20% platform fee and ignore the 2.5% lost during currency conversion. Over a year, this 'invisible' fee can cost you tens of thousands of rupees."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
