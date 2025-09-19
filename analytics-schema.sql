-- Analytics Database Schema for Form Tracking and Metrics
-- Run this in your Supabase SQL Editor

-- Table to track form events and user interactions
CREATE TABLE IF NOT EXISTS form_events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    event_type VARCHAR(50) NOT NULL, -- 'form_view', 'form_start', 'form_submit', 'form_success', 'form_error'
    form_type VARCHAR(50) NOT NULL, -- 'contact', 'quote', 'newsletter'
    session_id VARCHAR(255), -- Browser session identifier
    user_agent TEXT,
    ip_address INET,
    referrer TEXT,
    page_url TEXT,
    language VARCHAR(10),
    country VARCHAR(100),
    device_type VARCHAR(50), -- 'desktop', 'mobile', 'tablet'
    browser VARCHAR(100),
    os VARCHAR(100),
    metadata JSONB, -- Additional event data
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Table for daily aggregated metrics
CREATE TABLE IF NOT EXISTS daily_metrics (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    date DATE NOT NULL,
    form_type VARCHAR(50) NOT NULL,
    total_views INTEGER DEFAULT 0,
    total_starts INTEGER DEFAULT 0,
    total_submissions INTEGER DEFAULT 0,
    total_successes INTEGER DEFAULT 0,
    total_errors INTEGER DEFAULT 0,
    unique_visitors INTEGER DEFAULT 0,
    conversion_rate DECIMAL(5,2), -- Calculated as (successes / views) * 100
    completion_rate DECIMAL(5,2), -- Calculated as (submissions / starts) * 100
    languages JSONB, -- Language breakdown: {"en": 10, "hu": 5}
    countries JSONB, -- Country breakdown
    devices JSONB, -- Device type breakdown
    browsers JSONB, -- Browser breakdown
    referrers JSONB, -- Top referrer breakdown
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    UNIQUE(date, form_type)
);

-- Table for conversion funnel analysis
CREATE TABLE IF NOT EXISTS conversion_funnel (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    date DATE NOT NULL,
    form_type VARCHAR(50) NOT NULL,
    step_1_views INTEGER DEFAULT 0, -- Form page views
    step_2_starts INTEGER DEFAULT 0, -- Form interaction starts
    step_3_completes INTEGER DEFAULT 0, -- Form completion attempts
    step_4_successes INTEGER DEFAULT 0, -- Successful submissions
    drop_off_1_2 DECIMAL(5,2), -- % who started after viewing
    drop_off_2_3 DECIMAL(5,2), -- % who completed after starting
    drop_off_3_4 DECIMAL(5,2), -- % who succeeded after completing
    overall_conversion DECIMAL(5,2), -- Overall view-to-success rate
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    UNIQUE(date, form_type)
);

-- Table for real-time analytics summary
CREATE TABLE IF NOT EXISTS analytics_summary (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    period_type VARCHAR(20) NOT NULL, -- 'hourly', 'daily', 'weekly', 'monthly'
    period_start TIMESTAMP WITH TIME ZONE NOT NULL,
    period_end TIMESTAMP WITH TIME ZONE NOT NULL,
    total_form_views INTEGER DEFAULT 0,
    total_submissions INTEGER DEFAULT 0,
    total_successes INTEGER DEFAULT 0,
    avg_conversion_rate DECIMAL(5,2),
    top_performing_form VARCHAR(50),
    top_country VARCHAR(100),
    top_device VARCHAR(50),
    top_browser VARCHAR(100),
    trends JSONB, -- Trend data for charts
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    UNIQUE(period_type, period_start)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_form_events_created_at ON form_events(created_at);
CREATE INDEX IF NOT EXISTS idx_form_events_form_type ON form_events(form_type);
CREATE INDEX IF NOT EXISTS idx_form_events_event_type ON form_events(event_type);
CREATE INDEX IF NOT EXISTS idx_form_events_session_id ON form_events(session_id);

CREATE INDEX IF NOT EXISTS idx_daily_metrics_date ON daily_metrics(date);
CREATE INDEX IF NOT EXISTS idx_daily_metrics_form_type ON daily_metrics(form_type);

CREATE INDEX IF NOT EXISTS idx_conversion_funnel_date ON conversion_funnel(date);
CREATE INDEX IF NOT EXISTS idx_conversion_funnel_form_type ON conversion_funnel(form_type);

CREATE INDEX IF NOT EXISTS idx_analytics_summary_period ON analytics_summary(period_type, period_start);

-- Enable Row Level Security
ALTER TABLE form_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversion_funnel ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_summary ENABLE ROW LEVEL SECURITY;

-- Create policies for service role access (admin only)
CREATE POLICY "Enable read access for service role" ON form_events
FOR SELECT USING (auth.role() = 'service_role');

CREATE POLICY "Enable insert access for service role" ON form_events
FOR INSERT WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Enable read access for service role" ON daily_metrics
FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Enable read access for service role" ON conversion_funnel
FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Enable read access for service role" ON analytics_summary
FOR ALL USING (auth.role() = 'service_role');

-- Function to automatically update daily metrics
CREATE OR REPLACE FUNCTION update_daily_metrics()
RETURNS TRIGGER AS $$
BEGIN
    -- Insert or update daily metrics when form events are added
    INSERT INTO daily_metrics (date, form_type, total_views, total_starts, total_submissions, total_successes, total_errors)
    VALUES (
        DATE(NEW.created_at),
        NEW.form_type,
        CASE WHEN NEW.event_type = 'form_view' THEN 1 ELSE 0 END,
        CASE WHEN NEW.event_type = 'form_start' THEN 1 ELSE 0 END,
        CASE WHEN NEW.event_type = 'form_submit' THEN 1 ELSE 0 END,
        CASE WHEN NEW.event_type = 'form_success' THEN 1 ELSE 0 END,
        CASE WHEN NEW.event_type = 'form_error' THEN 1 ELSE 0 END
    )
    ON CONFLICT (date, form_type)
    DO UPDATE SET
        total_views = daily_metrics.total_views + CASE WHEN NEW.event_type = 'form_view' THEN 1 ELSE 0 END,
        total_starts = daily_metrics.total_starts + CASE WHEN NEW.event_type = 'form_start' THEN 1 ELSE 0 END,
        total_submissions = daily_metrics.total_submissions + CASE WHEN NEW.event_type = 'form_submit' THEN 1 ELSE 0 END,
        total_successes = daily_metrics.total_successes + CASE WHEN NEW.event_type = 'form_success' THEN 1 ELSE 0 END,
        total_errors = daily_metrics.total_errors + CASE WHEN NEW.event_type = 'form_error' THEN 1 ELSE 0 END,
        updated_at = now(),
        conversion_rate = CASE 
            WHEN (daily_metrics.total_views + CASE WHEN NEW.event_type = 'form_view' THEN 1 ELSE 0 END) > 0 
            THEN (daily_metrics.total_successes + CASE WHEN NEW.event_type = 'form_success' THEN 1 ELSE 0 END)::DECIMAL 
                 / (daily_metrics.total_views + CASE WHEN NEW.event_type = 'form_view' THEN 1 ELSE 0 END)::DECIMAL * 100
            ELSE 0 
        END,
        completion_rate = CASE 
            WHEN (daily_metrics.total_starts + CASE WHEN NEW.event_type = 'form_start' THEN 1 ELSE 0 END) > 0 
            THEN (daily_metrics.total_submissions + CASE WHEN NEW.event_type = 'form_submit' THEN 1 ELSE 0 END)::DECIMAL 
                 / (daily_metrics.total_starts + CASE WHEN NEW.event_type = 'form_start' THEN 1 ELSE 0 END)::DECIMAL * 100
            ELSE 0 
        END;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update metrics
DROP TRIGGER IF EXISTS trigger_update_daily_metrics ON form_events;
CREATE TRIGGER trigger_update_daily_metrics
    AFTER INSERT ON form_events
    FOR EACH ROW
    EXECUTE FUNCTION update_daily_metrics();

-- Sample view for easy analytics queries
CREATE OR REPLACE VIEW analytics_overview AS
SELECT 
    dm.date,
    dm.form_type,
    dm.total_views,
    dm.total_starts,
    dm.total_submissions,
    dm.total_successes,
    dm.conversion_rate,
    dm.completion_rate,
    dm.unique_visitors,
    CASE 
        WHEN dm.total_views > 0 
        THEN ROUND((dm.total_starts::DECIMAL / dm.total_views::DECIMAL) * 100, 2)
        ELSE 0 
    END as engagement_rate,
    dm.languages,
    dm.countries,
    dm.devices
FROM daily_metrics dm
ORDER BY dm.date DESC, dm.form_type;

-- Grant permissions to the service role
GRANT ALL ON form_events TO service_role;
GRANT ALL ON daily_metrics TO service_role;
GRANT ALL ON conversion_funnel TO service_role;
GRANT ALL ON analytics_summary TO service_role;
GRANT SELECT ON analytics_overview TO service_role;