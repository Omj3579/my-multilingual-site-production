import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw, X } from 'lucide-react';

interface EnhancedProductGalleryProps {
  images: string[];
  productName: string;
  className?: string;
}

const EnhancedProductGallery: React.FC<EnhancedProductGalleryProps> = ({
  images = ['/placeholder.svg'],
  productName,
  className = ''
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);

  const nextImage = useCallback(() => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const openLightbox = (index: number) => {
    setLightboxImage(index);
    setIsLightboxOpen(true);
    setZoomLevel(1);
    setRotation(0);
  };

  const nextLightboxImage = () => {
    setLightboxImage((prev) => (prev + 1) % images.length);
    setZoomLevel(1);
    setRotation(0);
  };

  const prevLightboxImage = () => {
    setLightboxImage((prev) => (prev - 1 + images.length) % images.length);
    setZoomLevel(1);
    setRotation(0);
  };

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.5, 3));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  const rotate = () => setRotation(prev => prev + 90);

  const thumbnailVariants = {
    inactive: { 
      opacity: 0.6, 
      scale: 0.95,
      filter: "grayscale(20%)"
    },
    active: { 
      opacity: 1, 
      scale: 1,
      filter: "grayscale(0%)",
      transition: { duration: 0.2 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const mainImageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    })
  };

  return (
    <>
      <div className={`space-y-4 ${className}`}>
        {/* Main Image Display */}
        <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden group">
          <AnimatePresence mode="wait" custom={selectedImage}>
            <motion.img
              key={selectedImage}
              src={images[selectedImage]}
              alt={`${productName} - View ${selectedImage + 1}`}
              className="w-full h-full object-contain p-6 cursor-zoom-in"
              variants={mainImageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={selectedImage}
              onClick={() => openLightbox(selectedImage)}
              onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.svg'; }}
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <motion.button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </motion.button>

              <motion.button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </motion.button>
            </>
          )}

          {/* Zoom Indicator */}
          <motion.div
            className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-200"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <ZoomIn className="h-4 w-4 inline mr-1" />
            Click to zoom
          </motion.div>

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {selectedImage + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Thumbnail Grid */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-3">
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                  index === selectedImage 
                    ? 'border-blue-500 shadow-md' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                variants={thumbnailVariants}
                initial="inactive"
                animate={index === selectedImage ? "active" : "inactive"}
                whileHover="hover"
              >
                <img
                  src={image}
                  alt={`${productName} - Thumbnail ${index + 1}`}
                  className="w-full h-full object-contain p-2 bg-gray-50"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.svg'; }}
                />
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              
              {/* Close Button */}
              <motion.button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/20 transition-all duration-200 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-6 w-6" />
              </motion.button>

              {/* Image Controls */}
              <div className="absolute top-6 left-6 flex gap-2 z-10">
                <motion.button
                  onClick={zoomOut}
                  className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/20 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ZoomOut className="h-5 w-5" />
                </motion.button>
                
                <motion.button
                  onClick={zoomIn}
                  className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/20 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ZoomIn className="h-5 w-5" />
                </motion.button>
                
                <motion.button
                  onClick={rotate}
                  className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/20 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <RotateCw className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Lightbox Image */}
              <motion.div
                className="relative max-w-full max-h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  src={images[lightboxImage]}
                  alt={`${productName} - Full view ${lightboxImage + 1}`}
                  className="max-w-full max-h-full object-contain cursor-grab active:cursor-grabbing"
                  style={{
                    transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                  drag={zoomLevel > 1}
                  dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                  onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.svg'; }}
                />
              </motion.div>

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevLightboxImage();
                    }}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-full text-white hover:bg-white/20 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </motion.button>

                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextLightboxImage();
                    }}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-full text-white hover:bg-white/20 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </motion.button>
                </>
              )}

              {/* Bottom Controls */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-white text-sm">
                  {lightboxImage + 1} / {images.length}
                </span>
                
                <div className="w-px h-6 bg-white/30" />
                
                <span className="text-white text-sm">
                  {Math.round(zoomLevel * 100)}%
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedProductGallery;
