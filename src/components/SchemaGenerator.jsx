import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SchemaGenerator = ({
    type = "WebPage",
    name,
    description,
    url,
    image,
    data = {}
}) => {
    const baseSchema = {
        "@context": "https://schema.org",
        "@type": type,
        "name": name,
        "description": description,
        "url": url || window.location.href,
        "inLanguage": "en-IN",
        "publisher": {
            "@type": "Organization",
            "name": "CalcGuide",
            "logo": {
                "@type": "ImageObject",
                "url": "https://calcguide.com/logo.png"
            }
        },
        ...data
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(baseSchema)}
            </script>
        </Helmet>
    );
};

export const BreadcrumbSchema = ({ items }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};
