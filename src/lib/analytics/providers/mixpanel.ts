import { ANALYTICS_CONFIG } from '../config';
import mixpanel from 'mixpanel-browser';
import type { AnalyticsEvent, PageViewData, EcommerceEvent } from '../index';

export default class Mixpanel {
  private initialized = false;
  private consentGiven = false;

  async initialize() {
    if (this.initialized || !ANALYTICS_CONFIG.MIXPANEL.enabled) return;

    try {
      mixpanel.init(ANALYTICS_CONFIG.MIXPANEL.token, {
        debug: process.env.NODE_ENV === 'development',
        track_pageview: true,
        persistence: 'localStorage'
      });
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize Mixpanel:', error);
      throw error;
    }
  }

  updateConsent(consent: { analytics: boolean; marketing: boolean }) {
    this.consentGiven = consent.analytics;
    
    if (this.initialized) {
      if (!this.consentGiven) {
        mixpanel.opt_out_tracking();
      } else {
        mixpanel.opt_in_tracking();
      }
    }
  }

  trackPageView(data: PageViewData) {
    if (!this.initialized || !this.consentGiven) return;

    mixpanel.track('Page View', {
      page_title: data.title,
      page_url: data.url,
      referrer: data.referrer,
      language: data.language
    });
  }

  trackEvent(event: AnalyticsEvent) {
    if (!this.initialized || !this.consentGiven) return;

    mixpanel.track(event.name, {
      category: event.category,
      label: event.label,
      value: event.value,
      ...event.parameters
    });
  }

  trackEcommerce(event: EcommerceEvent) {
    if (!this.initialized || !this.consentGiven) return;

    mixpanel.track(event.event, {
      revenue: event.ecommerce.value,
      currency: event.ecommerce.currency,
      items: event.ecommerce.items
    });
  }

  setUserProperties(properties: Record<string, string | number | boolean>) {
    if (!this.initialized || !this.consentGiven) return;

    mixpanel.people.set(properties);
  }
}
