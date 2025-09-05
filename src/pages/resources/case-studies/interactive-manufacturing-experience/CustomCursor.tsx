import React, { useEffect, useRef } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const CustomCursor = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  
  useEffect(() => {
    if (isMobile) return;
    
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX;
      const mouseY = clientY;
      
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      
      // Check if hovering over interactive elements
      const target = e.target;
      const isLinkOrButton = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.hover === 'true';
      
      if (isLinkOrButton) {
        cursor.classList.add('cursor-expanded');
        cursorDot.classList.add('cursor-dot-expanded');
      } else {
        cursor.classList.remove('cursor-expanded');
        cursorDot.classList.remove('cursor-dot-expanded');
      }
    };
    
    window.addEventListener('mousemove', moveCursor);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed w-20 h-20 -ml-10 -mt-10 rounded-full border border-amber-400/30 pointer-events-none z-50 opacity-0 transition-opacity duration-300" 
        style={{ 
          transform: 'translate3d(0, 0, 0)',
          mixBlendMode: 'difference'
        }}
      />
      <div 
        ref={cursorDotRef} 
        className="fixed w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-amber-500 pointer-events-none z-50 opacity-0 transition-opacity duration-300" 
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />
    </>
  );
};

export default CustomCursor;