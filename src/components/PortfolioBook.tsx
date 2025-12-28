import React, { lazy, Suspense } from 'react';
import { ArrowLeft, Sparkles, Eye, Palette } from 'lucide-react';
import { LoadingSpinner } from './ui/LoadingSpinner';

// Lazy load book sections for better performance
const HeroSection = lazy(() => import('./book-sections/HeroSection').then(module => ({ default: module.HeroSection })));
const TldrSection = lazy(() => import('./book-sections/TldrSection').then(module => ({ default: module.TldrSection })));
const AchievementsSection = lazy(() => import('./book-sections/AchievementsSection').then(module => ({ default: module.AchievementsSection })));
const ExperienceSection = lazy(() => import('./book-sections/ExperienceSection').then(module => ({ default: module.ExperienceSection })));
const ProjectsSection = lazy(() => import('./book-sections/ProjectsSection').then(module => ({ default: module.ProjectsSection })));
const ContactSection = lazy(() => import('./book-sections/ContactSection').then(module => ({ default: module.ContactSection })));

interface PortfolioBookProps {
  onBackToRoom: () => void;
}

export function PortfolioBook({ onBackToRoom }: PortfolioBookProps) {
  const handleOpenVisualPortfolio = () => {
    // Dispatch custom event to open design portfolio tablet
    window.dispatchEvent(new CustomEvent('openDesignPortfolio'));
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
          className="px-4 sm:px-6 py-3 bg-[#FFB6C1] text-white rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2 text-sm sm:text-base font-medium min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span className="hidden sm:inline">Back to Home</span>
          <span className="sm:hidden">Back</span>
        </button>

        {/* Visual Portfolio button - right side */}
        <button
          onClick={handleOpenVisualPortfolio}
          className="px-4 sm:px-6 py-3 bg-[#FFB6C1] text-white rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2 text-sm sm:text-base font-medium min-h-[44px] whitespace-nowrap"
        >
          <Palette className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span className="hidden sm:inline">Visual Portfolio</span>
          <span className="sm:hidden">Portfolio</span>
        </button>
      </div>

      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center gap-4">
            <LoadingSpinner size="large" color="pink" />
            <p className="text-[#fd6698]">Loading portfolio...</p>
          </div>
        </div>
      }>
        <HeroSection />
        <TldrSection />
        <AchievementsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </Suspense>

      {/* Footer */}
      <footer className="py-8 bg-[#fd6698] text-white text-center">
        <p>Made with love by Samyuktha S 💕</p>
      </footer>
    </div>
  );
}