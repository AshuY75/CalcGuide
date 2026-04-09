import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 mt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8">
                    {/* Brand Section */}
                    <div className="col-span-2 lg:col-span-1 border-b lg:border-none pb-8 lg:pb-0">
                        <Link to={ROUTES.HOME} className="flex items-center group mb-4">
                            <span className="text-2xl font-black text-slate-900 tracking-tight">Calc<span className="text-blue-600">Guide</span></span>
                        </Link>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-xs">
                            India's most accurate calculator suite for loans, tax, and investments. 160+ tools built for 2025 compliance.
                        </p>
                    </div>

                    {/* Columns */}
                    <div>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-6">Investments</h4>
                        <nav className="flex flex-col space-y-4">
                            <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">SIP Calculator</Link>
                            <Link to={ROUTES.CALCULATORS.INVESTMENT.FD} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">FD Calculator</Link>
                            <Link to={ROUTES.CALCULATORS.INVESTMENT.NPS} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">NPS Calculator</Link>
                            <Link to={ROUTES.CALCULATORS.INVESTMENT.PPF} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">PPF Calculator</Link>
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-6">Tax & Business</h4>
                        <nav className="flex flex-col space-y-4">
                            <Link to={ROUTES.CALCULATORS.TAX.INCOME_TAX} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Income Tax (2025)</Link>
                            <Link to={ROUTES.CALCULATORS.BUSINESS.GST_COMPOSITION} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">GST Composition</Link>
                            <Link to={ROUTES.CALCULATORS.BUSINESS.MSME_PMEGP} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">PMEGP Subsidy</Link>
                            <Link to={ROUTES.CALCULATORS.BUSINESS.PROFESSIONAL_RATE} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Freelance Rate</Link>
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-6">Real Estate</h4>
                        <nav className="flex flex-col space-y-4">
                            <Link to={ROUTES.CALCULATORS.CONSTRUCTION.COST} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Construction Cost</Link>
                            <Link to={ROUTES.CALCULATORS.TAX.PROPERTY_TAX} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">LTCG Indexation</Link>
                            <Link to={ROUTES.CALCULATORS.REAL_ESTATE.STAMP_DUTY} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Stamp Duty</Link>
                            <Link to={ROUTES.CALCULATORS.REAL_ESTATE.RENT_VS_BUY} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Rent vs Buy</Link>
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-6">Utility</h4>
                        <nav className="flex flex-col space-y-4">
                            <Link to={ROUTES.CALCULATORS.UTILITY.WEDDING_PLANNER} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Wedding Planner</Link>
                            <Link to={ROUTES.CALCULATORS.UTILITY.SOLAR_ROI} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Solar Panel ROI</Link>
                            <Link to={ROUTES.CALCULATORS.HEALTH.BMI} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">BMI Calculator</Link>
                            <Link to={ROUTES.LEGAL.ABOUT} className="text-sm font-black text-blue-600 hover:text-blue-700 transition-colors">About Us</Link>
                        </nav>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-6">
                        <Link to={ROUTES.LEGAL.PRIVACY} className="text-xs font-bold text-slate-400 hover:text-slate-600">Privacy</Link>
                        <Link to={ROUTES.LEGAL.TERMS} className="text-xs font-bold text-slate-400 hover:text-slate-600">Terms</Link>
                        <Link to={ROUTES.LEGAL.FEEDBACK} className="text-xs font-bold text-slate-400 hover:text-slate-600">Feedback</Link>
                    </div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
                        © {new Date().getFullYear()} CalcGuide • Sahi Hisab, Sahi Faisla
                    </p>
                </div>
            </div>
        </footer>
    )
}
