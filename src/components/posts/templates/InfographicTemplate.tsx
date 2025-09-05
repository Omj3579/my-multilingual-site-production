import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Download, Share2, ZoomIn } from 'lucide-react';
import { PostData } from './PostTemplateFactory';

interface InfographicTemplateProps {
  postData: PostData;
  content: {
    infographicUrl: string;
    sections?: {
      title: string;
      description: string;
    }[];
    downloadUrl?: string;
  };
  language: 'en' | 'hu' | 'de';
}

const InfographicTemplate: React.FC<InfographicTemplateProps> = ({ postData, content, language }) => {
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

  return (
    <motion.article
      className="max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.header variants={itemVariants} className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Calendar className="h-4 w-4" />
          <span>{postData.date}</span>
          {postData.author && (
            <>
              <span>•</span>
              <User className="h-4 w-4" />
              <span>{postData.author.name}</span>
            </>
          )}
        </div>

        <div className="bg-purple-100 text-purple-800 p-2 rounded-lg mb-4 inline-block">
          <span className="text-sm font-medium px-2">
            {language === 'en' ? 'Infographic' : language === 'hu' ? 'Infografika' : 'Infografik'}
          </span>
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
          {content.downloadUrl && (
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>{language === 'en' ? 'Download' : language === 'hu' ? 'Letöltés' : 'Herunterladen'}</span>
            </button>
          )}
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Share2 className="h-4 w-4" />
            <span>{language === 'en' ? 'Share' : language === 'hu' ? 'Megosztás' : 'Teilen'}</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <ZoomIn className="h-4 w-4" />
            <span>{language === 'en' ? 'View Full Size' : language === 'hu' ? 'Teljes méret' : 'Vollbildansicht'}</span>
          </button>
        </div>
      </motion.header>

      {/* Infographic Display */}
      <motion.div variants={itemVariants} className="mb-8">
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={content.infographicUrl}
            alt={postData.title}
            className="w-full h-auto"
          />
        </div>
      </motion.div>

      {/* Content Sections */}
      {content.sections && content.sections.length > 0 && (
        <motion.div variants={itemVariants} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {language === 'en' ? 'Key Insights' : language === 'hu' ? 'Fő megállapítások' : 'Wichtige Erkenntnisse'}
          </h2>
          {content.sections.map((section, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{section.title}</h3>
              <p className="text-gray-700">{section.description}</p>
            </div>
          ))}
        </motion.div>
      )}
    </motion.article>
  );
};

export default InfographicTemplate;
