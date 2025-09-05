import { NextApiRequest, NextApiResponse } from 'next';
import { newsArticles as newsData, NewsArticle } from '@/data/newsData';

// Check if custom news registry exists
let customNews: Partial<NewsArticle>[] = [];
try {
  const customNewsModule = require('@/data/customNewsRegistry');
  customNews = customNewsModule.customNews || [];
} catch (error) {
  console.log('customNewsRegistry not found, using empty array');
  customNews = [];
}

// Transform news items to standardized format
const transformNewsItem = (news: NewsArticle | Partial<NewsArticle>) => {
  if (!news.id || !news.title || !news.date) {
    return null;
  }

  return {
    id: news.id,
    title: news.title,
    description: news.description,
    summary: news.description, // Use description as summary for consistency
    content: news.content,
    slug: news.slug,
    image: news.image || news.thumbnailImage,
    thumbnailImage: news.thumbnailImage || news.image,
    date: news.date,
    publishedAt: news.date,
    updatedAt: news.updatedAt,
    author: news.author,
    readTime: news.readTime || 3,
    tags: news.tags || [],
    category: news.category || 'news',
    featured: news.featured || false,
    customUrl: news.customUrl || `/resources/news/${news.slug}`,
    // News specific fields
    newsCategory: news.newsCategory,
    source: news.source,
    location: news.location,
    urgent: news.featured // Map featured to urgent for news
  };
};

// Helper function to merge regular news with custom ones
const mergeNews = () => {
  const newsItems = newsData || [];
  
  // Filter out regular news that have been overridden by custom ones
  const filteredRegular = newsItems.filter(
    regularNews => !customNews.some(customNewsItem => customNewsItem.id === regularNews.id)
  );
  
  // Transform and combine
  const transformedRegular = filteredRegular.map(transformNewsItem).filter(news => news !== null);
  const transformedCustom = customNews.map(transformNewsItem).filter(news => news !== null);
  
  return [
    ...transformedRegular,
    ...transformedCustom
  ];
};

const getTextContent = (field: string | { en: string; hu: string; de: string; } | undefined): string => {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return `${field.en || ''} ${field.hu || ''} ${field.de || ''}`;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { featured, urgent, category, newsCategory, tag, author, limit, search, debug } = req.query;

    let allNews = mergeNews();

    // Filter by featured if requested
    if (featured === 'true') {
      allNews = allNews.filter(news => news?.featured === true);
    }

    // Filter by urgent if requested
    if (urgent === 'true') {
      allNews = allNews.filter(news => news?.urgent === true);
    }

    // Filter by news category if specified
    if (newsCategory && typeof newsCategory === 'string') {
      allNews = allNews.filter(news => 
        news?.newsCategory?.toLowerCase() === newsCategory.toLowerCase()
      );
    }

    // Filter by tag if specified
    if (tag && typeof tag === 'string') {
      allNews = allNews.filter(news => 
        news?.tags?.some((newsTag: string) => newsTag.toLowerCase() === tag.toLowerCase())
      );
    }

    // Filter by author if specified
    if (author && typeof author === 'string') {
      allNews = allNews.filter(news => 
        news?.author?.id === author || news?.author?.name?.toLowerCase().includes(author.toLowerCase())
      );
    }

    // Search functionality
    if (search && typeof search === 'string') {
      const searchTerm = search.toLowerCase();
      allNews = allNews.filter(news => {
        if (!news) return false;
        
        const searchableContent = [
          getTextContent(news.title),
          getTextContent(news.description),
          getTextContent(news.summary),
          getTextContent(news.content),
          news.newsCategory || '',
          news.source || '',
          news.location || '',
          news.author?.name || '',
          ...(news.tags || [])
        ].join(' ').toLowerCase();
        
        return searchableContent.includes(searchTerm);
      });
    }

    // Sort by date (newest first), prioritizing urgent news
    allNews.sort((a, b) => {
      // Prioritize urgent news
      if (a?.urgent && !b?.urgent) return -1;
      if (b?.urgent && !a?.urgent) return 1;
      
      // Then by date
      if (!a?.date || !b?.date) return 0;
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    // Apply limit if specified
    if (limit && typeof limit === 'string') {
      const limitNum = parseInt(limit, 10);
      if (!isNaN(limitNum)) {
        allNews = allNews.slice(0, limitNum);
      }
    }

    // Debug information
    if (debug === 'true') {
      const debugInfo = {
        regular: newsData?.length || 0,
        custom: customNews.length,
        total: allNews.length,
        filters: {
          featured: featured === 'true',
          urgent: urgent === 'true',
          newsCategory: newsCategory || null,
          tag: tag || null,
          author: author || null,
          search: search || null,
          limit: limit || null
        },
        availableCategories: [...new Set(allNews.map(news => news?.newsCategory).filter(Boolean))].sort(),
        availableTags: [...new Set(allNews.flatMap(news => news?.tags || []))].sort(),
        availableAuthors: [...new Set(allNews.map(news => news?.author?.name).filter(Boolean))].sort(),
        availableLocations: [...new Set(allNews.map(news => news?.location).filter(Boolean))].sort()
      };

      return res.status(200).json({
        news: allNews,
        debug: debugInfo
      });
    }

    // Return news array
    res.status(200).json(allNews);
  } catch (error) {
    console.error('Error in combined-news API:', error);
    res.status(500).json({ 
      error: 'Failed to fetch news',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
