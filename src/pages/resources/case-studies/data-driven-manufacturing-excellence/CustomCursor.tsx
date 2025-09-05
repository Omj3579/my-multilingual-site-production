import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target.hasAttribute('data-hover')) {
        setIsHovering(true);
        
        // Determine cursor variant based on element type
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          setCursorVariant('button');
          setCursorText('Click');
        } else if (target.hasAttribute('data-cursor-text')) {
          setCursorVariant('text');
          setCursorText(target.getAttribute('data-cursor-text'));
        } else {
          setCursorVariant('hover');
          setCursorText('');
        }
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      if (target.hasAttribute('data-hover')) {
        setIsHovering(false);
        setCursorVariant('default');
        setCursorText('');
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [cursorX, cursorY]);

  const cursorVariants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(59, 130, 246, 0.3)',
      border: '2px solid rgba(59, 130, 246, 0.5)',
    },
    hover: {
      scale: 1.5,
      backgroundColor: 'rgba(6, 182, 212, 0.2)',
      border: '2px solid rgba(6, 182, 212, 0.8)',
    },
    button: {
      scale: 2,
      backgroundColor: 'rgba(16, 185, 129, 0.2)',
      border: '2px solid rgba(16, 185, 129, 0.8)',
    },
    text: {
      scale: 3,
      backgroundColor: 'rgba(139, 92, 246, 0.2)',
      border: '2px solid rgba(139, 92, 246, 0.8)',
    }
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-multiply"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: 32,
          height: 32,
        }}
        animate={cursorVariants[cursorVariant]}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />

      {/* Cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full bg-blue-500"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: 4,
          height: 4,
          left: 14,
          top: 14,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />

      {/* Cursor text */}
      {cursorText && (
        <motion.div
          className="fixed pointer-events-none z-50 text-white text-xs font-medium px-2 py-1 bg-gray-900 rounded whitespace-nowrap"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            left: 40,
            top: -10,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28
          }}
        >
          {cursorText}
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;