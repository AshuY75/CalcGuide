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
            preload: () => import('../pages/VillageInterestCalculator')
        },
        {
            title: 'Land Area Converter',
            desc: 'Bigha, Guntha, Katha conversion by State',
            icon: '🏞️',
            tag: 'New',
            path: ROUTES.CALCULATORS.CONSTRUCTION.LAND_AREA,
            preload: () => import('../pages/LandAreaConverter')
        },
        {
            title: 'Gold Jewellery Price',
            desc: 'Calculate real price with Making & GST',
            icon: '💍',
            tag: 'New',
            path: ROUTES.CALCULATORS.GOLD.JEWELLERY,
            preload: () => import('../pages/GoldJewelleryCalculator')
        },
        {
            title: 'Old Gold Exchange',
            desc: 'Value of old gold with melting loss',
            icon: '⚖️',
            tag: null,
            path: ROUTES.CALCULATORS.GOLD.OLD_GOLD,
            preload: () => import('../pages/OldGoldCalculator')
        },
        {
            title: 'Construction Cost',
            desc: 'House construction cost estimator',
            icon: '🏗️',
            tag: 'Popular',
            path: ROUTES.CALCULATORS.CONSTRUCTION.COST,
            preload: () => import('../pages/ConstructionCostCalculator')
        },
        {
            title: 'Brick Calculator',
            desc: 'Estimate bricks, cement & sand',
            icon: '🧱',
            tag: null,
            path: ROUTES.CALCULATORS.CONSTRUCTION.BRICK,
            preload: () => import('../pages/BrickCalculator')
        },

        // Phase 1
        {
            title: 'EMI Calculator',
            desc: 'Loan EMI with salary risk analysis',
            icon: '💰',
            tag: 'Popular',
            path: ROUTES.CALCULATORS.LOAN.EMI,
            preload: () => import('../pages/EMICalculator')
        },
        {
            title: 'SIP Calculator',
            desc: 'Plan mutual fund investments',
            icon: '📈',
            tag: 'Trending',
            path: ROUTES.CALCULATORS.INVESTMENT.SIP,
            preload: () => import('../pages/SIPCalculator')
        },
        {
            title: 'Loan Eligibility',
            desc: 'Check maximum loan amount',
            icon: '✅',
            tag: null,
            path: ROUTES.CALCULATORS.LOAN.ELIGIBILITY,
            preload: () => import('../pages/LoanEligibility')
        },
        {
            title: 'FD Calculator',
            desc: 'Fixed deposit returns',
            icon: '🏛️',
            tag: null,
            path: ROUTES.CALCULATORS.INVESTMENT.FD,
            preload: () => import('../pages/FDCalculator')
        },
        {
            title: 'RD Calculator',
            desc: 'Recurring deposit returns',
            icon: '📊',
            tag: null,
            path: ROUTES.CALCULATORS.INVESTMENT.RD,
            preload: () => import('../pages/RDCalculator')
        },
        {
            title: 'Age Calculator',
            desc: 'Exact age for govt exams',
            icon: '📅',
            tag: null,
            path: ROUTES.CALCULATORS.UTILITY.AGE,
            preload: () => import('../pages/AgeCalculator')
        },
        {
            title: 'SIP ₹1 Crore',
            desc: 'Monthly SIP for target',
            icon: '🎯',
            tag: 'Goal',
            path: ROUTES.CALCULATORS.INVESTMENT.SIP_CRORE,
            preload: () => import('../pages/SIP1CrCalculator')
        },
        {
            title: 'Percentage',
            desc: 'All percentage calculations',
            icon: '➗',
            tag: null,
            path: ROUTES.CALCULATORS.UTILITY.PERCENTAGE,
            preload: () => import('../pages/PercentageCalculator')
        },
        {
            title: 'Date Difference',
            desc: 'Calculate days between dates',
            icon: '📆',
            tag: null,
            path: ROUTES.CALCULATORS.UTILITY.DATE_DIFF,
            preload: () => import('../pages/DateDifferenceCalculator')
        },
        {
            title: 'Exam Eligibility',
            desc: 'Age for govt exams',
            icon: '📝',
            tag: null,
            path: ROUTES.CALCULATORS.UTILITY.EXAM,
            preload: () => import('../pages/ExamEligibility')
        },
        {
            title: 'Simple Interest',
            desc: 'Calculate simple interest',
            icon: '📉',
            tag: null,
            path: ROUTES.CALCULATORS.INVESTMENT.SIMPLE_INTEREST,
            preload: () => import('../pages/SimpleInterestCalculator')
        },
        {
            title: 'Compound Interest',
            desc: 'Power of compounding',
            icon: '🚀',
            tag: null,
            path: ROUTES.CALCULATORS.INVESTMENT.COMPOUND_INTEREST,
            preload: () => import('../pages/CompoundInterestCalculator')
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
