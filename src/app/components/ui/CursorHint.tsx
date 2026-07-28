import React from 'react';
import { MousePointerClick } from 'lucide-react';

interface CursorHintProps {
  show: boolean;
  className?: string;
}

export function CursorHint({ show, className = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' }: CursorHintProps) {
  if (!show) return null;
  return (
    <div aria-hidden="true" className={`${className} pointer-events-none z-50`}>
      <div className="bg-white/50 backdrop-blur-sm p-2.5 rounded-full shadow-lg border-2 border-[#FFB6C1]/70 animate-cursor-hint">
        <MousePointerClick className="w-5 h-5 text-[#E9518D]" />
      </div>
    </div>
  );
}
