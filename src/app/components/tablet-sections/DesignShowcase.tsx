import React, { useState, useEffect } from 'react';
import { Palette, Sparkles, Image as ImageIcon, ChevronLeft, ChevronRight, Video, Eye } from 'lucide-react';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { StandardButton } from '../ui/StandardButton';
// import { FilterPills, FilterOption } from '../ui/FilterPills';
import { designShowcase } from '../../data/portfolioData';
import tomocha1 from '@/imports/image.png';
import tomocha2 from '@/imports/image-1.png';
import interiorismo0 from '@/imports/Interiorismo.jpg';
import interiorismo1 from '@/imports/Interiorismo1.jpg';
import interiorismo2 from '@/imports/Interiorismo2.jpg';
import kalaikatha0 from '@/imports/Kalaikatha.jpg';
import kalaikatha1 from '@/imports/Kalaikatha1.jpg';
import kalaikatha2 from '@/imports/Kalaikatha2.jpg';
import kalaikatha3 from '@/imports/Kalaikatha3.jpg';
import kaalani0 from '@/imports/Kaalani.png';
import kaalani1 from '@/imports/Kaalani1.png';
import gdsc0 from '@/imports/gdsc1.png';
import gdsc1img from '@/imports/gdsc2.png';
import gdsc2img from '@/imports/gdsc3.png';
import gdsc3img from '@/imports/gdsc4.png';
import gdgLogo from '@/imports/GDGDevfestLogo.png';
import portfolioImg from '@/imports/portfolio.png';
import agriguruImg from '@/imports/agriguru.png'; // uncomment once file is uploaded

type LocalMedia = { type: 'image'; src: string };
type MediaItem = { type: 'image' | 'video'; src?: string; url?: string };

// Maps project title → locally imported images.
// Combined with any video mediaItems from portfolioData (local images shown first).
const LOCAL_IMAGES: Record<string, LocalMedia[]> = {
  'Tomocha App Design 🎓': [
    { type: 'image', src: tomocha1 },
    { type: 'image', src: tomocha2 },
  ],
  'Interiorismo': [
    { type: 'image', src: interiorismo0 },
    { type: 'image', src: interiorismo1 },
    { type: 'image', src: interiorismo2 },
  ],
  'Kalaikatha - Sustainable Artisan Platform 🎨': [
    { type: 'image', src: kalaikatha0 },
    { type: 'image', src: kalaikatha1 },
    { type: 'image', src: kalaikatha2 },
    { type: 'image', src: kalaikatha3 },
  ],
  'Kaalani - Sustainable Shoe Skins 🏆': [
    { type: 'image', src: kaalani0 },
    { type: 'image', src: kaalani1 },
  ],
  'GDSC HITS Event Posters': [
    { type: 'image', src: gdsc0 },
    { type: 'image', src: gdsc1img },
    { type: 'image', src: gdsc2img },
    { type: 'image', src: gdsc3img },
  ],
  'GDG Chennai': [
    { type: 'image', src: gdgLogo },
  ],
  'This Portfolio Design': [
    { type: 'image', src: portfolioImg },
  ],
  'Agriguru': [{ type: 'image', src: agriguruImg }], // uncomment once agriguru.png is uploaded
};

// FUTURE: Uncomment when filtering is needed for Design Portfolio
// const DESIGN_FILTER_OPTIONS: FilterOption[] = [
//   { id: 'all', label: 'All', emoji: '🌟' },
//   { id: 'featured', label: 'Featured', emoji: '⭐' },
//   { id: 'branding', label: 'Branding', emoji: '🎨' },
//   { id: 'ui-ux', label: 'UI/UX', emoji: '✨' },
//   { id: 'events', label: 'Events', emoji: '📱' }
// ];

export const DesignShowcase = React.memo(function DesignShowcase() {
  // FUTURE: Uncomment when filtering is needed
  // const [activeFilter, setActiveFilter] = useState('all');
  
  const [mediaIndices, setMediaIndices] = useState<Record<number, number>>(
    designShowcase.reduce((acc, _, index) => ({ ...acc, [index]: 0 }), {})
  );

  // Track iframe loading state for each project
  const [iframeLoading, setIframeLoading] = useState<Record<string, boolean>>({});

  const getEffectiveItems = (item: typeof designShowcase[number]): MediaItem[] => {
    const local = LOCAL_IMAGES[item.title];
    const dataVideos = (item.mediaItems as MediaItem[]).filter(m => m.type === 'video');
    return local ? [...local, ...dataVideos] : (item.mediaItems as MediaItem[]);
  };

  // Set loading state when media changes
  useEffect(() => {
    const newLoadingStates: Record<string, boolean> = {};
    designShowcase.forEach((item, index) => {
      const currentMediaIndex = mediaIndices[index] || 0;
      const effectiveItems = getEffectiveItems(item);
      const currentMedia = effectiveItems[currentMediaIndex];
      if (currentMedia?.type === 'video') {
        const key = `project-${index}-media-${currentMediaIndex}`;
        newLoadingStates[key] = true;
      }
    });
    setIframeLoading(newLoadingStates);
  }, [mediaIndices]);

  const getEffectiveLength = (projectIndex: number) =>
    getEffectiveItems(designShowcase[projectIndex]).length;

  const handlePrevMedia = (projectIndex: number) => {
    const len = getEffectiveLength(projectIndex);
    setMediaIndices(prev => ({
      ...prev,
      [projectIndex]: prev[projectIndex] > 0 ? prev[projectIndex] - 1 : len - 1
    }));
  };

  const handleNextMedia = (projectIndex: number) => {
    const len = getEffectiveLength(projectIndex);
    setMediaIndices(prev => ({
      ...prev,
      [projectIndex]: prev[projectIndex] < len - 1 ? prev[projectIndex] + 1 : 0
    }));
  };

  // Handle iframe load events
  const handleIframeLoad = (key: string) => {
    setIframeLoading(prev => ({ ...prev, [key]: false }));
  };

  // Helper function to detect if URL is a YouTube embed
  const isYouTubeEmbed = (url: string) => {
    return url.includes('youtube.com/embed') || url.includes('youtu.be');
  };

  // Helper function to detect if URL is a direct video file
  const isDirectVideo = (url: string) => {
    return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov');
  };

  // Helper function to detect if URL is a Canva design
  const isCanvaEmbed = (url: string) => {
    return url.includes('canva.com/design');
  };

  // Convert Canva view link to embed link
  const getCanvaEmbedUrl = (url: string) => {
    // Convert: https://www.canva.com/design/ID/view
    // To: https://www.canva.com/design/ID/view?embed
    return url.includes('?') ? `${url}&embed` : `${url}?embed`;
  };

  return (
    <div className="space-y-6 tablet-section">
      {/* Visual Showcase Grid */}
      {designShowcase.map((item, index) => {
        const currentMediaIndex = mediaIndices[index] || 0;
        const effectiveMediaItems = getEffectiveItems(item);
        const currentMedia = effectiveMediaItems[currentMediaIndex];
        const hasMultipleMedia = effectiveMediaItems.length > 1;
        const isFirstSlide = currentMediaIndex === 0;
        const isLastSlide = currentMediaIndex === effectiveMediaItems.length - 1;

        return (
          <div
            key={index}
            className="bg-[#FFF0F5] rounded-2xl p-4 sm:p-6 border-2 border-[#FFB6C1]/30 shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:border-[#FFB6C1] transition-all duration-200"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#FFB6C1]/20 rounded-full flex items-center justify-center">
                <Palette className="w-5 h-5 text-[#E9518D]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#E9518D] mb-1 break-words">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 break-words">{item.type}</p>
              </div>
            </div>

            {/* Media Preview with Slideshow */}
            <div className="mb-4 bg-white rounded-xl p-4 border border-[#FFB6C1]/20">
              {currentMedia ? (
                <div className="relative">
                  <div className="aspect-video rounded-lg overflow-hidden bg-[#FFF0F5] relative flex items-center justify-center">
                    {currentMedia.type === 'image' ? (
                      <ImageWithFallback
                        src={currentMedia.src ?? currentMedia.url ?? ''}
                        alt={`${item.title} - Image ${currentMediaIndex + 1}`}
                        className="w-full h-full"
                        imgClassName="object-contain"
                      />
                    ) : currentMedia.type === 'video' ? (
                      <>
                        {/* Loading overlay for iframes/videos */}
                        {iframeLoading[`project-${index}-media-${currentMediaIndex}`] && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FFF0F5]/50 to-[#FFB6C1]/20 rounded-lg z-10">
                            <LoadingSpinner size="medium" color="pink" />
                          </div>
                        )}
                        
                        {!currentMedia.url ? null
                        : isYouTubeEmbed(currentMedia.url) ? (
                          <iframe
                            src={currentMedia.url}
                            title={`${item.title} - Video ${currentMediaIndex + 1}`}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            onLoad={() => handleIframeLoad(`project-${index}-media-${currentMediaIndex}`)}
                          />
                        ) : isDirectVideo(currentMedia.url) ? (
                          <video
                            src={currentMedia.url}
                            controls
                            className="w-full h-full object-cover"
                            preload="metadata"
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : isCanvaEmbed(currentMedia.url) ? (
                          <iframe
                            src={getCanvaEmbedUrl(currentMedia.url)}
                            title={`${item.title} - Video ${currentMediaIndex + 1}`}
                            className="w-full h-full"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            onLoad={() => handleIframeLoad(`project-${index}-media-${currentMediaIndex}`)}
                          />
                        ) : (
                          <iframe
                            src={currentMedia.url}
                            title={`${item.title} - Video ${currentMediaIndex + 1}`}
                            className="w-full h-full"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            onLoad={() => handleIframeLoad(`project-${index}-media-${currentMediaIndex}`)}
                          />
                        )}
                      </>
                    ) : null}
                  </div>
                  
                  {/* Navigation Buttons - Only show if multiple media items */}
                  {hasMultipleMedia && (
                    <>
                      {/* Previous Button - Hidden on first slide */}
                      {!isFirstSlide && (
                        <button
                          onClick={() => handlePrevMedia(index)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg border-2 border-[#FFB6C1] flex items-center justify-center transition-all hover:scale-110 group z-10"
                          aria-label="Previous media"
                        >
                          <ChevronLeft className="w-5 h-5 text-[#E9518D] group-hover:text-[#fd6698]" />
                        </button>
                      )}
                      
                      {/* Next Button - Hidden on last slide */}
                      {!isLastSlide && (
                        <button
                          onClick={() => handleNextMedia(index)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg border-2 border-[#FFB6C1] flex items-center justify-center transition-all hover:scale-110 group z-10"
                          aria-label="Next media"
                        >
                          <ChevronRight className="w-5 h-5 text-[#E9518D] group-hover:text-[#fd6698]" />
                        </button>
                      )}

                      {/* Media counter dots */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {effectiveMediaItems.map((media, mediaIndex) => (
                          <button
                            key={mediaIndex}
                            onClick={() => setMediaIndices(prev => ({ ...prev, [index]: mediaIndex }))}
                            className={`transition-all ${
                              mediaIndex === currentMediaIndex
                                ? 'bg-[#E9518D] w-6 h-2'
                                : 'bg-white/70 hover:bg-white w-2 h-2'
                            } rounded-full border border-[#FFB6C1]/30`}
                            aria-label={`Go to ${media.type} ${mediaIndex + 1}`}
                            title={media.type === 'video' ? `Video ${mediaIndex + 1}` : `Image ${mediaIndex + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-[#FFB6C1]/10 to-[#87CEEB]/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <ImageIcon className="w-12 h-12 mx-auto mb-2 text-[#E9518D]/40" />
                    <p className="text-xs text-gray-500">Visual Preview</p>
                    <p className="text-xs text-[#E9518D] mt-1">{item.title}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Visual Elements List */}
            <div className="bg-white/50 rounded-xl p-3 sm:p-4 border border-[#FFB6C1]/20">
              <h4 className="text-[#E9518D] text-sm mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Visual Elements:
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.visualElements.map((element, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-gradient-to-r from-[#FFB6C1]/20 to-[#87CEEB]/20 text-[#E9518D] rounded-full text-xs sm:text-sm border border-[#FFB6C1]/30"
                  >
                    {element}
                  </span>
                ))}
              </div>
            </div>

            {/* Color Palette if exists */}
            {item.colorPalette && (
              <div className="mt-4 bg-white/50 rounded-xl p-3 sm:p-4 border border-[#FFB6C1]/20">
                <h4 className="text-[#E9518D] text-sm mb-2">Color Palette:</h4>
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

            {/* Demo Link Button */}
            {item.demoLink && item.demoLink.trim() !== '' && (
              <div className="mt-4 flex justify-end">
                <StandardButton
                  href={item.demoLink}
                  icon={Eye}
                  label="View Demo"
                  variant="primary"
                  external
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
});