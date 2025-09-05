# WordPress to Next.js Migration Plan

## Current Situation
- WordPress site running on: https://flair-plastic.hu
- Location: /home2/flairpla/public_html/
- Goal: Replace with Next.js multilingual site

## Migration Options

### Option 1: Staged Migration (RECOMMENDED)

#### Step 1: Create Staging Environment
1. Create a subdomain in cPanel: `new.flair-plastic.hu`
2. Deploy Next.js to subdomain directory: `/home2/flairpla/new.flair-plastic.hu/public_html/`
3. Test thoroughly at: https://new.flair-plastic.hu
4. Once satisfied, switch domains

#### Step 2: Domain Switch
1. Backup WordPress: `/home2/flairpla/backup-wordpress/`
2. Move WordPress files out of public_html
3. Copy Next.js files from subdomain to main public_html
4. Update DNS if needed

### Option 2: Direct Replacement

#### Preparation Steps:
1. **CRITICAL**: Backup WordPress site completely
2. Export any WordPress content you need
3. Download database backup
4. Test Next.js locally thoroughly

#### Deployment Steps:
1. Create repository in: `/home2/flairpla/public_html/`
2. Let deployment script handle the replacement
3. Configure Node.js application

## Repository Setup for Full Migration

### Git Repository Configuration:
- **Clone URL**: `git@github.com:Omj3579/my-multilingual-site.git`
- **Repository Path**: `/home2/flairpla/public_html/`
- **Repository Name**: `my-multilingual-site`

### Pre-Migration Checklist:
- [ ] Backup WordPress database
- [ ] Download all WordPress files
- [ ] Export any content/media you need
- [ ] Test Next.js application locally
- [ ] Set up SSH keys for GitHub
- [ ] Prepare Node.js environment

## Content Migration Considerations

### WordPress Content to Next.js:
1. **Pages**: Convert WordPress pages to Next.js pages/components
2. **Media**: Move images to Next.js public folder
3. **SEO**: Implement meta tags and structured data
4. **URLs**: Set up redirects for important WordPress URLs

### What You Keep:
- Domain name (flair-plastic.hu)
- cPanel hosting account
- Email accounts
- SSL certificates

### What Changes:
- WordPress → Next.js framework
- PHP → Node.js runtime
- MySQL database → Static/API-based content
- WordPress admin → Code-based content management
