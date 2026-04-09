import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/paths';
import SeoHead from '../components/SeoHead';

export default function BharatCalculators() {
    const tools = [
        {
            title: "सोना (Gold) कैलकुलेटर",
            desc: "आज का सोने का भाव और गहनों की सही कीमत जानें।",
            link: ROUTES.CALCULATORS.GOLD.JEWELLERY,
            icon: "🪙",
            color: "from-amber-400 to-orange-500"
        },
        {
            title: "खेती की ज़मीन का नाप",
            desc: "बीघा, एकड़ और बिस्वा को आसानी से बदलें।",
            link: ROUTES.CALCULATORS.CONSTRUCTION.LAND_AREA,
            icon: "🚜",
            color: "from-emerald-500 to-green-600"
        },
        {
            title: "गाँव का ब्याज (Sood)",
            desc: "गाँव के साहूकार या बैंक का ब्याज सही तरीके से निकालें।",
            link: ROUTES.CALCULATORS.LOAN.VILLAGE_INTEREST,
            icon: "🧾",
            color: "from-saffron-500 to-orange-600"
        },
        {
            title: "घर बनाने का खर्चा",
            desc: "सीमेंट, ईंट और लेंटर का खर्चा पहले ही जानें।",
            link: ROUTES.CALCULATORS.CONSTRUCTION.COST,
            icon: "🏠",
            color: "from-sky-500 to-indigo-600"
        },
        {
            title: "KCC / ट्रैक्टर लोन",
            desc: "किसान क्रेडिट कार्ड और कृषि लोन की EMI निकालें।",
            link: ROUTES.CALCULATORS.LOAN.KCC,
            icon: "🚜",
            color: "from-red-500 to-rose-600"
        },
        {
            title: "बिजली का बिल",
            desc: "अपनी यूनिट्स भरकर महीने का बिल चेक करें।",
            link: ROUTES.CALCULATORS.UTILITY.ELECTRICITY_BILL,
            icon: "💡",
            color: "from-yellow-400 to-amber-500"
        }
    ];

    const handleShare = () => {
        const text = `CalcGuide भारत कैलकुलेटर - गाँव और खेती के लिए सबसे आसान टूल्स यहाँ देखें: ${window.location.origin}${ROUTES.BHARAT}`;
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-[#fffcf9]">
            <SeoHead 
                title="भारत कैलकुलेटर - गाँव, खेती और व्यापार के आसान टूल्स"
                description="गाँव के ब्याज, खेती की ज़मीन, सोने की कीमत और घर बनाने का खर्चा निकालने के लिए सबसे आसान हिंदी कैलकुलेटर।"
            />

            {/* Header Hero */}
            <header className="relative bg-gradient-to-br from-orange-500 to-amber-600 pt-20 pb-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-black tracking-widest uppercase mb-6">
                        CalcGuide - Bharat Special
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
                        गाँव और खेती के <span className="text-orange-200 underline decoration-orange-100/50">आसान टूल्स</span>
                    </h1>
                    <p className="text-orange-50 text-xl font-medium max-w-2xl mx-auto opacity-90 leading-relaxed mb-10">
                        खेती, ब्याज और सोने की सही जानकारी अब आपकी अपनी भाषा में।
                    </p>

                    <button 
                        onClick={handleShare}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-black rounded-2xl shadow-2xl hover:bg-[#20ba59] transition-all hover:scale-105 active:scale-95"
                    >
                        <span>WhatsApp पर भेजें</span>
                        <span className="text-xl">📲</span>
                    </button>
                </div>
            </header>

            {/* Tool Grid */}
            <main className="max-w-7xl mx-auto px-4 -mt-10 mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool, idx) => (
                        <Link 
                            key={idx}
                            to={tool.link}
                            className="group block bg-white p-8 rounded-[2.5rem] border-2 border-orange-50 shadow-xl shadow-orange-900/5 hover:border-orange-200 transition-all hover:-translate-y-2"
                        >
                            <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-3xl mb-8 shadow-lg group-hover:scale-110 transition-transform text-white`}>
                                {tool.icon}
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                                {tool.title}
                            </h2>
                            <p className="text-slate-500 font-medium leading-relaxed mb-6">
                                {tool.desc}
                            </p>
                            <div className="flex items-center text-orange-600 font-black gap-2 mt-auto">
                                शुरू करें <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
                            </div>
                        </Link>
                    ))}
                    
                    {/* Special Ad Reward Card */}
                    <a 
                        href="https://omg10.com/4/10851818" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group block bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-[2.5rem] border-2 border-indigo-200 shadow-xl hover:-translate-y-2 transition-all relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl mb-8 text-white">
                                🎁
                            </div>
                            <h2 className="text-2xl font-black text-white mb-3">
                                विशेष इनाम (Bonus)
                            </h2>
                            <p className="text-indigo-100 font-medium leading-relaxed mb-6">
                                आज का विशेष ऑफर और इनाम जीतने का मौका यहाँ देखें।
                            </p>
                            <div className="inline-flex items-center px-6 py-2 bg-white text-indigo-700 font-black rounded-xl text-sm">
                                अभी चेक करें →
                            </div>
                        </div>
                    </a>
                </div>

                <div className="mt-20 p-10 bg-emerald-600 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-900/20">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-black mb-4 italic">"सही हिसाब, सही जानकारी"</h3>
                        <p className="text-emerald-50 text-lg opacity-90 max-w-xl mx-auto font-medium mb-10">
                            गाँव के भाइयों के लिए बनाया गया सबसे सरल टूलबॉक्स। इस्तेमाल करें और दूसरों को साझा करें।
                        </p>
                        <div className="flex justify-center gap-6 flex-wrap">
                            <Link to={ROUTES.HOME} className="px-8 py-4 bg-white text-emerald-600 font-black rounded-2xl hover:bg-emerald-50 transition-all">
                                सभी कैलकुलेटर देखें 📊
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
