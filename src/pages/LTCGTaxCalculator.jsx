import CalculatorContent from '../components/CalculatorContent'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import LTCGTaxCalculatorUI from '../components/calculators/LTCGTaxCalculatorUI'

export default function LTCGTaxCalculator() {
    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="LTCG Tax Calculator (Budget 2024)"
                description="Calculate tax on your stocks and mutual fund gains based on the latest ₹1.25 Lakh exemption rules."
                url="https://calcguide.in/calculators/investment/ltcg-tax-calculator/"
            />
            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.INVESTMENT} className="hover:text-blue-600">Investment Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">LTCG Tax Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">LTCG Tax Calculator (Budget 2024)</h1>
                    <p className="text-slate-600">Calculate tax on your stocks and mutual fund gains based on latest rules</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <LTCGTaxCalculatorUI />
                        <CalculatorContent
                            title="How LTCG Tax Works on Equity"
                            whatIs="LTCG (Long Term Capital Gains) tax is levied on the profit you make from selling stocks or equity mutual funds held for more than one year. The first ₹1.25 Lakh of gain in a financial year is completely tax-free."
                            whoShouldUse="Every stock market and mutual fund investor in India. This tool is essential for planning 'Tax Harvesting'—the process of selling and reinvesting to utilize your annual tax-free limit."
                            example="If you sell stocks with a profit of ₹2 Lakhs in 2025, your taxable gain is ₹2,00,000 - ₹1,25,000 = ₹75,000. At the 12.5% rate, you pay ₹9,375 as tax."
                            commonMistake="Not booking profits. Many investors keep holding stocks with huge unrealized gains. By 'harvesting' ₹1.25L gain every year, you can save significant tax in the long run."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
