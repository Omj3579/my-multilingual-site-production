import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 

const HeroWithTitle = ({ title }) => {
  const { language } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Create spring-based scroll progress for smoother animations
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Parallax values based on scroll
  const titleParallax = useTransform(smoothScroll, [0, 1], [0, -150]);
  const imageParallax = useTransform(smoothScroll, [0, 1], [0, -50]);
  
  // Cursor position for interactive effects
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Background color gradients changing based on scroll
  const gradientStart = useTransform(
    smoothScroll,
    [0, 0.5, 1],
    ["hsla(210, 100%, 99%, 1)", "hsla(220, 100%, 98%, 1)", "hsla(230, 100%, 97%, 1)"]
  );
  
  const gradientEnd = useTransform(
    smoothScroll,
    [0, 0.5, 1],
    ["hsla(210, 50%, 95%, 1)", "hsla(220, 50%, 92%, 1)", "hsla(230, 50%, 90%, 1)"]
  );
  
  const particlesInit = async (engine) => {
    // Use loadSlim instead of loadFull for better compatibility
    await loadSlim(engine);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      // Normalized mouse position relative to container
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(x);
      cursorY.set(y);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  // Calculate blob positions
  const blobX1 = useTransform(cursorX, [0, 1], ["0%", "100%"]);
  const blobY1 = useTransform(cursorY, [0, 1], ["0%", "100%"]);
  const blobX2 = useTransform(cursorX, [0, 1], ["100%", "0%"]);
  const blobY2 = useTransform(cursorY, [0, 1], ["100%", "0%"]);

  return (
    <motion.div 
      ref={containerRef}
      className="w-full h-screen relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${gradientStart}, ${gradientEnd})`
      }}
    >
      {/* Floating blobs */}
      <motion.div 
        className="absolute w-[40vw] h-[40vw] rounded-full opacity-20 blur-3xl"
        style={{
          background: "linear-gradient(35deg, #4285f4, #34a853)",
          top: blobY1,
          left: blobX1,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute w-[35vw] h-[35vw] rounded-full opacity-15 blur-3xl"
        style={{
          background: "linear-gradient(35deg, #fbbc05, #ea4335)",
          top: blobY2,
          left: blobX2,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          particles: {
            number: { value: 30, density: { enable: true, value_area: 1000 } },
            color: { value: "#676767" },
            opacity: { value: 0.3, random: true, anim: { enable: true, speed: 0.5 } },
            size: { value: 3, random: true, anim: { enable: true, speed: 2 } },
            move: {
              enable: true,
              direction: "none",
              outMode: "bounce",
              speed: 0.8,
              random: true,
              straight: false,
              attract: { enable: true, rotateX: 600, rotateY: 1200 }
            },
            links: {
              enable: true,
              distance: 150,
              color: "#676767",
              opacity: 0.2,
              width: 1
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: { distance: 140, line_linked: { opacity: 0.5 } },
              push: { particles_nb: 3 }
            }
          }
        }}
        className="absolute inset-0 h-screen"
      />
      
      <div className="relative z-10 h-full w-full mx-auto px-4 lg:px-10 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          {/* Left side - Title with advanced text effects */}
          <motion.div 
            className="flex flex-col space-y-8"
            style={{ y: titleParallax }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.span 
                className="text-sm uppercase tracking-[0.3em] font-medium text-gray-500 block mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {language === 'en' ? 'Our Expertise' : 'Szaktudásunk'}
              </motion.span>
              
              <div className="relative">
                <motion.h1 
                  className="text-6xl md:text-7xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-500 to-gray-600 leading-tight"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {language === 'en' 
                    ? <>Plastic <br/> Injection <br/> Moulding</> 
                    : <>Műanyag <br/> Fröccsöntés <br/> Gyártás</>}
                </motion.h1>
                
                {/* Glowing effect */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full blur-lg opacity-30"
                  style={{
                    background: 'linear-gradient(45deg, #3490dc, #6574cd)',
                    filter: 'blur(40px)',
                    maskImage: language === 'en' 
                      ? 'linear-gradient(to right, #000, transparent)'
                      : 'linear-gradient(to right, #000, transparent)'
                  }}
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                {/* Animated underline */}
                <motion.div
                  className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-6"
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                />
              </div>
              
              <motion.p 
                className="text-gray-600 text-lg mt-8 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {language === 'en' 
                  ? 'Precision engineering and innovative manufacturing solutions for advanced plastic components.'
                  : 'Precíziós mérnöki munka és innovatív gyártási megoldások fejlett műanyag alkatrészekhez.'}
              </motion.p>
              
              <motion.button
                className="mt-10 px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg flex items-center space-x-2 group overflow-hidden relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">
                  {language === 'en' ? 'Learn More' : 'Tudj meg többet'}
                </span>
                <motion.span 
                  className="relative z-10 transition-transform"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  →
                </motion.span>
                {/* Button hover effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right side - Enhanced image with 3D effect instead of actual 3D model */}
          <motion.div 
            className="hidden lg:flex justify-center items-center h-full"
            style={{ y: imageParallax }}
          >
            <motion.div 
              className="relative w-full h-[500px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="h-full w-full backdrop-blur-sm bg-white/20 rounded-2xl relative">
                {/* Enhanced image with 3D effect */}
                <motion.div 
                  className="w-full h-full relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.img
                    src="https://flair-plastic.hu/wp-content/uploads/2024/05/machine-performing-in-mould-decoration-on-white-plastic-parts-showcasing-the-process-of-1.png.webp"
                    alt={language === 'en' ? 'Injection Molding Machine' : 'Fröccsöntő gép'}
                    className="absolute inset-0 w-full h-full object-cover z-10"
                    style={{
                      transform: `translateX(${-mousePosition.x / 60}px) translateY(${-mousePosition.y / 60}px) scale(1.1)`
                    }}
                  />
                  
                  {/* Floating elements over the image to create 3D effect */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-500/20 rounded-full blur-md z-20"
                    animate={{
                      y: [-5, 5, -5],
                      x: [5, -5, 5],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-amber-500/20 rounded-full blur-md z-20"
                    animate={{
                      y: [8, -8, 8],
                      x: [-5, 5, -5],
                      scale: [1.2, 1, 1.2],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  
                  {/* Image overlay with depth effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-gray-900/30 via-transparent to-gray-900/20 z-20"
                    animate={{
                      background: [
                        "linear-gradient(to top right, rgba(17, 24, 39, 0.3), transparent, rgba(17, 24, 39, 0.2))",
                        "linear-gradient(to top right, rgba(17, 24, 39, 0.2), transparent, rgba(17, 24, 39, 0.3))",
                        "linear-gradient(to top right, rgba(17, 24, 39, 0.3), transparent, rgba(17, 24, 39, 0.2))"
                      ]
                    }}
                    transition={{
                      duration: 8, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </motion.div>
              </div>
              
              {/* Keep the decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 blur-xl rounded-full transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-amber-400/20 to-pink-500/20 blur-xl rounded-full transform -translate-x-1/2 translate-y-1/2" />
              
              {/* Keep the glass reflection effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/30 to-transparent"
                initial={{ opacity: 0.5 }}
                animate={{
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
              />
              
              {/* Glass container border */}
              <div className="absolute inset-0 rounded-2xl border border-white/20" />
              
              {/* Floating UI elements to enhance 3D feeling */}
              <motion.div
                className="absolute top-6 left-6 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-md border border-white/20 text-sm text-gray-700 font-medium"
                animate={{
                  y: [-2, 2, -2],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {language === 'en' ? 'Precision Engineering' : 'Precíziós mérnöki munka'}
              </motion.div>
              
              <motion.div
                className="absolute bottom-8 right-8 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-md border border-white/20 text-sm text-gray-700 font-medium"
                animate={{
                  y: [2, -2, 2],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              >
                {language === 'en' ? 'Advanced Technology' : 'Fejlett technológia'}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Custom cursor effect - optional */}
      <motion.div
        className="fixed w-6 h-6 rounded-full border-2 border-gray-800 pointer-events-none z-50 hidden md:block"
        style={{ 
          left: mousePosition.x, 
          top: mousePosition.y,
          x: "-50%",
          y: "-50%"
        }}
        animate={{
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 1,
          repeat: Infinity
        }}
      />
    </motion.div>
  );
};

export default HeroWithTitle;
