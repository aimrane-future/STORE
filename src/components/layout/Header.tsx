import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              AETHER
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">
              Products
            </a>
            <a href="#sustainability" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">
              Sustainability
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">
              Testimonials
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-yellow-400" />}
            </button>
            
            <Button 
              variant="primary" 
              size="sm" 
              className="hidden sm:flex"
              icon={<ShoppingBag size={18} />}
            >
              Shop Now
            </Button>
            
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg pt-4 pb-6 px-4 transition-all duration-300">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#products" 
              className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#sustainability" 
              className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sustainability
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#about" 
              className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <Button 
              variant="primary" 
              className="mt-2"
              icon={<ShoppingBag size={18} />}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;