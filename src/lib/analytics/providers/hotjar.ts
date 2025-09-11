import { ANALYTICS_CONFIG } from '../config';
import { hotjar } from 'react-hotjar';
import type { AnalyticsEvent, PageViewData } from '../index';

export default class Hotjar {
  private initialized = false;
  private consentGiven = false;

  async initialize() {
    if (this.initialized || !ANALYTICS_CONFIG.HOTJAR.enabled) return;

    try {
      hotjar.initialize({
        id: ANALYTICS_CONFIG.HOTJAR.id,
        sv: ANALYTICS_CONFIG.HOTJAR.sv
      });
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize Hotjar:', error);
      throw error;
    }
  }

  updateConsent(consent: { analytics: boolean; marketing: boolean }) {
    this.consentGiven = consent.analytics;
    
    // Hotjar doesn't have built-in consent management
    // We handle it by not tracking if consent is not given
  }

  trackPageView(data: PageViewData) {
    if (!this.initialized || !this.consentGiven) return;

    // Hotjar automatically tracks page views
    // We can trigger a virtual page view if needed
    try {
      hotjar.stateChange(data.url);
    } catch (error) {
      console.warn('Hotjar state change error:', error);
    }
  }

  trackEvent(event: AnalyticsEvent) {
    if (!this.initialized || !this.consentGiven) return;

    // Hotjar doesn't have traditional event tracking
    // But we can use tags to mark significant events
    try {
      hotjar.event(event.name);
    } catch (error) {
      console.warn('Hotjar event error:', error);
    }
  }

  setUserProperties(properties: Record<string, string | number | boolean>) {
    if (!this.initialized || !this.consentGiven) return;

    // Hotjar doesn't support user properties directly
    // We could use identify if available
    try {
      const userId = properties.userId || properties.id;
      if (userId) {
        hotjar.identify(String(userId), properties);
      }
    } catch (error) {
      console.warn('Hotjar identify error:', error);
    }
  }
}
