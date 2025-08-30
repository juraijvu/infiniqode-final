import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Optimized animation configurations for smooth performance
export const animationConfig = {
  ease: "power2.out", // Faster, smoother easing
  duration: 0.5, // Faster animations
  stagger: 0.08, // Quicker stagger
  scrollTrigger: {
    start: "top 85%",
    end: "bottom 15%",
    toggleActions: "play none none reverse",
    fastScrollEnd: true, // Better performance on fast scrolling
    preventOverlaps: true
  }
};

// Custom hooks for animations
export const useFadeInUp = (delay: number = 0) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current, 
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationConfig.duration,
          ease: animationConfig.ease,
          delay,
          scrollTrigger: {
            trigger: ref.current,
            ...animationConfig.scrollTrigger
          }
        }
      );
    }
  }, [delay]);

  return ref;
};

export const useStaggerAnimation = (selector: string, delay: number = 0) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll(selector);
      
      gsap.fromTo(elements,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationConfig.duration,
          ease: animationConfig.ease,
          stagger: animationConfig.stagger,
          delay,
          scrollTrigger: {
            trigger: containerRef.current,
            ...animationConfig.scrollTrigger
          }
        }
      );
    }
  }, [selector, delay]);

  return containerRef;
};

export const useCountAnimation = (
  endValue: number, 
  duration: number = 2,
  suffix: string = ""
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      const counter = { value: 0 };
      
      gsap.to(counter, {
        value: endValue,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = Math.floor(counter.value) + suffix;
          }
        },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }
  }, [endValue, duration, suffix]);

  return ref;
};

export const useParallaxEffect = (speed: number = 0.5) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        yPercent: -50 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }
  }, [speed]);

  return ref;
};

export const useTextReveal = (text: string) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      timeline
        .fromTo(ref.current, 
          { 
            opacity: 0,
            scale: 0.8 
          }, 
          { 
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out"
          }
        )
        .to(ref.current, {
          text: text,
          duration: text.length * 0.05,
          ease: "none"
        }, "-=0.2");
    }
  }, [text]);

  return ref;
};

export const useHoverAnimation = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      
      // Add will-change for better performance
      element.style.willChange = 'transform';

      const handleMouseEnter = () => {
        gsap.to(element, {
          scale: 1.03, // Slightly reduced for smoother effect
          y: -3,
          duration: 0.25, // Faster response
          ease: "power1.out", // Lighter easing
          force3D: true
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          scale: 1,
          y: 0,
          duration: 0.25,
          ease: "power1.out",
          force3D: true
        });
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.style.willChange = 'auto';
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return ref;
};

// Optimized global animation setup
export const initializeGSAP = () => {
  gsap.defaults({
    ease: "power2.out",
    duration: 0.5
  });

  // Enhanced performance settings
  gsap.config({
    force3D: true, // Force hardware acceleration
    nullTargetWarn: false
  });

  ScrollTrigger.config({
    limitCallbacks: true, // Better performance
    syncInterval: 120 // Smoother sync
  });

  // Set up scroll refresh
  ScrollTrigger.refresh();

  // Cleanup function
  return () => {
    ScrollTrigger.getAll().forEach(st => st.kill());
  };
};

// Utility functions
export const animateIn = (element: HTMLElement, delay: number = 0) => {
  gsap.fromTo(element,
    {
      y: 40,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      delay
    }
  );
};

export const animateOut = (element: HTMLElement, onComplete?: () => void) => {
  gsap.to(element, {
    y: -40,
    opacity: 0,
    duration: 0.4,
    ease: "power2.in",
    onComplete
  });
};