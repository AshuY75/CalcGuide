import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/paths'
import MetaManager from '../../components/MetaManager'
import { SchemaGenerator, BreadcrumbSchema } from '../../components/SchemaGenerator'
import SEOSection from '../../components/SEOSection'

const faqData = [
    {
        question: "Is SIP interest simple or compound?",
        answer: "SIP works on the principle of compound interest. The returns you generate are reinvested (compounded), which helps your money grow exponentially over 10-15 years."
    },
    {
        question: "What is the best date for SIP?",
        answer: "There is no 'best' date. However, investing early in the month (e.g., 5th or 10th) ensures your salary is invested before you spend it. Market volatility makes timing irrelevant for long-term SIPs."
    },
    {
        question: "Does SIP deduct money automatically?",
        answer: "Yes, once you set up a mandate with your bank, the SIP amount is automatically deducted on the chosen date every month."
    },
    {
        question: "Can I increase my SIP amount later?",
        answer: "Yes, this is called a 'Step-up SIP'. Increasing your SIP by just 10% every year can double your final wealth compared to a fixed SIP."
    }
]

export default function HowSIPReturnsCalculated() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <MetaManager
                title="How SIP Returns Are Calculated in India (With Examples)"
                description="Understand how Mutual Fund SIP returns are calculated. Learn about XIRR, Rupee Cost Averaging, and see ₹5000 vs ₹10000 SIP examples."
                canonical="https://calcguide.in/learn/how-sip-returns-are-calculated"
                type="article"
            />

            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://calcguide.in' },
                { name: 'Learn', url: 'https://calcguide.in/learn' },
                { name: 'How SIP Calculation Works', url: 'https://calcguide.in/learn/how-sip-returns-are-calculated' }
            ]} />

            <SchemaGenerator
                type="Article"
                name="How SIP Returns Are Calculated in India"
                description="A comprehensive guide on understanding Systematic Investment Plan (SIP) calculations, XIRR, and compounding growth."
                image="https://calcguide.in/images/learn/sip-growth-chart.png"
                data={{
                    "author": { "@type": "Organization", "name": "CalcGuide Team" },
                    "datePublished": "2024-02-01",
                    "headline": "How SIP Returns Are Calculated in India (With Examples)"
                }}
            />

            {/* Article Header */}
            <header className="bg-white border-b border-slate-200 pt-10 pb-10">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-4">
                        <Link to={ROUTES.LEARN.HOME} className="hover:underline">Learn</Link>
                        <span>/</span>
                        <span>Investment Guides</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                        How SIP Returns Are Calculated in India (With Examples)
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Confused about how your small monthly investments turn into crores? We break down the math, the magic of compounding, and the logic behind SIP returns.
                    </p>
                </div>
            </header>

            {/* Article Content */}
            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Intro Section */}
                <div className="prose prose-slate max-w-none prose-lg prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-800">
                    <p>
                        In India, the <strong>Systematic Investment Plan (SIP)</strong> has become the favorite investing tool for the middle class. But unlike a <Link to={ROUTES.CALCULATORS.INVESTMENT.FD}>Fixed Deposit (FD)</Link> where the interest rate is fixed, SIP returns fluctuate.
                    </p>
                    <p>
                        So, how exactly do you know if your SIP is doing well? And how does the calculator predict your future wealth? Let's dive in.
                    </p>

                    <h2>1. The Concept: Buying Units, Not Value</h2>
                    <p>
                        When you do a SIP, you are not directly "saving" money. You are buying units of a Mutual Fund.
                    </p>
                    <ul className="bg-yellow-50 p-6 rounded-xl list-none border-l-4 border-yellow-400 my-8">
                        <li className="mb-2"><strong>Market Down?</strong> NAV (price) is low → You buy MORE units.</li>
                        <li><strong>Market Up?</strong> NAV (price) is high → You buy FEWER units.</li>
                    </ul>
                    <p>
                        This process is called <strong>Rupee Cost Averaging</strong>. Over time, your average cost of buying reduces, which is why SIPs generally beat lump-sum investments in volatile markets.
                    </p>

                    {/* SVG Visualization: Averaging */}
                    <div className="my-10 bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Visual: Rupee Cost Averaging</h4>
                        <svg viewBox="0 0 400 150" className="w-full h-auto max-w-md mx-auto overflow-visible">
                            {/* Market Line (Wavy) */}
                            <path d="M0,100 Q50,20 100,100 T200,80 T300,110 T400,60" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />

                            {/* Buying Points */}
                            <circle cx="50" cy="60" r="4" fill="#ef4444" /><text x="50" y="45" fontSize="10" textAnchor="middle" fill="#64748b">High Price (Less Units)</text>
                            <circle cx="100" cy="100" r="4" fill="#22c55e" /><text x="100" y="125" fontSize="10" textAnchor="middle" fill="#64748b">Low Price (More Units)</text>
                            <circle cx="200" cy="80" r="4" fill="#3b82f6" /><text x="200" y="65" fontSize="10" textAnchor="middle" fill="#64748b">Avg Price</text>

                            {/* Trend Line */}
                            <path d="M0,120 L400,40" fill="none" stroke="#22c55e" strokeWidth="3" />
                            <text x="380" y="30" fontSize="12" fontWeight="bold" fill="#15803d">Long Term Gain</text>
                        </svg>
                        <p className="text-xs text-slate-400 mt-4">In the long run, the average cost drops, and value rises.</p>
                    </div>

                    <h2>2. The Formula: It's not Simple Interest</h2>
                    <p>
                        SIP returns cannot be calculated using the simple <span className="font-mono bg-slate-100 px-1 rounded">P × R × T</span> formula. Why? Because every monthly installment is invested for a <em>different amount of time</em>.
                    </p>
                    <p>
                        The 1st installment grows for 10 years. The last installment grows for only 1 month. To solve this, analysts use a method called <strong>XIRR (Extended Internal Rate of Return)</strong>.
                    </p>
                    <p>
                        However, for estimation, we use the future value of annuity formula:
                    </p>
                    <div className="bg-slate-900 text-white p-6 rounded-xl font-mono text-sm sm:text-base overflow-x-auto shadow-lg my-6">
                        FV = P × ({'[ (1 + i)^n - 1 ]'} / i) × (1 + i)
                    </div>
                    <p className="text-sm text-slate-500">
                        P = Monthly Investment amount<br />
                        i = Periodic Interest Rate (Annual Rate / 12)<br />
                        n = Total number of months
                    </p>

                    <h2>3. Real World Examples</h2>
                    <p>Let's look at how small consistency creates massive wealth.</p>

                    <h3 className="text-xl font-bold mt-8 mb-4 text-blue-800">Case A: ₹5,000 Monthly</h3>
                    <div className="grid sm:grid-cols-2 gap-4 not-prose mb-8">
                        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                            <div className="text-sm font-semibold text-slate-500 mb-1">Duration</div>
                            <div className="text-xl font-bold text-slate-900">10 Years</div>
                        </div>
                        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                            <div className="text-sm font-semibold text-slate-500 mb-1">Maturity Value</div>
                            <div className="text-xl font-bold text-blue-600">₹11.6 Lakhs*</div>
                            <div className="text-xs text-slate-400 mt-1">@ 12% Expected Return</div>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold mt-8 mb-4 text-green-800">Case B: ₹10,000 Monthly (The Power of 2x)</h3>
                    <div className="grid sm:grid-cols-2 gap-4 not-prose mb-8">
                        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                            <div className="text-sm font-semibold text-slate-500 mb-1">Duration</div>
                            <div className="text-xl font-bold text-slate-900">20 Years</div>
                        </div>
                        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                            <div className="text-sm font-semibold text-slate-500 mb-1">Maturity Value</div>
                            <div className="text-xl font-bold text-green-600">₹99.9 Lakhs*</div>
                            <div className="text-xs text-slate-400 mt-1">@ 12% Expected Return</div>
                        </div>
                    </div>
                    <p>
                        Notice that by doubling the time (10 to 20 years) and doubling the amount, the result didn't just quadruple—it grew almost <strong>9 times</strong>! That is the power of compounding.
                    </p>

                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 my-8 text-center">
                        <h3 className="text-lg font-bold text-blue-900 mb-2 mt-0">Ready to calculate your own returns?</h3>
                        <p className="mb-6 text-blue-800">Use our free tool to see how much your savings can grow.</p>
                        <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition-transform transform hover:-translate-y-1">
                            Open SIP Calculator
                        </Link>
                    </div>

                    <h2>4. Common SIP Mistakes to Avoid</h2>
                    <ul>
                        <li><strong>Stopping simply because the market is red:</strong> This is the worst mistake. When the market is down, you get more units cheap. If you stop, you lose this advantage.</li>
                        <li><strong>Not Increasing SIP with Salary:</strong> A flat SIP of ₹5,000 for 20 years is good, but increasing it by 10% every year (Step-up SIP) can create double the wealth.</li>
                        <li><strong>Ideally, combine SIP with FD:</strong> Don't put emergency funds in SIP. Use our <Link to={ROUTES.CALCULATORS.INVESTMENT.FD}>FD Calculator</Link> to plan for safe, short-term goals.</li>
                    </ul>

                </div>

                {/* FAQ Section */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                    <SEOSection title="Frequently Asked Questions" faq={faqData} />
                </div>
            </article>
        </div>
    )
}
