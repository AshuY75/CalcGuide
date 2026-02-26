import React from 'react';

export default function AuthorBio() {
    return (
        <div className="mt-16 pt-8 border-t border-slate-200">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                <div className="flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-inner">
                        AY
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                        <h4 className="text-xl font-bold text-slate-900 m-0">Ashu Yadav</h4>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wider">
                            Senior Associate Engineer
                        </span>
                    </div>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                        Ashu Yadav is a Senior Associate Engineer at CalcGuide, specializing in financial software architecture and precision-math implementations. With over 6 years of experience in full-stack development and algorithmic design, he leads the technical strategy for CalcGuide's suite of 50+ financial tools. His focus is on making complex Indian taxation and investment rules accessible through clean code and user-centric design.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        <span className="text-xs bg-white px-2 py-1 rounded border border-slate-200 text-slate-500">Expertise: Taxation</span>
                        <span className="text-xs bg-white px-2 py-1 rounded border border-slate-200 text-slate-500">Wealth Management</span>
                        <span className="text-xs bg-white px-2 py-1 rounded border border-slate-200 text-slate-500">System Architecture</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
