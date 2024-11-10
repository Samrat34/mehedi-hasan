import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function PortfolioCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl
}: PortfolioCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden group">
      <div className="relative">
        <img 
          src={image}
          alt={title} 
          className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}