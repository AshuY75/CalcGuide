import { Link } from 'react-router-dom'

export default function CalculatorCard({ title, desc, icon, tag, path, preload }) {
    return (
        <Link
            to={path}
            onClick={() => window.scrollTo(0, 0)}
            onMouseEnter={() => preload && preload()}
            /* Also preload on focus for accessibility */
            onFocus={() => preload && preload()}
            className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-slate-200 hover:border-blue-200 transition-all duration-200 flex flex-col text-left"
        >
            {tag && (
                <span className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full ${tag === 'Popular' ? 'bg-blue-100 text-blue-700' :
                    tag === 'Trending' ? 'bg-green-100 text-green-700' :
                        tag === 'New' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-slate-100 text-slate-700'
                    }`}>
                    {tag}
                </span>
            )}

            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {icon}
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                {title}
            </h3>

            <p className="text-sm text-slate-600 mb-4 flex-grow">
                {desc}
            </p>

            <div className="flex items-center text-sm font-semibold text-blue-700 group-hover:text-blue-900">
                Calculate
                <svg
                    className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </Link>
    )
}
