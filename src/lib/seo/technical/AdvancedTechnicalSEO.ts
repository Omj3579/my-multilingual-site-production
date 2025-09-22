import { Language } from '../config';

// Core Web Vitals interfaces
export interface CoreWebVitalsData {
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  fcp: number; // First Contentful Paint
  ttfb: number; // Time to First Byte
  timestamp: number;
  url: string;
  deviceType: 'mobile' | 'desktop';
}

export interface SEOAuditResult {
  url: string;
  timestamp: number;
  score: number;
  issues: Array<{
    type: 'error' | 'warning' | 'info';
    category: 'technical' | 'content' | 'performance' | 'accessibility';
    message: string;
    impact: 'high' | 'medium' | 'low';
    suggestion: string;
  }>;
  metrics: {
    loadTime: number;
    seoScore: number;
    accessibilityScore: number;
    performanceScore: number;
  };
}

export interface ABTestVariant {
  id: string;
  name: string;
  element: 'title' | 'meta-description' | 'heading' | 'schema';
  original: string;
  variant: string;
  metrics: {
    impressions: number;
    clicks: number;
    ctr: number;
    conversions: number;
    rank: number;
  };
  isActive: boolean;
  startDate: string;
  endDate?: string;
}

export class AdvancedTechnicalSEO {
  private static instance: AdvancedTechnicalSEO;
  private webVitalsData: CoreWebVitalsData[] = [];
  private auditHistory: SEOAuditResult[] = [];
  private activeTests: ABTestVariant[] = [];

  static getInstance(): AdvancedTechnicalSEO {
    if (!this.instance) {
      this.instance = new AdvancedTechnicalSEO();
    }
    return this.instance;
  }

  /**
   * Initialize Core Web Vitals tracking
   */
  initCoreWebVitalsTracking(): void {
    if (typeof window === 'undefined') return;

    // Track LCP (Largest Contentful Paint)
    this.trackLCP();
    
    // Track FID (First Input Delay)
    this.trackFID();
    
    // Track CLS (Cumulative Layout Shift)
    this.trackCLS();
    
    // Track additional metrics
    this.trackAdditionalMetrics();
  }

  /**
   * Perform comprehensive SEO audit
   */
  async performSEOAudit(url: string): Promise<SEOAuditResult> {
    const startTime = performance.now();
    const issues: SEOAuditResult['issues'] = [];
    
    try {
      // Technical SEO checks
      await this.auditTechnicalSEO(url, issues);
      
      // Content SEO checks
      await this.auditContentSEO(url, issues);
      
      // Performance checks
      await this.auditPerformance(url, issues);
      
      // Accessibility checks
      await this.auditAccessibility(url, issues);
      
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      
      const result: SEOAuditResult = {
        url,
        timestamp: Date.now(),
        score: this.calculateOverallScore(issues),
        issues,
        metrics: {
          loadTime,
          seoScore: this.calculateSEOScore(issues),
          accessibilityScore: this.calculateAccessibilityScore(issues),
          performanceScore: this.calculatePerformanceScore(issues)
        }
      };
      
      this.auditHistory.push(result);
      return result;
      
    } catch (error) {
      console.error('SEO Audit failed:', error);
      throw new Error('SEO Audit failed');
    }
  }

  /**
   * Start A/B test for SEO elements
   */
  startABTest(test: Omit<ABTestVariant, 'metrics' | 'isActive'>): string {
    const testId = `test_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const newTest: ABTestVariant = {
      ...test,
      id: testId,
      metrics: {
        impressions: 0,
        clicks: 0,
        ctr: 0,
        conversions: 0,
        rank: 0
      },
      isActive: true
    };
    
    this.activeTests.push(newTest);
    this.implementABTest(newTest);
    
    return testId;
  }

  /**
   * Monitor SEO performance in real-time
   */
  startRealTimeMonitoring(interval: number = 60000): void {
    setInterval(async () => {
      if (typeof window !== 'undefined') {
        const currentUrl = window.location.href;
        
        // Collect current metrics
        const vitals = this.getCurrentWebVitals();
        if (vitals) {
          this.webVitalsData.push(vitals);
        }
        
        // Check for SEO regression
        await this.checkSEORegression(currentUrl);
        
        // Update A/B test metrics
        this.updateABTestMetrics();
        
        // Clean old data (keep only last 1000 entries)
        if (this.webVitalsData.length > 1000) {
          this.webVitalsData = this.webVitalsData.slice(-1000);
        }
      }
    }, interval);
  }

  /**
   * Generate SEO performance report
   */
  generatePerformanceReport(timeRange: 'day' | 'week' | 'month' = 'week'): {
    webVitals: {
      average: Partial<CoreWebVitalsData>;
      trend: 'improving' | 'stable' | 'declining';
    };
    audits: {
      totalAudits: number;
      averageScore: number;
      issuesByCategory: Record<string, number>;
    };
    abTests: {
      active: number;
      completed: number;
      winners: ABTestVariant[];
    };
  } {
    const cutoffTime = Date.now() - this.getTimeRangeMs(timeRange);
    
    // Web Vitals analysis
    const recentVitals = this.webVitalsData.filter(v => v.timestamp > cutoffTime);
    const avgVitals = this.calculateAverageVitals(recentVitals);
    const trend = this.calculateVitalsTrend(recentVitals);
    
    // Audit analysis
    const recentAudits = this.auditHistory.filter(a => a.timestamp > cutoffTime);
    const avgScore = recentAudits.reduce((sum, audit) => sum + audit.score, 0) / recentAudits.length || 0;
    const issuesByCategory = this.categorizeIssues(recentAudits);
    
    // A/B Test analysis
    const activeTests = this.activeTests.filter(t => t.isActive).length;
    const completedTests = this.activeTests.filter(t => !t.isActive).length;
    const winners = this.activeTests
      .filter(t => !t.isActive && this.isWinningVariant(t))
      .sort((a, b) => b.metrics.ctr - a.metrics.ctr)
      .slice(0, 5);
    
    return {
      webVitals: {
        average: avgVitals,
        trend
      },
      audits: {
        totalAudits: recentAudits.length,
        averageScore: Math.round(avgScore),
        issuesByCategory
      },
      abTests: {
        active: activeTests,
        completed: completedTests,
        winners
      }
    };
  }

  /**
   * Advanced internationalization optimization
   */
  optimizeInternationalization(
    content: string,
    targetLanguage: Language,
    region?: string
  ): {
    optimizedContent: string;
    suggestions: Array<{
      type: 'currency' | 'units' | 'cultural' | 'legal';
      original: string;
      suggested: string;
      reason: string;
    }>;
  } {
    const suggestions: Array<{
      type: 'currency' | 'units' | 'cultural' | 'legal';
      original: string;
      suggested: string;
      reason: string;
    }> = [];
    
    let optimizedContent = content;
    
    // Currency optimization
    const currencyMap: Record<Language, string> = {
      'en': '$',
      'hu': 'Ft',
      'de': '€'
    };
    
    if (targetLanguage in currencyMap) {
      const targetCurrency = currencyMap[targetLanguage];
      const currencyRegex = /\$[\d,]+(\.\d{2})?/g;
      const matches = content.match(currencyRegex);
      
      if (matches) {
        matches.forEach(match => {
          const converted = this.convertCurrency(match, targetCurrency);
          optimizedContent = optimizedContent.replace(match, converted);
          suggestions.push({
            type: 'currency',
            original: match,
            suggested: converted,
            reason: `Currency localized for ${targetLanguage} market`
          });
        });
      }
    }
    
    // Units optimization (metric vs imperial)
    if (targetLanguage === 'hu' || targetLanguage === 'de') {
      // Convert to metric
      const unitConversions = [
        { regex: /(\d+(?:\.\d+)?)\s*(?:inches?|in\.?)/gi, convert: (val: number) => `${(val * 2.54).toFixed(1)} cm` },
        { regex: /(\d+(?:\.\d+)?)\s*(?:feet|ft\.?)/gi, convert: (val: number) => `${(val * 0.3048).toFixed(2)} m` },
        { regex: /(\d+(?:\.\d+)?)\s*(?:pounds?|lbs?\.?)/gi, convert: (val: number) => `${(val * 0.453592).toFixed(1)} kg` }
      ];
      
      unitConversions.forEach(({ regex, convert }) => {
        optimizedContent = optimizedContent.replace(regex, (match, value) => {
          const converted = convert(parseFloat(value));
          suggestions.push({
            type: 'units',
            original: match,
            suggested: converted,
            reason: 'Converted to metric system for European market'
          });
          return converted;
        });
      });
    }
    
    // Cultural adaptations
    const culturalAdaptations = this.getCulturalAdaptations(targetLanguage);
    culturalAdaptations.forEach(({ pattern, replacement, reason }) => {
      if (pattern.test(optimizedContent)) {
        optimizedContent = optimizedContent.replace(pattern, replacement);
        suggestions.push({
          type: 'cultural',
          original: pattern.toString(),
          suggested: replacement,
          reason
        });
      }
    });
    
    return {
      optimizedContent,
      suggestions
    };
  }

  // Private methods for Core Web Vitals tracking
  private trackLCP(): void {
    if ('web-vital' in window) {
      // @ts-ignore
      import('web-vitals').then(({ getLCP }) => {
        getLCP((metric) => {
          this.recordVital('lcp', metric.value);
        });
      });
    }
  }

  private trackFID(): void {
    if ('web-vital' in window) {
      // @ts-ignore
      import('web-vitals').then(({ getFID }) => {
        getFID((metric) => {
          this.recordVital('fid', metric.value);
        });
      });
    }
  }

  private trackCLS(): void {
    if ('web-vital' in window) {
      // @ts-ignore
      import('web-vitals').then(({ getCLS }) => {
        getCLS((metric) => {
          this.recordVital('cls', metric.value);
        });
      });
    }
  }

  private trackAdditionalMetrics(): void {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const fcp = navigation.responseEnd - navigation.fetchStart;
        const ttfb = navigation.responseStart - navigation.fetchStart;
        
        this.recordVital('fcp', fcp);
        this.recordVital('ttfb', ttfb);
      }
    }
  }

  private recordVital(metric: string, value: number): void {
    if (typeof window === 'undefined') return;
    
    const vitalData: Partial<CoreWebVitalsData> = {
      timestamp: Date.now(),
      url: window.location.href,
      deviceType: window.innerWidth < 768 ? 'mobile' : 'desktop'
    };
    
    vitalData[metric as keyof CoreWebVitalsData] = value;
    
    // Find existing record or create new one
    let existingRecord = this.webVitalsData.find(
      record => Math.abs(record.timestamp - vitalData.timestamp!) < 1000 && record.url === vitalData.url
    );
    
    if (existingRecord) {
      Object.assign(existingRecord, vitalData);
    } else {
      this.webVitalsData.push(vitalData as CoreWebVitalsData);
    }
  }

  private getCurrentWebVitals(): CoreWebVitalsData | null {
    if (typeof window === 'undefined') return null;
    
    const latest = this.webVitalsData[this.webVitalsData.length - 1];
    return latest && Math.abs(latest.timestamp - Date.now()) < 60000 ? latest : null;
  }

  // SEO Audit Methods
  private async auditTechnicalSEO(url: string, issues: SEOAuditResult['issues']): Promise<void> {
    if (typeof window === 'undefined') return;
    
    // Check meta tags
    const title = document.querySelector('title');
    const metaDescription = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    
    if (!title || title.textContent!.length < 30) {
      issues.push({
        type: 'error',
        category: 'technical',
        message: 'Title tag missing or too short',
        impact: 'high',
        suggestion: 'Add a descriptive title between 30-60 characters'
      });
    }
    
    if (!metaDescription || metaDescription.getAttribute('content')!.length < 120) {
      issues.push({
        type: 'warning',
        category: 'technical',
        message: 'Meta description missing or too short',
        impact: 'medium',
        suggestion: 'Add a compelling meta description between 120-160 characters'
      });
    }
    
    if (!canonical) {
      issues.push({
        type: 'warning',
        category: 'technical',
        message: 'Canonical URL missing',
        impact: 'medium',
        suggestion: 'Add canonical URL to prevent duplicate content issues'
      });
    }
    
    // Check structured data
    const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
    if (jsonLdScripts.length === 0) {
      issues.push({
        type: 'warning',
        category: 'technical',
        message: 'No structured data found',
        impact: 'medium',
        suggestion: 'Add relevant structured data for better rich snippets'
      });
    }
  }

  private async auditContentSEO(url: string, issues: SEOAuditResult['issues']): Promise<void> {
    if (typeof window === 'undefined') return;
    
    const headings = {
      h1: document.querySelectorAll('h1').length,
      h2: document.querySelectorAll('h2').length,
      h3: document.querySelectorAll('h3').length
    };
    
    if (headings.h1 === 0) {
      issues.push({
        type: 'error',
        category: 'content',
        message: 'No H1 heading found',
        impact: 'high',
        suggestion: 'Add a descriptive H1 heading to the page'
      });
    } else if (headings.h1 > 1) {
      issues.push({
        type: 'warning',
        category: 'content',
        message: 'Multiple H1 headings found',
        impact: 'medium',
        suggestion: 'Use only one H1 heading per page'
      });
    }
    
    if (headings.h2 === 0) {
      issues.push({
        type: 'info',
        category: 'content',
        message: 'No H2 headings found',
        impact: 'low',
        suggestion: 'Add H2 headings to improve content structure'
      });
    }
  }

  private async auditPerformance(url: string, issues: SEOAuditResult['issues']): Promise<void> {
    const vitals = this.getCurrentWebVitals();
    
    if (vitals) {
      if (vitals.lcp > 2500) {
        issues.push({
          type: 'error',
          category: 'performance',
          message: 'Largest Contentful Paint is too slow',
          impact: 'high',
          suggestion: 'Optimize images and reduce server response time'
        });
      }
      
      if (vitals.cls > 0.1) {
        issues.push({
          type: 'warning',
          category: 'performance',
          message: 'Cumulative Layout Shift is too high',
          impact: 'medium',
          suggestion: 'Avoid layout shifts by setting dimensions on images and ads'
        });
      }
      
      if (vitals.fid > 100) {
        issues.push({
          type: 'warning',
          category: 'performance',
          message: 'First Input Delay is too high',
          impact: 'medium',
          suggestion: 'Reduce JavaScript execution time'
        });
      }
    }
  }

  private async auditAccessibility(url: string, issues: SEOAuditResult['issues']): Promise<void> {
    if (typeof window === 'undefined') return;
    
    const images = document.querySelectorAll('img');
    let imagesWithoutAlt = 0;
    
    images.forEach(img => {
      if (!img.getAttribute('alt')) {
        imagesWithoutAlt++;
      }
    });
    
    if (imagesWithoutAlt > 0) {
      issues.push({
        type: 'warning',
        category: 'accessibility',
        message: `${imagesWithoutAlt} images without alt text`,
        impact: 'medium',
        suggestion: 'Add descriptive alt text to all images'
      });
    }
  }

  // Helper methods
  private calculateOverallScore(issues: SEOAuditResult['issues']): number {
    let score = 100;
    
    issues.forEach(issue => {
      switch (issue.impact) {
        case 'high':
          score -= issue.type === 'error' ? 20 : 10;
          break;
        case 'medium':
          score -= issue.type === 'error' ? 10 : 5;
          break;
        case 'low':
          score -= issue.type === 'error' ? 5 : 2;
          break;
      }
    });
    
    return Math.max(0, score);
  }

  private calculateSEOScore(issues: SEOAuditResult['issues']): number {
    const seoIssues = issues.filter(i => i.category === 'technical' || i.category === 'content');
    return this.calculateOverallScore(seoIssues);
  }

  private calculateAccessibilityScore(issues: SEOAuditResult['issues']): number {
    const a11yIssues = issues.filter(i => i.category === 'accessibility');
    return this.calculateOverallScore(a11yIssues);
  }

  private calculatePerformanceScore(issues: SEOAuditResult['issues']): number {
    const perfIssues = issues.filter(i => i.category === 'performance');
    return this.calculateOverallScore(perfIssues);
  }

  private implementABTest(test: ABTestVariant): void {
    if (typeof window === 'undefined') return;
    
    // Implement A/B test based on element type
    const shouldShowVariant = Math.random() < 0.5;
    
    if (shouldShowVariant) {
      switch (test.element) {
        case 'title':
          document.title = test.variant;
          break;
        case 'meta-description':
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) {
            metaDesc.setAttribute('content', test.variant);
          }
          break;
        case 'heading':
          const h1 = document.querySelector('h1');
          if (h1) {
            h1.textContent = test.variant;
          }
          break;
      }
    }
  }

  private updateABTestMetrics(): void {
    // This would integrate with your analytics system
    // For now, we'll simulate metric updates
    this.activeTests.forEach(test => {
      if (test.isActive) {
        test.metrics.impressions += Math.floor(Math.random() * 10);
        test.metrics.clicks += Math.floor(Math.random() * 3);
        test.metrics.ctr = test.metrics.impressions > 0 ? 
          (test.metrics.clicks / test.metrics.impressions) * 100 : 0;
      }
    });
  }

  private async checkSEORegression(url: string): Promise<void> {
    const lastAudit = this.auditHistory[this.auditHistory.length - 1];
    
    if (lastAudit && Date.now() - lastAudit.timestamp > 86400000) { // 24 hours
      const newAudit = await this.performSEOAudit(url);
      
      if (newAudit.score < lastAudit.score - 10) {
        console.warn('SEO regression detected!', {
          previousScore: lastAudit.score,
          currentScore: newAudit.score,
          url
        });
        
        // In production, you'd send an alert
        this.sendRegressionAlert(lastAudit, newAudit);
      }
    }
  }

  private sendRegressionAlert(previousAudit: SEOAuditResult, currentAudit: SEOAuditResult): void {
    // Implementation would send email/slack notification
    console.log('Regression alert sent', { previousAudit, currentAudit });
  }

  private getTimeRangeMs(range: 'day' | 'week' | 'month'): number {
    const msPerDay = 24 * 60 * 60 * 1000;
    switch (range) {
      case 'day': return msPerDay;
      case 'week': return msPerDay * 7;
      case 'month': return msPerDay * 30;
      default: return msPerDay * 7;
    }
  }

  private calculateAverageVitals(vitals: CoreWebVitalsData[]): Partial<CoreWebVitalsData> {
    if (vitals.length === 0) return {};
    
    const avg = vitals.reduce((acc, vital) => ({
      lcp: (acc.lcp || 0) + vital.lcp,
      fid: (acc.fid || 0) + vital.fid,
      cls: (acc.cls || 0) + vital.cls,
      fcp: (acc.fcp || 0) + vital.fcp,
      ttfb: (acc.ttfb || 0) + vital.ttfb
    }), {} as Partial<CoreWebVitalsData>);
    
    const count = vitals.length;
    return {
      lcp: avg.lcp! / count,
      fid: avg.fid! / count,
      cls: avg.cls! / count,
      fcp: avg.fcp! / count,
      ttfb: avg.ttfb! / count
    };
  }

  private calculateVitalsTrend(vitals: CoreWebVitalsData[]): 'improving' | 'stable' | 'declining' {
    if (vitals.length < 2) return 'stable';
    
    const mid = Math.floor(vitals.length / 2);
    const firstHalf = vitals.slice(0, mid);
    const secondHalf = vitals.slice(mid);
    
    const firstAvg = this.calculateAverageVitals(firstHalf);
    const secondAvg = this.calculateAverageVitals(secondHalf);
    
    const lcpTrend = (secondAvg.lcp! - firstAvg.lcp!) / firstAvg.lcp!;
    
    if (lcpTrend < -0.1) return 'improving';
    if (lcpTrend > 0.1) return 'declining';
    return 'stable';
  }

  private categorizeIssues(audits: SEOAuditResult[]): Record<string, number> {
    const categories: Record<string, number> = {};
    
    audits.forEach(audit => {
      audit.issues.forEach(issue => {
        categories[issue.category] = (categories[issue.category] || 0) + 1;
      });
    });
    
    return categories;
  }

  private isWinningVariant(test: ABTestVariant): boolean {
    return test.metrics.ctr > 2.0 && test.metrics.impressions > 1000;
  }

  private convertCurrency(amount: string, targetCurrency: string): string {
    // Simplified currency conversion - in production, use real exchange rates
    const value = parseFloat(amount.replace(/[$,]/g, ''));
    
    switch (targetCurrency) {
      case 'Ft':
        return `${Math.round(value * 350)} Ft`;
      case '€':
        return `€${(value * 0.85).toFixed(2)}`;
      default:
        return amount;
    }
  }

  private getCulturalAdaptations(language: Language): Array<{
    pattern: RegExp;
    replacement: string;
    reason: string;
  }> {
    const adaptations: Array<{
      pattern: RegExp;
      replacement: string;
      reason: string;
    }> = [];
    
    if (language === 'hu') {
      adaptations.push({
        pattern: /\bcolor\b/gi,
        replacement: 'colour',
        reason: 'British English spelling preference in Hungary'
      });
    }
    
    if (language === 'de') {
      adaptations.push({
        pattern: /\bquality assurance\b/gi,
        replacement: 'Qualitätssicherung',
        reason: 'German technical term preference'
      });
    }
    
    return adaptations;
  }
}