import React, { useEffect, useRef } from 'react';
import { Separator } from "@/components/ui/separator";
import { motion, useAnimation, useInView } from 'framer-motion';

const SectionDivider = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return (
    <div className="container mx-auto px-4 py-8" ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, scaleX: 0 },
          visible: { 
            opacity: 1, 
            scaleX: 1,
            transition: { 
              duration: 0.8,
              ease: "easeInOut"
            }
          }
        }}
        initial="hidden"
        animate={controls}
        className="w-full flex items-center justify-center"
      >
        <Separator className="bg-gradient-to-r from-transparent via-gray-400 to-transparent h-[1.5px] max-w-3xl w-full" />
      </motion.div>
    </div>
  );
};

export default SectionDivider;
