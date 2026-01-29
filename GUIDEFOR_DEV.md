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

## 5. Strict Workflow Constraints

1.  **No Dynamic Imports in Routes**:
    -   We use static imports (`import Page from...`) because our SSG script needs to traverse the tree.
    -   Do not use `React.lazy()` for pages unless you rewrite `prerender.js`.

2.  **Tailwind Config**:
    -   There is no `tailwind.config.js`.
    -   Theme variables are default v4.
    -   Do not try to "fix" this by adding a config file unless you know exactly how Vite CSS handling works.

3.  **Client-Side Navigation**:
    -   Remember: `<title>` will not update when clicking links. This is "By Design" for now.
    -   Do not waste time debugging unique page titles in `npm run dev` browser view; view `View Page Source` of the build output if you need verification.

---

## 6. Pre-Commit Verification

Before you push, ask:
1.  [ ] Did I add my path to `paths.js`?
2.  [ ] Did I add my metadata to `seoConfig.js`?
3.  [ ] Did I check `routesConfig.jsx` for duplicate imports?
4.  [ ] Does `npm run dev` start without errors?

**If you broke it, you fix it.**
