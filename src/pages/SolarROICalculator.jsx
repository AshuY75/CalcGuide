import CalculatorContent from '../components/CalculatorContent'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import SolarROICalculatorUI from '../components/calculators/SolarROICalculatorUI'

export default function SolarROICalculator() {
    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="Solar ROI & Subsidy Calculator"
                description="Calculate payback period and savings under PM Surya Ghar Muft Bijli Yojana for rooftop solar."
                url="https://calcguide.in/calculators/utility/solar-roi-calculator/"
            />
            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Solar ROI Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Solar ROI & Subsidy Calculator</h1>
                    <p className="text-slate-600">Calculate payback period and savings under PM Surya Ghar Muft Bijli Yojana</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <SolarROICalculatorUI />
                        <CalculatorContent
                            title="Should you install Rooftop Solar in 2025?"
                            whatIs="Rooftop solar is an investment where you install photovoltaic panels on your roof to generate electricity. With the new government subsidies, the upfront cost has dropped significantly, making it one of the best high-return investments for Indian households."
                            whoShouldUse="Homeowners with independent roofs and a monthly electricity bill of more than ₹2,000. If you have an AC or EV, solar becomes nearly essential to keep costs down."
                            example="A 3kW system costs ~₹1.8 Lakhs. After a ₹78,000 subsidy, your cost is ~₹1 Lakh. If it saves you ₹2,500 every month, you get your money back in just 3.3 years. For the next 22 years, your electricity is free!"
                            commonMistake="Ignoring the shadow area. Even if you have a big roof, if a nearby building or tree casts a shadow for a few hours, your generation can drop by 30-40%. Always get a professional site survey before paying."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
