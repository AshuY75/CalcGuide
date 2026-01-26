import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/paths';
import { SchemaGenerator } from '../components/SchemaGenerator';

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            <SchemaGenerator
                type="AboutPage"
                name="About CalcGuide"
                description="Learn about CalcGuide's mission to simplify financial and utility calculations for Indian users."
                url="https://calcguide.in/about"
            />

            {/* Header Section */}
            <div className="bg-slate-50 border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">About CalcGuide</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Empowering Indian families with simple, accurate, and free decision-making tools.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

                {/* Mission */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
                    <p className="text-slate-700 leading-relaxed text-lg">
                        Finance can be complicated. From understanding Home Loan EMIs to calculating SIP returns or even converting land measurements (Bigha to Acre), the math often gets in the way of the decision.
                    </p>
                    <p className="text-slate-700 leading-relaxed text-lg mt-4">
                        At <strong>CalcGuide</strong>, our mission is to remove that complexity. We build tools that don't just give you a number but help you understand <em>what that number means</em> for your future.
                    </p>
                </section>

                {/* Who We Are */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Who We Are</h2>
                    <p className="text-slate-700 leading-relaxed">
                        We are a small team of engineers and finance enthusiasts based in India. We realized that most online calculators are either too generic, riddled with ads, or don't account for Indian specificities (like GST on gold or village interest rates).
                    </p>
                    <p className="text-slate-700 leading-relaxed mt-4">
                        We started CalcGuide to provide a cleaner, faster, and more trustworthy alternative.
                    </p>
                </section>

                {/* Our Values */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Promise</h2>
                    <div className="grid sm:grid-cols-2 gap-6 bg-slate-50 border border-slate-100 rounded-xl p-6">
                        <div>
                            <h3 className="font-bold text-blue-900 mb-2">🔒 Privacy First</h3>
                            <p className="text-sm text-slate-600">
                                We do not store your data. All calculations happen right on your device.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-green-900 mb-2">⚡ Speed & Accuracy</h3>
                            <p className="text-sm text-slate-600">
                                Optimized for slow networks. Verified formulas for maximum precision.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-purple-900 mb-2">🇮🇳 Built for India</h3>
                            <p className="text-sm text-slate-600">
                                Tailored for Indian financial rules, units, and languages.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">🚫 No Clutter</h3>
                            <p className="text-sm text-slate-600">
                                A clean interface focused on the answer, not the ads.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="border-t border-slate-200 pt-8 text-center">
                    <p className="text-slate-600 mb-4">Have a suggestion or found an error?</p>
                    <Link
                        to={ROUTES.LEGAL.FEEDBACK}
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                        Contact Us
                    </Link>
                </div>

            </div>
        </div>
    );
}
