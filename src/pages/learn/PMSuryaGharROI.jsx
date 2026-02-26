import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "PM Surya Ghar Muft Bijli Yojana – ROI & Subsidy Guide",
    description: "Detailed analysis of the PM Surya Ghar scheme. Learn about subsidies up to ₹78,000 and how to get your electricity bill to zero.",
    category: "UTILITY",
    slug: ROUTES.LEARN.PM_SURYA_GHAR_ROI,
    date: "2025-02-21",
    icon: "☀️",
    colorClass: "bg-green-100",
    isNew: true
};

export default function PMSuryaGharROI() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="PM Surya Ghar Muft Bijli Yojana – ROI & Subsidy Guide"
                description="Detailed analysis of the PM Surya Ghar scheme. Learn about subsidies up to ₹78,000 and how to get your electricity bill to zero."
                type="Article"
                url="https://calcguide.in/learn/pm-surya-ghar-yojana-roi-subsidy-guide/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Energy Independence</span>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-6 leading-tight">
                        PM Surya Ghar Yojana:<br /> The Math of 'Free' Electricity
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        With electricity rates climbing to ₹10/unit in many states, rooftop solar isn't a luxury anymore—it's a financial necessity.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The New Subsidy Structure (2025)</h2>
                    <p>
                        Launched in February 2024, the "PM Surya Ghar: Muft Bijli Yojana" replaced old chaotic subsidy models with a streamlined Central Portal. The government now pays you a direct cash subsidy within 30 days of installation.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4 my-8">
                        <div className="bg-green-50 p-6 rounded-xl text-center border border-green-100">
                            <p className="font-bold text-green-900 text-sm">1 kW System</p>
                            <p className="text-2xl font-black text-slate-900">₹30,000</p>
                            <p className="text-xs text-green-700">Flat Subsidy</p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl text-center border-2 border-green-200 shadow-sm">
                            <p className="font-bold text-green-900 text-sm">2 kW System</p>
                            <p className="text-2xl font-black text-slate-900">₹60,000</p>
                            <p className="text-xs text-green-700">Flat Subsidy</p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl text-center border border-green-100">
                            <p className="font-bold text-green-900 text-sm">3kW+ System</p>
                            <p className="text-2xl font-black text-slate-900">₹78,000</p>
                            <p className="text-xs text-green-700">Maximum Cap</p>
                        </div>
                    </div>

                    <h3>The Payback Analysis</h3>
                    <p>
                        Let's run the numbers for a standard 3kW On-Grid system in an Indian Tier-1 city.
                    </p>
                    <ul className="space-y-2 bg-slate-50 p-6 rounded-2xl list-none">
                        <li><strong>System Cost:</strong> ₹1,80,000 (Average)</li>
                        <li><strong>Govt Subsidy:</strong> -₹78,000</li>
                        <li className="font-bold text-slate-900 border-t border-slate-200 pt-2">Your Final Investment: ₹1,02,000</li>
                        <li className="mt-4"><strong>Generation:</strong> ~360 Units / Month</li>
                        <li><strong>Monthly Savings:</strong> ₹3,240 (@ ₹9/unit average)</li>
                        <li><strong>Annual Savings:</strong> ₹38,880</li>
                        <li className="font-bold text-green-700 border-t border-green-100 pt-2">Break-Even Period: 2.6 Years!</li>
                    </ul>
                    <p>After 2.6 years, your electricity is practically free for the next 22 years. This is a <strong>38% annual return</strong> on your capital, which beats every Mutual Fund or FD in the market.</p>

                    <h2>Net Metering: The Secret Sauce</h2>
                    <p>In an "On-Grid" system, you don't need batteries (which are expensive and last only 5 years). Instead, the solar energy you generate during the day is sent to the grid. At night, you take energy back. At the end of the month, you only pay for the 'Net' consumption. If you generate more than you use, the units often carry forward to the next month.</p>

                    <div className="my-10 p-8 bg-slate-900 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h4 className="text-green-400 font-bold mb-4 uppercase tracking-wider">Crucial Pre-Installation Tip</h4>
                            <p className="mb-0 text-sm opacity-90 leading-relaxed italic">"Check your Sanctioned Load." Most local electricity boards (DISCOMs) won't allow you to install a solar system capacity higher than your home's sanctioned load. If your load is 2kW and you want a 3kW solar system, you must first apply for a 'load enhancement' to avoid technical rejection of your subsidy.</p>
                        </div>
                    </div>

                    <h2>How to Apply? (Avoid Scams)</h2>
                    <p>Only use the Official Portal: <strong>pmsuryaghar.gov.in</strong>. Do not pay any "registration fee" to private agents. Choose a vendor from the 'Empanelled List' who has experience with net-metering in your specific city.</p>

                    <h3>Calculate Your Rooftop Potential</h3>
                    <p>How many panels can fit on your roof? What will be your exact ROI based on your specific state's electricity tariff? Use our calculator to find out.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.UTILITY.SOLAR_ROI} className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-bold shadow-lg shadow-green-100">
                            ☀️ Solar ROI Calculator →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
