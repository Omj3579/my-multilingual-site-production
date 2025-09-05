import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Play, Download, Share2, Volume2, VolumeX, Maximize, Pause, MessageCircle } from 'lucide-react';
import { PostData } from './PostTemplateFactory';

interface VideoTemplateProps {
  postData: PostData;
  content: {
    videoUrl: string;
    thumbnail?: string;
    transcript?: string;
    chapters?: {
      title: string;
      timestamp: string;
      description: string;
    }[];
  };
  language: 'en' | 'hu' | 'de';
}

const VideoTemplate: React.FC<VideoTemplateProps> = ({ postData, content, language }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  const jumpToChapter = (timestamp: string) => {
    if (videoRef.current) {
      const [minutes, seconds] = timestamp.split(':').map(Number);
      videoRef.current.currentTime = minutes * 60 + seconds;
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: postData.title,
          text: postData.summary,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <motion.article
      className="max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Video Header */}
      <motion.header variants={itemVariants} className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Calendar className="h-4 w-4" />
          <span>{postData.date}</span>
          {postData.readTime && (
            <>
              <span>•</span>
              <Clock className="h-4 w-4" />
              <span>{postData.readTime} min watch</span>
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

        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-2 rounded-lg mb-4 inline-block">
          <span className="text-sm font-medium px-2">
            {language === 'en' ? 'Video Content' : language === 'hu' ? 'Videó tartalom' : 'Video Inhalt'}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {postData.title}
        </h1>

        {postData.summary && (
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {postData.summary}
          </p>
        )}

        {/* Action buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Share2 className="h-4 w-4" />
            <span>{language === 'en' ? 'Share' : language === 'hu' ? 'Megosztás' : 'Teilen'}</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="h-4 w-4" />
            <span>{language === 'en' ? 'Download' : language === 'hu' ? 'Letöltés' : 'Herunterladen'}</span>
          </button>
        </div>
      </motion.header>

      {/* Video Player */}
      <motion.div variants={itemVariants} className="mb-8">
        <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
          <video
            ref={videoRef}
            src={content.videoUrl}
            poster={content.thumbnail}
            className="w-full aspect-video object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            controls={false}
          />
          
          {/* Custom Video Controls */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePlayPause}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
                  >
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                  </button>
                  <button
                    onClick={handleMute}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleFullscreen}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                  >
                    <Maximize className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content area */}
        <div className="lg:col-span-2 space-y-8">
          {/* Video Description */}
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'About this video' : language === 'hu' ? 'Erről a videóról' : 'Über dieses Video'}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {postData.summary}
            </p>
          </motion.div>

          {/* Transcript */}
          {content.transcript && (
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === 'en' ? 'Transcript' : language === 'hu' ? 'Átirat' : 'Transkript'}
                </h2>
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  {showTranscript 
                    ? (language === 'en' ? 'Hide' : language === 'hu' ? 'Elrejtés' : 'Verbergen')
                    : (language === 'en' ? 'Show' : language === 'hu' ? 'Megjelenítés' : 'Anzeigen')
                  }
                </button>
              </div>
              <AnimatePresence>
                {showTranscript && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="prose prose-gray max-w-none"
                  >
                    <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {content.transcript}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Chapters */}
          {content.chapters && content.chapters.length > 0 && (
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Chapters' : language === 'hu' ? 'Fejezetek' : 'Kapitel'}
              </h3>
              <div className="space-y-3">
                {content.chapters.map((chapter, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      jumpToChapter(chapter.timestamp);
                      setSelectedChapter(index);
                    }}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      selectedChapter === index 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-900">{chapter.title}</span>
                      <span className="text-sm text-blue-600 font-mono">{chapter.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{chapter.description}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Author Info */}
          {postData.author && (
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Presenter' : language === 'hu' ? 'Előadó' : 'Präsentator'}
              </h3>
              <div className="flex items-center gap-4">
                {postData.author.avatar && (
                  <img
                    src={postData.author.avatar}
                    alt={postData.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold text-gray-900">{postData.author.name}</p>
                  {postData.author.role && (
                    <p className="text-sm text-gray-600">{postData.author.role}</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Engagement */}
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Engage' : language === 'hu' ? 'Kapcsolódás' : 'Engagement'}
            </h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span>{language === 'en' ? 'Ask Questions' : language === 'hu' ? 'Kérdés feltevése' : 'Fragen stellen'}</span>
              </button>
              <button
                onClick={handleShare}
                className="w-full flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Share2 className="h-4 w-4" />
                <span>{language === 'en' ? 'Share Video' : language === 'hu' ? 'Videó megosztása' : 'Video teilen'}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
};

export default VideoTemplate;
