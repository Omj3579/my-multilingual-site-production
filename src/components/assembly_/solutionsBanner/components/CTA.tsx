import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';

interface CTAProps {
  variants: Variants;
}

const CTA: React.FC<CTAProps> = ({ variants }) => {
  return (
    <motion.div 
      variants={variants}
      className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-white"
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Transform Your Assembly Process?
      </h3>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Let our experts design a custom assembly solution that perfectly fits your industry requirements and business goals.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center space-x-2 group">
          <span>Get Custom Quote</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        
        <div className="flex space-x-6">
          <a 
            href="tel:+1234567890" 
            className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>Call Us</span>
          </a>
          <a 
            href="mailto:assembly@company.com" 
            className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
            <span>Email Us</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CTA;
