import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';


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
                    <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Solar Revolution</span>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-6 leading-tight">
                        PM Surya Ghar Yojana:<br /> The Math of 'Free' Electricity
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        The new central scheme offers massive subsidies for rooftop solar. Is it finally time to switch? Let's break down the ROI.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>What is the Subsidy Amount?</h2>
                    <p>
                        The "PM Surya Ghar: Muft Bijli Yojana" provides a direct cash subsidy to residential households. The amounts are fixed based on system capacity:
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4 my-8">
                        <div className="bg-green-50 p-4 rounded-xl text-center">
                            <p className="font-bold text-green-900">1 kW</p>
                            <p className="text-2xl font-black">₹30,000</p>
                            <p className="text-xs text-green-700">Subsidy</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-xl text-center border-2 border-green-200">
                            <p className="font-bold text-green-900">2 kW</p>
                            <p className="text-2xl font-black">₹60,000</p>
                            <p className="text-xs text-green-700">Subsidy</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-xl text-center">
                            <p className="font-bold text-green-900">3+ kW</p>
                            <p className="text-2xl font-black">₹78,000</p>
                            <p className="text-xs text-green-700">Max Subsidy</p>
                        </div>
                    </div>

                    <h3>The Payback Period</h3>
                    <p>
                        For an average 3kW system costing ₹1.8 Lakhs, your out-of-pocket cost after subsidy is just ₹1,02,000.
                        If a 3kW system generates 360 units a month and saves you ₹3,000 on your bill, you break even in <strong>less than 3 years</strong>.
                        Since panels have a 25-year life, you get 22 years of free electricity.
                    </p>

                    <h2>How to Apply?</h2>
                    <ol>
                        <li>Register on the <strong>pmsuryaghar.gov.in</strong> portal.</li>
                        <li>Choose a vendor from the registered list.</li>
                        <li>Get the technical feasibility study done by your DISCOM.</li>
                        <li>Post-installation and net-metering, the subsidy is credited to your bank account within 30 days.</li>
                    </ol>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-green-400 font-bold mb-2">Financial Tip</h4>
                        <p className="text-sm mb-0">Unlike a car or a phone, solar is an asset that yields a <strong>30% annual return</strong> on investment (savings / cost). It is literally the highest-yielding legal investment available to an Indian homeowner today.</p>
                    </div>

                    <h3>Check Your Savings</h3>
                    <div className="mt-6">
                        <Link to={ROUTES.CALCULATORS.UTILITY.SOLAR_ROI} className="inline-flex items-center gap-2 p-4 border-2 border-slate-200 rounded-xl hover:border-green-500 transition-colors bg-slate-50 font-bold text-green-700">
                            ☀️ Open Solar ROI Calculator
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
