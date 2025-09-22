import { Language } from '../config';

// Semantic keyword data structure
export interface KeywordCluster {
  primary: string;
  related: string[];
  semanticVariations: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  searchVolume: 'low' | 'medium' | 'high';
  intent: 'informational' | 'commercial' | 'transactional' | 'navigational';
  language: Language;
}

export interface ContentScore {
  overall: number;
  factors: {
    keywordDensity: number;
    readability: number;
    semanticRelevance: number;
    internalLinks: number;
    headingStructure: number;
    metaOptimization: number;
    imageOptimization: number;
  };
  recommendations: string[];
}

export interface InternalLinkSuggestion {
  sourceUrl: string;
  targetUrl: string;
  anchorText: string;
  relevanceScore: number;
  context: string;
  reasoning: string;
}

export class SemanticSEOEngine {
  // Manufacturing-specific keyword clusters
  private static readonly MANUFACTURING_CLUSTERS: Record<string, KeywordCluster[]> = {
    'injection-molding': [
      {
        primary: 'plastic injection molding',
        related: ['injection moulding', 'plastic molding', 'thermoplastic injection', 'custom molding'],
        semanticVariations: ['polymer processing', 'plastic forming', 'mold manufacturing'],
        difficulty: 'medium',
        searchVolume: 'high',
        intent: 'commercial',
        language: 'en'
      },
      {
        primary: 'műanyag fröccsöntés',
        related: ['fröccsöntés', 'műanyag formázás', 'termoplasztikus fröccsöntés'],
        semanticVariations: ['polimer feldolgozás', 'műanyag alakítás'],
        difficulty: 'medium',
        searchVolume: 'medium',
        intent: 'commercial',
        language: 'hu'
      }
    ],
    'contract-manufacturing': [
      {
        primary: 'contract manufacturing',
        related: ['OEM manufacturing', 'private label manufacturing', 'outsourced production'],
        semanticVariations: ['manufacturing services', 'production partnership', 'custom manufacturing'],
        difficulty: 'hard',
        searchVolume: 'medium',
        intent: 'commercial',
        language: 'en'
      }
    ],
    'sustainability': [
      {
        primary: 'sustainable manufacturing',
        related: ['eco-friendly production', 'green manufacturing', 'circular economy'],
        semanticVariations: ['environmental responsibility', 'sustainable practices', 'carbon neutral'],
        difficulty: 'medium',
        searchVolume: 'high',
        intent: 'informational',
        language: 'en'
      }
    ]
  };

  // Industry-specific keyword mapping
  private static readonly INDUSTRY_KEYWORDS: Record<string, KeywordCluster[]> = {
    'automotive': [
      {
        primary: 'automotive plastic components',
        related: ['car parts manufacturing', 'automotive injection molding', 'vehicle components'],
        semanticVariations: ['auto industry plastics', 'automotive manufacturing'],
        difficulty: 'hard',
        searchVolume: 'high',
        intent: 'commercial',
        language: 'en'
      }
    ],
    'medical': [
      {
        primary: 'medical device manufacturing',
        related: ['healthcare plastics', 'medical injection molding', 'FDA compliant manufacturing'],
        semanticVariations: ['biomedical components', 'medical grade plastics'],
        difficulty: 'hard',
        searchVolume: 'medium',
        intent: 'commercial',
        language: 'en'
      }
    ],
    'consumer': [
      {
        primary: 'consumer product manufacturing',
        related: ['household products', 'consumer goods production', 'retail manufacturing'],
        semanticVariations: ['consumer electronics housing', 'appliance components'],
        difficulty: 'medium',
        searchVolume: 'high',
        intent: 'commercial',
        language: 'en'
      }
    ]
  };

  /**
   * Generate semantic keyword clusters for content
   */
  static generateKeywordClusters(
    category: string, 
    industry?: string, 
    language: Language = 'en'
  ): KeywordCluster[] {
    const baseClusters = this.MANUFACTURING_CLUSTERS[category] || [];
    const industryClusters = industry ? this.INDUSTRY_KEYWORDS[industry] || [] : [];
    
    return [...baseClusters, ...industryClusters]
      .filter(cluster => cluster.language === language);
  }

  /**
   * Analyze content and provide SEO score
   */
  static analyzeContent(
    content: string,
    title: string,
    metaDescription: string,
    targetKeywords: string[],
    language: Language = 'en'
  ): ContentScore {
    const wordCount = content.split(/\s+/).length;
    const sentences = content.split(/[.!?]+/).length;
    const avgWordsPerSentence = wordCount / sentences;

    // Keyword density analysis
    const keywordDensity = this.calculateKeywordDensity(content, targetKeywords);
    
    // Readability score (simplified Flesch Reading Ease)
    const readability = this.calculateReadability(avgWordsPerSentence, wordCount);
    
    // Semantic relevance
    const semanticRelevance = this.calculateSemanticRelevance(content, targetKeywords);
    
    // Internal links count
    const internalLinks = (content.match(/href=["'][^"']*["']/g) || []).length;
    
    // Heading structure analysis
    const headingStructure = this.analyzeHeadingStructure(content);
    
    // Meta optimization
    const metaOptimization = this.analyzeMetaOptimization(title, metaDescription, targetKeywords);
    
    // Image optimization
    const imageOptimization = this.analyzeImageOptimization(content);

    const factors = {
      keywordDensity,
      readability,
      semanticRelevance,
      internalLinks: Math.min(internalLinks / 10 * 100, 100), // Normalize to 100
      headingStructure,
      metaOptimization,
      imageOptimization
    };

    const overall = Object.values(factors).reduce((sum, score) => sum + score, 0) / Object.keys(factors).length;

    return {
      overall: Math.round(overall),
      factors: {
        ...factors,
        keywordDensity: Math.round(keywordDensity),
        readability: Math.round(readability),
        semanticRelevance: Math.round(semanticRelevance),
        headingStructure: Math.round(headingStructure),
        metaOptimization: Math.round(metaOptimization),
        imageOptimization: Math.round(imageOptimization)
      },
      recommendations: this.generateRecommendations(factors)
    };
  }

  /**
   * Generate dynamic internal link suggestions
   */
  static generateInternalLinkSuggestions(
    currentContent: string,
    currentUrl: string,
    sitePages: Array<{
      url: string;
      title: string;
      content: string;
      keywords: string[];
      category: string;
    }>
  ): InternalLinkSuggestion[] {
    const suggestions: InternalLinkSuggestion[] = [];
    const currentKeywords = this.extractKeywords(currentContent);

    sitePages.forEach(page => {
      if (page.url === currentUrl) return;

      const relevanceScore = this.calculateContentSimilarity(currentContent, page.content);
      
      if (relevanceScore > 0.3) { // Threshold for relevance
        const commonKeywords = currentKeywords.filter(kw => 
          page.keywords.some(pk => pk.toLowerCase().includes(kw.toLowerCase()))
        );

        if (commonKeywords.length > 0) {
          const anchorText = this.generateAnchorText(page.title, commonKeywords[0]);
          const context = this.findLinkContext(currentContent, commonKeywords[0]);

          suggestions.push({
            sourceUrl: currentUrl,
            targetUrl: page.url,
            anchorText,
            relevanceScore: Math.round(relevanceScore * 100),
            context,
            reasoning: `Related content about ${commonKeywords.join(', ')}`
          });
        }
      }
    });

    return suggestions
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 5); // Top 5 suggestions
  }

  /**
   * Generate content gap analysis
   */
  static analyzeContentGaps(
    existingContent: Array<{
      url: string;
      title: string;
      keywords: string[];
      category: string;
    }>,
    targetIndustries: string[]
  ): Array<{
    topic: string;
    keywords: string[];
    priority: 'high' | 'medium' | 'low';
    reasoning: string;
  }> {
    const gaps: Array<{
      topic: string;
      keywords: string[];
      priority: 'high' | 'medium' | 'low';
      reasoning: string;
    }> = [];

    // Analyze missing industry coverage
    targetIndustries.forEach(industry => {
      const hasIndustryContent = existingContent.some(content => 
        content.category === industry || 
        content.keywords.some(kw => kw.toLowerCase().includes(industry.toLowerCase()))
      );

      if (!hasIndustryContent) {
        const industryKeywords = this.INDUSTRY_KEYWORDS[industry] || [];
        if (industryKeywords.length > 0) {
          gaps.push({
            topic: `${industry} Manufacturing Solutions`,
            keywords: industryKeywords[0].related,
            priority: 'high',
            reasoning: `No content found for ${industry} industry - high commercial value`
          });
        }
      }
    });

    // Analyze missing process coverage
    Object.keys(this.MANUFACTURING_CLUSTERS).forEach(process => {
      const hasProcessContent = existingContent.some(content =>
        content.keywords.some(kw => 
          kw.toLowerCase().includes(process.replace('-', ' '))
        )
      );

      if (!hasProcessContent) {
        gaps.push({
          topic: `${process.replace('-', ' ')} Process Guide`,
          keywords: this.MANUFACTURING_CLUSTERS[process][0].related,
          priority: 'medium',
          reasoning: `Missing detailed process information for ${process}`
        });
      }
    });

    return gaps.sort((a, b) => {
      const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  }

  // Private helper methods
  private static calculateKeywordDensity(content: string, keywords: string[]): number {
    const words = content.toLowerCase().split(/\s+/);
    const totalWords = words.length;
    let keywordCount = 0;

    keywords.forEach(keyword => {
      const keywordWords = keyword.toLowerCase().split(/\s+/);
      if (keywordWords.length === 1) {
        keywordCount += words.filter(word => word === keywordWords[0]).length;
      } else {
        // Handle phrase matching
        for (let i = 0; i <= words.length - keywordWords.length; i++) {
          const phrase = words.slice(i, i + keywordWords.length).join(' ');
          if (phrase === keyword.toLowerCase()) {
            keywordCount++;
          }
        }
      }
    });

    const density = (keywordCount / totalWords) * 100;
    
    // Optimal density is 1-3%
    if (density >= 1 && density <= 3) return 100;
    if (density < 1) return density * 100; // Scale up if too low
    if (density > 3) return Math.max(0, 100 - (density - 3) * 10); // Penalize if too high
    
    return 0;
  }

  private static calculateReadability(avgWordsPerSentence: number, wordCount: number): number {
    // Simplified readability score
    const idealAvgWords = 15;
    const idealWordCount = 300;
    
    const sentenceScore = Math.max(0, 100 - Math.abs(avgWordsPerSentence - idealAvgWords) * 5);
    const lengthScore = wordCount >= idealWordCount ? 100 : (wordCount / idealWordCount) * 100;
    
    return (sentenceScore + lengthScore) / 2;
  }

  private static calculateSemanticRelevance(content: string, keywords: string[]): number {
    // Count semantic variations and related terms
    const contentLower = content.toLowerCase();
    let relevanceScore = 0;
    
    keywords.forEach(keyword => {
      const cluster = this.findKeywordCluster(keyword);
      if (cluster) {
        const allRelated = [...cluster.related, ...cluster.semanticVariations];
        const foundRelated = allRelated.filter(term => 
          contentLower.includes(term.toLowerCase())
        ).length;
        relevanceScore += (foundRelated / allRelated.length) * 100;
      }
    });
    
    return keywords.length > 0 ? relevanceScore / keywords.length : 0;
  }

  private static findKeywordCluster(keyword: string): KeywordCluster | null {
    for (const clusters of Object.values(this.MANUFACTURING_CLUSTERS)) {
      for (const cluster of clusters) {
        if (cluster.primary.toLowerCase() === keyword.toLowerCase() ||
            cluster.related.some(r => r.toLowerCase() === keyword.toLowerCase())) {
          return cluster;
        }
      }
    }
    return null;
  }

  private static analyzeHeadingStructure(content: string): number {
    const h1Count = (content.match(/<h1[^>]*>/gi) || []).length;
    const h2Count = (content.match(/<h2[^>]*>/gi) || []).length;
    const h3Count = (content.match(/<h3[^>]*>/gi) || []).length;
    
    let score = 0;
    
    // Should have exactly one H1
    if (h1Count === 1) score += 40;
    else if (h1Count === 0) score += 0;
    else score -= 20; // Penalty for multiple H1s
    
    // Should have multiple H2s
    if (h2Count >= 2 && h2Count <= 6) score += 40;
    else if (h2Count === 1) score += 20;
    
    // H3s are good for detailed structure
    if (h3Count > 0 && h3Count <= h2Count * 3) score += 20;
    
    return Math.max(0, Math.min(100, score));
  }

  private static analyzeMetaOptimization(
    title: string, 
    metaDescription: string, 
    keywords: string[]
  ): number {
    let score = 0;
    
    // Title optimization
    if (title.length >= 30 && title.length <= 60) score += 25;
    if (keywords.some(kw => title.toLowerCase().includes(kw.toLowerCase()))) score += 25;
    
    // Meta description optimization
    if (metaDescription.length >= 120 && metaDescription.length <= 160) score += 25;
    if (keywords.some(kw => metaDescription.toLowerCase().includes(kw.toLowerCase()))) score += 25;
    
    return score;
  }

  private static analyzeImageOptimization(content: string): number {
    const images = content.match(/<img[^>]*>/gi) || [];
    if (images.length === 0) return 100; // No images to optimize
    
    let optimizedImages = 0;
    
    images.forEach(img => {
      const hasAlt = /alt=["'][^"']*["']/.test(img);
      const hasTitle = /title=["'][^"']*["']/.test(img);
      const isWebP = /\.webp/i.test(img);
      
      let imageScore = 0;
      if (hasAlt) imageScore += 40;
      if (hasTitle) imageScore += 30;
      if (isWebP) imageScore += 30;
      
      if (imageScore >= 70) optimizedImages++;
    });
    
    return (optimizedImages / images.length) * 100;
  }

  private static extractKeywords(content: string): string[] {
    // Simple keyword extraction (in production, use NLP libraries)
    const words = content.toLowerCase()
      .replace(/[^a-zA-Z\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3);
    
    const frequency: Record<string, number> = {};
    words.forEach(word => {
      frequency[word] = (frequency[word] || 0) + 1;
    });
    
    return Object.entries(frequency)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 20)
      .map(([word]) => word);
  }

  private static calculateContentSimilarity(content1: string, content2: string): number {
    const words1 = new Set(this.extractKeywords(content1));
    const words2 = new Set(this.extractKeywords(content2));
    
    const intersection = new Set([...words1].filter(x => words2.has(x)));
    const union = new Set([...words1, ...words2]);
    
    return intersection.size / union.size; // Jaccard similarity
  }

  private static generateAnchorText(pageTitle: string, keyword: string): string {
    // Generate natural anchor text
    const variations = [
      `learn more about ${keyword}`,
      `our ${keyword} services`,
      `${keyword} solutions`,
      pageTitle.substring(0, 50)
    ];
    
    return variations[Math.floor(Math.random() * variations.length)];
  }

  private static findLinkContext(content: string, keyword: string): string {
    const sentences = content.split(/[.!?]+/);
    const relevantSentence = sentences.find(sentence => 
      sentence.toLowerCase().includes(keyword.toLowerCase())
    );
    
    return relevantSentence ? relevantSentence.trim().substring(0, 100) + '...' : '';
  }

  private static generateRecommendations(factors: ContentScore['factors']): string[] {
    const recommendations: string[] = [];
    
    if (factors.keywordDensity < 50) {
      recommendations.push('Increase keyword density to 1-3% for better relevance');
    }
    if (factors.keywordDensity > 80) {
      recommendations.push('Reduce keyword density to avoid over-optimization');
    }
    if (factors.readability < 70) {
      recommendations.push('Improve readability by using shorter sentences and simpler language');
    }
    if (factors.semanticRelevance < 60) {
      recommendations.push('Add more semantically related terms and synonyms');
    }
    if (factors.internalLinks < 30) {
      recommendations.push('Add more internal links to related content');
    }
    if (factors.headingStructure < 70) {
      recommendations.push('Improve heading structure with proper H1, H2, H3 hierarchy');
    }
    if (factors.metaOptimization < 80) {
      recommendations.push('Optimize title and meta description length and keyword inclusion');
    }
    if (factors.imageOptimization < 80) {
      recommendations.push('Add alt tags and optimize images for SEO');
    }
    
    return recommendations;
  }
}