import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

const InsuranceHub = () => {
    const calculators = [
        {
            title: 'Human Life Value (HLV) Calculator',
            path: ROUTES.CALCULATORS.INSURANCE.HLV,
            description: 'Determine your economic value and how much term insurance cover you actually need.'
        },
        {
            title: 'Term Insurance Calculator',
            path: ROUTES.CALCULATORS.INSURANCE.TERM,
            description: 'Calculate ideal life cover based on your income, liabilities, and future goals.'
        },
        {
            title: 'Health Insurance Estimator',
            path: ROUTES.CALCULATORS.INSURANCE.HEALTH,
            description: 'Estimate family floater premiums and compare top-up benefits for medical coverage.'
        },
        {
            title: 'Car Insurance Premium Calculator',
            path: ROUTES.CALCULATORS.INSURANCE.CAR,
            description: 'Check IDV impact and estimate premiums for comprehensive vs third-party car insurance.'
        },
        {
            title: 'Critical Illness Cover Calculator',
            path: ROUTES.CALCULATORS.INSURANCE.CRITICAL_ILLNESS,
            description: 'Assess how much specialized cover you need for life-threatening diseases.'
        }
    ];

    const guides = [
        {
            title: 'Why Term Insurance is Essential',
            path: ROUTES.LEARN.HOME, // Placeholder for now
            icon: '🛡️'
        },
        {
            title: 'Health Insurance Survival Guide',
            path: ROUTES.LEARN.HOME, // Placeholder for now
            icon: '🏥'
        },
        {
            title: 'Hiding in the Fine Print: T&C',
            path: ROUTES.LEARN.HIDDEN_FEES,
            icon: '🔍'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <nav className="text-sm text-slate-500 mb-6 flex items-center gap-2">
                <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                <span>›</span>
                <span className="text-slate-900 font-medium">Insurance Hub</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Insurance Planning Tools</h1>
            <p className="text-xl text-gray-600 mb-12">
                Insurance is for protection, not investment. Don't be under-insured. Use our expert calculators to find the right level of coverage for your family's future.
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

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Expert Insurance Guides</h2>
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

export default InsuranceHub;
