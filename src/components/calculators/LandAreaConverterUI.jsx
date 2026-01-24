import { useState, useEffect } from 'react'
import SEOSection from '../SEOSection'

const STATE_DATA = {
    'Uttar Pradesh': { units: [{ name: 'Bigha (Pucca)', sqft: 27225 }, { name: 'Bigha (Kaccha)', sqft: 9075 }, { name: 'Biswa (Pucca)', sqft: 1361.25 }, { name: 'Biswansi', sqft: 68.06 }] },
    'Bihar': { units: [{ name: 'Katha (Typical)', sqft: 1361.25 }, { name: 'Dhur', sqft: 68.06 }, { name: 'Bigha', sqft: 27225 }] },
    'Maharashtra': { units: [{ name: 'Guntha', sqft: 1089 }, { name: 'Acre', sqft: 43560 }, { name: 'Hectare', sqft: 107639 }] },
    'Rajasthan': { units: [{ name: 'Bigha (Pucca)', sqft: 27225 }, { name: 'Bigha (Kaccha)', sqft: 17424 }, { name: 'Biswa', sqft: 1361.25 }] },
    'West Bengal': { units: [{ name: 'Katha', sqft: 720 }, { name: 'Bigha', sqft: 14400 }, { name: 'Chatak', sqft: 45 }] },
    'Tamil Nadu': { units: [{ name: 'Ground', sqft: 2400 }, { name: 'Cent', sqft: 435.6 }, { name: 'Acre', sqft: 43560 }] },
    'Punjab/Haryana': { units: [{ name: 'Bigha', sqft: 10890 }, { name: 'Kanal', sqft: 5445 }, { name: 'Marla', sqft: 272.25 }] }
}

export default function LandAreaConverterUI({
    defaultState = 'Uttar Pradesh',
    defaultUnit = 'Bigha (Pucca)',
    showSEOContent = true
}) {
    const [selectedState, setSelectedState] = useState(defaultState)
    const [selectedUnit, setSelectedUnit] = useState(defaultUnit)
    const [inputValue, setInputValue] = useState('')
    const [result, setResult] = useState(null)

    // Sync state only if defaults change drastically, but usually internal state manages it.
    // However, if we want to reset when default changes:
    useEffect(() => {
        if (defaultState && STATE_DATA[defaultState]) {
            // Only override if component mounts or explicit logic requires it.
            // Here, let's keep it simple. Local state takes precedence unless we want to force control.
        }
    }, [defaultState])


    useEffect(() => {
        if (STATE_DATA[selectedState]) {
            // When state changes, try to keep unit or reset to first
            const hasCurrentUnit = STATE_DATA[selectedState].units.find(u => u.name === selectedUnit)
            if (!hasCurrentUnit) {
                setSelectedUnit(STATE_DATA[selectedState].units[0].name)
            }
            setResult(null)
            setInputValue('')
        }
    }, [selectedState])

    const calculate = () => {
        const val = parseFloat(inputValue)
        if (!val) return
        const unitInfo = STATE_DATA[selectedState].units.find(u => u.name === selectedUnit)
        if (!unitInfo) return
        const totalSqFt = val * unitInfo.sqft
        setResult({ sqft: totalSqFt, acre: totalSqFt / 43560, hectare: totalSqFt / 107639, guntha: totalSqFt / 1089 })
    }

    const faqData = [
        {
            question: "How many Bighas are in 1 Acre?",
            answer: "It depends entirely on the state. For example, in UP (Pucca Bigha), 1 Acre is approx 1.6 Bighas. In Rajasthan (Kaccha Bigha), 1 Acre can be 2.5 Bighas. Always check the state-specific unit."
        },
        {
            question: "What is the standard size of 1 Katha?",
            answer: "In Bihar (Patna), 1 Katha is usually 1361.25 sq ft. However, in West Bengal, 1 Katha is 720 sq ft. This calculator allows you to select the state for accurate conversion."
        },
        {
            question: "Why do land units vary so much in India?",
            answer: "Land measurement units like Bigha, Katha, and Guntha are historical and regional. Official government records often use Hectares or Sq. Meters to standardize these measurements."
        }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Select State</label>
                        <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white">
                            {Object.keys(STATE_DATA).map(state => <option key={state} value={state}>{state}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Select Unit</label>
                        <select value={selectedUnit} onChange={(e) => setSelectedUnit(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white">
                            {STATE_DATA[selectedState].units.map(u => <option key={u.name} value={u.name}>{u.name}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Area Value</label>
                        <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder={`Enter ${selectedUnit}`} />
                    </div>
                    <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md">Convert</button>
                </div>

                {result && (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Conversion Results</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center"><span className="text-slate-600">Square Feet</span><span className="font-bold text-xl text-blue-900">{result.sqft.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span></div>
                            <div className="flex justify-between items-center"><span className="text-slate-600">Acres</span><span className="font-bold text-slate-900">{result.acre.toFixed(4)}</span></div>
                            <div className="flex justify-between items-center"><span className="text-slate-600">Hectares</span><span className="font-bold text-slate-900">{result.hectare.toFixed(4)}</span></div>
                            <div className="flex justify-between items-center"><span className="text-slate-600">Guntha</span><span className="font-bold text-slate-900">{result.guntha.toFixed(2)}</span></div>
                        </div>
                    </div>
                )}
                {!result && <div className="hidden md:flex bg-slate-50 border border-slate-200 rounded-xl p-6 items-center justify-center text-slate-400">Enter value to convert</div>}
            </div>

            {showSEOContent && (
                <div className="mt-8">
                    <SEOSection title="About Land Area Converter" faq={faqData}>
                        <h3>Understanding Indian Land Units</h3>
                        <p>
                            In India, land measurement units change every few hundred kilometers. While <strong>Acres</strong> and <strong>Hectares</strong> are standard international units, most rural land deals in India happen in local units like <em>Bigha</em>, <em>Katha</em>, <em>Guntha</em>, or <em>Biswa</em>.
                        </p>
                        <h3>Important Conversions</h3>
                        <ul>
                            <li><strong>1 Acre</strong> = 43,560 Square Feet</li>
                            <li><strong>1 Hectare</strong> = 2.47 Acres</li>
                            <li><strong>1 Guntha</strong> = 1,089 Square Feet (common in Maharashtra)</li>
                            <li><strong>1 Ground</strong> = 2,400 Square Feet (common in Tamil Nadu)</li>
                        </ul>
                        <h3>How to use this tool?</h3>
                        <ol>
                            <li>First, select the <strong>State</strong> where the land is located. This is critical because a 'Bigha' in UP is different from a 'Bigha' in Bihar.</li>
                            <li>Select the local unit you want to convert from.</li>
                            <li>Enter the area value.</li>
                            <li>Get instant results in standard Square Feet, Acres, and Hectares.</li>
                        </ol>
                    </SEOSection>
                </div>
            )}
        </div>
    )
}
