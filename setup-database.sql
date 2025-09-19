-- ================================================
-- COPY AND PASTE THIS ENTIRE SCRIPT INTO SUPABASE SQL EDITOR
-- ================================================

-- Enable Row Level Security
ALTER DEFAULT PRIVILEGES GRANT ALL ON TABLES TO postgres, anon, authenticated, service_role;

-- ================================================
-- 1. CONTACT FORM SUBMISSIONS TABLE
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
    notes TEXT,
    assigned_to VARCHAR(255),
    
    CONSTRAINT contact_submissions_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT contact_submissions_language_check CHECK (language IN ('en', 'hu', 'de'))
);

-- ================================================
-- 2. QUOTE REQUESTS TABLE
-- ================================================
CREATE TABLE public.quote_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255) NOT NULL,
    message TEXT,
    cart_items JSONB NOT NULL,
    language VARCHAR(2) NOT NULL DEFAULT 'en',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'quoted', 'completed', 'cancelled')),
    quote_value DECIMAL(15,2),
    quote_sent_at TIMESTAMP WITH TIME ZONE,
    notes TEXT,
    assigned_to VARCHAR(255),
    
    CONSTRAINT quote_requests_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT quote_requests_language_check CHECK (language IN ('en', 'hu', 'de'))
);

-- ================================================
-- 3. NEWSLETTER SUBSCRIPTIONS TABLE
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
-- 4. CREATE INDEXES FOR PERFORMANCE
-- ================================================
-- Contact submissions indexes
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_status ON public.contact_submissions(status);
CREATE INDEX idx_contact_submissions_email ON public.contact_submissions(email);
CREATE INDEX idx_contact_submissions_language ON public.contact_submissions(language);

-- Quote requests indexes
CREATE INDEX idx_quote_requests_created_at ON public.quote_requests(created_at DESC);
CREATE INDEX idx_quote_requests_status ON public.quote_requests(status);
CREATE INDEX idx_quote_requests_email ON public.quote_requests(email);
CREATE INDEX idx_quote_requests_language ON public.quote_requests(language);

-- Newsletter subscriptions indexes
CREATE INDEX idx_newsletter_email ON public.newsletter_subscriptions(email);
CREATE INDEX idx_newsletter_status ON public.newsletter_subscriptions(status);
CREATE INDEX idx_newsletter_subscribed_at ON public.newsletter_subscriptions(subscribed_at DESC);

-- ================================================
-- 5. AUTO-UPDATE TIMESTAMPS
-- ================================================
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contact_submissions_updated_at
    BEFORE UPDATE ON public.contact_submissions
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_quote_requests_updated_at
    BEFORE UPDATE ON public.quote_requests
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ================================================
-- 6. ROW LEVEL SECURITY POLICIES
-- ================================================
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow public to insert (for form submissions)
CREATE POLICY "Allow public inserts" ON public.contact_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public inserts" ON public.quote_requests
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public inserts" ON public.newsletter_subscriptions
    FOR INSERT WITH CHECK (true);

-- Allow authenticated users to read (for admin dashboard)
CREATE POLICY "Allow authenticated read" ON public.contact_submissions
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated read" ON public.quote_requests
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated read" ON public.newsletter_subscriptions
    FOR SELECT USING (auth.role() = 'authenticated');