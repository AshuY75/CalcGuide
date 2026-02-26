import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "YouTube RPM & CPM Decoding: How Much Do Indian Creators Earn?",
    description: "Learn why your YouTube earnings vary by niche, geography, and watch time. A complete guide to understanding Revenue Per Mille (RPM) for 2025.",
    category: "UTILITY",
    slug: ROUTES.LEARN.YOUTUBE_RPM_MATH,
    date: "2025-02-21",
    icon: "📺",
    colorClass: "bg-red-100",
    isNew: true
};

export default function YouTubeRPMMath() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="YouTube RPM & CPM Decoding: How Much Do Indian Creators Earn?"
                description="Learn why your YouTube earnings vary by niche, geography, and watch time. A complete guide to understanding Revenue Per Mille (RPM) for 2025."
                type="Article"
                url="https://calcguide.in/learn/youtube-rpm-cpm-math-indian-creators-guide/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">YouTube Math</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        YouTube RPM:<br /> The Real Math of Content Creation
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        1 Million views doesn't mean the same thing for a comedian as it does for a stock market expert. Here is why niches define your wealth.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>CPM vs RPM: What's the Difference?</h2>
                    <p>
                        Most creators get confused between these two metrics in their Analytics dashboard:
                    </p>
                    <ul>
                        <li><strong>CPM (Cost Per Mille):</strong> What advertisers pay YouTube for 1,000 views. This is the <em>gross</em> revenue.</li>
                        <li><strong>RPM (Revenue Per Mille):</strong> What <strong>you</strong> actually take home after YouTube's 45% cut and accounting for non-monetized views. <strong>RPM is the only number that matters.</strong></li>
                    </ul>

                    <h3>The Niche Multiplier</h3>
                    <p>Advertisers pay more to target people with money. This creates massive gaps in RPM:</p>
                    <div className="overflow-x-auto my-8">
                        <table className="w-full text-sm border border-slate-200 bg-white">
                            <thead>
                                <tr className="bg-slate-50 text-slate-900">
                                    <th className="p-4 text-left">Niche</th>
                                    <th className="p-4 text-left">Typical RPM (India)</th>
                                    <th className="p-4 text-left">Revenue for 1M Views</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-4">Finance/Crypto</td>
                                    <td className="p-4 font-bold text-green-600">₹300 - ₹800</td>
                                    <td className="p-4">₹3,00,000 - ₹8,00,000</td>
                                </tr>
                                <tr>
                                    <td className="p-4">Tech Reviews</td>
                                    <td className="p-4">₹150 - ₹400</td>
                                    <td className="p-4">₹1,50,000 - ₹4,00,000</td>
                                </tr>
                                <tr>
                                    <td className="p-4">Vlog/Comedy</td>
                                    <td className="p-4 text-red-600">₹15 - ₹50</td>
                                    <td className="p-4">₹15,000 - ₹50,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>Geography: The 'Tier-1' Boost</h3>
                    <p>If your viewers are in the USA or UK, your RPM will be <strong>5x to 10x higher</strong> than if your viewers are in India. This is because purchasing power is higher, and advertisers are willing to bid more for those eyeballs. This is why many Indian creators are shifting to English content or adding subtitles to capture global audiences.</p>

                    <div className="bg-red-50 p-8 rounded-2xl my-8 border-l-4 border-red-600 shadow-inner">
                        <h4 className="text-red-900 mt-0 font-bold">The 8-Minute Magic:</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            Videos longer than 8 minutes allow for <strong>Mid-roll Ads</strong>. This essentially allows you to show two or three ads to the same viewer, potentially doubling your RPM on that specific video. However, don't stretch content unnecessarily—if your watch-time drops, YouTube's algorithm will stop recommending the video.
                        </p>
                    </div>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-red-400 font-bold mb-2 italic">Pro Strategy: Diversify Revenue</h4>
                        <p className="mb-0 text-slate-300">"Ads are the smallest piece." For top Indian creators, AdSense only makes up 20-30% of their income. The real money lies in Brand Sponsorships, Affiliates, and selling their own digital products (courses/newsletters). Use your AdSense RPM as a floor, not a ceiling.</p>
                    </div>

                    <h3>Calculate Your Potential Earnings</h3>
                    <p>Thinking of starting a channel? Use our estimator to see how much you could earn based on your chosen niche.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.UTILITY.TIPPING} className="inline-block p-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition shadow-lg">
                            📺 Creator Revenue Estimator →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
