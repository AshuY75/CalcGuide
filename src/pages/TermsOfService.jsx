import { Helmet } from 'react-helmet-async'

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>Terms of Service - CalcGuide</title>
                <meta name="description" content="Terms of Service for CalcGuide. Usage rules and disclaimers." />
                <link rel="canonical" href="https://calcguide.com/terms" />
            </Helmet>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8 sm:p-12">
                <h1 className="text-3xl font-bold text-slate-900 mb-8">Terms of Service</h1>

                <div className="prose prose-slate max-w-none text-slate-600">
                    <p className="mb-4">Last Updated: January 01, 2026</p>

                    <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using CalcGuide, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Disclaimer of Accuracy</h2>
                    <p>
                        This website provides calculators and information for educational and illustrative purposes only.
                        <strong>We are not a financial institution, and our calculations should not be considered as financial advice.</strong>
                    </p>
                    <p>
                        While we strive for accuracy, actual figures (bank interest rates, gold prices, land measurements) may vary.
                        Always consult with a qualified professional before making financial decisions.
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information or software) on CalcGuide's website for personal, non-commercial transitory viewing only.
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Limitations</h2>
                    <p>
                        In no event shall CalcGuide or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CalcGuide's website.
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Revisions</h2>
                    <p>
                        The materials appearing on CalcGuide's website could include technical, typographical, or photographic errors. CalcGuide does not warrant that any of the materials on its website are accurate, complete, or current.
                    </p>
                </div>
            </div>
        </div>
    )
}
