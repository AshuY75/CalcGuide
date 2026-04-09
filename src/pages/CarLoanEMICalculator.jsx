import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/paths';
import CarLoanEMIUI from '../components/calculators/CarLoanEMIUI';
import CalculatorContent from '../components/CalculatorContent';
import RelatedContent from '../components/RelatedContent';

const CarLoanEMICalculator = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header / Breadcrumb */}
            <div className="bg-white border-b border-slate-200 py-6 mb-4 rounded-xl shadow-sm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.HUBS.LOAN} className="hover:text-blue-600">Loan Hub</Link>
                        <span>›</span>
                        <span className="text-slate-900 font-medium">Car Loan EMI</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Car Loan EMI Calculator</h1>
                    <p className="text-slate-600">Plan your car purchase by calculating monthly installments and interest costs</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        {/* Calculator UI */}
                        <CarLoanEMIUI />

                        {/* SEO Content Block */}
                        <CalculatorContent
                            title="Planning your Car Finance"
                            whatIs="A Car Loan EMI (Equated Monthly Installment) is the amount you pay every month to the bank for borrowing money to buy a vehicle. Car loans in India are typically 'Reducing Balance' loans, where the interest is calculated on the remaining principal every month."
                            formula="EMI = [P x r x (1+r)^n] / [(1+r)^n - 1]. Where P is the loan amount (Price - Down payment), r is the monthly interest rate, and n is the tenure in months."
                            example="For a ₹10 Lakh car, if you pay ₹2 Lakhs as a down payment and borrow ₹8 Lakhs for 5 years at 9%: Your EMI will be ₹16,607. Total interest paid over 5 years will be ₹1,96,400."
                            commonMistake="Ignoring the 'On-road Price'. Loans are often calculated on the Ex-showroom price, but you have to pay for Registration, Insurance, and Road Tax yourself. Ensure your down payment covers these costs or include them in the total loan amount."
                        />

                        {/* Comparison Table */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider text-center">Typical Car Loan Rates (2024-25)</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] font-black">
                                        <tr>
                                            <th className="px-4 py-3">Bank Type</th>
                                            <th className="px-4 py-3">Interest Rate</th>
                                            <th className="px-4 py-3">Best for</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 italic">
                                        <tr>
                                            <td className="px-4 py-3 font-bold text-slate-700">Public Banks (SBI/BoB)</td>
                                            <td className="px-4 py-3 text-blue-600 font-bold">8.70% - 9.50%</td>
                                            <td className="px-4 py-3">Lowest rates</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-bold text-slate-700">Private Banks (HDFC/ICICI)</td>
                                            <td className="px-4 py-3 text-blue-600 font-bold">9.00% - 11.00%</td>
                                            <td className="px-4 py-3">Fast processing</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-bold text-slate-700">NBFCs / Dealerships</td>
                                            <td className="px-4 py-3 text-blue-600 font-bold">10.50% - 14.00%</td>
                                            <td className="px-4 py-3">Low CIBIL scores</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Related Tools */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Car Tools</h4>
                            <div className="space-y-4">
                                <Link to={ROUTES.CALCULATORS.INSURANCE.CAR} className="block p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-white transition-colors">
                                    <p className="text-sm font-bold text-slate-700">Car Insurance</p>
                                    <p className="text-xs text-slate-500 mt-1">Estimate your premium →</p>
                                </Link>
                                <Link to={ROUTES.HUBS.LOAN} className="block p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-white transition-colors">
                                    <p className="text-sm font-bold text-slate-700">Loan Hub</p>
                                    <p className="text-xs text-slate-500 mt-1">Total liability math</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Related Section */}
                <RelatedContent category="LOAN" currentPath={ROUTES.CALCULATORS.LOAN.CAR} />
            </div>
        </div>
    );
};

export default CarLoanEMICalculator;
