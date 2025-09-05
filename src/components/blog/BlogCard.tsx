import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogCardProps {
  post: {
    id: string;
    slug: string;
    title: { en: string; hu: string; de: string };
    description: { en: string; hu: string; de: string };
    excerpt?: { en: string; hu: string; de: string };
    image: string;
    thumbnailImage?: string;
    date: string;
    author: {
      name: string;
      role: { en: string; hu: string; de: string };
    };
    readTime: number;
    tags: string[];
    featured: boolean;
    customUrl?: string;
  };
}

export const BlogCard = ({ post }: BlogCardProps) => {
  const { language, translations } = useLanguage();
  
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  // Use custom URL if available, otherwise default blog URL
  const postUrl = post.customUrl || `/resources/blog/${post.slug}`;
  const displayImage = post.thumbnailImage || post.image;

  return (
    <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Image */}
      {displayImage && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={displayImage}
            alt={post.title[language]}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {post.featured && (
            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 bg-[#fa9b6b] text-white text-xs font-medium rounded-full">
                {t('blog.featured')}
              </span>
            </div>
          )}
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>
              {new Date(post.date).toLocaleDateString(
                language === 'en' ? 'en-US' : language === 'hu' ? 'hu-HU' : 'de-DE'
              )}
            </span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{t('blog.readTime').replace('${minutes}', post.readTime.toString())}</span>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-[#fa9b6b] transition-colors">
          <Link href={postUrl}>
            {post.title[language]}
          </Link>
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.excerpt?.[language] || post.description[language]}
        </p>
        
        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-gray-500">
            <User className="h-3 w-3 mr-1" />
            <span>{post.author.name}</span>
          </div>
          
          <Link 
            href={postUrl}
            className="text-[#fa9b6b] hover:text-[#e8864d] transition-colors flex items-center text-sm font-medium"
          >
            {t('blog.readMore')}
            <ArrowRight className="h-3 w-3 ml-1" />
          </Link>
        </div>
        
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-wrap gap-1">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="px-2 py-1 text-gray-400 text-xs">
                  +s{post.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};