import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/paths';
import CarInsuranceUI from '../components/calculators/CarInsuranceUI';
import CalculatorContent from '../components/CalculatorContent';
import RelatedContent from '../components/RelatedContent';

const CarInsuranceCalculator = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header / Breadcrumb */}
            <div className="bg-white border-b border-slate-200 py-6 mb-4 rounded-xl shadow-sm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.HUBS.INSURANCE} className="hover:text-blue-600">Insurance Hub</Link>
                        <span>›</span>
                        <span className="text-slate-900 font-medium">Car Insurance Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Car Insurance Premium Calculator</h1>
                    <p className="text-slate-600">Calculate IDV depreciation and estimate comprehensive car insurance premiums</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        {/* Calculator UI */}
                        <CarInsuranceUI />

                        {/* SEO Content Block */}
                        <CalculatorContent
                            title="Decoding Car Insurance Premiums"
                            whatIs="Car Insurance in India consists of two main parts: Third Party (TP) liability, which is mandatory by law, and Own Damage (OD) cover, which protects your own vehicle against theft, fire, and accidents."
                            formula="Total Premium = [ (IDV x OD % Rate) - NCB Discount ] + [ TP Fixed Rate ] + [ Add-on Costs ] + [ 18% GST ]. IDV (Insured Declared Value) is the maximum sum insured, which depreciates with the car's age."
                            example="For a ₹10 Lakh car that is 2 years old: The IDV would be around ₹8 Lakhs. The OD premium might be ₹20,000. If you have a 25% NCB, you pay ₹15,000 + TP (~₹3.4k) + GST = ~₹21,700 total."
                            commonMistake="Reducing IDV to save premium. While it lowers the cost, in case of a 'Total Loss' (theft or major accident), the insurance company will only pay the lower IDV. Always set IDV near the market value of your used car."
                        />

                        {/* NCB Guide */}
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                            <h3 className="text-slate-900 font-bold mb-4 flex items-center uppercase tracking-wider text-sm">
                                <span className="mr-3 text-lg">💡</span>
                                The Power of No Claim Bonus (NCB)
                            </h3>
                            <div className="space-y-3 text-slate-600 text-sm">
                                <p>NCB is a reward for not making any claims in a policy year. It accumulates over time:</p>
                                <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                                    <div className="p-2 bg-white rounded border border-slate-100">Year 1: 0%</div>
                                    <div className="p-2 bg-white rounded border border-slate-100">Year 2: 20%</div>
                                    <div className="p-2 bg-white rounded border border-slate-100">Year 3: 25%</div>
                                    <div className="p-2 bg-white rounded border border-slate-100">Year 4: 35%</div>
                                    <div className="p-2 bg-white rounded border border-slate-100">Year 5: 45%</div>
                                    <div className="p-2 bg-white rounded border border-slate-100">Year 6+: 50%</div>
                                </div>
                                <p className="pt-2 text-[11px] italic">NCB belongs to the driver, not the car. You can transfer your NCB to a new car if you sell your old one!</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Related Tools */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Tools</h4>
                            <div className="space-y-4">
                                <Link to={ROUTES.CALCULATORS.LOAN.CAR} className="block p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-white transition-colors">
                                    <p className="text-sm font-bold text-slate-700">Car Loan EMI</p>
                                    <p className="text-xs text-slate-500 mt-1">Vehicle loan math →</p>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.UTILITY.EV_VS_PETROL} className="block p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-white transition-colors">
                                    <p className="text-sm font-bold text-slate-700">EV vs Petrol</p>
                                    <p className="text-xs text-slate-500 mt-1">Check TCO savings</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Related Section */}
                <RelatedContent category="INSURANCE" currentPath={ROUTES.CALCULATORS.INSURANCE.CAR} />
            </div>
        </div>
    );
};

export default CarInsuranceCalculator;
