import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function MetaManager({
    title,
    description,
    keywords,
    image = '/logo.png',
    type = 'website'
}) {
    const location = useLocation();
    const siteName = 'CalcGuide';
    // Ensure domain matches current production (calcguide.in)
    const canonicalUrl = `https://calcguide.in${location.pathname}`;

    const fullTitle = title.includes('CalcGuide') ? title : `${title} | ${siteName}`;

    useEffect(() => {
        // Update Title
        document.title = fullTitle;

        // Helper to update or create meta tag
        const updateMeta = (selector, attribute, value) => {
            let element = document.querySelector(selector);
            if (!element) {
                element = document.createElement('meta');
                if (selector.startsWith('meta[name')) {
                    element.setAttribute('name', selector.replace('meta[name="', '').replace('"]', ''));
                } else if (selector.startsWith('meta[property')) {
                    element.setAttribute('property', selector.replace('meta[property="', '').replace('"]', ''));
                }
                document.head.appendChild(element);
            }
            element.setAttribute(attribute, value);
        };

        // Update Link Rel Canonical
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.setAttribute('rel', 'canonical');
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.setAttribute('href', canonicalUrl);

        // Standard Meta
        updateMeta('meta[name="title"]', 'content', fullTitle);
        updateMeta('meta[name="description"]', 'content', description);
        updateMeta('meta[name="keywords"]', 'content', keywords || 'calculator, finance, india, emi, sip, loan, fd');

        // Open Graph
        updateMeta('meta[property="og:type"]', 'content', type);
        updateMeta('meta[property="og:url"]', 'content', canonicalUrl);
        updateMeta('meta[property="og:title"]', 'content', fullTitle);
        updateMeta('meta[property="og:description"]', 'content', description);
        updateMeta('meta[property="og:image"]', 'content', image.startsWith('http') ? image : `https://calcguide.in${image}`);
        updateMeta('meta[property="og:site_name"]', 'content', siteName);

        // Twitter
        updateMeta('meta[property="twitter:card"]', 'content', 'summary_large_image');
        updateMeta('meta[property="twitter:url"]', 'content', canonicalUrl);
        updateMeta('meta[property="twitter:title"]', 'content', fullTitle);
        updateMeta('meta[property="twitter:description"]', 'content', description);
        updateMeta('meta[property="twitter:image"]', 'content', image.startsWith('http') ? image : `https://calcguide.in${image}`);

    }, [fullTitle, description, keywords, image, type, canonicalUrl]);

    return null;
}
