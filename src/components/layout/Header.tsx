import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Code } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <motion.div 
            initial={{ rotate: -90 }} 
            animate={{ rotate: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <Code size={32} className="text-primary-700 dark:text-primary-400" />
          </motion.div>
          <span className="text-xl font-display font-bold text-gray-900 dark:text-white">
            M12 Systems R&D
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-600 dark:after:bg-primary-400 after:transition-all after:duration-300 ${
                  isActive 
                    ? 'text-primary-700 dark:text-primary-400 after:w-full' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400 after:w-0 hover:after:w-full'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right side items */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            {theme === 'light' ? (
              <Moon size={20} className="text-primary-700" />
            ) : (
              <Sun size={20} className="text-accent-400" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden bg-white dark:bg-gray-900`}
      >
        <nav className="container py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium p-2 transition-colors duration-300 ${
                  isActive 
                    ? 'text-primary-700 dark:text-primary-400 bg-gray-100 dark:bg-gray-800 rounded-lg' 
                    : 'text-gray-700 dark:text-gray-300'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;