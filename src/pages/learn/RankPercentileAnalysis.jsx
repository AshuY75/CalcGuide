import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';


export const metadata = {
    title: "JEE & NEET Rank Analysis: How Percentile vs Rank Works in 2025",
    description: "Got your percentile but don't know your rank? Learn how NTA calculates percentiles, the difference between session-wise ranks, and how many marks you need for top NITs and IITs.",
    category: "STUDENT",
    slug: ROUTES.LEARN.JEE_NEET_RANK_ANALYSIS,
    date: "2025-02-22",
    icon: "📊",
    colorClass: "bg-red-100",
    isNew: true
};

export default function RankPercentileAnalysis() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="JEE & NEET Rank Analysis: How Percentile vs Rank Works in 2025"
                description="Got your percentile but don't know your rank? Learn how NTA calculates percentiles, the difference between session-wise ranks, and how many marks you need for top NITs and IITs."
                type="Article"
                url="https://calcguide.in/learn/jee-neet-rank-vs-percentile-analysis/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Rank Analysis</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Rank vs Percentile:<br /> Decoding the NTA Score
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        A 99 percentile sounds great. But with 12 lakh students, it means 12,000 people are ahead of you. Here is the math.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>What is NTA Percentile?</h2>
                    <p>
                        A <strong>Percentile score</strong> is not a percentage. It tells you what percentage of candidates scored equal to or less than you in that session. If you got a 90 percentile, it means 90% of the students scored less than you, and you are in the top 10%.
                    </p>

                    <h2>How to Calculate Estimated Rank</h2>
                    <p>
                        To find your All India Rank (AIR), you need to know the total number of unique candidates who appeared for the exam across all sessions.
                    </p>
                    <div className="bg-red-50 p-6 rounded-xl my-8 border-l-4 border-red-600">
                        <h4 className="text-red-900 mt-0">The AIR Formula:</h4>
                        <p className="text-xl font-mono text-center my-4 font-bold">Rank = (100 - Percentile) × (Total Students / 100) + 1</p>
                    </div>

                    <h3>The Competition Gap (2024 vs 2025)</h3>
                    <p>
                        In 2024, the number of JEE Main applicants reached a record 12.3 Lakhs. This meant that the "rank inflation" was severe. A 99 percentile which usually fetched a 10,000 rank in previous years, resulted in a ~13,500 rank. For 2025, if the applicant count touches 13-14 Lakhs, the cutoff for NITs will likely rise further.
                    </p>

                    <h3>Category vs Open Rank</h3>
                    <p>
                        Recruiting and admission for NITs, IIITs, and IITs use both <strong>Common Rank List (CRL)</strong> and <strong>Category Rank</strong>. While your CRL is based on the total pool, your category rank only compares you against students of the same category (EWS, OBC-NCL, SC, ST).
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-red-400 font-bold mb-2">The 'Safe' Zone</h4>
                        <p className="mb-0 text-slate-300">"99 is the magic number." For a guaranteed seat in Top 5 NITs in a core branch (CS, IT, EC), you generally need a percentile above **99.2**. For IITs, JEE Main is just a qualifier—the real battle is JEE Advanced where only the top 2.5 Lakh students are invited.</p>
                    </div>

                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.STUDENT.RANK_PERCENTILE} className="inline-block p-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition shadow-lg">
                            Predict My Rank Now
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
