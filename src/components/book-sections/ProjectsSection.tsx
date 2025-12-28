import React from 'react';
import { FolderOpen } from 'lucide-react';
import { projects } from '../../data/portfolioData';

export function ProjectsSection() {
  // Map projects to resume format with colors
  const resumeProjects = projects.map((project, index) => {
    const colors = [
      'from-[#FFB6C1] to-[#FF95A8]',
      'from-[#87CEEB] to-[#6BB6D6]',
      'from-[#B298DC] to-[#9B7EDE]',
      'from-[#A8E6CF] to-[#7FD1AE]',
      'from-[#E8B4D4] to-[#D895C0]',
      'from-[#9DDBF5] to-[#7CC5E8]',
    ];
    
    return {
      title: project.title,
      category: `${project.category}${project.technologies ? ' | ' + project.technologies.slice(0, 2).join(', ') : ''}`,
      color: colors[index % colors.length]
    };
  });

  return (
    <section className="py-20 px-4 bg-[#FFF0F5]" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <FolderOpen className="w-8 h-8 text-[#fd6698]" />
          <h2 className="text-[#fd6698]">View My Work!</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeProjects.map((project, index) => (
            <button
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#87CEEB] focus-visible:ring-offset-2"
              aria-label={`View ${project.title} project`}
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <div className="text-center text-white p-6">
                  <h4 className="mb-2">{project.title}</h4>
                  <span className="text-sm md:px-3 md:py-1 md:bg-white/30 md:rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-[#FFB6C1]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity">
                <span className="px-6 py-3 bg-white text-[#FFB6C1] rounded-full">
                  View Project
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}