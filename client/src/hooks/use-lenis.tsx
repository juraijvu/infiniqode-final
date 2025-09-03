import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Enhanced mobile detection for performance optimization
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                    window.innerWidth < 768 || 
                    'ontouchstart' in window || 
                    navigator.maxTouchPoints > 0;
    
    // Also check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isMobile || prefersReducedMotion) {
      // For mobile and reduced motion, use native scrolling for best performance
      // Add smooth scroll behavior to body for better UX
      document.body.style.scrollBehavior = 'auto';
      return;
    }

    // Initialize Lenis only for desktop with optimized settings
    const lenis = new Lenis({
      duration: 0.8, // Slightly slower for better feel
      easing: (t) => 1 - Math.pow(1 - t, 4), // Smoother easing
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false, // Always disable touch smooth scrolling
      touchMultiplier: 0, // Disable touch multiplier completely
      infinite: false,
      autoResize: true,
      wrapper: window,
      content: document.documentElement,
      wheelMultiplier: 0.7, // Slightly reduce for smoother feel
      normalizeWheel: true,
      syncTouch: false, // Disable touch sync
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