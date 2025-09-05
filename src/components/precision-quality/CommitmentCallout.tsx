import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { BadgeCheck, Award, Star } from 'lucide-react';

const CommitmentCallout = () => {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      {/* Dark gradient background with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 z-0"></div>
      
      {/* Abstract geometric decorations */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-400 mix-blend-overlay blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-amber-300 mix-blend-overlay blur-3xl opacity-20"></div>
      </div>
      
      {/* Top accent border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-amber-400 to-blue-500 z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-24 md:py-28 max-w-7xl mx-auto">
          {/* Floating quality badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute -top-10 md:-top-14 right-10 md:right-20 hidden md:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-500 rounded-full blur-xl opacity-30"></div>
              <div className="relative bg-gradient-to-r from-amber-400 to-amber-500 p-4 rounded-full shadow-xl rotate-12 border-2 border-amber-300/50">
                <BadgeCheck size={40} className="text-white" />
              </div>
            </div>
          </motion.div>

          {/* Icon row */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center gap-8 mb-10"
          >
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-amber-400 to-amber-500 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg mb-2">
                <BadgeCheck size={24} className="text-white" />
              </div>
              <span className="text-amber-300 text-sm uppercase tracking-wider font-medium">
                {language === 'en' ? 'Certified' : 'Tanúsított'}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-amber-400 to-amber-500 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg mb-2">
                <Award size={24} className="text-white" />
              </div>
              <span className="text-amber-300 text-sm uppercase tracking-wider font-medium">
                {language === 'en' ? 'Excellence' : 'Kiválóság'}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-amber-400 to-amber-500 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg mb-2">
                <Star size={24} className="text-white" />
              </div>
              <span className="text-amber-300 text-sm uppercase tracking-wider font-medium">
                {language === 'en' ? 'Premium' : 'Prémium'}
              </span>
            </div>
          </motion.div>

          {/* Main callout text with animations */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative">
              {/* Text highlight effects */}
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: '120px' }}
                transition={{ duration: 1.2, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute h-1 bg-amber-400/50 bottom-0 left-1/2 transform -translate-x-1/2 rounded-full"
              ></motion.span>
              
              {/* Main Heading */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-400 mb-6">
                {language === 'en' ? 'The Quality Promise' : 'A Minőségi Ígéret'}
              </h2>
            </div>

            {/* Main callout text - animated lines */}
            <div className="max-w-4xl mx-auto space-y-6">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-white"
              >
                {language === 'en' ? (
                  <>
                    At <span className="text-amber-400 font-bold">Flair–Plastic, quality</span> is more than a <span className="text-amber-400 font-bold">benchmark—it's a promise.</span>
                  </>
                ) : (
                  <>
                    A <span className="text-amber-400 font-bold">Flair–Plastic-nél a minőség</span> több mint <span className="text-amber-400 font-bold">mérce—ez egy ígéret.</span>
                  </>
                )}
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-blue-100"
              >
                {language === 'en' ? (
                  'Our rigorous quality systems and continuous innovation ensure that every product not only meets but exceeds your expectations.'
                ) : (
                  'Szigorú minőségi rendszereink és folyamatos innovációnk biztosítja, hogy minden termék nemcsak megfelel, hanem meghaladja elvárásait.'
                )}
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-white"
              >
                {language === 'en' ? (
                  <>
                    Trust us to <span className="text-amber-400 font-bold italic">deliver excellence consistently</span>, making every project a success.
                  </>
                ) : (
                  <>
                    Bízzon bennünk, hogy <span className="text-amber-400 font-bold italic">következetesen kiválóságot nyújtunk</span>, minden projektet sikeressé téve.
                  </>
                )}
              </motion.p>
            </div>
          </motion.div>

          {/* ISO certification badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full py-3 px-8 flex items-center gap-2 border border-white/20">
              <div className="bg-blue-500 rounded-full p-1">
                <BadgeCheck size={16} className="text-white" />
              </div>
              <span className="text-white font-medium">
                {language === 'en' ? 'ISO 9001:2015 Certified Quality Management System' : 'ISO 9001:2015 Tanúsított Minőségirányítási Rendszer'}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modern wavy divider instead of the triangle */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default CommitmentCallout;
