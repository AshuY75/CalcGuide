import React from 'react';

export default function CalculatorContent({
    title,
    whatIs,
    formula,
    example,
    commonMistake,
    faqs = []
}) {
    return (
        <section className="mt-12 space-y-12">
            {/* Core Info & Formula Section */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-8 md:p-10">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-2 h-10 bg-blue-600 rounded-full"></span>
                            What is {title}?
                        </h2>
                        <div className="prose prose-slate max-w-none">
                            <p className="text-slate-600 text-lg leading-relaxed mb-10">
                                {whatIs}
                            </p>

                            {formula && (
                                <div className="bg-slate-900 rounded-2xl p-8 mb-10 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <span className="text-6xl font-black text-white italic">f(x)</span>
                                    </div>
                                    <h3 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-4">The Mathematical Formula</h3>
                                    <p className="text-white text-2xl font-mono leading-relaxed break-words">
                                        {formula}
                                    </p>
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50">
                                    <h3 className="text-blue-900 font-bold flex items-center gap-2 mb-3">
                                        <span className="text-xl">📊</span> Practical Example
                                    </h3>
                                    <p className="text-slate-700 text-sm leading-relaxed italic">
                                        "{example}"
                                    </p>
                                </div>
                                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100/50">
                                    <h3 className="text-orange-900 font-bold flex items-center gap-2 mb-3">
                                        <span className="text-xl">⚠️</span> Common Mistake
                                    </h3>
                                    <p className="text-slate-700 text-sm leading-relaxed">
                                        {commonMistake}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQs Section */}
            {faqs && faqs.length > 0 && (
                <div className="space-y-6 px-4">
                    <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                        <span className="w-2 h-8 bg-slate-900 rounded-full"></span>
                        Frequently Asked Questions
                    </h2>
                    <div className="grid gap-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors group">
                                <h3 className="font-bold text-slate-900 mb-2 flex items-start gap-3">
                                    <span className="text-blue-600 mt-1">Q.</span>
                                    {faq.question}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed pl-7">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
