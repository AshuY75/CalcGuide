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

    const schemaId = useMemo(() => {
        const safeName = (typeof name === 'string' && name.trim()) ? name : 'default';
        return `schema-${type}-${safeName.replace(/\s+/g, '-')}`;
    }, [type, name]);

    return <InjectSchema id={schemaId} schema={baseSchema} />;
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

export const FAQSchema = ({ faqs }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return <InjectSchema id="schema-faq" schema={schema} />;
};

export const HowToSchema = ({ name, description, steps }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": name,
        "description": description,
        "step": steps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.title,
            "text": step.content,
            "url": `${typeof window !== 'undefined' ? window.location.href : ''}#step-${index + 1}`
        }))
    };

    return <InjectSchema id="schema-howto" schema={schema} />;
};
