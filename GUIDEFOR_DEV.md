# GUIDEFOR_DEV.md - CalcGuide Codebase "Constitution"

> **⚠️ STOP and READ**
> This repository uses a **custom SSG (Static Site Generation)** architecture.
> It does NOT follow standard Create-React-App patterns.
> **Ignorance of these rules will break production.**

---

## 1. Core Architecture (The "Truth")

Do not assume anything. Here is how this specific app works:

-   **Framework**: React 18 + Vite.
-   **Styling**: **Tailwind CSS v4** (via `src/index.css` import). There is NO `tailwind.config.js`.
-   **Routing**: React Router DOM (v6+), defined centrally.
-   **Rendering**:
    -   **Dev**: standard SPA (`npm run dev`).
    -   **Prod**: **Custom SSG** via `prerender.js`.
    -   *Note*: We generate static HTML for every route at build time.

### Directory "Law"

-   `src/components/calculators/` -> **Business Logic Only.** (The UI, the math, the state).
-   `src/pages/` -> **Route Targets Only.** (Wrappers that import components).
-   `src/routes/paths.js` -> **URL Strings Only.** (The single source of truth for links).
-   `src/routes/seoConfig.js` -> **SEO Metadata Only.** (Titles & Descriptions).
-   `src/routes/routesConfig.jsx` -> **Route Objects Only.** (Mapping URLs to Components).

---

## 2. SEO & Metadata Rules (Non-Negotiable)

**🔴 WE DO NOT USE REACT-HELMET.**
(If you import `react-helmet` or `react-helmet-async`, you are WRONG).

**How SEO Works Here:**
1.  **Build Time**: `prerender.js` reads `src/routes/seoConfig.js`.
2.  **Injection**: It manually injects `<title>` and `<meta>` tags into the static HTML.
3.  **Client Side**: **Titles DO NOT update on client-side navigation.** This is a known architectural trade-off for speed/simplicity.

**The Rule:**
-   To add a Title/Description, you **MUST** edit `src/routes/seoConfig.js`.
-   Adding `<title>` inside a component will do nothing.

---

## 3. How to Add a New Calculator (The Protocol)

Follow this exact sequence. Do not skip steps.

#### Step 1: Logic & UI (`src/components/calculators/`)
Create `MyCalcUI.jsx`. Use strict integer math ("Paisa Math").
```jsx
// Correct
const interest = Math.round((principal * rate) / 100);
```

#### Step 2: Page Wrapper (`src/pages/`)
Create `MyCalcPage.jsx`.
-   Import `MyCalcUI`.
-   **DO NOT** add Helmet/Head tags here.
-   Add specific Schema (JSON-LD) if needed using `<script>`.

#### Step 3: Define URL (`src/routes/paths.js`)
Add a constant.
```javascript
// src/routes/paths.js
export const ROUTES = {
  CALCULATORS: {
    NEW_CAT: {
      MY_CALC: "/calculators/new-cat/my-calc/" // Must have trailing slash
    }
  }
}
```

#### Step 4: Define Metadata (`src/routes/seoConfig.js`)
**CRITICAL STEP.** If you miss this, the build will FAIL (Guardrails exist).
```javascript
// src/routes/seoConfig.js
"/calculators/new-cat/my-calc/": {
    title: "My Calculator - CalcGuide",
    description: "Calculate X, Y, Z instantly."
}
```

#### Step 5: Register Route (`src/routes/routesConfig.jsx`)
Import your page and map it.
```javascript
import MyCalcPage from '../pages/MyCalcPage';
// ...
{ path: ROUTES.CALCULATORS.NEW_CAT.MY_CALC, element: <RouteWrapper Component={MyCalcPage} /> }
```

**⚠️ DUPLICATE IMPORT WARNING:**
Check if your component is already imported. Double imports in this file will **crash the build**.

---

## 4. How to Add a Blog Post (Learn Section)

1.  **File**: Create `src/pages/learn/MyTopic.jsx`.
2.  **Content**: Use standard HTML/Tailwind. Images must be imported from `src/assets`.
3.  **Registration**: Follow Steps 3, 4, and 5 above (Paths, SEO Config, Routes Config).
4.  **Links**: Use `<Link to={ROUTES.CALCULATORS...}>`. Never hardcode strings.


---

## 7. CRITICAL: Cloudflare & Routing Safety

**The Error:** `The symbol "X" has already been declared`
**The Cause:** Duplicate imports in `routesConfig.jsx`.

**Why It Happens:**
Local dev uses a forgiving bundler. Cloudflare Production uses `esbuild`, which crashes instantly on duplicate imports.

**THE RULES:**
1.  **Alphabetical Ordering:** All imports in `routesConfig.jsx` MUST be alphabetical. This makes duplicates impossible to miss.
2.  **Strict Grouping:** Use the defined comments (`// 1. Core`, `// 2. Hubs`, etc.).
3.  **One Commit Isolation:** Any change to `routesConfig.jsx` must be in its own commit. DO NOT mix it with feature work.
4.  **Verification:** If you touch routing, you MUST run `npm run build` locally before pushing.

---

## 8. Git & Workflow Rules

1.  **Commit Granularity:**
    -   **One logical change = One Commit.**
    -   Don't bundle "Fixing CSS" with "Adding new Router".
    -   *Why?* If we need to revert (like we did today), we want to lose only the bad code, not the good code.

2.  **Before You Commit (The "Pulse Check"):**
    -   Run `npm run dev`.
    -   Does it start?
    -   Check the console for "Duplicate declaration" errors.
    -   Check terminal for "Unresolved import" errors.

3.  **The "Revert" Protocol:**
    -   If `npm run dev` fails after a pull/merge and you can't fix it in 5 minutes:
    -   **RESET.** (`git reset --hard`)
    -   Don't pile hacks on top of broken code.

---

## 9. Pre-Commit Checklist (MANDATORY)

Copy this into your brain before typing `git commit`:

- [ ] **Build Check:** `npm run dev` starts without red text?
- [ ] **Import Check:** Did I double-check `routesConfig.jsx` for duplicate imports?
- [ ] **Dependency Check:** Did I add a new package? If yes, is it in `package.json`?
- [ ] **Cleanliness:** Did I remove unused `console.log`?
- [ ] **Scope:** Is this commit focused on ONE task?

---

## 10. Final Warning

**Speed is nothing without Stability.**

It takes 10 seconds to double-check an import.
It takes 2 hours to debug a failed production build caused by a careless copy-paste.

**Follow the guide.**
