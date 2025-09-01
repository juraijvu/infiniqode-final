import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with mobile-optimized settings
    const lenis = new Lenis({
      duration: 0.8, // Faster scroll duration for better responsiveness
      easing: (t) => 1 - Math.pow(1 - t, 3), // Simple cubic easing for better performance
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false, // Keep disabled for native mobile scrolling
      touchMultiplier: 1, // Reduced for more natural feel
      infinite: false,
      autoResize: true,
      wrapper: window,
      content: document.documentElement,
      wheelMultiplier: 0.8, // Slightly reduced for smoother desktop scrolling
      normalizeWheel: true,
    });

    lenisRef.current = lenis;

    // Update ScrollTrigger on scroll
    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
    });

    // Request animation frame loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the loop
    requestAnimationFrame(raf);

    // Refresh ScrollTrigger when Lenis is ready
    ScrollTrigger.refresh();

    // Handle resize
    const handleResize = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
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