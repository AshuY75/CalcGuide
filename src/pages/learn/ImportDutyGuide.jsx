import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

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
            <SchemaGenerator
                name="How Import Duty is Calculated in India – 2025 Guide"
                description="Step-by-step guide to Indian customs duty, SWS, and IGST math. Learn how to calculate the total landing cost of international items."
                type="Article"
                url="https://calcguide.in/learn/how-import-duty-is-calculated-india/"
            />

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
                        Indian Customs uses a <strong>'Cascading'</strong> formula. This means each tax is calculated on the cumulative value <em>after</em> the previous tax was added. This is why the effective tax rate often feels much higher than the base rate you see on news websites.
                    </p>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-8 shadow-inner">
                        <h4 className="m-0 text-slate-900 font-bold">The 4 Layers of Cost:</h4>
                        <ol className="mt-4 space-y-4 text-sm font-medium text-slate-700">
                            <li><strong>CIF Value:</strong> (Cost of Item + Insurance + Freight/Shipping). This is the base on which everything starts.</li>
                            <li><strong>BCD:</strong> Basic Customs Duty. This varies by product (Usually 10% for electronics, but can be 35%+ for luxury items).</li>
                            <li><strong>SWS:</strong> Social Welfare Surcharge. It is almost always <strong>10% of the BCD amount</strong> (not the item value).</li>
                            <li><strong>IGST:</strong> Integrated GST. Calculated on (CIF + BCD + SWS). This is usually 12%, 18%, or 28% depending on the HSN code.</li>
                        </ol>
                    </div>

                    <h3>Example: Importing a ₹50,000 Accessory</h3>
                    <p>
                        Let's assume a 10% BCD and 18% IGST (Standard for most tech accessories).
                    </p>
                    <ul className="bg-blue-50 p-4 rounded-xl list-none border-l-4 border-blue-400">
                        <li><strong>CIF Value:</strong> ₹50,000</li>
                        <li><strong>BCD (10% of 50k):</strong> ₹5,000</li>
                        <li><strong>SWS (10% of 5,000):</strong> ₹500</li>
                        <li><strong>Sub-total Value:</strong> ₹55,500</li>
                        <li><strong>IGST (18% of 55,500):</strong> ₹9,990</li>
                        <li className="pt-2 border-t border-blue-200 mt-2"><strong>Total Duty Payable:</strong> ₹15,490</li>
                        <li className="font-bold">Effective Tax Rate: 30.98%</li>
                    </ul>

                    <h2>The "Gift" Deception</h2>
                    <p>
                        There is a common myth that items marked as 'Gifts' are duty-free. While there is a limit for personal gifts, the Indian Customs department now treats almost all courier imports as commercial if they contain electronic goods or brand-new retail items. If you order from Amazon US or AliExpress (when it was active), the duty is inevitable.
                    </p>

                    <h2>Prohibited and Restricted Items</h2>
                    <p>Before you calculate duty, Ensure your item isn't on the restricted list. Items like drones, certain types of laser pointers, and high-capacity wireless equipment require special permits from the WPC or DGFT. If you import these without a permit, customs will seize the item regardless of how much duty you are willing to pay.</p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-blue-400 font-bold mb-2">Important Warning</h4>
                        <p className="text-sm mb-0">Courier companies like DHL, FedEx, and UPS also charge a 'Disbursement' or 'Handling' fee (usually ₹500 to ₹2,500) for paying the duty on your behalf and clearing the item through the port. This is an additional cost over and above the government duty.</p>
                    </div>

                    <h3>Calculate Your Landed Cost</h3>
                    <p>Don't get surprised by a massive bill at your doorstep. Use our tool to estimate the total cost of your international purchase including all taxes.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.CREATOR.IMPORT_DUTY} className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-bold shadow-lg shadow-blue-100">
                            📦 Import Duty Calculator →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
