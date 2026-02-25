import CalculatorContent from '../components/CalculatorContent'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import ImportDutyCalculatorUI from '../components/calculators/ImportDutyCalculatorUI'

export default function ImportDutyCalculator() {
    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="Indian Import Duty Calculator 2025"
                description="Estimate customs duty, SWS, and IGST for items imported to India with latest rates."
                url="https://calcguide.in/calculators/utility/import-duty-calculator/"
            />
            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Import Duty Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Indian Import Duty Calculator 2025</h1>
                    <p className="text-slate-600">Estimate customs duty, SWS, and IGST for items imported to India</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <ImportDutyCalculatorUI />
                        <CalculatorContent
                            title="How Indian Import Duties are Calculated?"
                            whatIs="Importing goods to India involves multiple layers of taxes. It starts with the Basic Customs Duty (BCD), followed by a Social Welfare Surcharge (SWS), and finally Interactive GST (IGST). The taxes are cumulative, meaning you pay GST on the price of the item plus the customs duty already added."
                            whoShouldUse="Anyone ordering from websites like Amazon Global, AliExpress, or B&H. It is also essential for Indian creators importing specialized equipment like cameras or microphones."
                            example="If you buy a phone for ₹50,000, and the BCD is 10%, you pay ₹5,000 duty. A 10% SWS is then added to that ₹5,000 (₹500). Finally, an 18% GST is applied to the total of ₹55,500. Your final price is ₹65,490."
                            commonMistake="Ignoring shipping in the tax math. Indian Customs calculates duty on the CIF value (Cost + Insurance + Freight). If you pay ₹10,000 for shipping, that ₹10,000 is also taxed as if it were part of the item price."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
