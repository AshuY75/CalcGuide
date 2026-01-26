import { Helmet } from 'react-helmet-async';

export default function MetaManager({
    title,
    description,
    keywords,
    image = '/logo.png',
    type = 'website',
    canonical // REQUIRED for SSR
}) {
    const siteName = 'CalcGuide';

    if (!canonical) {
        console.error('MetaManager: canonical prop is required for SSR compatibility');
    }

    const canonicalUrl = canonical || 'https://calcguide.in';
    const fullTitle = title.includes('CalcGuide') ? title : `${title} | ${siteName}`;
    const fullImage = image.startsWith('http') ? image : `https://calcguide.in${image}`;

    return (
        <Helmet>
            {/* Standard Meta */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords || 'calculator, finance, india, emi, sip, loan, fd'} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={fullImage} />
        </Helmet>
    );
}
