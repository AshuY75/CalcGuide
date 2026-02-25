
import { ROUTES } from './paths';
import MainLayout from '../layouts/MainLayout';

// --- COMPONENT IMPORTS (ALPHABETICAL & GROUPED) ---

// 1. Core & Wrappers
import RouteWrapper from '../components/RouteWrapper';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

// 2. Hubs
import InvestmentHub from '../pages/hubs/InvestmentHub';
import LoanHub from '../pages/hubs/LoanHub';
import SIPHub from '../pages/hubs/SIPHub';
import TaxHub from '../pages/hubs/TaxHub';
import StudentHub from '../pages/hubs/StudentHub';

// 3. Calculators: Construction
import BrickCalculator from '../pages/BrickCalculator';
import ConstructionCost from '../pages/ConstructionCostCalculator';
import LandArea from '../pages/LandAreaConverter';

// 4. Calculators: Gold
import GoldJewellery from '../pages/GoldJewelleryCalculator';
import OldGold from '../pages/OldGoldCalculator';

// 5. Calculators: Investment
import CompoundInterest from '../pages/CompoundInterestCalculator';
import FDCalculator from '../pages/FDCalculator';
import RDCalculator from '../pages/RDCalculator';
import SimpleInterest from '../pages/SimpleInterestCalculator';
import SIP1CrCalculator from '../pages/SIP1CrCalculator';
import SIPCalculator from '../pages/SIPCalculator';
import SWPCalculator from '../pages/SWPCalculator';
import XIRRCalculator from '../pages/XIRRCalculator';
import LTCGTaxCalculator from '../pages/LTCGTaxCalculator';
import LumpsumCalculator from '../pages/LumpsumCalculator';
import MFOverlapCalculator from '../pages/MFOverlapCalculator';
import NPSCalculator from '../pages/NPSCalculator';
import PPFCalculator from '../pages/PPFCalculator';
import SIPGoalPlanner from '../pages/SIPGoalPlanner';
import SSYCalculator from '../pages/SSYCalculator';

// 6. Calculators: Loan
import AmortisationScheduleCalculator from '../pages/AmortisationScheduleCalculator';
import EMICalculator from '../pages/EMICalculator';
import HomeLoanPrepaymentCalculator from '../pages/HomeLoanPrepaymentCalculator';
import LoanEligibility from '../pages/LoanEligibility';
import VillageInterest from '../pages/VillageInterestCalculator';
import NoticeBuyoutCalculator from '../pages/NoticeBuyoutCalculator';

// 7. Calculators: Tax
import EPFCalculator from '../pages/EPFCalculator';
import GratuityCalculator from '../pages/GratuityCalculator';
import HRACalculator from '../pages/HRACalculator';
import IncomeTaxCalculator from '../pages/IncomeTaxCalculator';
import GSTCalculator from '../pages/GSTCalculator';
import TDSCalculator from '../pages/TDSCalculator';
import ProfessionalTaxCalculator from '../pages/ProfessionalTaxCalculator';

// 8. Calculators: Utility
import AgeCalculator from '../pages/AgeCalculator';
import DateDifferenceCalculator from '../pages/DateDifferenceCalculator';
import ExamEligibility from '../pages/ExamEligibility';
import PercentageCalculator from '../pages/PercentageCalculator';
import ElectricityBillCalculator from '../pages/ElectricityBillCalculator';
import SolarROICalculator from '../pages/SolarROICalculator';
import EVvsPetrolTCO from '../pages/EVvsPetrolTCO';
import CreditCardRewards from '../pages/CreditCardRewards';
import YouTubeEarningsCalculator from '../pages/YouTubeEarningsCalculator';
import FreelancerRateCalculator from '../pages/FreelancerRateCalculator';
import PlatformFeeCalculator from '../pages/PlatformFeeCalculator';
import ImportDutyCalculator from '../pages/ImportDutyCalculator';
import CGPAPercentageCalculator from '../pages/CGPAPercentageCalculator';
import FreelanceInvoiceGenerator from '../pages/FreelanceInvoiceGenerator';
import RankPercentileCalculator from '../pages/RankPercentileCalculator';
import RentalYieldCalculator from '../pages/RentalYieldCalculator';
import SGPACalculator from '../pages/SGPACalculator';
import TimeWorkCalculator from '../pages/TimeWorkCalculator';
import WeddingPlanner from '../pages/WeddingPlanner';

// 9. Legal & Static
import About from '../pages/About';
import Contact from '../pages/Contact';
import Feedback from '../pages/Feedback';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';

// 10. Learn / Blog Pages (Alphabetical)
import Build1Crore from '../pages/learn/Build1Crore';
import CAGRLies from '../pages/learn/CAGRLies';
import CreditCardDevaluation from '../pages/learn/RewardDevaluation';
import EarlyPrepaymentSavings from '../pages/learn/EarlyPrepaymentSavings';
import EPFExplainer from '../pages/learn/EPFExplainer';
import EVBreakEven from '../pages/learn/EVBreakEven';
import FreelancePricingGuide from '../pages/learn/FreelancePricingGuide';
import GratuityExplainer from '../pages/learn/GratuityExplainer';
import HRAExemptionMath from '../pages/learn/HRAExemptionMath';
import HiddenPlatformFees from '../pages/learn/HiddenPlatformFees';
import HomeLoanVsSIP from '../pages/learn/HomeLoanVsSIP';
import HowSIPReturnsCalculated from '../pages/learn/HowSIPWorks';
import ImportDutyGuide from '../pages/learn/ImportDutyGuide';
import LearnHome from '../pages/learn/LearnHome';
import LTCGTaxHarvesting from '../pages/learn/LTCGTaxHarvesting';
import MCLRvsEBLR from '../pages/learn/MCLRvsEBLR';
import OldVsNewTax from '../pages/learn/OldVsNewTax';
import PMSuryaGharROI from '../pages/learn/PMSuryaGharROI';
import PrepaymentVsSIP from '../pages/learn/PrepaymentVsSIP';
import StepUpSIP from '../pages/learn/StepUpSIP';
import SummerBillSpike from '../pages/learn/SummerBillSpike';
import SWPvsFD from '../pages/learn/SWPvsFD';
import VillageInterestExplainer from '../pages/learn/VillageInterestExplainer';
import WhySIPBeatsFD from '../pages/learn/WhySIPBeatsFD';
import YouTubeRPMMath from '../pages/learn/YouTubeRPMMath';
import ChildEducationSavings from '../pages/learn/ChildEducationSavings';
import DigitalRupeeGuide from '../pages/learn/DigitalRupeeGuide';
import EmergencyFundBlueprint from '../pages/learn/EmergencyFundBlueprint';
import FreelanceInvoicingGuide from '../pages/learn/FreelanceInvoicingGuide';
import IndexationImpact from '../pages/learn/IndexationImpact';
import LoanBalanceTransferGuide from '../pages/learn/LoanBalanceTransferGuide';
import MFOverlapTruth from '../pages/learn/MFOverlapTruth';
import NoticePeriodRights from '../pages/learn/NoticePeriodRights';
import RankPercentileAnalysis from '../pages/learn/RankPercentileAnalysis';
import Section80CDying from '../pages/learn/Section80CDying';
import SGPACGPAGuide from '../pages/learn/SGPACGPAGuide';
import SGPAToPercentageGuide from '../pages/learn/SGPAToPercentageGuide';
import SGBvsGold from '../pages/learn/SGBvsGold';
import SideHustleTax from '../pages/learn/SideHustleTax';
import TimeWorkMastery from '../pages/learn/TimeWorkMastery';
import WeddingBudgetTips from '../pages/learn/WeddingBudgetTips';

// 11. SEO Landing Pages
import EMILanding from '../pages/seo/EMILanding';
import FDvsSIP from '../pages/seo/FDvsSIP';
import LandConverterLanding from '../pages/seo/LandConverterLanding';
import SIP1CrLanding from '../pages/seo/SIP1CrLanding';
import SIP5000 from '../pages/seo/SIP5000';

// --- ROUTE DEFINITIONS ---

export const routes = [
    {
        path: ROUTES.HOME,
        element: <MainLayout />,
        children: [
            // Core
            { index: true, element: <RouteWrapper Component={Home} /> },

            // Hubs
            { path: ROUTES.HUBS.LOAN, element: <RouteWrapper Component={LoanHub} /> },
            { path: ROUTES.HUBS.INVESTMENT, element: <RouteWrapper Component={InvestmentHub} /> },
            { path: ROUTES.HUBS.SIP, element: <RouteWrapper Component={SIPHub} /> },
            { path: ROUTES.HUBS.TAX, element: <RouteWrapper Component={TaxHub} /> },
            { path: ROUTES.HUBS.STUDENT, element: <RouteWrapper Component={StudentHub} /> },

            // Loan
            { path: ROUTES.CALCULATORS.LOAN.EMI, element: <RouteWrapper Component={EMICalculator} /> },
            { path: ROUTES.CALCULATORS.LOAN.HOME_LOAN_PREPAYMENT, element: <RouteWrapper Component={HomeLoanPrepaymentCalculator} /> },
            { path: ROUTES.CALCULATORS.LOAN.ELIGIBILITY, element: <RouteWrapper Component={LoanEligibility} /> },
            { path: ROUTES.CALCULATORS.LOAN.VILLAGE_INTEREST, element: <RouteWrapper Component={VillageInterest} /> },
            { path: ROUTES.CALCULATORS.LOAN.AMORTISATION_SCHEDULE, element: <RouteWrapper Component={AmortisationScheduleCalculator} /> },
            { path: ROUTES.CALCULATORS.LOAN.NOTICE_BUYOUT, element: <RouteWrapper Component={NoticeBuyoutCalculator} /> },

            // Investment
            { path: ROUTES.CALCULATORS.INVESTMENT.SIP, element: <RouteWrapper Component={SIPCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.SIP_CRORE, element: <RouteWrapper Component={SIP1CrCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.SWP, element: <RouteWrapper Component={SWPCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.XIRR, element: <RouteWrapper Component={XIRRCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.LTCG_TAX, element: <RouteWrapper Component={LTCGTaxCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.FD, element: <RouteWrapper Component={FDCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.RD, element: <RouteWrapper Component={RDCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.SIMPLE_INTEREST, element: <RouteWrapper Component={SimpleInterest} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.COMPOUND_INTEREST, element: <RouteWrapper Component={CompoundInterest} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.LUMPSUM, element: <RouteWrapper Component={LumpsumCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.SIP_GOAL, element: <RouteWrapper Component={SIPGoalPlanner} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.MF_OVERLAP, element: <RouteWrapper Component={MFOverlapCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.PPF, element: <RouteWrapper Component={PPFCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.SSY, element: <RouteWrapper Component={SSYCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.NPS, element: <RouteWrapper Component={NPSCalculator} /> },

            // Tax
            { path: ROUTES.CALCULATORS.TAX.INCOME_TAX, element: <RouteWrapper Component={IncomeTaxCalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.HRA, element: <RouteWrapper Component={HRACalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.GRATUITY, element: <RouteWrapper Component={GratuityCalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.EPF, element: <RouteWrapper Component={EPFCalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.GST, element: <RouteWrapper Component={GSTCalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.TDS, element: <RouteWrapper Component={TDSCalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.PROFESSIONAL_TAX, element: <RouteWrapper Component={ProfessionalTaxCalculator} /> },

            // Gold
            { path: ROUTES.CALCULATORS.GOLD.JEWELLERY, element: <RouteWrapper Component={GoldJewellery} /> },
            { path: ROUTES.CALCULATORS.GOLD.OLD_GOLD, element: <RouteWrapper Component={OldGold} /> },

            // Construction
            { path: ROUTES.CALCULATORS.CONSTRUCTION.COST, element: <RouteWrapper Component={ConstructionCost} /> },
            { path: ROUTES.CALCULATORS.CONSTRUCTION.BRICK, element: <RouteWrapper Component={BrickCalculator} /> },
            { path: ROUTES.CALCULATORS.CONSTRUCTION.LAND_AREA, element: <RouteWrapper Component={LandArea} /> },

            // Utility
            { path: ROUTES.CALCULATORS.UTILITY.PERCENTAGE, element: <RouteWrapper Component={PercentageCalculator} /> },
            { path: ROUTES.CALCULATORS.UTILITY.DATE_DIFF, element: <RouteWrapper Component={DateDifferenceCalculator} /> },
            { path: ROUTES.CALCULATORS.UTILITY.AGE, element: <RouteWrapper Component={AgeCalculator} /> },
            { path: ROUTES.CALCULATORS.UTILITY.EXAM, element: <RouteWrapper Component={ExamEligibility} /> },
            { path: ROUTES.CALCULATORS.UTILITY.ELECTRICITY_BILL, element: <RouteWrapper Component={ElectricityBillCalculator} /> },
            { path: ROUTES.CALCULATORS.UTILITY.SOLAR_ROI, element: <RouteWrapper Component={SolarROICalculator} /> },
            { path: ROUTES.CALCULATORS.UTILITY.EV_VS_PETROL, element: <RouteWrapper Component={EVvsPetrolTCO} /> },
            { path: ROUTES.CALCULATORS.UTILITY.CREDIT_CARD_REWARDS, element: <RouteWrapper Component={CreditCardRewards} /> },
            { path: ROUTES.CALCULATORS.CREATOR.YOUTUBE_EARNINGS, element: <RouteWrapper Component={YouTubeEarningsCalculator} /> },
            { path: ROUTES.CALCULATORS.CREATOR.FREELANCE_RATE, element: <RouteWrapper Component={FreelancerRateCalculator} /> },
            { path: ROUTES.CALCULATORS.CREATOR.PLATFORM_FEE, element: <RouteWrapper Component={PlatformFeeCalculator} /> },
            { path: ROUTES.CALCULATORS.CREATOR.IMPORT_DUTY, element: <RouteWrapper Component={ImportDutyCalculator} /> },
            { path: ROUTES.CALCULATORS.STUDENT.SGPA, element: <RouteWrapper Component={SGPACalculator} /> },
            { path: ROUTES.CALCULATORS.STUDENT.CGPA_PERCENTAGE, element: <RouteWrapper Component={CGPAPercentageCalculator} /> },
            { path: ROUTES.CALCULATORS.STUDENT.TIME_WORK, element: <RouteWrapper Component={TimeWorkCalculator} /> },
            { path: ROUTES.CALCULATORS.STUDENT.RANK_PERCENTILE, element: <RouteWrapper Component={RankPercentileCalculator} /> },
            { path: ROUTES.CALCULATORS.REAL_ESTATE.RENTAL_YIELD, element: <RouteWrapper Component={RentalYieldCalculator} /> },
            { path: ROUTES.CALCULATORS.UTILITY.WEDDING_PLANNER, element: <RouteWrapper Component={WeddingPlanner} /> },
            { path: ROUTES.CALCULATORS.CREATOR.FREELANCE_INVOICE, element: <RouteWrapper Component={FreelanceInvoiceGenerator} /> },

            // Legal
            { path: ROUTES.LEGAL.PRIVACY, element: <RouteWrapper Component={PrivacyPolicy} /> },
            { path: ROUTES.LEGAL.TERMS, element: <RouteWrapper Component={TermsOfService} /> },
            { path: ROUTES.LEGAL.FEEDBACK, element: <RouteWrapper Component={Feedback} /> },
            { path: ROUTES.LEGAL.CONTACT, element: <RouteWrapper Component={Contact} /> },
            { path: ROUTES.LEGAL.ABOUT, element: <RouteWrapper Component={About} /> },

            // SEO Landing
            { path: ROUTES.SEO.SIP_5000, element: <RouteWrapper Component={SIP5000} /> },
            { path: ROUTES.SEO.SIP_1CR_LANDING, element: <RouteWrapper Component={SIP1CrLanding} /> },
            { path: ROUTES.SEO.FD_VS_SIP, element: <RouteWrapper Component={FDvsSIP} /> },
            { path: ROUTES.SEO.EMI_HOME, element: <RouteWrapper Component={EMILanding} /> },
            { path: ROUTES.SEO.LAND_UP, element: <RouteWrapper Component={LandConverterLanding} /> },

            // Learn / Articles
            { path: ROUTES.LEARN.HOME, element: <RouteWrapper Component={LearnHome} /> },
            { path: ROUTES.LEARN.SIP_RETURNS_CALCULATION, element: <RouteWrapper Component={HowSIPReturnsCalculated} /> },
            { path: ROUTES.LEARN.SIP_VS_FD, element: <RouteWrapper Component={WhySIPBeatsFD} /> },
            { path: ROUTES.LEARN.VILLAGE_INT_EXPL, element: <RouteWrapper Component={VillageInterestExplainer} /> },
            { path: ROUTES.LEARN.PREPAYMENT_VS_SIP, element: <RouteWrapper Component={PrepaymentVsSIP} /> },
            { path: ROUTES.LEARN.WHY_EARLY_PREPAYMENT, element: <RouteWrapper Component={EarlyPrepaymentSavings} /> },
            { path: ROUTES.LEARN.MCLR_VS_EBLR, element: <RouteWrapper Component={MCLRvsEBLR} /> },
            { path: ROUTES.LEARN.BUILD_1_CRORE, element: <RouteWrapper Component={Build1Crore} /> },
            { path: ROUTES.LEARN.CAGR_LIES, element: <RouteWrapper Component={CAGRLies} /> },
            { path: ROUTES.LEARN.LTCG_HARVESTING, element: <RouteWrapper Component={LTCGTaxHarvesting} /> },
            { path: ROUTES.LEARN.STEP_UP_SIP, element: <RouteWrapper Component={StepUpSIP} /> },
            { path: ROUTES.LEARN.SWP_VS_FD, element: <RouteWrapper Component={SWPvsFD} /> },
            { path: ROUTES.LEARN.OLD_VS_NEW_TAX, element: <RouteWrapper Component={OldVsNewTax} /> },
            { path: ROUTES.LEARN.HRA_EXEMPTION, element: <RouteWrapper Component={HRAExemptionMath} /> },
            { path: ROUTES.LEARN.GRATUITY_EXPLAINER, element: <RouteWrapper Component={GratuityExplainer} /> },
            { path: ROUTES.LEARN.EPF_EXPLAINER, element: <RouteWrapper Component={EPFExplainer} /> },
            { path: ROUTES.LEARN.SUMMER_BILL_SPIKE, element: <RouteWrapper Component={SummerBillSpike} /> },
            { path: ROUTES.LEARN.PM_SURYA_GHAR_ROI, element: <RouteWrapper Component={PMSuryaGharROI} /> },
            { path: ROUTES.LEARN.EV_VS_PETROL_TRUTH, element: <RouteWrapper Component={EVBreakEven} /> },
            { path: ROUTES.LEARN.CREDIT_CARD_DEVALUATION, element: <RouteWrapper Component={CreditCardDevaluation} /> },
            { path: ROUTES.LEARN.YOUTUBE_RPM, element: <RouteWrapper Component={YouTubeRPMMath} /> },
            { path: ROUTES.LEARN.FREELANCE_PRICING, element: <RouteWrapper Component={FreelancePricingGuide} /> },
            { path: ROUTES.LEARN.HIDDEN_FEES, element: <RouteWrapper Component={HiddenPlatformFees} /> },
            { path: ROUTES.LEARN.IMPORT_DUTY_GUIDE, element: <RouteWrapper Component={ImportDutyGuide} /> },
            { path: ROUTES.LEARN.SGPA_VS_CGPA, element: <RouteWrapper Component={SGPACGPAGuide} /> },
            { path: ROUTES.LEARN.SGPA_TO_PERCENTAGE, element: <RouteWrapper Component={SGPAToPercentageGuide} /> },
            { path: ROUTES.LEARN.TIME_AND_WORK_MASTERY, element: <RouteWrapper Component={TimeWorkMastery} /> },
            { path: ROUTES.LEARN.JEE_NEET_RANK_ANALYSIS, element: <RouteWrapper Component={RankPercentileAnalysis} /> },
            { path: ROUTES.LEARN.SGB_VS_GOLD, element: <RouteWrapper Component={SGBvsGold} /> },
            { path: ROUTES.LEARN.INDEXATION_REMOVAL, element: <RouteWrapper Component={IndexationImpact} /> },
            { path: ROUTES.LEARN.SECTION_80C_DYING, element: <RouteWrapper Component={Section80CDying} /> },
            { path: ROUTES.LEARN.DIGITAL_RUPEE, element: <RouteWrapper Component={DigitalRupeeGuide} /> },
            { path: ROUTES.LEARN.SIDE_HUSTLE_TAX, element: <RouteWrapper Component={SideHustleTax} /> },
            { path: ROUTES.LEARN.WEDDING_BUDGET, element: <RouteWrapper Component={WeddingBudgetTips} /> },
            { path: ROUTES.LEARN.MF_OVERLAP_TRUTH, element: <RouteWrapper Component={MFOverlapTruth} /> },
            { path: ROUTES.LEARN.NOTICE_PERIOD_RIGHTS, element: <RouteWrapper Component={NoticePeriodRights} /> },
            { path: ROUTES.LEARN.PROFESSIONAL_INVOICING, element: <RouteWrapper Component={FreelanceInvoicingGuide} /> },
            { path: ROUTES.LEARN.EMERGENCY_FUND, element: <RouteWrapper Component={EmergencyFundBlueprint} /> },
            { path: ROUTES.LEARN.LOAN_BALANCE_TRANSFER, element: <RouteWrapper Component={LoanBalanceTransferGuide} /> },
            { path: ROUTES.LEARN.CHILD_EDUCATION_SAVINGS, element: <RouteWrapper Component={ChildEducationSavings} /> },

            // 404
            { path: '*', element: <RouteWrapper Component={NotFound} /> }
        ]
    }
];
