import CalculatorCard from '../components/CalculatorCard'
import { ROUTES } from '../routes/paths'


export default function Home() {
    // Map of old paths keys to new ROUTES constants
    const calculators = [
        // Phase 2 - High Priority
        {
            title: 'Village Interest',
            desc: 'Sood / Vaddi calculator for village loans',
            icon: '🌾',
            tag: 'New',
            path: ROUTES.CALCULATORS.LOAN.VILLAGE_INTEREST,

        },
        {
            title: 'Land Area Converter',
            desc: 'Bigha, Guntha, Katha conversion by State',
            icon: '🏞️',
            tag: 'New',
            path: ROUTES.CALCULATORS.CONSTRUCTION.LAND_AREA,

        },
        {
            title: 'Gold Jewellery Price',
            desc: 'Calculate real price with Making & GST',
            icon: '💍',
            tag: 'New',
            path: ROUTES.CALCULATORS.GOLD.JEWELLERY,

        },
        {
            title: 'Old Gold Exchange',
            desc: 'Value of old gold with melting loss',
            icon: '⚖️',
            tag: null,
            path: ROUTES.CALCULATORS.GOLD.OLD_GOLD,

        },
        {
            title: 'Construction Cost',
            desc: 'House construction cost estimator',
            icon: '🏗️',
            tag: 'Popular',
            path: ROUTES.CALCULATORS.CONSTRUCTION.COST,
        },
        {
            title: 'Brick Calculator',
            desc: 'Estimate bricks, cement & sand',
            icon: '🧱',
            tag: null,
            path: ROUTES.CALCULATORS.CONSTRUCTION.BRICK,
        },

        // Phase 1
        {
            title: 'EMI Calculator',
            desc: 'Loan EMI with salary risk analysis',
            icon: '💰',
            tag: 'Popular',
            path: ROUTES.CALCULATORS.LOAN.EMI,
        },
        {
            title: 'Home Loan Prepayment',
            desc: 'Save interest & reduce tenure',
            icon: '📉',
            tag: 'New',
            path: ROUTES.CALCULATORS.LOAN.HOME_LOAN_PREPAYMENT,
        },
        {
            title: 'SIP Calculator',
            desc: 'Plan mutual fund investments',
            icon: '📈',
            tag: 'Trending',
            path: ROUTES.CALCULATORS.INVESTMENT.SIP,
        },
        {
            title: 'Loan Eligibility',
            desc: 'Check maximum loan amount',
            icon: '✅',
            tag: null,
            path: ROUTES.CALCULATORS.LOAN.ELIGIBILITY,
        },
        {
            title: 'FD Calculator',
            desc: 'Fixed deposit returns',
            icon: '🏛️',
            tag: null,
            path: ROUTES.CALCULATORS.INVESTMENT.FD,

        },
        {
            title: 'RD Calculator',
            desc: 'Recurring deposit returns',
            icon: '📊',
            tag: null,
            path: ROUTES.CALCULATORS.INVESTMENT.RD,

        },
        {
            title: 'Age Calculator',
            desc: 'Exact age for govt exams',
            icon: '📅',
            tag: null,
            path: ROUTES.CALCULATORS.UTILITY.AGE,

        },
        {
            title: 'SIP ₹1 Crore',
            desc: 'Monthly SIP for target',
            icon: '🎯',
            tag: 'Goal',
            path: ROUTES.CALCULATORS.INVESTMENT.SIP_CRORE,

        },
        {
            title: 'Percentage',
            desc: 'All percentage calculations',
            icon: '➗',
            tag: null,
            path: ROUTES.CALCULATORS.UTILITY.PERCENTAGE,

        },
        {
            title: 'Date Difference',
            desc: 'Calculate days between dates',
            icon: '📆',
            tag: null,
            path: ROUTES.CALCULATORS.UTILITY.DATE_DIFF,

        },
        {
            title: 'Exam Eligibility',
            desc: 'Age for govt exams',
            icon: '📝',
            tag: null,
            path: ROUTES.CALCULATORS.UTILITY.EXAM,

        },
        {
            title: 'Simple Interest',
            desc: 'Calculate simple interest',
            icon: '📉',
            tag: null,
            path: ROUTES.CALCULATORS.INVESTMENT.SIMPLE_INTEREST,

        },
        {
            title: 'Compound Interest',
            desc: 'Power of compounding',
            icon: '🚀',
            tag: null,
            path: ROUTES.CALCULATORS.INVESTMENT.COMPOUND_INTEREST,

        },
    ]

    return (
        <div className="min-h-screen bg-slate-50">

            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
                        Sahi Hisab, <span className="text-yellow-300">Sahi Faisla</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                        Practical finance, land, and gold calculators for smart decisions.
                    </p>
                    <a
                        href="#calculators"
                        className="inline-block px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                    >
                        Explore Calculators
                    </a>
                </div>
            </section>

            <section id="calculators" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                        Our Calculators
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Tools designed for real Indian needs
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {calculators.map((calc) => (
                        <CalculatorCard key={calc.path} {...calc} />
                    ))}
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                            Why CalcGuide?
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            We don't just calculate — we guide you to make smarter decisions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 rounded-xl p-8 text-center border border-slate-200">
                            <div className="text-5xl mb-4">🚜</div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Bharat First</h3>
                            <p className="text-slate-600">
                                Calculators for Village Interest, Land conversions, and Construction.
                            </p>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-8 text-center border border-slate-200">
                            <div className="text-5xl mb-4">📱</div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Mobile First</h3>
                            <p className="text-slate-600">
                                Built for India's mobile users. Fast, simple, works anywhere.
                            </p>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-8 text-center border border-slate-200">
                            <div className="text-5xl mb-4">🔒</div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Privacy Focused</h3>
                            <p className="text-slate-600">
                                No signup, no tracking. Your data stays with you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
