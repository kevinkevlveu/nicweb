import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { APP_NAME, APP_STORE_URL, PLAY_STORE_URL } from '../constants';
import AppStoreButton from './common/AppStoreButton';
import nicLogo from '../assets/nic.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        isScrolled ? 'bg-white shadow-md py-2 xs:py-3' : 'bg-transparent py-3 xs:py-4'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <div className="flex items-center text-teal-600">
              <img src={nicLogo} alt={APP_NAME} className="w-12 h-12 xs:w-28 xs:h-28" />
         
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-teal-600 font-medium">Features</a>
            <a href="#categories" className="text-gray-700 hover:text-teal-600 font-medium">Categories</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-teal-600 font-medium">How It Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-teal-600 font-medium">Reviews</a>
          </nav>

          {/* Desktop Download Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <AppStoreButton 
              type="google" 
              url={PLAY_STORE_URL} 
              className="px-3 py-2 text-xs"
            />
            <AppStoreButton 
              type="apple" 
              url={APP_STORE_URL} 
              className="px-3 py-2 text-xs"
            />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 p-1" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[57px] xs:top-[65px] bg-white shadow-lg py-4 px-4 xs:px-6 z-50 max-h-[calc(100vh-57px)] xs:max-h-[calc(100vh-65px)] overflow-y-auto">
            <nav className="flex flex-col space-y-4 mb-6">
              <a 
                href="#features" 
                className="text-gray-700 hover:text-teal-600 font-medium py-2" 
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#categories" 
                className="text-gray-700 hover:text-teal-600 font-medium py-2" 
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-700 hover:text-teal-600 font-medium py-2" 
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-teal-600 font-medium py-2" 
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </a>
            </nav>
            <div className="flex flex-col space-y-3">
              <AppStoreButton type="google" url={PLAY_STORE_URL} className="w-full" />
              <AppStoreButton type="apple" url={APP_STORE_URL} className="w-full" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;