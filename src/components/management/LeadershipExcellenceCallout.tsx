import React, { useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView, useAnimation, useMotionValue, useTransform } from 'framer-motion';

// Import necessary only for WebGL effect
import * as THREE from 'three';

const LeadershipExcellenceCallout = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  
  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x / 40); // More subtle movement
    mouseY.set(y / 40);
  };

  // WebGL background effect
  useEffect(() => {
    if (!canvasRef.current) return;

    let renderer, scene, camera, material, mesh;
    let width = sectionRef.current.offsetWidth;
    let height = sectionRef.current.offsetHeight;
    let animationFrameId;

    const init = () => {
      // Create renderer
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
        alpha: true
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

      // Create scene
      scene = new THREE.Scene();

      // Create camera
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 50;

      // Create geometry - floating blobs
      const geometry = new THREE.SphereGeometry(20, 64, 64);
      material = new THREE.MeshPhongMaterial({
        color: 0x0b2878,
        emissive: 0x0b2878,
        emissiveIntensity: 0.5,
        specular: 0xffffff,
        shininess: 50,
        transparent: true,
        opacity: 0.15,
        wireframe: true,
        side: THREE.DoubleSide
      });
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // Create lights
      const light1 = new THREE.PointLight(0xf39e74, 1, 100);
      light1.position.set(0, 20, 20);
      scene.add(light1);

      const light2 = new THREE.PointLight(0xa4d0f5, 1, 100);
      light2.position.set(20, -20, 20);
      scene.add(light2);

      const light3 = new THREE.AmbientLight(0xffffff, 0.2);
      scene.add(light3);
    };

    const animate = () => {
      if (!mesh) return;
      
      // Subtle rotation
      mesh.rotation.x += 0.001;
      mesh.rotation.y += 0.002;

      // Response to mouse position
      mesh.position.x = mouseX.get() * 0.05;
      mesh.position.y = -mouseY.get() * 0.05;
      
      // Render
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!sectionRef.current || !renderer || !camera) return;
      
      width = sectionRef.current.offsetWidth;
      height = sectionRef.current.offsetHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    init();
    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      // Clean up Three.js resources
      if (mesh) {
        mesh.geometry.dispose();
        mesh.material.dispose();
      }
      if (scene) {
        scene.dispose();
      }
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  // Dynamic text effects
  const visibleVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="relative h-auto py-24 md:py-32 font-[Poppins] text-[#0b2878] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
    >
      {/* WebGL Background Effect */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
      />

      {/* Improved Glass Panel Layout */}
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-center relative">
        <motion.div
          className="relative p-8 md:p-16 rounded-3xl overflow-hidden w-full max-w-5xl"
          style={{ 
            transformStyle: "preserve-3d",
            perspective: "1000px",
            rotateX: useTransform(mouseY, [-300, 300], [2, -2]),
            rotateY: useTransform(mouseX, [-300, 300], [-2, 2]),
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 30 }}
        >
          {/* Glass panel background with sophisticated blur effect */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-white bg-opacity-20 rounded-3xl backdrop-blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl" />
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(255,255,255,0.15)] rounded-3xl" />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{
                backgroundPosition: ['200% 0%', '-200% 0%']
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#a4d0f5]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0b2878]/30 to-transparent" />
          </div>

          {/* Improved text layout */}
          <div className="relative z-10 mx-auto">
            <motion.h3
              className="text-xl md:text-2xl font-semibold text-[#a4d0f5] mb-6 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.7 }}
            >
              {language === 'en' ? "Our Leadership Ethos" : "Vezetői Hitvallásunk"}
            </motion.h3>
            
            <p className="text-lg md:text-2xl leading-relaxed tracking-wide text-[#0b2878]/90">
              {language === 'en' ? (
                <motion.span animate={controls} variants={visibleVariant} transition={{ staggerChildren: 0.03 }}>
                  <motion.span className="text-[#a4d0f5] font-semibold relative inline-block" variants={wordVariant}>
                    Flair–Plastic's executive leadership
                    <motion.span 
                      className="absolute bottom-0 left-0 right-0 h-[1px]"
                      style={{ background: '#a4d0f5', opacity: 0.7 }}
                      initial={{ scaleX: 0, transformOrigin: 'left' }}
                      animate={{ scaleX: isInView ? 1 : 0 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                    <motion.span 
                      className="absolute bottom-0 left-0 right-0 h-[3px]"
                      style={{ 
                        background: 'linear-gradient(90deg, transparent, #a4d0f5, transparent)',
                        opacity: 0.5,
                        filter: 'blur(2px)'
                      }}
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 3, delay: 1.5, repeat: Infinity, repeatDelay: 8 }}
                    />
                  </motion.span>{" "}
                  
                  is unwavering in their commitment to uphold and enhance our{" "}
                  
                  <motion.span className="text-[#0b2878] font-semibold relative" variants={wordVariant}>
                    <motion.span 
                      className="absolute -inset-1 rounded-lg opacity-20 blur-lg -z-10"
                      style={{ background: "#0b2878" }}
                      animate={{ opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                    />
                    exceptional standards of performance, precision, and flexibility
                  </motion.span>.{" "}
                  
                  Through careful attention to detail and an all-encompassing approach, they ensure that every aspect of the organization operates with the utmost{" "}
                  
                  <motion.span 
                    className="text-[#0b2878] font-semibold relative"
                    variants={wordVariant}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span
                      className="absolute -inset-1 rounded-md opacity-10 blur-sm -z-10" 
                      style={{ background: "#0b2878" }}
                    />
                    care
                  </motion.span>{" "}and{" "}
                  
                  <motion.span 
                    className="text-[#0b2878] font-semibold relative"
                    variants={wordVariant}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span
                      className="absolute -inset-1 rounded-md opacity-10 blur-sm -z-10" 
                      style={{ background: "#0b2878" }}
                    />
                    efficiency
                  </motion.span>, thereby fostering a culture of excellence that permeates every level of the company.
                </motion.span>
              ) : (
                // Hungarian version with same effects
                <motion.span animate={controls} variants={visibleVariant} transition={{ staggerChildren: 0.03 }}>
                  <motion.span className="text-[#a4d0f5] font-semibold relative inline-block" variants={wordVariant}>
                    A Flair-Plastic vezetősége
                    <motion.span 
                      className="absolute bottom-0 left-0 right-0 h-[1px]"
                      style={{ background: '#a4d0f5', opacity: 0.7 }}
                      initial={{ scaleX: 0, transformOrigin: 'left' }}
                      animate={{ scaleX: isInView ? 1 : 0 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                    <motion.span 
                      className="absolute bottom-0 left-0 right-0 h-[3px]"
                      style={{ 
                        background: 'linear-gradient(90deg, transparent, #a4d0f5, transparent)',
                        opacity: 0.5,
                        filter: 'blur(2px)'
                      }}
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 3, delay: 1.5, repeat: Infinity, repeatDelay: 8 }}
                    />
                  </motion.span>{" "}
                  
                  rendíthetetlenül elkötelezett a{" "}
                  
                  <motion.span className="text-[#0b2878] font-semibold relative" variants={wordVariant}>
                    <motion.span 
                      className="absolute -inset-1 rounded-lg opacity-20 blur-lg -z-10"
                      style={{ background: "#0b2878" }}
                      animate={{ opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                    />
                    kivételes teljesítmény, precizitás és rugalmasság
                  </motion.span>{" "}
                  
                  standardjainak fenntartása és fejlesztése mellett. A részletekre való gondos odafigyeléssel és átfogó megközelítéssel biztosítják, hogy a szervezet minden aspektusa a legnagyobb{" "}
                  
                  <motion.span 
                    className="text-[#0b2878] font-semibold relative"
                    variants={wordVariant}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span
                      className="absolute -inset-1 rounded-md opacity-10 blur-sm -z-10" 
                      style={{ background: "#0b2878" }}
                    />
                    gondossággal
                  </motion.span>{" "}és{" "}
                  
                  <motion.span 
                    className="text-[#0b2878] font-semibold relative"
                    variants={wordVariant}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span
                      className="absolute -inset-1 rounded-md opacity-10 blur-sm -z-10" 
                      style={{ background: "#0b2878" }}
                    />
                    hatékonysággal
                  </motion.span>{" "}
                  működjön, ezáltal olyan kiválósági kultúrát teremtve, amely áthatja a vállalat minden szintjét.
                </motion.span>
              )}
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Animated accents */}
      <motion.div 
        className="absolute bottom-10 right-10 w-20 h-20 rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(243,158,116,0.2) 0%, rgba(243,158,116,0) 70%)',
          filter: 'blur(10px)'
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.section>
  );
};

export default LeadershipExcellenceCallout;
