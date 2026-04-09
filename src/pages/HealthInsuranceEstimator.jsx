import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/paths';
import HealthInsuranceUI from '../components/calculators/HealthInsuranceUI';
import CalculatorContent from '../components/CalculatorContent';
import RelatedContent from '../components/RelatedContent';

const HealthInsuranceEstimator = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header / Breadcrumb */}
            <div className="bg-white border-b border-slate-200 py-6 mb-4 rounded-xl shadow-sm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.HUBS.INSURANCE} className="hover:text-blue-600">Insurance Hub</Link>
                        <span>›</span>
                        <span className="text-slate-900 font-medium">Health Insurance Estimator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Health Insurance Premium Estimator</h1>
                    <p className="text-slate-600">Estimate your annual medical insurance costs for individual or family floater plans</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        {/* Calculator UI */}
                        <HealthInsuranceUI />

                        {/* SEO Content Block */}
                        <CalculatorContent
                            title="Planning your Health Insurance"
                            whatIs="Health Insurance is a contract where the insurer pays for your medical and surgical expenses. In a 'Family Floater' plan, a single sum insured covers all members of the family (usually 2 Adults + 2 Kids)."
                            formula="Premium estimates are based on: [Base Rate for Age Group] x [Floater Multiplier] x [City Tier Loading]. Additional loadings may apply for pre-existing conditions like Diabetes or Hypertension."
                            example="A family of 4 (Oldest 35) in a Metro city usually pays ₹18,000 - ₹22,000 for a ₹10 Lakh cover. However, opting for a ₹5L Base Cover + ₹95L Super Top-up (with ₹5L deductible) can give you ₹1 Crore cover for a similar price."
                            commonMistake="Opting for a high 'Co-payment' or 'Room Rent Capping' to save premium. Room rent caps often lead to massive proportional deductions on your total bill. Always look for 'No Room Rent Cap' and 'Zero Co-pay' plans."
                        />

                        {/* Pro Strategy */}
                        <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8">
                            <h3 className="text-emerald-900 text-xl font-bold mb-4 flex items-center">
                                <span className="mr-3 text-2xl">⚡</span>
                                The Base + Super Top-up Strategy
                            </h3>
                            <div className="space-y-4 text-emerald-800 text-sm leading-relaxed">
                                <p>Instead of buying a single ₹50 Lakh policy (which can be very expensive), Indian financial experts suggest:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Buy a <span className="font-bold">Base Plan of ₹5 Lakhs</span> (to cover small hospitalizations).</li>
                                    <li>Add a <span className="font-bold">Super Top-up of ₹95 Lakhs</span> with a ₹5 Lakh deductible.</li>
                                    <li>The Super Top-up will trigger once your total annual hospital bills cross ₹5 Lakhs.</li>
                                </ul>
                                <p className="font-bold mt-4">This strategy can reduce your total premium by up to 40% while providing massive ₹1 Crore coverage.</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Related Tools */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Helpful Tools</h4>
                            <div className="space-y-4">
                                <Link to={ROUTES.CALCULATORS.INSURANCE.CRITICAL_ILLNESS} className="block p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-white transition-colors">
                                    <p className="text-sm font-bold text-slate-700">Critical Illness Tool</p>
                                    <p className="text-xs text-slate-500 mt-1">Survival benefit math →</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.TAX.HRACalculator} className="block p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-white transition-colors">
                                    <p className="text-sm font-bold text-slate-700">HRA Calculator</p>
                                    <p className="text-xs text-slate-500 mt-1">Check medical tax perks</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Related Section */}
                <RelatedContent category="INSURANCE" currentPath={ROUTES.CALCULATORS.INSURANCE.HEALTH} />
            </div>
        </div>
    );
};

export default HealthInsuranceEstimator;
