
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Terminal } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#') {
      if (location.pathname !== '/') {
        navigate('/');
        window.scrollTo(0, 0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      // Delay to allow Home component to mount
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm border-b border-white/20 py-3' : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#')}
          className="flex items-center gap-2 text-white group cursor-pointer"
        >
          <div className="p-1.5 rounded bg-white text-black border border-white group-hover:bg-black group-hover:text-white transition-all duration-300">
            <Terminal size={18} />
          </div>
          <span className="font-mono font-bold text-lg tracking-tight uppercase">
            Bheki
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors relative group cursor-pointer tracking-wide"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-5 py-2 bg-white text-black text-sm font-bold rounded-sm border border-white hover:bg-black hover:text-white transition-all cursor-pointer"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-neutral-300"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/20 p-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-lg font-medium text-neutral-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
