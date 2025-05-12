
import React, { useEffect } from 'react';
import { ExternalLink, Code, Eye } from 'lucide-react';

const PortfolioSection = () => {
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

  const projects = [
    {
      id: 1,
      title: "JoyFull Invits",
      description: "Digital Invitation Website",
      longDescription: "A fully responsive platform for sending digital wedding and party invitations. Users can customize invitations with various designs, colors, and content.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1470&auto=format&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "FunCalc",
      description: "Playful Kids Calculator",
      longDescription: "A colorful and animated calculator designed specifically for kids. Features sound effects, animations, and a child-friendly interface to make learning math fun.",
      image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=1470&auto=format&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="portfolio" className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-portfolio-teal mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="reveal project-card flex flex-col h-full">
              <div className="relative overflow-hidden" style={{ height: '240px' }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-portfolio-navy bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="space-x-4">
                    <a 
                      href={project.demoLink} 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-portfolio-navy hover:bg-portfolio-teal hover:text-white transition-colors duration-200"
                      title="View Demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Eye size={20} />
                    </a>
                    <a 
                      href={project.codeLink} 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-portfolio-navy hover:bg-portfolio-teal hover:text-white transition-colors duration-200"
                      title="View Code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-portfolio-teal font-medium mb-3">{project.description}</p>
                <p className="text-gray-600 mb-4 flex-1">{project.longDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.demoLink} 
                  className="flex items-center text-portfolio-navy hover:text-portfolio-teal transition-colors duration-200 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
