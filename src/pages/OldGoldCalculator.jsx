import React from 'react';
import CalculatorContent from '../components/CalculatorContent';
import OldGoldUI from '../components/calculators/OldGoldUI';
import { ROUTES } from '../routes/paths';

const OldGoldCalculator = () => {
    return (
        <CalculatorContent
            title="Old Gold Exchange Value Calculator"
            description="Calculate the resale or exchange value of your old gold jewellery. Estimate melting loss deductions and get the net cash value based on current 24K market rates."
            calculator={<OldGoldUI />}
            category="Gold"
            breadcrumbs={[
                { label: 'Calculators', path: ROUTES.HUBS.INVESTMENT },
                { label: 'Gold', path: ROUTES.CALCULATORS.GOLD.JEWELLERY },
                { label: 'Old Gold Exchange' }
            ]}
        >
            <div className="mt-12 space-y-12">
                <section>
                    <h2 className="text-3xl font-black text-slate-900 mb-6 italic">Why Resale Value is Lower than Purchase Price?</h2>
                    <p className="text-slate-600 leading-relaxed font-bold italic">
                        The price you get when selling gold is always lower than the price you paid. This is due to three main factors:
                    </p>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-black text-amber-700 mb-2">Making Charges</h4>
                            <p className="text-xs font-bold text-slate-500">The 10-20% you paid for labour/design is lost during resale as jewellery is bought back only for its gold content.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-black text-amber-700 mb-2">GST Loss</h4>
                            <p className="text-xs font-bold text-slate-500">The 3% GST paid to the government is a consumption tax and cannot be recovered from the jeweller.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-black text-amber-700 mb-2">Melting Loss</h4>
                            <p className="text-xs font-bold text-slate-500">Old gold is melted to purify it. Minor weight loss (0.5-1.5%) occurs during this process, which jewellers deduct.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-amber-600 p-10 rounded-[3rem] text-white">
                    <h2 className="text-2xl font-black mb-8 italic">Tips for Selling Old Gold</h2>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10">
                            <span className="text-2xl">⚡</span>
                            <span className="font-bold text-sm">Sell to the original jeweller for the best price, usually 1-2% higher than others.</span>
                        </li>
                        <li className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10">
                            <span className="text-2xl">🧊</span>
                            <span className="font-bold text-sm">Ask for Carat Meter testing before melting. Do not allow melting without a pre-test.</span>
                        </li>
                        <li className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10">
                            <span className="text-2xl">📑</span>
                            <span className="font-bold text-sm">Always carry the original purchase invoice to avoid 'undocumented item' deductions.</span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-8">Exchange vs Cash</h2>
                    <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                        <p className="text-slate-500 font-bold leading-relaxed italic">
                            Most Indian showrooms (Tanishq, etc.) offer 100% value for their own hallmarked gold if you are "exchanging" it for new jewellery. However, if you want "cash", they may deduct 2-5% from the market rate. Always clarify the policy before proceeding.
                        </p>
                    </div>
                </section>
            </div>
        </CalculatorContent>
    );
};

export default OldGoldCalculator;
