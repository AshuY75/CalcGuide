import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

export const metadata = {
    title: "Beat the Summer Bill Spike – 5 AC Energy Saving Tips",
    description: "Learn how to reduce your electricity bill during hearting Indian summers. Practical tips for AC usage and slab management.",
    category: "UTILITY",
    slug: ROUTES.LEARN.SUMMER_BILL_SPIKE,
    date: "2025-02-21",
    icon: "⚡",
    colorClass: "bg-yellow-100",
    isNew: true
};

export default function SummerBillSpike() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4 ">
                    <span className="text-yellow-600 font-bold uppercase tracking-widest text-sm">Saving Guide</span>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-6 leading-tight">
                        Beat the Summer Bill Spike:<br /> Cool Your Home, Not Your Wallet
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        When the mercury touches 45°C, your electricity bill can jump from ₹2,000 to ₹10,000. Here is how to fight back.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>1. The 24°C Rule</h2>
                    <p>
                        Every degree you lower on your AC remote increases energy consumption by roughly 6%. Setting your AC at 18°C won't cool the room faster; it will just make the compressor run longer. **24°C is the sweet spot** for comfort and efficiency.
                    </p>

                    <h2>2. Clean Your Filters</h2>
                    <p>
                        A clogged filter forces the AC to work 15% harder to circulate air. Cleaning your filters every 15 days during peak summer is the easiest way to save at least ₹500 on your monthly bill.
                    </p>

                    <div className="bg-yellow-50 p-6 rounded-xl my-8 border-l-4 border-yellow-400">
                        <h4 className="text-yellow-900 mt-0">The 'Slab' Trap</h4>
                        <p className="text-sm mb-0">
                            Most Indian utility companies charge ₹4 for the first 100 units, but ₹12 for anything above 300 units. If you cross into the higher slab, every single extra unit costs 3x more. Monitoring your meter weekly in summer is crucial.
                        </p>
                    </div>

                    <h2>3. Seal the Leaks</h2>
                    <p>
                        Even a tiny gap under your door or a poorly sealed window can let out 10% of your cooling. Use door snakes or weather stripping. It costs ₹200 but saves thousands.
                    </p>

                    <h2>4. Use a Ceiling Fan with the AC</h2>
                    <p>
                        A ceiling fan creates a 'wind chill effect' that makes the room feel 2-3 degrees cooler. You can set your AC to 26°C and use a fan at low speed to get the same comfort as 23°C without the high bill.
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-yellow-400 font-bold mb-2">Pro Tip</h4>
                        <p className="text-sm mb-0">Switch to <strong>Inverter ACs</strong> and always look for the <strong>BEE 5-Star rating</strong>. The upfront cost is higher, but they pay for themselves in just two summers of high usage.</p>
                    </div>

                    <h3>Estimate Your Bill</h3>
                    <div className="mt-6">
                        <Link to={ROUTES.CALCULATORS.UTILITY.ELECTRICITY_BILL} className="inline-flex items-center gap-2 p-4 border-2 border-slate-200 rounded-xl hover:border-yellow-500 transition-colors bg-slate-50 font-bold text-slate-800">
                            ⚡ Open Electricity Bill Calculator
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
