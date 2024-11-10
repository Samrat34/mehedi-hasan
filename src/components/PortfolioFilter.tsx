import React from 'react';

interface PortfolioFilterProps {
  technologies: string[];
  selected: string;
  onSelect: (tech: string) => void;
}

export default function PortfolioFilter({ technologies, selected, onSelect }: PortfolioFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {technologies.map((tech) => (
        <button
          key={tech}
          onClick={() => onSelect(tech)}
          className={`px-4 py-2 rounded-full transition duration-300 ${
            selected === tech
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
}