import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with optimized settings
    const lenis = new Lenis({
      duration: 1.2, // Smooth scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      gestureDirection: 'vertical', // Allow vertical gestures
      smooth: true,
      smoothTouch: false, // Disable on touch devices for better performance
      touchMultiplier: 2, // Touch scroll speed multiplier
      infinite: false, // Disable infinite scrolling
      autoResize: true, // Auto resize on window resize
      wrapper: window, // Use window as wrapper
      content: document.documentElement, // Use document as content
      wheelMultiplier: 1, // Mouse wheel speed multiplier
      normalizeWheel: true, // Normalize wheel delta
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