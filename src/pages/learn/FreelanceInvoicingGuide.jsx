import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

export const metadata = {
    title: "Professional Invoicing: Legal & GST Requirements for Freelancers",
    description: "Sending your first invoice? Learn the 7 essential elements of a professional invoice, how to handle IGST vs SGST, and what to do when a client misses a payment deadline.",
    category: "CREATOR",
    slug: ROUTES.LEARN.FREELANCE_INVOICE_GUIDE,
    date: "2025-02-22",
    icon: "📜",
    colorClass: "bg-slate-100",
    isNew: true
};

export default function FreelanceInvoicingGuide() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <Link to={ROUTES.HOME} className="hover:text-blue-600">Home</Link>
                        <span>›</span>
                        <Link to={ROUTES.LEARN.HOME} className="hover:text-blue-600">Learn</Link>
                        <span>›</span>
                        <span className="text-slate-900">Invoicing Guide</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Professional Invoicing:<br /> Beyond Just a Bill
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        An invoice is a legal document. If it's messy, your payments will be messy too.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <article className="prose prose-slate prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h2>The Anatomy of a Professional Invoice</h2>
                    <p>
                        In India, if you are GST-registered, your invoice must follow specific rules under the GST Act. Even if you aren't registered, following these standards makes you look professional to your clients.
                    </p>

                    <h3>1. Header Information</h3>
                    <p>
                        Your legal name (or business name), address, contact details, and most importantly, your **PAN or GSTIN**. Your client's details must also be clearly mentioned.
                    </p>

                    <h3>2. The Invoice Numbering System</h3>
                    <p>
                        Don't just name your file `invoice.pdf`. Use a systematic approach like `INV/2025/001`. This helps both you and your client track payments and audit trails.
                    </p>

                    <div className="bg-slate-50 p-6 rounded-xl my-8 border-l-4 border-slate-600">
                        <h4 className="text-slate-900 mt-0">The GST Rule (IGST vs CGST+SGST)</h4>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                            <li><strong>Inter-state (Client in another state)</strong>: Apply 18% IGST.</li>
                            <li><strong>Intra-state (Client in same state)</strong>: Apply 9% CGST + 9% SGST.</li>
                            <li><strong>Export (Client outside India)</strong>: Use LU (Letter of Undertaking) to bill with 0% GST (Export of Services).</li>
                        </ul>
                    </div>

                    <h3>3. Detailed Scope of Work</h3>
                    <p>
                        Instead of writing "Website Work - ₹50,000", break it down: "Landing Page Design", "Backend Integration", "SEO Consultation". This prevents 'scope creep' where the client asks for extra work for free.
                    </p>

                    <h3>4. Payment Terms & Penalties</h3>
                    <p>
                        Always mention a <strong>Due Date</strong> (e.g., Net 15 or Net 30). Mention your bank details (Account Name, Number, IFSC) clearly. Pro-Tip: Add a small clause about "Late Payment Interest" for payments delayed beyond 30 days to protect your cash flow.
                    </p>

                    <div className="my-10 p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="text-blue-400 font-bold mb-2">The Pro-Freelancer Hack</h4>
                        <p className="mb-0 text-slate-300">"Always send a 'Payment Received' acknowledgement." It sounds formal, but it ensures your client knows the transaction is closed and builds trust for the next project.</p>
                    </div>

                    <div className="mt-8">
                        <Link to={ROUTES.CALCULATORS.CREATOR.FREELANCE_INVOICE} className="inline-block p-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition shadow-lg">
                            Generate Your GST Preview Now
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}
