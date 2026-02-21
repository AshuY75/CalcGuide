import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import AmortisationScheduleUI from '../components/calculators/AmortisationScheduleUI'

export default function AmortisationScheduleCalculator() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Calculator",
        "name": "Loan Amortisation Schedule Calculator",
        "description": "Calculate your monthly loan repayment schedule with principal and interest breakdown.",
        "url": "https://calcguide.in/calculators/loan/amortisation-schedule-calculator",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Any"
    }

    const faqData = [
        { question: "How is amortisation calculated?", answer: "Amortisation is calculated using the reducing balance method where interest is charged on the outstanding principal at the end of each period." },
        { question: "Can I use this for any loan?", answer: "Yes, you can use this for home loans, car loans, or personal loans that follow a monthly EMI repayment structure." },
        { question: "What is the benefit of seeing a schedule?", answer: "It helps you see how much interest you're paying in the early years and allows you to plan prepayments more effectively." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <script type="application/ld+json">{JSON.stringify(schema)}</script>

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.LOAN} className="hover:text-blue-600">Loan Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Amortisation Schedule</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Loan Amortisation Schedule Calculator</h1>
                    <p className="text-slate-600">Monthly breakdown of your loan repayment including principal and interest</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <AmortisationScheduleUI />

                        <CalculatorContent
                            title="What is a Loan Amortisation Schedule?"
                            whatIs="A loan amortisation schedule is a complete table of periodic loan payments, showing the amount of principal and the amount of interest that make up each payment until the loan is paid off at the end of its term."
                            whoShouldUse="Borrowers who want to understand how their payments are applied towards their debt and how much interest they are saving by potentially prepaying."
                            example="On a ₹25 Lakh loan at 8.5% for 20 years, your EMI is ₹21,696. In the first month, only ₹4,000 goes towards principal while ₹17,700 goes towards interest. By Year 15, the principal component increases significantly."
                            commonMistake="Not looking at the interest component. Many borrowers only look at the EMI amount, but understanding the interest breakdown helps in making better financial decisions like prepaying early."
                        />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Tools</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.LOAN.EMI} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">💰</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">EMI Calculator</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.LOAN.HOME_LOAN_PREPAYMENT} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🏠</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Prepayment Calc</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
