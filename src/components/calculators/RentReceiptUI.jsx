import React, { useState, useRef } from 'react';

const RentReceiptUI = () => {
    const [formData, setFormData] = useState({
        tenantName: 'John Doe',
        landlordName: 'Jane Smith',
        landlordPan: '',
        rentAmount: '20000',
        address: 'Flat 101, Sunshine Apartments, Bangalore - 560001',
        month: 'April 2026',
        receiptDate: new Date().toISOString().split('T')[0]
    });

    const receiptRef = useRef();

    const handlePrint = () => {
        window.print();
    };

    const updateField = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="space-y-12">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden no-print">
                <div className="p-8 sm:p-12">
                    <div className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Input Fields */}
                            <div className="space-y-6">
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Tenant Name</label>
                                    <input
                                        type="text"
                                        value={formData.tenantName}
                                        onChange={(e) => updateField('tenantName', e.target.value)}
                                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-500 outline-none font-bold text-slate-800 transition-all"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Landlord Name</label>
                                    <input
                                        type="text"
                                        value={formData.landlordName}
                                        onChange={(e) => updateField('landlordName', e.target.value)}
                                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-500 outline-none font-bold text-slate-800 transition-all"
                                        placeholder="Owner Name"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Rent Amount (₹)</label>
                                    <input
                                        type="number"
                                        value={formData.rentAmount}
                                        onChange={(e) => updateField('rentAmount', e.target.value)}
                                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-500 outline-none font-bold text-slate-800 transition-all text-xl"
                                    />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Property Address</label>
                                    <textarea
                                        value={formData.address}
                                        onChange={(e) => updateField('address', e.target.value)}
                                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-500 outline-none font-bold text-slate-800 transition-all h-32 resize-none"
                                        placeholder="Full Address"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Period (Month)</label>
                                        <input
                                            type="text"
                                            value={formData.month}
                                            onChange={(e) => updateField('month', e.target.value)}
                                            className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-500 outline-none font-bold text-slate-800 transition-all"
                                            placeholder="e.g. April 2026"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Landlord PAN</label>
                                        <input
                                            type="text"
                                            value={formData.landlordPan}
                                            onChange={(e) => updateField('landlordPan', e.target.value)}
                                            className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-500 outline-none font-bold text-slate-800 transition-all uppercase placeholder:normal-case"
                                            placeholder="Optional (Mandatory if >₹1L/yr)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handlePrint}
                            className="w-full py-6 bg-indigo-600 text-white rounded-2xl font-black text-xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-4"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                            </svg>
                            Print / Save as PDF
                        </button>
                    </div>
                </div>
            </div>

            {/* PREVIEW AREA (The actually printed part) */}
            <div className="bg-slate-50 p-4 sm:p-12 rounded-[3rem] border-2 border-dashed border-slate-200 no-print">
                <p className="text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-12">LIVE RECEIPT PREVIEW</p>
                <div ref={receiptRef} className="print-area bg-white p-12 sm:p-16 shadow-lg border border-slate-200 mx-auto max-w-[800px] text-slate-800">
                    <div className="flex justify-between items-start border-b-4 border-indigo-600 pb-8 mb-12">
                        <div>
                            <h2 className="text-4xl font-black tracking-tighter text-indigo-600">RENT RECEIPT</h2>
                            <p className="text-sm font-bold text-slate-400 mt-2 italic">Standard Format for HRA Exemption</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-black text-slate-400 uppercase">Receipt Date</p>
                            <p className="text-xl font-black">{new Date(formData.receiptDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                        </div>
                    </div>

                    <div className="space-y-10">
                        <p className="text-lg leading-[2.2] font-medium">
                            Received with thanks from <span className="font-black border-b-2 border-slate-200 pb-1">{formData.tenantName}</span> a sum of 
                            <span className="font-black mx-2 border-b-2 border-slate-200 pb-1 text-2xl">₹ {parseFloat(formData.rentAmount).toLocaleString('en-IN')}</span> 
                            by Cash / Cheque / Online towards rent of the property located at 
                            <span className="font-black block mt-4 border-b-2 border-slate-200 pb-1">{formData.address}</span>
                            for the period of <span className="font-black border-b-2 border-slate-200 pb-1">{formData.month}</span>.
                        </p>

                        <div className="grid grid-cols-2 gap-20 pt-12">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Landlord Details</p>
                                    <p className="text-xl font-black">{formData.landlordName}</p>
                                    {formData.landlordPan && (
                                        <p className="text-sm font-bold text-slate-500 mt-1">PAN: <span className="text-indigo-600">{formData.landlordPan}</span></p>
                                    )}
                                </div>
                                {parseFloat(formData.rentAmount) >= 5000 && (
                                    <div className="w-24 h-24 border-2 border-dashed border-rose-200 flex items-center justify-center text-center p-4">
                                        <p className="text-[8px] font-black text-rose-300 leading-tight">AFFIX REVENUE STAMP HERE</p>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col justify-end items-end">
                                <div className="w-48 h-20 border-b-2 border-slate-800"></div>
                                <p className="text-sm font-black mt-4 text-slate-400 uppercase">Signature of Landlord</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 pt-8 border-t border-slate-100 text-[10px] text-slate-300 font-bold text-center">
                        This is a computer-generated document. Generated via CalcGuide.in
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @media print {
                    body * { visibility: hidden; }
                    .print-area, .print-area * { visibility: visible; }
                    .print-area { 
                        position: absolute; 
                        left: 0; 
                        top: 0; 
                        width: 100%; 
                        border: none !important;
                        box-shadow: none !important;
                    }
                    .no-print { display: none !important; }
                }
            ` }} />
        </div>
    );
};

export default RentReceiptUI;
