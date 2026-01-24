import { useState } from 'react'
const Helmet = () => null;
import SEOSection from '../components/SEOSection'

export default function BrickCalculator() {
    // ... [Logic] ...
    const [length, setLength] = useState('10')
    const [height, setHeight] = useState('10')
    const [thickness, setThickness] = useState('9')
    const [ratio, setRatio] = useState('6')
    const [result, setResult] = useState(null)

    const calculate = () => {
        const l = parseFloat(length)
        const h = parseFloat(height)
        const t = parseFloat(thickness)
        if (!l || !h) return
        const thicknessInFeet = t / 12
        const wallVolumeCft = l * h * thicknessInFeet
        const bricksPerCft = 13.5
        let totalBricks = Math.ceil(wallVolumeCft * bricksPerCft)
        totalBricks = Math.ceil(totalBricks * 1.05)
        const wetMortarRatio = 0.30
        const wetMortarVolume = wallVolumeCft * wetMortarRatio
        const dryMortarVolume = wetMortarVolume * 1.33
        const sumRatio = 1 + parseFloat(ratio)
        const cementPart = 1 / sumRatio
        const sandPart = parseFloat(ratio) / sumRatio
        const cementVolume = dryMortarVolume * cementPart
        const sandVolume = dryMortarVolume * sandPart
        const cementBags = Math.ceil(cementVolume / 1.226)
        setResult({ totalBricks, cementBags, sandCft: Math.ceil(sandVolume), wallVolume: wallVolumeCft.toFixed(2) })
    }

    const faqData = [
        {
            question: "How many bricks are in 1 sq ft?",
            answer: "For a 4.5 inch (single brick) wall, you need approx 4.5 to 5 bricks per sq ft. For a 9 inch (double brick) wall, you need approx 9 to 10 bricks per sq ft."
        },
        {
            question: "What is the standard size of a brick?",
            answer: "In India, the standard modular brick size is 190 × 90 × 90 mm. With mortar, it becomes 200 × 100 × 100 mm."
        },
        {
            question: "How much cement do I need?",
            answer: "The amount of cement depends on the mortar ratio. For a standard 1:6 ratio (1 part cement, 6 parts sand), you typically need around 1.5 bags of cement for every 1000 bricks in a 9-inch wall."
        }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <Helmet>
                <title>Brick Calculator - Estimate Bricks, Cement & Sand | CalcGuide</title>
                <meta name="description" content="Calculate the number of bricks required for your wall. Get an instant estimate of Cement bags and Sand (cft) needed for 4 inch and 9 inch walls." />
                <link rel="canonical" href="https://calcguide.com/brick" />
            </Helmet>

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Brick Calculator</h1>
                    <p className="text-slate-600">Calculate bricks, cement and sand required for a wall</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Wall Length (ft)</label><input type="number" value={length} onChange={(e) => setLength(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" /></div>
                            <div><label className="block text-sm font-semibold text-slate-700 mb-2">Wall Height (ft)</label><input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" /></div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Wall Thickness</label>
                            <div className="flex bg-slate-100 p-1 rounded-lg"><button onClick={() => setThickness('4.5')} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${thickness === '4.5' ? 'bg-white text-blue-900 shadow-sm' : 'text-slate-600'}`}>4.5 Inches</button><button onClick={() => setThickness('9')} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${thickness === '9' ? 'bg-white text-blue-900 shadow-sm' : 'text-slate-600'}`}>9 Inches</button></div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Mortar Ratio (Cement : Sand)</label>
                            <select value={ratio} onChange={(e) => setRatio(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white"><option value="6">1:6 (Standard 9" Wall)</option><option value="4">1:4 (Strong / 4.5" Wall)</option><option value="3">1:3 (Very Strong)</option></select>
                        </div>
                        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md">Calculate Quantity</button>
                    </div>

                    {result && (
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                                <div className="bg-orange-600 px-6 py-4 text-white text-center"><p className="text-orange-100 text-sm font-medium uppercase">Total Bricks Required</p><p className="text-4xl font-extrabold mt-1">{result.totalBricks.toLocaleString('en-IN')}</p><p className="text-xs text-orange-200 mt-1">(Including 5% wastage)</p></div>
                                <div className="p-6"><h4 className="font-bold text-slate-800 mb-4">Material Estimate</h4><div className="grid grid-cols-2 gap-4"><div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center"><div className="text-slate-500 text-xs uppercase font-bold mb-1">Cement</div><div className="text-2xl font-bold text-slate-900">{result.cementBags}</div><div className="text-xs text-slate-500">Bags</div></div><div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center"><div className="text-slate-500 text-xs uppercase font-bold mb-1">Sand</div><div className="text-2xl font-bold text-slate-900">{result.sandCft}</div><div className="text-xs text-slate-500">Cubic Ft</div></div></div></div>
                            </div>
                        </div>
                    )}
                </div>

                <SEOSection title="Brick Calculation Basics" faq={faqData}>
                    <h3>Why calculation is needed?</h3>
                    <p>
                        Ordering too many bricks leads to waste, and ordering too few halts construction. A calculator helps you plan logistics (how many trucks) and budget effectively.
                    </p>
                    <h3>Understanding Wall Types</h3>
                    <ul>
                        <li><strong>9-inch Wall (Full Brick):</strong> Used for main load-bearing walls. Needs 1:6 cement mortar.</li>
                        <li><strong>4.5-inch Wall (Half Brick):</strong> Used for internal partitions. Needs stronger 1:4 mortar for stability.</li>
                    </ul>
                </SEOSection>
            </div>
        </div>
    )
}
