import { useEffect } from 'react';

const InjectSchema = ({ id, schema }) => {
    useEffect(() => {
        let script = document.getElementById(id);
        if (!script) {
            script = document.createElement('script');
            script.type = 'application/ld+json';
            script.id = id;
            document.head.appendChild(script);
        }
        script.text = JSON.stringify(schema);

        return () => {
            // Optional: cleanup
            // document.head.removeChild(script);
        };
    }, [id, schema]);

    return null;
};

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
                "url": "https://calcguide.in/logo.png"
            }
        },
        ...data
    };

    return <InjectSchema id={`schema-${type}-${name.replace(/\s+/g, '-')}`} schema={baseSchema} />;
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

    return <InjectSchema id="schema-breadcrumb" schema={schema} />;
};
