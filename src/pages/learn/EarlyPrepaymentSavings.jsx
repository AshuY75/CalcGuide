import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';


export const metadata = {
    title: "Why Early Prepayment Saves 3× Interest?",
    description: "Discover why prepaying your home loan in the first 5 years is much more effective than prepaying later.",
    category: "LOANS",
    slug: ROUTES.LEARN.WHY_EARLY_PREPAYMENT,
    date: "2025-02-21",
    icon: "⚡",
    colorClass: "bg-yellow-100",
    isNew: true
};

export default function EarlyPrepaymentSavings() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="Why Early Prepayment Saves 3× Interest?"
                description="Discover why prepaying your home loan in the first 5 years is much more effective than prepaying later."
                type="Article"
                url="https://calcguide.in/learn/why-early-prepayment-saves-interest/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Early Prepayment</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Why Early Prepayment Saves 3× Interest?
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        The secret of loan repayment isn't just "how much" you prepay, but "when" you prepay.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The Mathematics of Front-Loaded Interest</h2>
                    <p>
                        Most Indian banks use the <strong>Reducing Balance Method</strong>. Because the outstanding principal is highest in the initial years, the interest component of your EMI is also highest at the beginning.
                    </p>

                    <div className="bg-blue-50 p-6 rounded-xl my-8 border-l-4 border-blue-600">
                        <h3 className="text-blue-900 mt-0">The 1:3 Power Principle</h3>
                        <p className="mb-0">
                            Prepaying <strong>₹1 Lakh</strong> in the 2nd year of a 20-year loan typically saves you nearly <strong>₹3 Lakhs</strong> in total interest. Prepaying the same amount in the 15th year saves you only about <strong>₹40,000</strong>.
                        </p>
                    </div>

                    <h3>Why Years 1-5 Are Golden</h3>
                    <p>
                        In a standard 20-year home loan at 9% interest, nearly <strong>80% of your EMI</strong> goes towards interest in the first month. By the time you reach Year 10, this drops to around 50%.
                    </p>
                    <p>
                        Every rupee you prepay in the early years directly hits the principal, "deleting" years of future interest that would have compounded on that amount.
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-yellow-400 font-bold mb-4">Actionable Strategy: The 1+1 Rule</h4>
                        <p>If you can't make large prepayments, try the 1+1 rule:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2 text-slate-300">
                            <li>Pay <strong>1 Extra EMI</strong> every year.</li>
                            <li>Increase your EMI by <strong>10% every year</strong> as your salary grows.</li>
                        </ul>
                        <p className="mt-4 font-bold text-green-400">Result: A 20-year loan can be closed in just 10-12 years!</p>
                    </div>

                    <h3>Compare Your Savings</h3>
                    <p>
                        Don't take our word for it. Use our dedicated tools to see the difference yourself:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                        <Link to={ROUTES.CALCULATORS.LOAN.HOME_LOAN_PREPAYMENT} className="p-4 border border-slate-200 rounded-xl hover:border-blue-500 transition-colors bg-slate-50">
                            <span className="block font-bold">🏠 Prepayment Calculator</span>
                            <span className="text-sm text-slate-500">Calculate interest saved by prepaying</span>
                        </Link>
                        <Link to={ROUTES.CALCULATORS.LOAN.AMORTISATION_SCHEDULE} className="p-4 border border-slate-200 rounded-xl hover:border-blue-500 transition-colors bg-slate-50">
                            <span className="block font-bold">📅 Amortisation Schedule</span>
                            <span className="text-sm text-slate-500">See monthly principal breakdown</span>
                        </Link>
                    </div>
                </article>

                <div className="mt-12 bg-blue-600 p-8 rounded-2xl text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">Ready to save lakhs?</h3>
                    <p className="mb-6 opacity-90">Start tracking your loan balance and plan your first prepayment today.</p>
                    <Link to={ROUTES.CALCULATORS.LOAN.EMI} className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-slate-100 transition-colors">
                        Check My EMI Breakdown
                    </Link>
                </div>
            </div>
        </div>
    );
}
