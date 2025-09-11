# Analytics & Tracking Implementation Guide

## 🚀 Overview

Your multilingual site now has comprehensive analytics and tracking integration supporting:

### Analytics Platforms
- **Google Analytics 4 (GA4)** - Advanced web analytics
- **Google Tag Manager (GTM)** - Tag management system
- **Microsoft Clarity** - User behavior analytics
- **Hotjar** - User experience analytics
- **Mixpanel** - Product analytics
- **PostHog** - Open-source analytics
- **Vercel Analytics** - Performance analytics

### Marketing/Social Media Tracking
- **Meta/Facebook Pixel** - Social media advertising
- **Bing UET** - Microsoft advertising
- **LinkedIn Insight Tag** - LinkedIn advertising
- **Twitter/X Pixel** - Twitter advertising

## 🔧 Setup Instructions

### 1. Environment Variables
Copy `.env.example` to `.env.local` and add your tracking IDs:

```bash
# Google Analytics 4
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Tag Manager
NEXT_PUBLIC_GTM_CONTAINER_ID=GTM-XXXXXXX

# Meta/Facebook Pixel
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXX

# Microsoft Clarity
NEXT_PUBLIC_CLARITY_PROJECT_ID=XXXXXXXXX

# Hotjar
NEXT_PUBLIC_HOTJAR_ID=XXXXXXX
NEXT_PUBLIC_HOTJAR_SV=6

# Mixpanel
NEXT_PUBLIC_MIXPANEL_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# PostHog
NEXT_PUBLIC_POSTHOG_KEY=phc_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Bing/Microsoft UET
NEXT_PUBLIC_BING_UET_TAG_ID=XXXXXXX

# LinkedIn Insight Tag
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=XXXXXXX

# Twitter/X Pixel
NEXT_PUBLIC_TWITTER_PIXEL_ID=XXXXXXX
```

### 2. Getting Your Tracking IDs

#### Google Analytics 4
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create property → Set up GA4
3. Copy Measurement ID (format: G-XXXXXXXXXX)

#### Google Tag Manager
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create container
3. Copy Container ID (format: GTM-XXXXXXX)

#### Meta/Facebook Pixel
1. Go to [Facebook Business Manager](https://business.facebook.com/)
2. Events Manager → Pixels → Create Pixel
3. Copy Pixel ID

#### Microsoft Clarity
1. Go to [Microsoft Clarity](https://clarity.microsoft.com/)
2. Add new project
3. Copy Project ID

#### Hotjar
1. Go to [Hotjar](https://www.hotjar.com/)
2. Add new site
3. Copy Site ID and Version

#### Others
- **Mixpanel**: [mixpanel.com](https://mixpanel.com/) → Project Settings
- **PostHog**: [app.posthog.com](https://app.posthog.com/) → Project Settings
- **Bing UET**: [Microsoft Advertising](https://ads.microsoft.com/) → UET Tags
- **LinkedIn**: [LinkedIn Ads](https://www.linkedin.com/advertising/) → Insight Tag
- **Twitter**: [ads.twitter.com](https://ads.twitter.com/) → Events Manager

## 📊 Usage Examples

### Basic Event Tracking
```tsx
import { useAnalytics } from '@/lib/analytics/useAnalytics';

function MyComponent() {
  const { trackEvent } = useAnalytics();

  const handleButtonClick = () => {
    trackEvent({
      name: 'button_click',
      category: 'engagement',
      label: 'hero_cta',
      parameters: {
        page: 'home',
        section: 'hero'
      }
    });
  };

  return <button onClick={handleButtonClick}>Click me</button>;
}
```

### Ecommerce Tracking
```tsx
const { trackEcommerce } = useAnalytics();

// Track purchase
trackEcommerce({
  event: 'purchase',
  ecommerce: {
    currency: 'USD',
    value: 299.99,
    items: [{
      item_id: 'PROD123',
      item_name: 'Premium Widget',
      category: 'widgets',
      quantity: 1,
      price: 299.99
    }]
  }
});
```

### User Properties
```tsx
const { setUserProperties } = useAnalytics();

// Set user properties
setUserProperties({
  language: 'en',
  user_type: 'premium',
  company_size: '50-100'
});
```

### Cookie Consent Integration
```tsx
const { updateConsent } = useAnalytics();

// Update consent when user accepts/rejects cookies
updateConsent({
  analytics: true,
  marketing: false
});
```

## 🍪 Cookie Consent Integration

The system is integrated with your existing cookie settings page at `/policies/cookiesettings`. Users can:

1. Accept/reject analytics cookies (GA4, GTM, Clarity, Hotjar, etc.)
2. Accept/reject marketing cookies (Meta Pixel, Bing, LinkedIn, Twitter)
3. Preferences are saved to localStorage
4. Analytics providers are enabled/disabled based on consent

## 🔄 Automatic Features

### Page View Tracking
- Automatically tracks page views on route changes
- Includes page title, URL, referrer, and language
- Respects cookie consent settings

### Performance Monitoring
- Vercel Analytics and Speed Insights included
- Automatic Core Web Vitals tracking
- Performance metrics sent to Google Analytics

## 🛠 Custom Events You Can Track

### Common Events
- `page_view` - Page visits
- `click` - Button/link clicks
- `contact` - Contact form submissions
- `download` - File downloads
- `search` - Search queries
- `video_play` - Video interactions
- `form_submit` - Form completions

### Ecommerce Events
- `purchase` - Completed purchases
- `add_to_cart` - Items added to cart
- `begin_checkout` - Checkout started
- `view_item` - Product page views
- `add_to_wishlist` - Wishlist additions

## 🎯 Best Practices

### 1. Event Naming
Use consistent, descriptive names:
```tsx
// Good
trackEvent({ name: 'contact_form_submit', category: 'lead_generation' })

// Avoid
trackEvent({ name: 'click' })
```

### 2. Parameters
Include relevant context:
```tsx
trackEvent({
  name: 'product_view',
  parameters: {
    product_id: 'PROD123',
    product_category: 'electronics',
    price: 299.99,
    language: router.locale
  }
})
```

### 3. Privacy Compliance
- Only track after consent is given
- Respect user privacy preferences
- Use anonymized data where possible
- Provide clear opt-out options

## 🚀 Next Steps

1. **Add your tracking IDs** to `.env.local`
2. **Test in development** - Check browser console for initialization messages
3. **Verify tracking** - Use browser extensions or platform debug tools
4. **Set up goals/conversions** in each platform
5. **Create custom dashboards** for your key metrics

## 🔍 Debugging

### Check if analytics are working:
```tsx
// In browser console
console.log(window.gtag); // Should show function
console.log(window.dataLayer); // Should show array
console.log(window.fbq); // Should show function (if Meta Pixel enabled)
```

### Common issues:
- **Scripts not loading**: Check network tab for blocked requests
- **Events not firing**: Verify consent is given and tracking IDs are correct
- **Cross-domain issues**: Ensure proper domain configuration in analytics platforms

## 📈 Advanced Features

### Custom Dimensions (GA4)
```tsx
trackEvent({
  name: 'page_view',
  parameters: {
    custom_dimension_1: 'premium_user',
    custom_dimension_2: router.locale
  }
})
```

### Conversion Tracking
Set up conversion goals in each platform using the events tracked by your site.

### Enhanced Ecommerce
The system supports full enhanced ecommerce tracking for Google Analytics 4.

---

🎉 **Your analytics setup is complete!** Start tracking user behavior and optimizing your multilingual site's performance.
