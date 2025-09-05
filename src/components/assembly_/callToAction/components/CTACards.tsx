import React from 'react';
import { motion, Variants, MotionValue, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, Zap } from 'lucide-react';

interface CTAOption {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ size: number }>;
  color: string;
  value: string;
  features: string[];
  cta: string;
  urgency: string;
}

interface CTACardsProps {
  ctaOptions: CTAOption[];
  activeOffer: number;
  setActiveOffer: (index: number) => void;
  itemVariants: Variants;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  language: string;
}

const CTACards: React.FC<CTACardsProps> = ({ 
  ctaOptions, 
  activeOffer, 
  setActiveOffer, 
  itemVariants, 
  mouseX, 
  mouseY, 
  language 
}) => {
  const rotateX = useTransform(mouseY, [0, 1], [2, -2]);
  const rotateY = useTransform(mouseX, [0, 1], [-2, 2]);
  return (
    <motion.div variants={itemVariants} className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          {language === 'en' ? 'Choose Your Path to Success' : 'Válassza Ki Sikeres Útját'}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
      </div>

      {/* CTA Cards */}
      <div className="grid lg:grid-cols-3 gap-8">
        {ctaOptions.map((option, index) => (
          <motion.div
            key={option.id}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -15,
              rotateX: 5,
              rotateY: index === 1 ? 0 : index === 0 ? -5 : 5,
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveOffer(index)}
            className={`group cursor-pointer relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 ${
              activeOffer === index
                ? 'border-purple-400/60 shadow-2xl shadow-purple-500/25'
                : 'border-white/20 shadow-xl hover:border-purple-400/40'
            }`}            style={{
              transformStyle: 'preserve-3d',
              rotateX,
              rotateY,
            }}
          >
            {/* Popular Badge */}
            {index === 1 && (
              <motion.div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold text-sm rounded-full shadow-lg"
                animate={{
                  y: [-2, 2, -2],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {language === 'en' ? 'Most Popular' : 'Legnépszerűbb'}
              </motion.div>
            )}

            {/* Value Badge */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
              {option.value}
            </div>

            {/* Icon */}
            <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${option.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
              <option.icon size={40} />
            </div>

            {/* Content */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{option.title}</h3>
              <p className="text-lg text-purple-300 font-medium mb-4">{option.subtitle}</p>
              <p className="text-purple-200 leading-relaxed mb-6">{option.description}</p>

              {/* Features List */}
              <div className="space-y-3 text-left">
                {option.features.map((feature, idx) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 size={16} className="text-green-400 flex-shrink-0" />
                    <span className="text-white text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Urgency */}
            <div className="text-center mb-6">
              <motion.div 
                className="inline-flex items-center space-x-2 px-3 py-1 bg-red-500/20 text-red-300 text-sm font-medium rounded-full border border-red-400/30"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Clock size={14} />
                <span>{option.urgency}</span>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg text-white bg-gradient-to-r ${option.color} shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative flex items-center justify-center space-x-2">
                <span>{option.cta}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            {/* Floating Action Indicators */}
            <motion.div
              className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Zap size={20} className="text-white" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CTACards;
