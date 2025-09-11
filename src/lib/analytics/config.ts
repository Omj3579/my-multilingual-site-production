// Analytics Configuration
export const ANALYTICS_CONFIG = {
  // Google Analytics 4
  GA4: {
    measurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || 'G-XXXXXXXXXX',
    enabled: !!process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID
  },
  
  // Google Tag Manager
  GTM: {
    containerId: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID || 'GTM-XXXXXXX',
    enabled: !!process.env.NEXT_PUBLIC_GTM_CONTAINER_ID
  },
  
  // Facebook Pixel / Meta Pixel
  META: {
    pixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || 'XXXXXXXXXXXXXXX',
    enabled: !!process.env.NEXT_PUBLIC_META_PIXEL_ID
  },
  
  // Microsoft Clarity
  CLARITY: {
    projectId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'XXXXXXXXX',
    enabled: !!process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID
  },
  
  // Hotjar
  HOTJAR: {
    id: parseInt(process.env.NEXT_PUBLIC_HOTJAR_ID || '0'),
    sv: parseInt(process.env.NEXT_PUBLIC_HOTJAR_SV || '6'),
    enabled: !!process.env.NEXT_PUBLIC_HOTJAR_ID
  },
  
  // Mixpanel
  MIXPANEL: {
    token: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || '',
    enabled: !!process.env.NEXT_PUBLIC_MIXPANEL_TOKEN
  },
  
  // PostHog
  POSTHOG: {
    key: process.env.NEXT_PUBLIC_POSTHOG_KEY || '',
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    enabled: !!process.env.NEXT_PUBLIC_POSTHOG_KEY
  },
  
  // Vercel Analytics (automatically enabled if deployed on Vercel)
  VERCEL: {
    enabled: true
  },
  
  // Bing/Microsoft UET (Universal Event Tracking)
  BING: {
    uetTagId: process.env.NEXT_PUBLIC_BING_UET_TAG_ID || 'XXXXXXX',
    enabled: !!process.env.NEXT_PUBLIC_BING_UET_TAG_ID
  },
  
  // LinkedIn Insight Tag
  LINKEDIN: {
    partnerId: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || 'XXXXXXX',
    enabled: !!process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID
  },
  
  // Twitter/X Pixel
  TWITTER: {
    pixelId: process.env.NEXT_PUBLIC_TWITTER_PIXEL_ID || 'XXXXXXX',
    enabled: !!process.env.NEXT_PUBLIC_TWITTER_PIXEL_ID
  },
  
  // Google Search Console
  GOOGLE_SEARCH_CONSOLE: {
    verificationCode: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_CODE || '',
    enabled: !!process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_CODE
  },
  
  // Bing Webmaster Tools
  BING_WEBMASTER: {
    verificationCode: process.env.NEXT_PUBLIC_BING_WEBMASTER_CODE || '',
    enabled: !!process.env.NEXT_PUBLIC_BING_WEBMASTER_CODE
  }
};

// Cookie consent integration
export const COOKIE_CATEGORIES = {
  NECESSARY: 'necessary',
  ANALYTICS: 'analytics',
  MARKETING: 'marketing',
  PERSONALIZATION: 'personalization'
};

// Analytics service mapping to cookie categories
export const ANALYTICS_COOKIE_MAPPING = {
  GA4: COOKIE_CATEGORIES.ANALYTICS,
  GTM: COOKIE_CATEGORIES.ANALYTICS,
  META: COOKIE_CATEGORIES.MARKETING,
  CLARITY: COOKIE_CATEGORIES.ANALYTICS,
  HOTJAR: COOKIE_CATEGORIES.ANALYTICS,
  MIXPANEL: COOKIE_CATEGORIES.ANALYTICS,
  POSTHOG: COOKIE_CATEGORIES.ANALYTICS,
  BING: COOKIE_CATEGORIES.MARKETING,
  LINKEDIN: COOKIE_CATEGORIES.MARKETING,
  TWITTER: COOKIE_CATEGORIES.MARKETING,
  GOOGLE_SEARCH_CONSOLE: COOKIE_CATEGORIES.NECESSARY, // Verification tags are necessary
  BING_WEBMASTER: COOKIE_CATEGORIES.NECESSARY // Verification tags are necessary
};
