import { ANALYTICS_CONFIG } from './config';
import GA4 from './providers/ga4';
import GTM from './providers/gtm';
import MetaPixel from './providers/meta-pixel';
import Clarity from './providers/clarity';
import Hotjar from './providers/hotjar';
import Mixpanel from './providers/mixpanel';
import PostHog from './providers/posthog';
import BingUET from './providers/bing-uet';
import LinkedInInsight from './providers/linkedin';
import TwitterPixel from './providers/twitter';
import GoogleSearchConsole from './providers/google-search-console';
import BingWebmaster from './providers/bing-webmaster';

export interface AnalyticsEvent {
  name: string;
  parameters?: Record<string, string | number | boolean>;
  category?: string;
  label?: string;
  value?: number;
}

export interface PageViewData {
  url: string;
  title: string;
  referrer?: string;
  language?: string;
}

export interface EcommerceEvent {
  event: string;
  ecommerce: {
    currency?: string;
    value?: number;
    items?: Array<{
      item_id: string;
      item_name: string;
      category?: string;
      quantity?: number;
      price?: number;
    }>;
  };
}

interface AnalyticsProvider {
  initialize?: () => Promise<void> | void;
  updateConsent?: (consent: { analytics: boolean; marketing: boolean }) => void;
  trackPageView?: (data: PageViewData) => void;
  trackEvent?: (event: AnalyticsEvent) => void;
  trackEcommerce?: (event: EcommerceEvent) => void;
  setUserProperties?: (properties: Record<string, string | number | boolean>) => void;
}

class AnalyticsManager {
  private providers: AnalyticsProvider[] = [];
  private consentGiven = {
    analytics: false,
    marketing: false,
    necessary: true
  };

  constructor() {
    // Only initialize providers on client-side
    if (typeof window !== 'undefined') {
      this.initializeProviders();
    }
  }

  private initializeProviders() {
    // Analytics providers (require analytics consent)
    if (ANALYTICS_CONFIG.GA4.enabled) {
      this.providers.push(new GA4());
    }
    
    if (ANALYTICS_CONFIG.GTM.enabled) {
      this.providers.push(new GTM());
    }
    
    if (ANALYTICS_CONFIG.CLARITY.enabled) {
      this.providers.push(new Clarity());
    }
    
    if (ANALYTICS_CONFIG.HOTJAR.enabled) {
      this.providers.push(new Hotjar());
    }
    
    if (ANALYTICS_CONFIG.MIXPANEL.enabled) {
      this.providers.push(new Mixpanel());
    }
    
    if (ANALYTICS_CONFIG.POSTHOG.enabled) {
      this.providers.push(new PostHog());
    }

    // Marketing providers (require marketing consent)
    if (ANALYTICS_CONFIG.META.enabled) {
      this.providers.push(new MetaPixel());
    }
    
    if (ANALYTICS_CONFIG.BING.enabled) {
      this.providers.push(new BingUET());
    }
    
    if (ANALYTICS_CONFIG.LINKEDIN.enabled) {
      this.providers.push(new LinkedInInsight());
    }
    
    if (ANALYTICS_CONFIG.TWITTER.enabled) {
      this.providers.push(new TwitterPixel());
    }

    // Necessary providers (always enabled - verification tags)
    if (ANALYTICS_CONFIG.GOOGLE_SEARCH_CONSOLE.enabled) {
      this.providers.push(new GoogleSearchConsole(ANALYTICS_CONFIG.GOOGLE_SEARCH_CONSOLE.verificationCode));
    }
    
    if (ANALYTICS_CONFIG.BING_WEBMASTER.enabled) {
      this.providers.push(new BingWebmaster(ANALYTICS_CONFIG.BING_WEBMASTER.verificationCode));
    }
  }

  // Initialize all analytics providers
  async initialize() {
    if (typeof window === 'undefined') return;
    
    // Initialize providers if not already done
    if (this.providers.length === 0) {
      this.initializeProviders();
    }
    
    await Promise.all(
      this.providers.map(provider => 
        provider.initialize?.()?.catch((error: Error) => 
          console.warn(`Failed to initialize ${provider.constructor.name}:`, error)
        )
      )
    );
  }

  // Update consent settings
  updateConsent(consent: { analytics: boolean; marketing: boolean }) {
    this.consentGiven = { ...this.consentGiven, ...consent };
    
    // Enable/disable providers based on consent
    this.providers.forEach(provider => {
      if (provider.updateConsent) {
        provider.updateConsent(this.consentGiven);
      }
    });
  }

  // Track page views
  trackPageView(data: PageViewData) {
    this.providers.forEach(provider => {
      if (this.canTrack(provider) && provider.trackPageView) {
        try {
          provider.trackPageView(data);
        } catch (error) {
          console.warn(`Error tracking page view with ${provider.constructor.name}:`, error);
        }
      }
    });
  }

  // Track custom events
  trackEvent(event: AnalyticsEvent) {
    this.providers.forEach(provider => {
      if (this.canTrack(provider) && provider.trackEvent) {
        try {
          provider.trackEvent(event);
        } catch (error) {
          console.warn(`Error tracking event with ${provider.constructor.name}:`, error);
        }
      }
    });
  }

  // Track ecommerce events
  trackEcommerce(event: EcommerceEvent) {
    this.providers.forEach(provider => {
      if (this.canTrack(provider) && provider.trackEcommerce) {
        try {
          provider.trackEcommerce(event);
        } catch (error) {
          console.warn(`Error tracking ecommerce with ${provider.constructor.name}:`, error);
        }
      }
    });
  }

  // Track user properties
  setUserProperties(properties: Record<string, string | number | boolean>) {
    this.providers.forEach(provider => {
      if (this.canTrack(provider) && provider.setUserProperties) {
        try {
          provider.setUserProperties(properties);
        } catch (error) {
          console.warn(`Error setting user properties with ${provider.constructor.name}:`, error);
        }
      }
    });
  }

  // Check if tracking is allowed for a provider
  private canTrack(provider: AnalyticsProvider): boolean {
    const providerName = provider.constructor.name.toUpperCase();
    
    // Check if provider requires marketing consent
    const marketingProviders = ['METAPIXEL', 'BINGUET', 'LINKEDININSIGHT', 'TWITTERPIXEL'];
    if (marketingProviders.includes(providerName) && !this.consentGiven.marketing) {
      return false;
    }
    
    // Check if provider requires analytics consent
    const analyticsProviders = ['GA4', 'GTM', 'CLARITY', 'HOTJAR', 'MIXPANEL', 'POSTHOG'];
    if (analyticsProviders.includes(providerName) && !this.consentGiven.analytics) {
      return false;
    }
    
    return true;
  }
}

// Create singleton instance
const analytics = new AnalyticsManager();

export default analytics;
