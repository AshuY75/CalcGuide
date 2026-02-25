import CalculatorContent from '../components/CalculatorContent'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import XIRRCalculatorUI from '../components/calculators/XIRRCalculatorUI'

export default function XIRRCalculator() {
    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="XIRR Calculator"
                description="Calculate the actual annualized returns (XIRR) of your Mutual Fund SIP or irregular investments."
                url="https://calcguide.in/calculators/investment/xirr-calculator/"
            />
            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.INVESTMENT} className="hover:text-blue-600">Investment Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">XIRR Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">XIRR Calculator</h1>
                    <p className="text-slate-600">Calculate the actual annualized returns (XIRR) of your Mutual Fund SIP</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <XIRRCalculatorUI />
                        <CalculatorContent
                            title="XIRR vs. CAGR: Which one should you use?"
                            whatIs="CAGR (Compounded Annual Growth Rate) is used for lumpsum investments. XIRR is used for multiple cashflows like SIP. XIRR takes into account the timing of each installment to give you a single unified rate of return."
                            whoShouldUse="Mutual fund investors who want to see if their SIP is actually beating inflation or fixed deposits. Brokers often show 'Absolute Returns' which can be misleading—always look at XIRR."
                            example="If you started a ₹10,000 SIP 3 years ago and your current value is ₹4.2 Lakhs, your absolute return is 16%. Your XIRR, however, might be around 10.5%. XIRR is the rate at which your money actually grew."
                            commonMistake="Comparing XIRR with FD rates directly. Remember that XIRR is market-linked and can fluctuate, while FD is fixed. Also, XIRR of a short-term SIP (< 1 year) can be very volatile and misleading."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
