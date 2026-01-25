import React from 'react';
import { useLocation } from 'react-router-dom';
import MetaManager from './MetaManager';

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

    return (
        <MetaManager
            title={title}
            description={description}
            keywords={keywordString}
            canonical={canonicalUrl}
        />
    );
}
