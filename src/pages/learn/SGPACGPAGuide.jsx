import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';


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
                <div className="max-w-4xl mx-auto px-4 text-center sm:text-left">
                    <nav className="text-sm text-slate-500 mb-4 justify-center sm:justify-start flex items-center gap-2">
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
                        <strong>SGPA (Semester Grade Point Average)</strong> measures your academic performance in a single semester. It is the average of the grade points you earned across all subjects in that specific term, weighted by the credits of each subject.
                    </p>

                    <h2>What is CGPA?</h2>
                    <p>
                        <strong>CGPA (Cumulative Grade Point Average)</strong> is the mean of all your SGPAs across all semesters (usually 8 for engineering, 6 for degree courses). It is the final score that appears on your degree certificate and is used by recruiters for shortlisting.
                    </p>

                    <div className="bg-blue-50 p-6 rounded-xl my-8 border-l-4 border-blue-600">
                        <h4 className="text-blue-900 mt-0">Key Difference at a Glance</h4>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                            <li><strong>Scope</strong>: SGPA is for one semester; CGPA is for the entire course.</li>
                            <li><strong>Calculation</strong>: SGPA uses credits of subjects; CGPA usually uses the average of SGPAs.</li>
                            <li><strong>Importance</strong>: SGPA shows short-term improvement; CGPA determines your final division (1st Class, Distinction).</li>
                        </ul>
                    </div>

                    <h3>How to Convert CGPA to Percentage?</h3>
                    <p>
                        Most Indian universities use a multiplier to convert CGPA to a percentage for CAT, UPSC, or Job applications.
                    </p>
                    <ul>
                        <li><strong>CBSE/Standard</strong>: CGPA × 9.5</li>
                        <li><strong>Mumbai University</strong>: (CGPA * 7.1) + 11 [Old System] or specific multipliers for CBGS.</li>
                        <li><strong>VTU</strong>: (CGPA - 0.75) × 10</li>
                    </ul>

                    <h3>Why does it matter?</h3>
                    <p>
                        A high SGPA in the final years can pull up a mediocre CGPA from previous years. Companies often look for a "steady or upward" trend in SGPA, as it shows the student is becoming more focused as the subjects get harder.
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-blue-400 font-bold mb-2">Pro Tip for Students</h4>
                        <p className="mb-0 text-slate-300 italic">
                            "Always check if your university uses a weighted average or a simple average for CGPA. In some systems, final year credits carry more weightage than first year credits!"
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <Link to={ROUTES.CALCULATORS.STUDENT.SGPA} className="flex-1 text-center p-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition">
                            Calculate SGPA Now
                        </Link>
                        <Link to={ROUTES.CALCULATORS.STUDENT.CGPA_PERCENTAGE} className="flex-1 text-center p-4 border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition">
                            CGPA to % Converter
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
