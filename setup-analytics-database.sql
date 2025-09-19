-- Flair Plastic Analytics Database Setup Script
-- Run this script in your Supabase SQL Editor to set up analytics tracking

-- Create form_events table for tracking all form interactions
CREATE TABLE IF NOT EXISTS form_events (
    id SERIAL PRIMARY KEY,
    event_type VARCHAR(50) NOT NULL CHECK (event_type IN ('form_view', 'form_start', 'form_submit', 'form_success', 'form_error')),
    form_type VARCHAR(50) NOT NULL CHECK (form_type IN ('contact', 'quote', 'newsletter')),
    session_id VARCHAR(255),
    user_agent TEXT,
    ip_address VARCHAR(45),
    referrer TEXT,
    page_url TEXT,
    language VARCHAR(10),
    device_type VARCHAR(50),
    browser VARCHAR(100),
    os VARCHAR(100),
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create daily_metrics table for aggregated daily statistics
CREATE TABLE IF NOT EXISTS daily_metrics (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    form_type VARCHAR(50) NOT NULL,
    language VARCHAR(10) DEFAULT 'en',
    views INTEGER DEFAULT 0,
    starts INTEGER DEFAULT 0,
    submits INTEGER DEFAULT 0,
    successes INTEGER DEFAULT 0,
    errors INTEGER DEFAULT 0,
    unique_sessions INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(date, form_type, language)
);

-- Create conversion_funnel table for tracking user journey steps
CREATE TABLE IF NOT EXISTS conversion_funnel (
    id SERIAL PRIMARY KEY,
    session_id VARCHAR(255) NOT NULL,
    form_type VARCHAR(50) NOT NULL,
    step_name VARCHAR(100) NOT NULL,
    step_order INTEGER NOT NULL,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    language VARCHAR(10) DEFAULT 'en',
    metadata JSONB
);

-- Create analytics_summary table for real-time dashboard metrics
CREATE TABLE IF NOT EXISTS analytics_summary (
    id SERIAL PRIMARY KEY,
    metric_name VARCHAR(100) NOT NULL,
    metric_value NUMERIC NOT NULL,
    form_type VARCHAR(50),
    language VARCHAR(10),
    period_type VARCHAR(20) NOT NULL CHECK (period_type IN ('hourly', 'daily', 'weekly', 'monthly')),
    period_date TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(metric_name, form_type, language, period_type, period_date)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_form_events_created_at ON form_events(created_at);
CREATE INDEX IF NOT EXISTS idx_form_events_form_type ON form_events(form_type);
CREATE INDEX IF NOT EXISTS idx_form_events_event_type ON form_events(event_type);
CREATE INDEX IF NOT EXISTS idx_form_events_session_id ON form_events(session_id);
CREATE INDEX IF NOT EXISTS idx_form_events_language ON form_events(language);

CREATE INDEX IF NOT EXISTS idx_daily_metrics_date ON daily_metrics(date);
CREATE INDEX IF NOT EXISTS idx_daily_metrics_form_type ON daily_metrics(form_type);
CREATE INDEX IF NOT EXISTS idx_daily_metrics_language ON daily_metrics(language);

CREATE INDEX IF NOT EXISTS idx_conversion_funnel_session_id ON conversion_funnel(session_id);
CREATE INDEX IF NOT EXISTS idx_conversion_funnel_form_type ON conversion_funnel(form_type);
CREATE INDEX IF NOT EXISTS idx_conversion_funnel_step_order ON conversion_funnel(step_order);

CREATE INDEX IF NOT EXISTS idx_analytics_summary_period ON analytics_summary(period_type, period_date);
CREATE INDEX IF NOT EXISTS idx_analytics_summary_form_type ON analytics_summary(form_type);

-- Create a function to update daily metrics automatically
CREATE OR REPLACE FUNCTION update_daily_metrics()
RETURNS TRIGGER AS $$
BEGIN
    -- Update daily metrics when form events are inserted
    INSERT INTO daily_metrics (date, form_type, language, views, starts, submits, successes, errors, unique_sessions)
    VALUES (
        DATE(NEW.created_at),
        NEW.form_type,
        COALESCE(NEW.language, 'en'),
        CASE WHEN NEW.event_type = 'form_view' THEN 1 ELSE 0 END,
        CASE WHEN NEW.event_type = 'form_start' THEN 1 ELSE 0 END,
        CASE WHEN NEW.event_type = 'form_submit' THEN 1 ELSE 0 END,
        CASE WHEN NEW.event_type = 'form_success' THEN 1 ELSE 0 END,
        CASE WHEN NEW.event_type = 'form_error' THEN 1 ELSE 0 END,
        1
    )
    ON CONFLICT (date, form_type, language) DO UPDATE SET
        views = daily_metrics.views + CASE WHEN NEW.event_type = 'form_view' THEN 1 ELSE 0 END,
        starts = daily_metrics.starts + CASE WHEN NEW.event_type = 'form_start' THEN 1 ELSE 0 END,
        submits = daily_metrics.submits + CASE WHEN NEW.event_type = 'form_submit' THEN 1 ELSE 0 END,
        successes = daily_metrics.successes + CASE WHEN NEW.event_type = 'form_success' THEN 1 ELSE 0 END,
        errors = daily_metrics.errors + CASE WHEN NEW.event_type = 'form_error' THEN 1 ELSE 0 END,
        unique_sessions = (
            SELECT COUNT(DISTINCT session_id) 
            FROM form_events 
            WHERE DATE(created_at) = DATE(NEW.created_at) 
            AND form_type = NEW.form_type 
            AND language = COALESCE(NEW.language, 'en')
        ),
        updated_at = NOW();
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update daily metrics
DROP TRIGGER IF EXISTS trigger_update_daily_metrics ON form_events;
CREATE TRIGGER trigger_update_daily_metrics
    AFTER INSERT ON form_events
    FOR EACH ROW
    EXECUTE FUNCTION update_daily_metrics();

-- Create RLS (Row Level Security) policies for analytics tables
ALTER TABLE form_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversion_funnel ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_summary ENABLE ROW LEVEL SECURITY;

-- Create policy for service role (backend) to access analytics
CREATE POLICY "Service role can manage analytics" ON form_events
    FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role can manage daily metrics" ON daily_metrics
    FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role can manage conversion funnel" ON conversion_funnel
    FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role can manage analytics summary" ON analytics_summary
    FOR ALL USING (auth.role() = 'service_role');

-- Insert initial test data (optional - remove if not needed)
INSERT INTO form_events (event_type, form_type, session_id, language, device_type, browser, os)
VALUES 
    ('form_view', 'contact', 'test-session-1', 'en', 'desktop', 'chrome', 'windows'),
    ('form_start', 'contact', 'test-session-1', 'en', 'desktop', 'chrome', 'windows'),
    ('form_submit', 'contact', 'test-session-1', 'en', 'desktop', 'chrome', 'windows'),
    ('form_success', 'contact', 'test-session-1', 'en', 'desktop', 'chrome', 'windows'),
    ('form_view', 'newsletter', 'test-session-2', 'hu', 'mobile', 'safari', 'ios'),
    ('form_start', 'newsletter', 'test-session-2', 'hu', 'mobile', 'safari', 'ios'),
    ('form_success', 'newsletter', 'test-session-2', 'hu', 'mobile', 'safari', 'ios')
ON CONFLICT DO NOTHING;

-- Create a view for easy analytics querying
CREATE OR REPLACE VIEW analytics_dashboard AS
SELECT 
    dm.date,
    dm.form_type,
    dm.language,
    dm.views,
    dm.starts,
    dm.submits,
    dm.successes,
    dm.errors,
    dm.unique_sessions,
    -- Conversion rates
    CASE WHEN dm.views > 0 THEN ROUND((dm.successes::NUMERIC / dm.views::NUMERIC) * 100, 2) ELSE 0 END AS conversion_rate,
    CASE WHEN dm.starts > 0 THEN ROUND((dm.successes::NUMERIC / dm.starts::NUMERIC) * 100, 2) ELSE 0 END AS completion_rate,
    CASE WHEN dm.submits > 0 THEN ROUND((dm.successes::NUMERIC / dm.submits::NUMERIC) * 100, 2) ELSE 0 END AS success_rate
FROM daily_metrics dm
ORDER BY dm.date DESC, dm.form_type, dm.language;

-- Grant access to the analytics view
GRANT SELECT ON analytics_dashboard TO service_role;

COMMENT ON TABLE form_events IS 'Stores individual form interaction events for analytics tracking';
COMMENT ON TABLE daily_metrics IS 'Aggregated daily statistics for form performance tracking';
COMMENT ON TABLE conversion_funnel IS 'Tracks user journey steps through form conversion process';
COMMENT ON TABLE analytics_summary IS 'Real-time summary metrics for dashboard display';
COMMENT ON VIEW analytics_dashboard IS 'Consolidated view of analytics data with calculated conversion rates';

-- Success message
SELECT 'Flair Plastic Analytics database setup completed successfully!' AS status;