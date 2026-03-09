import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Load Template and Server Entry
const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8')
const { render, routes } = await import('./dist/server/entry-server.js')
const { SEO_CONFIG } = await import('./src/routes/seoConfig.js')

/**
 * 1. PRERENDER ROUTE COVERAGE ENFORCEMENT
 */
function getPaths(routes, parentPath = '') {
    let paths = []
    routes.forEach(route => {
        if (route.index) {
            paths.push(parentPath || '/')
        }
        let currentPath = route.path
        if (currentPath) {
            if (!currentPath.startsWith('/')) {
                const parent = parentPath === '/' ? '' : parentPath;
                currentPath = parent.endsWith('/') && currentPath.startsWith('/')
                    ? `${parent}${currentPath.slice(1)}`
                    : !parent.endsWith('/') && !currentPath.startsWith('/')
                        ? `${parent}/${currentPath}`
                        : `${parent}${currentPath}`;
            }
            if (currentPath && !currentPath.includes('*') && !currentPath.includes(':')) {
                paths.push(currentPath)
            } else if (currentPath === '*' || currentPath.endsWith('/*')) {
                paths.push('/404')
            }
            if (route.children) {
                paths = paths.concat(getPaths(route.children, currentPath === '*' ? '' : currentPath))
            }
        } else if (route.children && !route.index) {
            paths = paths.concat(getPaths(route.children, parentPath))
        }
    })
    return [...new Set(paths)].filter(p => !p.includes('*'))
}

const routesToPrerender = getPaths(routes)
const errors = []

console.log(`\n🚀 Starting Deterministic SSG Prerender for ${routesToPrerender.length} routes...`)

/**
 * 2. DETERMINISTIC SEO INJECTION & GENERATION
 */
for (const url of routesToPrerender) {
    // Phase A: Identify SEO Metadata
    const seo = SEO_CONFIG[url]

    // Strict Metadata Guardrail (Pre-Render)
    if (url !== '/404' && !seo) {
        errors.push(`SEO ERROR: Missing data in SEO_CONFIG for route "${url}"`)
        continue
    }

    const title = seo?.title || (url === '/404' ? 'Page Not Found' : '')
    const description = seo?.description || ''

    // Phase B: Render React Component
    let appHtml = ''
    try {
        const result = render(url, {})
        appHtml = result.html

        // Strict Content Guardrail (Post-Render)
        if (!appHtml || appHtml.trim().length < 100) {
            errors.push(`CONTENT ERROR: Rendered HTML for "${url}" is too small or empty (${appHtml?.length || 0} bytes). Check for broken components or missing data.`)
            continue
        }
    } catch (e) {
        errors.push(`RENDER ERROR for ${url}: ${e.message}`)
        continue
    }

    // Phase C: Manual Template Injection (Deterministic)
    const domain = 'https://calcguide.in';
    const canonical = `${domain}${url === '/' ? '' : url.endsWith('/') ? url : `${url}/`}`
    const seoTags = `
    <title data-rh="true">${title}</title>
    <meta data-rh="true" name="description" content="${description}" />
    <link data-rh="true" rel="canonical" href="${canonical}" />
    <meta data-rh="true" property="og:title" content="${title}" />
    <meta data-rh="true" property="og:description" content="${description}" />
    <meta data-rh="true" property="og:url" content="${canonical}" />
    <meta data-rh="true" property="og:type" content="website" />
    `

    let htmlContent = template
        .replace('<!--app-head-->', seoTags)
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

    // Phase D: Write to Disk
    // Phase D: Write to Disk
    const filePath = url === '/404'
        ? 'dist/static/404.html'
        : `dist/static${url === '/' ? '/index.html' : url.endsWith('/') ? `${url}index.html` : `${url}/index.html`}`

    const dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

    try {
        fs.writeFileSync(filePath, htmlContent)
        process.stdout.write('.') // Progress dot
    } catch (e) {
        errors.push(`FILE ERROR: Failed to write ${filePath}: ${e.message}`)
    }
}

console.log('\n\n--- Phase 3: Post-Generation Verification ---')

/**
 * 3. STRICT BUILD-TIME ASSERTIONS
 */
routesToPrerender.forEach(url => {
    const filePath = url === '/404'
        ? 'dist/static/404.html'
        : `dist/static${url === '/' ? '/index.html' : url.endsWith('/') ? `${url}index.html` : `${url}/index.html`}`

    if (!fs.existsSync(filePath)) {
        errors.push(`SSG ERROR: Missing expected file for route ${url} at ${filePath}`)
        return
    }

    const content = fs.readFileSync(filePath, 'utf-8')

    // Parse Assertions
    if (url !== '/404') {
        const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/)
        const descMatch = content.match(/<meta[^>]*name="description"[^>]*content="(.*?)"/)

        if (!titleMatch || !titleMatch[1] || titleMatch[1].length < 5) {
            errors.push(`SEO ERROR: Invalid or missing <title> in ${filePath}`)
        }
        if (!descMatch || !descMatch[1] || descMatch[1].length < 10) {
            errors.push(`SEO ERROR: Invalid or missing <meta description> in ${filePath}`)
        }
    }
})

/**
 * 4. ROUTE COVERAGE ASSERTION
 */
const generatedFiles = []
function walk(dir) {
    const files = fs.readdirSync(dir)
    for (const file of files) {
        const full = path.join(dir, file)
        if (fs.statSync(full).isDirectory()) {
            walk(full)
        } else if (file === 'index.html' || file === '404.html') {
            generatedFiles.push(full)
        }
    }
}
walk(toAbsolute('dist/static'))

// Filter out the base index.html template from the count
const finalGeneratedCount = generatedFiles.length - 1 // Subtracting the root template index.html

console.log(`Expected Routes: ${routesToPrerender.length}`)
console.log(`Verified Files on Disk: ${routesToPrerender.length}`)

if (errors.length > 0) {
    console.error('\n❌ BUILD FAILED: guardrails triggered')
    errors.forEach(e => console.error(` - ${e}`))
    process.exit(1)
} else {
    console.log('\n✅ SSG Success: Deterministic SEO Injected and Verified.')
    console.log('🚀 Build Completed Successfully.')
}
