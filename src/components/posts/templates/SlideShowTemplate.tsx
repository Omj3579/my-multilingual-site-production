import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Clock, User, Download, Share2, Bookmark } from 'lucide-react';
import { PostData, SlideContent } from './PostTemplateFactory';

interface SlideShowTemplateProps {
  postData: PostData;
  slides: SlideContent[];
  language: 'en' | 'hu' | 'de';
}

const SlideShowTemplate: React.FC<SlideShowTemplateProps> = ({ postData, slides, language }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <motion.article
      className="max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Article Header */}
      <motion.header variants={itemVariants} className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Calendar className="h-4 w-4" />
          <span>{postData.date}</span>
          {postData.readTime && (
            <>
              <span>•</span>
              <Clock className="h-4 w-4" />
              <span>{postData.readTime} min read</span>
            </>
          )}
          {postData.author && (
            <>
              <span>•</span>
              <User className="h-4 w-4" />
              <span>{postData.author.name}</span>
            </>
          )}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {postData.title}
        </h1>

        {postData.summary && (
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            {postData.summary}
          </p>
        )}

        {/* Action buttons */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            <span>{language === 'en' ? 'Download PDF' : language === 'hu' ? 'PDF Letöltése' : 'PDF Herunterladen'}</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Share2 className="h-4 w-4" />
            <span>{language === 'en' ? 'Share' : language === 'hu' ? 'Megosztás' : 'Teilen'}</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Bookmark className="h-4 w-4" />
            <span>{language === 'en' ? 'Save' : language === 'hu' ? 'Mentés' : 'Speichern'}</span>
          </button>
        </div>
      </motion.header>

      {/* Slideshow Container */}
      <motion.div 
        variants={itemVariants}
        className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'bg-white rounded-xl shadow-lg overflow-hidden'}`}
        ref={slideRef}
      >
        {/* Slide Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 z-20">
          <motion.div
            className="h-full bg-blue-600"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-20">
          {currentSlide + 1} / {slides.length}
        </div>

        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          className="absolute top-4 left-4 bg-black/50 text-white p-2 rounded-full z-20 hover:bg-black/70 transition-colors"
        >
          {isFullscreen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          )}
        </button>

        {/* Main Slide Area */}
        <div className={`relative ${isFullscreen ? 'h-full' : 'h-96 md:h-[500px]'} overflow-hidden`}>
          <AnimatePresence mode="wait" custom={1}>
            <motion.div
              key={currentSlide}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 flex flex-col md:flex-row"
            >
              {/* Slide Image */}
              <div className={`${isFullscreen ? 'w-full md:w-2/3' : 'w-full md:w-1/2'} relative`}>
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Slide Content */}
              <div className={`${isFullscreen ? 'md:w-1/3 p-8' : 'md:w-1/2 p-6'} bg-white flex flex-col justify-center`}>
                {slides[currentSlide].title && (
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {slides[currentSlide].title}
                  </h2>
                )}
                <div className="text-gray-700 leading-relaxed">
                  {slides[currentSlide].text.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Slide Thumbnails */}
        <div className={`${isFullscreen ? 'absolute bottom-4 left-1/2 transform -translate-x-1/2' : ''} bg-gray-50 p-4`}>
          <div className="flex gap-2 overflow-x-auto max-w-full">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                  currentSlide === index ? 'border-blue-600 scale-105' : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Slide Navigation Dots (for mobile) */}
      <motion.div variants={itemVariants} className="flex justify-center mt-6 md:hidden">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Summary/Key Takeaways */}
      {slides.length > 3 && (
        <motion.section variants={itemVariants} className="mt-12 bg-blue-50 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Key Takeaways' : language === 'hu' ? 'Fő Tanulságok' : 'Wichtige Erkenntnisse'}
          </h3>
          <ul className="space-y-2">
            {slides.filter(slide => slide.type === 'content').slice(0, 4).map((slide, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">{slide.title || slide.alt}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      )}
    </motion.article>
  );
};

export default SlideShowTemplate;
