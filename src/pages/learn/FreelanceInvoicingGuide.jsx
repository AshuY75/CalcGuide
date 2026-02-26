import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SchemaGenerator } from '../../components/SchemaGenerator';
import AuthorBio from '../../components/AuthorBio';

export const metadata = {
    title: "The Professional Freelance Invoicing Guide: Getting Paid Faster",
    description: "Writing an invoice is more than just listing a price. Learn the essential components of a legal Indian invoice, GST rules, and how to handle payment delays.",
    category: "UTILITY",
    slug: ROUTES.LEARN.FREELANCE_INVOICING,
    date: "2025-02-22",
    icon: "🧾",
    colorClass: "bg-orange-100",
    isNew: true
};

export default function FreelanceInvoicingGuide() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SchemaGenerator
                name="The Professional Freelance Invoicing Guide: Getting Paid Faster"
                description="Writing an invoice is more than just listing a price. Learn the essential components of a legal Indian invoice, GST rules, and how to handle payment delays."
                type="Article"
                url="https://calcguide.in/learn/freelance-invoicing-guide-india-professional/"
            />

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Invoicing</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Freelance Invoicing:<br /> The Key to Professionalism
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        A sloppy invoice leads to sloppy payments. Here is how to structure your billing like a Tier-1 consultancy.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>Why Your Invoice Structure Matters</h2>
                    <p>
                        For a freelancer, an invoice is a legal document. If a client refuses to pay, your invoice is the primary evidence in any legal or arbitration proceedings. Moreover, a professional-looking invoice reduces "payment friction"—it makes it easier for the client's finance department to click 'Pay'.
                    </p>

                    <h3>The 7 Non-Negotiable Components</h3>
                    <ol>
                        <li><strong>Clear Title:</strong> Use the word "TAX INVOICE" if you are GST registered; otherwise, use "INVOICE".</li>
                        <li><strong>Invoice Numbering:</strong> Use a logical series (e.g., CG-2025-001). Never use "1"—it makes you look like a beginner.</li>
                        <li><strong>Your Details:</strong> Name, Address, Contact, and GSTIN (if applicable).</li>
                        <li><strong>Client Details:</strong> Company Name, Address, and their GSTIN.</li>
                        <li><strong>Itemized List:</strong> Don't just say "Project Work". Break it down into "UI/UX Design - 40 hours" or "Article Writing - 5 posts".</li>
                        <li><strong>Payment Terms:</strong> "Net 15" or "Due on Receipt". Be specific.</li>
                        <li><strong>Bank Details:</strong> Account Name, Number, IFSC Code, and a UPI QR code for faster local payments.</li>
                    </ol>

                    <div className="bg-orange-50 p-8 rounded-2xl my-8 border-l-4 border-orange-600 shadow-inner">
                        <h4 className="text-orange-900 mt-0 font-bold">The GST Rule:</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            If you are registered for GST, you <strong>must</strong> separate the Base Price and the GST (usually 18%) in your invoice. If you are not registered, <strong>do not mention GST at all</strong>. Charging GST without a registration number is a criminal offense in India.
                        </p>
                    </div>

                    <h2>International Invoicing (SWIFT & FIRC)</h2>
                    <p>
                        When billing a client in New York or London, your invoice should be in their currency (USD/GBP/EUR). Mention your bank's <strong>SWIFT Code</strong> and ask your bank for an <strong>FIRC (Foreign Inward Remittance Certificate)</strong> once the payment arrives. This is critical for proving to the RBI that the money is legitimate export income.
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                        <h4 className="text-orange-400 font-bold mb-2 italic">Pro Strategy: The Late Fee Clause</h4>
                        <p className="mb-0 text-slate-300">"Respect your time." Add a small line at the bottom of every invoice: *"Payments delayed by more than 15 days will incur a 2% monthly interest fee."* You rarely have to collect this fee, but it signals to the client that you take your business seriously.</p>
                    </div>

                    <h3>Digital Invoicing Tools</h3>
                    <p>Don't use Word or Excel. Use professional tools like <strong>Zoho Invoice, Razorpay, or FreshBooks</strong>. They allow you to track "Views"—you'll know exactly when the client opened the invoice email!</p>

                    <h3>Estimate Your Tax Witholdings</h3>
                    <p>Clients often deduct a 10% TDS before paying you. Use our calculator to see how much you will actually receive in your bank account.</p>
                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.TAX.GST} className="inline-block p-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition shadow-lg">
                            🧾 Professional Tax Calculator →
                        </Link>
                    </div>
                    <AuthorBio />
                </article>
            </div>
        </div>
    );
}
