import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { twMerge } from 'tailwind-merge';
import { COLORS } from '@/constants/theme';

export type FilterOption = {
  id: string;
  label: string;
  emoji: string;
};

interface FilterPillsProps {
  options: FilterOption[];
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
  className?: string;
}

export const FilterPills = React.memo(function FilterPills({
  options,
  activeFilter,
  onFilterChange,
  className,
}: FilterPillsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(false);

  // Check if content overflows on mobile
  useEffect(() => {
    const checkOverflow = () => {
      const container = scrollContainerRef.current;
      if (container) {
        const hasOverflow = container.scrollWidth > container.clientWidth;
        setShowScrollHint(hasOverflow);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [options]);

  // Scroll active pill into view
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const activeButton = container.querySelector(`[data-filter="${activeFilter}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeFilter]);

  return (
    <div className={twMerge('relative mb-6', className)}>
      {/* Scrollable pills container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pl-1 pr-1 pt-1 pb-2"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {options.map((option) => {
          const isActive = activeFilter === option.id;
          
          const activeStyles = {
            backgroundColor: COLORS.CTA_PINK,
            color: 'white',
            borderColor: COLORS.PINK_TEXT,
          };

          const inactiveStyles = {
            backgroundColor: 'white',
            color: COLORS.PINK_TEXT,
            borderColor: COLORS.PINK_TEXT,
          };
          
          return (
            <motion.button
              key={option.id}
              data-filter={option.id}
              onClick={() => onFilterChange(option.id)}
              className={`
                relative flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium
                transition-all duration-200 snap-center border-2
                ${isActive
                  ? ''
                  : 'hover:bg-[#FFB6C1]/10 hover:scale-105'
                }
              `}
              style={isActive ? activeStyles : inactiveStyles}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Filter by ${option.label}`}
              aria-pressed={isActive}
            >
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className={isActive ? 'animate-bounce-subtle' : ''}>
                  {option.emoji}
                </span>
                {option.label}
              </span>
              
              {/* Sparkle effect on active pill */}
              {isActive && (
                <motion.span
                  className="absolute -top-1 -right-1 text-yellow-300 text-xs"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  ✨
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Scroll hint gradient for mobile (right side) */}
      {showScrollHint && (
        <div 
          className="absolute right-0 top-0 bottom-2 w-12 pointer-events-none
                     bg-gradient-to-l from-white via-white/50 to-transparent
                     md:hidden"
          aria-hidden="true"
        >
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[#E9518D] animate-pulse">
            →
          </div>
        </div>
      )}
    </div>
  );
});