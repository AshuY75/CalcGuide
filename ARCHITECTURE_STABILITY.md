# Architecture Stability & Caching Strategy

## 1. Rendering Model: Static-First (SSG)
All pages are pre-rendered at build time. The server (at build time) generates the "Static Shell".
- **Deterministic Output**: The HTML generated for a route MUST be identical, regardless of time of day, random seeds, or execution environment.
- **Hydration Consistency**: The client-side React app must initially render the *exact same* structure as the static shell.

## 2. Route Categories

### A. Static Pages (Aggressively Cached)
- **Routes**: `/`, `/loan-calculators`, `/privacy-policy`, `/learn/*`
- **Behavior**: Pure static HTML. Zero client-side distinct initial state.

### B. Calculator Pages (Static Shell + Interactive)
- **Routes**: `/calculators/**`
- **Behavior**:
    1. **Server**: Renders the calculator form in its "Default" state (empty or default values).
    2. **Client Init**: Hydrates the "Default" state.
    3. **Client Active**: User input or `useEffect` reads `location.search` to update state *after* mount.
- **Forbidden**: Reading `window`, `localStorage`, or `URLSearchParams` during the *initial* render pass.

### C. SEO Landing Pages
- **Routes**: `/sip-calculator-5000-per-month`, etc.
- **Behavior**: Pre-configured static pages.

## 3. SEO & Metadata
- **Source of Truth**: `src/routes/seoConfig.js`
- **Injection**: `prerender.js` injects tags into `index.html` via `<!--app-head-->`.
- **Client Handling**: `SeoHead` component syncs `document.head` but must initially match the injected tags to avoid hydration mismatches.

## 4. Caching Rules (Cloudflare)
- **Headers**:
    - `Cache-Control: public, max-age=3600, s-maxage=86400`
- **Status**:
    - Expect `cf-cache-status: HIT` on second load.
    - If `MISS` persists, verify HTML content is deterministic.

## 5. Development Guidelines
1. **Never use `useId`** without a stable seed or SSR provider (if needed).
2. **Never render Random numbers** (`Math.random()`) in the initial output.
3. **Never render Dates** (`new Date()`) directly. Use a fixed string or client-side only render.
4. **Conditional Rendering**: Do not use `isServer` checks to change the component tree structure. Render the same tree, use `useEffect` for client-specific features.
