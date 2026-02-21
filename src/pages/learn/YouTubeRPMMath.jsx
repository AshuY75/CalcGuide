import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

export const metadata = {
    title: "YouTube RPM India vs US: Why the 10x Difference?",
    description: "Deep dive into YouTube monetization. Understand why US traffic pays significantly more than Indian traffic and how to optimize your channel.",
    category: "CREATOR",
    slug: ROUTES.LEARN.YOUTUBE_RPM,
    date: "2025-02-21",
    icon: "📺",
    colorClass: "bg-red-100",
    isNew: true
};

export default function YouTubeRPMMath() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4 ">
                    <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Monetization Guide</span>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-6 leading-tight">
                        YouTube RPM: Why the World<br /> Pays More than India
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        A view is just a view, right? Wrong. In the world of YouTube AdSense, where your viewer lives is more important than what they watch.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The Math of Advertisers</h2>
                    <p>
                        RPM (Revenue Per Mille) is what you earn for every 1,000 views. The reason for the disparity is simple: **Purchasing Power Parity (PPP)**.
                    </p>
                    <p>
                        An advertiser in the US is willing to pay $10 (₹830) to show an ad to a viewer because that viewer might buy a $1,000 product. An advertiser in India might only pay ₹50 because the product being sold is much cheaper.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 my-10">
                        <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                            <h4 className="m-0 text-red-900 italic">India Traffic</h4>
                            <p className="text-2xl font-black text-slate-900 mt-2">₹40 - ₹150</p>
                            <p className="text-xs text-slate-500 m-0">Avg. RPM for 1k Views</p>
                        </div>
                        <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                            <h4 className="m-0 text-green-900 italic">USA Traffic</h4>
                            <p className="text-2xl font-black text-slate-900 mt-2">₹800 - ₹2500</p>
                            <p className="text-xs text-slate-500 m-0">Avg. RPM for 1k Views</p>
                        </div>
                    </div>

                    <h2>High vs Low RPM Niches</h2>
                    <p>
                        YouTube categorizes content. If you talk about 'Entertainment' or 'Vlogs', your RPM will be low because the audience is general. If you talk about 'Business Software' or 'Mortgages', your RPM sky-rockets.
                    </p>
                    <ul>
                        <li><strong>High RPM:</strong> Finance, Insurance, SaaS, Real Estate, E-commerce.</li>
                        <li><strong>Low RPM:</strong> Comedy, News, Gaming, Music, Kids Content.</li>
                    </ul>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-red-400 font-bold mb-2">Strategy Tip</h4>
                        <p className="text-sm mb-0">If you make content in Hindi, you are capped at Indian RPM levels. If you add <strong>English Subtitles</strong> or use <strong>Multiple Audio Tracks</strong>, you can attract 'Tier 1' country viewers (USA, UK, Canada) and triple your income without increasing your view count.</p>
                    </div>

                    <h3>Estimate Your Income</h3>
                    <div className="mt-6">
                        <Link to={ROUTES.CALCULATORS.CREATOR.YOUTUBE_EARNINGS} className="inline-flex items-center gap-2 p-4 border-2 border-slate-200 rounded-xl hover:border-red-500 transition-colors bg-slate-50 font-bold text-red-700">
                            📺 Open YouTube Earnings Calculator
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
