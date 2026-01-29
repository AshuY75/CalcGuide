
import { ROUTES } from './paths';
import MainLayout from '../layouts/MainLayout';
import Link from 'react-router-dom'; // Ensure clean imports

// --- COMPONENT IMPORTS (ALPHABETICAL & GROUPED) ---

// 1. Core & Wrappers
import RouteWrapper from '../components/RouteWrapper';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

// 2. Hubs
import InvestmentHub from '../pages/hubs/InvestmentHub';
import LoanHub from '../pages/hubs/LoanHub';
import SIPHub from '../pages/hubs/SIPHub';

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

// 6. Calculators: Loan
import EMICalculator from '../pages/EMICalculator';
import HomeLoanPrepaymentCalculator from '../pages/HomeLoanPrepaymentCalculator';
import LoanEligibility from '../pages/LoanEligibility';
import VillageInterest from '../pages/VillageInterestCalculator';

// 7. Calculators: Utility
import AgeCalculator from '../pages/AgeCalculator';
import DateDifferenceCalculator from '../pages/DateDifferenceCalculator';
import ExamEligibility from '../pages/ExamEligibility';
import PercentageCalculator from '../pages/PercentageCalculator';

// 8. Legal & Static
import About from '../pages/About';
import Feedback from '../pages/Feedback';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';

// 9. Learn / Blog Pages (Alphabetical)
import HomeLoanVsSIP from '../pages/learn/HomeLoanVsSIP';
import HowSIPReturnsCalculated from '../pages/learn/HowSIPWorks';
import LearnHome from '../pages/learn/LearnHome';
import VillageInterestExplainer from '../pages/learn/VillageInterestExplainer';
import WhySIPBeatsFD from '../pages/learn/WhySIPBeatsFD';

// 10. SEO Landing Pages
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

            // Loan
            { path: ROUTES.CALCULATORS.LOAN.EMI, element: <RouteWrapper Component={EMICalculator} /> },
            { path: ROUTES.CALCULATORS.LOAN.HOME_LOAN_PREPAYMENT, element: <RouteWrapper Component={HomeLoanPrepaymentCalculator} /> },
            { path: ROUTES.CALCULATORS.LOAN.ELIGIBILITY, element: <RouteWrapper Component={LoanEligibility} /> },
            { path: ROUTES.CALCULATORS.LOAN.VILLAGE_INTEREST, element: <RouteWrapper Component={VillageInterest} /> },

            // Investment
            { path: ROUTES.CALCULATORS.INVESTMENT.SIP, element: <RouteWrapper Component={SIPCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.SIP_CRORE, element: <RouteWrapper Component={SIP1CrCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.FD, element: <RouteWrapper Component={FDCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.RD, element: <RouteWrapper Component={RDCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.SIMPLE_INTEREST, element: <RouteWrapper Component={SimpleInterest} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.COMPOUND_INTEREST, element: <RouteWrapper Component={CompoundInterest} /> },

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

            // Legal
            { path: ROUTES.LEGAL.PRIVACY, element: <RouteWrapper Component={PrivacyPolicy} /> },
            { path: ROUTES.LEGAL.TERMS, element: <RouteWrapper Component={TermsOfService} /> },
            { path: ROUTES.LEGAL.FEEDBACK, element: <RouteWrapper Component={Feedback} /> },
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
            { path: ROUTES.LEARN.PREPAYMENT_VS_SIP, element: <RouteWrapper Component={HomeLoanVsSIP} /> },

            // 404
            { path: '*', element: <RouteWrapper Component={NotFound} /> }
        ]
    }
];
