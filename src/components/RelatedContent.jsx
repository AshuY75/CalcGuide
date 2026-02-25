import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/paths';

const RELATED_DATA = {
    TAX: [
        { title: 'Income Tax Calc', path: ROUTES.CALCULATORS.TAX.INCOME_TAX, icon: '💰' },
        { title: 'HRA Exemption', path: ROUTES.CALCULATORS.TAX.HRA, icon: '🏠' },
        { title: 'Gratuity Guide', path: ROUTES.LEARN.GRATUITY_EXPLAINER, icon: '📜' },
        { title: 'Professional Tax', path: ROUTES.CALCULATORS.TAX.PROFESSIONAL_TAX, icon: '🏛️' }
    ],
    STUDENT: [
        { title: 'SGPA Calculator', path: ROUTES.CALCULATORS.STUDENT.SGPA, icon: '🎓' },
        { title: 'CGPA to %', path: ROUTES.CALCULATORS.STUDENT.CGPA_PERCENTAGE, icon: '📊' },
        { title: 'JEE Rank Predictor', path: ROUTES.CALCULATORS.STUDENT.RANK_PERCENTILE, icon: '🎯' },
        { title: 'Exam Eligibility', path: ROUTES.CALCULATORS.UTILITY.EXAM, icon: '📝' }
    ],
    LOAN: [
        { title: 'EMI Calculator', path: ROUTES.CALCULATORS.LOAN.EMI, icon: '💳' },
        { title: 'Home Loan Save', path: ROUTES.LEARN.WHY_EARLY_PREPAYMENT, icon: '🏡' },
        { title: 'Loan Eligibility', path: ROUTES.CALCULATORS.LOAN.ELIGIBILITY, icon: '✅' },
        { title: 'Village Interest', path: ROUTES.CALCULATORS.LOAN.VILLAGE_INTEREST, icon: '🌾' }
    ],
    INVESTMENT: [
        { title: 'SIP Calculator', path: ROUTES.CALCULATORS.INVESTMENT.SIP, icon: '📈' },
        { title: 'FD vs SIP', path: ROUTES.SEO.FD_VS_SIP, icon: '🔄' },
        { title: 'LTCG Tax Calc', path: ROUTES.CALCULATORS.INVESTMENT.LTCG_TAX, icon: '📉' },
        { title: 'PPF Calculator', path: ROUTES.CALCULATORS.INVESTMENT.PPF, icon: '🔐' }
    ]
};

const RelatedContent = ({ category, currentPath }) => {
    const items = RELATED_DATA[category] || [];
    const filteredItems = items.filter(item => item.path !== currentPath).slice(0, 3);

    if (filteredItems.length === 0) return null;

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 my-10">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                Recommended for You
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className="group flex items-center p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-300 hover:bg-blue-50 transition-all active:scale-[0.98]"
                    >
                        <span className="text-2xl mr-4 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <div>
                            <p className="text-sm font-bold text-slate-800 group-hover:text-blue-700 leading-tight">
                                {item.title}
                            </p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-wider group-hover:text-blue-500">
                                View Tool →
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RelatedContent;
