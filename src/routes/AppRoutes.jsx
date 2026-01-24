import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './paths';
import MainLayout from '../layouts/MainLayout';
import NotFound from '../pages/NotFound';

// Lazy Load Pages
const Home = lazy(() => import('../pages/Home'));

// Loan
const EMICalculator = lazy(() => import('../pages/EMICalculator'));
const LoanEligibility = lazy(() => import('../pages/LoanEligibility'));
const VillageInterest = lazy(() => import('../pages/VillageInterestCalculator'));

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

// Loading Fallback
const PageLoader = () => (
    <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
);

export default function AppRoutes() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path={ROUTES.HOME} element={<MainLayout />}>
                    <Route index element={<Home />} />

                    {/* Loans */}
                    <Route path={ROUTES.CALCULATORS.LOAN.EMI} element={<EMICalculator />} />
                    <Route path={ROUTES.CALCULATORS.LOAN.ELIGIBILITY} element={<LoanEligibility />} />
                    <Route path={ROUTES.CALCULATORS.LOAN.VILLAGE_INTEREST} element={<VillageInterest />} />

                    {/* Investments */}
                    <Route path={ROUTES.CALCULATORS.INVESTMENT.SIP} element={<SIPCalculator />} />
                    <Route path={ROUTES.CALCULATORS.INVESTMENT.SIP_CRORE} element={<SIP1CrCalculator />} />
                    <Route path={ROUTES.CALCULATORS.INVESTMENT.FD} element={<FDCalculator />} />
                    <Route path={ROUTES.CALCULATORS.INVESTMENT.RD} element={<RDCalculator />} />
                    <Route path={ROUTES.CALCULATORS.INVESTMENT.SIMPLE_INTEREST} element={<SimpleInterest />} />
                    <Route path={ROUTES.CALCULATORS.INVESTMENT.COMPOUND_INTEREST} element={<CompoundInterest />} />

                    {/* Gold */}
                    <Route path={ROUTES.CALCULATORS.GOLD.JEWELLERY} element={<GoldJewellery />} />
                    <Route path={ROUTES.CALCULATORS.GOLD.OLD_GOLD} element={<OldGold />} />

                    {/* Construction */}
                    <Route path={ROUTES.CALCULATORS.CONSTRUCTION.COST} element={<ConstructionCost />} />
                    <Route path={ROUTES.CALCULATORS.CONSTRUCTION.BRICK} element={<BrickCalculator />} />
                    <Route path={ROUTES.CALCULATORS.CONSTRUCTION.LAND_AREA} element={<LandArea />} />

                    {/* Utility */}
                    <Route path={ROUTES.CALCULATORS.UTILITY.PERCENTAGE} element={<PercentageCalculator />} />
                    <Route path={ROUTES.CALCULATORS.UTILITY.DATE_DIFF} element={<DateDifferenceCalculator />} />
                    <Route path={ROUTES.CALCULATORS.UTILITY.AGE} element={<AgeCalculator />} />
                    <Route path={ROUTES.CALCULATORS.UTILITY.EXAM} element={<ExamEligibility />} />

                    {/* Legal */}
                    <Route path={ROUTES.LEGAL.PRIVACY} element={<PrivacyPolicy />} />
                    <Route path={ROUTES.LEGAL.TERMS} element={<TermsOfService />} />
                    <Route path={ROUTES.LEGAL.FEEDBACK} element={<Feedback />} />

                    {/* Legacy Redirects (Optional: handling old paths if needed or just 404) */}
                    {/* We are prioritizing clean slate, so new paths only. Old paths will 404 naturally unless we redirect. */}

                    {/* 404 */}
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Suspense>
    );
}
