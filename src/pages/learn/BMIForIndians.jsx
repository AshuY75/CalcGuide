import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/paths'
import SEOSection from '../../components/SEOSection'
import AuthorBio from '../../components/AuthorBio'

// FAQ Metadata for Schema
const faqData = [
    {
        question: "Is a BMI of 24 healthy for Indians?",
        answer: "No. While 24 is 'Normal' by global standards, it is classified as 'Overweight' for Indians. The Indian cutoff for 'Normal' weight ends at 22.9. Crossing 23 significantly increases the risk for Type 2 Diabetes and Hypertension."
    },
    {
        question: "Why do Indians have lower BMI cutoffs than Westerners?",
        answer: "Indians have the 'Thin-Fat' phenotype. We tend to have a higher body fat percentage and more abdominal (visceral) fat even at lower weights. This extra fat around organs makes us prone to metabolic diseases much earlier."
    },
    {
        question: "Is BMI accurate for active gym-goers?",
        answer: "BMI doesn't distinguish between muscle and fat. If you have significant muscle mass, your BMI might be high despite low body fat. For athletes, the Waist-to-Hip ratio or skinfold tests are more accurate metrics."
    },
    {
        question: "What is the ideal waist size for Indian men and women?",
        answer: "For Indian men, the waist should be below 90 cm (35 inches). For Indian women, it should be below 80 cm (31 inches). Central obesity (belly fat) is a primary driver of heart disease in South Asians."
    },
    {
        question: "How can I reduce visceral fat if my BMI is high?",
        answer: "Focus on resistance training to build muscle, increase protein intake (1.2g per kg), and reduce refined carbs. High-intensity interval training (HIIT) is also effective for targeting belly fat."
    }
]

export const metadata = {
    title: "BMI for Indians — Why 25 Cutoff is Wrong (23 is the Limit)",
    slug: "/learn/bmi-for-indians-why-25-cutoff-is-wrong/",
    description: "Are you really fit? Learn why Indians have stricter BMI cutoffs (23 vs 25) and the truth about the 'Thin-Fat' phenotype in South Asians.",
    category: "Health",
    icon: "⚖️",
    colorClass: "bg-rose-50",
    date: "2024-04-09"
}

export default function BMIForIndians() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-rose-100 italic-selection">
            {/* JSON-LD Schemas */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqData.map(f => ({
                        "@type": "Question",
                        "name": f.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": f.answer
                        }
                    }))
                })}
            </script>

            {/* Article Header */}
            <header className="bg-white border-b border-slate-200 pt-16 pb-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-rose-600 font-bold mb-6 uppercase tracking-widest">
                        <Link to={ROUTES.LEARN.HOME} className="hover:underline">Knowledge Hub</Link>
                        <span>/</span>
                        <span>Health Strategy</span>
                    </nav>
                    <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
                        BMI for Indians: Why the "Global" 25 Cutoff is <span className="text-rose-600">Literally Killing</span> Your Health
                    </h1>
                    <p className="text-2xl text-slate-600 leading-relaxed max-w-3xl font-medium">
                        "Mera weight toh control mein hai..." — Are you sure? In India, looking 'thin' doesn't mean you are fit. Explore why our bodies need stricter standards.
                    </p>
                    <div className="mt-10 flex items-center gap-4 text-sm text-slate-500 border-t border-slate-100 pt-8">
                        <div className="relative">
                            <img src="https://ui-avatars.com/api/?name=Ashu+Yadav&background=e11d48&color=fff" className="w-12 h-12 rounded-full ring-2 ring-white shadow-md" alt="Ashu Yadav" />
                            <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                            <p className="font-black text-slate-900 text-base">Fact Checked by Ashu Yadav</p>
                            <p className="flex items-center gap-2">
                                <span className="text-rose-600">Health Analyst</span> • Updated August 2025
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-12 gap-16">
                    
                    {/* Sidebar */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-24 space-y-10">
                            <div>
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-2">Jump To Section</h4>
                                <nav className="space-y-4 text-sm font-bold text-slate-600">
                                    <a href="#hook" className="block hover:text-rose-600 transition-colors border-l-2 border-transparent hover:border-rose-400 pl-3">The Bangalore Case</a>
                                    <a href="#summary" className="block hover:text-rose-600 transition-colors border-l-2 border-transparent hover:border-rose-400 pl-3">The 23 Cutoff Rule</a>
                                    <a href="#logic" className="block hover:text-rose-600 transition-colors border-l-2 border-transparent hover:border-rose-400 pl-3">Scientific Deep-Dive</a>
                                    <a href="#thin-fat" className="block hover:text-rose-600 transition-colors border-l-2 border-transparent hover:border-rose-400 pl-3">Thin-Fat Phenotype</a>
                                    <a href="#calculator" className="block hover:text-rose-600 transition-colors border-l-2 border-transparent hover:border-rose-400 pl-3">Calculate Your Risk</a>
                                    <a href="#mistakes" className="block hover:text-rose-600 transition-colors border-l-2 border-transparent hover:border-rose-400 pl-3">Common Mistakes</a>
                                    <a href="#faq" className="block hover:text-rose-600 transition-colors border-l-2 border-transparent hover:border-rose-400 pl-3">Health FAQs</a>
                                </nav>
                            </div>
                            
                            <div className="bg-gradient-to-br from-rose-500 to-rose-600 p-6 rounded-3xl shadow-lg ring-1 ring-rose-300">
                                <p className="text-xs font-black text-rose-100 uppercase mb-3">Health Alert</p>
                                <p className="text-sm text-white font-bold leading-relaxed mb-4">
                                    Indians develop diabetes 10 years earlier than Westerners. 
                                </p>
                                <Link to={ROUTES.CALCULATORS.HEALTH.BMI} className="text-xs bg-white text-rose-600 px-4 py-2 rounded-full inline-block font-black shadow-sm">Check Now →</Link>
                            </div>
                        </div>
                    </aside>

                    {/* Article Body */}
                    <div className="lg:col-span-9">
                        
                        <div id="hook" className="prose prose-slate prose-lg max-w-none">
                            <p className="lead text-2xl text-slate-700 italic border-l-8 border-rose-500 pl-8 my-12 font-serif bg-white p-8 rounded-r-3xl shadow-sm leading-relaxed">
                                "Mera BMI toh 24 hai, main toh fits hoon!" — If you think this, you are effectively ignoring the most critical health advisory issued for the Indian population in the last two decades.
                            </p>

                            <p>
                                Visualize a 32-year-old software architect in Hyderabad named Varun. He considers himself 'fit' because he fits into medium-sized shirts. He weighs 74kg and is 5'9" (175cm) tall. A quick calculation on a US health website tells him his BMI is **24.2**. 
                            </p>
                            
                            <p className="bg-emerald-50 text-emerald-900 p-6 rounded-2xl border border-emerald-100 font-bold mb-8">
                                ✅ Global Verdict: NORMAL. <br/>
                                ❌ Indian Reality: OVERWEIGHT.
                            </p>

                            <p>
                                Most global calculators suggest 25 as the cutoff for 'Overweight'. But for South Asians, the Ministry of Health and ICMR have lowered this threshold to **23**. 
                            </p>

                            <p>
                                In this guide, we aren't just going to define numbers. We are going to look at the **genetics**, the **visceral fat traps**, and why the "Skinny Fat" look is the leading cause of early heart attacks in urban India.
                            </p>

                            {/* Summary Box */}
                            <section id="summary" className="bg-slate-900 text-white rounded-[2.5rem] p-10 my-16 shadow-2xl relative overflow-hidden group">
                                <div className="absolute -top-12 -right-12 w-48 h-48 bg-rose-600 rounded-full blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-white text-3xl font-black mb-10 mt-0 flex items-center gap-3">
                                    <span className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center text-sm">📊</span>
                                    At a Glance: The 23 Rule
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-10">
                                    <div className="border-l-4 border-rose-600 pl-6 py-2">
                                        <p className="text-xs text-slate-400 uppercase font-black tracking-[0.2em] mb-2">Ideal Range (India)</p>
                                        <p className="text-4xl font-black text-emerald-400 tracking-tight">18.5 – 22.9</p>
                                        <p className="text-xs text-slate-500 mt-2 font-medium">Safe for your heart & organs</p>
                                    </div>
                                    <div className="border-l-4 border-rose-600 pl-6 py-2">
                                        <p className="text-xs text-slate-400 uppercase font-black tracking-[0.2em] mb-2">Overweight Warning</p>
                                        <p className="text-4xl font-black text-rose-500 tracking-tight">23.0+</p>
                                        <p className="text-xs text-slate-500 mt-2 font-medium">Risk of Pre-Diabetes spikes 2x</p>
                                    </div>
                                </div>
                                <div className="mt-10 pt-8 border-t border-slate-800 flex flex-wrap gap-8 items-center">
                                    <p className="text-3xl font-black text-white italic">"23 is the new 25"</p>
                                    <Link to={ROUTES.CALCULATORS.HEALTH.BMI} className="bg-rose-600 hover:bg-rose-700 text-white font-black py-4 px-8 rounded-2xl shadow-xl transition-all hover:-translate-y-1">
                                        Calculate Your True Category →
                                    </Link>
                                </div>
                            </section>

                            <h2 id="logic" className="text-4xl font-black text-slate-900 mt-20 mb-8 tracking-tighter">1. Science Deep-Dive: Why WHO Standards Fail Indians</h2>
                            <p>
                                BMI (Body Mass Index) is a simple ratio: Weight (kg) / Height² (m). It was invented in the 1830s by a Belgian mathematician using European male subjects. 
                            </p>
                            
                            <p>
                                **The Problem?** Genes. South Asians have been evolutionary adapted to handle famines, which led to a body type that holds onto fat very efficiently. This is known as the "Thrifty Gene" hypothesis.
                            </p>

                            <div className="my-14 bg-white p-10 rounded-[2rem] border-2 border-slate-100 shadow-xl overflow-hidden relative">
                                <div className="absolute top-0 right-0 py-2 px-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-bl-xl">Infographic Idea #1</div>
                                <h4 className="text-slate-900 font-black mb-6 uppercase text-sm tracking-widest text-center">Visual Case Study: European vs South Asian</h4>
                                <div className="grid sm:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <div className="aspect-[3/4] bg-slate-100 rounded-3xl flex items-center justify-center border-2 border-dashed border-slate-300">
                                            <span className="text-slate-400 font-bold p-8 text-center text-sm italic">Image: Broad European male with muscle mass, BMI 25 (Low risk)</span>
                                        </div>
                                        <p className="text-xs text-center text-slate-500 font-medium italic italic-selection">ALT: European BMI vs Health Risk Profile Comparison</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="aspect-[3/4] bg-rose-50 rounded-3xl flex items-center justify-center border-2 border-dashed border-rose-200">
                                            <span className="text-rose-400 font-bold p-8 text-center text-sm italic">Image: Narrow South Asian male with belly fat, BMI 25 (High risk)</span>
                                        </div>
                                        <p className="text-xs text-center text-slate-500 font-medium italic italic-selection">ALT: Indian Thin-Fat Phenotype Visual Representation</p>
                                    </div>
                                </div>
                                <p className="mt-10 text-center text-sm text-slate-600 font-bold px-4">
                                    At the exact same BMI, an Indian has 5-8% more body fat than a Caucasian. 
                                </p>
                            </div>

                            <p>
                                Because Indians have narrower skeletons and lower muscle mass by default, fat doesn't spread out. It concentrates in the worst possible place: **Between your organs.**
                            </p>

                            <h2 id="thin-fat" className="text-4xl font-black text-slate-900 mt-20 mb-8 tracking-tighter">2. The "Thin-Fat" Phenotype: The Hidden Indian Trap</h2>
                            <p>
                                Go to any IT park in Bangalore, NCR, or Hyderabad, and you will see "Skinny Fat" adults everywhere. These are people who look "thin" in clothes but have a protruding abdomen (potbelly).
                            </p>
                            
                            <p>
                                In medical terms, this is called **Central Obesity**. For Indians, visceral fat (fat around liver, heart, and pancreas) is far more common than subcutaneous fat (fat under the skin you can pinch).
                            </p>

                            <div className="bg-rose-50 border-l-8 border-rose-500 p-10 my-16 rounded-r-[2rem] shadow-sm">
                                <p className="font-black text-rose-900 text-2xl mb-4 italic">Why 23? The Data doesn't lie.</p>
                                <p className="text-rose-800 leading-bold text-lg">
                                    A landmark study by the Madras Diabetes Research Foundation (MDRF) found that the risk of insulin resistance in South Asians starts climbing exponentially at a BMI of **22.5**. By the time we hit 25, we already have the metabolic risk profile of a Westerner at a BMI of 30.
                                </p>
                            </div>

                            <h3 className="text-2xl font-black mt-12 mb-6 tracking-tight">The 3 Pillars of Indian Metabolic Risk</h3>
                            <ul className="grid sm:grid-cols-3 gap-6 list-none p-0">
                                <li className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                                    <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 font-black">1</div>
                                    <p className="font-bold text-slate-900 mb-1">Low HDL</p>
                                    <p className="text-xs text-slate-500">Low 'Good' cholesterol even at normal weight.</p>
                                </li>
                                <li className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                                    <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 font-black">2</div>
                                    <p className="font-bold text-slate-900 mb-1">High TG</p>
                                    <p className="text-xs text-slate-500">Fast buildup of Triglycerides due to carb-heavy diets.</p>
                                </li>
                                <li className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                                    <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 font-black">3</div>
                                    <p className="font-bold text-slate-900 mb-1">Fatty Liver</p>
                                    <p className="text-xs text-slate-500">Non-alcoholic fatty liver disease (NAFLD) is rampant.</p>
                                </li>
                            </ul>

                            <h2 id="calculator" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter text-center italic uppercase">Don't guess your health.</h2>
                            
                            <div className="bg-slate-900 rounded-[3rem] p-12 text-center shadow-2xl relative overflow-hidden ring-4 ring-rose-500/20 group hover:ring-rose-500/40 transition-all duration-500">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/5 blur-[100px] pointer-events-none"></div>
                                <h3 className="text-white text-4xl font-black mb-6 leading-tight">Use the Correct BMI standards for India</h3>
                                <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium">
                                    Our calculator uses the <span className="text-rose-500 font-bold">Revised Consensus Guidelines</span> for South Asians to give you the real truth about your obesity grade.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <Link to={ROUTES.CALCULATORS.HEALTH.BMI} className="bg-rose-600 hover:bg-rose-700 text-white text-xl font-black py-6 px-12 rounded-3xl shadow-xl transform active:scale-95 transition-all">
                                        Check Your Category →
                                    </Link>
                                    <Link to={ROUTES.CALCULATORS.HEALTH.BODY_FAT} className="bg-slate-800 hover:bg-slate-700 text-white text-xl font-black py-6 px-12 rounded-3xl border border-slate-700">
                                        Check Body Fat %
                                    </Link>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black text-slate-900 mt-24 mb-8 tracking-tighter">The Official Revised Indian BMI Table (ICMR/NIN)</h2>
                            <p>
                                Note how the categories shift compared to what you see on US/Western websites.
                            </p>

                            <div className="not-prose overflow-x-auto my-12 rounded-3xl border-2 border-slate-200">
                                <table className="w-full text-lg text-left border-collapse bg-white">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-8 font-black uppercase text-sm tracking-widest border-b-2 border-slate-200">Classification</th>
                                            <th className="p-8 font-black uppercase text-sm tracking-widest text-center border-b-2 border-slate-200">BMI Range (India)</th>
                                            <th className="p-8 font-black uppercase text-sm tracking-widest text-right border-b-2 border-slate-200">Risk Profile</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y-2 divide-slate-100">
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="p-8 font-bold text-blue-600">Underweight</td>
                                            <td className="p-8 text-center font-black font-mono tracking-widest">&lt; 18.0</td>
                                            <td className="p-8 text-right text-slate-500 font-medium">Nutrient deficiency risk</td>
                                        </tr>
                                        <tr className="bg-emerald-50 text-emerald-900">
                                            <td className="p-8 font-black">Normal Weight</td>
                                            <td className="p-8 text-center font-black font-mono tracking-widest">18.0 – 22.9</td>
                                            <td className="p-8 text-right font-black italic">Golden Standard</td>
                                        </tr>
                                        <tr className="bg-amber-50 text-amber-900">
                                            <td className="p-8 font-black">Overweight</td>
                                            <td className="p-8 text-center font-black font-mono tracking-widest">23.0 – 24.9</td>
                                            <td className="p-8 text-right font-bold italic">Metabolic Alarm Zone</td>
                                        </tr>
                                        <tr className="bg-rose-50 text-rose-900">
                                            <td className="p-8 font-black underline decoration-rose-300">Grade I Obesity</td>
                                            <td className="p-8 text-center font-black font-mono tracking-widest">25.0 – 29.9</td>
                                            <td className="p-8 text-right font-black italic">High Diabetes Risk</td>
                                        </tr>
                                        <tr className="bg-rose-600 text-white">
                                            <td className="p-8 font-black">Grade II Obesity</td>
                                            <td className="p-8 text-center font-black font-mono tracking-widest">30.0 +</td>
                                            <td className="p-8 text-right font-black italic uppercase">Critical Level</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 id="mistakes" className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">Common Mistakes: Real Truths Indians Ignore</h2>
                            <p>
                                Health strategy in India is often reactive. Hum tab jaate hain doctor ke paas jab problem shuru ho jati hai. 
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-8 my-16 not-prose">
                                <div className="p-10 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow group relative">
                                    <div className="absolute top-6 left-6 text-4xl opacity-20 pointer-events-none group-hover:rotate-12 transition-transform">❌</div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-4 mt-6">Western Idealism</h4>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        "Mera cousin US mein hai, usne kaha 25 fine hai." US bodies and South Asian bodies process insulin differently. Don't export their standards to your biology.
                                    </p>
                                </div>
                                <div className="p-10 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow group relative">
                                    <div className="absolute top-6 left-6 text-4xl opacity-20 pointer-events-none group-hover:rotate-12 transition-transform">❌</div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-4 mt-6">The Weight Obsession</h4>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        Losing 10kg with a fruit diet usually means you lost 5kg muscle and 5kg fat. You end up as a 'Thinner-but-Fatter' version of yourself metabolically.
                                    </p>
                                </div>
                                <div className="p-10 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow group relative">
                                    <div className="absolute top-6 left-6 text-4xl opacity-20 pointer-events-none group-hover:rotate-12 transition-transform">❌</div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-4 mt-6">Ignoring the Waist</h4>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        A flat stomach is worth more than a 'Normal' BMI score. If your waist is &gt;35 inches, your BMI score of 21 still doesn't protect you from heart disease.
                                    </p>
                                </div>
                                <div className="p-10 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow group relative">
                                    <div className="absolute top-6 left-6 text-4xl opacity-20 pointer-events-none group-hover:rotate-12 transition-transform">❌</div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-4 mt-6">Heredity Excuse</h4>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        "Hamari family mein sab heavy hain." High BMI might be common, but the diabetes and blood pressure that follow are NOT inevitable.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">Pro Tips: Reaching the "Normal" Indian Range</h2>
                            <p>
                                Getting from a BMI of 24 to 22.5 is life-changing for many Indians. Here is the blueprint:
                            </p>
                            
                            <div className="space-y-8 my-16">
                                {[
                                    { t: "The 1.2g Protein Rule", d: "Indian vegetarian diets are carb-heavy. Aim for 1.2g of protein per kg of your IDEAL weight. It builds muscle, which burns 3x more calories than fat even while you sleep.", c: "Check Required Protein", l: ROUTES.CALCULATORS.HEALTH.CALORIE },
                                    { t: "Lift Heavy Twice a Week", d: "Walking is great, but resistance training (dhamakedar workout) is the only way to reverse the 'Thin-Fat' phenotype. Build the frame to store the fat away from your organs.", c: "Ideal Weight Calculator", l: ROUTES.CALCULATORS.HEALTH.IDEAL_WEIGHT },
                                    { t: "Measure Waist, Not just Weight", d: "Track your progress with a measuring tape. Every inch lost on the waist is more valuable than 2kg lost on the scale.", c: "Health Tracker Tool", l: ROUTES.CALCULATORS.HEALTH.BODY_FAT }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex gap-8 group">
                                        <div className="flex-shrink-0 w-20 h-20 bg-slate-900 text-white rounded-3xl flex items-center justify-center text-3xl font-black group-hover:bg-rose-600 transition-colors shadow-lg">
                                            {idx + 1}
                                        </div>
                                        <div className="pb-10 border-b border-slate-200">
                                            <h4 className="text-2xl font-black text-slate-900 mb-3">{step.t}</h4>
                                            <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium italic-selection">{step.d}</p>
                                            <Link to={step.l} className="inline-flex items-center gap-2 text-rose-600 font-black uppercase text-sm tracking-widest hover:gap-4 transition-all">
                                                {step.c} <span className="text-xl">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="my-20 p-12 bg-rose-50 border-4 border-dashed border-rose-200 rounded-[3rem] text-center transform hover:rotate-1 transition-transform">
                                <p className="text-xs font-black text-rose-500 uppercase tracking-[0.3em] mb-4">Internal Resource</p>
                                <p className="text-2xl font-black text-slate-900 leading-tight">
                                    👉 Are calories confusing you? <br/>
                                    <Link to={ROUTES.LEARN.CALORIES_FOR_INDIANS} className="text-rose-600 underline decoration-rose-300 hover:text-rose-700">Read our Guide on Indian Calorie Requirements →</Link>
                                </p>
                            </div>

                            <h2 className="text-4xl font-black text-slate-900 mt-24 mb-10 tracking-tighter">Real-Life Scenario: The cost of 2 units of BMI</h2>
                            <p>
                                Meet **Sandeep** (36 years, BMI 24.8) and **Pranav** (36 years, BMI 22.1). 
                            </p>
                            <p>
                                Sandeep thinks he is "normal built". His health checkup shows borderline high Sugar (105 Fasting). He is told to "watch his diet". He doesn't take it seriously because he isn't "fat".
                            </p>
                            <p>
                                Pranav had a BMI of 24 two years ago but dropped to 22 through consistent steps and protein intake.
                            </p>
                            <p className="bg-slate-900 p-10 rounded-[2.5rem] my-10 text-white italic shadow-2xl">
                                <span className="text-rose-500 font-black block text-2xl mb-4 italic italic-selection underline decoration-slate-600">The 5-Year Outlook:</span>
                                Sandeep is diagnosed with Type-2 Diabetes. The cost of management (Metformin, Glucometer strips, Specialists, lost work time) averages **₹4,500/month** or **₹5.4 Lakhs** over 10 years. <br/><br/>
                                Pranav spends ₹0 on chronic medication and has significantly higher energy levels. 
                            </p>
                            <p className="text-center font-bold text-slate-500 uppercase text-xs tracking-widest italic italic-selection">Staying under 23 isn't just health—it's your biggest financial saving strategy.</p>

                            <section id="how-to" className="bg-slate-100 p-12 rounded-[3rem] my-24 border-2 border-white shadow-inner">
                                <h3 className="mt-0 font-black text-3xl mb-8 tracking-tighter">How to Measure Your Indian BMI Correctly</h3>
                                <script type="application/ld+json">
                                    {JSON.stringify({
                                        "@context": "https://schema.org",
                                        "@type": "HowTo",
                                        "name": "How to Measure Indian BMI Correctly",
                                        "step": [
                                            {
                                                "@type": "HowToStep",
                                                "text": "Measure your height in centimeters against a wall, without shoes."
                                            },
                                            {
                                                "@type": "HowToStep",
                                                "text": "Weigh yourself in the morning on an empty stomach with minimal clothing."
                                            },
                                            {
                                                "@type": "HowToStep",
                                                "text": "Use the BMI formula: Weight (kg) / [Height (m) * Height (m)]."
                                            },
                                            {
                                                "@type": "HowToStep",
                                                "text": "Compare against the Indian standard (18-22.9 is Normal)."
                                            }
                                        ]
                                    })}
                                </script>
                                <ol className="space-y-6 text-slate-700 list-none p-0">
                                    <li className="flex gap-4 items-start">
                                        <span className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center text-white font-black shrink-0 mt-1 shadow-md">1</span>
                                        <p className="text-lg font-bold"><span className="text-slate-900">Height:</span> Direct wall measurement in CM. (Don't use your driving license height!)</p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center text-white font-black shrink-0 mt-1 shadow-md">2</span>
                                        <p className="text-lg font-bold"><span className="text-slate-900">Weight:</span> Use a digital scale in the morning after using the washroom. No shoes.</p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center text-white font-black shrink-0 mt-1 shadow-md">3</span>
                                        <p className="text-lg font-bold"><span className="text-slate-900">The 23 Check:</span> If your result is &gt;23, don't panic. Start tracking your steps (8k/day) and protein today.</p>
                                    </li>
                                </ol>
                                <div className="mt-12 p-8 bg-white rounded-3xl border border-slate-200">
                                    <p className="text-sm italic text-slate-500 text-center font-medium italic-selection">
                                        Professional Tip: Use our auto-calc tool below to see your category instantly and get personalized advice.
                                    </p>
                                </div>
                            </section>

                        </div>

                        <AuthorBio />

                        {/* FAQ Section */}
                        <div id="faq" className="mt-40 pt-20 border-t-4 border-slate-100">
                            <h2 className="text-center font-black text-5xl mb-16 tracking-tighter">Your Health Questions, Answered</h2>
                            <div className="grid gap-10">
                                {faqData.map((f, i) => (
                                    <div key={i} className="group">
                                        <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-rose-600 transition-colors">{f.question}</h4>
                                        <p className="text-slate-600 text-lg leading-relaxed font-medium italic-selection">{f.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dynamic CTA Footer */}
                        <div className="mt-32 p-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] text-center shadow-2xl ring-4 ring-white">
                            <h3 className="text-white text-3xl font-black mb-6">Take the first step to a healthier you.</h3>
                            <p className="text-slate-400 mb-10 max-w-xl mx-auto">Start by knowing your real numbers. Use our accurate tools now.</p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link to={ROUTES.CALCULATORS.HEALTH.BMI} className="bg-rose-600 hover:bg-rose-700 text-white font-black py-4 px-10 rounded-2xl transition-all hover:scale-105 shadow-xl">Indian BMI Tool →</Link>
                                <Link to={ROUTES.LEARN.CALORIES_FOR_INDIANS} className="bg-white text-slate-900 font-black py-4 px-10 rounded-2xl transition-all hover:bg-slate-100 shadow-xl">Calorie Guide →</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}
