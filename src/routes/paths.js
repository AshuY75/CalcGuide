export const ROUTES = {
    HOME: "/",
    HUBS: {
        LOAN: "/loan-calculators/",
        INVESTMENT: "/investment-calculators/",
        SIP: "/sip-calculators/",
        TAX: "/tax-calculators/",
        STUDENT: "/student-calculators/"
    },
    CALCULATORS: {
        LOAN: {
            EMI: "/calculators/loan/emi-calculator/",
            ELIGIBILITY: "/calculators/loan/loan-eligibility/",
            HOME_LOAN_PREPAYMENT: "/calculators/loan/home-loan-prepayment-calculator/",
            VILLAGE_INTEREST: "/calculators/loan/village-interest-calculator/",
            AMORTISATION_SCHEDULE: "/calculators/loan/amortisation-schedule-calculator/",
            NOTICE_BUYOUT: "/calculators/loan/notice-period-buyout-calculator/"
        },
        INVESTMENT: {
            SIP: "/calculators/investment/sip-calculator/",
            SIP_CRORE: "/calculators/investment/sip-1-crore-calculator/",
            FD: "/calculators/investment/fd-calculator/",
            RD: "/calculators/investment/rd-calculator/",
            SIMPLE_INTEREST: "/calculators/investment/simple-interest-calculator/",
            COMPOUND_INTEREST: "/calculators/investment/compound-interest-calculator/",
            XIRR: "/calculators/investment/xirr-calculator/",
            LTCG_TAX: "/calculators/investment/ltcg-tax-calculator/",
            SWP: "/calculators/investment/swp-calculator/",
            LUMPSUM: "/calculators/investment/lumpsum-calculator/",
            SIP_GOAL: "/calculators/investment/sip-goal-planner/",
            MF_OVERLAP: "/calculators/investment/mutual-fund-overlap-calculator/",
            PPF: "/calculators/investment/ppf-calculator/",
            SSY: "/calculators/investment/ssy-calculator/",
            NPS: "/calculators/investment/nps-calculator/"
        },
        GOLD: {
            JEWELLERY: "/calculators/gold/jewellery-price-calculator/",
            OLD_GOLD: "/calculators/gold/old-gold-exchange-calculator/"
        },
        CONSTRUCTION: {
            COST: "/calculators/construction/construction-cost-calculator/",
            BRICK: "/calculators/construction/brick-calculator/",
            LAND_AREA: "/calculators/construction/land-area-converter/"
        },
        REAL_ESTATE: {
            RENTAL_YIELD: "/calculators/real-estate/rental-yield-calculator/"
        },
        STUDENT: {
            SGPA: "/calculators/student/sgpa-calculator/",
            CGPA_PERCENTAGE: "/calculators/student/cgpa-to-percentage-calculator/",
            TIME_WORK: "/calculators/student/time-and-work-calculator/",
            RANK_PERCENTILE: "/calculators/student/rank-vs-percentile-calculator/"
        },
        UTILITY: {
            PERCENTAGE: "/calculators/utility/percentage-calculator/",
            DATE_DIFF: "/calculators/utility/date-difference-calculator/",
            AGE: "/calculators/utility/age-calculator/",
            EXAM: "/calculators/utility/exam-eligibility-calculator/",
            ELECTRICITY_BILL: "/calculators/utility/electricity-bill-calculator/",
            SOLAR_ROI: "/calculators/utility/solar-roi-calculator/",
            EV_VS_PETROL: "/calculators/utility/ev-vs-petrol-calculator/",
            CREDIT_CARD_REWARDS: "/calculators/utility/credit-card-rewards-value-calculator/",
            WEDDING_PLANNER: "/calculators/utility/wedding-expense-planner/"
        },
        CREATOR: {
            YOUTUBE_EARNINGS: "/calculators/creator/youtube-earnings-calculator/",
            FREELANCE_RATE: "/calculators/creator/freelancer-hourly-rate-calculator/",
            PLATFORM_FEE: "/calculators/creator/platform-fee-calculator/",
            IMPORT_DUTY: "/calculators/creator/import-duty-calculator/",
            FREELANCE_INVOICE: "/calculators/creator/freelance-invoice-generator/"
        },
        TAX: {
            INCOME_TAX: "/calculators/tax/income-tax-calculator/",
            HRA: "/calculators/tax/hra-calculator/",
            GRATUITY: "/calculators/tax/gratuity-calculator/",
            EPF: "/calculators/tax/epf-calculator/",
            GST: "/calculators/tax/gst-calculator/",
            TDS: "/calculators/tax/tds-calculator/",
            PROFESSIONAL_TAX: "/calculators/tax/professional-tax-calculator/"
        }
    },
    LEGAL: {
        PRIVACY: "/privacy-policy/",
        TERMS: "/terms-of-service/",
        FEEDBACK: "/feedback/",
        CONTACT: "/contact/",
        ABOUT: "/about/"
    },
    SEO: {
        SIP_5000: "/sip-calculator-5000-per-month/",
        SIP_1CR_LANDING: "/sip-1-crore-calculator/",
        FD_VS_SIP: "/fd-vs-sip-india/",
        EMI_HOME: "/emi-calculator-home-loan-india/",
        LAND_UP: "/bigha-to-acre-uttar-pradesh/"
    },
    LEARN: {
        HOME: "/learn/",
        SIP_RETURNS_CALCULATION: "/learn/how-sip-returns-are-calculated/",
        SIP_VS_FD: "/learn/why-sip-beats-fd-long-term/",
        VILLAGE_INT_EXPL: "/learn/how-village-interest-sood-vaddi-works/",
        PREPAYMENT_VS_SIP: "/learn/home-loan-prepayment-vs-sip-11-percent-rule/",
        WHY_EARLY_PREPAYMENT: "/learn/why-early-prepayment-saves-interest/",
        MCLR_VS_EBLR: "/learn/mclr-vs-eblr-home-loan-switch/",
        STEP_UP_SIP: "/learn/step-up-sip-vs-inflation/",
        BUILD_1_CRORE: "/learn/how-to-build-1-crore-mutual-funds/",
        CAGR_LIES: "/learn/why-cagr-lies-the-real-deal/",
        LTCG_HARVESTING: "/learn/ltcg-tax-harvesting-guide-2025/",
        SWP_VS_FD: "/learn/swp-vs-fd-for-monthly-income/",
        OLD_VS_NEW_TAX: "/learn/old-vs-new-tax-regime-2025/",
        HRA_EXEMPTION: "/learn/how-to-calculate-hra-exemption/",
        GRATUITY_EXPLAINER: "/learn/gratuity-rules-explained/",
        EPF_EXPLAINER: "/learn/epf-calculator-guide-math/",
        SUMMER_BILL_SPIKE: "/learn/how-to-beat-summer-electricity-bill-spike/",
        PM_SURYA_GHAR_ROI: "/learn/pm-surya-ghar-muft-bijli-yojana-roi/",
        EV_VS_PETROL_TRUTH: "/learn/ev-vs-petrol-true-cost-comparison/",
        CREDIT_CARD_DEVALUATION: "/learn/credit-card-points-devaluation-survival/",
        YOUTUBE_RPM: "/learn/youtube-rpm-india-vs-us-math/",
        FREELANCE_PRICING: "/learn/why-freelancers-undercharge-guide/",
        HIDDEN_FEES: "/learn/hidden-platform-fees-paypal-upwork/",
        IMPORT_DUTY_GUIDE: "/learn/how-import-duty-is-calculated-india/",
        SGPA_VS_CGPA: "/learn/sgpa-vs-cgpa-difference-guide/",
        SGPA_TO_PERCENTAGE: "/learn/sgpa-to-percentage-conversion-university-list/",
        TIME_AND_WORK_MASTERY: "/learn/time-and-work-mastery-for-exams/",
        JEE_NEET_RANK_ANALYSIS: "/learn/jee-neet-rank-vs-percentile-analysis/",
        SGB_VS_GOLD: "/learn/sgb-vs-physical-gold-2025-comparison/",
        INDEXATION_REMOVAL: "/learn/indexation-benefit-removal-property-tax-impact/",
        SECTION_80C_DYING: "/learn/section-80c-new-tax-regime-transition-guide/",
        DIGITAL_RUPEE: "/learn/digital-rupee-cbdc-india-full-guide/",
        SIDE_HUSTLE_TAX: "/learn/side-hustle-tax-guide-salary-plus-freelance/",
        WEDDING_BUDGET: "/learn/wedding-budget-planning-tips-india/",
        MF_OVERLAP_TRUTH: "/learn/mutual-fund-overlap-portfolio-diversification-truth/",
        NOTICE_PERIOD_RIGHTS: "/learn/notice-period-employee-rights-exit-tax/",
        PROFESSIONAL_INVOICING: "/learn/professional-freelance-invoicing-legal-requirements/",
        EMERGENCY_FUND: "/learn/emergency-fund-blueprint-12-months-salary/",
        LOAN_BALANCE_TRANSFER: "/learn/loan-balance-transfer-save-lakhs-formula/",
        CHILD_EDUCATION_SAVINGS: "/learn/how-to-save-for-child-education-sip-ssy/"
    }
};
