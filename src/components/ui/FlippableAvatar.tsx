import React, { useState } from 'react';
import { User } from 'lucide-react';
import { useMultiImageLoader } from '../../hooks/useImageLoader';
import { LoadingSpinner } from './LoadingSpinner';
import { ANIMATIONS } from '../../constants/theme';
import cartoonAvatar from 'figma:asset/681108ac8efade408dd6dd082f54b3e7f0559340.png';
import actualPhoto from 'figma:asset/62a5dd36a1b4d3a61349ef362a3d09ea81e8b486.png';

interface FlippableAvatarProps {
  size?: 'small' | 'medium' | 'large';
  showHint?: boolean;
}

export function FlippableAvatar({ size = 'medium', showHint = false }: FlippableAvatarProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { loadingStates, errorStates, handleLoad, handleError } = useMultiImageLoader(['cartoon', 'actual']);

  const sizeClasses = {
    small: 'w-24 h-24',
    medium: 'w-32 h-32',
    large: 'w-48 h-48',
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative inline-block">
      <div 
        className={`${sizeClasses[size]} mx-auto cursor-pointer`}
        onClick={handleFlip}
        style={{ perspective: '1000px' }}
      >
        <div 
          className="relative w-full h-full"
          style={{ 
            transformStyle: 'preserve-3d',
            transition: `transform ${ANIMATIONS.FLIP_DURATION}ms ${ANIMATIONS.EASE_IN_OUT}`,
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          {/* Front - Cartoon Avatar */}
          <div 
            className="absolute inset-0 rounded-full shadow-2xl border-4 border-white/30"
            style={{ 
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              overflow: 'hidden'
            }}
          >
            {errorStates.cartoon ? (
              <div className="w-full h-full bg-gradient-to-br from-[#FFB6C1] to-[#FFF0F5] flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
            ) : (
              <>
                {loadingStates.cartoon && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFB6C1]/20 to-[#FFF0F5] flex items-center justify-center z-10">
                    <LoadingSpinner size="medium" color="pink" />
                  </div>
                )}
                <img 
                  src={cartoonAvatar} 
                  alt="Samyuktha cartoon avatar" 
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    loadingStates.cartoon ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={() => handleLoad('cartoon')}
                  onError={() => handleError('cartoon')}
                />
              </>
            )}
          </div>

          {/* Back - Actual Photo */}
          <div 
            className="absolute inset-0 rounded-full shadow-2xl border-4 border-white/30"
            style={{ 
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              overflow: 'hidden'
            }}
          >
            {errorStates.actual ? (
              <div className="w-full h-full bg-gradient-to-br from-[#87CEEB] to-[#FFB6C1] flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
            ) : (
              <>
                {loadingStates.actual && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#87CEEB]/20 to-[#FFB6C1]/20 flex items-center justify-center z-10">
                    <LoadingSpinner size="medium" color="blue" />
                  </div>
                )}
                <img 
                  src={actualPhoto} 
                  alt="Samyuktha actual photo" 
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    loadingStates.actual ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={() => handleLoad('actual')}
                  onError={() => handleError('actual')}
                />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Hint Badge - Now clickable */}
      {showHint && (
        <div 
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-lg border-2 border-[#FFB6C1] text-xs text-[#fd6698] whitespace-nowrap animate-bounce-subtle cursor-pointer hover:bg-[#FFF0F5] transition-colors"
          onClick={handleFlip}
        >
          ✨ Tap to flip!
        </div>
      )}
    </div>
  );
}