import { useCallback, useState } from 'react';
import { MotionValue } from 'framer-motion';
import { MousePosition } from '../types';

export const useMouseTracking = (mouseX: MotionValue<number>, mouseY: MotionValue<number>) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x: e.clientX, y: e.clientY });
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  return {
    mousePosition,
    handleMouseMove
  };
};
