import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';


const LoanHub = () => {
    const calculators = [
        {
            title: 'EMI Calculator',
            path: ROUTES.CALCULATORS.LOAN.EMI,
            description: 'Calculate your Home, Car, or Personal Loan EMI.'
        },
        {
            title: 'Home Loan Prepayment Calculator',
            path: ROUTES.CALCULATORS.LOAN.HOME_LOAN_PREPAYMENT,
            description: 'See how much interest you can save by making extra payments towards your home loan.'
        },
        {
            title: 'Loan Eligibility',
            path: ROUTES.CALCULATORS.LOAN.ELIGIBILITY,
            description: 'Check how much loan you can borrow based on your income.'
        },
        {
            title: 'Amortisation Schedule',
            path: ROUTES.CALCULATORS.LOAN.AMORTISATION_SCHEDULE,
            description: 'Monthly breakdown of your loan repayment including principal and interest.'
        },
        {
            title: 'Village Interest Calculator',
            path: ROUTES.CALCULATORS.LOAN.VILLAGE_INTEREST,
            description: 'Calculate interest with traditional monthly village rates (Rupees per 100).'
        }
    ];

    const guides = [
        {
            title: '11% Rule: Prepayment vs SIP',
            path: ROUTES.LEARN.PREPAYMENT_VS_SIP,
            icon: '🏠'
        },
        {
            title: 'Why Early Prepayment Saves 3x',
            path: ROUTES.LEARN.WHY_EARLY_PREPAYMENT,
            icon: '⚡'
        },
        {
            title: 'MCLR vs EBLR Switch',
            path: ROUTES.LEARN.MCLR_VS_EBLR,
            icon: '🔄'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">


            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Loan Calculators</h1>
            <p className="text-xl text-gray-600 mb-12">
                Make smart borrowing decisions. Calculate your monthly EMI, check your loan eligibility,
                and understand interest costs before you apply.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
                {calculators.map((calc) => (
                    <Link
                        key={calc.path}
                        to={calc.path}
                        className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all"
                    >
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">{calc.title}</h2>
                        <p className="text-gray-600">{calc.description}</p>
                    </Link>
                ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Expert Loan Guides</h2>
            <div className="grid sm:grid-cols-3 gap-4">
                {guides.map((guide) => (
                    <Link
                        key={guide.path}
                        to={guide.path}
                        className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-400 group transition-all"
                    >
                        <span className="text-2xl mr-3">{guide.icon}</span>
                        <span className="font-semibold text-slate-700 group-hover:text-blue-700">{guide.title}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LoanHub;
