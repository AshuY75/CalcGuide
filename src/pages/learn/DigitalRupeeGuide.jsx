import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

export const metadata = {
    title: "Digital Rupee (CBDC): Everything You Need to Know",
    description: "What is e₹ (Digital Rupee)? How is it different from UPI or Bitcoin? Learn about India's new digital currency and how to use it in your daily life.",
    category: "TAX",
    slug: ROUTES.LEARN.DIGITAL_RUPEE,
    date: "2025-02-22",
    icon: "📱",
    colorClass: "bg-indigo-100",
    isNew: true
};

export default function DigitalRupeeGuide() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Digital Rupee</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Digital Rupee (e₹):<br /> The Future of Indian Money
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        India's own Central Bank Digital Currency (CBDC) is here. But is it just 'another UPI'?
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>What is the Digital Rupee (e-Rupee)?</h2>
                    <p>
                        The <strong>Digital Rupee (e₹)</strong> is a Central Bank Digital Currency (CBDC) issued by the Reserve Bank of India. It is a digital version of the physical cash that you carry in your wallet. Unlike UPI, which is a payment system, e₹ is the <strong>currency itself</strong>.
                    </p>

                    <h2>Digital Rupee vs UPI: The Big Difference</h2>
                    <p>
                        Many people ask, "I already use UPI, why do I need this?". Here is the key distinction:
                    </p>
                    <div className="bg-indigo-50 p-6 rounded-xl my-8 border-l-4 border-indigo-600">
                        <ul className="list-disc pl-5 space-y-3 text-slate-700">
                            <li><strong>UPI</strong>: Moves money from Bank A to Bank B. It needs a bank account to function.</li>
                            <li><strong>Digital Rupee</strong>: Is the money. It resides in your digital wallet, not your bank account. It works even if the banking system is down.</li>
                            <li><strong>Settlement</strong>: UPI settlement takes place between banks. Digital Rupee settlement is immediate and final, just like handing over a ₹500 note.</li>
                        </ul>
                    </div>

                    <h3>Is it like Bitcoin?</h3>
                    <p>
                        No. While both use blockchain technology, Bitcoin is a decentralized asset with volatile prices. The Digital Rupee is <strong>legal tender</strong> backed by the RBI. 1 e₹ will always be equal to 1 ₹. It is safe, stable, and sovereign.
                    </p>

                    <h3>How to use Digital Rupee?</h3>
                    <ol>
                        <li>Download your bank's CBDC app (HDFC, SBI, ICICI, etc. have them).</li>
                        <li>Link your account once to 'load' the wallet.</li>
                        <li>The app will show you digital notes in denominations of ₹20, ₹50, ₹100, ₹500, and even coins.</li>
                        <li>Scan a CBDC QR code at a shop or send money via a phone number.</li>
                    </ol>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-indigo-400 font-bold mb-2">The 'Offline' Benefit</h4>
                        <p className="mb-0 text-slate-300">RBI is working on an offline version of the Digital Rupee. Imagine paying a taxi driver in an area with ZERO mobile network—Digital Rupee can make that possible by transferring the 'token' directly between phones.</p>
                    </div>

                    <h3 className="mt-8">Should you switch?</h3>
                    <p>
                        For now, e₹ is in a pilot phase. It offers better privacy than bank transfers (the bank doesn't see every small transaction in your statement) and is a great backup to UPI. As the ecosystem grows, it might become the primary way we handle cash in the digital age.
                    </p>

                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.UTILITY.CURRENCY} className="inline-block p-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg">
                            Try the Currency Converter
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
