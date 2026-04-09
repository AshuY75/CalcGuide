import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function DiabetesHbA1cGuide() {
    const faqData = [
        {
            question: "What is a normal HbA1c level for Indians?",
            answer: "A normal HbA1c is below 5.7%. If your level is between 5.7% and 6.4%, you are in the 'Pre-diabetic' zone. Above 6.5% marks a diagnosis of Type 2 Diabetes. For Indians, transitioning from pre-diabetes to diabetes happens much faster than in other ethnicities."
        },
        {
            question: "Is HbA1c better than a routine blood sugar test?",
            answer: "Yes. A routine test (fasting/PP) is like a photograph—it shows your sugar at that exact second. HbA1c is like a 3-month video—it shows your average sugar over the last 90 days by measuring the glucose attached to your red blood cells. It's much harder to 'cheat' on an HbA1c test."
        },
        {
            question: "Can I still eat rice if I am pre-diabetic?",
            answer: "You can, but you must change the 'Ratio'. Instead of a mountain of rice with a little dal, move to a mountain of vegetables/dal with half a cup of rice. Switching to Basmati (lower glycemic index) or brown rice also helps."
        },
        {
            question: "Is raw honey or jaggery safer than sugar?",
            answer: "Biochemically, your liver treats them similarly. They all spike insulin. While jaggery (Gur) has some minerals, it is still ~95% sugar. For a diabetic, honey and jaggery are NOT 'safe' alternatives."
        },
        {
            question: "How often should I test my HbA1c?",
            answer: "If you are pre-diabetic or diabetic, every 3 months is the gold standard. If you are healthy but have a family history, once a year after age 30 is recommended."
        }
    ];

    const toc = [
        { id: "epidemic", title: "India: The World's Diabetes Capital" },
        { id: "hba1c-vs-sugar", title: "HbA1c vs. Blood Sugar: The Video vs. Snapshot" },
        { id: "ranges", title: "Ranges: Normal, Pre-diabetic, Diabetic" },
        { id: "starch", title: "The 'Starch' Problem in Indian Diets" },
        { id: "reverse", title: "Can Pre-diabetes be Reversed?" },
        { id: "hacks", title: "5 DESI Hacks for Sugar Control" },
        { id: "faq", title: "Diabetes FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Internal Medicine</h4>
                                <nav className="space-y-3">
                                    {toc.map(item => (
                                        <a 
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="block text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            
                            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 italic text-sm text-blue-800 leading-relaxed shadow-sm">
                                "Your DNA is only a part of the story. Your lifestyle is the pen that writes the rest. Control your sugar, control your life."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-indigo-50 rounded">Chronic Health Guide</span>
                                <span>•</span>
                                <span>25 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Diabetes & HbA1c: Why <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Indians</span> are at Higher Risk
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                In India, Diabetes isn't just a disease—it's a household name. But knowing you have it is only 10% of the battle. Understanding the **HbA1c math** is the other 90%.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-blue-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                                The "Sweet Spot" Reference
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                                <div>
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">Green Zone</p>
                                    <p className="text-3xl font-black text-emerald-400">HbA1c &lt; 5.7%</p>
                                    <p className="text-xs text-slate-400 mt-3 font-medium">You are safe! Maintain your protein and walking.</p>
                                </div>
                                <div className="border-l border-slate-800 md:pl-10">
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">Amber Zone</p>
                                    <p className="text-3xl font-black text-amber-500">5.7% — 6.4%</p>
                                    <p className="text-xs text-slate-400 mt-3 font-medium">Pre-diabetic. The final warning to change habits.</p>
                                </div>
                                <div className="border-l border-slate-800 md:pl-10">
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">Red Zone</p>
                                    <p className="text-3xl font-black text-rose-500">&gt; 6.5%</p>
                                    <p className="text-xs text-slate-400 mt-3 font-medium">Diabetic. Requires medical care and strict management.</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-sm">"Every 1% drop in HbA1c reduces the risk of heart failure by 16% and blindness by 37%."</p>
                                <Link to={ROUTES.CALCULATORS.HEALTH.BLOOD_SUGAR} className="px-8 py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition-all shadow-lg hover:-translate-y-1">
                                    Convert HbA1c to Glucose →
                                </Link>
                            </div>
                        </div>

                        <p>
                            India is currently facing a "Perfect Storm". We have the genetic predisposition (The Thrify Gene), our diets are carb-heavy, and our lifestyles are increasingly sedentary. Today, having a high 'sugar' is considered as normal as having a viral fever. **It isn't.**
                        </p>
                        
                        <p>
                            Diabetes is a silent killer because it doesn't hurt. You don't feel "sick" until your kidneys fail or your vision fades. To manage it, you must move from *guessing* to *measuring*.
                        </p>

                        <h2 id="epidemic" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. India: The World's Diabetes Capital</h2>
                        <p>
                            Recent studies by the ICMR and Madras Diabetes Research Foundation suggest that over **101 million Indians** are diabetic, and another **136 million** are pre-diabetic. That's nearly 1 in 4 adults in urban areas.
                        </p>
                        <p>
                            We are different from Caucasians. Even at a 'Normal' weight, we tend to have more abdominal fat (visceral fat), which causes **Insulin Resistance**. This is why the standard BMI of 25 is dangerous for us, and we use **23** as the cutoff.
                        </p>

                        <h2 id="hba1c-vs-sugar" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. HbA1c vs. Blood Sugar: The Video vs. Snapshot</h2>
                        <p>
                            If you take a glucose test in the morning, it depends on what you ate for dinner last night. If you ate a lot of salad, your sugar might look "Normal". 
                        </p>
                        <p>
                            **HbA1c (Hemoglobin A1c)** is different. Glucose in your blood sticks to hemoglobin (the protein in your red blood cells). Since red blood cells live for about 90-120 days, the amount of glucose stuck to them tells us your **Average Blood Sugar over 3 months**.
                        </p>
                        <div className="p-8 bg-indigo-50 border-l-4 border-indigo-600 rounded-r-3xl my-10 not-prose">
                            <p className="text-indigo-900 font-bold leading-relaxed">
                                💡 <strong>Smart Advisor Insight:</strong> Don't just celebrate a low fasting sugar test if your HbA1c is 7.5%. The HbA1c is showing the real damage being done during the other 23 hours of the day when you aren't fasting.
                            </p>
                        </div>

                        <h2 id="ranges" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. Decoding the HbA1c Matrix</h2>
                        <p>
                            What do these percentages actually mean in terms of daily blood sugar numbers?
                        </p>

                        <div className="my-12 overflow-hidden border border-slate-200 rounded-[2.5rem] shadow-xl not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">HbA1c %</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Estimated Avg. Glucose (eAG)</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Verdict</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="bg-emerald-50/20">
                                        <td className="p-8 text-emerald-800 font-black">5.0%</td>
                                        <td className="p-8 text-slate-600 font-medium">97 mg/dL</td>
                                        <td className="p-8 text-emerald-600 font-bold uppercase text-xs">Healthy</td>
                                    </tr>
                                    <tr className="bg-emerald-50/20">
                                        <td className="p-8 text-emerald-800 font-black">5.5%</td>
                                        <td className="p-8 text-slate-600 font-medium">111 mg/dL</td>
                                        <td className="p-8 text-emerald-600 font-bold uppercase text-xs">Healthy</td>
                                    </tr>
                                    <tr className="bg-amber-50/20">
                                        <td className="p-8 text-amber-800 font-black">6.0%</td>
                                        <td className="p-8 text-slate-600 font-medium">126 mg/dL</td>
                                        <td className="p-8 text-amber-600 font-bold uppercase text-xs">Pre-Diabetic</td>
                                    </tr>
                                    <tr className="bg-rose-50/10">
                                        <td className="p-8 text-rose-800 font-black">7.0%</td>
                                        <td className="p-8 text-slate-600 font-medium">154 mg/dL</td>
                                        <td className="p-8 text-rose-600 font-bold uppercase text-xs">Diabetic</td>
                                    </tr>
                                    <tr className="bg-rose-50/10">
                                        <td className="p-8 text-rose-800 font-black">8.0%</td>
                                        <td className="p-8 text-slate-600 font-medium">183 mg/dL</td>
                                        <td className="p-8 text-rose-600 font-bold uppercase text-xs">Poor Control</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="starch" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. The "Starch" Trap: Why your Desi Diet is Spiking Sugar</h2>
                        <p>
                            Many Indians say, "I don't eat sweets, then why is my sugar high?". 
                        </p>
                        <p>
                            The answer is **Starch**. Your body treats a bowl of white rice or three rotis exactly like it treats three spoons of sugar. Once digested, they all become glucose.
                        </p>
                        <p>
                            **The Glycemic Index (GI)** of Indian staples:
                            - White Rice: 72 (High)
                            - Maida Roti: 70 (High)
                            - Poha: 70 (High)
                            - Brown Rice: 50 (Medium)
                            - Chana Dal: 11 (Low)
                        </p>
                        <p>
                            If your plate is 80% Poha or Rice, your insulin will spike, and your HbA1c will climb.
                        </p>

                        <h2 id="reverse" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5. Can Pre-diabetes be Reversed?</h2>
                        <p>
                            **Yes.** Unlike late-stage diabetes, pre-diabetes (5.7 - 6.4%) is a reversible condition. 
                        </p>
                        <p>
                            The formula for reversal is the **"5% Weight Loss Rule"**. Clinical studies show that losing just 5-7% of your total body weight (e.g., 4kg if you are 80kg) can improve insulin sensitivity so much that your sugar levels return to the normal range.
                        </p>

                        <div className="my-20 p-12 bg-indigo-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-indigo-200 relative overflow-hidden not-prose">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-400/30 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl font-black mb-8">Measure it to Manage it.</h3>
                                <p className="text-indigo-100 mb-10 text-xl font-medium max-w-2xl mx-auto italic-selection">Got your lab reports? Check exactly what your HbA1c says about your average daily sugar.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.HEALTH.BLOOD_SUGAR} className="px-10 py-5 bg-white text-indigo-600 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1">
                                        HbA1c to Glucose Calc →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.HEALTH.BMI} className="px-10 py-5 bg-indigo-900 text-white font-black rounded-2xl hover:bg-indigo-950 transition-all border border-indigo-500/30">
                                        Check My Indian BMI
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <h2 id="hacks" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">6. 5 DESI Hacks for Better Sugar Control</h2>
                        <div className="space-y-10 my-16">
                            {[
                                { t: "The Walk-after-Meal Rule", d: "Walking for just 10 minutes right after lunch and dinner helps your muscles 'soak up' the glucose from your blood without needing extra insulin." },
                                { t: "Fiber First, Carbs Last", d: "Always start your meal with a bowl of cucumber, carrot, or boiled dal. Fiber creates a web in your gut that slows down the absorption of sugar from the rotis you eat next." },
                                { t: "Swap Rice for Millets?", d: "Don't just swap white rice for brown rice. Try Millets (Bajra, Ragi, Jowar). They have more fiber and keep you full for 4 hours instead of 2." },
                                { t: "The 12-Hour Gap", d: "Try 'Intermittent Fasting Lite'. Finish dinner by 8 PM and eat breakfast at 8 AM. This 12-hour gap allows your insulin levels to drop to their baseline." },
                                { t: "Strength Training", d: "Cardio is good, but lifting weights (even at home) is better for diabetics. Muscle is the biggest glucose dump in your body. More muscle = lower HbA1c." }
                            ].map((hack, idx) => (
                                <div key={idx} className="flex gap-8 group">
                                    <div className="flex-shrink-0 w-16 h-16 bg-slate-100 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl font-black group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 mb-2">{hack.t}</h4>
                                        <p className="text-slate-600 text-lg leading-relaxed font-medium">{hack.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic italic-selection">Diabetes Doubts, Simplified</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
