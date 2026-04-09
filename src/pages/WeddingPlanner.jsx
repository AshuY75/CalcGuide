import React from 'react';
import CalculatorContent from '../components/CalculatorContent';
import WeddingPlannerUI from '../components/calculators/WeddingPlannerUI';
import { ROUTES } from '../routes/paths';

const WeddingPlanner = () => {
    return (
        <CalculatorContent
            title="Indian Wedding Budget Planner 2025"
            description="Estimate and manage your wedding expenses with our smart budget breakdown tool. Tailored for Indian weddings, covering catering, venue, jewellery, and more."
            calculator={<WeddingPlannerUI />}
            category="Utility"
            breadcrumbs={[
                { label: 'Calculators', path: ROUTES.HUBS.UTILITY },
                { label: 'Wedding Planner' }
            ]}
        >
            <div className="mt-12 space-y-12">
                <section>
                    <h2 className="text-3xl font-black text-slate-900 mb-6 italic">How to Plan Your Wedding Budget?</h2>
                    <p className="text-slate-600 leading-relaxed font-bold italic">
                        Planning an Indian wedding can be overwhelming. On average, a mid-range Indian wedding costs between ₹15 Lakhs to ₹50 Lakhs. Our planner uses a tiered distribution model to ensure no hidden costs surprise you.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 bg-white rounded-3xl border border-rose-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                        <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 mb-4 font-black">1</div>
                        <h4 className="font-black text-slate-800 mb-2 italic">The Guest List Rule</h4>
                        <p className="text-xs font-bold text-slate-500 leading-relaxed">Catering usually consumes 35% of the budget. Every 10 extra guests can increase your costs by ₹20,000 to ₹50,000.</p>
                    </div>
                    <div className="p-6 bg-white rounded-3xl border border-rose-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                        <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 mb-4 font-black">2</div>
                        <h4 className="font-black text-slate-800 mb-2 italic">Off-Season Savings</h4>
                        <p className="text-xs font-bold text-slate-500 leading-relaxed">Booking venues during non-wedding dates (Saaya dates) can save you up to 30% on venue and catering costs.</p>
                    </div>
                    <div className="p-6 bg-white rounded-3xl border border-rose-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                        <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 mb-4 font-black">3</div>
                        <h4 className="font-black text-slate-800 mb-2 italic">The 10% Buffer</h4>
                        <p className="text-xs font-bold text-slate-500 leading-relaxed">Always keep 10% of your total budget aside for last-minute emergencies like extra plates, transport, or tipping.</p>
                    </div>
                </section>

                <section className="bg-slate-900 p-10 rounded-[3rem] text-white overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform group-hover:rotate-45">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-black mb-6 italic text-pink-400">Cost Cutting Strategies</h2>
                        <div className="space-y-4">
                            <p className="text-sm font-bold opacity-80 leading-relaxed">
                                <span className="text-pink-400 font-black">Digital Invites:</span> Swap physical cards for WhatsApp invites to save ₹20,000+.
                            </p>
                            <p className="text-sm font-bold opacity-80 leading-relaxed">
                                <span className="text-pink-400 font-black">Alcohol Sourcing:</span> Take the liquor license and buy from wholesalers instead of through the venue.
                            </p>
                            <p className="text-sm font-bold opacity-80 leading-relaxed">
                                <span className="text-pink-400 font-black">Minimalist Decor:</span> Use seasonal flowers and fairy lights instead of imported exotic decor.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </CalculatorContent>
    );
};

export default WeddingPlanner;
