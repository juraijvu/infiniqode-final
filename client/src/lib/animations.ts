import gsap from 'gsap';

export const animateIn = (element: HTMLElement | Element | string, options: any = {}) => {
  const defaults = {
    duration: 0.6,
    ease: 'power2.out',
    y: 50,
    opacity: 0
  };
  
  return gsap.fromTo(element, 
    { ...defaults },
    { ...options, y: 0, opacity: 1 }
  );
};

export const staggerIn = (elements: HTMLElement[] | NodeList | string, options: any = {}) => {
  const defaults = {
    duration: 0.5,
    ease: 'power2.out',
    y: 30,
    opacity: 0,
    stagger: 0.1
  };
  
  return gsap.fromTo(elements,
    { ...defaults },
    { ...options, y: 0, opacity: 1 }
  );
};

export const slideInFromLeft = (element: HTMLElement | Element | string, options: any = {}) => {
  const defaults = {
    duration: 0.8,
    ease: 'power3.out'
  };
  
  return gsap.fromTo(element,
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, ...defaults, ...options }
  );
};

export const slideInFromRight = (element: HTMLElement | Element | string, options: any = {}) => {
  const defaults = {
    duration: 0.8,
    ease: 'power3.out'
  };
  
  return gsap.fromTo(element,
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1, ...defaults, ...options }
  );
};

export const morphCards = (elements: HTMLElement[] | NodeList | string) => {
  return gsap.fromTo(elements,
    {
      scale: 0.8,
      opacity: 0,
      rotationY: -45
    },
    {
      scale: 1,
      opacity: 1,
      rotationY: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
      stagger: 0.15
    }
  );
};

export const floatingAnimation = (element: HTMLElement | Element | string) => {
  return gsap.to(element, {
    y: -10,
    duration: 2,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1
  });
};

export const textReveal = (element: HTMLElement | Element | string) => {
  const tl = gsap.timeline();
  
  tl.fromTo(element,
    { 
      clipPath: 'inset(100% 0 0 0)',
      y: 50
    },
    {
      clipPath: 'inset(0% 0 0 0)',
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    }
  );
  
  return tl;
};

export const logoAnimation = (element: HTMLElement | Element | string) => {
  const tl = gsap.timeline();
  
  tl.fromTo(element,
    {
      scale: 0.5,
      rotation: -180,
      opacity: 0
    },
    {
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration: 1,
      ease: 'elastic.out(1, 0.5)'
    }
  );
  
  return tl;
};