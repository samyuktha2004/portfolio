import React, { useState } from 'react';
import { FileDown } from 'lucide-react';
import type { TabletContent } from '../App';
import { welcomeText, hotspotLabels, uiLabels } from '../data/portfolioData';
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';
import { WorkWithMeButton, SkipButton } from './ui/RoomActionButton';
import { CursorHint } from './ui/CursorHint';
import roomImage from '../../assets/core/detective-room.png';
import booksImage from '../../assets/core/education-books.png';
import medalsImage from '../../assets/core/awards-medals.png';
import smartphoneImage from '../../assets/core/events-phone.png';
import laptopImage from '../../assets/core/projects-laptop.png';
import characterImage from '../../assets/core/portfolio-character.png';
import { downloadResume } from '../utils/downloadResume';

interface RoomProps {
  onHotspotClick: (content: TabletContent) => void;
  onViewBook: () => void;
  onPreloadTablet: () => void;
  onPreloadBook: () => void;
  visitedSections: Set<string>;
}

// Exploration order for sequential hints
const HOTSPOT_ORDER: Exclude<TabletContent, null>[] = ['about', 'awards', 'devProjects', 'events', 'education', 'workWithMe'];

// Custom tooltip positions for desktop/tablet layout
const TOOLTIP_CONFIG: Record<string, { position: string; align: string }> = {
  desktop: { position: 'top-[60%] left-[21%]', align: '-translate-x-1/2 translate-y-[20%]' },
  smartphone: { position: 'top-[40%] right-[15%]', align: 'translate-x-1/2 translate-y-[20%] translate-y-[10px]' },
  books: { position: 'bottom-[65%] right-[38%]', align: 'translate-y-[20%] translate-x-[40px]' },
  medals: { position: 'top-[30%] left-[27%]', align: '-translate-x-1/2 translate-y-[20%]' },
  character: { position: 'bottom-[10%] left-[52%]', align: '-translate-x-1/2 -translate-y-[110%]' },
};

// Generated once — Math.random() in JSX re-randomises every render
const BUBBLES = Array.from({ length: 15 }, () => ({
  width: Math.random() * 100 + 50,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 5,
  duration: Math.random() * 10 + 10,
}));

export function Room({ onHotspotClick, onViewBook, onPreloadTablet, onPreloadBook, visitedSections }: RoomProps) {
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showCharacterPrompt, setShowCharacterPrompt] = useState(false);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const setImgError = (key: string) => setImgErrors(prev => ({ ...prev, [key]: true }));

  // Show hint after 3 seconds of inactivity
  React.useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (visitedSections.size > 0) {
      setShowCharacterPrompt(false);
      return;
    }

    const timer = setTimeout(() => setShowCharacterPrompt(true), 5000);
    return () => clearTimeout(timer);
  }, [visitedSections.size]);

  // Reset hint after visiting a section
  React.useEffect(() => {
    if (visitedSections.size > 0) {
      setShowHint(false);
      const timer = setTimeout(() => setShowHint(true), 3500);
      return () => clearTimeout(timer);
    }
  }, [visitedSections.size]);

  const handleHotspotClick = (content: TabletContent) => {
    setShowHint(false);
    setShowCharacterPrompt(false);
    onHotspotClick(content);
  };

  const handleHotspotKeyDown = (e: React.KeyboardEvent, content: TabletContent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleHotspotClick(content);
    }
  };

  const nextUnvisitedHotspot = HOTSPOT_ORDER.find(hotspot => !visitedSections.has(hotspot));

  const shouldShowHint = (content: TabletContent): boolean =>
    nextUnvisitedHotspot === content && !hoveredHotspot;

  // Shared hover/focus handlers — blur is debounced so tabbing between adjacent
  // hotspots doesn't momentarily clear the tooltip (onBlur fires before onFocus).
  const blurTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const hotspotHandlers = (key: string) => ({
    onMouseEnter: () => { onPreloadTablet(); if (blurTimer.current) clearTimeout(blurTimer.current); setHoveredHotspot(key); },
    onMouseLeave: () => { blurTimer.current = setTimeout(() => setHoveredHotspot(null), 0); },
    onFocus: () => { onPreloadTablet(); if (blurTimer.current) clearTimeout(blurTimer.current); setHoveredHotspot(key); },
    onBlur: () => { blurTimer.current = setTimeout(() => setHoveredHotspot(null), 0); },
  });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#FFF0F5] to-[#FFB6C1]/30">
      {/* Floating bubbles background — decorative, hidden from AT */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        {BUBBLES.map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 animate-float"
            style={{
              width: `${b.width}px`,
              height: `${b.width}px`,
              left: `${b.left}%`,
              top: `${b.top}%`,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
            }}
          />
        ))}
      </div>

      {/* ── PHONE LAYOUT ── */}
      <div className="md:hidden relative w-full h-full">
        <div className="relative w-full h-full max-w-[450px] mx-auto px-[6%]">

          {/* Header */}
          <div className="absolute left-[6%] right-[6%] top-[4vh] z-20">
            {/* aria-hidden: the canonical h1 lives in the desktop layout below */}
            <div className="mb-[0.7vh]">
              <h1 aria-hidden="true" className="text-[#E9518D] text-[7vw] leading-tight text-center">
                {welcomeText.title}
              </h1>
            </div>

            <div className="flex items-center justify-center gap-2">
              <div className="min-w-0 flex-1 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-[#FFB6C1] py-[1.4vh] px-[4%]">
                <div className="flex items-center gap-[2vw]">
                  <p className="text-[#E9518D] text-[4.2vw] leading-snug text-center flex-1">
                    {welcomeText.subtitle}
                  </p>
                  <div
                    className="bg-[rgba(255,182,193,0.3)] rounded-full border border-[rgba(255,182,193,0.5)] h-[4vh] min-w-[14vw] flex items-center justify-center px-2"
                    aria-label={`${visitedSections.size} of 6 sections visited`}
                  >
                    <p aria-hidden="true" className="text-[#E9518D] text-[5vw] leading-none font-medium">
                      {visitedSections.size}/6
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={downloadResume}
                className="h-11 w-11 flex-shrink-0 rounded-full bg-[#9B7EDE] text-white border-2 border-[#7a5b8a] shadow-sm flex items-center justify-center hover:scale-105 transition-transform"
                aria-label="Download resume"
              >
                <FileDown className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Room image + hotspots */}
          <div className="absolute left-[6%] right-[6%] top-[46%] -translate-y-1/2 aspect-square z-10">
            <img
              src={roomImage}
              alt="Detective Room"
              className="absolute left-0 top-0 w-full h-full rounded-[6vw] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] object-contain"
              loading="eager"
            />

            {/* Books — Education */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className="absolute left-[34%] top-[5.4%] w-[27.8%] h-[29.6%] group transition-all duration-300 hover:scale-110 z-10"
                  aria-label={hotspotLabels.books}
                  onClick={() => handleHotspotClick('education')}
                  onKeyDown={(e) => handleHotspotKeyDown(e, 'education')}
                  {...hotspotHandlers('books')}
                >
                  <div className={`relative ${hoveredHotspot === 'books' ? 'animate-bounce-slow' : ''}`}>
                    <img src={booksImage} alt="" aria-hidden="true" className="w-full h-full drop-shadow-2xl block" onError={() => setImgError("books")} />
                    {hoveredHotspot === 'books' && <div aria-hidden="true" className="absolute -inset-2 rounded-3xl border-4 border-[#87CEEB] animate-ping opacity-75" />}
                  </div>
                  <CursorHint show={showHint && shouldShowHint('education')} />
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={4} className="bg-white border-2 border-[#FFB6C1] text-[#E9518D] rounded-full px-3 py-1.5 shadow-xl">
                {hotspotLabels.books}
              </TooltipContent>
            </Tooltip>

            {/* Medals — Awards */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className="absolute left-[9.6%] top-[11.5%] w-[34.8%] h-[36.9%] group transition-all duration-300 hover:scale-110 z-10"
                  aria-label={hotspotLabels.medals}
                  onClick={() => handleHotspotClick('awards')}
                  onKeyDown={(e) => handleHotspotKeyDown(e, 'awards')}
                  {...hotspotHandlers('medals')}
                >
                  <div className={`relative ${hoveredHotspot === 'medals' ? 'animate-bounce-slow' : ''}`}>
                    <img src={medalsImage} alt="" aria-hidden="true" className="w-full h-full drop-shadow-2xl block" onError={() => setImgError("medals")} />
                    {hoveredHotspot === 'medals' && <div aria-hidden="true" className="absolute -inset-2 rounded-3xl border-4 border-[#87CEEB] animate-ping opacity-75" />}
                  </div>
                  <CursorHint show={showHint && shouldShowHint('awards')} />
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={4} className="bg-white border-2 border-[#FFB6C1] text-[#E9518D] rounded-full px-3 py-1.5 shadow-xl">
                {hotspotLabels.medals}
              </TooltipContent>
            </Tooltip>

            {/* Smartphone — Events */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className="absolute left-[74.6%] top-[25.4%] w-[20.9%] h-[29.1%] group transition-all duration-300 hover:scale-110 z-10"
                  aria-label={hotspotLabels.smartphone}
                  onClick={() => handleHotspotClick('events')}
                  onKeyDown={(e) => handleHotspotKeyDown(e, 'events')}
                  {...hotspotHandlers('smartphone')}
                >
                  <div className={`relative ${hoveredHotspot === 'smartphone' ? 'animate-bounce-slow' : ''}`}>
                    <img src={smartphoneImage} alt="" aria-hidden="true" className="w-full h-full drop-shadow-2xl block" onError={() => setImgError("smartphone")} />
                    {hoveredHotspot === 'smartphone' && <div aria-hidden="true" className="absolute -inset-2 rounded-3xl border-4 border-[#87CEEB] animate-ping opacity-75" />}
                  </div>
                  <CursorHint show={showHint && shouldShowHint('events')} />
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={4} className="bg-white border-2 border-[#FFB6C1] text-[#E9518D] rounded-full px-3 py-1.5 shadow-xl">
                {hotspotLabels.smartphone}
              </TooltipContent>
            </Tooltip>

            {/* Laptop — Dev Projects */}
            <Tooltip>
              <div className="absolute left-[0.1%] top-[31.4%] w-[41.8%] h-[57.2%]">
                <div className={`relative w-full h-full ${hoveredHotspot === 'desktop' ? 'animate-bounce-slow' : ''}`}>
                  <img src={laptopImage} alt="" aria-hidden="true" className="absolute left-0 top-0 w-full h-full drop-shadow-2xl block pointer-events-none" onError={() => setImgError("laptop")} />
                </div>
                <TooltipTrigger asChild>
                  <button
                    className="absolute left-[25%] top-[25%] w-[50%] h-[50%] transition-all duration-300"
                    aria-label={hotspotLabels.desktop}
                    onClick={() => handleHotspotClick('devProjects')}
                    onKeyDown={(e) => handleHotspotKeyDown(e, 'devProjects')}
                    {...hotspotHandlers('desktop')}
                  />
                </TooltipTrigger>
                {hoveredHotspot === 'desktop' && <div aria-hidden="true" className="absolute -inset-2 rounded-3xl border-4 border-[#87CEEB] animate-ping opacity-75 pointer-events-none" />}
                <CursorHint show={showHint && shouldShowHint('devProjects')} />
              </div>
              <TooltipContent side="bottom" sideOffset={4} className="bg-white border-2 border-[#FFB6C1] text-[#E9518D] rounded-full px-3 py-1.5 shadow-xl">
                {hotspotLabels.desktop}
              </TooltipContent>
            </Tooltip>

            {/* Character — About Me */}
            <Tooltip>
              <div className="absolute left-[28%] top-[42%] w-[48%] h-[48%]">
                <div className={`relative w-full h-full ${hoveredHotspot === 'character' ? 'animate-bounce-slow' : ''}`}>
                  <img src={characterImage} alt="" aria-hidden="true" className="absolute left-0 top-0 w-full h-full drop-shadow-2xl block pointer-events-none" onError={() => setImgError("character")} />
                  {showCharacterPrompt && (
                    <button
                      onClick={() => handleHotspotClick('about')}
                      className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap rounded-full border-2 border-[#FFB6C1] bg-white px-3 py-2 text-xs font-medium text-[#E9518D] shadow-lg animate-tooltip-appear"
                    >
                      Hi! Click me!
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-[6px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-[#FFB6C1] bg-white"
                      />
                    </button>
                  )}
                </div>
                <TooltipTrigger asChild>
                  <button
                    className="absolute left-[30%] top-[30%] w-[40%] h-[40%] transition-all duration-300"
                    aria-label={hotspotLabels.character}
                    onClick={() => handleHotspotClick('about')}
                    onKeyDown={(e) => handleHotspotKeyDown(e, 'about')}
                    {...hotspotHandlers('character')}
                  />
                </TooltipTrigger>
                {hoveredHotspot === 'character' && <div aria-hidden="true" className="absolute -inset-2 rounded-full border-4 border-[#FFB6C1] animate-ping opacity-75 pointer-events-none" />}
                <CursorHint show={showHint && shouldShowHint('about')} className="absolute bottom-0 mb-2 left-1/2 -translate-x-1/2" />
              </div>
              <TooltipContent side="bottom" sideOffset={4} className="bg-white border-2 border-[#FFB6C1] text-[#E9518D] rounded-full px-3 py-1.5 shadow-xl">
                {hotspotLabels.character}
              </TooltipContent>
            </Tooltip>
          </div>

          {/* Work With Me + Skip — phone, stacked, bottom-anchored */}
          <div className="absolute bottom-[4vh] left-0 right-0 flex flex-col items-center gap-[2vh] z-20">
            <WorkWithMeButton
              onClick={() => handleHotspotClick('workWithMe')}
              onPreload={onPreloadTablet}
              wrapperClassName=""
              imgClassName="w-[54vw] max-w-[220px] h-auto block"
              fallbackClassName="w-[54vw] max-w-[220px] h-[10vh] text-[4vw]"
              fallbackStyle={{ background: 'linear-gradient(to bottom, #98d8eb 0%, #87CEEB 50%, #6fc4e0 100%)', boxShadow: 'inset 0 5px 10px rgba(255,255,255,0.6), 0 0 0 4px #6fc4e0, 0 0 0 8px white', fontWeight: 600 }}
              showHint={showHint && shouldShowHint('workWithMe')}
            />
            <SkipButton
              onClick={onViewBook}
              onPreload={onPreloadBook}
              wrapperClassName=""
              imgClassName="w-[54vw] max-w-[220px] h-auto block"
              fallbackClassName="w-[54vw] max-w-[220px] h-[10vh] text-[4vw]"
              fallbackStyle={{ background: 'linear-gradient(to bottom, #ffc8d1 0%, #FFB6C1 50%, #f7a3af 100%)', boxShadow: 'inset 0 5px 10px rgba(255,255,255,0.6), 0 0 0 4px #f7a3af, 0 0 0 8px white', fontWeight: 600 }}
            />
          </div>
        </div>
      </div>

      {/* ── DESKTOP/TABLET LAYOUT ── */}
      <div className="hidden md:block relative w-full h-full max-h-screen flex flex-col px-4 md:px-8 lg:px-20 py-4 md:py-6 lg:py-12">
        <div className="text-center flex-shrink-0 mb-2 md:mb-6 lg:mb-8">
          {/* Canonical h1 for screen readers */}
          <h1 className="text-[#E9518D] text-xl sm:text-[26px] md:text-[26px] lg:text-[32px] leading-tight mb-1 md:mb-2 lg:mb-3">
            {welcomeText.title}
          </h1>
          <div className="flex items-center justify-center gap-2">
            <div className="inline-block bg-white/90 backdrop-blur-sm px-3 md:px-6 py-1.5 md:py-2 rounded-full shadow-lg border-2 border-[#FFB6C1]">
              <div className="flex items-center gap-2 md:gap-4">
                <p className="text-[#E9518D] text-[13px] sm:text-[15px] md:text-[15px] lg:text-[17px]">
                  {welcomeText.subtitle}
                </p>
                <div
                  className="bg-[#FFB6C1]/30 backdrop-blur-sm px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-[#FFB6C1]/50"
                  aria-label={`${visitedSections.size} of 6 sections visited`}
                >
                  <p aria-hidden="true" className="text-[#E9518D] text-xs font-medium whitespace-nowrap">
                    {visitedSections.size}/6
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={downloadResume}
              className="min-h-[44px] px-3 rounded-full bg-[#9B7EDE] text-white border-2 border-[#7a5b8a] shadow-sm flex items-center gap-2 text-xs font-medium hover:scale-105 transition-transform"
              aria-label="Download resume"
            >
              <FileDown className="w-4 h-4" aria-hidden="true" />
              <span>Resume</span>
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-5xl flex-1 flex items-center justify-center min-h-0 pb-4 md:pb-6 lg:pb-8">
          <div className="relative w-full md:w-[94%] lg:w-[62%] xl:w-[56%] isolate">
            <img
              src={roomImage}
              alt="Detective Room"
              className="w-full h-auto max-h-full object-contain rounded-2xl md:rounded-3xl shadow-2xl relative z-0"
            />

            {/* Books — Education */}
            <button
              className={`absolute bottom-[65%] right-[38%] group transition-all duration-300 hover:scale-110 hover:-translate-y-[5%] w-fit z-10 ${shouldShowHint('education') ? 'animate-bounce-hint' : ''}`}
              aria-label={hotspotLabels.books}
              onClick={() => handleHotspotClick('education')}
              onKeyDown={(e) => handleHotspotKeyDown(e, 'education')}
              {...hotspotHandlers('books')}
            >
              <div className={`relative ${hoveredHotspot === 'books' ? 'animate-bounce-slow' : ''}`}>
                <img src={booksImage} alt="" aria-hidden="true" className="w-[70px] md:w-40 lg:w-[200px] h-auto drop-shadow-2xl block" onError={() => setImgError("books")} />
                {hoveredHotspot === 'books' && <div aria-hidden="true" className="absolute -inset-2 rounded-3xl border-4 border-[#87CEEB] animate-ping opacity-75" />}
              </div>
            </button>

            {/* Medals — Awards */}
            <button
              className={`absolute top-[30%] left-[27%] transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 hover:scale-110 hover:-translate-y-[55%] w-fit z-10 ${shouldShowHint('awards') ? 'animate-bounce-hint' : ''}`}
              aria-label={hotspotLabels.medals}
              onClick={() => handleHotspotClick('awards')}
              onKeyDown={(e) => handleHotspotKeyDown(e, 'awards')}
              {...hotspotHandlers('medals')}
            >
              <div className={`relative ${hoveredHotspot === 'medals' ? 'animate-bounce-slow' : ''}`}>
                <img src={medalsImage} alt="" aria-hidden="true" className="w-[88px] md:w-48 h-auto drop-shadow-2xl block" onError={() => setImgError("medals")} />
                {hoveredHotspot === 'medals' && <div aria-hidden="true" className="absolute -inset-2 rounded-3xl border-4 border-[#87CEEB] animate-ping opacity-75" />}
              </div>
            </button>

            {/* Smartphone — Events */}
            <button
              className={`absolute top-[40%] right-[15%] transform translate-x-1/2 -translate-y-1/2 group transition-all duration-300 hover:scale-110 hover:-translate-y-[55%] w-fit z-10 ${shouldShowHint('events') ? 'animate-bounce-hint' : ''}`}
              aria-label={hotspotLabels.smartphone}
              onClick={() => handleHotspotClick('events')}
              onKeyDown={(e) => handleHotspotKeyDown(e, 'events')}
              {...hotspotHandlers('smartphone')}
            >
              <div className={`relative ${hoveredHotspot === 'smartphone' ? 'animate-bounce-slow' : ''}`}>
                <img src={smartphoneImage} alt="" aria-hidden="true" className="w-[53px] md:w-[114px] lg:w-[143px] h-auto drop-shadow-2xl block" onError={() => setImgError("smartphone")} />
                {hoveredHotspot === 'smartphone' && <div aria-hidden="true" className="absolute -inset-2 rounded-3xl border-4 border-[#87CEEB] animate-ping opacity-75" />}
              </div>
            </button>

            {/* Laptop — Dev Projects */}
            <div className={`absolute top-[60%] left-[21%] transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 hover:scale-110 hover:-translate-y-[60%] z-10 ${shouldShowHint('devProjects') ? 'animate-bounce-hint' : ''}`}>
              <div className={`relative ${hoveredHotspot === 'desktop' ? 'animate-bounce-slow' : ''}`}>
                <img src={laptopImage} alt="" aria-hidden="true" className="w-[106px] md:w-[229px] lg:w-[286px] h-auto drop-shadow-2xl block pointer-events-none" onError={() => setImgError("laptop")} />
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] transition-all duration-300"
                  aria-label={hotspotLabels.desktop}
                  onClick={() => handleHotspotClick('devProjects')}
                  onKeyDown={(e) => handleHotspotKeyDown(e, 'devProjects')}
                  {...hotspotHandlers('desktop')}
                />
                {hoveredHotspot === 'desktop' && <div aria-hidden="true" className="absolute -inset-2 rounded-3xl border-4 border-[#87CEEB] animate-ping opacity-75 pointer-events-none" />}
              </div>
            </div>

            {/* Character — About Me */}
            <div className={`absolute bottom-[10%] left-[52%] transform -translate-x-1/2 group transition-all duration-300 hover:scale-110 hover:-translate-y-[5%] z-10 ${shouldShowHint('about') ? 'animate-bounce-hint' : ''}`}>
              <div className={`relative ${hoveredHotspot === 'character' ? 'animate-bounce-slow' : ''}`}>
                <img src={characterImage} alt="" aria-hidden="true" className="w-[330px] md:w-[770px] lg:w-[963px] h-auto drop-shadow-2xl block pointer-events-none" onError={() => setImgError("character")} />
                {showCharacterPrompt && (
                  <button
                    onClick={() => handleHotspotClick('about')}
                    className="absolute top-[18%] left-[54%] z-20 whitespace-nowrap rounded-full border-2 border-[#FFB6C1] bg-white px-4 py-2 text-sm font-medium text-[#E9518D] shadow-lg animate-tooltip-appear"
                  >
                    Hi! Click me!
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-[6px] left-4 h-3 w-3 rotate-45 border-b-2 border-r-2 border-[#FFB6C1] bg-white"
                    />
                  </button>
                )}
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] transition-all duration-300"
                  aria-label={hotspotLabels.character}
                  onClick={() => handleHotspotClick('about')}
                  onKeyDown={(e) => handleHotspotKeyDown(e, 'about')}
                  {...hotspotHandlers('character')}
                />
                {hoveredHotspot === 'character' && <div aria-hidden="true" className="absolute -inset-2 rounded-full border-4 border-[#FFB6C1] animate-ping opacity-75 pointer-events-none" />}
              </div>
            </div>

            {/* Desktop tooltips — fire on both hover and keyboard focus via hotspotHandlers */}
            {hoveredHotspot && TOOLTIP_CONFIG[hoveredHotspot] && (
              <div
                aria-hidden="true"
                className={`absolute ${TOOLTIP_CONFIG[hoveredHotspot].position} transform ${TOOLTIP_CONFIG[hoveredHotspot].align} z-[999] pointer-events-none`}
              >
                <div className="bg-white px-2 md:px-4 py-1 md:py-2 border-2 border-[#FFB6C1] text-xs md:text-sm text-[#E9518D] rounded-full shadow-xl whitespace-nowrap animate-tooltip-appear">
                  {hotspotLabels[hoveredHotspot as keyof typeof hotspotLabels]}
                </div>
              </div>
            )}

            {/* Work With Me — desktop */}
            <WorkWithMeButton
              onClick={() => handleHotspotClick('workWithMe')}
              onPreload={onPreloadTablet}
              wrapperClassName={`hidden md:block absolute bottom-4 left-4 z-[9999] ${shouldShowHint('workWithMe') ? 'animate-bounce-hint' : ''}`}
              imgClassName="h-[66px] lg:h-[88px] w-auto block"
              fallbackClassName="h-[66px] lg:h-[88px] w-[116px] lg:w-[154px] text-xs lg:text-sm"
              fallbackStyle={{ background: 'linear-gradient(to bottom, #98d8eb 0%, #87CEEB 50%, #6fc4e0 100%)', boxShadow: 'inset 0 5px 10px rgba(255,255,255,0.6), 0 0 0 4px #6fc4e0, 0 0 0 8px white', fontWeight: 600 }}
            />

            {/* Skip to Portfolio Book — desktop */}
            <SkipButton
              onClick={onViewBook}
              onPreload={onPreloadBook}
              wrapperClassName="hidden md:block absolute bottom-4 right-4 z-[9999]"
              imgClassName="h-[66px] lg:h-[88px] w-auto block"
              fallbackClassName="h-[66px] lg:h-[88px] w-[116px] lg:w-[154px] text-xs lg:text-sm"
              fallbackStyle={{ background: 'linear-gradient(to bottom, #ffc8d1 0%, #FFB6C1 50%, #f7a3af 100%)', boxShadow: 'inset 0 5px 10px rgba(255,255,255,0.6), 0 0 0 4px #f7a3af, 0 0 0 8px white', fontWeight: 600 }}
            />
          </div>
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
        .animate-float { animation: float linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }

        @keyframes tooltip-appear {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-tooltip-appear { animation: tooltip-appear 0.3s ease-in-out; }

        @keyframes cursor-hint {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0.85); }
        }
        .animate-cursor-hint { animation: cursor-hint 1.2s ease-in-out infinite; }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-bounce-slow,
          .animate-cursor-hint,
          .animate-pulse-slow,
          .animate-bounce-hint,
          .animate-ping {
            animation: none !important;
          }
          .animate-tooltip-appear { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
