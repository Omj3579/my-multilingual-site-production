-- ================================================
-- Flair-Plastic Forms Database Schema
-- ================================================
-- Run this in your Supabase SQL Editor

-- Enable Row Level Security
ALTER DEFAULT PRIVILEGES GRANT ALL ON TABLES TO postgres, anon, authenticated, service_role;

-- ================================================
-- 1. CONTACT FORM SUBMISSIONS
-- ================================================
CREATE TABLE public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    country VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    language VARCHAR(2) NOT NULL DEFAULT 'en',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'spam')),
    priority VARCHAR(10) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
    notes TEXT, -- For admin notes
    assigned_to VARCHAR(255), -- For team assignment
    
    -- Add indexes for performance
    CONSTRAINT contact_submissions_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT contact_submissions_language_check CHECK (language IN ('en', 'hu', 'de'))
);

-- Add indexes
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_status ON public.contact_submissions(status);
CREATE INDEX idx_contact_submissions_email ON public.contact_submissions(email);
CREATE INDEX idx_contact_submissions_language ON public.contact_submissions(language);

-- ================================================
-- 2. QUOTE REQUESTS
-- ================================================
CREATE TABLE public.quote_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255) NOT NULL,
    message TEXT,
    cart_items JSONB NOT NULL, -- Store cart data as JSON
    language VARCHAR(2) NOT NULL DEFAULT 'en',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'quoted', 'completed', 'cancelled')),
    quote_value DECIMAL(15,2), -- For storing quote amount
    quote_sent_at TIMESTAMP WITH TIME ZONE,
    notes TEXT,
    assigned_to VARCHAR(255),
    
    CONSTRAINT quote_requests_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT quote_requests_language_check CHECK (language IN ('en', 'hu', 'de'))
);

-- Add indexes
CREATE INDEX idx_quote_requests_created_at ON public.quote_requests(created_at DESC);
CREATE INDEX idx_quote_requests_status ON public.quote_requests(status);
CREATE INDEX idx_quote_requests_email ON public.quote_requests(email);
CREATE INDEX idx_quote_requests_language ON public.quote_requests(language);

-- ================================================
-- 3. NEWSLETTER SUBSCRIPTIONS
-- ================================================
CREATE TABLE public.newsletter_subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    language VARCHAR(2) NOT NULL DEFAULT 'en',
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    unsubscribed_at TIMESTAMP WITH TIME ZONE,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
    preferences JSONB DEFAULT '{}', -- For future customization (frequency, topics, etc.)
    source VARCHAR(50) DEFAULT 'website', -- Track where they subscribed from
    
    CONSTRAINT newsletter_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT newsletter_language_check CHECK (language IN ('en', 'hu', 'de'))
);

-- Add indexes
CREATE INDEX idx_newsletter_email ON public.newsletter_subscriptions(email);
CREATE INDEX idx_newsletter_status ON public.newsletter_subscriptions(status);
CREATE INDEX idx_newsletter_subscribed_at ON public.newsletter_subscriptions(subscribed_at DESC);

-- ================================================
-- 4. TRIGGERS FOR UPDATED_AT
-- ================================================
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply triggers
CREATE TRIGGER update_contact_submissions_updated_at
    BEFORE UPDATE ON public.contact_submissions
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_quote_requests_updated_at
    BEFORE UPDATE ON public.quote_requests
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ================================================
-- 5. ROW LEVEL SECURITY (RLS)
-- ================================================
-- Enable RLS on all tables
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (for form submissions)
CREATE POLICY "Allow public inserts" ON public.contact_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public inserts" ON public.quote_requests
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public inserts" ON public.newsletter_subscriptions
    FOR INSERT WITH CHECK (true);

-- Admin can read everything (you'll need to set up authentication later)
CREATE POLICY "Allow admin read access" ON public.contact_submissions
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow admin read access" ON public.quote_requests
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow admin read access" ON public.newsletter_subscriptions
    FOR SELECT USING (auth.role() = 'authenticated');

-- ================================================
-- 6. SAMPLE DATA (OPTIONAL - FOR TESTING)
-- ================================================
-- Uncomment to insert some test data

/*
INSERT INTO public.contact_submissions (first_name, last_name, email, company, country, message, language) VALUES
('John', 'Doe', 'john.doe@example.com', 'Example Corp', 'USA', 'Interested in your injection molding services.', 'en'),
('Anna', 'Kovács', 'anna.kovacs@example.hu', 'Magyar Kft', 'Hungary', 'Szeretnék információt kérni a szolgáltatásaikról.', 'hu');

INSERT INTO public.newsletter_subscriptions (email, language) VALUES
('subscriber1@example.com', 'en'),
('subscriber2@example.hu', 'hu');
*/

-- ================================================
-- 7. USEFUL QUERIES FOR ADMIN DASHBOARD
-- ================================================
-- View to get contact form statistics
CREATE OR REPLACE VIEW public.contact_stats AS
SELECT 
    COUNT(*) as total_submissions,
    COUNT(*) FILTER (WHERE status = 'new') as new_submissions,
    COUNT(*) FILTER (WHERE status = 'in_progress') as in_progress,
    COUNT(*) FILTER (WHERE status = 'resolved') as resolved,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '24 hours') as last_24h,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') as last_week,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days') as last_month
FROM public.contact_submissions;

-- View to get quote request statistics  
CREATE OR REPLACE VIEW public.quote_stats AS
SELECT 
    COUNT(*) as total_requests,
    COUNT(*) FILTER (WHERE status = 'pending') as pending_requests,
    COUNT(*) FILTER (WHERE status = 'quoted') as quoted_requests,
    COUNT(*) FILTER (WHERE status = 'completed') as completed_requests,
    AVG(quote_value) FILTER (WHERE quote_value IS NOT NULL) as avg_quote_value,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') as last_week
FROM public.quote_requests;

-- Newsletter subscription statistics
CREATE OR REPLACE VIEW public.newsletter_stats AS
SELECT 
    COUNT(*) FILTER (WHERE status = 'active') as active_subscribers,
    COUNT(*) FILTER (WHERE status = 'unsubscribed') as unsubscribed,
    COUNT(*) FILTER (WHERE language = 'en') as english_subscribers,
    COUNT(*) FILTER (WHERE language = 'hu') as hungarian_subscribers,
    COUNT(*) FILTER (WHERE language = 'de') as german_subscribers,
    COUNT(*) FILTER (WHERE subscribed_at >= NOW() - INTERVAL '30 days') as new_this_month
FROM public.newsletter_subscriptions;

-- Grant access to views
GRANT SELECT ON public.contact_stats TO anon, authenticated;
GRANT SELECT ON public.quote_stats TO anon, authenticated;
GRANT SELECT ON public.newsletter_stats TO anon, authenticated;