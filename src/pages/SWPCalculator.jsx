import CalculatorContent from '../components/CalculatorContent'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import SWPCalculatorUI from '../components/calculators/SWPCalculatorUI'

export default function SWPCalculator() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.INVESTMENT} className="hover:text-blue-600">Investment Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">SWP Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">SWP Calculator</h1>
                    <p className="text-slate-600">Calculate monthly withdrawals and remaining balance in Mutual Funds</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <SWPCalculatorUI />
                        <CalculatorContent
                            title="What is a Systematic Withdrawal Plan (SWP)?"
                            whatIs="SWP is a facility provided by mutual funds that allows you to withdraw a fixed amount of money from your existing investment at regular intervals. It is considered one of the best ways to generate a regular monthly income, especially for retirees."
                            whoShouldUse="Anyone looking for a regular monthly income—retirees, freelancers with a corpus, or those who have reached their financial goals and want to enjoy the fruits of their investment while keeping the principal working."
                            example="If you have ₹10 Lakhs and you withdraw ₹10,000 every month (SWP), and the fund gives a 10% return, your principal will actually grow slightly while providing you monthly income! This is the magic of SWP over FDs."
                            commonMistake="Withdrawing more than the return rate. If your fund returns 8% and you withdraw 12%, your principal will eventually vanish. Always aim for a withdrawal rate lower than the expected return for longevity."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
