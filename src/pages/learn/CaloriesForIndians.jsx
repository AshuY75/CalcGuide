import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function CaloriesForIndians() {
    const faqData = [
        {
            question: "Is the 2000-calorie rule valid for Indians?",
            answer: "Broadly, no. While 2000 is a global average, the average sedentary Indian male needs about 1800-2100 calories, and an average female needs 1500-1800. If you have an office job and don't exercise, following a 2500-calorie 'Western' diet will lead to rapid weight gain."
        },
        {
            question: "Why does the ICMR suggest lower calories now?",
            answer: "The ICMR-NIN 2024 guidelines adjusted requirements based on the reality of Indian activity levels and body compositions. As we become more sedentary, our metabolic needs drop. Consuming excess energy leads to visceral fat, common in the 'Thin-Fat' Indian phenotype."
        },
        {
            question: "Do I need more calories if I workout for 1 hour?",
            answer: "A typical 1-hour gym session burns 200-400 calories. If you eat a single Samosa (250-300 calories) as a 'post-workout snack', you've already neutralized the benefit. Calories should be calculated based on your Total Daily Energy Expenditure (TDEE)."
        },
        {
            question: "What is BMR?",
            answer: "Basal Metabolic Rate (BMR) is the calories your body burns at rest to keep your heart beating and lungs breathing. For most Indians, BMR accounts for 60-70% of total daily calorie burn."
        },
        {
            question: "How can I increase my metabolism?",
            answer: "The best way is to increase muscle mass. Muscle tissue is metabolically active; it burns calories even when you are sleeping. This is why resistance training is essential for Indians."
        }
    ];

    const toc = [
        { id: "myth", title: "The 2000-Calorie Myth in India" },
        { id: "icmr", title: "ICMR-NIN 2024: New Standards" },
        { id: "metabolism", title: "Indian Metabolism: The 'Thin-Fat' Factor" },
        { id: "table", title: "Daily Calorie Matrix (By Activity)" },
        { id: "calculate", title: "How to Calculate Your Own TDEE" },
        { id: "hacks", title: "5 Hacks to Manage Calories without Starving" },
        { id: "faq", title: "Calorie FAQs" }
    ];

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Calculate Your Daily Calorie Needs",
        "step": [
            {
                "@type": "HowToStep",
                "text": "Find your BMR (Basal Metabolic Rate) using your age, gender, and weight."
            },
            {
                "@type": "HowToStep",
                "text": "Identify your Activity Multiplier: Sedentary (1.2), Lightly Active (1.375), or Very Active (1.725)."
            },
            {
                "@type": "HowToStep",
                "text": "Multiply BMR x Activity Multiplier to get your TDEE (Total Daily Energy Expenditure)."
            },
            {
                "@type": "HowToStep",
                "text": "Adjust for your goal: Subtract 300-500 calories for weight loss, or add 300-500 for muscle gain."
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Metabolic Health</h4>
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
                                "Health isn't about the weight you lose, it's about the life you gain... and the calories you don't accidentally drink."
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-rose-600 hover:prose-a:text-rose-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-rose-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-rose-50 rounded">Nutrition & Science</span>
                                <span>•</span>
                                <span>20 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Daily <span className="text-rose-600">Calories</span> for Indians: Why the "2000 Rule" is Making You Fat
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                Ever wondered why your 'healthy' diet isn't yielding results? Transitioning from a village lifestyle to an AC-office cubicle has changed our biology. It's time to redefine the Indian calorie. 
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-rose-400 font-black uppercase tracking-widest text-sm mb-10 flex items-center gap-3">
                                <span className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></span>
                                The Indian Reality Check
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                                <div>
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">Average Man (Sedentary)</p>
                                    <p className="text-4xl font-black text-white italic">2,110 kcal</p>
                                    <p className="text-xs text-slate-400 mt-2">ICMR-NIN 2024 Std.</p>
                                </div>
                                <div className="border-l border-slate-800 md:pl-16">
                                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">Average Woman (Sedentary)</p>
                                    <p className="text-4xl font-black text-white italic text-selection-amber">1,660 kcal</p>
                                    <p className="text-xs text-slate-400 mt-2">ICMR-NIN 2024 Std.</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-md">"A single plain Dosa with chutney is ~350 calories. A weekend biryani can cross 1,200. Math never lies."</p>
                                <Link to={ROUTES.CALCULATORS.HEALTH.CALORIE} className="px-10 py-5 bg-rose-600 text-white font-black rounded-2xl hover:bg-rose-700 transition-all shadow-lg hover:-translate-y-1">
                                    Calculate My Exact Needs →
                                </Link>
                            </div>
                        </div>

                        <p>
                            We Indians love food. It’s the center of our weddings, our festivals, and our Friday nights. But while our plates have remained full of buttery naans and rice, our lives have become significantly less active. 
                        </p>
                        
                        <p>
                            In the 1970s, an average Indian walked several kilometers to work or farmed for 8 hours. Today, we sit for 9 hours in front of a screen and call a 15-minute walk a 'workout'. This disconnect is the root cause of India's rising obesity and diabetes epidemic.
                        </p>

                        <h2 id="myth" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. The 2000-Calorie Myth: Why Western Standards Fail Us</h2>
                        <p>
                            If you look at any food packet (like bread or chips), you will see "Percentage Daily Value based on a 2000 calorie diet". This number was popularized in the US in the 1990s as a convenient standard.
                        </p>
                        <p>
                            But here's the problem: **Indians are metabolically different.**
                        </p>
                        <p>
                            - **Height**: The average Indian is shorter than the average Westerner. Smaller bodies require less fuel.
                            - **Muscle Mass**: Indians naturally have lower skeletal muscle mass and higher body fat percentage (The "Thin-Fat" phenotype). Less muscle means a lower BMR.
                            - **Activity**: Our urban environments are not walking-friendly. 
                        </p>
                        <p>
                            Following a 2000-2500 calorie diet while living a typical urban Indian life is a recipe for a **"Tyre" around the waist**.
                        </p>

                        <h2 id="icmr" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. ICMR-NIN 2024: The Scientific Truth for India</h2>
                        <p>
                            The ICMR-National Institute of Nutrition (NIN) recently updated the "Estimated Average Requirement" (EAR) for Indians. These are the gold standards we use at CalcGuide.
                        </p>

                        <div className="my-12 overflow-hidden border border-slate-200 rounded-[2.5rem] shadow-xl not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Category</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Male (65kg)</th>
                                        <th className="p-8 font-black text-slate-900 text-sm uppercase tracking-widest">Female (55kg)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="p-8 text-slate-700 font-bold">Sedentary (Office Work)</td>
                                        <td className="p-8 text-rose-600 font-black text-xl">2,110 kcal</td>
                                        <td className="p-8 text-rose-600 font-black text-xl">1,660 kcal</td>
                                    </tr>
                                    <tr>
                                        <td className="p-8 text-slate-700 font-bold">Moderate (Field Work/Active)</td>
                                        <td className="p-8 text-slate-900 font-black text-lg">2,710 kcal</td>
                                        <td className="p-8 text-slate-900 font-black text-lg">2,130 kcal</td>
                                    </tr>
                                    <tr className="bg-rose-50/20">
                                        <td className="p-8 text-slate-700 font-bold">Heavy (Manual Labour)</td>
                                        <td className="p-8 text-slate-900 font-black text-lg">3,470 kcal</td>
                                        <td className="p-8 text-slate-900 font-black text-lg">2,720 kcal</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="metabolism" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. Metabolism: Why some people eat more and stay thin?</h2>
                        <p>
                            It’s not just "luck". It’s **BMR (Basal Metabolic Rate)**. 
                        </p>
                        <p>
                            Your BMR is the energy your body needs just to survive—breathing, digestion, and organ function. For most Indians, BMR is about **1400-1600 calories**. 
                        </p>
                        <p>
                            The difference between a "fast" and "slow" metabolism is usually **Muscle Percentage**. Muscle is expensive to maintain. Fat is cheap. If you have more muscle, your body burns calories even while you're watching Netflix.
                        </p>

                        <div className="p-10 bg-rose-50 border-2 border-rose-100 rounded-[3rem] my-12 shadow-sm not-prose">
                            <h4 className="text-rose-900 font-black text-xl mb-4">The "Protein Deficit" Problem</h4>
                            <p className="text-rose-800 leading-relaxed font-medium italic">
                                Most Indian vegetarian diets are 70-80% carbohydrates. Carbs give you energy, but they don't rebuild muscle. Without adequate protein (0.8g to 1g per kg bodyweight), your muscle mass shrinks as you age, slowing down your metabolism yearly.
                            </p>
                        </div>

                        <h2 id="calculate" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. How to Calculate Your TDEE (The Only Number That Matters)</h2>
                        <p>
                            To lose weight or gain muscle, you need to know your **TDEE (Total Daily Energy Expenditure)**. 
                        </p>
                        <p>
                            Think of your TDEE as your "Maintenance Budget". If you spend more than you earn, you lose balance (weight). If you earn more than you spend, you save (fat).
                        </p>
                        <div className="bg-slate-900 text-white p-12 rounded-[3.5rem] my-16 shadow-2xl relative overflow-hidden not-prose">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-600/10 to-transparent"></div>
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-black mb-8">Ready to find your magic number?</h3>
                                <p className="text-slate-400 mb-12 text-lg max-w-lg mx-auto">Use our specialized Indian Calorie Calculator that accounts for the latest ICMR-NIN 2024 standards.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.HEALTH.CALORIE} className="px-10 py-5 bg-rose-600 text-white font-black rounded-2xl hover:bg-rose-700 transition-all shadow-xl hover:-translate-y-1">
                                        Personalized Calorie Calc →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.HEALTH.IDEAL_WEIGHT} className="px-10 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-slate-100 transition-all shadow-xl">
                                        Check My Ideal Weight
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <h2 id="hacks" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5. 5 Hacks to Manage Calories (The Smart Advisor Way)</h2>
                        <div className="space-y-12 my-16">
                            {[
                                { t: "Don't Drink Your Calories", d: "A standard glass of Chai with 2 spoons of sugar and 1 Marie biscuit is ~120 calories. Do this thrice a day, and that's 360 calories—equivalent to a 45-minute walk. Switch to black coffee or unsweetened tea." },
                                { t: "The Salad-First Rule", d: "Eat a bowl of raw cucumber/tomato/carrot BEFORE your main meal. The fiber fills you up, slowing down the glycemic response of the rotis/rice you eat later." },
                                { t: "Protein at Every Meal", d: "Whether it's Dal, Paneer, Eggs, or Chicken—ensure at least 25% of your plate is protein. It keeps you 'full' for longer and prevents late-night Zomato cravings." },
                                { t: "The Samosa Math", d: "One samosa is 250 calories. To burn one samosa, an average Indian needs to walk 5 kilometers. Ask yourself: 'Is this 15-minute snack worth a 1-hour walk?'" },
                                { t: "80/20 Consistency", d: "Eat 80% whole foods and 20% whatever you like. If you try to eat 100% 'diet food' (boiled broccoli), you will quit in 3 days. Indian food is healthy if you control the oil and portion size." }
                            ].map((hack, idx) => (
                                <div key={idx} className="flex gap-8 group">
                                    <div className="flex-shrink-0 w-20 h-20 bg-slate-900 text-white rounded-[2rem] flex items-center justify-center text-3xl font-black group-hover:bg-rose-600 transition-colors shadow-lg">
                                        {idx + 1}
                                    </div>
                                    <div className="pb-10 border-b border-slate-100 last:border-0">
                                        <h4 className="text-2xl font-black text-slate-900 mb-3">{hack.t}</h4>
                                        <p className="text-slate-600 text-lg leading-relaxed font-medium italic-selection">{hack.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <section id="how-to" className="bg-rose-50 p-14 rounded-[3.5rem] my-24 border border-rose-100 shadow-inner">
                            <h3 className="mt-0 font-black text-3xl mb-10 tracking-tighter">Calculating Your Calories in 3 Minutes</h3>
                            <script type="application/ld+json">
                                {JSON.stringify(howToSchema)}
                            </script>
                            <div className="space-y-10">
                                <div className="flex gap-6 items-start">
                                    <span className="w-10 h-10 bg-rose-600 rounded-lg flex items-center justify-center text-white font-black shrink-0 mt-1 shadow-md">1</span>
                                    <div>
                                        <p className="text-xl font-black text-slate-900 mb-1">Get Your Base Number (BMR)</p>
                                        <p className="text-slate-600 font-medium leading-relaxed">Use your height and weight. This is your 'survival' cost.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <span className="w-10 h-10 bg-rose-600 rounded-lg flex items-center justify-center text-white font-black shrink-0 mt-1 shadow-md">2</span>
                                    <div>
                                        <p className="text-xl font-black text-slate-900 mb-1">Add Your Daily Movement</p>
                                        <p className="text-slate-600 font-medium leading-relaxed">Be honest! If you sit at a desk all day, multiply BMR by 1.2.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <span className="w-10 h-10 bg-rose-600 rounded-lg flex items-center justify-center text-white font-black shrink-0 mt-1 shadow-md">3</span>
                                    <div>
                                        <p className="text-xl font-black text-slate-900 mb-1">Subtract for Weight Loss</p>
                                        <p className="text-slate-600 font-medium leading-relaxed">Aim for a -300 to -500 calorie deficit for sustainable results.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic">Calorie Queries, Answered</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
