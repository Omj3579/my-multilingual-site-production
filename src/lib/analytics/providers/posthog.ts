import { ANALYTICS_CONFIG } from '../config';
import posthog from 'posthog-js';
import type { AnalyticsEvent, PageViewData, EcommerceEvent } from '../index';

export default class PostHog {
  private initialized = false;
  private consentGiven = false;

  async initialize() {
    if (this.initialized || !ANALYTICS_CONFIG.POSTHOG.enabled) return;

    try {
      posthog.init(ANALYTICS_CONFIG.POSTHOG.key, {
        api_host: ANALYTICS_CONFIG.POSTHOG.host,
        debug: process.env.NODE_ENV === 'development',
        capture_pageview: false // We'll handle this manually
      });
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize PostHog:', error);
      throw error;
    }
  }

  updateConsent(consent: { analytics: boolean; marketing: boolean }) {
    this.consentGiven = consent.analytics;
    
    if (this.initialized) {
      if (!this.consentGiven) {
        posthog.opt_out_capturing();
      } else {
        posthog.opt_in_capturing();
      }
    }
  }

  trackPageView(data: PageViewData) {
    if (!this.initialized || !this.consentGiven) return;

    posthog.capture('$pageview', {
      $current_url: data.url,
      $title: data.title,
      $referrer: data.referrer,
      language: data.language
    });
  }

  trackEvent(event: AnalyticsEvent) {
    if (!this.initialized || !this.consentGiven) return;

    posthog.capture(event.name, {
      category: event.category,
      label: event.label,
      value: event.value,
      ...event.parameters
    });
  }

  trackEcommerce(event: EcommerceEvent) {
    if (!this.initialized || !this.consentGiven) return;

    posthog.capture(event.event, {
      revenue: event.ecommerce.value,
      currency: event.ecommerce.currency,
      items: event.ecommerce.items
    });
  }

  setUserProperties(properties: Record<string, string | number | boolean>) {
    if (!this.initialized || !this.consentGiven) return;

    posthog.people.set(properties);
  }
}
