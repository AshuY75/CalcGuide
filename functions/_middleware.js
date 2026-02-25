export async function onRequest(context) {
    const { request, next } = context;
    const url = new URL(request.url);
    const { pathname, searchParams } = url;

    // 1. WWW to Non-WWW Redirect (Canonical Domain)
    if (url.hostname.startsWith('www.')) {
        url.hostname = url.hostname.replace(/^www\./, '');
        return Response.redirect(url.toString(), 301);
    }

    // 2. URL Lowercasing
    if (pathname !== pathname.toLowerCase()) {
        url.pathname = pathname.toLowerCase();
        return Response.redirect(url.toString(), 301);
    }

    // 3. Trailing Slash Enforcement (Except for files with extensions)
    // Matching our ROUTES convention which uses mandatory trailing slashes.
    const isFile = pathname.split('/').pop().includes('.');
    if (!isFile && !pathname.endsWith('/') && pathname !== '') {
        url.pathname = pathname + '/';
        return Response.redirect(url.toString(), 301);
    }

    // 4. Cache Normalization (Query Tag Stripping)
    // Stripping tracking parameters to prevent cache fragmentation and increase hit rate.
    const trackParams = ['fbclid', 'gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'msclkid', 'dclid'];
    let hasTrackParams = false;

    for (const param of trackParams) {
        if (searchParams.has(param)) {
            searchParams.delete(param);
            hasTrackParams = true;
        }
    }

    // If we stripped params, redirect to the clean URL to ensure only-one version exists in Google's index and Cloudflare's cache.
    if (hasTrackParams) {
        return Response.redirect(url.toString(), 301);
    }

    // Proceed to next middleware or asset
    const response = await next();

    // 5. Cache-Control Header Overrides
    // Ensure pre-rendered HTML has a reasonable browser and edge TTL.
    // Static assets like JS/CSS are usually handled by Pages automatically with long hashes.
    if (response.headers.get('Content-Type')?.includes('text/html')) {
        const newHeaders = new Headers(response.headers);
        // Browser cache for 1 hour, Edge cache for 1 day
        newHeaders.set('Cache-Control', 'public, max-age=3600, s-maxage=86400');
        return new Response(response.body, {
            ...response,
            headers: newHeaders
        });
    }

    return response;
}
