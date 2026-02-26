import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "Summer Electricity Bill Spike: Why Your Bill Doubles in April",
    description: "Decoding the high electricity bill during Indian summers. Understanding telescopic tariffs, slabs, and how to optimize your AC usage to save money.",
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
            <SchemaGenerator
                name="Summer Electricity Bill Spike: Why Your Bill Doubles in April"
                description="Decoding the high electricity bill during Indian summers. Understanding telescopic tariffs, slabs, and how to optimize your AC usage to save money."
                type="Article"
                url="https://calcguide.in/learn/indian-summer-electricity-bill-spike-guide/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Bill Spike</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        The Summer Shock:<br /> Why Your Bill Triples
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        It's not just the heat; it's the "Slab Trap". Here is how the Indian electricity grid prices your comfort.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The "Telescopic" Tariff Trap</h2>
                    <p>
                        In India, electricity is priced using <strong>Slab Rates</strong>. This means the more you consume, the more you pay <em>per unit</em>.
                    </p>
                    <p>For example, in many states:</p>
                    <ul>
                        <li>First 100 units: ₹4 / unit</li>
                        <li>101 to 300 units: ₹8 / unit</li>
                        <li>Above 300 units: <strong>₹12 / unit</strong></li>
                    </ul>
                    <p>In winter, you might consume 250 units (all under ₹8). In summer, that AC usage pushes you to 450 units. Those extra 150 units are billed at the highest possible rate. Your consumption increased by 80%, but your <strong>bill increased by 150%</strong>. That is the math of the summer shock.</p>

                    <h3>The AC 'Efficiency' Secret</h3>
                    <p>The biggest consumer in your house is the Air Conditioner. But how you use it matters more than how old it is.</p>
                    <div className="bg-yellow-50 p-8 rounded-2xl my-8 border-l-4 border-yellow-600 shadow-inner">
                        <h4 className="text-yellow-900 mt-0 font-bold">The 24-Degree Rule:</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            Every degree you lower the AC below 24°C increases your electricity consumption by roughly <strong>6%</strong>. Running your AC at 18°C doesn't cool the room faster—it just makes the compressor work longer. Setting it at 24°C with a ceiling fan on low speed is the most energy-efficient way to survive an Indian summer.
                        </p>
                    </div>

                    <h3>Fixed Charges & Duty</h3>
                    <p>Your bill isn't just units. It includes:</p>
                    <ul>
                        <li><strong>Fixed/Sanctioned Load Charges:</strong> Based on the 'demand' your house can potentially pull from the grid.</li>
                        <li><strong>Power Purchase Adjustment (PPAC):</strong> A variable charge that allows companies to pass on the fuel cost (coal/gas) to you. This usually peaks in summer.</li>
                        <li><strong>Electricity Duty:</strong> A state government tax, often 10-15% of the total bill.</li>
                    </ul>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-yellow-400 font-bold mb-2 italic">Energy Optimization Tip</h4>
                        <p className="mb-0 text-slate-300">"Maintenance over Replacement." A dirty AC outdoor unit can increase power draw by **30-40%** as the heat exchange becomes inefficient. Spending ₹500 on a professional cleaning in March is the highest ROI financial decision you can make for your summer budget.</p>
                    </div>

                    <h3>Predict Your Next Bill</h3>
                    <p>Stop being surprised. Use our bill estimator to see which slab you will land in this month.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.UTILITY.ELECTRICITY_BILL} className="inline-block px-8 py-4 bg-yellow-400 text-slate-900 rounded-xl font-bold hover:bg-yellow-500 transition shadow-lg">
                            ⚡ Electricity Bill Estimator →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
