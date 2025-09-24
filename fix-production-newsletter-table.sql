-- ================================================
-- ADD MISSING NEWSLETTER SUBSCRIPTIONS TABLE TO PRODUCTION
-- ================================================
-- Copy and paste this script into your Supabase SQL Editor
-- This will add only the missing newsletter_subscriptions table

-- First check if the table exists (this will show an error if it doesn't exist - that's expected)
-- SELECT * FROM public.newsletter_subscriptions LIMIT 1;

-- ================================================
-- 1. CREATE NEWSLETTER SUBSCRIPTIONS TABLE
-- ================================================
CREATE TABLE public.newsletter_subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    language VARCHAR(2) NOT NULL DEFAULT 'en',
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    unsubscribed_at TIMESTAMP WITH TIME ZONE,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
    preferences JSONB DEFAULT '{}',
    source VARCHAR(50) DEFAULT 'website',
    
    CONSTRAINT newsletter_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT newsletter_language_check CHECK (language IN ('en', 'hu', 'de'))
);

-- ================================================
-- 2. CREATE INDEXES FOR PERFORMANCE
-- ================================================
CREATE INDEX idx_newsletter_email ON public.newsletter_subscriptions(email);
CREATE INDEX idx_newsletter_status ON public.newsletter_subscriptions(status);
CREATE INDEX idx_newsletter_subscribed_at ON public.newsletter_subscriptions(subscribed_at DESC);

-- ================================================
-- 3. ENABLE ROW LEVEL SECURITY
-- ================================================
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- ================================================
-- 4. CREATE SECURITY POLICIES
-- ================================================
-- Allow public to insert (for newsletter form submissions)
CREATE POLICY "Allow public inserts" ON public.newsletter_subscriptions
    FOR INSERT WITH CHECK (true);

-- Allow authenticated users to read (for admin dashboard)  
CREATE POLICY "Allow authenticated read" ON public.newsletter_subscriptions
    FOR SELECT USING (auth.role() = 'authenticated');

-- ================================================
-- 5. VERIFY THE TABLE WAS CREATED
-- ================================================
-- Check if the table now exists and show structure
SELECT 
    column_name, 
    data_type, 
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'newsletter_subscriptions' 
    AND table_schema = 'public'
ORDER BY ordinal_position;