import { useState } from 'react'
const Helmet = () => null;

export default function Feedback() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        // Form submits natively to the mailto or form handler.
        // For a static site, using a simple form action or native submission is easiest.
        // Here we simulate submission state for UX.
        // The real submission happens via the form action.
        setTimeout(() => setSubmitted(true), 1000)
    }

    if (submitted) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
                
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center max-w-md w-full">
                    <div className="text-5xl mb-4">🙏</div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h2>
                    <p className="text-slate-600 mb-6">
                        We appreciate your feedback. We read every message to improve CalcGuide for you.
                    </p>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="text-blue-600 font-medium hover:underline"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">We Value Your Feedback</h1>
                    <p className="text-slate-600">
                        Help us make CalcGuide better for you. Whether it's a new calculator request, a bug report, or general suggestions — we want to hear it all.
                    </p>
                </div>

                <form
                    action="https://formsubmit.co/ashuyadav737475@gmail.com"
                    method="POST"
                    className="space-y-6"
                    onSubmit={() => setSubmitted(true)}
                >
                    {/* Honey pot to avoid spam */}
                    <input type="text" name="_honey" style={{ display: 'none' }} />
                    <input type="hidden" name="_next" value="http://localhost:5173/feedback" />
                    <input type="hidden" name="_captcha" value="false" />

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Name (Optional)
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Email (Optional)
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="message"
                            rows="5"
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="Tell us what you think..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md transition-colors text-lg"
                    >
                        Send Feedback
                    </button>

                    <p className="text-xs text-center text-slate-500 mt-4">
                        Your data is safe with us. We only use your email to reply to your feedback.
                    </p>
                </form>
            </div>
        </div>
    )
}
