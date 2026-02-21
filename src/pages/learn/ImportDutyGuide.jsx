import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

export const metadata = {
    title: "How Import Duty is Calculated in India – 2025 Guide",
    description: "Step-by-step guide to Indian customs duty, SWS, and IGST math. Learn how to calculate the total landing cost of international items.",
    category: "UTILITY",
    slug: ROUTES.LEARN.IMPORT_DUTY_GUIDE,
    date: "2025-02-21",
    icon: "📦",
    colorClass: "bg-blue-100",
    isNew: true
};

export default function ImportDutyGuide() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">International Trade</span>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-6 leading-tight">
                        Cracking the Customs Code:<br /> How Import Duty Works
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Ordered a $400 gadget and got a ₹15,000 bill from DHL? Indian customs duty isn't a single tax; it is a stack of four different charges.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The 'Build-Up' Method</h2>
                    <p>
                        Indian Customs uses a 'Cascading' formula. This means each tax is calculated on the value *after* the previous tax was added.
                    </p>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-8">
                        <h4 className="m-0 text-slate-900">The 4 Layers of Cost:</h4>
                        <ol className="mt-4 space-y-2 text-sm font-medium text-slate-700">
                            <li><strong>CIF Value:</strong> (Cost of Item + Insurance + Freight/Shipping)</li>
                            <li><strong>BCD:</strong> Basic Customs Duty (Usually 10-35% of CIF)</li>
                            <li><strong>SWS:</strong> Social Welfare Surcharge (10% of the BCD amount)</li>
                            <li><strong>IGST:</strong> (CIF + BCD + SWS) x GST Rate (12, 18, or 28%)</li>
                        </ol>
                    </div>

                    <h3>Example: Importing a ₹50,000 Accessory</h3>
                    <p>
                        Let's assume a 10% BCD and 18% GST.
                    </p>
                    <ul>
                        <li><strong>BCD (10%):</strong> ₹5,000</li>
                        <li><strong>SWS (10% of BCD):</strong> ₹500</li>
                        <li><strong>Sub-total Value:</strong> ₹55,500</li>
                        <li><strong>IGST (18% of 55,500):</strong> ₹9,990</li>
                        <li><strong>Total Duty:</strong> ₹15,490 (~31% effective rate)</li>
                    </ul>

                    <h2>What is the 'Gift' Limit?</h2>
                    <p>
                        There is a common myth that items marked as 'Gifts' up to ₹5,000 are duty-free. While this exists in the rulebook, the Indian Customs department has become extremely strict. If an item looks like a commercial product (electronics, branded clothes), they will ignore the 'Gift' tag and charge duty based on their valuation.
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-blue-400 font-bold mb-2">Caution</h4>
                        <p className="text-sm mb-0">Courier companies like DHL, FedEx, and UPS also charge a 'Disbursement' or 'Handling' fee (usually ₹500-₹1,500) for paying the duty on your behalf. Always factor this into your budget.</p>
                    </div>

                    <h3>Calculate Your Duty</h3>
                    <div className="mt-6">
                        <Link to={ROUTES.CALCULATORS.CREATOR.IMPORT_DUTY} className="inline-flex items-center gap-2 p-4 border-2 border-slate-200 rounded-xl hover:border-blue-500 transition-colors bg-slate-50 font-bold text-blue-700">
                            📦 Open Import Duty Calculator
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
