import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CALCULATORS } from '../data/calculators';

export default function SearchSlider({ isOpen, onClose }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            setQuery('');
        }
    }, [isOpen]);

    useEffect(() => {
        if (query.length > 1) {
            const filtered = CALCULATORS.filter(calc =>
                calc.title.toLowerCase().includes(query.toLowerCase()) ||
                calc.desc.toLowerCase().includes(query.toLowerCase()) ||
                calc.category.toLowerCase().includes(query.toLowerCase())
            ).slice(0, 8);
            setResults(filtered);
        } else {
            setResults([]);
        }
    }, [query]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 sm:pt-32">
            <div
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200">
                <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                    <span className="text-2xl">🔍</span>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search 50+ calculators... (EMI, Gold, GST, Student)"
                        className="flex-grow bg-transparent border-none focus:ring-0 text-lg font-medium text-slate-900 placeholder-slate-400"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Escape') onClose();
                            if (e.key === 'Enter' && results.length > 0) {
                                navigate(results[0].path);
                                onClose();
                            }
                        }}
                    />
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-lg text-slate-400"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="max-h-[60vh] overflow-y-auto p-2">
                    {query.length > 0 ? (
                        results.length > 0 ? (
                            <div className="grid gap-1">
                                {results.map((calc) => (
                                    <Link
                                        key={calc.path}
                                        to={calc.path}
                                        onClick={onClose}
                                        className="flex items-center gap-4 p-3 hover:bg-blue-50 rounded-xl transition-colors group"
                                    >
                                        <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{calc.icon}</span>
                                        <div className="flex-grow">
                                            <div className="font-bold text-slate-900 flex items-center gap-2">
                                                {calc.title}
                                                {calc.tag && (
                                                    <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full uppercase">
                                                        {calc.tag}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-xs text-slate-500 line-clamp-1">{calc.desc}</div>
                                        </div>
                                        <svg className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="p-8 text-center text-slate-500">
                                <div className="text-4xl mb-4">🔦</div>
                                <p>No tools found for "{query}"</p>
                                <p className="text-sm mt-1">Try searching for "SIP", "Land", or "GST"</p>
                            </div>
                        )
                    ) : (
                        <div className="p-6">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Popular Searches</h3>
                            <div className="flex flex-wrap gap-2">
                                {['EMI', 'GST', 'Gold', 'Village', 'SGPA', 'SIP'].map(tag => (
                                    <button
                                        key={tag}
                                        onClick={() => setQuery(tag)}
                                        className="px-4 py-2 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-700 rounded-full text-sm font-semibold transition-colors border border-slate-200"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                    <span>Powered by CalcGuide Smart Search</span>
                    <span>ESC to close</span>
                </div>
            </div>
        </div>
    );
}
