import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Load Template and Server Entry
const template = fs.readFileSync('dist/index.html', 'utf-8')
const { render, routes } = await import('./dist/server/entry-server.js')
const { SEO_CONFIG } = await import('./src/routes/seoConfig.js')

/**
 * ROUTE EXTRACTION
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
                const parent = parentPath === '/' ? '' : parentPath

                currentPath =
                    parent.endsWith('/') && currentPath.startsWith('/')
                        ? `${parent}${currentPath.slice(1)}`
                        : !parent.endsWith('/') && !currentPath.startsWith('/')
                            ? `${parent}/${currentPath}`
                            : `${parent}${currentPath}`
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
 * RENDER LOOP
 */
for (const url of routesToPrerender) {

    const seo = SEO_CONFIG[url]

    if (url !== '/404' && !seo) {
        errors.push(`SEO ERROR: Missing data in SEO_CONFIG for route "${url}"`)
        continue
    }

    const title = seo?.title || 'Page Not Found'
    const description = seo?.description || ''

    let appHtml = ''

    try {
        const result = render(url, {})
        appHtml = result.html

        if (!appHtml || appHtml.trim().length < 100) {
            errors.push(`CONTENT ERROR: Rendered HTML for "${url}" too small.`)
            continue
        }

    } catch (e) {
        errors.push(`RENDER ERROR for ${url}: ${e.message}`)
        continue
    }

    const domain = 'https://calcguide.in'
    const canonical = `${domain}${url === '/' ? '' : url.endsWith('/') ? url : `${url}/`}`

    const seoTags = `
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${canonical}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${canonical}">
<meta property="og:type" content="website">
`

    let htmlContent = template
        .replace('<!--app-head-->', seoTags)
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

    /**
     * WRITE FILES
     */
    const filePath =
        url === '/404'
            ? 'dist/404.html'
            : `dist${url === '/' ? '/index.html' : url.endsWith('/') ? `${url}index.html` : `${url}/index.html`}`

    const dir = path.dirname(filePath)

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }

    try {
        fs.writeFileSync(filePath, htmlContent)
        process.stdout.write('.')
    } catch (e) {
        errors.push(`FILE ERROR: Failed to write ${filePath}`)
    }
}

console.log('\n\n--- Phase 3: Post-Generation Verification ---')

/**
 * VALIDATION
 */
routesToPrerender.forEach(url => {

    const filePath =
        url === '/404'
            ? 'dist/404.html'
            : `dist${url === '/' ? '/index.html' : url.endsWith('/') ? `${url}index.html` : `${url}/index.html`}`

    if (!fs.existsSync(filePath)) {
        errors.push(`SSG ERROR: Missing file for route ${url}`)
        return
    }

    const content = fs.readFileSync(filePath, 'utf-8')

    if (url !== '/404') {

        const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/)
        const descMatch = content.match(/<meta[^>]*name="description"[^>]*content="(.*?)"/)

        if (!titleMatch || titleMatch[1].length < 5) {
            errors.push(`SEO ERROR: Invalid title in ${filePath}`)
        }

        if (!descMatch || descMatch[1].length < 10) {
            errors.push(`SEO ERROR: Invalid description in ${filePath}`)
        }
    }
})

console.log(`Expected Routes: ${routesToPrerender.length}`)

if (errors.length > 0) {
    console.error('\n❌ BUILD FAILED')
    errors.forEach(e => console.error(e))
    process.exit(1)
} else {
    console.log('\n✅ SSG Success')
    console.log('🚀 Build Completed Successfully.')
}