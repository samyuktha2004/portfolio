import React, { useState } from 'react'
import { LoadingSpinner } from './LoadingSpinner'

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  lazy?: boolean;
  priority?: boolean;
  srcSet?: string;
  sizes?: string;
  showPlaceholderOnError?: boolean;
  /** Classes applied directly to the inner <img> element (e.g. object-contain, object-cover) */
  imgClassName?: string;
}

/**
 * Image component with automatic loading state and graceful error handling
 * Used for all user-generated or external images in the portfolio
 *
 * Features:
 * - Lazy loading (enabled by default)
 * - Priority loading for critical images
 * - Responsive image support (srcset/sizes)
 * - Loading spinner with kawaii pink gradient
 * - Returns null on error (cleaner than showing broken image placeholders)
 * - Smooth fade-in animation on successful load
 */
export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = () => {
    setDidError(true)
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  const {
    src,
    alt,
    style,
    className,
    lazy = true,
    priority = false,
    srcSet,
    sizes,
    loading,
    showPlaceholderOnError = false,
    imgClassName = '',
    ...rest
  } = props

  // Determine loading strategy
  const loadingStrategy = priority ? 'eager' : (loading || (lazy ? 'lazy' : 'eager'))

  if (didError) {
    return (
      <div
        className={`inline-flex flex-col items-center justify-center gap-1.5 bg-[#FFF0F5] border border-[#FFB6C1]/30 rounded-lg ${className ?? ''}`}
        style={style}
        role="img"
        aria-label={alt ? `${alt} (unavailable)` : 'Image unavailable'}
      >
        <svg className="w-8 h-8 text-[#FFB6C1]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 19.5h16.5M3.75 4.5h16.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75Z" />
        </svg>
        <span className="text-xs text-gray-400 px-2 text-center">{alt || 'Image unavailable'}</span>
      </div>
    )
  }

  return (
    <div className={`relative ${className ?? ''}`} style={style}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FFF0F5]/50 to-[#FFB6C1]/20 rounded-lg z-10">
          <LoadingSpinner size="medium" color="pink" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        srcSet={srcSet}
        sizes={sizes}
        loading={loadingStrategy}
        decoding={priority ? 'sync' : 'async'}
        className={`w-full h-full transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${imgClassName}`}
        {...rest}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  )
}
