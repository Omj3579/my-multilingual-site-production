# 🚀 PRODUCTION DEPLOYMENT CHECKLIST

## ❌ ISSUE: Newsletter Form Not Working on Live Site

**Root Cause**: Missing Supabase environment variables on production server

## ✅ SOLUTION: Configure Environment Variables

### 1. **Required Supabase Environment Variables**

Add these to your hosting platform (Vercel/Netlify/etc.):

```bash
# Supabase Configuration (REQUIRED for newsletter/contact forms)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 2. **How to Find These Values**

1. Go to https://app.supabase.com/projects
2. Select your project
3. Go to Settings → API
4. Copy the values:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **Project API Keys - anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Project API Keys - service_role** → `SUPABASE_SERVICE_ROLE_KEY`

### 3. **Platform-Specific Setup**

#### **For Vercel:**
1. Go to your project dashboard
2. Settings → Environment Variables
3. Add all three variables
4. Redeploy

#### **For Netlify:**
1. Site settings → Environment variables
2. Add all three variables
3. Redeploy

#### **For other platforms:**
Check their documentation for environment variable configuration.

### 4. **Verification Steps**

After adding environment variables:

1. **Redeploy** your site
2. **Check API endpoints** directly:
   - Visit: `https://yourdomain.com/api/newsletter` (should return "Method not allowed")
   - If you get 500 error, environment variables are missing
3. **Test newsletter form** on live site
4. **Check browser console** for any errors

## 🔍 **Troubleshooting**

### If still not working:

1. **Check build logs** for environment variable errors
2. **Test API endpoint directly** with curl/Postman
3. **Verify Supabase connection** in your dashboard
4. **Check database permissions** (RLS policies)

### Common Issues:
- ❌ Forgot to redeploy after adding environment variables
- ❌ Typos in environment variable names
- ❌ Using wrong API keys (staging vs production)
- ❌ Service role key not configured (most common)

## 📝 **Next Steps**
1. Add the three Supabase environment variables to your hosting platform
2. Redeploy the site  
3. Test the newsletter form
4. Report back if issues persist

---

**Note**: The `SUPABASE_SERVICE_ROLE_KEY` is the most critical one - without it, the newsletter API cannot access the database on the server side.