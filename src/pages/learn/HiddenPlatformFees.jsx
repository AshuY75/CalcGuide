import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';


export const metadata = {
    title: "Hidden Platform Fees: Why You Lose 15% to PayPal & Upwork",
    description: "Breakdown of fees for PayPal, Upwork, and Stripe. Learn how to optimize your international payments and save on conversion spreads.",
    category: "CREATOR",
    slug: ROUTES.LEARN.HIDDEN_FEES,
    date: "2025-02-21",
    icon: "💸",
    colorClass: "bg-orange-100",
    isNew: true
};

export default function HiddenPlatformFees() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="Hidden Platform Fees: Why You Lose 15% to PayPal & Upwork"
                description="Breakdown of fees for PayPal, Upwork, and Stripe. Learn how to optimize your international payments and save on conversion spreads."
                type="Article"
                url="https://calcguide.in/learn/hidden-platform-fees-paypal-upwork/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Profit Optimization</span>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-6 leading-tight">
                        Platform Fees: The Invisible<br /> Tax on Your Creativity
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        When a client pays you $1,000, why do you only see ₹78,000 in your bank account? Let's trace where the missing 15% goes.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The 3-Layer Fee Trap</h2>
                    <p>
                        Most international freelancers pay fees in three distinct stages. By the time the money reaches India, it has been 'taxed' by middlemen multiple times.
                    </p>

                    <h3>1. The Commission (Layer 1)</h3>
                    <p>
                        This is the visible fee. Upwork takes 10%, Fiverr takes 20%, and TopTal can take up to 40%. This is the price you pay for the platform's escrow service and client discovery.
                    </p>

                    <h3>2. The Fixed Transaction Fee (Layer 2)</h3>
                    <p>
                        PayPal charges roughly 4.4% + $0.30 per transaction. Stripe is similar. This sounds small, but on a $100 project, you've already lost nearly $5.
                    </p>

                    <h3>3. The 'Conversion Spread' (Layer 3)</h3>
                    <p>
                        This is the most dangerous fee because it is **hidden**. If the official Google exchange rate is ₹83.00, PayPal might give you ₹81.20. That ₹1.80 difference per dollar is the 'spread'. On $1,000, that is ₹1,800 lost in thin air.
                    </p>

                    <div className="bg-orange-50 p-6 rounded-xl my-8 border-l-4 border-orange-500">
                        <h4 className="text-orange-900 mt-0">How to Save 5% Instantly</h4>
                        <p className="text-sm mb-0">
                            Instead of withdrawing from Upwork/PayPal directly to your bank, use a service like <strong>Wise</strong> or <strong>Salt.pe</strong>. They offer 'Local Bank Details' in the US. By receiving USD locally and converting it via their transparent mid-market rates, you can save up to ₹2.50 per dollar.
                        </p>
                    </div>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-orange-400 font-bold mb-2">Comparison</h4>
                        <p className="text-sm mb-0"><strong>PayPal:</strong> High fees (4.4%) + Bad exchange rates. Use ONLY for small, one-off clients.<br /><strong>Direct Wire:</strong> Best for high-value clients ($2000+). Flat fee of ~$25-30 but near-market exchange rates.</p>
                    </div>

                    <h3>Calculate Your Net Pay</h3>
                    <div className="mt-6">
                        <Link to={ROUTES.CALCULATORS.CREATOR.PLATFORM_FEE} className="inline-flex items-center gap-2 p-4 border-2 border-slate-200 rounded-xl hover:border-orange-500 transition-colors bg-slate-50 font-bold text-orange-700">
                            💸 Open Platform Fee Calculator
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
