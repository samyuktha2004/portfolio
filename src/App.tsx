import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Room } from './components/DetectiveRoom';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { AppLoader } from './components/ui/AppLoader';
import { FortuneCookie } from './components/ui/FortuneCookie';

// Lazy load heavy components
const PinkTablet = lazy(() => import('./components/PinkTablet').then(m => ({ default: m.PinkTablet })));
const PortfolioBook = lazy(() => import('./components/PortfolioBook').then(m => ({ default: m.PortfolioBook })));
const Resume = lazy(() => import('./components/Resume').then(m => ({ default: m.Resume })));
const PrintResume = lazy(() => import('./components/PrintResume').then(m => ({ default: m.PrintResume })));

export type TabletContent = 'devProjects' | 'designPortfolio' | 'awards' | 'education' | 'about' | 'workWithMe' | null;

const TOTAL_SECTIONS = 6; // about, devProjects, designPortfolio, awards, education, workWithMe

export default function App() {
  const [currentView, setCurrentView] = useState<'room' | 'book'>('room');
  const [tabletContent, setTabletContent] = useState<TabletContent>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [visitedSections, setVisitedSections] = useState<Set<string>>(new Set());

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
          setCurrentView('book');
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentView, tabletContent]);

  // Listen for custom event to open Work With Me section
  useEffect(() => {
    const handleOpenWorkWithMe = () => {
      setTabletContent('workWithMe');
    };
    
    window.addEventListener('openWorkWithMe', handleOpenWorkWithMe);
    return () => window.removeEventListener('openWorkWithMe', handleOpenWorkWithMe);
  }, []);

  // Listen for custom event to open Design Portfolio section
  useEffect(() => {
    const handleOpenDesignPortfolio = () => {
      setCurrentView('room'); // Switch back to room view first
      setTimeout(() => {
        setTabletContent('designPortfolio'); // Then open the design portfolio tablet
      }, 100);
    };
    
    window.addEventListener('openDesignPortfolio', handleOpenDesignPortfolio);
    return () => window.removeEventListener('openDesignPortfolio', handleOpenDesignPortfolio);
  }, []);

  const handleHotspotClick = (content: TabletContent) => {
    setTabletContent(content);
  };

  const handleCloseTablet = () => {
    setTabletContent(null);
  };

  const handleNextCase = () => {
    const cases: TabletContent[] = ['devProjects', 'designPortfolio', 'awards', 'education', 'about', 'workWithMe'];
    const currentIndex = cases.indexOf(tabletContent!);
    const nextIndex = (currentIndex + 1) % cases.length;
    setTabletContent(cases[nextIndex]);
  };

  const handleNavigateToSection = (section: TabletContent) => {
    setTabletContent(section);
  };

  return (
    <ErrorBoundary>
      {isLoading && <AppLoader />}
      
      {/* Main website content */}
      <div className="website-content min-h-screen bg-gradient-to-br from-[#FFF0F5] to-[#FFB6C1]">
        {currentView === 'room' ? (
          <Room 
            onHotspotClick={handleHotspotClick}
            onViewBook={() => setCurrentView('book')}
            visitedSections={visitedSections}
          />
        ) : (
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF0F5] to-[#FFB6C1]">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-[#FFB6C1] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-[#fd6698] font-medium">Loading portfolio...</p>
              </div>
            </div>
          }>
            <PortfolioBook onBackToRoom={() => setCurrentView('room')} />
          </Suspense>
        )}
        
        {tabletContent && (
          <Suspense fallback={<div>Loading...</div>}>
            <PinkTablet
              content={tabletContent}
              onClose={handleCloseTablet}
              onNextCase={handleNextCase}
              onNavigateToSection={handleNavigateToSection}
            />
          </Suspense>
        )}
        
        <div className="resume-wrapper hidden print:block">
          <Suspense fallback={<div>Loading...</div>}>
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
        <Suspense fallback={<div>Loading...</div>}>
          <PrintResume />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}