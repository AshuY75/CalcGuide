import CalculatorContent from '../components/CalculatorContent'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import EVvsPetrolTCOUI from '../components/calculators/EVvsPetrolTCOUI'

export default function EVvsPetrolTCO() {
    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="EV vs Petrol TCO Calculator"
                description="Compare the Total Cost of Ownership (TCO) between electric and petrol cars over 10 years."
                url="https://calcguide.in/calculators/utility/ev-vs-petrol-calculator/"
            />
            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">EV vs Petrol Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">EV vs Petrol TCO Calculator</h1>
                    <p className="text-slate-600">Compare the Total Cost of Ownership (TCO) over 10 years including fuel, battery, and maintenance</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <EVvsPetrolTCOUI />
                        <CalculatorContent
                            title="EV or Petrol: Which one is cheaper for you?"
                            whatIs="Total Cost of Ownership (TCO) is a financial estimate intended to help buyers determine the direct and indirect costs of a product. In cars, while EVs have a higher purchase price, their running cost (fuel/charging) and maintenance are significantly lower."
                            whoShouldUse="Anyone planning to buy a new car and confused between a traditional petrol engine and an electric motor. It is especially useful for high-mileage drivers who drive more than 40km a day."
                            example="A Petrol car costs ₹10L and an EV costs ₹14L. Over 1 Lakh km, you'll spend ~₹7L on petrol vs only ~₹1L on electricity. Even after paying ₹4L extra upfront, the EV saves you ₹2L in total cost."
                            commonMistake="Ignoring the 'Real World' range. Manufacturers claim 450km, but with AC and city traffic, it might be 300km. If you don't adjust this in your math, your charging cost is underestimated by 30%."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
