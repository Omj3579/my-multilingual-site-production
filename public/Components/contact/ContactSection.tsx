import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import Link from "next/link";
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Building, ArrowRight, CheckCircle, Users } from 'lucide-react';
import ReCaptcha from './ReCaptcha';
import MapEmbed from './MapEmbed';
import SubscribeBanner from './SubscribeBanner';

interface FormField {
  label: {
    en: string;
    hu: string;
  };
  name: string;
  type: string;
  required?: boolean;
  icon?: React.ReactNode;
}

const ContactSection = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Parallax transformations
  const rotateX = useTransform(mouseY, [-300, 300], [2, -2]);
  const rotateY = useTransform(mouseX, [-300, 300], [-2, 2]);
  const formRotateX = useTransform(mouseY, [-300, 300], [1, -1]);
  const formRotateY = useTransform(mouseX, [-300, 300], [-1, 1]);
  
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const { clientX, clientY } = e;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Form fields definition
  const fields: FormField[] = [
    { 
      label: { en: 'Last Name', hu: 'Vezetéknév' }, 
      name: 'lastName', 
      type: 'text',
      icon: <span className="text-blue-400 opacity-60">01</span>
    },
    { 
      label: { en: 'First Name', hu: 'Keresztnév' }, 
      name: 'firstName', 
      type: 'text',
      icon: <span className="text-blue-400 opacity-60">02</span>
    },
    { 
      label: { en: 'Email', hu: 'Email' }, 
      name: 'email', 
      type: 'email',
      required: true,
      icon: <Mail size={16} className="text-blue-400 opacity-60" />
    },
    { 
      label: { en: 'Company Name', hu: 'Cégnév' }, 
      name: 'company', 
      type: 'text',
      required: true,
      icon: <Building size={16} className="text-blue-400 opacity-60" />
    },
    { 
      label: { en: 'Country', hu: 'Ország' }, 
      name: 'country', 
      type: 'text',
      required: true,
      icon: <MapPin size={16} className="text-blue-400 opacity-60" />
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setFormSuccess(true);
    
    toast({
      title: language === 'en' ? 'Message sent successfully!' : 'Üzenet sikeresen elküldve!',
      description: language === 'en'
        ? 'Thank you for reaching out. Our team will contact you shortly.'
        : 'Köszönjük, hogy kapcsolatba lépett velünk. Csapatunk hamarosan felveszi Önnel a kapcsolatot.',
      variant: "default",
    });
    
    // Reset success status after a while
    setTimeout(() => setFormSuccess(false), 5000);
  };

  const contactDetails = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: { en: 'Phone', hu: 'Telefonszám' },
      info: '+ 36 (46) 584 060',
      link: 'tel:+ 36 (46) 584 060'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: { en: 'Email', hu: 'E-mail' },
      info: 'info@flair-plastic.hu',
      link: 'mailto:info@flair-plastic.hu'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: { en: 'Address', hu: 'Cím' },
      info: language === 'en' ? 'Miskolc, Hungary' : 'Miskolc, Magyarország',
      link: 'https://goo.gl/maps/WZ9Z9Z9Z9Z9Z9Z9'
    }
  ];

  // Generate particles for background effect
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      }));
    };
    
    setParticles(generateParticles());
  }, []);

  return (
    <motion.section 
      ref={sectionRef}
      className="relative py-16 px-4 md:px-0 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
              width: particle.size * 30,
              height: particle.size * 30,
              opacity: particle.opacity,
            }}
            animate={{
              y: [`${particle.y}%`, `${particle.y - 10}%`, `${particle.y}%`],
              opacity: [particle.opacity, particle.opacity + 0.1, particle.opacity],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* More compact section header with less bottom margin */}
        <motion.div 
          className="text-center mb-10 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Floating badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 mb-4 bg-blue-50 border border-blue-100 rounded-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#f39e74] mr-2"></div>
            <span className="text-sm font-medium text-blue-800">
              {language === 'en' ? 'Let\'s Connect' : 'Kapcsolatfelvétel'}
            </span>
          </motion.div>
          
          {/* Heading remains the same but with less margin */}
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f39e74] to-[#e57b48]">
              {language === 'en' ? 'Get in touch' : 'Kapcsolatfelvétel'}
            </span>
          </motion.h1>
          
          {/* More compact subheadline */}
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {language === 'en' 
              ? 'Have questions or need information? Our team is here to help with all your manufacturing needs.'
              : 'Kérdése van vagy információra van szüksége? Csapatunk készen áll, hogy segítsen.'}
          </motion.p>
        </motion.div>

        {/* Main content area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
          {/* Left: Contact Form with Glass Effect - Now wider */}
          <motion.div 
            className="lg:col-span-7 lg:order-1 order-2"
            style={{
              rotateX: formRotateX,
              rotateY: formRotateY,
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <motion.form 
              ref={formRef}
              onSubmit={handleSubmit} 
              className="relative bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden p-6 shadow-xl"
            >
              {/* Visual effects for the form remain the same */}
              
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-3">
                  <Send className="h-5 w-5 text-[#f39e74]" />
                </span>
                {language === 'en' ? 'Send us a message' : 'Küldjön nekünk üzenetet'}
              </h3>
              
              {/* Form fields in a more compact layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {fields.map(({ label, name, type, required, icon }, i) => (
                  <div key={i} className="relative group">
                    <label
                      htmlFor={name}
                      className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
                    >
                      {icon && <span className="mr-2">{icon}</span>}
                      {label[language]} {required && <span className="text-[#f39e74] ml-1">*</span>}
                    </label>
                    <div className="relative">
                      <Input
                        id={name}
                        name={name}
                        type={type}
                        placeholder={label[language]}
                        required={required}
                        className="bg-white/50 border-gray-200 focus:border-[#f39e74] focus:ring focus:ring-[#f39e74]/20 transition-all shadow-sm"
                      />
                      {/* Animated focus indicator */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-focus-within:w-full bg-[#f39e74] transition-all duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Message Textarea with Elegant Design */}
              <div className="mt-5 relative group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <span className="mr-2 text-blue-400 opacity-60">06</span>
                  {language === 'en' ? 'Message' : 'Üzenet'} <span className="text-[#f39e74] ml-1">*</span>
                </label>
                <div className="relative">
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={language === 'en' ? 'Tell us about your project or inquiry...' : 'Meséljen projektjéről vagy érdeklődéséről...'}
                    required
                    className="min-h-[120px] bg-white/50 border-gray-200 focus:border-[#f39e74] focus:ring focus:ring-[#f39e74]/20 transition-all shadow-sm"
                  />
                  {/* Animated focus indicator */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-focus-within:w-full bg-[#f39e74] transition-all duration-300"></div>
                </div>
              </div>
              
              {/* More compact bottom section with privacy and recaptcha side by side */}
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
                {/* reCAPTCHA Section */}
                <div className="p-3 bg-blue-50/50 backdrop-blur-sm border border-blue-100 rounded-lg">
                  <ReCaptcha />
                </div>
                
                {/* Privacy Policy Section */}
                <div className="flex flex-col justify-between h-full">
                  <div className="flex items-start gap-2 mb-auto">
                    <div className="mt-1">
                      <Checkbox id="privacy" required className="text-[#f39e74] focus:ring-[#f39e74]/20 border-gray-300" />
                    </div>
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      {language === 'en'
                        ? 'I agree to the processing of my personal data in accordance with the'
                        : 'Hozzájárulok személyes adataim feldolgozásához a következő dokumentumnak megfelelően:'}
                      <Link href="/privacy" className="text-[#f39e74] hover:underline ml-1 font-medium">
                        {language === 'en' ? 'Privacy Policy' : 'Adatvédelmi szabályzat'}
                      </Link>
                    </label>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="mt-4 flex justify-end">
                    <motion.button
                      type="submit"
                      className="relative overflow-hidden px-6 py-2.5 bg-gradient-to-r from-[#f39e74] to-[#e57b48] text-white font-medium rounded-lg shadow-md flex items-center gap-2 hover:shadow-lg transition-all duration-300 disabled:opacity-70"
                      disabled={isSubmitting || formSuccess}
                      whileHover={{ scale: formSuccess ? 1 : 1.02 }}
                      whileTap={{ scale: formSuccess ? 1 : 0.98 }}
                    >
                      {formSuccess ? (
                        <>
                          <CheckCircle size={16} />
                          <span>{language === 'en' ? 'Message Sent' : 'Üzenet Elküldve'}</span>
                        </>
                      ) : isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>{language === 'en' ? 'Sending...' : 'Küldés...'}</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>{language === 'en' ? 'Submit' : 'Küldés'}</span>
                          
                          {/* Button shine effect */}
                          <span className="absolute inset-0 w-full h-full overflow-hidden opacity-0 hover:opacity-100">
                            <motion.span 
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              animate={{
                                left: ["-100%", "100%"],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 1
                              }}
                            />
                          </span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.form>
          </motion.div>
          
          {/* Right: Contact Details & Map with 3D effect - Now side by side in a column */}
          <motion.div 
            className="lg:col-span-5 lg:order-2 order-1"
            style={{
              rotateX,
              rotateY,
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Interactive contact card */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {/* Premium glass card */}
              <div className="relative bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden p-5 shadow-xl">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#f39e74]/10 to-blue-500/5 opacity-20"></div>
                
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#f39e74]/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-[#f39e74]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 ml-3">
                    {language === 'en' ? 'We\'re just a message away' : 'Csak egy üzenet választ el minket'}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'en'
                    ? 'Our expertise and global presence position Flair-Plastic as your local plastic injection moulding partner .'
                    : 'Szakértelmünk és globális jelenlétünk a Flair-Plastic-et az Ön helyi műanyag fröccsöntő partnerévé teszi.'}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-2">
                  {contactDetails.map((detail, index) => (
                    <motion.a
                      key={index}
                      href={detail.link}
                      className="flex items-center p-2 rounded-lg hover:bg-blue-50/50 transition-colors group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="h-8 w-8 rounded-full bg-blue-100/50 flex items-center justify-center mr-3 group-hover:bg-[#f39e74]/20 transition-colors">
                        <div className="text-blue-600 group-hover:text-[#f39e74] transition-colors">
                          {detail.icon}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-500">
                          {detail.title[language]}
                        </div>
                        <div className="text-gray-800 text-sm font-medium">
                          {detail.info}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Map with premium border - Now more compact */}
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#f39e74]/30 to-blue-500/30 blur-2xl opacity-30"></div>
              <div className="relative bg-white/80 backdrop-blur-md border border-white/20 p-5 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                  <span className="mr-2">
                    <MapPin className="h-5 w-5 text-[#f39e74]" />
                  </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f39e74] to-[#e57b48]">
                    {language === 'en' ? 'Our Global Presence' : 'Globális Jelenlétünk'}
                  </span>
                </h3>
                
                <div className="overflow-hidden rounded-lg shadow-lg border border-gray-200/50 relative z-20">
                  <MapEmbed />
                </div>
                
                {/* Subtle accent at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f39e74] to-[#e57b48] opacity-40"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Enhanced Subscribe Banner - Now integrated with less top margin  
        <div className="mt-10 w-full">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="w-full"
          >
            <SubscribeBanner />
          </motion.div>
        </div> */}
      </div>
    </motion.section>
  );
};

export default ContactSection;
