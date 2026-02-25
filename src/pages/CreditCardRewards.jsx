import CalculatorContent from '../components/CalculatorContent'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import CreditCardRewardsUI from '../components/calculators/CreditCardRewardsUI'

export default function CreditCardRewards() {
    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="Credit Card Rewards Value Calculator"
                description="Calculate the real monetary value of your reward points and miles to avoid devaluation."
                url="https://calcguide.in/calculators/finance/credit-card-rewards-value-calculator/"
            />
            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Credit Card Rewards Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Credit Card Rewards Value Calculator</h1>
                    <p className="text-slate-600">Calculate the real monetary value of your reward points and miles in 2025</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <CreditCardRewardsUI />
                        <CalculatorContent
                            title="Are your Credit Card points losing value?"
                            whatIs="Credit card points are a form of 'private currency'. Banks issue these to encourage spending. However, unlike real money, banks can change the value of these points at any time, a process known as 'Devaluation'."
                            whoShouldUse="Anyone who uses premium or super-premium credit cards (like Axis Magnus, HDFC Infinia, or SBI Aurum). It helps you track if your annual fee is still justified by the rewards you earn."
                            example="If you have 1,00,000 points and the bank changes the transfer ratio from 1:1 to 2:1, your points' value drops by 50% overnight. Using this calculator helps you decide when to cash out before the next devaluation hit."
                            commonMistake="Redeeming points for the 'Product Catalog'. Items like mixers or watches in the bank portal are usually priced at a very high point cost, giving you a value of less than Rs 0.20 per point. Transferring to airlines or hotels often gives 3-4x more value."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
