import React from 'react';
import CalculatorContent from '../components/CalculatorContent';
import CriticalIllnessUI from '../components/calculators/CriticalIllnessUI';
import { ROUTES } from '../routes/paths';

const CriticalIllnessCalculator = () => {
    return (
        <CalculatorContent
            title="Critical Illness Cover Estimator"
            description="Lump sum protection against life-threatening diseases. Calculate how much payout you need for loss of income and specialized treatment costs for Cancer, Stroke, and Heart ailments."
            calculator={<CriticalIllnessUI />}
            category="Insurance"
            breadcrumbs={[
                { label: 'Calculators', path: ROUTES.HUBS.INSURANCE },
                { label: 'Insurance', path: ROUTES.HUBS.INSURANCE },
                { label: 'Critical Illness' }
            ]}
        >
            <div className="mt-12 space-y-12">
                <section>
                    <h2 className="text-3xl font-black text-slate-900 mb-6 italic">Health Insurance vs Critical Illness</h2>
                    <p className="text-slate-600 leading-relaxed font-bold italic">
                        While basic health insurance pays the hospital for your bills (reimbursement), a Critical Illness (CI) policy pays **you** a large lump sum cash amount immediately upon diagnosis of a covered disease. This money is yours to use for anything—treatment, debt, or household expenses.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 bg-rose-50 rounded-3xl border border-rose-100 shadow-sm">
                        <h4 className="font-black text-rose-700 mb-2">Loss of Income</h4>
                        <p className="text-[10px] font-bold text-slate-500">Recovery from major surgeries can take 6-24 months where you may not be able to work. A CI payout replaces your salary.</p>
                    </div>
                    <div className="p-6 bg-rose-50 rounded-3xl border border-rose-100 shadow-sm">
                        <h4 className="font-black text-rose-700 mb-2">Specialized Care</h4>
                        <p className="text-[10px] font-bold text-slate-500">Basic health plans might not cover experimental treatments or home-care nursing. CI funds provide that freedom.</p>
                    </div>
                    <div className="p-6 bg-rose-50 rounded-3xl border border-rose-100 shadow-sm">
                        <h4 className="font-black text-rose-700 mb-2">Lifestyle Adjustments</h4>
                        <p className="text-[10px] font-bold text-slate-500">Major ailments may require changes to your home or car (e.g., wheelchair access). The lump sum covers these capital costs.</p>
                    </div>
                </div>

                <section className="bg-slate-900 p-10 rounded-[3rem] text-white">
                    <h2 className="text-2xl font-black mb-8 italic text-rose-400">Survival Period Rule</h2>
                    <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                        <p className="text-sm font-bold opacity-80 leading-relaxed italic">
                            Most CI policies have a "Survival Period" (usually 15-30 days). This means the policyholder must survive for this period after diagnosis to receive the lump sum payout. Always check this clause before purchasing.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-8 italic italic italic">The Income Multiplier Rule</h2>
                    <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                        <p className="text-slate-500 font-bold leading-relaxed italic">
                            Financial experts recommend a CI cover equal to at least **2 to 3 times your annual income**. For someone earning ₹12 Lakhs/year, a cover of ₹25L to ₹30L is ideal to manage the intense financial stress of a major illness without depleting retirement savings.
                        </p>
                    </div>
                </section>
            </div>
        </CalculatorContent>
    );
};

export default CriticalIllnessCalculator;
