import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import SearchSlider from './SearchSlider'

const TypewriterText = () => {
    const text = "Sahi Hisab, Sahi Faisla"
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)

    useEffect(() => {
        const handleTyping = () => {
            const fullText = text

            setDisplayText(isDeleting
                ? fullText.substring(0, displayText.length - 1)
                : fullText.substring(0, displayText.length + 1)
            )

            setTypingSpeed(isDeleting ? 50 : 150)

            if (!isDeleting && displayText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000)
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
            }
        }

        const timer = setTimeout(handleTyping, typingSpeed)
        return () => clearTimeout(timer)
    }, [displayText, isDeleting, loopNum, typingSpeed, text])

    return (
        <span className="text-sm sm:text-base font-medium text-blue-600 ml-3 hidden sm:inline-block border-r-2 border-blue-600 pr-1 animate-pulse">
            {displayText}
        </span>
    )
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setMobileMenuOpen(false)
        setActiveDropdown(null)
        setIsSearchOpen(false)
    }, [location])

    const navStructure = [
        {
            category: 'Loans & EMI',
            slug: 'loans',
            hubPath: ROUTES.HUBS.LOAN,
            items: [
                { name: 'EMI Calculator', path: ROUTES.CALCULATORS.LOAN.EMI, icon: '💰' },
                { name: 'Prepayment Calc', path: ROUTES.CALCULATORS.LOAN.HOME_LOAN_PREPAYMENT, icon: '🏠' },
                { name: 'Loan Eligibility', path: ROUTES.CALCULATORS.LOAN.ELIGIBILITY, icon: '✅' },
                { name: 'Village Interest', path: ROUTES.CALCULATORS.LOAN.VILLAGE_INTEREST, icon: '🌾' },
                { name: 'Simple Interest', path: ROUTES.CALCULATORS.INVESTMENT.SIMPLE_INTEREST, icon: '📉' },
            ]
        },
        {
            category: 'Investments',
            slug: 'investments',
            hubPath: ROUTES.HUBS.INVESTMENT,
            items: [
                { name: 'SIP Calculator', path: ROUTES.CALCULATORS.INVESTMENT.SIP, icon: '📈' },
                { name: 'Target SIP (1 Cr)', path: ROUTES.CALCULATORS.INVESTMENT.SIP_CRORE, icon: '🎯' },
                { name: 'FD Calculator', path: ROUTES.CALCULATORS.INVESTMENT.FD, icon: '🏛️' },
                { name: 'RD Calculator', path: ROUTES.CALCULATORS.INVESTMENT.RD, icon: '🔄' },
            ]
        },
        {
            category: 'Gold & Build',
            slug: 'gold-build',
            items: [
                { name: 'Gold Price', path: ROUTES.CALCULATORS.GOLD.JEWELLERY, icon: '💍' },
                { name: 'Old Gold', path: ROUTES.CALCULATORS.GOLD.OLD_GOLD, icon: '⚖️' },
                { name: 'Construction', path: ROUTES.CALCULATORS.CONSTRUCTION.COST, icon: '🏗️' },
                { name: 'Land Area', path: ROUTES.CALCULATORS.CONSTRUCTION.LAND_AREA, icon: '🏞️' },
            ]
        },
        {
            category: 'Utility',
            slug: 'utility',
            // No main utility hub requested, but good to have if needed. Skipping for now as user didn't request Utility Hub.
            items: [
                { name: 'Age Calculator', path: ROUTES.CALCULATORS.UTILITY.AGE, icon: '🎂' },
                { name: 'Date Difference', path: ROUTES.CALCULATORS.UTILITY.DATE_DIFF, icon: '📆' },
                { name: 'Exam Eligibility', path: ROUTES.CALCULATORS.UTILITY.EXAM, icon: '📝' },
                { name: 'Percentage', path: ROUTES.CALCULATORS.UTILITY.PERCENTAGE, icon: '➗' },
            ]
        }
    ]

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-slate-200 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to={ROUTES.HOME} className="flex items-center group">
                            <img src="/logo.png" alt="CalcGuide Logo" className="h-10 w-10 mr-2" />
                            <span className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">Calc<span className="text-blue-600">Guide</span></span>
                        </Link>
                        <TypewriterText />
                    </div>

                    <nav className="hidden lg:flex items-center space-x-1">
                        {navStructure.map((cat) => (
                            <div key={cat.slug} className="relative group px-1">
                                <button className="flex items-center px-3 py-2 text-sm font-semibold text-slate-600 hover:text-blue-700 hover:bg-slate-50 rounded-lg transition-all">
                                    {cat.category}
                                    <svg className="ml-1 w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                                    <div className="p-2 grid gap-1">
                                        <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">{cat.category} Tools</div>
                                        {cat.items.map((item) => (
                                            <Link
                                                key={item.path}
                                                to={item.path}
                                                className="flex items-center px-3 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors group/item"
                                            >
                                                <span className="mr-3 opacity-80 group-hover/item:scale-110 transition-transform">{item.icon}</span>
                                                <span className="font-medium">{item.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Learn Link - Desktop */}
                        <Link to={ROUTES.LEARN.HOME} className="flex items-center px-3 py-2 text-sm font-semibold text-slate-600 hover:text-blue-700 hover:bg-slate-50 rounded-lg transition-all">
                            Learn
                        </Link>

                        {/* Search Button - Desktop */}
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="ml-2 p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all flex items-center gap-2 group border border-transparent hover:border-blue-100"
                            title="Search Tools"
                        >
                            <span className="text-lg group-hover:scale-110 transition-transform">🔍</span>
                            <span className="text-xs font-bold uppercase tracking-wider hidden xl:inline-block">Search</span>
                        </button>
                    </nav>

                    <div className="flex items-center gap-2 lg:hidden">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>

                        <button
                            className="p-2 rounded-lg text-slate-600 hover:bg-slate-50 focus:ring-2 focus:ring-blue-100"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <SearchSlider isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-white z-40 overflow-y-auto border-t border-slate-100">
                    <div className="p-4 space-y-6">
                        {navStructure.map((cat) => (
                            <div key={cat.slug} className="space-y-3">
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">{cat.category}</h3>
                                <div className="grid grid-cols-1 gap-2">
                                    {cat.items.map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className="flex items-center px-3 py-3 text-base font-medium text-slate-700 bg-slate-50 rounded-xl hover:bg-blue-50 hover:text-blue-700 active:scale-[0.98] transition-all"
                                        >
                                            <span className="mr-3 text-xl">{item.icon}</span>
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Learn Link - Mobile */}
                        <div className="space-y-3 pt-2 border-t border-slate-100">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">Knowledge</h3>
                            <Link
                                to={ROUTES.LEARN.HOME}
                                className="flex items-center px-3 py-3 text-base font-medium text-slate-700 bg-slate-50 rounded-xl hover:bg-blue-50 hover:text-blue-700 active:scale-[0.98] transition-all"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="mr-3 text-xl">📚</span>
                                Learn
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
