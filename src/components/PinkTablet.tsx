import React, { lazy, Suspense } from 'react';
import { ArrowRight, X } from 'lucide-react';
import type { TabletContent } from '../App';
import { LoadingSpinner } from './ui/LoadingSpinner';
import { sectionTitles } from '../data/portfolioData';

// Lazy load all tablet section components for better performance
const Projects = lazy(() => import('./tablet-sections/Projects').then(module => ({ default: module.Projects })));
const DesignShowcase = lazy(() => import('./tablet-sections/DesignShowcase').then(module => ({ default: module.DesignShowcase })));
const CaseAchievements = lazy(() => import('./tablet-sections/CaseAchievements').then(module => ({ default: module.CaseAchievements })));
const EducationCredentials = lazy(() => import('./tablet-sections/EducationCredentials').then(module => ({ default: module.EducationCredentials })));
const AboutMe = lazy(() => import('./tablet-sections/AboutMe').then(module => ({ default: module.AboutMe })));
const WorkWithMe = lazy(() => import('./tablet-sections/WorkWithMe').then(module => ({ default: module.WorkWithMe })));

interface PinkTabletProps {
  content: TabletContent;
  onClose: () => void;
  onNextCase: () => void;
  onNavigateToSection: (section: TabletContent) => void;
}

export function PinkTablet({ content, onClose, onNextCase, onNavigateToSection }: PinkTabletProps) {
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  // Define section order for navigation
  const sections: TabletContent[] = ['about', 'devProjects', 'designPortfolio', 'awards', 'education', 'workWithMe'];
  
  // Handle Escape key to close modal and Arrow keys for navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key closes modal
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Don't handle arrow keys if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Left Arrow - Previous section
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const currentIndex = sections.indexOf(content);
        const prevIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1;
        onNavigateToSection(sections[prevIndex]);
      }

      // Right Arrow - Next section
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNextCase();
      }

      // Home - First section
      if (e.key === 'Home') {
        e.preventDefault();
        onNavigateToSection(sections[0]);
      }

      // End - Last section
      if (e.key === 'End') {
        e.preventDefault();
        onNavigateToSection(sections[sections.length - 1]);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, content, onNextCase, onNavigateToSection]);

  // Focus close button when modal opens
  React.useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  const renderContent = () => {
    switch (content) {
      case 'devProjects':
        return <Projects filter="development" />;
      case 'designPortfolio':
        return <DesignShowcase />;
      case 'awards':
        return <CaseAchievements />;
      case 'education':
        return <EducationCredentials />;
      case 'about':
        return <AboutMe />;
      case 'workWithMe':
        return <WorkWithMe />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="
        relative w-full max-w-5xl h-[95vh] sm:max-h-[90vh]
        bg-gradient-to-br from-[#FFB6C1] to-[#FF95A8]
        rounded-[32px] p-2
        glow-pink
        animate-scale-in
      ">
        {/* Inner tablet screen */}
        <div className="relative bg-white rounded-[28px] h-full flex flex-col overflow-hidden">
          {/* Top bar with sticker buttons */}
          <div className="flex-shrink-0 bg-gradient-to-r from-[#FFF0F5] to-[#FFB6C1] px-3 sm:px-6 py-3 sm:py-4 border-b-4 border-[#FFB6C1]/30">
            {/* Mobile: Stack vertically, Desktop: Side by side */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
              {/* Desktop title (hidden on mobile) */}
              <h2 className="hidden sm:block text-[#fd6698] flex-1">{sectionTitles[content]}</h2>
              
              {/* Buttons (right-aligned on mobile, normal on desktop) */}
              <div className="flex gap-2 justify-end sm:justify-normal flex-shrink-0">
                <button
                  onClick={onNextCase}
                  className="
                    w-12 h-12 rounded-full bg-white
                    flex items-center justify-center
                    transition-all duration-200
                    hover:scale-110 hover:rotate-12
                    shadow-lg border-2 border-[#FFB6C1]
                    group
                  "
                  title="Next Section"
                  aria-label="Next Section"
                >
                  <ArrowRight className="w-5 h-5 text-[#FFB6C1] group-hover:text-[#87CEEB]" />
                </button>

                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  className="
                    w-12 h-12 rounded-full bg-white
                    flex items-center justify-center
                    transition-all duration-200
                    hover:scale-110 hover:rotate-12
                    shadow-lg border-2 border-red-400
                    group
                  "
                  title="Close"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-red-400 group-hover:text-red-600" />
                </button>
              </div>

              {/* Mobile title (shown on mobile only, below buttons) */}
              <h2 className="sm:hidden text-[#fd6698] text-center">{sectionTitles[content]}</h2>
            </div>
          </div>

          {/* Content area */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-6">
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="flex flex-col items-center gap-4">
                  <LoadingSpinner size="large" color="pink" />
                  <p className="text-[#fd6698] text-sm">Loading section...</p>
                </div>
              </div>
            }>
              {renderContent()}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}