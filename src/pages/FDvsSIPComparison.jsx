import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/paths';
import { SEO_CONFIG } from '../routes/seoConfig';
import FDvsSIPUI from '../components/calculators/FDvsSIPUI';
import CalculatorContent from '../components/CalculatorContent';
import RelatedContent from '../components/RelatedContent';

const FDvsSIPComparison = () => {
    const seoData = SEO_CONFIG[ROUTES.CALCULATORS.INVESTMENT.FD_VS_SIP];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header / Breadcrumb */}
            <div className="bg-white border-b border-slate-200 py-10 mb-8 shadow-sm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm font-bold text-slate-400 mb-6 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600 transition-colors">Home</Link>
                        <span className="text-slate-300">/</span>
                        <Link to={ROUTES.HUBS.INVESTMENT} className="hover:text-blue-600 transition-colors">Investments</Link>
                        <span className="text-slate-300">/</span>
                        <span className="text-slate-600">FD vs SIP</span>
                    </nav>
                    <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                        {seoData.h1 || "FD vs Mutual Fund SIP Comparison"}
                    </h1>
                    <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
                        Compare the safety of bank Fixed Deposits with the wealth creation potential of Mutual Fund SIPs side-by-side.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="md:col-span-2 space-y-12">
                        {/* Calculator UI */}
                        <FDvsSIPUI />

                        {/* SEO Content Block */}
                        <CalculatorContent
                            title="FD vs SIP: Stability vs Growth"
                            whatIs="Fixed Deposits (FDs) offer guaranteed returns and capital safety, making them ideal for short-term goals or conservative investors. In contrast, Mutual Funds (SIPs or Lumpsum) are market-linked and offer higher potential for wealth creation over 5+ years, though they come with market volatility."
                            formula="FD Maturity = P × (1 + r/n)^(nt) [Quarterly Compounding]. Mutual Fund Lumpsum = P × (1 + r)^t [Annual Compounding]."
                            example="Investing ₹1 Lakh for 5 years: At a 7% FD rate, you get ~₹1.41 Lakhs. At a typical 12% MF return rate, you get ~₹1.76 Lakhs. The wealth gap of ₹35,000 shows the 'opportunity cost' of extreme safety."
                            commonMistake="Ignoring the 'Real Return'. If inflation is 6% and your FD earns 7% pre-tax, your real growth after tax slab and inflation is often zero or negative. SIPs are generally better at beating inflation in the long run."
                            faqs={seoData.faq}
                        />

                        {/* Comparison Table */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                             
                            <h3 className="text-2xl font-black text-slate-900 mb-8 relative z-10">Side-by-Side Analysis</h3>
                            <div className="grid grid-cols-2 gap-8 relative z-10">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-black">1</div>
                                        <p className="font-black text-slate-800">Fixed Deposit</p>
                                    </div>
                                    <ul className="text-xs text-slate-500 space-y-3 font-bold">
                                        <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Guaranteed returns</li>
                                        <li className="flex items-center gap-2"><span className="text-green-500">✓</span> No market risk</li>
                                        <li className="flex items-center gap-2"><span className="text-green-500">✓</span> High liquidity</li>
                                        <li className="flex items-center gap-2"><span className="text-red-400">✗</span> Taxed as per slab</li>
                                        <li className="flex items-center gap-2"><span className="text-red-400">✗</span> Low inflation beat</li>
                                    </ul>
                                </div>
                                <div className="space-y-6 border-l border-slate-100 pl-8">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-black">2</div>
                                        <p className="font-black text-slate-800">Mutual Fund</p>
                                    </div>
                                    <ul className="text-xs text-slate-500 space-y-3 font-bold">
                                        <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Multiplier returns</li>
                                        <li className="flex items-center gap-2"><span className="text-green-500">✓</span> LTCG Tax efficiency</li>
                                        <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Compounding power</li>
                                        <li className="flex items-center gap-2"><span className="text-red-400">✗</span> Market volatility</li>
                                        <li className="flex items-center gap-2"><span className="text-red-400">✗</span> Not guaranteed</li>
                                    </ul>
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
                                    <p className="text-sm font-bold text-slate-700 group-hover:text-blue-900 transition-colors">SIP Calculator</p>
                                    <p className="text-xs text-slate-400 group-hover:text-blue-600 mt-1 transition-colors">Monthly wealth plan →</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.FD} className="block group p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-blue-50/50 transition-all">
                                    <p className="text-sm font-bold text-slate-700 group-hover:text-blue-900 transition-colors">FD Calculator</p>
                                    <p className="text-xs text-slate-400 group-hover:text-blue-600 mt-1 transition-colors">Bank interest math →</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.STEP_UP_SIP} className="block group p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-blue-50/50 transition-all">
                                    <p className="text-sm font-bold text-slate-700 group-hover:text-blue-900 transition-colors">Step-Up SIP</p>
                                    <p className="text-xs text-slate-400 group-hover:text-blue-600 mt-1 transition-colors">Boost your returns →</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Related Section */}
                <RelatedContent category="INVESTMENT" currentPath={ROUTES.CALCULATORS.INVESTMENT.FD_VS_SIP} />
            </div>
        </div>
    );
};

export default FDvsSIPComparison;
