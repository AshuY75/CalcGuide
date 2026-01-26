
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/paths'
import EMICalculatorUI from '../../components/calculators/EMICalculatorUI'
import SEOSection from '../../components/SEOSection'
import { SchemaGenerator } from '../../components/SchemaGenerator'

export default function EMILanding() {
    const faqData = [
        {
            question: "How to reduce my Home Loan EMI?",
            answer: "You can reduce EMI by: 1) Paying a higher down payment, 2) Opting for a longer tenure (increases total interest), or 3) Negotiating a lower interest rate based on your credit score."
        },
        {
            question: "Is 8.5% a good home loan rate in India?",
            answer: "As of 2024-25, home loan rates typically range from 8.35% to 9.5%. A rate of 8.5% is considered excellent for borrowers with a CIBIL score > 750."
        },
        {
            question: "What is Maximum EMI Affordability?",
            answer: "Banks typically lend an amount where your EMI does not exceed 40-50% of your Net Monthly Income. Our calculator checks this automatically."
        }
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "EMI Calculator for Home Loan India",
        "url": "https://calcguide.in/emi-calculator-home-loan-india",
        "description": "Calculate Home Loan EMI with updated interest rates for SBI, HDFC, ICICI."
    }

    return (
        <div className="min-h-screen bg-slate-50">
            
            <SchemaGenerator
                type="WebApplication"
                name="EMI Calculator for Home Loan India"
                description="Calculate Home Loan EMI with updated interest rates for SBI, HDFC, ICICI."
                data={schemaData}
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Home Loan EMI Calculator</h1>
                    <p className="text-slate-600">Plan your dream home with our accurate EMI tool</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <EMICalculatorUI defaultInterestRate="8.5" defaultTenure="20" showSEOContent={false} />

                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <SEOSection title="Home Loan EMI Guide" faq={faqData}>
                                <h3>How Home Loan EMI Works</h3>
                                <p>
                                    Home Loan Equated Monthly Installments (EMIs) consist of a Principal component and an Interest component. In the early years of your loan, a huge portion (often &gt;70%) of your EMI goes towards paying interest only.
                                    As the tenure progresses, the principal contribution increases.
                                </p>
                                <h3>Tax Benefits on Home Loans</h3>
                                <p>
                                    Under the old tax regime in India, you can claim:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-slate-700 mt-2">
                                    <li><strong>Section 80C:</strong> Up to ₹1.5 Lakh on Principal repayment.</li>
                                    <li><strong>Section 24(b):</strong> Up to ₹2 Lakh on Interest payment.</li>
                                </ul>
                                <p className="mt-2 text-sm text-slate-500">Note: New Tax Regime usually does not offer these deductions.</p>
                            </SEOSection>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Tools</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.LOAN.ELIGIBILITY} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">✅</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Check Loan Eligibility</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">📈</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">SIP Calculator</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.LOAN.VILLAGE_INTEREST} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🌾</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Village Interest</p>
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
