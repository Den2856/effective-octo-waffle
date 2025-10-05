import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/about', label: 'About us' },
    { path: '/services', label: 'Services' },
    { path: '/use-cases', label: 'Use Cases' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <header 
      className={` z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">

          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Positivus" 
                className="w-32 h-auto transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-dark font-medium hover:text-primary transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              to="/request-quote"
              className="bg-transparent border-dark text-dark px-6 py-3 rounded-[14px] font-semibold border-[1px]"
            >
              Request a quote
            </Link>
          </nav>

          {/* Mobile Menu Button with new SVG icons */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden relative w-8 h-8 focus:outline-none group"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-6 h-6">
                {/* Hamburger Icon */}
                <div className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}>
                  <svg 
                    className="w-6 h-6 text-dark"
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </div>
                
                {/* Close Icon */}
                <div className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
                  <svg 
                    className="w-6 h-6 text-dark"
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Menu with smooth animation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-2xl mt-4 p-6">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-dark font-medium hover:text-primary transition-colors duration-200 py-2 border-b border-gray-100 last:border-b-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/request-quote"
                className="bg-transparent border-dark text-dark px-6 py-3 rounded-[14px] font-semibold border-[1px] text-center  mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
