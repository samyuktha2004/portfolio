import React from 'react';
import { Code2, Palette, Github, Eye } from 'lucide-react';
import { StandardButton } from '../ui/StandardButton';
import { projects } from '../../data/portfolioData';

interface ProjectsProps {
  filter?: 'development' | 'design' | 'all';
}

export function Projects({ filter = 'all' }: ProjectsProps) {
  const filteredProjects = projects.filter(project => {
    if (filter === 'development') {
      return project.projectType === 'dev';
    }
    if (filter === 'design') {
      return project.projectType === 'design';
    }
    return true;
  });

  return (
    <div className="space-y-6 tablet-section">
      {filteredProjects.map((project, index) => {
        const isDesign = project.projectType === 'design';
        const Icon = isDesign ? Palette : Code2;
        const color = isDesign ? '#FFB6C1' : '#87CEEB';
        
        return (
          <div
            key={index}
            className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-6 h-6 flex-shrink-0" style={{ color }} />
                  <h3 className="text-[#fd6698] break-words">{project.title}</h3>
                </div>
                <span 
                  className="inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm mb-3"
                  style={{ backgroundColor: `${color}20`, color }}
                >
                  {project.category}
                </span>
                <p className="text-gray-700 mb-3 text-sm sm:text-base break-words">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 bg-[#FFB6C1]/20 text-[#fd6698] rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/50 rounded-xl p-3 sm:p-4 border border-[#FFB6C1]/20 mb-4">
              <h4 className="text-[#fd6698] text-sm mb-2">Key Highlights:</h4>
              <ul className="space-y-1">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-[#FFB6C1] mt-1 flex-shrink-0">✦</span>
                    <span className="break-words">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Links */}
            {(project.links.github || project.links.demo || project.links.design) && (
              <div className="flex flex-wrap gap-2 justify-end">
                {project.links.github && (
                  <StandardButton
                    href={project.links.github}
                    icon={Github}
                    label="GitHub"
                    variant="github"
                    external
                  />
                )}
                {project.links.demo && (
                  <StandardButton
                    href={project.links.demo}
                    icon={Eye}
                    label="Live Demo"
                    variant="primary"
                    external
                  />
                )}
                {project.links.design && (
                  <StandardButton
                    href={project.links.design}
                    icon={Palette}
                    label="Design"
                    variant="secondary"
                    external
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}