import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Activity } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { capabilitiesContent } from './capabilitiesContent';

interface CapabilitiesContentProps {
  variants?: any;
  activeTab: number;
  isProcessRunning: boolean;
}

const CapabilitiesContent: React.FC<CapabilitiesContentProps> = ({ 
  variants, 
  activeTab,
  isProcessRunning 
}) => {
  const { language } = useLanguage();
  const content = capabilitiesContent[language];
  const activeCapability = content.tabs[activeTab];

  return (
    <motion.div variants={variants} className="space-y-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Left Column - Capability Details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white">
                <activeCapability.icon size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900">
                  {activeCapability.title}
                </h4>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mt-2">
                  {activeCapability.label}
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              {activeCapability.description}
            </p>

            {/* Features */}
            <div>
              <h5 className="text-lg font-semibold text-gray-900 mb-3">
                {language === 'en' ? 'Key Features:' : 'Főbb Jellemzők:'}
              </h5>
              <div className="grid grid-cols-2 gap-3">
                {activeCapability.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg border border-blue-200/50"
                  >
                    <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200/50">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">
                {language === 'en' ? 'Performance Metrics:' : 'Teljesítménymutatók:'}
              </h5>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(activeCapability.metrics).map(([key, value], index) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {value}
                    </div>
                    <div className="text-sm text-gray-600 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Process Visualization */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-between mb-6">
              <h5 className="text-xl font-bold">
                {language === 'en' ? 'Live Process Monitor' : 'Élő Folyamat Monitor'}
              </h5>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">
                  {language === 'en' ? 'Live' : 'Élő'}
                </span>
              </div>
            </div>

            {/* Process Steps */}
            <div className="space-y-4">
              {activeCapability.processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    step.status === 'completed' ? 'bg-green-600 text-white' :
                    step.status === 'active' ? 'bg-blue-600 text-white' :
                    'bg-gray-600 text-gray-300'
                  }`}>
                    {step.status === 'completed' ? (
                      <CheckCircle2 size={16} />
                    ) : step.status === 'active' ? (
                      <Activity size={16} className="animate-pulse" />
                    ) : (
                      <span className="text-xs font-bold">{index + 1}</span>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{step.title}</span>
                      <span className="text-sm text-gray-400">{step.duration}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          step.status === 'completed' ? 'bg-green-600' :
                          step.status === 'active' ? 'bg-blue-600' : 'bg-gray-600'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ 
                          width: step.status === 'completed' ? '100%' : 
                                 step.status === 'active' ? '60%' : '0%'
                        }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Status Indicator */}
            <div className="mt-6 flex items-center justify-between p-4 bg-blue-900/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="font-medium">
                  {language === 'en' ? 'System Operational' : 'Rendszer Működik'}
                </span>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">
                  {language === 'en' ? 'Efficiency' : 'Hatékonyság'}
                </div>
                <div className="text-lg font-bold text-green-400">98.7%</div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default CapabilitiesContent;
