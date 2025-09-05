import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMouseInteraction } from './hooks';
import { getContent } from './utils';

interface VideoPlayerProps {
  videoId: string;
  title?: {
    en: string;
    hu: string;
  };
  className?: string;
  height?: string;
}

const defaultTitle = {
  en: 'Discover Our Manufacturing Process',
  hu: 'Fedezze fel gyártási folyamatunkat'
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoId,
  title = defaultTitle,
  className = '',
  height = 'h-[600px] md:h-[675px]'
}) => {
  const { language } = useLanguage();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { mousePosition } = useMouseInteraction();

  return (
    <motion.div 
      className={`w-full ${height} rounded-xl overflow-hidden shadow-2xl relative transform-gpu ${className}`}
      style={{ 
        perspective: "1000px",
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${mousePosition.y * -3}deg) rotateY(${mousePosition.x * 5}deg)`
      }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4 }}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 border border-white/30 rounded-xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-[2px] z-0" />
      
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-xl p-[2px] z-10 overflow-hidden">
        <motion.div 
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ backgroundSize: '200% 200%' }}
        />
        <div className="absolute inset-[1.5px] rounded-lg bg-white" />
      </div>
      
      {/* Video thumbnail overlay */}
      {!isVideoPlaying && (
        <div 
          className="absolute inset-0 z-30 cursor-pointer flex items-center justify-center"
          onClick={() => setIsVideoPlaying(true)}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
          <motion.div 
            className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center pl-1">
              <motion.svg 
                width="20" 
                height="24" 
                viewBox="0 0 10 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path d="M0 0L10 6L0 12V0Z" fill="white"/>
              </motion.svg>
            </div>
          </motion.div>
          <div className="absolute bottom-10 w-full text-center">
            <motion.h3 
              className="text-white text-xl md:text-2xl font-medium drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}            >
              {getContent(title, language)}
            </motion.h3>
          </div>
        </div>
      )}
      
      {/* YouTube iframe */}
      <motion.iframe
        className="w-full h-full relative z-20"
        src={`https://www.youtube.com/embed/${videoId}?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=${isVideoPlaying ? 1 : 0}&enablejsapi=1&origin=https%3A%2F%2Fflair-plastic.hu&widgetid=1`}        title={getContent(title, language)}
        frameBorder="0"
        allowFullScreen
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Corner accents */}
      {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute w-8 h-8 z-40 pointer-events-none ${
            pos === 'top-left' ? 'top-4 left-4' : 
            pos === 'top-right' ? 'top-4 right-4' : 
            pos === 'bottom-left' ? 'bottom-4 left-4' : 
            'bottom-4 right-4'
          }`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path 
              d={
                pos === 'top-left' ? "M1 1V12H3V3H12V1H1Z" : 
                pos === 'top-right' ? "M31 1H20V3H29V12H31V1Z" : 
                pos === 'bottom-left' ? "M1 31H12V29H3V20H1V31Z" : 
                "M31 31V20H29V29H20V31H31Z"
              }
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default VideoPlayer;
