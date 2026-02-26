import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "Digital Rupee (e₹): Understanding India's Sovereign Currency",
    description: "What is e₹ (Digital Rupee)? How is it different from UPI or Bitcoin? Learn about CBDC, programmability, and the future of digital cash in India.",
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
            <SchemaGenerator
                name="Digital Rupee (e₹): Understanding India's Sovereign Currency"
                description="What is e₹ (Digital Rupee)? How is it different from UPI or Bitcoin? Learn about CBDC, programmability, and the future of digital cash in India."
                type="Article"
                url="https://calcguide.in/learn/digital-rupee-cbdc-india-full-guide/"
            />

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
                        Digital Rupee (e₹):<br /> The Third Form of Money
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        First came Cash. Then came Digital Banking. Now, the RBI is introducing the Digital Rupee (CBDC). Is it worth the hype?
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>What exactly is the e-Rupee?</h2>
                    <p>
                        The <strong>Digital Rupee (e₹)</strong> is a Central Bank Digital Currency (CBDC). It is exactly like the physical cash in your pocket, just in a digital 'token' form. While money in your bank account is a liability of the bank, the Digital Rupee is a <strong>direct liability of the RBI</strong>.
                    </p>

                    <h3>Digital Rupee vs UPI: The Confusion Cleared</h3>
                    <p>
                        This is the most common question. UPI is a <strong>Payment System</strong>; Digital Rupee is <strong>The Currency</strong>.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
                        <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
                            <h4 className="font-bold text-slate-900 mt-0">UPI</h4>
                            <p className="text-xs text-slate-500 mb-4">Inter-bank transfer</p>
                            <ul className="text-sm space-y-2 p-0 list-none">
                                <li>✅ Uses existing bank account</li>
                                <li>✅ Can fail if bank server is down</li>
                                <li>✅ Bank tracks every transaction</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-indigo-50 border-2 border-indigo-200 rounded-xl">
                            <h4 className="font-bold text-indigo-900 mt-0">Digital Rupee</h4>
                            <p className="text-xs text-indigo-500 mb-4">Central Bank token</p>
                            <ul className="text-sm space-y-2 p-0 list-none">
                                <li>✅ Resides in a secure Wallet</li>
                                <li>✅ Settlement is instant & final</li>
                                <li>✅ Offers 'Cash-like' privacy</li>
                            </ul>
                        </div>
                    </div>

                    <h2>Two Unique Features: Programmability & Offline Pay</h2>
                    <ol>
                        <li><strong>Programmability:</strong> This is a game-changer. The RBI can 'program' the money for a specific purpose. For example, an agricultural subsidy can be sent as Digital Rupees that can <em>only</em> be spent at seed or fertilizer shops. This eliminates corruption and ensures the money is used for its intended goal.</li>
                        <li><strong>Offline Payments:</strong> Unlike UPI, which needs 4G/5G to talk to the bank, the Digital Rupee tokens can theoretically be moved between phones via NFC or Bluetooth, even in deep rural areas with no internet.</li>
                    </ol>

                    <div className="my-10 p-8 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-indigo-400 font-bold mb-2 italic">Is it like Crypto?</h4>
                        <p className="mb-0 text-slate-300">"Safe, not Speculative." While e₹ uses Distributed Ledger Technology (like Blockchain), it is NOT decentralized. It is 100% legal tender. 1 e₹ will always buy exactly what 1 Physical Rupee buys. There is no volatility and no risk of the 'platform' disappearing.</p>
                    </div>

                    <h3>Denominations and Usage</h3>
                    <p>When you open your CBDC wallet app (provided by banks like SBI, HDFC, or ICICI), you will see digital versions of the ₹2,000, ₹500, ₹200, ₹100, ₹50, ₹20, and ₹10 notes. You can 'load' these into your wallet from your bank account and spend them by scanning the same QR codes you see at merchants today.</p>

                    <h3>Privacy Matters</h3>
                    <p>Many users appreciate that because e₹ is like cash, the bank does not record the individual small transactions in your savings account statement. This reduces the 'clutter' in your bank statement and provides a level of digital anonymity for daily expenses.</p>

                    <h3>Check Your Purchasing Power</h3>
                    <p>Whether you use cash or digital tokens, inflation is the real enemy. Use our tracker to see how much your Rupee is worth compared to 10 years ago.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.TAX.INCOME_TAX} className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg">
                            📱 Digital Money Tracker →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
