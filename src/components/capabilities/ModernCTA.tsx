import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, MessageCircle, Download, Calendar } from 'lucide-react';

const ModernCTA = () => {
  const { language } = useLanguage();

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-green-900 to-emerald-900">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 bg-orange-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-green-200 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              {language === 'en' ? 'Ready to Start' : 'Készen állsz a kezdésre'}
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                {language === 'en' ? 'Flair-Plastic' : 'Flair-Plastic'}
              </span>{' '}
              <span className="text-white">
                {language === 'en' ? 'extends its' : 'kiterjeszti az'}
              </span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                {language === 'en' ? 'commitment' : 'elkötelezettségét'}
              </span>
              <br />
              <span className="text-white">
                {language === 'en' ? 'to' : 'a'}
              </span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                {language === 'en' ? 'excellence' : 'kiválóság'}
              </span>
            </h2>
            
            <p className="text-xl text-green-100 leading-relaxed max-w-3xl mx-auto">
              {language === 'en'
                ? 'by offering comprehensive manufacturing design services, and a steadfast focus on client satisfaction through innovative technologies and optimized product performance.'
                : 'átfogó gyártástervezési szolgáltatások nyújtásával, valamint az ügyfél-elégedettségre való állhatatos összpontosítással innovatív technológiákon és optimalizált termékteljesítményen keresztül.'
              }
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-green-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              {language === 'en' ? 'Contact Us' : 'Kapcsolat'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
            >
              <Calendar className="w-5 h-5" />
              {language === 'en' ? 'Schedule Consultation' : 'Konzultáció időpontja'}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              {language === 'en' ? 'Download Brochure' : 'Brosúra letöltése'}
            </motion.button>
          </motion.div>

          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            {[
              {
                title: language === 'en' ? 'Quick Response' : 'Gyors válasz',
                value: '< 24h',
                description: language === 'en' ? 'Response time' : 'Válaszidő'
              },
              {
                title: language === 'en' ? 'Global Support' : 'Globális támogatás',
                value: '24/7',
                description: language === 'en' ? 'Available' : 'Elérhető'
              },
              {
                title: language === 'en' ? 'Expert Team' : 'Szakértő csapat',
                value: '25+',
                description: language === 'en' ? 'Engineers' : 'Mérnök'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
              >
                <div className="text-2xl font-bold text-yellow-400 mb-1">{item.value}</div>
                <div className="text-white font-medium mb-1">{item.title}</div>
                <div className="text-green-200 text-sm">{item.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ModernCTA;
