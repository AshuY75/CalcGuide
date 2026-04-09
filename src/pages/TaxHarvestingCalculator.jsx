import React from 'react';
import CalculatorContent from '../components/CalculatorContent';
import LTCGHarvestingUI from '../components/calculators/LTCGHarvestingUI';
import { ROUTES } from '../routes/paths';

const TaxHarvestingCalculator = () => {
    return (
        <CalculatorContent
            title="LTCG Tax Harvesting Optimization Tool"
            description="Optimize your equity tax liability by utilizing the ₹1.25 Lakh annual LTCG exemption. Calculate how much to sell and reinvest to reset your cost of acquisition."
            calculator={<LTCGHarvestingUI />}
            category="Tax"
            breadcrumbs={[
                { label: 'Calculators', path: ROUTES.HUBS.TAX },
                { label: 'Tax', path: ROUTES.HUBS.TAX },
                { label: 'Tax Harvesting' }
            ]}
        >
            <div className="mt-12 space-y-12">
                <section>
                    <h2 className="text-3xl font-black text-slate-900 mb-6 italic">What is LTCG Tax Harvesting?</h2>
                    <p className="text-slate-600 leading-relaxed font-bold italic">
                        In India, Long-Term Capital Gains (LTCG) on equity up to ₹1.25 Lakh per financial year are tax-free under the new Budget 2024 rules. Tax harvesting is the strategy of selling your profitable investments just enough to realize this ₹1.25L gain and immediately buying them back.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100 shadow-sm transition-all hover:shadow-xl hover:border-emerald-200">
                        <h3 className="text-xl font-black text-slate-800 mb-4 tracking-tight">The 'Reset' Strategy</h3>
                        <p className="text-slate-500 font-bold text-sm leading-relaxed">
                            When you sell and buy back, your "Cost of Acquisition" increases. For example, if you buy at ₹100 and it becomes ₹200, harvesting resets your purchase price to ₹200, ensuring you don't pay tax on that ₹100 gain in the future.
                        </p>
                    </div>
                    <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100 shadow-sm transition-all hover:shadow-xl hover:border-emerald-200">
                        <h3 className="text-xl font-black text-slate-800 mb-4 tracking-tight">Post-Budget 2024 Rates</h3>
                        <p className="text-slate-500 font-bold text-sm leading-relaxed">
                            The tax rate on LTCG above the exemption limit has been increased from 10% to <span className="text-emerald-600">12.5%</span>. This makes annual harvesting even more important to maximize compounded returns.
                        </p>
                    </div>
                </div>

                <section className="bg-slate-900 p-10 rounded-[3rem] text-white">
                    <h2 className="text-2xl font-black mb-6 italic text-emerald-400">Step-by-Step Harvesting</h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl">
                             <span className="text-2xl">📊</span>
                             <p className="text-sm font-bold opacity-80 leading-relaxed">Identify long-term equity holdings (held for &gt;1 year) with significant unrealized gains.</p>
                        </div>
                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl">
                             <span className="text-2xl">💸</span>
                             <p className="text-sm font-bold opacity-80 leading-relaxed">Sell enough units to realize gains close to ₹1,25,000 for the current financial year.</p>
                        </div>
                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl">
                             <span className="text-2xl">🔄</span>
                             <p className="text-sm font-bold opacity-80 leading-relaxed">Reinvest the proceeds immediately (Buy back) to maintain your portfolio exposure.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-8 italic italic">Important Checklist</h2>
                    <div className="p-8 bg-white rounded-3xl border border-slate-200">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <li className="flex items-center gap-3 text-xs font-bold text-slate-500">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                Account for STT and brokerage costs.
                            </li>
                            <li className="flex items-center gap-3 text-xs font-bold text-slate-500">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                Only applicable for Equity (&gt;65% internal).
                            </li>
                            <li className="flex items-center gap-3 text-xs font-bold text-slate-500">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                Must be done before March 31st each year.
                            </li>
                            <li className="flex items-center gap-3 text-xs font-bold text-slate-500">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                Buyback can be done on the same or next day.
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </CalculatorContent>
    );
};

export default TaxHarvestingCalculator;
