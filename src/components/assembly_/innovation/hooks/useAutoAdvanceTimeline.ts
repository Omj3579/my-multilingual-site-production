import { useEffect, useState } from 'react';

export const useAutoAdvanceTimeline = (timelineLength: number, interval: number = 5000) => {
  const [activeInnovation, setActiveInnovation] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveInnovation((prev) => (prev + 1) % timelineLength);
    }, interval);
    
    return () => clearInterval(timer);
  }, [timelineLength, interval]);

  return {
    activeInnovation,
    setActiveInnovation
  };
};
