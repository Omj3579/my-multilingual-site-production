import React from 'react';
import { motion, Variants, AnimatePresence, MotionValue } from 'framer-motion';
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  project: string;
  timeline: string;
  budget: string;
}

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string;
}

interface FormContent {
  name: string;
  email: string;
  company: string;
  phone: string;
  project: string;
  timeline: string;
  budget: string;
  submit: string;
  privacy: string;
}

interface FinalCTAProps {
  language: string;
  urgencyOffer: {
    description: string;
  };
  contact: ContactInfo;
  form: FormContent;
  showContactForm: boolean;
  setShowContactForm: (show: boolean) => void;
  formData: FormData;
  setFormData: (data: FormData) => void;
  handleFormSubmit: (e: React.FormEvent) => void;
  itemVariants: Variants;  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const FinalCTA: React.FC<FinalCTAProps> = ({
  language,
  urgencyOffer,
  contact,
  form,
  showContactForm,
  setShowContactForm,
  formData,
  setFormData,
  handleFormSubmit,
  itemVariants,
  mouseX,
  mouseY
}) => {
  return (
    <motion.div variants={itemVariants} className="text-center space-y-12">
      <motion.div
        className="bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30 shadow-2xl"
        style={{
          rotateX: mouseY,
          rotateY: mouseX,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="text-4xl font-bold text-white mb-4">
              {language === 'en' ? 'Ready to Get Started?' : 'Készen Áll a Kezdésre?'}
            </h3>
            <p className="text-xl text-purple-200">
              {urgencyOffer.description}
            </p>
          </div>

          {/* Quick Contact Options */}
          <div className="grid sm:grid-cols-3 gap-6">
            <motion.a
              href={`tel:${contact.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center space-x-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <Phone size={24} className="text-green-400" />
              <div className="text-left">
                <div className="font-semibold">Call Now</div>
                <div className="text-sm text-purple-300">{contact.phone}</div>
              </div>
            </motion.a>

            <motion.a
              href={`mailto:${contact.email}`}
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
                  placeholder={form.name}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder={form.email}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder={form.company}
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder={form.phone}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none"
                />
                <textarea
                  placeholder={form.project}
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
                    <span>{form.submit}</span>
                    <Send size={20} />
                  </span>
                </motion.button>
                
                <p className="sm:col-span-2 text-sm text-purple-300 text-center">
                  {form.privacy}
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FinalCTA;
