import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Separator } from "@/components/ui/separator";

interface LegalLinksProps {
  className?: string;
}

const LegalLinks: React.FC<LegalLinksProps> = ({ className = "" }) => {
  const { language } = useLanguage();

  const legalLinks = [
    {
      href: "/policies/privacy",
      label: language === 'en' ? 'Privacy Policy' : 'Adatvédelmi Irányelvek'
    },
    {
      href: "/policies/terms",
      label: language === 'en' ? 'Terms of Service' : 'Felhasználási Feltételek'
    },
    {
      href: "/policies/cookies",
      label: language === 'en' ? 'Cookie Policy' : 'Cookie Irányelvek'
    },
    {
      href: "/policies/disclaimer",
      label: language === 'en' ? 'Disclaimer' : 'Jogi Nyilatkozat'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={className}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-sm text-gray-500 flex items-center gap-2"
        >
          <span>©</span>
          <span>{new Date().getFullYear()}</span>
          <span className="font-semibold text-gray-700">Flair-Plastic</span>
          <Separator orientation="vertical" className="h-4" />
          <span>
            {language === 'en' ? 'All rights reserved.' : 'Minden jog fenntartva.'}
          </span>
        </motion.p>
        
        {/* Legal Links */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-1"
        >
          {legalLinks.map((link, index) => (
            <React.Fragment key={link.href}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-blue-700 transition-colors duration-200 px-2 py-1 rounded hover:bg-blue-50"
                >
                  {link.label}
                </Link>
              </motion.div>
              {index < legalLinks.length - 1 && (
                <Separator orientation="vertical" className="h-3 mx-1" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
      
      {/* Additional company info */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-4 pt-4 border-t border-gray-100"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <p>
            {language === 'en' 
              ? 'European leader in precision plastic manufacturing since 1995'
              : 'Európai vezető a precíziós műanyaggyártásban 1995 óta'
            }
          </p>
          <div className="flex items-center gap-4">
            <span>ISO 9001:2015</span>
            <Separator orientation="vertical" className="h-3" />
            <span>ISO 14001:2015</span>
            <Separator orientation="vertical" className="h-3" />
            <span>CE Marking</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LegalLinks;
