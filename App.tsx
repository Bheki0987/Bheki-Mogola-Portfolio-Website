import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MatrixRain from './components/MatrixRain';
import Navbar from './components/Navbar';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-white selection:text-black relative">
        <ScrollToTop />
        <MatrixRain />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <ChatWidget />
      </div>
    </BrowserRouter>
  );
};

export default App;
