import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

const TaxHub = () => {
    const calculators = [
        {
            title: 'Income Tax Calculator',
            path: ROUTES.CALCULATORS.TAX.INCOME_TAX,
            description: 'Compare Old vs New Tax Regimes for FY 2025-26 (AY 2026-27).'
        },
        {
            title: 'HRA Calculator',
            path: ROUTES.CALCULATORS.TAX.HRA,
            description: 'Calculate your House Rent Allowance exemption to save income tax.'
        },
        {
            title: 'Gratuity Calculator',
            path: ROUTES.CALCULATORS.TAX.GRATUITY,
            description: 'Estimate your gratuity based on years of service and salary.'
        },
        {
            title: 'EPF & VPF Calculator',
            path: ROUTES.CALCULATORS.TAX.EPF,
            description: 'Project your retirement corpus with Employee Provident Fund contributions.'
        },
        {
            title: 'LTCG Tax Calculator',
            path: ROUTES.CALCULATORS.INVESTMENT.LTCG_TAX,
            description: 'Calculate tax on Mutual Funds and Stocks (Budget 2024).'
        },
        {
            title: 'Professional Tax Calculator',
            path: ROUTES.CALCULATORS.TAX.PROFESSIONAL_TAX,
            description: 'Determine your monthly PT deduction based on state-wise slabs.'
        }
    ];

    const guides = [
        {
            title: 'Old vs New Tax 2025',
            path: ROUTES.LEARN.OLD_VS_NEW_TAX,
            icon: '🏢'
        },
        {
            title: 'HRA Exemption Math',
            path: ROUTES.LEARN.HRA_EXEMPTION,
            icon: '🏠'
        },
        {
            title: 'Gratuity Rules 2025',
            path: ROUTES.LEARN.GRATUITY_EXPLAINER,
            icon: '📜'
        },
        {
            title: 'EPF Power Guide',
            path: ROUTES.LEARN.EPF_EXPLAINER,
            icon: '🏦'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tax & Compliance Hub</h1>
            <p className="text-xl text-gray-600 mb-12">
                Stay compliant and optimize your taxes with our suite of Indian tax calculators.
                Updated for the latest 2024-25 and 2025-26 Budget rules.
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

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Expert Tax Guides</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {guides.map((guide) => (
                    <Link
                        key={guide.path}
                        to={guide.path}
                        className="flex flex-col items-center p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-orange-400 group transition-all text-center"
                    >
                        <span className="text-3xl mb-3">{guide.icon}</span>
                        <span className="font-semibold text-slate-700 group-hover:text-orange-700 text-sm">{guide.title}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TaxHub;
