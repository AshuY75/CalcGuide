import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/paths';
import { SEO_CONFIG } from '../routes/seoConfig';
import CTCInHandUI from '../components/calculators/CTCInHandUI';
import CalculatorContent from '../components/CalculatorContent';
import RelatedContent from '../components/RelatedContent';

const CTCInHandCalculator = () => {
    const seoData = SEO_CONFIG[ROUTES.CALCULATORS.TAX.CTC_TO_INHAND];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header / Breadcrumb */}
            <div className="bg-white border-b border-slate-200 py-10 mb-8 shadow-sm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm font-bold text-slate-400 mb-6 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600 transition-colors">Home</Link>
                        <span className="text-slate-300">/</span>
                        <Link to={ROUTES.HUBS.TAX} className="hover:text-blue-600 transition-colors">Tax & Salary</Link>
                        <span className="text-slate-300">/</span>
                        <span className="text-slate-600">CTC to In-Hand</span>
                    </nav>
                    <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                        {seoData.h1 || "CTC to In-Hand Salary Calculator"}
                    </h1>
                    <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
                        Calculate your exact take-home salary after PF, Taxes, and Professional Tax based on the latest FY 2025-26 Budget rules.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="md:col-span-2 space-y-12">
                        {/* Calculator UI */}
                        <CTCInHandUI />

                        {/* SEO Content Block */}
                        <CalculatorContent
                            title="CTC vs In-Hand Salary"
                            whatIs="CTC (Cost to Company) represents the total expenditure an employer incurs on an employee in a year. However, your 'In-Hand' or 'Net Salary' is significantly lower as it excludes employer contributions (like PF and Insurance) and deducts your own taxes and retirement savings."
                            formula="Monthly In-Hand = [Gross Salary - (Employee PF + Professional Tax + Monthly TDS)]"
                            example="For a CTC of ₹12 Lakhs: Employer PF (~₹21.6k) is deducted to get Gross Salary (~₹11.78L). After ₹75,000 Standard Deduction, taxable income is ₹11.03L. In the New Regime (FY 25-26), income up to ₹12L is tax-free via rebate, so Net Monthly In-Hand is roughly ₹95,900."
                            commonMistake="Ignoring the 'Gratuity' and 'Variable' components. Companies often include Gratuity (payable only after 5 years) and performance bonuses in the CTC. If you don't stay for 5 years or don't hit 100% KPIs, your actual earnings will be lower than the headline CTC."
                            faqs={seoData.faq}
                        />

                        {/* Quick Reference Table */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
                                <span className="text-xl">📑</span> Standard Deductions (FY 25-26)
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Standard Deduction</p>
                                    <p className="text-xl font-black text-slate-900">₹75,000</p>
                                    <p className="text-[10px] text-blue-600 font-bold mt-1">NEW REGIME</p>
                                </div>
                                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">EPF Contribution</p>
                                    <p className="text-xl font-black text-slate-900">12%</p>
                                    <p className="text-[10px] text-slate-500 font-bold mt-1">OF BASIC SALARY</p>
                                </div>
                                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Prof. Tax (Avg)</p>
                                    <p className="text-xl font-black text-slate-900">₹200</p>
                                    <p className="text-[10px] text-slate-500 font-bold mt-1">PER MONTH</p>
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
                                <Link to={ROUTES.CALCULATORS.TAX.INCOME_TAX} className="block group p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-blue-50/50 transition-all">
                                    <p className="text-sm font-bold text-slate-700 group-hover:text-blue-900 transition-colors">Income Tax Calculator</p>
                                    <p className="text-xs text-slate-400 group-hover:text-blue-600 mt-1 transition-colors">Compare Old vs New →</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.TAX.EPF} className="block group p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-blue-50/50 transition-all">
                                    <p className="text-sm font-bold text-slate-700 group-hover:text-blue-900 transition-colors">EPF Calculator</p>
                                    <p className="text-xs text-slate-400 group-hover:text-blue-600 mt-1 transition-colors">Retirement savings math →</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.TAX.GRATUITY} className="block group p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-blue-50/50 transition-all">
                                    <p className="text-sm font-bold text-slate-700 group-hover:text-blue-900 transition-colors">Gratuity Calculator</p>
                                    <p className="text-xs text-slate-400 group-hover:text-blue-600 mt-1 transition-colors">Check survival bonus →</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Related Section */}
                <RelatedContent category="TAX" currentPath={ROUTES.CALCULATORS.TAX.CTC_TO_INHAND} />
            </div>
        </div>
    );
};

export default CTCInHandCalculator;
