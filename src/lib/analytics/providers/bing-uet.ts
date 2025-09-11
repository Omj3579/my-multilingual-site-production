import { ANALYTICS_CONFIG } from '../config';
import type { AnalyticsEvent, PageViewData, EcommerceEvent } from '../index';

declare global {
  interface Window {
    uetq?: unknown[];
  }
}

export default class BingUET {
  private initialized = false;
  private consentGiven = false;

  async initialize() {
    if (this.initialized || !ANALYTICS_CONFIG.BING.enabled) return;

    return new Promise<void>((resolve, reject) => {
      try {
        // Initialize UET queue
        window.uetq = window.uetq || [];
        
        // Add UET script
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://bat.bing.com/bat.js';
        
        script.onload = () => {
          // Initialize UET tag
          if (window.uetq) {
            window.uetq.push('create', ANALYTICS_CONFIG.BING.uetTagId);
            window.uetq.push('pageLoad');
          }
          this.initialized = true;
          resolve();
        };

        script.onerror = () => {
          reject(new Error('Failed to load Bing UET script'));
        };

        document.head.appendChild(script);
      } catch (error) {
        reject(error);
      }
    });
  }

  updateConsent(consent: { analytics: boolean; marketing: boolean }) {
    this.consentGiven = consent.marketing;
    
    // Bing UET doesn't have built-in consent management
    // We handle it by not tracking if consent is not given
  }

  trackPageView(data: PageViewData) {
    if (!this.initialized || !this.consentGiven || !window.uetq) return;

    window.uetq.push('event', 'page_view', {
      page_path: data.url,
      page_title: data.title,
      language: data.language
    });
  }

  trackEvent(event: AnalyticsEvent) {
    if (!this.initialized || !this.consentGiven || !window.uetq) return;

    window.uetq.push('event', event.name, {
      event_category: event.category,
      event_label: event.label,
      event_value: event.value,
      ...event.parameters
    });
  }

  trackEcommerce(event: EcommerceEvent) {
    if (!this.initialized || !this.consentGiven || !window.uetq) return;

    if (event.event === 'purchase') {
      window.uetq.push('event', 'purchase', {
        revenue_value: event.ecommerce.value,
        currency: event.ecommerce.currency
      });
    } else {
      window.uetq.push('event', event.event, {
        revenue_value: event.ecommerce.value,
        currency: event.ecommerce.currency,
        items: event.ecommerce.items
      });
    }
  }

  setUserProperties(properties: Record<string, string | number | boolean>) {
    if (!this.initialized || !this.consentGiven || !window.uetq) return;

    // Bing UET doesn't support user properties directly
    // We can include them in custom events
    window.uetq.push('event', 'user_properties', properties);
  }
}
