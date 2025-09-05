import { useEffect, useState } from 'react';

export const useTimelineProgress = () => {
  const [timelineProgress, setTimelineProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrollY / documentHeight));
      setTimelineProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();
    
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return timelineProgress;
};
