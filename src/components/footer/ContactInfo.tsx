import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactInfoProps {
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ className = "" }) => {
  const { language } = useLanguage();
  const contactItems = [
    {
      icon: <MapPin className="w-5 h-5 text-blue-700" />,
      label: language === 'en' ? 'Address' : 'Cím',
      content: 'Miskolc, Sajószigeti utca 2, 3527, Hungary',
      subContent: language === 'en' ? 'European Manufacturing Hub' : 'Európai Gyártási Központ'
    },
    {
      icon: <Phone className="w-5 h-5 text-blue-700" />,
      label: language === 'en' ? 'Phone' : 'Telefon',
      content: '+ 36 (46) 584 060',
      subContent: language === 'en' ? 'Business Hours: Mon-Fri 8:00-17:00' : 'Ügyfélfogadás: H-P 8:00-17:00'
    },
    {
      icon: <Mail className="w-5 h-5 text-blue-700" />,
      label: language === 'en' ? 'Enquiries' : 'Érdeklődés',
      content: (
        <Link 
          href="/contact" 
          className="text-blue-700 hover:text-blue-800 hover:underline transition-colors font-medium"
        >
          {language === 'en' ? 'Contact Us' : 'Kapcsolat'}
        </Link>
      ),
      subContent: language === 'en' ? 'Get a quote within 24 hours' : '24 órán belüli árajánlat'
    }
  ];return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-blue-500/5 border border-blue-50/50 relative overflow-hidden transition-all duration-400 ${className}`}
    >
      {/* Premium background elements */}
      <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-gradient-radial from-blue-100/50 to-blue-50/20 opacity-70 blur-xl"></div>
      <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-gradient-radial from-amber-100/40 to-amber-50/10 opacity-50 blur-xl"></div>
      
      {/* Premium floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-300/40 rounded-full"
          style={{
            left: `${20 + (i * 10)}%`,
            top: `${15 + (i * 8)}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + (i * 0.4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center mb-8"
        >
          <motion.div 
            className="w-1.5 h-12 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-700 rounded-full mr-4"
            animate={{
              scaleY: [1, 1.15, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />          <div>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 font-semibold text-xl">
              {language === 'en' ? 'Contact Information' : 'Kapcsolati Információk'}
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              {language === 'en' ? 'Get in touch with our expert team' : 'Vegye fel a kapcsolatot szakértő csapatunkkal'}
            </p>
          </div>
        </motion.div>

        <div className="space-y-6">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
              viewport={{ once: true }}
              className="flex items-start group"
            >
              <motion.div 
                className="mt-1 mr-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-50/90 to-blue-100/90 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:from-blue-100/90 group-hover:to-blue-200/90 transition-all duration-300 shadow-sm border border-white/50"
                whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                >
                  {item.icon}
                </motion.div>
                
                {/* Premium highlight effect */}
                <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/70 to-transparent rounded-t-full"></div>
              </motion.div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-blue-800 transition-colors">
                  {item.label}
                </p>
                <div className="text-gray-700 mb-1 relative">
                  {item.content}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-100 rounded-full"
                    animate={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.5 + (index * 0.2) }}
                  />
                </div>
                <p className="text-xs text-gray-500">
                  {item.subContent}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Premium Call-to-action with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-gray-100/50 relative"
        >
          {/* Premium animated accent line */}
          <motion.div 
            className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-blue-400 via-blue-300 to-transparent"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
          />
          
          <p className="text-sm text-gray-600 mb-3">
            {language === 'en' 
              ? 'Ready to start your next project?' 
              : 'Készen áll a következő projektre?'
            }
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white font-medium text-sm transition-all duration-300 bg-gradient-to-r from-blue-600/90 to-blue-800/90 hover:from-blue-700/90 hover:to-blue-900/90 shadow-md hover:shadow-lg border border-blue-400/20 backdrop-blur-sm group relative overflow-hidden"
          >
            <span className="relative z-10">
              {language === 'en' ? 'Request a Quote' : 'Árajánlat Kérése'}
            </span>
            <motion.span
              animate={{ 
                x: [0, 4, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="relative z-10"
            >
              →
            </motion.span>
            
            {/* Premium hover effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-blue-700/80 -translate-x-full"
              initial={{ translateX: "-100%" }}
              whileHover={{ translateX: "0%" }}
              transition={{ duration: 0.4 }}
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
