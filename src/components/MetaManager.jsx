import { Helmet } from 'react-helmet-async';

/**
 * MetaManager
 * Handles runtime SEO injection. 
 * While prerender.js handles the initial static HTML, this component 
 * ensures that as users navigate the SPA, the <title> and <link rel="canonical"> 
 * update correctly for Googlebot and browser tabs.
 */
export default function MetaManager({
    title,
    description,
    keywords,
    image = '/logo.png',
    type = 'website',
    canonical
}) {
    const domain = 'https://calcguide.in';

    return (
        <Helmet>
            {/* Title & Description */}
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Canonical - Critical for fixing GSC Redirect/Duplicate errors */}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Social */}
            {title && <meta property="og:title" content={title} />}
            {description && <meta property="og:description" content={description} />}
            <meta property="og:image" content={image.startsWith('http') ? image : `${domain}${image}`} />
            {canonical && <meta property="og:url" content={canonical} />}
            <meta property="og:type" content={type} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
            <meta name="twitter:image" content={image.startsWith('http') ? image : `${domain}${image}`} />
        </Helmet>
    );
}
