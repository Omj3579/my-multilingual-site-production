import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { useMouseInteraction } from './hooks';

interface GradientBlobsProps {
  blob1?: {
    gradient: string;
    size: string;
    opacity: number;
    animationDuration: number;
  };
  blob2?: {
    gradient: string;
    size: string;
    opacity: number;
    animationDuration: number;
  };
}

const defaultBlobs = {
  blob1: {
    gradient: "linear-gradient(35deg, #4285f4, #34a853)",
    size: "40vw",
    opacity: 0.2,
    animationDuration: 8
  },
  blob2: {
    gradient: "linear-gradient(35deg, #fbbc05, #ea4335)",
    size: "35vw",
    opacity: 0.15,
    animationDuration: 7
  }
};

const GradientBlobs: React.FC<GradientBlobsProps> = ({ blob1, blob2 }) => {
  const { cursorX, cursorY } = useMouseInteraction();

  const blobs = {
    blob1: { ...defaultBlobs.blob1, ...blob1 },
    blob2: { ...defaultBlobs.blob2, ...blob2 }
  };

  // Calculate blob positions
  const blobX1 = useTransform(cursorX, [0, 1], ["0%", "100%"]);
  const blobY1 = useTransform(cursorY, [0, 1], ["0%", "100%"]);
  const blobX2 = useTransform(cursorX, [0, 1], ["100%", "0%"]);
  const blobY2 = useTransform(cursorY, [0, 1], ["100%", "0%"]);

  return (
    <>
      {/* Floating blob 1 */}
      <motion.div 
        className="absolute rounded-full blur-3xl"
        style={{
          width: blobs.blob1.size,
          height: blobs.blob1.size,
          background: blobs.blob1.gradient,
          opacity: blobs.blob1.opacity,
          top: blobY1,
          left: blobX1,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: blobs.blob1.animationDuration,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Floating blob 2 */}
      <motion.div 
        className="absolute rounded-full blur-3xl"
        style={{
          width: blobs.blob2.size,
          height: blobs.blob2.size,
          background: blobs.blob2.gradient,
          opacity: blobs.blob2.opacity,
          top: blobY2,
          left: blobX2,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: blobs.blob2.animationDuration,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </>
  );
};

export default GradientBlobs;
