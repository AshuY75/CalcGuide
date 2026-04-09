import { useRoutes } from 'react-router-dom'
import { routes } from './routes/routesConfig'
import GlobalErrorBoundary from './components/GlobalErrorBoundary'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
  const element = useRoutes(routes)
  return (
    <GlobalErrorBoundary>
      <ScrollToTop />
      {element}
    </GlobalErrorBoundary>
  )
}

export default App
