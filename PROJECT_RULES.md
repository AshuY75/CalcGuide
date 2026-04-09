# 🔒 RULES - NEVER TOUCH THESE (Will Break Your Site)

## ⛔ BUILD CONFIGURATION - DO NOT MODIFY

| Setting | Current Value | What Happens If Changed |
| :--- | :--- | :--- |
| **build_command** | `npm run build` | Build fails, deployment breaks |
| **destination_dir** | `dist/static` | Static files not found, 404s |
| **root_dir** | Empty | Build errors |
| **build_image_major_version** | 3 | Deployment pipeline breaks |

**Files to avoid:**
- `wrangler.toml` (if exists)
- `wrangler.jsonc` (if exists)
- Build configuration in Cloudflare dashboard

---

## ⛔ FRAMEWORK SETTINGS - DO NOT MODIFY

| Setting | Current Value | What Happens If Changed |
| :--- | :--- | :--- |
| **framework** | `react-router` | SPA routing breaks, 404s everywhere |
| **framework_version** | `7.13.0` | Incompatibility errors |
| **build_command (framework-specific)** | React Router build | App won't run |

**What NOT to touch:**
- React Router version
- Routing configuration
- `vite.config.js` (unless you know exactly what you're doing)
- Entry point settings

---

## ⛔ PAGES FUNCTIONS - DO NOT ENABLE YET

| Setting | Current Value | What Happens If Changed |
| :--- | :--- | :--- |
| **uses_functions** | `false` | React Router SPA breaks, routing fails |

**What NOT to do:**
- ❌ Don't create `/functions` directory
- ❌ Don't enable Functions in dashboard
- ❌ Don't add `_middleware.js` or any function files
- ❌ Don't modify function settings

> [!NOTE]
> Why: Your React Router SPA uses client-side routing. Functions interfere with it.

---

## ⛔ ENVIRONMENT VARIABLES - DO NOT ADD

| Setting | Current Value | What Happens If Changed |
| :--- | :--- | :--- |
| **env_vars** | Empty | Breaking changes to app logic |

**What NOT to touch:**
- Don't add any environment variables
- Don't modify existing ones (currently none)
- Don't change variable names

---

## ⛔ COMPATIBILITY SETTINGS - DO NOT MODIFY

| Setting | Current Value | What Happens If Changed |
| :--- | :--- | :--- |
| **compatibility_date** | `2026-01-24` | Runtime errors, deprecated APIs |
| **compatibility_flags** | Empty | May break if you add flags |
| **usage_model** | `standard` | Breaking changes |

**What NOT to touch:**
- Don't change compatibility date
- Don't add compatibility flags
- Don't modify usage model

---

## ⛔ DOMAIN SETTINGS - DO NOT MODIFY

| Setting | Current Value | What Happens If Changed |
| :--- | :--- | :--- |
| **domains** | `calcguide.in`, `www.calcguide.in` | Domain loses connection, SSL errors |
| **zone_tag** | `e70dd1da15bf91f03b79a31fd14f1282` | Domain misconfiguration |
| **certificate_authority** | `google` | SSL/TLS breaks |

**What NOT to touch:**
- Don't change domain names
- Don't modify zone associations
- Don't change certificate settings

---

## ⛔ SOURCE REPOSITORY - DO NOT TOUCH

| Setting | Current Value | What Happens If Changed |
| :--- | :--- | :--- |
| **source.owner** | `AshuY75` | Deployment fails |
| **source.repo_name** | `CalcGuide` | Can't find repository |
| **production_branch** | `main` | Wrong code deployed |
| **path_excludes** | `[]` | Files excluded, 404s |

**What NOT to touch:**
- Don't change GitHub repository
- Don't modify branch settings
- Don't change path exclusions
- Don't delete your source code

---

## ⛔ DEPLOYMENT SETTINGS - DO NOT MODIFY

| Setting | Current Value | What Happens If Changed |
| :--- | :--- | :--- |
| **preview_branch_includes** | `["*"]` | Preview deployments break |
| **preview_branch_excludes** | `[]` | Wrong branches deployed |
| **deployments_enabled** | `true` | Won't auto-deploy |
| **production_deployments_enabled** | `true` | Won't deploy to production |

**What NOT to touch:**
- Don't disable deployments
- Don't change preview settings
- Don't modify deployment triggers

---

## ⛔ SSL/TLS SETTINGS - DO NOT MODIFY

| Setting | Current Value | What Happens If Changed |
| :--- | :--- | :--- |
| **SSL mode** | Automatic (default) | HTTPS breaks |

**What NOT to touch:**
- Don't change SSL/TLS settings
- Don't disable HTTPS
- Don't modify certificate settings

---

## ⛔ CACHE SETTINGS - DO NOT MODIFY

| Setting | Current Value | What Happens If Changed |
| :--- | :--- | :--- |
| **build_caching** | `null (default)` | Slower builds, but safe |

**What NOT to touch:**
- Don't modify cache settings unless needed

---

## ✅ SAFE TO TOUCH (If you know what you're doing)

- Your source code in GitHub repo
- Monetag script placement (see below)

---

## 🎯 FINAL RULES - ONLY THESE ARE SAFE

### ✅ SAFE TO MODIFY:
- Source HTML in your GitHub repo
- Add Monetag script to `public/index.html`
- Only modify HTML structure, not build process
- React component files (if you're comfortable with React)
- Add script tag via `useEffect` hook

### ❌ NEVER TOUCH (Or site breaks):
- Build configuration (`wrangler.toml`, build settings)
- Framework settings (React Router version, routing)
- Pages Functions (don't enable, don't create)
- Environment variables (don't add any)
- Compatibility settings (date, flags)
- Domain settings (names, SSL, zones)
- Source repository links (GitHub ownership, branch)
- Deployment settings (preview, triggers)
- Cache configuration (unless necessary)
- Build output directory (`dist/static`)
- Build command (`npm run build`)
- Root directory (empty)
- Build image version (3)
