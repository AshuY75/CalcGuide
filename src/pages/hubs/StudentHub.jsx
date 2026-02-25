import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

const StudentHub = () => {
    const calculators = [
        {
            title: 'JEE/NEET Rank Predictor',
            path: ROUTES.CALCULATORS.STUDENT.RANK_PERCENTILE,
            description: 'Estimate your All India Rank (AIR) based on NTA percentile scores.'
        },
        {
            title: 'SGPA Calculator',
            path: ROUTES.CALCULATORS.STUDENT.SGPA,
            description: 'Calculate your Semester Grade Point Average with university specific scales.'
        },
        {
            title: 'CGPA to Percentage',
            path: ROUTES.CALCULATORS.STUDENT.CGPA_PERCENTAGE,
            description: 'Quickly convert your CGPA to percentage using standard university formulas.'
        },
        {
            title: 'Time and Work Calculator',
            path: ROUTES.CALCULATORS.STUDENT.TIME_WORK,
            description: 'Solve complex time and work problems for competitive exams like JEE and SSC.'
        }
    ];

    const guides = [
        {
            title: 'SGPA vs CGPA Guide',
            path: ROUTES.LEARN.SGPA_VS_CGPA,
            icon: '📊'
        },
        {
            title: '2025 Rank Analysis',
            path: ROUTES.LEARN.JEE_NEET_RANK_ANALYSIS,
            icon: '📈'
        },
        {
            title: 'Time & Work Mastery',
            path: ROUTES.LEARN.TIME_AND_WORK_MASTERY,
            icon: '⏱️'
        },
        {
            title: 'SGPA to % Formula',
            path: ROUTES.LEARN.SGPA_TO_PERCENTAGE,
            icon: '🎓'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Student Resources Hub</h1>
            <p className="text-xl text-gray-600 mb-12">
                Tools and guides designed for Indian students to simplify exam calculations and academic tracking.
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

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Must-Read Student Guides</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {guides.map((guide) => (
                    <Link
                        key={guide.path}
                        to={guide.path}
                        className="flex flex-col items-center p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-400 group transition-all text-center"
                    >
                        <span className="text-3xl mb-3">{guide.icon}</span>
                        <span className="font-semibold text-slate-700 group-hover:text-blue-700 text-sm">{guide.title}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default StudentHub;
