import React, { useState, useEffect } from 'react'
import CalculatorCard from '../components/CalculatorCard'
import { ROUTES } from '../routes/paths'
import { CALCULATORS } from '../data/calculators'

export default function Home() {
    const categories = [
        { id: 'all', name: 'All Tools', icon: '💎' },
        { id: 'STUDENT', name: 'Student', icon: '🎓' },
        { id: 'INVESTMENT', name: 'Investment', icon: '📈' },
        { id: 'LOAN', name: 'Loans & EMI', icon: '�' },
        { id: 'TAX', name: 'Tax & GST', icon: '🏛️' },
        { id: 'CONSTRUCTION', name: 'Land & Build', icon: '🏗️' },
        { id: 'UTILITY', name: 'Life & Utility', icon: '🛠️' },
        { id: 'CREATOR', name: 'Creator & Jobs', icon: '�' },
    ]

    const [activeCategory, setActiveCategory] = useState('all')

    const filteredCalculators = activeCategory === 'all'
        ? CALCULATORS
        : CALCULATORS.filter(calc => calc.category === activeCategory)

    return (
        <div className="min-h-screen bg-slate-50">

            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 sm:py-20 pt-28 sm:pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
                        Sahi Hisab, <span className="text-yellow-300">Sahi Faisla</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                        Practical finance, land, and gold calculators for smart decisions.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="#calculators"
                            className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                        >
                            Explore 50+ Tools
                        </a>
                        <Link
                            to={ROUTES.LEARN.HOME}
                            className="px-8 py-3 bg-blue-600/30 text-white border border-white/20 font-semibold rounded-lg hover:bg-blue-600/50 transition-colors backdrop-blur-sm"
                        >
                            Read Guides
                        </Link>
                    </div>
                </div>
            </section>

            <section id="calculators" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                        Our Calculators
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Tools designed for real Indian needs
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-10 sticky top-16 sm:top-20 z-10 py-4 bg-slate-50/90 backdrop-blur-sm border-b border-slate-200">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm ${activeCategory === cat.id
                                ? 'bg-blue-600 text-white shadow-blue-200 scale-105'
                                : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                                }`}
                        >
                            <span>{cat.icon}</span>
                            {cat.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {filteredCalculators.map((calc) => (
                        <CalculatorCard key={calc.path} {...calc} />
                    ))}
                </div>

                {filteredCalculators.length === 0 && (
                    <div className="text-center py-20 text-slate-500">
                        No calculators found in this category.
                    </div>
                )}
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
import { Link } from 'react-router-dom'
