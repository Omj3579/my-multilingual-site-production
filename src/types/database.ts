// Database Types for Supabase Integration
// Auto-generated types based on database schema

// Newsletter preferences type
export interface NewsletterPreferences {
  frequency?: 'daily' | 'weekly' | 'monthly'
  topics?: string[]
  format?: 'html' | 'text'
  [key: string]: unknown
}

// Product specifications type
export interface ProductSpecifications {
  material?: string
  dimensions?: string
  color?: string
  finish?: string
  [key: string]: unknown
}

export interface Database {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: string
          first_name: string | null
          last_name: string | null
          email: string
          company: string
          country: string
          message: string
          language: 'en' | 'hu' | 'de'
          created_at: string
          updated_at: string
          status: 'new' | 'in_progress' | 'resolved' | 'spam'
          priority: 'low' | 'medium' | 'high'
          notes: string | null
          assigned_to: string | null
        }
        Insert: {
          id?: string
          first_name?: string | null
          last_name?: string | null
          email: string
          company: string
          country: string
          message: string
          language?: 'en' | 'hu' | 'de'
          created_at?: string
          updated_at?: string
          status?: 'new' | 'in_progress' | 'resolved' | 'spam'
          priority?: 'low' | 'medium' | 'high'
          notes?: string | null
          assigned_to?: string | null
        }
        Update: {
          id?: string
          first_name?: string | null
          last_name?: string | null
          email?: string
          company?: string
          country?: string
          message?: string
          language?: 'en' | 'hu' | 'de'
          created_at?: string
          updated_at?: string
          status?: 'new' | 'in_progress' | 'resolved' | 'spam'
          priority?: 'low' | 'medium' | 'high'
          notes?: string | null
          assigned_to?: string | null
        }
      }
      quote_requests: {
        Row: {
          id: string
          full_name: string
          email: string
          phone: string | null
          company: string
          message: string | null
          cart_items: CartItem[]
          language: 'en' | 'hu' | 'de'
          created_at: string
          updated_at: string
          status: 'pending' | 'reviewing' | 'quoted' | 'completed' | 'cancelled'
          quote_value: number | null
          quote_sent_at: string | null
          notes: string | null
          assigned_to: string | null
        }
        Insert: {
          id?: string
          full_name: string
          email: string
          phone?: string | null
          company: string
          message?: string | null
          cart_items: CartItem[]
          language?: 'en' | 'hu' | 'de'
          created_at?: string
          updated_at?: string
          status?: 'pending' | 'reviewing' | 'quoted' | 'completed' | 'cancelled'
          quote_value?: number | null
          quote_sent_at?: string | null
          notes?: string | null
          assigned_to?: string | null
        }
        Update: {
          id?: string
          full_name?: string
          email?: string
          phone?: string | null
          company?: string
          message?: string | null
          cart_items?: CartItem[]
          language?: 'en' | 'hu' | 'de'
          created_at?: string
          updated_at?: string
          status?: 'pending' | 'reviewing' | 'quoted' | 'completed' | 'cancelled'
          quote_value?: number | null
          quote_sent_at?: string | null
          notes?: string | null
          assigned_to?: string | null
        }
      }
      newsletter_subscriptions: {
        Row: {
          id: string
          email: string
          language: 'en' | 'hu' | 'de'
          subscribed_at: string
          unsubscribed_at: string | null
          status: 'active' | 'unsubscribed' | 'bounced'
          preferences: NewsletterPreferences
          source: string
        }
        Insert: {
          id?: string
          email: string
          language?: 'en' | 'hu' | 'de'
          subscribed_at?: string
          unsubscribed_at?: string | null
          status?: 'active' | 'unsubscribed' | 'bounced'
          preferences?: NewsletterPreferences
          source?: string
        }
        Update: {
          id?: string
          email?: string
          language?: 'en' | 'hu' | 'de'
          subscribed_at?: string
          unsubscribed_at?: string | null
          status?: 'active' | 'unsubscribed' | 'bounced'
          preferences?: NewsletterPreferences
          source?: string
        }
      }
    }
    Views: {
      contact_stats: {
        Row: {
          total_submissions: number
          new_submissions: number
          in_progress: number
          resolved: number
          last_24h: number
          last_week: number
          last_month: number
        }
      }
      quote_stats: {
        Row: {
          total_requests: number
          pending_requests: number
          quoted_requests: number
          completed_requests: number
          avg_quote_value: number | null
          last_week: number
        }
      }
      newsletter_stats: {
        Row: {
          active_subscribers: number
          unsubscribed: number
          english_subscribers: number
          hungarian_subscribers: number
          german_subscribers: number
          new_this_month: number
        }
      }
    }
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}

// Form-specific types
export interface ContactFormData {
  firstName?: string
  lastName?: string
  email: string
  company: string
  country: string
  message: string
  language?: 'en' | 'hu' | 'de'
}

export interface QuoteFormData {
  fullName: string
  email: string
  phone?: string
  company: string
  message?: string
  cartItems: CartItem[]
  language?: 'en' | 'hu' | 'de'
}

export interface NewsletterFormData {
  email: string
  language?: 'en' | 'hu' | 'de'
  preferences?: NewsletterPreferences
  source?: string
}

export interface CartItem {
  id: string
  name: string | Record<string, string>
  code?: string
  quantity: number
  image?: string
  specifications?: ProductSpecifications
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface FormSubmissionResponse {
  id: string
  message: string
  success: boolean
}

// Utility types
export type SupportedLanguage = 'en' | 'hu' | 'de'
export type ContactStatus = 'new' | 'in_progress' | 'resolved' | 'spam'
export type QuoteStatus = 'pending' | 'reviewing' | 'quoted' | 'completed' | 'cancelled'
export type SubscriptionStatus = 'active' | 'unsubscribed' | 'bounced'
export type Priority = 'low' | 'medium' | 'high'