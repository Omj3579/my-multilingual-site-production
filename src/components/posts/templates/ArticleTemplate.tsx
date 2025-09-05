import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Share2, Bookmark, MessageCircle, ThumbsUp, Quote } from 'lucide-react';
import { PostData, ArticleContent } from './PostTemplateFactory';

interface ArticleTemplateProps {
  postData: PostData;
  content: ArticleContent;
  language: 'en' | 'hu' | 'de';
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({ postData, content, language }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(0);
  const articleRef = useRef<HTMLElement>(null);

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
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // Here you would typically save to localStorage or API
  };

  const handleLike = () => {
    setLikes(prev => prev + 1);
    // Here you would typically save to API
  };

  return (
    <motion.article
      ref={articleRef}
      className="max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Article Header */}
      <motion.header variants={itemVariants} className="mb-12">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
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

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {postData.title}
        </h1>

        {postData.summary && (
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {postData.summary}
          </p>
        )}

        {/* Tags */}
        {postData.tags && postData.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {postData.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Hero Image */}
        {postData.image && (
          <div className="relative rounded-xl overflow-hidden shadow-lg mb-8">
            <img
              src={postData.image}
              alt={postData.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}

        {/* Author Info */}
        {postData.author && (
          <div className="flex items-center justify-between border-b border-gray-200 pb-6">
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

            <div className="flex items-center gap-3">
              <button
                onClick={handleLike}
                className="flex items-center gap-1 px-3 py-1 text-gray-600 hover:text-red-600 transition-colors"
              >
                <ThumbsUp className={`h-4 w-4 ${likes > 0 ? 'fill-current text-red-600' : ''}`} />
                <span className="text-sm">{likes}</span>
              </button>
              <button
                onClick={handleShare}
                className="flex items-center gap-1 px-3 py-1 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Share2 className="h-4 w-4" />
                <span className="text-sm">{language === 'en' ? 'Share' : language === 'hu' ? 'Megosztás' : 'Teilen'}</span>
              </button>
              <button
                onClick={toggleBookmark}
                className={`flex items-center gap-1 px-3 py-1 transition-colors ${
                  isBookmarked ? 'text-yellow-600' : 'text-gray-600 hover:text-yellow-600'
                }`}
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                <span className="text-sm">
                  {language === 'en' ? 'Save' : language === 'hu' ? 'Mentés' : 'Speichern'}
                </span>
              </button>
            </div>
          </div>
        )}
      </motion.header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        {/* Introduction */}
        {content.introduction && (
          <motion.div variants={itemVariants} className="mb-12">
            <div className="text-xl text-gray-700 leading-relaxed font-light border-l-4 border-blue-600 pl-6 bg-blue-50 p-6 rounded-r-lg">
              {content.introduction.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}

        {/* Content Sections */}
        {content.sections.map((section, index) => (
          <motion.section
            key={index}
            variants={itemVariants}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-100 pb-2">
              {section.title}
            </h2>

            {/* Different section types */}
            {section.type === 'quote' ? (
              <blockquote className="relative bg-gray-50 p-8 rounded-xl border-l-4 border-blue-600 my-8">
                <Quote className="absolute top-4 left-4 h-8 w-8 text-blue-600 opacity-50" />
                <div className="pl-8">
                  <p className="text-xl font-medium text-gray-800 italic leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </blockquote>
            ) : section.type === 'list' ? (
              <div className="space-y-4">
                {section.content.split('\n').filter(item => item.trim()).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{item.replace(/^[-*]\s*/, '')}</p>
                  </div>
                ))}
              </div>
            ) : section.type === 'image-text' ? (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  {section.content.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.image && (
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}
              </div>
            ) : (
              // Default text section
              <div className="space-y-4">
                {section.content.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {/* Section image for non-image-text types */}
            {section.image && section.type !== 'image-text' && (
              <div className="relative rounded-lg overflow-hidden shadow-lg mt-6">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            )}
          </motion.section>
        ))}

        {/* Conclusion */}
        {content.conclusion && (
          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {language === 'en' ? 'Conclusion' : language === 'hu' ? 'Következtetés' : 'Fazit'}
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
              {content.conclusion.split('\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Article Footer */}
      <motion.footer variants={itemVariants} className="mt-16 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              {language === 'en' ? 'Was this helpful?' : language === 'hu' ? 'Hasznos volt?' : 'War das hilfreich?'}
            </span>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 px-3 py-1 text-green-600 hover:bg-green-50 rounded transition-colors">
                <ThumbsUp className="h-4 w-4" />
                <span className="text-sm">{language === 'en' ? 'Yes' : language === 'hu' ? 'Igen' : 'Ja'}</span>
              </button>
              <button className="flex items-center gap-1 px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors">
                <ThumbsUp className="h-4 w-4 rotate-180" />
                <span className="text-sm">{language === 'en' ? 'No' : language === 'hu' ? 'Nem' : 'Nein'}</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span>{language === 'en' ? 'Discuss' : language === 'hu' ? 'Megbeszélés' : 'Diskutieren'}</span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Share2 className="h-4 w-4" />
              <span>{language === 'en' ? 'Share' : language === 'hu' ? 'Megosztás' : 'Teilen'}</span>
            </button>
          </div>
        </div>
      </motion.footer>
    </motion.article>
  );
};

export default ArticleTemplate;
