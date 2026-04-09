import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/paths';
import { SEO_CONFIG } from '../routes/seoConfig';
import StepUpSIPUI from '../components/calculators/StepUpSIPUI';
import CalculatorContent from '../components/CalculatorContent';
import RelatedContent from '../components/RelatedContent';

const StepUpSIPCalculator = () => {
    const seoData = SEO_CONFIG[ROUTES.CALCULATORS.INVESTMENT.STEP_UP_SIP];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header / Breadcrumb */}
            <div className="bg-white border-b border-slate-200 py-10 mb-8 shadow-sm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm font-bold text-slate-400 mb-6 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600 transition-colors">Home</Link>
                        <span className="text-slate-300">/</span>
                        <Link to={ROUTES.HUBS.INVESTMENT} className="hover:text-blue-600 transition-colors">Investment</Link>
                        <span className="text-slate-300">/</span>
                        <span className="text-slate-600">Step-Up SIP</span>
                    </nav>
                    <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                        {seoData.h1 || "Step-Up SIP Calculator"}
                    </h1>
                    <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
                        See how an annual increase in your investment can exponentially grow your wealth and beat inflation over the long term.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="md:col-span-2 space-y-12">
                        {/* Calculator UI */}
                        <StepUpSIPUI />

                        {/* SEO Content Block */}
                        <CalculatorContent
                            title="The Power of Step-Up Investing"
                            whatIs="A Step-Up SIP (or Top-up SIP) is an investment strategy where you increase your monthly contribution by a fixed percentage or amount every year. Since most salaried professionals in India receive annual increments, stepping up your SIP ensures that your savings grow in tandem with your income."
                            formula="Step-Up SIP Maturity Value = P × [{(1+r)^n - 1} / r] × (1+r) + (Increased contributions compounded over remaining tenure)"
                            example="If you start a ₹10,000 SIP for 20 years at 12% returns, you'd get ~₹99 Lakhs. But if you increase the amount by just 10% every year, your final corpus jumps to over ₹2.1 Crores! That's the compounding advantage of a Step-Up SIP."
                            commonMistake="Ignoring the Step-up when your income increases. Many investors keep their SIP constant for 10 years while their salary doubles, missing out on the massive opportunity to build a much larger retirement corpus with the same relative effort."
                            faqs={seoData.faq}
                        />

                        {/* Quick Reference Table */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
                                <span className="text-xl">📈</span> Why Step-Up Every Year?
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                                    <p className="font-black text-blue-900 mb-2 italic">Beats Inflation</p>
                                    <p className="text-sm text-blue-700 leading-relaxed">As the cost of living rises, your static SIP value effectively decreases. Step-up maintains the purchasing power of your future wealth.</p>
                                </div>
                                <div className="p-6 bg-green-50/50 rounded-2xl border border-green-100">
                                    <p className="font-black text-green-900 mb-2 italic">Harnesses Increments</p>
                                    <p className="text-sm text-green-700 leading-relaxed">Instead of lifestyle creep, redirecting a portion of your annual salary hike into SIP creates massive long-term wealth.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Related Tools */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm sticky top-24">
                            <h4 className="font-black text-slate-900 mb-6 text-xs uppercase tracking-widest text-center border-b border-slate-100 pb-4">
                                Related Tools
                            </h4>
                            <div className="space-y-4">
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="block group p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-blue-50/50 transition-all">
                                    <p className="text-sm font-bold text-slate-700 group-hover:text-blue-900 transition-colors">Regular SIP Calculator</p>
                                    <p className="text-xs text-slate-400 group-hover:text-blue-600 mt-1 transition-colors">Basic monthly math →</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP_CRORE} className="block group p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-blue-50/50 transition-all">
                                    <p className="text-sm font-bold text-slate-700 group-hover:text-blue-900 transition-colors">Target 1 Crore</p>
                                    <p className="text-xs text-slate-400 group-hover:text-blue-600 mt-1 transition-colors">Plan your goal →</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.FD_VS_SIP} className="block group p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-blue-50/50 transition-all">
                                    <p className="text-sm font-bold text-slate-700 group-hover:text-blue-900 transition-colors">FD vs SIP</p>
                                    <p className="text-xs text-slate-400 group-hover:text-blue-600 mt-1 transition-colors">Stability vs Growth →</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Related Section */}
                <RelatedContent category="INVESTMENT" currentPath={ROUTES.CALCULATORS.INVESTMENT.STEP_UP_SIP} />
            </div>
        </div>
    );
};

export default StepUpSIPCalculator;
