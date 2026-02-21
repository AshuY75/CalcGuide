import React from 'react'
import { Link } from 'react-router-dom'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function TDSCalculator() {
    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="TDS Calculator"
                description="Calculate Tax Deducted at Source for professional fees and rent."
                url="https://calcguide.in/calculators/tax/tds-calculator/"
            />
            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">TDS Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">TDS Calculator</h1>
                    <p className="text-slate-600">Estimate TDS on various sources of income</p>
                </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
                    <p className="text-slate-600 mb-4">TDS estimator for FY 2025-26 is launching soon.</p>
                    <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-semibold">Coming Soon</div>
                </div>
            </div>
        </div>
    )
}
