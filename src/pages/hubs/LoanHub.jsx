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
            title: 'Loan Eligibility',
            path: ROUTES.CALCULATORS.LOAN.ELIGIBILITY,
            description: 'Check how much loan you can borrow based on your income.'
        },
        {
            title: 'Village Interest Calculator',
            path: ROUTES.CALCULATORS.LOAN.VILLAGE_INTEREST,
            description: 'Calculate interest with traditional monthly village rates (Rupees per 100).'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Loan Calculators</h1>
            <p className="text-xl text-gray-600 mb-12">
                Make smart borrowing decisions. Calculate your monthly EMI, check your loan eligibility,
                and understand interest costs before you apply.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
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
        </div>
    );
};

export default LoanHub;
