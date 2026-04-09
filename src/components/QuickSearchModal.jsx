import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import searchData from '../data/searchCatalog.json';

export default function QuickSearchModal({ isOpen, onClose }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [activeIndex, setActiveIndex] = useState(-1);
    const modalRef = useRef(null);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
            document.body.style.overflow = 'hidden';
            setQuery('');
            setResults([]);
            setActiveIndex(-1);
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const filtered = searchData.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.desc.toLowerCase().includes(query.toLowerCase()) ||
            item.type.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 8);
        setResults(filtered);
        setActiveIndex(0);
    }, [query]);

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIndex(prev => (prev > 0 ? prev - 1 : prev));
        } else if (e.key === 'Enter' && activeIndex >= 0) {
            e.preventDefault();
            handleSelect(results[activeIndex]);
        } else if (e.key === 'Escape') {
            onClose();
        }
    };

    const handleSelect = (item) => {
        navigate(item.url);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
                onClick={onClose}
            />

            {/* Modal */}
            <div 
                ref={modalRef}
                className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            >
                <div className="p-4 border-b border-slate-100 flex items-center gap-4">
                    <span className="text-slate-400">🔍</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Search for calculators, articles, or guides... (Ctrl+K)"
                        className="flex-1 bg-transparent border-none outline-none text-lg text-slate-800 placeholder:text-slate-400"
                    />
                    <button 
                        onClick={onClose}
                        className="px-2 py-1 bg-slate-100 rounded text-xs font-bold text-slate-500 hover:bg-slate-200"
                    >
                        ESC
                    </button>
                </div>

                <div className="max-h-[60vh] overflow-y-auto">
                    {results.length > 0 ? (
                        <div className="p-2">
                            {results.map((item, index) => (
                                <div
                                    key={item.id}
                                    onClick={() => handleSelect(item)}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-colors ${index === activeIndex ? 'bg-blue-50' : 'hover:bg-slate-50'}`}
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase ${item.type === 'Calculator' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                                                {item.type}
                                            </span>
                                            <h3 className={`text-sm font-bold ${index === activeIndex ? 'text-blue-900' : 'text-slate-800'}`}>
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-xs text-slate-500 line-clamp-1">{item.desc}</p>
                                    </div>
                                    <span className={`text-lg transition-transform ${index === activeIndex ? 'translate-x-1' : ''}`}>
                                        {index === activeIndex ? '➡️' : '👉'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ) : query.trim() ? (
                        <div className="p-12 text-center text-slate-500">
                            <span className="text-4xl block mb-4">🏜️</span>
                            <p className="font-medium">No results found for "{query}"</p>
                            <p className="text-xs mt-1">Try searching for "EMI", "SIP", or "Tax"</p>
                        </div>
                    ) : (
                        <div className="p-8">
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Popular Searches</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {searchData.slice(0, 4).map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleSelect(item)}
                                        className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50 text-left transition-all group"
                                    >
                                        <span className="text-lg grayscale group-hover:grayscale-0">🎯</span>
                                        <span className="text-sm font-semibold text-slate-700">{item.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <div className="flex gap-4">
                        <span className="flex items-center gap-1"><span className="px-1.5 py-0.5 bg-white border border-slate-200 rounded shadow-sm text-slate-500">↑↓</span> Navigate</span>
                        <span className="flex items-center gap-1"><span className="px-1.5 py-0.5 bg-white border border-slate-200 rounded shadow-sm text-slate-500">Enter</span> Select</span>
                    </div>
                    <span>Powered by CalcGuide Search ⚡</span>
                </div>
            </div>
        </div>
    );
}
