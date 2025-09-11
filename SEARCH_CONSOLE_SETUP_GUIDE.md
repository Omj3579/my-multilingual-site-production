# Search Console Setup Guide

## Overview

This guide covers how to set up Google Search Console and Bing Webmaster Tools for your multilingual site. These tools are essential for:

- 📊 **Performance Monitoring**: Track search rankings and clicks
- 🔍 **SEO Insights**: Identify optimization opportunities
- 🐛 **Issue Detection**: Find crawling and indexing problems
- 📈 **Search Analytics**: Understand search traffic patterns
- 🗺️ **Sitemap Submission**: Ensure all pages are indexed
- 🚨 **Alert System**: Get notified about critical issues

## Google Search Console Setup

### 1. Create Your Account
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Sign in with your Google account
3. Click "Add Property"

### 2. Property Setup Options

#### Option A: Domain Property (Recommended)
- Add your domain: `flair-plastic.hu`
- This covers all subdomains and protocols
- Requires DNS verification

#### Option B: URL Prefix Property
- Add specific URLs: `https://flair-plastic.hu`
- Easier to verify but more limited

### 3. Verification Methods

#### Method 1: HTML Meta Tag (Our Implementation)
1. Get your verification code from Search Console
2. Add it to your `.env.local`:
```bash
NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_CODE=your_verification_code_here
```
3. The verification meta tag will be automatically added to your site

#### Method 2: HTML File Upload
1. Download the verification HTML file
2. Upload to your `/public` folder
3. Verify ownership

#### Method 3: DNS Verification (For Domain Properties)
1. Add TXT record to your DNS
2. Use the provided verification string
3. Wait for DNS propagation

### 4. Post-Verification Setup

#### Submit Your Sitemaps
```
https://flair-plastic.hu/sitemap.xml
https://flair-plastic.hu/sitemap-0.xml (if paginated)
```

#### Set Preferred Domain
- Set your preferred URL version (with or without www)
- Configure international targeting for Hungary

## Bing Webmaster Tools Setup

### 1. Create Your Account
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters/)
2. Sign in with Microsoft account
3. Click "Add a site"

### 2. Add Your Website
1. Enter your site URL: `https://flair-plastic.hu`
2. Choose verification method

### 3. Verification Methods

#### Method 1: HTML Meta Tag (Our Implementation)
1. Get your verification code from Bing Webmaster Tools
2. Add it to your `.env.local`:
```bash
NEXT_PUBLIC_BING_WEBMASTER_CODE=your_verification_code_here
```
3. The verification meta tag will be automatically added to your site

#### Method 2: XML File Upload
1. Download the BingSiteAuth.xml file
2. Upload to your root domain
3. Verify ownership

### 4. Post-Verification Setup

#### Submit Your Sitemaps
- Navigate to "Sitemaps" section
- Submit: `https://flair-plastic.hu/sitemap.xml`

#### Configure Settings
- Set crawl control preferences
- Configure geographic targeting

## Environment Variables

Add these to your `.env.local` file:

```bash
# Google Search Console Verification
NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_CODE=your_64_character_verification_code

# Bing Webmaster Tools Verification  
NEXT_PUBLIC_BING_WEBMASTER_CODE=your_64_character_verification_code
```

## Verification Process

### For Google Search Console:
1. After adding the environment variable, deploy/restart your site
2. Go back to Search Console
3. Click "Verify" 
4. Verification should succeed immediately

### For Bing Webmaster Tools:
1. After adding the environment variable, deploy/restart your site
2. Go back to Bing Webmaster Tools
3. Click "Verify"
4. Verification should succeed immediately

## Important Features to Set Up

### Google Search Console

#### 1. International Targeting
- Go to Settings > International Targeting
- Set target country: Hungary
- Set target language: Hungarian (for hu pages)

#### 2. Sitemaps
- Submit all sitemap variants
- Monitor sitemap processing status
- Check for sitemap errors

#### 3. URL Inspection
- Test individual pages for indexing issues
- Request re-indexing for updated content

#### 4. Performance Reports
- Monitor search queries
- Track click-through rates
- Analyze position changes

### Bing Webmaster Tools

#### 1. Site Settings
- Configure crawl control
- Set preferred domain
- Enable/disable specific features

#### 2. SEO Reports
- Review SEO analyzer recommendations
- Monitor keyword rankings
- Track backlink profile

#### 3. Content Submission
- Use URL submission tool for new pages
- Submit updated content for re-crawling

## Multilingual Considerations

### Hreflang Implementation
Both tools will validate your hreflang implementation:
- English: `en` 
- Hungarian: `hu`

### Content Targeting
- Set appropriate geographic and language targeting
- Monitor performance by language
- Track international search queries

## Monitoring & Maintenance

### Weekly Tasks
- [ ] Check for new crawl errors
- [ ] Review performance reports
- [ ] Monitor sitemap processing
- [ ] Check for security issues

### Monthly Tasks  
- [ ] Analyze search query trends
- [ ] Review mobile usability reports
- [ ] Check Core Web Vitals
- [ ] Update sitemaps if needed

### Quarterly Tasks
- [ ] Comprehensive SEO audit
- [ ] Competitive analysis
- [ ] Link building assessment
- [ ] Technical SEO review

## Troubleshooting

### Common Issues

#### Verification Fails
- Clear browser cache
- Check environment variables are correct
- Ensure site is accessible
- Wait 24-48 hours for propagation

#### Sitemap Not Processing
- Verify sitemap is accessible at URL
- Check sitemap format (XML validity)
- Ensure all URLs are accessible
- Re-submit sitemap

#### Coverage Issues
- Check robots.txt blocking
- Verify canonical tags
- Review redirect chains
- Fix crawl errors

### Getting Help
- Google Search Console Help: [support.google.com/webmasters](https://support.google.com/webmasters)
- Bing Webmaster Help: [help.bingads.microsoft.com](https://help.bingads.microsoft.com)

## Next Steps

1. ✅ Add verification codes to `.env.local`
2. ✅ Deploy your site 
3. ✅ Verify ownership in both consoles
4. ✅ Submit sitemaps
5. ✅ Configure international targeting
6. ✅ Set up monitoring alerts
7. ✅ Schedule regular maintenance tasks

Your search console integration is now complete and ready for monitoring your site's search performance!
