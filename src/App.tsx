import React, { useState, useEffect } from 'react';
import { Room } from './components/DetectiveRoom';
import { PinkTablet } from './components/PinkTablet';
import { PortfolioBook } from './components/PortfolioBook';
import { Resume } from './components/Resume';
import { PrintResume } from './components/PrintResume';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { AppLoader } from './components/ui/AppLoader';
import { FortuneCookie } from './components/ui/FortuneCookie';

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
          <PortfolioBook onBackToRoom={() => setCurrentView('room')} />
        )}
        
        {tabletContent && (
          <PinkTablet
            content={tabletContent}
            onClose={handleCloseTablet}
            onNextCase={handleNextCase}
            onNavigateToSection={handleNavigateToSection}
          />
        )}
        
        <div className="resume-wrapper hidden print:block">
          <Resume />
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
        <PrintResume />
      </div>
    </ErrorBoundary>
  );
}