import React, { useState } from 'react'
import { LoadingSpinner } from '../ui/LoadingSpinner'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

/**
 * Image component with automatic loading and error fallback states
 * Used for all user-generated or external images in the portfolio
 */
export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = () => {
    setDidError(true)
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  const { src, alt, style, className, ...rest } = props

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
        className={`w-full h-full transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        {...rest} 
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  )
}