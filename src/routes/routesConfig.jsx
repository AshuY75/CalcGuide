
import { ROUTES } from './paths';
import MainLayout from '../layouts/MainLayout';
import NotFound from '../pages/NotFound';
import RouteWrapper from '../components/RouteWrapper';

// Pages - Static Imports for SSG
import Home from '../pages/Home';

// Loan
import EMICalculator from '../pages/EMICalculator';
import HomeLoanPrepaymentCalculator from '../pages/HomeLoanPrepaymentCalculator';
import LoanEligibility from '../pages/LoanEligibility';
import VillageInterest from '../pages/VillageInterestCalculator';

// Hubs
import LoanHub from '../pages/hubs/LoanHub';
import InvestmentHub from '../pages/hubs/InvestmentHub';
import SIPHub from '../pages/hubs/SIPHub';

// Investment
import SIPCalculator from '../pages/SIPCalculator';
import SIP1CrCalculator from '../pages/SIP1CrCalculator';
import FDCalculator from '../pages/FDCalculator';
import RDCalculator from '../pages/RDCalculator';
import SimpleInterest from '../pages/SimpleInterestCalculator';
import CompoundInterest from '../pages/CompoundInterestCalculator';

// Gold
import GoldJewellery from '../pages/GoldJewelleryCalculator';
import OldGold from '../pages/OldGoldCalculator';

// Construction
import ConstructionCost from '../pages/ConstructionCostCalculator';
import BrickCalculator from '../pages/BrickCalculator';
import LandArea from '../pages/LandAreaConverter';

// Utility
import PercentageCalculator from '../pages/PercentageCalculator';
import DateDifferenceCalculator from '../pages/DateDifferenceCalculator';
import AgeCalculator from '../pages/AgeCalculator';
import ExamEligibility from '../pages/ExamEligibility';

// Legal
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';
import Feedback from '../pages/Feedback';
import About from '../pages/About';

// SEO Landing Pages
import SIP5000 from '../pages/seo/SIP5000';
import SIP1CrLanding from '../pages/seo/SIP1CrLanding';
import FDvsSIP from '../pages/seo/FDvsSIP';
import EMILanding from '../pages/seo/EMILanding';
import LandConverterLanding from '../pages/seo/LandConverterLanding';

// Learn / Articles
import LearnHome from '../pages/learn/LearnHome';
import HowSIPReturnsCalculated from '../pages/learn/HowSIPWorks';
import WhySIPBeatsFD from '../pages/learn/WhySIPBeatsFD';
import VillageInterestExplainer from '../pages/learn/VillageInterestExplainer';

export const routes = [
    {
        path: ROUTES.HOME,
        element: <MainLayout />,
        children: [
            { index: true, element: <RouteWrapper Component={Home} /> },

            /* Hubs */
            { path: ROUTES.HUBS.LOAN, element: <RouteWrapper Component={LoanHub} /> },
            { path: ROUTES.HUBS.INVESTMENT, element: <RouteWrapper Component={InvestmentHub} /> },
            { path: ROUTES.HUBS.SIP, element: <RouteWrapper Component={SIPHub} /> },

            /* Loans */
            { path: ROUTES.CALCULATORS.LOAN.EMI, element: <RouteWrapper Component={EMICalculator} /> },
            { path: ROUTES.CALCULATORS.LOAN.HOME_LOAN_PREPAYMENT, element: <RouteWrapper Component={HomeLoanPrepaymentCalculator} /> },
            { path: ROUTES.CALCULATORS.LOAN.ELIGIBILITY, element: <RouteWrapper Component={LoanEligibility} /> },
            { path: ROUTES.CALCULATORS.LOAN.VILLAGE_INTEREST, element: <RouteWrapper Component={VillageInterest} /> },

            /* Investments */
            { path: ROUTES.CALCULATORS.INVESTMENT.SIP, element: <RouteWrapper Component={SIPCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.SIP_CRORE, element: <RouteWrapper Component={SIP1CrCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.FD, element: <RouteWrapper Component={FDCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.RD, element: <RouteWrapper Component={RDCalculator} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.SIMPLE_INTEREST, element: <RouteWrapper Component={SimpleInterest} /> },
            { path: ROUTES.CALCULATORS.INVESTMENT.COMPOUND_INTEREST, element: <RouteWrapper Component={CompoundInterest} /> },

            /* Gold */
            { path: ROUTES.CALCULATORS.GOLD.JEWELLERY, element: <RouteWrapper Component={GoldJewellery} /> },
            { path: ROUTES.CALCULATORS.GOLD.OLD_GOLD, element: <RouteWrapper Component={OldGold} /> },

            /* Construction */
            { path: ROUTES.CALCULATORS.CONSTRUCTION.COST, element: <RouteWrapper Component={ConstructionCost} /> },
            { path: ROUTES.CALCULATORS.CONSTRUCTION.BRICK, element: <RouteWrapper Component={BrickCalculator} /> },
            { path: ROUTES.CALCULATORS.CONSTRUCTION.LAND_AREA, element: <RouteWrapper Component={LandArea} /> },

            /* Utility */
            { path: ROUTES.CALCULATORS.UTILITY.PERCENTAGE, element: <RouteWrapper Component={PercentageCalculator} /> },
            { path: ROUTES.CALCULATORS.UTILITY.DATE_DIFF, element: <RouteWrapper Component={DateDifferenceCalculator} /> },
            { path: ROUTES.CALCULATORS.UTILITY.AGE, element: <RouteWrapper Component={AgeCalculator} /> },
            { path: ROUTES.CALCULATORS.UTILITY.EXAM, element: <RouteWrapper Component={ExamEligibility} /> },

            /* Legal */
            { path: ROUTES.LEGAL.PRIVACY, element: <RouteWrapper Component={PrivacyPolicy} /> },
            { path: ROUTES.LEGAL.TERMS, element: <RouteWrapper Component={TermsOfService} /> },
            { path: ROUTES.LEGAL.FEEDBACK, element: <RouteWrapper Component={Feedback} /> },
            { path: ROUTES.LEGAL.ABOUT, element: <RouteWrapper Component={About} /> },

            /* SEO Landing Pages */
            { path: ROUTES.SEO.SIP_5000, element: <RouteWrapper Component={SIP5000} /> },
            { path: ROUTES.SEO.SIP_1CR_LANDING, element: <RouteWrapper Component={SIP1CrLanding} /> },
            { path: ROUTES.SEO.FD_VS_SIP, element: <RouteWrapper Component={FDvsSIP} /> },
            { path: ROUTES.SEO.EMI_HOME, element: <RouteWrapper Component={EMILanding} /> },
            { path: ROUTES.SEO.LAND_UP, element: <RouteWrapper Component={LandConverterLanding} /> },

            /* Learn / Articles */
            { path: ROUTES.LEARN.HOME, element: <RouteWrapper Component={LearnHome} /> },
            { path: ROUTES.LEARN.SIP_RETURNS_CALCULATION, element: <RouteWrapper Component={HowSIPReturnsCalculated} /> },
            { path: ROUTES.LEARN.SIP_VS_FD, element: <RouteWrapper Component={WhySIPBeatsFD} /> },
            { path: ROUTES.LEARN.VILLAGE_INT_EXPL, element: <RouteWrapper Component={VillageInterestExplainer} /> },

            /* 404 */
            { path: '*', element: <RouteWrapper Component={NotFound} /> }
        ]
    }
];
