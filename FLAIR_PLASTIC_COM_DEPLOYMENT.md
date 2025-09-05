# Deployment to flair-plastic.com Domain

## Perfect Choice!
Using `flair-plastic.com` is ideal because:
- ✅ Clean domain with no existing WordPress files
- ✅ Separate from your main site (flair-plastic.hu)
- ✅ Professional domain for your Next.js application
- ✅ Safe testing environment

## cPanel Git Repository Setup

### 1. Repository Configuration
Use these exact settings in cPanel Git Version Control:

```
Clone URL: git@github.com:Omj3579/my-multilingual-site.git
Repository Path: /home2/flairpla/flair-plastic.com/
Repository Name: my-multilingual-site
```

### 2. No "Files Exist" Error
Since `flair-plastic.com` uses its own directory (`/home2/flairpla/flair-plastic.com/`), you won't get the "directory already contains files" error.

## Node.js Application Setup

### 1. Node.js Selector Configuration
After successful Git clone:

1. Go to cPanel → Software → Node.js Selector (or Node.js App)
2. Create New Application:
   - **Node.js Version**: 20.x
   - **Application Root**: `/home2/flairpla/flair-plastic.com/`
   - **Application URL**: `flair-plastic.com`
   - **Application Startup File**: `app.js`
   - **Environment Variables**:
     ```
     NODE_ENV=production
     PORT=3000
     NEXT_TELEMETRY_DISABLED=1
     ```

### 2. Domain Access
Your Next.js app will be available at:
```
https://flair-plastic.com
```

## Deployment Workflow

### Initial Setup
1. **Set up SSH keys** (using CPANEL_SSH_SETUP.md instructions)
2. **Create Git repository** with settings above
3. **Configure Node.js application**
4. **Test the deployment**

### Future Updates
```bash
# Local development
git add .
git commit -m "Update features"
git push origin master

# Automatic deployment via .cpanel.yml
# OR manually in cPanel Git interface:
# Pull or Deploy → Update from Remote → Deploy HEAD Commit
```

## Benefits of This Approach

### ✅ Advantages:
- **Zero risk** to your existing WordPress site
- **Clean testing environment** 
- **Professional domain** for your Next.js app
- **Full Next.js features** (SSR, API routes, i18n)
- **Easy rollback** if needed

### 🎯 Migration Path:
1. **Phase 1**: Deploy to `flair-plastic.com` ← (Current step)
2. **Phase 2**: Test and refine the Next.js application
3. **Phase 3**: When ready, switch DNS or redirect main domain

## Next Steps

1. **Commit current changes**:
   ```bash
   git add .
   git commit -m "Configure deployment for flair-plastic.com"
   git push origin master
   ```

2. **Set up SSH access** in cPanel (follow CPANEL_SSH_SETUP.md)

3. **Create Git repository** with the settings above

4. **Configure Node.js application** 

5. **Access your site** at https://flair-plastic.com

This approach gives you a perfect staging environment that's actually a live domain!
