import React from 'react';
import CalculatorContent from '../components/CalculatorContent';
import GoldJewelleryUI from '../components/calculators/GoldJewelleryUI';
import { ROUTES } from '../routes/paths';

const GoldJewelleryCalculator = () => {
    return (
        <CalculatorContent
            title="Gold Jewellery Billing Calculator"
            description="Calculate the final price of gold jewellery including making charges, 3% GST, and carat-based purity pricing. Plan your jewellery purchase with accurate billing."
            calculator={<GoldJewelleryUI />}
            category="Gold"
            breadcrumbs={[
                { label: 'Calculators', path: ROUTES.HUBS.INVESTMENT },
                { label: 'Gold', path: ROUTES.CALCULATORS.GOLD.JEWELLERY },
                { label: 'Jewellery Billing' }
            ]}
        >
            <div className="mt-12 space-y-12">
                <section>
                    <h2 className="text-3xl font-black text-slate-900 mb-6">How Jewellery Price is Calculated in India?</h2>
                    <p className="text-slate-600 leading-relaxed font-bold italic">
                        The final price of gold jewellery isn't just the price of gold. It follows a standard formula used by top jewellers like Tanishq, Malabar, and Kalyan:
                    </p>
                    <div className="mt-6 p-8 bg-amber-50 rounded-3xl border-2 border-amber-100 flex items-center justify-center text-center">
                        <div className="font-black text-xl text-amber-900 leading-relaxed">
                            (Gold Rate × Weight) + Making Charges + 3% GST = Final Price
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-amber-200 group">
                        <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                            <span className="font-black">22K</span>
                        </div>
                        <h3 className="text-xl font-black text-slate-800 mb-4 tracking-tight">Understanding Purity (22K vs 24K)</h3>
                        <p className="text-slate-500 font-bold text-sm leading-relaxed">
                            24K gold is 99.9% pure but too soft for jewellery. Most ornaments are made in 22K (91.6% gold) or 18K (75% gold) to ensure durability. Our calculator automatically adjusts the price based on these purity ratios.
                        </p>
                    </div>

                    <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-amber-200 group">
                        <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                            <span className="font-black">%</span>
                        </div>
                        <h3 className="text-xl font-black text-slate-800 mb-4 tracking-tight">Making Charges Explained</h3>
                        <p className="text-slate-500 font-bold text-sm leading-relaxed">
                            Jewellers charge for the labour and design of the ornament. These typically range from 8% to 25% of the gold value depending on the complexity of the design (Plain, Studded, or Antique).
                        </p>
                    </div>
                </section>

                <section className="bg-slate-900 p-10 rounded-[3rem] text-white">
                    <h2 className="text-2xl font-black mb-8 italic">Gold Purchase Checklist 2025</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-amber-500 flex-shrink-0 flex items-center justify-center text-[10px] font-black">1</div>
                            <p className="text-sm font-bold opacity-80">Check the Hallmark (BIS 916) Laser marking on the ornament.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-amber-500 flex-shrink-0 flex items-center justify-center text-[10px] font-black">2</div>
                            <p className="text-sm font-bold opacity-80">Verify the current 24K market rate before entering the showroom.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-amber-500 flex-shrink-0 flex items-center justify-center text-[10px] font-black">3</div>
                            <p className="text-sm font-bold opacity-80">Negotiate on making charges, especially during festive seasons.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-amber-500 flex-shrink-0 flex items-center justify-center text-[10px] font-black">4</div>
                            <p className="text-sm font-bold opacity-80">Always ask for a proper GST invoice for future resale or exchange.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-8 italic">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-black text-slate-800 mb-2">Is GST mandatory on gold?</h4>
                            <p className="text-slate-500 font-bold text-sm">Yes, a flat 3% Goods and Services Tax (GST) is applicable on the total value (Gold + Making) of the jewellery.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-black text-slate-800 mb-2">What is the difference between 22K and 916 Hallmark?</h4>
                            <p className="text-slate-500 font-bold text-sm">They are the same. 916 stands for 91.6% purity, which is what 22K (22 parts out of 24) pure gold contains.</p>
                        </div>
                    </div>
                </section>
            </div>
        </CalculatorContent>
    );
};

export default GoldJewelleryCalculator;
