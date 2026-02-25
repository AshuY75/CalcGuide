import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';


export const metadata = {
    title: "EV vs Petrol: The True Cost – When Do You Break Even?",
    description: "Compare the total cost of ownership for EVs vs Petrol cars. Is the ₹4 Lakh premium worth it for your daily commute?",
    category: "UTILITY",
    slug: ROUTES.LEARN.EV_VS_PETROL_TRUTH,
    date: "2025-02-21",
    icon: "🚗",
    colorClass: "bg-blue-100",
    isNew: true
};

export default function EVBreakEven() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="EV vs Petrol: The True Cost – When Do You Break Even?"
                description="Compare the total cost of ownership for EVs vs Petrol cars in India."
                type="Article"
                url="https://calcguide.in/learn/ev-vs-petrol-true-cost-comparison/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4 ">
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Automotive Math</span>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-6 leading-tight">
                        EV vs Petrol: The True Cost<br /> of Ownership
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        In India, an EV costs roughly ₹3-5 Lakhs more than its petrol equivalent. Is that extra money an investment or an expense?
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The Upfront Premium</h2>
                    <p>
                        A Tata Nexons EV costs roughly ₹16 Lakhs on-road, while the Petrol version is around ₹13 Lakhs. That's a ₹3 Lakh gap. To see if it's worth it, we need to look at the **Running Cost**.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 my-10">
                        <div className="p-6 bg-slate-100 rounded-2xl border border-slate-200">
                            <h4 className="m-0 text-slate-900">Petrol Car</h4>
                            <ul className="text-sm mt-4 space-y-2 p-0 list-none">
                                <li><strong>Fuel:</strong> ₹7.00 per km (approx)</li>
                                <li><strong>Maint:</strong> ₹0.80 per km</li>
                                <li><strong>Total:</strong> ₹7.80 per km</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-blue-100 rounded-2xl border border-blue-200">
                            <h4 className="m-0 text-blue-900">Electric Vehicle</h4>
                            <ul className="text-sm mt-4 space-y-2 p-0 list-none text-blue-800">
                                <li><strong>Charge:</strong> ₹1.00 per km (approx)</li>
                                <li><strong>Maint:</strong> ₹0.30 per km</li>
                                <li><strong>Total:</strong> ₹1.30 per km</li>
                            </ul>
                        </div>
                    </div>

                    <h3>The Breakeven Math</h3>
                    <p>
                        With every kilometer you drive, an EV saves you roughly ₹6.50.
                    </p>
                    <p>
                        To recover the ₹3 Lakh upfront premium: <br />
                        `3,00,000 / 6.50 = ~46,000 km`
                    </p>
                    <p>
                        If you drive **40km a day**, you will break even in roughly **3 years**. After that, every kilometer you drive saves you pure cash compared to a petrol car.
                    </p>

                    <h2>What about the Battery?</h2>
                    <p>
                        The biggest fear for EV buyers is the battery replacement cost. However, most manufacturers give an 8-year or 1,60,000 km warranty. Even after 8 years, the battery will likely still have 70-80% capacity, making the car usable for city commutes for another decade.
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-yellow-400 font-bold mb-2">The Verdict</h4>
                        <p className="text-sm mb-0">If your annual running is more than 10,000 km, an EV is a financial no-brainer. If you only drive 3,000 km a year, a petrol car (or even an Uber) is much cheaper over a 10-year period.</p>
                    </div>

                    <h3>Compare Now</h3>
                    <div className="mt-6">
                        <Link to={ROUTES.CALCULATORS.UTILITY.EV_VS_PETROL} className="inline-flex items-center gap-2 p-4 border-2 border-slate-200 rounded-xl hover:border-blue-500 transition-colors bg-slate-50 font-bold text-blue-700">
                            🚗 Open EV vs Petrol TCO Calculator
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
