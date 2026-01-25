import { Link } from 'react-router-dom'
import { getAllArticles } from '../../utils/articleLoader'
import MetaManager from '../../components/MetaManager'
import { BreadcrumbSchema } from '../../components/SchemaGenerator'

export default function LearnHome() {
    const articles = getAllArticles();

    return (
        <div className="min-h-screen bg-slate-50">
            <MetaManager
                title="Learn Finance & Calculations - CalcGuide"
                description="Simple guides on SIP, Loans, Investments and Construction calculations in India."
                canonical="https://calcguide.in/learn"
            />
            <BreadcrumbSchema items={[{ name: 'Home', url: 'https://calcguide.in' }, { name: 'Learn', url: 'https://calcguide.in/learn' }]} />

            {/* Header */}
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Financial Guidance & Tutorials</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Understanding how your money grows shouldn't be complicated. Read our simple, step-by-step guides designed for Indian investors.
                    </p>
                </div>
            </div>

            {/* Article Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {articles.map((article) => (
                        <Link
                            key={article.id}
                            to={article.slug}
                            className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full"
                        >
                            <div className={`h-40 ${article.colorClass} flex items-center justify-center p-6 relative`}>
                                <span className="text-5xl group-hover:scale-110 transition-transform duration-500">{article.icon}</span>
                                {article.isNew && (
                                    <span className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                        New
                                    </span>
                                )}
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{article.category}</span>
                                <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {article.title}
                                </h2>
                                <p className="text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                                    {article.description}
                                </p>
                                <span className="text-blue-600 text-sm font-semibold flex items-center mt-auto pt-4 border-t border-slate-50">
                                    Read Guide <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
