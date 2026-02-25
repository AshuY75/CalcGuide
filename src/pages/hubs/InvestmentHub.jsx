import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';


const InvestmentHub = () => {
    const calculators = [
        {
            title: 'SIP Calculator',
            path: ROUTES.CALCULATORS.INVESTMENT.SIP,
            description: 'Calculate returns on your Systematic Investment Plan.'
        },
        {
            title: 'SIP ₹1 Crore Goal',
            path: ROUTES.CALCULATORS.INVESTMENT.SIP_CRORE,
            description: 'Find out how much to invest monthly to reach ₹1 Crore.'
        },
        {
            title: 'XIRR Calculator',
            path: ROUTES.CALCULATORS.INVESTMENT.XIRR,
            description: 'Actual annualized returns of your SIP (True Profitability).'
        },
        {
            title: 'LTCG Tax Calculator',
            path: ROUTES.CALCULATORS.INVESTMENT.LTCG_TAX,
            description: 'Calculate tax on Mutual Funds and Stocks (Budget 2024).'
        },
        {
            title: 'SWP Calculator',
            path: ROUTES.CALCULATORS.INVESTMENT.SWP,
            description: 'Plan your regular monthly income from mutual funds.'
        },
        {
            title: 'FD Calculator',
            path: ROUTES.CALCULATORS.INVESTMENT.FD,
            description: 'Calculate interest on Fixed Deposits.'
        },
        {
            title: 'RD Calculator',
            path: ROUTES.CALCULATORS.INVESTMENT.RD,
            description: 'Recurring Deposit maturity and interest calculator.'
        },
        {
            title: 'Simple Interest',
            path: ROUTES.CALCULATORS.INVESTMENT.SIMPLE_INTEREST,
            description: 'Basic simple interest calculation for loans or savings.'
        },
        {
            title: 'Compound Interest',
            path: ROUTES.CALCULATORS.INVESTMENT.COMPOUND_INTEREST,
            description: 'Calculate compound interest with yearly/half-yearly compounding.'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">


            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Investment Calculators</h1>
            <p className="text-xl text-gray-600 mb-12">
                Plan your financial future with our suite of accurate investment calculators.
                Whether you are saving for a home, retirement, or just wealth creation, we have the right tool for you.
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

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Expert Investment Guides</h2>
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

export default InvestmentHub;
