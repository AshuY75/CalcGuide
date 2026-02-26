import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "University SGPA/CGPA to Percentage: VTU, MU, CBSE Formulas",
    description: "Looking for your university's specific percentage formula? We've compiled the latest 2025 calculation rules for VTU, Mumbai University, Savitribai Phule (SPPU), and CBSE.",
    category: "STUDENT",
    slug: ROUTES.LEARN.SGPA_TO_PERCENTAGE,
    date: "2025-02-22",
    icon: "📜",
    colorClass: "bg-cyan-100",
    isNew: true
};

export default function SGPAToPercentageGuide() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="University SGPA/CGPA to Percentage: VTU, MU, CBSE Formulas"
                description="Looking for your university's specific percentage formula? We've compiled the latest 2025 calculation rules for VTU, Mumbai University, Savitribai Phule (SPPU), and CBSE."
                type="Article"
                url="https://calcguide.in/learn/sgpa-to-percentage-university-formulas/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">University Formulas</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        University Formulas:<br /> Converting Grades to Percentage
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Applying for a job, CAT, or UPSC? You need the exact multiplier for your specific board or university to be eligible.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>Why do formulas differ?</h2>
                    <p>
                        In India, education is a state subject, and universities have the freedom to set their own grading benchmarks. Some universities like <strong>Mumbai University</strong> have unique offsets, while <strong>VTU</strong> follows a derivative of the 10-point scale. Using the wrong formula on a job application can lead to disqualification for "misreporting marks".
                    </p>

                    <h3>1. VTU (Visvesvaraya Technological University)</h3>
                    <p>For engineering students in Karnataka, the formula is strictly regulated:</p>
                    <div className="bg-cyan-50 p-6 rounded-xl my-4 text-center border border-cyan-200 shadow-inner">
                        <p className="text-2xl font-black text-cyan-900 m-0">Percentage = (CGPA - 0.75) × 10</p>
                        <p className="text-xs text-slate-500 mt-2 italic">Example: A 7.75 CGPA is exactly 70.0%.</p>
                    </div>

                    <h3>2. Mumbai University (MU)</h3>
                    <p>MU has several systems, but for the Choice Based Credit System (CBCS):</p>
                    <div className="bg-cyan-50 p-6 rounded-xl my-4 text-center border border-cyan-200 shadow-inner">
                        <p className="text-2xl font-black text-cyan-900 m-0">Percentage = 7.1 × CGPA + 11</p>
                        <p className="text-xs text-cyan-700 mt-2"><em>(Note: For CGPA below 7, different tables apply)</em></p>
                    </div>

                    <h3>3. CBSE & Standard 10-Point Scales</h3>
                    <p>The standard multiplier used by CBSE and many central universities:</p>
                    <div className="bg-cyan-50 p-6 rounded-xl my-4 text-center border border-cyan-200 shadow-inner">
                        <p className="text-2xl font-black text-cyan-900 m-0">Percentage = CGPA × 9.5</p>
                    </div>

                    <h3>4. Anna University & KTU (Kerala)</h3>
                    <p>These typically use a direct linear multiplier:</p>
                    <div className="bg-cyan-50 p-6 rounded-xl my-4 text-center border border-cyan-200 shadow-inner">
                        <p className="text-2xl font-black text-cyan-900 m-0">Percentage = CGPA × 10</p>
                    </div>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-cyan-400 font-bold mb-2 italic">Essential Verification</h4>
                        <p className="mb-0 text-slate-300">"Look behind the paper." The absolute most accurate formula for your specific degree is **always printed on the reverse side of your original final year marksheet**. If there's a conflict between an online calculator and your marksheet, always trust the marksheet as that's what the verification team will check!</p>
                    </div>

                    <h3>Convert Your Score Now</h3>
                    <p>Don't do the math by hand and risk an error. Use our university-specific tool to get the correct percentage instantly.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.STUDENT.CGPA_PERCENTAGE} className="inline-block p-4 bg-cyan-600 text-white rounded-xl font-bold hover:bg-cyan-700 transition shadow-lg">
                            📜 University Grade Converter →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
