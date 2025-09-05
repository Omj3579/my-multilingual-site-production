import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  AlertCircle, 
  CheckCircle, 
  Info, 
  Zap,
  User,
  Tag,
  Package,
  GitCommit,
  Bell,
  Download,
  ExternalLink
} from 'lucide-react';
import { UpdateItem } from '../../../data/updatesData';

interface UpdateTemplateProps {
  update: UpdateItem;
  language: 'en' | 'hu' | 'de';
}

const UpdateTemplate: React.FC<UpdateTemplateProps> = ({ update, language }) => {
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

  const getPriorityColor = (priority: string) => {
    const colors = {
      'critical': 'bg-red-100 text-red-800 border-red-200',
      'high': 'bg-orange-100 text-orange-800 border-orange-200',
      'medium': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'low': 'bg-blue-100 text-blue-800 border-blue-200'
    };
    return colors[priority as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'critical': return <AlertCircle className="h-4 w-4" />;
      case 'high': return <Zap className="h-4 w-4" />;
      case 'medium': return <Info className="h-4 w-4" />;
      case 'low': return <CheckCircle className="h-4 w-4" />;
      default: return <Info className="h-4 w-4" />;
    }
  };

  const getChangeTypeColor = (changeType: string) => {
    const colors = {
      'feature': 'bg-green-100 text-green-800',
      'improvement': 'bg-blue-100 text-blue-800',
      'bugfix': 'bg-red-100 text-red-800',
      'security': 'bg-purple-100 text-purple-800',
      'maintenance': 'bg-gray-100 text-gray-800'
    };
    return colors[changeType as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <motion.article
      className="max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Update Header */}
      <motion.header variants={itemVariants} className="mb-8">
        {/* Priority Badge */}
        <div className="flex items-center gap-4 mb-4">
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(update.priority)}`}>
            {getPriorityIcon(update.priority)}
            <span className="capitalize">{update.priority}</span>
            <span>{language === 'en' ? 'Priority' : language === 'hu' ? 'Prioritás' : 'Priorität'}</span>
          </div>
          {update.version && (
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
              v{update.version}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {update.title[language]}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(update.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{update.readTime} min read</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{update.author.name}</span>
          </div>
          {update.changeType && (
            <div className="flex items-center gap-2">
              <GitCommit className="h-4 w-4" />
              <span className={`px-2 py-1 rounded text-xs font-medium ${getChangeTypeColor(update.changeType)}`}>
                {update.changeType}
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          {update.description[language]}
        </p>

        {/* Featured Image */}
        {update.image && (
          <motion.div
            variants={itemVariants}
            className="mb-8 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={update.image}
              alt={update.title[language]}
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>
        )}

        {/* Update Info Grid */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {update.version && (
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {language === 'en' ? 'Version' : language === 'hu' ? 'Verzió' : 'Version'}
                  </h3>
                  <p className="text-gray-600">{update.version}</p>
                </div>
              </div>
            </div>
          )}

          {update.affectedProducts && update.affectedProducts.length > 0 && (
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {language === 'en' ? 'Affected Products' : language === 'hu' ? 'Érintett termékek' : 'Betroffene Produkte'}
                  </h3>
                  <p className="text-gray-600">{update.affectedProducts.join(', ')}</p>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-purple-600" />
              <div>
                <h3 className="font-semibold text-gray-900">
                  {language === 'en' ? 'Author' : language === 'hu' ? 'Szerző' : 'Autor'}
                </h3>
                <p className="text-gray-600">{update.author.name}</p>
                <p className="text-sm text-gray-500">{update.author.role[language]}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Update Content */}
      <motion.div variants={itemVariants} className="mb-12">
        <div className="prose prose-lg max-w-none">
          {formatContent(update.content[language])}
        </div>
      </motion.div>

      {/* Tags */}
      {update.tags.length > 0 && (
        <motion.div variants={itemVariants} className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Tag className="h-5 w-5" />
            {language === 'en' ? 'Tags' : language === 'hu' ? 'Címkék' : 'Tags'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {update.tags.map((tag: string, idx: number) => (
              <span
                key={idx}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Important Notice */}
      {update.priority === 'critical' && (
        <motion.div
          variants={itemVariants}
          className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-red-900 mb-2">
                {language === 'en' ? 'Critical Update Notice' : 
                 language === 'hu' ? 'Kritikus frissítési értesítés' : 
                 'Kritische Update-Benachrichtigung'}
              </h3>
              <p className="text-red-800">
                {language === 'en' ? 'This is a critical update that requires immediate attention. Please review the changes and implement them as soon as possible.' :
                 language === 'hu' ? 'Ez egy kritikus frissítés, amely azonnali figyelmet igényel. Kérjük, tekintse át a változásokat és hajtsa végre őket a lehető leghamarabb.' :
                 'Dies ist ein kritisches Update, das sofortige Aufmerksamkeit erfordert. Bitte überprüfen Sie die Änderungen und implementieren Sie sie so schnell wie möglich.'}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Call to Action */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl text-center"
      >
        <Bell className="h-12 w-12 mx-auto mb-4 opacity-80" />
        <h3 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'Stay Updated' : 
           language === 'hu' ? 'Maradjon naprakész' : 
           'Bleiben Sie auf dem Laufenden'}
        </h3>
        <p className="text-lg mb-6 opacity-90">
          {language === 'en' ? 'Get notified about important updates and changes to our products and services.' : 
           language === 'hu' ? 'Értesítést kap termékeink és szolgáltatásaink fontos frissítéseiről és változásairól.' : 
           'Lassen Sie sich über wichtige Updates und Änderungen an unseren Produkten und Dienstleistungen benachrichtigen.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
            <Bell className="h-4 w-4" />
            {language === 'en' ? 'Subscribe to Updates' : language === 'hu' ? 'Feliratkozás frissítésekre' : 'Updates abonnieren'}
          </button>
          <button className="border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
            <Download className="h-4 w-4" />
            {language === 'en' ? 'Download Changelog' : language === 'hu' ? 'Változásnapló letöltése' : 'Changelog herunterladen'}
          </button>
        </div>
      </motion.div>

      {/* Related Links */}
      <motion.div variants={itemVariants} className="mt-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <ExternalLink className="h-4 w-4" />
            {language === 'en' ? 'View All Updates' : language === 'hu' ? 'Összes frissítés megtekintése' : 'Alle Updates anzeigen'}
          </button>
          {update.version && (
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <GitCommit className="h-4 w-4" />
              {language === 'en' ? 'Version History' : language === 'hu' ? 'Verzió előzmények' : 'Versionshistorie'}
            </button>
          )}
        </div>
      </motion.div>
    </motion.article>
  );
};

export default UpdateTemplate;
