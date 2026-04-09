import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/paths';

const ArticleHeader = ({ 
    title, 
    category, 
    readTime = '5 min read', 
    date = 'April 2025',
    categoryUrl = ROUTES.LEARN.HOME
}) => {
    return (
        <div className="bg-white border-b border-slate-200 py-10 mb-8 rounded-b-[2rem] shadow-sm">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest flex items-center gap-2">
                    <Link to={ROUTES.HOME} className="hover:text-blue-600 transition-colors">Home</Link>
                    <span className="opacity-30">/</span>
                    <Link to={categoryUrl} className="hover:text-blue-600 transition-colors">{category}</Link>
                </nav>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
                    {title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
                            CG
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Author</p>
                            <p className="text-xs font-bold text-slate-900">CalcGuide Editorial</p>
                        </div>
                    </div>

                    <div className="h-8 w-px bg-slate-100 hidden sm:block"></div>

                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Category</p>
                        <p className="text-xs font-bold text-blue-600">{category}</p>
                    </div>

                    <div className="h-8 w-px bg-slate-100 hidden sm:block"></div>

                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Read Time</p>
                        <p className="text-xs font-bold text-slate-900">{readTime}</p>
                    </div>

                    <div className="h-8 w-px bg-slate-100 hidden sm:block"></div>

                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Updated</p>
                        <p className="text-xs font-bold text-slate-900">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleHeader;
