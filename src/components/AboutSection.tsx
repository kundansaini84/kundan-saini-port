
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
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-portfolio-teal mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="reveal">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate web developer currently pursuing my Bachelor's in Computer Applications (BCA) 
              at the University of Engineering and Management, Jaipur, with an expected graduation in 2026.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My journey into web development started with curiosity about how websites are built,
              which quickly turned into a passion for creating engaging digital experiences.
              I'm constantly learning new technologies and refining my skills to become a more versatile developer.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I enjoy working on projects that challenge me and allow me to grow as a developer.
              My goal is to build intuitive, responsive, and accessible web applications that provide
              exceptional user experiences.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="reveal bg-gray-50 p-6 rounded-lg shadow-sm flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-portfolio-navy rounded-full flex items-center justify-center text-white">
                  <GraduationCap size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Education</h4>
                <p className="text-gray-600 mb-1">Bachelor of Computer Applications (BCA)</p>
                <p className="text-gray-500">University of Engineering and Management, Jaipur</p>
                <p className="text-gray-500 text-sm">2023 - 2026 (Expected)</p>
              </div>
            </div>
            
            <div className="reveal bg-gray-50 p-6 rounded-lg shadow-sm flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-portfolio-navy rounded-full flex items-center justify-center text-white">
                  <Code size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Development Focus</h4>
                <p className="text-gray-600">Full-Stack Web Development</p>
                <p className="text-gray-600">WordPress Development</p>
                <p className="text-gray-600">Responsive Web Design</p>
              </div>
            </div>
            
            <div className="reveal bg-gray-50 p-6 rounded-lg shadow-sm flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-portfolio-navy rounded-full flex items-center justify-center text-white">
                  <Briefcase size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Career Goals</h4>
                <p className="text-gray-600">Become a skilled Full-Stack Developer</p>
                <p className="text-gray-600">Create impactful web applications</p>
                <p className="text-gray-600">Continuously expand technical expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
