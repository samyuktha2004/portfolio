import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X } from 'lucide-react';
import closedCookie from '../../../assets/core/fortune-cookie-closed.png';
import openedCookie from '../../../assets/core/fortune-cookie-open.png';
import { fortuneCookieFacts, fortuneCookieConfig } from '../../data/fortuneCookieData';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import confetti from 'canvas-confetti';

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
  const [remainingIndices, setRemainingIndices] = useState<number[]>([]);
  const [hasShownUnlockedPopup, setHasShownUnlockedPopup] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const unlockedTrapRef = useFocusTrap<HTMLDivElement>(showUnlockedPopup);
  const fortuneTrapRef = useFocusTrap<HTMLDivElement>(isOpen);

  // Show "Unlocked!" popup when first unlocked
  useEffect(() => {
    if (isUnlocked && !hasShownUnlockedPopup) {
      setShowUnlockedPopup(true);
      setHasShownUnlockedPopup(true);

      // Confetti celebration when unlocked!
      if (typeof window !== 'undefined') {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.8 },
          colors: ['#FFB6C1', '#FFF0F5', '#87CEEB', '#DDA0DD'],
          shapes: ['circle'],
          scalar: 1.2,
        });
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#FFB6C1', '#FFF0F5', '#87CEEB', '#DDA0DD'],
          });
        }, 250);
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#FFB6C1', '#FFF0F5', '#87CEEB', '#DDA0DD'],
          });
        }, 400);
      }
    }
  }, [isUnlocked, hasShownUnlockedPopup]);

  const openFortune = useCallback(() => {
    if (!isUnlocked) return;

    // Refill and shuffle when the deck is exhausted
    let deck = remainingIndices;
    if (deck.length === 0) {
      deck = FUN_FACTS.map((_, i) => i).sort(() => Math.random() - 0.5);
    }

    const [nextIndex, ...rest] = deck;
    setRemainingIndices(rest);
    setFortune(FUN_FACTS[nextIndex]);
    setIsOpen(true);
  }, [isUnlocked, remainingIndices]);

  const handleUnlockedClick = () => {
    setShowUnlockedPopup(false);
    openFortune();
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => triggerRef.current?.focus(), 0);
  };

  return (
    <>
      {/* Fortune Cookie Button - Only visible when unlocked, on room view, and no tablet open */}
      {isUnlocked && currentView === 'room' && !isTabletOpen && (
        <button
          ref={triggerRef}
          onClick={openFortune}
          className={`
            fixed bottom-10 left-4 sm:bottom-6 sm:left-6 z-50
            w-[54px] h-[54px] sm:w-[70px] sm:h-[70px]
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
          aria-label="Open fortune cookie for a fun fact"
        >
          <img
            src={closedCookie}
            alt=""
            aria-hidden="true"
            className="w-[34px] h-[34px] sm:w-[44px] sm:h-[44px] object-contain group-hover:scale-110 transition-transform"
          />
          <span aria-hidden="true" className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded-full text-xs bg-white text-[#E9518D] border border-[#FFB6C1] shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">
            Click for a fun fact!
          </span>
        </button>
      )}

      {/* Unlocked Popup - First time only */}
      {showUnlockedPopup && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="unlocked-dialog-title"
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
        >
          <div
            ref={unlockedTrapRef}
            className="relative max-w-md w-full bg-gradient-to-br from-[#FFF0F5] to-[#FFB6C1] rounded-3xl p-8 shadow-2xl border-4 border-white/40 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fortune Cookie Icon */}
            <div className="text-center mb-6">
              <div className="inline-block relative">
                <img
                  src={closedCookie}
                  alt=""
                  aria-hidden="true"
                  className="w-48 h-48 object-contain mx-auto drop-shadow-2xl animate-bounce"
                />
              </div>
            </div>

            {/* Unlocked Text */}
            <div className="text-center mb-6">
              <h2 id="unlocked-dialog-title" className="text-4xl font-bold text-[#E9518D] mb-4">
                <span aria-hidden="true">🎉</span> Unlocked! <span aria-hidden="true">🎉</span>
              </h2>
              <p className="text-[#E9518D]/90 text-lg">
                {fortuneCookieConfig.unlockedMessage}<br />
                {fortuneCookieConfig.unlockedCTA}
              </p>
            </div>

            {/* Action Button */}
            <div className="text-center">
              <button
                onClick={handleUnlockedClick}
                className="px-8 py-3 bg-white text-[#E9518D] rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all font-medium text-lg"
              >
                {fortuneCookieConfig.openButtonText}
              </button>
            </div>

            {/* Decorative elements */}
            <div aria-hidden="true" className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full blur-xl" />
            <div aria-hidden="true" className="absolute bottom-8 right-8 w-20 h-20 bg-white/10 rounded-full blur-xl" />
          </div>
        </div>
      )}

      {/* Fortune Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="fortune-dialog-title"
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={handleClose}
        >
          <div
            ref={fortuneTrapRef}
            className="relative max-w-md w-full bg-gradient-to-br from-[#FFF0F5] to-[#FFB6C1] rounded-3xl p-8 shadow-2xl border-4 border-white/40 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all hover:scale-110"
              aria-label="Close fortune cookie"
            >
              <X className="w-4 h-4 text-[#E9518D]" aria-hidden="true" />
            </button>

            {/* Fortune Cookie Icon */}
            <div className="text-center mb-6">
              <div className="inline-block relative">
                <img
                  src={openedCookie}
                  alt=""
                  aria-hidden="true"
                  className="w-56 h-56 sm:w-64 sm:h-64 object-contain mx-auto drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Fortune Text */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-6 border-2 border-white/50 shadow-inner">
              <p id="fortune-dialog-title" className="text-center text-[#E9518D] text-lg leading-relaxed">
                {fortune}
              </p>
            </div>

            {/* Footer */}
            <div className="text-center">
              <button
                onClick={handleClose}
                className="px-6 py-2 bg-[#E9518D] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <span aria-hidden="true">💖</span> That's so cool! <span aria-hidden="true">💖</span>
              </button>
            </div>

            {/* Decorative elements */}
            <div aria-hidden="true" className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full blur-xl" />
            <div aria-hidden="true" className="absolute bottom-8 right-8 w-20 h-20 bg-white/10 rounded-full blur-xl" />
          </div>
        </div>
      )}
    </>
  );
}
