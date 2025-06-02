import type { Variant } from 'framer-motion';

// Fade in animation
export const fadeIn: Record<string, Variant> = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

// Container for staggered children
export const staggerContainer: Record<string, Variant> = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Slide in from sides
export const slideIn = (direction: 'left' | 'right'): Record<string, Variant> => {
  return {
    hidden: { 
      x: direction === 'left' ? -100 : 100,
      opacity: 0
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
};

// Scale up animation
export const scaleUp: Record<string, Variant> = {
  hidden: { 
    scale: 0.8,
    opacity: 0
  },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

// Page transition
export const pageTransition: Record<string, Variant> = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};