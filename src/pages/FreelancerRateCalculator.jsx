import CalculatorContent from '../components/CalculatorContent'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import FreelancerRateCalculatorUI from '../components/calculators/FreelancerRateCalculatorUI'

export default function FreelancerRateCalculator() {
    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="Freelancer Hourly Rate Calculator"
                description="Calculate how much you need to charge to cover expenses, taxes, and your desired lifestyle."
                url="https://calcguide.in/calculators/creator/freelancer-rate-calculator/"
            />
            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Freelancer Rate Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Freelancer Hourly Rate Calculator</h1>
                    <p className="text-slate-600">Calculate how much you need to charge to cover expenses, taxes, and your desired lifestyle</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <FreelancerRateCalculatorUI />
                        <CalculatorContent
                            title="Why Freelancers often Undercharge?"
                            whatIs="Freelance pricing is not just about your monthly expenses. It must account for 'overhead'—the time you spend answering emails, filing taxes, or finding new clients. If you only charge for 'sitting at the desk' hours, you are essentially working for free during your admin hours."
                            whoShouldUse="Solopreneurs, designers, developers, and consultants. Especially useful if you are moving from a full-time job to freelance and want to maintain your current standard of living."
                            example="If you want to earn ₹1 Lakh net, you can't just charge ₹1 Lakh. You need to add ~₹10k for software/internet, ~₹15k for business taxes, and ~₹20k for a 'profit buffer' for dry months. Your target revenue should be ₹1.45 Lakhs."
                            commonMistake="Calculating for 365 days. You will get sick, you need vacations, and there will be public holidays. A realistic 'Billable' year in India is around 200-220 days. If you divide your expenses by 365, your hourly rate will be far too low."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
