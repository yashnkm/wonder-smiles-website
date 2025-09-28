import { useState, useEffect } from 'react';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import GalleryPage from '../pages/GalleryPage';
import TestimonialsPage from '../pages/TestimonialsPage';

const Router = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Function to navigate to different pages
  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // Make navigate function globally available
  useEffect(() => {
    (window as any).navigateTo = navigate;
  }, []);

  // Route rendering logic
  const renderPage = () => {
    switch (currentPath) {
      case '/about':
        return <AboutPage />;
      case '/services':
        return <ServicesPage />;
      case '/gallery':
        return <GalleryPage />;
      case '/testimonials':
        return <TestimonialsPage />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return renderPage();
};

export default Router;