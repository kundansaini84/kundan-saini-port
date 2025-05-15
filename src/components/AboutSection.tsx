
import React, { useEffect } from 'react';
import { GraduationCap, Code, Briefcase } from 'lucide-react';

const AboutSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className="bg-white py-16 md:py-20">
      <div className="section-container">
        <div className="text-center mb-10 md:mb-16 reveal">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 md:w-20 h-1 bg-portfolio-teal mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4 md:px-0">
          <div className="reveal">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">My Journey</h3>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              I'm a passionate web developer currently pursuing my Bachelor's in Computer Applications (BCA) 
              at the University of Engineering and Management, Jaipur, with an expected graduation in 2026.
            </p>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              My journey into web development started with curiosity about how websites are built,
              which quickly turned into a passion for creating engaging digital experiences.
              I'm constantly learning new technologies and refining my skills to become a more versatile developer.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              I enjoy working on projects that challenge me and allow me to grow as a developer.
              My goal is to build intuitive, responsive, and accessible web applications that provide
              exceptional user experiences.
            </p>
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <div className="reveal bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm flex card-hover">
              <div className="mr-3 md:mr-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-portfolio-navy rounded-full flex items-center justify-center text-white transition-transform duration-300 hover:scale-110">
                  <GraduationCap size={20} />
                </div>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Education</h4>
                <p className="text-gray-600 mb-1 text-sm md:text-base">Bachelor of Computer Applications (BCA)</p>
                <p className="text-gray-500 text-sm md:text-base">University of Engineering and Management, Jaipur</p>
                <p className="text-gray-500 text-xs md:text-sm">2023 - 2026 (Expected)</p>
              </div>
            </div>
            
            <div className="reveal bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm flex card-hover">
              <div className="mr-3 md:mr-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-portfolio-navy rounded-full flex items-center justify-center text-white transition-transform duration-300 hover:scale-110">
                  <Code size={20} className="btn-shake" />
                </div>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Development Focus</h4>
                <p className="text-gray-600 text-sm md:text-base">Full-Stack Web Development</p>
                <p className="text-gray-600 text-sm md:text-base">WordPress Development</p>
                <p className="text-gray-600 text-sm md:text-base">Responsive Web Design</p>
              </div>
            </div>
            
            <div className="reveal bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm flex card-hover">
              <div className="mr-3 md:mr-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-portfolio-navy rounded-full flex items-center justify-center text-white transition-transform duration-300 hover:scale-110">
                  <Briefcase size={20} />
                </div>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Career Goals</h4>
                <p className="text-gray-600 text-sm md:text-base">Become a skilled Full-Stack Developer</p>
                <p className="text-gray-600 text-sm md:text-base">Create impactful web applications</p>
                <p className="text-gray-600 text-sm md:text-base">Continuously expand technical expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
