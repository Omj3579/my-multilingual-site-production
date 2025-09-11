/**
 * SEO Performance Monitoring and Analytics
 */

interface SEOMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

interface SEOAnalytics {
  url: string;
  title: string;
  description: string;
  keywords: string[];
  wordCount: number;
  headings: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    h6: number;
  };
  images: {
    total: number;
    withAlt: number;
    missingAlt: number;
  };
  links: {
    internal: number;
    external: number;
    broken: number;
  };
  structuredData: boolean;
  mobileFriendly: boolean;
  pageSpeed: SEOMetrics;
  socialMedia: {
    ogTitle: boolean;
    ogDescription: boolean;
    ogImage: boolean;
    twitterCard: boolean;
  };
}

/**
 * Collect Core Web Vitals and performance metrics
 */
export class SEOPerformanceMonitor {
  private metrics: Partial<SEOMetrics> = {};
  
  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeMonitoring();
    }
  }
  
  private initializeMonitoring() {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      this.monitorWebVitals();
    } else {
      // Fallback to Performance Observer
      this.monitorPerformance();
    }
    
    // Monitor page load time
    window.addEventListener('load', () => {
      const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.pageLoadTime = navigationTiming.loadEventEnd - navigationTiming.fetchStart;
    });
  }
  
  private monitorWebVitals() {
    // This would integrate with web-vitals library if installed
    // import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
    
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Monitor LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.largestContentfulPaint = lastEntry.startTime;
      });
      
      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch {
        // Fallback for browsers that don't support LCP
      }
      
      // Monitor CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as PerformanceEntry & {
            hadRecentInput?: boolean;
            value?: number;
          };
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value || 0;
          }
        }
        this.metrics.cumulativeLayoutShift = clsValue;
      });
      
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch {
        // Fallback for browsers that don't support layout-shift
      }
      
      // Monitor FCP
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.firstContentfulPaint = entry.startTime;
          }
        }
      });
      
      try {
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch {
        // Fallback for browsers that don't support paint timing
      }
    }
  }
  
  private monitorPerformance() {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Basic performance timing fallback
      window.addEventListener('load', () => {
        const timing = performance.timing;
        this.metrics.pageLoadTime = timing.loadEventEnd - timing.navigationStart;
        this.metrics.timeToInteractive = timing.domInteractive - timing.navigationStart;
      });
    }
  }
  
  getMetrics(): Partial<SEOMetrics> {
    return { ...this.metrics };
  }
  
  reportToAnalytics() {
    const metrics = this.getMetrics();
    
    // Send to Google Analytics 4
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;
      if (gtag) {
        gtag('event', 'web_vitals', {
          custom_parameter_1: metrics.largestContentfulPaint,
          custom_parameter_2: metrics.firstContentfulPaint,
          custom_parameter_3: metrics.cumulativeLayoutShift,
          custom_parameter_4: metrics.firstInputDelay
        });
      }
    }
    
    // Send to custom analytics endpoint
    if (typeof fetch !== 'undefined') {
      fetch('/api/seo-analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: window.location.href,
          metrics,
          timestamp: new Date().toISOString()
        })
      }).catch(error => {
        console.warn('Failed to send SEO analytics:', error);
      });
    }
  }
}

/**
 * Analyze page SEO health
 */
export class SEOAnalyzer {
  private document: Document;
  
  constructor(doc: Document = document) {
    this.document = doc;
  }
  
  analyze(): SEOAnalytics {
    return {
      url: this.document.location?.href || '',
      title: this.analyzeTitle(),
      description: this.analyzeDescription(),
      keywords: this.analyzeKeywords(),
      wordCount: this.getWordCount(),
      headings: this.analyzeHeadings(),
      images: this.analyzeImages(),
      links: this.analyzeLinks(),
      structuredData: this.hasStructuredData(),
      mobileFriendly: this.isMobileFriendly(),
      pageSpeed: {} as SEOMetrics, // Would be populated by performance monitor
      socialMedia: this.analyzeSocialMedia()
    };
  }
  
  private analyzeTitle(): string {
    const title = this.document.querySelector('title')?.textContent || '';
    
    // Validate title length
    if (title.length < 30) {
      console.warn('SEO Warning: Title is too short (< 30 characters)');
    } else if (title.length > 60) {
      console.warn('SEO Warning: Title is too long (> 60 characters)');
    }
    
    return title;
  }
  
  private analyzeDescription(): string {
    const metaDescription = this.document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    
    // Validate description length
    if (metaDescription.length < 120) {
      console.warn('SEO Warning: Meta description is too short (< 120 characters)');
    } else if (metaDescription.length > 160) {
      console.warn('SEO Warning: Meta description is too long (> 160 characters)');
    }
    
    return metaDescription;
  }
  
  private analyzeKeywords(): string[] {
    const metaKeywords = this.document.querySelector('meta[name="keywords"]')?.getAttribute('content') || '';
    return metaKeywords.split(',').map(k => k.trim()).filter(Boolean);
  }
  
  private getWordCount(): number {
    const bodyText = this.document.body?.textContent || '';
    return bodyText.split(/\s+/).filter(Boolean).length;
  }
  
  private analyzeHeadings() {
    return {
      h1: this.document.querySelectorAll('h1').length,
      h2: this.document.querySelectorAll('h2').length,
      h3: this.document.querySelectorAll('h3').length,
      h4: this.document.querySelectorAll('h4').length,
      h5: this.document.querySelectorAll('h5').length,
      h6: this.document.querySelectorAll('h6').length
    };
  }
  
  private analyzeImages() {
    const images = this.document.querySelectorAll('img');
    const total = images.length;
    let withAlt = 0;
    
    images.forEach(img => {
      if (img.alt && img.alt.trim()) {
        withAlt++;
      }
    });
    
    return {
      total,
      withAlt,
      missingAlt: total - withAlt
    };
  }
  
  private analyzeLinks() {
    const links = this.document.querySelectorAll('a[href]');
    let internal = 0;
    let external = 0;
    const broken = 0; // Would need to be checked asynchronously
    
    links.forEach(link => {
      const href = link.getAttribute('href') || '';
      
      if (href.startsWith('#') || href.startsWith('/') || href.startsWith(location.origin)) {
        internal++;
      } else if (href.startsWith('http')) {
        external++;
      }
    });
    
    return {
      internal,
      external,
      broken // Would need to be checked asynchronously
    };
  }
  
  private hasStructuredData(): boolean {
    return this.document.querySelectorAll('script[type="application/ld+json"]').length > 0;
  }
  
  private isMobileFriendly(): boolean {
    const viewport = this.document.querySelector('meta[name="viewport"]')?.getAttribute('content') || '';
    return viewport.includes('width=device-width');
  }
  
  private analyzeSocialMedia() {
    return {
      ogTitle: !!this.document.querySelector('meta[property="og:title"]'),
      ogDescription: !!this.document.querySelector('meta[property="og:description"]'),
      ogImage: !!this.document.querySelector('meta[property="og:image"]'),
      twitterCard: !!this.document.querySelector('meta[name="twitter:card"]')
    };
  }
  
  generateReport(): string {
    const analysis = this.analyze();
    const headings = analysis.headings;
    
    let report = '=== SEO Analysis Report ===\n\n';
    
    // Title analysis
    report += `Title: ${analysis.title}\n`;
    report += `Title Length: ${analysis.title.length} characters\n\n`;
    
    // Description analysis
    report += `Description: ${analysis.description}\n`;
    report += `Description Length: ${analysis.description.length} characters\n\n`;
    
    // Content analysis
    report += `Word Count: ${analysis.wordCount}\n\n`;
    
    // Heading structure
    report += 'Heading Structure:\n';
    report += `H1: ${headings.h1}\n`;
    report += `H2: ${headings.h2}\n`;
    report += `H3: ${headings.h3}\n`;
    report += `H4: ${headings.h4}\n`;
    report += `H5: ${headings.h5}\n`;
    report += `H6: ${headings.h6}\n\n`;
    
    // Images analysis
    report += `Images: ${analysis.images.total} total, ${analysis.images.withAlt} with alt text, ${analysis.images.missingAlt} missing alt text\n\n`;
    
    // Links analysis
    report += `Links: ${analysis.links.internal} internal, ${analysis.links.external} external\n\n`;
    
    // Technical SEO
    report += `Structured Data: ${analysis.structuredData ? 'Yes' : 'No'}\n`;
    report += `Mobile Friendly: ${analysis.mobileFriendly ? 'Yes' : 'No'}\n`;
    report += `Social Media Tags: ${analysis.socialMedia.ogTitle && analysis.socialMedia.ogDescription ? 'Complete' : 'Incomplete'}\n\n`;
    
    return report;
  }
}

/**
 * Initialize SEO monitoring on page load
 */
export function initializeSEOMonitoring() {
  if (typeof window !== 'undefined') {
    const performanceMonitor = new SEOPerformanceMonitor();
    const analyzer = new SEOAnalyzer();
    
    // Report performance metrics after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        performanceMonitor.reportToAnalytics();
        
        // Log SEO analysis in development
        if (process.env.NODE_ENV === 'development') {
          console.log(analyzer.generateReport());
        }
      }, 1000);
    });
    
    return { performanceMonitor, analyzer };
  }
  
  return null;
}

// Auto-initialize in browser environment
if (typeof window !== 'undefined') {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSEOMonitoring);
  } else {
    initializeSEOMonitoring();
  }
}
