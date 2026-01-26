import React from 'react';
import MetaManager from './MetaManager';

export default function SeoHead({
    title,
    description,
    canonicalPath, // REQUIRED - must be explicit path like "/calculators/emi"
    keywordString
}) {
    const domain = 'https://www.calcguide.in';

    // canonicalPath is required for SSR
    if (!canonicalPath) {
        console.error('SeoHead: canonicalPath is required');
        return null;
    }

    // Ensure canonical path starts with /
    let cleanPath = canonicalPath;
    if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;

    // Remove trailing slash (except for root)
    if (cleanPath !== '/' && cleanPath.endsWith('/')) {
        cleanPath = cleanPath.slice(0, -1);
    }

    const canonicalUrl = `${domain}${cleanPath}`;

    return (
        <MetaManager
            title={title}
            description={description}
            keywords={keywordString}
            canonical={canonicalUrl}
        />
    );
}
