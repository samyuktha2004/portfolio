import React, { useMemo, useState, useEffect } from 'react';
import { Palette, Github, Eye, Award, Mail, FileDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { StandardButton } from '../ui/StandardButton';
import { FilterPills, FilterOption } from '../ui/FilterPills';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { projects } from '../../data/portfolioData';
import { motion, AnimatePresence } from 'motion/react';

import tomocha1 from '@/imports/image.png';
import tomocha2 from '@/imports/image-1.png';
import interiorismo0 from '@/imports/Interiorismo.jpg';
import interiorismo1 from '@/imports/Interiorismo1.jpg';
import interiorismo2 from '@/imports/Interiorismo2.jpg';
import kalaikatha0 from '@/imports/Kalaikatha.jpg';
import kalaikatha1 from '@/imports/Kalaikatha1.jpg';
import kalaikatha2 from '@/imports/Kalaikatha2.jpg';
import kalaikatha3 from '@/imports/Kalaikatha3.jpg';
import kaalani0 from '@/imports/Kaalani.png';
import kaalani1 from '@/imports/Kaalani1.png';
import gdsc0 from '@/imports/gdsc1.png';
import gdsc1img from '@/imports/gdsc2.png';
import gdsc2img from '@/imports/gdsc3.png';
import gdsc3img from '@/imports/gdsc4.png';
import gdgLogo from '@/imports/GDGDevfestLogo.png';
import portfolioImg from '@/imports/portfolio.png';
import agriguruImg from '@/imports/agriguru.png';

type ProjectImage = { src: string };

const PROJECT_IMAGES: Record<string, ProjectImage[]> = {
  'Agriguru 🥇': [
    { src: agriguruImg },
  ],
  'Kalaikatha 🎨': [
    { src: kalaikatha0 },
    { src: kalaikatha1 },
    { src: kalaikatha2 },
    { src: kalaikatha3 },
  ],
  'Tomocha - Mental Health Companion 🏆': [
    { src: tomocha1 },
    { src: tomocha2 },
  ],
  'This Bubbly Portfolio 🌸': [
    { src: portfolioImg },
  ],
  'Kaalani - Sustainable Shoe Skins 🏆': [
    { src: kaalani0 },
    { src: kaalani1 },
  ],
  'Interiorismo': [
    { src: interiorismo0 },
    { src: interiorismo1 },
    { src: interiorismo2 },
  ],
  'Marketing and Branding - College Events and Clubs': [
    { src: gdsc0 },
    { src: gdsc1img },
    { src: gdsc2img },
    { src: gdsc3img },
  ],
  'Marketing and Branding - GDG Chennai and Kotlin User Group Chennai': [
    { src: gdgLogo },
  ],
};

const FILTER_OPTIONS: FilterOption[] = [
  { id: 'all',    label: 'All',    emoji: '🌟' },
  { id: 'ai-ml',  label: 'AI/ML',  emoji: '🤖' },
  { id: 'web',    label: 'Web',    emoji: '💻' },
  { id: 'mobile', label: 'Mobile', emoji: '📱' },
  { id: 'design', label: 'Design', emoji: '🎨' },
];

function ImageSlideshow({ images, title, resetKey }: { images: ProjectImage[]; title: string; resetKey?: string }) {
  const [index, setIndex] = useState(0);

  // Reset to first image when the active filter changes
  useEffect(() => { setIndex(0); }, [resetKey]);

  const isFirst = index === 0;
  const isLast = index === images.length - 1;

  return (
    <div className="mb-4 bg-white rounded-xl p-3 border border-[#FFB6C1]/20">
      {/* overflow-visible so hover:scale-110 on nav buttons isn't clipped */}
      <div className="relative aspect-video bg-[#FFF0F5] rounded-lg">
        {/* Image clipped to rounded bounds independently of nav buttons */}
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <ImageWithFallback
            src={images[index].src}
            alt={`${title} - Image ${index + 1}`}
            className="w-full h-full"
            imgClassName="object-contain"
          />
        </div>

        {images.length > 1 && (
          <>
            {!isFirst && (
              <button
                onClick={() => setIndex(i => i - 1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full shadow-md border-2 border-[#FFB6C1] flex items-center justify-center transition-all hover:scale-110 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 text-[#E9518D]" />
              </button>
            )}
            {!isLast && (
              <button
                onClick={() => setIndex(i => i + 1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full shadow-md border-2 border-[#FFB6C1] flex items-center justify-center transition-all hover:scale-110 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 text-[#E9518D]" />
              </button>
            )}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`rounded-full border border-[#FFB6C1]/30 transition-all ${
                    i === index ? 'bg-[#E9518D] w-5 h-2' : 'bg-white/70 hover:bg-white w-2 h-2'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

type AnyProject = typeof projects[number];

type ProjectExtras = { featured?: boolean; visualElements?: string[] };

function ProjectCard({ project, animated = false, filterKey }: { project: AnyProject; animated?: boolean; filterKey?: string }) {
  const p = project as AnyProject & ProjectExtras;
  const isCombined = project.projectType === 'combined';
  const isDesign = project.projectType === 'design';
  const isWinner = p.featured === true;
  const badgeBg = isCombined ? '#87CEEB' : isDesign ? '#FFB6C1' : '#B298DC';
  const badgeColor = isCombined ? '#2B7FB5' : isDesign ? '#E9518D' : '#7a5b8a';
  const projectImages = PROJECT_IMAGES[project.title];
  const hasImages = projectImages && projectImages.length > 0;

  const inner = (
    <div className="relative bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg hover:shadow-xl transition-shadow">
      {isWinner && (
        <div className="hidden md:flex absolute top-3 right-3 items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD700]/20 border border-[#D4AF37]/30 shadow-sm">
          <Award className="w-3 h-3 text-[#B8860B]" />
          <span className="text-xs font-medium text-[#B8860B]">Winner</span>
        </div>
      )}

      <div className="flex items-start mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-[#E9518D] break-words leading-snug">{project.title}</h3>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
              style={{ backgroundColor: `${badgeBg}40`, color: badgeColor, border: `1px solid ${badgeBg}` }}
            >
              {project.category}
            </span>
            {isCombined && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: '#87CEEB40', color: '#2B7FB5', border: '1px solid #87CEEB' }}>Dev + Design</span>
            )}
          </div>
          <p className="text-gray-700 mb-3 text-sm sm:text-base break-words">{project.description}</p>
        </div>
      </div>

      {hasImages && <ImageSlideshow images={projectImages} title={project.title} resetKey={filterKey} />}

      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.technologies.map((tech: string, i: number) => (
          <span key={i} className="px-2 sm:px-3 py-0.5 bg-[#FFB6C1]/20 text-[#E9518D] rounded-full text-xs sm:text-sm border border-[#FFB6C1]">{tech}</span>
        ))}
      </div>


      {p.visualElements?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {p.visualElements.map((el: string, i: number) => (
            <span key={i} className="px-2 py-0.5 bg-[#DDA0DD]/15 text-[#7D3C98] rounded-full text-xs border border-[#DDA0DD]/60">{el}</span>
          ))}
        </div>
      )}

      <div className="bg-white/50 rounded-xl p-3 sm:p-4 border border-[#FFB6C1]/20 mb-3">
        <h4 className="text-[#E9518D] text-sm mb-2">Key Highlights:</h4>
        <ul className="space-y-1">
          {project.highlights.map((highlight: string, i: number) => (
            <li key={i} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
              <span className="text-[#E9518D] mt-1 flex-shrink-0">✦</span>
              <span className="break-words">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {(project.links.github || project.links.demo || project.links.design) && (
        <div className="flex flex-wrap gap-2 justify-end">
          {project.links.github && <StandardButton href={project.links.github} icon={Github} label="GitHub" variant="github" external />}
          {project.links.demo && <StandardButton href={project.links.demo} icon={Eye} label="Live Demo" variant="primary" external />}
          {project.links.design && <StandardButton href={project.links.design} icon={Palette} label="Design" variant="secondary" external />}
        </div>
      )}
    </div>
  );

  if (!animated) return inner;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3 }}>
      {inner}
    </motion.div>
  );
}

function SingleProjectCard({ project }: { project: AnyProject }) {
  return <ProjectCard project={project} />;
}

interface ProjectsProps {
  projectFilter?: string | null;
  onClearFilter?: () => void;
}

export const Projects = React.memo(function Projects({ projectFilter, onClearFilter }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const handleFilterChange = (newFilter: string) => {
    setActiveFilter(newFilter);
    setShowAll(false);
  };

  const filteredProjects = useMemo(() => {
    switch (activeFilter) {
      case 'ai-ml':
        return projects.filter(p => (p as any).domain === 'AI/ML');
      case 'web':
        return projects.filter(p =>
          p.category?.toLowerCase().includes('web') ||
          p.category?.toLowerCase().includes('website')
        );
      case 'mobile':
        return projects.filter(p =>
          p.category?.toLowerCase().includes('mobile') ||
          p.category?.toLowerCase().includes('app')
        );
      case 'design':
        return projects.filter(p => p.projectType === 'design');
      default:
        return projects;
    }
  }, [activeFilter]);

  const isAllFilter = activeFilter === 'all';
  const displayedProjects = (isAllFilter && !showAll)
    ? filteredProjects.slice(0, 4)
    : filteredProjects;
  const hasMoreProjects = isAllFilter && filteredProjects.length > 4 && !showAll;

  // Single-project mode: opened from "View My Work" in the portfolio book
  if (projectFilter) {
    const single = projects.find(p => p.title === projectFilter);
    return (
      <div className="tablet-section -mt-3 sm:-mt-6">
        <div className="sticky top-0 z-50 bg-white -mx-3 sm:-mx-6 px-3 sm:px-6 py-2">
          <button
            onClick={onClearFilter}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border-2 bg-white hover:scale-105 transition-all"
            style={{ borderColor: '#E9518D', color: '#E9518D' }}
          >
            ← Back to all projects
          </button>
        </div>
        <div className="mt-4">
          {single ? (
            <SingleProjectCard project={single} />
          ) : (
            <p className="text-gray-500 text-sm">Project not found.</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 tablet-section -mt-3 sm:-mt-6">
      <div className="sticky top-0 z-50 -mx-3 sm:-mx-6 px-3 sm:px-6 py-2">
        <FilterPills
          options={FILTER_OPTIONS}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          className="mb-0"
        />
      </div>

      <AnimatePresence>
        {displayedProjects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} project={project} animated filterKey={activeFilter} />
        ))}
      </AnimatePresence>

      {hasMoreProjects && (
        <div className="flex justify-center">
          <StandardButton label="See More" variant="secondary" onClick={() => setShowAll(true)} />
        </div>
      )}

      {isAllFilter && showAll && (
        <motion.div
          className="bg-gradient-to-br from-[#FFB6C1]/20 to-[#87CEEB]/20 rounded-2xl p-6 sm:p-8 text-center border-2 border-[#FFB6C1]/30 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Like what you see? Let's create something amazing together! ✨
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <StandardButton
              icon={Mail}
              label="Work With Me"
              variant="primary"
              onClick={() => window.dispatchEvent(new CustomEvent('openWorkWithMe'))}
            />
            <StandardButton
              icon={FileDown}
              label="Download Resume"
              variant="download"
              onClick={() => window.print()}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
});
