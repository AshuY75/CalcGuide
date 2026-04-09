import React from 'react';
import CalculatorContent from '../components/CalculatorContent';
import TermInsuranceUI from '../components/calculators/TermInsuranceUI';
import { ROUTES } from '../routes/paths';

const TermInsuranceCalculator = () => {
    return (
        <CalculatorContent
            title="Term Life Insurance Cover Calculator"
            description="Calculate the ideal life insurance cover (Sum Assured) based on your income, age, and existing debts. Get premium estimates for high-value protection."
            calculator={<TermInsuranceUI />}
            category="Insurance"
            breadcrumbs={[
                { label: 'Calculators', path: ROUTES.HUBS.INSURANCE },
                { label: 'Insurance', path: ROUTES.HUBS.INSURANCE },
                { label: 'Term Insurance' }
            ]}
        >
            <div className="mt-12 space-y-12">
                <section>
                    <h2 className="text-3xl font-black text-slate-900 mb-6 italic">Why Term Insurance is 'Pure' Protection</h2>
                    <p className="text-slate-600 leading-relaxed font-bold italic">
                        Unlike traditional endowment plans, Term Insurance offers no 'money back' if you survive. However, it provides the <span className="text-blue-600 font-black">highest possible cover</span> at the lowest possible premium. It is the only way to replace your income for your family effectively.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm transition-all hover:shadow-xl hover:border-blue-200">
                        <h3 className="text-xl font-black text-slate-800 mb-4 tracking-tight">The 20x Income Rule</h3>
                        <p className="text-slate-500 font-bold text-sm leading-relaxed">
                            A common benchmark in the Indian insurance market is to have a life cover that is at least 20 times your annual take-home salary. This ensures the payout yields enough interest to replace your salary.
                        </p>
                    </div>
                    <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm transition-all hover:shadow-xl hover:border-blue-200">
                        <h3 className="text-xl font-black text-slate-800 mb-4 tracking-tight">Debt Protection</h3>
                        <p className="text-slate-500 font-bold text-sm leading-relaxed">
                            Your cover amount MUST include your outstanding Home Loan and Car Loan liabilities. If you pass away, your family shouldn't be burdened by bank EMIs.
                        </p>
                    </div>
                </div>

                <section className="bg-slate-900 p-10 rounded-[3rem] text-white overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform group-hover:rotate-45">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-black mb-6 italic text-blue-400">Critical Riders to Consider</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                 <h4 className="font-black text-blue-300 mb-1">Critical Illness Rider</h4>
                                 <p className="text-[10px] font-bold opacity-60">Lump sum payout on diagnosis of major diseases like Cancer or Stroke.</p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                 <h4 className="font-black text-blue-300 mb-1">Accidental Disability</h4>
                                 <p className="text-[10px] font-bold opacity-60">Provides income/payout if an accident leads to permanent disability.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-8 italic">Till What Age Should You Buy?</h2>
                    <div className="p-8 bg-white rounded-3xl border border-slate-200">
                        <p className="text-slate-500 font-bold leading-relaxed italic">
                            Ideally, only till your planned retirement age (usually 60). Once you retire, you have no income to replace, and your liabilities are usually zero. Buying a policy till age 85 or 100 significantly increases premium costs without adding proportional value to your dependents.
                        </p>
                    </div>
                </section>
            </div>
        </CalculatorContent>
    );
};

export default TermInsuranceCalculator;
