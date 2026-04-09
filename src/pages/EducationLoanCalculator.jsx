import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/paths';
import { SEO_CONFIG } from '../routes/seoConfig';
import EducationLoanUI from '../components/calculators/EducationLoanUI';
import CalculatorContent from '../components/CalculatorContent';
import RelatedContent from '../components/RelatedContent';

const EducationLoanCalculator = () => {
    const seoData = SEO_CONFIG[ROUTES.CALCULATORS.LOAN.EDUCATION];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header / Breadcrumb */}
            <div className="bg-white border-b border-slate-200 py-10 mb-8 shadow-sm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm font-bold text-slate-400 mb-6 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600 transition-colors">Home</Link>
                        <span className="text-slate-300">/</span>
                        <Link to={ROUTES.HUBS.LOAN} className="hover:text-blue-600 transition-colors">Loans</Link>
                        <span className="text-slate-300">/</span>
                        <span className="text-slate-600">Education Loan</span>
                    </nav>
                    <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                        {seoData.h1 || "Education Loan EMI Calculator"}
                    </h1>
                    <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
                        Plan your higher studies with our precise EMI calculator. Includes moratorium period math and grace period interests.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="md:col-span-2 space-y-12">
                        {/* Calculator UI */}
                        <EducationLoanUI />

                        {/* SEO Content Block */}
                        <CalculatorContent
                            title="Understanding Education Loan Math"
                            whatIs="An Education Loan is unique because it offers a 'Moratorium Period'—a repayment holiday while you are studying. This period usually covers the course duration plus a 6-12 month grace period. However, interest continues to accrue during this time, which is capitalized (added to the principal) once repayment starts."
                            formula="New Principal = P + (P × r × t_moratorium). EMI = [New Principal × r × (1+r)^n] / [(1+r)^n - 1]"
                            example="For a ₹20 Lakh loan at 10.5% interest and 4 years of study, the accumulated interest is ₹8.4 Lakhs. Your EMI will be calculated on a new principal of ₹28.4 Lakhs, leading to higher monthly payouts if not managed early."
                            commonMistake="Ignoring interest during the study period. While not mandatory, paying the interest monthly while you study prevents it from compounding later, potentially saving you over ₹10-15 Lakhs in total interest."
                            faqs={seoData.faq}
                        />

                        {/* Quick Reference Table */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
                                <span className="text-xl">🎓</span> Key Loan Terms (India)
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Tax Benefit</p>
                                    <p className="text-lg font-black text-slate-900">80E</p>
                                    <p className="text-[10px] text-green-600 font-bold mt-1">FULL INTEREST</p>
                                </div>
                                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Max Tenure</p>
                                    <p className="text-lg font-black text-slate-900">15 Yrs</p>
                                    <p className="text-[10px] text-slate-500 font-bold mt-1">FOR REPAYMENT</p>
                                </div>
                                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Interest Calculation</p>
                                    <p className="text-lg font-black text-slate-900">Simple</p>
                                    <p className="text-[10px] text-slate-500 font-bold mt-1">DURING STUDY</p>
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
                                <Link to={ROUTES.CALCULATORS.LOAN.EMI} className="block group p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-blue-50/50 transition-all">
                                    <p className="text-sm font-bold text-slate-700 group-hover:text-blue-900 transition-colors">Standard EMI Calculator</p>
                                    <p className="text-xs text-slate-400 group-hover:text-blue-600 mt-1 transition-colors">Car & Personal Loans →</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.TAX.INCOME_TAX} className="block group p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-blue-50/50 transition-all">
                                    <p className="text-sm font-bold text-slate-700 group-hover:text-blue-900 transition-colors">Income Tax Calculator</p>
                                    <p className="text-xs text-slate-400 group-hover:text-blue-600 mt-1 transition-colors">Check 80E tax savings →</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.LOAN.ELIGIBILITY} className="block group p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-blue-50/50 transition-all">
                                    <p className="text-sm font-bold text-slate-700 group-hover:text-blue-900 transition-colors">Loan Eligibility</p>
                                    <p className="text-xs text-slate-400 group-hover:text-blue-600 mt-1 transition-colors">How much can I borrow? →</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Related Section */}
                <RelatedContent category="LOAN" currentPath={ROUTES.CALCULATORS.LOAN.EDUCATION} />
            </div>
        </div>
    );
};

export default EducationLoanCalculator;
