import React, { useEffect, useState } from 'react';

const SkillsSection = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      const skillsSection = document.getElementById('skills');
      
      if (skillsSection) {
        const windowHeight = window.innerHeight;
        const sectionTop = skillsSection.getBoundingClientRect().top;
        
        if (sectionTop < windowHeight - 150) {
          setAnimated(true);
        }
      }
      
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

  const skills = [
    { name: "HTML", level: 85 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "Tailwind CSS", level: 70 },
    { name: "WordPress", level: 75 },
    { name: "WooCommerce", level: 70 },
    { name: "Canva", level: 75 },
  ];

  const tools = [
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  ];

  return (
    <section id="skills" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-portfolio-teal mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build modern web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="reveal">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: animated ? `${skill.level}%` : '0%',
                        transition: `width ${1 + index * 0.2}s ease-out`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal">
            <h3 className="text-2xl font-semibold mb-6">Tools & Platforms</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center skill-card">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img 
                      src={tool.icon} 
                      alt={tool.name} 
                      className="w-12 h-12 transition-all duration-300 hover:scale-125" 
                    />
                  </div>
                  <h4 className="font-medium">{tool.name}</h4>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Currently Learning</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full transition-all duration-300 hover:bg-portfolio-teal hover:text-white hover:scale-105">React.js</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full transition-all duration-300 hover:bg-portfolio-teal hover:text-white hover:scale-105">Node.js</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full transition-all duration-300 hover:bg-portfolio-teal hover:text-white hover:scale-105">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
