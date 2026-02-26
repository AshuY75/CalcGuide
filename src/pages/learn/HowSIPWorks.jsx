import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/paths'
import { SchemaGenerator, BreadcrumbSchema } from '../../components/SchemaGenerator'
import SEOSection from '../../components/SEOSection'
import AuthorBio from '../../components/AuthorBio'

const faqData = [
    {
        question: "Is SIP interest simple or compound?",
        answer: "SIP returns in mutual funds work on the principle of compound interest. Unlike simple interest where your initial investment earns a fixed return, SIP returns are reinvested. This means you earn returns on your returns, helping your money grow exponentially over long periods (10-15 years)."
    },
    {
        question: "What is the best date for SIP?",
        answer: "There is no 'best' date for market performance, as markets fluctuate daily. However, for financial discipline, it is best to set your SIP date 1-2 days after your salary date (e.g., 5th or 7th of the month). This ensures your investment happens automatically before you start spending."
    },
    {
        question: "Does SIP deduct money automatically?",
        answer: "Yes. When you start a SIP, you sign a bank mandate (NACH/OTE) that authorizes the mutual fund company to deduct the fixed amount from your bank account on the chosen date every month."
    },
    {
        question: "Can I increase my SIP amount later?",
        answer: "Yes, this is called a 'Step-up SIP' or 'Top-up SIP'. Most platforms allow you to increase your SIP amount annually or as needed. Increasing your investment by even 10% each year can nearly double your final corpus compared to a fixed monthly amount."
    }
]

export const metadata = {
    title: "How SIP Returns Are Calculated in India",
    slug: ROUTES.LEARN.SIP_RETURNS_CALCULATION,
    description: "Understand the math behind your mutual fund investments. Learn about XIRR, compounding, and see real examples of ₹5000/month SIPs.",
    category: "Investment",
    icon: "📊",
    colorClass: "bg-blue-50",
    date: "2024-01-15"
}

export default function HowSIPReturnsCalculated() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">


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
                        Confused about how your small monthly investments turn into crores? We break down the math, the power of compound interest, and the logic behind SIP returns.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                        <span>By Ashu Yadav</span>
                        <span>•</span>
                        <span>Updated for 2025</span>
                    </div>
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

                    {/* Why Trust Block */}
                    <div className="bg-green-50 rounded-xl p-5 mb-8 text-sm text-green-900 border border-green-100">
                        <p className="font-semibold mb-1">Why trust this guide?</p>
                        <p className="opacity-90">
                            This guide is tailored for <strong>Indian investors</strong>. We use standard mutual fund growth formulas used by major AMCs (like SBI, HDFC Mutual Fund) and exclude complex jargon. All calculations correlate with our <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="underline hover:text-green-700">SIP Calculator</Link>.
                        </p>
                    </div>

                    <h2>1. The Concept: Buying Units, Not Value</h2>
                    <p>
                        When you do a SIP, you are not directly "saving" money. You are buying units of a Mutual Fund.
                    </p>
                    <ul className="bg-yellow-50 p-6 rounded-xl list-none border-l-4 border-yellow-400 my-8 shadow-sm">
                        <li className="mb-2"><strong>Market Down?</strong> NAV (price) is low → You buy MORE units.</li>
                        <li><strong>Market Up?</strong> NAV (price) is high → You buy FEWER units.</li>
                    </ul>
                    <p>
                        This process is called <strong>Rupee Cost Averaging</strong>. Over time, your average cost of buying reduces, which is why SIPs generally beat lump-sum investments in volatile markets.
                    </p>

                    {/* SVG Visualization: Averaging */}
                    <div className="my-10 bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Conceptually, rupee cost averaging works like this:</h4>
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

                    {/* Originality Signal: CalcGuide Logic */}
                    <div className="my-10">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">How CalcGuide Calculates SIP Returns</h2>
                        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                            <p className="mb-4">
                                At <strong>CalcGuide</strong>, we believe in transparency. While many tools just show a final number, our calculator uses the monthly compounding logic to be as precise as possible.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-4">
                                <li>We treat every monthly installment as a separate investment.</li>
                                <li>We apply the <strong>Compound Annual Growth Rate (CAGR)</strong> formula daily/monthly depending on the tool settings.</li>
                                <li>We assume "End of Period" payments for safer estimation (meaning interest is calculated after the money lands in the fund).</li>
                            </ul>
                            <div className="flex flex-wrap gap-2 text-sm">
                                <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-600">Simulates standard Equity Funds</span>
                                <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-600">Verified formula</span>
                            </div>
                        </div>
                    </div>

                    <h2>3. Real World Examples (10 vs 20 Years)</h2>
                    <p>Let's look at how small consistency leads to long-term wealth creation in the Indian market.</p>

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
                        Notice that by doubling the time (10 to 20 years) and doubling the amount, the result didn't just quadruple—it grew almost <strong>9 times</strong>! That is the effect of compounding over time.
                    </p>

                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 my-8 text-center shadow-inner">
                        <h3 className="text-lg font-bold text-blue-900 mb-2 mt-0">Ready to calculate your own returns?</h3>
                        <p className="mb-6 text-blue-800">Use our free tool to see how much your savings can grow.</p>
                        <Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition-transform transform hover:-translate-y-1">
                            Open SIP Calculator
                        </Link>
                    </div>

                    <h2>4. Common SIP Mistakes to Avoid</h2>
                    <ul>
                        <li><strong>Stopping simply because the market is red:</strong> This is the worst mistake. When the market is down, you get more units cheap. If you stop, you lose this advantage.</li>
                        <li><strong>Not Increasing SIP with Salary:</strong> A flat SIP of ₹5,000 for 20 years is good, but increasing it by 10% every year (<Link to={ROUTES.CALCULATORS.INVESTMENT.SIP} className="text-blue-600 hover:underline">Step-up SIP</Link>) can create double the wealth.</li>
                        <li><strong>Ideally, combine SIP with FD:</strong> Don't put emergency funds in SIP. Use our <Link to={ROUTES.CALCULATORS.INVESTMENT.FD}>FD Calculator</Link> to plan for safe, short-term goals.</li>
                    </ul>

                </div>

                {/* FAQ Section */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                    <SEOSection title="Frequently Asked Questions" faq={faqData} />
                </div>
                <AuthorBio />
            </article>
        </div>
    )
}
