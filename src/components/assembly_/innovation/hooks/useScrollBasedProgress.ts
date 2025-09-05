import { useEffect, useRef } from 'react';

export const useScrollBasedProgress = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const progress = Math.max(
          0, 
          Math.min(
            1, 
            (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
          )
        );
        return progress;
      }
      return 0;
    };

    const handleScroll = () => {
      updateProgress();
    };

    window.addEventListener('scroll', handleScroll);
    updateProgress();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { containerRef };
};
