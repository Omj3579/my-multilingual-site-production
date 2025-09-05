import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

interface NewsletterFormProps {
  className?: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ className = "" }) => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError(language === 'en' ? 'Please enter a valid email address' : 'Kérjük, adjon meg egy érvényes email címet');
      return;
    }

    setIsSubmitting(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      setEmail('');
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);    } catch {
      setError(language === 'en' ? 'Something went wrong. Please try again.' : 'Valami hiba történt. Kérjük, próbálja újra.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className={`w-full lg:w-auto ${className}`}
    >
      <div className="flex flex-col sm:flex-row gap-3 sm:items-start relative">        <div className="relative flex-1 min-w-[280px]">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            placeholder={language === 'en' ? "Enter your email address" : "Adja meg az email címét"}
            required
            disabled={isSubmitting || isSuccess}
            className={`w-full h-14 pl-5 pr-12 bg-white/90 backdrop-blur-sm rounded-xl border shadow-sm focus:shadow-md focus:ring-2 transition-all outline-none text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed peer
              ${error 
                ? 'border-red-300 focus:border-red-400 focus:ring-red-200' 
                : isSuccess 
                  ? 'border-green-300 focus:border-green-400 focus:ring-green-200'
                  : 'border-blue-100/70 focus:border-blue-300/70 focus:ring-blue-200/70'
              }`}
          />
          
          {/* Premium floating label effect */}
          <span className="absolute top-1.5 left-5 text-xs font-medium text-blue-500 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
            {language === 'en' ? "Email address" : "Email cím"}
          </span>
          
          {/* Premium focus outline animation */}
          <motion.span 
            className={`absolute bottom-0 left-0 h-0.5 w-0 ${isSuccess ? 'bg-green-400' : error ? 'bg-red-400' : 'bg-blue-400'} rounded-full`}
            initial={{ width: "0%" }}
            whileInView={{ width: "0%" }}
            whileFocus={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Icon with premium animation */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            {isSuccess ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                className="text-green-500 drop-shadow-sm"
              >
                <CheckCircle className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                animate={{ 
                  y: [0, -2, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Mail className={`w-5 h-5 transition-colors ${error ? 'text-red-400' : 'text-blue-400'}`} />
              </motion.div>
            )}
          </div>
            {/* Error message with premium animation */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute -bottom-6 left-0 text-red-600 text-xs flex items-center mt-1"
            >
              <div className="w-1 h-1 bg-red-500 rounded-full mr-1.5 animate-pulse"></div>
              {error}
            </motion.div>
          )}
        </div>          <Button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className={`h-14 px-8 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 min-w-[140px] disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm relative overflow-hidden group
            ${isSuccess 
              ? 'bg-gradient-to-br from-green-500/90 to-green-700/90 hover:from-green-600/90 hover:to-green-800/90 shadow-green-500/20 hover:shadow-green-500/30 border border-green-400/20' 
              : 'bg-gradient-to-br from-blue-600/90 to-blue-800/90 hover:from-blue-700/90 hover:to-blue-900/90 shadow-blue-500/20 hover:shadow-blue-500/30 border border-blue-400/20'
            }`}
        >
          {/* Premium glass/light effect on button */}
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none"></div>
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              />
              <span className="font-medium relative z-10">{language === 'en' ? 'Subscribing...' : 'Feliratkozás...'}</span>
            </>
          ) : isSuccess ? (
            <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
              >
                <CheckCircle className="w-4 h-4" />
              </motion.div>
              <span className="font-medium relative z-10">{language === 'en' ? 'Subscribed!' : 'Feliratkozott!'}</span>
            </>
          ) : (
            <>
              <span className="font-medium relative z-10">{language === 'en' ? 'Subscribe' : 'Feliratkozás'}</span>
              <motion.div
                animate={{ 
                  x: [0, 3, 0],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
                className="relative z-10"
              >
                <Send className="w-4 h-4" />
              </motion.div>
            </>
          )}
        </Button>
      </div>
        {/* Success message with premium styling */}
      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-sm text-green-600 flex items-center gap-2 bg-green-50/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-green-100/50"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
          >
            <CheckCircle className="w-4 h-4" />
          </motion.div>
          <span>
            {language === 'en' 
              ? 'Thank you for subscribing to our newsletter!' 
              : 'Köszönjük, hogy feliratkozott hírlevelünkre!'
            }
          </span>
        </motion.div>
      )}
    </motion.form>
  );
};

export default NewsletterForm;
