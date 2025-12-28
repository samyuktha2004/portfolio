import React, { useState } from 'react';
import { MousePointerClick, Mail } from 'lucide-react';
import type { TabletContent } from '../App';
import { welcomeText, hotspotLabels, personalInfo, uiLabels } from '../data/portfolioData';
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';
import roomImage from 'figma:asset/fc8072305c895487984f67c88512f481002d6658.png';
import booksImage from 'figma:asset/76b3e8eb6ab2696346c99ef10bee519bb8dfdfbe.png';
import medalsImage from 'figma:asset/003f1ace414e3729d5cab667916cb98f861fa55b.png';
import smartphoneImage from 'figma:asset/acd866d765a4bca5386506ededc9cf4c32217541.png';
import laptopImage from 'figma:asset/94541025c76fea2a90848dd5563d283230d3bac5.png';
import characterImage from 'figma:asset/dee0266b75568162df59fbc7031b6fdac99f9650.png';
import workButtonImage from 'figma:asset/652822e5f27e8fc1e8744901437b250d2f44b782.png';
import skipButtonImage from 'figma:asset/85994fcc902aa4ad78c65c4b501a7b741e9c7fd3.png';

interface RoomProps {
  onHotspotClick: (content: TabletContent) => void;
  onViewBook: () => void;
  visitedSections: Set<string>;
}

// Exploration order for sequential hints
const HOTSPOT_ORDER: TabletContent[] = ['about', 'devProjects', 'designPortfolio', 'awards', 'education', 'workWithMe'];

// Custom tooltip positions for desktop/tablet layout
const TOOLTIP_CONFIG: Record<string, { position: string; align: string }> = {
  desktop: { position: 'top-[60%] left-[21%]', align: '-translate-x-1/2 translate-y-[20%]' },
  smartphone: { position: 'top-[40%] right-[15%]', align: 'translate-x-1/2 translate-y-[20%] translate-y-[10px]' },
  books: { position: 'bottom-[65%] right-[38%]', align: 'translate-y-[20%] translate-x-[40px]' },
  medals: { position: 'top-[30%] left-[27%]', align: '-translate-x-1/2 translate-y-[20%]' },
  character: { position: 'bottom-[10%] left-[52%]', align: '-translate-x-1/2 -translate-y-[110%]' },
};

export function Room({ onHotspotClick, onViewBook, visitedSections }: RoomProps) {
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [roomImageLoaded, setRoomImageLoaded] = useState(false);
  const [focusedHotspot, setFocusedHotspot] = useState<string | null>(null);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);
  const [skipButtonError, setSkipButtonError] = useState(false);
  const [workButtonError, setWorkButtonError] = useState(false);
  const [roomImageError, setRoomImageError] = useState(false);
  const [booksImageError, setBooksImageError] = useState(false);
  const [medalsImageError, setMedalsImageError] = useState(false);
  const [smartphoneImageError, setSmartphoneImageError] = useState(false);
  const [laptopImageError, setLaptopImageError] = useState(false);
  const [characterImageError, setCharacterImageError] = useState(false);

  // Show hint after 3 seconds of inactivity
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Reset hint after visiting a section (allows cursor to move to next hotspot)
  React.useEffect(() => {
    if (visitedSections.size > 0) {
      setShowHint(false); // Hide during transition
      const timer = setTimeout(() => {
        setShowHint(true); // Show on next unvisited after 3s
      }, 3500); // 500ms transition + 3s delay
      
      return () => clearTimeout(timer);
    }
  }, [visitedSections.size]);

  // Show keyboard help on first tab press
  React.useEffect(() => {
    const handleFirstTab = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setShowKeyboardHelp(true);
        setTimeout(() => setShowKeyboardHelp(false), 8000);
      }
    };

    document.addEventListener('keydown', handleFirstTab, { once: true });
    return () => document.removeEventListener('keydown', handleFirstTab);
  }, []);

  const handleHotspotClick = (content: TabletContent) => {
    setShowHint(false);
    onHotspotClick(content);
  };

  // Keyboard handler for hotspots
  const handleHotspotKeyDown = (e: React.KeyboardEvent, content: TabletContent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleHotspotClick(content);
    }
  };

  // Get next unvisited hotspot for hint system
  const nextUnvisitedHotspot = HOTSPOT_ORDER.find(hotspot => !visitedSections.has(hotspot));
  
  const handleNavigateToSection = (section: TabletContent) => {
    if (section === 'devProjects' || section === 'designPortfolio') {
      handleHotspotClick(section);
    }
  };

  const shouldShowHint = (content: TabletContent): boolean => {
    // Phone: cursor hint | Laptop: bounce animation
    return nextUnvisitedHotspot === content && !hoveredHotspot;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#FFF0F5] to-[#FFB6C1]/30">
      {/* Floating bubbles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}</div>

      {/* PHONE LAYOUT - Responsive with relative spacing */}
      <div className="md:hidden relative w-full h-full">
        {/* Container: Responsive, maintains aspect ratio */}
        <div className="relative w-full h-full max-w-[450px] mx-auto px-[6%]">
          
          {/* STEP 1: Header - Responsive positioning */}
          <div className="absolute left-[6%] right-[6%] top-[8vh] z-20">
            {/* Heading */}
            <div className="mb-[0.7vh]">
              <h1 className="text-[#fd6698] text-[7vw] leading-tight text-center">
                {welcomeText.title}
              </h1>
            </div>
            
            {/* Subtitle pill with progress */}
            <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-[#FFB6C1] py-[1.4vh] px-[5%]">
              <div className="flex items-center gap-[3vw]">
                <p className="text-[#fd6698] text-[5vw] leading-snug text-center flex-1">
                  {welcomeText.subtitle}
                </p>
                <div className="bg-[rgba(255,182,193,0.3)] rounded-full border border-[rgba(255,182,193,0.5)] h-[4vh] min-w-[14vw] flex items-center justify-center px-2">
                  <p className="text-[#fd6698] text-[5vw] leading-none font-medium">
                    {visitedSections.size}/6
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 2: Room - Responsive, vertically centered */}
          <div className="absolute left-[6%] right-[6%] top-1/2 -translate-y-1/2 aspect-square z-10">
            {/* Background Room Image - Priority loading (above the fold) */}
            <img
              src={roomImage}
              alt="Detective Room"
              className="absolute left-0 top-0 w-full h-full rounded-[6vw] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] object-contain"
              loading="eager"
              onLoad={() => setRoomImageLoaded(true)}
              onError={() => setRoomImageError(true)}
            />

            {/* Books - Education - Position: ~34% from left, ~5% from top */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={`absolute left-[34%] top-[5.4%] w-[27.8%] h-[29.6%] group transition-all duration-300 hover:scale-110 z-10`}
                  onMouseEnter={() => setHoveredHotspot('books')}
                  onMouseLeave={() => setHoveredHotspot(null)}
                  onClick={() => handleHotspotClick('education')}
                  onKeyDown={(e) => handleHotspotKeyDown(e, 'education')}
                  tabIndex={0}
                >
                  <div className={`relative ${hoveredHotspot === 'books' ? 'animate-bounce-slow' : ''}`}>
                    <img
                      src={booksImage}
                      alt="Education Books"
                      className="w-full h-full drop-shadow-2xl block"
                      onError={() => setBooksImageError(true)}
                    />
                    {hoveredHotspot === 'books' && (
                      <div className="absolute -inset-2 rounded-3xl border-4 border-[#87CEEB] animate-ping opacity-75" />
                    )}
                  </div>
                  {/* Cursor hint for phone - shows on next unvisited */}
                  {showHint && !hoveredHotspot && shouldShowHint('education') && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-50">
                      <div
                        className="bg-white/50 backdrop-blur-sm p-2.5 rounded-full shadow-lg border-2 border-[#FFB6C1]/70 animate-cursor-hint hover:bg-white/80 transition-all hover:scale-110"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleHotspotClick('education');
                        }}
                      >
                        <MousePointerClick className="w-5 h-5 text-[#fd6698]" />
                      </div>
                    </div>
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={4} className="bg-white border-2 border-[#FFB6C1] text-[#FFB6C1] rounded-full px-3 py-1.5 shadow-xl">
                {hotspotLabels.books}
              </TooltipContent>
            </Tooltip>

            {/* Medals - Awards - Position: ~9.6% from left, ~11.5% from top */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={`absolute left-[9.6%] top-[11.5%] w-[34.8%] h-[36.9%] group transition-all duration-300 hover:scale-110 z-10`}
                  onMouseEnter={() => setHoveredHotspot('medals')}
                  onMouseLeave={() => setHoveredHotspot(null)}
                  onClick={() => handleHotspotClick('awards')}
                  onKeyDown={(e) => handleHotspotKeyDown(e, 'awards')}
                  tabIndex={0}
                >
                  <div className={`relative ${hoveredHotspot === 'medals' ? 'animate-bounce-slow' : ''}`}>
                    <img
                      src={medalsImage}
                      alt="Medals and Awards"
                      className="w-full h-full drop-shadow-2xl block"
                      onError={() => setMedalsImageError(true)}
                    />
                    {hoveredHotspot === 'medals' && (
                      <div className="absolute -inset-2 rounded-3xl border-4 border-[#87CEEB] animate-ping opacity-75" />
                    )}
                  </div>
                  {/* Cursor hint for phone - shows on next unvisited */}
                  {showHint && !hoveredHotspot && shouldShowHint('awards') && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-50">
                      <div
                        className="bg-white/50 backdrop-blur-sm p-2.5 rounded-full shadow-lg border-2 border-[#FFB6C1]/70 animate-cursor-hint hover:bg-white/80 transition-all hover:scale-110"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleHotspotClick('awards');
                        }}
                      >
                        <MousePointerClick className="w-5 h-5 text-[#fd6698]" />
                      </div>
                    </div>
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={4} className="bg-white border-2 border-[#FFB6C1] text-[#FFB6C1] rounded-full px-3 py-1.5 shadow-xl">
                {hotspotLabels.medals}
              </TooltipContent>
            </Tooltip>

            {/* Smartphone - Design Portfolio - Position: ~74.6% from left, ~25.4% from top */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={`absolute left-[74.6%] top-[25.4%] w-[20.9%] h-[29.1%] group transition-all duration-300 hover:scale-110 z-10`}
                  onMouseEnter={() => setHoveredHotspot('smartphone')}
                  onMouseLeave={() => setHoveredHotspot(null)}
                  onClick={() => handleHotspotClick('designPortfolio')}
                  onKeyDown={(e) => handleHotspotKeyDown(e, 'designPortfolio')}
                  tabIndex={0}
                >
                  <div className={`relative ${hoveredHotspot === 'smartphone' ? 'animate-bounce-slow' : ''}`}>
                    <img
                      src={smartphoneImage}
                      alt="Design Showcase"
                      className="w-full h-full drop-shadow-2xl block"
                      onError={() => setSmartphoneImageError(true)}
                    />
                    {hoveredHotspot === 'smartphone' && (
                      <div className="absolute -inset-2 rounded-3xl border-4 border-[#87CEEB] animate-ping opacity-75" />
                    )}
                  </div>
                  {/* Cursor hint for phone - shows on next unvisited */}
                  {showHint && !hoveredHotspot && shouldShowHint('designPortfolio') && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-50">
                      <div
                        className="bg-white/50 backdrop-blur-sm p-2.5 rounded-full shadow-lg border-2 border-[#87CEEB]/70 animate-cursor-hint hover:bg-white/80 transition-all hover:scale-110"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleHotspotClick('designPortfolio');
                        }}
                      >
                        <MousePointerClick className="w-5 h-5 text-[#fd6698]" />
                      </div>
                    </div>
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={4} className="bg-white border-2 border-[#FFB6C1] text-[#FFB6C1] rounded-full px-3 py-1.5 shadow-xl">
                {hotspotLabels.smartphone}
              </TooltipContent>
            </Tooltip>

            {/* Laptop - Dev Projects - Container position: ~0.1% from left, ~31.4% from top */}
            <Tooltip>
              <div className="absolute left-[0.1%] top-[31.4%] w-[41.8%] h-[57.2%]">
                <div className={`relative w-full h-full ${hoveredHotspot === 'desktop' ? 'animate-bounce-slow' : ''}`}>
                  <img
                    src={laptopImage}
                    alt="Laptop - Development Projects"
                    className="absolute left-0 top-0 w-full h-full drop-shadow-2xl block pointer-events-none"
                    onError={() => setLaptopImageError(true)}
                  />
                </div>
                {/* Clickable area - ~25% from left, ~25% from top of laptop container */}
                <TooltipTrigger asChild>
                  <button
                    className={`absolute left-[25%] top-[25%] w-[50%] h-[50%] transition-all duration-300`}
                    onMouseEnter={() => setHoveredHotspot('desktop')}
                    onMouseLeave={() => setHoveredHotspot(null)}
                    onClick={() => handleHotspotClick('devProjects')}
                    onKeyDown={(e) => handleHotspotKeyDown(e, 'devProjects')}
                    tabIndex={0}
                  />
                </TooltipTrigger>
                {hoveredHotspot === 'desktop' && (
                  <div className="absolute -inset-2 rounded-3xl border-4 border-[#87CEEB] animate-ping opacity-75 pointer-events-none" />
                )}
                {/* Cursor hint for phone - shows on next unvisited */}
                {showHint && !hoveredHotspot && shouldShowHint('devProjects') && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-50">
                    <div
                      className="bg-white/50 backdrop-blur-sm p-2.5 rounded-full shadow-lg border-2 border-[#FFB6C1]/70 animate-cursor-hint hover:bg-white/80 transition-all hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleHotspotClick('devProjects');
                      }}
                    >
                      <MousePointerClick className="w-5 h-5 text-[#fd6698]" />
                    </div>
                  </div>
                )}
              </div>
              <TooltipContent side="bottom" sideOffset={4} className="bg-white border-2 border-[#FFB6C1] text-[#FFB6C1] rounded-full px-3 py-1.5 shadow-xl">
                {hotspotLabels.desktop}
              </TooltipContent>
            </Tooltip>

            {/* Character - About Me - Container position: ~28% from left, ~42% from top */}
            <Tooltip>
              <div className="absolute left-[28%] top-[42%] w-[48%] h-[48%]">
                <div className={`relative w-full h-full ${hoveredHotspot === 'character' ? 'animate-bounce-slow' : ''}`}>
                  <img
                    src={characterImage}
                    alt="About Me"
                    className="absolute left-0 top-0 w-full h-full drop-shadow-2xl block pointer-events-none"
                    onError={() => setCharacterImageError(true)}
                  />
                </div>
                {/* Clickable area - centered 40% of character container */}
                <TooltipTrigger asChild>
                  <button
                    className={`absolute left-[30%] top-[30%] w-[40%] h-[40%] transition-all duration-300`}
                    onMouseEnter={() => setHoveredHotspot('character')}
                    onMouseLeave={() => setHoveredHotspot(null)}
                    onClick={() => handleHotspotClick('about')}
                    onKeyDown={(e) => handleHotspotKeyDown(e, 'about')}
                    tabIndex={0}
                  />
                </TooltipTrigger>
                {hoveredHotspot === 'character' && (
                  <div className="absolute -inset-2 rounded-full border-4 border-[#FFB6C1] animate-ping opacity-75 pointer-events-none" />
                )}
                
                {/* Cursor hint for phone - shows on next unvisited */}
                {showHint && !hoveredHotspot && shouldShowHint('about') && (
                  <div className="absolute bottom-0 mb-2 left-1/2 transform -translate-x-1/2 cursor-pointer z-50">
                    <div
                      className="bg-white/50 backdrop-blur-sm p-2.5 rounded-full shadow-lg border-2 border-[#FFB6C1]/70 animate-cursor-hint hover:bg-white/80 transition-all hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleHotspotClick('about');
                      }}
                    >
                      <MousePointerClick className="w-5 h-5 text-[#fd6698]" />
                    </div>
                  </div>
                )}
              </div>
              <TooltipContent side="bottom" sideOffset={4} className="bg-white border-2 border-[#FFB6C1] text-[#FFB6C1] rounded-full px-3 py-1.5 shadow-xl">
                {hotspotLabels.character}
              </TooltipContent>
            </Tooltip>
          </div>

          {/* Bottom Buttons - Responsive positioning */}
          
          {/* Work With Me Button - Centered, ~69% from top */}
          <button
            onClick={() => handleHotspotClick('workWithMe')}
            className={`absolute left-1/2 -translate-x-1/2 top-[69vh] transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl overflow-hidden rounded-full z-20`}
          >
            {!workButtonError ? (
              <img
                src={workButtonImage}
                alt={uiLabels.buttons.workWithMe}
                className="w-[45vw] max-w-[200px] h-auto block"
                onError={() => setWorkButtonError(true)}
              />
            ) : (
              <div 
                className="w-[45vw] max-w-[200px] h-[10vh] text-white rounded-full flex items-center justify-center gap-2 cursor-pointer"
                style={{
                  background: 'linear-gradient(to bottom, #98d8eb 0%, #87CEEB 50%, #6fc4e0 100%)',
                  boxShadow: 'inset 0 5px 10px rgba(255, 255, 255, 0.6), 0 0 0 4px #6fc4e0, 0 0 0 8px white',
                  textShadow: '2px 2px 0px rgba(111, 196, 224, 0.8)',
                  fontWeight: 600
                }}
              >
                <Mail className="w-4 h-4" />
                <span className="text-[3.5vw]">{uiLabels.buttons.workWithMe}</span>
              </div>
            )}
            {/* Cursor hint for phone - shows on next unvisited */}
            {showHint && !hoveredHotspot && shouldShowHint('workWithMe') && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-50 pointer-events-none">
                <div className="bg-white/50 backdrop-blur-sm p-2.5 rounded-full shadow-lg border-2 border-[#FFB6C1]/70 animate-cursor-hint">
                  <MousePointerClick className="w-5 h-5 text-[#fd6698]" />
                </div>
              </div>
            )}
          </button>

          {/* Skip to Resume Button - Centered, ~77% from top */}
          <button
            onClick={onViewBook}
            className="absolute left-1/2 -translate-x-1/2 top-[77vh] transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl overflow-hidden rounded-full z-20"
          >
            {!skipButtonError ? (
              <img
                src={skipButtonImage}
                alt={uiLabels.buttons.skipToResume}
                className="w-[45vw] max-w-[200px] h-auto block"
                onError={() => setSkipButtonError(true)}
              />
            ) : (
              <div 
                className="w-[45vw] max-w-[200px] h-[15vh] text-white rounded-full flex items-center justify-center cursor-pointer"
                style={{
                  background: 'linear-gradient(to bottom, #ffc8d1 0%, #FFB6C1 50%, #f7a3af 100%)',
                  boxShadow: 'inset 0 5px 10px rgba(255, 255, 255, 0.6), 0 0 0 4px #f7a3af, 0 0 0 8px white',
                  textShadow: '2px 2px 0px rgba(219, 142, 153, 0.8)',
                  fontWeight: 600
                }}
              >
                <span className="text-[3.5vw]">{uiLabels.buttons.skipToResume}</span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* DESKTOP/TABLET LAYOUT - Keep existing responsive layout */}
      <div className="hidden md:block relative w-full h-full max-h-screen flex flex-col px-4 md:px-8 lg:px-20 py-4 md:py-6 lg:py-12">
        {/* Title - Compact on mobile, more spacing on laptop */}
        <div className="text-center flex-shrink-0 mb-2 md:mb-6 lg:mb-8">
          <h1 className="text-[#fd6698] text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-tight mb-1 md:mb-2 lg:mb-3">
            {welcomeText.title}
          </h1>
          <div className="inline-block bg-white/90 backdrop-blur-sm px-3 md:px-6 py-1.5 md:py-2 rounded-full shadow-lg border-2 border-[#FFB6C1]">
            <div className="flex items-center gap-2 md:gap-4">
              <p className="text-[#fd6698] text-xs sm:text-sm md:text-sm lg:text-sm">
                {welcomeText.subtitle}
              </p>
              {/* Progress indicator - nested inside the pill, pinned right */}
              <div className="bg-[#FFB6C1]/30 backdrop-blur-sm px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-[#FFB6C1]/50">
                <p className="text-[#fd6698] text-xs font-medium whitespace-nowrap">
                  {visitedSections.size}/6
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Isometric Room with Interactive Hotspots - Flexible height, more constrained on laptop */}
        <div className="relative mx-auto w-full max-w-5xl flex-1 flex items-center justify-center min-h-0 pb-4 md:pb-6 lg:pb-12">
          <div className="relative w-full md:w-[85%] lg:w-[45%] xl:w-[42%] isolate">
            {/* Background Room - Constrained to fit */}
            <img
              src={roomImage}
              alt="Detective Room"
              className="w-full h-auto max-h-full object-contain rounded-2xl md:rounded-3xl shadow-2xl relative z-0"
              onLoad={() => setRoomImageLoaded(true)}
              onError={() => setRoomImageError(true)}
            />

            {/* Books - Education & Credentials - Top Left */}
            <button
              className={`absolute bottom-[65%] right-[38%] group transition-all duration-300 hover:scale-110 hover:-translate-y-[5%] w-fit z-10 ${shouldShowHint('education') ? 'animate-bounce-hint' : ''}`}
              onMouseEnter={() => setHoveredHotspot('books')}
              onMouseLeave={() => setHoveredHotspot(null)}
              onClick={() => handleHotspotClick('education')}
              onKeyDown={(e) => handleHotspotKeyDown(e, 'education')}
              tabIndex={0}
            >
              <div className={`relative ${hoveredHotspot === 'books' ? 'animate-bounce-slow' : ''}`}>
                <img
                  src={booksImage}
                  alt="Education Books"
                  className="w-16 md:w-36 h-auto drop-shadow-2xl block"
                  onError={() => setBooksImageError(true)}
                />
                {hoveredHotspot === 'books' && (
                  <div className="absolute -inset-2 rounded-3xl border-4 border-[#87CEEB] animate-ping opacity-75" />
                )}
              </div>
            </button>

            {/* Medals - Case Achievements - Top Center */}
            <button
              className={`absolute top-[30%] left-[27%] transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 hover:scale-110 hover:-translate-y-[55%] w-fit z-10 ${shouldShowHint('awards') ? 'animate-bounce-hint' : ''}`}
              onMouseEnter={() => setHoveredHotspot('medals')}
              onMouseLeave={() => setHoveredHotspot(null)}
              onClick={() => handleHotspotClick('awards')}
              onKeyDown={(e) => handleHotspotKeyDown(e, 'awards')}
              tabIndex={0}
            >
              <div className={`relative ${hoveredHotspot === 'medals' ? 'animate-bounce-slow' : ''}`}>
                <img
                  src={medalsImage}
                  alt="Medals and Awards"
                  className="w-20 md:w-44 h-auto drop-shadow-2xl block"
                  onError={() => setMedalsImageError(true)}
                />
                {hoveredHotspot === 'medals' && (
                  <div className="absolute -inset-2 rounded-3xl border-4 border-[#87CEEB] animate-ping opacity-75" />
                )}
              </div>
            </button>

            {/* Smartphone - Design Showcase - Right Side - Visual Gallery */}
            <button
              className={`absolute top-[40%] right-[15%] transform translate-x-1/2 -translate-y-1/2 group transition-all duration-300 hover:scale-110 hover:-translate-y-[55%] w-fit z-10 ${shouldShowHint('designPortfolio') ? 'animate-bounce-hint' : ''}`}
              onMouseEnter={() => setHoveredHotspot('smartphone')}
              onMouseLeave={() => setHoveredHotspot(null)}
              onClick={() => handleHotspotClick('designPortfolio')}
              onKeyDown={(e) => handleHotspotKeyDown(e, 'designPortfolio')}
              tabIndex={0}
            >
              <div className={`relative ${hoveredHotspot === 'smartphone' ? 'animate-bounce-slow' : ''}`}>
                <img
                  src={smartphoneImage}
                  alt="Design Showcase - Visual Portfolio"
                  className="w-12 md:w-26 h-auto drop-shadow-2xl block"
                  onError={() => setSmartphoneImageError(true)}
                />
                {hoveredHotspot === 'smartphone' && (
                  <div className="absolute -inset-2 rounded-3xl border-4 border-[#FFB6C1] animate-ping opacity-75" />
                )}
              </div>
            </button>

            {/* Desktop PC - Code Investigations - Right Side */}
            <div className={`absolute top-[60%] left-[21%] transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 hover:scale-110 hover:-translate-y-[60%] z-10 ${shouldShowHint('devProjects') ? 'animate-bounce-hint' : ''}`}>
              <div className={`relative ${hoveredHotspot === 'desktop' ? 'animate-bounce-slow' : ''}`}>
                <img
                  src={laptopImage}
                  alt="Laptop - Development Projects"
                  className="w-24 md:w-52 h-auto drop-shadow-2xl block pointer-events-none"
                  onError={() => setLaptopImageError(true)}
                />
                {/* Smaller clickable area in the center */}
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] transition-all duration-300"
                  onMouseEnter={() => setHoveredHotspot('desktop')}
                  onMouseLeave={() => setHoveredHotspot(null)}
                  onClick={() => handleHotspotClick('devProjects')}
                  onKeyDown={(e) => handleHotspotKeyDown(e, 'devProjects')}
                  tabIndex={0}
                />
                {hoveredHotspot === 'desktop' && (
                  <div className="absolute -inset-2 rounded-3xl border-4 border-[#87CEEB] animate-ping opacity-75 pointer-events-none" />
                )}
              </div>
            </div>

            {/* Character - About Me */}
            <div className={`absolute bottom-[10%] left-[52%] transform -translate-x-1/2 group transition-all duration-300 hover:scale-110 hover:-translate-y-[5%] z-10 ${shouldShowHint('about') ? 'animate-bounce-hint' : ''}`}>
              <div className={`relative ${hoveredHotspot === 'character' ? 'animate-bounce-slow' : ''}`}>
                <img
                  src={characterImage}
                  alt="About Me"
                  className="w-[300px] md:w-[700px] h-auto drop-shadow-2xl block pointer-events-none"
                  onError={() => setCharacterImageError(true)}
                />
                {/* Smaller clickable area in the center */}
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] transition-all duration-300"
                  onMouseEnter={() => setHoveredHotspot('character')}
                  onMouseLeave={() => setHoveredHotspot(null)}
                  onClick={() => handleHotspotClick('about')}
                  onKeyDown={(e) => handleHotspotKeyDown(e, 'about')}
                  tabIndex={0}
                />
                {hoveredHotspot === 'character' && (
                  <div className="absolute -inset-2 rounded-full border-4 border-[#FFB6C1] animate-ping opacity-75 pointer-events-none" />
                )}
              </div>
            </div>

            {/* CUSTOM TOOLTIPS - Using hoveredHotspot state */}
            {hoveredHotspot && TOOLTIP_CONFIG[hoveredHotspot] && (
              <div 
                className={`absolute ${TOOLTIP_CONFIG[hoveredHotspot].position} transform ${TOOLTIP_CONFIG[hoveredHotspot].align} z-[999] pointer-events-none`}
              >
                <div className="bg-white px-2 md:px-4 py-1 md:py-2 border-2 border-[#FFB6C1] text-xs md:text-sm text-[#FFB6C1] rounded-full shadow-xl whitespace-nowrap animate-tooltip-appear">
                  {hotspotLabels[hoveredHotspot as keyof typeof hotspotLabels]}
                </div>
              </div>
            )}

            {/* Work With Me Button - Desktop only (left side, aligned to bottom) */}
            <button
              onClick={() => handleHotspotClick('workWithMe')}
              className={`hidden md:block absolute bottom-4 left-4 transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl z-[9999] overflow-hidden rounded-full ${shouldShowHint('workWithMe') ? 'animate-bounce-hint' : ''}`}
              tabIndex={0}
            >
              {!workButtonError ? (
                <img
                  src={workButtonImage}
                  alt={uiLabels.buttons.workWithMe}
                  className="h-[60px] lg:h-[80px] w-auto block"
                  onError={() => setWorkButtonError(true)}
                />
              ) : (
                <div 
                  className="h-[60px] lg:h-[80px] w-[105px] lg:w-[140px] text-white rounded-full flex items-center justify-center gap-2 cursor-pointer"
                  style={{
                    background: 'linear-gradient(to bottom, #98d8eb 0%, #87CEEB 50%, #6fc4e0 100%)',
                    boxShadow: 'inset 0 5px 10px rgba(255, 255, 255, 0.6), 0 0 0 4px #6fc4e0, 0 0 0 8px white',
                    textShadow: '2px 2px 0px rgba(111, 196, 224, 0.8)',
                    fontWeight: 600
                  }}
                >
                  <Mail className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="text-xs lg:text-sm">{uiLabels.buttons.workWithMe}</span>
                </div>
              )}
            </button>

            {/* Skip to Portfolio Book Button - Desktop only (right side) */}
            <button
              onClick={onViewBook}
              className="hidden md:block absolute bottom-4 right-4 transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl z-[9999] overflow-hidden rounded-full"
            >
              {!skipButtonError ? (
                <img
                  src={skipButtonImage}
                  alt={uiLabels.buttons.skipToResume}
                  className="h-[60px] lg:h-[80px] w-auto block"
                  onError={() => setSkipButtonError(true)}
                />
              ) : (
                <div 
                  className="h-[60px] lg:h-[80px] w-[105px] lg:w-[140px] text-white rounded-full flex items-center justify-center cursor-pointer"
                  style={{
                    background: 'linear-gradient(to bottom, #ffc8d1 0%, #FFB6C1 50%, #f7a3af 100%)',
                    boxShadow: 'inset 0 5px 10px rgba(255, 255, 255, 0.6), 0 0 0 4px #f7a3af, 0 0 0 8px white',
                    textShadow: '2px 2px 0px rgba(219, 142, 153, 0.8)',
                    fontWeight: 600
                  }}
                >
                  <span className="text-xs lg:text-sm">{uiLabels.buttons.skipToResume}</span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Bottom buttons - Mobile only (below room, centered) */}
        <div className="flex flex-col justify-center items-center gap-[18px] mt-4 md:hidden">
          <button
            onClick={() => handleHotspotClick('workWithMe')}
            className="transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl overflow-hidden rounded-full"
          >
            {!workButtonError ? (
              <img
                src={workButtonImage}
                alt={uiLabels.buttons.workWithMe}
                className="h-[110px] w-auto block"
                onError={() => setWorkButtonError(true)}
              />
            ) : (
              <div className="h-[110px] w-[240px] bg-[#87CEEB] text-white rounded-full shadow-lg flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">{uiLabels.buttons.workWithMe}</span>
              </div>
            )}
          </button>
          <button
            onClick={onViewBook}
            className="transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl overflow-hidden rounded-full"
          >
            {!skipButtonError ? (
              <img
                src={skipButtonImage}
                alt={uiLabels.buttons.skipToResume}
                className="h-[167px] w-auto block"
                onError={() => setSkipButtonError(true)}
              />
            ) : (
              <div className="h-[167px] w-[240px] bg-[#FFB6C1] text-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-sm font-medium">{uiLabels.buttons.skipToResume}</span>
              </div>
            )}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        @keyframes tooltip-appear {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-tooltip-appear {
          animation: tooltip-appear 0.3s ease-in-out;
        }

        @keyframes cursor-hint {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0.85); }
        }

        .animate-cursor-hint {
          animation: cursor-hint 1.2s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}