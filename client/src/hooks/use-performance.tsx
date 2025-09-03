import { useEffect, useState } from 'react';

export interface PerformanceSettings {
  isMobile: boolean;
  isLowEndDevice: boolean;
  prefersReducedMotion: boolean;
  shouldDisableAnimations: boolean;
  shouldDisableBackdropFilter: boolean;
  shouldUseSimpleBackground: boolean;
}

export const usePerformanceOptimization = (): PerformanceSettings => {
  const [settings, setSettings] = useState<PerformanceSettings>({
    isMobile: false,
    isLowEndDevice: false,
    prefersReducedMotion: false,
    shouldDisableAnimations: false,
    shouldDisableBackdropFilter: false,
    shouldUseSimpleBackground: false,
  });

  useEffect(() => {
    const updateSettings = () => {
      // Enhanced mobile detection
      const isMobile = 
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth < 768 ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0;

      // Low-end device detection
      const isLowEndDevice = 
        (navigator as any).hardwareConcurrency <= 4 ||
        (navigator as any).deviceMemory <= 4 ||
        window.innerWidth < 640;

      // Reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Determine optimization flags
      const shouldDisableAnimations = isMobile || isLowEndDevice || prefersReducedMotion;
      const shouldDisableBackdropFilter = isMobile || isLowEndDevice;
      const shouldUseSimpleBackground = isMobile || isLowEndDevice;

      setSettings({
        isMobile,
        isLowEndDevice,
        prefersReducedMotion,
        shouldDisableAnimations,
        shouldDisableBackdropFilter,
        shouldUseSimpleBackground,
      });

      // Apply global CSS classes for performance optimizations
      const body = document.body;
      
      if (shouldDisableAnimations) {
        body.classList.add('disable-animations');
      }
      
      if (shouldDisableBackdropFilter) {
        body.classList.add('disable-backdrop-filter');
      }
      
      if (shouldUseSimpleBackground) {
        body.classList.add('simple-background');
      }
      
      if (isMobile) {
        body.classList.add('mobile-device');
      }
    };

    updateSettings();
    
    // Listen for viewport changes
    window.addEventListener('resize', updateSettings);
    
    // Listen for reduced motion changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    motionQuery.addEventListener('change', updateSettings);

    return () => {
      window.removeEventListener('resize', updateSettings);
      motionQuery.removeEventListener('change', updateSettings);
    };
  }, []);

  return settings;
};

// Utility function to conditionally apply performance-sensitive styles
export const getPerformanceOptimizedStyle = (
  settings: PerformanceSettings,
  normalStyle: React.CSSProperties,
  optimizedStyle: React.CSSProperties = {}
): React.CSSProperties => {
  if (settings.shouldDisableAnimations || settings.isMobile) {
    return { ...normalStyle, ...optimizedStyle };
  }
  return normalStyle;
};