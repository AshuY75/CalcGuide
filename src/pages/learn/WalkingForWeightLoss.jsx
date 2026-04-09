import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function WalkingForWeightLoss() {
    const faqData = [
        {
            question: "Is 10,000 steps really a scientific requirement?",
            answer: "Strictly speaking, no. The number '10,000' was a marketing slogan created in Japan in the 1960s to sell 'Manpo-kei' (10,000-step meter). However, science shows that significant health benefits start at 7,000 to 8,000 steps. For weight loss, it's not just the steps, but the calorie deficit that matters."
        },
        {
            question: "How many calories do I burn in 10,000 steps?",
            answer: "An average person burns about 300 to 500 calories in 10,000 steps, depending on their weight and speed. For an Indian, weight-wise, it's usually around 350-400 calories—roughly equivalent to one plate of Poha and a sweet tea."
        },
        {
            question: "Is walking better than running for fat loss?",
            answer: "For most people, yes. Walking is low-impact, meaning you can do it every day without injuring your knees. It also keeps your heart rate in the 'Fat Burning Zone' (60-70% of Max HR) more consistently than intense running, which might burn more carbs than fat."
        },
        {
            question: "Does the speed (pace) of walking matter?",
            answer: "Absolutely. A leisure stroll (like window shopping) doesn't increase your heart rate enough for metabolic benefits. Aim for 'Brisk Walking'—a pace where you can talk but not sing. Usually, this is 5-6 km/h."
        },
        {
            question: "Can I walk on an empty stomach (Fasted Cardio)?",
            answer: "Yes, it's safe for most healthy people and may help burn a slightly higher percentage of fat. However, the best time to walk is the time you can consistently stick to every single day."
        }
    ];

    const toc = [
        { id: "origin", title: "The 10k Step Myth: Marketing vs Science" },
        { id: "cal-math", title: "Samosa-Step Math: What you keep burning" },
        { id: "neat", title: "NEAT: The Secret to Lean Indians" },
        { id: "pace", title: "Brisk Walking: The 'Talk-Sing' Test" },
        { id: "strategy", title: "7-Day Walking Blueprint" },
        { id: "hacks", title: "5 Hacks to hit your steps effortlessly" },
        { id: "faq", title: "Walking FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Exercise Science</h4>
                                <nav className="space-y-3">
                                    {toc.map(item => (
                                        <a 
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="block text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            
                            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 italic text-sm text-emerald-900 leading-relaxed shadow-sm">
                                "Walking is the easiest way to lose weight. It's the only workout you can do while talking to your mom on the phone."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-emerald-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-emerald-50 rounded">Movement & Metabolism</span>
                                <span>•</span>
                                <span>18 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Walking for <span className="text-emerald-600 font-black italic underline decoration-emerald-200 decoration-4 underline-offset-8">Weight Loss</span>: The 10,000 Step Truth
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                We are told 10k steps is the holy grail. But if you walk 10k steps and then eat a plate of Chole Bhature, you're not losing weight. Let's look at the real math.
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-emerald-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                                The "Walking Math" (Average Indian)
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Distance</p>
                                    <p className="text-3xl font-black text-white">~7.5 km</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">In 10,000 steps</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Time Take</p>
                                    <p className="text-3xl font-black text-white">~90 min</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">At 5 km/h pace</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Calories</p>
                                    <p className="text-3xl font-black text-emerald-400">~380 kcal</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Value of 1 Cheese Sandwich</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Result</p>
                                    <p className="text-3xl font-black text-white">NEAT++</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Basal metabolic boost</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-sm">"Walking is a fat loss tool, not a weight loss miracle. You lose weight in the kitchen, you get lean on the road."</p>
                                <Link to={ROUTES.CALCULATORS.HEALTH.CALORIE} className="px-8 py-4 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-700 transition-all shadow-lg hover:-translate-y-1">
                                    Calculate Calories Burned →
                                </Link>
                            </div>
                        </div>

                        <p>
                            If you go to a park in India at 6 AM, you'll see thousands of people walking. Some are chatting, some are listening to bhajans, and some are walking like they are late for a train. Yet, many of these parks regulars have been "walking for 10 years" and still look the same.
                        </p>
                        
                        <p>
                            The reason is simple: **Walking is the most misunderstood exercise in India.** We treat it as a social activity, not a physical one. To make walking work for weight loss, we need to move from 'tahalna' (strolling) to 'brisk walking'.
                        </p>

                        <h2 id="origin" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. The 10k Step Myth: Where did it come from?</h2>
                        <p>
                            Was 10,000 steps decided by a group of scientists? No. 
                        </p>
                        <p>
                            In 1965, the Yamasa Clock and Instrument Company in Japan created a pedometer called *Manpo-kei*. In Japanese, 'Man' means 10,000, 'po' means steps, and 'kei' means meter. They chose the name because it sounded auspicious and large.
                        </p>
                        <p>
                            **The Reality**: Modern science (Harvard Medical School, 2019) found that mortality rates in older women plateaued at roughly **7,500 steps**. Pushing for 10k is great, but don't feel like a failure if you hit 8k. That's where the magic happens.
                        </p>

                        <h2 id="cal-math" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Samosa-Step Math: The Hard Truth for Indians</h2>
                        <p>
                            To lose 1kg of fat, you need a deficit of roughly **7,700 calories**. 
                        </p>
                        <p>
                            If walking 10,000 steps burns 400 calories:
                            - You would need to walk 10k steps for **20 days** (without eating extra) to lose just 1kg.
                        </p>
                        <p>
                            Now, look at the common Indian dietary "accidents":
                            - 1 Medu Vada: 250 calories (Requires 6,000 steps to burn)
                            - 1 cup of Sweet Milk Tea: 120 calories (Requires 3,000 steps to burn)
                            - 1 Gulab Jamun: 150 calories (Requires 4,000 steps to burn)
                        </p>
                        <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] my-10 not-prose">
                            <p className="text-rose-500 font-black text-xl mb-4 italic italic-selection underline decoration-slate-600">The Warning:</p>
                            "Many people 'reward' themselves for a long walk with a breakfast of Sabudana Khichdi or Masala Dosa. They finish their walk having burned 350 calories, but then EAT 600 calories. This is why people walk for years and never lose weight."
                        </div>

                        <h2 id="neat" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. NEAT: The Secret to Why thin people stay thin</h2>
                        <p>
                            NEAT stands for **Non-Exercise Activity Thermogenesis**. It is the energy you burn doing everything that *isn't* gymming or walking. Fidgeting, standing, cleaning, taking the stairs—it all adds up.
                        </p>
                        <p>
                            Indians have become 'Sedentary' not because we don't go to the gym, but because we stopped our NEAT. We use elevators for 1 floor, we use Swiggy for a 200m distance, and we have helpers for cleaning. 
                        </p>
                        <p>
                            Walking your 10k steps is your way of **artificially creating NEAT**.
                        </p>

                        <h2 id="pace" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. Brisk Walking: The 'Talk-Sing' Test</h2>
                        <p>
                            If you are walking at a speed where you can easily chant or sing a full song, you are **strolling**, not exercising. 
                        </p>
                        <p>
                            For weight loss, you need to reach the **Aerobic Zone**. 
                            - **The Test**: You should be able to maintain a conversation, but you should be breathing hard enough that you *cannot* sing.
                            - **The Target**: Aim for 100-120 steps per minute.
                        </p>

                        <div className="my-12 overflow-hidden border border-slate-200 rounded-[2.5rem] shadow-xl not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Pace Name</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Speed (km/h)</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Fat Loss Impact</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="p-8 text-slate-700 font-bold italic">Leisurely (Stroll)</td>
                                        <td className="p-8 text-slate-500 font-medium">3 — 4 km/h</td>
                                        <td className="p-8 text-rose-600 font-black">Very Low</td>
                                    </tr>
                                    <tr className="bg-emerald-50/20">
                                        <td className="p-8 text-emerald-800 font-black">Brisk (Powerful)</td>
                                        <td className="p-8 text-emerald-700 font-bold">5 — 6.5 km/h</td>
                                        <td className="p-8 text-emerald-600 font-black text-2xl uppercase">Optimal</td>
                                    </tr>
                                    <tr>
                                        <td className="p-8 text-slate-700 font-bold italic">Power Walk</td>
                                        <td className="p-8 text-slate-500 font-medium">&gt; 7 km/h</td>
                                        <td className="p-8 text-emerald-600 font-black">High (Hard for beginners)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="hacks" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5. 5 Hacks to hit your steps effortlessly</h2>
                        <div className="space-y-12 my-16">
                            {[
                                { t: "The 10-Minute Pacing Rule", d: "Never sit for more than 45 minutes. Set a timer. When it rings, stand up and walk around the room/office for 10 minutes while on a call or just thinking. These 'micro-walks' can easily add 3,000 steps to your day." },
                                { t: "Park in the Sun", d: "Purposely park your car or bike at the far end of the parking lot. Those extra 200 meters add up twice a day." },
                                { t: "Commute Halfway", d: "If you take an auto or bus, get down 500 meters before your destination. The morning air and the walk will wake up your metabolism before you reach the office desk." },
                                { t: "Stairs are Free Weight-loss", d: "Taking the stairs even for 3 floors burns 3x more calories per minute than level walking. It builds your leg muscles (the biggest muscles in your body)." },
                                { t: "Podcast Pacing", d: "Don't listen to podcasts while sitting. Make a rule: 'I only listen to my favorite show while my legs are moving.' This creates a positive psychological loop." }
                            ].map((hack, idx) => (
                                <div key={idx} className="flex gap-8 group">
                                    <div className="flex-shrink-0 w-20 h-20 bg-slate-100 text-emerald-600 rounded-[2rem] flex items-center justify-center text-3xl font-black group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                                        {idx + 1}
                                    </div>
                                    <div className="pb-10 border-b border-slate-100 last:border-0">
                                        <h4 className="text-2xl font-black text-slate-900 mb-3">{hack.t}</h4>
                                        <p className="text-slate-600 text-lg leading-relaxed font-medium italic-selection">{hack.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="my-24 p-14 bg-emerald-600 rounded-[4rem] text-white text-center shadow-3xl shadow-emerald-100/50 overflow-hidden relative not-prose">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-400/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight">Know your Fuel. Know your Burn.</h3>
                                <p className="text-emerald-100 mb-12 text-xl max-w-2xl mx-auto font-medium opacity-90 italic-selection">Our Calorie Burn calculator accounts for Indian body types and metabolic rates.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.HEALTH.CALORIE} className="px-12 py-6 bg-white text-emerald-600 font-black rounded-3xl hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                        Calculate My Burn →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.HEALTH.BMI} className="px-12 py-6 bg-emerald-950 text-white font-black rounded-3xl hover:bg-black transition-all border border-emerald-400/30">
                                        Check My Health Zone
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic italic-selection">Walking Truths, Simplified</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
