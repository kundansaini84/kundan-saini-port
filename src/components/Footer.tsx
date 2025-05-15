
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-portfolio-navy text-white py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <a href="#" className="text-lg md:text-xl font-bold hover:text-portfolio-teal transition-colors duration-300">
              Kundan<span className="text-portfolio-teal">Saini</span>
            </a>
            <p className="text-gray-400 mt-1 text-sm md:text-base">Full-Stack & WordPress Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="bg-portfolio-teal bg-opacity-20 p-2 md:p-3 rounded-full mb-3 md:mb-4 hover:bg-opacity-70 transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ChevronUp size={18} className="animate-pulse-slow" />
            </button>
            <p className="text-gray-400 text-xs md:text-sm">
              © {new Date().getFullYear()} Kundan Saini. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
