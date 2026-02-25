import { useState } from 'react'
import { Link } from 'react-router-dom'

import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { ROUTES } from '../routes/paths'

const RATES = { basic: 1500, standard: 1800, premium: 2400 }

const faqData = [
    {
        question: "Does this include the price of land?",
        answer: "No, this is purely the construction cost (Material + Labour). The cost of buying the plot is not included."
    },
    {
        question: "Why is the rate per sq. ft. varying?",
        answer: "Rates depend on the quality of materials (e.g., Marble vs Tiles, Teak wood vs Ply, Branded fittings vs Local). Labour charges also vary by city (Tier 1 cities have higher labour costs)."
    },
    {
        question: "How accurate is this estimate?",
        answer: "This is a thumb-rule estimate (+/- 10%). Actual costs will depend on architectural complexity, soil conditions (affecting foundation cost), and daily fluctuations in steel/cement prices."
    }
]

export default function ConstructionCostCalculator() {
    const [area, setArea] = useState('1000')
    const [quality, setQuality] = useState('standard')
    const [result, setResult] = useState(null)

    const calculateCost = () => {
        const a = parseFloat(area)
        const rate = RATES[quality]
        if (!a) return
        const totalCost = a * rate
        setResult({
            totalCost,
            materialCost: totalCost * 0.70,
            labourCost: totalCost * 0.30,
            breakdown: { cement: totalCost * 0.16, steel: totalCost * 0.14, bricks: totalCost * 0.12, sandAlpha: totalCost * 0.08, finish: totalCost * 0.20 }
        })
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="House Construction Cost Calculator"
                description="Estimate the total cost of building your dream home in India, including material and labour breakdowns."
                url="https://calcguide.in/calculators/construction/construction-cost-calculator/"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.CONSTRUCTION} className="hover:text-blue-600">Construction Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">Construction Cost</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">House Construction Cost</h1>
                    <p className="text-slate-600">Estimate the cost of building your dream home</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Built-up Area (Sq. ft)</label>
                                <input type="number" value={area} onChange={(e) => setArea(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="e.g. 1000" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Construction Quality</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <button onClick={() => setQuality('basic')} className={`p-4 border-2 rounded-xl text-left transition-all ${quality === 'basic' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-blue-200'}`}><div className="font-bold text-slate-900">Basic</div><div className="text-sm text-slate-500 mt-1">₹1500/sq.ft</div></button>
                                    <button onClick={() => setQuality('standard')} className={`p-4 border-2 rounded-xl text-left transition-all ${quality === 'standard' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-blue-200'}`}><div className="font-bold text-slate-900">Standard</div><div className="text-sm text-slate-500 mt-1">₹1800/sq.ft</div></button>
                                    <button onClick={() => setQuality('premium')} className={`p-4 border-2 rounded-xl text-left transition-all ${quality === 'premium' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-blue-200'}`}><div className="font-bold text-slate-900">Premium</div><div className="text-sm text-slate-500 mt-1">₹2400/sq.ft</div></button>
                                </div>
                            </div>
                            <button onClick={calculateCost} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md">Calculate Estimate</button>
                        </div>
                        {result && (
                            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Cost Breakdown</h3>
                                <div className="space-y-4">
                                    <div className="relative pt-1"><div className="flex mb-2 items-center justify-between"><div><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">Material Cost</span></div><div className="text-right"><span className="text-xs font-semibold inline-block text-blue-600">₹{Math.round(result.materialCost).toLocaleString('en-IN')}</span></div></div><div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200"><div style={{ width: "70%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div></div></div>
                                    <div className="relative pt-1"><div className="flex mb-2 items-center justify-between"><div><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">Labour Cost</span></div><div className="text-right"><span className="text-xs font-semibold inline-block text-green-600">₹{Math.round(result.labourCost).toLocaleString('en-IN')}</span></div></div><div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200"><div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div></div></div>
                                    <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100"><div className="text-sm text-slate-600">Cement (~16%)</div><div className="text-sm font-medium text-right">₹{Math.round(result.breakdown.cement).toLocaleString('en-IN')}</div><div className="text-sm text-slate-600">Steel (~14%)</div><div className="text-sm font-medium text-right">₹{Math.round(result.breakdown.steel).toLocaleString('en-IN')}</div><div className="text-sm text-slate-600">Bricks (~12%)</div><div className="text-sm font-medium text-right">₹{Math.round(result.breakdown.bricks).toLocaleString('en-IN')}</div></div>
                                </div>
                            </div>
                        )}

                        <CalculatorContent
                            title="Construction Cost Calculator"
                            whatIs="This calculator provides an estimated cost for building a residential house in India. It breaks down the total expense into Material cost (Cement, Steel, Bricks) and Labour cost, helping you plan your budget effectively before starting construction."
                            whoShouldUse="Homeowners planning to build a house on their plot, contractors looking for quick estimates, or civil engineering students wishing to understand rough cost estimation thumb rules."
                            example="For a 1000 sq. ft. house with 'Standard' quality (₹1800/sq. ft.), the total cost is approx ₹18 Lakhs. Out of this, roughly ₹12.6 Lakhs goes to materials and ₹5.4 Lakhs to labour."
                            commonMistake="Ignoring the cost of simple things like Compound Walls, Gates, and Borewells which are usually NOT included in the per sq. ft. rate. Also, prices fluctuate daily; valid for 2024-25 estimates only."
                        />
                    </div>
                    <div className="md:col-span-1">
                        {/* Result Panel - Reserved Height */}
                        <div className={`p-6 rounded-xl border-2 text-center sticky top-6 min-h-[220px] flex flex-col justify-center transition-colors duration-300 ${result ? 'bg-blue-600 border-blue-600 text-white' : 'bg-slate-100 border-slate-200'}`}>
                            {result ? (
                                <div className="animate-in fade-in zoom-in duration-300">
                                    <p className="text-blue-100 uppercase tracking-wide text-sm font-medium">Estimated Cost</p>
                                    <p className="text-3xl font-extrabold mt-2">₹{Math.round(result.totalCost).toLocaleString('en-IN')}</p>
                                    <p className="text-xs text-blue-200 mt-4 opacity-80">*Approximation based on {quality} rates.</p>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center">
                                    <span className="text-3xl mb-2 opacity-30">🏠</span>
                                    <p className="text-slate-400 font-medium">Enter area & click Calculate</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <SEOSection title="Construction Cost Guide" faq={faqData}>
                    <h3>How much does it cost to build a house in 2025?</h3>
                    <p>
                        The average cost of construction in India ranges from <strong>₹1,500 to ₹2,500 per sq. ft.</strong> This includes the cost of building materials (cement, steel, sand, bricks) and labour (masons, electricians, plumbers).
                    </p>
                    <h3>Cost Breakdown Structure</h3>
                    <p>
                        Typically, <strong>70% of the budget goes into materials</strong> and <strong>30% goes into labour</strong>. Cement and steel are the biggest material expenses, consuming nearly 30% of the total budget combined. Finishing costs (flooring, painting, wood work) are highly variable based on your taste.
                    </p>
                </SEOSection>
            </div>
        </div>
    )
}
