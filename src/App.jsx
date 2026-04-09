import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { routes } from './routes/routesConfig'
import GlobalErrorBoundary from './components/GlobalErrorBoundary'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
  const element = useRoutes(routes)

  useEffect(() => {
    // Monetag Ad Scripts Initialization
    const loadMonetag = (zoneId) => {
      // Check if already exists to avoid double injection
      if (document.querySelector(`script[data-zone="${zoneId}"]`)) return;
      
      const script = document.createElement('script');
      script.dataset.zone = zoneId;
      script.src = 'https://nap5k.com/tag.min.js';
      document.body.appendChild(script);
    };

    // Load Monetag zones after a short delay to ensure hydration is stable
    const timer = setTimeout(() => {
        loadMonetag('10846275');
        loadMonetag('10846292');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <GlobalErrorBoundary>
        <ScrollToTop />
        {element}
      </GlobalErrorBoundary>
    </HelmetProvider>
  )
}

export default App
