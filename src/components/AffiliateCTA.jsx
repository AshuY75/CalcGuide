import React from 'react';

const AFFILIATE_DATA = {
    loan: {
        title: "Ready to apply for your Dream Home?",
        partner: "BankBazaar",
        desc: "Compare 30+ banks and get the lowest interest rates starting from 8.35%.",
        cta: "Compare Home Loans →",
        link: "https://www.bankbazaar.com/home-loan.html", // Placeholder
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100"
    },
    investment: {
        title: "Start your SIP journey today",
        partner: "Groww",
        desc: "Join 5 Crore+ investors and start investing in direct mutual funds for FREE.",
        cta: "Start SIP on Groww →",
        link: "https://groww.in/mutual-funds", // Placeholder
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100"
    },
    tax: {
        title: "File your ITR in 3 Minutes",
        partner: "ClearTax",
        desc: "Maximize your tax savings and file accurately with 100% data security.",
        cta: "Check Tax Savings →",
        link: "https://cleartax.in/s/income-tax-filing", // Placeholder
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-100"
    },
    insurance: {
        title: "Is your family fully protected?",
        partner: "Policybazaar",
        desc: "Get ₹1 Crore Term Insurance for as low as ₹500/month. No medicals required.",
        cta: "Compare Insurance →",
        link: "https://www.policybazaar.com/", // Placeholder
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-100"
    },
    fd: {
        title: "Get up to 9.1% FD Rates",
        partner: "StableMoney",
        desc: "Don't settle for 3% in savings. Book FDs across 40+ banks instantly.",
        cta: "View FD Rates →",
        link: "https://stablemoney.in/", // Placeholder
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-100"
    }
};

export default function AffiliateCTA({ type = 'loan' }) {
    const data = AFFILIATE_DATA[type] || AFFILIATE_DATA.loan;

    return (
        <div className={`mt-10 p-8 rounded-[2rem] border-2 ${data.border} ${data.bg} relative overflow-hidden group`}>
            {/* Sponsored Badge */}
            <div className="absolute top-4 right-6 text-[10px] font-black uppercase tracking-widest text-slate-400 opacity-60">
                Sponsored by {data.partner}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                    <h3 className={`text-2xl font-black ${data.color} mb-2 tracking-tight`}>
                        ✅ {data.title}
                    </h3>
                    <p className="text-slate-600 font-medium leading-relaxed">
                        {data.desc}
                    </p>
                </div>
                
                <div className="flex-shrink-0 flex flex-col gap-3 w-full md:w-auto">
                    <a 
                        href={data.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:scale-105 active:scale-95 text-center"
                    >
                        {data.cta}
                    </a>
                    <a 
                        href="https://omg10.com/4/10851818" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-white border-2 border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all text-xs text-center"
                    >
                        🎁 Check Special Bonus Offer
                    </a>
                </div>
            </div>

            {/* Subtle highlight effect */}
            <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 ${data.bg.replace('bg-', 'bg-')}`}></div>
        </div>
    );
}
