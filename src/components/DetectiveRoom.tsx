import React, { useState } from 'react';
import { MousePointerClick } from 'lucide-react';
import type { TabletContent } from '../App';
import { welcomeText, hotspotLabels } from '../data/portfolioData';
import roomImage from 'figma:asset/fc8072305c895487984f67c88512f481002d6658.png';
import booksImage from 'figma:asset/76b3e8eb6ab2696346c99ef10bee519bb8dfdfbe.png';
import medalsImage from 'figma:asset/003f1ace414e3729d5cab667916cb98f861fa55b.png';
import smartphoneImage from 'figma:asset/acd866d765a4bca5386506ededc9cf4c32217541.png';
import laptopImage from 'figma:asset/94541025c76fea2a90848dd5563d283230d3bac5.png';
import characterImage from 'figma:asset/dee0266b75568162df59fbc7031b6fdac99f9650.png';
import skipButtonImage from 'figma:asset/2016e1f9bdb4d4cb4ac12b65244769535a108391.png';

interface RoomProps {
  onHotspotClick: (content: TabletContent) => void;
  onViewBook: () => void;
  visitedSections: Set<string>;
}

// Exploration order for sequential hints
const HOTSPOT_ORDER: TabletContent[] = ['about', 'devProjects', 'designPortfolio', 'awards', 'education'];

export function Room({ onHotspotClick, onViewBook, visitedSections }: RoomProps) {
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [roomImageLoaded, setRoomImageLoaded] = useState(false);

  // Show hint after 3 seconds of inactivity
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleHotspotClick = (content: TabletContent) => {
    setShowHint(false);
    onHotspotClick(content);
  };

  // Get next unvisited hotspot for wiggle hint
  const nextUnvisitedHotspot = HOTSPOT_ORDER.find(hotspot => !visitedSections.has(hotspot));
  
  // Map content type to hotspot ID
  const getHotspotId = (content: TabletContent): string => {
    const mapping: Record<string, string> = {
      about: 'character',
      devProjects: 'desktop',
      designPortfolio: 'smartphone',
      awards: 'medals',
      education: 'books'
    };
    return mapping[content] || '';
  };

  const shouldWiggle = (content: TabletContent): boolean => {
    // Skip 'about' since it already has the bouncing cursor hint
    if (content === 'about') return false;
    return nextUnvisitedHotspot === content && !hoveredHotspot;
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF0F5] to-[#FFB6C1]/30">
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
        ))}
      </div>

      {/* Main content container - Properly constrained */}
      <div className="relative z-10 w-full h-full max-h-screen flex flex-col px-4 md:px-8 lg:px-20 py-4 md:py-6 lg:py-12">
        {/* Title - Compact on mobile, more spacing on laptop */}
        <div className="text-center flex-shrink-0 mb-2 md:mb-6 lg:mb-8">
          <h1 className="text-[#fd6698] text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-tight mb-1 md:mb-2 lg:mb-3">
            {welcomeText.title}
          </h1>
          <div className="inline-block bg-white/90 backdrop-blur-sm px-3 md:px-6 py-1.5 md:py-2 rounded-full shadow-lg border-2 border-[#FFB6C1]">
            <p className="text-[#fd6698] text-xs sm:text-sm md:text-sm lg:text-sm">
              {welcomeText.subtitle}
            </p>
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
            />

            {/* Books - Education & Credentials - Top Left */}
            <button
              className={`absolute bottom-[65%] right-[38%] group transition-all duration-300 hover:scale-110 hover:-translate-y-[5%] w-fit z-10 ${shouldWiggle('education') ? 'animate-wiggle-hint' : ''}`}
              onMouseEnter={() => setHoveredHotspot('books')}
              onMouseLeave={() => setHoveredHotspot(null)}
              onClick={() => handleHotspotClick('education')}
            >
              <div className={`relative ${hoveredHotspot === 'books' ? 'animate-bounce-slow' : ''}`}>
                <img
                  src={booksImage}
                  alt="Education Books"
                  className="w-16 md:w-36 h-auto drop-shadow-2xl block"
                />
                {hoveredHotspot === 'books' && (
                  <div className="absolute -inset-2 rounded-3xl border-4 border-[#87CEEB] animate-ping opacity-75" />
                )}
              </div>
            </button>

            {/* Medals - Case Achievements - Top Center */}
            <button
              className={`absolute top-[30%] left-[27%] transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 hover:scale-110 hover:-translate-y-[55%] w-fit z-10 ${shouldWiggle('awards') ? 'animate-wiggle-hint' : ''}`}
              onMouseEnter={() => setHoveredHotspot('medals')}
              onMouseLeave={() => setHoveredHotspot(null)}
              onClick={() => handleHotspotClick('awards')}
            >
              <div className={`relative ${hoveredHotspot === 'medals' ? 'animate-bounce-slow' : ''}`}>
                <img
                  src={medalsImage}
                  alt="Medals and Awards"
                  className="w-20 md:w-44 h-auto drop-shadow-2xl block"
                />
                {hoveredHotspot === 'medals' && (
                  <div className="absolute -inset-2 rounded-3xl border-4 border-[#87CEEB] animate-ping opacity-75" />
                )}
              </div>
            </button>

            {/* Smartphone - Design Showcase - Right Side - Visual Gallery */}
            <button
              className={`absolute top-[40%] right-[15%] transform translate-x-1/2 -translate-y-1/2 group transition-all duration-300 hover:scale-110 hover:-translate-y-[55%] w-fit z-10 ${shouldWiggle('designPortfolio') ? 'animate-wiggle-hint' : ''}`}
              onMouseEnter={() => setHoveredHotspot('smartphone')}
              onMouseLeave={() => setHoveredHotspot(null)}
              onClick={() => handleHotspotClick('designPortfolio')}
            >
              <div className={`relative ${hoveredHotspot === 'smartphone' ? 'animate-bounce-slow' : ''}`}>
                <img
                  src={smartphoneImage}
                  alt="Design Showcase - Visual Portfolio"
                  className="w-12 md:w-26 h-auto drop-shadow-2xl block"
                />
                {hoveredHotspot === 'smartphone' && (
                  <div className="absolute -inset-2 rounded-3xl border-4 border-[#FFB6C1] animate-ping opacity-75" />
                )}
              </div>
            </button>

            {/* Desktop PC - Code Investigations - Right Side */}
            <div className={`absolute top-[60%] left-[21%] transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 hover:scale-110 hover:-translate-y-[60%] z-10 ${shouldWiggle('devProjects') ? 'animate-wiggle-hint' : ''}`}>
              <div className={`relative ${hoveredHotspot === 'desktop' ? 'animate-bounce-slow' : ''}`}>
                <img
                  src={laptopImage}
                  alt="Laptop - Development Projects"
                  className="w-24 md:w-52 h-auto drop-shadow-2xl block pointer-events-none"
                />
                {/* Smaller clickable area in the center */}
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] transition-all duration-300"
                  onMouseEnter={() => setHoveredHotspot('desktop')}
                  onMouseLeave={() => setHoveredHotspot(null)}
                  onClick={() => handleHotspotClick('devProjects')}
                />
                {hoveredHotspot === 'desktop' && (
                  <div className="absolute -inset-2 rounded-3xl border-4 border-[#87CEEB] animate-ping opacity-75 pointer-events-none" />
                )}
              </div>
            </div>

            {/* Character - About Me */}
            <div className={`absolute bottom-[10%] left-[52%] transform -translate-x-1/2 group transition-all duration-300 hover:scale-110 hover:-translate-y-[5%] z-10 ${shouldWiggle('about') ? 'animate-wiggle-hint' : ''}`}>
              <div className={`relative ${hoveredHotspot === 'character' ? 'animate-bounce-slow' : ''}`}>
                <img
                  src={characterImage}
                  alt="About Me"
                  className="w-[300px] md:w-[700px] h-auto drop-shadow-2xl block pointer-events-none"
                />
                {/* Smaller clickable area in the center */}
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] transition-all duration-300"
                  onMouseEnter={() => setHoveredHotspot('character')}
                  onMouseLeave={() => setHoveredHotspot(null)}
                  onClick={() => handleHotspotClick('about')}
                />
                {hoveredHotspot === 'character' && (
                  <div className="absolute -inset-2 rounded-full border-4 border-[#FFB6C1] animate-ping opacity-75 pointer-events-none" />
                )}
              </div>
            </div>

            {/* All Tooltips - Rendered last so they're on top */}
            {/* Books Tooltip */}
            {hoveredHotspot === 'books' && (
              <div className="absolute bottom-[65%] right-[38%] pointer-events-none z-[999]">
                <div className="relative">
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white px-2 md:px-4 py-1 md:py-2 rounded-full whitespace-nowrap shadow-xl border-2 border-[#FFB6C1] animate-tooltip-appear">
                    <span className="text-xs md:text-sm text-[#FFB6C1]">{hotspotLabels.books}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Medals Tooltip */}
            {hoveredHotspot === 'medals' && (
              <div className="absolute top-[30%] left-[27%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[999]">
                <div className="relative">
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white px-2 md:px-4 py-1 md:py-2 rounded-full whitespace-nowrap shadow-xl border-2 border-[#FFB6C1] animate-tooltip-appear">
                    <span className="text-xs md:text-sm text-[#FFB6C1]">{hotspotLabels.medals}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Smartphone Tooltip */}
            {hoveredHotspot === 'smartphone' && (
              <div className="absolute top-[40%] right-[15%] transform translate-x-1/2 -translate-y-1/2 pointer-events-none z-[999]">
                <div className="relative">
                  <div className="absolute top-full mt-2 right-0 transform translate-x-0 bg-white px-2 md:px-4 py-1 md:py-2 rounded-full whitespace-nowrap shadow-xl border-2 border-[#FFB6C1] animate-tooltip-appear">
                    <span className="text-xs md:text-sm text-[#FFB6C1]">{hotspotLabels.smartphone}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Desktop Tooltip */}
            {hoveredHotspot === 'desktop' && (
              <div className="absolute top-[60%] left-[21%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[999]">
                <div className="relative">
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white px-2 md:px-4 py-1 md:py-2 rounded-full whitespace-nowrap shadow-xl border-2 border-[#FFB6C1] animate-tooltip-appear">
                    <span className="text-xs md:text-sm text-[#FFB6C1]">{hotspotLabels.desktop}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Character Tooltip */}
            {hoveredHotspot === 'character' && (
              <div className="absolute bottom-[10%] left-[52%] transform -translate-x-1/2 pointer-events-none z-[999]">
                <div className="relative">
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white px-2 md:px-4 py-1 md:py-2 rounded-full whitespace-nowrap shadow-xl border-2 border-[#FFB6C1] animate-tooltip-appear">
                    <span className="text-xs md:text-sm text-[#FFB6C1]">{hotspotLabels.character}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Animated Hint - Cursor icon pointing to character - Now clickable */}
            {showHint && !hoveredHotspot && (
              <div className="absolute bottom-[10%] left-[52%] transform -translate-x-1/2 z-[998]">
                <div className="relative">
                  <div
                    className="absolute bottom-0 mb-1 md:mb-2 left-1/2 transform -translate-x-1/2 cursor-pointer"
                    onClick={() => handleHotspotClick('about')}
                  >
                    <div className="bg-white/50 backdrop-blur-sm p-2 md:p-2.5 rounded-full shadow-lg border-2 border-[#FFB6C1]/70 animate-cursor-hint hover:bg-white/80 transition-all hover:scale-110">
                      <MousePointerClick className="w-4 h-4 md:w-5 md:h-5 text-[#fd6698]" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Skip to Portfolio Book Button - Desktop only (inside room) */}
            <button
              onClick={onViewBook}
              className="hidden md:block absolute bottom-4 right-4 transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl z-[9999]"
            >
              <img
                src={skipButtonImage}
                alt="Skip to Resume"
                className="w-32 lg:w-48 h-auto"
              />
            </button>
          </div>
        </div>

        {/* Skip to Portfolio Book Button - Mobile only (below room, centered) */}
        <div className="flex justify-center mt-4 md:hidden">
          <button
            onClick={onViewBook}
            className="transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl"
          >
            <img
              src={skipButtonImage}
              alt="Skip to Resume"
              className="w-40 h-auto"
            />
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