import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Cog } from 'lucide-react';
import type { ServiceDetailsProps } from '../types';
import { featureVariants } from '../constants/animations';

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service, language }) => {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
            <Cog size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              {service.title}
            </h3>
            <p className="text-lg text-blue-600 font-medium">
              {service.subtitle}
            </p>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 gap-3">
        {service.features.map((feature: string, index: number) => (
          <motion.div
            key={feature}
            variants={featureVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200/50"
          >
            <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
            <span className="text-sm font-medium text-gray-700">{feature}</span>
          </motion.div>
        ))}
      </div>

      {/* Specifications */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900">
          {language === 'en' ? 'Technical Specifications' : 'Műszaki Specifikációk'}
        </h4>
        <div className="grid sm:grid-cols-2 gap-4">
          {Object.entries(service.specifications).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-600">{key}</span>
              <span className="text-sm font-bold text-gray-900">{String(value)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Industries & Certifications */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h5 className="text-sm font-semibold text-gray-900 mb-3">
            {language === 'en' ? 'Industries Served' : 'Kiszolgált Iparágak'}
          </h5>
          <div className="flex flex-wrap gap-2">
            {service.industries.map((industry: string) => (
              <span key={industry} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                {industry}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h5 className="text-sm font-semibold text-gray-900 mb-3">
            {language === 'en' ? 'Certifications' : 'Tanúsítványok'}
          </h5>
          <div className="flex flex-wrap gap-2">
            {service.certifications.map((cert: string) => (
              <span key={cert} className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
