# SSG & SEO Architecture: Deterministic Guardrails

## 1. Executive Summary
This site uses a custom Vite + React + SSG architecture optimized for Cloudflare Pages.
Unlike standard SPA apps, SEO metadata is handled **at build time** via deterministic template injection, not runtime side effects.
A series of strict guardrails exist to fail the build if any configuration is missing or invalid.
This design is intentional to prevent silent SEO regressions and ensure 100% cache performance.
It is non-negotiable and must not be bypassed for "flexibility."

---

## 2. System Architecture Overview
The build pipeline follows a linear, non-branching path to ensure consistency:

1.  **Vite Build (Client)**: Generates the JS/CSS assets and base `index.html`.
2.  **Vite Build (Server)**: Compiles React components into a Node-compatible SSR bundle.
3.  **Prerender Engine (`prerender.js`)**:
    *   Walks the `routesConfig.js` to find all routable paths.
    *   Executes React SSR to get the component HTML string.
    *   Retrieves SEO metadata from the centralized `seoConfig.js`.
    *   Injects SEO tags directly into the `<head>` of the HTML template.
    *   Writes deterministic HTML files to `dist/static/`.
4.  **Verification Phase**: Validates every generated file on disk against strict SEO and coverage rules.

---

## 3. SEO Architecture
In this system, `react-helmet-async` is **not** the source of truth for SSG. It remains for client-side navigation only.

*   **Static Injection**: The `prerender.js` script manually constructs `<title>`, `<meta name="description">`, and `<link rel="canonical">` tags.
*   **Deterministic Metadata**: `src/routes/seoConfig.js` is the **only** authoritative source for page metadata.
*   **Hydration Safety**: Injected tags use the `data-rh="true"` attribute. This allows `react-helmet-async` to take over smoothly once the JS loads without creating duplicate tags.
*   **Core Principle**: SEO correctness must never depend on React context, `useEffect`, or side effects during the build process.

---

## 4. Guardrails & Build Failures
The build will **fail with a non-zero exit code** if any of these are violated:

1.  **Metadata Guardrail**: Every path in `routesConfig` MUST have a corresponding entry in `seoConfig`.
    *   *Prevents*: Adding a new tool but forgetting to give it a title/description.
2.  **HTML Integrity Guardrail**: Post-generation, every file is scanned via Regex for proper `<title>` and `<meta description>` content.
    *   *Prevents*: Successful renders that accidentally produce empty or placeholder SEO tags.
3.  **Route Coverage Guardrail**: The count of HTML files on disk must match the route config.
    *   *Prevents*: Build failures that partially succeed but miss specific pages.

---

## 5. Rules for Adding or Modifying Routes
Follow these steps exactly to ensure a successful build:

1.  **Define Route**: Add the path to `src/routes/paths.js`.
2.  **Update Config**: Add the route and component mapping to `src/routes/routesConfig.jsx`.
3.  **Define SEO**: Add the title and description to `src/routes/seoConfig.js`.
4.  **Verification**: Run `npm run build`.
5.  **Confirm**: Check `dist/static/[route]/index.html` to ensure SEO tags are present.

*Note: Skipping any step will trigger a build failure in CI/CD.*

---

## 6. Things You Must NOT Do
1.  **Do NOT remove guardrails**: They are the only thing preventing silent metadata loss.
2.  **Do NOT reintroduce runtime SEO as truth**: Do not rely on `MetaManager` or `Helmet` rendered within components for the SSG output.
3.  **Do NOT disable build failures**: "Temporarily" bypassing a failure leads to permanent technical debt. Fix the configuration instead.
4.  **Do NOT add wildcard SPA fallbacks**: Every page should be a physical file on Cloudflare. Relying on `/*` redirects breaks caching and SEO.
5.  **Do NOT change the output directory**: `prerender.js` and deployment scripts are synced to `dist/static`.

---

## 7. Common Failure Scenarios & Debugging
*   **"Missing data in SEO_CONFIG for route..."**: You added a page but forgot to add it to `seoConfig.js`.
*   **"Invalid or missing <title> in..."**: The injection failed or the string in `seoConfig` is too short.
*   **"Route mismatch detected"**: The number of routes in JS doesn't match the files on disk. Likely a leftover file or a failed render.

---

## 8. Cache & Deployment Notes
This architecture ensures a **100% Cache Hit Rate** for HTML on Cloudflare Pages.
*   **TTL**: HTML files are served with high TTL because they are unique and static.
*   **Invalidation**: Deployments replace the entire static set. There is no "stale" HTML possible if the build passes.
*   **Performance**: Since metadata is in the first bytes of the HTML, Social/Search bots receive a fully optimized response without executing a single line of Javascript.

---

## 9. Ownership Statement
This architecture exists to prevent silent regressions. It favors **strictness over convenience**. If a build failure feels "annoying," it means the guardrail successfully prevented an SEO bug from reaching production. Any change to this pipeline must respect these architectural constraints.
