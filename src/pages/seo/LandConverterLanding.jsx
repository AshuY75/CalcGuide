
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/paths'
import LandAreaConverterUI from '../../components/calculators/LandAreaConverterUI'
import SEOSection from '../../components/SEOSection'

export default function LandConverterLanding() {
    const faqData = [
        {
            question: "How much is 1 Bigha in Uttar Pradesh?",
            answer: "In UP, 1 Pucca Bigha is typically 27,225 Sq Ft or approximately 0.625 Acres. However, 'Kaccha Bigha' varies by district and is usually one-third of a Pucca Bigha."
        },
        {
            question: "Is Bigha size same in UP and Bihar?",
            answer: "No. In western UP, 1 Bigha is larger (~27,000 sq ft). In Bihar, a Bigha can be smaller depending on local Katha measurement (often ~27,220 sq ft, but varies)."
        },
        {
            question: "What is Biswa to Bigha conversion?",
            answer: "In Uttar Pradesh standard measurement, 20 Biswa equals 1 Pucca Bigha."
        }
    ]

    const schema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Bigha to Acre Converter (Uttar Pradesh)",
        "url": "https://calcguide.in/bigha-to-acre-uttar-pradesh",
        "description": "Convert Bigha, Biswa, and Katha to Acre specifically for Uttar Pradesh land measurements."
    }

    return (
        <div className="min-h-screen bg-slate-50">
            
            <script type="application/ld+json">{JSON.stringify(schema)}</script>

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Bigha to Acre (Uttar Pradesh)</h1>
                    <p className="text-slate-600">Convert measurements specifically for UP land records</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <LandAreaConverterUI defaultState="Uttar Pradesh" showSEOContent={false} />

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <SEOSection title="Land Measurement in Uttar Pradesh" faq={faqData}>
                        <h3>Pucca vs Kaccha Bigha</h3>
                        <p>
                            In Uttar Pradesh, land is often measured in two types of Bighas:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700 mt-2">
                            <li><strong>Pucca Bigha:</strong> Standardized mostly at 27,225 Sq. Ft. It is used for official registries in many districts including Meerut and Muzaffarnagar. (1 Pucca Bigha = 3 Kaccha Bighas).</li>
                            <li><strong>Kaccha Bigha:</strong> A smaller, informal unit roughly 800-900 Sq. Yards. It is often used between farmers for rough estimation in rural areas.</li>
                        </ul>
                        <h3>Common Conversions in UP</h3>
                        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                            <div className="bg-slate-50 p-2 border rounded">20 Biswansi = 1 Biswa</div>
                            <div className="bg-slate-50 p-2 border rounded">20 Biswa = 1 Bigha</div>
                            <div className="bg-slate-50 p-2 border rounded">1.6 Bigha = 1 Acre (Approx)</div>
                            <div className="bg-slate-50 p-2 border rounded">3.95 Bigha = 1 Hectare</div>
                        </div>
                    </SEOSection>
                </div>
            </div>
        </div>
    )
}
