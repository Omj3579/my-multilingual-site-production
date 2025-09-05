import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Share2, 
  BookmarkPlus,
  User,
  Tag,
  Globe
} from 'lucide-react';
import { NewsArticle } from '../../../data/newsData';

interface NewsArticleTemplateProps {
  newsArticle: NewsArticle;
  language: 'en' | 'hu' | 'de';
}

const NewsArticleTemplate: React.FC<NewsArticleTemplateProps> = ({ newsArticle, language }) => {
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

  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, idx) => (
      <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
        {paragraph}
      </p>
    ));
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'industry': 'bg-blue-100 text-blue-800',
      'company': 'bg-green-100 text-green-800',
      'technology': 'bg-purple-100 text-purple-800',
      'sustainability': 'bg-emerald-100 text-emerald-800',
      'innovation': 'bg-orange-100 text-orange-800',
      'awards': 'bg-yellow-100 text-yellow-800',
      'partnerships': 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <motion.article
      className="max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* News Header */}
      <motion.header variants={itemVariants} className="mb-8">
        {/* News Category Badge */}
        <div className="flex items-center gap-4 mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(newsArticle.newsCategory || 'industry')}`}>
            {language === 'en' ? 'News' : language === 'hu' ? 'Hírek' : 'Nachrichten'}
          </span>
          {newsArticle.newsCategory && (
            <span className="text-sm text-gray-500 capitalize">
              {newsArticle.newsCategory}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {newsArticle.title[language]}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(newsArticle.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{newsArticle.readTime} min read</span>
          </div>
          {newsArticle.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{newsArticle.location}</span>
            </div>
          )}
          {newsArticle.source && (
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>{newsArticle.source}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{newsArticle.author.name}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          {newsArticle.description[language]}
        </p>

        {/* Featured Image */}
        {newsArticle.image && (
          <motion.div
            variants={itemVariants}
            className="mb-8 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={newsArticle.image}
              alt={newsArticle.title[language]}
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>
        )}
      </motion.header>

      {/* News Content */}
      <motion.div variants={itemVariants} className="mb-12">
        <div className="prose prose-lg max-w-none">
          {formatContent(newsArticle.content[language])}
        </div>
      </motion.div>

      {/* Author Info */}
      <motion.div
        variants={itemVariants}
        className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8"
      >
        <div className="flex items-center gap-4">
          {newsArticle.author.avatar && (
            <img
              src={newsArticle.author.avatar}
              alt={newsArticle.author.name}
              className="w-16 h-16 rounded-full object-cover"
            />
          )}
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{newsArticle.author.name}</h3>
            <p className="text-gray-600">{newsArticle.author.role[language]}</p>
          </div>
        </div>
      </motion.div>

      {/* Tags */}
      {newsArticle.tags.length > 0 && (
        <motion.div variants={itemVariants} className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Tag className="h-5 w-5" />
            {language === 'en' ? 'Related Topics' : language === 'hu' ? 'Kapcsolódó témák' : 'Verwandte Themen'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {newsArticle.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      )}      {/* Call to Action */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl text-center"
      >
        <h3 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'Stay Updated with Industry News' : 
           language === 'hu' ? 'Maradjon naprakész az iparági hírekről' : 
           'Bleiben Sie über Branchennews auf dem Laufenden'}
        </h3>
        <p className="text-lg mb-6 opacity-90">
          {language === 'en' ? 'Subscribe to our newsletter for the latest updates and insights.' : 
           language === 'hu' ? 'Iratkozzon fel hírlevelünkre a legfrissebb hírekért és betekintésekért.' : 
           'Abonnieren Sie unseren Newsletter für die neuesten Updates und Einblicke.'}
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          {language === 'en' ? 'Subscribe Now' : language === 'hu' ? 'Feliratkozás' : 'Jetzt abonnieren'}
        </button>
      </motion.div>

      {/* Action Buttons */}
      <motion.div variants={itemVariants} className="mt-8 flex justify-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
          <Share2 className="h-4 w-4" />
          {language === 'en' ? 'Share' : language === 'hu' ? 'Megosztás' : 'Teilen'}
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
          <BookmarkPlus className="h-4 w-4" />
          {language === 'en' ? 'Save' : language === 'hu' ? 'Mentés' : 'Speichern'}
        </button>
      </motion.div>
    </motion.article>
  );
};

export default NewsArticleTemplate;
