import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Utility component that resets the scroll position to the top
 * whenever the route (pathname) changes.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force immediate scroll to top on every navigation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Faster than 'smooth' for UX consistency
    });
  }, [pathname]);

  return null;
}
