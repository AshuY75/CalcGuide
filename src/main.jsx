import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.css'

const container = document.getElementById('root')

if (!container) {
  console.error("FATAL: Root container #root not found in the DOM.")
} else {
  const root = createRoot(container)
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  )
}
