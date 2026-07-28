import React, { useState, useEffect, lazy, Suspense, startTransition } from 'react';
import { Room } from './components/DetectiveRoom';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { AppLoader } from './components/ui/AppLoader';
import { FortuneCookie } from './components/ui/FortuneCookie';
import { SectionErrorBoundary } from './components/ui/SectionErrorBoundary';

// Lazy load heavy components
const PinkTablet = lazy(() => import('./components/PinkTablet').then(m => ({ default: m.PinkTablet })));
const PortfolioBook = lazy(() => import('./components/PortfolioBook').then(m => ({ default: m.PortfolioBook })));
const Resume = lazy(() => import('./components/Resume').then(m => ({ default: m.Resume })));
const PrintResume = lazy(() => import('./components/PrintResume').then(m => ({ default: m.PrintResume })));

export type TabletContent = 'devProjects' | 'events' | 'awards' | 'education' | 'about' | 'workWithMe' | null;

const TOTAL_SECTIONS = 6; // about, devProjects, events, awards, education, workWithMe

export default function App() {
  const [currentView, setCurrentView] = useState<'room' | 'book'>('room');
  const [tabletContent, setTabletContent] = useState<TabletContent>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [visitedSections, setVisitedSections] = useState<Set<string>>(new Set());
  const [selectedProjectTitle, setSelectedProjectTitle] = useState<string | null>(null);

  // Set lang attribute on the document root for screen reader language selection
  useEffect(() => {
    document.documentElement.lang = 'en';
  }, []);

  // Show loading screen briefly on initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Track visited sections
  useEffect(() => {
    if (tabletContent) {
      setVisitedSections(prev => new Set(prev).add(tabletContent));
    }
  }, [tabletContent]);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // 'B' key - Back to room from book view
      if (e.key === 'b' || e.key === 'B') {
        if (currentView === 'book') {
          setCurrentView('room');
        }
      }

      // 'R' key - Go to resume/book view
      if (e.key === 'r' || e.key === 'R') {
        if (!tabletContent) {
          startTransition(() => setCurrentView('book'));
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentView, tabletContent]);

  // Listen for custom event to open Work With Me section
  useEffect(() => {
    const handleOpenWorkWithMe = () => {
      startTransition(() => setTabletContent('workWithMe'));
    };

    window.addEventListener('openWorkWithMe', handleOpenWorkWithMe);
    return () => window.removeEventListener('openWorkWithMe', handleOpenWorkWithMe);
  }, []);

  // Listen for custom event to open Dev Projects section (optionally with a specific project)
  useEffect(() => {
    const handleOpenDevProjects = (e: Event) => {
      const title = (e as CustomEvent).detail?.projectTitle ?? null;
      setSelectedProjectTitle(title);
      startTransition(() => setTabletContent('devProjects'));
    };

    window.addEventListener('openDevProjects', handleOpenDevProjects);
    return () => window.removeEventListener('openDevProjects', handleOpenDevProjects);
  }, []);


  const handleHotspotClick = (content: TabletContent) => {
    startTransition(() => setTabletContent(content));
  };

  const handleCloseTablet = () => {
    setSelectedProjectTitle(null);
    startTransition(() => setTabletContent(null));
  };

  const handleNextCase = () => {
    setSelectedProjectTitle(null);
    const cases: TabletContent[] = ['devProjects', 'events', 'awards', 'education', 'about', 'workWithMe'];
    if (!tabletContent) return;
    const currentIndex = cases.indexOf(tabletContent);
    const nextIndex = (currentIndex + 1) % cases.length;
    startTransition(() => setTabletContent(cases[nextIndex]));
  };

  const handleNavigateToSection = (section: TabletContent) => {
    setSelectedProjectTitle(null);
    startTransition(() => setTabletContent(section));
  };

  return (
    <ErrorBoundary>
      {/* Skip to main content — Fix 13 */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#E9518D] focus:text-white focus:rounded-full focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {isLoading && <AppLoader />}

      {/* Main website content */}
      <div id="main-content" className="website-content min-h-screen bg-gradient-to-br from-[#FFF0F5] to-[#FFB6C1]">
        {currentView === 'room' ? (
          <Room
            onHotspotClick={handleHotspotClick}
            onViewBook={() => startTransition(() => setCurrentView('book'))}
            visitedSections={visitedSections}
          />
        ) : (
          <SectionErrorBoundary variant="resume" onGoHome={() => setCurrentView('room')}>
            <Suspense fallback={
              <div role="status" aria-label="Loading portfolio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF0F5] to-[#FFB6C1]">
                <div className="flex flex-col items-center gap-4">
                  <div aria-hidden="true" className="w-12 h-12 border-4 border-[#FFB6C1] border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-[#E9518D] font-medium">Loading portfolio...</p>
                </div>
              </div>
            }>
              <PortfolioBook onBackToRoom={() => setCurrentView('room')} />
            </Suspense>
          </SectionErrorBoundary>
        )}

        {tabletContent && (
          <Suspense fallback={
            <div role="status" aria-label="Loading section" className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-3">
                <div aria-hidden="true" className="w-10 h-10 border-4 border-[#FFB6C1] border-t-transparent rounded-full animate-spin" />
                <p className="text-white text-sm font-medium">Loading...</p>
              </div>
            </div>
          }>
            <PinkTablet
              content={tabletContent}
              onClose={handleCloseTablet}
              onNextCase={handleNextCase}
              onNavigateToSection={handleNavigateToSection}
              onSkipToResume={() => {
                handleCloseTablet();
                startTransition(() => setCurrentView('book'));
              }}
              projectFilter={selectedProjectTitle}
              onClearProjectFilter={() => setSelectedProjectTitle(null)}
            />
          </Suspense>
        )}

        <div className="resume-wrapper hidden print:block">
          <Suspense fallback={null}>
            <Resume />
          </Suspense>
        </div>

        {/* Fortune Cookie - only unlocked when all sections visited */}
        <FortuneCookie
          isUnlocked={visitedSections.size === TOTAL_SECTIONS}
          currentView={currentView}
          isTabletOpen={tabletContent !== null}
        />
      </div>

      {/* Print-only resume - separate from website content */}
      <div className="print-only-resume">
        <Suspense fallback={null}>
          <PrintResume />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
