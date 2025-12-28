import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import closedCookie from 'figma:asset/c29cd1607fcc894606fcfe3161d1dc2950bb3205.png';
import openedCookie from 'figma:asset/2e70c6a7760c2ab787760473562b98733a86d585.png';
import { fortuneCookieFacts, fortuneCookieConfig } from '../../data/fortuneCookieData';

const FUN_FACTS = fortuneCookieFacts;

interface FortuneCookieProps {
  isUnlocked: boolean;
  currentView: 'room' | 'book';
  isTabletOpen: boolean;
}

export function FortuneCookie({ isUnlocked, currentView, isTabletOpen }: FortuneCookieProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showUnlockedPopup, setShowUnlockedPopup] = useState(false);
  const [fortune, setFortune] = useState('');
  const [shownFortunes, setShownFortunes] = useState<Set<number>>(new Set());
  const [hasShownUnlockedPopup, setHasShownUnlockedPopup] = useState(false);

  // Show "Unlocked!" popup when first unlocked
  useEffect(() => {
    if (isUnlocked && !hasShownUnlockedPopup) {
      setShowUnlockedPopup(true);
      setHasShownUnlockedPopup(true);
      
      // Confetti celebration when unlocked!
      if (typeof window !== 'undefined') {
        import('canvas-confetti').then((confetti) => {
          confetti.default({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.8 },
            colors: ['#FFB6C1', '#FFF0F5', '#87CEEB', '#DDA0DD'],
            shapes: ['circle'],
            scalar: 1.2,
          });
          
          // Second burst
          setTimeout(() => {
            confetti.default({
              particleCount: 50,
              angle: 60,
              spread: 55,
              origin: { x: 0 },
              colors: ['#FFB6C1', '#FFF0F5', '#87CEEB', '#DDA0DD'],
            });
          }, 250);
          
          // Third burst
          setTimeout(() => {
            confetti.default({
              particleCount: 50,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors: ['#FFB6C1', '#FFF0F5', '#87CEEB', '#DDA0DD'],
            });
          }, 400);
        });
      }
    }
  }, [isUnlocked, hasShownUnlockedPopup]);

  const handleUnlockedClick = () => {
    setShowUnlockedPopup(false);
    // Show first fortune immediately
    openFortune();
  };

  const openFortune = () => {
    if (!isUnlocked) {
      return;
    }
    
    // Reset if all fortunes have been shown
    let availableFortunes = shownFortunes;
    if (shownFortunes.size === FUN_FACTS.length) {
      availableFortunes = new Set();
      setShownFortunes(new Set());
    }
    
    // Find a fortune that hasn't been shown yet
    let randomIndex: number;
    let attempts = 0;
    do {
      randomIndex = Math.floor(Math.random() * FUN_FACTS.length);
      attempts++;
      if (attempts > 50) break;
    } while (availableFortunes.has(randomIndex) && availableFortunes.size < FUN_FACTS.length);
    
    const randomFortune = FUN_FACTS[randomIndex];
    setFortune(randomFortune);
    setIsOpen(true);
    setShownFortunes(prev => new Set([...prev, randomIndex]));
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Fortune Cookie Button - Only visible when unlocked, on room view, and no tablet open */}
      {isUnlocked && currentView === 'room' && !isTabletOpen && (
        <button
          onClick={openFortune}
          disabled={!isUnlocked}
          className={`
            fixed bottom-6 left-6 z-50
            w-[70px] h-[70px] sm:w-[90px] sm:h-[90px]
            flex items-center justify-center
            bg-[#FFF0F5]
            rounded-full
            border-4 border-white
            shadow-lg
            transition-all duration-300
            hover:scale-110 hover:shadow-xl
            group
            ${isOpen ? 'opacity-50' : 'opacity-100'}
          `}
          style={{
            boxShadow: '0 10px 25px rgba(255, 182, 193, 0.3), 0 0 0 4px rgba(255, 182, 193, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.8)'
          }}
          title="Click for a fun fact about me!"
          aria-label="Fortune Cookie Easter Egg"
        >
          <img 
            src={closedCookie} 
            alt="Fortune Cookie"
            className="w-[44px] h-[44px] sm:w-[62px] sm:h-[62px] object-contain group-hover:scale-110 transition-transform"
          />
        </button>
      )}

      {/* Unlocked Popup - First time only */}
      {showUnlockedPopup && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
        >
          <div 
            className="relative max-w-md w-full bg-gradient-to-br from-[#FFF0F5] to-[#FFB6C1] rounded-3xl p-8 shadow-2xl border-4 border-white/40 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fortune Cookie Icon */}
            <div className="text-center mb-6">
              <div className="inline-block relative">
                <img 
                  src={closedCookie} 
                  alt="Fortune Cookie"
                  className="w-48 h-48 object-contain mx-auto drop-shadow-2xl animate-bounce"
                />
              </div>
            </div>

            {/* Unlocked Text */}
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold text-[#fd6698] mb-4">
                🎉 Unlocked! 🎉
              </h2>
              <p className="text-[#fd6698]/90 text-lg">
                {fortuneCookieConfig.unlockedMessage}<br />
                {fortuneCookieConfig.unlockedCTA}
              </p>
            </div>

            {/* Action Button */}
            <div className="text-center">
              <button
                onClick={handleUnlockedClick}
                className="px-8 py-3 bg-white text-[#fd6698] rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all font-medium text-lg"
              >
                {fortuneCookieConfig.openButtonText}
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full blur-xl" />
            <div className="absolute bottom-8 right-8 w-20 h-20 bg-white/10 rounded-full blur-xl" />
          </div>
        </div>
      )}

      {/* Fortune Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={handleClose}
        >
          <div 
            className="relative max-w-md w-full bg-gradient-to-br from-[#FFF0F5] to-[#FFB6C1] rounded-3xl p-8 shadow-2xl border-4 border-white/40 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all hover:scale-110"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-[#fd6698]" />
            </button>

            {/* Fortune Cookie Icon */}
            <div className="text-center mb-6">
              <div className="inline-block relative">
                <img 
                  src={openedCookie} 
                  alt="Opened Fortune Cookie"
                  className="w-56 h-56 sm:w-64 sm:h-64 object-contain mx-auto drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Fortune Text */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-6 border-2 border-white/50 shadow-inner">
              <p className="text-center text-[#fd6698] text-lg leading-relaxed">
                {fortune}
              </p>
            </div>

            {/* Footer */}
            <div className="text-center">
              <button
                onClick={handleClose}
                className="px-6 py-2 bg-white text-[#fd6698] rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
               💖 That's so cool! 💖
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full blur-xl" />
            <div className="absolute bottom-8 right-8 w-20 h-20 bg-white/10 rounded-full blur-xl" />
          </div>
        </div>
      )}
    </>
  );
}