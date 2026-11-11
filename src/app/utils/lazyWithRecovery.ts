import { lazy, type ComponentType, type LazyExoticComponent } from 'react';

const RECOVERY_PREFIX = 'portfolio:chunk-recovery:';

export function isModuleLoadError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;

  return /chunk|dynamically imported module|failed to fetch|importing a module script|module script/i.test(
    error.message,
  );
}

export function lazyWithRecovery<T extends ComponentType<any>>(
  importer: () => Promise<{ default: T }>,
  featureKey: string,
): LazyExoticComponent<T> {
  return lazy(async () => {
    const recoveryKey = `${RECOVERY_PREFIX}${featureKey}`;

    try {
      const module = await importer();
      try {
        sessionStorage.removeItem(recoveryKey);
      } catch {
        // Recovery still works when session storage is unavailable.
      }
      return module;
    } catch (error) {
      if (typeof window !== 'undefined' && isModuleLoadError(error)) {
        try {
          if (!sessionStorage.getItem(recoveryKey)) {
            sessionStorage.setItem(recoveryKey, 'attempted');
            window.location.reload();
            return await new Promise<never>(() => {});
          }
        } catch {
          // Storage can be unavailable in privacy-restricted browsers.
        }
      }

      throw error;
    }
  });
}
