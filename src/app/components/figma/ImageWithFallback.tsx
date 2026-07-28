import React, { useState } from 'react'
import { LoadingSpinner } from '../ui/LoadingSpinner'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Enable lazy loading for images below the fold
   * @default true
   */
  lazy?: boolean;
  /**
   * Priority loading for critical images (disables lazy loading)
   * Use for hero images and above-the-fold content
   * @default false
   */
  priority?: boolean;
  /**
   * Responsive image sources for different screen sizes
   * Example: "image-640.webp 640w, image-1024.webp 1024w, image-1920.webp 1920w"
   */
  srcSet?: string;
  /**
   * Image sizes attribute for responsive images
   * Example: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
   */
  sizes?: string;
}

/**
 * Image component with automatic loading and error fallback states
 * Used for all user-generated or external images in the portfolio
 * 
 * Features:
 * - Lazy loading (enabled by default)
 * - Priority loading for critical images
 * - Responsive image support (srcset/sizes)
 * - Loading spinner
 * - Error fallback
 * - Smooth fade-in animation
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
    ...rest 
  } = props

  // Determine loading strategy
  const loadingStrategy = priority ? 'eager' : (loading || (lazy ? 'lazy' : 'eager'))

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
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
        className={`w-full h-full transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        {...rest} 
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  )
}