import { useState, useRef } from 'react'
import SEOSection from '../SEOSection'

export default function YouTubeEarningsCalculatorUI() {
    const [views, setViews] = useState('100000')
    const [rpm, setRpm] = useState('150')
    const [niche, setNiche] = useState('Finance')
    const [region, setRegion] = useState('India')
    const [result, setResult] = useState(null)

    const resultRef = useRef(null)

    const nicheRPMs = {
        'Finance': { India: 150, USA: 1200 },
        'Tech': { India: 100, USA: 800 },
        'Education': { India: 60, USA: 400 },
        'Vlog/Lifestyle': { India: 30, USA: 200 },
        'Gaming': { India: 20, USA: 150 },
        'Shorts': { India: 5, USA: 15 }
    }

    const calculateEarnings = () => {
        const totalViews = parseFloat(views) || 0
        const currentRPM = parseFloat(rpm) || 0

        const monthlyEarnings = (totalViews / 1000) * currentRPM
        const annualEarnings = monthlyEarnings * 12

        setResult({
            monthly: Math.round(monthlyEarnings),
            annual: Math.round(annualEarnings),
            views: totalViews.toLocaleString('en-IN')
        })

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
    }

    const handleNicheChange = (newNiche) => {
        setNiche(newNiche)
        setRpm(nicheRPMs[newNiche][region].toString())
    }

    const handleRegionChange = (newRegion) => {
        setRegion(newRegion)
        setRpm(nicheRPMs[niche][newRegion].toString())
    }

    const faqData = [
        { question: "What is RPM on YouTube?", answer: "RPM (Revenue Per Mille) represents how much money you earn per every 1,000 views. This is the net amount after YouTube takes its 45% cut." },
        { question: "Why is USA RPM higher than India?", answer: "Advertisers in the US have higher budgets and are willing to pay more to reach consumers with higher purchasing power. A US-based viewer can be 5-10x more valuable than an Indian viewer to an advertiser." },
        { question: "How can I increase my YouTube RPM?", answer: "Targeting high-paying niches like Finance, Business, or Real Estate, and creating content that attracts viewers from countries like USA, UK, or Canada are the most effective ways to boost RPM." }
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Target Niche</label>
                        <select value={niche} onChange={(e) => handleNicheChange(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500">
                            {Object.keys(nicheRPMs).map(n => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>

                    <div className="flex gap-4 p-1 bg-slate-100 rounded-xl">
                        <button onClick={() => handleRegionChange('India')} className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-colors ${region === 'India' ? 'bg-white text-red-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>India Traffic</button>
                        <button onClick={() => handleRegionChange('USA')} className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-colors ${region === 'USA' ? 'bg-white text-red-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>USA Traffic</button>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Monthly Views</label>
                        <input type="number" value={views} onChange={(e) => setViews(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 text-lg" placeholder="e.g. 100000" />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Estimated RPM (₹ per 1k views)</label>
                        <input type="number" value={rpm} onChange={(e) => setRpm(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500" />
                    </div>

                    <button onClick={calculateEarnings} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-md text-lg active:scale-[0.98] transition-transform">
                        Calculate Potential Earnings
                    </button>
                </div>

                <div role="region" aria-live="polite" className="bg-slate-50 rounded-2xl p-6 border-2 border-dashed border-slate-200 flex flex-col justify-center">
                    {result ? (
                        <div ref={resultRef} className="space-y-6 animate-in fade-in duration-500">
                            <div className="text-center">
                                <p className="text-[10px] font-bold text-slate-500 uppercase">Monthly Income</p>
                                <p className="text-5xl font-black text-slate-900">₹{result.monthly.toLocaleString('en-IN')}</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                                <p className="text-[10px] font-bold text-slate-400 uppercase">Yearly Potential</p>
                                <p className="text-2xl font-black text-red-600">₹{result.annual.toLocaleString('en-IN')}</p>
                            </div>

                            <div className="bg-slate-900 rounded-xl p-4 text-white text-center">
                                <p className="text-xs">Based on <span className="font-bold">{result.views} views</span> per month in the <span className="text-red-400 font-bold">{niche}</span> niche.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center space-y-4 py-12">
                            <span className="text-5xl">📺</span>
                            <p className="text-slate-500 font-medium">Find out how much you can earn from your views</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-12">
                <SEOSection title="YouTube Monetization & Earnings Guide" faq={faqData} />
            </div>
        </div>
    )
}
