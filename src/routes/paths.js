export const ROUTES = {
    HOME: "/",
    CALCULATORS: {
        LOAN: {
            EMI: "/calculators/loan/emi-calculator",
            ELIGIBILITY: "/calculators/loan/loan-eligibility",
            VILLAGE_INTEREST: "/calculators/loan/village-interest-calculator"
        },
        INVESTMENT: {
            SIP: "/calculators/investment/sip-calculator",
            SIP_CRORE: "/calculators/investment/sip-1-crore-calculator",
            FD: "/calculators/investment/fd-calculator",
            RD: "/calculators/investment/rd-calculator",
            SIMPLE_INTEREST: "/calculators/investment/simple-interest-calculator",
            COMPOUND_INTEREST: "/calculators/investment/compound-interest-calculator"
        },
        GOLD: {
            JEWELLERY: "/calculators/gold/jewellery-price-calculator",
            OLD_GOLD: "/calculators/gold/old-gold-exchange-calculator"
        },
        CONSTRUCTION: {
            COST: "/calculators/construction/construction-cost-calculator",
            BRICK: "/calculators/construction/brick-calculator",
            LAND_AREA: "/calculators/construction/land-area-converter"
        },
        UTILITY: {
            PERCENTAGE: "/calculators/utility/percentage-calculator",
            DATE_DIFF: "/calculators/utility/date-difference-calculator",
            AGE: "/calculators/utility/age-calculator",
            EXAM: "/calculators/utility/exam-eligibility-calculator"
        }
    },
    LEGAL: {
        PRIVACY: "/privacy-policy",
        TERMS: "/terms-of-service",
        FEEDBACK: "/feedback"
    }
};
