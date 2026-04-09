import React from 'react';
import CalculatorContent from '../components/CalculatorContent';
import MFOverlapUI from '../components/calculators/MFOverlapUI';
import { ROUTES } from '../routes/paths';

const MFOverlapCalculator = () => {
    return (
        <CalculatorContent
            title="Mutual Fund Overlap Calculator"
            description="Analyze the common stock holdings between two mutual funds. Avoid portfolio redundancy and check if you are truly diversified or just holding the same stocks in different schemes."
            calculator={<MFOverlapUI />}
            category="Investment"
            breadcrumbs={[
                { label: 'Calculators', path: ROUTES.HUBS.INVESTMENT },
                { label: 'Investment', path: ROUTES.HUBS.INVESTMENT },
                { label: 'MF Overlap' }
            ]}
        >
            <div className="mt-12 space-y-12">
                <section>
                    <h2 className="text-3xl font-black text-slate-900 mb-6 italic">The Hidden Risk of Portfolio Overlap</h2>
                    <p className="text-slate-600 leading-relaxed font-bold italic">
                        Many investors believe holding 10 different mutual funds makes them diversified. However, if all those funds hold HDFC Bank and Reliance as their top positions, you aren't diversified—you are concentrated.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
                        <h4 className="font-black text-blue-700 mb-2">Cost Inefficiency</h4>
                        <p className="text-xs font-bold text-slate-500">Overlapping funds mean you pay multiple expense ratios for the same underlying stock exposure.</p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
                        <h4 className="font-black text-blue-700 mb-2">False Safety</h4>
                        <p className="text-xs font-bold text-slate-500">If one sector crashes, multiple funds in your portfolio will drop simultaneously if they share the same stocks.</p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
                        <h4 className="font-black text-blue-700 mb-2">Concentration Risk</h4>
                        <p className="text-xs font-bold text-slate-500">High overlap effectively turns a 'diversified' portfolio into a high-risk concentrated bet.</p>
                    </div>
                </div>

                <section className="bg-slate-900 p-10 rounded-[3rem] text-white">
                    <h2 className="text-2xl font-black mb-8 italic text-blue-400">Diversification Guidelines</h2>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                            <span className="text-blue-400 font-black">0-20% Overlap:</span>
                            <span className="font-bold text-xs opacity-80">Excellent. Funds provide complementary exposure.</span>
                        </li>
                        <li className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                            <span className="text-amber-400 font-black">30-50% Overlap:</span>
                            <span className="font-bold text-xs opacity-80">Moderate. Check if you really need both schemes.</span>
                        </li>
                        <li className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                            <span className="text-rose-400 font-black">70%+ Overlap:</span>
                            <span className="font-bold text-xs opacity-80">Redundant. You should likely consolidate into the better performing fund.</span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-8">How to Use the Data?</h2>
                    <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                        <p className="text-slate-500 font-bold leading-relaxed italic">
                            Regularly check the overlap between your Flexi-cap and Large-cap funds. Since many Flexi-caps invest heavily in Large-caps, you might find a 40-60% overlap, signaling a need to shift towards more distinct categories like Mid-cap or Small-cap for true alpha.
                        </p>
                    </div>
                </section>
            </div>
        </CalculatorContent>
    );
};

export default MFOverlapCalculator;
