import CalculatorContent from '../components/CalculatorContent'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'
import YouTubeEarningsCalculatorUI from '../components/calculators/YouTubeEarningsCalculatorUI'

export default function YouTubeEarningsCalculator() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="bg-white border-b border-slate-200 py-6">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-900">YouTube Earnings Calculator</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">YouTube Earnings Calculator (Estimate RPM)</h1>
                    <p className="text-slate-600">Estimate your AdSense revenue based on views, niche, and audience location</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <YouTubeEarningsCalculatorUI />
                        <CalculatorContent
                            title="How YouTube Calculates Your Pay?"
                            whatIs="YouTube pays creators through a system called AdSense. Advertisers bid for space on your videos. The money you receive is based on CPM (Cost Per Mille) - what advertisers pay YouTube, and RPM (Revenue Per Mille) - what you keep after YouTube's 45% platform fee."
                            whoShouldUse="New creators planning their niche or veteran creators looking to optimize their audience targeting. Understanding the huge gap between Indian and US RPM can help you decide if you should make content in English or local languages."
                            example="A Finance channel in India might earn ₹150 for 1,000 views. The same channel targeting a US audience can earn ₹1,200 for the same 1,000 views. This is why many Indian creators are now starting separate English channels."
                            commonMistake="Ignoring viewership location. Even if you live in India, if 30% of your views come from the UK or US, your overall RPM will be much higher than a creator with 100% Indian views. Always check your 'Revenue by Geography' tab in Studio."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
