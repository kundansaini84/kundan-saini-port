
import React, { useEffect } from 'react';
import { Mail, Linkedin, Github, Instagram, Twitter } from 'lucide-react';

const ContactSection = () => {
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

  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: <Linkedin size={20} />, 
      url: "https://www.linkedin.com/in/kundan--saini--?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    { 
      name: "GitHub", 
      icon: <Github size={20} />, 
      url: "https://github.com/kundansaini84"
    },
    { 
      name: "X.com", 
      icon: <Twitter size={20} />, 
      url: "https://x.com/Kundan__Saini__?t=wHqiQNo3wOC57tp97quJNQ&s=09"
    },
    { 
      name: "Instagram", 
      icon: <Instagram size={20} />, 
      url: "#"
    },
  ];

  return (
    <section id="contact" className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-portfolio-teal mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out to me for collaborations or just to say hello!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="reveal bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-portfolio-navy text-white p-8 md:p-12">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-portfolio-teal bg-opacity-20 flex items-center justify-center mr-4 flex-shrink-0 animate-pulse-slow">
                      <Mail size={20} className="text-portfolio-teal" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <a 
                        href="mailto:kundansaini339@gmail.com" 
                        className="hover:text-portfolio-teal transition-colors duration-200 hover:underline"
                      >
                        kundansaini339@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="text-xl font-medium mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url} 
                        className="social-link bg-opacity-20 border-transparent hover:bg-portfolio-teal hover:bg-opacity-20 text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="mt-12">
                  <p className="text-sm text-gray-300">
                    Currently pursuing BCA at University of Engineering and Management, Jaipur
                  </p>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-teal focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-teal focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-teal focus:border-transparent transition-all duration-300"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary w-full btn-bounce"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
