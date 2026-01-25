import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const DISALLOWED_PARAMS = ['ref', 'source', 'gclid', 'fbclid'];

export default function SeoHead({
    title,
    description,
    canonicalPath,
    keywordString
}) {
    const location = useLocation();
    const domain = 'https://www.calcguide.in';

    // Construct canonical URL
    // If canonicalPath is provided, use it. Otherwise use current path.
    // Ensure we handle leading slash correctly.
    let cleanPath = canonicalPath || location.pathname;
    if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;

    // Remove trailing slash if present (except for root), or enforce logic. 
    // User asked for consistency. Let's REMOVE trailing slash for consistency (unless it's root).
    if (cleanPath !== '/' && cleanPath.endsWith('/')) {
        cleanPath = cleanPath.slice(0, -1);
    }

    const canonicalUrl = `${domain}${cleanPath}`;
    const currentUrl = `${domain}${location.pathname}${location.search}`;

    return (
        <Helmet>
            {/* Basic Meta */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={`${domain}/og-default.png`} /> {/* Placeholder */}
            <meta property="og:site_name" content="CalcGuide" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {/* Keywords if provided */}
            {keywordString && <meta name="keywords" content={keywordString} />}
        </Helmet>
    );
}
