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
}

export function PortfolioBook({ onBackToRoom }: PortfolioBookProps) {
  const handleOpenVisualPortfolio = () => {
    // Dispatch custom event to open design portfolio tablet
    window.dispatchEvent(new CustomEvent('openDesignPortfolio'));
  };

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

      <HeroSection />
      <TldrSection />
      <AchievementsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 bg-[#fd6698] text-white text-center">
        <p>Made with love by Samyuktha S 💕</p>
      </footer>
    </div>
  );
}