import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check if device is mobile for performance optimization
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    if (isMobile) {
      // For mobile, use native scrolling for best performance
      return;
    }

    // Initialize Lenis only for desktop
    const lenis = new Lenis({
      duration: 0.6,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 1,
      infinite: false,
      autoResize: true,
      wrapper: window,
      content: document.documentElement,
      wheelMultiplier: 0.8,
      normalizeWheel: true,
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