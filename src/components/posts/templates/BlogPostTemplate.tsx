import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, ExternalLink, Share2 } from 'lucide-react';
import { BlogPost } from '@/data/blogPostsData';

interface BlogPostTemplateProps {
  post: BlogPost;
  language: 'en' | 'hu' | 'de';
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ post, language }) => {
  const getMultilingualField = (field: any) => {
    if (typeof field === 'string') return field;
    return field[language] || field.en || '';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language === 'en' ? 'en-US' : language === 'hu' ? 'hu-HU' : 'de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        {/* Category Badge */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 bg-[#fa9b6b]/10 text-[#fa9b6b] px-4 py-2 rounded-full text-sm font-semibold">
            <Tag className="h-4 w-4" />
            {language === 'en' ? 'Industry Insights' : language === 'hu' ? 'Iparági Betekintések' : 'Brancheneinblicke'}
          </span>
          {post.featured && (
            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
              {language === 'en' ? 'Featured' : language === 'hu' ? 'Kiemelt' : 'Empfohlen'}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          {getMultilingualField(post.title)}
        </h1>

        {/* Excerpt/Description */}
        <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
          {post.excerpt ? getMultilingualField(post.excerpt) : getMultilingualField(post.description)}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-8">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{post.readTime} {language === 'en' ? 'min read' : language === 'hu' ? 'perc olvasás' : 'Min. Lesezeit'}</span>
          </div>

          {post.updatedAt && (
            <div className="flex items-center gap-2">
              <span>{language === 'en' ? 'Updated' : language === 'hu' ? 'Frissítve' : 'Aktualisiert'}:</span>
              <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
            </div>
          )}
        </div>

        {/* Author Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-100"
        >
          <div className="relative">
            <img
              src={post.author.avatar || '/images/team/default-avatar.jpg'}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <User className="h-3 w-3 text-white" />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
            <p className="text-gray-600 text-sm">{getMultilingualField(post.author.role)}</p>
          </div>

          <div className="flex gap-2">
            <button className="p-2 hover:bg-white rounded-lg transition-colors" title="Share">
              <Share2 className="h-4 w-4 text-gray-500" />
            </button>
            {post.customUrl && (
              <a
                href={post.customUrl}
                className="p-2 hover:bg-white rounded-lg transition-colors"
                title="External Link"
              >
                <ExternalLink className="h-4 w-4 text-gray-500" />
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Featured Image */}
      {post.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={post.image}
              alt={getMultilingualField(post.title)}
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="prose prose-lg prose-gray max-w-none mb-12"
      >
        <div
          className="blog-content text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: getMultilingualField(post.content) }}
        />
      </motion.div>

      {/* SEO Keywords Section */}
      {post.seoKeywords && post.seoKeywords.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {language === 'en' ? 'Key Topics' : language === 'hu' ? 'Kulcs Témák' : 'Kernthemen'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.seoKeywords.map((keyword, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {keyword}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Tags Section */}
      {post.tags && post.tags.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {language === 'en' ? 'Related Tags' : language === 'hu' ? 'Kapcsolódó Címkék' : 'Verwandte Tags'}
          </h3>
          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag, index) => (
              <a
                key={index}
                href={`/resources/blog/tags/${tag}`}
                className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="bg-gradient-to-r from-[#fa9b6b] to-[#e57b48] rounded-2xl p-8 text-white text-center"
      >
        <h3 className="text-2xl font-bold mb-4">
          {language === 'en' 
            ? 'Ready to innovate with sustainable solutions?' 
            : language === 'hu'
            ? 'Készen áll az innovációra fenntartható megoldásokkal?'
            : 'Bereit für Innovation mit nachhaltigen Lösungen?'}
        </h3>
        <p className="text-lg mb-6 opacity-90">
          {language === 'en'
            ? 'Discover how our expertise can help transform your manufacturing processes.'
            : language === 'hu'
            ? 'Fedezze fel, hogyan segíthet szakértelmünk átalakítani gyártási folyamatait.'
            : 'Entdecken Sie, wie unser Fachwissen Ihre Fertigungsprozesse transformieren kann.'}
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-[#fa9b6b] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
        >
          {language === 'en' ? 'Get In Touch' : language === 'hu' ? 'Vegye fel a kapcsolatot' : 'Kontakt aufnehmen'}
        </a>
      </motion.div>
    </article>
  );
};

export default BlogPostTemplate;
