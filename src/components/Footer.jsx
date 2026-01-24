import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 mt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    {/* SECTION 1: Brand + Purpose */}
                    <div className="col-span-1 md:col-span-1 space-y-4">
                        <div>
                            <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
                                <span>CalcGuide</span>
                            </h3>
                            <p className="text-sm font-medium text-blue-700 mt-1">Sahi Hisab, Sahi Faisla</p>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Free finance and utility calculators for India with decision guidance. Helping you make smarter financial moves.
                        </p>
                    </div>

                    {/* SECTION 2: Popular Calculators */}
                    <div className="col-span-1">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Popular Tools</h4>
                        <nav className="flex flex-col space-y-3">
                            <Link to={ROUTES.CALCULATORS.LOAN.EMI} onClick={() => window.scrollTo(0, 0)} className="text-slate-600 hover:text-blue-700 font-medium text-sm transition-colors py-1">EMI Calculator</Link>
                            <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} onClick={() => window.scrollTo(0, 0)} className="text-slate-600 hover:text-blue-700 font-medium text-sm transition-colors py-1">SIP Calculator</Link>
                            <Link to={ROUTES.CALCULATORS.INVESTMENT.FD} onClick={() => window.scrollTo(0, 0)} className="text-slate-600 hover:text-blue-700 font-medium text-sm transition-colors py-1">FD Calculator</Link>
                            <Link to={ROUTES.CALCULATORS.INVESTMENT.RD} onClick={() => window.scrollTo(0, 0)} className="text-slate-600 hover:text-blue-700 font-medium text-sm transition-colors py-1">RD Calculator</Link>
                            <Link to={ROUTES.CALCULATORS.GOLD.JEWELLERY} onClick={() => window.scrollTo(0, 0)} className="text-slate-600 hover:text-blue-700 font-medium text-sm transition-colors py-1">Gold Calculator</Link>
                            <Link to={ROUTES.CALCULATORS.UTILITY.AGE} onClick={() => window.scrollTo(0, 0)} className="text-slate-600 hover:text-blue-700 font-medium text-sm transition-colors py-1">Age Calculator</Link>
                        </nav>
                    </div>

                    {/* SECTION 3: Support & Legal */}
                    <div className="col-span-1">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Legal & Support</h4>
                        <nav className="flex flex-col space-y-3">
                            <Link to={ROUTES.LEGAL.PRIVACY} onClick={() => window.scrollTo(0, 0)} className="text-slate-500 hover:text-slate-900 text-sm transition-colors py-1">Privacy Policy</Link>
                            <Link to={ROUTES.LEGAL.TERMS} onClick={() => window.scrollTo(0, 0)} className="text-slate-500 hover:text-slate-900 text-sm transition-colors py-1">Terms of Service</Link>
                            <Link to={ROUTES.LEGAL.FEEDBACK} onClick={() => window.scrollTo(0, 0)} className="text-slate-500 hover:text-slate-900 text-sm transition-colors py-1">Feedback / Contact</Link>
                        </nav>
                    </div>

                    {/* SECTION 4: Disclaimer */}
                    <div className="col-span-1">
                        <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-5">
                            <div className="flex items-start gap-3">
                                <span className="text-xl">⚠️</span>
                                <div>
                                    <h5 className="text-xs font-bold text-yellow-800 uppercase tracking-wide mb-1">Disclaimer</h5>
                                    <p className="text-xs text-yellow-800/80 leading-relaxed">
                                        CalcGuide provides calculators for informational purposes only. Results are estimates. Please consult a qualified professional before making financial decisions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="mt-12 pt-8 border-t border-slate-100 text-center">
                    <p className="text-sm text-slate-400 font-medium">
                        © {new Date().getFullYear()} CalcGuide • Made with ❤️ for India
                    </p>
                </div>
            </div>
        </footer>
    )
}
