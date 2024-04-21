import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth behavior for scrolling
    });
  }, [pathname]);

  return null; // This component doesn't render anything, it just handles the scrolling
};

export default ScrollToTop;
