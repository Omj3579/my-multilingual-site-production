import { NextApiRequest, NextApiResponse } from 'next';

// Import case studies (existing)
import { caseStudies } from '@/data/caseStudiesData';
import { customCaseStudies } from '@/data/customCaseStudiesRegistry';

// Import other data sources with proper error handling
let blogPosts: any[] = [];
let customBlogs: any[] = [];
let newsItems: any[] = [];
let customNews: any[] = [];
let updateItems: any[] = [];
let customUpdates: any[] = [];

// Try to import blog data
try {
  const blogData = require('@/data/blogPostsData');
  blogPosts = blogData.blogPosts || [];
} catch (error) {
  console.log('blogPostsData not found, using empty array');
  blogPosts = [];
}

try {
  const customBlogData = require('@/data/customBlogPostsRegistry');
  customBlogs = customBlogData.customBlogPosts || [];
} catch (error) {
  console.log('customBlogPostsRegistry not found, using empty array');
  customBlogs = [];
}

// Try to import news data  
try {
  const newsData = require('@/data/newsData');
  newsItems = newsData.newsItems || []; // Corrected: should be newsItems, not blogPosts
} catch (error) {
  console.log('newsData not found, using empty array');
  newsItems = [];
}

try {
  const customNewsData = require('@/data/customNewsRegistry');
  customNews = customNewsData.customNews || []; // Corrected: should be customNews, not customBlogPosts
} catch (error) {
  console.log('customNewsRegistry not found, using empty array');
  customNews = [];
}

// Try to import updates data
try {
  const updatesData = require('@/data/updatesData');
  updateItems = updatesData.updateItems || []; // Corrected: should be updateItems, not blogPosts
} catch (error) {
  console.log('updatesData not found, using empty array');
  updateItems = [];
}

try {
  const customUpdatesData = require('@/data/customUpdatesRegistry');
  customUpdates = customUpdatesData.customUpdates || []; // Corrected: should be customUpdates, not customBlogPosts
} catch (error) {
  console.log('customUpdatesRegistry not found, using empty array');
  customUpdates = [];
}

// Transform case studies to match the Resource interface
const transformCaseStudyToResource = (study: any) => ({
  id: study.id,
  title: study.title,
  description: study.description,
  type: 'case-study' as const,
  coverImage: study.image || study.thumbnailImage || '/images/placeholder.jpg',
  date: study.date,
  readingTime: {
    en: `${study.readTime || 5} min read`,
    hu: `${study.readTime || 5} perc olvasás`,
    de: `${study.readTime || 5} Min. Lesezeit`
  },
  tags: study.tags || [],
  author: {
    name: study.author?.name || 'Flair Plastic Team',
    avatar: study.author?.avatar || '/images/team/default.jpg',
    title: study.author?.role || {
      en: 'Team Member',
      hu: 'Csapattag',
      de: 'Teammitglied'
    }
  },
  slug: study.slug,
  customUrl: study.customUrl || `/resources/case-studies/${study.slug}`,
  industry: study.industry,
  client: study.client,
  featured: study.featured || false
});

// Transform blog posts to match the Resource interface
const transformBlogPostToResource = (blog: any) => ({
  id: blog.id,
  title: blog.title,
  description: blog.description || blog.excerpt,
  type: 'blog' as const,
  coverImage: blog.image || blog.featuredImage || blog.thumbnailImage || '/images/placeholder.jpg',
  date: blog.date,
  readingTime: {
    en: `${blog.readTime || 5} min read`,
    hu: `${blog.readTime || 5} perc olvasás`,
    de: `${blog.readTime || 5} Min. Lesezeit`
  },
  tags: blog.tags || [],
  author: {
    name: blog.author?.name || 'Flair Plastic Team',
    avatar: blog.author?.avatar || '/images/team/default.jpg',
    title: blog.author?.role || {
      en: 'Author',
      hu: 'Szerző',
      de: 'Autor'
    }
  },
  slug: blog.slug,
  customUrl: blog.customUrl || `/resources/blog/${blog.slug}`,
  category: blog.category,
  featured: blog.featured || false
});

// Transform news items to match the Resource interface
const transformNewsToResource = (news: any) => ({
  id: news.id,
  title: news.title,
  description: news.description || news.summary,
  type: 'news' as const,
  coverImage: news.image || news.featuredImage || news.thumbnailImage || '/images/placeholder.jpg',
  date: news.date,
  readingTime: {
    en: `${news.readTime || 3} min read`,
    hu: `${news.readTime || 3} perc olvasás`,
    de: `${news.readTime || 3} Min. Lesezeit`
  },
  tags: news.tags || [],
  author: {
    name: news.author?.name || 'Flair Plastic Team',
    avatar: news.author?.avatar || '/images/team/default.jpg',
    title: news.author?.role || {
      en: 'News Editor',
      hu: 'Hírek Szerkesztő',
      de: 'Nachrichtenredakteur'
    }
  },
  slug: news.slug,
  customUrl: news.customUrl || `/resources/news/${news.slug}`,
  source: news.source,
  category: news.category,
  featured: news.featured || false
});

// Transform updates to match the Resource interface
const transformUpdateToResource = (update: any) => ({
  id: update.id,
  title: update.title,
  description: update.description || update.summary,
  type: 'update' as const,
  coverImage: update.image || update.featuredImage || update.thumbnailImage || '/images/placeholder.jpg',
  date: update.date,
  readingTime: {
    en: `${update.readTime || 2} min read`,
    hu: `${update.readTime || 2} perc olvasás`,
    de: `${update.readTime || 2} Min. Lesezeit`
  },
  tags: update.tags || [],
  author: {
    name: update.author?.name || 'Flair Plastic Team',
    avatar: update.author?.avatar || '/images/team/default.jpg',
    title: update.author?.role || {
      en: 'Product Manager',
      hu: 'Termékmenedzser',
      de: 'Produktmanager'
    }
  },
  slug: update.slug,
  customUrl: update.customUrl || `/resources/updates/${update.slug}`,
  version: update.version,
  priority: update.priority,
  category: update.category,
  featured: update.featured || false
});

// Helper function to merge regular data with custom registry
const mergeDataWithCustom = (regularData: any[], customData: any[], transformer: (item: any) => any) => {
  // Filter out regular items that have been overridden by custom ones
  const filteredRegular = regularData.filter(
    regularItem => !customData.some(customItem => customItem.id === regularItem.id)
  );
  
  // Transform and combine
  const transformedRegular = filteredRegular.map(transformer).filter(item => item !== null);
  const transformedCustom = customData.map(transformer).filter(item => item !== null);
  
  return [
    ...transformedRegular,
    ...transformedCustom
  ];
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { type, featured, limit, debug } = req.query;

    let allResources: any[] = [];

    // Case Studies - merge regular with custom
    const caseStudyResources = mergeDataWithCustom(
      caseStudies,
      customCaseStudies,
      transformCaseStudyToResource
    );
    allResources = [...allResources, ...caseStudyResources];

    // Blog Posts - merge regular with custom
    const blogResources = mergeDataWithCustom(
      blogPosts,
      customBlogs,
      transformBlogPostToResource
    );
    allResources = [...allResources, ...blogResources];

    // News Items - merge regular with custom
    const newsResources = mergeDataWithCustom(
      newsItems,
      customNews,
      transformNewsToResource
    );
    allResources = [...allResources, ...newsResources];

    // Updates - merge regular with custom
    const updateResources = mergeDataWithCustom(
      updateItems,
      customUpdates,
      transformUpdateToResource
    );
    allResources = [...allResources, ...updateResources];

    // Filter by type if requested
    if (type && typeof type === 'string' && type !== 'all') {
      allResources = allResources.filter(resource => resource.type === type);
    }

    // Filter by featured if requested
    if (featured === 'true') {
      allResources = allResources.filter(resource => resource.featured === true);
    }

    // Sort by date (newest first)
    allResources.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    // Apply limit if specified
    if (limit && typeof limit === 'string') {
      const limitNum = parseInt(limit, 10);
      if (!isNaN(limitNum)) {
        allResources = allResources.slice(0, limitNum);
      }
    }

    // Debug information
    if (debug === 'true') {
      const debugInfo = {
        caseStudies: {
          regular: caseStudies.length,
          custom: customCaseStudies.length,
          total: caseStudyResources.length
        },
        blogs: {
          regular: blogPosts.length,
          custom: customBlogs.length,
          total: blogResources.length
        },
        news: {
          regular: newsItems.length,
          custom: customNews.length,
          total: newsResources.length
        },
        updates: {
          regular: updateItems.length,
          custom: customUpdates.length,
          total: updateResources.length
        },
        totalResources: allResources.length
      };

      return res.status(200).json({
        resources: allResources,
        debug: debugInfo
      });
    }

    // Return just the resources array for the frontend
    res.status(200).json(allResources);
  } catch (error) {
    console.error('Error in combined-resources API:', error);
    res.status(500).json({ 
      error: 'Failed to fetch resources',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}