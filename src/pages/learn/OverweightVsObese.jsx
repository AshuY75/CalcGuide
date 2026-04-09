import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function OverweightVsObese() {
    const faqData = [
        {
            question: "Why is the BMI cutoff lower for Indians?",
            answer: "Research shows that Indians develop diabetes and heart disease at a much lower BMI than Caucasians. While a Westerner might be safe at a BMI of 25, an Indian begins showing 'metabolic damage' at 23. Thus, the Ministry of Health (India) lowered the 'Normal' cutoff to 22.9."
        },
        {
            question: "Is being 'Overweight' the same as being 'Obese'?",
            answer: "No. 'Overweight' (BMI 23-24.9 in India) is a warning zone where your weight is higher than ideal but hasn't reached critical risk. 'Obesity' (BMI >25 in India) is a clinical condition where the excess fat starts significantly interfering with your organ functions."
        },
        {
            question: "What is the 'Waist-to-Height' ratio?",
            answer: "It is a better predictor of health than BMI. Your waist circumference should be less than HALF of your height. For example, if you are 170cm tall, your waist should be below 85cm (33.5 inches). If it's more, you have 'Central Obesity', regardless of your BMI."
        },
        {
            question: "Can I be 'Thin-Fat' or 'Skinny Fat'?",
            answer: "Yes. This is common in India. You might look thin in a shirt, but have a high body fat percentage and a soft stomach. This is called 'Metabolically Obese Normal Weight' (MONW). It is just as dangerous as being visibly obese."
        },
        {
            question: "Will walking 30 minutes a day cure obesity?",
            answer: "Walking is a great start for cardiovascular health, but for fat loss, it must be combined with a calorie deficit. You cannot 'out-walk' a bad diet."
        }
    ];

    const toc = [
        { id: "cutoff", title: "The Indian Cutoff: Why 23 is the new 25" },
        { id: "difference", title: "Overweight vs. Obese: The Definitions" },
        { id: "visceral", title: "Visceral Fat: The Hidden Killer" },
        { id: "waist", title: "The Tummy Test (Waist-to-Height Ratio)" },
        { id: "grades", title: "Obesity Grades (1, 2, and 3)" },
        { id: "plan", title: "Action Plan: Moving back to 'Normal'" },
        { id: "faq", title: "Obesity FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Clinical Standards</h4>
                                <nav className="space-y-3">
                                    {toc.map(item => (
                                        <a 
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="block text-sm font-bold text-slate-500 hover:text-rose-600 transition-colors"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-sm text-slate-600 leading-relaxed shadow-sm">
                                "Your weight is just a number, but your waist circumference is a prophecy. Change the number to change your future."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-rose-600 hover:prose-a:text-rose-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-rose-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-rose-50 rounded">Epidemiology</span>
                                <span>•</span>
                                <span>22 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Overweight vs Obese: <span className="text-rose-600">The Harsh Reality</span> of Indian BMI Standards
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                If you think you're "just a little healthy" or "pleasantly plump," you might be in for a shock. By Indian medical standards, you might already be clinically **Obese**.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-rose-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></span>
                                The Indian BMI Cutoffs (2025)
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                                <div className="p-6 bg-emerald-900/40 rounded-3xl border border-emerald-500/30">
                                    <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-2">Normal</p>
                                    <p className="text-2xl font-black text-white">18.5 — 22.9</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Safest Zone for Indians</p>
                                </div>
                                <div className="p-6 bg-amber-900/40 rounded-3xl border border-amber-500/30">
                                    <p className="text-amber-400 text-[10px] font-black uppercase tracking-widest mb-2">Overweight</p>
                                    <p className="text-2xl font-black text-white">23.0 — 24.9</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Warning: Metabolic Risk</p>
                                </div>
                                <div className="p-6 bg-rose-900/40 rounded-3xl border border-rose-500/30">
                                    <p className="text-rose-400 text-[10px] font-black uppercase tracking-widest mb-2">Obese</p>
                                    <p className="text-2xl font-black text-white">&gt; 25.0</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Clinical Obesity Stage</p>
                                </div>
                                <div className="p-6 bg-slate-800/40 rounded-3xl border border-slate-500/30">
                                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Global Std.</p>
                                    <p className="text-2xl font-black text-slate-500">25.0 — 29.9</p>
                                    <p className="text-[10px] text-slate-500 mt-2 font-medium">Doesn't apply to us!</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-sm">"At a BMI of 25, an Indian has the same diabetes risk as a European at a BMI of 30."</p>
                                <Link to={ROUTES.CALCULATORS.HEALTH.BMI} className="px-8 py-4 bg-rose-600 text-white font-black rounded-2xl hover:bg-rose-700 transition-all shadow-lg hover:-translate-y-1">
                                    Check My Indian BMI →
                                </Link>
                            </div>
                        </div>

                        <p>
                            We have a cultural problem in India. We associate being "thin" with being weak or poor, and being "heavy" with being prosperous. Parents often tell their children, "Shat (Health) achi hai ladke ki" when the boy is clearly overweight. 
                        </p>
                        
                        <p>
                            This cultural bias is killing us. Indians develop 'Lifestyle Diseases' 10 years earlier than the rest of the world. To fight this, we must first stop using labels like "Healthy build" and start using **Medical Standards**.
                        </p>

                        <h2 id="cutoff" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. Why 23 is the new 25: The Science of Insulin Resistance</h2>
                        <p>
                            The BMI (Body Mass Index) scale used by most apps and gyms is the **WHO Global Standard**. It says 25-29 is Overweight.
                        </p>
                        <p>
                            However, the **Ministry of Health (Govt of India)** and the **Association of Physicians of India** have officially lowered the cutoff for us. Why?
                        </p>
                        <p>
                            Because Indians have more **Visceral Fat** (fat around the organs) even at a lower weight. This fat is metabolically active—it releases chemicals that cause inflammation and make your body resistant to insulin, leading to Type-2 Diabetes.
                        </p>

                        <h2 id="difference" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Overweight vs. Obese: Understanding the Line</h2>
                        
                        <p>
                            **Overweight (BMI 23-24.9)**: Think of this as the "Yellow Light" at a traffic signal. You aren't in immediate danger, but your body is starting to store excess fat in places it shouldn't. If you stop here and reverse, you avoid 90% of chronic diseases.
                        </p>
                        
                        <p>
                            **Obese (BMI &gt; 25)**: This is the "Red Light". At this stage, fat cells are no longer just storage units; they are affecting your hormones, putting pressure on your heart, and straining your joints. 
                        </p>

                        <h2 id="visceral" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. Visceral Fat: The Hidden Killer</h2>
                        <p>
                            You can have a BMI of 22 (Normal) and still be at risk. How? **The Potbelly.**
                        </p>
                        <p>
                            If your fat is stored mostly around your waist (Apples-shape), it is far more dangerous than if it is stored on your hips or thighs (Pear-shape). Visceral fat wraps around your liver, pancreas, and heart. It is the leading cause of **Fatty Liver** in India.
                        </p>

                        <div className="my-12 p-10 bg-rose-50 border-4 border-rose-100 rounded-[3rem] shadow-sm not-prose">
                            <h4 className="text-rose-900 font-black text-2xl mb-4 italic underline decoration-rose-200">The "Indian Paradox"</h4>
                            <p className="text-rose-800 leading-relaxed font-medium">
                                Indians are predisposed to "Skinny Fat" syndrome. We have thin arms and legs but large bellies. This happens because our bodies are evolved to survive famines (by storing fat efficiently) but are now living in a world of unlimited sugar and white flour.
                            </p>
                        </div>

                        <h2 id="waist" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. The Tummy Test: Waist-to-Height Ratio</h2>
                        <p>
                            Don't have a weighing scale? Grab a measuring tape. 
                        </p>
                        <p>
                            **Step 1**: Measure your height in Centimeters. <br/>
                            **Step 2**: Measure your waist at the level of your belly button. <br/>
                            **Step 3**: Divide Waist / Height.
                        </p>
                        <p className="text-2xl font-black text-slate-900 mt-8 italic">
                            The Result should be &lt; 0.5.
                        </p>
                        <p>
                            If your ratio is **0.5 to 0.6**, you are in the "High Risk" zone. If it's **&gt; 0.6**, you are in the "Very High Risk" zone. This test is often more accurate than BMI because it directly measures your belly fat.
                        </p>

                        <h2 id="grades" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5. Obesity Grades (1, 2, and 3)</h2>
                        <p>
                            In India, we don't just stop at "Obese". We categorize it to help doctors decide the treatment.
                        </p>

                        <div className="my-12 overflow-hidden border border-slate-200 rounded-[2.5rem] shadow-xl not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Category</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">BMI Range (India)</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Health Risk</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="p-8 text-amber-700 font-bold italic">Grade 1 Obesity</td>
                                        <td className="p-8 text-slate-900 font-black">25.0 — 29.9</td>
                                        <td className="p-8 text-slate-500 font-medium italic-selection">High risk of blood pressure and sugar.</td>
                                    </tr>
                                    <tr className="bg-rose-50/20">
                                        <td className="p-8 text-rose-700 font-bold italic">Grade 2 Obesity</td>
                                        <td className="p-8 text-slate-900 font-black">30.0 — 34.9</td>
                                        <td className="p-8 text-slate-500 font-medium italic-selection">Very high risk. Joints and Heart strain starts.</td>
                                    </tr>
                                    <tr className="bg-rose-100/30">
                                        <td className="p-8 text-rose-900 font-black">Grade 3 (Morbid)</td>
                                        <td className="p-8 text-rose-950 font-black">&gt; 35.0</td>
                                        <td className="p-8 text-rose-800 font-bold italic-selection">Life-threatening. Requires immediate medical intervention.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="my-24 p-14 bg-rose-600 rounded-[4rem] text-white text-center shadow-3xl shadow-rose-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-rose-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Stop Guessing. Know Your Code.</h3>
                                <p className="text-rose-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Our BMI tool uses the scientific 23/25 cutoffs tailored for the Indian biology.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.HEALTH.BMI} className="px-12 py-6 bg-white text-rose-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Check My Indian BMI →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.HEALTH.BODY_FAT} className="px-12 py-6 bg-rose-950 text-white font-black rounded-3xl hover:bg-black transition-all border border-rose-400/30">
                                        Calc Body Fat %
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <h2 id="plan" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">6. Action Plan: Moving back to 'Normal'</h2>
                        <div className="space-y-12 my-16">
                            {[
                                { t: "The 10% Goal", d: "Don't aim for a 20kg loss. Aim to lose 5-10% of your CURRENT weight in 6 months. This small drop reverses almost all metabolic damage." },
                                { t: "Resistance over Cardio", d: "Walking is good, but lifting weights (even water bottles) forces your body to USE the fat stored in your belly to build muscle." },
                                { t: "Liquid Calories are Enemy #1", d: "Cold drinks, juices, and sugary chai hit your liver instantly, causing fat storage. Switch to water, butter milk, or plain soda." },
                                { t: "Track your Waist, not just Weight", d: "Sometimes the scale doesn't move because you are gaining muscle and losing fat. Use a tape. If the waist is shrinking, you are winning." }
                            ].map((hack, idx) => (
                                <div key={idx} className="flex gap-8 group">
                                    <div className="flex-shrink-0 w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-2xl font-black group-hover:bg-rose-600 transition-colors shadow-lg">
                                        {idx + 1}
                                    </div>
                                    <div className="pb-10 border-b border-slate-100 last:border-0">
                                        <h4 className="text-2xl font-black text-slate-900 mb-3">{hack.t}</h4>
                                        <p className="text-slate-600 text-lg leading-relaxed font-medium italic-selection">{hack.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic italic-selection">Obesity Myths, Debunked</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
