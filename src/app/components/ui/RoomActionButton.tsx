import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { uiLabels } from '../../data/portfolioData';
import workButtonImage from '../../../assets/core/work-with-me-button.png';
import skipButtonImage from '../../../assets/core/skip-to-resume-button.png';

interface RoomActionButtonProps {
  onClick: () => void;
  onPreload?: () => void;
  wrapperClassName?: string;
  imgClassName: string;
  fallbackClassName: string;
  fallbackStyle?: React.CSSProperties;
  showHint?: boolean;
}

export function WorkWithMeButton({ onClick, onPreload, wrapperClassName = '', imgClassName, fallbackClassName, fallbackStyle, showHint }: RoomActionButtonProps) {
  const [error, setError] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={onPreload} onFocus={onPreload} className={`overflow-hidden rounded-full transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl ${wrapperClassName}`}>
      {!error ? (
        <img src={workButtonImage} alt={uiLabels.buttons.workWithMe} className={imgClassName} onError={() => setError(true)} />
      ) : (
        <div className={`text-white rounded-full flex items-center justify-center gap-2 ${fallbackClassName}`} style={fallbackStyle}>
          <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          <span>{uiLabels.buttons.workWithMe}</span>
        </div>
      )}
      {showHint && (
        <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50">
          <div className="bg-white/50 backdrop-blur-sm p-2.5 rounded-full shadow-lg border-2 border-[#FFB6C1]/70 animate-cursor-hint">
            <svg className="w-5 h-5 text-[#E9518D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="m13 13 6 6"/>
            </svg>
          </div>
        </div>
      )}
    </button>
  );
}

export function SkipButton({ onClick, onPreload, wrapperClassName = '', imgClassName, fallbackClassName, fallbackStyle }: Omit<RoomActionButtonProps, 'showHint'>) {
  const [error, setError] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={onPreload} onFocus={onPreload} className={`overflow-hidden rounded-full transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl ${wrapperClassName}`}>
      {!error ? (
        <img src={skipButtonImage} alt={uiLabels.buttons.skipToResume} className={imgClassName} onError={() => setError(true)} />
      ) : (
        <div className={`text-white rounded-full flex items-center justify-center ${fallbackClassName}`} style={fallbackStyle}>
          <span>{uiLabels.buttons.skipToResume}</span>
        </div>
      )}
    </button>
  );
}
