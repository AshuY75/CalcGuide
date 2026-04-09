import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import SEOSection from '../../components/SEOSection';
import AuthorBio from '../../components/AuthorBio';

export default function IndianNutritionDeficiency() {
    const faqData = [
        {
            question: "Why are vegetarians in India almost always B12 deficient?",
            answer: "Vitamin B12 is primarily found in animal products. While milk and curd have some B12, you would need to consume 2-3 liters of milk daily to meet your requirements. 70-80% of Indian vegetarians are found to be B12 deficient in clinical studies."
        },
        {
            question: "Can I get enough Vitamin D from just sitting in the balcony?",
            answer: "Unlikely. For Vitamin D3 synthesis, you need direct UV-B exposure on a large surface area of your skin (arms/legs) between 11 AM and 1 PM. Pollution in Indian cities blocks these UV-B rays, and our darker skin (melanin) further slows down the synthesis. Most urban Indians need supplementation."
        },
        {
            question: "Is Paneer a good source of protein?",
            answer: "Paneer is a good source, but it is high in fat. 100g of Paneer has ~18g of protein but ~20g of fat. For weight loss, you cannot rely only on Paneer as your primary protein source."
        },
        {
            question: "What are the signs of Iron deficiency (Anemia)?",
            answer: "Constant fatigue, shortness of breath, pale skin, and brittle nails. In India, over 50% of women and 25% of men suffer from some level of anemia, often due to high tea consumption (tannins) right after meals which blocks iron absorption."
        },
        {
            question: "Should I take multi-vitamins daily?",
            answer: "It is better to test and target. 'Shotgunning' multi-vitamins isn't as effective as identifying your specific deficiency (like B12 or D3) and taking a targeted dose under medical supervision."
        }
    ];

    const toc = [
        { id: "hidden-hunger", title: "The 'Hidden Hunger' in India" },
        { id: "b12", title: "B12: The Vegetarian Nightmare" },
        { id: "d3", title: "D3: The Sunlight Paradox" },
        { id: "iron", title: "Iron & Anemia: The Tea Connection" },
        { id: "protein", title: "Cereal-based Diet vs. Protein" },
        { id: "checklist", title: "Deficiency Signs Checklist" },
        { id: "faq", title: "Nutrition FAQs" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 font-inter text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Biochemistry</h4>
                                <nav className="space-y-3">
                                    {toc.map(item => (
                                        <a 
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="block text-sm font-bold text-slate-500 hover:text-amber-600 transition-colors"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            
                            <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 italic text-sm text-amber-900 leading-relaxed shadow-sm">
                                "We are the first generation in history that is overfed but undernourished. Your stomach might be full, but are your cells starving?"
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-amber-600 hover:prose-a:text-amber-800">
                        
                        <header className="mb-16 not-prose">
                            <div className="flex items-center gap-4 text-amber-600 font-black text-xs uppercase tracking-widest mb-6">
                                <span className="px-2 py-1 bg-amber-50 rounded">Nutritional Science</span>
                                <span>•</span>
                                <span>18 Min Read</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Nutritional Deficiency in Indian Diets: The <span className="text-amber-600">Hidden Hunger</span> Explained
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl font-medium">
                                You feel tired at 4 PM. You have brain fog during meetings. You lose more hair than usual. You think it's 'stress'. The reality? It's probably a **Deficiency**. 
                            </p>
                        </header>

                        {/* Quick Summary Box */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sm:p-14 mb-20 shadow-2xl relative overflow-hidden not-prose border border-slate-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                            <h3 className="text-amber-400 font-black uppercase tracking-widest text-sm mb-12 flex items-center gap-3">
                                <span className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></span>
                                The Indian Deficiency Index (Urban Pop.)
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Vitamin D3</p>
                                    <p className="text-3xl font-black text-white">~80%</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Lack skeletal health</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Vitamin B12</p>
                                    <p className="text-3xl font-black text-white">~74%</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Nervous system risk</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Protein</p>
                                    <p className="text-3xl font-black text-white">~70%</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">Metabolic slowing</p>
                                </div>
                                <div className="border-l border-slate-800 pl-8">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Iron (Women)</p>
                                    <p className="text-3xl font-black text-white">~53%</p>
                                    <p className="text-[10px] text-slate-400 mt-2 font-medium">High anemia prevalence</p>
                                </div>
                            </div>
                            <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-8">
                                <p className="text-slate-400 italic font-medium leading-relaxed max-w-sm">"Being calorie-rich but nutrient-poor is the biggest health crisis in modern India."</p>
                                <Link to={ROUTES.CALCULATORS.HEALTH.IDEAL_WEIGHT} className="px-8 py-4 bg-amber-600 text-white font-black rounded-2xl hover:bg-amber-700 transition-all shadow-lg hover:-translate-y-1">
                                    Check My Body Health →
                                </Link>
                            </div>
                        </div>

                        <p>
                            We Indians are proud of our "Ghar ka Khana" (Home-cooked food). We believe that if we eat Roti, Sabzi, and Dal, we are healthy. But modern science tells a different story. The soil has depleted nutrients, our vegetables are often pesticide-ridden, and our vegetarian ethics create significant 'blind spots' in our nutrition.
                        </p>
                        
                        <p>
                            This is **Hidden Hunger**. You don't feel hungry, you might even be gainig weight, but your body is crying for specific molecules to keep your heart, brain, and muscles running. Let's break down the "Big 4" deficiencies in India.
                        </p>

                        <h2 id="b12" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">1. Vitamin B12: The Nervous System's missing link</h2>
                        <p>
                            Vitamin B12 is essential for nerve health and brain function. It is naturally found only in animal foods. Unlike many Western vegetarians who eat eggs or fortified cereals, the average Indian vegetarian relies almost entirely on dairy.
                        </p>
                        <p>
                            **The Problem**: To get your daily dose of 2.4mcg, you'd need to drink about 1.5 liters of milk every single day. Most Indians don't do that. 
                        </p>
                        <p>
                            **Symptoms**: Tingling in hands and feet, memory loss, depression, and extreme fatigue. Long-term deficiency can cause irreversible nerve damage.
                        </p>

                        <h2 id="d3" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">2. Vitamin D3: Why the Indian Sun isn't enough</h2>
                        <p>
                            India is a sun-drenched country. Yet, 8 out of 10 urban Indians are Vitamin D deficient. How?
                        </p>
                        <ul>
                            <li><strong>Pollution</strong>: The smog and dust in cities like Delhi, Mumbai, and Bangalore block the UV-B rays needed for D3 synthesis.</li>
                            <li><strong>Melanin</strong>: Our darker skin acts as a natural sunscreen. It takes an Indian 5 times longer in the sun to produce the same Vitamin D as a Caucasian.</li>
                            <li><strong>The Indoors Lifestyle</strong>: We stay in AC offices and travel in covered vehicles. We are "Indoor Humans" living in a tropical country.</li>
                        </ul>
                        <p>
                            **Smart Advisor Advice**: Natural food sources of D3 are almost non-existent for vegetarians. Supplementation (usually 60k IU weekly for a few weeks) is standard practice in Indian clinical settings.
                        </p>

                        <h2 id="iron" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">3. Iron & Anemia: The Tea/Coffee Connection</h2>
                        <p>
                            Over 50% of Indian women are anemic. While lack of green leafy vegetables is one reason, another is a common Indian habit: **Drinking Tea or Coffee with/after meals.**
                        </p>
                        <p>
                            Tea contains **Tannins** and coffee contains **Polyphenols**. These compounds bind to the iron in your food (like spinach or dal) and prevent your gut from absorbing it. 
                        </p>
                        <div className="p-8 bg-amber-50 border-l-4 border-amber-600 rounded-r-3xl my-10 not-prose shadow-sm">
                            <p className="text-amber-900 font-bold leading-relaxed italic">
                                💡 <strong>Pro Hack:</strong> Wait at least 60 minutes after a meal before having your Chai. Add Vitamin C (Lemon juice on your dal/sabzi) to double your iron absorption!
                            </p>
                        </div>

                        <h2 id="protein" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">4. The Protein Gap: Cereals vs. Growth</h2>
                        <p>
                            The ICMR-NIN suggests 0.8g to 1g of protein per kg of body weight. For a 70kg man, that's 70g of protein.
                        </p>
                        <p>
                            An average Indian dinner of 2 Rotis and a bowl of Dal only gives you ~12-15g of protein. You are likely missing **50% of your daily protein needs**. 
                        </p>
                        <p>
                            This leads to **Sarcopenia** (Muscle loss). When you lose muscle, you lose the ability to burn fat, leading to that "Indian Potbelly".
                        </p>

                        <h2 id="checklist" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">5. Signs You Might be Deficient (Checklist)</h2>
                        <div className="grid md:grid-cols-2 gap-8 my-16 not-prose">
                            <div className="p-10 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                                <h4 className="text-2xl font-black text-slate-900 mb-6">Visible Signs</h4>
                                <ul className="space-y-4 text-slate-500 font-medium list-none p-0">
                                    <li className="flex gap-3 items-center"><span className="text-amber-600 font-black">→</span> Brittle Nails & Hair Fall</li>
                                    <li className="flex gap-3 items-center"><span className="text-amber-600 font-black">→</span> Pale Skin / Dark Circles</li>
                                    <li className="flex gap-3 items-center"><span className="text-amber-600 font-black">→</span> Mouth Ulcers (B-Complex)</li>
                                    <li className="flex gap-3 items-center"><span className="text-amber-600 font-black">→</span> Muscle Cramps (Magnesium)</li>
                                </ul>
                            </div>
                            <div className="p-10 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                                <h4 className="text-2xl font-black text-slate-900 mb-6">Internal Signs</h4>
                                <ul className="space-y-4 text-slate-500 font-medium list-none p-0">
                                    <li className="flex gap-3 items-center"><span className="text-amber-600 font-black">→</span> Brain Fog / Low Focus</li>
                                    <li className="flex gap-3 items-center"><span className="text-amber-600 font-black">→</span> Frequent Colds (Immunity)</li>
                                    <li className="flex gap-3 items-center"><span className="text-amber-600 font-black">→</span> Joint Pains (Vitamin D)</li>
                                    <li className="flex gap-3 items-center"><span className="text-amber-600 font-black">→</span> Mood Swings / Fatigue</li>
                                </ul>
                            </div>
                        </div>

                        <div className="my-20 p-14 bg-amber-600 rounded-[3.5rem] text-white text-center shadow-2xl shadow-amber-200 relative overflow-hidden not-prose">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-400/30 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl font-black mb-8 italic italic-selection underline decoration-amber-300 underline-offset-8">You can't fix what you can't see.</h3>
                                <p className="text-amber-50 mb-10 text-xl font-medium max-w-2xl mx-auto italic-selection">Our Ideal Weight and Calorie tools help you understand if your current diet is matched to your body's survival needs.</p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <Link to={ROUTES.CALCULATORS.HEALTH.IDEAL_WEIGHT} className="px-10 py-5 bg-white text-amber-700 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1">
                                        Check Body Metrics →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.HEALTH.BMI} className="px-10 py-5 bg-amber-900 text-white font-black rounded-2xl hover:bg-black transition-all border border-amber-500/30">
                                        Check Indian BMI
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-2 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-20 tracking-tighter italic italic-selection">Desi Nutrition Doubts</h2>
                            <SEOSection title="" faq={faqData} />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
