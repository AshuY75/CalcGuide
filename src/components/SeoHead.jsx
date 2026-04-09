import React from 'react';
import { useLocation } from 'react-router-dom';
import MetaManager from './MetaManager';
import { SEO_CONFIG } from '../routes/seoConfig';
import { FAQSchema, HowToSchema, SchemaGenerator, BreadcrumbSchema } from './SchemaGenerator';

export default function SeoHead({
    title: propsTitle,
    description: propsDescription,
    canonicalPath: propsCanonicalPath,
    keywordString
}) {
    const domain = 'https://calcguide.in';
    const location = useLocation();

    // Determine canonical path
    let cleanPath = propsCanonicalPath || location.pathname;
    if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
    if (cleanPath !== '/' && !cleanPath.endsWith('/')) {
        cleanPath = cleanPath + '/';
    }

    const canonicalUrl = `${domain}${cleanPath}`;

    // Get config from central store
    const config = SEO_CONFIG[cleanPath] || {};
    const title = propsTitle || config.title;
    const description = propsDescription || config.description;

    // Determine if it's a learn article
    const isArticle = cleanPath.startsWith('/learn/') && cleanPath !== '/learn/';

    return (
        <>
            <MetaManager
                title={title}
                description={description}
                keywords={keywordString}
                canonical={canonicalUrl}
            />
            {/* Automated Schema Injection */}
            {config.breadcrumbs && <BreadcrumbSchema items={config.breadcrumbs} />}
            {config.faq && <FAQSchema faqs={config.faq} />}
            {config.howTo && (
                <HowToSchema 
                    name={config.h1 || title} 
                    description={description} 
                    steps={config.howTo} 
                />
            )}
            {isArticle && (
                <SchemaGenerator
                    name={config.h1 || title}
                    description={description}
                    type="Article"
                    url={canonicalUrl}
                />
            )}
        </>
    );
}
