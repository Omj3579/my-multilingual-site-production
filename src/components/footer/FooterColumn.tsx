import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
  isMobile: boolean;
  delay?: number;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ 
  title, 
  links, 
  isMobile, 
  delay = 0 
}) => {
  if (isMobile) {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={title} className="border-none">
          <AccordionTrigger className="flex justify-between items-center py-4 px-0 text-left hover:no-underline">
            <h3 className="text-blue-800 font-semibold text-lg">
              {title}
            </h3>
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <ul className="space-y-4">
              {links.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center text-gray-600 hover:text-blue-700 transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden flex items-center opacity-0 group-hover:opacity-100">
                      <ChevronRight className="w-3 h-3 text-blue-600" />
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="relative pb-2 inline-block mb-6">
        <h3 className="text-blue-800 font-semibold text-lg relative z-10">
          {title}
        </h3>
        <motion.div 
          className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-400 to-blue-100 rounded-full"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          viewport={{ once: true }}
        />
      </div>
      
      <ul className="space-y-4">
        {links.map((link, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: delay + (index * 0.1) }}
            viewport={{ once: true }}
          >
            <Link 
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group flex items-center text-gray-600 hover:text-blue-700 transition-colors duration-300"
            >
              <span className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden flex items-center opacity-0 group-hover:opacity-100">
                <motion.div
                  animate={{ 
                    x: [0, 3, 0],
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 0.5,
                  }}
                  className="text-blue-500"
                >
                  <ChevronRight className="w-3 h-3" />
                </motion.div>
              </span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                {link.label}
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FooterColumn;
