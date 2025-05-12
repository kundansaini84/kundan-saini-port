
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
    <footer className="bg-portfolio-navy text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold">
              Kundan<span className="text-portfolio-teal">Saini</span>
            </a>
            <p className="text-gray-400 mt-2">Full-Stack & WordPress Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="bg-portfolio-teal bg-opacity-20 p-3 rounded-full mb-4 hover:bg-opacity-30 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </button>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Kundan Saini. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
