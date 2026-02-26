import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "EV vs Petrol: The Real Break-Even Calculation 2025",
    description: "Thinking of buying an Electric Vehicle (EV)? Calculate the true cost of ownership including battery life, charger costs, and how many km you need to drive to save money.",
    category: "UTILITY",
    slug: ROUTES.LEARN.EV_BREAK_EVEN,
    date: "2025-02-22",
    icon: "🚗",
    colorClass: "bg-green-100",
    isNew: true
};

export default function EVBreakEven() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="EV vs Petrol: The Real Break-Even Calculation 2025"
                description="Thinking of buying an Electric Vehicle (EV)? Calculate the true cost of ownership including battery life, charger costs, and how many km you need to drive to save money."
                type="Article"
                url="https://calcguide.in/learn/ev-vs-petrol-cost-ownership-guide/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">EV Math</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        EV vs Petrol:<br /> Finding the Break-Even Point
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        EVs are cheaper to run but more expensive to buy. At what kilometer reading does the "expensive" EV actually become a cheaper car?
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The EV Premium</h2>
                    <p>
                        In India, an Electric Vehicle (like a Nexon EV) usually costs ₹3 Lakhs to ₹5 Lakhs more than its petrol equivalent. This is known as the <strong>EV Premium</strong>. To justify this cost, you must save enough on fuel (electricity vs petrol) to recover this premium during the time you own the car.
                    </p>

                    <h3>The Running Cost Reality</h3>
                    <p>The math is starkly in favor of electric:</p>
                    <ul>
                        <li><strong>Petrol Car:</strong> ~₹7 to ₹9 per km (at ₹100/L and 12-14 kmpl).</li>
                        <li><strong>Electric Vehicle:</strong> ~₹1 to ₹1.5 per km (at ₹8/unit electricity).</li>
                    </ul>
                    <p>You save roughly ₹6 for every single kilometer you drive an EV. If you drive 1,000 km a month, you save ₹6,000.</p>

                    <div className="bg-green-50 p-8 rounded-2xl my-8 border-l-4 border-green-600 shadow-inner">
                        <h4 className="text-green-900 mt-0 font-bold">The Simple Break-Even Formula:</h4>
                        <div className="text-center py-4 bg-white rounded-xl border border-green-100 my-4 shadow-sm">
                            <p className="text-xl font-mono m-0">Distance = EV Premium / (Petrol Cost per km - EV Cost per km)</p>
                        </div>
                        <p className="text-sm text-slate-600">Example: If the premium is ₹4,00,000 and you save ₹6/km, you need to drive <strong>66,666 km</strong> just to reach zero profit. Only after this distance do you actually start saving money!</p>
                    </div>

                    <h3>Hidden Costs & Savings</h3>
                    <p>A true calculation must include more than just fuel:</p>
                    <ol>
                        <li><strong>Maintenance:</strong> EVs have no engine, no oil changes, and no gearboxes. Maintenance is usually 30-40% cheaper over 5 years.</li>
                        <li><strong>Registration & Road Tax:</strong> Many Indian states (like UP, Delhi, and Karnataka) offer 0% road tax for EVs, which can save you up to ₹2 Lakhs upfront!</li>
                        <li><strong>Resale Value:</strong> This is the big unknown. Battery health at year 8 will define the second-hand price. If the battery needs replacement (costing ₹5L+), the resale value could crash.</li>
                    </ol>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-green-400 font-bold mb-2 italic">Institutional Pro-Tip</h4>
                        <p className="mb-0 text-slate-300">"Drive more, save more." An EV is a financial disaster for someone who only drives 200km a month. It belongs in the garage of a daily commuter or a taxi operator. If your daily run is less than 30km, a Hybrid or a modern CNG car is often a better financial choice than a pure EV.</p>
                    </div>

                    <h3>Compare Your Costs Now</h3>
                    <p>Don't fall for marketing. Use our dynamic calculator to input your specific state's electricity prices and your daily commute to find your exact break-even month.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.UTILITY.ELECTRICITY_BILL} className="inline-block p-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition shadow-lg">
                            🚗 EV vs Petrol Calculator →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
