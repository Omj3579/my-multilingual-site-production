import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Award, User, ImageIcon, ArrowUpRight } from 'lucide-react';

interface PostcardProps {
  slug: string;
  category: 'blog' | 'case-study' | 'news' | 'update';
  title: { en: string; hu: string; de: string };
  description: { en: string; hu: string; de: string };
  summary?: { en: string; hu: string; de: string };
  image: string;
  thumbnailImage?: string;
  date: string;
  publishedAt?: string;
  author: {
    id: string;
    name: string;
    role: { en: string; hu: string; de: string };
    avatar?: string;
  };
  readTime: number;
  tags: string[];
  featured: boolean;
  customUrl?: string;
  typeInfo: {
    icon: React.ReactNode;
    label: string;
  };
  formatDate: (date: string) => string;
  language: string;
  mosaicSize?: 'normal' | 'large' | 'tall';
  className?: string;
}

export const MosaicPostcard: React.FC<PostcardProps> = ({
  slug,
  category,
  title,
  description,
  summary,
  image,
  thumbnailImage,
  date,
  publishedAt,
  author,
  readTime,
  tags,
  featured,
  customUrl,
  typeInfo,
  formatDate,
  language,
  mosaicSize = 'normal',
  className = ''
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const resourceUrl = customUrl || `/resources/${category}/${slug}`;
    // Adapt layout based on mosaic size for hero-style design
  const isLarge = mosaicSize === 'large';
  const isTall = mosaicSize === 'tall';
  
  // Fallback gradient backgrounds based on category
  const getCategoryGradient = () => {
    const gradients = {
      'news': 'from-blue-600 via-blue-700 to-indigo-800',
      'blog': 'from-purple-600 via-purple-700 to-pink-800',
      'case-study': 'from-emerald-600 via-green-700 to-teal-800',
      'update': 'from-orange-600 via-amber-700 to-red-800'
    };
    return gradients[category] || 'from-slate-600 via-gray-700 to-zinc-800';
  };  // Enhanced fallback with gradients and icons
  const renderImageFallback = () => (
    <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryGradient()} flex items-center justify-center overflow-hidden`}>
      {/* Animated geometric background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/15 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-white/15 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="text-white text-center relative z-10">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-4 lg:p-6">
            <ImageIcon className="h-12 w-12 lg:h-16 lg:w-16 mx-auto opacity-90" />
          </div>
        </div>
        <h4 className="text-lg lg:text-xl font-bold opacity-95 mb-2">
          {typeInfo.label}
        </h4>
        <p className="text-sm lg:text-base opacity-80 mb-4">
          Content Preview
        </p>
        <div className="flex items-center justify-center space-x-2 opacity-70">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-200"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-400"></div>
        </div>
      </div>
      
      {/* Additional floating elements */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>      <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-1/2 left-4 w-4 h-4 bg-white/10 rounded-full animate-pulse delay-700"></div>
    </div>
  );

  return (
    <Link href={resourceUrl} className="block h-full">
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col ${className}`}
      >
        {/* Full Background Image */}
        <div className="absolute inset-0">
          {!imageError ? (
            <>
              <Image
                src={thumbnailImage || image}
                alt={title[language as keyof typeof title]}
                fill
                className={`object-cover object-center transform group-hover:scale-110 transition-all duration-700 ease-out ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                sizes={
                  isTall 
                    ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    : isLarge 
                    ? "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw"
                    : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                }
                onLoad={() => setImageLoading(false)}
                onError={() => {
                  setImageError(true);
                  setImageLoading(false);
                }}
                priority={featured}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              {/* Enhanced loading state */}
              {imageLoading && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                    <ImageIcon className="absolute inset-0 m-auto h-6 w-6 text-gray-400" />
                  </div>
                </div>
              )}
            </>
          ) : (
            renderImageFallback()
          )}
        </div>

        {/* Multi-layered gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/70 group-hover:via-black/25 group-hover:to-black/5 transition-all duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40 group-hover:via-black/15 group-hover:to-black/30 transition-all duration-500"></div>
          {/* Top badges section with enhanced styling */}
        <div className="relative z-20 flex justify-between items-start p-4 lg:p-6">
          <Badge className="bg-white/95 backdrop-blur-md text-gray-800 hover:bg-white hover:scale-105 shadow-lg hover:shadow-xl border-0 font-semibold text-xs lg:text-sm transition-all duration-300 group-hover:bg-white/100">
            <span className="mr-1.5 transition-transform duration-300 group-hover:scale-110">{typeInfo.icon}</span>
            {typeInfo.label}
          </Badge>
          
          {featured && (
            <Badge className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-yellow-900 shadow-xl hover:shadow-2xl border-0 font-bold text-xs lg:text-sm hover:scale-105 transition-all duration-300 animate-pulse">
              <Award className="h-3 w-3 mr-1.5 animate-pulse" />
              Featured
            </Badge>
          )}
        </div>

        {/* Content overlay - positioned based on card size */}
        <div className={`relative z-20 flex flex-col flex-1 ${
          isTall 
            ? 'justify-between p-4 lg:p-6' 
            : isLarge 
            ? 'justify-end p-4 lg:p-6' 
            : 'justify-end p-3 lg:p-4'
        }`}>
          
          {/* Meta information - positioned at top for tall cards, condensed for others */}
          {isTall && (
            <div className="mb-4">
              <div className="flex items-center text-white/90 text-xs lg:text-sm mb-3">
                <Calendar className="h-4 w-4 mr-2 text-blue-300" />
                <span className="font-medium">{formatDate(publishedAt || date)}</span>
                {readTime && (
                  <>
                    <Clock className="h-4 w-4 ml-4 mr-2 text-green-300" />
                    <span>{readTime} min read</span>
                  </>
                )}
              </div>
              
              {/* Author for tall cards */}
              {author && author.name && (
                <div className="flex items-center mb-3 p-2 bg-white/10 backdrop-blur-md rounded-lg">
                  {author.avatar ? (
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      width={28}
                      height={28}
                      className="rounded-full mr-2 ring-2 ring-white/50"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2 flex items-center justify-center">
                      <User className="h-3 w-3 text-white" />
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-white text-xs">{author.name}</p>
                    <p className="text-xs text-white/70">
                      {author.role[language as keyof typeof author.role]}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}          {/* Main content section with enhanced text readability */}
          <div className="text-white">
            {/* Title with text shadow for better readability */}
            <h3 className={`font-bold text-white mb-2 lg:mb-3 leading-tight drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-xl ${
              isTall 
                ? 'text-xl lg:text-2xl line-clamp-3' 
                : isLarge 
                ? 'text-lg lg:text-xl line-clamp-2' 
                : 'text-base lg:text-lg line-clamp-2'
            }`} style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.8)' }}>
              {title[language as keyof typeof title]}
            </h3>            {/* Description with subtle shadow */}
            <p className={`text-white/90 mb-3 lg:mb-4 leading-relaxed drop-shadow-md ${
              isTall 
                ? 'text-sm lg:text-base line-clamp-4' 
                : isLarge 
                ? 'text-sm line-clamp-3' 
                : 'text-xs lg:text-sm line-clamp-2'            }`} style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
              {summary?.[language as keyof typeof summary] || description[language as keyof typeof description]}
            </p>

            {/* Bottom meta and tags section */}
            <div className="space-y-2 lg:space-y-3">
              {/* Meta for non-tall cards */}
              {!isTall && (
                <div className="flex items-center text-white/80 text-xs">
                  <Calendar className="h-3 w-3 mr-1.5 text-blue-300" />
                  <span className="font-medium mr-3">{formatDate(publishedAt || date)}</span>
                  {readTime && (
                    <>
                      <Clock className="h-3 w-3 mr-1.5 text-green-300" />
                      <span>{readTime} min</span>
                    </>
                  )}
                </div>
              )}

              {/* Tags */}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {tags.slice(0, isTall ? 5 : isLarge ? 3 : 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {tags.length > (isTall ? 5 : isLarge ? 3 : 2) && (
                    <span className="px-2 py-1 bg-white/15 backdrop-blur-sm text-white/80 rounded-full text-xs">
                      +{tags.length - (isTall ? 5 : isLarge ? 3 : 2)}
                    </span>
                  )}
                </div>
              )}

              {/* Read more indicator */}
              <div className="flex items-center justify-between">
                <span className="text-white/90 font-semibold text-xs lg:text-sm">
                  Read More
                </span>
                <div className="flex items-center text-white/90">
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>        </div>

        {/* Enhanced hover effects */}
        {/* Subtle gradient border effect on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
          <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shimmer"></div>
        </div>
      </motion.div>
    </Link>
  );
};

export default MosaicPostcard;
