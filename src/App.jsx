import { useRoutes } from 'react-router-dom'
import { routes } from './routes/routesConfig'
import GlobalErrorBoundary from './components/GlobalErrorBoundary'

function App() {
  const element = useRoutes(routes)
  return (
    <GlobalErrorBoundary>
      {element}
    </GlobalErrorBoundary>
  )
}

export default App
