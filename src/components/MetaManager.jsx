export default function MetaManager({
    title,
    description,
    keywords,
    image = '/logo.png',
    type = 'website',
    canonical // REQUIRED for SSR
}) {
    // SEO is handled at build time via prerender.js injection.
    // Client-side runtime head manipulation is disabled to enforce SSG consistency.
    // This component remains to maintain tree structure but renders nothing.
    return null;
}
