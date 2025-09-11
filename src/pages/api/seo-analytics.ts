import { NextApiRequest, NextApiResponse } from 'next';

interface SEOAnalyticsData {
  url: string;
  metrics: {
    pageLoadTime?: number;
    firstContentfulPaint?: number;
    largestContentfulPaint?: number;
    cumulativeLayoutShift?: number;
    firstInputDelay?: number;
    timeToInteractive?: number;
  };
  timestamp: string;
  userAgent?: string;
  referrer?: string;
  viewport?: {
    width: number;
    height: number;
  };
}

interface AnalyticsResponse {
  success: boolean;
  message: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AnalyticsResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const data: SEOAnalyticsData = req.body;
    
    // Validate required fields
    if (!data.url || !data.timestamp) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: url, timestamp'
      });
    }

    // Log analytics data (in production, you would save to database)
    console.log('SEO Analytics Data:', {
      url: data.url,
      metrics: data.metrics,
      timestamp: data.timestamp,
      userAgent: req.headers['user-agent'],
      referrer: req.headers.referer
    });

    // Here you would typically:
    // 1. Save to database (MongoDB, PostgreSQL, etc.)
    // 2. Send to analytics service (Google Analytics, Mixpanel, etc.)
    // 3. Process and aggregate metrics
    // 4. Trigger alerts for poor performance

    // Example database save (pseudo-code):
    // await saveToDatabase({
    //   ...data,
    //   userAgent: req.headers['user-agent'],
    //   ip: req.ip,
    //   referrer: req.headers.referer
    // });

    // Example external analytics service (pseudo-code):
    // await sendToAnalytics('core_web_vitals', data.metrics);

    res.status(200).json({
      success: true,
      message: 'Analytics data received'
    });

  } catch (error) {
    console.error('SEO Analytics Error:', error);
    
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}

// Optional: Add analytics data processing functions
export function processAnalyticsData(data: SEOAnalyticsData) {
  const { metrics } = data;
  
  // Classify Core Web Vitals performance
  const performance = {
    lcp: classifyLCP(metrics.largestContentfulPaint),
    fid: classifyFID(metrics.firstInputDelay),
    cls: classifyCLS(metrics.cumulativeLayoutShift)
  };
  
  return {
    ...data,
    performance,
    score: calculateOverallScore(performance)
  };
}

function classifyLCP(lcp?: number): 'good' | 'needs-improvement' | 'poor' | 'unknown' {
  if (typeof lcp !== 'number') return 'unknown';
  if (lcp <= 2500) return 'good';
  if (lcp <= 4000) return 'needs-improvement';
  return 'poor';
}

function classifyFID(fid?: number): 'good' | 'needs-improvement' | 'poor' | 'unknown' {
  if (typeof fid !== 'number') return 'unknown';
  if (fid <= 100) return 'good';
  if (fid <= 300) return 'needs-improvement';
  return 'poor';
}

function classifyCLS(cls?: number): 'good' | 'needs-improvement' | 'poor' | 'unknown' {
  if (typeof cls !== 'number') return 'unknown';
  if (cls <= 0.1) return 'good';
  if (cls <= 0.25) return 'needs-improvement';
  return 'poor';
}

function calculateOverallScore(performance: Record<string, string>): number {
  const scores = Object.values(performance).map(rating => {
    switch (rating) {
      case 'good': return 100;
      case 'needs-improvement': return 60;
      case 'poor': return 20;
      default: return 0;
    }
  });
  
  const total = scores.reduce((sum: number, score) => sum + score, 0);
  return Math.round(total / scores.length);
}
