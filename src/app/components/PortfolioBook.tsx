import React from 'react';
import { ArrowLeft, Sparkles, Eye, Palette } from 'lucide-react';
import { HeroSection } from './book-sections/HeroSection';
import { TldrSection } from './book-sections/TldrSection';
import { AchievementsSection } from './book-sections/AchievementsSection';
import { ExperienceSection } from './book-sections/ExperienceSection';
import { ProjectsSection } from './book-sections/ProjectsSection';
import { ContactSection } from './book-sections/ContactSection';

interface PortfolioBookProps {
  onBackToRoom: () => void;
  onPreloadTablet: () => void;
}

export function PortfolioBook({ onBackToRoom, onPreloadTablet }: PortfolioBookProps) {
  const handleOpenProjects = () => {
    window.dispatchEvent(new CustomEvent('openDevProjects'));
  };

  // Keyboard shortcuts for better accessibility
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't handle keyboard shortcuts if user is typing in an input/textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Escape key - Back to Room
      if (e.key === 'Escape') {
        onBackToRoom();
        return;
      }

      // Ctrl/Cmd + P - Download Resume (Override default print)
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault(); // Prevent default print dialog
        const downloadButton = document.querySelector('[aria-label="Download Resume"]') as HTMLButtonElement;
        downloadButton?.click();
        return;
      }

      // Ctrl/Cmd + D - Download Resume (Alternative shortcut)
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        const downloadButton = document.querySelector('[aria-label="Download Resume"]') as HTMLButtonElement;
        downloadButton?.click();
        return;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onBackToRoom]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation buttons - aligned horizontally */}
      <div className="fixed top-4 left-4 right-4 z-50 flex justify-between items-center">
        {/* Back button - left side */}
        <button
          onClick={onBackToRoom}
          className="px-4 sm:px-6 py-3 bg-[#E9518D] text-white rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2 text-sm sm:text-base font-medium min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span className="hidden sm:inline">Back to Home</span>
          <span className="sm:hidden">Back</span>
        </button>

        {/* Visual Portfolio button - right side */}
        <button
          onClick={handleOpenProjects}
          onMouseEnter={onPreloadTablet}
          onFocus={onPreloadTablet}
          className="px-4 sm:px-6 py-3 bg-[#E9518D] text-white rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2 text-sm sm:text-base font-medium min-h-[44px] whitespace-nowrap"
        >
          <Palette className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span className="hidden sm:inline">View Projects</span>
          <span className="sm:hidden">Projects</span>
        </button>
      </div>

      <HeroSection />
      <TldrSection />
      <AchievementsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 bg-[#E9518D] text-white text-center">
        <p>Made with love by Samyuktha S <span aria-hidden="true">💕</span></p>
      </footer>
    </div>
  );
}
