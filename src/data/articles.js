import { ROUTES } from '../routes/paths';

export const articles = [
    {
        id: 'sip-returns',
        title: 'How SIP Returns Are Calculated in India',
        slug: ROUTES.LEARN.SIP_RETURNS_CALCULATION,
        description: 'Understand the math behind your mutual fund investments. Learn about XIRR, compounding, and see real examples of ₹5000/month SIPs.',
        category: 'Investment',
        icon: '📊',
        colorClass: 'bg-blue-50',
        date: '2024-01-15'
    },
    {
        id: 'sip-vs-fd',
        title: 'Why SIP Beats FD for Long-Term Wealth',
        slug: ROUTES.LEARN.SIP_VS_FD,
        description: 'Inflation is eating your Fixed Deposit returns. Detailed math comparing SIP vs FD outcomes over 10+ years with tax analysis.',
        category: 'Investment',
        icon: '📈',
        colorClass: 'bg-green-50',
        date: '2025-01-26',
        isNew: true
    },
    {
        id: 'village-interest',
        title: 'Village Interest (Sood) Calculation Explained',
        slug: ROUTES.LEARN.VILLAGE_INT_EXPL,
        description: 'What does "₹2 interest" actually mean? Learn how to calculate daily and monthly village interest rates correctly.',
        category: 'Loan',
        icon: '🌾',
        colorClass: 'bg-orange-50',
        date: '2023-12-10'
    }
];
