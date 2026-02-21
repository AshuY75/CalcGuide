import React from 'react'
import { Link } from 'react-router-dom'
import SEOSection from '../../components/SEOSection'
import { SchemaGenerator } from '../../components/SchemaGenerator'
import { ROUTES } from '../../routes/paths'

export default function ChildEducationSavings() {
    return (
        <div className="min-h-screen bg-white">
            <SchemaGenerator
                name="How to Save for Child Education? SIP vs SSY vs PPF"
                description="Comparing investment options for your child's future education."
                type="Article"
                url="https://calcguide.in/learn/how-to-save-for-child-education-sip-ssy/"
            />
            <div className="bg-slate-50 border-b border-slate-200 py-12">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-4">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                    </nav>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Planning for the Future: Best Ways to Save for Child Education
                    </h1>
                </div>
            </div>
            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="prose prose-slate prose-lg max-w-none">
                    <p>A comparative look at SIP, SSY, and PPF to help you build the best education fund for your children.</p>
                </div>
            </article>
        </div>
    )
}
