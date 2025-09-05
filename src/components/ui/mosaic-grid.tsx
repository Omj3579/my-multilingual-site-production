import React from 'react';
import { motion } from 'framer-motion';

interface MosaicGridProps {
  children: React.ReactElement[];
  className?: string;
}

// Mosaic pattern definitions - different layouts for cards
const mosaicPatterns = [
  // Pattern for 3 items
  {
    itemCount: 3,
    gridTemplate: `
      "a a"
      "b c"
    `,
    areas: [
      { area: 'a', size: 'large' },    // spans 2x1
      { area: 'b', size: 'normal' },   // spans 1x1
      { area: 'c', size: 'normal' },   // spans 1x1
    ]
  },
  // Pattern for 6 items
  {
    itemCount: 6,
    gridTemplate: `
      "a a b"
      "c d b"
      "e f b"
    `,
    areas: [
      { area: 'a', size: 'large' },    // spans 2x1
      { area: 'b', size: 'tall' },     // spans 1x3
      { area: 'c', size: 'normal' },   // spans 1x1
      { area: 'd', size: 'normal' },   // spans 1x1
      { area: 'e', size: 'normal' },   // spans 1x1
      { area: 'f', size: 'normal' },   // spans 1x1
    ]
  },
  // Pattern for 9 items
  {
    itemCount: 9,
    gridTemplate: `
      "a a b"
      "c d b"
      "c e f"
      "g h i"
    `,
    areas: [
      { area: 'a', size: 'large' },    // spans 2x1
      { area: 'b', size: 'tall' },     // spans 1x3
      { area: 'c', size: 'tall' },     // spans 1x2
      { area: 'd', size: 'normal' },   // spans 1x1
      { area: 'e', size: 'normal' },   // spans 1x1
      { area: 'f', size: 'normal' },   // spans 1x1
      { area: 'g', size: 'normal' },   // spans 1x1
      { area: 'h', size: 'normal' },   // spans 1x1
      { area: 'i', size: 'normal' },   // spans 1x1
    ]
  },
  // Pattern for 12 items
  {
    itemCount: 12,
    gridTemplate: `
      "a a b"
      "c d b"
      "c e f"
      "g h i"
      "j j k"
      "l m k"
    `,
    areas: [
      { area: 'a', size: 'large' },    // spans 2x1
      { area: 'b', size: 'tall' },     // spans 1x3
      { area: 'c', size: 'tall' },     // spans 1x2
      { area: 'd', size: 'normal' },   // spans 1x1
      { area: 'e', size: 'normal' },   // spans 1x1
      { area: 'f', size: 'normal' },   // spans 1x1
      { area: 'g', size: 'normal' },   // spans 1x1
      { area: 'h', size: 'normal' },   // spans 1x1
      { area: 'i', size: 'normal' },   // spans 1x1
      { area: 'j', size: 'large' },    // spans 2x1
      { area: 'k', size: 'tall' },     // spans 1x2
      { area: 'l', size: 'normal' },   // spans 1x1
      { area: 'm', size: 'normal' },   // spans 1x1
    ]
  }
];

export const MosaicGrid: React.FC<MosaicGridProps> = ({ children, className = '' }) => {
  // Choose pattern based on number of children
  const getPattern = () => {
    const childCount = children.length;
    
    // Find the best fitting pattern
    const pattern = mosaicPatterns.find(p => p.itemCount >= childCount) || mosaicPatterns[mosaicPatterns.length - 1];
    
    return pattern;
  };

  const pattern = getPattern();
  const gridAreas = pattern.gridTemplate.trim().split('\n').map(row => row.trim()).join(' ');

  // Mobile fallback - use regular grid on small screens
  const mobileGrid = "grid-cols-1 gap-4";
  const tabletGrid = "md:grid-cols-2 md:gap-6";

  return (
    <>
      {/* Mobile & Tablet Layout - Regular Grid */}
      <div className={`grid ${mobileGrid} ${tabletGrid} lg:hidden ${className}`}>
        {children.map((child, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {child}
          </motion.div>
        ))}
      </div>      {/* Desktop Layout - Mosaic Grid */}
      <div 
        className={`hidden lg:grid gap-4 ${className}`}
        style={{
          gridTemplateAreas: gridAreas,
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: 'minmax(280px, auto)', // Allow cards to grow if needed
        }}
      >
        {children.slice(0, pattern.areas.length).map((child, index) => {
          const area = pattern.areas[index];
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ gridArea: area.area }}              className={`
                ${area.size === 'large' ? 'row-span-1' : ''}
                ${area.size === 'tall' ? 'row-span-2' : ''}
                ${area.size === 'normal' ? 'row-span-1' : ''}
                overflow-hidden flex flex-col
              `}            >
              <div className="h-full">
                {child}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Overflow items - display in regular grid below */}
      {children.length > pattern.areas.length && (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 ${className}`}>
          {children.slice(pattern.areas.length).map((child, index) => (
            <motion.div
              key={pattern.areas.length + index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (pattern.areas.length + index) * 0.1 }}
            >
              {child}
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
};

export default MosaicGrid;
