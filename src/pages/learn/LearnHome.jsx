import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/paths'
import MetaManager from '../../components/MetaManager'
import { SchemaGenerator, BreadcrumbSchema } from '../../components/SchemaGenerator'

export default function LearnHome() {
    return (
        <div className="min-h-screen bg-slate-50">
            <MetaManager
                title="Learn Finance & Calculations - CalcGuide"
                description="Simple guides on SIP, Loans, Investments and Construction calculations in India."
                canonical="https://calcguide.in/learn"
            />
            <BreadcrumbSchema items={[{ name: 'Home', url: 'https://calcguide.in' }, { name: 'Learn', url: 'https://calcguide.in/learn' }]} />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Financial Guidance & Tutorials</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Understanding how your money grows shouldn't be complicated. Read our simple, step-by-step guides designed for Indian investors.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Featured Article */}
                    <Link to={ROUTES.LEARN.SIP_RETURNS_CALCULATION} className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-48 bg-blue-50 flex items-center justify-center p-6">
                            {/* Simple Abstract SVG Illustration */}
                            <svg className="w-24 h-24 text-blue-500 opacity-80 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                How SIP Returns Are Calculated in India
                            </h2>
                            <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                                Understand the math behind your mutual fund investments. Learn about XIRR, compounding, and see real examples of ₹5000/month SIPs.
                            </p>
                            <span className="text-blue-600 text-sm font-semibold flex items-center">
                                Read Guide <span className="ml-1">→</span>
                            </span>
                        </div>
                    </Link>

                    {/* Article 2 */}
                    <Link to={ROUTES.LEARN.SIP_VS_FD} className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-48 bg-green-50 flex items-center justify-center p-6">
                            <span className="text-6xl group-hover:scale-110 transition-transform duration-500">📈</span>
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                Why SIP Beats FD for Long-Term Wealth
                            </h2>
                            <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                                Inflation is eating your Fixed Deposit returns. Detailed math comparing SIP vs FD outcomes over 10+ years with tax analysis.
                            </p>
                            <span className="text-blue-600 text-sm font-semibold flex items-center">
                                Read Guide <span className="ml-1">→</span>
                            </span>
                        </div>
                    </Link>

                    {/* Article 3 */}
                    <Link to={ROUTES.LEARN.VILLAGE_INT_EXPL} className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-48 bg-orange-50 flex items-center justify-center p-6">
                            <span className="text-6xl group-hover:scale-110 transition-transform duration-500">🌾</span>
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                Village Interest (Sood) Calculation Explained
                            </h2>
                            <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                                What does "₹2 interest" actually mean? Learn how to calculate daily and monthly village interest rates correctly.
                            </p>
                            <span className="text-blue-600 text-sm font-semibold flex items-center">
                                Read Guide <span className="ml-1">→</span>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
