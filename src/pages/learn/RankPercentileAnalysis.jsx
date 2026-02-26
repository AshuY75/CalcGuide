import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

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
                        A 99 percentile sounds great. But with 12 lakh students, it means 12,000 people are ahead of you. Here is the math behind the competition.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>What is NTA Percentile?</h2>
                    <p>
                        A <strong>Percentile score</strong> is not a percentage. It tells you what percentage of candidates scored equal to or less than you in that specific session. If you got a 90 percentile, it means 90% of the students scored less than you, and you are in the top 10% of that session.
                    </p>
                    <p>The NTA uses a <strong>Normalisation Process</strong> to ensure that students in a "hard" session aren't disadvantaged compared to students in an "easy" session. This is why you can't compare raw marks directly across different dates.</p>

                    <h2>How to Calculate Estimated Rank</h2>
                    <p>
                        To find your All India Rank (AIR), you need to know the total number of unique candidates who appeared for the exam across <em>all</em> sessions (January and April for JEE).
                    </p>
                    <div className="bg-red-50 p-8 rounded-2xl my-8 border-l-4 border-red-600 shadow-inner">
                        <h4 className="text-red-900 mt-0 font-bold">The AIR Formula:</h4>
                        <p className="text-xl font-mono text-center my-4 font-black p-4 bg-white rounded-xl border border-red-100">
                            Rank = (100 - Percentile) × (Total Students / 100) + 1
                        </p>
                        <p className="text-sm text-slate-600">Where <em>Total Students</em> is the number of unique candidates who took at least one session.</p>
                    </div>

                    <h3>The Competition Gap (2024 Trends)</h3>
                    <p>
                        In 2024, the number of JEE Main applicants reached a record 12.3 Lakhs. This meant that the "rank inflation" was severe.
                    </p>
                    <ul>
                        <li><strong>99 Percentile:</strong> Approximately 13,000 - 14,000 Rank. (Usually got you a CS seat in a mid-tier NIT).</li>
                        <li><strong>95 Percentile:</strong> Approximately 65,000 Rank. (Getting a seat in an NIT in a core branch becomes difficult for the general category).</li>
                        <li><strong>90 Percentile:</strong> Approximately 1,30,000 Rank. (This is often the cutoff for JEE Advanced qualification).</li>
                    </ul>

                    <h3>Marks vs Percentile (The Volatility)</h3>
                    <p>Depending on the difficulty of the paper, 200 marks could fetch you a 99.5 percentile in one session and only a 98 percentile in another. This is why coaches focus on <strong>accuracy</strong> rather than just attempting questions.</p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-red-400 font-bold mb-2 italic">Pro Tip for Aspiring Engineers</h4>
                        <p className="mb-0 text-slate-300">"99 is the starting point, not the finish line." For CS at top-tier NITs (Trichy, Surathkal, Warangal), you need a percentile above **99.6**. If you are scoring between 96-98, focus on improving your Chemistry marks—it's the highest ROI subject in terms of effort vs percentile gain.</p>
                    </div>

                    <h3>Percentile vs Category Rank</h3>
                    <p>
                        If you belong to EWS, OBC-NCL, SC, or ST categories, your admission is based on your <strong>Category Rank</strong>. However, the NTA initially only provides your overall percentile. Your category rank is calculated separately based on the number of students within your specific category. Even with an 85 percentile, an ST candidate can often get a top-tier NIT branch that would require a 98 percentile for a General candidate.
                    </p>

                    <h3>Predict Your Admission Chances</h3>
                    <p>Don't wait for the official results to start your college research. Use our calculator to convert your current score into an estimated rank.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.STUDENT.RANK_PERCENTILE} className="inline-block px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition shadow-lg">
                            📊 Predict My Rank Now →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
