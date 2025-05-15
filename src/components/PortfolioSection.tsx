
import React, { useEffect } from 'react';
import { ExternalLink, Code, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

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
      demoLink: "https://github.com/kundansaini84/joyfull-invits",
      codeLink: "https://github.com/kundansaini84/joyfull-invits"
    },
    {
      id: 2,
      title: "FunCalc",
      description: "Playful Kids Calculator",
      longDescription: "A colorful and animated calculator designed specifically for kids. Features sound effects, animations, and a child-friendly interface to make learning math fun.",
      image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=1470&auto=format&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://github.com/kundansaini84/FunCalc-Kids-Calculator",
      codeLink: "https://github.com/kundansaini84/FunCalc-Kids-Calculator"
    }
  ];

  return (
    <section id="portfolio" className="bg-gradient-to-b from-modern-light to-white py-16 md:py-20">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 gradient-text">My Portfolio</h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-modern mx-auto mb-4 md:mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto px-4 md:px-0">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-0">
          {projects.map((project) => (
            <div key={project.id} className="reveal glass-card flex flex-col h-full hover-scale">
              <div className="relative overflow-hidden rounded-t-xl" style={{ height: '180px', minHeight: '180px' }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-modern-dark bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="space-x-4">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <a 
                          href={project.demoLink} 
                          className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-modern-primary hover:bg-modern-primary hover:text-white transition-all duration-200 hover:scale-110 glow-effect"
                          title="View Demo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Eye size={18} />
                        </a>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-40">
                        <p className="text-xs md:text-sm">View live demo</p>
                      </HoverCardContent>
                    </HoverCard>
                    
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <a 
                          href={project.codeLink} 
                          className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-modern-primary hover:bg-modern-primary hover:text-white transition-all duration-200 hover:scale-110 glow-effect"
                          title="View Code"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Code size={18} />
                        </a>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-40">
                        <p className="text-xs md:text-sm">View source code</p>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </div>
              </div>
              <div className="p-4 md:p-6 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 gradient-text">{project.title}</h3>
                <p className="text-modern-primary font-medium text-sm md:text-base mb-2 md:mb-3">{project.description}</p>
                <p className="text-gray-600 text-sm mb-3 md:mb-4 flex-1">{project.longDescription}</p>
                <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 md:px-3 py-1 bg-modern-light text-modern-dark text-xs md:text-sm rounded-full transition-all duration-300 hover:bg-modern-primary hover:text-white">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="link" 
                  asChild 
                  className="p-0 h-auto text-modern-primary hover:text-modern-secondary flex items-center transition-all duration-200 hover:translate-x-1 text-sm md:text-base"
                >
                  <a 
                    href={project.demoLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <ExternalLink size={14} className="ml-1 md:ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
