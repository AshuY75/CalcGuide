import MetaManager from '../components/MetaManager'
import LandAreaConverterUI from '../components/calculators/LandAreaConverterUI'

export default function LandAreaConverter() {
    return (
        <div className="min-h-screen bg-slate-50">
            <MetaManager
                title="Land Area Converter India - Bigha to Acre, Sq Ft Calculator | CalcGuide"
                description="Convert local land units like Bigha, Guntha, Katha to Acres, Hectare, and Square Feet. State-wise accurate conversion for UP, Bihar, Maharashtra, and more."
                keywords="land area converter, bigha to acre, guntha to sq ft, katha conversion india"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Land Area Converter</h1>
                    <p className="text-slate-600">Convert Indian land measurements accurately by state</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <LandAreaConverterUI />
            </div>
        </div>
    )
}
