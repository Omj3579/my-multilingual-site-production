import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import Link from "next/link";

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = "" }) => {
  const { language } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧', nativeName: 'English' },
    { code: 'hu', name: 'Hungarian', flag: '🇭🇺', nativeName: 'Magyar' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);
  const otherLanguage = languages.find(lang => lang.code !== language);
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="flex items-center space-x-2 text-sm text-gray-600"
      >
        <motion.div
          animate={{
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 3,
          }}
        >
          <Globe className="w-4 h-4 text-blue-500" />
        </motion.div>
        <span>{language === 'en' ? 'Language:' : 'Nyelv:'}</span>
      </motion.div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 px-3 border-blue-200/70 hover:border-blue-300/70 hover:bg-blue-50/80 backdrop-blur-sm transition-all duration-200 shadow-sm"
          >
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-base">{currentLanguage?.flag}</span>
              <span className="font-medium text-gray-700">{currentLanguage?.nativeName}</span>
              <motion.div
                animate={{ y: [0, 2, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <ChevronDown className="w-3 h-3 text-gray-500" />
              </motion.div>
            </motion.div>
          </Button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent 
          align="end" 
          className="min-w-[150px] border-blue-100/70 shadow-lg backdrop-blur-sm bg-white/90"
        >
          {languages.map((lang) => (
            <DropdownMenuItem key={lang.code} asChild>
              <Link 
                href={lang.code === 'en' ? '/en' : '/hu'}
                className={`flex items-center space-x-3 px-3 py-2 hover:bg-blue-50/90 transition-all duration-200 cursor-pointer ${
                  lang.code === language ? 'bg-blue-50/90 text-blue-700' : 'text-gray-700'
                }`}
              >
                <motion.span 
                  className="text-base"
                  whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {lang.flag}
                </motion.span>
                <span className="font-medium">{lang.nativeName}</span>
                {lang.code === language && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-blue-500 rounded-full ml-auto"
                  />
                )}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Premium alternative simple link for quick switch */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-sm"
      >
        <Link 
          href={otherLanguage?.code === 'en' ? '/en' : '/hu'}
          className="relative text-blue-700 hover:text-blue-800 font-medium transition-all duration-200 group"
        >
          <span className="relative z-10">{otherLanguage?.nativeName}</span>
          <motion.span 
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400/30 group-hover:w-full transition-all duration-300"
            whileHover={{ width: "100%" }}
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default LanguageSwitcher;
