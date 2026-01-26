import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import GlobalErrorBoundary from './GlobalErrorBoundary';
import PageLoader from './PageLoader';
import SeoHead from './SeoHead';
import { SEO_CONFIG } from '../routes/seoConfig';

/**
 * RouteWrapper
 * Handles:
 * 1. SEO injection (Client-only via Helmet, Server-side via Prerender Script)
 * 2. Component Loading with Suspense
 * 3. Error Boundaries
 */
export default function RouteWrapper({ Component }) {
    const location = useLocation();

    // Get SEO data for current path
    const seo = SEO_CONFIG[location.pathname];

    // SEO Component (Always render to maintain tree consistency)
    const seoComponent = seo ? (
        <SeoHead
            title={seo.title}
            description={seo.description}
            canonicalPath={location.pathname}
        />
    ) : null;

    const content = (
        <>
            {seoComponent}
            <Component />
        </>
    );

    return (
        <GlobalErrorBoundary>
            <Suspense fallback={<PageLoader />}>
                {content}
            </Suspense>
        </GlobalErrorBoundary>
    );
}
