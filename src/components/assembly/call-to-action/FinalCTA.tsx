import React, { useState } from 'react';
import { motion, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Send, 
  Rocket, 
  ArrowRight 
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  project: string;
  timeline: string;
  budget: string;
}

interface FinalCTAProps {
  content: {
    urgencyOffer: {
      description: string;
    };
    contact: {
      phone: string;
      email: string;
    };
    form: {
      name: string;
      email: string;
      company: string;
      phone: string;
      project: string;
      timeline: string;
      budget: string;
      submit: string;
      privacy: string;
    };
  };
  mouseX: any;
  mouseY: any;
  itemVariants: any;
  language: string;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ 
  content, 
  mouseX, 
  mouseY, 
  itemVariants, 
  language 
}) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    project: '',
    timeline: '',
    budget: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  return (
    <motion.div variants={itemVariants} className="text-center space-y-12">
      <motion.div
        className="bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30 shadow-2xl"
        style={{
          rotateX: useTransform(mouseY, [0, 1], [2, -2]),
          rotateY: useTransform(mouseX, [0, 1], [-2, 2]),
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="text-4xl font-bold text-white mb-4">
              {language === 'en' ? 'Ready to Get Started?' : 'Készen Áll a Kezdésre?'}
            </h3>
            <p className="text-xl text-purple-200">
              {content.urgencyOffer.description}
            </p>
          </div>

          {/* Quick Contact Options */}
          <div className="grid sm:grid-cols-3 gap-6">
            <motion.a
              href={`tel:${content.contact.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center space-x-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <Phone size={24} className="text-green-400" />
              <div className="text-left">
                <div className="font-semibold">Call Now</div>
                <div className="text-sm text-purple-300">{content.contact.phone}</div>
              </div>
            </motion.a>

            <motion.a
              href={`mailto:${content.contact.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center space-x-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <Mail size={24} className="text-blue-400" />
              <div className="text-left">
                <div className="font-semibold">Email Us</div>
                <div className="text-sm text-purple-300">Instant Response</div>
              </div>
            </motion.a>

            <motion.button
              onClick={() => setShowContactForm(!showContactForm)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center space-x-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <MessageCircle size={24} className="text-purple-400" />
              <div className="text-left">
                <div className="font-semibold">Quick Form</div>
                <div className="text-sm text-purple-300">30 Seconds</div>
              </div>
            </motion.button>
          </div>

          {/* Contact Form */}
          <AnimatePresence>
            {showContactForm && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={handleFormSubmit}
                className="grid sm:grid-cols-2 gap-6 mt-8"
              >
                <input
                  type="text"
                  placeholder={content.form.name}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder={content.form.email}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder={content.form.company}
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder={content.form.phone}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none"
                />
                <textarea
                  placeholder={content.form.project}
                  value={formData.project}
                  onChange={(e) => setFormData({...formData, project: e.target.value})}
                  rows={4}
                  className="sm:col-span-2 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none resize-none"
                />
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="sm:col-span-2 p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative flex items-center justify-center space-x-2">
                    <span>{content.form.submit}</span>
                    <Send size={20} />
                  </span>
                </motion.button>
                
                <p className="sm:col-span-2 text-sm text-purple-300 text-center">
                  {content.form.privacy}
                </p>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Ultimate CTA Button */}
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl shadow-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #f97316)',
              backgroundSize: '300% 300%',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.8 }}
            />
            <span className="relative flex items-center space-x-3">
              <Rocket size={28} />
              <span>{language === 'en' ? 'Transform My Manufacturing NOW' : 'Alakítsam Át Gyártásomat MOST'}</span>
              <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
            </span>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                rotate: [0, 360],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                y: [-2, 2, -2],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};
