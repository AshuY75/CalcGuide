
import { ROUTES } from './paths';
import MainLayout from '../layouts/MainLayout';

// --- COMPONENT IMPORTS (ALPHABETICAL & GROUPED) ---

// 1. Core & Wrappers
import RouteWrapper from '../components/RouteWrapper';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import BharatCalculators from '../pages/BharatCalculators';

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
import RetirementCalculator from '../pages/RetirementCalculator';
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
import GSTCalculator from '../pages/GSTCalculator';
import HRACalculator from '../pages/HRACalculator';
import IncomeTaxCalculator from '../pages/IncomeTaxCalculator';
import ProfessionalTaxCalculator from '../pages/ProfessionalTaxCalculator';
import PropertyTaxCalculator from '../pages/PropertyTaxCalculator';
import SalaryHikeCalculator from '../pages/SalaryHikeCalculator';
import STCGTaxCalculator from '../pages/STCGTaxCalculator';
import TDSCalculator from '../pages/TDSCalculator';
import TaxHarvestingCalculator from '../pages/TaxHarvestingCalculator';
import CTCInHandCalculator from '../pages/CTCInHandCalculator';

// 12. Batch 1 New Calculators
import AdvanceTaxCalculator from '../pages/AdvanceTaxCalculator';
import BMICalculator from '../pages/BMICalculator';
import BodyFatCalculator from '../pages/BodyFatCalculator';
import CalorieCalculator from '../pages/CalorieCalculator';
import Form16Estimator from '../pages/Form16Estimator';
import GiftTaxCalculator from '../pages/GiftTaxCalculator';
import HeartRateCalculator from '../pages/HeartRateCalculator';
import IdealWeightCalculator from '../pages/IdealWeightCalculator';
import PregnancyCalculator from '../pages/PregnancyCalculator';
import RentReceiptGenerator from '../pages/RentReceiptGenerator';
import StepUpSIPCalculator from '../pages/StepUpSIPCalculator';
import EducationLoanCalculator from '../pages/EducationLoanCalculator';
import FDvsSIPComparisonPage from '../pages/FDvsSIPComparison';

// 13. Batch 2: Insurance
import InsuranceHub from '../pages/hubs/InsuranceHub';
import HLVCalculator from '../pages/HLVCalculator';
import TermInsuranceCalculator from '../pages/TermInsuranceCalculator';
import HealthInsuranceEstimator from '../pages/HealthInsuranceEstimator';
import CarInsuranceCalculator from '../pages/CarInsuranceCalculator';
import CriticalIllnessCalculator from '../pages/CriticalIllnessCalculator';

// 14. Batch 4: Advanced Loan Suite
import BusinessLoanCalculator from '../pages/BusinessLoanCalculator';
import CarLoanEMICalculator from '../pages/CarLoanEMICalculator';
import DebtConsolidationCalculator from '../pages/DebtConsolidationCalculator';
import KCCCalculator from '../pages/KCCCalculator';
import LAPCalculator from '../pages/LAPCalculator';
import LoanBalanceTransfer from '../pages/LoanBalanceTransfer';
import PersonalLoanEMI from '../pages/PersonalLoanEMI';
import TwoWheelerLoan from '../pages/TwoWheelerLoan';

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
import PropertyAppreciationCalculator from '../pages/PropertyAppreciationCalculator';
import RentalYieldCalculator from '../pages/RentalYieldCalculator';
import SGPACalculator from '../pages/SGPACalculator';
import StampDutyCalculator from '../pages/StampDutyCalculator';
import TimeWorkCalculator from '../pages/TimeWorkCalculator';
import WeddingPlanner from '../pages/WeddingPlanner';

// 9. Calculators: Business
import GSTCompositionCalculator from '../pages/GSTCompositionCalculator';
import MSMEPMEGPCalculator from '../pages/MSMEPMEGPCalculator';
import ProfessionalRateCalculator from '../pages/ProfessionalRateCalculator';

// 10. Legal & Static
import About from '../pages/About';
import Contact from '../pages/Contact';
import Feedback from '../pages/Feedback';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';

// 10. Learn / Blog Pages (Alphabetical)
import AssetTaxComparison from '../pages/learn/AssetTaxComparison';
import BMIForIndians from '../pages/learn/BMIForIndians';
import BalanceTransferGuide from '../pages/learn/BalanceTransferGuide';
import Build1Crore from '../pages/learn/Build1Crore';
import CAGRLies from '../pages/learn/CAGRLies';
import CIBILScoreBlueprint from '../pages/learn/CIBILScoreBlueprint';
import CaloriesForIndians from '../pages/learn/CaloriesForIndians';
import CarInsuranceGuide from '../pages/learn/CarInsuranceGuide';
import CarLoanTrapGuide from '../pages/learn/CarLoanTrapGuide';
import ChildEducationSavings from '../pages/learn/ChildEducationSavings';
import CommercialVsResidentialROI from '../pages/learn/CommercialVsResidentialROI';
import CreditCardSurvivalGuide from '../pages/learn/CreditCardSurvivalGuide';
import CriticalIllnessVsMedical from '../pages/learn/CriticalIllnessVsMedical';
import DiabetesHbA1cGuide from '../pages/learn/DiabetesHbA1cGuide';
import DigitalRupeeGuide from '../pages/learn/DigitalRupeeGuide';
import DividendVsGrowthMF from '../pages/learn/DividendVsGrowthMF';
import ELSSvsPPF from '../pages/learn/ELSSvsPPF';
import EPFExplainer from '../pages/learn/EPFExplainer';
import EVBreakEven from '../pages/learn/EVBreakEven';
import EducationLoanMastery from '../pages/learn/EducationLoanMastery';
import EmergencyFundBlueprint from '../pages/learn/EmergencyFundBlueprint';
import FIBlueprintFinale from '../pages/learn/FIBlueprintFinale';
import FlexiVsMultiCap from '../pages/learn/FlexiVsMultiCap';
import FractionalRealEstateGuide from '../pages/learn/FractionalRealEstateGuide';
import FreelanceInvoicingGuide from '../pages/learn/FreelanceInvoicingGuide';
import FreelancePricingGuide from '../pages/learn/FreelancePricingGuide';
import FreelanceTax44ADA from '../pages/learn/FreelanceTax44ADA';
import GiftTaxRules from '../pages/learn/GiftTaxRules';
import GoldLoanVsPersonalDuel from '../pages/learn/GoldLoanVsPersonalDuel';
import GratuityExplainer from '../pages/learn/GratuityExplainer';
import HRAExemptionGuide from '../pages/learn/HRAExemptionGuide';
import HRAMath from '../pages/learn/HRAMath';
import HealthInsuranceParents from '../pages/learn/HealthInsuranceParents';
import HiddenHomeCosts from '../pages/learn/HiddenHomeCosts';
import HiddenPlatformFees from '../pages/learn/HiddenPlatformFees';
import HomeLoanEligibilityMath from '../pages/learn/HomeLoanEligibilityMath';
import HomeLoanRule122025 from '../pages/learn/HomeLoanRule122025';
import HomeLoanVsSIP from '../pages/learn/HomeLoanVsSIP';
import HowMuchSIPReturns from '../pages/learn/HowMuchSIPReturns';
import HowSIPWorks from '../pages/learn/HowSIPWorks';
import ImportDutyGuide from '../pages/learn/ImportDutyGuide';
import IndexVsActive from '../pages/learn/IndexVsActive';
import IndexationImpact from '../pages/learn/IndexationImpact';
import IndianNutritionDeficiency from '../pages/learn/IndianNutritionDeficiency';
import InvestWith500 from '../pages/learn/InvestWith500';
import LTCGTaxHarvesting from '../pages/learn/LTCGTaxHarvesting';
import LearnHome from '../pages/learn/LearnHome';
import LoanAgainstSecuritiesLAS from '../pages/learn/LoanAgainstSecuritiesLAS';
import MFOverlapTruth from '../pages/learn/MFOverlapTruth';
import MutualFundNAVGuide from '../pages/learn/MutualFundNAVGuide';
import NewVsOldTax from '../pages/learn/NewVsOldTax';
import NoticePeriodRights from '../pages/learn/NoticePeriodRights';
import OverweightVsObese from '../pages/learn/OverweightVsObese';
import PMSuryaGharROI from '../pages/learn/PMSuryaGharROI';
import PersonalLoanDebtTrap from '../pages/learn/PersonalLoanDebtTrap';
import PostOfficeVsBankFD from '../pages/learn/PostOfficeVsBankFD';
import PrepaymentVsSIPBattle from '../pages/learn/PrepaymentVsSIPBattle';
import PropertyAppreciationReality from '../pages/learn/PropertyAppreciationReality';
import PropertyTaxGuide from '../pages/learn/PropertyTaxGuide';
import REITsVsPhysicalProperty from '../pages/learn/REITsVsPhysicalProperty';
import RankPercentileAnalysis from '../pages/learn/RankPercentileAnalysis';
import RentVsBuyGuide from '../pages/learn/RentVsBuyGuide';
import RewardDevaluation from '../pages/learn/RewardDevaluation';
import SGBvsGold from '../pages/learn/SGBvsGold';
import SGPACGPAGuide from '../pages/learn/SGPACGPAGuide';
import SGPAToPercentageGuide from '../pages/learn/SGPAToPercentageGuide';
import SIPvsPPF from '../pages/learn/SIPvsPPF';
import SWPvsFD from '../pages/learn/SWPvsFD';
import SalarySlipGuide from '../pages/learn/SalarySlipGuide';
import Section80CDying from '../pages/learn/Section80CDying';
import Section80DGuide from '../pages/learn/Section80DGuide';
import SideHustleTax from '../pages/learn/SideHustleTax';
import SmallcaseVsMutualFunds from '../pages/learn/SmallcaseVsMutualFunds';
import StepUpSIP from '../pages/learn/StepUpSIP';
import SummerBillSpike from '../pages/learn/SummerBillSpike';
import TaxHarvestingGuide from '../pages/learn/TaxHarvestingGuide';
import TaxOnInterestGuide from '../pages/learn/TaxOnInterestGuide';
import TermInsuranceVsULIP from '../pages/learn/TermInsuranceVsULIP';
import TimeWorkMastery from '../pages/learn/TimeWorkMastery';
import VillageInterestMath from '../pages/learn/VillageInterestMath';
import WalkingForWeightLoss from '../pages/learn/WalkingForWeightLoss';
import WeddingBudgetTips from '../pages/learn/WeddingBudgetTips';
import WhySIPBeatsFD from '../pages/learn/WhySIPBeatsFD';
import YouTubeRPMMath from '../pages/learn/YouTubeRPMMath';

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
            { path: ROUTES.BHARAT, element: <RouteWrapper Component={BharatCalculators} /> },
            { path: ROUTES.HUBS.LOAN, element: <RouteWrapper Component={LoanHub} /> },
            { path: ROUTES.HUBS.INVESTMENT, element: <RouteWrapper Component={InvestmentHub} /> },
            { path: ROUTES.HUBS.SIP, element: <RouteWrapper Component={SIPHub} /> },
            { path: ROUTES.CALCULATORS.TAX.INCOME_TAX, element: <RouteWrapper Component={IncomeTaxCalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.PROPERTY_TAX, element: <RouteWrapper Component={PropertyTaxCalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.LTCG_EQUITY, element: <RouteWrapper Component={LTCGTaxCalculator} /> },
            { path: ROUTES.HUBS.TAX, element: <RouteWrapper Component={TaxHub} /> },
            { path: ROUTES.HUBS.STUDENT, element: <RouteWrapper Component={StudentHub} /> },
            { path: ROUTES.HUBS.INSURANCE, element: <RouteWrapper Component={InsuranceHub} /> },

            // Loan
            { path: ROUTES.CALCULATORS.LOAN.EMI, element: <RouteWrapper Component={EMICalculator} /> },
            { path: ROUTES.CALCULATORS.LOAN.HOME_LOAN_PREPAYMENT, element: <RouteWrapper Component={HomeLoanPrepaymentCalculator} /> },
            { path: ROUTES.CALCULATORS.LOAN.ELIGIBILITY, element: <RouteWrapper Component={LoanEligibility} /> },
            { path: ROUTES.CALCULATORS.LOAN.VILLAGE_INTEREST, element: <RouteWrapper Component={VillageInterest} /> },
            { path: ROUTES.CALCULATORS.LOAN.AMORTISATION_SCHEDULE, element: <RouteWrapper Component={AmortisationScheduleCalculator} /> },
            { path: ROUTES.CALCULATORS.LOAN.NOTICE_BUYOUT, element: <RouteWrapper Component={NoticeBuyoutCalculator} /> },
            { path: ROUTES.CALCULATORS.LOAN.BALANCE_TRANSFER, element: <RouteWrapper Component={LoanBalanceTransfer} /> },
            { path: ROUTES.CALCULATORS.LOAN.BUSINESS, element: <RouteWrapper Component={BusinessLoanCalculator} /> },
            { path: ROUTES.CALCULATORS.LOAN.CAR, element: <RouteWrapper Component={CarLoanEMICalculator} /> },
            { path: ROUTES.CALCULATORS.LOAN.DEBT_CONSOLIDATION, element: <RouteWrapper Component={DebtConsolidationCalculator} /> },
            { path: ROUTES.CALCULATORS.LOAN.EDUCATION, element: <RouteWrapper Component={EducationLoanCalculator} /> },
            { path: ROUTES.CALCULATORS.LOAN.KCC, element: <RouteWrapper Component={KCCCalculator} /> },
            { path: ROUTES.CALCULATORS.LOAN.LAP, element: <RouteWrapper Component={LAPCalculator} /> },
            { path: ROUTES.CALCULATORS.LOAN.PERSONAL, element: <RouteWrapper Component={PersonalLoanEMI} /> },
            { path: ROUTES.CALCULATORS.LOAN.TWO_WHEELER, element: <RouteWrapper Component={TwoWheelerLoan} /> },

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
            { path: ROUTES.CALCULATORS.INVESTMENT.STEP_UP_SIP, element: <RouteWrapper Component={StepUpSIPCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.FD_VS_SIP, element: <RouteWrapper Component={FDvsSIPComparisonPage} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.RETIREMENT, element: <RouteWrapper Component={RetirementCalculator} /> },

            // Tax
            { path: ROUTES.CALCULATORS.TAX.INCOME_TAX, element: <RouteWrapper Component={IncomeTaxCalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.HRA, element: <RouteWrapper Component={HRACalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.GRATUITY, element: <RouteWrapper Component={GratuityCalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.EPF, element: <RouteWrapper Component={EPFCalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.GST, element: <RouteWrapper Component={GSTCalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.TDS, element: <RouteWrapper Component={TDSCalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.PROFESSIONAL_TAX, element: <RouteWrapper Component={ProfessionalTaxCalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.CTC_TO_INHAND, element: <RouteWrapper Component={CTCInHandCalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.HIKE, element: <RouteWrapper Component={SalaryHikeCalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.RENT_RECEIPT, element: <RouteWrapper Component={RentReceiptGenerator} /> },
            { path: ROUTES.CALCULATORS.TAX.FORM16, element: <RouteWrapper Component={Form16Estimator} /> },
            { path: ROUTES.CALCULATORS.TAX.ADVANCE_TAX, element: <RouteWrapper Component={AdvanceTaxCalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.GIFT, element: <RouteWrapper Component={GiftTaxCalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.STCG, element: <RouteWrapper Component={STCGTaxCalculator} /> },
            { path: ROUTES.CALCULATORS.TAX.LTCG_HARVESTING, element: <RouteWrapper Component={TaxHarvestingCalculator} /> },

            // Health
            { path: ROUTES.CALCULATORS.HEALTH.BMI, element: <RouteWrapper Component={BMICalculator} /> },
            { path: ROUTES.CALCULATORS.HEALTH.CALORIE, element: <RouteWrapper Component={CalorieCalculator} /> },
            { path: ROUTES.CALCULATORS.HEALTH.IDEAL_WEIGHT, element: <RouteWrapper Component={IdealWeightCalculator} /> },
            { path: ROUTES.CALCULATORS.HEALTH.PREGNANCY, element: <RouteWrapper Component={PregnancyCalculator} /> },
            { path: ROUTES.CALCULATORS.HEALTH.HEART_RATE, element: <RouteWrapper Component={HeartRateCalculator} /> },
            { path: ROUTES.CALCULATORS.HEALTH.BODY_FAT, element: <RouteWrapper Component={BodyFatCalculator} /> },

            // Insurance
            { path: ROUTES.CALCULATORS.INSURANCE.HLV, element: <RouteWrapper Component={HLVCalculator} /> },
            { path: ROUTES.CALCULATORS.INSURANCE.TERM, element: <RouteWrapper Component={TermInsuranceCalculator} /> },
            { path: ROUTES.CALCULATORS.INSURANCE.HEALTH, element: <RouteWrapper Component={HealthInsuranceEstimator} /> },
            { path: ROUTES.CALCULATORS.INSURANCE.CAR, element: <RouteWrapper Component={CarInsuranceCalculator} /> },
            { path: ROUTES.CALCULATORS.INSURANCE.CRITICAL_ILLNESS, element: <RouteWrapper Component={CriticalIllnessCalculator} /> },

            // Gold
            { path: ROUTES.CALCULATORS.GOLD.JEWELLERY, element: <RouteWrapper Component={GoldJewellery} /> },
            { path: ROUTES.CALCULATORS.GOLD.OLD_GOLD, element: <RouteWrapper Component={OldGold} /> },

            // Construction
            { path: ROUTES.CALCULATORS.CONSTRUCTION.COST, element: <RouteWrapper Component={ConstructionCost} /> },
            { path: ROUTES.CALCULATORS.CONSTRUCTION.BRICK, element: <RouteWrapper Component={BrickCalculator} /> },
            { path: ROUTES.CALCULATORS.CONSTRUCTION.LAND_AREA, element: <RouteWrapper Component={LandArea} /> },
            { path: ROUTES.CALCULATORS.REAL_ESTATE.APPRECIATION, element: <RouteWrapper Component={PropertyAppreciationCalculator} /> },
            { path: ROUTES.CALCULATORS.REAL_ESTATE.STAMP_DUTY, element: <RouteWrapper Component={StampDutyCalculator} /> },

            // Utility
            { path: ROUTES.CALCULATORS.UTILITY.PERCENTAGE, element: <RouteWrapper Component={PercentageCalculator} /> },
            { path: ROUTES.CALCULATORS.UTILITY.DATE_DIFF, element: <RouteWrapper Component={DateDifferenceCalculator} /> },
            { path: ROUTES.CALCULATORS.UTILITY.AGE, element: <RouteWrapper Component={AgeCalculator} /> },
            { path: ROUTES.CALCULATORS.UTILITY.EXAM, element: <RouteWrapper Component={ExamEligibility} /> },
            { path: ROUTES.CALCULATORS.UTILITY.ELECTRICITY_BILL, element: <RouteWrapper Component={ElectricityBillCalculator} /> },
            { path: ROUTES.CALCULATORS.UTILITY.SOLAR_ROI, element: <RouteWrapper Component={SolarROICalculator} /> },
            { path: ROUTES.CALCULATORS.UTILITY.EV_VS_PETROL, element: <RouteWrapper Component={EVvsPetrolTCO} /> },
            { path: ROUTES.CALCULATORS.UTILITY.CREDIT_CARD_REWARDS, element: <RouteWrapper Component={CreditCardRewards} /> },
            { path: ROUTES.CALCULATORS.STUDENT.SGPA, element: <RouteWrapper Component={SGPACalculator} /> },
            { path: ROUTES.CALCULATORS.STUDENT.CGPA_PERCENTAGE, element: <RouteWrapper Component={CGPAPercentageCalculator} /> },
            { path: ROUTES.CALCULATORS.STUDENT.TIME_WORK, element: <RouteWrapper Component={TimeWorkCalculator} /> },
            { path: ROUTES.CALCULATORS.STUDENT.RANK_PERCENTILE, element: <RouteWrapper Component={RankPercentileCalculator} /> },
            { path: ROUTES.CALCULATORS.REAL_ESTATE.RENTAL_YIELD, element: <RouteWrapper Component={RentalYieldCalculator} /> },
            { path: ROUTES.CALCULATORS.UTILITY.WEDDING_PLANNER, element: <RouteWrapper Component={WeddingPlanner} /> },
            { path: ROUTES.CALCULATORS.BUSINESS.GST_COMPOSITION, element: <RouteWrapper Component={GSTCompositionCalculator} /> },
            { path: ROUTES.CALCULATORS.BUSINESS.MSME_PMEGP, element: <RouteWrapper Component={MSMEPMEGPCalculator} /> },
            { path: ROUTES.CALCULATORS.BUSINESS.PROFESSIONAL_RATE, element: <RouteWrapper Component={ProfessionalRateCalculator} /> },
            { path: ROUTES.CALCULATORS.BUSINESS.YOUTUBE_EARNINGS, element: <RouteWrapper Component={YouTubeEarningsCalculator} /> },
            { path: ROUTES.CALCULATORS.BUSINESS.PLATFORM_FEE, element: <RouteWrapper Component={PlatformFeeCalculator} /> },
            { path: ROUTES.CALCULATORS.BUSINESS.IMPORT_DUTY, element: <RouteWrapper Component={ImportDutyCalculator} /> },
            { path: ROUTES.CALCULATORS.BUSINESS.FREELANCE_INVOICE, element: <RouteWrapper Component={FreelanceInvoiceGenerator} /> },

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
            // Learn / Articles
            { path: ROUTES.LEARN.HOME, element: <RouteWrapper Component={LearnHome} /> },
            { path: ROUTES.LEARN.BMI_INDIAN_CUTOFF, element: <RouteWrapper Component={BMIForIndians} /> },
            { path: ROUTES.LEARN.SIP_5000_MONTH_RETURNS, element: <RouteWrapper Component={HowMuchSIPReturns} /> },
            { path: ROUTES.LEARN.INDEX_VS_ACTIVE_FUNDS, element: <RouteWrapper Component={IndexVsActive} /> },
            { path: ROUTES.LEARN.SIP_RETURNS_CALCULATION, element: <RouteWrapper Component={HowSIPWorks} /> },
            { path: ROUTES.LEARN.SIP_VS_FD, element: <RouteWrapper Component={WhySIPBeatsFD} /> },
            { path: ROUTES.LEARN.WHY_EARLY_PREPAYMENT, element: <RouteWrapper Component={HomeLoanRule122025} /> },
            { path: ROUTES.LEARN.BUILD_1_CRORE, element: <RouteWrapper Component={Build1Crore} /> },
            { path: ROUTES.LEARN.CAGR_LIES, element: <RouteWrapper Component={CAGRLies} /> },
            { path: ROUTES.LEARN.LTCG_HARVESTING, element: <RouteWrapper Component={LTCGTaxHarvesting} /> },
            { path: ROUTES.LEARN.STEP_UP_SIP, element: <RouteWrapper Component={StepUpSIP} /> },
            { path: ROUTES.LEARN.SWP_VS_FD, element: <RouteWrapper Component={SWPvsFD} /> },
            { path: ROUTES.LEARN.OLD_VS_NEW_TAX, element: <RouteWrapper Component={NewVsOldTax} /> },
            { path: ROUTES.LEARN.HRA_EXEMPTION, element: <RouteWrapper Component={HRAMath} /> },
            { path: ROUTES.LEARN.GRATUITY_EXPLAINER, element: <RouteWrapper Component={GratuityExplainer} /> },
            { path: ROUTES.LEARN.EPF_EXPLAINER, element: <RouteWrapper Component={EPFExplainer} /> },
            { path: ROUTES.LEARN.SUMMER_BILL_SPIKE, element: <RouteWrapper Component={SummerBillSpike} /> },
            { path: ROUTES.LEARN.PM_SURYA_GHAR_ROI, element: <RouteWrapper Component={PMSuryaGharROI} /> },
            { path: ROUTES.LEARN.EV_VS_PETROL_TRUTH, element: <RouteWrapper Component={EVBreakEven} /> },
            { path: ROUTES.LEARN.CREDIT_CARD_DEVALUATION, element: <RouteWrapper Component={RewardDevaluation} /> },
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
            { path: ROUTES.LEARN.LOAN_BALANCE_TRANSFER, element: <RouteWrapper Component={BalanceTransferGuide} /> },
            { path: ROUTES.LEARN.CHILD_EDUCATION_SAVINGS, element: <RouteWrapper Component={ChildEducationSavings} /> },
            { path: ROUTES.LEARN.SALARY_SLIP_GUIDE, element: <RouteWrapper Component={SalarySlipGuide} /> },
            { path: ROUTES.LEARN.CALORIES_FOR_INDIANS, element: <RouteWrapper Component={CaloriesForIndians} /> },
            { path: ROUTES.LEARN.DIABETES_HBA1C_GUIDE, element: <RouteWrapper Component={DiabetesHbA1cGuide} /> },
            { path: ROUTES.LEARN.NUTRITION_DEFICIENCY, element: <RouteWrapper Component={IndianNutritionDeficiency} /> },
            { path: ROUTES.LEARN.OVERWEIGHT_VS_OBESE, element: <RouteWrapper Component={OverweightVsObese} /> },
            { path: ROUTES.LEARN.WALKING_FOR_WEIGHT_LOSS, element: <RouteWrapper Component={WalkingForWeightLoss} /> },
            { path: ROUTES.LEARN.SIP_VS_PPF, element: <RouteWrapper Component={SIPvsPPF} /> },
            { path: ROUTES.LEARN.FLEXI_VS_MULTI_CAP, element: <RouteWrapper Component={FlexiVsMultiCap} /> },
            { path: ROUTES.LEARN.MUTUAL_FUND_NAV_GUIDE, element: <RouteWrapper Component={MutualFundNAVGuide} /> },
            { path: ROUTES.LEARN.ELSS_VS_PPF, element: <RouteWrapper Component={ELSSvsPPF} /> },
            { path: ROUTES.LEARN.INVEST_WITH_500, element: <RouteWrapper Component={InvestWith500} /> },
            { path: ROUTES.LEARN.DIVIDEND_VS_GROWTH_MF, element: <RouteWrapper Component={DividendVsGrowthMF} /> },
            { path: ROUTES.LEARN.POST_OFFICE_VS_BANK_FD, element: <RouteWrapper Component={PostOfficeVsBankFD} /> },
            { path: ROUTES.LEARN.SMALLCASE_VS_MUTUAL_FUNDS, element: <RouteWrapper Component={SmallcaseVsMutualFunds} /> },
            { path: ROUTES.LEARN.CHILD_EDUCATION_PLAN, element: <RouteWrapper Component={ChildEducationSavings} /> },
            { path: ROUTES.LEARN.TAX_HARVESTING_GUIDE, element: <RouteWrapper Component={TaxHarvestingGuide} /> },
            { path: ROUTES.LEARN.FREELANCE_TAX_44ADA, element: <RouteWrapper Component={FreelanceTax44ADA} /> },
            { path: ROUTES.LEARN.OLD_VS_NEW_TAX_VERDICT, element: <RouteWrapper Component={NewVsOldTax} /> },
            { path: ROUTES.LEARN.GIFT_TAX_RULES, element: <RouteWrapper Component={GiftTaxRules} /> },
            { path: ROUTES.LEARN.HRA_EXEMPTION_GUIDE, element: <RouteWrapper Component={HRAExemptionGuide} /> },
            { path: ROUTES.LEARN.TAX_ON_INTEREST_GUIDE, element: <RouteWrapper Component={TaxOnInterestGuide} /> },
            { path: ROUTES.LEARN.SECTION_80D_GUIDE, element: <RouteWrapper Component={Section80DGuide} /> },
            { path: ROUTES.LEARN.PROPERTY_CAPITAL_GAINS, element: <RouteWrapper Component={PropertyTaxGuide} /> },
            { path: ROUTES.LEARN.SHARES_VS_REAL_ESTATE_TAX, element: <RouteWrapper Component={AssetTaxComparison} /> },
            { path: ROUTES.LEARN.PREPAYMENT_VS_SIP_BATTLE, element: <RouteWrapper Component={PrepaymentVsSIPBattle} /> },
            { path: ROUTES.LEARN.RULE_12_20_25_HOME_LOAN, element: <RouteWrapper Component={HomeLoanRule122025} /> },
            { path: ROUTES.LEARN.PERSONAL_LOAN_DEBT_TRAP, element: <RouteWrapper Component={PersonalLoanDebtTrap} /> },
            { path: ROUTES.LEARN.RENT_VS_BUY_INDIA_2025, element: <RouteWrapper Component={RentVsBuyGuide} /> },
            { path: ROUTES.LEARN.HIDDEN_COSTS_HOME_BUYING, element: <RouteWrapper Component={HiddenHomeCosts} /> },
            { path: ROUTES.LEARN.HOME_LOAN_ELIGIBILITY_MATH, element: <RouteWrapper Component={HomeLoanEligibilityMath} /> },
            { path: ROUTES.LEARN.CIBIL_SCORE_BLUEPRINT, element: <RouteWrapper Component={CIBILScoreBlueprint} /> },
            { path: ROUTES.LEARN.PROPERTY_APPRECIATION_REALITY, element: <RouteWrapper Component={PropertyAppreciationReality} /> },
            { path: ROUTES.LEARN.VILLAGE_INTEREST_MATH, element: <RouteWrapper Component={VillageInterestMath} /> },
            { path: ROUTES.LEARN.GOLD_LOAN_VS_PERSONAL_DUEL, element: <RouteWrapper Component={GoldLoanVsPersonalDuel} /> },
            { path: ROUTES.LEARN.EDUCATION_LOAN_MASTERY, element: <RouteWrapper Component={EducationLoanMastery} /> },
            { path: ROUTES.LEARN.CAR_LOAN_TRAP, element: <RouteWrapper Component={CarLoanTrapGuide} /> },
            { path: ROUTES.LEARN.CREDIT_CARD_DEBT_SURVIVAL, element: <RouteWrapper Component={CreditCardSurvivalGuide} /> },
            { path: ROUTES.LEARN.COMMERCIAL_VS_RESIDENTIAL_ROI, element: <RouteWrapper Component={CommercialVsResidentialROI} /> },
            { path: ROUTES.LEARN.FRACTIONAL_RE_101, element: <RouteWrapper Component={FractionalRealEstateGuide} /> },
            { path: ROUTES.LEARN.REITS_VS_PHYSICAL, element: <RouteWrapper Component={REITsVsPhysicalProperty} /> },
            { path: ROUTES.LEARN.LAS_GUIDE, element: <RouteWrapper Component={LoanAgainstSecuritiesLAS} /> },
            { path: ROUTES.LEARN.TERM_VS_ULIP_DUEL, element: <RouteWrapper Component={TermInsuranceVsULIP} /> },
            { path: ROUTES.LEARN.HEALTH_INSURANCE_PARENTS, element: <RouteWrapper Component={HealthInsuranceParents} /> },
            { path: ROUTES.LEARN.CRITICAL_ILLNESS_VS_MEDICAL, element: <RouteWrapper Component={CriticalIllnessVsMedical} /> },
            { path: ROUTES.LEARN.CAR_INSURANCE_MASTERY, element: <RouteWrapper Component={CarInsuranceGuide} /> },
            { path: ROUTES.LEARN.FI_BLUEPRINT_FINALE, element: <RouteWrapper Component={FIBlueprintFinale} /> },

            // 404
            { path: '*', element: <RouteWrapper Component={NotFound} /> }
        ]
    }
];
