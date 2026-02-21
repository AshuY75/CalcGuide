import CalculatorContent from '../components/CalculatorContent'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import ElectricityBillCalculatorUI from '../components/calculators/ElectricityBillCalculatorUI'

export default function ElectricityBillCalculator() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Electricity Bill Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Electricity Bill Calculator (Slab-wise)</h1>
                    <p className="text-slate-600">Estimate your monthly electricity charges based on your state's latest unit rates</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <ElectricityBillCalculatorUI />
                        <CalculatorContent
                            title="How to Calculate Your Electricity Bill?"
                            whatIs="Indian electricity bills are calculated using a cumulative slab system. This means the first few units are cheap, and as you consume more, the rate per unit increases significantly."
                            whoShouldUse="Homeowners and tenants looking to manage their monthly expenses. Understanding which slab you fall into can help you decide when to switch off that extra AC or heater."
                            example="In Maharashtra, if you use 150 units, the first 100 units are charged at ~₹4.41, and the next 50 units at ~₹9.64. This jump makes the second half of your consumption much more expensive."
                            commonMistake="Ignoring the 'Sanctioned Load'. If you have a high load (e.g. 5kW) but low usage, your 'Fixed Charges' will remain high. Always ensure your load matches your actual appliance needs."
                        />
                    </div>
                    <div className="md:col-span-1">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm sticky top-8">
                            <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Guides</h3>
                            <div className="space-y-4">
                                <Link to={ROUTES.LEARN.SUMMER_BILL_SPIKE} className="block group">
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-yellow-600">Beat the Summer Bill Spike</p>
                                    <p className="text-xs text-slate-500 mt-1">AC saving tips & tricks...</p>
                                </Link>
                                <hr className="border-slate-100" />
                                <Link to={ROUTES.CALCULATORS.UTILITY.SOLAR_ROI} className="block group">
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-yellow-600">Solar ROI Calculator</p>
                                    <p className="text-xs text-slate-500 mt-1">Is rooftop solar worth it?</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
