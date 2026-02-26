import { useMemo, memo } from 'react';

const InjectSchema = memo(({ id, schema }) => {
    return (
        <script type="application/ld+json" id={id} dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    );
}, (prevProps, nextProps) => {
    // Custom comparison to ensure deep equality of schema avoids re-render
    return prevProps.id === nextProps.id && JSON.stringify(prevProps.schema) === JSON.stringify(nextProps.schema);
});

export const SchemaGenerator = memo(({
    type = "WebPage",
    name,
    description,
    url,
    image,
    data = {}
}) => {
    const baseSchema = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": type,
        "name": name,
        "description": description,
        "url": url || (typeof window !== 'undefined' ? window.location.href : ''),
        "inLanguage": "en-IN",
        "publisher": {
            "@type": "Organization",
            "name": "CalcGuide",
            "logo": {
                "@type": "ImageObject",
                "url": "https://calcguide.in/logo.png"
            }
        },
        "author": type === "Article" ? {
            "@type": "Person",
            "name": "Ashu Yadav",
            "jobTitle": "Senior Associate Engineer",
            "url": "https://calcguide.in/about/"
        } : undefined,
        ...data
    }), [type, name, description, url, JSON.stringify(data)]);

    return <InjectSchema id={`schema-${type}-${name.replace(/\s+/g, '-')}`} schema={baseSchema} />;
});

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

    return <InjectSchema id="schema-breadcrumb" schema={schema} />;
};
