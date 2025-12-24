import React, { useState } from 'react';
import { Palette, Sparkles, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { designShowcase } from '../../data/portfolioData';

export function DesignShowcase() {
  // Track current image index for each project
  const [imageIndices, setImageIndices] = useState<Record<number, number>>(
    designShowcase.reduce((acc, _, index) => ({ ...acc, [index]: 0 }), {})
  );

  const handlePrevImage = (projectIndex: number) => {
    setImageIndices(prev => ({
      ...prev,
      [projectIndex]: prev[projectIndex] > 0 
        ? prev[projectIndex] - 1 
        : designShowcase[projectIndex].images.length - 1
    }));
  };

  const handleNextImage = (projectIndex: number) => {
    setImageIndices(prev => ({
      ...prev,
      [projectIndex]: prev[projectIndex] < designShowcase[projectIndex].images.length - 1
        ? prev[projectIndex] + 1
        : 0
    }));
  };

  return (
    <div className="space-y-6 tablet-section">
      {/* Visual Showcase Grid */}
      {designShowcase.map((item, index) => {
        const currentImageIndex = imageIndices[index] || 0;
        const hasMultipleImages = item.images.length > 1;

        return (
          <div
            key={index}
            className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#FFB6C1]/20 rounded-full flex items-center justify-center">
                <Palette className="w-5 h-5 text-[#FFB6C1]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#fd6698] mb-1 break-words">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 break-words">{item.type}</p>
              </div>
            </div>

            {/* Visual Preview with Slideshow */}
            <div className="mb-4 bg-white rounded-xl p-4 border border-[#FFB6C1]/20">
              {item.images[currentImageIndex] ? (
                <div className="relative">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={item.images[currentImageIndex]}
                      alt={`${item.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Navigation Buttons - Only show if multiple images */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={() => handlePrevImage(index)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg border-2 border-[#FFB6C1] flex items-center justify-center transition-all hover:scale-110 group"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5 text-[#FFB6C1] group-hover:text-[#fd6698]" />
                      </button>
                      
                      <button
                        onClick={() => handleNextImage(index)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg border-2 border-[#FFB6C1] flex items-center justify-center transition-all hover:scale-110 group"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5 text-[#FFB6C1] group-hover:text-[#fd6698]" />
                      </button>

                      {/* Image counter dots */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {item.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() => setImageIndices(prev => ({ ...prev, [index]: imgIndex }))}
                            className={`w-2 h-2 rounded-full transition-all ${
                              imgIndex === currentImageIndex
                                ? 'bg-[#fd6698] w-6'
                                : 'bg-white/70 hover:bg-white'
                            }`}
                            aria-label={`Go to image ${imgIndex + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-[#FFB6C1]/10 to-[#87CEEB]/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <ImageIcon className="w-12 h-12 mx-auto mb-2 text-[#FFB6C1]/40" />
                    <p className="text-xs text-gray-500">Visual Preview</p>
                    <p className="text-xs text-[#FFB6C1] mt-1">{item.title}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Visual Elements List */}
            <div className="bg-white/50 rounded-xl p-3 sm:p-4 border border-[#FFB6C1]/20">
              <h4 className="text-[#fd6698] text-sm mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Visual Elements:
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.visualElements.map((element, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-gradient-to-r from-[#FFB6C1]/20 to-[#87CEEB]/20 text-[#fd6698] rounded-full text-xs sm:text-sm border border-[#FFB6C1]/30"
                  >
                    {element}
                  </span>
                ))}
              </div>
            </div>

            {/* Color Palette if exists */}
            {item.colorPalette && (
              <div className="mt-4 bg-white/50 rounded-xl p-3 sm:p-4 border border-[#FFB6C1]/20">
                <h4 className="text-[#fd6698] text-sm mb-2">Color Palette:</h4>
                <div className="flex gap-2">
                  {item.colorPalette.map((color, i) => (
                    <div key={i} className="text-center">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow-md border-2 border-white"
                        style={{ backgroundColor: color }}
                      />
                      <p className="text-xs text-gray-600 mt-1">{color}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Design Notes */}
            {item.designNotes && (
              <div className="mt-4 bg-[#FFB6C1]/10 rounded-xl p-3 sm:p-4 border border-[#FFB6C1]/20">
                <p className="text-xs sm:text-sm text-gray-700 italic">
                  "✨ {item.designNotes}"
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}