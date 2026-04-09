import React from 'react';
import CalculatorContent from '../components/CalculatorContent';
import HLVUI from '../components/calculators/HLVUI';
import { ROUTES } from '../routes/paths';

const HLVCalculator = () => {
    return (
        <CalculatorContent
            title="Human Life Value (HLV) Calculator"
            description="Determine your financial worth for your family. Calculate the exact corpus needed to replace your future income in the event of an untimely demise."
            calculator={<HLVUI />}
            category="Insurance"
            breadcrumbs={[
                { label: 'Calculators', path: ROUTES.HUBS.INSURANCE },
                { label: 'Insurance', path: ROUTES.HUBS.INSURANCE },
                { label: 'HLV Calculator' }
            ]}
        >
            <div className="mt-12 space-y-12">
                <section>
                    <h2 className="text-3xl font-black text-slate-900 mb-6 italic">What is Your Economic Worth?</h2>
                    <p className="text-slate-600 leading-relaxed font-bold italic">
                        HLV is defined as the present value of the future income you are expected to earn during your remaining working life. It's the most accurate method to decide how much life insurance you actually need.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100 shadow-sm transition-all hover:shadow-xl hover:border-indigo-200">
                        <h3 className="text-xl font-black text-slate-800 mb-4 tracking-tight">Income Replacement Method</h3>
                        <p className="text-slate-500 font-bold text-sm leading-relaxed">
                            This method calculates the amount which, if invested in a safe instrument, would generate the same net income your family receives today, adjusted for inflation over your remaining career.
                        </p>
                    </div>
                    <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100 shadow-sm transition-all hover:shadow-xl hover:border-indigo-200">
                        <h3 className="text-xl font-black text-slate-800 mb-4 tracking-tight">Need-Based Method</h3>
                        <p className="text-slate-500 font-bold text-sm leading-relaxed">
                            A variant where we look at specific future goals (Kids' education, home loan) vs existing assets. Our calculator uses the income replacement model for baseline security.
                        </p>
                    </div>
                </div>

                <section className="bg-slate-900 p-10 rounded-[3rem] text-white">
                    <h2 className="text-2xl font-black mb-8 italic text-indigo-400">Avoid Under-Insurance</h2>
                    <p className="text-sm font-bold opacity-80 leading-relaxed mb-6">
                        Most people buy ₹1 Crore policies as a "round figure". However, for an 30-year-old earning ₹15 Lakhs/year, the actual HLV might be closer to **₹3 Crores**.
                    </p>
                    <div className="flex gap-4">
                        <div className="px-6 py-3 bg-white/10 rounded-2xl border border-white/10 text-xs font-black">
                            15x - 20x Income Rule
                        </div>
                        <div className="px-6 py-3 bg-white/10 rounded-2xl border border-white/10 text-xs font-black">
                            Inflation-Adjusted Math
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-8 italic">The Math of Security</h2>
                    <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                        <p className="text-slate-500 font-bold leading-relaxed italic">
                            The HLV formula considers your age, expected retirement, current income, and personal lifestyle expenses. By stripping away your personal costs, we find the net surplus your family depends on, and then capitalize that surplus over your remaining working years.
                        </p>
                    </div>
                </section>
            </div>
        </CalculatorContent>
    );
};

export default HLVCalculator;
