import React from 'react';

// Template imports
import SlideShowTemplate from './SlideShowTemplate';
import ArticleTemplate from './ArticleTemplate';
import CaseStudyTemplate from './CaseStudyTemplate';
import InfographicTemplate from './InfographicTemplate';
import VideoTemplate from './VideoTemplate';
import TutorialTemplate from './TutorialTemplate';

// Post type definitions
export interface PostData {
  slug: string;
  title: string;
  summary?: string;
  description?: string; // Added missing description property
  image?: string;
  date?: string;
  author?: {
    name: string;
    role?: string;
    avatar?: string;
  };
  tags?: string[];
  readTime?: number;
  category?: string;
  postType: 'slideshow' | 'article' | 'case-study' | 'infographic' | 'video' | 'tutorial';
  content: any; // Will be typed based on post type
}

export interface SlideContent {
  image: string;
  alt: string;
  text: string;
  title?: string;
  type?: 'intro' | 'content' | 'conclusion';
}

export interface ArticleContent {
  introduction?: string;
  sections: {
    title: string;
    content: string;
    image?: string;
    type?: 'text' | 'image-text' | 'quote' | 'list';
  }[];
  conclusion?: string;
}

export interface CaseStudyContent {
  client: {
    name: string;
    industry: string;
    size?: string;
    logo?: string;
  };
  challenge: string;
  solution: string;
  implementation: {
    steps: string[];
    timeline?: string;
    technologies?: string[];
  };
  results: {
    metrics: {
      label: string;
      value: string;
      improvement?: string;
    }[];
    testimonial?: {
      quote: string;
      author: string;
      position: string;
    };
  };
}

interface PostTemplateFactoryProps {
  postData: PostData;
  language: 'en' | 'hu' | 'de';
}

/**
 * Factory component that renders the appropriate template based on post type
 */
const PostTemplateFactory: React.FC<PostTemplateFactoryProps> = ({ postData, language }) => {
  const { postType, content } = postData;

  // Route to appropriate template based on post type
  switch (postType) {
    case 'slideshow':
      return <SlideShowTemplate postData={postData} slides={content as SlideContent[]} language={language} />;
    
    case 'article':
      return <ArticleTemplate postData={postData} content={content as ArticleContent} language={language} />;
    
    case 'case-study':
      return <CaseStudyTemplate postData={postData} content={content as CaseStudyContent} language={language} />;
    
    case 'infographic':
      return <InfographicTemplate postData={postData} content={content} language={language} />;
    
    case 'video':
      return <VideoTemplate postData={postData} content={content} language={language} />;
    
    case 'tutorial':
      return <TutorialTemplate postData={postData} content={content} language={language} />;
    
    default:
      // Fallback to article template for unknown types
      console.warn(`Unknown post type: ${postType}. Falling back to article template.`);
      return <ArticleTemplate postData={postData} content={content as ArticleContent} language={language} />;
  }
};

export default PostTemplateFactory;
