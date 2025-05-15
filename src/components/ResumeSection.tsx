
import React from 'react';
import { FileDown } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const ResumeSection = () => {
  // Function to handle resume download
  const handleDownloadResume = () => {
    // Direct link to the resume PDF file
    const resumeUrl = "https://example.com/your-resume.pdf"; // Replace with your actual resume URL
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Kundan_Saini_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
          <div className="w-20 h-1 bg-portfolio-teal mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Download my resume to learn more about my education and experience</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0 overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Resume Preview Side */}
                <div className="bg-white p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-portfolio-navy">Kundan Saini</h3>
                    <p className="text-gray-600 mb-6">Full-Stack & WordPress Developer</p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-portfolio-navy">Education</h4>
                        <p className="text-gray-600">Bachelor of Computer Applications (BCA)</p>
                        <p className="text-gray-500 text-sm">University of Engineering and Management, Jaipur</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-portfolio-navy">Focus Areas</h4>
                        <p className="text-gray-600">Web Development, UI/UX Design, WordPress</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button 
                      onClick={handleDownloadResume} 
                      className="btn-primary flex items-center justify-center gap-2 w-full"
                    >
                      <FileDown size={20} />
                      Download Resume
                    </button>
                  </div>
                </div>
                
                {/* Resume Visual Preview Side */}
                <div className="bg-gray-100 p-4">
                  <div className="rounded-md overflow-hidden shadow-md h-full">
                    <AspectRatio ratio={3/4} className="bg-white">
                      <div className="p-4 h-full flex flex-col">
                        <div className="border-b border-gray-200 pb-2 mb-2">
                          <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                        <div className="space-y-4 flex-grow">
                          <div>
                            <div className="h-5 bg-gray-200 rounded w-1/4 mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                          </div>
                          <div>
                            <div className="h-5 bg-gray-200 rounded w-1/4 mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                            <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                          </div>
                          <div>
                            <div className="h-5 bg-gray-200 rounded w-1/4 mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                            <div className="h-3 bg-gray-200 rounded w-full mb-1 mt-1"></div>
                            <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                          </div>
                        </div>
                      </div>
                    </AspectRatio>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
