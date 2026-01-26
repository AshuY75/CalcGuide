import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { routes } from './routes/routesConfig'

export { routes }

/**
 * Clean SSR Render - Content only.
 * SEO is injected by the prerender script manually.
 */
export function render(url, context) {
    const routerContext = context || {}

    const html = renderToString(
        <StaticRouter location={url} context={routerContext}>
            <App />
        </StaticRouter>
    )

    return { html }
}
