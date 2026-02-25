import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';


export const metadata = {
    title: "Time & Work Mastery: Solving Competitive Exam Math Faster",
    description: "Struggling with 'Man-Days' and 'Efficiency' problems? Learn the Work-Rate-Time formula and shortcut tricks for JEE, SSC, and Banking exams.",
    category: "STUDENT",
    slug: ROUTES.LEARN.TIME_WORK_MASTERY,
    date: "2025-02-22",
    icon: "⏳",
    colorClass: "bg-emerald-100",
    isNew: true
};

export default function TimeWorkMastery() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="Time & Work Mastery: Solving Competitive Exam Math Faster"
                description="Struggling with 'Man-Days' and 'Efficiency' problems? Learn the Work-Rate-Time formula and shortcut tricks for JEE, SSC, and Banking exams."
                type="Article"
                url="https://calcguide.in/learn/time-work-math-mastery-shortcuts/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Time & Work</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Time & Work Mastery:<br /> Shortcuts for Aptitude Exams
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        A can do a job in 10 days, B can do it in 15. How long together? Learn why the answer isn't 12.5.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The Fundamental Work Principle</h2>
                    <p>
                        The biggest mistake students make is averaging the days. You must average the <strong>Rate of Work</strong>.
                    </p>
                    <div className="bg-emerald-50 p-6 rounded-xl my-8 border-l-4 border-emerald-600">
                        <h4 className="text-emerald-900 mt-0">The Formula:</h4>
                        <p className="text-xl font-mono text-center my-4">Total Time = 1 / ( (1/A) + (1/B) + (1/C) )</p>
                    </div>

                    <h3>Concept 1: Efficiency</h3>
                    <p>
                        If A is 200% more efficient than B, it means A takes <strong>half</strong> the time B takes. Efficiency is inversely proportional to time. In competitive exams, always convert days into "Work per Day" (Units) to make the math easier.
                    </p>

                    <h3>Concept 2: Man-Day Formula</h3>
                    <p>
                        For group work, remember the <strong>MDH Formula</strong>:
                    </p>
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-center font-mono italic">
                        (M1 × D1 × H1) / W1 = (M2 × D2 × H2) / W2
                    </div>
                    <p className="text-sm text-slate-500 mt-2">
                        M = Men, D = Days, H = Hours, W = Work done.
                    </p>

                    <h3>Concept 3: Alternating Days</h3>
                    <p>
                        In many problems, workers work on alternate days (Day 1: A, Day 2: B). To solve these, find the total work done in one <strong>cycle</strong> (2 days) and then see how many cycles it takes to reach the total work.
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-emerald-400 font-bold mb-2">The Exam Trick</h4>
                        <p className="mb-0 text-slate-300">"Always pick a 'Total Work' number." If A takes 12 days and B takes 15, assume the Total Work is the LCM of 12 and 15, which is 60 units. This lets you work with whole numbers instead of fractions!</p>
                    </div>

                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.STUDENT.TIME_WORK} className="inline-block p-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition shadow-lg">
                            Practice with the Time & Work Solver
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
