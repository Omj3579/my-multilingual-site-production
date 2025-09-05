import { useEffect, useState } from 'react';
import { CountingNumbers } from '../types';

export const useCountingNumbers = (inView: boolean) => {
  const [countingNumbers, setCountingNumbers] = useState<CountingNumbers>({
    carbonReduction: 0,
    energySaving: 0,
    wasteReduction: 0,
    roiIncrease: 0,
    productionIncrease: 0,
    qualityImprovement: 0
  });

  useEffect(() => {
    if (!inView) return;
    
    const numbers: CountingNumbers = {
      carbonReduction: 0,
      energySaving: 0,
      wasteReduction: 0,
      roiIncrease: 0,
      productionIncrease: 0,
      qualityImprovement: 0
    };

    const targets: CountingNumbers = {
      carbonReduction: 85,
      energySaving: 67,
      wasteReduction: 92,
      roiIncrease: 340,
      productionIncrease: 250,
      qualityImprovement: 99.8
    };

    const intervals: { [key: string]: NodeJS.Timeout } = {};
    
    (Object.keys(targets) as Array<keyof CountingNumbers>).forEach(key => {
      intervals[key] = setInterval(() => {
        numbers[key] += targets[key] / 100;
        if (numbers[key] >= targets[key]) {
          numbers[key] = targets[key];
          clearInterval(intervals[key]);
        }
        setCountingNumbers({...numbers});
      }, 30);
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, [inView]);

  return countingNumbers;
};
