import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "Home Loan Prepayment – The 'Early Years' Secret",
    description: "Learn why prepaying your home loan in the first 5 years is much more effective than prepaying in the later years. Understanding the 'Front-loaded Interest' math.",
    category: "LOAN",
    slug: ROUTES.LEARN.EARLY_PREPAYMENT,
    date: "2025-02-22",
    icon: "🏠",
    colorClass: "bg-blue-100",
    isNew: true
};

export default function EarlyPrepaymentSavings() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="Home Loan Prepayment – The 'Early Years' Secret"
                description="Learn why prepaying your home loan in the first 5 years is much more effective than prepaying in the later years. Understanding the 'Front-loaded Interest' math."
                type="Article"
                url="https://calcguide.in/learn/early-home-loan-prepayment-savings-math/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Prepayment Math</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        The Prepayment Secret:<br /> Why 'Early' Beats 'Late'
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        A ₹1 Lakh prepayment in Year 2 saves you 3x more interest than the same ₹1 Lakh in Year 15. Here is the math banks won't tell you.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The 'Front-Loaded' Interest Trap</h2>
                    <p>
                        In a standard home loan EMI, the interest is not spread equally. In the early years, almost 70-80% of your EMI goes toward <strong>Interest</strong>, and very little goes toward the <strong>Principal</strong>. This means the bank collects most of its profit in the first few years of your 20-year loan.
                    </p>
                    <p>Prepaying early is like a surgical strike against the high interest component. It significantly reduces the principal, which in turn reduces the interest for all the remaining 18-19 years.</p>

                    <div className="bg-blue-50 p-8 rounded-2xl my-8 border-l-4 border-blue-600 shadow-inner">
                        <h4 className="text-blue-900 mt-0 font-bold">The Real Impact:</h4>
                        <p className="text-sm text-slate-700 leading-relaxed mb-4">
                            Consider a ₹50 Lakh loan at 9% for 20 years.
                        </p>
                        <ul className="text-sm space-y-2 p-0 list-none">
                            <li>💰 <strong>Prepay ₹2 Lakhs in Year 2:</strong> You save roughly ₹12 Lakhs in total interest.</li>
                            <li>💰 <strong>Prepay ₹2 Lakhs in Year 15:</strong> You save only ₹1.2 Lakhs in total interest.</li>
                        </ul>
                        <p className="text-xs text-slate-500 mt-4 italic">Same amount. 10x Difference in result. That is the power of time.</p>
                    </div>

                    <h3>Three Smart Ways to Prepay</h3>
                    <ol>
                        <li><strong>The 1-EMI Extra Rule:</strong> Pay just one extra EMI every year. This alone can reduce a 20-year loan to roughly 12 years.</li>
                        <li><strong>The 10% Annual Increment:</strong> Increase your EMI by 10% every time you get a salary hike. This is even more powerful than lump-sum prepayments.</li>
                        <li><strong>Windfall Strategy:</strong> Use your annual bonus or tax refund. Don't let it sit in a savings account at 3% when you are paying 9% interest on your house.</li>
                    </ol>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-blue-400 font-bold mb-2 italic">Pro Tip: Tenure vs EMI</h4>
                        <p className="mb-0 text-slate-300">"Choose Tenure." When you prepay, the bank will ask if you want to reduce the EMI or reduce the Tenure. **Always choose to reduce the Tenure**. Reducing the tenure keeps your compounding machine working in your favor and saves significantly more interest in the long run.</p>
                    </div>

                    <h3>Should you always prepay?</h3>
                    <p>Not always. If you can earn 12% in a Mutual Fund while your loan is at 8.5%, you might be better off investing. Use our <strong>Prepayment vs SIP</strong> comparison tool to find your specific profit zone.</p>

                    <h3>Run Your Numbers</h3>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.LOAN.PREPAYMENT} className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">
                            🏠 Prepayment Savings Tracker →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
