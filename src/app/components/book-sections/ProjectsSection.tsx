import React from 'react';
import { FolderOpen } from 'lucide-react';
import { projects } from '../../data/portfolioData';

export function ProjectsSection() {
  // Map projects to resume format with colors
  const resumeProjects = projects.map((project, index) => {
    const colors = [
      { gradient: 'from-[#FFB6C1] to-[#FF95A8]', badgeBg: '#FFE4EC', badgeColor: '#b03060' }, // 0 Agriguru — pink
      { gradient: 'from-[#FFB5A0] to-[#F09070]', badgeBg: '#FFE8DC', badgeColor: '#A03828' }, // 1 Kalaikatha — coral
      { gradient: 'from-[#B298DC] to-[#9B7EDE]', badgeBg: '#EAD9F9', badgeColor: '#5a3d8a' }, // 2 Tomocha — purple
      { gradient: 'from-[#A8E6CF] to-[#7FD1AE]', badgeBg: '#D4F5E8', badgeColor: '#1a5c35' }, // 3 Portfolio — green
      { gradient: 'from-[#E8B4D4] to-[#D895C0]', badgeBg: '#F7DDEF', badgeColor: '#7a2060' }, // 4 Hazard Scout — mauve
      { gradient: 'from-[#F5D878] to-[#E8C040]', badgeBg: '#FFF3CC', badgeColor: '#9B6B00' }, // 5 Kaalani — golden
      { gradient: 'from-[#9DDBF5] to-[#7CC5E8]', badgeBg: '#D6EEF9', badgeColor: '#1a5a80' }, // 6 Interiorismo — sky blue
      { gradient: 'from-[#88D4CC] to-[#6ABFBA]', badgeBg: '#CCF0EE', badgeColor: '#1a6058' }, // 7 Marketing College — teal
      { gradient: 'from-[#C8B8E8] to-[#A898D4]', badgeBg: '#EDE0F9', badgeColor: '#4a3070' }, // 8 Marketing GDG — lavender
    ];
    const c = colors[Math.min(index, colors.length - 1)];
    return {
      title: project.title,
      category: `${project.category}${project.technologies ? ' | ' + project.technologies.slice(0, 2).join(', ') : ''}`,
      gradient: c.gradient,
      badgeBg: c.badgeBg,
      badgeColor: c.badgeColor,
    };
  });

  return (
    <section className="py-20 px-4 bg-[#FFF0F5]" id="projects" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <FolderOpen className="w-8 h-8 text-[#E9518D]" aria-hidden="true" />
          <h2 id="projects-heading" className="text-[#E9518D]">View My Work!</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeProjects.map((project, index) => (
            <button
              key={index}
              onClick={() => window.dispatchEvent(new CustomEvent('openDevProjects', { detail: { projectTitle: project.title } }))}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#87CEEB] focus-visible:ring-offset-2"
              aria-label={`View ${project.title} project`}
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <div className="text-center text-white p-6">
                  <h4 className="mb-3">{project.title}</h4>
                  <span
                    className="text-xs md:text-sm px-3 py-1 rounded-full font-medium border"
                    style={{ backgroundColor: project.badgeBg, color: project.badgeColor, borderColor: project.badgeColor }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-[#FFB6C1]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity">
                <span className="px-6 py-3 bg-white text-[#E9518D] rounded-full">
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