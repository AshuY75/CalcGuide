import MetaManager from '../../components/MetaManager'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/paths'

export const metadata = {
    title: "Village Interest (Sood) Calculation Explained",
    slug: ROUTES.LEARN.VILLAGE_INT_EXPL,
    description: "What does '₹2 interest' actually mean? Learn how to calculate daily and monthly village interest rates correctly.",
    category: "Loan",
    icon: "🌾",
    colorClass: "bg-orange-50",
    date: "2023-12-10"
}

export default function VillageInterestExplainer() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How Village Interest (Sood/Vaddi) Works in India",
        "image": "https://calcguide.in/og-image.jpg",
        "author": "CalcGuide Team",
        "publisher": {
            "@type": "Organization",
            "name": "CalcGuide",
            "logo": { "@type": "ImageObject", "url": "https://calcguide.in/logo.png" }
        }
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <MetaManager
                title="How Village Interest Works? Explained - Sood / Vaddi Calculation"
                description="Understand the traditional monthly interest system used in Indian villages. How '2 Rupaye Senkda' translates to 24% annual interest."
                keywords="village interest calculator, 2 rupaye sekda interest, sood interest calculation, vaddi calculator"
            />
            <script type="application/ld+json">{JSON.stringify(schema)}</script>

            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="mb-8 border-b pb-8">
                    <div className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">Rural Finance</div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">Understanding Village Interest: The Math Behind '2 Rupaye Sekda'</h1>
                    <p className="text-lg text-slate-600">Why village loans are far more expensive than bank loans.</p>
                </header>

                <div className="prose prose-lg prose-orange text-slate-700 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                    <p>
                        If you have ever lent or borrowed money in a rural part of India (UP, Bihar, Rajasthan), you know that banks are not the only source of finance. The informal lending market works on a completely different logic, often called "Sood", "Vaddi", or "Bypaaj".
                    </p>

                    <h3>It is Monthly, Not Yearly!</h3>
                    <p>
                        The biggest difference between a Bank and a Village Moneylender is the time period.
                    </p>
                    <ul>
                        <li><strong>Banks</strong> quote interest Per Annum (Yearly). e.g., 10% p.a.</li>
                        <li><strong>Village System</strong> quotes interest Per Month. e.g., "2%".</li>
                    </ul>
                    <p>
                        This sounds small, but the impact is massive. A "2% Village Rate" is actually <strong>2% x 12 months = 24% Per Annum</strong>.
                    </p>

                    <h3>Decoding "Rupaye Sekda"</h3>
                    <p>
                        Common terms used in North India:
                    </p>
                    <ul>
                        <li><strong>"2 Rupaye Sekda"</strong>: Means ₹2 interest on every ₹100 per month. This is 24% annually.</li>
                        <li><strong>"3 Rupaye Sekda"</strong>: Means ₹3 interest on every ₹100 per month. This is 36% annually!</li>
                        <li><strong>"Dedh Rupaye (1.5)"</strong>: Means 1.5% per month or 18% annually.</li>
                    </ul>

                    <h3>Compound vs Simple Interest</h3>
                    <p>
                        Traditionally, village loans were simple interest, settled at the end of the harvest. However, unfair lenders might use monthly compounding which causes debt traps.
                    </p>
                    <p>
                        Calculating this manually can be confusing due to odd dates (e.g., "borrowed on 12th March, returned on 5th August"). This involves calculating days accurately.
                    </p>

                    <div className="bg-orange-50 border-l-4 border-orange-600 p-4 my-6">
                        <p className="font-bold text-orange-900 mb-2">Calculate Accurate Village Interest</p>
                        <p className="text-sm">
                            We have built a dedicated tool that handles "Rupaye Sekda" logic and odd dates. Use our <Link to={ROUTES.CALCULATORS.LOAN.VILLAGE_INTEREST} className="text-orange-700 underline font-semibold">Village Interest Calculator</Link> to check exact repayment amounts.
                        </p>
                    </div>

                    <h3>Conclusion</h3>
                    <p>
                        While informal loans are fast and require no paperwork, their interest rates are extremely high compared to bank personal loans (10-14%). Always convert the monthly rate to yearly (multiply by 12) before borrowing to understand the true cost.
                    </p>
                </div>
            </article>
        </div>
    )
}
