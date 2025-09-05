import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Building2, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  Quote,
  Users,
  Share2,
  Download,
  ArrowRight,
  Code
} from 'lucide-react';
import { CaseStudy } from '../../../data/caseStudiesData';

interface CaseStudyTemplateProps {
  caseStudy: CaseStudy;
  language: 'en' | 'hu' | 'de';
}

const CaseStudyTemplate: React.FC<CaseStudyTemplateProps> = ({ caseStudy, language }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'challenge' | 'solution' | 'results'>('overview');

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

  const tabLabels = {
    overview: language === 'en' ? 'Overview' : language === 'hu' ? 'Áttekintés' : 'Überblick',
    challenge: language === 'en' ? 'Challenge' : language === 'hu' ? 'Kihívás' : 'Herausforderung',
    solution: language === 'en' ? 'Solution' : language === 'hu' ? 'Megoldás' : 'Lösung',
    results: language === 'en' ? 'Results' : language === 'hu' ? 'Eredmények' : 'Ergebnisse'
  };

  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, idx) => (
      <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
        {paragraph}
      </p>
    ));
  };

  return (
    <motion.article
      className="max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Case Study Header */}
      <motion.header variants={itemVariants} className="mb-12">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Calendar className="h-4 w-4" />
          <span>{new Date(caseStudy.date).toLocaleDateString()}</span>
          <span>•</span>
          <Clock className="h-4 w-4" />
          <span>{caseStudy.readTime} min read</span>
          <span>•</span>
          <Building2 className="h-4 w-4" />
          <span>{caseStudy.industry}</span>
          <span>•</span>
          <Target className="h-4 w-4" />
          <span>{caseStudy.projectDuration}</span>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2 rounded-lg mb-4 inline-block">
          <span className="text-sm font-medium px-2">
            {language === 'en' ? 'Case Study' : language === 'hu' ? 'Esettanulmány' : 'Fallstudie'}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {caseStudy.title[language]}
        </h1>

        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          {caseStudy.description[language]}
        </p>

        {/* Featured Image */}
        {caseStudy.image && (
          <motion.div
            variants={itemVariants}
            className="mb-8 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={caseStudy.image}
              alt={caseStudy.title[language]}
              className="w-full h-64 md:h-96 object-cover"
            />
          </motion.div>
        )}

        {/* Client and Project Info */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200 mb-8"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                {language === 'en' ? 'Client' : language === 'hu' ? 'Ügyfél' : 'Kunde'}
              </h3>
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">{caseStudy.client.name}</p>
                  <p className="text-sm text-gray-600">{caseStudy.client.industry}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                {language === 'en' ? 'Company Size' : language === 'hu' ? 'Vállalat mérete' : 'Unternehmensgröße'}
              </h3>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-green-600" />
                <p className="font-semibold text-gray-900">{caseStudy.client.size}</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                {language === 'en' ? 'Duration' : language === 'hu' ? 'Időtartam' : 'Dauer'}
              </h3>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-purple-600" />
                <p className="font-semibold text-gray-900">{caseStudy.projectDuration}</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                {language === 'en' ? 'Author' : language === 'hu' ? 'Szerző' : 'Autor'}
              </h3>
              <div className="flex items-center gap-3">
                {caseStudy.author.avatar && (
                  <img
                    src={caseStudy.author.avatar}
                    alt={caseStudy.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold text-gray-900">{caseStudy.author.name}</p>
                  <p className="text-sm text-gray-600">{caseStudy.author.role[language]}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technologies Used */}
        <motion.div variants={itemVariants} className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-600" />
            {language === 'en' ? 'Technologies Used' : language === 'hu' ? 'Felhasznált technológiák' : 'Verwendete Technologien'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {caseStudy.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.header>

      {/* Navigation Tabs */}
      <motion.nav variants={itemVariants} className="mb-8">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {Object.entries(tabLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as 'overview' | 'challenge' | 'solution' | 'results')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === key
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Tab Content */}
      <motion.div variants={itemVariants} className="mb-12">
        {activeTab === 'overview' && (
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Project Overview' : language === 'hu' ? 'Projekt áttekintés' : 'Projektübersicht'}
            </h2>
            <div className="text-gray-700 leading-relaxed">
              {formatContent(caseStudy.content[language])}
            </div>
          </div>
        )}

        {activeTab === 'challenge' && (
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Target className="h-6 w-6 text-red-600" />
              {tabLabels.challenge}
            </h2>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <div className="text-gray-700 leading-relaxed">
                {formatContent(caseStudy.challenge[language])}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'solution' && (
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              {tabLabels.solution}
            </h2>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <div className="text-gray-700 leading-relaxed">
                {formatContent(caseStudy.solution[language])}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'results' && (
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              {tabLabels.results}
            </h2>

            {/* Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {caseStudy.results.metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">
                    {metric.label[language]}
                  </div>
                  {metric.improvement && (
                    <div className="text-xs text-green-600 font-medium">
                      {metric.improvement}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            {caseStudy.results.testimonial && (
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <blockquote className="text-xl font-medium text-gray-800 mb-6 leading-relaxed">
                  &ldquo;{caseStudy.results.testimonial.quote[language]}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-semibold text-gray-900">{caseStudy.results.testimonial.author}</p>
                    <p className="text-sm text-gray-600">{caseStudy.results.testimonial.position}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl text-center"
      >
        <h3 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'Ready to Transform Your Business?' : 
           language === 'hu' ? 'Készen áll vállalkozása átformálására?' : 
           'Bereit, Ihr Unternehmen zu transformieren?'}
        </h3>
        <p className="text-lg mb-6 opacity-90">
          {language === 'en' ? 'Let\'s discuss how we can help you achieve similar results.' : 
           language === 'hu' ? 'Beszéljük meg, hogyan segíthetünk hasonló eredmények elérésében.' : 
           'Lassen Sie uns besprechen, wie wir Ihnen zu ähnlichen Ergebnissen verhelfen können.'}
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto">
          {language === 'en' ? 'Get in Touch' : language === 'hu' ? 'Kapcsolat' : 'Kontakt aufnehmen'}
          <ArrowRight className="h-4 w-4" />
        </button>
      </motion.div>

      {/* Share Actions */}
      <motion.div variants={itemVariants} className="mt-8 flex justify-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
          <Share2 className="h-4 w-4" />
          {language === 'en' ? 'Share' : language === 'hu' ? 'Megosztás' : 'Teilen'}
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
          <Download className="h-4 w-4" />
          {language === 'en' ? 'Download PDF' : language === 'hu' ? 'PDF letöltése' : 'PDF herunterladen'}
        </button>
      </motion.div>
    </motion.article>
  );
};

export default CaseStudyTemplate;
