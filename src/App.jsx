import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { Navbar } from '@/layout/Navbar';
import { Footer } from '@/layout/Footer';
import { HomePage } from '@/pages/HomePage';
import { ProjectPage } from '@/pages/ProjectPage';

// Scroll to the top on page changes, or to the #section when the URL has a hash
// (the navbar links to /#about etc. from case-study pages).
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return undefined;
    }
    let tries = 0;
    let timer;
    const scrollToHash = () => {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (tries++ < 20) {
        timer = setTimeout(scrollToHash, 50);
      }
    };
    scrollToHash();
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
