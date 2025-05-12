
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Kundan Saini</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Full-Stack & WordPress Developer
            </p>
            <p className="text-gray-500 max-w-lg mx-auto md:mx-0 mb-8">
              Passionate about creating responsive, user-friendly web applications.
              Currently pursuing BCA at University of Engineering and Management, Jaipur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => window.open('https://github.com/kundansaini84', '_blank')}
                className="btn-primary btn-bounce flex items-center justify-center gap-2"
              >
                View My Work
              </button>
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="btn-outline btn-bounce"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="relative animate-float">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-teal shadow-xl mx-auto hover-rotate">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop"
                  alt="Kundan Saini"
                  className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg hover-scale">
                <div className="bg-portfolio-teal rounded-full w-16 h-16 flex items-center justify-center text-white">
                  <span className="font-bold">BCA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <button 
            onClick={scrollToAbout}
            className="animate-bounce bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-50"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="text-portfolio-navy" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
