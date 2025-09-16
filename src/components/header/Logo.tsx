import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link 
      href="/" 
      className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#fa9b6b] focus:ring-offset-2 rounded-lg transition-all duration-200"
      aria-label="Flair-Plastic - Return to homepage"
    >
      <motion.div
        whileHover={{ 
          scale: 1.02,
          transition: { type: "spring", stiffness: 400, damping: 15 }
        }}
        whileTap={{ scale: 0.98 }}
        className="relative flex items-center justify-center"
      >
        {/* Main Logo */}
        <Image 
          src="/logos/flair_plastic_logo_cmyk_full_-_MAIN.png"
          alt="Flair-Plastic - Premium Injection Moulding Solutions" 
          width={150}
          height={42}
          priority
          className={`object-contain ${className}`}
          style={{ 
            width: 'auto',
            height: 'auto',
            maxWidth: '150px',
            maxHeight: '42px'
          }}
        />
      </motion.div>
    </Link>
  );
};

export default Logo;
