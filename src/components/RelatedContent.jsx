import React from 'react';
import { Link } from 'react-router-dom';
import searchCatalog from '../data/searchCatalog.json';

const RelatedContent = ({ category, currentPath }) => {
    // Map internal category keys to search keywords
    const categoryKeywords = {
        'INVESTMENT': ['sip', 'invest', 'fd', 'rd', 'growth', 'wealth'],
        'TAX': ['tax', 'regime', 'income', 'hra', '80c', 'gst'],
        'LOAN': ['loan', 'emi', 'interest', 'eligibility', 'prepayment'],
        'STUDENT': ['sgpa', 'cgpa', 'rank', 'percentile', 'education'],
        'HEALTH': ['bmi', 'calorie', 'weight', 'fat', 'health'],
        'BUSINESS': ['business', 'freelance', 'gst', 'platform', 'invoice'],
        'GOLD': ['gold', 'jewellery', 'purity', 'making']
    };

    const keywords = categoryKeywords[category] || categoryKeywords.INVESTMENT;

    // Filter catalog for related items
    const relatedItems = searchCatalog
        .filter(item => {
            if (item.url === currentPath) return false;
            
            const titleLower = item.title.toLowerCase();
            const descLower = item.desc.toLowerCase();
            
            // Match if any keyword exists in title or description
            return keywords.some(kw => titleLower.includes(kw) || descLower.includes(kw));
        })
        .sort(() => 0.5 - Math.random()) // Randomize slightly for discovery
        .slice(0, 3);

    const handleShare = () => {
        const url = window.location.href;
        const text = `I found this helpful financial guide on CalcGuide: "${document.title}". Check it out: ${url}`;
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="mt-20 mb-12 border-t border-slate-100 pt-16">
            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                You May Also Like
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {relatedItems.map((item) => (
                    <Link
                        key={item.url}
                        to={item.url}
                        className="group flex flex-col p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-[0.98]"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-50">
                            {item.type === 'Calculator' ? '🧮' : '📝'}
                        </div>
                        
                        <div className="flex items-center gap-2 mb-2">
                             <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter ${item.type === 'Calculator' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                                {item.type}
                            </span>
                        </div>

                        <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {item.title}
                        </h4>
                        
                        <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
                            {item.desc}
                        </p>
                        
                        <div className="flex items-center text-blue-600 font-bold text-sm">
                            {item.type === 'Calculator' ? 'Calculate' : 'Read More'} <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Viral Loop CTA */}
            <div className="p-8 sm:p-10 bg-slate-900 rounded-[2.5rem] text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10">
                    <h4 className="text-white text-2xl font-black mb-3 italic">"Financial Education should be Free"</h4>
                    <p className="text-slate-400 font-medium mb-8 max-w-lg mx-auto leading-relaxed">
                        If this guide helped you, consider sharing it with your friends or WhatsApp groups to help them make better financial decisions.
                    </p>
                    <button 
                        onClick={handleShare}
                        className="inline-flex items-center gap-4 px-10 py-5 bg-[#25D366] text-white font-black rounded-2xl shadow-2xl hover:bg-[#20ba59] transition-all hover:scale-105 active:scale-95 text-lg"
                    >
                        <span>Share with Friends</span>
                        <span className="text-2xl">📲</span>
                    </button>
                    
                    <div className="mt-8">
                        <a 
                            href="https://omg10.com/4/10851818" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors text-sm font-bold flex items-center justify-center gap-2"
                        >
                            🎁 Check Today's Featured Financial Offer
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedContent;
