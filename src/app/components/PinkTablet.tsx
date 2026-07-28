import React, { lazy, Suspense } from 'react';
import { ArrowRight, X, ArrowLeft, Mail } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';
import type { TabletContent } from '../App';
import { LoadingSpinner } from './ui/LoadingSpinner';
import { SectionErrorBoundary } from './ui/SectionErrorBoundary';
import { sectionTitles } from '../data/portfolioData';
import { COLORS } from '@/constants/theme';
import { useFocusTrap } from '../hooks/useFocusTrap';

// Lazy load all tablet section components for better performance
const Projects = lazy(() => import('./tablet-sections/Projects').then(module => ({ default: module.Projects })));
const Events = lazy(() => import('./tablet-sections/Events').then(module => ({ default: module.Events })));
const CaseAchievements = lazy(() => import('./tablet-sections/CaseAchievements').then(module => ({ default: module.CaseAchievements })));
const EducationCredentials = lazy(() => import('./tablet-sections/EducationCredentials').then(module => ({ default: module.EducationCredentials })));
const AboutMe = lazy(() => import('./tablet-sections/AboutMe').then(module => ({ default: module.AboutMe })));
const WorkWithMe = lazy(() => import('./tablet-sections/WorkWithMe').then(module => ({ default: module.WorkWithMe })));

interface PinkTabletProps {
  content: TabletContent;
  onClose: () => void;
  onNextCase: () => void;
  onNavigateToSection: (section: TabletContent) => void;
  onSkipToResume: () => void;
  projectFilter?: string | null;
  onClearProjectFilter?: () => void;
}

export function PinkTablet({ content, onClose, onNextCase, onNavigateToSection, onSkipToResume, projectFilter, onClearProjectFilter }: PinkTabletProps) {
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const dialogTitleId = 'tablet-dialog-title';
  const trapRef = useFocusTrap<HTMLDivElement>(true);

  // Scroll back to top whenever the active section changes
  React.useEffect(() => {
    scrollContainerRef.current?.scrollTo({ top: 0 });
  }, [content]);

  // Define section order for navigation
  const sections: TabletContent[] = ['about', 'devProjects', 'events', 'awards', 'education', 'workWithMe'];

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

  // Focus the scroll container on open — not the close button, which would
  // trigger its Radix tooltip flash before the user has hovered anything.
  React.useEffect(() => {
    scrollContainerRef.current?.focus();
  }, []);

  const renderContent = () => {
    switch (content) {
      case 'devProjects':
        return <Projects projectFilter={projectFilter ?? null} onClearFilter={onClearProjectFilter} />;
      case 'events':
        return <Events />;
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

  // Get current and next section info — indexOf returns -1 if content is null
  const currentIndex = content ? sections.indexOf(content) : -1;
  const prevIndex = currentIndex <= 0 ? sections.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % sections.length;
  const isLastSection = content === 'workWithMe';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={dialogTitleId}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
    >
      <div
        ref={trapRef}
        className="
          relative w-full max-w-5xl h-[95vh] sm:max-h-[90vh]
          bg-gradient-to-br from-[#FFB6C1] to-[#FF95A8]
          rounded-[32px] p-2
          glow-pink
          animate-scale-in
        "
      >
        {/* Inner tablet screen */}
        <div className="relative bg-white rounded-[28px] h-full flex flex-col overflow-hidden">
          {/* Top bar with sticker buttons */}
          <div className="flex-shrink-0 bg-gradient-to-r from-[#FFF0F5] to-[#FFB6C1] px-3 sm:px-6 py-3 sm:py-4 border-b-4 border-[#FFB6C1]/30">
            {/* Mobile: Stack vertically, Desktop: Side by side */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
              {/* Desktop title — the canonical dialog label target */}
              <h2 id={dialogTitleId} className="hidden sm:block text-[#E9518D] flex-1">
                {content ? (sectionTitles as Record<string, string>)[content] : ''}
              </h2>

              {/* Buttons (right-aligned on mobile, normal on desktop) */}
              <div className="flex gap-2 justify-end sm:justify-normal flex-shrink-0">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={onNextCase}
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all duration-200 hover:scale-110 hover:rotate-12 shadow-lg border-2 border-[#FFB6C1]"
                      aria-label="Next Section"
                    >
                      <ArrowRight className="w-5 h-5 text-[#E9518D]" aria-hidden="true" />
                    </button>
                  </TooltipTrigger>
                  {/* rotate-12 intentionally scoped to match the button's hover tilt */}
                  <TooltipContent side="bottom" sideOffset={6} className="bg-white text-[#E9518D] border border-[#FFB6C1] rounded-full px-3 py-1 shadow-md text-xs rotate-12">
                    Next Section
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      ref={closeButtonRef}
                      onClick={onClose}
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all duration-200 hover:scale-110 hover:rotate-12 shadow-lg border-2 border-red-400"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5 text-red-400" aria-hidden="true" />
                    </button>
                  </TooltipTrigger>
                  {/* rotate-12 intentionally scoped to match the button's hover tilt */}
                  <TooltipContent side="bottom" sideOffset={6} className="bg-white text-red-500 border border-red-300 rounded-full px-3 py-1 shadow-md text-xs rotate-12">
                    Close
                  </TooltipContent>
                </Tooltip>
              </div>

              {/* Mobile title — aria-hidden since desktop h2 already labels the dialog */}
              <h2 aria-hidden="true" className="sm:hidden text-[#E9518D] text-center">
                {content ? (sectionTitles as Record<string, string>)[content] : ''}
              </h2>
            </div>
          </div>

          {/* Content area */}
          <div ref={scrollContainerRef} className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-6 outline-none" tabIndex={-1}>
            <SectionErrorBoundary
              variant="tablet"
              sectionKey={content ?? ''}
              onNextSection={onNextCase}
              onSkipToResume={onSkipToResume}
            >
              <Suspense fallback={
                <div role="status" aria-label="Loading section" className="flex items-center justify-center min-h-[400px]">
                  <div className="flex flex-col items-center gap-4">
                    <LoadingSpinner size="large" color="pink" />
                    <p className="text-[#E9518D] text-sm">Loading section...</p>
                  </div>
                </div>
              }>
                {renderContent()}
              </Suspense>
            </SectionErrorBoundary>

            {/* Footer Navigation - Only show if NOT on Work With Me */}
            {!isLastSection && (
              <div className="mt-8 pt-6 border-t-2 border-[#FFB6C1]/20">
                {/* Desktop: 3-column layout with Work With Me in center */}
                <div className="hidden sm:flex gap-3 items-center">
                  {/* Left: Previous */}
                  <button
                    onClick={() => onNavigateToSection(sections[prevIndex])}
                    className="flex-1 px-4 py-3 rounded-xl hover:scale-105
                      transition-all flex items-center justify-center gap-2 text-sm border-2"
                    style={{
                      backgroundColor: 'white',
                      borderColor: COLORS.PINK_TEXT,
                      color: COLORS.PINK_TEXT
                    }}
                  >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    <span>Previous Section</span>
                  </button>

                  {/* Center: Work With Me (Primary CTA) */}
                  <button
                    onClick={() => onNavigateToSection('workWithMe')}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-[#FFB6C1] to-[#FF95A8]
                      rounded-xl hover:shadow-lg transition-all hover:scale-110
                      flex items-center justify-center gap-2 text-white text-sm font-medium
                      border-2 shadow-md"
                    style={{
                      borderColor: COLORS.HOT_PINK
                    }}
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span>Work With Me</span>
                  </button>

                  {/* Right: Next Section */}
                  <button
                    onClick={onNextCase}
                    className="flex-1 px-4 py-3 rounded-xl hover:scale-105
                      transition-all flex items-center justify-center gap-2 text-sm font-medium border-2"
                    style={{
                      backgroundColor: `${COLORS.BLUE_BUTTON}1A`,
                      borderColor: COLORS.BLUE_TEXT,
                      color: COLORS.BLUE_TEXT
                    }}
                  >
                    <span>Next Section</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>

                {/* Mobile: Stacked layout - Navigation row + Full-width CTA */}
                <div className="flex flex-col gap-3 sm:hidden">
                  {/* Navigation row */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => onNavigateToSection(sections[prevIndex])}
                      className="flex-1 px-4 py-3 rounded-xl active:scale-95
                        transition-all flex items-center justify-center gap-2 text-sm border-2"
                      style={{
                        backgroundColor: 'white',
                        borderColor: COLORS.PRIMARY_PINK,
                        color: '#374151'
                      }}
                    >
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                      <span>Previous</span>
                    </button>

                    <button
                      onClick={onNextCase}
                      className="flex-1 px-4 py-3 rounded-xl active:scale-95
                        transition-all flex items-center justify-center gap-2 text-sm font-medium border-2"
                      style={{
                        backgroundColor: `${COLORS.BLUE_BUTTON}1A`,
                        borderColor: COLORS.BLUE_TEXT,
                        color: COLORS.BLUE_TEXT
                      }}
                    >
                      <span>Next</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Full-width Work With Me CTA */}
                  <button
                    onClick={() => onNavigateToSection('workWithMe')}
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#FFB6C1] to-[#FF95A8]
                      rounded-xl hover:shadow-lg transition-all active:scale-95
                      flex items-center justify-center gap-2 text-white text-sm font-medium
                      border-2 shadow-md"
                    style={{
                      borderColor: COLORS.HOT_PINK
                    }}
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span>Work With Me</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
