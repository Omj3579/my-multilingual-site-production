import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  delay?: number;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, label, delay = 0 }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -5, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ 
      duration: 0.3, 
      delay,
      type: "spring",
      stiffness: 400,
      damping: 10
    }}
    viewport={{ once: true }}
    className="relative group w-8 h-8 rounded-full bg-gradient-to-br from-blue-600/90 to-blue-800/90 flex items-center justify-center shadow-lg backdrop-blur-sm hover:shadow-blue-600/30 transition-all duration-300 overflow-hidden border border-white/10"
  >
    {/* Animated premium glass effect background */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-blue-500/90 to-blue-700/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      initial={false}
      animate={{
        background: [
          "linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(30, 64, 175, 0.9) 100%)",
          "linear-gradient(135deg, rgba(96, 165, 250, 0.9) 0%, rgba(37, 99, 235, 0.9) 100%)",
          "linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(30, 64, 175, 0.9) 100%)",
        ]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Icon with glow effect */}
    <div className="relative z-10 text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
      {icon}
    </div>
    
    {/* Premium hover effect */}
    <motion.div
      className="absolute inset-0 bg-white/15 rounded-full opacity-0 group-hover:opacity-100"
      initial={false}
      whileHover={{
        scale: [1, 1.3, 1],
        opacity: [0, 0.4, 0]
      }}
      transition={{ duration: 0.8 }}
    />
    
    {/* Glass highlight effect */}
    <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent rounded-t-full"></div>
  </motion.a>
);

interface SocialIconsProps {
  className?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ className = "" }) => {  const socialLinks = [
    {
      href: "https://linkedin.com/company/flair-plastic",
      icon: <Linkedin className="w-3.5 h-3.5" />,
      label: "LinkedIn"
    },
    {
      href: "https://facebook.com/flairplastic",
      icon: <Facebook className="w-3.5 h-3.5" />,
      label: "Facebook"
    },
    {
      href: "https://instagram.com/flairplastic",
      icon: <Instagram className="w-3.5 h-3.5" />,
      label: "Instagram"
    },
    {
      href: "https://twitter.com/flairplastic",
      icon: <Twitter className="w-3.5 h-3.5" />,
      label: "Twitter"
    },
    {
      href: "https://youtube.com/flairplastic",
      icon: <Youtube className="w-3.5 h-3.5" />,
      label: "YouTube"
    }
  ];return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex flex-col gap-4 ${className}`}
    >
      <motion.div 
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
        className="w-full text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 mb-2"
      >
        <span className="inline-block border-b border-blue-200/50 pb-1">
          {/*Premium connect text*/}
          Connect with us
        </span>
      </motion.div>      <div className="flex flex-wrap gap-2">
        {socialLinks.map((social, index) => (
          <SocialIcon
            key={social.label}
            href={social.href}
            icon={social.icon}
            label={social.label}
            delay={index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SocialIcons;
