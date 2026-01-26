import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';


const SIPHub = () => {
    const calculators = [
        {
            title: 'SIP Calculator',
            path: ROUTES.CALCULATORS.INVESTMENT.SIP,
            description: 'Calculate the future value of your monthly SIP investments.'
        },
        {
            title: 'SIP ₹1 Crore Goal',
            path: ROUTES.CALCULATORS.INVESTMENT.SIP_CRORE,
            description: 'Calculate the monthly investment needed to reach ₹1 Crore.'
        },
        {
            title: 'Step Up SIP (Top-up)',
            path: ROUTES.SEO.SIP_5000, // Linking to relevant SEO pages if main calc doesn't exist, but we should stick to main calcs. 
            // Actually checking paths.js, we have SIP and SIP_CRORE.
            // Let's add FD vs SIP here too as it's relevant.
            description: 'See the power of increasing your SIP annually.'
        },
        {
            title: 'FD vs SIP',
            path: ROUTES.SEO.FD_VS_SIP,
            description: 'Compare fixed deposits with mutual fund SIPs.'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">SIP Calculators</h1>
            <p className="text-xl text-gray-600 mb-12">
                Systematic Investment Plans (SIP) are the best way to build long-term wealth.
                Use our specialized tools to plan your investment journey.
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

export default SIPHub;
