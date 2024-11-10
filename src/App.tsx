import React, { useState, useMemo } from 'react';
import { Code2, Database, Layout, Mail, Github, Globe } from 'lucide-react';
import Navbar from './components/Navbar';
import PortfolioCard from './components/PortfolioCard';
import ContactForm from './components/ContactForm';
import PortfolioFilter from './components/PortfolioFilter';

function App() {
  const portfolioItems = [
    {
      title: "Laravel E-commerce",
      description: "A feature-rich e-commerce platform with admin panel, product management, and order processing",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=2070",
      technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
      githubUrl: "https://github.com/Samrat34/Laravel-Ecommerce"
    },
    {
      title: "Hospital Management",
      description: "Complete hospital management system with patient records, appointments, and billing",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053",
      technologies: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
      githubUrl: "https://github.com/Samrat34/Hospital-Management"
    },
    {
      title: "Laravel Blog",
      description: "Multi-user blogging platform with categories, tags, and comment system",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2070",
      technologies: ["Laravel", "MySQL", "Bootstrap"],
      githubUrl: "https://github.com/Samrat34/Laravel-Blog"
    },
    {
      title: "School Management",
      description: "Comprehensive school management system for managing students, teachers, and courses",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=2022",
      technologies: ["Laravel", "MySQL", "JavaScript"],
      githubUrl: "https://github.com/Samrat34/School-Management"
    }
  ];

  const [selectedTech, setSelectedTech] = useState<string>('All');

  const uniqueTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    portfolioItems.forEach(item => {
      item.technologies.forEach(tech => techSet.add(tech));
    });
    return ['All', ...Array.from(techSet)];
  }, [portfolioItems]);

  const filteredProjects = useMemo(() => {
    if (selectedTech === 'All') return portfolioItems;
    return portfolioItems.filter(item => 
      item.technologies.includes(selectedTech)
    );
  }, [portfolioItems, selectedTech]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=2070" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Mehedi Hasan
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Full Stack Laravel Developer
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Specializing in PHP, Laravel, and Web Development
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition duration-300">
                Contact Me
              </a>
              <a href="#portfolio" className="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full transition duration-300">
                View Work
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg hover:transform hover:scale-105 transition duration-300">
              <Code2 className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-300">Expert in PHP/Laravel development with strong focus on clean code and best practices.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg hover:transform hover:scale-105 transition duration-300">
              <Layout className="w-12 h-12 mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-300">Proficient in HTML, CSS, Bootstrap, and JavaScript for responsive web applications.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg hover:transform hover:scale-105 transition duration-300">
              <Database className="w-12 h-12 mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2">Database Management</h3>
              <p className="text-gray-300">Skilled in MySQL database design, optimization, and management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <PortfolioFilter 
            technologies={uniqueTechnologies}
            selected={selectedTech}
            onSelect={setSelectedTech}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {filteredProjects.map((item, index) => (
              <PortfolioCard key={index} {...item} />
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <p className="text-center text-gray-400 mt-8">No projects found with the selected technology.</p>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <div className="bg-gray-700 rounded-lg p-6 space-y-6">
                  <a href="mailto:samrat.saha.cse@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-white transition duration-300">
                    <Mail className="w-6 h-6" />
                    <span>samrat.saha.cse@gmail.com</span>
                  </a>
                  <a href="https://github.com/Samrat34" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-white transition duration-300">
                    <Github className="w-6 h-6" />
                    <span>github.com/Samrat34</span>
                  </a>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Globe className="w-6 h-6" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="bg-gray-700 rounded-lg p-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Mehedi Hasan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;