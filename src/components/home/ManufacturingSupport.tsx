import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, Zap, Shield, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

const features = {
  en: [
    {
      title: 'Engineering Consultation',
      description: 'Expert engineering support from concept to production, ensuring optimal design and manufacturability.',
      color: '#4A6CF7',
      gradient: 'from-blue-500/20 to-indigo-600/20',
      icon: Sparkles,
      delay: 0
    },
    {
      title: 'Material Selection', 
      description: 'Comprehensive material analysis and selection guidance for optimal performance and cost-effectiveness.',
      color: '#E44002',
      gradient: 'from-orange-500/20 to-red-600/20',
      icon: Zap,
      delay: 0.1
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes and testing protocols to ensure consistent product excellence.',
      color: '#00B574',
      gradient: 'from-emerald-500/20 to-green-600/20',
      icon: Shield,
      delay: 0.2
    },
    {
      title: 'Technical Documentation',
      description: 'Complete technical documentation and specifications to support your manufacturing requirements.',
      color: '#FFB700',
      gradient: 'from-amber-500/20 to-orange-600/20',
      icon: FileText,
      delay: 0.3
    }
  ],
  hu: [
    {
      title: 'Mérnöki Konzultáció',
      description: 'Szakértő mérnöki támogatás a koncepciótól a gyártásig, az optimális tervezés és gyárthatóság biztosítása érdekében.',
      color: '#4A6CF7',
      gradient: 'from-blue-500/20 to-indigo-600/20',
      icon: Sparkles,
      delay: 0
    },
    {
      title: 'Anyagválasztás',
      description: 'Átfogó anyagelemzés és -választási útmutatás az optimális teljesítmény és költséghatékonyság érdekében.',
      color: '#E44002',
      gradient: 'from-orange-500/20 to-red-600/20',
      icon: Zap,
      delay: 0.1
    },
    {
      title: 'Minőségbiztosítás',
      description: 'Szigorú minőség-ellenőrzési folyamatok és tesztelési protokollok a következetes termékminőség biztosítása érdekében.',
      color: '#00B574',
      gradient: 'from-emerald-500/20 to-green-600/20',
      icon: Shield,
      delay: 0.2
    },
    {
      title: 'Műszaki Dokumentáció',
      description: 'Teljes műszaki dokumentáció és specifikációk a gyártási követelmények támogatásához.',
      color: '#FFB700',
      gradient: 'from-amber-500/20 to-orange-600/20',
      icon: FileText,
      delay: 0.3
    }
  ]
};

export default function ManufacturingSupport() {
  const { language } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* Lighter Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-40">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-cyan-200/30"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />


      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Futuristic Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-600/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
            <span className="text-blue-700 text-sm font-medium tracking-wider uppercase">
              {language === 'en' ? 'Next-Gen Manufacturing' : 'Következő generációs gyártás'}
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-800 via-gray-900 to-slate-800 bg-clip-text text-transparent">
              {language === 'en' ? 'Production' : 'Gyártási'}
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {language === 'en' ? 'Experience' : 'Tapasztalat'}
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            {language === 'en' 
              ? 'Revolutionary manufacturing solutions powered by advanced technology and decades of expertise'
              : 'Forradalmi gyártási megoldások fejlett technológiával és évtizedes szakértelemmel'}
          </p>
        </div>

        {/* Advanced Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {(features[language as keyof typeof features] ?? features['en']).map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link
                key={index}
                href="/contact"
                className="group relative block"
                style={{ animationDelay: `${feature.delay}s` }}
              >
                {/* Card Container */}
                <div className="relative p-8 h-full bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200/60 hover:border-blue-300/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-start mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center border border-gray-200/50 group-hover:border-blue-400/50 transition-colors duration-300">
                          <Icon className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                      </div>
                      
                      <div className="ml-6 flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                      <span className="mr-3">
                        {language === 'en' ? 'Explore Solution' : 'Megoldás felfedezése'}
                      </span>
                      <div className="relative">
                        <ArrowUpRight 
                          size={20} 
                          className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                        />
                        <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated background elements */}
                  <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110" />
                  <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform group-hover:scale-110" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Futuristic CTA Section */}
        <div className="text-center mt-24">
          <div className="relative inline-block">
            <Link
              href="/contact"
              className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-2xl font-bold text-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <span className="relative z-10 mr-4">
                {language === 'en' ? 'Launch Your Future' : 'Indítsa el jövőjét'}
              </span>
              <ArrowUpRight 
                size={24} 
                className="relative z-10 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" 
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
}
