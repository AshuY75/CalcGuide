import React from 'react';
const Helmet = () => null;
import { useLocation } from 'react-router-dom';

export default function MetaManager({
    title,
    description,
    keywords,
    image = 'https://calcguide.com/og-image.jpg',
    type = 'website'
}) {
    const location = useLocation();
    const canonicalUrl = `https://calcguide.com${location.pathname}`;
    const siteName = 'CalcGuide';

    const fullTitle = title.includes('CalcGuide') ? title : `${title} | ${siteName}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords || 'calculator, finance, india, emi, sip, loan'} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
}
