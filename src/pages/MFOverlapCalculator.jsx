import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CalculatorContent from '../components/CalculatorContent'
import SEOSection from '../components/SEOSection'
import { SchemaGenerator } from '../components/SchemaGenerator'
import { ROUTES } from '../routes/paths'

export default function MFOverlapCalculator() {
    const [fundAStocks, setFundAStocks] = useState('HDFC Bank, Reliance, ICICI Bank, Infosys, TCS')
    const [fundBStocks, setFundBStocks] = useState('Reliance, ICICI Bank, Axis Bank, SBI, Infosys')
    const [result, setResult] = useState(null)
    const resultRef = useRef(null)

    const calculateOverlap = () => {
        const listA = fundAStocks.split(',').map(s => s.trim().toLowerCase()).filter(s => s)
        const listB = fundBStocks.split(',').map(s => s.trim().toLowerCase()).filter(s => s)

        if (listA.length === 0 || listB.length === 0) return

        const common = listA.filter(stock => listB.includes(stock))
        const uniqueA = listA.filter(stock => !listB.includes(stock))
        const uniqueB = listB.filter(stock => !listA.includes(stock))

        // Simple overlap formula for illustrative purposes: 
        // % Overlap = (Common * 2) / (ListA + ListB) * 100
        const overlapPercent = (common.length * 200) / (listA.length + listB.length)

        setResult({
            overlapPercent: overlapPercent.toFixed(0),
            commonCount: common.length,
            commonStocks: common.map(s => s.charAt(0).toUpperCase() + s.slice(1)),
            uniqueACount: uniqueA.length,
            uniqueBCount: uniqueB.length
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const faqData = [
        { question: "What is Mutual Fund Overlap?", answer: "Mutual Fund Overlap happens when you invest in two or more funds that hold the same underlying stocks. For example, if both your Large Cap fund and your Flexi Cap fund hold Reliance and HDFC Bank, you have overlap." },
        { question: "Is portfolio overlap bad?", answer: "Not always, but high overlap (over 70%) means you are not truly diversifying. You are just paying double the expense ratio for the same set of stocks. Ideally, overlap should be below 30% between two funds." },
        { question: "How to reduce overlap?", answer: "Compare the portfolios of your funds. If two funds have high overlap, consider merging them or picking a fund with a different investment style (e.g., combining a Nifty 50 Index fund with a Small Cap fund)." }
    ]

    const features = [
        { title: "Manual Comparison", desc: "Paste stock names from your fund factsheets to see exactly where they overlap.", icon: "🔍" },
        { title: "Diversification Score", desc: "Get an instant percentage of how similar your fund choices are.", icon: "📊" },
        { title: "Smart Grouping", icon: "🧠", desc: "Identifies unique vs common holdings to help you rebalance your portfolio." }
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <SchemaGenerator
                name="Mutual Fund Overlap Calculator India"
                description="Analyze duplicate stocks in your mutual fund portfolio to improve diversification."
                url="https://calcguide.in/calculators/investment/mutual-fund-overlap-calculator"
            />

            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <Link to={ROUTES.HUBS.INVESTMENT} className="hover:text-blue-600">Investment Calculators</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">MF Overlap Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Mutual Fund Overlap Calculator</h1>
                    <p className="text-slate-600">Stop paying double for the same stocks</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Fund A Holdings (Comma separated)</label>
                                    <textarea
                                        rows="3"
                                        value={fundAStocks}
                                        onChange={(e) => setFundAStocks(e.target.value)}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                        placeholder="Reliance, HDFC Bank, ICICI Bank..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Fund B Holdings (Comma separated)</label>
                                    <textarea
                                        rows="3"
                                        value={fundBStocks}
                                        onChange={(e) => setFundBStocks(e.target.value)}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                        placeholder="Infosys, TCS, Reliance..."
                                    />
                                </div>

                                <button
                                    onClick={calculateOverlap}
                                    className="w-full bg-slate-900 hover:bg-black text-white font-bold py-3 rounded-xl shadow-md text-lg active:scale-95 transition-transform"
                                >
                                    Analyze Overlap
                                </button>

                                {result && (
                                    <div ref={resultRef} className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="mb-8">
                                            <div className="flex justify-between items-end mb-2">
                                                <p className="text-sm font-bold text-slate-700 uppercase tracking-wide">Portfolio Similarity</p>
                                                <p className="text-3xl font-black text-slate-900">{result.overlapPercent}%</p>
                                            </div>
                                            <div className="w-full bg-slate-200 h-4 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full transition-all duration-1000 ${result.overlapPercent > 70 ? 'bg-red-500' : result.overlapPercent > 40 ? 'bg-amber-500' : 'bg-green-500'}`}
                                                    style={{ width: `${result.overlapPercent}%` }}
                                                ></div>
                                            </div>
                                            <p className="mt-2 text-xs text-slate-500">
                                                {result.overlapPercent > 70 ? '⚠️ High Overlap: Your portfolio is concentrated. You might not be as diversified as you think.' :
                                                    result.overlapPercent > 40 ? '⚡ Moderate Overlap: Typical for funds in the same category.' :
                                                        '✅ Good Diversification: These funds have very unique holdings.'}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Common Stocks</p>
                                                <p className="text-2xl font-bold text-slate-800">{result.commonCount}</p>
                                                <div className="mt-2 text-[10px] text-slate-400 leading-tight">
                                                    {result.commonStocks.join(', ')}
                                                </div>
                                            </div>
                                            <div className="bg-slate-900 p-4 rounded-lg text-white">
                                                <p className="text-xs text-slate-400 font-bold uppercase mb-1">Unique Ratio</p>
                                                <p className="text-2xl font-bold">{100 - result.overlapPercent}%</p>
                                                <p className="mt-2 text-[10px] text-slate-500">
                                                    {result.uniqueACount} unique in A, {result.uniqueBCount} unique in B
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <CalculatorContent
                            title="The Silent Wealth Destroyer: Overlap"
                            whatIs="Mutual Fund Overlap happens when an investor buys multiple mutual funds that invest in the same set of stocks. This creates a false sense of diversification. If your Small Cap, Mid Cap, and Bluechip funds all have 15% allocation to ICICI Bank, a crash in that stock will hurt your entire portfolio simultaneously."
                            whoShouldUse="Investors who have more than 5 mutual funds in their portfolio. If you keep adding 'highly rated' funds without checking their stock list, you are likely just buying the same 20-30 stocks across different AMC names."
                            example="If Fund A holds 10 stocks and Fund B holds 10 stocks, and 6 stocks are common, your overlap is 60%. You are essentially paying management fees twice to 2 different fund managers for the same 6 companies."
                            commonMistake="Buying every 'NFO' or 'Trending Fund'. Most new funds launched by AMCs have a 60% to 80% overlap with existing Large Cap or Flexi Cap indices. Before you buy a new fund, ask: 'What does this fund have that I don't already own?'"
                        />

                        <SEOSection title="Portfolio Management Tips" faq={faqData} features={features} />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-6">
                            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Expand Strategy</h4>
                            <div className="space-y-3">
                                <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">📈</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">SIP Returns</p>
                                </Link>
                                <Link to={ROUTES.HUBS.TAX} className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group">
                                    <span className="text-xl mr-3">🏦</span>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Tax Optimization</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
