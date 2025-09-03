import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // EMERGENCY FIX: Ensure basic scrolling always works
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
    
    // Check if device is mobile for performance optimization
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    if (isMobile) {
      // For mobile, use native scrolling only
      return;
    }

    // Initialize Lenis only for desktop with minimal config
    try {
      const lenis = new Lenis({
        duration: 0.6,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        touchMultiplier: 1,
        infinite: false,
        wrapper: window,
        content: document.documentElement,
        wheelMultiplier: 0.8,
      });

      lenisRef.current = lenis;

      // Minimal ScrollTrigger integration for performance
      let rafId: number;
      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      // Cleanup
      return () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
        }
        lenis.destroy();
        lenisRef.current = null;
      };
    } catch (error) {
      // If Lenis fails, ensure native scrolling works
      console.warn('Lenis initialization failed, using native scroll:', error);
      return;
    }
  }, []);

  // Return Lenis instance for manual control if needed
  return lenisRef.current;
};

// Utility functions for scroll control
export const scrollTo = (target: string | HTMLElement | number, options?: any) => {
  const lenis = window.lenis;
  if (lenis) {
    lenis.scrollTo(target, options);
  }
};

export const stopScroll = () => {
  const lenis = window.lenis;
  if (lenis) {
    lenis.stop();
  }
};

export const startScroll = () => {
  const lenis = window.lenis;
  if (lenis) {
    lenis.start();
  }
};

// Add Lenis to window for global access
declare global {
  interface Window {
    lenis: Lenis;
  }
}