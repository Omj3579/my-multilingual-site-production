import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Phone, 
  MapPin, 
  Sparkles, 
  ArrowUpRight,
  Cog,
  Leaf,
  Building2,
  Package
} from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  
  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30, rotateY: -15 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const servicesSubItems = [
    { href: '/services/plastic-injection-moulding', label: 'Precision Injection Manufacturing' },
    { href: '/services/in-mould-labelling', label: 'In-Mould Labeling Technology' },
    { href: '/services/surface-enhancement', label: 'Surface Enhancement Solutions' },
    { href: '/services/strategic-manufacturing', label: 'Strategic Manufacturing Solutions' },
    { href: '/services/tooling-management', label: 'Professional Tooling Management' },
  ];

  const sustainabilitySubItems = [
    { href: '/sustainability/renewable-energy', label: 'Renewable Energy Integration' },
    { href: '/sustainability/water-management', label: 'Advanced Water Management' },
    { href: '/sustainability/circular-material-flow', label: 'Circular Material Flow' },
    { href: '/sustainability/environmental-stewardship', label: 'Environmental Stewardship' },
    { href: '/sustainability/process-optimization', label: 'Process Optimization' },
  ];

  const aboutUsSubItems = [
    { href: '/company/origins', label: 'Company Origins' },
    { href: '/company/growth-milestones', label: 'Growth & Milestones' },
    { href: '/company/innovation-legacy', label: 'Innovation Legacy' },
    { href: '/company/executive-leadership', label: 'Executive Leadership' },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={menuVariants}
      className="w-full relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        border: '1px solid rgba(255,255,255,0.2)',
        boxShadow: `
          0 20px 40px rgba(0,0,0,0.1),
          0 1px 0 rgba(255,255,255,0.2) inset,
          0 -1px 0 rgba(0,0,0,0.1) inset
        `,
      }}
    >
      <div className="relative z-10 p-4">
        {/* Navigation Header with Futuristic Design */}
        <motion.div 
          variants={itemVariants}
          className="mb-4 relative"
        >
          <div className="flex items-center gap-2 mb-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center"
            >
              <Sparkles className="w-3 h-3 text-white" />
            </motion.div>
            <h3 className="text-xs font-bold text-gray-600 uppercase tracking-[0.15em] opacity-80">
              Flair-Plastic
            </h3>
          </div>
          <div className="h-px bg-gradient-to-r from-orange-400 via-transparent to-orange-400 opacity-30" />
        </motion.div>

        <div className="flex flex-col gap-2 w-full">
          {/* Our Services */}
          <motion.div variants={itemVariants} className="w-full">
            <motion.button
              onClick={() => toggleSection('services')}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-between p-3 text-left transition-all duration-300 group"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: expandedSections.includes('services') 
                  ? '0 6px 24px rgba(250,155,107,0.2), 0 0 0 1px rgba(250,155,107,0.3)'
                  : '0 3px 15px rgba(0,0,0,0.1)',
              }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ 
                    background: expandedSections.includes('services')
                      ? 'linear-gradient(135deg, #fa9b6b, #e86e40)'
                      : 'linear-gradient(135deg, rgba(250,155,107,0.2), rgba(232,110,64,0.2))'
                  }}
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                >
                  <Cog className="w-4 h-4" style={{ color: expandedSections.includes('services') ? '#fff' : '#fa9b6b' }} />
                </motion.div>
                <span className="text-base font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                  Our Services
                </span>
              </div>
              <motion.div
                animate={{ rotate: expandedSections.includes('services') ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ChevronDown className="w-4 h-4 text-gray-600 group-hover:text-orange-600 transition-colors" />
              </motion.div>
            </motion.button>
            
            <AnimatePresence>
              {expandedSections.includes('services') && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden mt-2"
                >
                  <div className="pl-3 space-y-1">
                    {servicesSubItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.2 }}
                      >
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="group flex items-center gap-2 p-2 rounded-lg transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-sm"
                        >
                          <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                          <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">{item.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Green Innovation */}
          <motion.div variants={itemVariants} className="w-full">
            <motion.button
              onClick={() => toggleSection('sustainability')}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-between p-3 text-left transition-all duration-300 group"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: expandedSections.includes('sustainability') 
                  ? '0 6px 24px rgba(34,197,94,0.2), 0 0 0 1px rgba(34,197,94,0.3)'
                  : '0 3px 15px rgba(0,0,0,0.1)',
              }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ 
                    background: expandedSections.includes('sustainability')
                      ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                      : 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(22,163,74,0.2))'
                  }}
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                >
                  <Leaf className="w-4 h-4" style={{ color: expandedSections.includes('sustainability') ? '#fff' : '#22c55e' }} />
                </motion.div>
                <span className="text-base font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                  Green Innovation
                </span>
              </div>
              <motion.div
                animate={{ rotate: expandedSections.includes('sustainability') ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ChevronDown className="w-4 h-4 text-gray-600 group-hover:text-green-600 transition-colors" />
              </motion.div>
            </motion.button>
            
            <AnimatePresence>
              {expandedSections.includes('sustainability') && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden mt-2"
                >
                  <div className="pl-3 space-y-1">
                    {sustainabilitySubItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.2 }}
                      >
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="group flex items-center gap-2 p-2 rounded-lg transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-sm"
                        >
                          <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-green-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                          <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">{item.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* About Us */}
          <motion.div variants={itemVariants} className="w-full">
            <motion.button
              onClick={() => toggleSection('about')}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-between p-3 text-left transition-all duration-300 group"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: expandedSections.includes('about') 
                  ? '0 6px 24px rgba(59,130,246,0.2), 0 0 0 1px rgba(59,130,246,0.3)'
                  : '0 3px 15px rgba(0,0,0,0.1)',
              }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ 
                    background: expandedSections.includes('about')
                      ? 'linear-gradient(135deg, #3b82f6, #2563eb)'
                      : 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(37,99,235,0.2))'
                  }}
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                >
                  <Building2 className="w-4 h-4" style={{ color: expandedSections.includes('about') ? '#fff' : '#3b82f6' }} />
                </motion.div>
                <span className="text-base font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  About Us
                </span>
              </div>
              <motion.div
                animate={{ rotate: expandedSections.includes('about') ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ChevronDown className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </motion.div>
            </motion.button>
            
            <AnimatePresence>
              {expandedSections.includes('about') && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden mt-2"
                >
                  <div className="pl-3 space-y-1">
                    {aboutUsSubItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.2 }}
                      >
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="group flex items-center gap-2 p-2 rounded-lg transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-sm"
                        >
                          <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                          <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">{item.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Products Portfolio */}
          <motion.div variants={itemVariants} className="w-full">
            <Link
              href="/products"
              onClick={onClose}
              className="group block w-full p-3 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 3px 15px rgba(0,0,0,0.1)',
              }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <Package className="w-4 h-4 text-purple-500" />
                </div>
                <span className="text-base font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                  Products Portfolio
                </span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="ml-auto"
                >
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Futuristic Divider */}
          <motion.div 
            variants={itemVariants}
            className="my-3 relative"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-30" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-0 -top-1 flex justify-center"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
            </motion.div>
          </motion.div>

          {/* Quick Contact Section */}
          <motion.div variants={itemVariants} className="space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-5 h-5 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center"
              >
                <div className="w-2 h-2 bg-white rounded-full" />
              </motion.div>
              <h3 className="text-xs font-bold text-gray-600 uppercase tracking-[0.15em] opacity-80">
                Quick Connect
              </h3>
            </div>
            
            {/* Phone */}
            <motion.div 
              whileHover={{ scale: 1.02, x: 8 }}
              className="flex items-center gap-3 p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                <Phone className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm text-gray-700 font-semibold">+ 36 (46) 584 060</span>
            </motion.div>
            
            {/* Location */}
            <motion.div 
              whileHover={{ scale: 1.02, x: 8 }}
              className="flex items-center gap-3 p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-green-600" />
              </div>
              <Link
                href="https://maps.app.goo.gl/woB1q7QZFc4ChVd98"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 font-semibold hover:text-green-600 transition-colors"
              >
                Company Location
              </Link>
            </motion.div>
            
            {/* Contact Button */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-3"
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="group relative block w-full text-center font-bold py-3 px-4 rounded-xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #fa9b6b 0%, #e86e40 100%)',
                  boxShadow: '0 6px 24px rgba(250,155,107,0.4), 0 0 0 1px rgba(255,255,255,0.1) inset',
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: [-100, 400] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="relative z-10 text-white flex items-center justify-center gap-2 text-sm">
                  Contact Us Now
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
