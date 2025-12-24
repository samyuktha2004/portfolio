import React from 'react';
import { ArrowRight, X } from 'lucide-react';
import type { TabletContent } from '../App';
import { Projects } from './tablet-sections/Projects';
import { DesignShowcase } from './tablet-sections/DesignShowcase';
import { CaseAchievements } from './tablet-sections/CaseAchievements';
import { EducationCredentials } from './tablet-sections/EducationCredentials';
import { AboutMe } from './tablet-sections/AboutMe';
import { WorkWithMe } from './tablet-sections/WorkWithMe';
import { sectionTitles } from '../data/portfolioData';

interface PinkTabletProps {
  content: TabletContent;
  onClose: () => void;
  onNextCase: () => void;
}

export function PinkTablet({ content, onClose, onNextCase }: PinkTabletProps) {
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
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}