import { ANALYTICS_CONFIG } from '../config';
import TagManager from 'react-gtm-module';
import type { AnalyticsEvent, PageViewData, EcommerceEvent } from '../index';

export default class GTM {
  private initialized = false;
  private consentGiven = false;

  async initialize() {
    if (this.initialized || !ANALYTICS_CONFIG.GTM.enabled) return;

    try {
      const gtmArgs = {
        gtmId: ANALYTICS_CONFIG.GTM.containerId,
        dataLayerName: 'dataLayer'
      };

      TagManager.initialize(gtmArgs);
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize Google Tag Manager:', error);
      throw error;
    }
  }

  updateConsent(consent: { analytics: boolean; marketing: boolean }) {
    this.consentGiven = consent.analytics;
    
    // Push consent update to dataLayer
    TagManager.dataLayer({
      dataLayer: {
        event: 'consent_update',
        analytics_storage: consent.analytics ? 'granted' : 'denied',
        ad_storage: consent.marketing ? 'granted' : 'denied'
      }
    });
  }

  trackPageView(data: PageViewData) {
    if (!this.initialized || !this.consentGiven) return;

    TagManager.dataLayer({
      dataLayer: {
        event: 'page_view',
        page_title: data.title,
        page_location: data.url,
        page_referrer: data.referrer,
        language: data.language
      }
    });
  }

  trackEvent(event: AnalyticsEvent) {
    if (!this.initialized || !this.consentGiven) return;

    TagManager.dataLayer({
      dataLayer: {
        event: 'custom_event',
        event_name: event.name,
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.parameters
      }
    });
  }

  trackEcommerce(event: EcommerceEvent) {
    if (!this.initialized || !this.consentGiven) return;

    TagManager.dataLayer({
      dataLayer: {
        event: event.event,
        ecommerce: event.ecommerce
      }
    });
  }

  setUserProperties(properties: Record<string, string | number | boolean>) {
    if (!this.initialized || !this.consentGiven) return;

    TagManager.dataLayer({
      dataLayer: {
        event: 'user_properties',
        user_properties: properties
      }
    });
  }
}
