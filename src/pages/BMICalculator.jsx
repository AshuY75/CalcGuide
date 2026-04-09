import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/paths';
import { SEO_CONFIG } from '../routes/seoConfig';
import BMICalculatorUI from '../components/calculators/BMICalculatorUI';
import CalculatorContent from '../components/CalculatorContent';
import RelatedContent from '../components/RelatedContent';

const BMICalculator = () => {
    const seoData = SEO_CONFIG[ROUTES.CALCULATORS.HEALTH.BMI];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header / Breadcrumb */}
            <div className="bg-white border-b border-slate-200 py-10 mb-8 shadow-sm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm font-bold text-slate-400 mb-6 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600 transition-colors">Home</Link>
                        <span className="text-slate-300">/</span>
                        <Link to={ROUTES.HUBS.HEALTH} className="hover:text-blue-600 transition-colors">Health</Link>
                        <span className="text-slate-300">/</span>
                        <span className="text-slate-600">BMI Calculator</span>
                    </nav>
                    <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                        {seoData.h1 || "BMI Calculator (Indian Standard)"}
                    </h1>
                    <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
                        Assess your health risk with India-specific BMI standards (Asian Cutoffs) recommended by the Ministry of Health.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="md:col-span-2 space-y-12">
                        {/* Calculator UI */}
                        <BMICalculatorUI />

                        {/* SEO Content Block */}
                        <CalculatorContent
                            title="BMI (Indian Standard)"
                            whatIs="Body Mass Index (BMI) is a simple index of weight-for-height that is commonly used to classify underweight, overweight and obesity in adults. For Indian and Asian populations, the standard cutoffs are more stringent because Indians develop health risks like diabetes and heart disease at a lower BMI due to higher body fat percentages."
                            formula="BMI = Weight (kg) / [Height (m)]²"
                            example="If an Indian adult weighs 70 kg and is 170 cm (1.7m) tall, the BMI calculation is 70 / (1.7 * 1.7) = 24.22. According to Indian standards, this individual is classified as 'Overweight' as 'Normal' ends at 22.9 for Asians."
                            commonMistake="Ignoring Body Composition. BMI does not distinguish between mass from muscle vs mass from fat. A bodybuilder may have an 'Obese' BMI but very low body fat, while an inactive person might have a 'Normal' BMI but high visceral fat (Skinny Fat)."
                            faqs={seoData.faq}
                        />

                        {/* Detailed Indian BMI Table */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
                                <span className="text-xl">📊</span> Revised Indian BMI Cutoffs
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-100">
                                            <th className="py-4 font-black text-slate-700 uppercase tracking-wider">Category</th>
                                            <th className="py-4 font-black text-slate-700 uppercase tracking-wider text-center">BMI Range</th>
                                            <th className="py-4 font-black text-slate-700 uppercase tracking-wider text-right">Health Risk</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        <tr>
                                            <td className="py-4 text-blue-600 font-bold">Underweight</td>
                                            <td className="py-4 text-center font-medium font-mono">&lt; 18.5</td>
                                            <td className="py-4 text-right text-slate-500">Low but Risk of Deficiency</td>
                                        </tr>
                                        <tr className="bg-green-50/30">
                                            <td className="py-4 text-green-600 font-bold italic">Normal Weight</td>
                                            <td className="py-4 text-center font-bold font-mono">18.5 – 22.9</td>
                                            <td className="py-4 text-right text-green-600 font-bold">Optimal</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 text-orange-600 font-bold">Overweight</td>
                                            <td className="py-4 text-center font-medium font-mono">23.0 – 24.9</td>
                                            <td className="py-4 text-right text-slate-500">Increased Risk</td>
                                        </tr>
                                        <tr className="bg-red-50/30">
                                            <td className="py-4 text-red-600 font-bold">Obese</td>
                                            <td className="py-4 text-center font-black font-mono">&gt; 25.0</td>
                                            <td className="py-4 text-right text-red-600 font-bold">High Risk</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-6 text-xs text-slate-400 font-bold italic">
                                * These standards are specific to Indian/Asian populations as per the Consensus Group (ICMR-NIN).
                            </p>
                        </div>
                    </div>

                    {/* Sidebar / Related Tools */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm sticky top-24">
                            <h4 className="font-black text-slate-900 mb-6 text-xs uppercase tracking-widest text-center border-b border-slate-100 pb-4">
                                Related Tools
                            </h4>
                            <div className="space-y-4">
                                <Link to={ROUTES.CALCULATORS.UTILITY.AGE} className="block group p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-blue-50/50 transition-all">
                                    <p className="text-sm font-bold text-slate-700 group-hover:text-blue-900 transition-colors">Age Calculator</p>
                                    <p className="text-xs text-slate-400 group-hover:text-blue-600 mt-1 transition-colors">Check your metabolic age →</p>
                                </Link>
                                <div className="p-4 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 opacity-60">
                                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-tighter mb-1">Coming Soon</p>
                                    <p className="text-sm font-bold text-slate-400">Calorie / TDEE Calc</p>
                                </div>
                                <div className="p-4 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 opacity-60">
                                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-tighter mb-1">Coming Soon</p>
                                    <p className="text-sm font-bold text-slate-400">Ideal Body Weight</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Related Section */}
                <RelatedContent category="HEALTH" currentPath={ROUTES.CALCULATORS.HEALTH.BMI} />
            </div>
        </div>
    );
};

export default BMICalculator;
