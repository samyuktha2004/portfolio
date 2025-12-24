import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import closedCookie from 'figma:asset/c29cd1607fcc894606fcfe3161d1dc2950bb3205.png';
import openedCookie from 'figma:asset/2e70c6a7760c2ab787760473562b98733a86d585.png';

const FUN_FACTS = [
  "🎢 I love adventure sports and theme parks! 🎢",
  "🥇 I won 1st place at Infosys Hackathon competing against professionals (as a student)! 🥇",
  "💖 My favorite color combo is baby pink + sky blue (obviously!)",
  "🙈 I create 10 variations of the same design and hate choosing 🙈",
  "🌸 I believe bubbly, kawaii design is a real design aesthetic! 🌸",
  "🏆 I'm in the top 5% of my class with a 9.47 CGPA 🏆",
  "🎂 I LOVE birthdays, especially my own! 🎂",
  "🎀 I have wayyy too many hobbies to keep track of 🎀",
  "🎸 Me and my dad jam to 2000s Alt-Rock and pretend we're rockstars sometimes 🎸",
  "🥠 This fortune cookie easter egg and flippable profile image are my favourite parts of this portfolio! 👩🏻",
  "🍲 I'm a foodie, especially for spicy food and dessert! 🍰",
  "🎭 I played a dramatic fortune teller who was always wrong in my school play 🎭",
  "🌟 My dream is to work at a company that values ideas, along with design and code 🌟",
  "🎤 I love talking on stage and hosting events 🎤",
  "✈️ My first solo trip was to Mumbai for the HP Dreams Unlocked Finale! ✈️"
];

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
            w-20 h-20
            flex items-center justify-center
            transition-all duration-300
            hover:scale-110
            group
            ${isOpen ? 'opacity-50' : 'opacity-100'}
          `}
          title="Click for a fun fact about me!"
          aria-label="Fortune Cookie Easter Egg"
        >
          <img 
            src={closedCookie} 
            alt="Fortune Cookie"
            className="w-full h-full object-contain group-hover:scale-110 transition-transform drop-shadow-xl"
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
                You've explored all sections!<br />
                Click to discover fun facts about me 🥠
              </p>
            </div>

            {/* Action Button */}
            <div className="text-center">
              <button
                onClick={handleUnlockedClick}
                className="px-8 py-3 bg-white text-[#fd6698] rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all font-medium text-lg"
              >
                Open Fortune Cookie! 💖
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
                  className="w-48 h-48 object-contain mx-auto drop-shadow-2xl"
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