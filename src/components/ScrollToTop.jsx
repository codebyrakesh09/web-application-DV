// this page is created for the solution of scrolling problem...
// this page imported in App.jsx for rendering
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // scroll to the top when pathname changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // <-- this will scroll smoothly
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
