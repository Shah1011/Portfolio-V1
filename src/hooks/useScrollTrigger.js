import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

// Custom hook for scroll-triggered animation
const useScrollTrigger = (duration, delay) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('scroll-trigger');
      if (element) {
        const offset = window.scrollY + window.innerHeight;
        const elementOffset = element.offsetTop;
        if (offset > elementOffset) {
          controls.start('visible');
        }
      }
    };

    // Check scroll position on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  const animationVariants = {
    hidden: {
      translateY: 10,
      opacity: 0,
    },
    visible: {
      translateY: 0,
      opacity: 1,
      transition: {
        ease: 'easeIn',
        duration: duration,
        delay: delay,
      },
    },
  };

  return { controls, animationVariants };
};

export default useScrollTrigger;
