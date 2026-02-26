import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "SGPA vs CGPA: The Complete Guide for Indian Students",
    description: "Confused between SGPA and CGPA? Learn the key differences, calculation methods, and how to convert them into a percentage for job applications.",
    category: "STUDENT",
    slug: ROUTES.LEARN.SGPA_VS_CGPA,
    date: "2025-02-22",
    icon: "🎓",
    colorClass: "bg-blue-100",
    isNew: true
};

export default function SGPACGPAGuide() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="SGPA vs CGPA: The Complete Guide for Indian Students"
                description="Confused between SGPA and CGPA? Learn the key differences, calculation methods, and how to convert them into a percentage for job applications."
                type="Article"
                url="https://calcguide.in/learn/sgpa-vs-cgpa-difference-calculation-guide/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">SGPA vs CGPA</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        SGPA vs CGPA:<br /> Mastering Your Academic Grades
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Universal grading systems used by VTU, Mumbai University, CBSE, and KTU explained in simple terms.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>What is SGPA?</h2>
                    <p>
                        <strong>SGPA (Semester Grade Point Average)</strong> is a measure of your academic achievement in a single semester. It is calculated by taking the sum of the product of your grade points and the credits of the subject, divided by the total number of credits for that semester.
                    </p>
                    <p>Think of it as your <strong>Short-term Performance</strong> indicator. A bad SGPA in one semester isn't the end of the world, but it tells you where you need to improve.</p>

                    <h2>What is CGPA?</h2>
                    <p>
                        <strong>CGPA (Cumulative Grade Point Average)</strong> is the "Final Boss". It is the average of all your SGPAs throughout the entire course (e.g., all 8 semesters of Engineering).
                    </p>
                    <p>Recruiters and higher education institutions (like for IIMs or Masters abroad) use your CGPA as a primary filter. A consistent CGPA above 8.0 is generally considered excellent in the Indian context.</p>

                    <div className="bg-blue-50 p-6 rounded-xl my-8 border-l-4 border-blue-600 shadow-sm">
                        <h4 className="text-blue-900 mt-0 font-bold">Key Difference at a Glance:</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-700">
                            <li><strong>SGPA:</strong> Reflects performance for 6 months (one semester).</li>
                            <li><strong>CGPA:</strong> Reflects performance for the entire course (3-4 years).</li>
                            <li><strong>Recovery:</strong> A high SGPA in the next semester can help "pull up" a low CGPA.</li>
                        </ul>
                    </div>

                    <h3>How to calculate CGPA from SGPA?</h3>
                    <p>Usually, the formula is simple: add all your SGPAs and divide by the number of semesters. However, some universities use <strong>Weighted Averages</strong> where final-year semesters carry more weight than first-year ones. Always check your university transcript's footer for the official method.</p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-blue-400 font-bold mb-2 italic">Pro Tip for Job Seekers</h4>
                        <p className="mb-0 text-slate-300">"The 7.5 Rule." Most Tier-1 tech companies and 'Big 4' consulting firms set their initial cutoff at a CGPA of **7.5 or 8.0**. If your CGPA is borderline (say 7.4), focus on getting your final semester SGPA as high as possible—many companies will overlook a slightly lower CGPA if they see a strong 'upward trend' in recent results.</p>
                    </div>

                    <h3>Standard Conversion Multiplying Factor</h3>
                    <p>Since many applications require a "Percentage (%)", universities provide a multiplier. The most common one for CBSE and many engineering colleges is <strong>9.5</strong>. But beware: Mumbai University and VTU have different rules.</p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Link to={ROUTES.CALCULATORS.STUDENT.SGPA} className="flex-1 text-center p-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">
                            ⌨️ Calculate SGPA Now
                        </Link>
                        <Link to={ROUTES.CALCULATORS.STUDENT.CGPA_PERCENTAGE} className="flex-1 text-center p-4 border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition">
                            CGPA to % Converter →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
