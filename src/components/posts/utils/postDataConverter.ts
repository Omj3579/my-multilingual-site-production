import { PostData, SlideContent, ArticleContent, CaseStudyContent } from '../templates/PostTemplateFactory';



// Resource data from resources.json
interface ResourceData {
  slug: string;
  title: string;
  summary: string;
  image: string;
}

// Extended legacy data that can include BlogPost-like structures
interface ExtendedLegacyData {
  slug?: string;
  title?: string | { en: string; hu: string; de: string };
  summary?: string;
  image?: string;
  data?: Array<{
    image: string;
    alt: string;
    text: string;
  }>;
  client?: {
    name: string;
    industry: string;
  };
  challenge?: string;
  solution?: string;
  results?: {
    metrics: Array<{ label: string; value: string; improvement?: string }>;
  };
  videoUrl?: string;
  embedUrl?: string;
  steps?: unknown[];
  infographicUrl?: string;
  content?: unknown;
  sections?: unknown;
}

/**
 * Helper function to extract string from multilingual title
 */
function extractTitleString(title: string | { en: string; hu: string; de: string }): string {
  if (typeof title === 'string') {
    return title;
  }
  // Default to English if multilingual object
  return title.en || title.hu || title.de || 'Case Study';
}

/**
 * Helper function to safely convert ExtendedLegacyData to ResourceData-like structure
 */
function ensureResourceData(data: ResourceData | ExtendedLegacyData): ResourceData {
  if ('slug' in data && typeof data.slug === 'string' && 'title' in data && typeof data.title === 'string') {
    return data as ResourceData;
  }
  
  // Convert ExtendedLegacyData to ResourceData
  const extendedData = data as ExtendedLegacyData;
  return {
    slug: extendedData.slug || '',
    title: extractTitleString(extendedData.title || ''),
    summary: extendedData.summary || '',
    image: extendedData.image || ''
  };
}

/**
 * Converts legacy slide-based posts to new template format
 */
export function convertLegacySlidePost(legacyData: ExtendedLegacyData, resourceData?: ResourceData): PostData {
  const slides: SlideContent[] = legacyData.data?.map((slide, index) => ({
    image: slide.image,
    alt: slide.alt,
    text: slide.text,
    title: index === 0 ? undefined : slide.alt, // First slide usually doesn't need title
    type: index === 0 ? 'intro' : index === legacyData.data!.length - 1 ? 'conclusion' : 'content'
  })) || [];

  const titleString = extractTitleString(legacyData.title || resourceData?.title || '');

  return {
    slug: legacyData.slug || resourceData?.slug || '',
    title: titleString,
    summary: legacyData.summary || resourceData?.summary,
    image: legacyData.image || resourceData?.image,
    date: new Date().toISOString().split('T')[0], // Default to today
    author: {
      name: 'Flair-Plastic Team',
      role: 'Manufacturing Specialists'
    },
    tags: inferTagsFromContent(titleString),
    readTime: estimateReadTime(slides),
    category: 'industry-insights',
    postType: 'slideshow',
    content: slides
  };
}

/**
 * Converts resource data to article format
 */
export function convertResourceToArticle(resourceData: ResourceData, additionalContent?: string[]): PostData {
  const sections = additionalContent?.map((content, index) => ({
    title: `Section ${index + 1}`,
    content: content,
    type: 'text' as const
  })) || [];

  const articleContent: ArticleContent = {
    introduction: resourceData.summary,
    sections: sections,
    conclusion: 'Learn more about our innovative manufacturing solutions and how we can help your business succeed.'
  };

  return {
    slug: resourceData.slug,
    title: resourceData.title,
    summary: resourceData.summary,
    image: resourceData.image,
    date: new Date().toISOString().split('T')[0],
    author: {
      name: 'Flair-Plastic Team',
      role: 'Manufacturing Specialists'
    },
    tags: inferTagsFromContent(resourceData.title),
    readTime: Math.max(3, Math.ceil(resourceData.summary.length / 200)),
    category: 'resources',
    postType: 'article',
    content: articleContent
  };
}

/**
 * Creates a case study from basic data
 */
export function createCaseStudy(
  title: string,
  clientName: string,
  industry: string,
  challenge: string,
  solution: string,
  results: { label: string; value: string; improvement?: string }[],
  image?: string
): PostData {
  const caseStudyContent: CaseStudyContent = {
    client: {
      name: clientName,
      industry: industry,
      size: 'Enterprise' // Default
    },
    challenge: challenge,
    solution: solution,
    implementation: {
      steps: [
        'Initial consultation and requirements analysis',
        'Custom solution design and prototyping',
        'Production setup and quality assurance',
        'Delivery and ongoing support'
      ],
      timeline: '3-6 months',
      technologies: ['Injection Molding', 'Quality Control', 'Custom Tooling']
    },
    results: {
      metrics: results,
      testimonial: {
        quote: `Working with Flair-Plastic has transformed our manufacturing process. Their expertise and dedication to quality are unmatched.`,
        author: `${clientName} Representative`,
        position: 'Operations Manager'
      }
    }
  };

  return {
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    title: title,
    summary: `Discover how Flair-Plastic helped ${clientName} overcome manufacturing challenges in the ${industry} industry.`,
    image: image,
    date: new Date().toISOString().split('T')[0],
    author: {
      name: 'Flair-Plastic Team',
      role: 'Case Study Analysts'
    },
    tags: [industry.toLowerCase(), 'case-study', 'manufacturing'],
    readTime: 8,
    category: 'case-studies',
    postType: 'case-study',
    content: caseStudyContent
  };
}

/**
 * Infers tags from post title and content
 */
function inferTagsFromContent(title: string): string[] {
  const keywords = title.toLowerCase();
  const tags: string[] = [];

  // Manufacturing related tags
  if (keywords.includes('injection') || keywords.includes('molding')) tags.push('injection-molding');
  if (keywords.includes('sustainability') || keywords.includes('eco')) tags.push('sustainability');
  if (keywords.includes('energy') || keywords.includes('efficiency')) tags.push('energy-efficiency');
  if (keywords.includes('contract') || keywords.includes('manufacturing')) tags.push('contract-manufacturing');
  if (keywords.includes('plastic') || keywords.includes('polymer')) tags.push('plastics');
  if (keywords.includes('quality') || keywords.includes('control')) tags.push('quality-control');
  if (keywords.includes('innovation') || keywords.includes('technology')) tags.push('innovation');
  if (keywords.includes('industry') || keywords.includes('market')) tags.push('industry-trends');

  // Add default tag if none found
  if (tags.length === 0) tags.push('manufacturing');

  return tags;
}

/**
 * Estimates reading time based on content
 */
function estimateReadTime(slides: SlideContent[]): number {
  const totalWords = slides.reduce((total, slide) => {
    return total + slide.text.split(' ').length;
  }, 0);

  // Average reading speed: 200 words per minute
  return Math.max(1, Math.ceil(totalWords / 200));
}

/**
 * Post type detector based on content structure
 */
export function detectPostType(data: ExtendedLegacyData): 'slideshow' | 'article' | 'case-study' | 'infographic' | 'video' | 'tutorial' {
  // Check if it's slide-based data
  if (data.data && Array.isArray(data.data) && data.data[0]?.image && data.data[0]?.text) {
    return 'slideshow';
  }

  // Check if it's case study (has client, challenge, solution structure)
  if (data.client || data.challenge || data.solution) {
    return 'case-study';
  }

  // Check if it's video content
  if (data.videoUrl || data.embedUrl) {
    return 'video';
  }

  // Check if it's tutorial (has steps)
  if (data.steps && Array.isArray(data.steps)) {
    return 'tutorial';
  }

  // Check if it's infographic (single large image with annotations)
  if (data.infographicUrl || (data.image && !data.content && !data.sections)) {
    return 'infographic';
  }

  // Default to article
  return 'article';
}

/**
 * Main converter function that handles any legacy post format
 */
export function convertLegacyPost(legacyData: ExtendedLegacyData, resourceData?: ResourceData): PostData {
  const postType = detectPostType(legacyData);

  switch (postType) {
    case 'slideshow':
      return convertLegacySlidePost(legacyData, resourceData);
      case 'article':
      return convertResourceToArticle(ensureResourceData(resourceData || legacyData));
      
    case 'case-study':
      // Handle case study conversion - extract title from potentially multilingual object
      const title = extractTitleString(legacyData.title || resourceData?.title || 'Case Study');
      return createCaseStudy(
        title,
        legacyData.client?.name || 'Client Name',
        legacyData.client?.industry || 'Manufacturing',
        legacyData.challenge || 'Challenge description',
        legacyData.solution || 'Solution description',
        legacyData.results?.metrics || [
          { label: 'Efficiency Improvement', value: '25%', improvement: '+25%' },
          { label: 'Cost Reduction', value: '15%', improvement: '+15%' }
        ],
        legacyData.image || resourceData?.image
      );
    
    default:
      // Fallback to article
      return convertResourceToArticle(ensureResourceData(resourceData || legacyData));
  }
}

/**
 * Batch converter for multiple posts
 */
export function convertLegacyPosts(legacyPosts: ExtendedLegacyData[], resourcesData: ResourceData[]): PostData[] {
  return legacyPosts.map((legacyPost) => {
    const resourceData = resourcesData.find(r => r.slug === legacyPost.slug);
    return convertLegacyPost(legacyPost, resourceData);
  });
}
