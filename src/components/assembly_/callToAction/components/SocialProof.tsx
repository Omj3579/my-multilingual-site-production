import React from 'react';
import { motion, Variants, MotionValue, useTransform } from 'framer-motion';
import { Star, Building } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

interface SocialProofProps {
  title: string;
  testimonials: Testimonial[];
  logos?: string[];
  itemVariants: Variants;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const SocialProof: React.FC<SocialProofProps> = ({ 
  title, 
  testimonials, 
  logos, 
  itemVariants, 
  mouseX, 
  mouseY 
}) => {
  const rotateX = useTransform(mouseY, [0, 1], [1, -1]);
  const rotateY = useTransform(mouseX, [0, 1], [-1, 1]);

  return (
    <motion.div variants={itemVariants} className="space-y-12">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full" />
      </div>

      {/* Testimonials Carousel */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl relative"
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Star Rating */}
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-current" />
              ))}
            </div>            {/* Quote */}
            <blockquote className="text-white leading-relaxed mb-6 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                {testimonial.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-purple-300">{testimonial.role}</div>
                <div className="text-sm text-purple-400">{testimonial.company}</div>
              </div>
            </div>

            {/* Floating Quote Icon */}
            <motion.div
              className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-black font-bold text-lg">&ldquo;</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Client Logos */}
      {logos && (
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center space-x-8 opacity-60"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center"
            >
              <Building size={20} className="text-white" />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default SocialProof;
