export default function CalculatorPlaceholder({ title }) {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
            <div className="text-center p-8">
                <div className="text-6xl mb-4">🚧</div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">{title || 'Coming Soon'}</h1>
                <p className="text-slate-600">
                    We are working hard to build this calculator. Check back soon!
                </p>
                <button
                    onClick={() => window.location.href = '/'}
                    className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Back to Home
                </button>
            </div>
        </div>
    )
}
