import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { APP_NAME, footerLinks } from '../constants';
import nicLogo from '../assets/nic.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 xs:pt-16 pb-6 xs:pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 xs:mb-12">
          {/* App Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center text-white mb-4">
              <img src={nicLogo} alt={APP_NAME} className="w-8 h-8" />
              <span className="ml-2 text-lg xs:text-xl font-bold">{APP_NAME}</span>
            </div>
            <p className="mb-6 text-gray-400 max-w-md text-sm xs:text-base">
              The simplest way to buy and sell locally. Join millions of people using {APP_NAME} to find unique items at amazing prices.
            </p>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4 text-base xs:text-lg">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.url} 
                      className="text-gray-400 hover:text-teal-500 transition-colors flex items-center text-sm xs:text-base"
                    >
                      <ChevronRight size={12} className="xs:w-3.5 xs:h-3.5 mr-1" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6 xs:pt-8 mt-6 xs:mt-8 text-xs xs:text-sm text-gray-500 flex flex-col xs:flex-row justify-between items-center">
          <p>&copy; {currentYear} {APP_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;