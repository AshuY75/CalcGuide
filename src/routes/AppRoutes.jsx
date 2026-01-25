import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './paths';
import MainLayout from '../layouts/MainLayout';
import NotFound from '../pages/NotFound';
import GlobalErrorBoundary from '../components/GlobalErrorBoundary';

// Lazy Load Pages
const Home = lazy(() => import('../pages/Home'));

// Loan
const EMICalculator = lazy(() => import('../pages/EMICalculator'));
const LoanEligibility = lazy(() => import('../pages/LoanEligibility'));
const VillageInterest = lazy(() => import('../pages/VillageInterestCalculator'));

// Hubs
const LoanHub = lazy(() => import('../pages/hubs/LoanHub'));
const InvestmentHub = lazy(() => import('../pages/hubs/InvestmentHub'));
const SIPHub = lazy(() => import('../pages/hubs/SIPHub'));

// Investment
const SIPCalculator = lazy(() => import('../pages/SIPCalculator'));
const SIP1CrCalculator = lazy(() => import('../pages/SIP1CrCalculator'));
const FDCalculator = lazy(() => import('../pages/FDCalculator'));
const RDCalculator = lazy(() => import('../pages/RDCalculator'));
const SimpleInterest = lazy(() => import('../pages/SimpleInterestCalculator'));
const CompoundInterest = lazy(() => import('../pages/CompoundInterestCalculator'));

// Gold
const GoldJewellery = lazy(() => import('../pages/GoldJewelleryCalculator'));
const OldGold = lazy(() => import('../pages/OldGoldCalculator'));

// Construction
const ConstructionCost = lazy(() => import('../pages/ConstructionCostCalculator'));
const BrickCalculator = lazy(() => import('../pages/BrickCalculator'));
const LandArea = lazy(() => import('../pages/LandAreaConverter'));

// Utility
const PercentageCalculator = lazy(() => import('../pages/PercentageCalculator'));
const DateDifferenceCalculator = lazy(() => import('../pages/DateDifferenceCalculator'));
const AgeCalculator = lazy(() => import('../pages/AgeCalculator'));
const ExamEligibility = lazy(() => import('../pages/ExamEligibility'));

// Legal
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('../pages/TermsOfService'));
const Feedback = lazy(() => import('../pages/Feedback'));

// SEO Landing Pages
const SIP5000 = lazy(() => import('../pages/seo/SIP5000'));
const SIP1CrLanding = lazy(() => import('../pages/seo/SIP1CrLanding'));
const FDvsSIP = lazy(() => import('../pages/seo/FDvsSIP'));
const EMILanding = lazy(() => import('../pages/seo/EMILanding'));
const LandConverterLanding = lazy(() => import('../pages/seo/LandConverterLanding'));

// Learn / Articles
const LearnHome = lazy(() => import('../pages/learn/LearnHome'));
const HowSIPReturnsCalculated = lazy(() => import('../pages/learn/HowSIPWorks'));
const WhySIPBeatsFD = lazy(() => import('../pages/learn/WhySIPBeatsFD'));
const VillageInterestExplainer = lazy(() => import('../pages/learn/VillageInterestExplainer'));

// Standard Loading Fallback
const PageLoader = () => (
    <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
);

// High-Reliability Route Wrapper
// Guarantees: Error Boundary + Suspense + Min content height
const RouteWrapper = ({ Component }) => (
    <GlobalErrorBoundary>
        <Suspense fallback={<PageLoader />}>
            <Component />
        </Suspense>
    </GlobalErrorBoundary>
);

export default function AppRoutes() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path={ROUTES.HOME} element={<MainLayout />}>
                    <Route index element={<RouteWrapper Component={Home} />} />

                    {/* Hubs */}
                    <Route path={ROUTES.HUBS.LOAN} element={<RouteWrapper Component={LoanHub} />} />
                    <Route path={ROUTES.HUBS.INVESTMENT} element={<RouteWrapper Component={InvestmentHub} />} />
                    <Route path={ROUTES.HUBS.SIP} element={<RouteWrapper Component={SIPHub} />} />

                    {/* Loans */}
                    <Route path={ROUTES.CALCULATORS.LOAN.EMI} element={<RouteWrapper Component={EMICalculator} />} />
                    <Route path={ROUTES.CALCULATORS.LOAN.ELIGIBILITY} element={<RouteWrapper Component={LoanEligibility} />} />
                    <Route path={ROUTES.CALCULATORS.LOAN.VILLAGE_INTEREST} element={<RouteWrapper Component={VillageInterest} />} />

                    {/* Investments */}
                    <Route path={ROUTES.CALCULATORS.INVESTMENT.SIP} element={<RouteWrapper Component={SIPCalculator} />} />
                    <Route path={ROUTES.CALCULATORS.INVESTMENT.SIP_CRORE} element={<RouteWrapper Component={SIP1CrCalculator} />} />
                    <Route path={ROUTES.CALCULATORS.INVESTMENT.FD} element={<RouteWrapper Component={FDCalculator} />} />
                    <Route path={ROUTES.CALCULATORS.INVESTMENT.RD} element={<RouteWrapper Component={RDCalculator} />} />
                    <Route path={ROUTES.CALCULATORS.INVESTMENT.SIMPLE_INTEREST} element={<RouteWrapper Component={SimpleInterest} />} />
                    <Route path={ROUTES.CALCULATORS.INVESTMENT.COMPOUND_INTEREST} element={<RouteWrapper Component={CompoundInterest} />} />

                    {/* Gold */}
                    <Route path={ROUTES.CALCULATORS.GOLD.JEWELLERY} element={<RouteWrapper Component={GoldJewellery} />} />
                    <Route path={ROUTES.CALCULATORS.GOLD.OLD_GOLD} element={<RouteWrapper Component={OldGold} />} />

                    {/* Construction */}
                    <Route path={ROUTES.CALCULATORS.CONSTRUCTION.COST} element={<RouteWrapper Component={ConstructionCost} />} />
                    <Route path={ROUTES.CALCULATORS.CONSTRUCTION.BRICK} element={<RouteWrapper Component={BrickCalculator} />} />
                    <Route path={ROUTES.CALCULATORS.CONSTRUCTION.LAND_AREA} element={<RouteWrapper Component={LandArea} />} />

                    {/* Utility */}
                    <Route path={ROUTES.CALCULATORS.UTILITY.PERCENTAGE} element={<RouteWrapper Component={PercentageCalculator} />} />
                    <Route path={ROUTES.CALCULATORS.UTILITY.DATE_DIFF} element={<RouteWrapper Component={DateDifferenceCalculator} />} />
                    <Route path={ROUTES.CALCULATORS.UTILITY.AGE} element={<RouteWrapper Component={AgeCalculator} />} />
                    <Route path={ROUTES.CALCULATORS.UTILITY.EXAM} element={<RouteWrapper Component={ExamEligibility} />} />

                    {/* Legal */}
                    <Route path={ROUTES.LEGAL.PRIVACY} element={<RouteWrapper Component={PrivacyPolicy} />} />
                    <Route path={ROUTES.LEGAL.TERMS} element={<RouteWrapper Component={TermsOfService} />} />
                    <Route path={ROUTES.LEGAL.FEEDBACK} element={<RouteWrapper Component={Feedback} />} />

                    {/* SEO Landing Pages */}
                    <Route path={ROUTES.SEO.SIP_5000} element={<RouteWrapper Component={SIP5000} />} />
                    <Route path={ROUTES.SEO.SIP_1CR_LANDING} element={<RouteWrapper Component={SIP1CrLanding} />} />
                    <Route path={ROUTES.SEO.FD_VS_SIP} element={<RouteWrapper Component={FDvsSIP} />} />
                    <Route path={ROUTES.SEO.EMI_HOME} element={<RouteWrapper Component={EMILanding} />} />
                    <Route path={ROUTES.SEO.LAND_UP} element={<RouteWrapper Component={LandConverterLanding} />} />

                    {/* Learn / Articles */}
                    <Route path={ROUTES.LEARN.HOME} element={<RouteWrapper Component={LearnHome} />} />
                    <Route path={ROUTES.LEARN.SIP_RETURNS_CALCULATION} element={<RouteWrapper Component={HowSIPReturnsCalculated} />} />
                    <Route path={ROUTES.LEARN.SIP_VS_FD} element={<RouteWrapper Component={WhySIPBeatsFD} />} />
                    <Route path={ROUTES.LEARN.VILLAGE_INT_EXPL} element={<RouteWrapper Component={VillageInterestExplainer} />} />

                    {/* 404 */}
                    <Route path="*" element={<RouteWrapper Component={NotFound} />} />
                </Route>
            </Routes>
        </Suspense>
    );
}
