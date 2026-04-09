import React from 'react';
import CalculatorContent from '../components/CalculatorContent';
import StampDutyUI from '../components/calculators/StampDutyUI';
import { ROUTES } from '../routes/paths';

const StampDutyCalculator = () => {
    return (
        <CalculatorContent
            title="Stamp Duty & Registration Calculator 2024-25"
            description="Calculate stamp duty and registration fees for property purchase across major Indian states. Estimate costs based on gender, region, and agreement value."
            calculator={<StampDutyUI />}
            category="Real Estate"
            breadcrumbs={[
                { label: 'Calculators', path: ROUTES.HUBS.REAL_ESTATE },
                { label: 'Stamp Duty' }
            ]}
        >
            <div className="mt-12 space-y-12">
                <section>
                    <h2 className="text-3xl font-black text-slate-900 mb-6 italic">Hidden Costs of Property Purchase</h2>
                    <p className="text-slate-600 leading-relaxed font-bold italic">
                        When buying a house in India, the price on the brochure isn't what you pay. Stamp duty and registration charges can add an extra 5% to 10% to your total cost, which often cannot be covered by home loans.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-cyan-100">
                        <h3 className="text-xl font-black text-slate-800 mb-4 tracking-tight">What is Stamp Duty?</h3>
                        <p className="text-slate-500 font-bold text-sm leading-relaxed">
                            It is a legal tax paid to the state government to validate the property transaction and record the transfer of ownership in the registrar&apos;s records.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-cyan-100">
                        <h3 className="text-xl font-black text-slate-800 mb-4 tracking-tight">Registration Fees</h3>
                        <p className="text-slate-500 font-bold text-sm leading-relaxed">
                            This is the fee paid to the sub-registrar for the administrative process of documenting the property papers. In many states, this is capped at a fixed amount (e.g., ₹30,000 in MH).
                        </p>
                    </div>
                </div>

                <section className="bg-slate-900 p-10 rounded-[3rem] text-white">
                    <h2 className="text-2xl font-black mb-8 italic text-cyan-400">Tax Benefits for Women</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div className="lg:col-span-2 space-y-4">
                            <p className="text-sm font-bold opacity-80 leading-relaxed">
                                To encourage property ownership among women, many Indian states offer a rebate of <span className="text-cyan-400">1% to 2%</span> on stamp duty if the property is registered solely in a woman's name or as a primary co-owner.
                            </p>
                            <p className="text-sm font-bold opacity-80 leading-relaxed">
                                States like Delhi, Haryana, and Punjab have significant rebates that can save lakhs of rupees on high-value transactions.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-40 h-40 border-4 border-cyan-500/20 rounded-full flex items-center justify-center p-4">
                                <div className="text-center">
                                    <div className="text-3xl font-black text-cyan-400 italic">2%</div>
                                    <div className="text-[8px] font-black uppercase tracking-widest opacity-60">Avg. Rebate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-8 italic">Ready Reckoner / Circle Rates</h2>
                    <div className="p-8 bg-cyan-50 rounded-3xl border border-cyan-100">
                        <p className="text-slate-500 font-bold leading-relaxed italic">
                            Stamp duty is calculated on the higher of two values: the transaction value mentioned in the agreement or the "Circle Rate" (Ready Reckoner Rate) fixed by the state government for that area. If you buy a property below circle rates, you may still have to pay tax as per the government valuation.
                        </p>
                    </div>
                </section>
            </div>
        </CalculatorContent>
    );
};

export default StampDutyCalculator;
