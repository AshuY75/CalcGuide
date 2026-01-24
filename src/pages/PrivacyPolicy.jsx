import { Helmet } from 'react-helmet-async'

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>Privacy Policy - CalcGuide</title>
                <meta name="description" content="Privacy Policy for CalcGuide. Understand how we handle your data." />
                <link rel="canonical" href="https://calcguide.com/privacy" />
            </Helmet>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8 sm:p-12">
                <h1 className="text-3xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

                <div className="prose prose-slate max-w-none text-slate-600">
                    <p className="mb-4">Last Updated: January 01, 2026</p>

                    <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Introduction</h2>
                    <p>
                        Welcome to CalcGuide ("we," "our," or "us"). We respect your privacy and are committed to protecting it.
                        This Privacy Policy explains how we handle your information when you visit our website.
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Information We Collect</h2>
                    <p>
                        <strong>We do not collect personal data.</strong> Most of our calculators run entirely on your device (client-side).
                        We do not store your financial inputs, loan details, or personal calculations on our servers.
                    </p>
                    <p>
                        However, we may standard internet log information and visitor behavior patterns (Cookies) to improve user experience using third-party services like Google Analytics.
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. How We Use Information</h2>
                    <ul className="list-disc pl-5 mb-4">
                        <li>To provide and maintain our Service</li>
                        <li>To monitor the usage of our Service</li>
                        <li>To detect, prevent and address technical issues</li>
                    </ul>

                    <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Cookies</h2>
                    <p>
                        We use cookies to store information about your preferences and to personalize the content you view.
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Third-Party Services</h2>
                    <p>
                        We may employ third-party companies and individuals to facilitate our Service (e.g., Google AdSense, Analytics).
                        These third parties have access to your browsing data only to perform these tasks on our behalf.
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Changes to This Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">7. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us via our Feedback page.
                    </p>
                </div>
            </div>
        </div>
    )
}
