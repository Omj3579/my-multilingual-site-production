import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <Link 
      href="/" 
      className="flex items-center space-x-2 border-0 outline-0 shadow-none"
      style={{ 
        border: 'none', 
        outline: 'none', 
        boxShadow: 'none',
        textDecoration: 'none'
      }}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="border-0 outline-0 shadow-none"
        style={{ 
          border: 'none', 
          outline: 'none', 
          boxShadow: 'none',
          background: 'transparent'
        }}
      >
        <Image 
          src="https://flair-plastic.hu/wp-content/uploads/2022/09/cropped-flair_plastic_logo_cmyk_full_-_MAIN.png.webp" 
          alt="Flair-Plastic Logo" 
          width={160}
          height={48}
          className="h-12 w-auto border-0 outline-0 shadow-none"
          style={{ 
            border: 'none !important', 
            outline: 'none !important', 
            boxShadow: 'none !important',
            display: 'block'
          }}
        />
      </motion.div>
    </Link>
  );
};

export default Logo;
