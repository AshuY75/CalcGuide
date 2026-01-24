import React, { useState } from 'react'

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-slate-200 last:border-0">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-start py-5 text-left focus:outline-none group"
            >
                <span className={`text-base font-semibold leading-relaxed transition-colors pr-4 ${isOpen ? 'text-blue-700' : 'text-slate-800 group-hover:text-blue-700'}`}>
                    {question}
                </span>
                <span className={`flex-shrink-0 mt-1 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className={`w-5 h-5 ${isOpen ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base bg-slate-50 p-4 rounded-lg border border-slate-100">{answer}</p>
                </div>
            </div>
        </div>
    )
}

export default function SEOSection({ title, faq, features, children }) {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <div className="mt-16 space-y-16">

            {/* Features / How it works Data Grid */}
            {features && features.length > 0 && (
                <section>
                    <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-1.5 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">How it Works & Benefits</h2>
                        </div>
                        <div className="h-px bg-slate-200 flex-1 ml-4 hidden sm:block"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl p-6 border border-slate-200 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_-4px_rgba(59,130,246,0.1)] hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-slate-100 group-hover:bg-blue-500 transition-colors duration-300"></div>
                                <div className="mb-4 text-3xl bg-slate-50 w-12 h-12 flex items-center justify-center rounded-lg border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon || '📌'}
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{feature.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* FAQ Accordion */}
            {faq && faq.length > 0 && (
                <section className="bg-white rounded-2xl shadow-sm border border-slate-200">
                    <div className="p-6 md:p-8 border-b border-slate-100 bg-slate-50/50 rounded-t-2xl">
                        <h2 className="text-2xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
                        <p className="text-slate-500 mt-2 text-sm text-center">Common queries answered for you</p>
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="max-w-3xl mx-auto">
                            {faq.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Legacy Prose Content - Displayed cleanly if present */}
            {children && (
                <section className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-6 w-1 bg-yellow-400 rounded-full"></div>
                        <h3 className="text-lg font-bold text-slate-900">Additional Information</h3>
                    </div>
                    <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-600 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-li:text-slate-600 prose-strong:text-slate-900 leading-relaxed">
                        {children}
                    </div>
                </section>
            )}
        </div>
    )
}
