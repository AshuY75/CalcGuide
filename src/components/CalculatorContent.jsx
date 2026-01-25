import React from 'react';

export default function CalculatorContent({
    title,
    whatIs,
    whoShouldUse,
    example,
    commonMistake
}) {
    return (
        <section className="mt-12 bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-8">
            <div className="prose prose-blue max-w-none">

                {/* Core Description */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What is {title}?</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        {whatIs}
                    </p>
                </div>

                {/* User Target */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Who should use this calculator?</h3>
                    <p className="text-gray-600 leading-relaxed">
                        {whoShouldUse}
                    </p>
                </div>

                {/* Grid for Example and Mistakes */}
                <div className="grid md:grid-cols-2 gap-8 mt-8">

                    {/* Real world example */}
                    <div className="bg-blue-50/50 p-6 rounded-lg border border-blue-100">
                        <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                            <span className="text-xl">💡</span> Example
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            {example}
                        </p>
                    </div>

                    {/* Common Mistake */}
                    <div className="bg-orange-50/50 p-6 rounded-lg border border-orange-100">
                        <h3 className="text-lg font-semibold text-orange-900 mb-3 flex items-center gap-2">
                            <span className="text-xl">⚠️</span> Common Mistake
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            {commonMistake}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
