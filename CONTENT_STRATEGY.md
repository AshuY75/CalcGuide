# 🚀 CalcGuide Authority Content Layer Strategy

**Goal**: Establish [CalcGuide.in](https://calcguide.in) as a high-authority financial resource in India.
**Focus**: YMYL (Your Money Your Life) compliance, E-E-A-T, and Topical Authority.

---

## 1️⃣ Core Content Clusters (India-Focused)

These clusters map directly to existing high-value calculators to ensure every reader has a "Next Action".

| Cluster | Focus Area | Why This Wins in India | Monetization Potential |
| :--- | :--- | :--- | :--- |
| **A. Loans & Debt** | Housing, Personal, & Education Loans | High anxiety around debt. Users want to know "How to close loan early" or "Am I eligible?". | **Highest** (DSA Leads, Credit Cards, Refinancing) |
| **B. Wealth & Tax** | SIP, FD, PPF, saving ₹1 Crore | India is in a "Financialization of Savings" boom. SIP culture is exploding. Users want "Safety + Growth". | **High** (Demat accts, Advisory, Affiliate) |
| **C. Everyday Utility** | Age, Dates, Conversions | High volume, low competition. Critical for Govt. Job aspirants (UPSC/SSC) and land owners. | **Volume** (AdSense impressions, Brand awareness) |

---

## 2️⃣ Authority Guide Page Plan (15 Pages)

### 🏦 Cluster A: Loans (The "Save Money" Cluster)

| # | Target Keyword | URL Slug | Intent | Links To (Calculator) |
| :--- |:--- | :--- | :--- | :--- |
| 1 | **Prepay Home Loan vs SIP** | `/learn/home-loan-prepayment-vs-sip` | Commercial | EMICalculator, SIPCalculator |
| 2 | **Reduce Home Loan EMI** | `/learn/how-to-reduce-home-loan-emi` | Informational | EMICalculator |
| 3 | **Example Interest Calculation** | `/learn/how-village-interest-works` | Informational | VillageInterestCalculator |
| 4 | **Loan Eligibility Factors** | `/learn/factors-affecting-loan-eligibility-india` | Informational | LoanEligibility |
| 5 | **Gold Loan LTV Explained** | `/learn/gold-loan-ltv-rules-rbi` | Commercial | GoldJewelleryCalculator |

### 📈 Cluster B: Investments (The "Make Money" Cluster)

| # | Target Keyword | URL Slug | Intent | Links To (Calculator) |
| :--- | :--- | :--- | :--- | :--- |
| 6 | **SIP vs FD** | `/learn/sip-vs-fd-comparison` | Commercial | SIPCalculator, FDCalculator |
| 7 | **Power of Compounding** | `/learn/power-of-compounding-india` | Informational | CompoundInterestCalculator |
| 8 | **How to Save 1 Crore** | `/learn/how-to-save-1-crore-salary` | Commercial | SIP1CrCalculator |
| 9 | **FD Taxation Rules 2024** | `/learn/verified-fd-interest-rates-tax` | Informational | FDCalculator |
| 10 | **RD vs SIP** | `/learn/rd-vs-sip-for-students` | Commercial | RDCalculator, SIPCalculator |

### 🗓️ Cluster C: Utilities (The "Daily Life" Cluster)

| # | Target Keyword | URL Slug | Intent | Links To (Calculator) |
| :--- | :--- | :--- | :--- | :--- |
| 11 | **Age for UPSC/SSC Exams** | `/learn/calculate-age-for-government-exams` | Informational | AgeCalculator |
| 12 | **Date Difference for HR** | `/learn/calculate-service-tenure-experience` | Informational | DateDifferenceCalculator |
| 13 | **Percentage Tricks** | `/learn/fast-percentage-calculation-tricks` | Informational | PercentageCalculator |
| 14 | **Land Measurement Units** | `/learn/indian-land-units-conversion` | Informational | LandAreaConverter |
| 15 | **Brick Calculation Formula** | `/learn/calculate-bricks-for-wall-construction` | Commercial | BrickCalculator |

---

## 3️⃣ Content Structure Rules (The Blueprint)

Every guide **MUST** follow strictly this JSON-like structure to satisfy Google’s Helpful Content logic.

1.  **H1 Title**: Must contain the primary keyword + a hook.
    *   *Bad:* "SIP Guide"
    *   *Good:* "SIP vs FD: Which Investment is Better for ₹5,000 Monthly?"
2.  **Breadcrumbs**: `Home > Learn > [Category] > [Post]`
3.  **The "BLUF" (Bottom Line Up Front)**:
    *   First 100 words must answer the core query. Use a "Key Takeaways" box.
4.  **The "Trust" Section**:
    *   Mention *why* this matters (Inflation, Tax saving).
    *   Cite RBI/SEBI rules where applicable.
5.  **Interactive Anchor**:
    *   "Don't want to read? Calculate your returns now." (Big Button linking to specific calculator).
6.  **Detailed Breakdown**:
    *   H2s for sub-topics.
    *   Tables for comparison (e.g., FD Interest vs Inflation).
7.  **Real Examples (The "E" in E-E-A-T)**:
    *   User personas: "Ravi earns ₹50k/month..."
    *   Scenarios: Show the math. "If Ravi invests X, he gets Y."
8.  **FAQ Section**:
    *   3-4 questions strictly marked up with Schema.org `FAQPage`.
9.  **Author/Reviewer Byline**:
    *   "Fact Checked by CalcGuide Team".

---

## 4️⃣ Internal Linking Strategy (Hub & Spoke)

This is the "Neural Network" of your site. It passes authority from content to calculators.

### The Model

*   **The Hub**: The **Calculator Page** (e.g., `/calculators/investment/sip-calculator`)
    *   *Link Out*: To the Guide ("Read our guide on How SIP Works")
    *   *Schema*: Service/Tool Schema.
*   **The Spoke**: The **Guide Page** (e.g., `/learn/sip-vs-fd-comparison`)
    *   *Link In*: **3 distinct links** to the Calculator.
        1.  **Intro**: "Use our [SIP Calculator] to check..."
        2.  **Context**: "As shown in the [SIP Tool]..."
        3.  **CTA**: Floating or Sticky footer "Start Calculating".
    *   *Link Across*: 1 link to a related guide (e.g., to "How to Save 1 Crore").

**Why this works**: Google crawls the Guide (Keyword rich), sees the strong relationship to the Tool (Function rich), and rewards the Tool with higher ranking because it's supported by "Expertise".

---

## 5️⃣ React Implementation Guidance

### 📁 Folder Structure
```text
src/
  pages/
    learn/
        index.jsx          (The Knowledge Hub / Blog Roll)
        LoanHub.jsx        (Category Page)
        ArticleLayout.jsx  (Opinionated Layout wrapper)
        data/
           articles.js     (Or individual JSONs if not using a CMS)
        loans/
           HomeLoanPrepayment.jsx
           ReduceEMI.jsx
           // ... other loan guides
        investments/
           SIPvsFD.jsx
           OneCrorePlan.jsx
           // ... other investment guides
  components/
    learn/
      ArticleHeader.jsx    (H1, Date, Author)
      TableOfContents.jsx  (Sticky sidebar)
      RelatedCalcCard.jsx  (The "Ad" for your own tools)
      FaqAccordion.jsx     (Schema-ready)
```

### 💡 Tech Stack Tips
1.  **Static Data**: Since these are evergreen, you don't need a CMS yet. Hardcode the text or use Markdown/JSON files loaded at build time.
2.  **Lazy Loading**: Use `React.lazy` for these routes. They are entry points from Google, not necessarily part of the main app bundle.
3.  **Schema**: Use your existing `SchemaGenerator` component. Ensure `type="Article"` or `type="FAQPage"` is passed.

---

## 6️⃣ Google Best Practices (Compliance Check)

To ensure this content survives Google's "Helpful Content" updates:

1.  **Avoid "Doorway Pages"**: Do not create 50 pages like "SIP for Doctors", "SIP for Engineers", etc. Create **ONE** strong guide.
2.  **Date Hygiene**: Display "Last Updated" dates. Finance changes every Budget session (Feb 1st in India).
3.  **No False Promises**: Never say "Guaranteed 15% return". Say "Historical average of 12-15%".
4.  **Performance**: These text-heavy pages must score 100/100 on Mobile Core Web Vitals.

---

## 7️⃣ Execution Timeline (5 Days)

| Day | Task | Description |
| :--- | :--- | :--- |
| **1** | **Architecture** | Build `ArticleLayout`, `ArticleHeader`, `FAQAccordion`. Set up routes. |
| **2** | **Investments** | Write & Deploy 5 Investment Guides (High traffic priority). |
| **3** | **Loans** | Write & Deploy 5 Loan Guides (High monetization priority). |
| **4** | **Utilities** | Write & Deploy 5 Utility Guides (Easy wins). |
| **5** | **Audit** | Check all internal links, verify Schema, submit sitemap to GSC. |
