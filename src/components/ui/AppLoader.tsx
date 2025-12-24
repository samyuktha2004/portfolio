import React from 'react';
import { Sparkles } from 'lucide-react';

export function AppLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#FFF0F5] to-[#FFB6C1] flex items-center justify-center z-[99999] overflow-hidden">
      {/* Floating bubbles background - same as detective room */}
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

      <div className="text-center relative z-10">
        {/* Animated Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Spinning outer ring */}
            <div className="absolute inset-0 rounded-full border-4 border-[#FFB6C1]/30 animate-spin" 
                 style={{ width: '120px', height: '120px', borderTopColor: '#FFB6C1' }} />
            
            {/* Inner circle with icon */}
            <div className="relative w-[120px] h-[120px] rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-[#FFB6C1]">
              <Sparkles className="w-12 h-12 text-[#fd6698] animate-pulse" />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-[#fd6698] mb-3">
          Sending exciting designs your way!
        </h2>
        <p className="text-[#fd6698]/70 text-sm md:text-base">
          ✨ Preparing something magical ✨
        </p>

        {/* Loading Dots */}
        <div className="flex gap-2 justify-center mt-6">
          <div className="w-3 h-3 rounded-full bg-[#FFB6C1] animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 rounded-full bg-[#FFB6C1] animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-3 h-3 rounded-full bg-[#FFB6C1] animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}