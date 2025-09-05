import { PostData } from '../templates/PostTemplateFactory';

export interface PostCategory {
  id: string;
  name: {
    en: string;
    hu: string;
    de: string;
  };
  description: {
    en: string;
    hu: string;
    de: string;
  };
  icon: string;
  color: string;
  postTypes: ('slideshow' | 'article' | 'case-study' | 'infographic' | 'video' | 'tutorial')[];
}

export interface PostFilter {
  category?: string;
  postType?: string;
  tags?: string[];
  dateRange?: {
    from: string;
    to: string;
  };
  author?: string;
  featured?: boolean;
}

export interface PostSort {
  field: 'date' | 'title' | 'readTime' | 'category';
  direction: 'asc' | 'desc';
}

/**
 * Predefined post categories for better organization
 */
export const POST_CATEGORIES: PostCategory[] = [
  {
    id: 'industry-insights',
    name: {
      en: 'Industry Insights',
      hu: 'Iparági betekintések',
      de: 'Brancheneinblicke'
    },
    description: {
      en: 'Latest trends and analysis in plastic manufacturing',
      hu: 'A műanyaggyártás legújabb trendjei és elemzései',
      de: 'Neueste Trends und Analysen in der Kunststoffherstellung'
    },
    icon: 'TrendingUp',
    color: 'blue',
    postTypes: ['slideshow', 'article', 'infographic']
  },
  {
    id: 'case-studies',
    name: {
      en: 'Case Studies',
      hu: 'Esettanulmányok',
      de: 'Fallstudien'
    },
    description: {
      en: 'Real-world success stories and client partnerships',
      hu: 'Valós sikertörténetek és ügyfélkapcsolatok',
      de: 'Reale Erfolgsgeschichten und Kundenpartnerschaften'
    },
    icon: 'Award',
    color: 'green',
    postTypes: ['case-study', 'video']
  },
  {
    id: 'technical-guides',
    name: {
      en: 'Technical Guides',
      hu: 'Műszaki útmutatók',
      de: 'Technische Leitfäden'
    },
    description: {
      en: 'In-depth technical documentation and tutorials',
      hu: 'Mélyreható műszaki dokumentáció és útmutatók',
      de: 'Ausführliche technische Dokumentation und Tutorials'
    },
    icon: 'BookOpen',
    color: 'purple',
    postTypes: ['tutorial', 'article', 'video']
  },
  {
    id: 'sustainability',
    name: {
      en: 'Sustainability',
      hu: 'Fenntarthatóság',
      de: 'Nachhaltigkeit'
    },
    description: {
      en: 'Environmental initiatives and sustainable practices',
      hu: 'Környezetvédelmi kezdeményezések és fenntartható gyakorlatok',
      de: 'Umweltinitiativen und nachhaltige Praktiken'
    },
    icon: 'Leaf',
    color: 'emerald',
    postTypes: ['article', 'infographic', 'case-study']
  },
  {
    id: 'innovation',
    name: {
      en: 'Innovation',
      hu: 'Innováció',
      de: 'Innovation'
    },
    description: {
      en: 'Cutting-edge technologies and research developments',
      hu: 'Élvonalbeli technológiák és kutatási fejlesztések',
      de: 'Spitzentechnologien und Forschungsentwicklungen'
    },
    icon: 'Lightbulb',
    color: 'amber',
    postTypes: ['article', 'video', 'slideshow']
  }
];

/**
 * Post management class for organizing and filtering posts
 */
export class PostManager {
  private posts: PostData[] = [];

  constructor(posts: PostData[] = []) {
    this.posts = posts;
  }

  /**
   * Add a new post
   */
  addPost(post: PostData): void {
    this.posts.push(post);
  }

  /**
   * Get all posts
   */
  getAllPosts(): PostData[] {
    return [...this.posts];
  }

  /**
   * Filter posts based on criteria
   */
  filterPosts(filter: PostFilter): PostData[] {
    return this.posts.filter(post => {
      // Category filter
      if (filter.category && post.category !== filter.category) {
        return false;
      }

      // Post type filter
      if (filter.postType && post.postType !== filter.postType) {
        return false;
      }

      // Tags filter
      if (filter.tags && filter.tags.length > 0) {
        if (!post.tags || !filter.tags.some(tag => post.tags!.includes(tag))) {
          return false;
        }
      }

      // Date range filter
      if (filter.dateRange) {
        const postDate = new Date(post.date || '');
        const fromDate = new Date(filter.dateRange.from);
        const toDate = new Date(filter.dateRange.to);
        
        if (postDate < fromDate || postDate > toDate) {
          return false;
        }
      }

      // Author filter
      if (filter.author && post.author?.name !== filter.author) {
        return false;
      }

      return true;
    });
  }

  /**
   * Sort posts
   */
  sortPosts(posts: PostData[], sort: PostSort): PostData[] {
    return [...posts].sort((a, b) => {
      let comparison = 0;

      switch (sort.field) {
        case 'date':
          comparison = new Date(a.date || '').getTime() - new Date(b.date || '').getTime();
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'readTime':
          comparison = (a.readTime || 0) - (b.readTime || 0);
          break;
        case 'category':
          comparison = (a.category || '').localeCompare(b.category || '');
          break;
      }

      return sort.direction === 'desc' ? -comparison : comparison;
    });
  }

  /**
   * Get posts by category
   */
  getPostsByCategory(categoryId: string): PostData[] {
    return this.posts.filter(post => post.category === categoryId);
  }

  /**
   * Get posts by type
   */
  getPostsByType(postType: string): PostData[] {
    return this.posts.filter(post => post.postType === postType);
  }

  /**
   * Get featured posts
   */
  getFeaturedPosts(): PostData[] {
    return this.posts.filter(post => {
      // Consider posts featured if they have high engagement or are recent
      const isRecent = post.date && new Date(post.date) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
      const hasGoodReadTime = post.readTime && post.readTime >= 5 && post.readTime <= 15;
      return isRecent || hasGoodReadTime;
    });
  }

  /**
   * Get related posts based on tags and category
   */
  getRelatedPosts(post: PostData, limit: number = 3): PostData[] {
    if (!post.tags || post.tags.length === 0) {
      // Fallback to same category
      return this.getPostsByCategory(post.category || '')
        .filter(p => p.slug !== post.slug)
        .slice(0, limit);
    }

    const related = this.posts.filter(p => {
      if (p.slug === post.slug) return false;
      
      // Score based on shared tags and category
      let score = 0;
      
      if (p.category === post.category) score += 2;
      
      if (p.tags) {
        const sharedTags = p.tags.filter(tag => post.tags!.includes(tag));
        score += sharedTags.length;
      }
      
      return score > 0;
    });

    // Sort by relevance and limit
    return related
      .sort((a, b) => {
        let scoreA = 0, scoreB = 0;
        
        if (a.category === post.category) scoreA += 2;
        if (b.category === post.category) scoreB += 2;
        
        if (a.tags && post.tags) {
          scoreA += a.tags.filter(tag => post.tags!.includes(tag)).length;
        }
        if (b.tags && post.tags) {
          scoreB += b.tags.filter(tag => post.tags!.includes(tag)).length;
        }
        
        return scoreB - scoreA;
      })
      .slice(0, limit);
  }

  /**
   * Search posts by title and content
   */
  searchPosts(query: string): PostData[] {
    const lowerQuery = query.toLowerCase();
    
    return this.posts.filter(post => {
      return (
        post.title.toLowerCase().includes(lowerQuery) ||
        (post.summary && post.summary.toLowerCase().includes(lowerQuery)) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(lowerQuery)))
      );
    });
  }

  /**
   * Get post statistics
   */
  getStatistics() {
    const total = this.posts.length;
    const byType = this.posts.reduce((acc, post) => {
      acc[post.postType] = (acc[post.postType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const byCategory = this.posts.reduce((acc, post) => {
      if (post.category) {
        acc[post.category] = (acc[post.category] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    const averageReadTime = this.posts.reduce((acc, post) => acc + (post.readTime || 0), 0) / total;

    return {
      total,
      byType,
      byCategory,
      averageReadTime: Math.round(averageReadTime)
    };
  }

  /**
   * Get popular tags
   */
  getPopularTags(limit: number = 10): { tag: string; count: number }[] {
    const tagCounts = this.posts.reduce((acc, post) => {
      if (post.tags) {
        post.tags.forEach(tag => {
          acc[tag] = (acc[tag] || 0) + 1;
        });
      }
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(tagCounts)
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, limit);
  }
}

/**
 * Utility functions for post management
 */
export const PostUtils = {
  /**
   * Generate a slug from title
   */
  generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  },

  /**
   * Estimate reading time from content
   */
  estimateReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  },

  /**
   * Format date for display
   */
  formatDate(date: string, language: 'en' | 'hu' | 'de' = 'en'): string {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    
    const locale = {
      en: 'en-US',
      hu: 'hu-HU',
      de: 'de-DE'
    }[language];

    return new Date(date).toLocaleDateString(locale, options);
  },

  /**
   * Get category color class
   */
  getCategoryColor(categoryId: string): string {
    const category = POST_CATEGORIES.find(c => c.id === categoryId);
    return category?.color || 'gray';
  },

  /**
   * Get post type icon
   */
  getPostTypeIcon(postType: string): string {
    const icons = {
      slideshow: 'PresentationChartLine',
      article: 'DocumentText',
      'case-study': 'Award',
      infographic: 'ChartBar',
      video: 'PlayCircle',
      tutorial: 'AcademicCap'
    };
    return icons[postType as keyof typeof icons] || 'Document';
  }
};
