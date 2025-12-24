import { useState, useCallback } from 'react';

/**
 * Custom hook for managing image loading and error states
 * @returns Object with loading state, error state, and event handlers
 */
export function useImageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  const reset = useCallback(() => {
    setIsLoading(true);
    setHasError(false);
  }, []);

  return {
    isLoading,
    hasError,
    handleLoad,
    handleError,
    reset,
  };
}

/**
 * Custom hook for managing multiple image loading states
 * @param imageKeys Array of keys to track
 * @returns Object with loading states, error states, and event handlers
 */
export function useMultiImageLoader<T extends string>(imageKeys: T[]) {
  const [loadingStates, setLoadingStates] = useState<Record<T, boolean>>(
    imageKeys.reduce((acc, key) => ({ ...acc, [key]: true }), {} as Record<T, boolean>)
  );
  
  const [errorStates, setErrorStates] = useState<Record<T, boolean>>(
    imageKeys.reduce((acc, key) => ({ ...acc, [key]: false }), {} as Record<T, boolean>)
  );

  const handleLoad = useCallback((key: T) => {
    setLoadingStates(prev => ({ ...prev, [key]: false }));
    setErrorStates(prev => ({ ...prev, [key]: false }));
  }, []);

  const handleError = useCallback((key: T) => {
    setLoadingStates(prev => ({ ...prev, [key]: false }));
    setErrorStates(prev => ({ ...prev, [key]: true }));
  }, []);

  const allLoaded = Object.values(loadingStates).every(state => !state);
  const anyError = Object.values(errorStates).some(state => state);

  return {
    loadingStates,
    errorStates,
    handleLoad,
    handleError,
    allLoaded,
    anyError,
  };
}
