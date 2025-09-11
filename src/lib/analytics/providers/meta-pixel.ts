import { ANALYTICS_CONFIG } from '../config';
import ReactPixel from 'react-facebook-pixel';
import type { AnalyticsEvent, PageViewData, EcommerceEvent } from '../index';

export default class MetaPixel {
  private initialized = false;
  private consentGiven = false;

  async initialize() {
    if (this.initialized || !ANALYTICS_CONFIG.META.enabled) return;

    try {
      const options = {
        autoConfig: true,
        debug: process.env.NODE_ENV === 'development'
      };

      ReactPixel.init(ANALYTICS_CONFIG.META.pixelId, undefined, options);
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize Meta Pixel:', error);
      throw error;
    }
  }

  updateConsent(consent: { analytics: boolean; marketing: boolean }) {
    this.consentGiven = consent.marketing;
    
    if (!this.consentGiven) {
      // Disable pixel tracking if consent is not given
      ReactPixel.revokeConsent();
    } else {
      ReactPixel.grantConsent();
    }
  }

  trackPageView(_data: PageViewData) {
    if (!this.initialized || !this.consentGiven) return;

    ReactPixel.pageView();
  }

  trackEvent(event: AnalyticsEvent) {
    if (!this.initialized || !this.consentGiven) return;

    const eventName = this.mapEventName(event.name);
    const parameters = {
      content_name: event.label,
      content_category: event.category,
      value: event.value,
      currency: 'USD',
      ...event.parameters
    };

    ReactPixel.track(eventName, parameters);
  }

  trackEcommerce(event: EcommerceEvent) {
    if (!this.initialized || !this.consentGiven) return;

    const eventName = this.mapEcommerceEvent(event.event);
    const parameters = {
      value: event.ecommerce.value,
      currency: event.ecommerce.currency || 'USD',
      contents: event.ecommerce.items?.map(item => ({
        id: item.item_id,
        quantity: item.quantity,
        item_price: item.price
      }))
    };

    ReactPixel.track(eventName, parameters);
  }

  setUserProperties(properties: Record<string, string | number | boolean>) {
    if (!this.initialized || !this.consentGiven) return;

    // Meta Pixel doesn't have a direct equivalent to user properties
    // But we can use custom parameters in events
    ReactPixel.track('CustomData', properties);
  }

  private mapEventName(eventName: string): string {
    const mapping: Record<string, string> = {
      'click': 'Click',
      'contact': 'Contact',
      'download': 'CompleteRegistration',
      'form_submit': 'Lead',
      'search': 'Search',
      'video_play': 'ViewContent',
      'page_view': 'PageView'
    };

    return mapping[eventName] || 'CustomEvent';
  }

  private mapEcommerceEvent(eventName: string): string {
    const mapping: Record<string, string> = {
      'purchase': 'Purchase',
      'add_to_cart': 'AddToCart',
      'add_to_wishlist': 'AddToWishlist',
      'begin_checkout': 'InitiateCheckout',
      'view_item': 'ViewContent',
      'view_item_list': 'ViewContent'
    };

    return mapping[eventName] || 'CustomEvent';
  }
}
