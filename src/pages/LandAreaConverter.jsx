import { Link } from 'react-router-dom'

import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import LandAreaConverterUI from '../components/calculators/LandAreaConverterUI'
import { ROUTES } from '../routes/paths'

export default function LandAreaConverter() {
    const features = [
        { title: "All India Units", desc: "Supports Bigha, Guntha, Katha, Biswa, Ground, and more.", icon: "🇮🇳" },
        { title: "State-Specific", desc: "Adjusts Bigha size automatically for UP, Bihar, Rajasthan, etc.", icon: "📍" },
        { title: "Instant Conversion", desc: "Convert any local unit to Standard Acres, Hectares, or Sq Feet.", icon: "⚡" },
    ]

    const faqData = [
        { question: "How many Sq Sq Ft in 1 Bigha?", answer: "The size of 1 Bigha varies by state. In UP/Bihar, it is roughly 27,225 Sq Ft. In Rajasthan, it can be 17,424 Sq Ft. Always select your state for accurate results." },
        { question: "What is 1 Acre in Bigha?", answer: "In standard terms often used in North India, 1 Acre is approx 1.6 Bigha. However, this varies significantly across districts." },
        { question: "Which unit is used in Maharashtra?", answer: "Guntha is widely used in Maharashtra. 40 Gunthas make 1 Acre. 1 Guntha is approx 1,089 Sq Ft." },
        { question: "How to convert Hectare to Acre?", answer: "1 Hectare is exactly 2.471 Acres. This is a standard international conversion and does not change by state." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.LOAN} className="hover:text-blue-600">Loan & Construction</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Land Area Converter</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Land Area Converter</h1>
                    <p className="text-slate-600">Convert Indian land measurements accurately by state</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <LandAreaConverterUI />

                        <CalculatorContent
                            title="Land Area Converter"
                            whatIs="Land Area Converter is a specialized tool for Indian farmers and real estate buyers. In India, land units change from state to state. One 'Bigha' in Punjab is different from a 'Bigha' in Bihar. This tool handles these regional variations (Bigha, Guntha, Katha, Biswa) and converts them to standard units like Acres, Hectares, or Square Feet."
                            whoShouldUse="Real estate agents, farmers, and property buyers use this tool to understand the exact size of a plot. If you are buying land in a different state, don't guess—use this calculator to know the exact area in units you understand."
                            example="If you have 5 Bighas of land in Uttar Pradesh, simply select 'Uttar Pradesh' and enter '5 Bigha'. The calculator will instantly tell you that this equals roughly 1.25 Acres (approx, varies by district). Without this conversion, you might miscalculate the land value."
                            commonMistake="Assuming 1 Bigha is the same everywhere. It is NOT. Always select the correct state before converting. Also, ignoring standard units (Sq Ft) which are necessary for legal documentation."
                        />

                        <SEOSection title="Indian Land Units Guide" faq={faqData} features={features}>
                            <h3>Why use this converter?</h3>
                            <p>
                                Official property documents often use <strong>Hectares</strong> or <strong>Square Meters</strong>. However, local deals are discussed in <strong>Bigha, Biswa, or Guntha</strong>. This gap causes confusion. Our tool bridges this gap by providing accurate state-specific conversions.
                            </p>
                        </SEOSection>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Related Tools</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.CONSTRUCTION.COST} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🏗️</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Construction Cost</p>
                                    </div>
                                </Link>
                                <Link to={ROUTES.CALCULATORS.LOAN.VILLAGE_INTEREST} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🌾</span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Village Interest</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
